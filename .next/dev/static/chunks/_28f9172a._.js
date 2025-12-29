(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/buildingsCache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// IndexedDB cache for buildings data
__turbopack_context__.s([
    "clearBuildingsCache",
    ()=>clearBuildingsCache,
    "getBuildingsFromCache",
    ()=>getBuildingsFromCache,
    "saveBuildingsToCache",
    ()=>saveBuildingsToCache
]);
const DB_NAME = "BuildingsCache";
const STORE_NAME = "buildings";
const DB_VERSION = 1;
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
;
// Open or create IndexedDB
function openDB() {
    return new Promise((resolve, reject)=>{
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = ()=>reject(request.error);
        request.onsuccess = ()=>resolve(request.result);
        request.onupgradeneeded = (event)=>{
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
    });
}
async function saveBuildingsToCache(data) {
    try {
        const db = await openDB();
        const transaction = db.transaction([
            STORE_NAME
        ], "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        const cachedData = {
            timestamp: Date.now(),
            data: data
        };
        store.put(cachedData, "buildingsData");
        return new Promise((resolve, reject)=>{
            transaction.oncomplete = ()=>{
                db.close();
                resolve();
            };
            transaction.onerror = ()=>reject(transaction.error);
        });
    } catch (error) {
        console.error("Failed to save to cache:", error);
    }
}
async function getBuildingsFromCache() {
    try {
        const db = await openDB();
        const transaction = db.transaction([
            STORE_NAME
        ], "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get("buildingsData");
        return new Promise((resolve, reject)=>{
            request.onsuccess = ()=>{
                db.close();
                const cachedData = request.result;
                if (!cachedData) {
                    resolve(null);
                    return;
                }
                // Check if cache is still valid (within 24 hours)
                const age = Date.now() - cachedData.timestamp;
                if (age > CACHE_DURATION) {
                    console.log("Cache expired, will fetch fresh data");
                    resolve(null);
                    return;
                }
                console.log(`Cache hit! Data is ${Math.round(age / 1000 / 60)} minutes old`);
                resolve(cachedData.data);
            };
            request.onerror = ()=>{
                db.close();
                reject(request.error);
            };
        });
    } catch (error) {
        console.error("Failed to read from cache:", error);
        return null;
    }
}
async function clearBuildingsCache() {
    try {
        const db = await openDB();
        const transaction = db.transaction([
            STORE_NAME
        ], "readwrite");
        const store = transaction.objectStore(STORE_NAME);
        store.delete("buildingsData");
        return new Promise((resolve, reject)=>{
            transaction.oncomplete = ()=>{
                db.close();
                console.log("Cache cleared");
                resolve();
            };
            transaction.onerror = ()=>reject(transaction.error);
        });
    } catch (error) {
        console.error("Failed to clear cache:", error);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/buildings-without-gas/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BuildingsWithoutGasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildingsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/buildingsCache.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Динамически загружаем карту для избежания SSR проблем
const BuildingsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/buildings-map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/buildings-map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = BuildingsMap;
const DISTRICT_LABELS = {
    "1": "Алатауский район",
    "2": "Алмалинский район",
    "3": "Ауэзовский район",
    "4": "Бостандыкский район",
    "5": "Жетысуский район",
    "6": "Медеуский район",
    "7": "Наурызбайский район",
    "8": "Турксибский район"
};
function BuildingsWithoutGasPage() {
    _s();
    const [buildings, setBuildings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [renovationAreas, setRenovationAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingProgress, setLoadingProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loaded: 0,
        total: 0,
        status: ""
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [districtFilter, setDistrictFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [buildingTypeFilter, setBuildingTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all") // all, izhs, susn
    ;
    const [showHeatmap, setShowHeatmap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRenovationAreas, setShowRenovationAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedBuilding, setSelectedBuilding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSidePanel, setShowSidePanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [yearFilter, setYearFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [floorsFilter, setFloorsFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [apartmentsFilter, setApartmentsFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAdvancedFilters, setShowAdvancedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHelp, setShowHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDistrictId, setSelectedDistrictId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsWithoutGasPage.useEffect": ()=>{
            fetchBuildings();
            fetchRenovationAreas();
            fetchDistricts();
        }
    }["BuildingsWithoutGasPage.useEffect"], []);
    const handleBuildingClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BuildingsWithoutGasPage.useCallback[handleBuildingClick]": (building)=>{
            setSelectedBuilding(building);
            setShowSidePanel(true);
        }
    }["BuildingsWithoutGasPage.useCallback[handleBuildingClick]"], []);
    const handleDistrictFilterChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]": (districtName)=>{
            setDistrictFilter(districtName);
            // Find the district ID from the name
            if (districtName === "all") {
                setSelectedDistrictId(null);
            } else {
                // Find district ID by matching name in DISTRICT_LABELS
                const districtId = Object.entries(DISTRICT_LABELS).find({
                    "BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]": ([_, name])=>name === districtName
                }["BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]"])?.[0];
                if (districtId) {
                    setSelectedDistrictId(parseInt(districtId));
                } else {
                    setSelectedDistrictId(null);
                }
            }
        }
    }["BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]"], []);
    const fetchBuildings = async (forceRefresh = false)=>{
        try {
            setLoading(true);
            setError(null);
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: "Проверка кэша..."
            });
            // Try to get data from cache first (unless force refresh)
            if (!forceRefresh) {
                const cachedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildingsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBuildingsFromCache"])();
                if (cachedData && cachedData.length > 0) {
                    console.log("💾 Loading from cache:", cachedData.length, "buildings");
                    setLoadingProgress({
                        loaded: 0,
                        total: cachedData.length,
                        status: "Загрузка из кэша..."
                    });
                    // Show progress animation
                    await new Promise((resolve)=>setTimeout(resolve, 300));
                    setLoadingProgress({
                        loaded: cachedData.length,
                        total: cachedData.length,
                        status: "Обработка данных..."
                    });
                    const buildingsData = transformBuildingsData(cachedData);
                    console.log("🏢 Transformed from cache:", {
                        total: buildingsData.length,
                        byCategory: {
                            general: buildingsData.filter((b)=>b.building_category === "general").length,
                            izhs: buildingsData.filter((b)=>b.building_category === "izhs").length,
                            susn: buildingsData.filter((b)=>b.building_category === "susn").length
                        }
                    });
                    await new Promise((resolve)=>setTimeout(resolve, 200));
                    setLoadingProgress({
                        loaded: buildingsData.length,
                        total: buildingsData.length,
                        status: "Готово!"
                    });
                    setBuildings(buildingsData);
                    await new Promise((resolve)=>setTimeout(resolve, 300));
                    setLoading(false);
                    return;
                }
            }
            console.log("📡 Fetching from API...");
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: "Подключение к серверу..."
            });
            // Show intermediate messages and simulate progress for long fetch
            const updateMessages = [
                {
                    delay: 1500,
                    status: "Отправка запроса..."
                },
                {
                    delay: 3000,
                    status: "Загрузка данных (~50,000 объектов)..."
                },
                {
                    delay: 5000,
                    status: "Получение данных с сервера..."
                },
                {
                    delay: 7000,
                    status: "Обработка большого объема данных..."
                },
                {
                    delay: 10000,
                    status: "Почти готово, еще немного..."
                },
                {
                    delay: 13000,
                    status: "Завершение загрузки..."
                }
            ];
            const timeouts = updateMessages.map(({ delay, status })=>setTimeout(()=>setLoadingProgress({
                        loaded: 0,
                        total: 0,
                        status
                    }), delay));
            // ✅ Fetch from combined all-sources endpoint (returns all categories pre-labeled)
            const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/buildings-without-gas/all-sources/");
            // Clear all timeouts
            timeouts.forEach(clearTimeout);
            if (!response.ok) {
                throw new Error(`API returned ${response.status}`);
            }
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: "Получение данных..."
            });
            const data = await response.json();
            const apiBuildings = data.data || data;
            console.log("📊 API Response:", {
                totalFromAPI: apiBuildings?.length || 0,
                sampleData: apiBuildings?.[0]
            });
            await new Promise((resolve)=>setTimeout(resolve, 200));
            setLoadingProgress({
                loaded: apiBuildings.length,
                total: apiBuildings.length,
                status: "Обработка данных..."
            });
            // Save raw API data to cache for next time
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildingsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveBuildingsToCache"])(apiBuildings);
            await new Promise((resolve)=>setTimeout(resolve, 200));
            setLoadingProgress({
                loaded: apiBuildings.length,
                total: apiBuildings.length,
                status: "Трансформация данных..."
            });
            // Transform API response to match component interface
            const buildingsData = transformBuildingsData(apiBuildings);
            console.log("🏢 Transformed Buildings:", {
                total: buildingsData.length,
                withCoordinates: buildingsData.filter((b)=>b.latitude && b.longitude).length,
                byCategory: {
                    general: buildingsData.filter((b)=>b.building_category === "general").length,
                    izhs: buildingsData.filter((b)=>b.building_category === "izhs").length,
                    susn: buildingsData.filter((b)=>b.building_category === "susn").length
                }
            });
            console.log("📍 Map will display:", buildingsData.length, "markers");
            await new Promise((resolve)=>setTimeout(resolve, 200));
            setLoadingProgress({
                loaded: buildingsData.length,
                total: buildingsData.length,
                status: "Готово!"
            });
            setBuildings(buildingsData);
            await new Promise((resolve)=>setTimeout(resolve, 300));
        } catch (error) {
            console.error("Failed to fetch buildings from API:", error);
            setError("Не удалось загрузить данные из API");
            setBuildings(getMockBuildings());
        } finally{
            setLoading(false);
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: ""
            });
        }
    };
    const fetchRenovationAreas = async ()=>{
        try {
            console.log("📡 Fetching renovation areas...");
            const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/renovation-areas/");
            if (!response.ok) {
                throw new Error(`Renovation areas API returned ${response.status}`);
            }
            const data = await response.json();
            console.log("🏗️ Renovation areas fetched:", data);
            // Handle GeoJSON FeatureCollection format from DRF GeoFeatureModelSerializer
            let features = [];
            if (data.results && data.results.type === 'FeatureCollection') {
                // Paginated GeoJSON response
                features = data.results.features || [];
            } else if (data.type === 'FeatureCollection') {
                // Direct GeoJSON FeatureCollection
                features = data.features || [];
            } else if (Array.isArray(data)) {
                // Direct array
                features = data;
            } else if (data.results && Array.isArray(data.results)) {
                // Paginated array
                features = data.results;
            }
            console.log("📍 Processing", features.length, "renovation area features");
            // Transform GeoJSON features
            const transformedAreas = features.map((area)=>{
                if (area.type === 'Feature') {
                    // GeoJSON Feature format
                    return {
                        id: area.id || area.properties?.id,
                        name_ru: area.properties?.name_ru,
                        name_kz: area.properties?.name_kz,
                        address: area.properties?.address,
                        number_of_houses: area.properties?.number_of_houses,
                        number_of_apartments: area.properties?.number_of_apartments,
                        plot_area: area.properties?.plot_area,
                        photo_url: area.properties?.photo_url,
                        geometry: area.geometry,
                        created_at: area.properties?.created_at
                    };
                }
                // Already in correct format
                return area;
            });
            console.log("✅ Transformed renovation areas:", transformedAreas);
            setRenovationAreas(transformedAreas);
            console.log("✅ Loaded", transformedAreas.length, "renovation areas");
        } catch (error) {
            console.error("Failed to fetch renovation areas:", error);
        // Don't show error to user, just log it
        }
    };
    const fetchDistricts = async ()=>{
        try {
            console.log("📡 Fetching districts...");
            const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/districts/");
            if (!response.ok) {
                throw new Error(`Districts API returned ${response.status}`);
            }
            const data = await response.json();
            console.log("🗺️ Districts fetched:", data);
            // Handle GeoJSON FeatureCollection format
            let features = [];
            if (data.results && data.results.type === 'FeatureCollection') {
                features = data.results.features || [];
            } else if (data.type === 'FeatureCollection') {
                features = data.features || [];
            } else if (Array.isArray(data)) {
                features = data;
            } else if (data.results && Array.isArray(data.results)) {
                features = data.results;
            }
            console.log("📍 Processing", features.length, "district features");
            // Transform and filter districts (exclude id 0 and 9)
            const transformedDistricts = features.map((district)=>{
                if (district.type === 'Feature') {
                    return {
                        id: district.id || district.properties?.id,
                        name: district.properties?.name || district.properties?.name_ru || `District ${district.id}`,
                        geometry: district.geometry
                    };
                }
                return {
                    id: district.id,
                    name: district.name || district.name_ru || `District ${district.id}`,
                    geometry: district.geometry
                };
            }).filter((d)=>d.id !== 0 && d.id !== 9) // Exclude districts with id 0 and 9
            ;
            console.log("✅ Transformed districts:", transformedDistricts);
            setDistricts(transformedDistricts);
            console.log("✅ Loaded", transformedDistricts.length, "districts (excluded id 0 and 9)");
        } catch (error) {
            console.error("Failed to fetch districts:", error);
        // Don't show error to user, just log it
        }
    };
    // Helper function to transform API data
    const transformBuildingsData = (apiBuildings)=>{
        return (apiBuildings || []).map((b)=>{
            const catStr = (b.category || "").toLowerCase();
            let category = "general";
            if (catStr.includes("ижс") || catStr.includes("izhs")) category = "izhs";
            else if (catStr.includes("сусн") || catStr.includes("susn")) category = "susn";
            const districtLabel = b.district && typeof b.district === "string" ? b.district : b.district_id && DISTRICT_LABELS[String(b.district_id)] ? DISTRICT_LABELS[String(b.district_id)] : b.district_id ? `Район ${b.district_id}` : "Не указан";
            return {
                id: b.id?.toString() || crypto.randomUUID(),
                address: b.address || "Без адреса",
                district: districtLabel,
                district_id: b.district_id,
                latitude: b.lat ?? b.latitude ?? null,
                longitude: b.lon ?? b.longitude ?? null,
                has_gas: false,
                building_type: category === "izhs" ? "Индивидуальное жилищное строительство" : category === "susn" ? "Социально уязвимые слои населения" : "Жилое здание",
                building_category: category,
                is_not_in_almaty: b.is_not_in_almaty || false,
                is_seasonal_or_unused: b.is_seasonal_or_unused || false,
                geometry: b.geometry || null
            };
        });
    // Don't filter out buildings without coordinates - keep ALL buildings for stats
    };
    // Тестовые данные для демонстрации
    const getMockBuildings = ()=>{
        return [
            {
                id: "1",
                address: "ул. Абая, 150",
                district: "Алмалинский район",
                latitude: 43.2566,
                longitude: 76.9286,
                has_gas: false,
                building_type: "Жилой дом",
                building_category: "general",
                floors: 9,
                apartments: 72,
                year_built: 1985
            },
            {
                id: "2",
                address: "пр. Достык, 234",
                district: "Медеуский район",
                latitude: 43.2378,
                longitude: 76.9458,
                has_gas: false,
                building_type: "Жилой дом",
                building_category: "general",
                floors: 5,
                apartments: 40,
                year_built: 1978
            },
            {
                id: "3",
                address: "ул. Тимирязева, 42",
                district: "Бостандыкский район",
                latitude: 43.2221,
                longitude: 76.8515,
                has_gas: false,
                building_type: "Жилой дом",
                building_category: "general",
                floors: 12,
                apartments: 144,
                year_built: 1990
            },
            {
                id: "4",
                address: "ул. Розыбакиева, 180",
                district: "Алатауский район",
                latitude: 43.2145,
                longitude: 76.8967,
                has_gas: false,
                building_type: "Жилой дом",
                building_category: "general",
                floors: 16,
                apartments: 192,
                year_built: 2005
            },
            {
                id: "5",
                address: "мкр. Самал-2, 58",
                district: "Медеуский район",
                latitude: 43.2456,
                longitude: 76.9567,
                has_gas: false,
                building_type: "Жилой дом",
                building_category: "general",
                floors: 9,
                apartments: 108,
                year_built: 1988
            }
        ];
    };
    // Export functionality
    const exportToCSV = ()=>{
        const csvData = filteredBuildings.map((b)=>({
                Адрес: b.address,
                Район: b.district,
                Тип: b.building_type,
                Категория: b.building_category === "general" ? "ALSECO" : b.building_category === "izhs" ? "ИЖС" : "СУСН",
                Этажей: b.floors || "Н/Д",
                Квартир: b.apartments || "Н/Д",
                "Год постройки": b.year_built || "Н/Д",
                Широта: b.latitude,
                Долгота: b.longitude
            }));
        const headers = Object.keys(csvData[0] || {});
        const csvContent = [
            headers.join(","),
            ...csvData.map((row)=>headers.map((header)=>`"${row[header]}"`).join(","))
        ].join("\n");
        const blob = new Blob([
            "\ufeff" + csvContent
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `buildings-without-gas-${buildingTypeFilter}-${new Date().toISOString().split("T")[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const exportToJSON = ()=>{
        const jsonData = JSON.stringify(filteredBuildings, null, 2);
        const blob = new Blob([
            jsonData
        ], {
            type: "application/json"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `buildings-without-gas-${buildingTypeFilter}-${new Date().toISOString().split("T")[0]}.json`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const filteredBuildings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildingsWithoutGasPage.useMemo[filteredBuildings]": ()=>{
            return buildings.filter({
                "BuildingsWithoutGasPage.useMemo[filteredBuildings]": (building)=>{
                    // ONLY SHOW GENERAL (ALSECO) BUILDINGS
                    const isGeneral = building.building_category === "general";
                    if (!isGeneral) return false;
                    const matchesDistrict = districtFilter === "all" || building.district === districtFilter;
                    const matchesSearch = searchQuery === "" || building.address.toLowerCase().includes(searchQuery.toLowerCase()) || building.district.toLowerCase().includes(searchQuery.toLowerCase());
                    // Filter by building type (keeping for backward compatibility, but always "general" now)
                    const matchesType = buildingTypeFilter === "all" || building.building_category === buildingTypeFilter;
                    // Advanced filters
                    const matchesYear = !yearFilter || building.year_built && building.year_built >= yearFilter.min && building.year_built <= yearFilter.max;
                    const matchesFloors = !floorsFilter || building.floors && building.floors >= floorsFilter.min && building.floors <= floorsFilter.max;
                    const matchesApartments = !apartmentsFilter || building.apartments && building.apartments >= apartmentsFilter.min && building.apartments <= apartmentsFilter.max;
                    return matchesDistrict && matchesSearch && matchesType && matchesYear && matchesFloors && matchesApartments;
                }
            }["BuildingsWithoutGasPage.useMemo[filteredBuildings]"]);
        }
    }["BuildingsWithoutGasPage.useMemo[filteredBuildings]"], [
        buildings,
        districtFilter,
        searchQuery,
        buildingTypeFilter,
        yearFilter,
        floorsFilter,
        apartmentsFilter
    ]);
    // Only show districts from general (ALSECO) buildings
    const generalBuildings = buildings.filter((b)=>b.building_category === "general");
    const districtNames = Array.from(new Set(generalBuildings.map((b)=>b.district))).filter((name)=>name !== "Район 9" && name !== "Не указан").sort();
    const categoryCounts = {
        general: generalBuildings.length,
        izhs: buildings.filter((b)=>b.building_category === "izhs").length,
        susn: buildings.filter((b)=>b.building_category === "susn").length
    };
    const filteredCounts = {
        general: filteredBuildings.filter((b)=>b.building_category === "general").length,
        izhs: filteredBuildings.filter((b)=>b.building_category === "izhs").length,
        susn: filteredBuildings.filter((b)=>b.building_category === "susn").length
    };
    // Calculate stats only for general (ALSECO) buildings
    const uniqueMarkerCount = new Set(generalBuildings.map((b)=>`${b.latitude},${b.longitude}`)).size;
    const withCoordinates = generalBuildings.filter((b)=>b.latitude && b.longitude).length;
    const withoutCoordinates = generalBuildings.length - withCoordinates;
    const stats = {
        total: generalBuildings.length,
        uniqueMarkers: uniqueMarkerCount,
        withCoordinates,
        withoutCoordinates,
        byCategory: {
            general: categoryCounts.general,
            izhs: categoryCounts.izhs,
            susn: categoryCounts.susn
        },
        withoutGas: generalBuildings.filter((b)=>!b.has_gas).length,
        totalApartments: generalBuildings.reduce((sum, b)=>sum + (b.apartments || 0), 0),
        notInAlmaty: generalBuildings.filter((b)=>b.is_not_in_almaty === true).length,
        notInAlmatyGeneral: generalBuildings.filter((b)=>b.is_not_in_almaty === true && b.building_category === "general").length,
        seasonalOrUnused: generalBuildings.filter((b)=>b.is_seasonal_or_unused === true).length
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "relative h-screen w-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 574,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 573,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-800 text-center mb-2",
                                    children: loadingProgress.status || "Загрузка..."
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 576,
                                    columnNumber: 17
                                }, this),
                                loadingProgress.total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full bg-gray-200 rounded-full h-3 mb-2 overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300 ease-out",
                                                style: {
                                                    width: `${loadingProgress.loaded / loadingProgress.total * 100}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 582,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 581,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 text-center",
                                            children: [
                                                loadingProgress.loaded.toLocaleString(),
                                                " / ",
                                                loadingProgress.total.toLocaleString(),
                                                " объектов"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 572,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                        lineNumber: 571,
                        columnNumber: 13
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full flex-col items-center justify-center gap-3 bg-background",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "h-12 w-12 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 596,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 font-semibold",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 597,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Используются тестовые данные для демонстрации"
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 598,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>fetchBuildings(true),
                                children: "Попробовать снова"
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 599,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                        lineNumber: 595,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildingsMap, {
                        buildings: filteredBuildings.filter((b)=>b.latitude && b.longitude),
                        renovationAreas: renovationAreas,
                        districts: districts,
                        selectedDistrictId: selectedDistrictId,
                        showHeatmap: showHeatmap,
                        showRenovationAreas: showRenovationAreas,
                        onBuildingClick: handleBuildingClick
                    }, void 0, false, {
                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                        lineNumber: 604,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                    lineNumber: 569,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 h-full w-full pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 bottom-0 w-[280px] pointer-events-auto z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-white border-r border-gray-200/80 backdrop-blur-xl bg-white/95 shadow-lg flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-4 border-b border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-md",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                        className: "h-5 w-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[8px] uppercase tracking-[0.2em] text-gray-400 font-semibold leading-tight",
                                                            children: "ИНФРАСТРУКТУРА / АЛМАТЫ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-base font-bold text-gray-900 leading-tight mt-0.5",
                                                            children: "Здания без газа"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 623,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600 font-medium",
                                                    children: "Результаты:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold text-blue-600 tabular-nums",
                                                            children: filteredBuildings.length.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-400",
                                                            children: "/"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 644,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500 tabular-nums",
                                                            children: generalBuildings.length.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block",
                                                            children: "🔍 Поиск"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 657,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: searchQuery,
                                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                                    placeholder: "Введите адрес...",
                                                                    className: "h-9 w-full rounded-lg border-2 border-gray-200 bg-white pl-3 pr-8 text-xs focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 23
                                                                }, this),
                                                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSearchQuery(""),
                                                                    className: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 673,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block",
                                                            children: "📍 Район"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: districtFilter,
                                                            onChange: (e)=>handleDistrictFilterChange(e.target.value),
                                                            className: "h-9 w-full rounded-lg border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white px-3 text-xs font-semibold text-blue-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "Все районы"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 689,
                                                                    columnNumber: 23
                                                                }, this),
                                                                districtNames.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: district,
                                                                        children: district
                                                                    }, district, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 691,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block",
                                                            children: "⚙️ Действия"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>fetchBuildings(true),
                                                                    disabled: loading,
                                                                    className: "w-full h-9 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all disabled:opacity-50 flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                            className: `h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 709,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Обновить данные"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 704,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowHeatmap(!showHeatmap),
                                                                    className: `w-full h-9 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${showHeatmap ? "bg-gray-900 text-white shadow-sm" : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 721,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        showHeatmap ? "Показать маркеры" : "Тепловая карта"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 713,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowRenovationAreas(!showRenovationAreas),
                                                                    className: `w-full h-9 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${showRenovationAreas ? "bg-purple-600 text-white shadow-sm" : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 733,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Реновация ",
                                                                        showRenovationAreas ? "✓" : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 725,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowAdvancedFilters(!showAdvancedFilters),
                                                                    className: `w-full h-9 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 ${showAdvancedFilters ? "bg-gray-900 text-white shadow-sm" : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 745,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Доп. фильтры ",
                                                                        showAdvancedFilters ? "✓" : ""
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 703,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-2 block",
                                                            children: "📥 Экспорт"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: exportToCSV,
                                                                    className: "w-full h-9 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 761,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Экспорт в CSV"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: exportToJSON,
                                                                    className: "w-full h-9 rounded-lg text-xs font-medium bg-white text-gray-700 border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 768,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Экспорт в JSON"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: async ()=>{
                                                                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildingsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearBuildingsCache"])();
                                                                        fetchBuildings(true);
                                                                    },
                                                                    className: "w-full h-9 rounded-lg text-xs font-medium bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-all flex items-center justify-center gap-2",
                                                                    children: "Очистить кэш"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 771,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 653,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-0 w-[170px] flex flex-col gap-2.5 pointer-events-auto z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-orange-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                            children: "ВСЕГО ALSECO"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 793,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[2.75rem] font-bold text-orange-600 leading-none tabular-nums",
                                            children: categoryCounts.general
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 794,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[7.5px] text-orange-400 mt-1.5 leading-tight",
                                            children: "жилых зданий"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 797,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 792,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-red-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                            children: "ALSECO НЕ В АЛМАТЫ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 802,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[2.75rem] font-bold text-red-600 leading-none tabular-nums",
                                            children: generalBuildings.filter((b)=>b.is_not_in_almaty === true).length
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 803,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[7.5px] text-red-400 mt-1.5 leading-tight",
                                            children: "за пределами"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 806,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 801,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-blue-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                            children: "ALSECO В АЛМАТЫ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 811,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[2.75rem] font-bold text-blue-600 leading-none tabular-nums",
                                            children: generalBuildings.filter((b)=>!b.is_not_in_almaty).length
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 812,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[7.5px] text-blue-400 mt-1.5 leading-tight",
                                            children: "в городе"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 810,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-green-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                            children: "ALSECO С КООРДИНАТАМИ В АЛМАТЫ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 822,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[2.75rem] font-bold text-green-600 leading-none tabular-nums",
                                            children: generalBuildings.filter((b)=>!b.is_not_in_almaty && b.latitude && b.longitude).length
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 823,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[7.5px] text-green-400 mt-1.5 leading-tight",
                                            children: "на карте в городе"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 826,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 821,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-amber-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                            children: "ALSECO БЕЗ КООРДИНАТ В АЛМАТЫ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 831,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[2.75rem] font-bold text-amber-600 leading-none tabular-nums",
                                            children: generalBuildings.filter((b)=>!b.is_not_in_almaty && (!b.latitude || !b.longitude)).length
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 832,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[7.5px] text-amber-400 mt-1.5 leading-tight",
                                            children: "в городе без координат"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 835,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 830,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-purple-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                            children: "УНИКАЛЬНЫХ КООРДИНАТ"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 840,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[2.75rem] font-bold text-purple-600 leading-none tabular-nums",
                                            children: new Set(generalBuildings.filter((b)=>!b.is_not_in_almaty && b.latitude && b.longitude).map((b)=>`${b.latitude},${b.longitude}`)).size
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 841,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[7.5px] text-purple-400 mt-1.5 leading-tight",
                                            children: "точек на карте"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 844,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 839,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 788,
                            columnNumber: 11
                        }, this),
                        showAdvancedFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-[70px] right-4 w-[280px] pointer-events-auto z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-lg border border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-semibold text-gray-900",
                                                children: "Расширенные фильтры"
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 873,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowAdvancedFilters(false),
                                                className: "text-gray-400 hover:text-gray-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 874,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 872,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-medium text-gray-700 mb-1.5 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 886,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Год постройки"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 885,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                placeholder: "От",
                                                                value: yearFilter?.min || "",
                                                                onChange: (e)=>setYearFilter((prev)=>({
                                                                            min: Number(e.target.value),
                                                                            max: prev?.max || 2025
                                                                        })),
                                                                className: "w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                placeholder: "До",
                                                                value: yearFilter?.max || "",
                                                                onChange: (e)=>setYearFilter((prev)=>({
                                                                            min: prev?.min || 1900,
                                                                            max: Number(e.target.value)
                                                                        })),
                                                                className: "w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 897,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 889,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 884,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-medium text-gray-700 mb-1.5 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 910,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Количество этажей"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 909,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                placeholder: "От",
                                                                value: floorsFilter?.min || "",
                                                                onChange: (e)=>setFloorsFilter((prev)=>({
                                                                            min: Number(e.target.value),
                                                                            max: prev?.max || 100
                                                                        })),
                                                                className: "w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                placeholder: "До",
                                                                value: floorsFilter?.max || "",
                                                                onChange: (e)=>setFloorsFilter((prev)=>({
                                                                            min: prev?.min || 1,
                                                                            max: Number(e.target.value)
                                                                        })),
                                                                className: "w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 921,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 913,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[10px] font-medium text-gray-700 mb-1.5 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 934,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Количество квартир"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 933,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                placeholder: "От",
                                                                value: apartmentsFilter?.min || "",
                                                                onChange: (e)=>setApartmentsFilter((prev)=>({
                                                                            min: Number(e.target.value),
                                                                            max: prev?.max || 1000
                                                                        })),
                                                                className: "w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 938,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                placeholder: "До",
                                                                value: apartmentsFilter?.max || "",
                                                                onChange: (e)=>setApartmentsFilter((prev)=>({
                                                                            min: prev?.min || 1,
                                                                            max: Number(e.target.value)
                                                                        })),
                                                                className: "w-1/2 h-7 rounded border border-gray-200 px-2 text-xs focus:outline-none focus:border-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 945,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 937,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 932,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setYearFilter(null);
                                                    setFloorsFilter(null);
                                                    setApartmentsFilter(null);
                                                },
                                                className: "w-full h-7 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all",
                                                children: "Сбросить фильтры"
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 956,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 882,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 871,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 870,
                            columnNumber: 13
                        }, this),
                        showSidePanel && selectedBuilding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 h-full w-[380px] pointer-events-auto z-30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-white shadow-2xl border-l border-gray-200 overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-8 w-8 rounded-lg flex items-center justify-center ${selectedBuilding.building_category === "general" ? "bg-orange-100" : selectedBuilding.building_category === "izhs" ? "bg-blue-100" : "bg-red-100"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                            className: `h-4 w-4 ${selectedBuilding.building_category === "general" ? "text-orange-600" : selectedBuilding.building_category === "izhs" ? "text-blue-600" : "text-red-600"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 982,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 978,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] uppercase tracking-wider text-gray-400 font-medium",
                                                                children: "Детали здания"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 988,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-xs font-semibold text-gray-900",
                                                                children: selectedBuilding.building_category === "general" ? "ALSECO" : selectedBuilding.building_category === "izhs" ? "ИЖС" : "СУСН"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 987,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 977,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowSidePanel(false);
                                                    setSelectedBuilding(null);
                                                },
                                                className: "text-gray-400 hover:text-gray-600 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1002,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 995,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 976,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                        children: "Адрес"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1010,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-gray-900",
                                                        children: selectedBuilding.address
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                        children: "Район"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700",
                                                        children: selectedBuilding.district
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    selectedBuilding.floors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                                children: "Этажей"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1024,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-gray-900",
                                                                children: selectedBuilding.floors
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1025,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 23
                                                    }, this),
                                                    selectedBuilding.apartments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                                children: "Квартир"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1030,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-gray-900",
                                                                children: selectedBuilding.apartments
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1031,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1029,
                                                        columnNumber: 23
                                                    }, this),
                                                    selectedBuilding.year_built && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 rounded-lg p-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                                children: "Год постройки"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold text-gray-900",
                                                                children: selectedBuilding.year_built
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1035,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-2",
                                                        children: "Координаты"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 rounded-lg p-3 space-y-1 text-xs font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500",
                                                                        children: "Широта:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 1047,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-900",
                                                                        children: selectedBuilding.latitude.toFixed(6)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 1048,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1046,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500",
                                                                        children: "Долгота:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 1051,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-900",
                                                                        children: selectedBuilding.longitude.toFixed(6)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 1052,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1045,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                        children: "Тип здания"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1059,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700",
                                                        children: selectedBuilding.building_type
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-orange-50 border border-orange-200 rounded-lg p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1066,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium text-orange-900",
                                                                    children: "Отсутствует газоснабжение"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1068,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] text-orange-700 mt-0.5",
                                                                    children: "Здание использует альтернативные источники отопления"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1069,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1067,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1065,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1064,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 1007,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 974,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 973,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                    lineNumber: 617,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/buildings-without-gas/page.tsx",
            lineNumber: 567,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(BuildingsWithoutGasPage, "A/MEZY/duPPj34z/KKKAzq90QMs=");
_c1 = BuildingsWithoutGasPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "BuildingsMap");
__turbopack_context__.k.register(_c1, "BuildingsWithoutGasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_28f9172a._.js.map