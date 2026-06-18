"use client"

import { useState, useEffect, useMemo } from "react"
import { useTheme } from "next-themes"
import { HeaderMenu } from "@/components/header-menu"
import { Button } from "@/components/ui/button"
import {
  Phone, Download, Filter, Search, FileText,
  ChevronLeft, ChevronRight, X, Hash,
  BarChart3, PieChart as PieChartIcon, Building2,
} from "lucide-react"
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts"

// ── Types ──────────────────────────────────────────────────────────────────────

interface RequestCategory { id: number; name: string }
interface RequestSubcategory { id: number; name: string; category: RequestCategory }
interface RequestSubject { id: number; name: string }

interface OutgoingCall {
  id: number
  request_category: RequestCategory
  request_subcategory: RequestSubcategory
  request_subject: RequestSubject
  record_number: string
  applicant_last_name: string
  applicant_first_name: string
  applicant_account: string
  phone_number: string
  problem_address: string
  problem_district: string
  route_number: string
  executor_go: string
  current_executor_go: string
  submission_source: string
  request_status: string
  request_text: string
  request_registration_date: string
  planned_completion_date: string
  actual_completion_date: string
  actual_resolution_time: string
  registrar: string
}

// ── Constants ──────────────────────────────────────────────────────────────────

const CHART_COLORS = [
  "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#a78bfa",
  "#4ade80", "#fb923c", "#f472b6", "#22d3ee",
]

const ITEMS_PER_PAGE = 10

// ── Helpers ────────────────────────────────────────────────────────────────────

function deduped<T extends { id: number }>(items: T[]): T[] {
  const seen = new Set<number>()
  return items.filter((item) => {
    if (seen.has(item.id)) return false
    seen.add(item.id)
    return true
  })
}

function MiniBar({ value, max, color }: { value: number; max: number; color: string }) {
  return (
    <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-1.5">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${max > 0 ? (value / max) * 100 : 0}%`, backgroundColor: color }}
      />
    </div>
  )
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function OutgoingCallsPage() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const [calls, setCalls] = useState<OutgoingCall[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("all")
  const [subcategoryFilter, setSubcategoryFilter] = useState("all")
  const [selectedCall, setSelectedCall] = useState<OutgoingCall | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Recharts tooltip style — reactive to theme
  const tooltipStyle = {
    contentStyle: {
      background: isDark ? "#1e293b" : "#fff",
      border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
      borderRadius: 8,
      color: isDark ? "#fff" : "#0f172a",
      fontSize: 12,
      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
    },
  }

  useEffect(() => { fetchCalls() }, [])

  const fetchCalls = async () => {
    try {
      setLoading(true)
      setError(null)

      const BASE = "https://admin.smartalmaty.kz/api/v1/address/address-without-gas-outgoing-calls/"
      const PAGE_SIZE = 100

      const first = await fetch(`${BASE}?page_size=${PAGE_SIZE}&page=1`)
      if (!first.ok) throw new Error(`HTTP ${first.status}`)
      const firstData = await first.json()
      const totalPages = Math.ceil((firstData.count as number) / PAGE_SIZE)

      if (totalPages <= 1) {
        setCalls(firstData.results ?? [])
        return
      }

      const pages = Array.from({ length: totalPages - 1 }, (_, i) => i + 2)
      const rest = await Promise.all(
        pages.map((p) =>
          fetch(`${BASE}?page_size=${PAGE_SIZE}&page=${p}`)
            .then((r) => r.json())
            .then((d) => (d.results ?? []) as OutgoingCall[]),
        ),
      )
      setCalls([...(firstData.results ?? []), ...rest.flat()])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка загрузки")
    } finally {
      setLoading(false)
    }
  }

  const subjects = useMemo(
    () => deduped(calls.map((c) => c.request_subject).filter(Boolean)),
    [calls],
  )
  const subcategories = useMemo(
    () => deduped(calls.map((c) => c.request_subcategory).filter(Boolean)),
    [calls],
  )

  const filteredCalls = useMemo(() => {
    return calls
      .filter((c) => {
        const q = searchQuery.toLowerCase()
        const matchSearch =
          !q ||
          c.problem_address.toLowerCase().includes(q) ||
          c.applicant_first_name.toLowerCase().includes(q) ||
          c.applicant_last_name.toLowerCase().includes(q) ||
          c.phone_number.includes(q) ||
          c.record_number.toLowerCase().includes(q)
        const matchSubject = subjectFilter === "all" || c.request_subject?.id === parseInt(subjectFilter)
        const matchSubcat = subcategoryFilter === "all" || c.request_subcategory?.id === parseInt(subcategoryFilter)
        return matchSearch && matchSubject && matchSubcat
      })
      .sort((a, b) => b.id - a.id)
  }, [calls, searchQuery, subjectFilter, subcategoryFilter])

  useEffect(() => { setCurrentPage(1) }, [searchQuery, subjectFilter, subcategoryFilter])

  const totalPages = Math.ceil(filteredCalls.length / ITEMS_PER_PAGE)
  const paginatedCalls = filteredCalls.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  const bySubject = useMemo(
    () =>
      subjects
        .map((s) => ({
          name: s.name,
          value: filteredCalls.filter((c) => c.request_subject?.id === s.id).length,
        }))
        .filter((x) => x.value > 0)
        .sort((a, b) => b.value - a.value),
    [subjects, filteredCalls],
  )

  const fuelBySubcategory = useMemo(
    () =>
      subcategories
        .map((sub) => {
          const subCalls = filteredCalls.filter((c) => c.request_subcategory?.id === sub.id)
          if (!subCalls.length) return null
          const distribution = subjects
            .map((s) => ({
              name: s.name,
              value: subCalls.filter((c) => c.request_subject?.id === s.id).length,
              pct: ((subCalls.filter((c) => c.request_subject?.id === s.id).length / subCalls.length) * 100).toFixed(1),
            }))
            .filter((x) => x.value > 0)
            .sort((a, b) => b.value - a.value)
          return { subcategory: sub, total: subCalls.length, distribution }
        })
        .filter(Boolean) as { subcategory: RequestSubcategory; total: number; distribution: { name: string; value: number; pct: string }[] }[],
    [subcategories, filteredCalls, subjects],
  )

  const exportCSV = () => {
    const rows = filteredCalls.map((c) => ({
      "Номер записи": c.record_number,
      "Дата регистрации": c.request_registration_date,
      "Фамилия": c.applicant_last_name,
      "Имя": c.applicant_first_name,
      "Телефон": c.phone_number,
      "Адрес": c.problem_address,
      "Тема": c.request_subject?.name ?? "",
      "Подкатегория": c.request_subcategory?.name ?? "",
    }))
    const headers = Object.keys(rows[0] ?? {})
    const csv = [headers.join(","), ...rows.map((r) => headers.map((h) => `"${r[h as keyof typeof r]}"`).join(","))].join("\n")
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }))
    const a = document.createElement("a")
    a.href = url
    a.download = `calls-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  // ── Loading / Error ──────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <HeaderMenu />
        <div className="flex items-center justify-center h-[70vh]">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 border-4 border-primary/20 rounded-full" />
              <div className="w-14 h-14 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0" />
            </div>
            <span className="text-muted-foreground text-sm">Загрузка данных...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <HeaderMenu />
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <p className="text-destructive">Ошибка: {error}</p>
          <Button onClick={fetchCalls} variant="outline">Повторить</Button>
        </div>
      </div>
    )
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <HeaderMenu />

      <main className="px-6 py-8 space-y-8">

        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="h-10 w-10 rounded-xl bg-primary/10 dark:bg-blue-500/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary dark:text-blue-400" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Исходящие звонки</h1>
            </div>
            <p className="text-muted-foreground text-sm ml-[52px]">Данные по обзвону объектов без газоснабжения</p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={exportCSV} variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Экспорт CSV
            </Button>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Всего обращений", value: calls.length, color: "#60a5fa", lightClass: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400", icon: Hash },
            { label: "Отфильтровано", value: filteredCalls.length, color: "#34d399", lightClass: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400", icon: Filter },
            { label: "Тем обращений", value: subjects.length, color: "#a78bfa", lightClass: "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400", icon: PieChartIcon },
            { label: "Типов объектов", value: subcategories.length, color: "#fb923c", lightClass: "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400", icon: Building2 },
          ].map(({ label, value, lightClass, icon: Icon }) => (
            <div key={label} className="rounded-2xl bg-card border border-border p-6">
              <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ${lightClass} mb-3`}>
                <Icon className="h-3.5 w-3.5" />
                <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
              </div>
              <p className="text-4xl font-bold text-foreground">{value.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="rounded-2xl bg-card border border-border p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                <Search className="h-3.5 w-3.5" /> Поиск
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Адрес, имя, телефон, номер записи..."
                className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition"
              />
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                <Filter className="h-3.5 w-3.5" /> Тема обращения
              </label>
              <select
                value={subjectFilter}
                onChange={(e) => setSubjectFilter(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition"
              >
                <option value="all">Все темы</option>
                {subjects.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                <Filter className="h-3.5 w-3.5" /> Подкатегория
              </label>
              <select
                value={subcategoryFilter}
                onChange={(e) => setSubcategoryFilter(e.target.value)}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary/50 outline-none transition"
              >
                <option value="all">Все подкатегории</option>
                {subcategories.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Fuel Structure by Business Type */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
            <PieChartIcon className="h-5 w-5 text-primary" />
            Структура потребления топлива по типам предприятий
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {fuelBySubcategory.map(({ subcategory, total, distribution }) => (
              <div key={subcategory.id} className="rounded-2xl bg-card border border-border p-5 flex flex-col">
                <div className="mb-1">
                  <p className="text-sm font-semibold text-foreground leading-snug">{subcategory.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Всего: {total} объектов</p>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={distribution}
                      cx="50%" cy="50%"
                      innerRadius={42} outerRadius={72}
                      dataKey="value"
                      label={({ pct }) => `${pct}%`}
                      labelLine={false}
                    >
                      {distribution.map((_, idx) => (
                        <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      {...tooltipStyle}
                      formatter={(v, n) => [`${v} (${distribution.find((d) => d.name === n)?.pct}%)`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-2 space-y-1.5 flex-1">
                  {distribution.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }} />
                        <span className="text-muted-foreground truncate">{item.name}</span>
                      </div>
                      <span className="text-foreground font-medium shrink-0">{item.value} ({item.pct}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Overview Charts */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Общая статистика по обращениям
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Pie by subject */}
            <div className="rounded-2xl bg-card border border-border p-5">
              <p className="text-sm font-semibold text-foreground mb-4">Распределение по темам обращений</p>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={bySubject} cx="50%" cy="50%" innerRadius={60} outerRadius={110} dataKey="value" paddingAngle={2}>
                    {bySubject.map((_, idx) => (
                      <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip {...tooltipStyle} formatter={(v) => [v, "Обращений"]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-3 grid grid-cols-1 gap-1.5">
                {bySubject.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }} />
                      <span className="text-muted-foreground truncate">{item.name}</span>
                    </div>
                    <span className="text-foreground font-semibold shrink-0 ml-2">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal bar by subject */}
            <div className="rounded-2xl bg-card border border-border p-5">
              <p className="text-sm font-semibold text-foreground mb-4">Количество по темам обращений</p>
              <ResponsiveContainer width="100%" height={420}>
                <BarChart data={bySubject} layout="vertical" margin={{ left: 8, right: 24, top: 4, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"} horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fill: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", fontSize: 11 }}
                    axisLine={false} tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={160}
                    tick={{ fill: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)", fontSize: 11 }}
                    axisLine={false} tickLine={false}
                  />
                  <Tooltip {...tooltipStyle} formatter={(v) => [v, "Обращений"]} />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                    {bySubject.map((_, idx) => (
                      <Cell key={idx} fill={CHART_COLORS[idx % CHART_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Calls Table */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Список обращений
            <span className="ml-1 text-sm font-normal text-muted-foreground">({filteredCalls.length})</span>
          </h2>

          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    {["ID", "№ записи", "Дата", "Заявитель", "Телефон", "Адрес", "Тема", ""].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedCalls.map((call) => (
                    <tr key={call.id} className="border-b border-border hover:bg-muted/40 transition-colors">
                      <td className="px-4 py-3 text-xs text-muted-foreground">{call.id}</td>
                      <td className="px-4 py-3 text-xs font-mono text-muted-foreground">{call.record_number}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">{call.request_registration_date}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{call.applicant_last_name} {call.applicant_first_name}</td>
                      <td className="px-4 py-3 text-xs font-mono text-muted-foreground">{call.phone_number}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground max-w-[220px] truncate" title={call.problem_address}>
                        {call.problem_address}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-blue-500/15 dark:text-blue-300 border border-primary/20 dark:border-blue-500/20">
                          {call.request_subject?.name}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setSelectedCall(call)}
                          className="h-7 w-7 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 border border-border text-muted-foreground hover:text-foreground transition-all"
                        >
                          <FileText className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-border">
              <span className="text-xs text-muted-foreground">
                {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredCalls.length)} из {filteredCalls.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="h-7 w-7 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const p = totalPages <= 5 ? i + 1
                    : currentPage <= 3 ? i + 1
                    : currentPage >= totalPages - 2 ? totalPages - 4 + i
                    : currentPage - 2 + i
                  return (
                    <button
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={`h-7 min-w-[28px] px-1.5 rounded-lg text-xs font-medium border transition-all ${
                        currentPage === p
                          ? "bg-primary border-primary text-primary-foreground"
                          : "bg-muted border-border text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                      }`}
                    >
                      {p}
                    </button>
                  )
                })}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="h-7 w-7 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 border border-border text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detail Drawer */}
      {selectedCall && (
        <>
          <div
            className="fixed inset-0 bg-black/40 dark:bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setSelectedCall(null)}
          />
          <div className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-background border-l border-border z-50 flex flex-col shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-primary uppercase mb-0.5">Обращение</p>
                <h2 className="text-lg font-bold text-foreground">Детали</h2>
              </div>
              <button
                onClick={() => setSelectedCall(null)}
                className="h-9 w-9 flex items-center justify-center rounded-xl bg-muted hover:bg-muted/80 border border-border text-muted-foreground hover:text-foreground transition-all"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto scrollbar-hidden px-6 py-5 space-y-5">
              {/* Status + Record */}
              <div className="rounded-xl bg-muted/40 border border-border p-4 space-y-3">
                <DrawerField label="Номер записи" value={selectedCall.record_number} mono />
                {selectedCall.request_status && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Статус</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                      {selectedCall.request_status}
                    </span>
                  </div>
                )}
              </div>

              <DrawerSection title="Заявитель">
                <DrawerField label="ФИО" value={`${selectedCall.applicant_last_name} ${selectedCall.applicant_first_name}`} />
                <DrawerField label="Телефон" value={selectedCall.phone_number} mono />
                {selectedCall.applicant_account && <DrawerField label="Аккаунт" value={selectedCall.applicant_account} />}
              </DrawerSection>

              <DrawerSection title="Адрес">
                <DrawerField label="Адрес проблемы" value={selectedCall.problem_address} />
                {selectedCall.problem_district && <DrawerField label="Район" value={selectedCall.problem_district} />}
                {selectedCall.route_number && <DrawerField label="Маршрут" value={selectedCall.route_number} mono />}
              </DrawerSection>

              <DrawerSection title="Категории">
                <DrawerField label="Категория" value={selectedCall.request_category?.name} />
                <DrawerField label="Подкатегория" value={selectedCall.request_subcategory?.name} />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Тема обращения</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-blue-500/15 text-primary dark:text-blue-300 border border-primary/20 dark:border-blue-500/20">
                    {selectedCall.request_subject?.name ?? "—"}
                  </span>
                </div>
              </DrawerSection>

              {(selectedCall.executor_go || selectedCall.current_executor_go || selectedCall.registrar) && (
                <DrawerSection title="Исполнители">
                  {selectedCall.executor_go && <DrawerField label="Исполнитель ГО" value={selectedCall.executor_go} />}
                  {selectedCall.current_executor_go && <DrawerField label="Текущий исполнитель ГО" value={selectedCall.current_executor_go} />}
                  {selectedCall.registrar && <DrawerField label="Регистратор" value={selectedCall.registrar} />}
                </DrawerSection>
              )}

              <DrawerSection title="Даты">
                <DrawerField label="Дата регистрации" value={selectedCall.request_registration_date} />
                {selectedCall.planned_completion_date && <DrawerField label="Плановый срок" value={selectedCall.planned_completion_date} />}
                {selectedCall.actual_completion_date && <DrawerField label="Фактическое исполнение" value={selectedCall.actual_completion_date} />}
                {selectedCall.actual_resolution_time && <DrawerField label="Срок исполнения" value={selectedCall.actual_resolution_time} />}
              </DrawerSection>

              {selectedCall.submission_source && (
                <DrawerSection title="Дополнительно">
                  <DrawerField label="Источник поступления" value={selectedCall.submission_source} />
                </DrawerSection>
              )}

              <DrawerSection title="Текст обращения">
                <div className="rounded-xl bg-muted/30 border border-border p-4">
                  <div
                    className="text-sm leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{
                      __html: (selectedCall.request_text ?? "—")
                        .replace(/&quot;/g, '"')
                        .replace(/&amp;/g, "&")
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/Наименование объекта:/g, "<strong class='text-foreground'>Наименование объекта:</strong><br/>")
                        .replace(/Тип объекта:/g, "<br/><strong class='text-foreground'>Тип объекта:</strong><br/>")
                        .replace(/Район:/g, "<br/><strong class='text-foreground'>Район:</strong><br/>")
                        .replace(/Основной вид топлива:/g, "<br/><strong class='text-foreground'>Основной вид топлива:</strong><br/>")
                        .replace(/Для тех\.нужд:/g, "<br/><strong class='text-foreground'>Для тех.нужд:</strong><br/>")
                        .replace(/Должность:/g, "<br/><strong class='text-foreground'>Должность:</strong><br/>"),
                    }}
                  />
                </div>
              </DrawerSection>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// ── Drawer sub-components ──────────────────────────────────────────────────────

function DrawerSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-2">{title}</p>
      <div className="rounded-xl bg-muted/40 border border-border p-4 space-y-3">
        {children}
      </div>
    </div>
  )
}

function DrawerField({ label, value, mono }: { label: string; value?: string | null; mono?: boolean }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
      <p className={`text-sm text-foreground ${mono ? "font-mono" : ""}`}>{value || "—"}</p>
    </div>
  )
}
