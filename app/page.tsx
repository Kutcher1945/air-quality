"use client"

import dynamic from "next/dynamic"
import { useState, useEffect, useCallback, useMemo } from "react"
import { ChevronLeft, ChevronRight, Moon, Sun, Map, CalendarDays, BarChart2, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// ── Calendar day hover helpers ────────────────────────────────────────────────
function pm25ToHex(pm25: number): string {
  if (pm25 <= 5)   return "#3b82f6"
  if (pm25 <= 15)  return "#22c55e"
  if (pm25 <= 35)  return "#eab308"
  if (pm25 <= 55)  return "#ef4444"
  if (pm25 <= 150) return "#a855f7"
  return "#7f1d1d"
}
function pm25ToLabel(pm25: number): string {
  if (pm25 <= 5)   return "Отлично"
  if (pm25 <= 15)  return "Хорошо"
  if (pm25 <= 35)  return "Умеренно"
  if (pm25 <= 55)  return "Чувствительным группам"
  if (pm25 <= 150) return "Вредно"
  return "Очень вредно"
}
type HoveredDay = { date: string; pm25: number; x: number; y: number; above: boolean }
import { HeaderMenu } from "@/components/header-menu"
import { FilterDropdown } from "@/components/ui/filter-dropdown"
import { AqiSidePanel } from "@/components/aqi-side-panel"
import { AnalyticsTab } from "@/components/analytics-tab"
import { AiTab } from "@/components/ai-tab"
import type { Sensor, AirSensor, EcoIqSensor } from "@/components/sensor-map-yandex"
import type { AirMetricMode } from "@/lib/pm25"
import { pm25ToEpaAqi } from "@/lib/pm25"
import { TimeSlider } from "@/components/time-slider"

// Inverse US EPA 2024 PM2.5 AQI → concentration (µg/m³).
// Breakpoints mirror EPA_2024_BREAKPOINTS in lib/pm25.ts exactly so that
// pm25ToEpaAqi(aqiToPm25Approx(x)) ≈ x for any integer AQI x.
function aqiToPm25Approx(aqi: number): number {
  if (aqi <= 50)  return aqi * 9.0 / 50
  if (aqi <= 100) return 9.1  + (aqi - 51)  * (35.4  -   9.1) / 49
  if (aqi <= 150) return 35.5 + (aqi - 101) * (55.4  -  35.5) / 49
  if (aqi <= 200) return 55.5 + (aqi - 151) * (125.4 -  55.5) / 49
  if (aqi <= 300) return 125.5 + (aqi - 201) * (225.4 - 125.5) / 99
  return 225.5
}

function ecoIqToAirSensor(s: EcoIqSensor): AirSensor {
  const pm25 = s.pm25_concentration ?? (s.aqi != null ? aqiToPm25Approx(s.aqi) : null)
  return {
    id: 0,
    sensor_id: -1,
    sensor_name: `${s.name ?? "EcoIQ"} ▲`,
    source: "EcoIQ",
    parameter: "pm25",
    value: pm25,
    unit: "µg/m³",
    measured_at: s.measured_at,
    latitude: s.latitude,
    longitude: s.longitude,
    district_id: null,
    district_name: null,
    rawAqi: s.aqi,
    ecoIqStationId: s.id,
  }
}

interface AQIData {
  date: string
  avg_pm25: number
}

interface TimeSensor {
  id: number | string
  sensor_id: number | null
  name: string | null
  latitude: number
  longitude: number
  source: string
  values: (number | null)[]
}

interface TimeseriesData {
  hours: string[]
  sensors: TimeSensor[]
}

interface Statistics {
  total_days: number
  good_days: number
  moderate_days: number
  sensitive_days: number
  unhealthy_days: number
  very_unhealthy_days: number
  hazardous_days: number
  avg_pm25?: number
  max_pm25?: number
  min_pm25?: number
}

type ActiveTab = "map" | "calendar" | "analytics" | "ai"

const SensorMap = dynamic(() => import("@/components/sensor-map-yandex"), { ssr: false })

const normalizeApiStats = (apiStats: Record<string, unknown> | null | undefined): Statistics | null => {
  if (!apiStats) return null
  const pm25 = (apiStats.pm25 as Record<string, number>) || {}
  return {
    total_days: (apiStats.total_days as number) ?? 0,
    good_days: pm25.good_days ?? 0,
    moderate_days: pm25.moderate_days ?? 0,
    sensitive_days: pm25.sensitive_days ?? 0,
    unhealthy_days: pm25.unhealthy_days ?? 0,
    very_unhealthy_days: pm25.very_unhealthy_days ?? 0,
    hazardous_days: pm25.hazardous_days ?? 0,
    avg_pm25: pm25.avg ?? undefined,
    max_pm25: pm25.max ?? undefined,
    min_pm25: pm25.min ?? undefined,
  }
}

const computeStatisticsFromData = (data: Record<string, number>): Statistics | null => {
  const values = Object.values(data || {})
  if (!values.length) return null
  return {
    total_days: values.length,
    good_days: values.filter((v) => v <= 15).length,
    moderate_days: values.filter((v) => v > 15 && v <= 35).length,
    sensitive_days: values.filter((v) => v > 35 && v <= 55).length,
    unhealthy_days: values.filter((v) => v > 55 && v <= 150).length,
    very_unhealthy_days: values.filter((v) => v > 150 && v <= 250).length,
    hazardous_days: values.filter((v) => v > 250).length,
    avg_pm25: values.reduce((a, b) => a + b, 0) / values.length,
    max_pm25: Math.max(...values),
    min_pm25: Math.min(...values),
  }
}

const AQI_LEGEND = [
  { label: "Отлично",          range: "0–5",    className: "bg-aqi-good" },
  { label: "Хорошо",           range: "6–15",   className: "bg-aqi-moderate" },
  { label: "Умеренно",         range: "16–35",  className: "bg-aqi-sensitive" },
  { label: "Чувствительные",   range: "36–55",  className: "bg-aqi-unhealthy" },
  { label: "Вредно",           range: "56–150", className: "bg-aqi-very-unhealthy" },
  { label: "Очень вредно",     range: "150+",   className: "bg-aqi-hazardous" },
]

function getAQICategory(aqi: number) {
  if (aqi <= 5)   return { label: "Отлично",               color: "bg-aqi-good" }
  if (aqi <= 15)  return { label: "Хорошо",                color: "bg-aqi-moderate" }
  if (aqi <= 35)  return { label: "Умеренно",               color: "bg-aqi-sensitive" }
  if (aqi <= 55)  return { label: "Чувствительные группы",  color: "bg-aqi-unhealthy" }
  if (aqi <= 150) return { label: "Вредно",                 color: "bg-aqi-very-unhealthy" }
  return { label: "Очень вредно", color: "bg-aqi-hazardous" }
}

export default function AirQualityDashboard() {
  const { resolvedTheme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState<ActiveTab>("map")
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [sidebarAqiData, setSidebarAqiData] = useState<Record<string, number>>({})
  const [aqiData, setAqiData] = useState<Record<string, number>>({})
  const [statistics, setStatistics] = useState<Statistics | null>(null)
  const [loading, setLoading] = useState(true)
  const [sensors, setSensors] = useState<Sensor[]>([])
  const [sensorsLoading, setSensorsLoading] = useState(true)
  const [sensorsError, setSensorsError] = useState<string | null>(null)
  const [ecoIqSensors, setEcoIqSensors] = useState<EcoIqSensor[]>([])
  const [sensorSearch, setSensorSearch] = useState("")
  const [sourceFilter, setSourceFilter] = useState<string | "all">("all")
  const [districtFilter, setDistrictFilter] = useState<string | "all">("all")
  const [mounted, setMounted] = useState(false)
  const [hoveredDay, setHoveredDay] = useState<HoveredDay | null>(null)
  const [selectedSensor, setSelectedSensor] = useState<AirSensor | null>(null)
  const [metricMode, setMetricMode] = useState<AirMetricMode>("epa-aqi")
  const [timeseries, setTimeseries] = useState<TimeseriesData | null>(null)
  const [timeseriesLoading, setTimeseriesLoading] = useState(true)
  const [selectedDayIdx, setSelectedDayIdx] = useState<number | null>(null)

  // Build last-48-hours client-side so slider shows immediately before data loads.
  const timeseriesDays = useMemo<string[]>(() => {
    if (timeseries) return timeseries.hours
    const now = new Date()
    now.setMinutes(0, 0, 0)
    return Array.from({ length: 48 }, (_, i) => {
      const d = new Date(now.getTime() - (47 - i) * 3600_000)
      return d.toISOString().replace(/\.\d{3}Z$/, "+00:00")
    })
  }, [timeseries])

  const MIN_YEAR = 2019
  const MAX_YEAR = new Date().getFullYear()
  const themeIsDark = resolvedTheme === "dark"

  const fetchSensors = useCallback(async () => {
    try {
      setSensorsLoading(true)
      setSensorsError(null)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"}/air/current/?parameter=pm25&limit=500`,
        { headers: { Accept: "application/json" } },
      )
      if (!response.ok) throw new Error(`Sensors API returned ${response.status}`)
      const payload = await response.json()
      const rawSensors: Sensor[] = Array.isArray(payload) ? payload : payload?.results || []
      setSensors(rawSensors.filter((s) => s.latitude != null && s.longitude != null))
    } catch {
      setSensors([])
      setSensorsError("Не удалось загрузить список сенсоров")
    } finally {
      setSensorsLoading(false)
    }
  }, [])

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"}/ecology/api/air-quality-calendar/?year=${currentYear}`,
          { headers: { Accept: "application/json" } },
        )
        if (!response.ok) throw new Error(`API returned ${response.status}`)
        if (!response.headers.get("content-type")?.includes("application/json"))
          throw new Error("Response is not JSON")
        const result = await response.json()
        const processedData: Record<string, number> = {}
        result.data?.forEach((item: AQIData) => {
          if (item.avg_pm25 != null) processedData[item.date] = item.avg_pm25
        })
        setAqiData(processedData)
        setStatistics(computeStatisticsFromData(processedData) || normalizeApiStats(result.stats))
      } catch {
        setAqiData({})
        setStatistics(null)
      } finally {
        setLoading(false)
      }
    }
    fetchAirQuality()
  }, [currentYear])

  // Sidebar always shows rolling data across current + previous year (independent of calendar tab)
  useEffect(() => {
    const thisYear = new Date().getFullYear()
    const prevYear = thisYear - 1
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"}/ecology/api/air-quality-calendar/?year=${prevYear}`, { headers: { Accept: "application/json" } }).then((r) => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"}/ecology/api/air-quality-calendar/?year=${thisYear}`, { headers: { Accept: "application/json" } }).then((r) => r.json()),
    ])
      .then(([prev, curr]) => {
        const merged: Record<string, number> = {}
        for (const result of [prev, curr]) {
          result.data?.forEach((item: AQIData) => {
            if (item.avg_pm25 != null) merged[item.date] = item.avg_pm25
          })
        }
        setSidebarAqiData(merged)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    fetchSensors()
    const id = setInterval(fetchSensors, 10 * 60 * 1000)
    return () => clearInterval(id)
  }, [fetchSensors])

  useEffect(() => {
    const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"
    const fetchEcoIq = () =>
      fetch(`${BASE}/air/eco-iq/current/`, { headers: { Accept: "application/json" } })
        .then((r) => r.json())
        .then((data: EcoIqSensor[]) => setEcoIqSensors(Array.isArray(data) ? data : []))
        .catch(() => {})
    fetchEcoIq()
    const id = setInterval(fetchEcoIq, 10 * 60 * 1000)
    return () => clearInterval(id)
  }, [])
  useEffect(() => {
    setTimeseriesLoading(true)
    const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"
    fetch(`${BASE}/air/analytics/map-timeseries-hourly/?hours=48`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((data: TimeseriesData) => setTimeseries(data))
      .catch(() => {})
      .finally(() => setTimeseriesLoading(false))
  }, [])

  useEffect(() => { setMounted(true) }, [])

  const sources = useMemo(() => {
    const set = new Set<string>()
    sensors.forEach((s) => { if (s.source) set.add(s.source) })
    return Array.from(set).sort()
  }, [sensors])

  const districtNames = useMemo(() => {
    const set = new Set<string>()
    sensors.forEach((s) => { if (s.district_name) set.add(s.district_name) })
    return Array.from(set).sort()
  }, [sensors])

  const filteredSensors = useMemo(
    () =>
      sensors.filter((sensor) => {
        if (sourceFilter !== "all" && sensor.source !== sourceFilter) return false
        if (districtFilter !== "all" && sensor.district_name !== districtFilter) return false
        if (sensorSearch.trim()) {
          const term = sensorSearch.toLowerCase()
          if (
            !sensor.sensor_name?.toLowerCase().includes(term) &&
            !sensor.source?.toLowerCase().includes(term)
          )
            return false
        }
        return true
      }),
    [sensors, sourceFilter, districtFilter, sensorSearch],
  )

  // When a historical day is selected, override each sensor's value from the timeseries snapshot.
  // valueMap is keyed by air_initiative_sensors.id which equals AirSensor.sensor_id (the FK).
  const displaySensors = useMemo(() => {
    if (selectedDayIdx === null || !timeseries) return filteredSensors
    const valueMap: Record<number, number | null> = {}
    for (const tsSensor of timeseries.sensors.filter(s => s.source === "aai")) {
      if (tsSensor.sensor_id != null)
        valueMap[tsSensor.sensor_id] = tsSensor.values[selectedDayIdx] ?? null
    }
    return filteredSensors.map((s) => {
      const historical = valueMap[s.sensor_id as number]
      return historical !== undefined ? { ...s, value: historical } : s
    })
  }, [filteredSensors, selectedDayIdx, timeseries])

  const displayEcoIqSensors = useMemo(() => {
    if (selectedDayIdx === null || !timeseries) return ecoIqSensors
    const valueMap: Record<string, number | null> = {}
    for (const tsSensor of timeseries.sensors.filter(s => s.source === "iqair")) {
      valueMap[String(tsSensor.id)] = tsSensor.values[selectedDayIdx] ?? null
    }
    return ecoIqSensors.map((s) => {
      if (!(String(s.id) in valueMap)) return s
      const pm25 = valueMap[String(s.id)]
      const aqi  = pm25 != null ? (pm25ToEpaAqi(pm25)?.aqi ?? null) : null
      return { ...s, pm25_concentration: pm25, pm25_aqi: aqi, aqi }
    })
  }, [ecoIqSensors, selectedDayIdx, timeseries])

  const sensorsWithData = useMemo(
    () => sensors.filter((s) => s.value != null),
    [sensors],
  )

  const activeSensors = sensors

  const currentPm25 = useMemo(() => {
    const values = sensorsWithData
      .map((s) => s.value!)
      .filter((v): v is number => v != null)
      .sort((a, b) => a - b)
    if (!values.length) return statistics?.avg_pm25 ?? 0
    const mid = Math.floor(values.length / 2)
    return values.length % 2 === 0 ? (values[mid - 1] + values[mid]) / 2 : values[mid]
  }, [sensorsWithData, statistics])

  const lastCalendarDate = useMemo(() => {
    const dates = Object.keys(aqiData || {})
    if (!dates.length) return null
    return new Date(Math.max(...dates.map((d) => new Date(d).getTime()))).toISOString()
  }, [aqiData])

  const canGoPreviousYear = currentYear > MIN_YEAR
  const canGoNextYear = currentYear < MAX_YEAR

  const renderMonthCalendar = (month: number) => {
    const monthName = new Date(currentYear, month).toLocaleDateString("ru-RU", { month: "long" })
    const daysInMonth = new Date(currentYear, month + 1, 0).getDate()
    const firstDay = new Date(currentYear, month, 1).getDay()
    const numRows = Math.ceil((firstDay + daysInMonth) / 7)

    return (
      <div key={month} className="flex min-h-0 flex-col rounded-lg border border-border bg-muted/50 p-1.5">
        <h3 className="mb-0.5 shrink-0 text-center text-[10px] font-semibold capitalize text-foreground">
          {monthName}
        </h3>
        <div className="mb-0.5 grid shrink-0 grid-cols-7">
          {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((d) => (
            <div key={d} className="flex items-center justify-center py-0.5 text-[8px] font-semibold text-muted-foreground">
              {d}
            </div>
          ))}
        </div>
        <div
          className="min-h-0 flex-1 grid grid-cols-7 gap-[2px]"
          style={{ gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: firstDay }, (_, i) => (
            <div key={`e-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1
            const dateStr = `${currentYear}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
            const aqi = aqiData[dateStr]
            const category = aqi != null ? getAQICategory(aqi) : null
            return (
              <div
                key={day}
                className={`relative flex flex-col items-center justify-center rounded-[3px] text-white transition-transform duration-100 ${
                  category ? `${category.color} cursor-pointer hover:z-10 hover:scale-[1.18] hover:shadow-lg` : "bg-muted/30"
                }`}
                onMouseEnter={aqi != null ? (e) => {
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                  const tw = 228
                  const th = 195
                  const gap = 10
                  let x = rect.left + rect.width / 2 - tw / 2
                  if (x < 8) x = 8
                  if (x + tw > window.innerWidth - 8) x = window.innerWidth - tw - 8
                  const above = rect.top > th + 20
                  const y = above ? rect.top - th - gap : rect.bottom + gap
                  setHoveredDay({ date: dateStr, pm25: aqi, x, y, above })
                } : undefined}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <span className="text-[9px] font-semibold leading-none">{day}</span>
                {aqi != null && (
                  <span className="text-[8px] font-bold leading-none opacity-90">{aqi.toFixed(0)}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <HeaderMenu />

      {/* ── Full-height layout below header ─────────────────────────── */}
      <div className="flex min-h-0 flex-1">
        {/* AQI side panel — always visible */}
        <AqiSidePanel
          currentPm25={currentPm25}
          aqiData={sidebarAqiData}
          cityName="Алматы"
          selectedSensor={selectedSensor}
          onClearSensor={() => setSelectedSensor(null)}
          sensors={sensors}
          onSensorSelect={(s) => setSelectedSensor(s)}
          metricMode={metricMode}
        />

        {/* Right area: tab bar + content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Tab bar */}
          <div className="flex shrink-0 items-center gap-1 border-b border-border bg-background px-4">
            <button
              type="button"
              onClick={() => setActiveTab("map")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "map"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Map className="h-4 w-4" />
              Карта сенсоров
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("calendar")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "calendar"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <CalendarDays className="h-4 w-4" />
              Календарь
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "analytics"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <BarChart2 className="h-4 w-4" />
              Аналитика
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "ai"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              ИИ-анализ
            </button>

            {/* Right-aligned controls */}
            <div className="ml-auto flex items-center gap-3 py-2">
              {activeTab === "map" && (
                <>
                  {/* Metric mode toggle */}
                  <div className="flex items-center rounded-lg border border-border bg-muted/50 p-0.5">
                    {(["epa-aqi", "pm25"] as AirMetricMode[]).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setMetricMode(mode)}
                        className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                          metricMode === mode
                            ? "bg-background text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {mode === "epa-aqi" ? "US EPA AQI" : "PM2.5 µg/m³"}
                      </button>
                    ))}
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <input
                    type="text"
                    value={sensorSearch}
                    onChange={(e) => setSensorSearch(e.target.value)}
                    placeholder="Поиск…"
                    className="h-8 w-44 rounded-md border border-border bg-background px-3 text-sm"
                  />
                  <FilterDropdown
                    value={sourceFilter}
                    onChange={setSourceFilter}
                    options={sources.map((s) => ({ value: s, label: s }))}
                    allLabel="Все поставщики"
                    searchPlaceholder="Поиск поставщика…"
                  />
                  <FilterDropdown
                    value={districtFilter}
                    onChange={setDistrictFilter}
                    options={districtNames.map((d) => ({ value: d, label: d }))}
                    allLabel="Все районы"
                    searchPlaceholder="Поиск района…"
                  />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {filteredSensors.length} / {sensors.length} · {sensorsWithData.length} с PM2.5
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-muted-foreground"
                    onClick={() => { setSensorSearch(""); setSourceFilter("all"); setDistrictFilter("all") }}
                  >
                    Сброс
                  </Button>
                </>
              )}
              {activeTab === "calendar" && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentYear((y) => y - 1)}
                    disabled={!canGoPreviousYear}
                    className="h-8 border-border bg-transparent"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    {currentYear - 1}
                  </Button>
                  <span className="text-sm font-semibold text-foreground">{currentYear}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentYear((y) => y + 1)}
                    disabled={!canGoNextYear}
                    className="h-8 border-border bg-transparent"
                  >
                    {currentYear + 1}
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </>
              )}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(themeIsDark ? "light" : "dark")}
                className="h-8 w-8 border-border"
                aria-label="Toggle theme"
              >
                {mounted
                  ? themeIsDark
                    ? <Sun className="h-4 w-4" />
                    : <Moon className="h-4 w-4" />
                  : <div className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* ── Map tab ──────────────────────────────────────────────── */}
          <div className={`relative min-h-0 flex-1 ${activeTab === "map" ? "flex" : "hidden"}`}>
            {sensorsLoading ? (
              <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                Загрузка сенсоров…
              </div>
            ) : sensorsError ? (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                <p className="font-semibold text-red-500">{sensorsError}</p>
                <Button variant="outline" size="sm" onClick={fetchSensors}>
                  Попробовать снова
                </Button>
              </div>
            ) : (
              <SensorMap
                sensors={displaySensors}
                ecoIqSensors={displayEcoIqSensors}
                onSensorSelect={(s) => setSelectedSensor(s)}
                onEcoIqSelect={(s) => setSelectedSensor(ecoIqToAirSensor(s))}
                focusedSensor={selectedSensor}
                metricMode={metricMode}
                sourceFilter={sourceFilter}
              />
            )}

            {/* Time slider — renders immediately with client-side days, data loads in background */}
            {!sensorsLoading && !sensorsError && (
              <TimeSlider
                slots={timeseriesDays}
                selectedIdx={selectedDayIdx}
                onSelect={setSelectedDayIdx}
                loading={timeseriesLoading}
              />
            )}

            {/* Sensor count badge — bottom left corner of map */}
            {!sensorsLoading && !sensorsError && (
              <div className="absolute bottom-4 left-4 z-[1000] flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2 text-xs backdrop-blur-sm">
                <span className="font-semibold text-foreground">{activeSensors.length}</span>
                <span className="text-muted-foreground">активных</span>
                <span className="text-border">·</span>
                <span className="font-semibold text-foreground">{sensorsWithData.length}</span>
                <span className="text-muted-foreground">с PM2.5</span>
              </div>
            )}
          </div>

          {/* ── Analytics tab ────────────────────────────────────────── */}
          <div className={`min-h-0 flex-1 overflow-y-auto ${activeTab === "analytics" ? "block" : "hidden"}`}>
            <AnalyticsTab sensors={sensors} sensorsLoading={sensorsLoading} />
          </div>

          {/* ── AI tab ───────────────────────────────────────────────── */}
          <div className={`min-h-0 flex-1 overflow-y-auto ${activeTab === "ai" ? "block" : "hidden"}`}>
            <AiTab sensors={sensors} sensorsLoading={sensorsLoading} />
          </div>

          {/* ── Calendar tab ─────────────────────────────────────────── */}
          <div className={`min-h-0 flex-1 overflow-hidden flex-col px-3 pb-2 pt-3 ${activeTab === "calendar" ? "flex" : "hidden"}`}>

            {/* Stats row — compact */}
            {statistics && (
              <div className="mb-2 grid shrink-0 grid-cols-6 gap-2">
                {[
                  { label: "Всего дней",   value: statistics.total_days,              color: "text-foreground" },
                  { label: "Среднее PM2.5", value: statistics.avg_pm25?.toFixed(1) ?? "—", color: "text-foreground" },
                  { label: "Хорошие",      value: statistics.good_days,              color: "text-aqi-good" },
                  { label: "Умеренные",    value: statistics.moderate_days,           color: "text-aqi-moderate" },
                  { label: "Вредные",      value: statistics.unhealthy_days,          color: "text-aqi-unhealthy" },
                  { label: "Опасные",      value: statistics.hazardous_days,          color: "text-aqi-hazardous" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="rounded-lg border border-border bg-card px-3 py-2">
                    <p className="text-[10px] text-muted-foreground">{label}</p>
                    <p className={`text-xl font-bold leading-tight ${color}`}>{value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Year + data date */}
            <div className="mb-1.5 flex shrink-0 items-baseline gap-3">
              <span className="text-sm font-bold text-foreground">{currentYear}</span>
              {lastCalendarDate && (
                <span className="text-[11px] text-muted-foreground">
                  Данные по {new Date(lastCalendarDate).toLocaleDateString("ru-RU")}
                </span>
              )}
            </div>

            {/* Month grid — fills all remaining height, no scroll */}
            {loading ? (
              <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
                Загрузка данных…
              </div>
            ) : !Object.keys(aqiData).length ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-1">
                <p className="font-semibold text-red-500">Ошибка загрузки данных</p>
                <p className="text-sm text-muted-foreground">Убедитесь, что API доступен и возвращает JSON.</p>
              </div>
            ) : (
              <div className="min-h-0 flex-1 grid grid-cols-4 grid-rows-3 gap-2">
                {Array.from({ length: 12 }, (_, i) => renderMonthCalendar(i))}
              </div>
            )}

            {/* Legend — compact horizontal strip */}
            <div className="mt-1.5 flex shrink-0 items-center justify-center gap-4">
              {AQI_LEGEND.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className={`h-3 w-3 flex-shrink-0 rounded-sm ${item.className}`} />
                  <span className="text-[10px] text-muted-foreground">{item.label} {item.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Day hover tooltip ────────────────────────────────────────── */}
      {hoveredDay && (() => {
        const { date, pm25, x, y } = hoveredDay
        const hex = pm25ToHex(pm25)
        const label = pm25ToLabel(pm25)
        const whoRatio = (pm25 / 5.0)
        const barPct = Math.min(100, (pm25 / 60) * 100)
        const cigs = (pm25 / 22).toFixed(2)
        const fullDate = new Date(date).toLocaleDateString("ru-RU", {
          day: "numeric", month: "long", year: "numeric",
        })
        return (
          <div
            className="pointer-events-none fixed z-[9999]"
            style={{ left: x, top: y, width: 228 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              {/* Colored header strip */}
              <div className="px-4 py-2.5" style={{ backgroundColor: hex }}>
                <p className="text-[11px] font-semibold text-white/80">{fullDate}</p>
                <div className="flex items-end gap-1.5">
                  <span className="text-3xl font-black leading-none text-white">{pm25.toFixed(1)}</span>
                  <span className="mb-0.5 text-xs font-medium text-white/75">µg/m³</span>
                </div>
              </div>

              <div className="px-4 py-3 space-y-3">
                {/* AQI label badge */}
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: hex }} />
                  <span className="text-xs font-semibold text-foreground">{label}</span>
                </div>

                {/* WHO bar */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-muted-foreground">Норма ВОЗ 5.0 µg/m³</span>
                    <span className="text-[10px] font-bold" style={{ color: hex }}>{whoRatio.toFixed(1)}×</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${barPct}%`, backgroundColor: hex }}
                    />
                  </div>
                </div>

                {/* Cigarettes */}
                <div className="flex items-center gap-2 border-t border-border pt-2.5">
                  <span className="text-base">🚬</span>
                  <div>
                    <span className="text-sm font-bold text-foreground">{cigs}</span>
                    <span className="ml-1 text-[10px] text-muted-foreground">сигарет за день</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </div>
  )
}
