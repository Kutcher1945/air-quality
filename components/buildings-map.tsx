"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.markercluster/dist/leaflet.markercluster"
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.heat"

if (typeof window !== 'undefined') {
  require('leaflet.vectorgrid');
}

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
  onBuildingClick?: (building: Building) => void
}

// Fix Leaflet default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

const IZHS_RESIDENTIAL_TYPES = [
  'Не указано',
  'Частный дом',
  'Коттедж',
  'Таунхаус',
  'Сооружение',
  'Малоэтажный жилой дом',
  'Жилой дом',
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

// Function to create colored marker icons based on building category
const createMarkerIcon = (
  category: "general" | "izhs" | "susn",
  isSeasonalOrUnused?: boolean,
  buildingTypeRaw?: string | null,
) => {
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

  // Special styling for seasonal/unused buildings
  if (isSeasonalOrUnused) {
    return L.divIcon({
      className: "custom-marker seasonal-marker",
      html: `
        <div style="
          background-color: #ec4899;
          width: 36px;
          height: 36px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid white;
          box-shadow: 0 2px 12px rgba(236, 72, 153, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.95;
          backdrop-filter: blur(2px);
          transition: opacity 0.2s ease;
        ">
          <div style="
            transform: rotate(45deg);
            color: white;
            font-size: 16px;
            font-weight: bold;
          ">❄️</div>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36],
    })
  }

  let color = colors[category]
  let icon = emoji[category]

  if (category === "general" && buildingTypeRaw) {
    const raw = buildingTypeRaw.trim()
    if (IZHS_RESIDENTIAL_TYPES.includes(raw)) {
      color = "#10b981" // Green - ALSECO ИЖС types
      icon = "🏡"
    } else if (IZHS_NON_RESIDENTIAL_TYPES.includes(raw)) {
      color = "#8b5cf6" // Purple - ALSECO не ИЖС types
      icon = "🏬"
    }
  }

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
        opacity: 0.85;
        backdrop-filter: blur(2px);
        transition: opacity 0.2s ease;
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

export default function BuildingsMap({
  buildings,
  renovationAreas = [],
  districts = [],
  selectedDistrictId = null,
  showHeatmap = false,
  showRenovationAreas = false,
  onBuildingClick
}: BuildingsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const heatLayerRef = useRef<any>(null)
  const clusterGroupRef = useRef<any>(null)
  const districtLayerRef = useRef<L.LayerGroup | null>(null)
  const renovationLayerRef = useRef<L.LayerGroup | null>(null)
  const onBuildingClickRef = useRef(onBuildingClick)
  const hasAutoFitted = useRef(false)
  const canvasRendererRef = useRef<L.Canvas | null>(null)
  const isUnmountingRef = useRef(false)
  const previousDistrictIdRef = useRef<number | null | undefined>(undefined)

  const heatmapLegendItems = [
    { color: '#22c55e', label: '0 зданий' },
    { color: '#FFD700', label: '1 здание' },
    { color: '#f97316', label: '2 - 4 здания' },
    { color: '#cf7e88', label: '5 зданий' },
    { color: '#ef4444', label: '6 - 20 зданий' },
    { color: '#7f1d1d', label: 'более 20' },
  ];

  const HeatmapLegend = () => {
    return (
      <div className="absolute bottom-0 right-0 z-[1000] bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-200 pointer-events-none min-w-[140px]">
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">
          Зданий без газа
        </div>
        <div className="grid grid-cols-2 gap-2">
          {heatmapLegendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-4 h-4 rounded-sm shadow-inner" 
                style={{ backgroundColor: item.color }} 
              />
              <span className="text-xs font-semibold text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Keep the ref updated with the latest callback
  useEffect(() => {
    onBuildingClickRef.current = onBuildingClick
  }, [onBuildingClick])

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/tile-sw.js')
        .then(() => console.log("Tile Cache Worker Registered"));
    }
  }, []);

  // Initialize map only once
  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) return

    // Reset unmounting flag on mount
    isUnmountingRef.current = false

    // Center of Almaty
    const mapCenter: [number, number] = [43.238293, 76.945465]

    // Create canvas renderer for better performance with many markers
    canvasRendererRef.current = L.canvas({ padding: 0.5 })

    // Create Leaflet map with EPSG:3395 CRS for Yandex tiles
    const map = L.map(mapRef.current, {
      // crs: L.CRS.EPSG3395, // Yandex uses Mercator projection (EPSG:3395)
      crs: L.CRS.EPSG3857,
      center: mapCenter,
      zoom: 11,
      preferCanvas: true, // Use canvas for better performance
      renderer: canvasRendererRef.current,
      zoomAnimation: true,
      markerZoomAnimation: true,
      fadeAnimation: true,
      // Performance optimizations
      wheelDebounceTime: 40,
      // wheelDebounceTime: 100,
      // wheelPxPerZoomLevel: 60,
    })

    // Add Yandex tiles layer (no API key needed!)
    // L.tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU", {
    //   attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
    //   maxZoom: 21, // Increased max zoom for closer inspection
    //   minZoom: 0,
    //   updateWhenIdle: false, // Update tiles during movement for smoother experience
    //   updateWhenZooming: false, // Don't update while zooming
    //   keepBuffer: 2, // Keep more tiles in buffer for smooth panning
    // }).addTo(map)

    L.tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU&projection=web_mercator", {
      attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
      maxZoom: 21,
      minZoom: 0,
      updateWhenIdle: false,
      keepBuffer: 2,
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      isUnmountingRef.current = true
      const currentMap = mapInstanceRef.current
      if (currentMap) {
        // Stop all pending animations and redraws first
        currentMap.stop()

        if (heatLayerRef.current) {
          try {
            currentMap.removeLayer(heatLayerRef.current)
          } catch (e) { /* ignore cleanup errors */ }
          heatLayerRef.current = null
        }
        if (clusterGroupRef.current) {
          try {
            clusterGroupRef.current.clearLayers()
            currentMap.removeLayer(clusterGroupRef.current)
          } catch (e) { /* ignore cleanup errors */ }
          clusterGroupRef.current = null
        }
        if (districtLayerRef.current) {
          try {
            currentMap.removeLayer(districtLayerRef.current)
          } catch (e) { /* ignore cleanup errors */ }
          districtLayerRef.current = null
        }
        if (renovationLayerRef.current) {
          try {
            currentMap.removeLayer(renovationLayerRef.current)
          } catch (e) { /* ignore cleanup errors */ }
          renovationLayerRef.current = null
        }

        // Clear canvas renderer
        if (canvasRendererRef.current) {
          try {
            canvasRendererRef.current.remove()
          } catch (e) { /* ignore cleanup errors */ }
          canvasRendererRef.current = null
        }

        currentMap.off()
        currentMap.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapInstanceRef.current || typeof window === "undefined" || isUnmountingRef.current) return

    const map = mapInstanceRef.current
    let cancelled = false

    // Helper function to safely remove layers
    const safeRemoveLayer = (layer: any) => {
      if (!layer || !mapInstanceRef.current || isUnmountingRef.current) return
      try {
        mapInstanceRef.current.removeLayer(layer)
      } catch (e) {
        // Ignore errors during layer removal (canvas might be destroyed)
      }
    }

    // Clear existing layers
    if (heatLayerRef.current) {
      safeRemoveLayer(heatLayerRef.current)
      heatLayerRef.current = null
    }
    if (clusterGroupRef.current) {
      safeRemoveLayer(clusterGroupRef.current)
      clusterGroupRef.current = null
    }
    if (districtLayerRef.current) {
      safeRemoveLayer(districtLayerRef.current)
      districtLayerRef.current = null
    }
    if (renovationLayerRef.current) {
      safeRemoveLayer(renovationLayerRef.current)
      renovationLayerRef.current = null
    }

    if (cancelled || !mapInstanceRef.current || isUnmountingRef.current) return

    if (showHeatmap) {
      const VectorGrid = (L as any).vectorGrid;

      if (VectorGrid) {
        const heatmapUrl = "https://admin.smartalmaty.kz/api/v1/address/gas-heatmap/tiles/{z}/{x}/{y}.pbf";
        
        const heatLayer = VectorGrid.protobuf(heatmapUrl, {
          // rendererFactory: (L as any).svg.tile,
          rendererFactory: (L as any).canvas.tile,
          vectorTileLayerStyles: {
            heatmap: (properties: any) => {
              if (selectedDistrictId && properties.district_id !== selectedDistrictId) {
                return {
                  fill: false,
                  stroke: false,
                  opacity: 0,
                  fillOpacity: 0
                };
              }
              const val = Number(properties.intensity || 0);
              
              let color;
              if (val === 0) {
                color = '#22c55e';
              } else if (val === 1) {
                color = '#FFD700';
              } else if (val < 5) {
                color = '#f97316';
              } else if (val === 5) {
                color = '#cf7e88ff';
              } else if (val <= 20) {
                color = '#ef4444';
              } else {
                color = '#7f1d1d';
              }

              return {
                fill: true,
                fillColor: color,
                fillOpacity: 0.75,
                stroke: false,
                color: color,
                weight: 1,
                opacity: 0.2,
              };
            }
          },
          // srid: 3857, 
          interactive: true,
          getFeatureId: (f: any) => f.properties.id, //new
          maxNativeZoom: 14, //new
          maxZoom: 21, //new
          updateWhenIdle: true, //new
          updateWhenZooming: false, //new
          zIndex: 1000,
          keepBuffer: 4, // Keep more tiles in memory to prevent white flickering
          buffer: 512, // Larger buffer helps with labels/edges
        });

        if (!cancelled && !isUnmountingRef.current && mapInstanceRef.current) {
          try {
            heatLayer.addTo(map);
            heatLayerRef.current = heatLayer;
          } catch (e) { /* ignore layer add errors */ }
        }
      }
    } else {
      // Cluster markers for performance on large datasets
      // @ts-ignore markercluster is attached to L by side-effect import
      const clusterGroup = L.markerClusterGroup({
        disableClusteringAtZoom: 17, // Increased to 17 - keeps clustering longer for better performance
        chunkedLoading: true,
        chunkInterval: 200, // Faster chunk processing
        chunkDelay: 50, // Less delay between chunks
        maxClusterRadius: 60, // Increased radius for better grouping
        spiderfyOnMaxZoom: true,
        showCoverageOnHover: false, // Disable coverage on hover - improves performance
        spiderfyDistanceMultiplier: 2, // Spread out spiderfied markers more
        removeOutsideVisibleBounds: true, // Remove markers outside viewport for performance
        animate: true, // Smooth animations
        animateAddingMarkers: false, // Disable animation when adding markers for speed
        iconCreateFunction: function (cluster: any) {
          const markers = cluster.getAllChildMarkers()
          const count = markers.length

          // Count buildings by category
          const categories = { general: 0, izhs: 0, susn: 0 }
          markers.forEach((marker: any) => {
            const building = marker.options.buildingData
            if (building && building.building_category) {
              const cat = building.building_category as keyof typeof categories
              categories[cat]++
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
          let size: "small" | "medium" | "large" = "small"
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
                opacity: 0.85;
                backdrop-filter: blur(2px);
                transition: opacity 0.2s ease;
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

      console.log(`🗺️ Creating markers for ${buildings.length} buildings`)

      // Skip marker creation if no buildings
      if (buildings.length === 0) {
        console.log("⚠️ No buildings to display on map")
        return
      }

      let markersCreated = 0
      buildings.forEach((building) => {
        // Skip buildings without valid coordinates
        if (!building.latitude || !building.longitude) return
        // Use different colored icon based on building category and seasonal/unused status
        const icon = createMarkerIcon(
          building.building_category,
          building.is_seasonal_or_unused,
          building.building_type_raw,
        )

        const marker = L.marker([building.latitude, building.longitude], {
          icon,
          buildingData: building // Store building data for cluster calculations
        } as any).bindPopup(
          `
          <div style="padding: 8px; min-width: 200px;">
            <strong style="font-size: 14px;">${building.address}</strong>
            ${building.is_seasonal_or_unused ? `<span style="display: inline-block; margin-left: 8px; padding: 2px 6px; background: #fdf2f8; color: #be185d; font-size: 10px; border-radius: 4px; font-weight: bold;">❄️ Сезонное</span>` : ""}
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
        markersCreated++

        // Draw polygons only at high zoom for performance (zoom 16+)
        // Commented out to improve performance
        /* if (building.geometry && building.geometry.type === "MultiPolygon" && map.getZoom() >= 16) {
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
            renderer: canvasRendererRef.current || undefined, // Use canvas renderer for better performance
            interactive: false, // Disable interaction to improve performance
            smoothFactor: 2, // Simplify polygon for performance
          }).addTo(map)
        } */
      })

      // Add hover tooltip to clusters to show statistics
      clusterGroup.on("clustermouseover", function (event: any) {
        const cluster = event.layer
        const markers = cluster.getAllChildMarkers()

        // Count buildings by category
        const categories = { general: 0, izhs: 0, susn: 0 }
        markers.forEach((marker: any) => {
          const building = marker.options.buildingData
          if (building && building.building_category) {
            const cat = building.building_category as keyof typeof categories
            categories[cat]++
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
                  <span style="font-size: 11px; color: #1e3a8a;">🏡 Данные Районных акиматов</span>
                  <span style="font-size: 13px; font-weight: bold; color: #3b82f6;">${categories.izhs}</span>
                </div>
              ` : ""}
              ${categories.susn > 0 ? `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 4px 8px; background: #fef2f2; border-left: 3px solid #ef4444; border-radius: 4px;">
                  <span style="font-size: 11px; color: #7f1d1d;">🏢 Данные ДЧС</span>
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

      if (!cancelled && !isUnmountingRef.current && mapInstanceRef.current) {
        try {
          clusterGroup.addTo(map)
          clusterGroupRef.current = clusterGroup
        } catch (e) { /* ignore cluster add errors */ }
      }

      console.log(`✅ Successfully created ${markersCreated} markers on the map`)
    }

    // Render district polygons (filter by selectedDistrictId if specified)
    if (districts.length > 0) {
      const districtLayer = L.layerGroup()

      // Filter districts: show only selected one if specified, otherwise show all
      const districtsToRender = selectedDistrictId !== null
        ? districts.filter(d => d.id === selectedDistrictId)
        : districts

      let selectedDistrictBounds: L.LatLngBounds | null = null

      districtsToRender.forEach((district) => {
        if (district.geometry && (district.geometry.type === "Polygon" || district.geometry.type === "MultiPolygon")) {
          const coordinates = district.geometry.coordinates
          const isSelected = district.id === selectedDistrictId

          if (district.geometry.type === "Polygon") {
            // Single polygon
            const latLngs = coordinates[0].map((coord: [number, number]) => [coord[1], coord[0]])

            const districtPolygon = L.polygon([latLngs], {
              color: isSelected ? "#3b82f6" : "#64748b", // Blue for selected, slate gray for others
              weight: isSelected ? 3 : 2,
              fillOpacity: isSelected ? 0.15 : 0.05,
              fillColor: isSelected ? "#3b82f6" : "#94a3b8",
              renderer: !isUnmountingRef.current && canvasRendererRef.current ? canvasRendererRef.current : undefined,
            })

            const popupContent = `
              <div style="padding: 8px; min-width: 150px;">
                <strong style="font-size: 14px; color: ${isSelected ? '#3b82f6' : '#64748b'};">📍 ${district.name}</strong>
              </div>
            `
            districtPolygon.bindPopup(popupContent)
            districtLayer.addLayer(districtPolygon)

            // Store bounds for zooming if this is the selected district
            if (isSelected) {
              selectedDistrictBounds = districtPolygon.getBounds()
            }
          } else if (district.geometry.type === "MultiPolygon") {
            // Multiple polygons
            const latLngPolys: L.LatLngExpression[][] = []
            coordinates.forEach((polygon: any) => {
              polygon.forEach((ring: any) => {
                const latLngs = ring.map((coord: [number, number]) => [coord[1], coord[0]])
                latLngPolys.push(latLngs)
              })
            })

            const districtPolygon = L.polygon(latLngPolys, {
              color: isSelected ? "#3b82f6" : "#64748b", // Blue for selected, slate gray for others
              weight: isSelected ? 3 : 2,
              fillOpacity: isSelected ? 0.15 : 0.05,
              fillColor: isSelected ? "#3b82f6" : "#94a3b8",
              renderer: !isUnmountingRef.current && canvasRendererRef.current ? canvasRendererRef.current : undefined,
            })

            const popupContent = `
              <div style="padding: 8px; min-width: 150px;">
                <strong style="font-size: 14px; color: ${isSelected ? '#3b82f6' : '#64748b'};">📍 ${district.name}</strong>
              </div>
            `
            districtPolygon.bindPopup(popupContent)
            districtLayer.addLayer(districtPolygon)

            // Store bounds for zooming if this is the selected district
            if (isSelected) {
              selectedDistrictBounds = districtPolygon.getBounds()
            }
          }
        }
      })

      if (!cancelled && !isUnmountingRef.current && mapInstanceRef.current) {
        try {
          districtLayer.addTo(map)
          districtLayerRef.current = districtLayer
        } catch (e) { /* ignore district layer add errors */ }
      }

      // Zoom to selected district if one is selected, or reset to Almaty view
      // Only change view if district selection actually changed (not on every re-render)
      const districtChanged = previousDistrictIdRef.current !== selectedDistrictId
      if (!cancelled && !isUnmountingRef.current && mapInstanceRef.current && districtChanged) {
        previousDistrictIdRef.current = selectedDistrictId
        if (selectedDistrictId !== null && selectedDistrictBounds) {
          try {
            map.fitBounds(selectedDistrictBounds, {
              padding: [50, 50],
              maxZoom: 14 // Don't zoom in too close
            })
            console.log(`🎯 Zoomed to district ID ${selectedDistrictId}`)
          } catch (e) { /* ignore zoom errors during transitions */ }
        } else if (selectedDistrictId === null) {
          // Reset to default Almaty view when "Все районы" or "Без района" is selected
          const almatyCenter: [number, number] = [43.238293, 76.945465]
          const defaultZoom = 11
          try {
            map.setView(almatyCenter, defaultZoom, { animate: true })
            console.log(`🏙️ Reset view to all Almaty`)
          } catch (e) { /* ignore view errors during transitions */ }
        }
      }

      console.log(`✅ Successfully rendered ${districtsToRender.length} district polygon(s)`)
    }

    // Render renovation areas if enabled
    if (showRenovationAreas && renovationAreas.length > 0) {
      const renovationLayer = L.layerGroup()

      renovationAreas.forEach((area) => {
        if (area.geometry && area.geometry.type === "MultiPolygon") {
          const coordinates = area.geometry.coordinates

          // Convert MultiPolygon coordinates to Leaflet format
          const latLngPolys: L.LatLngExpression[][] = []
          coordinates.forEach((polygon: any) => {
            polygon.forEach((ring: any) => {
              const latLngs = ring.map((coord: [number, number]) => [coord[1], coord[0]])
              latLngPolys.push(latLngs)
            })
          })

          // Create polygon with styling
          const renovationPolygon = L.polygon(latLngPolys, {
            color: "#8b5cf6", // Purple color for renovation areas
            weight: 2,
            fillOpacity: 0.2,
            fillColor: "#8b5cf6",
            renderer: !isUnmountingRef.current && canvasRendererRef.current ? canvasRendererRef.current : undefined,
          })

          // Add popup with renovation area information
          const popupContent = `
            <div style="padding: 8px; min-width: 200px;">
              <strong style="font-size: 14px; color: #8b5cf6;">🏗️ ${area.name_ru}</strong>
              <hr style="margin: 8px 0; border: none; border-top: 1px solid #e5e7eb;">
              ${area.address ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Адрес:</strong> ${area.address}</p>` : ""}
              ${area.number_of_houses ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Количество домов:</strong> ${area.number_of_houses}</p>` : ""}
              ${area.number_of_apartments ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Количество квартир:</strong> ${area.number_of_apartments}</p>` : ""}
              ${area.plot_area ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Площадь участка:</strong> ${area.plot_area}</p>` : ""}
              ${area.photo_url ? `<img src="${area.photo_url}" alt="${area.name_ru}" style="width: 100%; margin-top: 8px; border-radius: 4px;" />` : ""}
            </div>
          `
          renovationPolygon.bindPopup(popupContent)

          renovationLayer.addLayer(renovationPolygon)
        }
      })

      if (!cancelled && !isUnmountingRef.current && mapInstanceRef.current) {
        try {
          renovationLayer.addTo(map)
          renovationLayerRef.current = renovationLayer
          console.log(`✅ Successfully rendered ${renovationAreas.length} renovation areas`)
        } catch (e) { /* ignore renovation layer add errors */ }
      }
    }

    // Auto-fit bounds only on first load, not on subsequent re-renders
    const validBuildings = buildings.filter(b => b.latitude && b.longitude)
    if (validBuildings.length > 0 && !hasAutoFitted.current) {
      const bounds = L.latLngBounds(validBuildings.map((b) => [b.latitude, b.longitude]))
      if (!cancelled && !isUnmountingRef.current && mapInstanceRef.current) {
        try {
          map.fitBounds(bounds, { padding: [50, 50] })
          hasAutoFitted.current = true
        } catch (e) { /* ignore bounds errors during initial load */ }
      }
    }
    return () => {
      cancelled = true
      // Note: We don't clean up layers here because the effect body already
      // clears them at the start. Cleaning here would cause race conditions
      // with the new effect that runs immediately after.
    }
  }, [buildings, showHeatmap, showRenovationAreas, renovationAreas, districts, selectedDistrictId])

  return (
    <>
      <style jsx global>{`
        .custom-marker > div:hover {
          opacity: 1 !important;
        }
        .leaflet-marker-icon:hover {
          z-index: 1000 !important;
        }
      `}</style>
      {showHeatmap && <HeatmapLegend />}
      <div ref={mapRef} className="h-full w-full" />
    </>
  )
}
