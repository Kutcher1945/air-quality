(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/buildings-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuildingsMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
function BuildingsMap({ buildings, showHeatmap = false }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heatLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clusterGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMap.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !mapRef.current) return;
            // Clear previous map instance
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
            // Center of Almaty
            const mapCenter = [
                43.238293,
                76.945465
            ];
            // Create Leaflet map with EPSG:3395 CRS for Yandex tiles
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                crs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CRS.EPSG3395,
                center: mapCenter,
                zoom: 11
            });
            // Add Yandex tiles layer (no API key needed!)
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer("https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU", {
                attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
                maxZoom: 18,
                minZoom: 0
            }).addTo(map);
            if (showHeatmap) {
                // Create heatmap layer
                const heatData = buildings.map({
                    "BuildingsMap.useEffect.heatData": (building)=>[
                            building.latitude,
                            building.longitude,
                            0.5
                        ]
                }["BuildingsMap.useEffect.heatData"]);
                // @ts-ignore leaflet.heat is attached to L by side-effect import
                const heatLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].heatLayer(heatData, {
                    radius: 25,
                    blur: 35,
                    maxZoom: 13,
                    max: 1.0,
                    gradient: {
                        0.0: "blue",
                        0.5: "lime",
                        0.7: "yellow",
                        0.9: "orange",
                        1.0: "red"
                    }
                }).addTo(map);
                heatLayerRef.current = heatLayer;
            } else {
                // Cluster markers for performance on large datasets
                // @ts-ignore markercluster is attached to L by side-effect import
                const clusterGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].markerClusterGroup({
                    disableClusteringAtZoom: 16,
                    chunkedLoading: true,
                    maxClusterRadius: 45,
                    spiderfyOnMaxZoom: true,
                    showCoverageOnHover: false
                });
                buildings.forEach({
                    "BuildingsMap.useEffect": (building)=>{
                        // Use different colored icon based on building category
                        const icon = createMarkerIcon(building.building_category);
                        const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                            building.latitude,
                            building.longitude
                        ], {
                            icon
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
                        clusterGroup.addLayer(marker);
                        // Draw polygons if geometry exists
                        if (building.geometry && building.geometry.type === "MultiPolygon") {
                            const latLngPolys = [];
                            building.geometry.coordinates.forEach({
                                "BuildingsMap.useEffect": (poly)=>{
                                    // poly is array of rings, take first ring
                                    const ring = poly[0];
                                    const latLngs = ring.map({
                                        "BuildingsMap.useEffect.latLngs": (coord)=>[
                                                coord[1],
                                                coord[0]
                                            ]
                                    }["BuildingsMap.useEffect.latLngs"]) // [lon, lat] -> [lat, lon]
                                    ;
                                    latLngPolys.push(latLngs);
                                }
                            }["BuildingsMap.useEffect"]);
                            const htmlString = typeof icon.options.html === "string" ? icon.options.html : "";
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].polygon(latLngPolys, {
                                color: htmlString.includes("#3b82f6") ? "#3b82f6" : htmlString.includes("#ef4444") ? "#ef4444" : "#f97316",
                                weight: 1,
                                fillOpacity: 0.15
                            }).addTo(map);
                        }
                    }
                }["BuildingsMap.useEffect"]);
                clusterGroup.addTo(map);
                clusterGroupRef.current = clusterGroup;
            }
            // Auto-fit bounds if there are buildings
            if (buildings.length > 0) {
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
            }
            mapInstanceRef.current = map;
            return ({
                "BuildingsMap.useEffect": ()=>{
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                    heatLayerRef.current = null;
                    clusterGroupRef.current = null;
                }
            })["BuildingsMap.useEffect"];
        }
    }["BuildingsMap.useEffect"], [
        buildings,
        showHeatmap
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapRef,
        className: "h-full w-full"
    }, void 0, false, {
        fileName: "[project]/components/buildings-map.tsx",
        lineNumber: 221,
        columnNumber: 10
    }, this);
}
_s(BuildingsMap, "kKyaFD/4IqT05x6ohTPpEfee6X4=");
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