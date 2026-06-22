"use client"

import { useState, useEffect, useMemo } from "react"
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ReferenceLine, LabelList,
} from "recharts"
import { Wifi, WifiOff } from "lucide-react"
import { pm25Color, pm25Label, getPm25Config, pm25ToEpaAqi } from "@/lib/pm25"
import type { AirSensor } from "@/components/sensor-map-yandex"

// ── Types ──────────────────────────────────────────────────────────────────────

interface DistrictDay { district_name: string; day: string; avg_pm25: number }
interface SensorHealth {
  id: number
  sensor_name: string
  district_name: string | null
  coverage_pct: number | null
  last_seen_hours: number | null
  avg_pm25_30d: number | null
}
interface HourlyPoint { hour: number; avg_pm25: number | null; p25: number | null; p75: number | null }
interface EcoIqCurrent {
  id: string
  name: string | null
  is_high_precision: boolean
  aqi: number | null
  pm25_concentration: number | null
  wind_speed: number | null
  wind_direction: number | null
}
interface ExtraParamPoint { sensor_id: number; value: number | null }

export interface AnalyticsTabProps {
  sensors: AirSensor[]
  sensorsLoading: boolean
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function medianOf(values: number[]): number | null {
  if (!values.length) return null
  const s = [...values].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m]
}

function getDayOfYear(dateStr: string): number {
  const d = new Date(dateStr)
  const start = new Date(d.getFullYear(), 0, 0)
  return Math.floor((d.getTime() - start.getTime()) / 86400000)
}

function rolling7(dateMap: Record<string, number>): { day: number; value: number }[] {
  const entries = Object.entries(dateMap).sort(([a], [b]) => a.localeCompare(b))
  if (entries.length < 7) return []
  return entries.slice(6).map((_, i) => {
    const window = entries.slice(i, i + 7)
    const avg = window.reduce((s, [, v]) => s + v, 0) / window.length
    return { day: getDayOfYear(entries[i + 6][0]), value: Math.round(avg * 10) / 10 }
  })
}

const COMPASS_LABELS = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"]
function degToCompass(deg: number): string {
  return COMPASS_LABELS[Math.round(deg / 45) % 8]
}

function coverageColor(pct: number | null): string {
  if (pct == null) return "#9ca3af"
  if (pct >= 90) return "#22c55e"
  if (pct >= 70) return "#eab308"
  return "#ef4444"
}

const DOY_MONTH_STARTS = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
const MONTH_LABELS = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]
const DISTRICT_COLORS = ["#3b82f6","#22c55e","#eab308","#ef4444","#a855f7","#f97316","#06b6d4","#ec4899"]

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"

function doyToMonth(v: number): string {
  for (let i = DOY_MONTH_STARTS.length - 1; i >= 0; i--) {
    if (v >= DOY_MONTH_STARTS[i]) return MONTH_LABELS[i]
  }
  return ""
}

// ── Summary card ───────────────────────────────────────────────────────────────

function KpiCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold leading-none" style={{ color }}>{value}</p>
      <p className="mt-1 text-[10px] text-muted-foreground">{sub}</p>
    </div>
  )
}

// ── Exceedance heatmap (custom SVG, GitHub contribution style) ─────────────────

function ExceedanceHeatmap({ data, year }: { data: Record<string, number>; year: number }) {
  const CELL = 12
  const STEP = CELL + 2

  const jan1 = new Date(year, 0, 1)
  const startDow = (jan1.getDay() + 6) % 7 // Mon = 0

  const days: { date: string; pm25: number | null }[] = []
  const d = new Date(year, 0, 1)
  while (d.getFullYear() === year) {
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    days.push({ date: iso, pm25: data[iso] ?? null })
    d.setDate(d.getDate() + 1)
  }

  const totalCols = Math.ceil((days.length + startDow) / 7)
  const svgW = totalCols * STEP
  const svgH = 7 * STEP

  const monthLabels: { col: number; label: string }[] = []
  let prevMonth = -1
  days.forEach((day, i) => {
    const m = parseInt(day.date.slice(5, 7), 10) - 1
    if (m !== prevMonth) {
      prevMonth = m
      monthLabels.push({ col: Math.floor((i + startDow) / 7), label: MONTH_LABELS[m] })
    }
  })

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH + 18}`}
      width="100%"
      style={{ display: "block", height: "auto" }}
    >
      {monthLabels.map(({ col, label }) => (
        <text key={label} x={col * STEP} y={svgH + 14} fontSize={9} fill="var(--muted-foreground)">{label}</text>
      ))}
      {days.map((day, i) => {
        const col = Math.floor((i + startDow) / 7)
        const row = (i + startDow) % 7
        return (
          <rect
            key={day.date}
            x={col * STEP} y={row * STEP}
            width={CELL} height={CELL}
            fill={day.pm25 != null ? pm25Color(day.pm25) : "var(--muted)"}
            rx={2}
            opacity={day.pm25 != null ? 0.85 : 0.2}
          >
            <title>{day.date}: {day.pm25 != null ? `${day.pm25.toFixed(1)} µg/m³ — ${pm25Label(day.pm25)}` : "нет данных"}</title>
          </rect>
        )
      })}
    </svg>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export function AnalyticsTab({ sensors }: AnalyticsTabProps) {
  const [calendarByYear, setCalendarByYear] = useState<Record<number, Record<string, number>>>({})
  const [districtDaily, setDistrictDaily] = useState<DistrictDay[]>([])
  const [sensorHealth, setSensorHealth] = useState<SensorHealth[]>([])
  const [hourlyData, setHourlyData] = useState<HourlyPoint[]>([])
  const [ecoIqSensors, setEcoIqSensors] = useState<EcoIqCurrent[]>([])
  const [temperature, setTemperature] = useState<ExtraParamPoint[]>([])
  const [humidity, setHumidity] = useState<ExtraParamPoint[]>([])
  const [co2, setCo2] = useState<ExtraParamPoint[]>([])
  const [tvoc, setTvoc] = useState<ExtraParamPoint[]>([])


  useEffect(() => {
    const thisYear = new Date().getFullYear()
    const years = [thisYear - 2, thisYear - 1, thisYear]

    Promise.all(
      years.map((y) =>
        fetch(`${BASE}/ecology/api/air-quality-calendar/?year=${y}`, { headers: { Accept: "application/json" } })
          .then((r) => r.json())
          .then((res) => ({ year: y, data: res.data || [] }))
          .catch(() => ({ year: y, data: [] }))
      )
    ).then((results) => {
      const byYear: Record<number, Record<string, number>> = {}
      for (const { year, data } of results) {
        byYear[year] = {}
        for (const item of data) {
          if (item.avg_pm25 != null) byYear[year][item.date] = item.avg_pm25
        }
      }
      setCalendarByYear(byYear)
    })

    fetch(`${BASE}/air/analytics/district-daily/?parameter=pm25&days=90`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((res) => setDistrictDaily(res.data || []))
      .catch(() => {})

    fetch(`${BASE}/air/analytics/sensor-health/?days=30`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((res) => setSensorHealth(res.data || []))
      .catch(() => {})

    fetch(`${BASE}/air/analytics/city-hourly/?parameter=pm25&days=30`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((res) => setHourlyData(res.data || []))
      .catch(() => {})

    fetch(`${BASE}/air/eco-iq/current/`, { headers: { Accept: "application/json" } })
      .then((r) => r.json())
      .then((res) => setEcoIqSensors(res.data ?? res ?? []))
      .catch(() => {})

    const extraParam = (parameter: string, setter: (v: ExtraParamPoint[]) => void) =>
      fetch(`${BASE}/air/current/?parameter=${parameter}&limit=500`, { headers: { Accept: "application/json" } })
        .then((r) => r.json())
        .then((res) => setter((res.results ?? res ?? []).map((d: { sensor_id: number; value: number | null }) => ({ sensor_id: d.sensor_id, value: d.value }))))
        .catch(() => {})

    extraParam("temperature", setTemperature)
    extraParam("humidity", setHumidity)
    extraParam("co2", setCo2)
    extraParam("tvoc", setTvoc)
  }, [])

  // ── Derived ──────────────────────────────────────────────────────────────────

  const activeSensors = useMemo(() => sensors.filter((s) => s.value != null), [sensors])

  const cityMedian = useMemo(() => medianOf(activeSensors.map((s) => s.value!)), [activeSensors])

  const epaAqi = useMemo(() => (cityMedian != null ? pm25ToEpaAqi(cityMedian) : null), [cityMedian])

  const whoExceedPct = useMemo(() => {
    if (!activeSensors.length) return null
    return Math.round((activeSensors.filter((s) => (s.value ?? 0) > 15).length / activeSensors.length) * 100)
  }, [activeSensors])

  const categoryDist = useMemo(() => {
    const counts: Record<string, { label: string; color: string; count: number }> = {
      "very-good":      { label: "Отлично",       color: "#3b82f6", count: 0 },
      "good":           { label: "Хорошо",         color: "#22c55e", count: 0 },
      "moderate":       { label: "Умеренно",       color: "#eab308", count: 0 },
      "unhealthy":      { label: "Чувствительным", color: "#ef4444", count: 0 },
      "very-unhealthy": { label: "Вредно",         color: "#a855f7", count: 0 },
      "hazardous":      { label: "Очень вредно",   color: "#7f1d1d", count: 0 },
    }
    for (const s of activeSensors) counts[getPm25Config(s.value!).level].count++
    return Object.values(counts).filter((c) => c.count > 0)
  }, [activeSensors])

  const districtRanking = useMemo(() => {
    const byDistrict = new Map<string, number[]>()
    for (const s of activeSensors) {
      if (!s.district_name) continue
      const arr = byDistrict.get(s.district_name) ?? []
      arr.push(s.value!)
      byDistrict.set(s.district_name, arr)
    }
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10)
    const avg7d = new Map<string, number>()
    for (const [name] of byDistrict) {
      const rows = districtDaily.filter((r) => r.district_name === name && r.day >= weekAgo)
      if (rows.length) avg7d.set(name, rows.reduce((s, r) => s + r.avg_pm25, 0) / rows.length)
    }
    return Array.from(byDistrict.entries())
      .map(([name, vals]) => {
        const med = medianOf(vals) ?? 0
        const avg = avg7d.get(name)
        const trend = avg == null ? "neutral" : med > avg * 1.1 ? "↑" : med < avg * 0.9 ? "↓" : "→"
        return { name, median: Math.round(med * 10) / 10, count: vals.length, trend }
      })
      .filter((d) => d.count >= 2)
      .sort((a, b) => b.median - a.median)
  }, [activeSensors, districtDaily])

  const thisYear = new Date().getFullYear()

  const yoyChartData = useMemo(() => {
    const years = [thisYear - 2, thisYear - 1, thisYear]
    const seriesByYear = years.map((y) => ({ year: y, series: rolling7(calendarByYear[y] ?? {}) }))
    const dayMap = new Map<number, Record<string, number>>()
    for (const { year, series } of seriesByYear) {
      for (const { day, value } of series) {
        if (!dayMap.has(day)) dayMap.set(day, {})
        dayMap.get(day)![String(year)] = value
      }
    }
    return Array.from(dayMap.entries())
      .sort(([a], [b]) => a - b)
      .map(([day, vals]) => ({ day, ...vals }))
  }, [calendarByYear, thisYear])

  const districtDynamics = useMemo(() => {
    if (!districtDaily.length) return { chartData: [], districts: [] as string[] }
    const districtNames = [...new Set(districtDaily.map((r) => r.district_name))].sort()
    const dayMap = new Map<string, Record<string, number>>()
    for (const row of districtDaily) {
      if (!dayMap.has(row.day)) dayMap.set(row.day, {})
      dayMap.get(row.day)![row.district_name] = row.avg_pm25
    }
    const chartData = Array.from(dayMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([day, vals]) => ({ day, ...vals }))
    return { chartData, districts: districtNames }
  }, [districtDaily])

  const healthSummary = useMemo(() => {
    const online = sensorHealth.filter((s) => (s.last_seen_hours ?? Infinity) < 2).length
    const offline = sensorHealth.filter((s) => (s.last_seen_hours ?? Infinity) >= 2).length
    return { online, offline }
  }, [sensorHealth])

  // ── EcoIQ / IQAir network ────────────────────────────────────────────────────

  const ecoIqWithPm25 = useMemo(() => ecoIqSensors.filter((s) => s.pm25_concentration != null), [ecoIqSensors])
  const ecoIqMedian = useMemo(() => medianOf(ecoIqWithPm25.map((s) => s.pm25_concentration!)), [ecoIqWithPm25])
  const ecoIqHighPrecisionCount = useMemo(() => ecoIqSensors.filter((s) => s.is_high_precision).length, [ecoIqSensors])

  const windPoints = useMemo(
    () => ecoIqSensors.filter((s) => s.wind_speed != null && s.wind_direction != null && s.wind_speed > 0),
    [ecoIqSensors],
  )
  const windSummary = useMemo(() => {
    if (!windPoints.length) return null
    const avgSpeed = windPoints.reduce((s, p) => s + (p.wind_speed ?? 0), 0) / windPoints.length
    // Average direction via unit vectors — avoids the 350°/10° wraparound bug of a plain mean.
    const rad = (d: number) => (d * Math.PI) / 180
    const sumX = windPoints.reduce((s, p) => s + Math.cos(rad(p.wind_direction ?? 0)), 0)
    const sumY = windPoints.reduce((s, p) => s + Math.sin(rad(p.wind_direction ?? 0)), 0)
    const avgDir = ((Math.atan2(sumY, sumX) * 180) / Math.PI + 360) % 360
    return { speed: avgSpeed, direction: avgDir, compass: degToCompass(avgDir) }
  }, [windPoints])

  // ── Extra AAI parameters ─────────────────────────────────────────────────────

  const avgExtra = (points: ExtraParamPoint[]): number | null => {
    const vals = points.map((p) => p.value).filter((v): v is number => v != null)
    if (!vals.length) return null
    return Math.round((vals.reduce((s, v) => s + v, 0) / vals.length) * 10) / 10
  }
  const avgTemperature = useMemo(() => avgExtra(temperature), [temperature])
  const avgHumidity = useMemo(() => avgExtra(humidity), [humidity])
  const avgCo2 = useMemo(() => avgExtra(co2), [co2])
  const avgTvoc = useMemo(() => avgExtra(tvoc), [tvoc])

  // ── AAI vs EcoIQ comparison ───────────────────────────────────────────────────

  const networkComparison = useMemo(() => {
    if (cityMedian == null || ecoIqMedian == null) return null
    const diff = Math.round((cityMedian - ecoIqMedian) * 10) / 10
    const diffPct = ecoIqMedian !== 0 ? Math.round((diff / ecoIqMedian) * 100) : 0
    return { diff, diffPct }
  }, [cityMedian, ecoIqMedian])

  const exceedanceData = calendarByYear[thisYear] ?? {}
  const medColor = cityMedian != null ? pm25Color(cityMedian) : "#9ca3af"

  const monthlyStats = useMemo(() => {
    const yearData = calendarByYear[thisYear] ?? {}
    return MONTH_LABELS.map((month, m) => {
      const prefix = `${thisYear}-${String(m + 1).padStart(2, "0")}`
      const days = Object.entries(yearData).filter(([d]) => d.startsWith(prefix))
      if (!days.length) return null
      const vals = days.map(([, v]) => v)
      const avg = Math.round((vals.reduce((s, v) => s + v, 0) / vals.length) * 10) / 10
      return { month, avg, exceedDays: vals.filter((v) => v > 15).length, total: vals.length }
    }).filter(Boolean) as { month: string; avg: number; exceedDays: number; total: number }[]
  }, [calendarByYear, thisYear])

  const worstDays = useMemo(() =>
    Object.entries(calendarByYear[thisYear] ?? {})
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([date, pm25]) => ({ date, pm25: Math.round(pm25 * 10) / 10 })),
    [calendarByYear, thisYear]
  )

  const worstSensors = useMemo(() =>
    [...activeSensors].sort((a, b) => (b.value ?? 0) - (a.value ?? 0)).slice(0, 10),
    [activeSensors]
  )

  const bestSensors = useMemo(() =>
    [...activeSensors].sort((a, b) => (a.value ?? Infinity) - (b.value ?? Infinity)).slice(0, 10),
    [activeSensors]
  )

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-5 p-4 pb-16">

      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        <KpiCard label="Медиана PM2.5" value={cityMedian != null ? `${(Math.round(cityMedian * 10) / 10).toFixed(1)}` : "—"} sub="µg/m³ прямо сейчас" color={medColor} />
        <KpiCard label="US EPA AQI" value={epaAqi ? String(epaAqi.aqi) : "—"} sub={epaAqi?.label ?? "на основе медианы"} color={medColor} />
        <KpiCard label="Активных датчиков" value={String(activeSensors.length)} sub={`из ${sensors.length} всего`} color="#3b82f6" />
        <KpiCard label="Выше нормы ВОЗ" value={whoExceedPct != null ? `${whoExceedPct}%` : "—"} sub="датчиков > 15 µg/m³" color={whoExceedPct != null && whoExceedPct > 50 ? "#ef4444" : "#22c55e"} />
        <KpiCard label="Онлайн" value={String(healthSummary.online)} sub="данные < 2 ч назад" color="#22c55e" />
        <KpiCard label="Оффлайн" value={String(healthSummary.offline)} sub="нет данных ≥ 2 ч" color="#ef4444" />
      </div>

      {/* Extra AAI parameters */}
      {(avgTemperature != null || avgHumidity != null || avgCo2 != null || avgTvoc != null) && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <KpiCard label="Температура" value={avgTemperature != null ? `${avgTemperature}°C` : "—"} sub="средняя по сети AAI" color="#f97316" />
          <KpiCard label="Влажность" value={avgHumidity != null ? `${avgHumidity}%` : "—"} sub="средняя по сети AAI" color="#06b6d4" />
          <KpiCard label="CO₂" value={avgCo2 != null ? `${avgCo2}` : "—"} sub="ppm, средний" color="#a855f7" />
          <KpiCard label="TVOC" value={avgTvoc != null ? `${avgTvoc}` : "—"} sub="ppb, средний" color="#eab308" />
        </div>
      )}

      {/* EcoIQ / IQAir network */}
      {ecoIqSensors.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold">Сеть IQAir / EcoIQ</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <KpiCard label="Станций" value={String(ecoIqSensors.length)} sub={`из них ${ecoIqHighPrecisionCount} высокоточных`} color="#3b82f6" />
            <KpiCard
              label="Медиана PM2.5"
              value={ecoIqMedian != null ? ecoIqMedian.toFixed(1) : "—"}
              sub="µg/m³ по сети IQAir"
              color={ecoIqMedian != null ? pm25Color(ecoIqMedian) : "#9ca3af"}
            />
            <KpiCard
              label="Ветер"
              value={windSummary ? `${windSummary.speed.toFixed(1)} м/с` : "—"}
              sub={windSummary ? `${windSummary.compass}, ${Math.round(windSummary.direction)}°` : "нет данных"}
              color="#06b6d4"
            />
            <KpiCard
              label="AAI vs IQAir"
              value={networkComparison ? `${networkComparison.diff > 0 ? "+" : ""}${networkComparison.diff}` : "—"}
              sub={networkComparison ? `${networkComparison.diffPct > 0 ? "+" : ""}${networkComparison.diffPct}% к IQAir` : "недостаточно данных"}
              color={networkComparison && networkComparison.diff > 0 ? "#ef4444" : "#22c55e"}
            />
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            AAI — собственная сеть из {sensors.length} датчиков (PM2.5, температура, влажность, CO₂, TVOC). IQAir/EcoIQ — внешняя сеть из {ecoIqSensors.length} станций
            с дополнительными данными по ветру. Сети не объединяются в общие KPI выше, так как отличаются точностью и плотностью покрытия.
          </p>
        </div>
      )}

      {/* Donut + District ranking */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Category donut */}
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold">Распределение по категориям</h3>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie data={categoryDist} dataKey="count" cx="50%" cy="50%" innerRadius={42} outerRadius={72}>
                  {categoryDist.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip formatter={(v, n) => [`${v} датч.`, n]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-1.5 text-xs">
              {categoryDist.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-muted-foreground">{c.label}</span>
                  <span className="ml-auto font-semibold tabular-nums">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* District ranking */}
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold">Рейтинг районов — медиана PM2.5</h3>
          {districtRanking.length > 0 ? (
            <ResponsiveContainer width="100%" height={Math.max(160, districtRanking.length * 26)}>
              <BarChart data={districtRanking} layout="vertical" margin={{ left: 4, right: 36, top: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                <XAxis type="number" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} width={90} stroke="var(--muted-foreground)" />
                <Tooltip formatter={(v) => [`${v} µg/m³`, "Медиана"]} />
                <ReferenceLine x={15} stroke="#ef4444" strokeDasharray="3 3" label={{ value: "WHO", fontSize: 9, fill: "#ef4444", position: "insideTopLeft" }} />
                <Bar dataKey="median" radius={[0, 4, 4, 0]}>
                  {districtRanking.map((e, i) => <Cell key={i} fill={pm25Color(e.median)} />)}
                  <LabelList dataKey="median" position="right" style={{ fontSize: 10 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground">Загрузка данных…</p>
          )}
        </div>
      </div>

      {/* Year-over-Year comparison */}
      {yoyChartData.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-1 text-sm font-semibold">Сравнение по годам (7-дневное скользящее среднее PM2.5)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={yoyChartData} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" type="number" domain={[1, 365]} ticks={DOY_MONTH_STARTS} tickFormatter={doyToMonth} tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
              <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" unit=" µg" />
              <Tooltip formatter={(v, n) => [`${v} µg/m³`, n]} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <ReferenceLine y={15} stroke="#ef4444" strokeDasharray="3 3" label={{ value: "WHO 15", position: "right", fontSize: 9, fill: "#ef4444" }} />
              {[thisYear - 2, thisYear - 1, thisYear].map((y, i) =>
                yoyChartData.some((d) => (d as Record<string, unknown>)[String(y)] != null) ? (
                  <Line key={y} type="monotone" dataKey={String(y)} stroke={["#94a3b8", "#6366f1", "#3b82f6"][i]} strokeWidth={i === 2 ? 2.5 : 1.5} dot={false} connectNulls name={String(y)} />
                ) : null
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Exceedance heatmap */}
      {Object.keys(exceedanceData).length > 0 && (
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Качество воздуха по дням {thisYear}</h3>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              {[["Отлично","#3b82f6"],["Хорошо","#22c55e"],["Умеренно","#eab308"],["Вредно","#ef4444"]].map(([l, c]) => (
                <span key={l} className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-sm" style={{ backgroundColor: c }} />
                  {l}
                </span>
              ))}
            </div>
          </div>
          <ExceedanceHeatmap data={exceedanceData} year={thisYear} />
        </div>
      )}

      {/* Monthly breakdown + Worst 10 days */}
      {(monthlyStats.length > 0 || worstDays.length > 0) && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* Monthly bar chart */}
          {monthlyStats.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold">Среднее PM2.5 по месяцам {thisYear}</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={monthlyStats} margin={{ top: 5, right: 8, bottom: 0, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                  <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" unit=" µg" />
                  <Tooltip
                    formatter={(v, n) => n === "avg" ? [`${v} µg/m³`, "Среднее"] : [v, "Дней > нормы"]}
                    labelFormatter={(l) => `${l} ${thisYear}`}
                  />
                  <ReferenceLine y={15} stroke="#ef4444" strokeDasharray="3 3" label={{ value: "WHO", position: "right", fontSize: 9, fill: "#ef4444" }} />
                  <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
                    {monthlyStats.map((e, i) => <Cell key={i} fill={pm25Color(e.avg)} />)}
                    <LabelList dataKey="avg" position="top" style={{ fontSize: 9 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-3 grid grid-cols-4 gap-1.5">
                {monthlyStats.map((m) => (
                  <div key={m.month} className="rounded-lg bg-muted/30 px-2 py-1.5 text-center">
                    <p className="text-[10px] text-muted-foreground">{m.month}</p>
                    <p className="text-xs font-semibold" style={{ color: pm25Color(m.avg) }}>{m.avg}</p>
                    <p className="text-[9px] text-muted-foreground">{m.exceedDays}/{m.total}д</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Worst 10 days */}
          {worstDays.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold">10 худших дней {thisYear} по PM2.5</h3>
              <div className="space-y-1.5">
                {worstDays.map(({ date, pm25 }, i) => {
                  const pct = Math.min(100, (pm25 / (worstDays[0].pm25 || 1)) * 100)
                  return (
                    <div key={date} className="flex items-center gap-3">
                      <span className="w-5 text-right text-[11px] font-semibold text-muted-foreground">{i + 1}</span>
                      <span className="w-24 text-xs text-muted-foreground">
                        {new Date(date).toLocaleDateString("ru-RU", { day: "numeric", month: "short" })}
                      </span>
                      <div className="relative flex-1 h-5 rounded overflow-hidden bg-muted/30">
                        <div
                          className="absolute inset-y-0 left-0 rounded"
                          style={{ width: `${pct}%`, backgroundColor: pm25Color(pm25), opacity: 0.7 }}
                        />
                        <span className="absolute inset-0 flex items-center px-2 text-[11px] font-medium">
                          {pm25} µg/m³ — {pm25Label(pm25)}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Top polluted / cleanest sensors right now */}
      {(worstSensors.length > 0 || bestSensors.length > 0) && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">Топ-10 загрязнённых датчиков сейчас</h3>
            <div className="space-y-1.5">
              {worstSensors.map((s, i) => {
                const pct = Math.min(100, ((s.value ?? 0) / (worstSensors[0].value ?? 1)) * 100)
                return (
                  <div key={s.id} className="flex items-center gap-2">
                    <span className="w-5 text-right text-[11px] font-semibold text-muted-foreground">{i + 1}</span>
                    <div className="relative flex-1 h-5 rounded overflow-hidden bg-muted/30">
                      <div className="absolute inset-y-0 left-0 rounded" style={{ width: `${pct}%`, backgroundColor: pm25Color(s.value ?? 0), opacity: 0.7 }} />
                      <span className="absolute inset-0 flex items-center justify-between px-2 text-[11px]">
                        <span className="truncate font-medium">{s.sensor_name ?? `#${s.id}`}</span>
                        <span className="ml-1 flex-shrink-0 font-semibold">{Math.round(s.value ?? 0)} µg/m³</span>
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">Топ-10 чистых датчиков сейчас</h3>
            <div className="space-y-1.5">
              {bestSensors.map((s, i) => {
                const pct = Math.min(100, ((s.value ?? 0) / ((worstSensors[0]?.value ?? 1))) * 100)
                return (
                  <div key={s.id} className="flex items-center gap-2">
                    <span className="w-5 text-right text-[11px] font-semibold text-muted-foreground">{i + 1}</span>
                    <div className="relative flex-1 h-5 rounded overflow-hidden bg-muted/30">
                      <div className="absolute inset-y-0 left-0 rounded" style={{ width: `${Math.max(pct, 4)}%`, backgroundColor: pm25Color(s.value ?? 0), opacity: 0.7 }} />
                      <span className="absolute inset-0 flex items-center justify-between px-2 text-[11px]">
                        <span className="truncate font-medium">{s.sensor_name ?? `#${s.id}`}</span>
                        <span className="ml-1 flex-shrink-0 font-semibold">{Math.round(s.value ?? 0)} µg/m³</span>
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      )}

      {/* Diurnal pattern */}
      {hourlyData.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-1 text-sm font-semibold">Суточный паттерн PM2.5 (последние 30 дней)</h3>
          <p className="mb-3 text-[11px] text-muted-foreground">По часу суток (Asia/Almaty). Сплошная — среднее, пунктир — P25/P75</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={hourlyData} margin={{ top: 5, right: 16, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="hour" tick={{ fontSize: 10 }} tickFormatter={(h) => `${h}:00`} stroke="var(--muted-foreground)" />
              <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" unit=" µg" />
              <Tooltip formatter={(v, n) => {
                const labels: Record<string, string> = { avg_pm25: "Среднее", p75: "P75", p25: "P25" }
                return [`${typeof v === "number" ? v.toFixed(1) : v} µg/m³`, labels[String(n)] ?? String(n)]
              }} />
              <ReferenceLine y={15} stroke="#ef4444" strokeDasharray="3 3" label={{ value: "WHO", position: "right", fontSize: 9, fill: "#ef4444" }} />
              <Line type="monotone" dataKey="p75" stroke="#94a3b8" strokeWidth={1} strokeDasharray="4 2" dot={false} name="P75" />
              <Line type="monotone" dataKey="p25" stroke="#94a3b8" strokeWidth={1} strokeDasharray="4 2" dot={false} name="P25" />
              <Line type="monotone" dataKey="avg_pm25" stroke="#3b82f6" strokeWidth={2.5} dot={false} name="Среднее" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* District dynamics (90d multi-line) */}
      {districtDynamics.chartData.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold">Динамика PM2.5 по районам (90 дней)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={districtDynamics.chartData} margin={{ top: 5, right: 16, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" tick={{ fontSize: 10 }} tickFormatter={(d) => d.slice(5)} stroke="var(--muted-foreground)" interval="preserveStartEnd" />
              <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" unit=" µg" />
              <Tooltip formatter={(v, n) => [`${typeof v === "number" ? v.toFixed(1) : v} µg/m³`, String(n)]} />
              <Legend wrapperStyle={{ fontSize: 10 }} />
              <ReferenceLine y={15} stroke="#ef4444" strokeDasharray="3 3" />
              {districtDynamics.districts.map((name, i) => (
                <Line key={name} type="monotone" dataKey={name} stroke={DISTRICT_COLORS[i % DISTRICT_COLORS.length]} strokeWidth={1.5} dot={false} connectNulls />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Sensor health table */}
      {sensorHealth.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Надёжность датчиков (30 дней)</h3>
            <div className="flex gap-4 text-xs">
              <span className="flex items-center gap-1 text-green-500">
                <Wifi className="h-3.5 w-3.5" />{healthSummary.online} онлайн
              </span>
              <span className="flex items-center gap-1 text-red-500">
                <WifiOff className="h-3.5 w-3.5" />{healthSummary.offline} оффлайн
              </span>
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto rounded-lg">
            <table className="w-full text-xs">
              <thead className="sticky top-0 border-b border-border bg-card">
                <tr className="text-muted-foreground">
                  <th className="py-2 text-left font-medium">Датчик</th>
                  <th className="py-2 text-left font-medium">Район</th>
                  <th className="py-2 text-right font-medium">Uptime</th>
                  <th className="py-2 text-right font-medium">Последнее</th>
                  <th className="py-2 text-right font-medium">PM2.5 30д</th>
                </tr>
              </thead>
              <tbody>
                {sensorHealth.map((s) => {
                  const lh = s.last_seen_hours
                  const lastSeenStr = lh == null ? "—" : lh < 1 ? "< 1 ч" : lh < 24 ? `${Math.round(lh)}ч` : `${Math.round(lh / 24)}д`
                  return (
                    <tr key={s.id} className="border-b border-border/40 hover:bg-muted/30">
                      <td className="max-w-[140px] truncate py-1.5 pr-2">{s.sensor_name || `#${s.id}`}</td>
                      <td className="max-w-[100px] truncate py-1.5 pr-2 text-muted-foreground">{s.district_name ?? "—"}</td>
                      <td className="py-1.5 pr-2 text-right font-medium tabular-nums" style={{ color: coverageColor(s.coverage_pct) }}>
                        {s.coverage_pct != null ? `${s.coverage_pct}%` : "—"}
                      </td>
                      <td className="py-1.5 pr-2 text-right text-muted-foreground tabular-nums">{lastSeenStr}</td>
                      <td className="py-1.5 text-right font-medium tabular-nums" style={{ color: pm25Color(s.avg_pm25_30d ?? undefined) }}>
                        {s.avg_pm25_30d != null ? s.avg_pm25_30d : "—"}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  )
}
