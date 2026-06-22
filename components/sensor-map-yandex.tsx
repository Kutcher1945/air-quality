"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { useTheme } from "next-themes"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { pm25Color, pm25Label, pm25ToEpaAqi } from "@/lib/pm25"
import type { AirMetricMode } from "@/lib/pm25"
import WindLayer, { type WindPoint } from "./wind-layer"

// ── Types ──────────────────────────────────────────────────────────────────────

export interface AirSensor {
  id: number
  sensor_id: number
  sensor_name: string | null
  source: string | null
  parameter: string
  value: number | null
  unit: string | null
  measured_at: string | null
  latitude: number | null
  longitude: number | null
  district_id: number | null
  district_name: string | null
  rawAqi?: number | null
  ecoIqStationId?: string | null
}

export type Sensor = AirSensor

export interface EcoIqSensor {
  id: string
  name: string | null
  latitude: number
  longitude: number
  is_high_precision: boolean
  aqi: number | null
  pm25_concentration: number | null
  pm25_aqi: number | null
  measured_at: string | null
  wind_speed: number | null
  wind_direction: number | null
}

interface SensorMapProps {
  sensors: AirSensor[]
  ecoIqSensors?: EcoIqSensor[]
  onSensorSelect?: (sensor: AirSensor) => void
  onEcoIqSelect?: (sensor: EcoIqSensor) => void
  focusedSensor?: AirSensor | null
  metricMode?: AirMetricMode
  sourceFilter?: string
}

// ── Constants ──────────────────────────────────────────────────────────────────

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ""
const DEFAULT_CENTER: [number, number] = [76.889709, 43.238949]
const DISTRICT_COLORS = [
  "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b",
  "#10b981", "#06b6d4", "#3b82f6", "#f97316", "#84cc16",
]

// ── Color helpers ──────────────────────────────────────────────────────────────

function aqiColor(aqi: number | null): string {
  if (aqi == null) return "#6b7280"
  if (aqi <= 50)   return "#1BA97C"
  if (aqi <= 100)  return "#f59e0b"
  if (aqi <= 150)  return "#f97316"
  if (aqi <= 200)  return "#ef4444"
  if (aqi <= 300)  return "#a855f7"
  return "#581c87"
}

// ── Marker element factories ───────────────────────────────────────────────────

function makeSensorEl(sensor: AirSensor, metricMode: AirMetricMode, onClick: () => void): HTMLElement {
  const pm25  = sensor.value
  const color = pm25Color(pm25)
  let display: string
  if (metricMode === "epa-aqi" && pm25 != null) {
    const aqi = pm25ToEpaAqi(pm25)
    display = aqi ? aqi.aqi.toString() : "?"
  } else {
    display = pm25 != null ? Math.round(pm25).toString() : "?"
  }
  const w = display.length <= 2 ? 34 : display.length === 3 ? 40 : 46

  const el = document.createElement("div")
  el.style.cssText = "cursor:pointer"
  el.innerHTML = `<div style="background:${color};color:#fff;font-family:system-ui,sans-serif;font-weight:800;font-size:12px;line-height:1;width:${w}px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.35);border:2px solid rgba(255,255,255,.45)">${display}</div>`
  el.addEventListener("click", onClick)
  return el
}

function makeEcoIqEl(s: EcoIqSensor, onClick: () => void): HTMLElement {
  // pm25_aqi comes from actual recent measurements; s.aqi is the station-level
  // field that may be stale — prefer the measurement-derived value
  const displayAqi = s.pm25_aqi ?? s.aqi
  const color      = aqiColor(displayAqi)
  const label      = displayAqi != null ? displayAqi.toString() : "?"
  const fontSize   = label.length >= 3 ? 8 : 9

  // Arrow and triangle live in one SVG — no CSS absolute positioning so
  // Mapbox's anchor calculation stays correct regardless of zoom level.
  // Arrow points TO where wind goes (meteorological FROM direction + 180°).
  let svg: string
  if (s.wind_direction != null) {
    const rotate = (s.wind_direction + 180) % 360
    svg = `<svg width="38" height="46" viewBox="0 0 38 46" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))">` +
      `<g transform="translate(19,7) rotate(${rotate})">` +
        `<polygon points="0,-5 3,1 0,-1 -3,1" fill="white" stroke="rgba(0,0,0,.35)" stroke-width="0.5"/>` +
      `</g>` +
      `<polygon points="19,14 36,46 2,46" fill="${color}" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>` +
      `<text x="19" y="36" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="${fontSize}" fill="white">${label}</text>` +
      `</svg>`
  } else {
    svg = `<svg width="38" height="38" viewBox="0 0 38 38" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,.4))">` +
      `<polygon points="19,2 36,34 2,34" fill="${color}" stroke="rgba(255,255,255,.5)" stroke-width="1.5"/>` +
      `<text x="19" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="${fontSize}" fill="white">${label}</text>` +
      `</svg>`
  }

  const el = document.createElement("div")
  el.style.cssText = "cursor:pointer;line-height:0"
  el.innerHTML = svg
  el.addEventListener("click", onClick)
  return el
}

// ── Custom layer setup (called on initial load and after style change) ─────────

function addCustomLayers(
  map: mapboxgl.Map,
  trafficVisible: boolean,
  heatmapVisible: boolean,
  hexData: object | null,
): void {
  map.addSource("mapbox-traffic", {
    type: "vector",
    url: "mapbox://mapbox.mapbox-traffic-v1",
  })
  map.addLayer({
    id: "traffic-layer",
    type: "line",
    source: "mapbox-traffic",
    "source-layer": "traffic",
    layout: { visibility: trafficVisible ? "visible" : "none" },
    paint: {
      "line-width": ["interpolate", ["linear"], ["zoom"], 8, 1, 16, 5],
      "line-color": [
        "match", ["get", "congestion"],
        "low",      "#4ade80",
        "moderate", "#facc15",
        "heavy",    "#fb923c",
        "severe",   "#f87171",
        "#4ade80",
      ],
    },
  })

  map.addSource("hex-pm25", {
    type: "geojson",
    data: (hexData ?? { type: "FeatureCollection", features: [] }) as any,
  })
  map.addLayer({
    id: "hex-pm25-fill",
    type: "fill",
    source: "hex-pm25",
    layout: { visibility: heatmapVisible ? "visible" : "none" },
    paint: {
      "fill-opacity": 0.75,
      "fill-color": [
        "case",
        ["==", ["get", "avg_pm25"], null], "rgba(0,0,0,0)",
        [
          "interpolate", ["linear"], ["get", "avg_pm25"],
          0,   "#22c55e",
          15,  "#84cc16",
          35,  "#eab308",
          55,  "#f97316",
          100, "#ef4444",
          150, "#a855f7",
        ],
      ],
    },
  })
  map.addLayer({
    id: "hex-pm25-line",
    type: "line",
    source: "hex-pm25",
    layout: { visibility: heatmapVisible ? "visible" : "none" },
    paint: { "line-color": "rgba(0,0,0,0.15)", "line-width": 0.5 },
  })
}

// ── District loader ────────────────────────────────────────────────────────────

async function loadDistricts(map: mapboxgl.Map): Promise<void> {
  try {
    const res = await fetch("https://admin.smartalmaty.kz/api/v1/address/districts/")
    const geojson = await res.json()
    let colorIdx = 0
    const features = (geojson.features ?? [])
      .filter((f: any) => f.geometry && String(f?.properties?.name_ru ?? "").includes("район"))
      .map((f: any) => ({
        ...f,
        properties: {
          ...f.properties,
          _color: DISTRICT_COLORS[colorIdx++ % DISTRICT_COLORS.length],
        },
      }))

    map.addSource("districts", {
      type: "geojson",
      data: { type: "FeatureCollection", features },
    })
    map.addLayer({
      id: "districts-fill",
      type: "fill",
      source: "districts",
      paint: { "fill-color": ["get", "_color"], "fill-opacity": 0.07 },
    })
    map.addLayer({
      id: "districts-line",
      type: "line",
      source: "districts",
      paint: { "line-color": ["get", "_color"], "line-width": 1.5, "line-opacity": 0.8 },
    })

    // District name tooltip
    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
    map.on("mousemove", "districts-fill", (e) => {
      const name = e.features?.[0]?.properties?.name_ru as string | undefined
      if (!name) return
      popup.setLngLat(e.lngLat).setHTML(
        `<span style="font-family:system-ui;font-size:12px;font-weight:600;color:#111">${name}</span>`
      ).addTo(map)
    })
    map.on("mouseleave", "districts-fill", () => popup.remove())
  } catch {}
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function SensorMapYandex({
  sensors,
  ecoIqSensors = [],
  onSensorSelect,
  onEcoIqSelect,
  focusedSensor,
  metricMode = "pm25",
  sourceFilter = "all",
}: SensorMapProps) {
  const containerRef     = useRef<HTMLDivElement>(null)
  const mapRef           = useRef<mapboxgl.Map | null>(null)
  const markersRef       = useRef<mapboxgl.Marker[]>([])
  const ecoIqMarkersRef  = useRef<mapboxgl.Marker[]>([])
  const fittedRef        = useRef(false)
  const onSelectRef      = useRef(onSensorSelect)
  const onEcoSelectRef   = useRef(onEcoIqSelect)

  const { resolvedTheme } = useTheme()
  const darkMode = resolvedTheme === "dark"

  const [mapReady, setMapReady]             = useState(false)
  const [trafficVisible, setTrafficVisible] = useState(false)
  const [windVisible, setWindVisible]       = useState(false)
  const [heatmapVisible, setHeatmapVisible] = useState(false)
  const [mapBounds, setMapBounds]           = useState<{
    north: number; south: number; east: number; west: number
  } | null>(null)

  // Refs so style-rebuild callback always reads the latest values
  const trafficVisRef      = useRef(false)
  const heatmapVisRef      = useRef(false)
  const hexDataRef         = useRef<object | null>(null)
  // Track which style the map was last told to use — prevents redundant setStyle calls
  const appliedStyleRef    = useRef<string>("")
  useEffect(() => { trafficVisRef.current = trafficVisible }, [trafficVisible])
  useEffect(() => { heatmapVisRef.current = heatmapVisible }, [heatmapVisible])

  useEffect(() => { onSelectRef.current   = onSensorSelect },  [onSensorSelect])
  useEffect(() => { onEcoSelectRef.current = onEcoIqSelect }, [onEcoIqSelect])

  // Wind points come directly from IQAir stations — 235 real ground sensors
  // give far better spatial coverage than any forecast grid
  const windPoints = useMemo<WindPoint[]>(() =>
    ecoIqSensors
      .filter(s => s.wind_speed != null && s.wind_direction != null && s.wind_speed > 0)
      .map(s => ({
        lat:       s.latitude,
        lng:       s.longitude,
        speed:     s.wind_speed!,
        direction: s.wind_direction!,
      })),
    [ecoIqSensors],
  )

  const valid = useMemo(
    () => sensors.filter(s => s.latitude != null && s.longitude != null),
    [sensors],
  )

  // ── Init map ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    mapboxgl.accessToken = MAPBOX_TOKEN
    // Always start with the light style — next-themes resolvedTheme is undefined until
    // client hydration, so darkMode is always false at mount. The darkMode effect will
    // switch to dark-v11 immediately after theme resolves if the user prefers dark.
    const initialStyle = "mapbox://styles/mapbox/streets-v12"
    appliedStyleRef.current = initialStyle
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: initialStyle,
      center: DEFAULT_CENTER,
      zoom: 11,
    })

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "bottom-right")

    const updateBounds = () => {
      const b = map.getBounds()
      if (!b) return
      setMapBounds({ north: b.getNorth(), south: b.getSouth(), east: b.getEast(), west: b.getWest() })
    }
    map.on("moveend", updateBounds)
    map.on("zoomend", updateBounds)

    map.on("load", () => {
      updateBounds()
      addCustomLayers(map, false, false, null)
      loadDistricts(map)
      setMapReady(true)
    })

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
      fittedRef.current = false
      markersRef.current = []
      ecoIqMarkersRef.current = []
    }
  }, [])

  // ── Keep canvas in sync with container size ────────────────────────────
  // Mapbox caches the canvas size at init/last-resize. Switching tabs toggles this
  // container between `hidden` (0×0) and `flex` without firing a window resize event,
  // so without this the map renders at a stale, tiny size after returning to the tab.
  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(() => mapRef.current?.resize())
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // ── Fly to focused sensor ─────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current || !focusedSensor?.latitude || !focusedSensor?.longitude) return
    mapRef.current.flyTo({
      center: [focusedSensor.longitude, focusedSensor.latitude],
      zoom: 16,
      duration: 1200,
    })
  }, [focusedSensor, mapReady])

  // ── Sensor markers ────────────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return

    for (const m of markersRef.current) m.remove()
    markersRef.current = []

    const bounds = new mapboxgl.LngLatBounds()
    let hasPoints = false

    for (const sensor of valid) {
      const el = makeSensorEl(sensor, metricMode, () => onSelectRef.current?.(sensor))
      const pm25  = sensor.value
      const color = pm25Color(pm25)
      const time  = sensor.measured_at ? new Date(sensor.measured_at).toLocaleString("ru-RU") : "—"
      const aqiResult = pm25 != null ? pm25ToEpaAqi(pm25) : null

      const popup = new mapboxgl.Popup({ offset: 16 }).setHTML(`
        <div style="min-width:200px;font-family:system-ui">
          <p style="font-size:13px;font-weight:700;margin:0 0 8px;color:#111">${sensor.sensor_name ?? "Сенсор"}</p>
          ${sensor.source ? `<p style="font-size:11px;color:#6b7280;margin:0 0 8px">${sensor.source}</p>` : ""}
          ${pm25 != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> · ${pm25Label(pm25)}</p>
              <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:${color}">${pm25.toFixed(1)} <span style="font-size:11px;font-weight:500">µg/m³</span></p>
              ${aqiResult ? `<p style="margin:4px 0 0;font-size:11px;color:#6b7280">US EPA AQI ≈ <strong style="color:${color}">${aqiResult.aqi}</strong></p>` : ""}
            </div>
          ` : `<p style="color:#9ca3af;font-size:12px;margin:0 0 8px">Нет данных PM₂.₅</p>`}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${time}</p>
        </div>`)

      const marker = new mapboxgl.Marker({ element: el, anchor: "center" })
        .setLngLat([sensor.longitude!, sensor.latitude!])
        .setPopup(popup)
        .addTo(mapRef.current!)

      markersRef.current.push(marker)
      bounds.extend([sensor.longitude!, sensor.latitude!])
      hasPoints = true
    }

    if (hasPoints && !fittedRef.current) {
      mapRef.current.fitBounds(bounds, { padding: 60, maxZoom: 13 })
      fittedRef.current = true
    }
  }, [valid, metricMode, mapReady])

  // ── EcoIQ markers ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return

    for (const m of ecoIqMarkersRef.current) m.remove()
    ecoIqMarkersRef.current = []

    if (sourceFilter !== "all" && sourceFilter !== "EcoIQ") return

    for (const s of ecoIqSensors) {
      if (!s.latitude || !s.longitude) continue
      const el = makeEcoIqEl(s, () => onEcoSelectRef.current?.(s))
      const displayAqi = s.pm25_aqi ?? s.aqi
      const color      = aqiColor(displayAqi)
      const time       = s.measured_at ? new Date(s.measured_at).toLocaleString("ru-RU") : "—"

      const popup = new mapboxgl.Popup({ offset: [0, -38] }).setHTML(`
        <div style="min-width:200px;font-family:system-ui">
          <div style="display:flex;align-items:center;gap:6px;margin:0 0 6px">
            <svg width="12" height="12" viewBox="0 0 32 32"><polygon points="16,2 30,28 2,28" fill="${color}"/></svg>
            <p style="font-size:13px;font-weight:700;margin:0;color:#111">${s.name ?? "EcoIQ станция"}</p>
          </div>
          <p style="font-size:10px;color:#6b7280;margin:0 0 8px">EcoIQ · ${s.is_high_precision ? "высокоточная" : "стандартная"} станция</p>
          ${displayAqi != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> AQI</p>
              <p style="margin:4px 0 0;font-size:22px;font-weight:800;color:${color}">${displayAqi}</p>
              ${s.pm25_concentration != null ? `<p style="margin:4px 0 0;font-size:11px;color:#6b7280">PM<sub>2.5</sub>: <strong style="color:${color}">${s.pm25_concentration} µg/m³</strong></p>` : ""}
            </div>
          ` : ""}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${time}</p>
        </div>`)

      const marker = new mapboxgl.Marker({ element: el, anchor: "bottom" })
        .setLngLat([s.longitude, s.latitude])
        .setPopup(popup)
        .addTo(mapRef.current!)

      ecoIqMarkersRef.current.push(marker)
    }
  }, [ecoIqSensors, sourceFilter, mapReady])

  // ── Traffic layer toggle ───────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return
    try {
      mapRef.current.setLayoutProperty(
        "traffic-layer",
        "visibility",
        trafficVisible ? "visible" : "none",
      )
    } catch {}
  }, [trafficVisible, mapReady])

  // ── Hide/show all markers when heatmap is toggled ─────────────────────
  useEffect(() => {
    const display = heatmapVisible ? "none" : ""
    markersRef.current.forEach(m => { m.getElement().style.display = display })
    ecoIqMarkersRef.current.forEach(m => { m.getElement().style.display = display })
  }, [heatmapVisible])

  // ── Hexagon PM2.5 — fetch from backend + toggle visibility ───────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return
    const map = mapRef.current
    const vis = heatmapVisible ? "visible" : "none"
    try {
      map.setLayoutProperty("hex-pm25-fill", "visibility", vis)
      map.setLayoutProperty("hex-pm25-line", "visibility", vis)
    } catch {}

    if (!heatmapVisible) return

    const BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"
    fetch(`${BASE}/air/hex-pm25/`, { headers: { Accept: "application/json" } })
      .then(r => r.json())
      .then(geojson => {
        hexDataRef.current = geojson
        try {
          const src = map.getSource("hex-pm25") as mapboxgl.GeoJSONSource | undefined
          src?.setData(geojson)
        } catch {}
      })
      .catch(() => {})
  }, [heatmapVisible, mapReady])

  // ── Dark / light map theme ────────────────────────────────────────────
  useEffect(() => {
    const map = mapRef.current
    if (!map || !mapReady) return
    const style = darkMode
      ? "mapbox://styles/mapbox/dark-v11"
      : "mapbox://styles/mapbox/streets-v12"
    // Skip if the map already has this style loaded — avoids wiping layers on mount
    if (appliedStyleRef.current === style) return
    appliedStyleRef.current = style
    map.setStyle(style)
    map.once("style.load", () => {
      // setStyle wipes all custom sources/layers — rebuild them
      addCustomLayers(map, trafficVisRef.current, heatmapVisRef.current, hexDataRef.current)
      loadDistricts(map)
    })
  }, [darkMode, mapReady])

  // Summary label for wind button — average over grid
  const windSummary = useMemo(() => {
    if (!windPoints.length) return null
    const avgSpeed = windPoints.reduce((s, p) => s + p.speed, 0) / windPoints.length
    const avgDir   = windPoints.reduce((s, p) => s + p.direction, 0) / windPoints.length
    const label    = ["С","СВ","В","ЮВ","Ю","ЮЗ","З","СЗ"][Math.round(avgDir / 45) % 8]
    return { speed: avgSpeed, label }
  }, [windPoints])

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="h-full w-full rounded-xl" />

      <WindLayer points={windPoints} bounds={mapBounds} visible={windVisible} />

      {!valid.length && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground">
          Нет данных сенсоров
        </div>
      )}

      {/* Map controls — top right */}
      <div className="absolute right-3 top-3 z-[1000] flex flex-col gap-2">
        <button
          onClick={() => setTrafficVisible(v => !v)}
          title={trafficVisible ? "Скрыть пробки" : "Показать пробки"}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${
            trafficVisible
              ? "border-orange-400 bg-orange-500 text-white"
              : "border-border bg-background/90 text-foreground hover:bg-muted"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 6h8l2 6H6L8 6z"/>
            <circle cx="9" cy="17" r="2"/>
            <circle cx="15" cy="17" r="2"/>
            <path d="M3 12h18"/>
          </svg>
          Пробки
        </button>

        <button
          onClick={() => setWindVisible(v => !v)}
          title={windVisible ? "Скрыть ветер" : "Показать ветер"}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${
            windVisible
              ? "border-sky-400 bg-sky-500 text-white"
              : "border-border bg-background/90 text-foreground hover:bg-muted"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
          </svg>
          Ветер
          {windSummary && (
            <span className="opacity-75">
              {windSummary.speed.toFixed(1)}м/с {windSummary.label}
            </span>
          )}
        </button>

        <button
          onClick={() => setHeatmapVisible(v => !v)}
          title={heatmapVisible ? "Скрыть загрязнение" : "Показать загрязнение PM₂.₅"}
          className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${
            heatmapVisible
              ? "border-rose-400 bg-rose-500 text-white"
              : "border-border bg-background/90 text-foreground hover:bg-muted"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          PM₂.₅
        </button>
      </div>
    </div>
  )
}
