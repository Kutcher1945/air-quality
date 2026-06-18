(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/buildings-map-mapbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuildingsMapMapbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// ── Constants ──────────────────────────────────────────────────────────────────
const MAPBOX_TOKEN = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
const DEFAULT_CENTER = [
    76.945465,
    43.238293
];
const DEFAULT_ZOOM = 11;
const LIGHT_STYLE = "mapbox://styles/mapbox/streets-v12";
const DARK_STYLE = "mapbox://styles/mapbox/dark-v11";
const DISTRICT_COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#10b981",
    "#06b6d4",
    "#3b82f6",
    "#f97316",
    "#84cc16"
];
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
    'Спортивное сооружение'
];
// ── Color helpers ──────────────────────────────────────────────────────────────
function getBuildingColor(building, showOnlySeasonalUnused) {
    if (building.is_seasonal_or_unused && showOnlySeasonalUnused) return "#ec4899";
    const raw = (building.building_type_raw || "").trim();
    if (raw && IZHS_NON_RESIDENTIAL_TYPES.includes(raw)) return "#8b5cf6";
    if (building.is_approximate === true) return "#eab308";
    return "#10b981";
}
// ── GeoJSON helpers ────────────────────────────────────────────────────────────
function buildGeoJSON(buildings, showOnlySeasonalUnused) {
    return {
        type: "FeatureCollection",
        features: buildings.filter((b)=>b.latitude != null && b.longitude != null).map((b)=>({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [
                        b.longitude,
                        b.latitude
                    ]
                },
                properties: {
                    id: b.id,
                    color: getBuildingColor(b, showOnlySeasonalUnused)
                }
            }))
    };
}
function buildRenovationGeoJSON(renovationAreas) {
    return {
        type: "FeatureCollection",
        features: renovationAreas.filter((a)=>a.geometry != null).map((a)=>({
                type: "Feature",
                geometry: a.geometry,
                properties: {
                    id: a.id,
                    name: a.name_ru
                }
            }))
    };
}
function buildDistrictsGeoJSON(districts) {
    return {
        type: "FeatureCollection",
        features: districts.filter((d)=>d.geometry != null).map((d, i)=>({
                type: "Feature",
                geometry: d.geometry,
                properties: {
                    id: d.id,
                    name: d.name,
                    _color: DISTRICT_COLORS[i % DISTRICT_COLORS.length]
                }
            }))
    };
}
function BuildingsMapMapbox({ buildings, renovationAreas = [], districts = [], selectedDistrictId = null, showHeatmap = false, showRenovationAreas = false, showOnlySeasonalUnused = false, onBuildingClick, darkMode = false }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapReadyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const appliedStyleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const onBuildingClickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onBuildingClick);
    // Keep callback ref in sync — never access in render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            onBuildingClickRef.current = onBuildingClick;
        }
    }["BuildingsMapMapbox.useEffect"], [
        onBuildingClick
    ]);
    // ── addAllLayers — rebuilds all custom sources and layers on the current style
    const addAllLayers = (map, opts)=>{
        const { buildings: bldgs, renovationAreas: renAreas, districts: dists, selectedDistrictId: selDistId, showHeatmap: heat, showRenovationAreas: showRen, showOnlySeasonalUnused: onlySeasonal } = opts;
        // 1. Districts fill + line layers (same style as sensor map)
        map.addSource("districts", {
            type: "geojson",
            data: buildDistrictsGeoJSON(dists)
        });
        map.addLayer({
            id: "districts-fill",
            type: "fill",
            source: "districts",
            paint: {
                "fill-color": [
                    "get",
                    "_color"
                ],
                "fill-opacity": [
                    "case",
                    [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        selDistId ?? -1
                    ],
                    0.15,
                    0.07
                ]
            }
        });
        map.addLayer({
            id: "districts-line",
            type: "line",
            source: "districts",
            paint: {
                "line-color": [
                    "get",
                    "_color"
                ],
                "line-width": [
                    "case",
                    [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        selDistId ?? -1
                    ],
                    2.5,
                    1.5
                ],
                "line-opacity": 0.8
            }
        });
        // District name tooltip
        const districtPopup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
            closeButton: false,
            closeOnClick: false
        });
        map.on("mousemove", "districts-fill", (e)=>{
            const name = e.features?.[0]?.properties?.name;
            if (!name) return;
            districtPopup.setLngLat(e.lngLat).setHTML(`<span style="font-family:system-ui;font-size:12px;font-weight:600;color:#111">${name}</span>`).addTo(map);
        });
        map.on("mouseleave", "districts-fill", ()=>districtPopup.remove());
        // 2. Renovation areas fill + line layers
        map.addSource("renovation-areas", {
            type: "geojson",
            data: buildRenovationGeoJSON(renAreas)
        });
        map.addLayer({
            id: "renovation-fill",
            type: "fill",
            source: "renovation-areas",
            layout: {
                visibility: showRen ? "visible" : "none"
            },
            paint: {
                "fill-color": "#8b5cf6",
                "fill-opacity": 0.15
            }
        });
        map.addLayer({
            id: "renovation-line",
            type: "line",
            source: "renovation-areas",
            layout: {
                visibility: showRen ? "visible" : "none"
            },
            paint: {
                "line-color": "#8b5cf6",
                "line-width": 2,
                "line-opacity": 0.6
            }
        });
        // 3a. Vector tile source for heatmap (hundreds of thousands of small polygons from backend)
        map.addSource("buildings-heat-tiles", {
            type: "vector",
            tiles: [
                "https://admin.smartalmaty.kz/api/v1/address/gas-heatmap/tiles/{z}/{x}/{y}.pbf"
            ],
            maxzoom: 14
        });
        // 3b. Clustered source for marker layers
        map.addSource("buildings", {
            type: "geojson",
            data: buildGeoJSON(bldgs, onlySeasonal),
            cluster: true,
            clusterMaxZoom: 14,
            clusterRadius: 50
        });
        // 4. Buildings heatmap layer — polygon tiles colored by intensity property
        map.addLayer({
            id: "buildings-heat",
            type: "fill",
            source: "buildings-heat-tiles",
            "source-layer": "heatmap",
            layout: {
                visibility: heat ? "visible" : "none"
            },
            ...selDistId != null ? {
                filter: [
                    "==",
                    [
                        "get",
                        "district_id"
                    ],
                    selDistId
                ]
            } : {},
            paint: {
                "fill-color": [
                    "step",
                    [
                        "to-number",
                        [
                            "get",
                            "intensity"
                        ],
                        0
                    ],
                    "#22c55e",
                    1,
                    "#FFD700",
                    2,
                    "#f97316",
                    5,
                    "#cf7e88",
                    6,
                    "#ef4444",
                    21,
                    "#7f1d1d"
                ],
                "fill-opacity": 0.75
            }
        });
        const markerVis = heat ? "none" : "visible";
        // 5. Cluster circles layer (hidden when heatmap is active)
        map.addLayer({
            id: "clusters",
            type: "circle",
            source: "buildings",
            filter: [
                "has",
                "point_count"
            ],
            layout: {
                visibility: markerVis
            },
            paint: {
                "circle-color": "#f97316",
                "circle-radius": [
                    "step",
                    [
                        "get",
                        "point_count"
                    ],
                    20,
                    100,
                    28,
                    500,
                    36
                ],
                "circle-opacity": 0.9
            }
        });
        // 6. Cluster count label layer (hidden when heatmap is active)
        map.addLayer({
            id: "cluster-count",
            type: "symbol",
            source: "buildings",
            filter: [
                "has",
                "point_count"
            ],
            layout: {
                visibility: markerVis,
                "text-field": "{point_count_abbreviated}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-size": 11
            },
            paint: {
                "text-color": "#ffffff"
            }
        });
        // 7. Unclustered point circle layer (hidden when heatmap is active)
        map.addLayer({
            id: "unclustered-point",
            type: "circle",
            source: "buildings",
            filter: [
                "!",
                [
                    "has",
                    "point_count"
                ]
            ],
            layout: {
                visibility: markerVis
            },
            paint: {
                "circle-color": [
                    "get",
                    "color"
                ],
                "circle-radius": 5,
                "circle-stroke-width": 1.5,
                "circle-stroke-color": "#ffffff"
            }
        });
    };
    // ── Init map ──────────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            if (!containerRef.current || mapRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = MAPBOX_TOKEN;
            const initialStyle = LIGHT_STYLE;
            appliedStyleRef.current = initialStyle;
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: containerRef.current,
                style: initialStyle,
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM
            });
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl(), "top-left");
            // Capture current prop values at init time for the closure
            const initBuildings = buildings;
            const initRenovationAreas = renovationAreas;
            const initDistricts = districts;
            const initSelectedDistrictId = selectedDistrictId;
            const initShowHeatmap = showHeatmap;
            const initShowRenovationAreas = showRenovationAreas;
            const initShowOnlySeasonalUnused = showOnlySeasonalUnused;
            map.once("style.load", {
                "BuildingsMapMapbox.useEffect": ()=>{
                    mapReadyRef.current = true;
                    addAllLayers(map, {
                        buildings: initBuildings,
                        renovationAreas: initRenovationAreas,
                        districts: initDistricts,
                        selectedDistrictId: initSelectedDistrictId,
                        showHeatmap: initShowHeatmap,
                        showRenovationAreas: initShowRenovationAreas,
                        showOnlySeasonalUnused: initShowOnlySeasonalUnused
                    });
                }
            }["BuildingsMapMapbox.useEffect"]);
            // Cluster click — zoom in
            map.on("click", "clusters", {
                "BuildingsMapMapbox.useEffect": (e)=>{
                    const features = map.queryRenderedFeatures(e.point, {
                        layers: [
                            "clusters"
                        ]
                    });
                    if (!features.length) return;
                    const clusterId = features[0].properties?.cluster_id;
                    const source = map.getSource("buildings");
                    source.getClusterExpansionZoom(clusterId, {
                        "BuildingsMapMapbox.useEffect": (err, zoom)=>{
                            if (err || zoom == null) return;
                            const geometry = features[0].geometry;
                            map.easeTo({
                                center: geometry.coordinates,
                                zoom
                            });
                        }
                    }["BuildingsMapMapbox.useEffect"]);
                }
            }["BuildingsMapMapbox.useEffect"]);
            // Unclustered point click — find building and call handler
            map.on("click", "unclustered-point", {
                "BuildingsMapMapbox.useEffect": (e)=>{
                    const features = map.queryRenderedFeatures(e.point, {
                        layers: [
                            "unclustered-point"
                        ]
                    });
                    if (!features.length) return;
                    const id = features[0].properties?.id;
                    // Access via ref to always use latest buildings array
                    const building = buildingsRef.current.find({
                        "BuildingsMapMapbox.useEffect.building": (b)=>b.id === id
                    }["BuildingsMapMapbox.useEffect.building"]);
                    if (building) {
                        onBuildingClickRef.current?.(building);
                    }
                }
            }["BuildingsMapMapbox.useEffect"]);
            // Pointer cursors
            map.on("mouseenter", "clusters", {
                "BuildingsMapMapbox.useEffect": ()=>{
                    map.getCanvas().style.cursor = "pointer";
                }
            }["BuildingsMapMapbox.useEffect"]);
            map.on("mouseleave", "clusters", {
                "BuildingsMapMapbox.useEffect": ()=>{
                    map.getCanvas().style.cursor = "";
                }
            }["BuildingsMapMapbox.useEffect"]);
            map.on("mouseenter", "unclustered-point", {
                "BuildingsMapMapbox.useEffect": ()=>{
                    map.getCanvas().style.cursor = "pointer";
                }
            }["BuildingsMapMapbox.useEffect"]);
            map.on("mouseleave", "unclustered-point", {
                "BuildingsMapMapbox.useEffect": ()=>{
                    map.getCanvas().style.cursor = "";
                }
            }["BuildingsMapMapbox.useEffect"]);
            mapRef.current = map;
            return ({
                "BuildingsMapMapbox.useEffect": ()=>{
                    map.remove();
                    mapRef.current = null;
                    mapReadyRef.current = false;
                }
            })["BuildingsMapMapbox.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BuildingsMapMapbox.useEffect"], []);
    // Keep a ref to the latest buildings array so click handlers can look up by id
    const buildingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(buildings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            buildingsRef.current = buildings;
        }
    }["BuildingsMapMapbox.useEffect"], [
        buildings
    ]);
    // ── Dark / light theme switching ──────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            const map = mapRef.current;
            if (!map || !mapReadyRef.current) return;
            const style = darkMode ? DARK_STYLE : LIGHT_STYLE;
            if (appliedStyleRef.current === style) return;
            appliedStyleRef.current = style;
            mapReadyRef.current = false;
            // Snapshot current props for the once-handler closure
            const snapBuildings = buildings;
            const snapRenovationAreas = renovationAreas;
            const snapDistricts = districts;
            const snapSelectedDistrictId = selectedDistrictId;
            const snapShowHeatmap = showHeatmap;
            const snapShowRenovationAreas = showRenovationAreas;
            const snapShowOnlySeasonalUnused = showOnlySeasonalUnused;
            map.setStyle(style);
            map.once("style.load", {
                "BuildingsMapMapbox.useEffect": ()=>{
                    mapReadyRef.current = true;
                    addAllLayers(map, {
                        buildings: snapBuildings,
                        renovationAreas: snapRenovationAreas,
                        districts: snapDistricts,
                        selectedDistrictId: snapSelectedDistrictId,
                        showHeatmap: snapShowHeatmap,
                        showRenovationAreas: snapShowRenovationAreas,
                        showOnlySeasonalUnused: snapShowOnlySeasonalUnused
                    });
                }
            }["BuildingsMapMapbox.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BuildingsMapMapbox.useEffect"], [
        darkMode
    ]);
    // ── Buildings data update ─────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            const map = mapRef.current;
            if (!map || !mapReadyRef.current) return;
            try {
                ;
                map.getSource("buildings")?.setData(buildGeoJSON(buildings, showOnlySeasonalUnused));
            } catch  {
            // source not yet added (style still loading) — ignore
            }
        }
    }["BuildingsMapMapbox.useEffect"], [
        buildings,
        showOnlySeasonalUnused
    ]);
    // ── Renovation areas data update ──────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            const map = mapRef.current;
            if (!map || !mapReadyRef.current) return;
            try {
                const src = map.getSource("renovation-areas");
                src?.setData(buildRenovationGeoJSON(renovationAreas));
            } catch  {
            // ignore
            }
        }
    }["BuildingsMapMapbox.useEffect"], [
        renovationAreas
    ]);
    // ── Heatmap visibility toggle (also hides/shows building markers) ─────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            const map = mapRef.current;
            if (!map || !mapReadyRef.current) return;
            try {
                const heatVis = showHeatmap ? "visible" : "none";
                const markerVis = showHeatmap ? "none" : "visible";
                map.setLayoutProperty("buildings-heat", "visibility", heatVis);
                map.setLayoutProperty("clusters", "visibility", markerVis);
                map.setLayoutProperty("cluster-count", "visibility", markerVis);
                map.setLayoutProperty("unclustered-point", "visibility", markerVis);
            } catch  {
            // ignore
            }
        }
    }["BuildingsMapMapbox.useEffect"], [
        showHeatmap
    ]);
    // ── Renovation areas visibility toggle ───────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            const map = mapRef.current;
            if (!map || !mapReadyRef.current) return;
            try {
                const vis = showRenovationAreas ? "visible" : "none";
                map.setLayoutProperty("renovation-fill", "visibility", vis);
                map.setLayoutProperty("renovation-line", "visibility", vis);
            } catch  {
            // ignore
            }
        }
    }["BuildingsMapMapbox.useEffect"], [
        showRenovationAreas
    ]);
    // ── Selected district highlight ───────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsMapMapbox.useEffect": ()=>{
            const map = mapRef.current;
            if (!map || !mapReadyRef.current) return;
            try {
                map.setPaintProperty("districts-line", "line-width", [
                    "case",
                    [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        selectedDistrictId ?? -1
                    ],
                    2.5,
                    1.5
                ]);
                map.setPaintProperty("districts-fill", "fill-opacity", [
                    "case",
                    [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        selectedDistrictId ?? -1
                    ],
                    0.15,
                    0.07
                ]);
                // Filter heatmap polygons to the selected district (or show all)
                if (map.getLayer("buildings-heat")) {
                    map.setFilter("buildings-heat", selectedDistrictId != null ? [
                        "==",
                        [
                            "get",
                            "district_id"
                        ],
                        selectedDistrictId
                    ] : null);
                }
            } catch  {
            // ignore
            }
        }
    }["BuildingsMapMapbox.useEffect"], [
        selectedDistrictId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "h-full w-full rounded-xl"
        }, void 0, false, {
            fileName: "[project]/components/buildings-map-mapbox.tsx",
            lineNumber: 617,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/buildings-map-mapbox.tsx",
        lineNumber: 616,
        columnNumber: 5
    }, this);
}
_s(BuildingsMapMapbox, "Ankyyt9ClRSTecDdTUVNEynWO64=");
_c = BuildingsMapMapbox;
var _c;
__turbopack_context__.k.register(_c, "BuildingsMapMapbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/buildings-map-mapbox.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/buildings-map-mapbox.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_buildings-map-mapbox_tsx_34f74a2f._.js.map