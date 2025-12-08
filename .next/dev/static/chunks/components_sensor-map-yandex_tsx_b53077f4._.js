(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SensorMapYandex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2e$markercluster$2f$dist$2f$leaflet$2e$markercluster$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet.markercluster/dist/leaflet.markercluster.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const DEFAULT_CENTER = [
    43.238949,
    76.889709
] // Almaty
;
const YANDEX_TILE_URL = "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&lang=ru_RU";
// Fix Leaflet default marker icon issue
delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});
// Color mapping for different suppliers (Поставщик)
const getSupplierColor = (district)=>{
    if (!district) return "#6b7280" // Gray for unknown
    ;
    // Create consistent colors based on district name
    const colors = {
        "Алатауский район": "#3b82f6",
        "Алмалинский район": "#10b981",
        "Ауэзовский район": "#f59e0b",
        "Бостандыкский район": "#8b5cf6",
        "Жетысуский район": "#ef4444",
        "Медеуский район": "#ec4899",
        "Наурызбайский район": "#f97316",
        "Турксибский район": "#06b6d4",
        "АО АЛМАТЫ": "#14b8a6",
        "ГУ Алатауский район": "#3b82f6",
        "ГУ Алмалинский район": "#10b981",
        "ГУ Ауэзовский район": "#f59e0b",
        "ГУ Бостандыкский район": "#8b5cf6",
        "ГУ Жетысуский район": "#ef4444",
        "ГУ Медеуский район": "#ec4899",
        "ГУ Наурызбайский район": "#f97316",
        "ГУ Турксибский район": "#06b6d4"
    };
    // Check for exact match
    if (colors[district]) return colors[district];
    // Check for partial match (e.g., if district contains a keyword)
    for (const [key, value] of Object.entries(colors)){
        if (district.includes(key) || key.includes(district)) {
            return value;
        }
    }
    // Fallback: generate color from string hash for consistency
    let hash = 0;
    for(let i = 0; i < district.length; i++){
        hash = district.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 50%)`;
};
// Get PM2.5 quality indicator (for border color or accent)
const getPM25Quality = (pm25)=>{
    if (pm25 === null || pm25 === undefined) return "gray";
    if (pm25 <= 15) return "good";
    if (pm25 <= 35) return "moderate";
    if (pm25 <= 55) return "sensitive";
    if (pm25 <= 150) return "unhealthy";
    if (pm25 <= 250) return "very-unhealthy";
    return "hazardous";
};
// Get supplier abbreviation from first letters of each word
const getSupplierAbbreviation = (district)=>{
    if (!district) return "?";
    // Special cases for known suppliers
    const specialCases = {
        "AirGradient": "AG",
        "AirKaz": "AK",
        "Citizen Science project sensor.community": "CS",
        "Clarity Node": "CN",
        "IQAir": "IQ",
        "OpenAQ": "OA",
        "PurpleAir": "PA",
        "Reference Site": "RS"
    };
    // Check for exact match in special cases
    if (specialCases[district]) return specialCases[district];
    // Check for partial match
    for (const [key, value] of Object.entries(specialCases)){
        if (district.includes(key) || key.includes(district)) {
            return value;
        }
    }
    // Generate abbreviation from first letters of each word
    const words = district.split(/[\s-]+/).filter((w)=>w.length > 0);
    if (words.length === 0) return "?";
    if (words.length === 1) {
        // Single word: take first 2-3 letters
        return words[0].substring(0, 2).toUpperCase();
    }
    // Multiple words: take first letter of each word (max 3 letters)
    return words.slice(0, 3).map((w)=>w[0]).join("").toUpperCase();
};
// Create teardrop marker icon colored by supplier
const createSensorIcon = (sensor)=>{
    const metric = sensor.latest_measurement;
    const color = getSupplierColor(sensor.district);
    const abbreviation = getSupplierAbbreviation(sensor.district);
    const quality = getPM25Quality(metric?.pm25);
    // Border color based on air quality
    const borderColors = {
        good: "#1BA97C",
        moderate: "#f59e0b",
        sensitive: "#f97316",
        unhealthy: "#ef4444",
        "very-unhealthy": "#a855f7",
        hazardous: "#581c87",
        gray: "#ffffff"
    };
    const borderColor = borderColors[quality] || "#ffffff";
    // Adjust font size based on abbreviation length
    const fontSize = abbreviation.length <= 2 ? "12px" : "10px";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
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
        iconSize: [
            36,
            36
        ],
        iconAnchor: [
            18,
            36
        ],
        popupAnchor: [
            0,
            -36
        ]
    });
};
function SensorMapYandex({ sensors }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clusterGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAutoFitted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Filter sensors with valid coordinates
    const validSensors = sensors.filter((sensor)=>sensor.latitude !== null && sensor.latitude !== undefined && sensor.longitude !== null && sensor.longitude !== undefined);
    // Initialize map only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !mapRef.current || mapInstanceRef.current) return;
            // Create Leaflet map with EPSG:3395 CRS for Yandex tiles
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                crs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CRS.EPSG3395,
                center: DEFAULT_CENTER,
                zoom: 11,
                preferCanvas: true,
                zoomAnimation: true
            });
            // Add Yandex tiles layer
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer(YANDEX_TILE_URL, {
                attribution: '&copy; <a href="https://yandex.com/maps/">Yandex</a>',
                maxZoom: 18,
                minZoom: 0
            }).addTo(map);
            mapInstanceRef.current = map;
            return ({
                "SensorMapYandex.useEffect": ()=>{
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                }
            })["SensorMapYandex.useEffect"];
        }
    }["SensorMapYandex.useEffect"], []);
    // Update markers when sensors change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SensorMapYandex.useEffect": ()=>{
            if (!mapInstanceRef.current || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const map = mapInstanceRef.current;
            // Clear existing cluster group
            if (clusterGroupRef.current) {
                map.removeLayer(clusterGroupRef.current);
                clusterGroupRef.current = null;
            }
            if (validSensors.length === 0) return;
            // Create marker cluster group with custom styling
            // @ts-ignore markercluster is attached to L by side-effect import
            const clusterGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].markerClusterGroup({
                disableClusteringAtZoom: 16,
                chunkedLoading: true,
                spiderfyOnMaxZoom: true,
                showCoverageOnHover: false,
                maxClusterRadius: 60,
                removeOutsideVisibleBounds: true,
                animate: true,
                animateAddingMarkers: false,
                iconCreateFunction: {
                    "SensorMapYandex.useEffect.clusterGroup": function(cluster) {
                        const markers = cluster.getAllChildMarkers();
                        const count = markers.length;
                        // Count sensors by supplier and calculate avg PM2.5
                        const supplierCounts = {};
                        let totalPM25 = 0;
                        let validPM25Count = 0;
                        markers.forEach({
                            "SensorMapYandex.useEffect.clusterGroup": (marker)=>{
                                const sensor = marker.options.sensorData;
                                const supplier = sensor?.district || "Unknown";
                                supplierCounts[supplier] = (supplierCounts[supplier] || 0) + 1;
                                if (sensor?.latest_measurement?.pm25 != null) {
                                    totalPM25 += sensor.latest_measurement.pm25;
                                    validPM25Count++;
                                }
                            }
                        }["SensorMapYandex.useEffect.clusterGroup"]);
                        // Find dominant supplier
                        let dominantSupplier = "Unknown";
                        let maxCount = 0;
                        for (const [supplier, count] of Object.entries(supplierCounts)){
                            if (count > maxCount) {
                                dominantSupplier = supplier;
                                maxCount = count;
                            }
                        }
                        const color = getSupplierColor(dominantSupplier);
                        const avgPM25 = validPM25Count > 0 ? totalPM25 / validPM25Count : undefined;
                        const quality = getPM25Quality(avgPM25);
                        // Border color based on air quality
                        const borderColors = {
                            good: "#1BA97C",
                            moderate: "#f59e0b",
                            sensitive: "#f97316",
                            unhealthy: "#ef4444",
                            "very-unhealthy": "#a855f7",
                            hazardous: "#581c87",
                            gray: "#ffffff"
                        };
                        const borderColor = borderColors[quality] || "#ffffff";
                        // Size based on count
                        let size = "small";
                        if (count >= 50) size = "large";
                        else if (count >= 20) size = "medium";
                        const sizeMap = {
                            small: "44px",
                            medium: "54px",
                            large: "64px"
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
                            iconSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].point(parseInt(sizeMap[size]), parseInt(sizeMap[size]))
                        });
                    }
                }["SensorMapYandex.useEffect.clusterGroup"]
            });
            // Add markers to cluster group
            validSensors.forEach({
                "SensorMapYandex.useEffect": (sensor)=>{
                    const icon = createSensorIcon(sensor);
                    const metric = sensor.latest_measurement;
                    const supplierColor = getSupplierColor(sensor.district);
                    const quality = getPM25Quality(metric?.pm25);
                    // PM2.5 quality colors
                    const qualityColors = {
                        good: "#1BA97C",
                        moderate: "#f59e0b",
                        sensitive: "#f97316",
                        unhealthy: "#ef4444",
                        "very-unhealthy": "#a855f7",
                        hazardous: "#581c87",
                        gray: "#6b7280"
                    };
                    const pm25Color = qualityColors[quality] || "#6b7280";
                    const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                        sensor.latitude,
                        sensor.longitude
                    ], {
                        icon,
                        sensorData: sensor
                    }).bindPopup(`
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
      `);
                    clusterGroup.addLayer(marker);
                }
            }["SensorMapYandex.useEffect"]);
            // Add hover tooltips to clusters
            clusterGroup.on("clustermouseover", {
                "SensorMapYandex.useEffect": function(event) {
                    const cluster = event.layer;
                    const markers = cluster.getAllChildMarkers();
                    let totalPM25 = 0;
                    let validCount = 0;
                    markers.forEach({
                        "SensorMapYandex.useEffect": (marker)=>{
                            const sensor = marker.options.sensorData;
                            if (sensor?.latest_measurement?.pm25 != null) {
                                totalPM25 += sensor.latest_measurement.pm25;
                                validCount++;
                            }
                        }
                    }["SensorMapYandex.useEffect"]);
                    const avgPM25 = validCount > 0 ? (totalPM25 / validCount).toFixed(1) : "—";
                    const tooltipContent = `
        <div style="padding: 8px; background: white; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
          <p style="margin: 0; font-size: 12px; font-weight: bold;">Кластер: ${markers.length} сенсоров</p>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #6b7280;">Средний PM2.5: ${avgPM25}</p>
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
            }["SensorMapYandex.useEffect"]);
            clusterGroup.on("clustermouseout", {
                "SensorMapYandex.useEffect": function(event) {
                    event.layer.closeTooltip();
                }
            }["SensorMapYandex.useEffect"]);
            clusterGroup.addTo(map);
            clusterGroupRef.current = clusterGroup;
            // Auto-fit bounds only on first load
            if (validSensors.length > 0 && !hasAutoFitted.current) {
                const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].latLngBounds(validSensors.map({
                    "SensorMapYandex.useEffect.bounds": (s)=>[
                            s.latitude,
                            s.longitude
                        ]
                }["SensorMapYandex.useEffect.bounds"]));
                map.fitBounds(bounds, {
                    padding: [
                        50,
                        50
                    ]
                });
                hasAutoFitted.current = true;
            }
        }
    }["SensorMapYandex.useEffect"], [
        validSensors
    ]);
    if (validSensors.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",
            children: "Нет данных по сенсорам для отображения"
        }, void 0, false, {
            fileName: "[project]/components/sensor-map-yandex.tsx",
            lineNumber: 451,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mapRef,
        className: "h-full w-full rounded-xl"
    }, void 0, false, {
        fileName: "[project]/components/sensor-map-yandex.tsx",
        lineNumber: 457,
        columnNumber: 10
    }, this);
}
_s(SensorMapYandex, "FnPJONwZEtQRwUQTk4fULUo7PnM=");
_c = SensorMapYandex;
var _c;
__turbopack_context__.k.register(_c, "SensorMapYandex");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_sensor-map-yandex_tsx_b53077f4._.js.map