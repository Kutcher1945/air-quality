"use client"

import { useState, useEffect, useCallback, useMemo, useRef, useDeferredValue, useTransition } from "react"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { HeaderMenu } from "@/components/header-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, AlertCircle, CheckCircle, Flame, Download, X, Calendar, Layers, Home, HelpCircle, RefreshCw, Search, ChevronDown, ChevronLeft, Filter, Database, Settings, BarChart3 } from "lucide-react"
import { BuildingsAnalytics } from "./buildings-analytics"
import { getBuildingsFromCache, saveBuildingsToCache, clearBuildingsCache } from "@/lib/buildingsCache"

// Динамически загружаем карту для избежания SSR проблем
const BuildingsMap = dynamic(() => import("../../components/buildings-map-mapbox"), { ssr: false })

const DISTRICT_LABELS: Record<string, string> = {
  "0": "г.Алматы",
  "1": "Алатауский район",
  "2": "Алмалинский район",
  "3": "Ауэзовский район",
  "4": "Бостандыкский район",
  "5": "Жетысуский район",
  "6": "Медеуский район",
  "7": "Наурызбайский район",
  "8": "Турксибский район",
  "9": "БКАД За пределами города"
}

// Residential building types for ИЖС filter
const IZHS_RESIDENTIAL_TYPES = [
  'Не указано',
  'Частный дом',
  'Коттедж',
  'Таунхаус',
  'Сооружение',
  'Малоэтажный жилой дом',
  'Жилой дом',
]

// Non-residential building types for ИЖС filter
const IZHS_NON_RESIDENTIAL_TYPES = [
  'Административное здание',
  'Магазин',
  'Строящееся здание',
  'Автосервис',
  'Общежитие',
  'Хозяйственный корпус',
  'Апартаменты',
  'Кафе, бар',
  'Ветлечебница',
  'Строящийся коттедж',
  'Строящееся административное здание',
  'Производственный корпус',
  'Киоск',
  'Бани, сауны',
  'Гостиница',
  'Планируемая застройка',
  'Строящийся таунхаус',
  'Детский сад, ясли',
  'Религиозное сооружение',
  'Гараж',
  'Ремонтируемое здание',
  'Автомойка',
  'Ресторан',
  'Автоцентр',
  'Склад',
  'Столовая',
  'Торговый павильон',
  'Государственное учреждение',
  'Шиномонтаж',
  'Школа',
  'Спортивное сооружение',
]

interface Building {
  id: string
  address: string
  district: string
  latitude: number
  longitude: number
  has_gas: boolean | null  // null = unknown, true = connected, false = not connected
  building_type: string
  building_type_raw?: string | null  // Raw building type from database (e.g., "Частный дом", "Коттедж")
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
  // Additional fields from Django model
  gas_connection_available?: boolean | null
  type_of_gas?: string | null
  property_not_legalized?: boolean | null
  property_not_eligible_for_gas_connection?: boolean | null
  no_funds_for_gas_connection?: boolean | null
  other_reason?: string | null
  has_private_bathhouse?: boolean | null
  bathhouse_fuel_type?: string | null
  specialist_comment?: string | null
  fio?: string | null
  mobile_home_number?: string | null
  gas_id?: number | null
  inside_izhs?: string | null
  inside_susn?: string | null
  inside_alseco?: string | null
  is_approximate?: boolean | null
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
  const { resolvedTheme } = useTheme()
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
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState<"map" | "analytics">("map")

  // useTransition for non-blocking UI updates
  const [isPending, startTransition] = useTransition()

  // Category visibility checkboxes
  const [showAlseco, setShowAlseco] = useState(true)
  const [showIzhs, setShowIzhs] = useState(false)
  const [showSusn, setShowSusn] = useState(false)
  const [showAlsecoInAlmaty, setShowAlsecoInAlmaty] = useState(true)
  const [showAlsecoNotInAlmaty, setShowAlsecoNotInAlmaty] = useState(false)
  const [showApproximate, setShowApproximate] = useState(true)
  const [showExact, setShowExact] = useState(true)

  // Gas connection filters (all selected by default)
  const [showWithGas, setShowWithGas] = useState(true)
  const [showWithoutGas, setShowWithoutGas] = useState(true)
  const [showUnknownGas, setShowUnknownGas] = useState(true)

  // Selected category for stats panel
  const [selectedStatsCategory, setSelectedStatsCategory] = useState<"general" | "izhs" | "susn">("general")

  // ИЖС building type filters (for "Данные районных акиматов" category)
  const [showIzhsResidential, setShowIzhsResidential] = useState(true)
  const [showIzhsNonResidential, setShowIzhsNonResidential] = useState(false)

  // ALSECO building type filters (ИЖС vs не ИЖС)
  const [showAlsecoIzhsTypes, setShowAlsecoIzhsTypes] = useState(true)
  const [showAlsecoNonIzhsTypes, setShowAlsecoNonIzhsTypes] = useState(true)
  const [showAlsecoIzhsSubfilters, setShowAlsecoIzhsSubfilters] = useState(true)
  const [showAlsecoNonIzhsSubfilters, setShowAlsecoNonIzhsSubfilters] = useState(true)
  const [selectedAlsecoIzhsTypes, setSelectedAlsecoIzhsTypes] = useState<Record<string, boolean>>({
    "Частный дом": true,
    "Коттедж": true,
    "Жилой дом": true,
    "Дом": true,
  })
  const [selectedAlsecoNonIzhsTypes, setSelectedAlsecoNonIzhsTypes] = useState<Record<string, boolean>>({
    "Административное здание": true,
    "Магазин": true,
    "Строящееся здание": true,
    "Автосервис": true,
    "Общежитие": true,
    "Хозяйственный корпус": true,
    "Апартаменты": true,
    "Кафе, бар": true,
    "Ветлечебница": true,
    "Строящийся коттедж": true,
    "Строящееся административное здание": true,
    "Производственный корпус": true,
    "Киоск": true,
    "Бани, сауны": true,
    "Гостиница": true,
    "Планируемая застройка": true,
    "Строящийся таунхаус": true,
    "Детский сад, ясли": true,
    "Религиозное сооружение": true,
    "Гараж": true,
    "Ремонтируемое здание": true,
    "Автомойка": true,
    "Ресторан": true,
    "Автоцентр": true,
    "Склад": true,
    "Столовая": true,
    "Торговый павильон": true,
    "Государственное учреждение": true,
    "Шиномонтаж": true,
    "Школа": true,
    "Спортивное сооружение": true,
    "Таунхаус": true,
    "Сооружение": true,
    "Малоэтажный жилой дом": true,
  })

  const alsecoIzhsLabels = ["Частный дом", "Коттедж", "Жилой дом", "Дом"]
  const alsecoNonIzhsLabels = [
    "Административное здание",
    "Магазин",
    "Строящееся здание",
    "Автосервис",
    "Общежитие",
    "Хозяйственный корпус",
    "Апартаменты",
    "Кафе, бар",
    "Ветлечебница",
    "Строящийся коттедж",
    "Строящееся административное здание",
    "Производственный корпус",
    "Киоск",
    "Бани, сауны",
    "Гостиница",
    "Планируемая застройка",
    "Строящийся таунхаус",
    "Детский сад, ясли",
    "Религиозное сооружение",
    "Гараж",
    "Ремонтируемое здание",
    "Автомойка",
    "Ресторан",
    "Автоцентр",
    "Склад",
    "Столовая",
    "Торговый павильон",
    "Государственное учреждение",
    "Шиномонтаж",
    "Школа",
    "Спортивное сооружение",
    "Таунхаус",
    "Сооружение",
    "Малоэтажный жилой дом",
  ]

  // Defer heavy filtering inputs to keep UI responsive on large datasets
  const deferredSearchQuery = useDeferredValue(searchQuery)
  const deferredDistrictFilter = useDeferredValue(districtFilter)
  const deferredBuildingTypeFilter = useDeferredValue(buildingTypeFilter)
  const deferredYearFilter = useDeferredValue(yearFilter)
  const deferredFloorsFilter = useDeferredValue(floorsFilter)
  const deferredApartmentsFilter = useDeferredValue(apartmentsFilter)
  const deferredShowOnlySeasonalUnused = useDeferredValue(showOnlySeasonalUnused)
  const deferredShowAlseco = useDeferredValue(showAlseco)
  const deferredShowIzhs = useDeferredValue(showIzhs)
  const deferredShowSusn = useDeferredValue(showSusn)
  const deferredShowAlsecoIzhsTypes = useDeferredValue(showAlsecoIzhsTypes)
  const deferredShowAlsecoNonIzhsTypes = useDeferredValue(showAlsecoNonIzhsTypes)
  const deferredShowAlsecoInAlmaty = useDeferredValue(showAlsecoInAlmaty)
  const deferredShowAlsecoNotInAlmaty = useDeferredValue(showAlsecoNotInAlmaty)
  const deferredShowApproximate = useDeferredValue(showApproximate)
  const deferredShowExact = useDeferredValue(showExact)
  const deferredSelectedAlsecoIzhsTypes = useDeferredValue(selectedAlsecoIzhsTypes)
  const deferredSelectedAlsecoNonIzhsTypes = useDeferredValue(selectedAlsecoNonIzhsTypes)
  const deferredSelectedDistrictId = useDeferredValue(selectedDistrictId)
  const deferredShowHeatmap = useDeferredValue(showHeatmap)
  const deferredShowRenovationAreas = useDeferredValue(showRenovationAreas)
  const deferredShowWithGas = useDeferredValue(showWithGas)
  const deferredShowWithoutGas = useDeferredValue(showWithoutGas)
  const deferredShowUnknownGas = useDeferredValue(showUnknownGas)

  const allAlsecoIzhsSelected = useMemo(
    () => alsecoIzhsLabels.every((label) => deferredSelectedAlsecoIzhsTypes[label]),
    [alsecoIzhsLabels, deferredSelectedAlsecoIzhsTypes]
  )
  const allAlsecoNonIzhsSelected = useMemo(
    () => alsecoNonIzhsLabels.every((label) => deferredSelectedAlsecoNonIzhsTypes[label]),
    [alsecoNonIzhsLabels, deferredSelectedAlsecoNonIzhsTypes]
  )
  const alsecoIzhsLabelSet = useMemo(() => new Set(alsecoIzhsLabels), [alsecoIzhsLabels])
  const alsecoNonIzhsLabelSet = useMemo(() => new Set(alsecoNonIzhsLabels), [alsecoNonIzhsLabels])

  const alsecoTypeCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    const allowAnyLocation = deferredShowAlsecoInAlmaty && deferredShowAlsecoNotInAlmaty
    for (const b of buildings) {
      if (b.building_category !== "general") continue
      // Filter by selected district
      if (deferredDistrictFilter !== "all" && b.district !== deferredDistrictFilter) continue
      const rawType = (b.building_type_raw || "").trim()
      if (!rawType) continue
      if (!allowAnyLocation) {
        const isNotInAlmaty = b.is_not_in_almaty === true
        if (deferredShowAlsecoInAlmaty && isNotInAlmaty) continue
        if (deferredShowAlsecoNotInAlmaty && !isNotInAlmaty) continue
        if (!deferredShowAlsecoInAlmaty && !deferredShowAlsecoNotInAlmaty) continue
      }

      const label = rawType === "Не указано" ? "Дом" : rawType
      if (label in counts) {
        counts[label]++
      } else if (alsecoIzhsLabelSet.has(label) || alsecoNonIzhsLabelSet.has(label)) {
        counts[label] = 1
      }
    }
    return counts
  }, [
    buildings,
    deferredDistrictFilter,
    deferredShowAlsecoInAlmaty,
    deferredShowAlsecoNotInAlmaty,
    alsecoIzhsLabelSet,
    alsecoNonIzhsLabelSet,
  ])

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

  // Debug: Log gas filter changes
  useEffect(() => {
    console.log("🔥 GAS FILTER STATE CHANGED:", {
      showWithGas,
      showWithoutGas,
      showUnknownGas,
      allChecked: showWithGas && showWithoutGas && showUnknownGas,
      noneChecked: !showWithGas && !showWithoutGas && !showUnknownGas,
    })
  }, [showWithGas, showWithoutGas, showUnknownGas])

  const handleBuildingClick = useCallback((building: Building) => {
    setSelectedBuilding(building)
    setShowSidePanel(true)
    setSidebarCollapsed(false)
  }, [])

  const handleDistrictFilterChange = useCallback((districtName: string) => {
    startTransition(() => {
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
    })
  }, [startTransition])

  const fetchBuildings = async (forceRefresh = false) => {
    try {
      setLoading(true)
      setError(null)
      setLoadingProgress({ loaded: 0, total: 0, status: "Проверка кэша..." })

      // Try to get data from cache first (unless force refresh)
      if (!forceRefresh) {
        const cachedData = await getBuildingsFromCache()
        if (cachedData && cachedData.length > 0) {
          const hasBuildingTypeField = typeof cachedData[0]?.building_type !== "undefined"
          const hasIsApproximateField = "is_approximate" in cachedData[0]
          if (!hasBuildingTypeField || !hasIsApproximateField) {
            console.warn("🧹 Cache missing required fields, refetching from API...")
          } else {
          console.log("💾 Loading from cache:", cachedData.length, "buildings")
          setLoadingProgress({ loaded: 0, total: cachedData.length, status: "Загрузка из кэша..." })

          // Transform using Web Worker for non-blocking UI
          const buildingsData = await transformWithWorker(cachedData)

          console.log("🏢 Transformed from cache:", {
            total: buildingsData.length,
            byCategory: {
              general: buildingsData.filter(b => b.building_category === "general").length,
              izhs: buildingsData.filter(b => b.building_category === "izhs").length,
              susn: buildingsData.filter(b => b.building_category === "susn").length,
            }
          })

          setLoadingProgress({ loaded: buildingsData.length, total: buildingsData.length, status: "Готово!" })
          setBuildings(buildingsData)

          await new Promise(resolve => setTimeout(resolve, 200))
          setLoading(false)
          return
          }
        }
      }

      console.log("📡 Fetching from API with streaming...")
      setLoadingProgress({ loaded: 0, total: 0, status: "Подключение к серверу..." })

      // ✅ Fetch with streaming to track download progress
      const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/buildings-without-gas/all-sources/")

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`)
      }

      // Get total size from Content-Length header (if available)
      const contentLength = response.headers.get('Content-Length')
      const totalBytes = contentLength ? parseInt(contentLength, 10) : 0

      // Stream the response to track download progress
      let receivedBytes = 0
      const reader = response.body?.getReader()
      const chunks: Uint8Array[] = []

      if (reader) {
        setLoadingProgress({ loaded: 0, total: totalBytes || 50000000, status: "Загрузка данных..." })

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          chunks.push(value)
          receivedBytes += value.length

          // Update progress (estimate ~50MB for 50k records if Content-Length not available)
          const estimatedTotal = totalBytes || 50000000
          const percent = Math.min(Math.round((receivedBytes / estimatedTotal) * 100), 99)
          const mbReceived = (receivedBytes / 1024 / 1024).toFixed(1)
          setLoadingProgress({
            loaded: receivedBytes,
            total: estimatedTotal,
            status: `Загружено ${mbReceived} МБ (${percent}%)`
          })
        }
      }

      // Combine chunks and decode
      setLoadingProgress({ loaded: 0, total: 0, status: "Декодирование данных..." })
      const allChunks = new Uint8Array(receivedBytes)
      let position = 0
      for (const chunk of chunks) {
        allChunks.set(chunk, position)
        position += chunk.length
      }

      const jsonText = new TextDecoder().decode(allChunks)
      setLoadingProgress({ loaded: 0, total: 0, status: "Парсинг JSON..." })
      const data = JSON.parse(jsonText)
      const apiBuildings = data.data || data

      console.log("📊 API Response:", {
        totalFromAPI: apiBuildings?.length || 0,
        bytesReceived: receivedBytes,
        sampleData: apiBuildings?.[0],
      })

      setLoadingProgress({ loaded: 0, total: apiBuildings.length, status: "Сохранение в кэш..." })

      // Save raw API data to cache for next time (in background)
      saveBuildingsToCache(apiBuildings).catch(err => console.warn('Cache save failed:', err))

      setLoadingProgress({ loaded: 0, total: apiBuildings.length, status: "Трансформация данных..." })

      // Transform using Web Worker (non-blocking) or fast fallback
      const buildingsData = await transformWithWorker(apiBuildings)

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

      // Debug: Check gas connection values
      const gasStats = {
        total: buildingsData.length,
        withGas: buildingsData.filter(b => b.has_gas === true).length,
        withoutGas: buildingsData.filter(b => b.has_gas === false).length,
        nullGas: buildingsData.filter(b => b.has_gas === null || b.has_gas === undefined).length,
      }
      console.log("🔥 GAS STATISTICS:", gasStats)
      console.log("🔥 Sample buildings with gas (TRUE):", buildingsData.filter(b => b.has_gas === true).slice(0, 3))
      console.log("🔥 Sample buildings without gas (FALSE):", buildingsData.filter(b => b.has_gas === false).slice(0, 3))
      console.log("🔥 Sample buildings with unknown gas (NULL):", buildingsData.filter(b => b.has_gas === null || b.has_gas === undefined).slice(0, 3))

      // Also log raw API data to see what's coming from backend
      console.log("🔥 Sample RAW API data (first 5):", apiBuildings.slice(0, 5).map((b: any) => ({
        id: b.id,
        address: b.address,
        gas_connected: b.gas_connected,
        has_gas: b.has_gas,
      })))

      setLoadingProgress({ loaded: buildingsData.length, total: buildingsData.length, status: "Готово!" })
      setBuildings(buildingsData)
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

  // Web Worker ref for data transformation
  const workerRef = useRef<Worker | null>(null)

  // Initialize Web Worker
  useEffect(() => {
    if (typeof window !== 'undefined') {
      workerRef.current = new Worker('/buildings-worker.js')
    }
    return () => {
      workerRef.current?.terminate()
    }
  }, [])

  // Transform data using Web Worker (non-blocking)
  const transformWithWorker = useCallback((apiBuildings: any[]): Promise<Building[]> => {
    return new Promise((resolve, reject) => {
      if (!workerRef.current) {
        // Fallback to main thread if worker not available
        resolve(transformBuildingsDataFast(apiBuildings))
        return
      }

      const worker = workerRef.current

      const handleMessage = (e: MessageEvent) => {
        const { type, data, stats, processed, total, message } = e.data

        if (type === 'progress') {
          setLoadingProgress(prev => ({
            ...prev,
            loaded: processed,
            total: total,
            status: `Обработка данных: ${Math.round((processed / total) * 100)}%`
          }))
        } else if (type === 'complete') {
          console.log(`✅ Worker processed ${stats.total} buildings in ${stats.processingTime}ms`)
          worker.removeEventListener('message', handleMessage)
          resolve(data)
        } else if (type === 'error') {
          worker.removeEventListener('message', handleMessage)
          reject(new Error(message))
        }
      }

      worker.addEventListener('message', handleMessage)
      worker.postMessage({ type: 'transform', data: apiBuildings })
    })
  }, [])

  // Optimized transformation function using for-loop (faster than map/filter)
  const transformBuildingsDataFast = (apiBuildings: any[]): Building[] => {
    const result: Building[] = []
    const len = apiBuildings.length

    for (let i = 0; i < len; i++) {
      const b = apiBuildings[i]

      // Fast category detection using indexOf (faster than includes)
      const catStr = (b.category || "").toLowerCase()
      let category: "general" | "izhs" | "susn" = "general"
      if (catStr.indexOf("ижс") !== -1 || catStr.indexOf("izhs") !== -1) {
        category = "izhs"
      } else if (catStr.indexOf("сусн") !== -1 || catStr.indexOf("susn") !== -1) {
        category = "susn"
      }

      // District label lookup - prioritize district_id mapping for consistency
      let districtLabel: string
      if (b.district_id !== null && b.district_id !== undefined && DISTRICT_LABELS[String(b.district_id)]) {
        // Use district_id mapping if available (most reliable)
        districtLabel = DISTRICT_LABELS[String(b.district_id)]
      } else if (b.district && typeof b.district === "string") {
        // Fallback to raw district text from API
        districtLabel = b.district
      } else if (b.district_id !== null && b.district_id !== undefined) {
        // Fallback for unmapped district_id
        districtLabel = `Район ${b.district_id}`
      } else {
        districtLabel = "Не указан"
      }

      result.push({
        id: b.id ? String(b.id) : crypto.randomUUID(),
        address: b.address || "Без адреса",
        district: districtLabel,
        district_id: b.district_id,
        latitude: b.lat ?? b.latitude ?? null,
        longitude: b.lon ?? b.longitude ?? null,
        has_gas: b.gas_connected ?? b.has_gas ?? null,  // Prioritize gas_connected field from backend
        building_type: category === "izhs"
          ? "Индивидуальное жилищное строительство"
          : category === "susn"
            ? "Социально уязвимые слои населения"
            : "Жилое здание",
        building_type_raw: b.building_type || null,  // Raw building type from API
        building_category: category,
        is_not_in_almaty: b.is_not_in_almaty || false,
        is_seasonal_or_unused: b.is_seasonal_or_unused || false,
        geometry: b.geometry || null,
      })
    }

    return result
  }

  // Legacy alias for compatibility
  const transformBuildingsData = transformBuildingsDataFast

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
      // Filter by category checkboxes
      const matchesCategory =
        (deferredShowAlseco && building.building_category === "general") ||
        (deferredShowIzhs && building.building_category === "izhs") ||
        (deferredShowSusn && building.building_category === "susn")
      if (!matchesCategory) return false

      // Filter by gas connection (three-state: true/false/null)
      const hasGas = building.has_gas
      const matchesGas =
        (deferredShowWithGas && hasGas === true) ||
        (deferredShowWithoutGas && hasGas === false) ||
        (deferredShowUnknownGas && hasGas === null)

      // Debug: Log filter behavior (sample 0.1% to avoid spam)
      if (!matchesGas && Math.random() < 0.001) {
        console.log("🔥 Gas filter excluding building:", {
          address: building.address,
          has_gas: hasGas,
          showWithGas: deferredShowWithGas,
          showWithoutGas: deferredShowWithoutGas,
          showUnknownGas: deferredShowUnknownGas,
        })
      }

      if (!matchesGas) return false

      // ALSECO-specific building type filter (ИЖС vs не ИЖС)
      if (building.building_category === "general") {
        const rawType = (building.building_type_raw || "").trim()
        // If no building type, treat as "Дом" (default ИЖС type)
        const effectiveType = rawType || "Дом"
        const allowAnyType =
          deferredShowAlsecoIzhsTypes &&
          deferredShowAlsecoNonIzhsTypes &&
          allAlsecoIzhsSelected &&
          allAlsecoNonIzhsSelected

        if (!allowAnyType) {
          // Use effectiveType for filtering (empty rawType defaults to "Дом")
          const typeForFilter = rawType === "Не указано" || !rawType ? "Дом" : rawType
          const isIzhsType = alsecoIzhsLabelSet.has(typeForFilter)
          const allowAnyNonIzhsType =
            deferredShowAlsecoNonIzhsTypes && allAlsecoNonIzhsSelected
          const matchesIzhs =
            deferredShowAlsecoIzhsTypes &&
            deferredSelectedAlsecoIzhsTypes[typeForFilter]
          const matchesNonIzhs =
            deferredShowAlsecoNonIzhsTypes &&
            (deferredSelectedAlsecoNonIzhsTypes[rawType] || (allowAnyNonIzhsType && !isIzhsType))
          if (!matchesIzhs && !matchesNonIzhs) return false
        }
        const isNotInAlmaty = building.is_not_in_almaty === true
        const allowAnyLocation = deferredShowAlsecoInAlmaty && deferredShowAlsecoNotInAlmaty
        if (!allowAnyLocation) {
          if (deferredShowAlsecoInAlmaty && isNotInAlmaty) return false
          if (deferredShowAlsecoNotInAlmaty && !isNotInAlmaty) return false
          if (!deferredShowAlsecoInAlmaty && !deferredShowAlsecoNotInAlmaty) return false
        }

        // Approximate / exact coordinate filter
        const isApproximate = building.is_approximate === true
        const allowAnyCoordType = deferredShowApproximate && deferredShowExact
        if (!allowAnyCoordType) {
          if (deferredShowApproximate && !isApproximate) return false
          if (deferredShowExact && isApproximate) return false
          if (!deferredShowApproximate && !deferredShowExact) return false
        }
      }

      // Filter for seasonal/unused buildings only
      if (deferredShowOnlySeasonalUnused && building.is_seasonal_or_unused !== true) return false

      const matchesDistrict = deferredDistrictFilter === "all"
        || (deferredDistrictFilter === "no_district" && (building.district_id === null || building.district_id === undefined))
        || building.district === deferredDistrictFilter
      const matchesSearch =
        deferredSearchQuery === "" ||
        building.address.toLowerCase().includes(deferredSearchQuery.toLowerCase()) ||
        building.district.toLowerCase().includes(deferredSearchQuery.toLowerCase())

      // Filter by building type (keeping for backward compatibility)
      const matchesType = deferredBuildingTypeFilter === "all" || building.building_category === deferredBuildingTypeFilter

      // Advanced filters
      const matchesYear = !deferredYearFilter || (building.year_built && building.year_built >= deferredYearFilter.min && building.year_built <= deferredYearFilter.max)
      const matchesFloors = !deferredFloorsFilter || (building.floors && building.floors >= deferredFloorsFilter.min && building.floors <= deferredFloorsFilter.max)
      const matchesApartments = !deferredApartmentsFilter || (building.apartments && building.apartments >= deferredApartmentsFilter.min && building.apartments <= deferredApartmentsFilter.max)

      return matchesDistrict && matchesSearch && matchesType && matchesYear && matchesFloors && matchesApartments
    })
  }, [
    buildings,
    deferredDistrictFilter,
    deferredSearchQuery,
    deferredBuildingTypeFilter,
    deferredYearFilter,
    deferredFloorsFilter,
    deferredApartmentsFilter,
    deferredShowOnlySeasonalUnused,
    deferredShowAlseco,
    deferredShowIzhs,
    deferredShowSusn,
    deferredShowAlsecoIzhsTypes,
    deferredShowAlsecoNonIzhsTypes,
    deferredSelectedAlsecoIzhsTypes,
    deferredSelectedAlsecoNonIzhsTypes,
    allAlsecoIzhsSelected,
    allAlsecoNonIzhsSelected,
    alsecoIzhsLabelSet,
    deferredShowAlsecoInAlmaty,
    deferredShowAlsecoNotInAlmaty,
    deferredShowApproximate,
    deferredShowExact,
    deferredShowWithGas,
    deferredShowWithoutGas,
    deferredShowUnknownGas,
  ])

  // Deferred buildings for map to keep UI responsive during heavy filtering
  const deferredFilteredBuildings = useDeferredValue(filteredBuildings)

  // Category-specific counts (all buildings, for district dropdown)
  const generalBuildings = buildings.filter((b) => b.building_category === "general")
  const izhsBuildings = buildings.filter((b) => b.building_category === "izhs")
  const susnBuildings = buildings.filter((b) => b.building_category === "susn")

  // Get districts from all visible categories
  const visibleBuildings = buildings.filter((b) =>
    (showAlseco && b.building_category === "general") ||
    (showIzhs && b.building_category === "izhs") ||
    (showSusn && b.building_category === "susn")
  )

  // Valid Almaty districts for filter dropdown (only district_id 1-8)
  // Buildings with district_id = null are shown under "Без района"
  const VALID_ALMATY_DISTRICTS = [
    "Алатауский район",
    "Алмалинский район",
    "Ауэзовский район",
    "Бостандыкский район",
    "Жетысуский район",
    "Медеуский район",
    "Наурызбайский район",
    "Турксибский район"
  ]

  // Buildings filtered by selected district (for dynamic counts in checkboxes)
  // "no_district" = buildings where district_id is null (shown as "Не указан")
  const districtFilteredBuildings = districtFilter === "all"
    ? buildings
    : districtFilter === "no_district"
      ? buildings.filter((b) => b.district_id === null || b.district_id === undefined)
      : buildings.filter((b) => b.district === districtFilter)

  const districtFilteredGeneral = districtFilteredBuildings.filter((b) => b.building_category === "general")
  const districtFilteredIzhs = districtFilteredBuildings.filter((b) => b.building_category === "izhs")
  const districtFilteredSusn = districtFilteredBuildings.filter((b) => b.building_category === "susn")

  const districtNames = VALID_ALMATY_DISTRICTS.filter(validDistrict =>
    visibleBuildings.some(b => b.district === validDistrict)
  )

  // District counts for dropdown
  const districtCounts = useMemo(() => {
    const counts: Record<string, number> = { all: visibleBuildings.length, no_district: 0 }
    for (const b of visibleBuildings) {
      // Check if building has a valid district_id (1-8)
      if (b.district_id !== null && b.district_id !== undefined && b.district && VALID_ALMATY_DISTRICTS.includes(b.district)) {
        counts[b.district] = (counts[b.district] || 0) + 1
      } else {
        // Buildings with district_id = null (Без района)
        counts.no_district++
      }
    }
    return counts
  }, [visibleBuildings])

  // Category counts - filtered by selected district
  const categoryCounts = {
    general: districtFilteredGeneral.length,
    izhs: districtFilteredIzhs.length,
    susn: districtFilteredSusn.length,
  }

  // Gas connection counts - filtered by selected district and visible categories
  const districtAndCategoryFiltered = districtFilteredBuildings.filter((b) =>
    (showAlseco && b.building_category === "general") ||
    (showIzhs && b.building_category === "izhs") ||
    (showSusn && b.building_category === "susn")
  )
  const gasCounts = {
    withGas: districtAndCategoryFiltered.filter(b => b.has_gas === true).length,
    withoutGas: districtAndCategoryFiltered.filter(b => b.has_gas === false).length,
    unknown: districtAndCategoryFiltered.filter(b => b.has_gas === null || b.has_gas === undefined).length,
  }

  // Total of selected categories
  const selectedCategoriesTotal =
    (showAlseco ? categoryCounts.general : 0) +
    (showIzhs ? categoryCounts.izhs : 0) +
    (showSusn ? categoryCounts.susn : 0)

  // "In Almaty" counts - filtered by selected district
  const inAlmatyCounts = {
    general: districtFilteredGeneral.filter((b) => !b.is_not_in_almaty).length,
    izhs: districtFilteredIzhs.filter((b) => !b.is_not_in_almaty).length,
    susn: districtFilteredSusn.filter((b) => !b.is_not_in_almaty).length,
  }
  // "Not in Almaty" counts - filtered by selected district
  const notInAlmatyCounts = {
    general: districtFilteredGeneral.filter((b) => b.is_not_in_almaty).length,
    izhs: districtFilteredIzhs.filter((b) => b.is_not_in_almaty).length,
    susn: districtFilteredSusn.filter((b) => b.is_not_in_almaty).length,
  }
  const locationFilteredGeneral = districtFilteredGeneral.filter((b) => {
    if (showAlsecoInAlmaty && showAlsecoNotInAlmaty) return true
    if (showAlsecoInAlmaty && !b.is_not_in_almaty) return true
    if (showAlsecoNotInAlmaty && b.is_not_in_almaty) return true
    return false
  })
  const approximateCount = locationFilteredGeneral.filter((b) => b.is_approximate === true).length
  const exactCount = locationFilteredGeneral.filter((b) => b.is_approximate !== true).length
  const selectedCategoriesInAlmaty =
    (showAlseco ? inAlmatyCounts.general : 0) +
    (showIzhs ? inAlmatyCounts.izhs : 0) +
    (showSusn ? inAlmatyCounts.susn : 0)
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
      <HeaderMenu />
      <main className="flex overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>

        {/* Sidebar - flex item, collapsible */}
        <aside
          className="relative flex flex-col flex-shrink-0 border-r border-border bg-background transition-[width] duration-300 ease-in-out overflow-hidden"
          style={{ width: sidebarCollapsed ? 72 : 520 }}
        >
          {/* Collapsed strip - shown when collapsed */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-between py-5"
            style={{ opacity: sidebarCollapsed ? 1 : 0, pointerEvents: sidebarCollapsed ? 'auto' : 'none', transition: 'opacity 0.15s' }}
          >
            <div className="h-2 w-2 rounded-full bg-primary/40" />
            <button
              onClick={() => setSidebarCollapsed(false)}
              className="group flex flex-col items-center gap-2"
              title="Развернуть фильтры"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-110">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              <span className="text-[9px] text-muted-foreground font-medium">Фильтры</span>
            </button>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xs font-bold tabular-nums text-foreground">{filteredBuildings.length.toLocaleString()}</span>
              <span className="text-[9px] text-muted-foreground">зданий</span>
            </div>
          </div>

          {/* Expanded content */}
          <div
            className="flex min-h-0 flex-1 flex-col overflow-hidden"
            style={{ opacity: sidebarCollapsed ? 0 : 1, pointerEvents: sidebarCollapsed ? 'none' : 'auto', transition: 'opacity 0.15s' }}
          >
          {/* Sidebar Header with Stats */}
          <div className="px-4 py-3 border-b border-border bg-muted/30 shrink-0">
            {showSidePanel && selectedBuilding ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setShowSidePanel(false); setSelectedBuilding(null) }}
                  className="h-6 w-6 rounded-lg flex items-center justify-center hover:bg-muted transition-colors shrink-0"
                  title="Назад к фильтрам"
                >
                  <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider truncate">{selectedBuilding.district}</p>
                  <p className="text-sm font-bold text-foreground leading-tight truncate">{selectedBuilding.address}</p>
                </div>
                <button
                  onClick={() => setSidebarCollapsed(true)}
                  className="h-6 w-6 rounded-lg flex items-center justify-center hover:bg-muted transition-colors shrink-0"
                  title="Свернуть"
                >
                  <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Фильтры</p>
                <div className="flex items-center gap-2">
                  <div className={`h-6 w-6 rounded-lg flex items-center justify-center transition-colors ${isPending ? 'bg-amber-100' : 'bg-blue-100'}`}>
                    {isPending ? (
                      <div className="h-3 w-3 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Database className="h-3 w-3 text-blue-500" />
                    )}
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold tabular-nums leading-tight transition-opacity ${isPending ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {filteredBuildings.length.toLocaleString()}
                      <span className="text-xs font-normal text-muted-foreground ml-1">/ {selectedCategoriesTotal.toLocaleString()}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => setSidebarCollapsed(true)}
                    className="h-6 w-6 rounded-lg flex items-center justify-center hover:bg-muted transition-colors"
                    title="Свернуть"
                  >
                    <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Building Detail — shown inside sidebar when a building is clicked */}
          {showSidePanel && selectedBuilding && (
            <div className="flex-1 overflow-y-auto scrollbar-hidden px-3 py-3 space-y-2">

              {/* Gas status */}
              {selectedBuilding.has_gas === true ? (
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-green-700 dark:text-green-400 uppercase tracking-tight">Газ подключен</p>
                    <p className="text-[10px] text-green-600 dark:text-green-300/60">Централизованное газоснабжение</p>
                  </div>
                </div>
              ) : selectedBuilding.has_gas === false ? (
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-orange-700 dark:text-orange-400 uppercase tracking-tight">Газ отсутствует</p>
                    <p className="text-[10px] text-orange-600 dark:text-orange-300/60">В списках на газификацию</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-muted/60 border border-border">
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-foreground uppercase tracking-tight">Статус неизвестен</p>
                    <p className="text-[10px] text-muted-foreground">Нет данных о газоснабжении</p>
                  </div>
                </div>
              )}

              {/* Type info */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-muted/40 border border-border">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Категория</p>
                  <p className="text-xs font-semibold text-foreground leading-tight">{selectedBuilding.building_type}</p>
                </div>
                {selectedBuilding.building_type_raw ? (
                  <div className="p-3 rounded-xl bg-muted/40 border border-border">
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium mb-1">Тип здания</p>
                    <p className="text-xs font-semibold text-foreground leading-tight">{selectedBuilding.building_type_raw}</p>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-muted/40 border border-border font-mono">
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-sans font-medium mb-1">ID</p>
                    <p className="text-xs font-bold text-foreground">{selectedBuilding.id}</p>
                  </div>
                )}
              </div>

              {/* Flags */}
              {(selectedBuilding.is_not_in_almaty || selectedBuilding.is_seasonal_or_unused) && (
                <div className="flex flex-wrap gap-1.5">
                  {selectedBuilding.is_not_in_almaty && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                      <MapPin className="h-2.5 w-2.5" />Не в Алматы
                    </span>
                  )}
                  {selectedBuilding.is_seasonal_or_unused && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                      <Calendar className="h-2.5 w-2.5" />Сезонное
                    </span>
                  )}
                </div>
              )}

              {/* Contact */}
              {(selectedBuilding.fio || selectedBuilding.mobile_home_number) && (
                <div className="p-3 rounded-xl bg-muted/40 border border-border space-y-1.5">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">Контакт</p>
                  {selectedBuilding.fio && <p className="text-xs font-medium text-foreground">{selectedBuilding.fio}</p>}
                  {selectedBuilding.mobile_home_number && <p className="text-xs text-muted-foreground">{selectedBuilding.mobile_home_number}</p>}
                </div>
              )}

              {/* Gas details */}
              {(selectedBuilding.type_of_gas || (selectedBuilding.gas_connection_available !== null && selectedBuilding.gas_connection_available !== undefined)) && (
                <div className="p-3 rounded-xl bg-muted/40 border border-border space-y-1.5">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">Детали газоснабжения</p>
                  {selectedBuilding.type_of_gas && (
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Тип газа</span>
                      <span className="text-[10px] font-medium text-foreground">{selectedBuilding.type_of_gas}</span>
                    </div>
                  )}
                  {selectedBuilding.gas_connection_available !== null && selectedBuilding.gas_connection_available !== undefined && (
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Тех. возможность</span>
                      <span className={`text-[10px] font-medium ${selectedBuilding.gas_connection_available ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {selectedBuilding.gas_connection_available ? 'Да' : 'Нет'}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Reasons */}
              {(selectedBuilding.property_not_legalized || selectedBuilding.property_not_eligible_for_gas_connection || selectedBuilding.no_funds_for_gas_connection || selectedBuilding.other_reason) && (
                <div className="space-y-1.5">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium px-1">Причины</p>
                  {selectedBuilding.property_not_legalized && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                      <X className="h-3 w-3 text-red-500 shrink-0" />
                      <p className="text-[10px] font-medium text-red-700 dark:text-red-400">Объект не узаконен</p>
                    </div>
                  )}
                  {selectedBuilding.property_not_eligible_for_gas_connection && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                      <X className="h-3 w-3 text-red-500 shrink-0" />
                      <p className="text-[10px] font-medium text-red-700 dark:text-red-400">Не подлежит газификации</p>
                    </div>
                  )}
                  {selectedBuilding.no_funds_for_gas_connection && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <AlertCircle className="h-3 w-3 text-amber-500 shrink-0" />
                      <p className="text-[10px] font-medium text-amber-700 dark:text-amber-400">Нет средств на подключение</p>
                    </div>
                  )}
                  {selectedBuilding.other_reason && (
                    <div className="px-3 py-2 rounded-lg bg-muted border border-border">
                      <p className="text-[9px] text-muted-foreground uppercase mb-0.5">Другая причина</p>
                      <p className="text-[10px] text-foreground">{selectedBuilding.other_reason}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Bathhouse */}
              {((selectedBuilding.has_private_bathhouse !== null && selectedBuilding.has_private_bathhouse !== undefined) || selectedBuilding.bathhouse_fuel_type) && (
                <div className="p-3 rounded-xl bg-muted/40 border border-border space-y-1.5">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">Баня</p>
                  {selectedBuilding.has_private_bathhouse !== null && selectedBuilding.has_private_bathhouse !== undefined && (
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Частная баня</span>
                      <span className={`text-[10px] font-medium ${selectedBuilding.has_private_bathhouse ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`}>
                        {selectedBuilding.has_private_bathhouse ? 'Есть' : 'Нет'}
                      </span>
                    </div>
                  )}
                  {selectedBuilding.bathhouse_fuel_type && (
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Тип топлива</span>
                      <span className="text-[10px] font-medium text-foreground">{selectedBuilding.bathhouse_fuel_type}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Specialist comment */}
              {selectedBuilding.specialist_comment && (
                <div className="p-3 rounded-xl bg-muted/40 border border-border">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">Комментарий</p>
                  <p className="text-[10px] text-foreground leading-relaxed">{selectedBuilding.specialist_comment}</p>
                </div>
              )}

              {/* Territorial affiliation */}
              {(selectedBuilding.inside_izhs || selectedBuilding.inside_susn || selectedBuilding.inside_alseco) && (
                <div className="p-3 rounded-xl bg-muted/40 border border-border space-y-1.5">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">Территориальность</p>
                  {selectedBuilding.inside_izhs && (
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Внутри ИЖС</span>
                      <span className="text-[10px] font-medium text-foreground">{selectedBuilding.inside_izhs}</span>
                    </div>
                  )}
                  {selectedBuilding.inside_susn && (
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Внутри СУСН</span>
                      <span className="text-[10px] font-medium text-foreground">{selectedBuilding.inside_susn}</span>
                    </div>
                  )}
                  {selectedBuilding.inside_alseco && (
                    <div className="flex justify-between">
                      <span className="text-[10px] text-muted-foreground">Внутри Alseco</span>
                      <span className="text-[10px] font-medium text-foreground">{selectedBuilding.inside_alseco}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Geo + Tech grid */}
              <div className="grid grid-cols-2 gap-2 pb-2">
                <div className="p-3 rounded-xl bg-muted/40 border border-border">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">Геолокация</p>
                  <p className="font-mono text-[9px] text-muted-foreground">{selectedBuilding.latitude?.toFixed(6) ?? "—"}</p>
                  <p className="font-mono text-[9px] text-muted-foreground">{selectedBuilding.longitude?.toFixed(6) ?? "—"}</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/40 border border-border">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium mb-1.5">Техническое</p>
                  <p className="font-mono text-[9px] font-bold text-foreground">ID: {selectedBuilding.id}</p>
                  <p className="font-mono text-[9px] text-muted-foreground uppercase">{selectedBuilding.building_category}</p>
                  {selectedBuilding.gas_id && <p className="font-mono text-[9px] text-muted-foreground">Gas: {selectedBuilding.gas_id}</p>}
                </div>
              </div>

            </div>
          )}

          {/* Scrollable Content — aside's filter area */}
          {!showSidePanel && (
          <div className="flex-1 overflow-y-auto scrollbar-hidden px-3 py-3 space-y-3">

            {/* Search + District Row */}
            <div className="space-y-3">
              {/* Search Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск по адресу..."
                  className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-8 text-sm placeholder:text-muted-foreground transition-all focus:ring-1 focus:ring-ring focus:border-ring outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-muted text-muted-foreground hover:bg-muted hover:text-foreground transition-all">
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* District Select - Custom Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
                  className={`h-9 w-full rounded-md border bg-background pl-4 pr-4 text-sm font-medium text-foreground cursor-pointer outline-none transition-all flex items-center gap-3 ${
                    showDistrictDropdown ? "border-blue-500 ring-1 ring-blue-500/10" : "border-border hover:border-border"
                  }`}
                >
                  <MapPin className={`h-4 w-4 shrink-0 ${districtFilter !== "all" ? "text-blue-500" : "text-muted-foreground"}`} />
                  <span className="flex-1 text-left truncate">
                    {districtFilter === "all" ? "Все районы" : districtFilter === "no_district" ? "Без района" : districtFilter}
                  </span>
                  {districtFilter !== "all" && (
                    <span className="px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-600 text-[10px] font-semibold">
                      {districtCounts[districtFilter]?.toLocaleString() || 0}
                    </span>
                  )}
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${showDistrictDropdown ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {showDistrictDropdown && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowDistrictDropdown(false)}
                    />
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-background rounded-lg border border-border shadow-md overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* All Districts Option */}
                      <button
                        onClick={() => {
                          handleDistrictFilterChange("all")
                          setShowDistrictDropdown(false)
                        }}
                        className={`w-full px-4 py-2.5 flex items-center gap-3 transition-colors ${
                          districtFilter === "all"
                            ? "bg-blue-50 text-blue-700"
                            : "hover:bg-muted/50 text-foreground"
                        }`}
                      >
                        <div className={`h-6 w-6 rounded-lg flex items-center justify-center ${
                          districtFilter === "all" ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"
                        }`}>
                          <MapPin className="h-3.5 w-3.5" />
                        </div>
                        <span className="flex-1 text-left text-sm font-medium">Все районы</span>
                        <span className={`px-2 py-0.5 rounded-lg text-[11px] font-semibold ${
                          districtFilter === "all" ? "bg-blue-100 text-blue-600" : "bg-muted text-muted-foreground"
                        }`}>
                          {districtCounts.all?.toLocaleString() || 0}
                        </span>
                        {districtFilter === "all" && (
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                        )}
                      </button>

                      <div className="h-px bg-border" />

                      {/* No District Option */}
                      {districtCounts.no_district > 0 && (
                        <button
                          onClick={() => {
                            handleDistrictFilterChange("no_district")
                            setShowDistrictDropdown(false)
                          }}
                          className={`w-full px-4 py-2.5 flex items-center gap-3 transition-colors ${
                            districtFilter === "no_district"
                              ? "bg-blue-50 text-blue-700"
                              : "hover:bg-muted/50 text-foreground"
                          }`}
                        >
                          <div className={`h-6 w-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                            districtFilter === "no_district" ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"
                          }`}>
                            ?
                          </div>
                          <span className="flex-1 text-left text-sm font-medium">Без района</span>
                          <span className={`px-2 py-0.5 rounded-lg text-[11px] font-semibold tabular-nums ${
                            districtFilter === "no_district" ? "bg-blue-100 text-blue-600" : "bg-muted text-muted-foreground"
                          }`}>
                            {districtCounts.no_district?.toLocaleString() || 0}
                          </span>
                          {districtFilter === "no_district" && (
                            <CheckCircle className="h-4 w-4 text-blue-500" />
                          )}
                        </button>
                      )}

                      {districtCounts.no_district > 0 && <div className="h-px bg-border" />}

                      {/* District List */}
                      <div className="max-h-[280px] overflow-y-auto custom-scrollbar">
                        {districtNames.map((district, index) => (
                          <button
                            key={district}
                            onClick={() => {
                              handleDistrictFilterChange(district)
                              setShowDistrictDropdown(false)
                            }}
                            className={`w-full px-4 py-2.5 flex items-center gap-3 transition-colors ${
                              districtFilter === district
                                ? "bg-blue-50 text-blue-700"
                                : "hover:bg-muted/50 text-foreground"
                            }`}
                          >
                            <div className={`h-6 w-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                              districtFilter === district ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"
                            }`}>
                              {index + 1}
                            </div>
                            <span className="flex-1 text-left text-sm font-medium truncate">{district}</span>
                            <span className={`px-2 py-0.5 rounded-lg text-[11px] font-semibold tabular-nums ${
                              districtFilter === district ? "bg-blue-100 text-blue-600" : "bg-muted text-muted-foreground"
                            }`}>
                              {districtCounts[district]?.toLocaleString() || 0}
                            </span>
                            {districtFilter === district && (
                              <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Map Layers Section */}
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="px-4 py-2.5 border-b border-border">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Слои карты</p>
              </div>
              <div className="p-2 space-y-0.5">
                <button
                  onClick={() => startTransition(() => setShowHeatmap(!showHeatmap))}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    showHeatmap
                      ? "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                  }`}
                >
                  <Flame className="h-4 w-4 shrink-0" />
                  <span>Тепловая карта</span>
                  <div className={`ml-auto h-4 w-7 rounded-full flex items-center px-0.5 transition-colors ${showHeatmap ? "bg-orange-500" : "bg-muted"}`}>
                    <div className={`h-3 w-3 rounded-full bg-white shadow transition-transform ${showHeatmap ? "translate-x-3" : "translate-x-0"}`} />
                  </div>
                </button>
                <button
                  onClick={() => startTransition(() => setShowRenovationAreas(!showRenovationAreas))}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    showRenovationAreas
                      ? "bg-purple-500/10 text-purple-500 border border-purple-500/20"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent"
                  }`}
                >
                  <Layers className="h-4 w-4 shrink-0" />
                  <span>Реновация</span>
                  <div className={`ml-auto h-4 w-7 rounded-full flex items-center px-0.5 transition-colors ${showRenovationAreas ? "bg-purple-500" : "bg-muted"}`}>
                    <div className={`h-3 w-3 rounded-full bg-white shadow transition-transform ${showRenovationAreas ? "translate-x-3" : "translate-x-0"}`} />
                  </div>
                </button>
              </div>
            </div>

            {/* Categories Section - Card Style */}
            <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
              <button
                onClick={() => document.getElementById('categories-content')?.classList.toggle('hidden')}
                className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-muted flex items-center justify-center">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Категории данных</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>

              <div id="categories-content" className="px-4 pb-4 space-y-2">
                {/* ALSECO */}
                <div className="rounded-xl border border-border bg-muted/30 overflow-hidden">
                  <label className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={showAlseco}
                        onChange={(e) => startTransition(() => setShowAlseco(e.target.checked))}
                        className="peer sr-only"
                      />
                      <div className="h-5 w-5 rounded-lg border-2 border-border bg-background peer-checked:border-orange-500 peer-checked:bg-orange-500 transition-all flex items-center justify-center">
                        {showAlseco && <CheckCircle className="h-3.5 w-3.5 text-white" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-foreground">ALSECO</span>
                      <span className="text-xs text-muted-foreground ml-2">({categoryCounts.general.toLocaleString()})</span>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  </label>
                  {showAlseco && (
                    <div className="px-4 pb-3 pt-1 space-y-1.5 border-t border-border" onClick={(e) => e.stopPropagation()}>
                      <label className="flex items-center gap-2.5 py-1 cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={showAlsecoInAlmaty}
                          onChange={(e) => {
                            e.stopPropagation()
                            startTransition(() => setShowAlsecoInAlmaty(e.target.checked))
                          }}
                          className="h-4 w-4 rounded border-border text-orange-500 focus:ring-orange-500/20"
                        />
                        <span className="flex-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">В Алматы</span>
                        <span className="text-[10px] text-muted-foreground font-medium">({inAlmatyCounts.general.toLocaleString()})</span>
                      </label>
                      <label className="flex items-center gap-2.5 py-1 cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={showAlsecoNotInAlmaty}
                          onChange={(e) => {
                            e.stopPropagation()
                            startTransition(() => setShowAlsecoNotInAlmaty(e.target.checked))
                          }}
                          className="h-4 w-4 rounded border-border text-orange-500 focus:ring-orange-500/20"
                        />
                        <span className="flex-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">Не в Алматы</span>
                        <span className="text-[10px] text-muted-foreground font-medium">({notInAlmatyCounts.general.toLocaleString()})</span>
                      </label>
                      <div className="border-t border-border my-1"></div>
                      <label className="flex items-center gap-2.5 py-1 cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={showApproximate}
                          onChange={(e) => {
                            e.stopPropagation()
                            startTransition(() => setShowApproximate(e.target.checked))
                          }}
                          className="h-4 w-4 rounded border-border text-yellow-500 focus:ring-yellow-500/20"
                        />
                        <div className="flex items-center gap-1.5 flex-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Приближённые</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-medium">({approximateCount.toLocaleString()})</span>
                      </label>
                      <label className="flex items-center gap-2.5 py-1 cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={showExact}
                          onChange={(e) => {
                            e.stopPropagation()
                            startTransition(() => setShowExact(e.target.checked))
                          }}
                          className="h-4 w-4 rounded border-border text-emerald-500 focus:ring-emerald-500/20"
                        />
                        <div className="flex items-center gap-1.5 flex-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Точные</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-medium">({exactCount.toLocaleString()})</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* ИЖС */}
                <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={showIzhs}
                      onChange={(e) => startTransition(() => setShowIzhs(e.target.checked))}
                      className="peer sr-only"
                    />
                    <div className="h-5 w-5 rounded-lg border-2 border-border bg-background peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center">
                      {showIzhs && <CheckCircle className="h-3.5 w-3.5 text-white" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-foreground">Районные акиматы</span>
                    <span className="text-xs text-muted-foreground ml-2">({categoryCounts.izhs.toLocaleString()})</span>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                </label>

                {/* СУСН */}
                <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={showSusn}
                      onChange={(e) => startTransition(() => setShowSusn(e.target.checked))}
                      className="peer sr-only"
                    />
                    <div className="h-5 w-5 rounded-lg border-2 border-border bg-background peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all flex items-center justify-center">
                      {showSusn && <CheckCircle className="h-3.5 w-3.5 text-white" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-foreground">СУСН</span>
                    <span className="text-xs text-muted-foreground ml-2">({categoryCounts.susn.toLocaleString()})</span>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                </label>
              </div>
            </div>

            {/* Gas Connection Filters */}
            <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
              <button
                onClick={() => document.getElementById('gas-filters')?.classList.toggle('hidden')}
                className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-muted flex items-center justify-center">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Газоснабжение</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>

              <div id="gas-filters" className="px-4 pb-4 pt-2 space-y-1.5">
                <label className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={showWithoutGas}
                    onChange={(e) => startTransition(() => setShowWithoutGas(e.target.checked))}
                    className="h-4 w-4 rounded border-border text-cyan-500 focus:ring-cyan-500/20"
                  />
                  <span className="flex-1 text-xs text-foreground group-hover:text-foreground transition-colors">Не подключен к газу</span>
                  <span className="text-[10px] text-muted-foreground font-medium">({gasCounts.withoutGas.toLocaleString()})</span>
                </label>
                <label className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={showWithGas}
                    onChange={(e) => startTransition(() => setShowWithGas(e.target.checked))}
                    className="h-4 w-4 rounded border-border text-cyan-500 focus:ring-cyan-500/20"
                  />
                  <span className="flex-1 text-xs text-foreground group-hover:text-foreground transition-colors">Подключен к газу</span>
                  <span className="text-[10px] text-muted-foreground font-medium">({gasCounts.withGas.toLocaleString()})</span>
                </label>
                <label className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={showUnknownGas}
                    onChange={(e) => startTransition(() => setShowUnknownGas(e.target.checked))}
                    className="h-4 w-4 rounded border-border text-cyan-500 focus:ring-cyan-500/20"
                  />
                  <span className="flex-1 text-xs text-foreground group-hover:text-foreground transition-colors">Не указано</span>
                  <span className="text-[10px] text-muted-foreground font-medium">({gasCounts.unknown.toLocaleString()})</span>
                </label>
              </div>
            </div>

            {/* ALSECO Filters - Collapsible */}
            {showAlseco && (
            <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
              <button
                onClick={() => document.getElementById('alseco-filters')?.classList.toggle('hidden')}
                className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-xl bg-muted flex items-center justify-center">
                    <Settings className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Фильтры ALSECO</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>

              <div id="alseco-filters" className="px-4 pb-4 space-y-3">
                {/* ИЖС Types */}
                <div className="rounded-xl bg-muted/50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={showAlsecoIzhsTypes}
                        onChange={(e) => {
                          e.stopPropagation()
                          startTransition(() => setShowAlsecoIzhsTypes(e.target.checked))
                        }}
                        className="h-4 w-4 rounded border-border text-orange-500 focus:ring-orange-500/20"
                      />
                      <span className="text-xs font-semibold text-foreground">ИЖС типы</span>
                    </label>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowAlsecoIzhsSubfilters(!showAlsecoIzhsSubfilters)
                      }}
                      className={`p-1 rounded-lg hover:bg-muted transition-all ${showAlsecoIzhsSubfilters ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </div>
                  {showAlsecoIzhsSubfilters && showAlsecoIzhsTypes && (
                    <div className="space-y-1 mt-2 pl-1" onClick={(e) => e.stopPropagation()}>
                      {alsecoIzhsLabels.map((label) => (
                        <label key={label} className="flex items-center gap-2 py-0.5 cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={!!selectedAlsecoIzhsTypes[label]}
                            onChange={(e) => {
                              e.stopPropagation()
                              startTransition(() => setSelectedAlsecoIzhsTypes(prev => ({ ...prev, [label]: e.target.checked })))
                            }}
                            className="h-3.5 w-3.5 rounded border-border text-orange-500 focus:ring-orange-500/20"
                          />
                          <span className="text-[11px] text-muted-foreground group-hover:text-foreground flex-1">{label}</span>
                          <span className="text-[10px] text-muted-foreground tabular-nums">{(alsecoTypeCounts[label] || 0).toLocaleString()}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Non-ИЖС Types */}
                <div className="rounded-xl bg-muted/50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={showAlsecoNonIzhsTypes}
                        onChange={(e) => {
                          e.stopPropagation()
                          startTransition(() => setShowAlsecoNonIzhsTypes(e.target.checked))
                        }}
                        className="h-4 w-4 rounded border-border text-orange-500 focus:ring-orange-500/20"
                      />
                      <span className="text-xs font-semibold text-foreground">Не ИЖС типы</span>
                    </label>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowAlsecoNonIzhsSubfilters(!showAlsecoNonIzhsSubfilters)
                      }}
                      className={`p-1 rounded-lg hover:bg-muted transition-all ${showAlsecoNonIzhsSubfilters ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </div>
                  {showAlsecoNonIzhsSubfilters && showAlsecoNonIzhsTypes && (
                    <div className="space-y-1 mt-2 pl-1" onClick={(e) => e.stopPropagation()}>
                      {alsecoNonIzhsLabels.map((label) => (
                        <label key={label} className="flex items-center gap-2 py-0.5 cursor-pointer group" onClick={(e) => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={!!selectedAlsecoNonIzhsTypes[label]}
                            onChange={(e) => {
                              e.stopPropagation()
                              startTransition(() => setSelectedAlsecoNonIzhsTypes(prev => ({ ...prev, [label]: e.target.checked })))
                            }}
                            className="h-3.5 w-3.5 rounded border-border text-orange-500 focus:ring-orange-500/20"
                          />
                          <span className="text-[11px] text-muted-foreground group-hover:text-foreground flex-1 truncate">{label}</span>
                          <span className="text-[10px] text-muted-foreground tabular-nums">{(alsecoTypeCounts[label] || 0).toLocaleString()}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            )}

            {/* Quick Actions - Compact */}
            <div className="flex gap-2">
              <button
                onClick={exportToJSON}
                className="flex-1 h-9 rounded-xl bg-muted/50 border border-border text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all flex items-center justify-center gap-1.5"
              >
                <Download className="h-3 w-3" /> JSON
              </button>
              <button
                onClick={async () => { await clearBuildingsCache(); fetchBuildings(true); }}
                className="h-9 px-3 rounded-xl bg-muted/50 border border-border text-xs font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-all flex items-center justify-center gap-1.5"
              >
                <X className="h-3 w-3" /> Кэш
              </button>
            </div>
          </div>
          )}
          </div>
        </aside>

        {/* Right area: tab bar + map */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* Tab Toolbar */}
          <div className="flex shrink-0 items-center gap-1 border-b border-border bg-background px-4">
            <button
              onClick={() => setActiveTab("map")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "map"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="h-4 w-4 shrink-0" />
              <span>Карта зданий</span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === "analytics"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <BarChart3 className="h-4 w-4 shrink-0" />
              <span>Аналитика</span>
            </button>

            <div className="w-px h-5 bg-border mx-1" />

            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              title="Экспорт CSV"
            >
              <Download className="h-4 w-4 shrink-0" />
              <span>CSV</span>
            </button>

            <button
              onClick={() => fetchBuildings(true)}
              disabled={loading}
              className="flex items-center justify-center border-b-2 border-transparent px-3 py-3 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40"
              title="Обновить данные"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

          </div>

          {activeTab === "analytics" ? (
            <BuildingsAnalytics buildings={buildings} />
          ) : (
          <div className="relative flex-1 overflow-hidden">
            {/* Map background */}
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
                  buildings={deferredFilteredBuildings.filter(b => b.latitude && b.longitude)}
                  renovationAreas={renovationAreas}
                  districts={districts}
                  selectedDistrictId={deferredSelectedDistrictId}
                  showHeatmap={deferredShowHeatmap}
                  showRenovationAreas={deferredShowRenovationAreas}
                  showOnlySeasonalUnused={deferredShowOnlySeasonalUnused}
                  onBuildingClick={handleBuildingClick}
                  darkMode={resolvedTheme === "dark"}
                />
              )}
            </div>

            {/* Floating UI — stats cards and building detail panel */}
            <div className="relative z-10 h-full w-full pointer-events-none">

              {/* Marker legend — bottom center */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-background/80 backdrop-blur-sm px-4 py-2 shadow-sm">
                  {[
                    { color: "#10b981", label: "Точные" },
                    { color: "#eab308", label: "Приближённые" },
                    { color: "#8b5cf6", label: "Не ИЖС" },
                    { color: "#ec4899", label: "Сезонные" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <svg width="9" height="12" viewBox="0 0 11 15">
                        <path d="M5.5 0C2.46 0 0 2.46 0 5.5 0 9.63 5.5 15 5.5 15S11 9.63 11 5.5C11 2.46 8.54 0 5.5 0z" fill={item.color}/>
                        <circle cx="5.5" cy="5.5" r="2.2" fill="white" opacity="0.95"/>
                      </svg>
                      <span className="text-[11px] text-foreground/70 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

          {/* Statistics Cards - Right Side */}
          <div className="absolute top-4 right-0 w-[170px] flex flex-col gap-2.5 pointer-events-auto z-10">
            {/* Category Tabs */}
            <div className="bg-white/95 backdrop-blur-xl rounded-l-xl p-1.5 shadow-sm flex gap-1">
              <button
                onClick={() => setSelectedStatsCategory("general")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${
                  selectedStatsCategory === "general"
                    ? "bg-orange-500 text-white shadow-sm"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                ALSECO
              </button>
              <button
                onClick={() => setSelectedStatsCategory("izhs")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${
                  selectedStatsCategory === "izhs"
                    ? "bg-green-500 text-white shadow-sm"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                Данные районных акиматов
              </button>
              <button
                onClick={() => setSelectedStatsCategory("susn")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${
                  selectedStatsCategory === "susn"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
              СУСН
              </button>
            </div>

            {/* Dynamic stats based on selected category */}
            {(() => {
              const categoryData = selectedStatsCategory === "general"
                ? generalBuildings
                : selectedStatsCategory === "izhs"
                  ? izhsBuildings
                  : susnBuildings
              const categoryName = selectedStatsCategory === "general"
                ? "ALSECO"
                : selectedStatsCategory === "izhs"
                  ? "ИЖС"
                  : "СУСН"
              const primaryColor = selectedStatsCategory === "general"
                ? { border: "border-orange-500", text: "text-orange-600", subtext: "text-orange-400", bg: "bg-orange-500", bgLight: "bg-orange-50", bgHover: "hover:bg-orange-100" }
                : selectedStatsCategory === "izhs"
                  ? { border: "border-green-500", text: "text-green-600", subtext: "text-green-400", bg: "bg-green-500", bgLight: "bg-green-50", bgHover: "hover:bg-green-100" }
                  : { border: "border-blue-500", text: "text-blue-600", subtext: "text-blue-400", bg: "bg-blue-500", bgLight: "bg-blue-50", bgHover: "hover:bg-blue-100" }

              return (
                <>
                  {/* 1. Total */}
                  <div className={`bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] ${primaryColor.border}`}>
                    <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">ВСЕГО {categoryName}</p>
                    <p className={`text-[2.75rem] font-bold ${primaryColor.text} leading-none tabular-nums`}>
                      {categoryData.length}
                    </p>
                    <p className={`text-[7.5px] ${primaryColor.subtext} mt-1.5 leading-tight`}>зданий</p>
                  </div>

                  {/* 2. Not in Almaty */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-red-500">
                    <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">{categoryName} НЕ В АЛМАТЫ</p>
                    <p className="text-[2.75rem] font-bold text-red-600 leading-none tabular-nums">
                      {categoryData.filter((b) => b.is_not_in_almaty === true).length}
                    </p>
                    <p className="text-[7.5px] text-red-400 mt-1.5 leading-tight">за пределами</p>
                  </div>

                  {/* 3. In Almaty */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-cyan-500">
                    <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">{categoryName} В АЛМАТЫ</p>
                    <p className="text-[2.75rem] font-bold text-cyan-600 leading-none tabular-nums">
                      {categoryData.filter((b) => !b.is_not_in_almaty).length}
                    </p>
                    <p className="text-[7.5px] text-cyan-400 mt-1.5 leading-tight">в городе</p>
                  </div>

                  {/* 4. With coordinates IN ALMATY */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-emerald-500">
                    <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">{categoryName} С КООРДИНАТАМИ</p>
                    <p className="text-[2.75rem] font-bold text-emerald-600 leading-none tabular-nums">
                      {categoryData.filter((b) => !b.is_not_in_almaty && b.latitude && b.longitude).length}
                    </p>
                    <p className="text-[7.5px] text-emerald-400 mt-1.5 leading-tight">на карте в городе</p>
                  </div>

                  {/* 5. Without coordinates IN ALMATY */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-amber-500">
                    <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">{categoryName} БЕЗ КООРДИНАТ</p>
                    <p className="text-[2.75rem] font-bold text-amber-600 leading-none tabular-nums">
                      {categoryData.filter((b) => !b.is_not_in_almaty && (!b.latitude || !b.longitude)).length}
                    </p>
                    <p className="text-[7.5px] text-amber-400 mt-1.5 leading-tight">в городе без координат</p>
                  </div>

                  {/* 6. Unique coordinates */}
                  <div className="bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-purple-500">
                    <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">УНИКАЛЬНЫХ КООРДИНАТ</p>
                    <p className="text-[2.75rem] font-bold text-purple-600 leading-none tabular-nums">
                      {new Set(categoryData.filter((b) => !b.is_not_in_almaty && b.latitude && b.longitude).map((b) => `${b.latitude},${b.longitude}`)).size}
                    </p>
                    <p className="text-[7.5px] text-purple-400 mt-1.5 leading-tight">точек на карте</p>
                  </div>

                  {/* 7. Seasonal or Unused buildings */}
                  <div className={`bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] ${showOnlySeasonalUnused ? 'border-pink-600 ring-2 ring-pink-200' : 'border-pink-500'}`}>
                    <p className="text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium">СЕЗОННЫЕ / НЕИСПОЛЬЗУЕМЫЕ</p>
                    <p className="text-[2.75rem] font-bold text-pink-600 leading-none tabular-nums">
                      {categoryData.filter((b) => b.is_seasonal_or_unused === true).length}
                    </p>
                    <p className="text-[7.5px] text-pink-400 mt-1.5 leading-tight">{categoryName} зданий</p>
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
                </>
              )
            })()}
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

          

            </div>
            {/* end floating overlay */}
          </div>
          )}
        </div>
      </main>
    </>
  )
}
