"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.markercluster/dist/leaflet.markercluster"
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.heat"

interface Building {
  id: string
  address: string
  district: string
  latitude: number
  longitude: number
  has_gas: boolean
  building_type: string
  building_category: "general" | "izhs" | "susn"
  geometry?: {
    type: string
    coordinates: any
  } | null
  floors?: number
  apartments?: number
  year_built?: number
}

interface BuildingsMapProps {
  buildings: Building[]
  showHeatmap?: boolean
  onBuildingClick?: (building: Building) => void
}

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

// Function to create colored marker icons based on building category
const createMarkerIcon = (category: "general" | "izhs" | "susn") => {
  // Different colors for each building type
  const colors = {
    general: "#f97316", // Orange - General buildings without gas
    izhs: "#3b82f6",    // Blue - Individual housing construction (ИЖС)
    susn: "#ef4444",    // Red - Multi-family buildings (СУСН)
  }

  const emoji = {
    general: "🏠", // House
    izhs: "🏡",    // House with garden
    susn: "🏢",    // Office building
  }

  const color = colors[category]
  const icon = emoji[category]

  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          transform: rotate(45deg);
          color: white;
          font-size: 18px;
          font-weight: bold;
        ">${icon}</div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

export default function BuildingsMap({ buildings, showHeatmap = false, onBuildingClick }: BuildingsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const heatLayerRef = useRef<any>(null)
  const clusterGroupRef = useRef<any>(null)
  const onBuildingClickRef = useRef(onBuildingClick)

  // Keep the ref updated with the latest callback
  useEffect(() => {
    onBuildingClickRef.current = onBuildingClick
  }, [onBuildingClick])

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Clear previous map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    // Center of Almaty
    const mapCenter: [number, number] = [43.238293, 76.945465]

    // Create canvas renderer for better performance with many markers
    const canvasRenderer = L.canvas({ padding: 0.5 })

    // Create Leaflet map with EPSG:3395 CRS for Yandex tiles
    const map = L.map(mapRef.current, {
      crs: L.CRS.EPSG3395, // Yandex uses Mercator projection (EPSG:3395)
      center: mapCenter,
      zoom: 11,
      preferCanvas: true, // Use canvas for better performance
      renderer: canvasRenderer,
    })

    // Add Yandex tiles layer (no API key needed!)
    L.tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU", {
      attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
      maxZoom: 18,
      minZoom: 0,
    }).addTo(map)

    if (showHeatmap) {
      // Create heatmap layer
      const heatData: [number, number, number][] = buildings.map((building) => [
        building.latitude,
        building.longitude,
        0.8, // intensity
      ])

      // @ts-ignore leaflet.heat is attached to L by side-effect import
      const heatLayer = L.heatLayer(heatData, {
        radius: 25,
        blur: 15,
        minOpacity: 0.5,
        max: 1.0,
        gradient: {
          0.0: "#3b82f6", // Blue (low density)
          0.4: "#10b981", // Green
          0.6: "#fbbf24", // Yellow
          0.8: "#f97316", // Orange
          1.0: "#ef4444", // Red (high density)
        },
      }).addTo(map)

      heatLayerRef.current = heatLayer
    } else {
      // Cluster markers for performance on large datasets
      // @ts-ignore markercluster is attached to L by side-effect import
      const clusterGroup = L.markerClusterGroup({
        disableClusteringAtZoom: 17, // Increased to 17 - keeps clustering longer for better performance
        chunkedLoading: true,
        maxClusterRadius: 60, // Increased radius for better grouping
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: true, // Show cluster coverage area on hover
        spiderfyDistanceMultiplier: 2, // Spread out spiderfied markers more
        removeOutsideVisibleBounds: true, // Remove markers outside viewport for performance
        iconCreateFunction: function (cluster: any) {
          const markers = cluster.getAllChildMarkers()
          const count = markers.length

          // Count buildings by category
          const categories = { general: 0, izhs: 0, susn: 0 }
          markers.forEach((marker: any) => {
            const building = marker.options.buildingData
            if (building) {
              categories[building.building_category]++
            }
          })

          // Determine dominant category
          let dominantCategory: "general" | "izhs" | "susn" = "general"
          let maxCount = categories.general
          if (categories.izhs > maxCount) {
            dominantCategory = "izhs"
            maxCount = categories.izhs
          }
          if (categories.susn > maxCount) {
            dominantCategory = "susn"
          }

          // Color based on dominant category
          const colors = {
            general: "#f97316", // Orange
            izhs: "#3b82f6",    // Blue
            susn: "#ef4444",    // Red
          }
          const color = colors[dominantCategory]

          // Size based on count
          let size = "small"
          if (count >= 100) size = "large"
          else if (count >= 50) size = "medium"

          const sizeMap = {
            small: "40px",
            medium: "50px",
            large: "60px",
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
                border: 4px solid white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.25);
                font-weight: bold;
                color: white;
                font-size: ${size === "large" ? "18px" : size === "medium" ? "16px" : "14px"};
              ">
                ${count}
              </div>
              <div style="
                position: absolute;
                bottom: -20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 2px 6px;
                border-radius: 10px;
                font-size: 9px;
                white-space: nowrap;
                display: none;
              " class="cluster-label">
                ${categories.general > 0 ? `🏠${categories.general}` : ""}
                ${categories.izhs > 0 ? `🏡${categories.izhs}` : ""}
                ${categories.susn > 0 ? `🏢${categories.susn}` : ""}
              </div>
            `,
            className: "custom-cluster-icon",
            iconSize: L.point(parseInt(sizeMap[size]), parseInt(sizeMap[size])),
          })
        },
      })

      buildings.forEach((building) => {
        // Use different colored icon based on building category
        const icon = createMarkerIcon(building.building_category)

        const marker = L.marker([building.latitude, building.longitude], {
          icon,
          buildingData: building // Store building data for cluster calculations
        } as any).bindPopup(
          `
          <div style="padding: 8px; min-width: 200px;">
            <strong style="font-size: 14px;">${building.address}</strong>
            <hr style="margin: 8px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="margin: 4px 0; font-size: 12px;"><strong>Район:</strong> ${building.district}</p>
            <p style="margin: 4px 0; font-size: 12px;"><strong>Тип:</strong> ${building.building_type}</p>
            ${building.floors ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Этажей:</strong> ${building.floors}</p>` : ""}
            ${building.apartments ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Квартир:</strong> ${building.apartments}</p>` : ""}
            ${building.year_built ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Год постройки:</strong> ${building.year_built}</p>` : ""}
            <p style="margin: 8px 0 4px; color: #f97316; font-weight: bold; font-size: 12px;">⚠️ Без газоснабжения</p>
          </div>
        `,
        )

        // Add click event to open side panel
        marker.on("click", () => {
          if (onBuildingClickRef.current) {
            onBuildingClickRef.current(building)
          }
        })

        clusterGroup.addLayer(marker)

        // Draw polygons with canvas renderer for better performance
        if (building.geometry && building.geometry.type === "MultiPolygon") {
          const latLngPolys: L.LatLngExpression[][] = []
          building.geometry.coordinates.forEach((poly: any) => {
            const ring = poly[0]
            const latLngs = ring.map((coord: [number, number]) => [coord[1], coord[0]])
            latLngPolys.push(latLngs)
          })
          const htmlString = typeof icon.options.html === "string" ? icon.options.html : ""

          // Determine color based on building category
          const polygonColor = htmlString.includes("#3b82f6")
            ? "#3b82f6"
            : htmlString.includes("#ef4444")
              ? "#ef4444"
              : "#f97316"

          L.polygon(latLngPolys, {
            color: polygonColor,
            weight: 1,
            fillOpacity: 0.15,
            renderer: canvasRenderer, // Use canvas renderer for better performance
            interactive: false, // Disable interaction to improve performance
          }).addTo(map)
        }
      })

      // Add hover tooltip to clusters to show statistics
      clusterGroup.on("clustermouseover", function (event: any) {
        const cluster = event.layer
        const markers = cluster.getAllChildMarkers()

        // Count buildings by category
        const categories = { general: 0, izhs: 0, susn: 0 }
        markers.forEach((marker: any) => {
          const building = marker.options.buildingData
          if (building) {
            categories[building.building_category]++
          }
        })

        const tooltipContent = `
          <div style="padding: 10px; min-width: 180px; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <h3 style="font-size: 13px; font-weight: bold; margin-bottom: 8px; color: #111827;">
              Кластер: ${markers.length} зданий
            </h3>
            <div style="display: flex; flex-direction: column; gap: 6px;">
              ${categories.general > 0 ? `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; background: #fff7ed; border-left: 3px solid #f97316; border-radius: 4px;">
                  <span style="font-size: 11px; color: #9a3412;">🏠 ALSECO</span>
                  <span style="font-size: 13px; font-weight: bold; color: #f97316;">${categories.general}</span>
                </div>
              ` : ""}
              ${categories.izhs > 0 ? `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; background: #eff6ff; border-left: 3px solid #3b82f6; border-radius: 4px;">
                  <span style="font-size: 11px; color: #1e3a8a;">🏡 ИЖС</span>
                  <span style="font-size: 13px; font-weight: bold; color: #3b82f6;">${categories.izhs}</span>
                </div>
              ` : ""}
              ${categories.susn > 0 ? `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; background: #fef2f2; border-left: 3px solid #ef4444; border-radius: 4px;">
                  <span style="font-size: 11px; color: #7f1d1d;">🏢 СУСН</span>
                  <span style="font-size: 13px; font-weight: bold; color: #ef4444;">${categories.susn}</span>
                </div>
              ` : ""}
            </div>
            <p style="margin-top: 8px; font-size: 9px; color: #6b7280; text-align: center;">
              Нажмите для приближения
            </p>
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
        const cluster = event.layer
        cluster.closeTooltip()
      })

      // Click cluster to zoom in
      clusterGroup.on("clusterclick", function (event: any) {
        const cluster = event.layer
        cluster.zoomToBounds({ padding: [50, 50] })
      })

      clusterGroup.addTo(map)
      clusterGroupRef.current = clusterGroup
    }

    // Auto-fit bounds if there are buildings
    if (buildings.length > 0) {
      const bounds = L.latLngBounds(buildings.map((b) => [b.latitude, b.longitude]))
      map.fitBounds(bounds, { padding: [50, 50] })
    }

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      heatLayerRef.current = null
      clusterGroupRef.current = null
    }
  }, [buildings, showHeatmap])

  return <div ref={mapRef} className="h-full w-full" />
}
