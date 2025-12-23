"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import dynamic from "next/dynamic"
import { HeaderMenu } from "@/components/header-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, AlertCircle, CheckCircle, Flame, Download, X, Calendar, Layers, Home, HelpCircle, RefreshCw } from "lucide-react"
import { getBuildingsFromCache, saveBuildingsToCache, clearBuildingsCache } from "@/lib/buildingsCache"

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
  is_not_in_almaty?: boolean
  geometry?: {
    type: string
    coordinates: any
  } | null
  floors?: number
  apartments?: number
  year_built?: number
  last_updated?: string
}

interface RenovationArea {
  id: number
  name_ru: string
  name_kz?: string | null
  address?: string | null
  number_of_houses?: number | null
  number_of_apartments?: number | null
  plot_area?: string | null
  photo_url?: string | null
  geometry?: {
    type: string
    coordinates: any
  } | null
  created_at: string
}

export default function BuildingsWithoutGasPage() {
  const [buildings, setBuildings] = useState<Building[]>([])
  const [renovationAreas, setRenovationAreas] = useState<RenovationArea[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [districtFilter, setDistrictFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [buildingTypeFilter, setBuildingTypeFilter] = useState<string>("all") // all, izhs, susn
  const [showHeatmap, setShowHeatmap] = useState(false)
  const [showRenovationAreas, setShowRenovationAreas] = useState(true)
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null)
  const [showSidePanel, setShowSidePanel] = useState(false)
  const [yearFilter, setYearFilter] = useState<{ min: number; max: number } | null>(null)
  const [floorsFilter, setFloorsFilter] = useState<{ min: number; max: number } | null>(null)
  const [apartmentsFilter, setApartmentsFilter] = useState<{ min: number; max: number } | null>(null)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    fetchBuildings()
    fetchRenovationAreas()
  }, [])

  const handleBuildingClick = useCallback((building: Building) => {
    setSelectedBuilding(building)
    setShowSidePanel(true)
  }, [])

  const fetchBuildings = async (forceRefresh = false) => {
    try {
      setLoading(true)
      setError(null)

      // Try to get data from cache first (unless force refresh)
      if (!forceRefresh) {
        const cachedData = await getBuildingsFromCache()
        if (cachedData && cachedData.length > 0) {
          console.log("💾 Loading from cache:", cachedData.length, "buildings")
          const buildingsData = transformBuildingsData(cachedData)
          console.log("🏢 Transformed from cache:", {
            total: buildingsData.length,
            byCategory: {
              general: buildingsData.filter(b => b.building_category === "general").length,
              izhs: buildingsData.filter(b => b.building_category === "izhs").length,
              susn: buildingsData.filter(b => b.building_category === "susn").length,
            }
          })
          setBuildings(buildingsData)
          setLoading(false)
          return
        }
      }

      console.log("📡 Fetching from API...")
      // ✅ Fetch from combined all-sources endpoint (returns all categories pre-labeled)
      const response = await fetch("http://localhost:8000/api/v1/address/buildings-without-gas/all-sources/")

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      const data = await response.json()
      const apiBuildings = data.data || data

      console.log("📊 API Response:", {
        totalFromAPI: apiBuildings?.length || 0,
        sampleData: apiBuildings?.[0],
      })

      // Save raw API data to cache for next time
      await saveBuildingsToCache(apiBuildings)

      // Transform API response to match component interface
      const buildingsData = transformBuildingsData(apiBuildings)

      console.log("🏢 Transformed Buildings:", {
        total: buildingsData.length,
        withCoordinates: buildingsData.filter(b => b.latitude && b.longitude).length,
        byCategory: {
          general: buildingsData.filter(b => b.building_category === "general").length,
          izhs: buildingsData.filter(b => b.building_category === "izhs").length,
          susn: buildingsData.filter(b => b.building_category === "susn").length,
        }
      })

      console.log("📍 Map will display:", buildingsData.length, "markers")

      setBuildings(buildingsData)
    } catch (error) {
      console.error("Failed to fetch buildings from API:", error)
      setError("Не удалось загрузить данные из API")
      setBuildings(getMockBuildings())
    } finally {
      setLoading(false)
    }
  }

  const fetchRenovationAreas = async () => {
    try {
      console.log("📡 Fetching renovation areas...")
      const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/renovation-areas/")

      if (!response.ok) {
        throw new Error(`Renovation areas API returned ${response.status}`)
      }

      const data = await response.json()
      console.log("🏗️ Renovation areas fetched:", data)

      // Handle GeoJSON FeatureCollection format from DRF GeoFeatureModelSerializer
      let features = []
      if (data.results && data.results.type === 'FeatureCollection') {
        // Paginated GeoJSON response
        features = data.results.features || []
      } else if (data.type === 'FeatureCollection') {
        // Direct GeoJSON FeatureCollection
        features = data.features || []
      } else if (Array.isArray(data)) {
        // Direct array
        features = data
      } else if (data.results && Array.isArray(data.results)) {
        // Paginated array
        features = data.results
      }

      console.log("📍 Processing", features.length, "renovation area features")

      // Transform GeoJSON features
      const transformedAreas = features.map((area: any) => {
        if (area.type === 'Feature') {
          // GeoJSON Feature format
          return {
            id: area.id || area.properties?.id,
            name_ru: area.properties?.name_ru,
            name_kz: area.properties?.name_kz,
            address: area.properties?.address,
            number_of_houses: area.properties?.number_of_houses,
            number_of_apartments: area.properties?.number_of_apartments,
            plot_area: area.properties?.plot_area,
            photo_url: area.properties?.photo_url,
            geometry: area.geometry,
            created_at: area.properties?.created_at
          }
        }
        // Already in correct format
        return area
      })

      console.log("✅ Transformed renovation areas:", transformedAreas)
      setRenovationAreas(transformedAreas)
      console.log("✅ Loaded", transformedAreas.length, "renovation areas")
    } catch (error) {
      console.error("Failed to fetch renovation areas:", error)
      // Don't show error to user, just log it
    }
  }

  // Helper function to transform API data
  const transformBuildingsData = (apiBuildings: any[]): Building[] => {
    return (apiBuildings || [])
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
          latitude: b.lat ?? b.latitude ?? null,
          longitude: b.lon ?? b.longitude ?? null,
          has_gas: false,
          building_type:
            category === "izhs"
              ? "Индивидуальное жилищное строительство"
              : category === "susn"
                ? "Социально уязвимые слои населения"
                : "Жилое здание",
          building_category: category,
          is_not_in_almaty: b.is_not_in_almaty || false,
          geometry: b.geometry || null,
        }
      })
      // Don't filter out buildings without coordinates - keep ALL buildings for stats
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

  // Export functionality
  const exportToCSV = () => {
    const csvData = filteredBuildings.map((b) => ({
      Адрес: b.address,
      Район: b.district,
      Тип: b.building_type,
      Категория: b.building_category === "general" ? "ALSECO" : b.building_category === "izhs" ? "ИЖС" : "СУСН",
      Этажей: b.floors || "Н/Д",
      Квартир: b.apartments || "Н/Д",
      "Год постройки": b.year_built || "Н/Д",
      Широта: b.latitude,
      Долгота: b.longitude,
    }))

    const headers = Object.keys(csvData[0] || {})
    const csvContent = [
      headers.join(","),
      ...csvData.map((row) =>
        headers.map((header) => `"${row[header as keyof typeof row]}"`).join(",")
      ),
    ].join("\n")

    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `buildings-without-gas-${buildingTypeFilter}-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportToJSON = () => {
    const jsonData = JSON.stringify(filteredBuildings, null, 2)
    const blob = new Blob([jsonData], { type: "application/json" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `buildings-without-gas-${buildingTypeFilter}-${new Date().toISOString().split("T")[0]}.json`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const filteredBuildings = useMemo(() => {
    return buildings.filter((building) => {
      const matchesDistrict = districtFilter === "all" || building.district === districtFilter
      const matchesSearch =
        searchQuery === "" ||
        building.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        building.district.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by building type
      const matchesType = buildingTypeFilter === "all" || building.building_category === buildingTypeFilter

      // Advanced filters
      const matchesYear = !yearFilter || (building.year_built && building.year_built >= yearFilter.min && building.year_built <= yearFilter.max)
      const matchesFloors = !floorsFilter || (building.floors && building.floors >= floorsFilter.min && building.floors <= floorsFilter.max)
      const matchesApartments = !apartmentsFilter || (building.apartments && building.apartments >= apartmentsFilter.min && building.apartments <= apartmentsFilter.max)

      return matchesDistrict && matchesSearch && matchesType && matchesYear && matchesFloors && matchesApartments
    })
  }, [buildings, districtFilter, searchQuery, buildingTypeFilter, yearFilter, floorsFilter, apartmentsFilter])

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
  const withCoordinates = buildings.filter((b) => b.latitude && b.longitude).length
  const withoutCoordinates = buildings.length - withCoordinates

  const stats = {
    total: buildings.length,
    uniqueMarkers: uniqueMarkerCount,
    withCoordinates,
    withoutCoordinates,
    byCategory: {
      general: categoryCounts.general,
      izhs: categoryCounts.izhs,
      susn: categoryCounts.susn,
    },
    withoutGas: buildings.filter((b) => !b.has_gas).length,
    totalApartments: buildings.reduce((sum, b) => sum + (b.apartments || 0), 0),
    notInAlmaty: buildings.filter((b) => b.is_not_in_almaty === true).length,
    notInAlmatyGeneral: buildings.filter((b) => b.is_not_in_almaty === true && b.building_category === "general").length,
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
              <Button variant="outline" size="sm" onClick={() => fetchBuildings(true)}>
                Попробовать снова
              </Button>
            </div>
          ) : (
            <BuildingsMap
              buildings={filteredBuildings.filter(b => b.latitude && b.longitude)}
              renovationAreas={renovationAreas}
              showHeatmap={showHeatmap}
              showRenovationAreas={showRenovationAreas}
              onBuildingClick={handleBuildingClick}
            />
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
                      onClick={() => fetchBuildings(true)}
                      disabled={loading}
                      className="h-8 px-3 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all disabled:opacity-50"
                      title="Обновить данные из API"
                    >
                      <RefreshCw className={`inline-block mr-1.5 h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
                      Обновить
                    </button>

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
                      onClick={() => setShowRenovationAreas(!showRenovationAreas)}
                      className={`h-8 px-3 rounded-lg text-xs font-medium transition-all ${
                        showRenovationAreas
                          ? "bg-purple-600 text-white shadow-sm"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Layers className="inline-block mr-1.5 h-3.5 w-3.5" />
                      Реновация
                    </button>

                    {/* Export Dropdown */}
                    <div className="relative group">
                      <button className="h-8 px-3 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all">
                        <Download className="inline-block mr-1.5 h-3.5 w-3.5" />
                        Экспорт
                      </button>
                      <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[140px]">
                        <button
                          onClick={exportToCSV}
                          className="w-full text-left px-3 py-2 text-xs hover:bg-gray-50 first:rounded-t-lg"
                        >
                          CSV формат
                        </button>
                        <button
                          onClick={exportToJSON}
                          className="w-full text-left px-3 py-2 text-xs hover:bg-gray-50 last:rounded-b-lg"
                        >
                          JSON формат
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                      className={`h-8 px-3 rounded-lg text-xs font-medium transition-all ${
                        showAdvancedFilters
                          ? "bg-gray-900 text-white shadow-sm"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Layers className="inline-block mr-1.5 h-3.5 w-3.5" />
                      Фильтры
                    </button>

                    {/* <button
                      onClick={() => fetchBuildings(true)}
                      className="h-8 px-3 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all"
                    >
                      Обновить
                    </button> */}

                    {/* Help Button */}
                    <div className="relative group">
                      <button className="h-8 w-8 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center">
                        <HelpCircle className="h-4 w-4" />
                      </button>
                      <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 w-[240px] p-3">
                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium mb-2">Инструкция:</p>
                        <ul className="space-y-1.5 text-[10px] text-gray-600">
                          <li className="flex items-start gap-1.5">
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>Нажмите на маркер для просмотра деталей здания</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>Используйте фильтры для поиска по параметрам</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>Экспортируйте данные в CSV или JSON формате</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>Переключайтесь между маркерами и тепловой картой</span>
                          </li>
                        </ul>
                        <div className="mt-3 pt-2 border-t border-gray-200">
                          <button
                            onClick={async () => {
                              await clearBuildingsCache()
                              fetchBuildings(true)
                            }}
                            className="w-full h-6 rounded text-[10px] font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                          >
                            Очистить кэш
                          </button>
                        </div>
                      </div>
                    </div>
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
                      <option value="izhs">Данные Районных акиматов</option>
                      <option value="susn">Данные ДЧС</option>
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
          <div className="absolute top-[70px] left-0 w-[170px] flex flex-col gap-2.5 pointer-events-auto z-10">
            {/* Show all category cards when "Все типы" is selected */}
            {buildingTypeFilter === "all" ? (
              <>
                <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-4 px-5 shadow-sm border-r-[3px] border-gray-400">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5 font-medium">ВСЕГО</p>
                  <p className="text-[2.5rem] font-bold text-gray-900 leading-none tabular-nums">{stats.total}</p>
                  <p className="text-[8px] text-gray-400 mt-2 leading-tight">объектов</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-4 px-5 shadow-sm border-r-[3px] border-green-500">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5 font-medium">С КООРДИНАТАМИ</p>
                  <p className="text-[2.5rem] font-bold text-green-600 leading-none tabular-nums">{stats.withCoordinates}</p>
                  <p className="text-[8px] text-green-400 mt-2 leading-tight">на карте</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-4 px-5 shadow-sm border-r-[3px] border-amber-500">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5 font-medium">БЕЗ КООРДИНАТ</p>
                  <p className="text-[2.5rem] font-bold text-amber-600 leading-none tabular-nums">{stats.withoutCoordinates}</p>
                  <p className="text-[8px] text-amber-400 mt-2 leading-tight">не на карте</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-4 px-5 shadow-sm border-r-[3px] border-purple-500">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5 font-medium">УНИКАЛЬНЫХ</p>
                  <p className="text-[2.5rem] font-bold text-purple-600 leading-none tabular-nums">{stats.uniqueMarkers}</p>
                  <p className="text-[8px] text-purple-400 mt-2 leading-tight">координат</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-4 px-5 shadow-sm border-r-[3px] border-orange-500">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5 font-medium">ALSECO</p>
                  <p className="text-[2.5rem] font-bold text-orange-600 leading-none tabular-nums">{stats.byCategory.general}</p>
                  <p className="text-[8px] text-orange-400 mt-2 leading-tight">жилых зданий</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-4 px-5 shadow-sm border-r-[3px] border-blue-500">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5 font-medium">Данные Районных акиматов</p>
                  <p className="text-[2.5rem] font-bold text-blue-600 leading-none tabular-nums">{stats.byCategory.izhs}</p>
                  <p className="text-[8px] text-blue-400 mt-2 leading-tight">домов</p>
                </div>

                <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-4 px-5 shadow-sm border-r-[3px] border-red-500">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-gray-500 mb-1.5 font-medium">Данные ДЧС</p>
                  <p className="text-[2.5rem] font-bold text-red-600 leading-none tabular-nums">{stats.byCategory.susn}</p>
                  <p className="text-[8px] text-red-400 mt-2 leading-tight">домов</p>
                </div>
              </>
            ) : (
              /* Show only the selected category statistics */
              <>
                {buildingTypeFilter === "general" ? (
                  /* ALSECO specific cards */
                  <>
                    <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-orange-500">
                      <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ВСЕГО ALSECO</p>
                      <p className="text-[2.75rem] font-bold text-orange-600 leading-none tabular-nums">
                        {categoryCounts.general}
                      </p>
                      <p className="text-[7.5px] text-orange-400 mt-1.5 leading-tight">жилых зданий</p>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-purple-500">
                      <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ВСЕГО УНИКАЛЬНЫХ ALSECO</p>
                      <p className="text-[2.75rem] font-bold text-purple-600 leading-none tabular-nums">
                        {new Set(buildings.filter((b) => b.building_category === "general").map((b) => `${b.latitude},${b.longitude}`)).size}
                      </p>
                      <p className="text-[7.5px] text-purple-400 mt-1.5 leading-tight">координат</p>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-red-500">
                      <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ALSECO НЕ В АЛМАТЫ</p>
                      <p className="text-[2.75rem] font-bold text-red-600 leading-none tabular-nums">
                        {buildings.filter((b) => b.building_category === "general" && b.is_not_in_almaty === true).length}
                      </p>
                      <p className="text-[7.5px] text-red-400 mt-1.5 leading-tight">за пределами</p>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-green-500">
                      <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ALSECO В АЛМАТЫ</p>
                      <p className="text-[2.75rem] font-bold text-green-600 leading-none tabular-nums">
                        {buildings.filter((b) => b.building_category === "general" && !b.is_not_in_almaty).length}
                      </p>
                      <p className="text-[7.5px] text-green-400 mt-1.5 leading-tight">в городе</p>
                    </div>
                  </>
                ) : (
                  /* Other types (ИЖС, СУСН) */
                  <>
                    <div className={`bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] ${
                      buildingTypeFilter === "izhs" ? "border-blue-500" : "border-red-500"
                    }`}>
                      <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">
                        {buildingTypeFilter === "izhs" ? "ИЖС" : "СУСН"}
                      </p>
                      <p className={`text-[2.75rem] font-bold leading-none tabular-nums ${
                        buildingTypeFilter === "izhs" ? "text-blue-600" : "text-red-600"
                      }`}>
                        {filteredCounts.general + filteredCounts.izhs + filteredCounts.susn}
                      </p>
                      <p className={`text-[7.5px] mt-1.5 leading-tight ${
                        buildingTypeFilter === "izhs" ? "text-blue-400" : "text-red-400"
                      }`}>
                        {buildingTypeFilter === "izhs" ? "частных домов" : "многоквартирных"}
                      </p>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-gray-400">
                      <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">УНИКАЛЬНЫХ</p>
                      <p className="text-[2.75rem] font-bold text-gray-900 leading-none tabular-nums">
                        {new Set(filteredBuildings.map((b) => `${b.latitude},${b.longitude}`)).size}
                      </p>
                      <p className="text-[7.5px] text-gray-400 mt-1.5 leading-tight">координат на карте</p>
                    </div>

                    <div className="bg-white/95 backdrop-blur-xl rounded-r-xl py-3.5 px-4 shadow-sm border-r-[3px] border-gray-400">
                      <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">РАЙОНОВ</p>
                      <p className="text-[2.75rem] font-bold text-gray-900 leading-none tabular-nums">
                        {new Set(filteredBuildings.map((b) => b.district)).size}
                      </p>
                      <p className="text-[7.5px] text-gray-400 mt-1.5 leading-tight">охвачено</p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Info Card - Bottom Left */}
          {/* <div className="absolute bottom-6 left-0 w-[220px] pointer-events-auto z-10">
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
          </div> */}

          {/* Advanced Filters Panel - Top Right */}
          {showAdvancedFilters && (
            <div className="absolute top-[70px] right-4 w-[280px] pointer-events-auto z-20">
              <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-semibold text-gray-900">Расширенные фильтры</h3>
                  <button
                    onClick={() => setShowAdvancedFilters(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Year Filter */}
                  <div>
                    <label className="text-[10px] font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Год постройки
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={yearFilter?.min || ""}
                        onChange={(e) => setYearFilter(prev => ({ min: Number(e.target.value), max: prev?.max || 2025 }))}
                        className="w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={yearFilter?.max || ""}
                        onChange={(e) => setYearFilter(prev => ({ min: prev?.min || 1900, max: Number(e.target.value) }))}
                        className="w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>

                  {/* Floors Filter */}
                  <div>
                    <label className="text-[10px] font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                      <Layers className="h-3 w-3" />
                      Количество этажей
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={floorsFilter?.min || ""}
                        onChange={(e) => setFloorsFilter(prev => ({ min: Number(e.target.value), max: prev?.max || 100 }))}
                        className="w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={floorsFilter?.max || ""}
                        onChange={(e) => setFloorsFilter(prev => ({ min: prev?.min || 1, max: Number(e.target.value) }))}
                        className="w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>

                  {/* Apartments Filter */}
                  <div>
                    <label className="text-[10px] font-medium text-gray-700 mb-1.5 flex items-center gap-1">
                      <Home className="h-3 w-3" />
                      Количество квартир
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={apartmentsFilter?.min || ""}
                        onChange={(e) => setApartmentsFilter(prev => ({ min: Number(e.target.value), max: prev?.max || 1000 }))}
                        className="w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={apartmentsFilter?.max || ""}
                        onChange={(e) => setApartmentsFilter(prev => ({ min: prev?.min || 1, max: Number(e.target.value) }))}
                        className="w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                      />
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  <button
                    onClick={() => {
                      setYearFilter(null)
                      setFloorsFilter(null)
                      setApartmentsFilter(null)
                    }}
                    className="w-full h-7 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                  >
                    Сбросить фильтры
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Side Panel for Building Details */}
          {showSidePanel && selectedBuilding && (
            <div className="absolute top-0 right-0 h-full w-[380px] pointer-events-auto z-30">
              <div className="h-full bg-white shadow-2xl border-l border-gray-200 overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                      selectedBuilding.building_category === "general" ? "bg-orange-100" :
                      selectedBuilding.building_category === "izhs" ? "bg-blue-100" : "bg-red-100"
                    }`}>
                      <Building2 className={`h-4 w-4 ${
                        selectedBuilding.building_category === "general" ? "text-orange-600" :
                        selectedBuilding.building_category === "izhs" ? "text-blue-600" : "text-red-600"
                      }`} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-gray-400 font-medium">Детали здания</p>
                      <h2 className="text-xs font-semibold text-gray-900">
                        {selectedBuilding.building_category === "general" ? "ALSECO" :
                         selectedBuilding.building_category === "izhs" ? "ИЖС" : "СУСН"}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowSidePanel(false)
                      setSelectedBuilding(null)
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Address */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Адрес</p>
                    <p className="text-sm font-medium text-gray-900">{selectedBuilding.address}</p>
                  </div>

                  {/* District */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Район</p>
                    <p className="text-sm text-gray-700">{selectedBuilding.district}</p>
                  </div>

                  {/* Building Info Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {selectedBuilding.floors && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Этажей</p>
                        <p className="text-xl font-bold text-gray-900">{selectedBuilding.floors}</p>
                      </div>
                    )}
                    {selectedBuilding.apartments && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Квартир</p>
                        <p className="text-xl font-bold text-gray-900">{selectedBuilding.apartments}</p>
                      </div>
                    )}
                    {selectedBuilding.year_built && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Год постройки</p>
                        <p className="text-xl font-bold text-gray-900">{selectedBuilding.year_built}</p>
                      </div>
                    )}
                  </div>

                  {/* Coordinates */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-2">Координаты</p>
                    <div className="bg-gray-50 rounded-lg p-3 space-y-1 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Широта:</span>
                        <span className="text-gray-900">{selectedBuilding.latitude.toFixed(6)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Долгота:</span>
                        <span className="text-gray-900">{selectedBuilding.longitude.toFixed(6)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Building Type */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Тип здания</p>
                    <p className="text-sm text-gray-700">{selectedBuilding.building_type}</p>
                  </div>

                  {/* Gas Status */}
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-orange-900">Отсутствует газоснабжение</p>
                        <p className="text-[10px] text-orange-700 mt-0.5">
                          Здание использует альтернативные источники отопления
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
