"use client"

import { useEffect, useRef } from "react"
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
}

// Keep old Sensor as alias so page.tsx doesn't need a full rename yet
export type Sensor = AirSensor

interface SensorMapProps {
  sensors: AirSensor[]
  onSensorSelect?: (sensor: AirSensor) => void
  focusedSensor?: AirSensor | null
  metricMode?: AirMetricMode
}

// ── AQI helpers ────────────────────────────────────────────────────────────────

const DEFAULT_CENTER: [number, number] = [43.238949, 76.889709]
const YANDEX_TILE_URL =
  "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU"


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

export default function SensorMapYandex({ sensors, onSensorSelect, focusedSensor, metricMode = "pm25" }: SensorMapProps) {
  const mapRef          = useRef<HTMLDivElement>(null)
  const mapInstanceRef  = useRef<L.Map | null>(null)
  const markerLayerRef  = useRef<L.LayerGroup | null>(null)
  const hasAutoFitted   = useRef(false)

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

  if (!valid.length) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground">
        Нет данных сенсоров
      </div>
    )
  }

  return <div ref={mapRef} className="h-full w-full rounded-xl" />
}
