"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import {
  ArrowLeft, Building2, MapPin, Flame, CheckCircle, AlertCircle, HelpCircle,
  Home, Users, TrendingUp, PieChart, BarChart3, RefreshCw, ArrowUpRight,
  ArrowDownRight, Zap, Shield, Ban, DollarSign, Thermometer, FileText,
  ChevronRight, Activity, Target, Layers
} from "lucide-react"
import { getBuildingsFromCache } from "@/lib/buildingsCache"

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
}

const DISTRICT_LABELS: Record<string, string> = {
  "1": "Алатауский",
  "2": "Алмалинский",
  "3": "Ауэзовский",
  "4": "Бостандыкский",
  "5": "Жетысуский",
  "6": "Медеуский",
  "7": "Наурызбайский",
  "8": "Турксибский",
}

const DISTRICT_COLORS: Record<string, string> = {
  "1": "#3B82F6",
  "2": "#8B5CF6",
  "3": "#EC4899",
  "4": "#F59E0B",
  "5": "#10B981",
  "6": "#06B6D4",
  "7": "#6366F1",
  "8": "#EF4444",
}

export default function AnalyticsPage() {
  const [buildings, setBuildings] = useState<Building[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const cached = await getBuildingsFromCache()
      if (cached) {
        setBuildings(cached)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  const analytics = useMemo(() => {
    if (buildings.length === 0) return null

    const total = buildings.length
    const inAlmaty = buildings.filter(b => !b.is_not_in_almaty).length
    const outsideAlmaty = buildings.filter(b => b.is_not_in_almaty).length

    // Gas status - use gas_connected field (from API cache)
    const getGasStatus = (b: Building) => (b as any).gas_connected ?? b.has_gas
    const withGas = buildings.filter(b => getGasStatus(b) === true).length
    const withoutGas = buildings.filter(b => getGasStatus(b) === false).length
    const unknownGas = buildings.filter(b => getGasStatus(b) === null || getGasStatus(b) === undefined).length

    // Categories - use raw category field from API cache
    const getCategory = (b: Building) => {
      const cat = ((b as any).category || "").toLowerCase()
      if (cat.includes("ижс") || cat.includes("izhs")) return "izhs"
      if (cat.includes("сусн") || cat.includes("susn")) return "susn"
      return "general"
    }
    const general = buildings.filter(b => getCategory(b) === "general").length
    const izhs = buildings.filter(b => getCategory(b) === "izhs").length
    const susn = buildings.filter(b => getCategory(b) === "susn").length

    // Gas connection availability
    const canConnect = buildings.filter(b => b.gas_connection_available === true).length
    const cannotConnect = buildings.filter(b => b.gas_connection_available === false).length

    // Reasons for no gas
    const notLegalized = buildings.filter(b => b.property_not_legalized === true).length
    const notEligible = buildings.filter(b => b.property_not_eligible_for_gas_connection === true).length
    const noFunds = buildings.filter(b => b.no_funds_for_gas_connection === true).length

    // Seasonal/unused
    const seasonalUnused = buildings.filter(b => b.is_seasonal_or_unused === true).length

    // Bathhouse
    const withBathhouse = buildings.filter(b => b.has_private_bathhouse === true).length

    // By district
    const byDistrict = Object.entries(DISTRICT_LABELS).map(([id, name]) => {
      const districtBuildings = buildings.filter(b => b.district_id === parseInt(id))
      const distTotal = districtBuildings.length
      return {
        id: parseInt(id),
        name,
        total: distTotal,
        withGas: districtBuildings.filter(b => getGasStatus(b) === true).length,
        withoutGas: districtBuildings.filter(b => getGasStatus(b) === false).length,
        izhs: districtBuildings.filter(b => getCategory(b) === "izhs").length,
        susn: districtBuildings.filter(b => getCategory(b) === "susn").length,
        percentage: total > 0 ? (distTotal / total * 100) : 0,
        color: DISTRICT_COLORS[id],
      }
    }).sort((a, b) => b.total - a.total)

    // Building types distribution - show ALL types
    const buildingTypes: Record<string, number> = {}
    buildings.forEach(b => {
      const type = (b as any).building_type || b.building_type_raw || "Не указано"
      buildingTypes[type] = (buildingTypes[type] || 0) + 1
    })
    const allBuildingTypes = Object.entries(buildingTypes)
      .sort((a, b) => b[1] - a[1])

    // Calculate percentages
    const gasConnectedPercent = total > 0 ? (withGas / total * 100) : 0
    const inAlmatyPercent = total > 0 ? (inAlmaty / total * 100) : 0

    return {
      total,
      inAlmaty,
      outsideAlmaty,
      withGas,
      withoutGas,
      unknownGas,
      general,
      izhs,
      susn,
      canConnect,
      cannotConnect,
      notLegalized,
      notEligible,
      noFunds,
      seasonalUnused,
      withBathhouse,
      byDistrict,
      allBuildingTypes,
      gasConnectedPercent,
      inAlmatyPercent,
    }
  }, [buildings])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500/30 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin absolute top-0"></div>
          </div>
          <span className="text-white/70 text-sm">Загрузка аналитики...</span>
        </div>
      </div>
    )
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center gap-4">
        <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center">
          <AlertCircle className="h-10 w-10 text-orange-500" />
        </div>
        <p className="text-white/70">Нет данных для анализа</p>
        <Link href="/buildings-without-gas" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> Вернуться на карту
        </Link>
      </div>
    )
  }

  const DonutChart = ({ value, max, color, size = 120 }: { value: number; max: number; color: string; size?: number }) => {
    const percentage = max > 0 ? (value / max) * 100 : 0
    const circumference = 2 * Math.PI * 45
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <svg width={size} height={size} viewBox="0 0 100 100" className="transform -rotate-90">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-white/10" />
        <circle
          cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
          strokeLinecap="round" className="transition-all duration-1000 ease-out"
        />
      </svg>
    )
  }

  const MiniBar = ({ value, max, color }: { value: number; max: number; color: string }) => (
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{ width: `${max > 0 ? (value / max) * 100 : 0}%`, backgroundColor: color }}
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Premium Header */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/buildings-without-gas"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] text-emerald-400 uppercase">Analytics Dashboard</p>
                <h1 className="text-xl font-bold text-white">Аналитика зданий</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] text-white/40 uppercase tracking-wider">Всего объектов</p>
              <p className="text-2xl font-bold text-white">{analytics.total.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Buildings */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Building2 className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Всего зданий</span>
              </div>
              <p className="text-4xl font-bold text-white mb-1">{analytics.total.toLocaleString()}</p>
              <p className="text-sm text-white/50">объектов в базе</p>
            </div>
          </div>

          {/* In Almaty */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">В Алматы</span>
              </div>
              <p className="text-4xl font-bold text-white mb-1">{analytics.inAlmaty.toLocaleString()}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-emerald-400 font-semibold">{analytics.inAlmatyPercent.toFixed(1)}%</span>
                <span className="text-sm text-white/50">от общего</span>
              </div>
            </div>
          </div>

          {/* With Gas */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">С газом</span>
              </div>
              <p className="text-4xl font-bold text-white mb-1">{analytics.withGas.toLocaleString()}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-400 font-semibold">{analytics.gasConnectedPercent.toFixed(1)}%</span>
                <span className="text-sm text-white/50">газифицировано</span>
              </div>
            </div>
          </div>

          {/* Without Gas */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Flame className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Без газа</span>
              </div>
              <p className="text-4xl font-bold text-white mb-1">{analytics.withoutGas.toLocaleString()}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-orange-400 font-semibold">{(100 - analytics.gasConnectedPercent).toFixed(1)}%</span>
                <span className="text-sm text-white/50">требуют газификации</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gas Status Distribution */}
          <div className="lg:col-span-1 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-400" />
              Статус газоснабжения
            </h3>

            <div className="flex justify-center mb-6">
              <div className="relative">
                <DonutChart value={analytics.withGas} max={analytics.total} color="#22C55E" size={160} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">{analytics.gasConnectedPercent.toFixed(0)}%</span>
                  <span className="text-xs text-white/50">с газом</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-white/80">С газом</span>
                </div>
                <span className="text-sm font-bold text-green-400">{analytics.withGas.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-white/80">Без газа</span>
                </div>
                <span className="text-sm font-bold text-orange-400">{analytics.withoutGas.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                  <span className="text-sm text-white/80">Неизвестно</span>
                </div>
                <span className="text-sm font-bold text-slate-400">{analytics.unknownGas.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Districts */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              Распределение по районам
            </h3>

            <div className="space-y-3">
              {analytics.byDistrict.map((district, idx) => (
                <div key={district.id} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: district.color }}>
                        {idx + 1}
                      </span>
                      <span className="text-sm text-white/80">{district.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-white/40">{district.percentage.toFixed(1)}%</span>
                      <span className="text-sm font-bold text-white w-16 text-right">{district.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="ml-9">
                    <MiniBar value={district.total} max={analytics.byDistrict[0].total} color={district.color} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories & Reasons Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Categories */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="h-5 w-5 text-purple-400" />
              По категориям
            </h3>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                  <Building2 className="h-6 w-6 text-orange-400" />
                </div>
                <p className="text-2xl font-bold text-white">{analytics.general.toLocaleString()}</p>
                <p className="text-xs text-white/50 mt-1">Жилые</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <Home className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-white">{analytics.izhs.toLocaleString()}</p>
                <p className="text-xs text-white/50 mt-1">ИЖС</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-white">{analytics.susn.toLocaleString()}</p>
                <p className="text-xs text-white/50 mt-1">СУСН</p>
              </div>
            </div>
          </div>

          {/* Reasons for No Gas */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-400" />
              Причины отсутствия газа
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0">
                  <Ban className="h-5 w-5 text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white/80">Объект не узаконен</p>
                  <MiniBar value={analytics.notLegalized} max={Math.max(analytics.notLegalized, analytics.notEligible, analytics.noFunds)} color="#EF4444" />
                </div>
                <span className="text-lg font-bold text-red-400">{analytics.notLegalized.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-orange-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white/80">Не подлежит газификации</p>
                  <MiniBar value={analytics.notEligible} max={Math.max(analytics.notLegalized, analytics.notEligible, analytics.noFunds)} color="#F59E0B" />
                </div>
                <span className="text-lg font-bold text-orange-400">{analytics.notEligible.toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                  <DollarSign className="h-5 w-5 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white/80">Нет средств на подключение</p>
                  <MiniBar value={analytics.noFunds} max={Math.max(analytics.notLegalized, analytics.notEligible, analytics.noFunds)} color="#F59E0B" />
                </div>
                <span className="text-lg font-bold text-amber-400">{analytics.noFunds.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Building Types & Additional Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Building Types */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-indigo-400" />
                Все типы зданий
              </div>
              <span className="text-sm font-normal text-white/50">{analytics.allBuildingTypes.length} типов</span>
            </h3>

            <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-2 gap-3">
                {analytics.allBuildingTypes.map(([type, count], idx) => (
                  <div key={type} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <span className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400 shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/80 truncate">{type}</p>
                    </div>
                    <span className="text-sm font-bold text-white shrink-0">{count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              Дополнительно
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm text-white/80">С баней</span>
                  </div>
                  <span className="text-lg font-bold text-cyan-400">{analytics.withBathhouse.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Home className="h-5 w-5 text-amber-400" />
                    <span className="text-sm text-white/80">Сезонные</span>
                  </div>
                  <span className="text-lg font-bold text-amber-400">{analytics.seasonalUnused.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-emerald-400" />
                    <span className="text-sm text-white/80">Можно подключить</span>
                  </div>
                  <span className="text-lg font-bold text-emerald-400">{analytics.canConnect.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-500/10 border border-slate-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-slate-400" />
                    <span className="text-sm text-white/80">За пределами</span>
                  </div>
                  <span className="text-lg font-bold text-slate-400">{analytics.outsideAlmaty.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* District Details Table */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              Детальная статистика по районам
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">Район</th>
                  <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">Всего</th>
                  <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">С газом</th>
                  <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">Без газа</th>
                  <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">ИЖС</th>
                  <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">СУСН</th>
                  <th className="text-right text-xs font-semibold text-white/50 uppercase tracking-wider px-6 py-4">Доля</th>
                </tr>
              </thead>
              <tbody>
                {analytics.byDistrict.map((district, idx) => (
                  <tr key={district.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: district.color }}></div>
                        <span className="text-sm font-medium text-white">{district.name}</span>
                      </div>
                    </td>
                    <td className="text-right px-6 py-4 text-sm font-bold text-white">{district.total.toLocaleString()}</td>
                    <td className="text-right px-6 py-4 text-sm font-medium text-green-400">{district.withGas.toLocaleString()}</td>
                    <td className="text-right px-6 py-4 text-sm font-medium text-orange-400">{district.withoutGas.toLocaleString()}</td>
                    <td className="text-right px-6 py-4 text-sm font-medium text-blue-400">{district.izhs.toLocaleString()}</td>
                    <td className="text-right px-6 py-4 text-sm font-medium text-purple-400">{district.susn.toLocaleString()}</td>
                    <td className="text-right px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white">
                        {district.percentage.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
