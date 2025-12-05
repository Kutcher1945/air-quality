"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.markercluster/dist/leaflet.markercluster"
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"

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

export default function BuildingsMap({ buildings }: BuildingsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Clear previous map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    // Center of Almaty
    const mapCenter: [number, number] = [43.238293, 76.945465]

    // Create Leaflet map with EPSG:3395 CRS for Yandex tiles
    const map = L.map(mapRef.current, {
      crs: L.CRS.EPSG3395, // Yandex uses Mercator projection (EPSG:3395)
      center: mapCenter,
      zoom: 11,
    })

    // Add Yandex tiles layer (no API key needed!)
    L.tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU", {
      attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
      maxZoom: 18,
      minZoom: 0,
    }).addTo(map)

    // Cluster markers for performance on large datasets
    // @ts-ignore markercluster is attached to L by side-effect import
    const clusterGroup: L.MarkerClusterGroup = L.markerClusterGroup({
      disableClusteringAtZoom: 16,
      chunkedLoading: true,
      maxClusterRadius: 45,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
    })

    buildings.forEach((building) => {
      // Use different colored icon based on building category
      const icon = createMarkerIcon(building.building_category)

      const marker = L.marker([building.latitude, building.longitude], { icon }).bindPopup(
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

      clusterGroup.addLayer(marker)

      // Draw polygons if geometry exists
      if (building.geometry && building.geometry.type === "MultiPolygon") {
        const latLngPolys: L.LatLngExpression[][] = []
        building.geometry.coordinates.forEach((poly: any) => {
          // poly is array of rings, take first ring
          const ring = poly[0]
          const latLngs = ring.map((coord: [number, number]) => [coord[1], coord[0]]) // [lon, lat] -> [lat, lon]
          latLngPolys.push(latLngs)
        })
        L.polygon(latLngPolys, {
          color: icon.options.html?.includes("#3b82f6") ? "#3b82f6" : icon.options.html?.includes("#ef4444") ? "#ef4444" : "#f97316",
          weight: 1,
          fillOpacity: 0.15,
        }).addTo(map)
      }
    })

    clusterGroup.addTo(map)

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
    }
  }, [buildings])

  return <div ref={mapRef} className="h-full w-full" />
}
