"use client"

import dynamic from "next/dynamic"
import { useState, useEffect, useCallback, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Sensor } from "@/components/sensor-map-yandex"

interface AQIData {
  date: string
  avg_pm25: number
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

const SensorMap = dynamic(() => import("@/components/sensor-map-yandex"), { ssr: false })

export default function AirQualityDashboard() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [aqiData, setAqiData] = useState<Record<string, number>>({})
  const [statistics, setStatistics] = useState<Statistics | null>(null)
  const [loading, setLoading] = useState(true)
  const [sensors, setSensors] = useState<Sensor[]>([])
  const [sensorsLoading, setSensorsLoading] = useState(true)
  const [sensorsError, setSensorsError] = useState<string | null>(null)
  const [sensorSearch, setSensorSearch] = useState("")
  const [districtFilter, setDistrictFilter] = useState<string | "all">("all")
  const [onlyActive, setOnlyActive] = useState(true)
  const [onlyWithData, setOnlyWithData] = useState(false)

  const MIN_YEAR = 2019
  const MAX_YEAR = new Date().getFullYear()
  const aqiLegend = [
    { label: "Хорошо", range: "0-15", className: "bg-aqi-good" },
    { label: "Умеренно", range: "16-35", className: "bg-aqi-moderate" },
    { label: "Чувствительные", range: "36-55", className: "bg-aqi-sensitive" },
    { label: "Вредно", range: "56-150", className: "bg-aqi-unhealthy" },
    { label: "Очень вредно", range: "151-250", className: "bg-aqi-very-unhealthy" },
    { label: "Опасно", range: "250+", className: "bg-aqi-hazardous" },
  ]

  const fetchSensors = useCallback(async () => {
    try {
      setSensorsLoading(true)
      setSensorsError(null)

      const response = await fetch(
        "https://admin.smartalmaty.kz/api/v1/ecology/air-quality-sensors/?active=true",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      )

      if (!response.ok) {
        throw new Error(`Sensors API returned ${response.status}`)
      }

      const payload = await response.json()
      const rawSensors: Sensor[] = Array.isArray(payload) ? payload : payload?.results || []
      const cleanedSensors = rawSensors.filter(
        (sensor) => sensor.latitude !== null && sensor.latitude !== undefined && sensor.longitude !== null && sensor.longitude !== undefined,
      )

      setSensors(cleanedSensors)
    } catch (error) {
      console.error("Failed to fetch sensor data:", error)
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
          `https://admin.smartalmaty.kz/api/v1/ecology/api/air-quality-calendar/?year=${currentYear}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        )

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`)
        }

        const contentType = response.headers.get("content-type")

        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Response is not JSON")
        }

        const result = await response.json()

        const processedData: Record<string, number> = {}
        result.data?.forEach((item: AQIData) => {
          processedData[item.date] = item.avg_pm25
        })

        setAqiData(processedData)
        setStatistics(result.stats || null)
      } catch (error) {
        console.error("Failed to fetch air quality data:", error)
        setAqiData({})
        setStatistics(null)
      } finally {
        setLoading(false)
      }
    }

    fetchAirQuality()
  }, [currentYear])

  useEffect(() => {
    fetchSensors()
  }, [fetchSensors])

  const districts = useMemo(() => {
    const set = new Set<string>()
    sensors.forEach((sensor) => {
      if (sensor.district) set.add(sensor.district)
    })
    return Array.from(set).sort()
  }, [sensors])

  const filteredSensors = useMemo(() => {
    return sensors.filter((sensor) => {
      if (onlyActive && sensor.is_active === false) return false
      if (districtFilter !== "all" && sensor.district !== districtFilter) return false
      if (onlyWithData) {
        const metric = sensor.latest_measurement
        if (!metric || (metric.pm25 === null || metric.pm25 === undefined)) return false
      }
      if (sensorSearch.trim()) {
        const term = sensorSearch.toLowerCase()
        const name = sensor.name?.toLowerCase() || ""
        const district = sensor.district?.toLowerCase() || ""
        if (!name.includes(term) && !district.includes(term)) return false
      }
      return true
    })
  }, [sensors, onlyActive, districtFilter, onlyWithData, sensorSearch])

  const activeSensors = useMemo(() => sensors.filter((sensor) => sensor.is_active !== false), [sensors])
  const sensorsWithData = useMemo(
    () => sensors.filter((sensor) => sensor.latest_measurement && sensor.latest_measurement.pm25 !== null && sensor.latest_measurement.pm25 !== undefined),
    [sensors],
  )

  const latestSensorUpdate = useMemo(() => {
    const timestamps = sensors
      .map((sensor) => sensor.latest_measurement?.datetime)
      .filter((dt): dt is string => Boolean(dt))
    if (!timestamps.length) return null
    const mostRecent = Math.max(...timestamps.map((dt) => new Date(dt).getTime()))
    return new Date(mostRecent).toISOString()
  }, [sensors])

  const resetFilters = () => {
    setSensorSearch("")
    setDistrictFilter("all")
    setOnlyActive(true)
    setOnlyWithData(false)
  }

  const generateMockData = () => {
    const mockData: Record<string, number> = {}
    const startDate = new Date(2019, 0, 9) // January 9, 2019
    const endDate = new Date()

    let currentDate = new Date(currentYear, 0, 1)
    const yearEnd = new Date(currentYear, 11, 31)

    if (currentDate < startDate) {
      currentDate = new Date(startDate)
    }

    while (currentDate <= yearEnd && currentDate <= endDate) {
      if (currentDate >= startDate) {
        const dateStr = currentDate.toISOString().split("T")[0]
        mockData[dateStr] = Math.floor(Math.random() * 300)
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }

    setAqiData(mockData)

    const values = Object.values(mockData)
    setStatistics({
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
    })
  }

  const getAQICategory = (aqi: number) => {
    if (aqi <= 15) return { label: "Хорошо", color: "bg-aqi-good", textColor: "text-white" }
    if (aqi <= 35) return { label: "Умеренно", color: "bg-aqi-moderate", textColor: "text-white" }
    if (aqi <= 55) return { label: "Чувствительные группы", color: "bg-aqi-sensitive", textColor: "text-white" }
    if (aqi <= 150) return { label: "Вредно", color: "bg-aqi-unhealthy", textColor: "text-white" }
    if (aqi <= 250) return { label: "Очень вредно", color: "bg-aqi-very-unhealthy", textColor: "text-white" }
    return { label: "Опасно", color: "bg-aqi-hazardous", textColor: "text-white" }
  }

  const getDaysInMonth = (month: number) => {
    return new Date(currentYear, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number) => {
    return new Date(currentYear, month, 1).getDay()
  }

  const previousYear = () => {
    if (currentYear > MIN_YEAR) {
      setCurrentYear(currentYear - 1)
    }
  }

  const nextYear = () => {
    if (currentYear < MAX_YEAR) {
      setCurrentYear(currentYear + 1)
    }
  }

  const canGoPreviousYear = currentYear > MIN_YEAR
  const canGoNextYear = currentYear < MAX_YEAR

  const renderMonthCalendar = (month: number) => {
    const monthName = new Date(currentYear, month).toLocaleDateString("ru-RU", { month: "long" })
    const daysInMonth = getDaysInMonth(month)
    const firstDay = getFirstDayOfMonth(month)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

    return (
      <div key={month} className="bg-muted/50 rounded-lg p-4 border border-border">
        <h3 className="text-center font-semibold text-foreground mb-3 text-sm capitalize">{monthName}</h3>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-foreground text-xs h-6 flex items-center justify-center"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {emptyDays.map((i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {days.map((day) => {
            const date = new Date(currentYear, month, day)
            const dateStr = `${currentYear}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
            const aqi = aqiData[dateStr]
            const category = aqi !== undefined ? getAQICategory(aqi) : null

            return (
              <div
                key={day}
                className={`aspect-square rounded-md border border-border flex flex-col items-center justify-center p-1 text-xs ${
                  category ? category.color : "bg-background"
                }`}
              >
                <span className={`font-semibold ${category ? category.textColor : "text-foreground"}`}>{day}</span>
                {aqi !== undefined && (
                  <span className={`text-xs font-bold ${category?.textColor || "text-foreground"}`}>
                    {aqi.toFixed(0)}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background p-4 md:p-6">
      <div className="w-full">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Календарь качества воздуха</h1>
          <p className="text-muted-foreground">Ежедневные данные мониторинга PM2.5 с 9 января 2019 по сегодня</p>
        </div>

        <Card className="mb-6 bg-card border-border">
          <CardHeader className="border-b border-border">
            <CardTitle className="text-2xl">Карта сенсоров воздуха</CardTitle>
            <CardDescription>Позиции станций из API /air-quality-sensors с последними измерениями</CardDescription>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Поиск по названию или поставщику</label>
                <input
                  type="text"
                  value={sensorSearch}
                  onChange={(e) => setSensorSearch(e.target.value)}
                  placeholder="Например, Алмалинский"
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground">Поставщик</label>
                <select
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value as string | "all")}
                  className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                >
                  <option value="all">Все поставщики</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-4">
                {/* <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={onlyActive}
                    onChange={(e) => setOnlyActive(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Только активные
                </label> */}
                {/* <label className="flex items-center gap-2 text-sm text-foreground">
                  <input
                    type="checkbox"
                    checked={onlyWithData}
                    onChange={(e) => setOnlyWithData(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Есть PM2.5
                </label> */}
              </div>
            </div>
            {sensorsLoading ? (
              <div className="flex h-[480px] items-center justify-center text-muted-foreground">Загрузка сенсоров…</div>
            ) : sensorsError ? (
              <div className="flex h-[480px] flex-col items-center justify-center gap-3 text-center">
                <p className="text-red-500 font-semibold">{sensorsError}</p>
                <Button variant="outline" size="sm" onClick={fetchSensors} className="border-border">
                  Попробовать снова
                </Button>
              </div>
            ) : (
              <SensorMap sensors={filteredSensors} />
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {statistics && (
            <>
              <Card className="bg-card border-border">
                <CardContent className="pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Всего дней</p>
                  <p className="text-2xl font-bold text-foreground">{statistics.total_days}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Среднее PM2.5</p>
                  <p className="text-2xl font-bold text-foreground">{statistics.avg_pm25?.toFixed(1) || "—"}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Хорошие дни</p>
                  <p className="text-2xl font-bold text-aqi-good">{statistics.good_days}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Умеренные дни</p>
                  <p className="text-2xl font-bold text-aqi-moderate">{statistics.moderate_days}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Вредные дни</p>
                  <p className="text-2xl font-bold text-aqi-unhealthy">{statistics.unhealthy_days}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Опасные дни</p>
                  <p className="text-2xl font-bold text-aqi-hazardous">{statistics.hazardous_days}</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <Card className="bg-card border-border">
          <CardHeader className="border-b border-border">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">{currentYear}</CardTitle>
                <CardDescription>Отслеживайте ежедневный уровень качества воздуха за весь год</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={previousYear}
                  className="border-border bg-transparent"
                  disabled={!canGoPreviousYear}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Предыдущий год
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextYear}
                  className="border-border bg-transparent"
                  disabled={!canGoNextYear}
                >
                  Следующий год
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Загрузка данных о качестве воздуха...</p>
              </div>
            ) : Object.keys(aqiData).length === 0 ? (
              <div className="text-center py-12">
                <p className="text-red-500 font-semibold mb-2">Ошибка загрузки данных</p>
                <p className="text-muted-foreground text-sm">
                  Проверьте консоль браузера для деталей. Убедитесь, что API доступен и возвращает JSON.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {Array.from({ length: 12 }, (_, i) => renderMonthCalendar(i))}
                </div>
              </>
            )}

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-aqi-good rounded" />
                <span className="text-sm text-foreground">Хорошо (0-15)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-aqi-moderate rounded" />
                <span className="text-sm text-foreground">Умеренно (16-35)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-aqi-sensitive rounded" />
                <span className="text-sm text-foreground">Чувствительные (36-55)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-aqi-unhealthy rounded" />
                <span className="text-sm text-foreground">Вредно (56-150)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-aqi-very-unhealthy rounded" />
                <span className="text-sm text-foreground">Очень вредно (151-250)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-aqi-hazardous rounded" />
                <span className="text-sm text-foreground">Опасно (250+)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
