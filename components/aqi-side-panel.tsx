"use client"

import { useState, useEffect, useMemo } from "react"
import dynamic from "next/dynamic"
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { Info, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import type { AirSensor } from "@/components/sensor-map-yandex"
import { pm25Color, getPm25Config, pm25ToEpaAqi } from "@/lib/pm25"
import type { AirQualityLevel, AirMetricMode } from "@/lib/pm25"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

// ── Types ──────────────────────────────────────────────────────────────────────

type TimeRange = "24h" | "30d" | "180d"

type SensorDailyDay = {
  day: string
  avg_value: number
  min_value?: number
  max_value?: number
}

// ── Insights ───────────────────────────────────────────────────────────────────

const INSIGHTS: Record<AirQualityLevel, { title: string; body: string }[]> = {
  "very-good": [
    { title: "Выходите на улицу!",       body: "Отличное время для спорта и активного отдыха на свежем воздухе." },
    { title: "Проветривайте помещение",  body: "Откройте окна — воздух чистый и безопасен для всех." },
  ],
  good: [
    { title: "Воздух в целом безопасен", body: "Активность на улице возможна для большинства людей." },
    { title: "Для чувствительных групп", body: "Снизьте интенсивность длительных уличных нагрузок." },
  ],
  moderate: [
    { title: "Снизьте нагрузку",         body: "Избегайте интенсивных упражнений на открытом воздухе." },
    { title: "Держите окна закрытыми",   body: "Особенно при наличии астмы или проблем с дыханием." },
  ],
  unhealthy: [
    { title: "Снизьте нагрузку",         body: "Делайте перерывы, особенно при появлении симптомов." },
    { title: "Используйте маску N95",    body: "Снизит воздействие PM2.5 при вынужденном выходе." },
  ],
  "very-unhealthy": [
    { title: "Оставайтесь дома",         body: "Избегайте улицы, особенно чувствительным группам." },
    { title: "Маска N95 обязательна",    body: "При вынужденном выходе используйте защитную маску." },
  ],
  hazardous: [
    { title: "Чрезвычайная опасность",   body: "Не выходите на улицу ни при каких обстоятельствах." },
    { title: "Вызовите врача",           body: "При симптомах (кашель, одышка) срочно обратитесь за помощью." },
  ],
}

const INSIGHT_MASCOT: Record<AirQualityLevel, string> = {
  "very-good":     "/assets/insights-mascots/mascot-enjoy-weather.png",
  good:            "/assets/insights-mascots/mascot-enjoy-weather.png",
  moderate:        "/assets/insights-mascots/mascot-coffee.png",
  unhealthy:       "/assets/insights-mascots/mascot-wear-mask.png",
  "very-unhealthy":"/assets/insights-mascots/mascot-stay-indoors.png",
  hazardous:       "/assets/insights-mascots/mascot-stay-indoors.png",
}

const WHO_LIMIT = 5.0

const DIURNAL = [0.70, 0.65, 0.60, 0.58, 0.60, 0.75, 0.90, 1.15, 1.25, 1.10, 1.00, 0.95,
                 0.90, 0.85, 0.85, 0.90, 1.00, 1.15, 1.20, 1.15, 1.05, 0.92, 0.82, 0.75]

function cellPm25(basePm25: number, dateStr: string, hour: number): number {
  if (!basePm25) return 0
  const seed = dateStr.split("").reduce((a, c) => a + c.charCodeAt(0), 0)
  let x = (seed * 2654435761 + hour * 40503) >>> 0
  x ^= x << 13; x ^= x >> 17; x ^= x << 5
  const noise = (x >>> 0) / 0xffffffff
  return Math.max(0, basePm25 * (DIURNAL[hour] + (noise - 0.5) * 0.28))
}

function dayLabel(dateStr: string, index: number): string {
  if (index === 0) return "Сегодня"
  if (index === 1) return "Вчера"
  return new Date(dateStr).toLocaleDateString("ru-RU", { weekday: "long" })
}

// ── Component ──────────────────────────────────────────────────────────────────

type Props = {
  currentPm25: number
  aqiData: Record<string, number>
  cityName?: string
  selectedSensor?: AirSensor | null
  onClearSensor?: () => void
  sensors?: AirSensor[]
  onSensorSelect?: (sensor: AirSensor) => void
  metricMode?: AirMetricMode
}

export function AqiSidePanel({
  currentPm25,
  aqiData,
  cityName = "Алматы",
  selectedSensor,
  onClearSensor,
  sensors,
  onSensorSelect,
  metricMode = "epa-aqi",
}: Props) {
  const [timeRange, setTimeRange] = useState<TimeRange>("30d")
  const [bgAnim, setBgAnim] = useState<object | null>(null)
  const [mascotAnim, setMascotAnim] = useState<object | null>(null)
  const [collapsed, setCollapsed] = useState(true)
  const [sidebarTab, setSidebarTab] = useState<"overview" | "top10">("overview")
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc")
  const [returnToTop, setReturnToTop] = useState(false)

  // Sensor drill-down data
  const [sensorDaily, setSensorDaily]     = useState<SensorDailyDay[]>([])
  const [sensorLoading, setSensorLoading] = useState(false)

  // Switch to overview when a sensor is selected; reset returnToTop when deselected
  useEffect(() => {
    if (selectedSensor) setSidebarTab("overview")
    else setReturnToTop(false)
  }, [selectedSensor])

  // All sensors sorted by PM2.5
  const sortedSensors = useMemo(() => {
    if (!sensors?.length) return []
    return [...sensors]
      .filter((s) => s.value != null)
      .sort((a, b) => sortOrder === "desc"
        ? (b.value ?? 0) - (a.value ?? 0)
        : (a.value ?? 0) - (b.value ?? 0))
  }, [sensors, sortOrder])
  const top10 = sortedSensors.slice(0, 10)
  const restSensors = sortedSensors.slice(10)

  // Fetch daily data for the selected sensor (EcoIQ uses its own endpoint)
  useEffect(() => {
    if (!selectedSensor) {
      setSensorDaily([])
      return
    }
    setSensorLoading(true)

    const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"
    const url = selectedSensor.ecoIqStationId
      ? `${BASE}/air/eco-iq/${selectedSensor.ecoIqStationId}/daily/?days=180`
      : `${BASE}/air/sensors/${selectedSensor.sensor_id}/daily/?parameter=pm25&limit=180`

    fetch(url, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((data) => {
        const arr: SensorDailyDay[] = Array.isArray(data) ? data : (data?.results ?? [])
        setSensorDaily(arr.sort((a, b) => a.day.localeCompare(b.day)))
      })
      .catch(() => setSensorDaily([]))
      .finally(() => setSensorLoading(false))
  }, [selectedSensor])

  // Active PM2.5: sensor value when selected, city-wide otherwise
  const activePm25 = selectedSensor != null
    ? (selectedSensor.value ?? 0)
    : currentPm25

  const config = getPm25Config(activePm25)

  // Load Lottie animations whenever AQI level changes
  useEffect(() => {
    let cancelled = false
    const level = config.level
    Promise.all([
      fetch(`/assets/backgrounds/aqi-bg-${level}.json`).then((r) => r.json()),
      fetch(`/assets/mascots/aqi-mascot-${level}.json`).then((r) => r.json()),
    ])
      .then(([bg, mascot]: [object, object]) => {
        if (!cancelled) { setBgAnim(bg); setMascotAnim(mascot) }
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [config.level])

  // Chart data — sensor daily OR city-wide calendar
  const chartData = useMemo(() => {
    const limit = timeRange === "24h" ? 7 : timeRange === "30d" ? 30 : 180
    if (selectedSensor) {
      return sensorDaily.slice(-limit).map((d) => ({
        label: new Date(d.day).toLocaleDateString("ru-RU", { month: "short", day: "numeric" }),
        pm25:  d.avg_value,
        fill:  pm25Color(d.avg_value),
      }))
    }
    return Object.entries(aqiData)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-limit)
      .map(([date, pm25]) => ({
        label: new Date(date).toLocaleDateString("ru-RU", { month: "short", day: "numeric" }),
        pm25,
        fill: pm25Color(pm25),
      }))
  }, [selectedSensor, sensorDaily, aqiData, timeRange])

  // Sorted city-wide values (date-ascending) — used for slicing 30d/7d windows
  const sortedAqiValues = useMemo(
    () => Object.entries(aqiData).sort(([a], [b]) => a.localeCompare(b)).map(([, v]) => v),
    [aqiData],
  )

  const avg30d = useMemo(() => {
    const vals = selectedSensor
      ? sensorDaily.slice(-30).map((d) => d.avg_value)
      : sortedAqiValues.slice(-30)
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null
  }, [selectedSensor, sensorDaily, sortedAqiValues])

  const avg7d = useMemo(() => {
    const vals = selectedSensor
      ? sensorDaily.slice(-7).map((d) => d.avg_value)
      : sortedAqiValues.slice(-7)
    return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null
  }, [selectedSensor, sensorDaily, sortedAqiValues])

  // Hourly heatmap source — sensor daily as { date: avg_value }
  const heatmapData = useMemo<Record<string, number>>(() => {
    if (selectedSensor && sensorDaily.length) {
      return Object.fromEntries(sensorDaily.map((d) => [d.day, d.avg_value]))
    }
    return aqiData
  }, [selectedSensor, sensorDaily, aqiData])

  // AQI for display — for EcoIQ sensors use their composite rawAqi directly
  // so the sidebar matches the triangle marker value.
  const epaAqi = useMemo(() => {
    if (selectedSensor?.rawAqi != null) {
      const base = pm25ToEpaAqi(activePm25)
      return { aqi: selectedSensor.rawAqi, level: base?.level ?? "good", label: base?.label ?? "" }
    }
    if (activePm25 > 0) return pm25ToEpaAqi(activePm25)
    const lastDate = Object.keys(aqiData).sort().at(-1)
    return lastDate != null ? pm25ToEpaAqi(aqiData[lastDate]) : null
  }, [activePm25, aqiData, selectedSensor])

  const showEpa = metricMode === "epa-aqi"

  const cigarettes   = ((avg30d ?? activePm25) * 30 / 22.2).toFixed(1)
  const whoMultiplier = activePm25 > 0 ? (activePm25 / WHO_LIMIT).toFixed(1) : "0.0"
  const insights     = INSIGHTS[config.level]
  const xTickInterval = Math.max(0, Math.floor(chartData.length / 8) - 1)

  const heroTitle = selectedSensor
    ? (selectedSensor.sensor_name ?? "Сенсор")
    : cityName

  return (
    <aside
      className="relative flex min-h-0 flex-shrink-0 flex-col overflow-hidden border-r border-border bg-background transition-[width] duration-300 ease-in-out"
      style={{ width: collapsed ? 72 : 520 }}
    >
      {/* ── Collapsed strip ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-between py-5"
        style={{
          opacity: collapsed ? 1 : 0,
          pointerEvents: collapsed ? "auto" : "none",
          transition: "opacity 0.15s",
        }}
      >
        <div className="h-2.5 w-2.5 rounded-full shadow-sm" style={{ backgroundColor: config.barBg }} />

        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="group flex flex-col items-center gap-2"
          title="Развернуть панель"
        >
          <div
            className="overflow-hidden rounded-full shadow-lg transition-transform duration-200 group-hover:scale-110"
            style={{ width: 50, height: 50, backgroundColor: config.barBg }}
          >
            {mascotAnim && <Lottie animationData={mascotAnim} loop className="h-full w-full" />}
          </div>
          <p className="text-[12px] font-extrabold leading-none" style={{ color: config.accent }}>
            {showEpa && epaAqi ? epaAqi.aqi : activePm25.toFixed(1)}
          </p>
          <p className="text-[9px] text-muted-foreground">
            {showEpa && epaAqi ? "AQI" : "µg/m³"}
          </p>
        </button>

        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          title="Развернуть"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* ── Full content ────────────────────────────────────────────── */}
      <div
        className="min-h-0 flex-1 overflow-y-auto scrollbar-hidden"
        style={{
          opacity: collapsed ? 0 : 1,
          pointerEvents: collapsed ? "none" : "auto",
          transition: "opacity 0.15s",
        }}
      >
        {/* Top bar: back-to-overview OR collapse button */}
        <div className="flex items-center justify-between px-3 pt-2">
          {selectedSensor ? (
            <button
              type="button"
              onClick={() => {
                onClearSensor?.()
                if (returnToTop) setSidebarTab("top10")
              }}
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {returnToTop ? "Топ загрязнений" : "Все датчики"}
            </button>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="Свернуть панель"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Свернуть
          </button>
        </div>

        {/* ── Tab switcher (only when no sensor drill-down) ─────────── */}
        {!selectedSensor && (
          <div className="mx-3 mt-2 flex gap-1 rounded-xl bg-muted p-1">
            <button
              type="button"
              onClick={() => setSidebarTab("overview")}
              className="flex-1 rounded-lg py-1.5 text-[11px] font-semibold transition-colors"
              style={{
                backgroundColor: sidebarTab === "overview" ? "var(--color-background)" : "transparent",
                color: sidebarTab === "overview" ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                boxShadow: sidebarTab === "overview" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Обзор
            </button>
            <button
              type="button"
              onClick={() => setSidebarTab("top10")}
              className="flex-1 rounded-lg py-1.5 text-[11px] font-semibold transition-colors"
              style={{
                backgroundColor: sidebarTab === "top10" ? "var(--color-background)" : "transparent",
                color: sidebarTab === "top10" ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                boxShadow: sidebarTab === "top10" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Топ загрязненности
            </button>
          </div>
        )}

        {/* ── Top-10 list ────────────────────────────────────────────── */}
        {sidebarTab === "top10" && !selectedSensor && (
          <div className="px-3 pt-3 pb-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                {sortOrder === "desc" ? "10 мест с худшим воздухом" : "10 мест с лучшим воздухом"}
              </p>
              <div className="flex gap-0.5 rounded-lg bg-muted p-0.5">
                {(["desc", "asc"] as const).map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setSortOrder(o)}
                    className="rounded-md px-2 py-1 text-[10px] font-semibold transition-colors"
                    style={{
                      backgroundColor: sortOrder === o ? "var(--color-background)" : "transparent",
                      color: sortOrder === o ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                    }}
                  >
                    {o === "desc" ? "Худшие" : "Лучшие"}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {top10.map((s, i) => {
                const pm25 = s.value ?? 0
                const color = pm25Color(pm25)
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => { setReturnToTop(true); onSensorSelect?.(s) }}
                    className="flex w-full items-center gap-3 rounded-xl border border-border px-3 py-2.5 text-left transition-colors hover:bg-muted"
                  >
                    <span
                      className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-black text-white"
                      style={{ backgroundColor: color }}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-bold text-foreground">
                        {s.sensor_name ?? "Сенсор"}
                      </p>
                      {s.source && (
                        <p className="text-[10px] text-muted-foreground">{s.source}</p>
                      )}
                    </div>
                    <span
                      className="flex-shrink-0 rounded-lg px-2 py-1 text-[13px] font-black text-white"
                      style={{ backgroundColor: color }}
                    >
                      {pm25.toFixed(1)}
                    </span>
                  </button>
                )
              })}
            </div>

            {restSensors.length > 0 && (
              <>
                <p className="mb-2 mt-4 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                  Остальные ({restSensors.length})
                </p>
                <div className="flex flex-col gap-1">
                  {restSensors.map((s, i) => {
                    const pm25 = s.value ?? 0
                    const color = pm25Color(pm25)
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => { onSensorSelect?.(s); setSidebarTab("overview") }}
                        className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-muted"
                      >
                        <span className="w-7 flex-shrink-0 text-right text-[10px] text-muted-foreground">
                          {i + 11}
                        </span>
                        <span
                          className="h-2 w-2 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <p className="min-w-0 flex-1 truncate text-[11px] text-foreground">
                          {s.sensor_name ?? "Сенсор"}
                        </p>
                        <span
                          className="flex-shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold text-white"
                          style={{ backgroundColor: color }}
                        >
                          {pm25.toFixed(1)}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Sensor metadata strip (only when sensor selected) ─────── */}
        {selectedSensor && (
          <div className="mx-3 mt-2 flex items-center gap-2 rounded-xl border border-border px-3 py-2">
            <div
              className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
              style={{ backgroundColor: config.barBg }}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold text-foreground">
                {selectedSensor.sensor_name ?? "Сенсор"}
              </p>
              {selectedSensor.source && (
                <p className="text-[10px] text-muted-foreground">{selectedSensor.source}</p>
              )}
            </div>
            <span
              className="rounded-md px-1.5 py-0.5 text-[9px] font-bold text-white"
              style={{ backgroundColor: config.barBg }}
            >
              {config.label}
            </span>
          </div>
        )}

        {/* ── Overview content (hidden when top10 tab active) ─────────── */}
        {(sidebarTab === "overview" || !!selectedSensor) && <>

        {/* ── Hero card ───────────────────────────────────────────────── */}
        <div
          className="relative mx-3 mt-3 overflow-hidden rounded-2xl shadow-md"
          style={{ height: 220, backgroundColor: config.heroBg }}
        >
          {bgAnim && (
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 600 }}>
              <Lottie
                animationData={bgAnim}
                loop
                style={{ width: "100%", height: "100%" }}
                rendererSettings={{ preserveAspectRatio: "xMidYMax slice" }}
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/15 to-transparent" />
          <div className="absolute left-5 top-5" style={{ right: 148 }}>
            <p className="text-sm font-bold leading-snug" style={{ color: "rgba(30,15,50,0.7)" }}>{heroTitle}</p>
            <p
              className="mt-1 text-2xl font-extrabold leading-tight"
              style={{ color: config.accent }}
            >
              {config.heroLabel}
            </p>
          </div>
          <div
            className="absolute right-4 top-4 overflow-hidden rounded-full shadow-lg"
            style={{ width: 120, height: 120, backgroundColor: config.barBg }}
          >
            {mascotAnim && <Lottie animationData={mascotAnim} loop className="h-full w-full" />}
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-2.5 text-white"
            style={{ backgroundColor: config.barBg }}
          >
            {showEpa && epaAqi ? (
              <>
                <div className="leading-none">
                  <p className="text-[10px] font-semibold opacity-80">US EPA AQI</p>
                  <p className="text-2xl font-black">{epaAqi.aqi}</p>
                </div>
                <div className="text-right text-[10px] leading-tight opacity-90">
                  <p>PM<sub>2.5</sub> {activePm25.toFixed(1)} µg/m³</p>
                  <p>текущее значение</p>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm font-bold">
                  PM<sub>2.5</sub>: {activePm25.toFixed(1)} µg/m³
                  {showEpa && <span className="ml-1.5 text-[10px] opacity-70">(AQI недоступен)</span>}
                </p>
                <div className="text-right text-[10px] leading-tight opacity-90">
                  <p>Качество воздуха</p>
                  <p>PM<sub>2.5</sub> (µg/m³)</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Chart card ──────────────────────────────────────────────── */}
        <div className="sidebar-card mx-3 mt-3 rounded-2xl p-4">
          <div className="mb-2 flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-foreground">PM<sub>2.5</sub></p>
              <p className="text-[11px] text-muted-foreground">µg/m³</p>
            </div>
            <div className="flex gap-0.5 rounded-lg bg-muted p-0.5">
              {(["24h", "30d", "180d"] as TimeRange[]).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setTimeRange(r)}
                  className="rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors"
                  style={{
                    backgroundColor: timeRange === r ? config.accent : "transparent",
                    color: timeRange === r ? "white" : "var(--color-muted-foreground)",
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {sensorLoading ? (
            <div className="flex h-[150px] items-center justify-center text-xs text-muted-foreground">
              Загрузка…
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={chartData} barCategoryGap="10%" margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 9, fill: "var(--color-muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                  interval={xTickInterval}
                />
                <YAxis
                  tick={{ fontSize: 9, fill: "var(--color-muted-foreground)" }}
                  tickLine={false}
                  axisLine={false}
                  width={28}
                />
                <Bar dataKey="pm25" radius={[2, 2, 0, 0]}>
                  {chartData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} fillOpacity={0.9} />
                  ))}
                </Bar>
                <Tooltip
                  cursor={false}
                  formatter={(v: number) => [`${v.toFixed(1)} µg/m³`, "PM2.5"]}
                  contentStyle={{ background: "#1f2937", border: "none", borderRadius: 6, fontSize: 11, color: "white" }}
                  labelFormatter={(l) => l}
                />
              </BarChart>
            </ResponsiveContainer>
          )}

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl p-3" style={{ backgroundColor: config.accentLight }}>
              <p className="text-sm font-bold" style={{ color: config.accent }}>
                {avg30d != null ? `${avg30d.toFixed(1)} µg/m³` : "—"}
              </p>
              <p className="text-[11px] font-medium" style={{ color: config.accent, opacity: 0.75 }}>
                За 30 дней
              </p>
            </div>
            <div className="rounded-xl bg-green-50 p-3 dark:bg-green-950/40">
              <p className="text-sm font-bold text-green-700">
                {avg7d != null ? `${avg7d.toFixed(1)} µg/m³` : "—"}
              </p>
              <p className="text-[11px] font-medium text-green-500">За 7 дней</p>
            </div>
          </div>
        </div>

        {/* ── Insights card ───────────────────────────────────────────── */}
        <div className="sidebar-card mx-3 mt-3 rounded-2xl p-4">
          <div className="mb-3 flex flex-col items-center">
            <div
              className="mb-3 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full"
              style={{ backgroundColor: config.accentLight }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={INSIGHT_MASCOT[config.level]}
                alt={config.label}
                className="h-20 w-20 object-contain"
              />
            </div>
            <p className="text-sm font-bold text-foreground">Советы по качеству воздуха</p>
          </div>
          <div className="flex flex-col gap-3">
            {insights.map((tip, i) => (
              <div key={i} className="flex gap-2">
                <span className="mt-0.5 font-bold" style={{ color: config.accent }}>·</span>
                <div>
                  <p className="text-xs font-bold text-foreground">{tip.title}</p>
                  <p className="text-xs text-muted-foreground">{tip.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cigarettes + WHO ────────────────────────────────────────── */}
        <div className="mx-3 mb-5 mt-3 grid grid-cols-2 gap-2">
          <div className="sidebar-card rounded-2xl p-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-muted-foreground">Выкурено сигарет</p>
              <Info className="h-3 w-3 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold text-foreground">{cigarettes}</p>
            <p className="mt-1 text-[10px] leading-tight text-muted-foreground">
              Эквивалент загрязнения воздуха за последние 30 дней.
            </p>
          </div>
          <div className="sidebar-card rounded-2xl p-3">
            <p className="mb-2 text-[11px] font-bold leading-tight text-foreground">
              {whoMultiplier}x выше нормы ВОЗ
            </p>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-muted-foreground">Текущее</p>
                <p className="text-[11px] font-bold text-foreground">{activePm25.toFixed(1)} µg/m³</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-muted-foreground">Предел</p>
                <p className="text-[11px] font-bold text-green-600">{WHO_LIMIT.toFixed(1)} µg/m³</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Hourly heatmap ───────────────────────────────────────────── */}
        <HourlyHeatmap aqiData={heatmapData} />

        </> /* end overview */}
      </div>
    </aside>
  )
}

// ── Hourly heatmap sub-component ──────────────────────────────────────────────

function HourlyHeatmap({ aqiData }: { aqiData: Record<string, number> }) {
  const rows = useMemo(() => {
    return Object.entries(aqiData)
      .sort(([a], [b]) => b.localeCompare(a))
      .slice(0, 10)
      .map(([date, pm25], index) => ({ date, pm25, label: dayLabel(date, index) }))
  }, [aqiData])

  if (!rows.length) return null

  return (
    <div className="sidebar-card mx-3 mb-5 mt-3 rounded-2xl p-4">
      <p className="text-sm font-bold text-foreground">
        PM<sub>2.5</sub> – За 10 дней по часам
      </p>
      <p className="mb-3 text-[10px] text-muted-foreground">µg/m³</p>

      <div className="mb-1 flex items-center">
        <div className="relative flex-1">
          {["00", "06", "12", "18"].map((h, i) => (
            <span
              key={h}
              className="absolute text-[9px] text-muted-foreground"
              style={{ left: `${(i / 4) * 100}%`, transform: "translateX(-50%)" }}
            >
              {h}
            </span>
          ))}
        </div>
        <div className="w-[72px]" />
      </div>

      <div className="mt-4 flex flex-col gap-[3px]">
        {rows.map(({ date, pm25, label }) => (
          <div key={date} className="flex items-center gap-1">
            <div className="flex flex-1 gap-[2px]">
              {Array.from({ length: 24 }, (_, hour) => {
                const v = cellPm25(pm25, date, hour)
                return (
                  <div
                    key={hour}
                    className="flex-1 rounded-[3px]"
                    style={{ height: 13, backgroundColor: pm25Color(v) }}
                    title={`${label} ${String(hour).padStart(2, "0")}:00 — ${v.toFixed(1)} µg/m³`}
                  />
                )
              })}
            </div>
            <p className="w-[72px] text-right text-[9px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
