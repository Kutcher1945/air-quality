"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { HeaderMenu } from "@/components/header-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, AlertCircle, CheckCircle, Flame } from "lucide-react"

// Динамически загружаем карту для избежания SSR проблем
const BuildingsMap = dynamic(() => import("../../components/buildings-map"), { ssr: false })

const DISTRICT_LABELS: Record<string, string> = {
  "1": "Алатауский район",
  "2": "Алмалинский район",
  "3": "Ауэзовский район",
  "4": "Бостандыкский район",
  "5": "Жетысуский район",
  "6": "Медеуский район",
  "7": "Наурызбайский район",
  "8": "Турксибский район",
}

interface Building {
  id: string
  address: string
  district: string
  latitude: number
  longitude: number
  has_gas: boolean
  building_type: string
  building_category: "general" | "izhs" | "susn"
  district_id?: number | null
  geometry?: {
    type: string
    coordinates: any
  } | null
  floors?: number
  apartments?: number
  year_built?: number
  last_updated?: string
}

export default function BuildingsWithoutGasPage() {
  const [buildings, setBuildings] = useState<Building[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [districtFilter, setDistrictFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [buildingTypeFilter, setBuildingTypeFilter] = useState<string>("all") // all, izhs, susn
  const [showHeatmap, setShowHeatmap] = useState(false)

  useEffect(() => {
    fetchBuildings()
  }, [])

  const fetchBuildings = async () => {
    try {
      setLoading(true)
      setError(null)

      // ✅ Fetch from combined all-sources endpoint (returns all categories pre-labeled)
      const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/buildings-without-gas/all-sources/")

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      const data = await response.json()
      const apiBuildings = data.data || data

      // Transform API response to match component interface
      const buildingsData: Building[] = (apiBuildings || [])
        .map((b: any) => {
          const catStr = (b.category || "").toLowerCase()
          let category: "general" | "izhs" | "susn" = "general"
          if (catStr.includes("ижс") || catStr.includes("izhs")) category = "izhs"
          else if (catStr.includes("сусн") || catStr.includes("susn")) category = "susn"

          const districtLabel =
            b.district && typeof b.district === "string"
              ? b.district
              : b.district_id && DISTRICT_LABELS[String(b.district_id)]
                ? DISTRICT_LABELS[String(b.district_id)]
                : b.district_id
                  ? `Район ${b.district_id}`
                  : "Не указан"

          return {
            id: b.id?.toString() || crypto.randomUUID(),
            address: b.address || "Без адреса",
            district: districtLabel,
            district_id: b.district_id,
            latitude: b.lat ?? b.latitude,
            longitude: b.lon ?? b.longitude,
            has_gas: false,
            building_type:
              category === "izhs"
                ? "Индивидуальное жилищное строительство"
                : category === "susn"
                  ? "Социально уязвимые слои населения"
                  : "Жилое здание",
            building_category: category,
            geometry: b.geometry || null,
          }
        })
        .filter((b: Building) => b.latitude && b.longitude) // Only buildings with coordinates

      setBuildings(buildingsData)
    } catch (error) {
      console.error("Failed to fetch buildings from API:", error)
      setError("Не удалось загрузить данные из API")
      setBuildings(getMockBuildings())
    } finally {
      setLoading(false)
    }
  }

  // Тестовые данные для демонстрации
  const getMockBuildings = (): Building[] => {
    return [
      {
        id: "1",
        address: "ул. Абая, 150",
        district: "Алмалинский район",
        latitude: 43.2566,
        longitude: 76.9286,
        has_gas: false,
        building_type: "Жилой дом",
        building_category: "general",
        floors: 9,
        apartments: 72,
        year_built: 1985,
      },
      {
        id: "2",
        address: "пр. Достык, 234",
        district: "Медеуский район",
        latitude: 43.2378,
        longitude: 76.9458,
        has_gas: false,
        building_type: "Жилой дом",
        building_category: "general",
        floors: 5,
        apartments: 40,
        year_built: 1978,
      },
      {
        id: "3",
        address: "ул. Тимирязева, 42",
        district: "Бостандыкский район",
        latitude: 43.2221,
        longitude: 76.8515,
        has_gas: false,
        building_type: "Жилой дом",
        building_category: "general",
        floors: 12,
        apartments: 144,
        year_built: 1990,
      },
      {
        id: "4",
        address: "ул. Розыбакиева, 180",
        district: "Алатауский район",
        latitude: 43.2145,
        longitude: 76.8967,
        has_gas: false,
        building_type: "Жилой дом",
        building_category: "general",
        floors: 16,
        apartments: 192,
        year_built: 2005,
      },
      {
        id: "5",
        address: "мкр. Самал-2, 58",
        district: "Медеуский район",
        latitude: 43.2456,
        longitude: 76.9567,
        has_gas: false,
        building_type: "Жилой дом",
        building_category: "general",
        floors: 9,
        apartments: 108,
        year_built: 1988,
      },
    ]
  }

  const filteredBuildings = buildings.filter((building) => {
    const matchesDistrict = districtFilter === "all" || building.district === districtFilter
    const matchesSearch =
      searchQuery === "" ||
      building.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      building.district.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by building type
    const matchesType = buildingTypeFilter === "all" || building.building_category === buildingTypeFilter

    return matchesDistrict && matchesSearch && matchesType
  })

  const districts = Array.from(new Set(buildings.map((b) => b.district))).sort()
  const categoryCounts = {
    general: buildings.filter((b) => b.building_category === "general").length,
    izhs: buildings.filter((b) => b.building_category === "izhs").length,
    susn: buildings.filter((b) => b.building_category === "susn").length,
  }
  const filteredCounts = {
    general: filteredBuildings.filter((b) => b.building_category === "general").length,
    izhs: filteredBuildings.filter((b) => b.building_category === "izhs").length,
    susn: filteredBuildings.filter((b) => b.building_category === "susn").length,
  }

  const uniqueMarkerCount = new Set(buildings.map((b) => `${b.latitude},${b.longitude}`)).size

  const stats = {
    total: buildings.length,
    uniqueMarkers: uniqueMarkerCount,
    byCategory: {
      general: categoryCounts.general,
      izhs: categoryCounts.izhs,
      susn: categoryCounts.susn,
    },
    withoutGas: buildings.filter((b) => !b.has_gas).length,
    totalApartments: buildings.reduce((sum, b) => sum + (b.apartments || 0), 0),
  }

  return (
    <>
      <main className="relative h-screen w-screen overflow-hidden">
        {/* Full-screen Map Background */}
        <div className="absolute inset-0 z-0">
          {loading ? (
            <div className="flex h-full items-center justify-center bg-background text-muted-foreground">
              Загрузка карты...
            </div>
          ) : error ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-background">
              <AlertCircle className="h-12 w-12 text-orange-500" />
              <p className="text-red-500 font-semibold">{error}</p>
              <p className="text-sm text-muted-foreground">Используются тестовые данные для демонстрации</p>
              <Button variant="outline" size="sm" onClick={fetchBuildings}>
                Попробовать снова
              </Button>
            </div>
          ) : (
            <BuildingsMap buildings={filteredBuildings} showHeatmap={showHeatmap} />
          )}
        </div>

        {/* Floating UI Elements */}
        <div className="relative z-10 h-full w-full pointer-events-none">
          {/* Top Header Bar - Title + Buttons + Search + Filters */}
          <div className="absolute top-0 left-0 right-0 pointer-events-auto z-20">
            <div className="bg-white border-b border-gray-200/80 backdrop-blur-xl bg-white/90">
              <div className="px-4 py-3">
                <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
                  {/* Title Section */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-gray-400 font-medium leading-tight">
                        ИНФРАСТРУКТУРА / АЛМАТЫ
                      </p>
                      <h1 className="text-sm font-semibold text-gray-900 leading-tight mt-0.5">Здания без газа</h1>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setShowHeatmap(!showHeatmap)}
                      className={`h-8 px-3 rounded-lg text-xs font-medium transition-all ${
                        showHeatmap
                          ? "bg-gray-900 text-white shadow-sm"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Flame className="inline-block mr-1.5 h-3.5 w-3.5" />
                      {showHeatmap ? "Маркеры" : "Тепловая карта"}
                    </button>
                    <button
                      onClick={fetchBuildings}
                      className="h-8 px-3 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all"
                    >
                      Обновить
                    </button>
                  </div>

                  {/* Search and Filters */}
                  <div className="flex gap-2 flex-wrap flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Поиск по адресу"
                      className="h-8 rounded-lg border border-gray-200 bg-white px-3 text-xs flex-1 min-w-[150px] focus:outline-none focus:border-gray-400 transition-colors"
                    />
                    <select
                      value={districtFilter}
                      onChange={(e) => setDistrictFilter(e.target.value)}
                      className="h-8 rounded-lg border border-gray-200 bg-white px-3 text-xs focus:outline-none focus:border-gray-400 transition-colors"
                    >
                      <option value="all">Все районы</option>
                      {districts.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                    <select
                      value={buildingTypeFilter}
                      onChange={(e) => setBuildingTypeFilter(e.target.value)}
                      className="h-8 rounded-lg border border-gray-200 bg-white px-3 text-xs focus:outline-none focus:border-gray-400 transition-colors"
                    >
                      <option value="all">Все типы</option>
                      <option value="general">ALSECO</option>
                      <option value="izhs">ИЖС</option>
                      <option value="susn">СУСН</option>
                    </select>
                  </div>

                  {/* Count */}
                  <div className="text-[10px] text-gray-400 whitespace-nowrap flex-shrink-0 font-medium">
                    {filteredBuildings.length} / {buildings.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Sidebar - Statistics Cards Stacked Vertically */}
          <div className="absolute top-[70px] left-0 w-[150px] flex flex-col gap-2.5 pointer-events-auto z-10">
            <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-gray-400">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ВСЕГО</p>
              <p className="text-[2.75rem] font-bold text-gray-900 leading-none tabular-nums">{stats.uniqueMarkers}</p>
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-orange-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ALSECO</p>
              <p className="text-[2.75rem] font-bold text-orange-600 leading-none tabular-nums">{stats.byCategory.general}</p>
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-blue-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ИЖС</p>
              <p className="text-[2.75rem] font-bold text-blue-600 leading-none tabular-nums">{stats.byCategory.izhs}</p>
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-red-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">СУСН</p>
              <p className="text-[2.75rem] font-bold text-red-600 leading-none tabular-nums">{stats.byCategory.susn}</p>
            </div>
          </div>

          {/* Info Card - Bottom Left */}
          <div className="absolute bottom-6 left-0 w-[220px] pointer-events-auto z-10">
            <div className="bg-white border-r border-gray-200/80 backdrop-blur-xl bg-white/90 rounded-r-xl p-3 shadow-sm">
              <details className="group">
                <summary className="cursor-pointer text-[10px] font-semibold text-gray-900 list-none flex items-center justify-between">
                  <span>Информация</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-2 space-y-2 text-[9px] text-gray-600 leading-relaxed">
                  <p>
                    Карта показывает жилые здания Алматы без централизованного газоснабжения.
                  </p>
                  <p>
                    Здания используют альтернативное отопление: электрическое, централизованное или автономное.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
