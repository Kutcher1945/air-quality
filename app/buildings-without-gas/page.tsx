"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { HeaderMenu } from "@/components/header-menu"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, AlertCircle, CheckCircle } from "lucide-react"

// Динамически загружаем карту для избежания SSR проблем
const BuildingsMap = dynamic(() => import("@/components/buildings-map"), { ssr: false })

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
      <main className="min-h-screen bg-background">
        <div className="w-full px-4 pb-12 pt-8 md:px-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                <Building2 className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Инфраструктура / Алматы</p>
                <h1 className="text-4xl font-bold text-foreground">Здания без газа</h1>
              </div>
            </div>
            <p className="text-muted-foreground">
              Карта жилых зданий Алматы, не подключенных к системе газоснабжения
            </p>
          </header>

          {/* Statistics Cards */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Всего уникальных зданий</p>
                    <p className="text-3xl font-bold text-foreground">{stats.uniqueMarkers}</p>
                  </div>
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">ALSECO</p>
                    <p className="text-3xl font-bold text-orange-500">{stats.byCategory.general}</p>
                  </div>
                  <AlertCircle className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">ИЖС</p>
                    <p className="text-3xl font-bold text-blue-500">{stats.byCategory.izhs}</p>
                  </div>
                    <Building2 className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">СУСН</p>
                    <p className="text-3xl font-bold text-red-500">{stats.byCategory.susn}</p>
                  </div>
                  <MapPin className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Card */}
          <Card className="mb-8 bg-card border-border">
            <CardHeader className="border-b border-border">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-2xl">Интерактивная карта</CardTitle>
                  <CardDescription>
                    {filteredBuildings.length} из {buildings.length} зданий отображено
                    {" · "}ИЖС: {filteredCounts.izhs}/{categoryCounts.izhs} · СУСН: {filteredCounts.susn}/{categoryCounts.susn} · ALSECO: {filteredCounts.general}/{categoryCounts.general}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={fetchBuildings}>
                  Обновить данные
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              {/* Filters */}
              <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted-foreground">Поиск по адресу</label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Введите адрес или район"
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted-foreground">Район</label>
                  <select
                    value={districtFilter}
                    onChange={(e) => setDistrictFilter(e.target.value)}
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                  >
                    <option value="all">Все районы</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted-foreground">Тип</label>
                  <select
                    value={buildingTypeFilter}
                    onChange={(e) => setBuildingTypeFilter(e.target.value)}
                    className="h-10 rounded-md border border-border bg-background px-3 text-sm"
                  >
                    <option value="all">Все типы</option>
                    <option value="general">ALSECO</option>
                    <option value="izhs">ИЖС (индивидуальное строительство)</option>
                    <option value="susn">СУСН (соц.уязвимые)</option>
                  </select>
                </div>
              </div>

              {/* Map */}
              {loading ? (
                <div className="flex h-[600px] items-center justify-center text-muted-foreground">
                  Загрузка карты...
                </div>
              ) : error ? (
                <div className="flex h-[600px] flex-col items-center justify-center gap-3">
                  <AlertCircle className="h-12 w-12 text-orange-500" />
                  <p className="text-red-500 font-semibold">{error}</p>
                  <p className="text-sm text-muted-foreground">Используются тестовые данные для демонстрации</p>
                  <Button variant="outline" size="sm" onClick={fetchBuildings}>
                    Попробовать снова
                  </Button>
                </div>
              ) : (
                <div className="h-[600px] w-full">
                  <BuildingsMap buildings={filteredBuildings} />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Buildings List */}
          {/* <Card className="bg-card border-border">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-2xl">Список зданий</CardTitle>
              <CardDescription>Подробная информация о зданиях без газоснабжения</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {filteredBuildings.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    Нет зданий, соответствующих фильтрам
                  </div>
                ) : (
                  filteredBuildings.map((building) => (
                    <div key={building.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                            <h3 className="font-semibold text-foreground">{building.address}</h3>
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {building.district}
                            </span>
                            {building.floors && <span>Этажей: {building.floors}</span>}
                            {building.apartments && <span>Квартир: {building.apartments}</span>}
                            {building.year_built && <span>Год постройки: {building.year_built}</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500">
                            <AlertCircle className="h-3 w-3" />
                            Без газа
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card> */}

          {/* Info Section */}
          <Card className="mt-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">О проекте</h3>
                <p className="text-sm text-muted-foreground">
                  Данная карта показывает жилые здания города Алматы, которые не подключены к централизованной
                  системе газоснабжения. Информация обновляется регулярно и может быть использована для планирования
                  инфраструктурных проектов.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Альтернативные источники отопления</h3>
                <p className="text-sm text-muted-foreground">
                  Здания без газа обычно используют электрическое отопление, централизованное теплоснабжение или
                  автономные котельные. Это может влиять на стоимость коммунальных услуг и экологическую обстановку.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
