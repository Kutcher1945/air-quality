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
  is_seasonal_or_unused?: boolean
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

interface District {
  id: number
  name: string
  geometry?: {
    type: string
    coordinates: any
  } | null
}

export default function BuildingsWithoutGasPage() {
  const [buildings, setBuildings] = useState<Building[]>([])
  const [renovationAreas, setRenovationAreas] = useState<RenovationArea[]>([])
  const [districts, setDistricts] = useState<District[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState({ loaded: 0, total: 0, status: "" })
  const [loadingElapsed, setLoadingElapsed] = useState(0)
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
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null)
  const [showOnlySeasonalUnused, setShowOnlySeasonalUnused] = useState(false)

  useEffect(() => {
    fetchBuildings()
    fetchRenovationAreas()
    fetchDistricts()
  }, [])

  // Timer for elapsed loading time
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (loading) {
      setLoadingElapsed(0)
      interval = setInterval(() => {
        setLoadingElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [loading])

  const handleBuildingClick = useCallback((building: Building) => {
    setSelectedBuilding(building)
    setShowSidePanel(true)
  }, [])

  const handleDistrictFilterChange = useCallback((districtName: string) => {
    setDistrictFilter(districtName)

    // Find the district ID from the name
    if (districtName === "all") {
      setSelectedDistrictId(null)
    } else {
      // Find district ID by matching name in DISTRICT_LABELS
      const districtId = Object.entries(DISTRICT_LABELS).find(([_, name]) => name === districtName)?.[0]
      if (districtId) {
        setSelectedDistrictId(parseInt(districtId))
      } else {
        setSelectedDistrictId(null)
      }
    }
  }, [])

  const fetchBuildings = async (forceRefresh = false) => {
    try {
      setLoading(true)
      setError(null)
      setLoadingProgress({ loaded: 0, total: 0, status: "Проверка кэша..." })

      // Try to get data from cache first (unless force refresh)
      if (!forceRefresh) {
        const cachedData = await getBuildingsFromCache()
        if (cachedData && cachedData.length > 0) {
          console.log("💾 Loading from cache:", cachedData.length, "buildings")
          setLoadingProgress({ loaded: 0, total: cachedData.length, status: "Загрузка из кэша..." })

          // Show progress animation
          await new Promise(resolve => setTimeout(resolve, 300))
          setLoadingProgress({ loaded: cachedData.length, total: cachedData.length, status: "Обработка данных..." })

          const buildingsData = transformBuildingsData(cachedData)
          console.log("🏢 Transformed from cache:", {
            total: buildingsData.length,
            byCategory: {
              general: buildingsData.filter(b => b.building_category === "general").length,
              izhs: buildingsData.filter(b => b.building_category === "izhs").length,
              susn: buildingsData.filter(b => b.building_category === "susn").length,
            }
          })

          await new Promise(resolve => setTimeout(resolve, 200))
          setLoadingProgress({ loaded: buildingsData.length, total: buildingsData.length, status: "Готово!" })
          setBuildings(buildingsData)

          await new Promise(resolve => setTimeout(resolve, 300))
          setLoading(false)
          return
        }
      }

      console.log("📡 Fetching from API...")
      setLoadingProgress({ loaded: 0, total: 0, status: "Подключение к серверу..." })

      // Show intermediate messages and simulate progress for long fetch
      const updateMessages = [
        { delay: 1500, status: "Отправка запроса..." },
        { delay: 3000, status: "Загрузка данных (~50,000 объектов)..." },
        { delay: 5000, status: "Получение данных с сервера..." },
        { delay: 7000, status: "Обработка большого объема данных..." },
        { delay: 10000, status: "Почти готово, еще немного..." },
        { delay: 13000, status: "Завершение загрузки..." },
      ]

      const timeouts = updateMessages.map(({ delay, status }) =>
        setTimeout(() => setLoadingProgress({ loaded: 0, total: 0, status }), delay)
      )

      // ✅ Fetch from combined all-sources endpoint (returns all categories pre-labeled)
      const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/buildings-without-gas/all-sources/")

      // Clear all timeouts
      timeouts.forEach(clearTimeout)

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      setLoadingProgress({ loaded: 0, total: 0, status: "Получение данных..." })
      const data = await response.json()
      const apiBuildings = data.data || data

      console.log("📊 API Response:", {
        totalFromAPI: apiBuildings?.length || 0,
        sampleData: apiBuildings?.[0],
      })

      await new Promise(resolve => setTimeout(resolve, 200))
      setLoadingProgress({ loaded: apiBuildings.length, total: apiBuildings.length, status: "Обработка данных..." })

      // Save raw API data to cache for next time
      await saveBuildingsToCache(apiBuildings)

      await new Promise(resolve => setTimeout(resolve, 200))
      setLoadingProgress({ loaded: apiBuildings.length, total: apiBuildings.length, status: "Трансформация данных..." })
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

      await new Promise(resolve => setTimeout(resolve, 200))
      setLoadingProgress({ loaded: buildingsData.length, total: buildingsData.length, status: "Готово!" })
      setBuildings(buildingsData)

      await new Promise(resolve => setTimeout(resolve, 300))
    } catch (error) {
      console.error("Failed to fetch buildings from API:", error)
      setError("Не удалось загрузить данные из API")
      setBuildings(getMockBuildings())
    } finally {
      setLoading(false)
      setLoadingProgress({ loaded: 0, total: 0, status: "" })
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

  const fetchDistricts = async () => {
    try {
      console.log("📡 Fetching districts...")
      const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/districts/")

      if (!response.ok) {
        throw new Error(`Districts API returned ${response.status}`)
      }

      const data = await response.json()
      console.log("🗺️ Districts fetched:", data)

      // Handle GeoJSON FeatureCollection format
      let features = []
      if (data.results && data.results.type === 'FeatureCollection') {
        features = data.results.features || []
      } else if (data.type === 'FeatureCollection') {
        features = data.features || []
      } else if (Array.isArray(data)) {
        features = data
      } else if (data.results && Array.isArray(data.results)) {
        features = data.results
      }

      console.log("📍 Processing", features.length, "district features")

      // Transform and filter districts (exclude id 0 and 9)
      const transformedDistricts = features
        .map((district: any) => {
          if (district.type === 'Feature') {
            return {
              id: district.id || district.properties?.id,
              name: district.properties?.name || district.properties?.name_ru || `District ${district.id}`,
              geometry: district.geometry,
            }
          }
          return {
            id: district.id,
            name: district.name || district.name_ru || `District ${district.id}`,
            geometry: district.geometry,
          }
        })
        .filter((d: District) => d.id !== 0 && d.id !== 9) // Exclude districts with id 0 and 9

      console.log("✅ Transformed districts:", transformedDistricts)
      setDistricts(transformedDistricts)
      console.log("✅ Loaded", transformedDistricts.length, "districts (excluded id 0 and 9)")
    } catch (error) {
      console.error("Failed to fetch districts:", error)
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
          is_seasonal_or_unused: b.is_seasonal_or_unused || false,
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
      // ONLY SHOW GENERAL (ALSECO) BUILDINGS
      const isGeneral = building.building_category === "general"
      if (!isGeneral) return false

      // Filter for seasonal/unused buildings only
      if (showOnlySeasonalUnused && building.is_seasonal_or_unused !== true) return false

      const matchesDistrict = districtFilter === "all" || building.district === districtFilter
      const matchesSearch =
        searchQuery === "" ||
        building.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        building.district.toLowerCase().includes(searchQuery.toLowerCase())

      // Filter by building type (keeping for backward compatibility, but always "general" now)
      const matchesType = buildingTypeFilter === "all" || building.building_category === buildingTypeFilter

      // Advanced filters
      const matchesYear = !yearFilter || (building.year_built && building.year_built >= yearFilter.min && building.year_built <= yearFilter.max)
      const matchesFloors = !floorsFilter || (building.floors && building.floors >= floorsFilter.min && building.floors <= floorsFilter.max)
      const matchesApartments = !apartmentsFilter || (building.apartments && building.apartments >= apartmentsFilter.min && building.apartments <= apartmentsFilter.max)

      return matchesDistrict && matchesSearch && matchesType && matchesYear && matchesFloors && matchesApartments
    })
  }, [buildings, districtFilter, searchQuery, buildingTypeFilter, yearFilter, floorsFilter, apartmentsFilter, showOnlySeasonalUnused])

  // Only show districts from general (ALSECO) buildings
  const generalBuildings = buildings.filter((b) => b.building_category === "general")
  const districtNames = Array.from(new Set(generalBuildings.map((b) => b.district)))
    .filter((name) => name !== "Район 9" && name !== "Не указан")
    .sort()
  const categoryCounts = {
    general: generalBuildings.length,
    izhs: buildings.filter((b) => b.building_category === "izhs").length,
    susn: buildings.filter((b) => b.building_category === "susn").length,
  }
  const filteredCounts = {
    general: filteredBuildings.filter((b) => b.building_category === "general").length,
    izhs: filteredBuildings.filter((b) => b.building_category === "izhs").length,
    susn: filteredBuildings.filter((b) => b.building_category === "susn").length,
  }

  // Calculate stats only for general (ALSECO) buildings
  const uniqueMarkerCount = new Set(generalBuildings.map((b) => `${b.latitude},${b.longitude}`)).size
  const withCoordinates = generalBuildings.filter((b) => b.latitude && b.longitude).length
  const withoutCoordinates = generalBuildings.length - withCoordinates

  const stats = {
    total: generalBuildings.length,
    uniqueMarkers: uniqueMarkerCount,
    withCoordinates,
    withoutCoordinates,
    byCategory: {
      general: categoryCounts.general,
      izhs: categoryCounts.izhs,
      susn: categoryCounts.susn,
    },
    withoutGas: generalBuildings.filter((b) => !b.has_gas).length,
    totalApartments: generalBuildings.reduce((sum, b) => sum + (b.apartments || 0), 0),
    notInAlmaty: generalBuildings.filter((b) => b.is_not_in_almaty === true).length,
    notInAlmatyGeneral: generalBuildings.filter((b) => b.is_not_in_almaty === true && b.building_category === "general").length,
    seasonalOrUnused: generalBuildings.filter((b) => b.is_seasonal_or_unused === true).length,
  }

  return (
    <>
      <main className="relative h-screen w-screen overflow-hidden">
        {/* Full-screen Map Background */}
        <div className="absolute inset-0 z-0">
          {loading ? (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
                <div className="flex items-center justify-center mb-6">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  {loadingProgress.status || "Загрузка..."}
                </h3>
                {loadingProgress.total > 0 && (
                  <>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${(loadingProgress.loaded / loadingProgress.total) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 text-center">
                      {loadingProgress.loaded.toLocaleString()} / {loadingProgress.total.toLocaleString()} объектов
                    </p>
                  </>
                )}
                {/* Elapsed time */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-xs text-gray-400">Время загрузки:</span>
                  <span className="text-sm font-mono font-medium text-blue-600">
                    {Math.floor(loadingElapsed / 60)}:{(loadingElapsed % 60).toString().padStart(2, '0')}
                  </span>
                </div>
                {loadingElapsed > 15 && (
                  <p className="text-xs text-amber-600 text-center mt-2">
                    ⏳ Загрузка занимает больше времени чем обычно...
                  </p>
                )}
                {loadingElapsed > 30 && (
                  <p className="text-xs text-orange-600 text-center mt-1">
                    Сервер обрабатывает ~50,000 записей. Пожалуйста, подождите.
                  </p>
                )}
                {loadingElapsed > 60 && (
                  <button
                    onClick={() => {
                      setLoading(false)
                      setError("Превышено время ожидания. Попробуйте позже.")
                    }}
                    className="mt-3 w-full py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    Отменить загрузку
                  </button>
                )}
              </div>
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
              districts={districts}
              selectedDistrictId={selectedDistrictId}
              showHeatmap={showHeatmap}
              showRenovationAreas={showRenovationAreas}
              onBuildingClick={handleBuildingClick}
            />
          )}
        </div>

        {/* Floating UI Elements */}
        <div className="relative z-10 h-full w-full pointer-events-none">
          {/* Left Sidebar - Controls & Filters */}
          <div className="absolute top-0 left-0 bottom-0 w-[280px] pointer-events-auto z-20">
            <div className="h-full bg-white border-r border-gray-200/80 backdrop-blur-xl bg-white/95 shadow-lg flex flex-col">
              {/* Header */}
              <div className="px-4 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-md">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-gray-400 font-semibold leading-tight">
                      ИНФРАСТРУКТУРА / АЛМАТЫ
                    </p>
                    <h1 className="text-base font-bold text-gray-900 leading-tight mt-0.5">Здания без газа</h1>
                  </div>
                </div>
              </div>

              {/* Results Counter */}
              <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 font-medium">Результаты:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-bold text-blue-600 tabular-nums">
                      {filteredBuildings.length.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-400">/</span>
                    <span className="text-sm text-gray-500 tabular-nums">
                      {generalBuildings.length.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Controls Section */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                  {/* Search */}
                  <div>
                    <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      🔍 Поиск
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Введите адрес..."
                        className="h-9 w-full rounded-lg border-2 border-gray-200 bg-white pl-3 pr-8 text-xs focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* District Filter */}
                  <div>
                    <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      📍 Район
                    </label>
                    <select
                      value={districtFilter}
                      onChange={(e) => handleDistrictFilterChange(e.target.value)}
                      className="h-9 w-full rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white px-3 text-xs font-semibold text-blue-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm cursor-pointer"
                    >
                      <option value="all">Все районы</option>
                      {districtNames.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2">
                    <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      ⚙️ Действия
                    </label>
                    <div className="space-y-2">
                      <button
                        onClick={() => fetchBuildings(true)}
                        disabled={loading}
                        className="w-full h-9 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
                        Обновить данные
                      </button>

                      <button
                        onClick={() => setShowHeatmap(!showHeatmap)}
                        className={`w-full h-9 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                          showHeatmap
                            ? "bg-gray-900 text-white shadow-sm"
                            : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <Flame className="h-3.5 w-3.5" />
                        {showHeatmap ? "Показать маркеры" : "Тепловая карта"}
                      </button>

                      <button
                        onClick={() => setShowRenovationAreas(!showRenovationAreas)}
                        className={`w-full h-9 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                          showRenovationAreas
                            ? "bg-purple-600 text-white shadow-sm"
                            : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <Layers className="h-3.5 w-3.5" />
                        Реновация {showRenovationAreas ? "✓" : ""}
                      </button>

                      <button
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                        className={`w-full h-9 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${
                          showAdvancedFilters
                            ? "bg-gray-900 text-white shadow-sm"
                            : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <Layers className="h-3.5 w-3.5" />
                        Доп. фильтры {showAdvancedFilters ? "✓" : ""}
                      </button>
                    </div>
                  </div>

                  {/* Export Section */}
                  <div className="pt-2">
                    <label className="text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      📥 Экспорт
                    </label>
                    <div className="space-y-2">
                      <button
                        onClick={exportToCSV}
                        className="w-full h-9 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Экспорт в CSV
                      </button>
                      <button
                        onClick={exportToJSON}
                        className="w-full h-9 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Экспорт в JSON
                      </button>
                      <button
                        onClick={async () => {
                          await clearBuildingsCache()
                          fetchBuildings(true)
                        }}
                        className="w-full h-9 rounded-lg text-xs font-medium bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-all flex items-center justify-center gap-2"
                      >
                        Очистить кэш
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Cards - Right Side */}
          <div className="absolute top-4 right-0 w-[170px] flex flex-col gap-2.5 pointer-events-auto z-10">
            {/* ALSECO specific cards in logical order */}

            {/* 1. Total ALSECO */}
            <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-orange-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ВСЕГО ALSECO</p>
              <p className="text-[2.75rem] font-bold text-orange-600 leading-none tabular-nums">
                {categoryCounts.general}
              </p>
              <p className="text-[7.5px] text-orange-400 mt-1.5 leading-tight">жилых зданий</p>
            </div>
            
            {/* 3. ALSECO not in Almaty */}
            <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-red-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ALSECO НЕ В АЛМАТЫ</p>
              <p className="text-[2.75rem] font-bold text-red-600 leading-none tabular-nums">
                {generalBuildings.filter((b) => b.is_not_in_almaty === true).length}
              </p>
              <p className="text-[7.5px] text-red-400 mt-1.5 leading-tight">за пределами</p>
            </div>

            {/* 2. ALSECO in Almaty */}
            <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-blue-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ALSECO В АЛМАТЫ</p>
              <p className="text-[2.75rem] font-bold text-blue-600 leading-none tabular-nums">
                {generalBuildings.filter((b) => !b.is_not_in_almaty).length}
              </p>
              <p className="text-[7.5px] text-blue-400 mt-1.5 leading-tight">в городе</p>
            </div>

            

            {/* 4. ALSECO with coordinates IN ALMATY */}
            <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-green-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ALSECO С КООРДИНАТАМИ В АЛМАТЫ</p>
              <p className="text-[2.75rem] font-bold text-green-600 leading-none tabular-nums">
                {generalBuildings.filter((b) => !b.is_not_in_almaty && b.latitude && b.longitude).length}
              </p>
              <p className="text-[7.5px] text-green-400 mt-1.5 leading-tight">на карте в городе</p>
            </div>

            {/* 5. ALSECO without coordinates IN ALMATY */}
            <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-amber-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ALSECO БЕЗ КООРДИНАТ В АЛМАТЫ</p>
              <p className="text-[2.75rem] font-bold text-amber-600 leading-none tabular-nums">
                {generalBuildings.filter((b) => !b.is_not_in_almaty && (!b.latitude || !b.longitude)).length}
              </p>
              <p className="text-[7.5px] text-amber-400 mt-1.5 leading-tight">в городе без координат</p>
            </div>

            {/* 6. Unique coordinates */}
            <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-purple-500">
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">УНИКАЛЬНЫХ КООРДИНАТ</p>
              <p className="text-[2.75rem] font-bold text-purple-600 leading-none tabular-nums">
                {new Set(generalBuildings.filter((b) => !b.is_not_in_almaty && b.latitude && b.longitude).map((b) => `${b.latitude},${b.longitude}`)).size}
              </p>
              <p className="text-[7.5px] text-purple-400 mt-1.5 leading-tight">точек на карте</p>
            </div>

            {/* 7. Seasonal or Unused ALSECO buildings */}
            <div className={`bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] ${showOnlySeasonalUnused ? 'border-pink-600 ring-2 ring-pink-200' : 'border-pink-500'}`}>
              <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">СЕЗОННЫЕ / НЕИСПОЛЬЗУЕМЫЕ</p>
              <p className="text-[2.75rem] font-bold text-pink-600 leading-none tabular-nums">
                {generalBuildings.filter((b) => b.is_seasonal_or_unused === true).length}
              </p>
              <p className="text-[7.5px] text-pink-400 mt-1.5 leading-tight">ALSECO зданий</p>
              <button
                onClick={() => setShowOnlySeasonalUnused(!showOnlySeasonalUnused)}
                className={`mt-2 w-full h-6 rounded text-[9px] font-medium transition-all flex items-center justify-center gap-1 ${
                  showOnlySeasonalUnused
                    ? "bg-pink-600 text-white shadow-sm"
                    : "bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100"
                }`}
              >
                {showOnlySeasonalUnused ? "✓ Показаны" : "❄️ Показать на карте"}
              </button>
            </div>
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
