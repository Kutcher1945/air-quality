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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
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
// Residential building types for ИЖС filter
const IZHS_RESIDENTIAL_TYPES = [
    'Не указано',
    'Частный дом',
    'Коттедж',
    'Таунхаус',
    'Сооружение',
    'Малоэтажный жилой дом',
    'Жилой дом'
];
// Non-residential building types for ИЖС filter
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
    const [loadingElapsed, setLoadingElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    const [showOnlySeasonalUnused, setShowOnlySeasonalUnused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Category visibility checkboxes
    const [showAlseco, setShowAlseco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showIzhs, setShowIzhs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSusn, setShowSusn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Selected category for stats panel
    const [selectedStatsCategory, setSelectedStatsCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("general");
    // ИЖС building type filters (for "Данные районных акиматов" category)
    const [showIzhsResidential, setShowIzhsResidential] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showIzhsNonResidential, setShowIzhsNonResidential] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ALSECO building type filters (ИЖС vs не ИЖС)
    const [showAlsecoIzhsTypes, setShowAlsecoIzhsTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAlsecoNonIzhsTypes, setShowAlsecoNonIzhsTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsWithoutGasPage.useEffect": ()=>{
            fetchBuildings();
            fetchRenovationAreas();
            fetchDistricts();
        }
    }["BuildingsWithoutGasPage.useEffect"], []);
    // Timer for elapsed loading time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsWithoutGasPage.useEffect": ()=>{
            let interval;
            if (loading) {
                setLoadingElapsed(0);
                interval = setInterval({
                    "BuildingsWithoutGasPage.useEffect": ()=>{
                        setLoadingElapsed({
                            "BuildingsWithoutGasPage.useEffect": (prev)=>prev + 1
                        }["BuildingsWithoutGasPage.useEffect"]);
                    }
                }["BuildingsWithoutGasPage.useEffect"], 1000);
            }
            return ({
                "BuildingsWithoutGasPage.useEffect": ()=>{
                    if (interval) clearInterval(interval);
                }
            })["BuildingsWithoutGasPage.useEffect"];
        }
    }["BuildingsWithoutGasPage.useEffect"], [
        loading
    ]);
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
                    // Transform using Web Worker for non-blocking UI
                    const buildingsData = await transformWithWorker(cachedData);
                    console.log("🏢 Transformed from cache:", {
                        total: buildingsData.length,
                        byCategory: {
                            general: buildingsData.filter((b)=>b.building_category === "general").length,
                            izhs: buildingsData.filter((b)=>b.building_category === "izhs").length,
                            susn: buildingsData.filter((b)=>b.building_category === "susn").length
                        }
                    });
                    setLoadingProgress({
                        loaded: buildingsData.length,
                        total: buildingsData.length,
                        status: "Готово!"
                    });
                    setBuildings(buildingsData);
                    await new Promise((resolve)=>setTimeout(resolve, 200));
                    setLoading(false);
                    return;
                }
            }
            console.log("📡 Fetching from API with streaming...");
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: "Подключение к серверу..."
            });
            // ✅ Fetch with streaming to track download progress
            const response = await fetch("http://localhost:8000/api/v1/address/buildings-without-gas/all-sources/");
            if (!response.ok) {
                throw new Error(`API returned ${response.status}`);
            }
            // Get total size from Content-Length header (if available)
            const contentLength = response.headers.get('Content-Length');
            const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
            // Stream the response to track download progress
            let receivedBytes = 0;
            const reader = response.body?.getReader();
            const chunks = [];
            if (reader) {
                setLoadingProgress({
                    loaded: 0,
                    total: totalBytes || 50000000,
                    status: "Загрузка данных..."
                });
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    chunks.push(value);
                    receivedBytes += value.length;
                    // Update progress (estimate ~50MB for 50k records if Content-Length not available)
                    const estimatedTotal = totalBytes || 50000000;
                    const percent = Math.min(Math.round(receivedBytes / estimatedTotal * 100), 99);
                    const mbReceived = (receivedBytes / 1024 / 1024).toFixed(1);
                    setLoadingProgress({
                        loaded: receivedBytes,
                        total: estimatedTotal,
                        status: `Загружено ${mbReceived} МБ (${percent}%)`
                    });
                }
            }
            // Combine chunks and decode
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: "Декодирование данных..."
            });
            const allChunks = new Uint8Array(receivedBytes);
            let position = 0;
            for (const chunk of chunks){
                allChunks.set(chunk, position);
                position += chunk.length;
            }
            const jsonText = new TextDecoder().decode(allChunks);
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: "Парсинг JSON..."
            });
            const data = JSON.parse(jsonText);
            const apiBuildings = data.data || data;
            console.log("📊 API Response:", {
                totalFromAPI: apiBuildings?.length || 0,
                bytesReceived: receivedBytes,
                sampleData: apiBuildings?.[0]
            });
            setLoadingProgress({
                loaded: 0,
                total: apiBuildings.length,
                status: "Сохранение в кэш..."
            });
            // Save raw API data to cache for next time (in background)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildingsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveBuildingsToCache"])(apiBuildings).catch((err)=>console.warn('Cache save failed:', err));
            setLoadingProgress({
                loaded: 0,
                total: apiBuildings.length,
                status: "Трансформация данных..."
            });
            // Transform using Web Worker (non-blocking) or fast fallback
            const buildingsData = await transformWithWorker(apiBuildings);
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
            setLoadingProgress({
                loaded: buildingsData.length,
                total: buildingsData.length,
                status: "Готово!"
            });
            setBuildings(buildingsData);
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
    // Web Worker ref for data transformation
    const workerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize Web Worker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsWithoutGasPage.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                workerRef.current = new Worker('/buildings-worker.js');
            }
            return ({
                "BuildingsWithoutGasPage.useEffect": ()=>{
                    workerRef.current?.terminate();
                }
            })["BuildingsWithoutGasPage.useEffect"];
        }
    }["BuildingsWithoutGasPage.useEffect"], []);
    // Transform data using Web Worker (non-blocking)
    const transformWithWorker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BuildingsWithoutGasPage.useCallback[transformWithWorker]": (apiBuildings)=>{
            return new Promise({
                "BuildingsWithoutGasPage.useCallback[transformWithWorker]": (resolve, reject)=>{
                    if (!workerRef.current) {
                        // Fallback to main thread if worker not available
                        resolve(transformBuildingsDataFast(apiBuildings));
                        return;
                    }
                    const worker = workerRef.current;
                    const handleMessage = {
                        "BuildingsWithoutGasPage.useCallback[transformWithWorker].handleMessage": (e)=>{
                            const { type, data, stats, processed, total, message } = e.data;
                            if (type === 'progress') {
                                setLoadingProgress({
                                    "BuildingsWithoutGasPage.useCallback[transformWithWorker].handleMessage": (prev)=>({
                                            ...prev,
                                            loaded: processed,
                                            total: total,
                                            status: `Обработка данных: ${Math.round(processed / total * 100)}%`
                                        })
                                }["BuildingsWithoutGasPage.useCallback[transformWithWorker].handleMessage"]);
                            } else if (type === 'complete') {
                                console.log(`✅ Worker processed ${stats.total} buildings in ${stats.processingTime}ms`);
                                worker.removeEventListener('message', handleMessage);
                                resolve(data);
                            } else if (type === 'error') {
                                worker.removeEventListener('message', handleMessage);
                                reject(new Error(message));
                            }
                        }
                    }["BuildingsWithoutGasPage.useCallback[transformWithWorker].handleMessage"];
                    worker.addEventListener('message', handleMessage);
                    worker.postMessage({
                        type: 'transform',
                        data: apiBuildings
                    });
                }
            }["BuildingsWithoutGasPage.useCallback[transformWithWorker]"]);
        }
    }["BuildingsWithoutGasPage.useCallback[transformWithWorker]"], []);
    // Optimized transformation function using for-loop (faster than map/filter)
    const transformBuildingsDataFast = (apiBuildings)=>{
        const result = [];
        const len = apiBuildings.length;
        for(let i = 0; i < len; i++){
            const b = apiBuildings[i];
            // Fast category detection using indexOf (faster than includes)
            const catStr = (b.category || "").toLowerCase();
            let category = "general";
            if (catStr.indexOf("ижс") !== -1 || catStr.indexOf("izhs") !== -1) {
                category = "izhs";
            } else if (catStr.indexOf("сусн") !== -1 || catStr.indexOf("susn") !== -1) {
                category = "susn";
            }
            // District label lookup
            let districtLabel;
            if (b.district && typeof b.district === "string") {
                districtLabel = b.district;
            } else if (b.district_id && DISTRICT_LABELS[String(b.district_id)]) {
                districtLabel = DISTRICT_LABELS[String(b.district_id)];
            } else if (b.district_id) {
                districtLabel = `Район ${b.district_id}`;
            } else {
                districtLabel = "Не указан";
            }
            result.push({
                id: b.id ? String(b.id) : crypto.randomUUID(),
                address: b.address || "Без адреса",
                district: districtLabel,
                district_id: b.district_id,
                latitude: b.lat ?? b.latitude ?? null,
                longitude: b.lon ?? b.longitude ?? null,
                has_gas: false,
                building_type: category === "izhs" ? "Индивидуальное жилищное строительство" : category === "susn" ? "Социально уязвимые слои населения" : "Жилое здание",
                building_type_raw: b.building_type || null,
                building_category: category,
                is_not_in_almaty: b.is_not_in_almaty || false,
                is_seasonal_or_unused: b.is_seasonal_or_unused || false,
                geometry: b.geometry || null
            });
        }
        return result;
    };
    // Legacy alias for compatibility
    const transformBuildingsData = transformBuildingsDataFast;
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
                    // Filter by category checkboxes
                    const matchesCategory = showAlseco && building.building_category === "general" || showIzhs && building.building_category === "izhs" || showSusn && building.building_category === "susn";
                    if (!matchesCategory) return false;
                    // ALSECO-specific building type filter (ИЖС vs не ИЖС)
                    if (building.building_category === "general") {
                        const rawType = (building.building_type_raw || "").trim();
                        const matchesIzhs = showAlsecoIzhsTypes && IZHS_RESIDENTIAL_TYPES.includes(rawType);
                        const matchesNonIzhs = showAlsecoNonIzhsTypes && IZHS_NON_RESIDENTIAL_TYPES.includes(rawType);
                        if (!matchesIzhs && !matchesNonIzhs) return false;
                        if (building.is_not_in_almaty === true) return false;
                    }
                    // Filter for seasonal/unused buildings only
                    if (showOnlySeasonalUnused && building.is_seasonal_or_unused !== true) return false;
                    const matchesDistrict = districtFilter === "all" || building.district === districtFilter;
                    const matchesSearch = searchQuery === "" || building.address.toLowerCase().includes(searchQuery.toLowerCase()) || building.district.toLowerCase().includes(searchQuery.toLowerCase());
                    // Filter by building type (keeping for backward compatibility)
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
        apartmentsFilter,
        showOnlySeasonalUnused,
        showAlseco,
        showIzhs,
        showSusn,
        showAlsecoIzhsTypes,
        showAlsecoNonIzhsTypes
    ]);
    // Category-specific counts
    const generalBuildings = buildings.filter((b)=>b.building_category === "general");
    const izhsBuildings = buildings.filter((b)=>b.building_category === "izhs");
    const susnBuildings = buildings.filter((b)=>b.building_category === "susn");
    // Get districts from all visible categories
    const visibleBuildings = buildings.filter((b)=>showAlseco && b.building_category === "general" || showIzhs && b.building_category === "izhs" || showSusn && b.building_category === "susn");
    const districtNames = Array.from(new Set(visibleBuildings.map((b)=>b.district))).filter((name)=>name !== "Район 9" && name !== "Не указан").sort();
    const categoryCounts = {
        general: generalBuildings.length,
        izhs: izhsBuildings.length,
        susn: susnBuildings.length
    };
    // Total of selected categories
    const selectedCategoriesTotal = (showAlseco ? categoryCounts.general : 0) + (showIzhs ? categoryCounts.izhs : 0) + (showSusn ? categoryCounts.susn : 0);
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
                                        lineNumber: 766,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 765,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-800 text-center mb-2",
                                    children: loadingProgress.status || "Загрузка..."
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 768,
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
                                                lineNumber: 774,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 773,
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
                                            lineNumber: 779,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-400",
                                            children: "Время загрузки:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 786,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono font-medium text-blue-600",
                                            children: [
                                                Math.floor(loadingElapsed / 60),
                                                ":",
                                                (loadingElapsed % 60).toString().padStart(2, '0')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 785,
                                    columnNumber: 17
                                }, this),
                                loadingElapsed > 15 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-amber-600 text-center mt-2",
                                    children: "⏳ Загрузка занимает больше времени чем обычно..."
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 792,
                                    columnNumber: 19
                                }, this),
                                loadingElapsed > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-orange-600 text-center mt-1",
                                    children: "Сервер обрабатывает ~50,000 записей. Пожалуйста, подождите."
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 797,
                                    columnNumber: 19
                                }, this),
                                loadingElapsed > 60 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setLoading(false);
                                        setError("Превышено время ожидания. Попробуйте позже.");
                                    },
                                    className: "mt-3 w-full py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors",
                                    children: "Отменить загрузку"
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 802,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 764,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                        lineNumber: 763,
                        columnNumber: 13
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full flex-col items-center justify-center gap-3 bg-background",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "h-12 w-12 text-orange-500"
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 816,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 font-semibold",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 817,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Используются тестовые данные для демонстрации"
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 818,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>fetchBuildings(true),
                                children: "Попробовать снова"
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 819,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                        lineNumber: 815,
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
                        lineNumber: 824,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                    lineNumber: 761,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 h-full w-full pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 bottom-0 w-[300px] pointer-events-auto z-20 flex flex-col bg-white/95 backdrop-blur-md border-r border-slate-200 shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[72px] px-5 flex items-center gap-3 border-b border-slate-200 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 shadow-lg shadow-slate-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 843,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 842,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase leading-tight",
                                                    children: "ИНФРАСТРУКТУРА / АЛМАТЫ"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 846,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-sm font-bold text-slate-900 leading-tight",
                                                    children: "Здания без газа"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 847,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 845,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 841,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto custom-scrollbar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 bg-slate-50/50 border-b border-slate-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-end justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold text-slate-500 uppercase",
                                                        children: "Найдено объектов"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl font-black text-slate-900 tabular-nums leading-none",
                                                                children: filteredBuildings.length.toLocaleString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 858,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-medium text-slate-400",
                                                                children: [
                                                                    "/ ",
                                                                    selectedCategoriesTotal.toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 857,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 855,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 854,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Поиск по адресу"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 869,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: searchQuery,
                                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                                    placeholder: "Название улицы, номер...",
                                                                    className: "h-10 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 19
                                                                }, this),
                                                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSearchQuery(""),
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 880,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 879,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 870,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 868,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Категории зданий"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 888,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showAlseco,
                                                                            onChange: (e)=>setShowAlseco(e.target.checked),
                                                                            className: "w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 892,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold text-slate-700",
                                                                                    children: "ALSECO"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 899,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-slate-400 ml-2",
                                                                                    children: [
                                                                                        "(",
                                                                                        categoryCounts.general.toLocaleString(),
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 900,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 898,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-orange-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 902,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 891,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showIzhs,
                                                                            onChange: (e)=>setShowIzhs(e.target.checked),
                                                                            className: "w-4 h-4 rounded border-slate-300 text-green-500 focus:ring-green-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 907,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold text-slate-700",
                                                                                    children: "Данные районных акиматов"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 914,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-slate-400 ml-2",
                                                                                    children: [
                                                                                        "(",
                                                                                        categoryCounts.izhs.toLocaleString(),
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 915,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 913,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-green-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 917,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 906,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showSusn,
                                                                            onChange: (e)=>setShowSusn(e.target.checked),
                                                                            className: "w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 922,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold text-slate-700",
                                                                                    children: "СУСН"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 929,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-slate-400 ml-2",
                                                                                    children: [
                                                                                        "(",
                                                                                        categoryCounts.susn.toLocaleString(),
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 930,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 928,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-blue-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 932,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 889,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Фильтр ALSECO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: `flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${showAlseco ? "bg-slate-50 border-slate-200 hover:bg-slate-100 cursor-pointer" : "bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showAlsecoIzhsTypes,
                                                                            onChange: (e)=>setShowAlsecoIzhsTypes(e.target.checked),
                                                                            disabled: !showAlseco,
                                                                            className: "w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 942,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold text-slate-700",
                                                                                    children: "Показывать ИЖС типы"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 950,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-slate-400 ml-2",
                                                                                    children: "из ALSECO"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 951,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 949,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 941,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-px bg-slate-200"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 955,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: `flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${showAlseco ? "bg-slate-50 border-slate-200 hover:bg-slate-100 cursor-pointer" : "bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showAlsecoNonIzhsTypes,
                                                                            onChange: (e)=>setShowAlsecoNonIzhsTypes(e.target.checked),
                                                                            disabled: !showAlseco,
                                                                            className: "w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 958,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-semibold text-slate-700",
                                                                                    children: "Показывать не ИЖС"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 966,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-slate-400 ml-2",
                                                                                    children: "из ALSECO"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 967,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 965,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 957,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 940,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Район города"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: districtFilter,
                                                            onChange: (e)=>handleDistrictFilterChange(e.target.value),
                                                            className: "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 cursor-pointer focus:border-blue-500 outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "all",
                                                                    children: "Все районы"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 981,
                                                                    columnNumber: 19
                                                                }, this),
                                                                districtNames.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: district,
                                                                        children: district
                                                                    }, district, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 982,
                                                                        columnNumber: 52
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 976,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 974,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Управление картой"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 988,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>fetchBuildings(true),
                                                                    disabled: loading,
                                                                    className: "flex items-center gap-3 px-4 h-10 rounded-xl text-xs font-semibold transition-all bg-slate-100 text-slate-600 hover:bg-slate-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                            className: `h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 991,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " Обновить данные"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 990,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowHeatmap(!showHeatmap),
                                                                    className: `flex items-center gap-3 px-4 h-10 rounded-xl text-xs font-semibold transition-all ${showHeatmap ? "bg-orange-500 text-white shadow-md shadow-orange-200" : "bg-slate-100 text-slate-600"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 995,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " Тепловая карта"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 994,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowRenovationAreas(!showRenovationAreas),
                                                                    className: `flex items-center gap-3 px-4 h-10 rounded-xl text-xs font-semibold transition-all ${showRenovationAreas ? "bg-purple-600 text-white shadow-md shadow-purple-200" : "bg-slate-100 text-slate-600"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 999,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " Зоны реновации"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 998,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 989,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 987,
                                                    columnNumber: 15
                                                }, this),
                                                showAdvancedFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in zoom-in-95 duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[10px] font-bold text-slate-500 uppercase mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1015,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Год постройки"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1014,
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
                                                                            className: "w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1018,
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
                                                                            className: "w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1025,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1017,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1013,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[10px] font-bold text-slate-500 uppercase mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1038,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Этажность"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1037,
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
                                                                            className: "w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1041,
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
                                                                            className: "w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1048,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1040,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1036,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[10px] font-bold text-slate-500 uppercase mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1061,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Квартир"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1060,
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
                                                                            className: "w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1064,
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
                                                                            className: "w-1/2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs focus:border-blue-500 outline-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1071,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1063,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1059,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setYearFilter(null);
                                                                setFloorsFilter(null);
                                                                setApartmentsFilter(null);
                                                            },
                                                            className: "w-full h-8 rounded-lg text-[10px] font-bold bg-white text-slate-500 border border-slate-200 hover:bg-slate-100 transition-all uppercase tracking-wider",
                                                            children: "Сбросить фильтры"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1081,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "pt-4 border-t border-slate-100 space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest block",
                                                            children: "Экспорт и кэш"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1096,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: exportToCSV,
                                                                    className: "flex-1 h-10 rounded-xl border border-slate-200 bg-white text-[10px] font-bold text-slate-600 uppercase flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1099,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " CSV"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: exportToJSON,
                                                                    className: "flex-1 h-10 rounded-xl border border-slate-200 bg-white text-[10px] font-bold text-slate-600 uppercase flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1102,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " JSON"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1101,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1097,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: async ()=>{
                                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildingsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearBuildingsCache"])();
                                                                fetchBuildings(true);
                                                            },
                                                            className: "w-full h-9 rounded-xl bg-red-50 text-red-600 text-[10px] font-bold border border-red-100 uppercase transition-colors hover:bg-red-100",
                                                            children: "Очистить кэш"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1105,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1095,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 866,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 852,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 839,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-0 w-[170px] flex flex-col gap-2.5 pointer-events-auto z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/95 backdrop-blur-xl rounded-l-xl p-1.5 shadow-sm flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedStatsCategory("general"),
                                            className: `flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${selectedStatsCategory === "general" ? "bg-orange-500 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100"}`,
                                            children: "ALSECO"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedStatsCategory("izhs"),
                                            className: `flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${selectedStatsCategory === "izhs" ? "bg-green-500 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100"}`,
                                            children: "Данные районных акиматов"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedStatsCategory("susn"),
                                            className: `flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${selectedStatsCategory === "susn" ? "bg-blue-500 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100"}`,
                                            children: "СУСН"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1116,
                                    columnNumber: 13
                                }, this),
                                (()=>{
                                    const categoryData = selectedStatsCategory === "general" ? generalBuildings : selectedStatsCategory === "izhs" ? izhsBuildings : susnBuildings;
                                    const categoryName = selectedStatsCategory === "general" ? "ALSECO" : selectedStatsCategory === "izhs" ? "ИЖС" : "СУСН";
                                    const primaryColor = selectedStatsCategory === "general" ? {
                                        border: "border-orange-500",
                                        text: "text-orange-600",
                                        subtext: "text-orange-400",
                                        bg: "bg-orange-500",
                                        bgLight: "bg-orange-50",
                                        bgHover: "hover:bg-orange-100"
                                    } : selectedStatsCategory === "izhs" ? {
                                        border: "border-green-500",
                                        text: "text-green-600",
                                        subtext: "text-green-400",
                                        bg: "bg-green-500",
                                        bgLight: "bg-green-50",
                                        bgHover: "hover:bg-green-100"
                                    } : {
                                        border: "border-blue-500",
                                        text: "text-blue-600",
                                        subtext: "text-blue-400",
                                        bg: "bg-blue-500",
                                        bgLight: "bg-blue-50",
                                        bgHover: "hover:bg-blue-100"
                                    };
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] ${primaryColor.border}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                                        children: [
                                                            "ВСЕГО ",
                                                            categoryName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-[2.75rem] font-bold ${primaryColor.text} leading-none tabular-nums`,
                                                        children: categoryData.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-[7.5px] ${primaryColor.subtext} mt-1.5 leading-tight`,
                                                        children: "зданий"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1175,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-red-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                                        children: [
                                                            categoryName,
                                                            " НЕ В АЛМАТЫ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[2.75rem] font-bold text-red-600 leading-none tabular-nums",
                                                        children: categoryData.filter((b)=>b.is_not_in_almaty === true).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1181,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[7.5px] text-red-400 mt-1.5 leading-tight",
                                                        children: "за пределами"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1184,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-cyan-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                                        children: [
                                                            categoryName,
                                                            " В АЛМАТЫ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1189,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[2.75rem] font-bold text-cyan-600 leading-none tabular-nums",
                                                        children: categoryData.filter((b)=>!b.is_not_in_almaty).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[7.5px] text-cyan-400 mt-1.5 leading-tight",
                                                        children: "в городе"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1193,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-emerald-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                                        children: [
                                                            categoryName,
                                                            " С КООРДИНАТАМИ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1198,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[2.75rem] font-bold text-emerald-600 leading-none tabular-nums",
                                                        children: categoryData.filter((b)=>!b.is_not_in_almaty && b.latitude && b.longitude).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[7.5px] text-emerald-400 mt-1.5 leading-tight",
                                                        children: "на карте в городе"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1197,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-amber-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                                        children: [
                                                            categoryName,
                                                            " БЕЗ КООРДИНАТ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1207,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[2.75rem] font-bold text-amber-600 leading-none tabular-nums",
                                                        children: categoryData.filter((b)=>!b.is_not_in_almaty && (!b.latitude || !b.longitude)).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1208,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[7.5px] text-amber-400 mt-1.5 leading-tight",
                                                        children: "в городе без координат"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1211,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] border-purple-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                                        children: "УНИКАЛЬНЫХ КООРДИНАТ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[2.75rem] font-bold text-purple-600 leading-none tabular-nums",
                                                        children: new Set(categoryData.filter((b)=>!b.is_not_in_almaty && b.latitude && b.longitude).map((b)=>`${b.latitude},${b.longitude}`)).size
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1217,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[7.5px] text-purple-400 mt-1.5 leading-tight",
                                                        children: "точек на карте"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1220,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `bg-white/95 backdrop-blur-xl rounded-l-xl py-3.5 px-4 shadow-sm border-l-[3px] ${showOnlySeasonalUnused ? 'border-pink-600 ring-2 ring-pink-200' : 'border-pink-500'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[8.5px] uppercase tracking-[0.15em] text-gray-500 mb-1 font-medium",
                                                        children: "СЕЗОННЫЕ / НЕИСПОЛЬЗУЕМЫЕ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1225,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[2.75rem] font-bold text-pink-600 leading-none tabular-nums",
                                                        children: categoryData.filter((b)=>b.is_seasonal_or_unused === true).length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1226,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[7.5px] text-pink-400 mt-1.5 leading-tight",
                                                        children: [
                                                            categoryName,
                                                            " зданий"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1229,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowOnlySeasonalUnused(!showOnlySeasonalUnused),
                                                        className: `mt-2 w-full h-6 rounded text-[9px] font-medium transition-all flex items-center justify-center gap-1 ${showOnlySeasonalUnused ? "bg-pink-600 text-white shadow-sm" : "bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100"}`,
                                                        children: showOnlySeasonalUnused ? "✓ Показаны" : "❄️ Показать на карте"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1230,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1224,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true);
                                })()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1114,
                            columnNumber: 11
                        }, this),
                        showSidePanel && selectedBuilding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-[300px] h-full w-[320px] pointer-events-auto z-10 flex flex-col bg-white/95 backdrop-blur-md border-r border-slate-200 shadow-[15px_0_30px_-5px_rgba(0,0,0,0.1)] animate-in slide-in-from-left duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[72px] px-5 flex items-center justify-between border-b border-slate-200 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-10 w-10 flex items-center justify-center rounded-xl ${selectedBuilding.building_category === "general" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1277,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase",
                                                            children: "Карточка объекта"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1280,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-sm font-bold text-slate-900 leading-tight",
                                                            children: "Информация"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1281,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1279,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setShowSidePanel(false);
                                                setSelectedBuilding(null);
                                            },
                                            className: "p-2 hover:bg-slate-100 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-5 w-5 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1288,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block",
                                                    children: "Адрес и район"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-m font-bold text-slate-900 leading-snug",
                                                    children: selectedBuilding.address
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500 mt-1 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "h-3.5 w-3.5 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1299,
                                                            columnNumber: 19
                                                        }, this),
                                                        " ",
                                                        selectedBuilding.district
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                            className: "p-4 rounded-xl bg-slate-50 border border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                    children: "Тип здания"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1321,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-700 leading-relaxed",
                                                    children: selectedBuilding.building_type
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1322,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-2xl bg-orange-50 border border-orange-100 flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-8 w-8 shrink-0 rounded-full bg-orange-500 flex items-center justify-center shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "h-5 w-5 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1330,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1329,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-xs font-bold text-orange-900 uppercase tracking-tight",
                                                            children: "Газ отсутствует"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1333,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-orange-700 leading-relaxed mt-0.5",
                                                            children: "Объект числится в списках на газификацию или использует альтернативные источники."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1334,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1332,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1328,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 border-t border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                    children: "Геолокация"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1342,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-50 border border-slate-100 rounded-xl p-3 font-mono text-[10px] text-slate-500 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Широта:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1345,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: selectedBuilding.latitude.toFixed(6)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1345,
                                                                    columnNumber: 42
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1344,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Долгота:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1348,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold",
                                                                    children: selectedBuilding.longitude.toFixed(6)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1348,
                                                                    columnNumber: 43
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1343,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1341,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                    lineNumber: 837,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/buildings-without-gas/page.tsx",
            lineNumber: 759,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(BuildingsWithoutGasPage, "LC4R1+R4CsCUNknf2iK9iDE2Yao=");
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