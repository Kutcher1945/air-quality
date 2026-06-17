"use client"

import { useEffect, useRef, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { pm25Color, pm25Label, pm25ToEpaAqi } from "@/lib/pm25"
import type { AirMetricMode } from "@/lib/pm25"

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

// Keep old Sensor as alias so page.tsx doesn't need a full rename yet
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

// ── AQI helpers ────────────────────────────────────────────────────────────────

const DEFAULT_CENTER: [number, number] = [43.238949, 76.889709]
const YANDEX_TILE_URL =
  "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU"

// Traffic tiles proxied through our backend so Yandex domains don't need to
// resolve directly in the browser (blocked in some regions).
const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.smartalmaty.kz/api/v1"
const YANDEX_TRAFFIC_URL = `${API_BASE}/air/tiles/traffic/{z}/{x}/{y}/`


// ── Individual sensor marker ───────────────────────────────────────────────────

function createSensorIcon(pm25: number | null, metricMode: AirMetricMode = "pm25"): L.DivIcon {
  const color = pm25Color(pm25)
  let display: string
  if (metricMode === "epa-aqi" && pm25 != null) {
    const aqi = pm25ToEpaAqi(pm25)
    display = aqi ? aqi.aqi.toString() : "?"
  } else {
    display = pm25 != null ? Math.round(pm25).toString() : "?"
  }
  const w = display.length <= 2 ? 34 : display.length === 3 ? 40 : 46

  return L.divIcon({
    className: "",
    html: `<div style="
      background:${color};
      color:#fff;
      font-family:system-ui,-apple-system,sans-serif;
      font-weight:800;
      font-size:12px;
      line-height:1;
      width:${w}px;
      height:24px;
      border-radius:7px;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 2px 6px rgba(0,0,0,0.35);
      border:2px solid rgba(255,255,255,0.45);
    ">${display}</div>`,
    iconSize:    [w, 24],
    iconAnchor:  [w / 2, 12],
    popupAnchor: [0, -16],
  })
}

// ── EcoIQ triangle marker ──────────────────────────────────────────────────────

function aqiColor(aqi: number | null): string {
  if (aqi == null) return "#6b7280"
  if (aqi <= 50)  return "#1BA97C"
  if (aqi <= 100) return "#f59e0b"
  if (aqi <= 150) return "#f97316"
  if (aqi <= 200) return "#ef4444"
  if (aqi <= 300) return "#a855f7"
  return "#581c87"
}

function createEcoIqIcon(aqi: number | null): L.DivIcon {
  const color = aqiColor(aqi)
  const label = aqi != null ? aqi.toString() : "?"
  const fontSize = label.length >= 3 ? 8 : 9

  return L.divIcon({
    className: "",
    html: `<svg width="38" height="38" viewBox="0 0 38 38" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4))">
      <polygon points="19,2 36,34 2,34" fill="${color}" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>
      <text
        x="19" y="26"
        text-anchor="middle"
        font-family="system-ui,-apple-system,sans-serif"
        font-weight="800"
        font-size="${fontSize}"
        fill="white"
      >${label}</text>
    </svg>`,
    iconSize:    [38, 38],
    iconAnchor:  [19, 38],
    popupAnchor: [0, -38],
  })
}

// ── District boundary helpers ──────────────────────────────────────────────────

const DISTRICT_PALETTE = [
  "#6366f1", "#8b5cf6", "#ec4899", "#f59e0b",
  "#10b981", "#06b6d4", "#3b82f6", "#f97316", "#84cc16",
]

function loadDistrictLayer(map: L.Map): void {
  fetch("https://admin.smartalmaty.kz/api/v1/address/districts/")
    .then((r) => r.json())
    .then((geojson) => {
      let colorIdx = 0
      L.geoJSON(geojson, {
        filter: (f) => f.geometry != null && String(f?.properties?.name_ru ?? "").includes("район"),
        style() {
          const color = DISTRICT_PALETTE[colorIdx++ % DISTRICT_PALETTE.length]
          return { color, weight: 1.5, fillColor: color, fillOpacity: 0.07 }
        },
        onEachFeature(feature, layer) {
          const name: string = feature?.properties?.name_ru ?? ""
          if (name) {
            layer.bindTooltip(name, { sticky: true, className: "district-label" })
          }
        },
      }).addTo(map)
    })
    .catch(() => {})
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function SensorMapYandex({ sensors, ecoIqSensors = [], onSensorSelect, onEcoIqSelect, focusedSensor, metricMode = "pm25", sourceFilter = "all" }: SensorMapProps) {
  const mapRef            = useRef<HTMLDivElement>(null)
  const mapInstanceRef    = useRef<L.Map | null>(null)
  const markerLayerRef    = useRef<L.LayerGroup | null>(null)
  const ecoIqLayerRef     = useRef<L.LayerGroup | null>(null)
  const trafficLayerRef   = useRef<L.TileLayer | null>(null)
  const hasAutoFitted     = useRef(false)
  const [trafficVisible, setTrafficVisible] = useState(false)

  const valid = sensors.filter(
    (s) => s.latitude != null && s.longitude != null,
  )

  // Init map once
  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) return

    const map = L.map(mapRef.current, {
      crs: L.CRS.EPSG3395,
      center: DEFAULT_CENTER,
      zoom: 11,
      preferCanvas: true,
      zoomAnimation: true,
    })

    L.tileLayer(YANDEX_TILE_URL, {
      attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
      maxZoom: 18,
      minZoom: 0,
    }).addTo(map)

    mapInstanceRef.current = map
    loadDistrictLayer(map)

    return () => {
      mapInstanceRef.current?.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // Fly to focused sensor
  useEffect(() => {
    if (!mapInstanceRef.current || !focusedSensor?.latitude || !focusedSensor?.longitude) return
    mapInstanceRef.current.flyTo(
      [focusedSensor.latitude, focusedSensor.longitude],
      18,
      { animate: true, duration: 1.2 },
    )
  }, [focusedSensor])

  // Update markers when sensors or metric mode changes
  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === "undefined") return
    const map = mapInstanceRef.current

    if (markerLayerRef.current) {
      map.removeLayer(markerLayerRef.current)
      markerLayerRef.current = null
    }

    if (!valid.length) return

    const layer = L.layerGroup()

    for (const sensor of valid) {
      const pm25 = sensor.value
      const icon = createSensorIcon(pm25, metricMode)
      const color = pm25Color(pm25)
      const time = sensor.measured_at
        ? new Date(sensor.measured_at).toLocaleString("ru-RU")
        : "—"
      const aqiResult = pm25 != null ? pm25ToEpaAqi(pm25) : null

      const popup = `
        <div style="min-width:200px;font-family:system-ui">
          <p style="font-size:13px;font-weight:700;margin:0 0 8px;color:#111">${sensor.sensor_name ?? "Сенсор"}</p>
          ${sensor.source ? `<p style="font-size:11px;color:#6b7280;margin:0 0 8px">${sensor.source}</p>` : ""}
          ${pm25 != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">PM<sub>2.5</sub> · ${pm25Label(pm25)}</p>
              <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:${color}">${pm25.toFixed(1)} <span style="font-size:11px;font-weight:500">µg/m³</span></p>
              ${aqiResult ? `<p style="margin:4px 0 0;font-size:11px;color:#6b7280">US EPA AQI ≈ <strong style="color:${color}">${aqiResult.aqi}</strong> <span style="opacity:0.7">(текущее PM2.5)</span></p>` : ""}
            </div>
          ` : `<p style="color:#9ca3af;font-size:12px;margin:0 0 8px">Нет данных PM₂.₅</p>`}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${time}</p>
        </div>`

      const marker = L.marker([sensor.latitude!, sensor.longitude!], { icon } as any)
        .bindPopup(popup)

      if (onSensorSelect) {
        marker.on("click", () => onSensorSelect(sensor))
      }

      layer.addLayer(marker)
    }

    layer.addTo(map)
    markerLayerRef.current = layer

    if (!hasAutoFitted.current && valid.length > 0) {
      map.fitBounds(L.latLngBounds(valid.map((s) => [s.latitude!, s.longitude!])), { padding: [50, 50] })
      hasAutoFitted.current = true
    }
  }, [valid, metricMode])

  // EcoIQ triangle markers layer
  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === "undefined") return
    const map = mapInstanceRef.current

    if (ecoIqLayerRef.current) {
      map.removeLayer(ecoIqLayerRef.current)
      ecoIqLayerRef.current = null
    }

    if (sourceFilter !== "all" && sourceFilter !== "EcoIQ") return

    const validEco = ecoIqSensors.filter((s) => s.latitude != null && s.longitude != null)
    if (!validEco.length) return

    const layer = L.layerGroup()

    for (const s of validEco) {
      const icon  = createEcoIqIcon(s.aqi)
      const color = aqiColor(s.aqi)
      const time  = s.measured_at ? new Date(s.measured_at).toLocaleString("ru-RU") : "—"

      const popup = `
        <div style="min-width:200px;font-family:system-ui">
          <div style="display:flex;align-items:center;gap:6px;margin:0 0 6px">
            <svg width="12" height="12" viewBox="0 0 32 32"><polygon points="16,2 30,28 2,28" fill="${color}"/></svg>
            <p style="font-size:13px;font-weight:700;margin:0;color:#111">${s.name ?? "EcoIQ станция"}</p>
          </div>
          <p style="font-size:10px;color:#6b7280;margin:0 0 8px">EcoIQ · ${s.is_high_precision ? "высокоточная" : "стандартная"} станция</p>
          ${s.aqi != null ? `
            <div style="margin:0 0 8px;padding:8px 10px;background:${color}18;border-left:3px solid ${color};border-radius:4px">
              <p style="margin:0;font-size:10px;color:#6b7280">AQI</p>
              <p style="margin:4px 0 0;font-size:22px;font-weight:800;color:${color}">${s.aqi}</p>
              ${s.pm25_concentration != null ? `<p style="margin:4px 0 0;font-size:11px;color:#6b7280">PM<sub>2.5</sub>: <strong style="color:${color}">${s.pm25_concentration} µg/m³</strong></p>` : ""}
            </div>
          ` : ""}
          <p style="margin:0;font-size:10px;color:#9ca3af">Обновлено: ${time}</p>
        </div>`

      const marker = L.marker([s.latitude, s.longitude], { icon } as any).bindPopup(popup)
      if (onEcoIqSelect) {
        marker.on("click", () => onEcoIqSelect(s))
      }
      marker.addTo(layer)
    }

    layer.addTo(map)
    ecoIqLayerRef.current = layer
  }, [ecoIqSensors, onEcoIqSelect, sourceFilter])

  // Traffic layer toggle
  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === "undefined") return
    const map = mapInstanceRef.current
    if (trafficVisible) {
      if (!trafficLayerRef.current) {
        trafficLayerRef.current = L.tileLayer(YANDEX_TRAFFIC_URL, {
          opacity:     0.7,
          maxZoom:     18,
          attribution: "",
        })
      }
      trafficLayerRef.current.addTo(map)
    } else {
      if (trafficLayerRef.current) {
        map.removeLayer(trafficLayerRef.current)
      }
    }
  }, [trafficVisible])

  if (!valid.length) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground">
        Нет данных сенсоров
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="h-full w-full rounded-xl" />

      {/* Traffic toggle button */}
      <button
        onClick={() => setTrafficVisible((v) => !v)}
        title={trafficVisible ? "Скрыть пробки" : "Показать пробки"}
        className={`absolute right-3 top-3 z-[1000] flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-md backdrop-blur transition-colors ${
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
    </div>
  )
}
