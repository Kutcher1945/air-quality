"use client"

import { useState, useEffect, useCallback, useMemo, useRef, useDeferredValue } from "react"
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
  has_gas: boolean
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

  // Category visibility checkboxes
  const [showAlseco, setShowAlseco] = useState(true)
  const [showIzhs, setShowIzhs] = useState(false)
  const [showSusn, setShowSusn] = useState(false)
  const [showAlsecoInAlmaty, setShowAlsecoInAlmaty] = useState(true)
  const [showAlsecoNotInAlmaty, setShowAlsecoNotInAlmaty] = useState(false)

  // Selected category for stats panel
  const [selectedStatsCategory, setSelectedStatsCategory] = useState<"general" | "izhs" | "susn">("general")

  // ИЖС building type filters (for "Данные районных акиматов" category)
  const [showIzhsResidential, setShowIzhsResidential] = useState(true)
  const [showIzhsNonResidential, setShowIzhsNonResidential] = useState(false)

  // ALSECO building type filters (ИЖС vs не ИЖС)
  const [showAlsecoIzhsTypes, setShowAlsecoIzhsTypes] = useState(true)
  const [showAlsecoNonIzhsTypes, setShowAlsecoNonIzhsTypes] = useState(true)
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
  const deferredSelectedAlsecoIzhsTypes = useDeferredValue(selectedAlsecoIzhsTypes)
  const deferredSelectedAlsecoNonIzhsTypes = useDeferredValue(selectedAlsecoNonIzhsTypes)

  const allAlsecoIzhsSelected = useMemo(
    () => alsecoIzhsLabels.every((label) => deferredSelectedAlsecoIzhsTypes[label]),
    [alsecoIzhsLabels, deferredSelectedAlsecoIzhsTypes]
  )
  const allAlsecoNonIzhsSelected = useMemo(
    () => alsecoNonIzhsLabels.every((label) => deferredSelectedAlsecoNonIzhsTypes[label]),
    [alsecoNonIzhsLabels, deferredSelectedAlsecoNonIzhsTypes]
  )
  const alsecoIzhsLabelSet = useMemo(() => new Set(alsecoIzhsLabels), [alsecoIzhsLabels])

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
          const hasBuildingTypeField = typeof cachedData[0]?.building_type !== "undefined"
          if (!hasBuildingTypeField) {
            console.warn("🧹 Cache missing building_type field, refetching from API...")
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

      // District label lookup
      let districtLabel: string
      if (b.district && typeof b.district === "string") {
        districtLabel = b.district
      } else if (b.district_id && DISTRICT_LABELS[String(b.district_id)]) {
        districtLabel = DISTRICT_LABELS[String(b.district_id)]
      } else if (b.district_id) {
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
        has_gas: false,
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

      // ALSECO-specific building type filter (ИЖС vs не ИЖС)
      if (building.building_category === "general") {
        const rawType = (building.building_type_raw || "").trim()
        if (!rawType) return false
        const allowAnyType =
          deferredShowAlsecoIzhsTypes &&
          deferredShowAlsecoNonIzhsTypes &&
          allAlsecoIzhsSelected &&
          allAlsecoNonIzhsSelected

        if (!allowAnyType) {
          const isIzhsType = rawType === "Не указано" || alsecoIzhsLabelSet.has(rawType)
          const allowAnyNonIzhsType =
            deferredShowAlsecoNonIzhsTypes && allAlsecoNonIzhsSelected
          const matchesIzhs =
            deferredShowAlsecoIzhsTypes &&
            deferredSelectedAlsecoIzhsTypes[rawType === "Не указано" ? "Дом" : rawType]
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
      }

      // Filter for seasonal/unused buildings only
      if (deferredShowOnlySeasonalUnused && building.is_seasonal_or_unused !== true) return false

      const matchesDistrict = deferredDistrictFilter === "all" || building.district === deferredDistrictFilter
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
  ])

  // Category-specific counts
  const generalBuildings = buildings.filter((b) => b.building_category === "general")
  const izhsBuildings = buildings.filter((b) => b.building_category === "izhs")
  const susnBuildings = buildings.filter((b) => b.building_category === "susn")

  // Get districts from all visible categories
  const visibleBuildings = buildings.filter((b) =>
    (showAlseco && b.building_category === "general") ||
    (showIzhs && b.building_category === "izhs") ||
    (showSusn && b.building_category === "susn")
  )
  const districtNames = Array.from(new Set(visibleBuildings.map((b) => b.district)))
    .filter((name) => name !== "Район 9" && name !== "Не указан")
    .sort()

  const categoryCounts = {
    general: generalBuildings.length,
    izhs: izhsBuildings.length,
    susn: susnBuildings.length,
  }

  // Total of selected categories
  const selectedCategoriesTotal =
    (showAlseco ? categoryCounts.general : 0) +
    (showIzhs ? categoryCounts.izhs : 0) +
    (showSusn ? categoryCounts.susn : 0)
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
        <div className="absolute top-0 left-0 bottom-0 w-[300px] pointer-events-auto z-20 flex flex-col bg-white/95 backdrop-blur-md border-r border-slate-200 shadow-xl">
          {/* Unified Header */}
          <div className="h-[72px] px-5 flex items-center gap-3 border-b border-slate-200 shrink-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 shadow-lg shadow-slate-200">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase leading-tight">ИНФРАСТРУКТУРА / АЛМАТЫ</p>
              <h1 className="text-sm font-bold text-slate-900 leading-tight">Здания без газа</h1>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Stats Summary Section - Color matched to theme */}
            <div className="p-5 bg-slate-50/50 border-b border-slate-100">
              <div className="flex items-end justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Найдено объектов</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-slate-900 tabular-nums leading-none">
                    {filteredBuildings.length.toLocaleString()}
                  </span>
                  <span className="text-xs font-medium text-slate-400">/ {selectedCategoriesTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-6">
              {/* Search Section */}
              <section>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Поиск по адресу</label>
                <div className="relative group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Название улицы, номер..."
                    className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </section>

              {/* Category Checkboxes Section */}
              <section>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Категории зданий</label>
                <div className="space-y-2">
                  {/* ALSECO */}
                  <label className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={showAlseco}
                      onChange={(e) => setShowAlseco(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-slate-700">ALSECO</span>
                      <span className="text-[10px] text-slate-400 ml-2">({categoryCounts.general.toLocaleString()})</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  </label>
                  <div className={`grid grid-cols-1 gap-2 px-3 ${showAlseco ? "opacity-100" : "opacity-60"}`}>
                    <label className={`flex items-center gap-3 ${showAlseco ? "cursor-pointer" : "cursor-not-allowed"}`}>
                      <input
                        type="checkbox"
                        checked={showAlsecoInAlmaty}
                        onChange={(e) => setShowAlsecoInAlmaty(e.target.checked)}
                        disabled={!showAlseco}
                        className="w-3.5 h-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-[11px] text-slate-600">В Алматы</span>
                    </label>
                    <label className={`flex items-center gap-3 ${showAlseco ? "cursor-pointer" : "cursor-not-allowed"}`}>
                      <input
                        type="checkbox"
                        checked={showAlsecoNotInAlmaty}
                        onChange={(e) => setShowAlsecoNotInAlmaty(e.target.checked)}
                        disabled={!showAlseco}
                        className="w-3.5 h-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-[11px] text-slate-600">Не в Алматы</span>
                    </label>
                  </div>

                  {/* ИЖС */}
                  <label className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={showIzhs}
                      onChange={(e) => setShowIzhs(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-green-500 focus:ring-green-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-slate-700">Данные районных акиматов</span>
                      <span className="text-[10px] text-slate-400 ml-2">({categoryCounts.izhs.toLocaleString()})</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </label>

                  {/* СУСН */}
                  <label className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                    <input
                      type="checkbox"
                      checked={showSusn}
                      onChange={(e) => setShowSusn(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-slate-700">СУСН</span>
                      <span className="text-[10px] text-slate-400 ml-2">({categoryCounts.susn.toLocaleString()})</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  </label>
                </div>
              </section>

              {/* ALSECO building type toggle */}
              <section>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Фильтр ALSECO</label>
                <div className="space-y-2">
                  <label className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${showAlseco ? "bg-slate-50 border-slate-200 hover:bg-slate-100 cursor-pointer" : "bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed"}`}>
                    <input
                      type="checkbox"
                      checked={showAlsecoIzhsTypes}
                      onChange={(e) => setShowAlsecoIzhsTypes(e.target.checked)}
                      disabled={!showAlseco}
                      className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-slate-700">Показывать ИЖС типы</span>
                      <span className="text-[10px] text-slate-400 ml-2">из ALSECO</span>
                    </div>
                  </label>
                  <div className={`grid grid-cols-1 gap-2 px-3 ${showAlseco && showAlsecoIzhsTypes ? "opacity-100" : "opacity-60"}`}>
                    {alsecoIzhsLabels.map((label) => (
                      <label key={label} className={`flex items-center gap-3 ${showAlseco && showAlsecoIzhsTypes ? "cursor-pointer" : "cursor-not-allowed"}`}>
                        <input
                          type="checkbox"
                          checked={!!selectedAlsecoIzhsTypes[label]}
                          onChange={(e) => setSelectedAlsecoIzhsTypes(prev => ({ ...prev, [label]: e.target.checked }))}
                          disabled={!showAlseco || !showAlsecoIzhsTypes}
                          className="w-3.5 h-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-[11px] text-slate-600">{label}</span>
                      </label>
                    ))}
                  </div>

                  <div className="h-px bg-slate-200"></div>

                  <label className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${showAlseco ? "bg-slate-50 border-slate-200 hover:bg-slate-100 cursor-pointer" : "bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed"}`}>
                    <input
                      type="checkbox"
                      checked={showAlsecoNonIzhsTypes}
                      onChange={(e) => setShowAlsecoNonIzhsTypes(e.target.checked)}
                      disabled={!showAlseco}
                      className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-slate-700">Показывать не ИЖС</span>
                      <span className="text-[10px] text-slate-400 ml-2">из ALSECO</span>
                    </div>
                  </label>
                  <div className={`grid grid-cols-1 gap-2 px-3 ${showAlseco && showAlsecoNonIzhsTypes ? "opacity-100" : "opacity-60"}`}>
                    {alsecoNonIzhsLabels.map((label) => (
                      <label key={label} className={`flex items-center gap-3 ${showAlseco && showAlsecoNonIzhsTypes ? "cursor-pointer" : "cursor-not-allowed"}`}>
                        <input
                          type="checkbox"
                          checked={!!selectedAlsecoNonIzhsTypes[label]}
                          onChange={(e) => setSelectedAlsecoNonIzhsTypes(prev => ({ ...prev, [label]: e.target.checked }))}
                          disabled={!showAlseco || !showAlsecoNonIzhsTypes}
                          className="w-3.5 h-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-[11px] text-slate-600">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </section>

              {/* District Section */}
              <section>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Район города</label>
                <select
                  value={districtFilter}
                  onChange={(e) => handleDistrictFilterChange(e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 cursor-pointer focus:border-blue-500 outline-none"
                >
                  <option value="all">Все районы</option>
                  {districtNames.map((district) => <option key={district} value={district}>{district}</option>)}
                </select>
              </section>

              {/* Layer Controls */}
              <section>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Управление картой</label>
                <div className="grid grid-cols-1 gap-2">
                  <button onClick={() => fetchBuildings(true)} disabled={loading} className="flex items-center gap-3 px-4 h-10 rounded-xl text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200">
                    <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} /> Обновить данные
                  </button>

                  <button
                    onClick={async () => {
                      await clearBuildingsCache()
                      fetchBuildings(true)
                    }}
                    disabled={loading}
                    className="flex items-center gap-3 px-4 h-10 rounded-xl text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200"
                  >
                    <X className="h-4 w-4" /> Очистить кэш
                  </button>
                  
                  <button onClick={() => setShowHeatmap(!showHeatmap)} className={`flex items-center gap-3 px-4 h-10 rounded-xl text-xs font-semibold transition-all ${showHeatmap ? "bg-orange-500 text-white shadow-md shadow-orange-200" : "bg-slate-100 text-slate-600"}`}>
                    <Flame className="h-4 w-4" /> Тепловая карта
                  </button>
                  
                  <button onClick={() => setShowRenovationAreas(!showRenovationAreas)} className={`flex items-center gap-3 px-4 h-10 rounded-xl text-xs font-semibold transition-all ${showRenovationAreas ? "bg-purple-600 text-white shadow-md shadow-purple-200" : "bg-slate-100 text-slate-600"}`}>
                    <Layers className="h-4 w-4" /> Зоны реновации
                  </button>

                  {/* <button onClick={() => setShowAdvancedFilters(!showAdvancedFilters)} className={`flex items-center justify-between px-4 h-10 rounded-xl text-xs font-semibold transition-all ${showAdvancedFilters ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}>
                    <div className="flex items-center gap-3"><Calendar className="h-4 w-4" /> Доп. фильтры</div>
                    {showAdvancedFilters && <X className="h-3 w-3" />}
                  </button> */}
                </div>
              </section>

              {/* Advanced Filters (Inline) */}
              {showAdvancedFilters && (
                <section className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  {/* Year Filter */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 flex items-center gap-2">
                      <Calendar className="h-3 w-3" /> Год постройки
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={yearFilter?.min || ""}
                        onChange={(e) => setYearFilter(prev => ({ min: Number(e.target.value), max: prev?.max || 2025 }))}
                        className="w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={yearFilter?.max || ""}
                        onChange={(e) => setYearFilter(prev => ({ min: prev?.min || 1900, max: Number(e.target.value) }))}
                        className="w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Floors Filter */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 flex items-center gap-2">
                      <Layers className="h-3 w-3" /> Этажность
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={floorsFilter?.min || ""}
                        onChange={(e) => setFloorsFilter(prev => ({ min: Number(e.target.value), max: prev?.max || 100 }))}
                        className="w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={floorsFilter?.max || ""}
                        onChange={(e) => setFloorsFilter(prev => ({ min: prev?.min || 1, max: Number(e.target.value) }))}
                        className="w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Apartments Filter */}
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase mb-2 flex items-center gap-2">
                      <Home className="h-3 w-3" /> Квартир
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="От"
                        value={apartmentsFilter?.min || ""}
                        onChange={(e) => setApartmentsFilter(prev => ({ min: Number(e.target.value), max: prev?.max || 1000 }))}
                        className="w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                      />
                      <input
                        type="number"
                        placeholder="До"
                        value={apartmentsFilter?.max || ""}
                        onChange={(e) => setApartmentsFilter(prev => ({ min: prev?.min || 1, max: Number(e.target.value) }))}
                        className="w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setYearFilter(null);
                      setFloorsFilter(null);
                      setApartmentsFilter(null);
                    }}
                    className="w-full h-8 rounded-lg text-[10px] font-bold bg-white text-slate-500 border border-slate-200 hover:bg-slate-100 transition-all uppercase tracking-wider"
                  >
                    Сбросить фильтры
                  </button>
                </section>
              )}

              {/* Export Section */}
              <section className="pt-4 border-t border-slate-100 space-y-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Экспорт и кэш</label>
                <div className="flex gap-2">
                  <button onClick={exportToCSV} className="flex-1 h-10 rounded-xl border border-slate-200 bg-white text-[10px] font-bold text-slate-600 uppercase flex items-center justify-center gap-2">
                    <Download className="h-3 w-3" /> CSV
                  </button>
                  <button onClick={exportToJSON} className="flex-1 h-10 rounded-xl border border-slate-200 bg-white text-[10px] font-bold text-slate-600 uppercase flex items-center justify-center gap-2">
                    <Download className="h-3 w-3" /> JSON
                  </button>
                </div>
                <button onClick={async () => { await clearBuildingsCache(); fetchBuildings(true); }} className="w-full h-9 rounded-xl bg-red-50 text-red-600 text-[10px] font-bold border border-red-100 uppercase transition-colors hover:bg-red-100">
                  Очистить кэш
                </button>
              </section>
            </div>
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
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                ALSECO
              </button>
              <button
                onClick={() => setSelectedStatsCategory("izhs")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${
                  selectedStatsCategory === "izhs"
                    ? "bg-green-500 text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                Данные районных акиматов
              </button>
              <button
                onClick={() => setSelectedStatsCategory("susn")}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${
                  selectedStatsCategory === "susn"
                    ? "bg-blue-500 text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-100"
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

          

          {/* Side Panel for Building Details */}
          {showSidePanel && selectedBuilding && (
          <div className="absolute top-0 left-[300px] h-full w-[320px] pointer-events-auto z-10 flex flex-col bg-white/95 backdrop-blur-md border-r border-slate-200 shadow-[15px_0_30px_-5px_rgba(0,0,0,0.1)] animate-in slide-in-from-left duration-300">
            {/* Unified Header */}
            <div className="h-[72px] px-5 flex items-center justify-between border-b border-slate-200 shrink-0">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 flex items-center justify-center rounded-xl ${
                  selectedBuilding.building_category === "general" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
                }`}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase">Карточка объекта</p>
                  <h2 className="text-sm font-bold text-slate-900 leading-tight">Информация</h2>
                </div>
              </div>
              <button 
                onClick={() => { setShowSidePanel(false); setSelectedBuilding(null); }}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-400" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
              {/* Main Address Card */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Адрес и район</label>
                <h3 className="text-m font-bold text-slate-900 leading-snug">{selectedBuilding.address}</h3>
                <p className="text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-500" /> {selectedBuilding.district}
                </p>
              </div>

              {/* Statistics Section */}
              {/* <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Этажность</p>
                  <p className="text-lg font-bold text-slate-900">{selectedBuilding.floors || "—"}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Квартиры</p>
                  <p className="text-lg font-bold text-slate-900">{selectedBuilding.apartments || "—"}</p>
                </div>
                <div className="col-span-2 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <p className="text-[9px] font-bold text-slate-400 uppercase">Год постройки</p>
                  <p className="text-sm font-bold text-slate-900">{selectedBuilding.year_built || "Не указан"}</p>
                </div>
              </div> */}

              {/* Technical Category */}
              <section className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1">Тип здания</p>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                  {selectedBuilding.building_type}
                </p>
              </section>

              {/* Status Alert */}
              <div className="p-4 rounded-2xl bg-orange-50 border border-orange-100 flex gap-3">
                <div className="h-8 w-8 shrink-0 rounded-full bg-orange-500 flex items-center justify-center shadow-sm">
                  <AlertCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-orange-900 uppercase tracking-tight">Газ отсутствует</h4>
                  <p className="text-[11px] text-orange-700 leading-relaxed mt-0.5">
                    Объект числится в списках на газификацию или использует альтернативные источники.
                  </p>
                </div>
              </div>

              {/* Geolocation Section */}
              <div className="pt-4 border-t border-slate-100">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Геолокация</label>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 font-mono text-[10px] text-slate-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Широта:</span> <span className="font-bold">{selectedBuilding.latitude.toFixed(6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Долгота:</span> <span className="font-bold">{selectedBuilding.longitude.toFixed(6)}</span>
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
