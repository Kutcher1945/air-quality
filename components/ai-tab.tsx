"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import { Sparkles, Send, RotateCcw } from "lucide-react"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine,
} from "recharts"
import { pm25Color, pm25Label, pm25ToEpaAqi } from "@/lib/pm25"
import type { AirSensor } from "@/components/sensor-map-yandex"

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"

const MONTH_LABELS = ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]

function medianOf(nums: number[]): number | null {
  if (!nums.length) return null
  const sorted = [...nums].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

function aggregateMonthly(data: Record<string, number>) {
  const byMonth: Record<number, number[]> = {}
  for (const [date, val] of Object.entries(data)) {
    const m = parseInt(date.slice(5, 7), 10) - 1
    if (!byMonth[m]) byMonth[m] = []
    byMonth[m].push(val)
  }
  return MONTH_LABELS.map((month, m) => {
    const vals = byMonth[m] ?? []
    if (!vals.length) return null
    const avg = Math.round((vals.reduce((s, v) => s + v, 0) / vals.length) * 10) / 10
    return { month, avg, exceedDays: vals.filter((v) => v > 15).length, total: vals.length }
  }).filter(Boolean) as { month: string; avg: number; exceedDays: number; total: number }[]
}

function extractYears(text: string): number[] {
  const now = new Date().getFullYear()
  const found = text.match(/\b(20\d{2})\b/g) ?? []
  return [...new Set(found.map(Number).filter((y) => y >= 2020 && y <= now))]
}

interface MonthlyPoint { month: string; avg: number; exceedDays: number; total: number }
interface YearChart { year: number; monthly: MonthlyPoint[] }

interface Message {
  role: "user" | "assistant"
  content: string
  charts?: YearChart[]
}

interface AiTabProps {
  sensors: AirSensor[]
  sensorsLoading: boolean
}

const SUGGESTIONS = [
  "Какой район Алматы самый загрязнённый сейчас?",
  "Насколько опасен текущий PM2.5 для детей?",
  "за 2025 год какие показатели были?",
  "Когда воздух в Алматы чище всего?",
  "Что вызывает загрязнение воздуха в Алматы?",
]

export function AiTab({ sensors, sensorsLoading }: AiTabProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [calendarCache, setCalendarCache] = useState<Record<number, Record<string, number>>>({})
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const activeSensors = useMemo(
    () => sensors.filter((s) => s.value != null && s.parameter === "pm25"),
    [sensors]
  )
  const cityMedian = useMemo(
    () => medianOf(activeSensors.map((s) => s.value as number)),
    [activeSensors]
  )
  const epaAqi = useMemo(
    () => (cityMedian != null ? pm25ToEpaAqi(cityMedian) : null),
    [cityMedian]
  )
  const whoExceedPct = useMemo(() => {
    if (!activeSensors.length) return null
    return Math.round((activeSensors.filter((s) => (s.value ?? 0) > 15).length / activeSensors.length) * 100)
  }, [activeSensors])
  const districtRanking = useMemo(() => {
    const by: Record<string, number[]> = {}
    for (const s of activeSensors) {
      const n = s.district_name ?? "Неизвестный район"
      ;(by[n] ??= []).push(s.value as number)
    }
    return Object.entries(by)
      .map(([name, vals]) => ({ name, median: Math.round((medianOf(vals) ?? 0) * 10) / 10 }))
      .sort((a, b) => b.median - a.median)
  }, [activeSensors])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  async function fetchCalendarYear(year: number): Promise<Record<string, number>> {
    if (calendarCache[year]) return calendarCache[year]
    try {
      const res = await fetch(
        `${BASE}/ecology/api/air-quality-calendar/?year=${year}`,
        { headers: { Accept: "application/json" } }
      )
      const json = await res.json()

      // API returns {year, data: [{date, avg_pm25, ...}], stats}
      let data: Record<string, number> = {}
      if (Array.isArray(json.data)) {
        for (const row of json.data) {
          if (row.date && row.avg_pm25 != null) data[row.date] = row.avg_pm25
        }
      } else if (typeof json === "object" && !Array.isArray(json)) {
        // Fallback: flat {date: value} dict
        data = json as Record<string, number>
      }

      setCalendarCache((prev) => ({ ...prev, [year]: data }))
      return data
    } catch {
      return {}
    }
  }

  async function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const userMsg: Message = { role: "user", content: trimmed }
    const next: Message[] = [...messages, userMsg]
    setMessages(next)
    setInput("")
    setLoading(true)
    setError(null)

    // Detect year mentions and fetch calendar data
    const years = extractYears(trimmed)
    const historicalYears: { year: number; monthly: MonthlyPoint[] }[] = []
    const charts: YearChart[] = []

    if (years.length) {
      await Promise.all(
        years.map(async (year) => {
          const raw = await fetchCalendarYear(year)
          const monthly = aggregateMonthly(raw)
          if (monthly.length) {
            historicalYears.push({ year, monthly })
            charts.push({ year, monthly })
          }
        })
      )
    }

    const context = {
      city_median:      cityMedian != null ? Math.round(cityMedian * 10) / 10 : null,
      epa_aqi:          epaAqi?.aqi ?? null,
      who_exceed_pct:   whoExceedPct,
      active_sensors:   activeSensors.length,
      today:            new Date().toLocaleDateString("sv-SE"),
      districts:        districtRanking,
      monthly:          [],
      historical_years: historicalYears,
    }

    try {
      const res = await fetch(`${BASE}/air/analytics/ai-chat/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
          context,
        }),
      })
      const raw = await res.text()
      let json: { reply?: string; error?: string }
      try { json = JSON.parse(raw) } catch { throw new Error(raw.slice(0, 200)) }
      if (json.error) throw new Error(json.error)
      const assistantMsg: Message = {
        role: "assistant",
        content: json.reply ?? "",
        charts: charts.length ? charts : undefined,
      }
      setMessages([...next, assistantMsg])
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Ошибка запроса")
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input) }
  }

  const medColor = cityMedian != null ? pm25Color(cityMedian) : "#6b7280"

  return (
    <div className="flex h-full flex-col">

      {/* Status bar */}
      <div className="flex shrink-0 items-center gap-4 border-b border-border bg-card/50 px-4 py-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium">Mistral Large</span>
          <span className="text-xs text-muted-foreground">• ИИ-ассистент по качеству воздуха</span>
        </div>
        <div className="ml-auto flex items-center gap-3 text-xs text-muted-foreground">
          {cityMedian != null && (
            <span>PM2.5 <span className="font-semibold" style={{ color: medColor }}>{(Math.round(cityMedian * 10) / 10).toFixed(1)} µg/m³</span></span>
          )}
          {epaAqi && (
            <span>AQI <span className="font-semibold" style={{ color: medColor }}>{epaAqi.aqi}</span></span>
          )}
          <span>{activeSensors.length} датчиков онлайн</span>
          {messages.length > 0 && (
            <button
              onClick={() => { setMessages([]); setError(null) }}
              className="flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-muted transition"
            >
              <RotateCcw className="h-3 w-3" />
              Сбросить
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

        {messages.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <div>
              <p className="text-base font-semibold">Спросите про воздух в Алматы</p>
              <p className="mt-1 text-sm text-muted-foreground max-w-sm">
                ИИ знает текущие данные {activeSensors.length} датчиков и архив по годам — спросите про любой период
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 max-w-lg">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "assistant" && (
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>
            )}
            <div className={`flex flex-col gap-3 ${m.role === "user" ? "items-end max-w-[75%]" : "items-start w-full max-w-[85%]"}`}>
              <div
                className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-card border border-border text-foreground rounded-bl-sm w-full"
                }`}
              >
                {m.content.split(/\n+/).filter(Boolean).map((para, j) => (
                  <p key={j} className={j > 0 ? "mt-2" : ""}>{para}</p>
                ))}
              </div>

              {/* Charts */}
              {m.charts?.map(({ year, monthly }) => (
                <div key={year} className="w-full rounded-xl border border-border bg-card p-4">
                  <p className="mb-3 text-xs font-semibold text-muted-foreground">
                    PM2.5 по месяцам — {year} год (данные с датчиков)
                  </p>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart data={monthly} margin={{ top: 4, right: 8, bottom: 0, left: -8 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                      <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" unit="µg" />
                      <Tooltip
                        formatter={(v: number) => [`${v} µg/m³ — ${pm25Label(v)}`, "Среднее"]}
                        labelFormatter={(l) => `${l} ${year}`}
                      />
                      <ReferenceLine y={15} stroke="#ef4444" strokeDasharray="3 3"
                        label={{ value: "ВОЗ 15", position: "right", fontSize: 9, fill: "#ef4444" }} />
                      <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
                        {monthly.map((e, idx) => (
                          <Cell key={idx} fill={pm25Color(e.avg)} fillOpacity={0.85} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-2 grid grid-cols-4 gap-1 sm:grid-cols-6 lg:grid-cols-12">
                    {monthly.map((m2) => (
                      <div key={m2.month} className="rounded bg-muted/30 p-1 text-center">
                        <p className="text-[9px] text-muted-foreground">{m2.month}</p>
                        <p className="text-[10px] font-semibold" style={{ color: pm25Color(m2.avg) }}>{m2.avg}</p>
                        <p className="text-[9px] text-muted-foreground">{m2.exceedDays}д↑</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {m.role === "user" && (
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                Вы
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1 items-center h-4">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="flex justify-center">
            <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">{error}</p>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="shrink-0 border-t border-border bg-card/50 px-4 py-3">
        {messages.length > 0 && messages.length < 4 && (
          <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
            {SUGGESTIONS.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                disabled={loading}
                className="shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground disabled:opacity-40"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading || sensorsLoading}
            placeholder="Спросите про качество воздуха… Например: «за 2024 год какие показатели были?»"
            rows={1}
            className="flex-1 resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            style={{ maxHeight: "120px", overflowY: "auto" }}
            onInput={(e) => {
              const t = e.currentTarget
              t.style.height = "auto"
              t.style.height = `${Math.min(t.scrollHeight, 120)}px`
            }}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading || sensorsLoading}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-1.5 text-center text-[10px] text-muted-foreground/50">
          Данные с {sensors.length} датчиков Smart Almaty • Упомяните год для просмотра архива
        </p>
      </div>

    </div>
  )
}
