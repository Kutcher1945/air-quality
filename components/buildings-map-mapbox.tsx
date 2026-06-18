"use client"

import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

// ── Types ──────────────────────────────────────────────────────────────────────

interface Building {
  id: string
  address: string
  district: string
  latitude: number
  longitude: number
  has_gas: boolean | null
  building_type: string
  building_type_raw?: string | null
  building_category: "general" | "izhs" | "susn"
  is_seasonal_or_unused?: boolean
  is_approximate?: boolean | null
  geometry?: {
    type: string
    coordinates: any
  } | null
  floors?: number
  apartments?: number
  year_built?: number
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

interface BuildingsMapProps {
  buildings: Building[]
  renovationAreas?: RenovationArea[]
  districts?: District[]
  selectedDistrictId?: number | null
  showHeatmap?: boolean
  showRenovationAreas?: boolean
  showOnlySeasonalUnused?: boolean
  onBuildingClick?: (building: Building) => void
  darkMode?: boolean
}

// ── Constants ──────────────────────────────────────────────────────────────────

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ""
const DEFAULT_CENTER: [number, number] = [76.945465, 43.238293]
const DEFAULT_ZOOM = 11
const LIGHT_STYLE = "mapbox://styles/mapbox/streets-v12"
const DARK_STYLE = "mapbox://styles/mapbox/dark-v11"

const DISTRICT_COLORS = [
  "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b",
  "#10b981", "#06b6d4", "#3b82f6", "#f97316", "#84cc16",
]

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

// ── Color helpers ──────────────────────────────────────────────────────────────

function getBuildingColor(
  building: Building,
  showOnlySeasonalUnused: boolean,
): string {
  if (building.is_seasonal_or_unused && showOnlySeasonalUnused) return "#ec4899"
  const raw = (building.building_type_raw || "").trim()
  if (raw && IZHS_NON_RESIDENTIAL_TYPES.includes(raw)) return "#8b5cf6"
  if (building.is_approximate === true) return "#eab308"
  return "#10b981"
}

// ── GeoJSON helpers ────────────────────────────────────────────────────────────

function buildGeoJSON(
  buildings: Building[],
  showOnlySeasonalUnused: boolean,
): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: buildings
      .filter((b) => b.latitude != null && b.longitude != null)
      .map((b) => ({
        type: "Feature" as const,
        geometry: {
          type: "Point" as const,
          coordinates: [b.longitude, b.latitude],
        },
        properties: {
          id: b.id,
          color: getBuildingColor(b, showOnlySeasonalUnused),
        },
      })),
  }
}


function buildRenovationGeoJSON(
  renovationAreas: RenovationArea[],
): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: renovationAreas
      .filter((a) => a.geometry != null)
      .map((a) => ({
        type: "Feature" as const,
        geometry: a.geometry as GeoJSON.Geometry,
        properties: { id: a.id, name: a.name_ru },
      })),
  }
}

function buildDistrictsGeoJSON(districts: District[]): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: districts
      .filter((d) => d.geometry != null)
      .map((d, i) => ({
        type: "Feature" as const,
        geometry: d.geometry as GeoJSON.Geometry,
        properties: {
          id: d.id,
          name: d.name,
          _color: DISTRICT_COLORS[i % DISTRICT_COLORS.length],
        },
      })),
  }
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function BuildingsMapMapbox({
  buildings,
  renovationAreas = [],
  districts = [],
  selectedDistrictId = null,
  showHeatmap = false,
  showRenovationAreas = false,
  showOnlySeasonalUnused = false,
  onBuildingClick,
  darkMode = false,
}: BuildingsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapReadyRef = useRef(false)
  const appliedStyleRef = useRef<string>("")
  const onBuildingClickRef = useRef(onBuildingClick)

  // Keep callback ref in sync — never access in render
  useEffect(() => {
    onBuildingClickRef.current = onBuildingClick
  }, [onBuildingClick])

  // ── addAllLayers — rebuilds all custom sources and layers on the current style
  const addAllLayers = (
    map: mapboxgl.Map,
    opts: {
      buildings: Building[]
      renovationAreas: RenovationArea[]
      districts: District[]
      selectedDistrictId: number | null
      showHeatmap: boolean
      showRenovationAreas: boolean
      showOnlySeasonalUnused: boolean
    },
  ) => {
    const {
      buildings: bldgs,
      renovationAreas: renAreas,
      districts: dists,
      selectedDistrictId: selDistId,
      showHeatmap: heat,
      showRenovationAreas: showRen,
      showOnlySeasonalUnused: onlySeasonal,
    } = opts

    // 1. Districts fill + line layers (same style as sensor map)
    map.addSource("districts", {
      type: "geojson",
      data: buildDistrictsGeoJSON(dists),
    })
    map.addLayer({
      id: "districts-fill",
      type: "fill",
      source: "districts",
      paint: {
        "fill-color": ["get", "_color"],
        "fill-opacity": [
          "case",
          ["==", ["get", "id"], selDistId ?? -1],
          0.15,
          0.07,
        ],
      },
    })
    map.addLayer({
      id: "districts-line",
      type: "line",
      source: "districts",
      paint: {
        "line-color": ["get", "_color"],
        "line-width": [
          "case",
          ["==", ["get", "id"], selDistId ?? -1],
          2.5,
          1.5,
        ],
        "line-opacity": 0.8,
      },
    })

    // District name tooltip
    const districtPopup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
    map.on("mousemove", "districts-fill", (e) => {
      const name = e.features?.[0]?.properties?.name as string | undefined
      if (!name) return
      districtPopup
        .setLngLat(e.lngLat)
        .setHTML(`<span style="font-family:system-ui;font-size:12px;font-weight:600;color:#111">${name}</span>`)
        .addTo(map)
    })
    map.on("mouseleave", "districts-fill", () => districtPopup.remove())

    // 2. Renovation areas fill + line layers
    map.addSource("renovation-areas", {
      type: "geojson",
      data: buildRenovationGeoJSON(renAreas),
    })
    map.addLayer({
      id: "renovation-fill",
      type: "fill",
      source: "renovation-areas",
      layout: { visibility: showRen ? "visible" : "none" },
      paint: {
        "fill-color": "#8b5cf6",
        "fill-opacity": 0.15,
      },
    })
    map.addLayer({
      id: "renovation-line",
      type: "line",
      source: "renovation-areas",
      layout: { visibility: showRen ? "visible" : "none" },
      paint: {
        "line-color": "#8b5cf6",
        "line-width": 2,
        "line-opacity": 0.6,
      },
    })

    // 3a. Vector tile source for heatmap (hundreds of thousands of small polygons from backend)
    map.addSource("buildings-heat-tiles", {
      type: "vector",
      tiles: ["https://admin.smartalmaty.kz/api/v1/address/gas-heatmap/tiles/{z}/{x}/{y}.pbf"],
      maxzoom: 14,
    })

    // 3b. Clustered source for marker layers
    map.addSource("buildings", {
      type: "geojson",
      data: buildGeoJSON(bldgs, onlySeasonal),
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    })

    // 4. Buildings heatmap layer — polygon tiles colored by intensity property
    map.addLayer({
      id: "buildings-heat",
      type: "fill",
      source: "buildings-heat-tiles",
      "source-layer": "heatmap",
      layout: { visibility: heat ? "visible" : "none" },
      ...(selDistId != null ? { filter: ["==", ["get", "district_id"], selDistId] } : {}),
      paint: {
        "fill-color": [
          "step",
          ["to-number", ["get", "intensity"], 0],
          "#22c55e",    // intensity < 1  → green
          1, "#FFD700", // 1 ≤ intensity < 2 → yellow
          2, "#f97316", // 2 ≤ intensity < 5 → orange
          5, "#cf7e88", // 5 ≤ intensity < 6 → pinkish
          6, "#ef4444", // 6 ≤ intensity < 21 → red
          21, "#7f1d1d", // intensity ≥ 21 → dark red
        ],
        "fill-opacity": 0.75,
      },
    })

    const markerVis = heat ? "none" : "visible"

    // 5. Cluster circles layer (hidden when heatmap is active)
    map.addLayer({
      id: "clusters",
      type: "circle",
      source: "buildings",
      filter: ["has", "point_count"],
      layout: { visibility: markerVis },
      paint: {
        "circle-color": "#f97316",
        "circle-radius": [
          "step",
          ["get", "point_count"],
          20,
          100, 28,
          500, 36,
        ],
        "circle-opacity": 0.9,
      },
    })

    // 6. Cluster count label layer (hidden when heatmap is active)
    map.addLayer({
      id: "cluster-count",
      type: "symbol",
      source: "buildings",
      filter: ["has", "point_count"],
      layout: {
        visibility: markerVis,
        "text-field": "{point_count_abbreviated}",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 11,
      },
      paint: {
        "text-color": "#ffffff",
      },
    })

    // 7. Unclustered point circle layer (hidden when heatmap is active)
    map.addLayer({
      id: "unclustered-point",
      type: "circle",
      source: "buildings",
      filter: ["!", ["has", "point_count"]],
      layout: { visibility: markerVis },
      paint: {
        "circle-color": ["get", "color"],
        "circle-radius": 5,
        "circle-stroke-width": 1.5,
        "circle-stroke-color": "#ffffff",
      },
    })
  }

  // ── Init map ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    mapboxgl.accessToken = MAPBOX_TOKEN

    const initialStyle = LIGHT_STYLE
    appliedStyleRef.current = initialStyle

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: initialStyle,
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
    })

    map.addControl(new mapboxgl.NavigationControl(), "top-left")

    // Capture current prop values at init time for the closure
    const initBuildings = buildings
    const initRenovationAreas = renovationAreas
    const initDistricts = districts
    const initSelectedDistrictId = selectedDistrictId
    const initShowHeatmap = showHeatmap
    const initShowRenovationAreas = showRenovationAreas
    const initShowOnlySeasonalUnused = showOnlySeasonalUnused

    map.once("style.load", () => {
      mapReadyRef.current = true
      addAllLayers(map, {
        buildings: initBuildings,
        renovationAreas: initRenovationAreas,
        districts: initDistricts,
        selectedDistrictId: initSelectedDistrictId,
        showHeatmap: initShowHeatmap,
        showRenovationAreas: initShowRenovationAreas,
        showOnlySeasonalUnused: initShowOnlySeasonalUnused,
      })
    })

    // Cluster click — zoom in
    map.on("click", "clusters", (e) => {
      const features = map.queryRenderedFeatures(e.point, { layers: ["clusters"] })
      if (!features.length) return
      const clusterId = features[0].properties?.cluster_id as number
      const source = map.getSource("buildings") as mapboxgl.GeoJSONSource
      source.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err || zoom == null) return
        const geometry = features[0].geometry as GeoJSON.Point
        map.easeTo({ center: geometry.coordinates as [number, number], zoom })
      })
    })

    // Unclustered point click — find building and call handler
    map.on("click", "unclustered-point", (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["unclustered-point"],
      })
      if (!features.length) return
      const id = features[0].properties?.id as string
      // Access via ref to always use latest buildings array
      const building = buildingsRef.current.find((b) => b.id === id)
      if (building) {
        onBuildingClickRef.current?.(building)
      }
    })

    // Pointer cursors
    map.on("mouseenter", "clusters", () => {
      map.getCanvas().style.cursor = "pointer"
    })
    map.on("mouseleave", "clusters", () => {
      map.getCanvas().style.cursor = ""
    })
    map.on("mouseenter", "unclustered-point", () => {
      map.getCanvas().style.cursor = "pointer"
    })
    map.on("mouseleave", "unclustered-point", () => {
      map.getCanvas().style.cursor = ""
    })

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
      mapReadyRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Keep a ref to the latest buildings array so click handlers can look up by id
  const buildingsRef = useRef<Building[]>(buildings)
  useEffect(() => {
    buildingsRef.current = buildings
  }, [buildings])

  // ── Dark / light theme switching ──────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReadyRef.current) return

    const style = darkMode ? DARK_STYLE : LIGHT_STYLE
    if (appliedStyleRef.current === style) return
    appliedStyleRef.current = style
    mapReadyRef.current = false

    // Snapshot current props for the once-handler closure
    const snapBuildings = buildings
    const snapRenovationAreas = renovationAreas
    const snapDistricts = districts
    const snapSelectedDistrictId = selectedDistrictId
    const snapShowHeatmap = showHeatmap
    const snapShowRenovationAreas = showRenovationAreas
    const snapShowOnlySeasonalUnused = showOnlySeasonalUnused

    map.setStyle(style)
    map.once("style.load", () => {
      mapReadyRef.current = true
      addAllLayers(map, {
        buildings: snapBuildings,
        renovationAreas: snapRenovationAreas,
        districts: snapDistricts,
        selectedDistrictId: snapSelectedDistrictId,
        showHeatmap: snapShowHeatmap,
        showRenovationAreas: snapShowRenovationAreas,
        showOnlySeasonalUnused: snapShowOnlySeasonalUnused,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode])

  // ── Buildings data update ─────────────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReadyRef.current) return
    try {
      ;(map.getSource("buildings") as mapboxgl.GeoJSONSource | undefined)
        ?.setData(buildGeoJSON(buildings, showOnlySeasonalUnused))
    } catch {
      // source not yet added (style still loading) — ignore
    }
  }, [buildings, showOnlySeasonalUnused])

  // ── Renovation areas data update ──────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReadyRef.current) return
    try {
      const src = map.getSource("renovation-areas") as mapboxgl.GeoJSONSource | undefined
      src?.setData(buildRenovationGeoJSON(renovationAreas))
    } catch {
      // ignore
    }
  }, [renovationAreas])

  // ── Heatmap visibility toggle (also hides/shows building markers) ─────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReadyRef.current) return
    try {
      const heatVis = showHeatmap ? "visible" : "none"
      const markerVis = showHeatmap ? "none" : "visible"
      map.setLayoutProperty("buildings-heat", "visibility", heatVis)
      map.setLayoutProperty("clusters", "visibility", markerVis)
      map.setLayoutProperty("cluster-count", "visibility", markerVis)
      map.setLayoutProperty("unclustered-point", "visibility", markerVis)
    } catch {
      // ignore
    }
  }, [showHeatmap])

  // ── Renovation areas visibility toggle ───────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReadyRef.current) return
    try {
      const vis = showRenovationAreas ? "visible" : "none"
      map.setLayoutProperty("renovation-fill", "visibility", vis)
      map.setLayoutProperty("renovation-line", "visibility", vis)
    } catch {
      // ignore
    }
  }, [showRenovationAreas])

  // ── Selected district highlight ───────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReadyRef.current) return
    try {
      map.setPaintProperty("districts-line", "line-width", [
        "case",
        ["==", ["get", "id"], selectedDistrictId ?? -1],
        2.5,
        1.5,
      ])
      map.setPaintProperty("districts-fill", "fill-opacity", [
        "case",
        ["==", ["get", "id"], selectedDistrictId ?? -1],
        0.15,
        0.07,
      ])
      // Filter heatmap polygons to the selected district (or show all)
      if (map.getLayer("buildings-heat")) {
        map.setFilter(
          "buildings-heat",
          selectedDistrictId != null
            ? ["==", ["get", "district_id"], selectedDistrictId]
            : null,
        )
      }
    } catch {
      // ignore
    }
  }, [selectedDistrictId])

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="h-full w-full rounded-xl" />
    </div>
  )
}
