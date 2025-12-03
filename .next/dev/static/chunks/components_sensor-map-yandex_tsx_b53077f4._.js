(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SensorMapYandex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/CircleMarker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Popup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const getMarkerColor = (pm25)=>{
    if (pm25 === null || pm25 === undefined) return "#6b7280";
    if (pm25 <= 15) return "#1BA97C";
    if (pm25 <= 35) return "#f59e0b";
    if (pm25 <= 55) return "#f97316";
    if (pm25 <= 150) return "#ef4444";
    if (pm25 <= 250) return "#a855f7";
    return "#581c87";
};
function SensorMapYandex({ sensors }) {
    _s();
    const [dailyStats, setDailyStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingIds, setLoadingIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SensorMapYandex.useMemo[markers]": ()=>sensors.filter({
                "SensorMapYandex.useMemo[markers]": (sensor)=>sensor.latitude !== null && sensor.latitude !== undefined && sensor.longitude !== null && sensor.longitude !== undefined
            }["SensorMapYandex.useMemo[markers]"])
    }["SensorMapYandex.useMemo[markers]"], [
        sensors
    ]);
    const fetchDailyStat = async (sensorId)=>{
        if (!sensorId) return;
        if (dailyStats[sensorId] !== undefined) return;
        if (loadingIds.has(sensorId)) return;
        const nextLoading = new Set(loadingIds);
        nextLoading.add(sensorId);
        setLoadingIds(nextLoading);
        try {
            const resp = await fetch(`https://api.air.org.kz/api/stats/daily?station_id=${sensorId}`);
            if (!resp.ok) throw new Error(`Failed ${resp.status}`);
            const data = await resp.json();
            const first = Array.isArray(data) ? data[0] : data?.[0] || data;
            const stat = {
                pm25: first?.pm25 ?? first?.avg_pm25 ?? first?.value,
                no2: first?.no2,
                datetime: first?.datetime || first?.date
            };
            setDailyStats((prev)=>({
                    ...prev,
                    [sensorId]: stat
                }));
        } catch (_err) {
            setDailyStats((prev)=>({
                    ...prev,
                    [sensorId]: null
                }));
        } finally{
            const updated = new Set(nextLoading);
            updated.delete(sensorId);
            setLoadingIds(updated);
        }
    };
    if (!markers.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[480px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground",
            children: "Нет данных по сенсорам для отображения"
        }, void 0, false, {
            fileName: "[project]/components/sensor-map-yandex.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        center: DEFAULT_CENTER,
        zoom: 11,
        scrollWheelZoom: true,
        crs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRS"].EPSG3395,
        className: "h-[480px] w-full rounded-xl border border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                attribution: "© Yandex",
                url: YANDEX_TILE_URL,
                maxZoom: 18,
                minZoom: 0
            }, void 0, false, {
                fileName: "[project]/components/sensor-map-yandex.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            markers.map((sensor)=>{
                const metric = sensor.latest_measurement;
                const color = getMarkerColor(metric?.pm25);
                const coords = [
                    Number(sensor.latitude),
                    Number(sensor.longitude)
                ];
                const sensorKey = sensor.sensor_id.toString();
                const currentDaily = dailyStats[sensorKey];
                const isLoadingDaily = loadingIds.has(sensorKey);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$CircleMarker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleMarker"], {
                    center: coords,
                    radius: 10,
                    pathOptions: {
                        color,
                        fillColor: color,
                        fillOpacity: 0.85,
                        weight: 2
                    },
                    eventHandlers: {
                        click: ()=>fetchDailyStat(sensorKey),
                        popupopen: ()=>fetchDailyStat(sensorKey)
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Popup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popup"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-foreground",
                                    children: sensor.name || "Станция"
                                }, void 0, false, {
                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                sensor.district && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: [
                                        "Поставщик: ",
                                        sensor.district
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                    lineNumber: 134,
                                    columnNumber: 37
                                }, this),
                                metric ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        metric.pm25 !== null && metric.pm25 !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "PM2.5: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: metric.pm25
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sensor-map-yandex.tsx",
                                            lineNumber: 138,
                                            columnNumber: 23
                                        }, this),
                                        metric.no2 !== null && metric.no2 !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "NO2: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: metric.no2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sensor-map-yandex.tsx",
                                            lineNumber: 143,
                                            columnNumber: 23
                                        }, this),
                                        metric.datetime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "Обновлено: ",
                                                new Date(metric.datetime).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sensor-map-yandex.tsx",
                                            lineNumber: 147,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: "Нет свежих измерений (подгружаем суточные)"
                                }, void 0, false, {
                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                    lineNumber: 150,
                                    columnNumber: 19
                                }, this),
                                isLoadingDaily && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Подгружаем суточные данные…"
                                }, void 0, false, {
                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                    lineNumber: 152,
                                    columnNumber: 36
                                }, this),
                                !isLoadingDaily && currentDaily === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: "Суточные данные отсутствуют"
                                }, void 0, false, {
                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                    lineNumber: 154,
                                    columnNumber: 19
                                }, this),
                                !isLoadingDaily && currentDaily && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        currentDaily.pm25 !== undefined && currentDaily.pm25 !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Текущее (api/stats/daily): ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: currentDaily.pm25
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 52
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sensor-map-yandex.tsx",
                                            lineNumber: 159,
                                            columnNumber: 23
                                        }, this),
                                        currentDaily.no2 !== undefined && currentDaily.no2 !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "NO2 (суточн.): ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: currentDaily.no2
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sensor-map-yandex.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sensor-map-yandex.tsx",
                                            lineNumber: 164,
                                            columnNumber: 23
                                        }, this),
                                        currentDaily.datetime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "Обновлено (api/stats/daily): ",
                                                new Date(currentDaily.datetime).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sensor-map-yandex.tsx",
                                            lineNumber: 169,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sensor-map-yandex.tsx",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sensor-map-yandex.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this)
                }, sensorKey, false, {
                    fileName: "[project]/components/sensor-map-yandex.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/sensor-map-yandex.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s(SensorMapYandex, "CMvq2pL1m/FVPI+K5t/FUzjEJuQ=");
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