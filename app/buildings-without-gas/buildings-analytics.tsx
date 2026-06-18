"use client"

import { useMemo } from "react"
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList,
} from "recharts"
import { Building2, MapPin, Flame, CheckCircle, AlertCircle, Home, Users, Zap, Ban, Shield, DollarSign, Thermometer, Target } from "lucide-react"

interface Building {
  id: string
  address: string
  district: string
  district_id?: number | null
  has_gas: boolean | null
  building_type: string
  building_type_raw?: string | null
  building_category: "general" | "izhs" | "susn"
  is_not_in_almaty?: boolean
  is_seasonal_or_unused?: boolean
  gas_connection_available?: boolean | null
  property_not_legalized?: boolean | null
  property_not_eligible_for_gas_connection?: boolean | null
  no_funds_for_gas_connection?: boolean | null
  has_private_bathhouse?: boolean | null
  gas_connected?: boolean | null
  category?: string | null
}

interface Props { buildings: Building[] }

const DISTRICT_LABELS: Record<string, string> = {
  "1": "Алатауский", "2": "Алмалинский", "3": "Ауэзовский", "4": "Бостандыкский",
  "5": "Жетысуский", "6": "Медеуский", "7": "Наурызбайский", "8": "Турксибский",
}
const DISTRICT_COLORS = ["#3b82f6","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4","#6366f1","#ef4444"]

function KpiCard({ label, value, sub, color, Icon }: { label: string; value: string; sub: string; color: string; Icon: React.ElementType }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="h-3.5 w-3.5" style={{ color }} />
        <p className="text-[11px] text-muted-foreground">{label}</p>
      </div>
      <p className="mt-1 text-2xl font-bold leading-none" style={{ color }}>{value}</p>
      <p className="mt-1 text-[10px] text-muted-foreground">{sub}</p>
    </div>
  )
}

export function BuildingsAnalytics({ buildings }: Props) {
  const analytics = useMemo(() => {
    if (!buildings.length) return null

    const total = buildings.length
    const inAlmaty = buildings.filter(b => !b.is_not_in_almaty).length
    const outsideAlmaty = buildings.filter(b => b.is_not_in_almaty).length

    const getGasStatus = (b: Building) => b.gas_connected ?? b.has_gas
    const withGas = buildings.filter(b => getGasStatus(b) === true).length
    const withoutGas = buildings.filter(b => getGasStatus(b) === false).length
    const unknownGas = buildings.filter(b => getGasStatus(b) == null).length

    const getCategory = (b: Building) => {
      const cat = (b.category || "").toLowerCase()
      if (cat.includes("ижс") || cat.includes("izhs")) return "izhs"
      if (cat.includes("сусн") || cat.includes("susn")) return "susn"
      return "general"
    }
    const general = buildings.filter(b => getCategory(b) === "general").length
    const izhs = buildings.filter(b => getCategory(b) === "izhs").length
    const susn = buildings.filter(b => getCategory(b) === "susn").length

    const canConnect = buildings.filter(b => b.gas_connection_available === true).length
    const notLegalized = buildings.filter(b => b.property_not_legalized === true).length
    const notEligible = buildings.filter(b => b.property_not_eligible_for_gas_connection === true).length
    const noFunds = buildings.filter(b => b.no_funds_for_gas_connection === true).length
    const seasonalUnused = buildings.filter(b => b.is_seasonal_or_unused === true).length
    const withBathhouse = buildings.filter(b => b.has_private_bathhouse === true).length

    const byDistrict = Object.entries(DISTRICT_LABELS).map(([id, name], i) => {
      const db = buildings.filter(b => b.district_id === parseInt(id))
      return {
        name, total: db.length,
        withGas: db.filter(b => getGasStatus(b) === true).length,
        withoutGas: db.filter(b => getGasStatus(b) === false).length,
        izhs: db.filter(b => getCategory(b) === "izhs").length,
        susn: db.filter(b => getCategory(b) === "susn").length,
        pct: total > 0 ? parseFloat((db.length / total * 100).toFixed(1)) : 0,
        color: DISTRICT_COLORS[i],
      }
    }).filter(d => d.total > 0).sort((a, b) => b.total - a.total)

    const buildingTypeCounts: Record<string, number> = {}
    buildings.forEach(b => {
      const t = b.building_type || b.building_type_raw || "Не указано"
      buildingTypeCounts[t] = (buildingTypeCounts[t] || 0) + 1
    })
    const allBuildingTypes = Object.entries(buildingTypeCounts).sort((a, b) => b[1] - a[1])

    const gasConnectedPct = total > 0 ? parseFloat((withGas / total * 100).toFixed(1)) : 0
    const inAlmatyPct = total > 0 ? parseFloat((inAlmaty / total * 100).toFixed(1)) : 0

    return {
      total, inAlmaty, outsideAlmaty, withGas, withoutGas, unknownGas,
      general, izhs, susn, canConnect, notLegalized, notEligible, noFunds,
      seasonalUnused, withBathhouse, byDistrict, allBuildingTypes,
      gasConnectedPct, inAlmatyPct,
    }
  }, [buildings])

  if (!analytics) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <AlertCircle className="h-10 w-10 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Нет данных — загрузите здания на карте</p>
      </div>
    )
  }

  const gasDonutData = [
    { name: "С газом",    value: analytics.withGas,    color: "#22c55e" },
    { name: "Без газа",   value: analytics.withoutGas,  color: "#f97316" },
    { name: "Неизвестно", value: analytics.unknownGas,  color: "#94a3b8" },
  ].filter(d => d.value > 0)

  const categoryDonutData = [
    { name: "Жилые", value: analytics.general, color: "#3b82f6" },
    { name: "ИЖС",   value: analytics.izhs,    color: "#8b5cf6" },
    { name: "СУСН",  value: analytics.susn,    color: "#ec4899" },
  ].filter(d => d.value > 0)

  const reasonsData = [
    { name: "Не узаконен",       value: analytics.notLegalized, color: "#ef4444" },
    { name: "Не подлежит газиф.", value: analytics.notEligible,  color: "#f97316" },
    { name: "Нет средств",        value: analytics.noFunds,      color: "#eab308" },
  ].filter(d => d.value > 0).sort((a, b) => b.value - a.value)

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-5 p-4 pb-16">

        {/* KPI row */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          <KpiCard label="Всего зданий"  value={analytics.total.toLocaleString()}    sub="объектов в базе"        color="#3b82f6" Icon={Building2}   />
          <KpiCard label="В Алматы"      value={analytics.inAlmaty.toLocaleString()} sub={`${analytics.inAlmatyPct}% от общего`} color="#22c55e" Icon={MapPin}     />
          <KpiCard label="С газом"       value={analytics.withGas.toLocaleString()}  sub={`${analytics.gasConnectedPct}% газифицировано`} color="#22c55e" Icon={CheckCircle} />
          <KpiCard label="Без газа"      value={analytics.withoutGas.toLocaleString()} sub="требуют газификации" color="#f97316" Icon={Flame}       />
          <KpiCard label="ИЖС"           value={analytics.izhs.toLocaleString()}     sub="индивидуальные дома"   color="#8b5cf6" Icon={Home}        />
          <KpiCard label="СУСН"          value={analytics.susn.toLocaleString()}     sub="соц. уязвимые слои"    color="#ec4899" Icon={Users}       />
        </div>

        {/* Gas donut + Categories donut */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">Статус газоснабжения</h3>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={gasDonutData} dataKey="value" cx="50%" cy="50%" innerRadius={42} outerRadius={72}>
                    {gasDonutData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip formatter={(v, n) => [`${v.toLocaleString()} зд.`, n]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2 text-xs">
                {gasDonutData.map(c => (
                  <div key={c.name} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-muted-foreground">{c.name}</span>
                    <span className="ml-auto font-semibold tabular-nums">{c.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">Распределение по категориям</h3>
            <div className="flex items-center gap-4">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={categoryDonutData} dataKey="value" cx="50%" cy="50%" innerRadius={42} outerRadius={72}>
                    {categoryDonutData.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip formatter={(v, n) => [`${v.toLocaleString()} зд.`, n]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-2 text-xs">
                {categoryDonutData.map(c => (
                  <div key={c.name} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-muted-foreground">{c.name}</span>
                    <span className="ml-auto font-semibold tabular-nums">{c.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Districts horizontal bar */}
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold">Рейтинг районов по количеству зданий</h3>
          <ResponsiveContainer width="100%" height={Math.max(160, analytics.byDistrict.length * 32)}>
            <BarChart data={analytics.byDistrict} layout="vertical" margin={{ left: 4, right: 48, top: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
              <XAxis type="number" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} width={96} stroke="var(--muted-foreground)" />
              <Tooltip formatter={(v: number) => [v.toLocaleString(), "Зданий"]} />
              <Bar dataKey="total" radius={[0, 4, 4, 0]}>
                {analytics.byDistrict.map((e, i) => <Cell key={i} fill={e.color} />)}
                <LabelList dataKey="total" position="right" style={{ fontSize: 10 }} formatter={(v: number) => v.toLocaleString()} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Reasons for no gas + Additional */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {reasonsData.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold">Причины отсутствия газа</h3>
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={reasonsData} layout="vertical" margin={{ left: 4, right: 48, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                  <XAxis type="number" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                  <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} width={120} stroke="var(--muted-foreground)" />
                  <Tooltip formatter={(v: number) => [v.toLocaleString(), "Зданий"]} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {reasonsData.map((e, i) => <Cell key={i} fill={e.color} />)}
                    <LabelList dataKey="value" position="right" style={{ fontSize: 10 }} formatter={(v: number) => v.toLocaleString()} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">Дополнительная статистика</h3>
            <div className="space-y-2">
              {[
                { label: "Можно подключить к газу", value: analytics.canConnect,      color: "#22c55e", Icon: Zap         },
                { label: "Не узаконен",              value: analytics.notLegalized,    color: "#ef4444", Icon: Ban         },
                { label: "Не подлежит газификации",  value: analytics.notEligible,     color: "#f97316", Icon: Shield      },
                { label: "Нет средств",              value: analytics.noFunds,         color: "#eab308", Icon: DollarSign  },
                { label: "Сезонные / неиспольз.",    value: analytics.seasonalUnused,  color: "#a855f7", Icon: AlertCircle },
                { label: "С баней",                  value: analytics.withBathhouse,   color: "#06b6d4", Icon: Thermometer },
                { label: "За пределами Алматы",      value: analytics.outsideAlmaty,   color: "#94a3b8", Icon: Target      },
              ].map(({ label, value, color, Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" style={{ color }} />
                  <span className="flex-1 text-xs text-muted-foreground truncate">{label}</span>
                  <span className="text-xs font-semibold tabular-nums">{value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Building types table */}
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Типы зданий</h3>
            <span className="text-[11px] text-muted-foreground">{analytics.allBuildingTypes.length} типов</span>
          </div>
          <div className="max-h-80 overflow-y-auto rounded-lg">
            <table className="w-full text-xs">
              <thead className="sticky top-0 border-b border-border bg-card">
                <tr className="text-muted-foreground">
                  <th className="py-2 w-8 text-center font-medium">#</th>
                  <th className="py-2 text-left font-medium">Тип</th>
                  <th className="py-2 text-right font-medium">Кол-во</th>
                  <th className="py-2 pl-3 text-right font-medium">Доля</th>
                </tr>
              </thead>
              <tbody>
                {analytics.allBuildingTypes.map(([type, count], i) => {
                  const pct = analytics.total > 0 ? (count / analytics.total * 100) : 0
                  return (
                    <tr key={type} className="border-b border-border/40 hover:bg-muted/30">
                      <td className="py-1.5 text-center text-muted-foreground">{i + 1}</td>
                      <td className="py-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <div className="relative flex-1 h-4 rounded overflow-hidden bg-muted/30">
                            <div className="absolute inset-y-0 left-0 rounded bg-primary/20"
                              style={{ width: `${Math.min(100, pct * 3)}%` }} />
                            <span className="absolute inset-0 flex items-center px-2 font-medium">{type}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-1.5 pr-2 text-right font-semibold tabular-nums">{count.toLocaleString()}</td>
                      <td className="py-1.5 text-right text-muted-foreground tabular-nums">{pct.toFixed(1)}%</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* District details table */}
        <div className="rounded-xl border border-border bg-card p-4">
          <h3 className="mb-3 text-sm font-semibold">Детальная статистика по районам</h3>
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-xs">
              <thead className="border-b border-border">
                <tr className="text-muted-foreground">
                  <th className="py-2 text-left font-medium">Район</th>
                  <th className="py-2 text-right font-medium">Всего</th>
                  <th className="py-2 text-right font-medium">С газом</th>
                  <th className="py-2 text-right font-medium">Без газа</th>
                  <th className="py-2 text-right font-medium">ИЖС</th>
                  <th className="py-2 text-right font-medium">СУСН</th>
                  <th className="py-2 text-right font-medium">Доля</th>
                </tr>
              </thead>
              <tbody>
                {analytics.byDistrict.map((d) => (
                  <tr key={d.name} className="border-b border-border/40 hover:bg-muted/30">
                    <td className="py-1.5 pr-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                        <span className="font-medium">{d.name}</span>
                      </div>
                    </td>
                    <td className="py-1.5 pr-2 text-right font-semibold tabular-nums">{d.total.toLocaleString()}</td>
                    <td className="py-1.5 pr-2 text-right tabular-nums text-green-500">{d.withGas.toLocaleString()}</td>
                    <td className="py-1.5 pr-2 text-right tabular-nums text-orange-500">{d.withoutGas.toLocaleString()}</td>
                    <td className="py-1.5 pr-2 text-right tabular-nums text-violet-500">{d.izhs.toLocaleString()}</td>
                    <td className="py-1.5 pr-2 text-right tabular-nums text-pink-500">{d.susn.toLocaleString()}</td>
                    <td className="py-1.5 text-right tabular-nums text-muted-foreground">{d.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
