"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.markercluster/dist/leaflet.markercluster"
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"

export interface SensorMetric {
  pm25?: number | null
  no2?: number | null
  datetime?: string | null
  interval?: string | null
}

export interface Sensor {
  id: number | string
  sensor_id: string
  name?: string | null
  district?: string | null
  latitude?: number | null
  longitude?: number | null
  is_active?: boolean
  latest_measurement?: SensorMetric | null
}

interface SensorMapProps {
  sensors: Sensor[]
}

const DEFAULT_CENTER: [number, number] = [43.238949, 76.889709] // Almaty
const YANDEX_TILE_URL = "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU"

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

// Color mapping for different suppliers (Поставщик) - all grey
const getSupplierColor = (district?: string | null) => {
  return "#6b7280" // Grey for all markers
}

// Get PM2.5 quality indicator (for border color or accent)
const getPM25Quality = (pm25?: number | null): string => {
  if (pm25 === null || pm25 === undefined) return "gray"
  if (pm25 <= 15) return "good"
  if (pm25 <= 35) return "moderate"
  if (pm25 <= 55) return "sensitive"
  if (pm25 <= 150) return "unhealthy"
  if (pm25 <= 250) return "very-unhealthy"
  return "hazardous"
}

// Get supplier abbreviation from first letters of each word
const getSupplierAbbreviation = (district?: string | null): string => {
  if (!district) return "?"

  // Special cases for known suppliers
  const specialCases: Record<string, string> = {
    "AirGradient": "AG",
    "AirKaz": "AK",
    "Citizen Science project sensor.community": "CS",
    "Clarity Node": "CN",
    "IQAir": "IQ",
    "OpenAQ": "OA",
    "PurpleAir": "PA",
    "Reference Site": "RS",
  }

  // Check for exact match in special cases
  if (specialCases[district]) return specialCases[district]

  // Check for partial match
  for (const [key, value] of Object.entries(specialCases)) {
    if (district.includes(key) || key.includes(district)) {
      return value
    }
  }

  // Generate abbreviation from first letters of each word
  const words = district.split(/[\s-]+/).filter(w => w.length > 0)

  if (words.length === 0) return "?"

  if (words.length === 1) {
    // Single word: take first 2-3 letters
    return words[0].substring(0, 2).toUpperCase()
  }

  // Multiple words: take first letter of each word (max 3 letters)
  return words
    .slice(0, 3)
    .map(w => w[0])
    .join("")
    .toUpperCase()
}

// Create teardrop marker icon colored by supplier
const createSensorIcon = (sensor: Sensor) => {
  const metric = sensor.latest_measurement
  const color = getSupplierColor(sensor.district)
  const abbreviation = getSupplierAbbreviation(sensor.district)
  const quality = getPM25Quality(metric?.pm25)

  // Border color based on air quality
  const borderColors: Record<string, string> = {
    good: "#1BA97C",
    moderate: "#f59e0b",
    sensitive: "#f97316",
    unhealthy: "#ef4444",
    "very-unhealthy": "#a855f7",
    hazardous: "#581c87",
    gray: "#ffffff",
  }
  const borderColor = borderColors[quality] || "#ffffff"

  // Adjust font size based on abbreviation length
  const fontSize = abbreviation.length <= 2 ? "12px" : "10px"

  return L.divIcon({
    className: "custom-sensor-marker-icon",
    html: `
      <div style="
        background-color: ${color};
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid ${borderColor};
        box-shadow: 0 3px 10px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: ${fontSize};
          font-weight: bold;
          line-height: 1;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          letter-spacing: -0.5px;
        ">${abbreviation}</div>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  })
}

export default function SensorMapYandex({ sensors }: SensorMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const clusterGroupRef = useRef<any>(null)
  const hasAutoFitted = useRef(false)

  // Filter sensors with valid coordinates
  const validSensors = sensors.filter(
    (sensor) => sensor.latitude !== null && sensor.latitude !== undefined &&
                sensor.longitude !== null && sensor.longitude !== undefined
  )

  // Initialize map only once
  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) return

    // Create Leaflet map with EPSG:3395 CRS for Yandex tiles
    const map = L.map(mapRef.current, {
      crs: L.CRS.EPSG3395,
      center: DEFAULT_CENTER,
      zoom: 11,
      preferCanvas: true,
      zoomAnimation: true,
    })

    // Add Yandex tiles layer
    L.tileLayer(YANDEX_TILE_URL, {
      attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
      maxZoom: 18,
      minZoom: 0,
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  // Update markers when sensors change
  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === "undefined") return

    const map = mapInstanceRef.current

    // Clear existing cluster group
    if (clusterGroupRef.current) {
      map.removeLayer(clusterGroupRef.current)
      clusterGroupRef.current = null
    }

    if (validSensors.length === 0) return

    // Create marker cluster group with custom styling
    // @ts-ignore markercluster is attached to L by side-effect import
    const clusterGroup = L.markerClusterGroup({
      disableClusteringAtZoom: 16,
      chunkedLoading: true,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      maxClusterRadius: 60,
      removeOutsideVisibleBounds: true,
      animate: true,
      animateAddingMarkers: false,
      iconCreateFunction: function (cluster: any) {
        const markers = cluster.getAllChildMarkers()
        const count = markers.length

        // Count sensors by supplier and calculate avg PM2.5
        const supplierCounts: Record<string, number> = {}
        let totalPM25 = 0
        let validPM25Count = 0

        markers.forEach((marker: any) => {
          const sensor = marker.options.sensorData
          const supplier = sensor?.district || "Unknown"
          supplierCounts[supplier] = (supplierCounts[supplier] || 0) + 1

          if (sensor?.latest_measurement?.pm25 != null) {
            totalPM25 += sensor.latest_measurement.pm25
            validPM25Count++
          }
        })

        // Find dominant supplier
        let dominantSupplier = "Unknown"
        let maxCount = 0
        for (const [supplier, count] of Object.entries(supplierCounts)) {
          if (count > maxCount) {
            dominantSupplier = supplier
            maxCount = count
          }
        }

        const color = getSupplierColor(dominantSupplier)
        const avgPM25 = validPM25Count > 0 ? totalPM25 / validPM25Count : undefined
        const quality = getPM25Quality(avgPM25)

        // Border color based on air quality
        const borderColors: Record<string, string> = {
          good: "#1BA97C",
          moderate: "#f59e0b",
          sensitive: "#f97316",
          unhealthy: "#ef4444",
          "very-unhealthy": "#a855f7",
          hazardous: "#581c87",
          gray: "#ffffff",
        }
        const borderColor = borderColors[quality] || "#ffffff"

        // Size based on count
        let size = "small"
        if (count >= 50) size = "large"
        else if (count >= 20) size = "medium"

        const sizeMap = {
          small: "44px",
          medium: "54px",
          large: "64px",
        }

        return L.divIcon({
          html: `
            <div style="
              background: ${color};
              width: ${sizeMap[size]};
              height: ${sizeMap[size]};
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 4px solid ${borderColor};
              box-shadow: 0 4px 12px rgba(0,0,0,0.3);
              font-weight: bold;
              color: white;
              font-size: ${size === "large" ? "20px" : size === "medium" ? "17px" : "15px"};
            ">
              ${count}
            </div>
          `,
          className: "custom-cluster-icon",
          iconSize: L.point(parseInt(sizeMap[size]), parseInt(sizeMap[size])),
        })
      },
    })

    // Add markers to cluster group
    validSensors.forEach((sensor) => {
      const icon = createSensorIcon(sensor)
      const metric = sensor.latest_measurement
      const supplierColor = getSupplierColor(sensor.district)
      const quality = getPM25Quality(metric?.pm25)

      // PM2.5 quality colors
      const qualityColors: Record<string, string> = {
        good: "#1BA97C",
        moderate: "#f59e0b",
        sensitive: "#f97316",
        unhealthy: "#ef4444",
        "very-unhealthy": "#a855f7",
        hazardous: "#581c87",
        gray: "#6b7280",
      }
      const pm25Color = qualityColors[quality] || "#6b7280"

      const marker = L.marker([sensor.latitude!, sensor.longitude!], {
        icon,
        sensorData: sensor,
      } as any).bindPopup(`
        <div style="min-width: 220px; font-family: system-ui;">
          <h3 style="font-size: 14px; font-weight: bold; margin: 0 0 8px 0; color: #111827;">
            ${sensor.name || "Станция"}
          </h3>
          ${sensor.district ? `
            <div style="margin: 0 0 10px 0; padding: 6px 10px; background: ${supplierColor}15; border-left: 3px solid ${supplierColor}; border-radius: 4px;">
              <p style="margin: 0; font-size: 11px; color: #6b7280; font-weight: 500;">Поставщик</p>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: ${supplierColor}; font-weight: bold;">${sensor.district}</p>
            </div>
          ` : ""}
          ${metric && metric.pm25 != null ? `
            <div style="margin: 0 0 8px 0; padding: 6px 10px; background: ${pm25Color}10; border-left: 3px solid ${pm25Color}; border-radius: 4px;">
              <p style="margin: 0; font-size: 11px; color: #6b7280; font-weight: 500;">PM2.5</p>
              <p style="margin: 2px 0 0 0; font-size: 16px; color: ${pm25Color}; font-weight: bold;">${metric.pm25.toFixed(1)}</p>
            </div>
          ` : `
            <p style="margin: 0 0 6px 0; color: #9ca3af; font-size: 12px;">Нет данных PM2.5</p>
          `}
          ${metric && metric.no2 != null ? `
            <p style="margin: 0 0 6px 0; font-size: 13px; color: #374151;">
              <strong>NO2:</strong> <span style="font-weight: 600;">${metric.no2.toFixed(1)}</span>
            </p>
          ` : ""}
          ${metric && metric.datetime ? `
            <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 11px; padding-top: 6px; border-top: 1px solid #e5e7eb;">
              Обновлено: ${new Date(metric.datetime).toLocaleString("ru-RU")}
            </p>
          ` : ""}
        </div>
      `)

      clusterGroup.addLayer(marker)
    })

    // Add hover tooltips to clusters
    clusterGroup.on("clustermouseover", function (event: any) {
      const cluster = event.layer
      const markers = cluster.getAllChildMarkers()

      let totalPM25 = 0
      let validCount = 0
      markers.forEach((marker: any) => {
        const sensor = marker.options.sensorData
        if (sensor?.latest_measurement?.pm25 != null) {
          totalPM25 += sensor.latest_measurement.pm25
          validCount++
        }
      })

      const avgPM25 = validCount > 0 ? (totalPM25 / validCount).toFixed(1) : "—"

      const tooltipContent = `
        <div style="padding: 8px; background: white; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
          <p style="margin: 0; font-size: 12px; font-weight: bold;">Кластер: ${markers.length} сенсоров</p>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #6b7280;">Средний PM2.5: ${avgPM25}</p>
        </div>
      `

      cluster.bindTooltip(tooltipContent, {
        permanent: false,
        direction: "top",
        className: "cluster-tooltip",
        offset: [0, -10],
      }).openTooltip()
    })

    clusterGroup.on("clustermouseout", function (event: any) {
      event.layer.closeTooltip()
    })

    clusterGroup.addTo(map)
    clusterGroupRef.current = clusterGroup

    // Auto-fit bounds only on first load
    if (validSensors.length > 0 && !hasAutoFitted.current) {
      const bounds = L.latLngBounds(validSensors.map((s) => [s.latitude!, s.longitude!]))
      map.fitBounds(bounds, { padding: [50, 50] })
      hasAutoFitted.current = true
    }
  }, [validSensors])

  if (validSensors.length === 0) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground">
        Нет данных по сенсорам для отображения
      </div>
    )
  }

  return <div ref={mapRef} className="h-full w-full rounded-xl" />
}
