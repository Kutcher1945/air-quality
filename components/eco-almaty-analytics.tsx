"use client"

import { useEffect, useState } from "react"
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts"

type PlantStats = {
  total:      number
  redbook:    number
  pine:       number
  byType:     { type: number; count: number }[]
  bySanitary: { id: number; count: number }[]
  cachedAt:   number
}

const PLANT_TYPE_LABEL: Record<number, string> = {
  1: "Деревья", 2: "Кустарники", 3: "Куртина (дер.)",
  4: "Куртина (куст.)", 5: "Живая изгородь",
  6: "Цветник", 7: "Газон", 8: "Лиана",
}
const TYPE_COLOR: Record<number, string> = {
  1: "#15803d", 2: "#4ade80", 3: "#166534", 4: "#86efac",
  5: "#22c55e", 6: "#f472b6", 7: "#a3e635", 8: "#84cc16",
}
const SANITARY_LABEL: Record<number, string> = {
  1: "Здоровые (КСО-1)", 2: "Ослабленные (КСО-2)", 3: "Угнетённые (КСО-3)",
  4: "Усыхающие (КСО-4)", 5: "Сухостой (КСО-5)",   6: "Аварийное (КСО-5)",
  7: "Хорошее (КСО-2)",
}
const SANITARY_COLOR: Record<number, string> = {
  1: "#16a34a", 2: "#22c55e", 3: "#ca8a04",
  4: "#ea580c", 5: "#78716c", 6: "#b91c1c", 7: "#4ade80",
}

function fmt(n: number) {
  return n.toLocaleString("ru-RU")
}

function KpiCard({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 flex flex-col gap-1">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-2xl font-bold" style={{ color: color ?? "var(--foreground)" }}>{value}</span>
      {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
    </div>
  )
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { name: string; value: number }[] }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 text-sm shadow-lg">
      <div className="font-semibold text-foreground">{payload[0].name}</div>
      <div className="text-muted-foreground">{fmt(payload[0].value)}</div>
    </div>
  )
}

export function EcoAlmatyAnalytics() {
  const [stats, setStats] = useState<PlantStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState(false)

  const load = (refresh = false) => {
    if (refresh) setRefreshing(true)
    else setLoading(true)
    setError(false)
    fetch(`${process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"}/ecology/eco-green/plants/stats/${refresh ? "?refresh=1" : ""}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then((d: PlantStats) => { setStats(d); setLoading(false); setRefreshing(false) })
      .catch(() => { setError(true); setLoading(false); setRefreshing(false) })
  }

  useEffect(() => { load() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return (
    <div className="flex-1 flex items-center justify-center gap-3 text-muted-foreground">
      <div className="w-5 h-5 rounded-full border-2 border-border border-t-green-500 animate-spin" />
      Загрузка статистики…
    </div>
  )
  if (error || !stats) return (
    <div className="flex-1 flex items-center justify-center text-muted-foreground">
      Не удалось загрузить данные
    </div>
  )

  const healthy = stats.bySanitary.find(r => r.id === 1)?.count ?? 0
  const atRisk  = stats.bySanitary.filter(r => r.id >= 4).reduce((s, r) => s + r.count, 0)
  const healthyPct = stats.total > 0 ? Math.round((healthy / stats.total) * 100) : 0

  const pieData = stats.bySanitary.map(r => ({
    name:  SANITARY_LABEL[r.id] ?? `КСО-${r.id}`,
    value: r.count,
    color: SANITARY_COLOR[r.id] ?? "#6b7280",
  }))

  const barTypeData = stats.byType.map(r => ({
    name:  PLANT_TYPE_LABEL[r.type] ?? `Тип ${r.type}`,
    value: r.count,
    color: TYPE_COLOR[r.type] ?? "#16a34a",
  })).sort((a, b) => b.value - a.value)

  return (
    <div className="flex-1 overflow-y-auto bg-background px-6 py-5 space-y-6">

      {/* header row */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">Зелёные насаждения — аналитика</h2>
          {stats && (
            <p className="text-xs text-muted-foreground mt-0.5">
              Данные от {new Date(stats.cachedAt).toLocaleString("ru-RU")} · обновляются раз в час
            </p>
          )}
        </div>
        <button
          onClick={() => load(true)}
          disabled={refreshing}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted transition-colors disabled:opacity-50"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className={refreshing ? "animate-spin" : ""}
            style={{ color: "var(--muted-foreground)" }}>
            <path d="M23 4v6h-6M1 20v-6h6"/>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
          {refreshing ? "Обновление…" : "Обновить кеш"}
        </button>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <KpiCard label="Всего насаждений" value={fmt(stats.total)} sub="в базе данных" color="#16a34a" />
        <KpiCard label="Здоровые (КСО-1)" value={fmt(healthy)} sub={`${healthyPct}% от общего`} color="#16a34a" />
        <KpiCard label="Под угрозой (КСО 4–6)" value={fmt(atRisk)} sub="усыхающие + аварийные" color="#ea580c" />
        <KpiCard label="Краснокнижных" value={fmt(stats.redbook)} color="#dc2626" />
        <KpiCard label="Хвойных" value={fmt(stats.pine)} color="#0891b2" />
      </div>

      {/* charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* sanitary pie */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Санитарное состояние</h3>
          <div className="flex gap-6 items-center">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%"
                  innerRadius={52} outerRadius={82} paddingAngle={2} strokeWidth={0}>
                  {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {pieData.map((entry, i) => (
                <div key={i} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: entry.color }} />
                    <span className="text-xs text-muted-foreground truncate">{entry.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground shrink-0">{fmt(entry.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* by type bar */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">По типу насаждений</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barTypeData} layout="vertical" margin={{ left: 8, right: 16, top: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
              <XAxis type="number" tickFormatter={v => (v / 1000).toFixed(0) + "k"}
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" width={110}
                tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={18}>
                {barTypeData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* health breakdown full-width */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Распределение по санитарному состоянию</h3>
        <div className="flex h-10 rounded-lg overflow-hidden gap-px">
          {pieData.map((entry, i) => {
            const pct = (entry.value / stats.total) * 100
            return pct > 0.3 ? (
              <div key={i} style={{ width: `${pct}%`, background: entry.color }}
                title={`${entry.name}: ${fmt(entry.value)} (${pct.toFixed(1)}%)`}
                className="relative group flex-shrink-0">
                {pct > 5 && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold">
                    {pct.toFixed(1)}%
                  </span>
                )}
              </div>
            ) : null
          })}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
          {pieData.map((entry, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-sm" style={{ background: entry.color }} />
              {entry.name}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
