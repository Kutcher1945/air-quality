(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/buildings-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuildingsMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$markercluster$2f$dist$2f$leaflet$2e$markercluster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.markercluster/dist/leaflet.markercluster.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$heat$2f$dist$2f$leaflet$2d$heat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.heat/dist/leaflet-heat.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// Fix Leaflet default marker icon issue
delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});
// Function to create colored marker icons based on building category
const createMarkerIcon = (category)=>{
    // Different colors for each building type
    const colors = {
        general: "#f97316",
        izhs: "#3b82f6",
        susn: "#ef4444"
    };
    const emoji = {
        general: "🏠",
        izhs: "🏡",
        susn: "🏢"
    };
    const color = colors[category];
    const icon = emoji[category];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
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
        iconSize: [
            32,
            32
        ],
        iconAnchor: [
            16,
            32
        ],
        popupAnchor: [
            0,
            -32
        ]
    });
};
function BuildingsMap({ buildings, renovationAreas = [], districts = [], selectedDistrictId = null, showHeatmap = false, showRenovationAreas = false, onBuildingClick }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heatLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clusterGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const districtLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renovationLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onBuildingClickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onBuildingClick);
    const hasAutoFitted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const canvasRendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Keep the ref updated with the latest callback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMap.useEffect": ()=>{
            onBuildingClickRef.current = onBuildingClick;
        }
    }["BuildingsMap.useEffect"], [
        onBuildingClick
    ]);
    // Initialize map only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMap.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !mapRef.current || mapInstanceRef.current) return;
            // Center of Almaty
            const mapCenter = [
                43.238293,
                76.945465
            ];
            // Create canvas renderer for better performance with many markers
            canvasRendererRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].canvas({
                padding: 0.5
            });
            // Create Leaflet map with EPSG:3395 CRS for Yandex tiles
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                crs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CRS.EPSG3395,
                center: mapCenter,
                zoom: 11,
                preferCanvas: true,
                renderer: canvasRendererRef.current,
                zoomAnimation: true,
                markerZoomAnimation: true,
                fadeAnimation: true,
                // Performance optimizations
                wheelDebounceTime: 40,
                wheelPxPerZoomLevel: 60
            });
            // Add Yandex tiles layer (no API key needed!)
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU", {
                attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
                maxZoom: 21,
                minZoom: 0,
                updateWhenIdle: false,
                updateWhenZooming: false,
                keepBuffer: 2
            }).addTo(map);
            mapInstanceRef.current = map;
            return ({
                "BuildingsMap.useEffect": ()=>{
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                }
            })["BuildingsMap.useEffect"];
        }
    }["BuildingsMap.useEffect"], []);
    // Update markers and layers when buildings or showHeatmap changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMap.useEffect": ()=>{
            if (!mapInstanceRef.current || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const map = mapInstanceRef.current;
            // Clear existing layers
            if (heatLayerRef.current) {
                map.removeLayer(heatLayerRef.current);
                heatLayerRef.current = null;
            }
            if (clusterGroupRef.current) {
                map.removeLayer(clusterGroupRef.current);
                clusterGroupRef.current = null;
            }
            if (districtLayerRef.current) {
                map.removeLayer(districtLayerRef.current);
                districtLayerRef.current = null;
            }
            if (renovationLayerRef.current) {
                map.removeLayer(renovationLayerRef.current);
                renovationLayerRef.current = null;
            }
            if (showHeatmap) {
                // Create heatmap layer
                const heatData = buildings.map({
                    "BuildingsMap.useEffect.heatData": (building)=>[
                            building.latitude,
                            building.longitude,
                            0.8
                        ]
                }["BuildingsMap.useEffect.heatData"]);
                // @ts-ignore leaflet.heat is attached to L by side-effect import
                const heatLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].heatLayer(heatData, {
                    radius: 25,
                    blur: 15,
                    minOpacity: 0.5,
                    max: 1.0,
                    gradient: {
                        0.0: "#3b82f6",
                        0.4: "#10b981",
                        0.6: "#fbbf24",
                        0.8: "#f97316",
                        1.0: "#ef4444"
                    }
                }).addTo(map);
                heatLayerRef.current = heatLayer;
            } else {
                // Cluster markers for performance on large datasets
                // @ts-ignore markercluster is attached to L by side-effect import
                const clusterGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].markerClusterGroup({
                    disableClusteringAtZoom: 17,
                    chunkedLoading: true,
                    chunkInterval: 200,
                    chunkDelay: 50,
                    maxClusterRadius: 60,
                    spiderfyOnMaxZoom: true,
                    showCoverageOnHover: false,
                    spiderfyDistanceMultiplier: 2,
                    removeOutsideVisibleBounds: true,
                    animate: true,
                    animateAddingMarkers: false,
                    iconCreateFunction: {
                        "BuildingsMap.useEffect.clusterGroup": function(cluster) {
                            const markers = cluster.getAllChildMarkers();
                            const count = markers.length;
                            // Count buildings by category
                            const categories = {
                                general: 0,
                                izhs: 0,
                                susn: 0
                            };
                            markers.forEach({
                                "BuildingsMap.useEffect.clusterGroup": (marker)=>{
                                    const building = marker.options.buildingData;
                                    if (building && building.building_category) {
                                        const cat = building.building_category;
                                        categories[cat]++;
                                    }
                                }
                            }["BuildingsMap.useEffect.clusterGroup"]);
                            // Determine dominant category
                            let dominantCategory = "general";
                            let maxCount = categories.general;
                            if (categories.izhs > maxCount) {
                                dominantCategory = "izhs";
                                maxCount = categories.izhs;
                            }
                            if (categories.susn > maxCount) {
                                dominantCategory = "susn";
                            }
                            // Color based on dominant category
                            const colors = {
                                general: "#f97316",
                                izhs: "#3b82f6",
                                susn: "#ef4444"
                            };
                            const color = colors[dominantCategory];
                            // Size based on count
                            let size = "small";
                            if (count >= 100) size = "large";
                            else if (count >= 50) size = "medium";
                            const sizeMap = {
                                small: "40px",
                                medium: "50px",
                                large: "60px"
                            };
                            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
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
                                iconSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].point(parseInt(sizeMap[size]), parseInt(sizeMap[size]))
                            });
                        }
                    }["BuildingsMap.useEffect.clusterGroup"]
                });
                console.log(`🗺️ Creating markers for ${buildings.length} buildings`);
                let markersCreated = 0;
                buildings.forEach({
                    "BuildingsMap.useEffect": (building)=>{
                        // Use different colored icon based on building category
                        const icon = createMarkerIcon(building.building_category);
                        const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                            building.latitude,
                            building.longitude
                        ], {
                            icon,
                            buildingData: building // Store building data for cluster calculations
                        }).bindPopup(`
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
        `);
                        // Add click event to open side panel
                        marker.on("click", {
                            "BuildingsMap.useEffect": ()=>{
                                if (onBuildingClickRef.current) {
                                    onBuildingClickRef.current(building);
                                }
                            }
                        }["BuildingsMap.useEffect"]);
                        clusterGroup.addLayer(marker);
                        markersCreated++;
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
        } */ }
                }["BuildingsMap.useEffect"]);
                // Add hover tooltip to clusters to show statistics
                clusterGroup.on("clustermouseover", {
                    "BuildingsMap.useEffect": function(event) {
                        const cluster = event.layer;
                        const markers = cluster.getAllChildMarkers();
                        // Count buildings by category
                        const categories = {
                            general: 0,
                            izhs: 0,
                            susn: 0
                        };
                        markers.forEach({
                            "BuildingsMap.useEffect": (marker)=>{
                                const building = marker.options.buildingData;
                                if (building && building.building_category) {
                                    const cat = building.building_category;
                                    categories[cat]++;
                                }
                            }
                        }["BuildingsMap.useEffect"]);
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
        `;
                        cluster.bindTooltip(tooltipContent, {
                            permanent: false,
                            direction: "top",
                            className: "cluster-tooltip",
                            offset: [
                                0,
                                -10
                            ]
                        }).openTooltip();
                    }
                }["BuildingsMap.useEffect"]);
                clusterGroup.on("clustermouseout", {
                    "BuildingsMap.useEffect": function(event) {
                        const cluster = event.layer;
                        cluster.closeTooltip();
                    }
                }["BuildingsMap.useEffect"]);
                // Click cluster to zoom in
                clusterGroup.on("clusterclick", {
                    "BuildingsMap.useEffect": function(event) {
                        const cluster = event.layer;
                        cluster.zoomToBounds({
                            padding: [
                                50,
                                50
                            ]
                        });
                    }
                }["BuildingsMap.useEffect"]);
                clusterGroup.addTo(map);
                clusterGroupRef.current = clusterGroup;
                console.log(`✅ Successfully created ${markersCreated} markers on the map`);
            }
            // Render district polygons (filter by selectedDistrictId if specified)
            if (districts.length > 0) {
                const districtLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup();
                // Filter districts: show only selected one if specified, otherwise show all
                const districtsToRender = selectedDistrictId !== null ? districts.filter({
                    "BuildingsMap.useEffect": (d)=>d.id === selectedDistrictId
                }["BuildingsMap.useEffect"]) : districts;
                let selectedDistrictBounds = null;
                districtsToRender.forEach({
                    "BuildingsMap.useEffect": (district)=>{
                        if (district.geometry && (district.geometry.type === "Polygon" || district.geometry.type === "MultiPolygon")) {
                            const coordinates = district.geometry.coordinates;
                            const isSelected = district.id === selectedDistrictId;
                            if (district.geometry.type === "Polygon") {
                                // Single polygon
                                const latLngs = coordinates[0].map({
                                    "BuildingsMap.useEffect.latLngs": (coord)=>[
                                            coord[1],
                                            coord[0]
                                        ]
                                }["BuildingsMap.useEffect.latLngs"]);
                                const districtPolygon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polygon([
                                    latLngs
                                ], {
                                    color: isSelected ? "#3b82f6" : "#64748b",
                                    weight: isSelected ? 3 : 2,
                                    fillOpacity: isSelected ? 0.15 : 0.05,
                                    fillColor: isSelected ? "#3b82f6" : "#94a3b8",
                                    renderer: canvasRendererRef.current || undefined
                                });
                                const popupContent = `
              <div style="padding: 8px; min-width: 150px;">
                <strong style="font-size: 14px; color: ${isSelected ? '#3b82f6' : '#64748b'};">📍 ${district.name}</strong>
              </div>
            `;
                                districtPolygon.bindPopup(popupContent);
                                districtLayer.addLayer(districtPolygon);
                                // Store bounds for zooming if this is the selected district
                                if (isSelected) {
                                    selectedDistrictBounds = districtPolygon.getBounds();
                                }
                            } else if (district.geometry.type === "MultiPolygon") {
                                // Multiple polygons
                                const latLngPolys = [];
                                coordinates.forEach({
                                    "BuildingsMap.useEffect": (polygon)=>{
                                        polygon.forEach({
                                            "BuildingsMap.useEffect": (ring)=>{
                                                const latLngs = ring.map({
                                                    "BuildingsMap.useEffect.latLngs": (coord)=>[
                                                            coord[1],
                                                            coord[0]
                                                        ]
                                                }["BuildingsMap.useEffect.latLngs"]);
                                                latLngPolys.push(latLngs);
                                            }
                                        }["BuildingsMap.useEffect"]);
                                    }
                                }["BuildingsMap.useEffect"]);
                                const districtPolygon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polygon(latLngPolys, {
                                    color: isSelected ? "#3b82f6" : "#64748b",
                                    weight: isSelected ? 3 : 2,
                                    fillOpacity: isSelected ? 0.15 : 0.05,
                                    fillColor: isSelected ? "#3b82f6" : "#94a3b8",
                                    renderer: canvasRendererRef.current || undefined
                                });
                                const popupContent = `
              <div style="padding: 8px; min-width: 150px;">
                <strong style="font-size: 14px; color: ${isSelected ? '#3b82f6' : '#64748b'};">📍 ${district.name}</strong>
              </div>
            `;
                                districtPolygon.bindPopup(popupContent);
                                districtLayer.addLayer(districtPolygon);
                                // Store bounds for zooming if this is the selected district
                                if (isSelected) {
                                    selectedDistrictBounds = districtPolygon.getBounds();
                                }
                            }
                        }
                    }
                }["BuildingsMap.useEffect"]);
                districtLayer.addTo(map);
                districtLayerRef.current = districtLayer;
                // Zoom to selected district if one is selected
                if (selectedDistrictId !== null && selectedDistrictBounds) {
                    map.fitBounds(selectedDistrictBounds, {
                        padding: [
                            50,
                            50
                        ],
                        maxZoom: 14 // Don't zoom in too close
                    });
                    console.log(`🎯 Zoomed to district ID ${selectedDistrictId}`);
                }
                console.log(`✅ Successfully rendered ${districtsToRender.length} district polygon(s)`);
            }
            // Render renovation areas if enabled
            if (showRenovationAreas && renovationAreas.length > 0) {
                const renovationLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layerGroup();
                renovationAreas.forEach({
                    "BuildingsMap.useEffect": (area)=>{
                        if (area.geometry && area.geometry.type === "MultiPolygon") {
                            const coordinates = area.geometry.coordinates;
                            // Convert MultiPolygon coordinates to Leaflet format
                            const latLngPolys = [];
                            coordinates.forEach({
                                "BuildingsMap.useEffect": (polygon)=>{
                                    polygon.forEach({
                                        "BuildingsMap.useEffect": (ring)=>{
                                            const latLngs = ring.map({
                                                "BuildingsMap.useEffect.latLngs": (coord)=>[
                                                        coord[1],
                                                        coord[0]
                                                    ]
                                            }["BuildingsMap.useEffect.latLngs"]);
                                            latLngPolys.push(latLngs);
                                        }
                                    }["BuildingsMap.useEffect"]);
                                }
                            }["BuildingsMap.useEffect"]);
                            // Create polygon with styling
                            const renovationPolygon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polygon(latLngPolys, {
                                color: "#8b5cf6",
                                weight: 2,
                                fillOpacity: 0.2,
                                fillColor: "#8b5cf6",
                                renderer: canvasRendererRef.current || undefined
                            });
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
          `;
                            renovationPolygon.bindPopup(popupContent);
                            renovationLayer.addLayer(renovationPolygon);
                        }
                    }
                }["BuildingsMap.useEffect"]);
                renovationLayer.addTo(map);
                renovationLayerRef.current = renovationLayer;
                console.log(`✅ Successfully rendered ${renovationAreas.length} renovation areas`);
            }
            // Auto-fit bounds only on first load, not on subsequent re-renders
            if (buildings.length > 0 && !hasAutoFitted.current) {
                const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(buildings.map({
                    "BuildingsMap.useEffect.bounds": (b)=>[
                            b.latitude,
                            b.longitude
                        ]
                }["BuildingsMap.useEffect.bounds"]));
                map.fitBounds(bounds, {
                    padding: [
                        50,
                        50
                    ]
                });
                hasAutoFitted.current = true;
            }
        }
    }["BuildingsMap.useEffect"], [
        buildings,
        showHeatmap,
        showRenovationAreas,
        renovationAreas,
        districts,
        selectedDistrictId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8c726aafc29b0ebc",
                children: ".custom-marker>div:hover{opacity:1!important}.leaflet-marker-icon:hover{z-index:1000!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "jsx-8c726aafc29b0ebc" + " " + "h-full w-full"
            }, void 0, false, {
                fileName: "[project]/components/buildings-map.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BuildingsMap, "TuJuVZNCan6c91qsUZJz2szsHhY=");
_c = BuildingsMap;
var _c;
__turbopack_context__.k.register(_c, "BuildingsMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/buildings-map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/buildings-map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_buildings-map_tsx_8f3b38a9._.js.map