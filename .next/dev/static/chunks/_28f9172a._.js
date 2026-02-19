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
        if (typeof indexedDB === "undefined") {
            reject(new Error("IndexedDB is not available"));
            return;
        }
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
        if (typeof indexedDB === "undefined") return;
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
        if (typeof indexedDB === "undefined") return null;
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
        if (typeof indexedDB === "undefined") return;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
    "0": "г.Алматы",
    "1": "Алатауский район",
    "2": "Алмалинский район",
    "3": "Ауэзовский район",
    "4": "Бостандыкский район",
    "5": "Жетысуский район",
    "6": "Медеуский район",
    "7": "Наурызбайский район",
    "8": "Турксибский район",
    "9": "БКАД За пределами города"
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
    const [showDistrictDropdown, setShowDistrictDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // useTransition for non-blocking UI updates
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    // Category visibility checkboxes
    const [showAlseco, setShowAlseco] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showIzhs, setShowIzhs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSusn, setShowSusn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAlsecoInAlmaty, setShowAlsecoInAlmaty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAlsecoNotInAlmaty, setShowAlsecoNotInAlmaty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showApproximate, setShowApproximate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showExact, setShowExact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Gas connection filters (all selected by default)
    const [showWithGas, setShowWithGas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showWithoutGas, setShowWithoutGas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showUnknownGas, setShowUnknownGas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Selected category for stats panel
    const [selectedStatsCategory, setSelectedStatsCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("general");
    // ИЖС building type filters (for "Данные районных акиматов" category)
    const [showIzhsResidential, setShowIzhsResidential] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showIzhsNonResidential, setShowIzhsNonResidential] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ALSECO building type filters (ИЖС vs не ИЖС)
    const [showAlsecoIzhsTypes, setShowAlsecoIzhsTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAlsecoNonIzhsTypes, setShowAlsecoNonIzhsTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAlsecoIzhsSubfilters, setShowAlsecoIzhsSubfilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAlsecoNonIzhsSubfilters, setShowAlsecoNonIzhsSubfilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedAlsecoIzhsTypes, setSelectedAlsecoIzhsTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Частный дом": true,
        "Коттедж": true,
        "Жилой дом": true,
        "Дом": true
    });
    const [selectedAlsecoNonIzhsTypes, setSelectedAlsecoNonIzhsTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Административное здание": true,
        "Магазин": true,
        "Строящееся здание": true,
        "Автосервис": true,
        "Общежитие": true,
        "Хозяйственный корпус": true,
        "Апартаменты": true,
        "Кафе, бар": true,
        "Ветлечебница": true,
        "Строящийся коттедж": true,
        "Строящееся административное здание": true,
        "Производственный корпус": true,
        "Киоск": true,
        "Бани, сауны": true,
        "Гостиница": true,
        "Планируемая застройка": true,
        "Строящийся таунхаус": true,
        "Детский сад, ясли": true,
        "Религиозное сооружение": true,
        "Гараж": true,
        "Ремонтируемое здание": true,
        "Автомойка": true,
        "Ресторан": true,
        "Автоцентр": true,
        "Склад": true,
        "Столовая": true,
        "Торговый павильон": true,
        "Государственное учреждение": true,
        "Шиномонтаж": true,
        "Школа": true,
        "Спортивное сооружение": true,
        "Таунхаус": true,
        "Сооружение": true,
        "Малоэтажный жилой дом": true
    });
    const alsecoIzhsLabels = [
        "Частный дом",
        "Коттедж",
        "Жилой дом",
        "Дом"
    ];
    const alsecoNonIzhsLabels = [
        "Административное здание",
        "Магазин",
        "Строящееся здание",
        "Автосервис",
        "Общежитие",
        "Хозяйственный корпус",
        "Апартаменты",
        "Кафе, бар",
        "Ветлечебница",
        "Строящийся коттедж",
        "Строящееся административное здание",
        "Производственный корпус",
        "Киоск",
        "Бани, сауны",
        "Гостиница",
        "Планируемая застройка",
        "Строящийся таунхаус",
        "Детский сад, ясли",
        "Религиозное сооружение",
        "Гараж",
        "Ремонтируемое здание",
        "Автомойка",
        "Ресторан",
        "Автоцентр",
        "Склад",
        "Столовая",
        "Торговый павильон",
        "Государственное учреждение",
        "Шиномонтаж",
        "Школа",
        "Спортивное сооружение",
        "Таунхаус",
        "Сооружение",
        "Малоэтажный жилой дом"
    ];
    // Defer heavy filtering inputs to keep UI responsive on large datasets
    const deferredSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(searchQuery);
    const deferredDistrictFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(districtFilter);
    const deferredBuildingTypeFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(buildingTypeFilter);
    const deferredYearFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(yearFilter);
    const deferredFloorsFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(floorsFilter);
    const deferredApartmentsFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(apartmentsFilter);
    const deferredShowOnlySeasonalUnused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showOnlySeasonalUnused);
    const deferredShowAlseco = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showAlseco);
    const deferredShowIzhs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showIzhs);
    const deferredShowSusn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showSusn);
    const deferredShowAlsecoIzhsTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showAlsecoIzhsTypes);
    const deferredShowAlsecoNonIzhsTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showAlsecoNonIzhsTypes);
    const deferredShowAlsecoInAlmaty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showAlsecoInAlmaty);
    const deferredShowAlsecoNotInAlmaty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showAlsecoNotInAlmaty);
    const deferredShowApproximate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showApproximate);
    const deferredShowExact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showExact);
    const deferredSelectedAlsecoIzhsTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(selectedAlsecoIzhsTypes);
    const deferredSelectedAlsecoNonIzhsTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(selectedAlsecoNonIzhsTypes);
    const deferredSelectedDistrictId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(selectedDistrictId);
    const deferredShowHeatmap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showHeatmap);
    const deferredShowRenovationAreas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showRenovationAreas);
    const deferredShowWithGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showWithGas);
    const deferredShowWithoutGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showWithoutGas);
    const deferredShowUnknownGas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(showUnknownGas);
    const allAlsecoIzhsSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildingsWithoutGasPage.useMemo[allAlsecoIzhsSelected]": ()=>alsecoIzhsLabels.every({
                "BuildingsWithoutGasPage.useMemo[allAlsecoIzhsSelected]": (label)=>deferredSelectedAlsecoIzhsTypes[label]
            }["BuildingsWithoutGasPage.useMemo[allAlsecoIzhsSelected]"])
    }["BuildingsWithoutGasPage.useMemo[allAlsecoIzhsSelected]"], [
        alsecoIzhsLabels,
        deferredSelectedAlsecoIzhsTypes
    ]);
    const allAlsecoNonIzhsSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildingsWithoutGasPage.useMemo[allAlsecoNonIzhsSelected]": ()=>alsecoNonIzhsLabels.every({
                "BuildingsWithoutGasPage.useMemo[allAlsecoNonIzhsSelected]": (label)=>deferredSelectedAlsecoNonIzhsTypes[label]
            }["BuildingsWithoutGasPage.useMemo[allAlsecoNonIzhsSelected]"])
    }["BuildingsWithoutGasPage.useMemo[allAlsecoNonIzhsSelected]"], [
        alsecoNonIzhsLabels,
        deferredSelectedAlsecoNonIzhsTypes
    ]);
    const alsecoIzhsLabelSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildingsWithoutGasPage.useMemo[alsecoIzhsLabelSet]": ()=>new Set(alsecoIzhsLabels)
    }["BuildingsWithoutGasPage.useMemo[alsecoIzhsLabelSet]"], [
        alsecoIzhsLabels
    ]);
    const alsecoNonIzhsLabelSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildingsWithoutGasPage.useMemo[alsecoNonIzhsLabelSet]": ()=>new Set(alsecoNonIzhsLabels)
    }["BuildingsWithoutGasPage.useMemo[alsecoNonIzhsLabelSet]"], [
        alsecoNonIzhsLabels
    ]);
    const alsecoTypeCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildingsWithoutGasPage.useMemo[alsecoTypeCounts]": ()=>{
            const counts = {};
            const allowAnyLocation = deferredShowAlsecoInAlmaty && deferredShowAlsecoNotInAlmaty;
            for (const b of buildings){
                if (b.building_category !== "general") continue;
                // Filter by selected district
                if (deferredDistrictFilter !== "all" && b.district !== deferredDistrictFilter) continue;
                const rawType = (b.building_type_raw || "").trim();
                if (!rawType) continue;
                if (!allowAnyLocation) {
                    const isNotInAlmaty = b.is_not_in_almaty === true;
                    if (deferredShowAlsecoInAlmaty && isNotInAlmaty) continue;
                    if (deferredShowAlsecoNotInAlmaty && !isNotInAlmaty) continue;
                    if (!deferredShowAlsecoInAlmaty && !deferredShowAlsecoNotInAlmaty) continue;
                }
                const label = rawType === "Не указано" ? "Дом" : rawType;
                if (label in counts) {
                    counts[label]++;
                } else if (alsecoIzhsLabelSet.has(label) || alsecoNonIzhsLabelSet.has(label)) {
                    counts[label] = 1;
                }
            }
            return counts;
        }
    }["BuildingsWithoutGasPage.useMemo[alsecoTypeCounts]"], [
        buildings,
        deferredDistrictFilter,
        deferredShowAlsecoInAlmaty,
        deferredShowAlsecoNotInAlmaty,
        alsecoIzhsLabelSet,
        alsecoNonIzhsLabelSet
    ]);
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
    // Debug: Log gas filter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuildingsWithoutGasPage.useEffect": ()=>{
            console.log("🔥 GAS FILTER STATE CHANGED:", {
                showWithGas,
                showWithoutGas,
                showUnknownGas,
                allChecked: showWithGas && showWithoutGas && showUnknownGas,
                noneChecked: !showWithGas && !showWithoutGas && !showUnknownGas
            });
        }
    }["BuildingsWithoutGasPage.useEffect"], [
        showWithGas,
        showWithoutGas,
        showUnknownGas
    ]);
    const handleBuildingClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BuildingsWithoutGasPage.useCallback[handleBuildingClick]": (building)=>{
            setSelectedBuilding(building);
            setShowSidePanel(true);
        }
    }["BuildingsWithoutGasPage.useCallback[handleBuildingClick]"], []);
    const handleDistrictFilterChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]": (districtName)=>{
            startTransition({
                "BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]": ()=>{
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
            }["BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]"]);
        }
    }["BuildingsWithoutGasPage.useCallback[handleDistrictFilterChange]"], [
        startTransition
    ]);
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
                    const hasBuildingTypeField = typeof cachedData[0]?.building_type !== "undefined";
                    const hasIsApproximateField = "is_approximate" in cachedData[0];
                    if (!hasBuildingTypeField || !hasIsApproximateField) {
                        console.warn("🧹 Cache missing required fields, refetching from API...");
                    } else {
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
            }
            console.log("📡 Fetching from API with streaming...");
            setLoadingProgress({
                loaded: 0,
                total: 0,
                status: "Подключение к серверу..."
            });
            // ✅ Fetch with streaming to track download progress
            const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/buildings-without-gas/all-sources/");
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
            // Debug: Check gas connection values
            const gasStats = {
                total: buildingsData.length,
                withGas: buildingsData.filter((b)=>b.has_gas === true).length,
                withoutGas: buildingsData.filter((b)=>b.has_gas === false).length,
                nullGas: buildingsData.filter((b)=>b.has_gas === null || b.has_gas === undefined).length
            };
            console.log("🔥 GAS STATISTICS:", gasStats);
            console.log("🔥 Sample buildings with gas (TRUE):", buildingsData.filter((b)=>b.has_gas === true).slice(0, 3));
            console.log("🔥 Sample buildings without gas (FALSE):", buildingsData.filter((b)=>b.has_gas === false).slice(0, 3));
            console.log("🔥 Sample buildings with unknown gas (NULL):", buildingsData.filter((b)=>b.has_gas === null || b.has_gas === undefined).slice(0, 3));
            // Also log raw API data to see what's coming from backend
            console.log("🔥 Sample RAW API data (first 5):", apiBuildings.slice(0, 5).map((b)=>({
                    id: b.id,
                    address: b.address,
                    gas_connected: b.gas_connected,
                    has_gas: b.has_gas
                })));
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
            // District label lookup - prioritize district_id mapping for consistency
            let districtLabel;
            if (b.district_id !== null && b.district_id !== undefined && DISTRICT_LABELS[String(b.district_id)]) {
                // Use district_id mapping if available (most reliable)
                districtLabel = DISTRICT_LABELS[String(b.district_id)];
            } else if (b.district && typeof b.district === "string") {
                // Fallback to raw district text from API
                districtLabel = b.district;
            } else if (b.district_id !== null && b.district_id !== undefined) {
                // Fallback for unmapped district_id
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
                has_gas: b.gas_connected ?? b.has_gas ?? null,
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
                    const matchesCategory = deferredShowAlseco && building.building_category === "general" || deferredShowIzhs && building.building_category === "izhs" || deferredShowSusn && building.building_category === "susn";
                    if (!matchesCategory) return false;
                    // Filter by gas connection (three-state: true/false/null)
                    const hasGas = building.has_gas;
                    const matchesGas = deferredShowWithGas && hasGas === true || deferredShowWithoutGas && hasGas === false || deferredShowUnknownGas && hasGas === null;
                    // Debug: Log filter behavior (sample 0.1% to avoid spam)
                    if (!matchesGas && Math.random() < 0.001) {
                        console.log("🔥 Gas filter excluding building:", {
                            address: building.address,
                            has_gas: hasGas,
                            showWithGas: deferredShowWithGas,
                            showWithoutGas: deferredShowWithoutGas,
                            showUnknownGas: deferredShowUnknownGas
                        });
                    }
                    if (!matchesGas) return false;
                    // ALSECO-specific building type filter (ИЖС vs не ИЖС)
                    if (building.building_category === "general") {
                        const rawType = (building.building_type_raw || "").trim();
                        // If no building type, treat as "Дом" (default ИЖС type)
                        const effectiveType = rawType || "Дом";
                        const allowAnyType = deferredShowAlsecoIzhsTypes && deferredShowAlsecoNonIzhsTypes && allAlsecoIzhsSelected && allAlsecoNonIzhsSelected;
                        if (!allowAnyType) {
                            // Use effectiveType for filtering (empty rawType defaults to "Дом")
                            const typeForFilter = rawType === "Не указано" || !rawType ? "Дом" : rawType;
                            const isIzhsType = alsecoIzhsLabelSet.has(typeForFilter);
                            const allowAnyNonIzhsType = deferredShowAlsecoNonIzhsTypes && allAlsecoNonIzhsSelected;
                            const matchesIzhs = deferredShowAlsecoIzhsTypes && deferredSelectedAlsecoIzhsTypes[typeForFilter];
                            const matchesNonIzhs = deferredShowAlsecoNonIzhsTypes && (deferredSelectedAlsecoNonIzhsTypes[rawType] || allowAnyNonIzhsType && !isIzhsType);
                            if (!matchesIzhs && !matchesNonIzhs) return false;
                        }
                        const isNotInAlmaty = building.is_not_in_almaty === true;
                        const allowAnyLocation = deferredShowAlsecoInAlmaty && deferredShowAlsecoNotInAlmaty;
                        if (!allowAnyLocation) {
                            if (deferredShowAlsecoInAlmaty && isNotInAlmaty) return false;
                            if (deferredShowAlsecoNotInAlmaty && !isNotInAlmaty) return false;
                            if (!deferredShowAlsecoInAlmaty && !deferredShowAlsecoNotInAlmaty) return false;
                        }
                        // Approximate / exact coordinate filter
                        const isApproximate = building.is_approximate === true;
                        const allowAnyCoordType = deferredShowApproximate && deferredShowExact;
                        if (!allowAnyCoordType) {
                            if (deferredShowApproximate && !isApproximate) return false;
                            if (deferredShowExact && isApproximate) return false;
                            if (!deferredShowApproximate && !deferredShowExact) return false;
                        }
                    }
                    // Filter for seasonal/unused buildings only
                    if (deferredShowOnlySeasonalUnused && building.is_seasonal_or_unused !== true) return false;
                    const matchesDistrict = deferredDistrictFilter === "all" || deferredDistrictFilter === "no_district" && (building.district_id === null || building.district_id === undefined) || building.district === deferredDistrictFilter;
                    const matchesSearch = deferredSearchQuery === "" || building.address.toLowerCase().includes(deferredSearchQuery.toLowerCase()) || building.district.toLowerCase().includes(deferredSearchQuery.toLowerCase());
                    // Filter by building type (keeping for backward compatibility)
                    const matchesType = deferredBuildingTypeFilter === "all" || building.building_category === deferredBuildingTypeFilter;
                    // Advanced filters
                    const matchesYear = !deferredYearFilter || building.year_built && building.year_built >= deferredYearFilter.min && building.year_built <= deferredYearFilter.max;
                    const matchesFloors = !deferredFloorsFilter || building.floors && building.floors >= deferredFloorsFilter.min && building.floors <= deferredFloorsFilter.max;
                    const matchesApartments = !deferredApartmentsFilter || building.apartments && building.apartments >= deferredApartmentsFilter.min && building.apartments <= deferredApartmentsFilter.max;
                    return matchesDistrict && matchesSearch && matchesType && matchesYear && matchesFloors && matchesApartments;
                }
            }["BuildingsWithoutGasPage.useMemo[filteredBuildings]"]);
        }
    }["BuildingsWithoutGasPage.useMemo[filteredBuildings]"], [
        buildings,
        deferredDistrictFilter,
        deferredSearchQuery,
        deferredBuildingTypeFilter,
        deferredYearFilter,
        deferredFloorsFilter,
        deferredApartmentsFilter,
        deferredShowOnlySeasonalUnused,
        deferredShowAlseco,
        deferredShowIzhs,
        deferredShowSusn,
        deferredShowAlsecoIzhsTypes,
        deferredShowAlsecoNonIzhsTypes,
        deferredSelectedAlsecoIzhsTypes,
        deferredSelectedAlsecoNonIzhsTypes,
        allAlsecoIzhsSelected,
        allAlsecoNonIzhsSelected,
        alsecoIzhsLabelSet,
        deferredShowAlsecoInAlmaty,
        deferredShowAlsecoNotInAlmaty,
        deferredShowApproximate,
        deferredShowExact,
        deferredShowWithGas,
        deferredShowWithoutGas,
        deferredShowUnknownGas
    ]);
    // Deferred buildings for map to keep UI responsive during heavy filtering
    const deferredFilteredBuildings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"])(filteredBuildings);
    // Category-specific counts (all buildings, for district dropdown)
    const generalBuildings = buildings.filter((b)=>b.building_category === "general");
    const izhsBuildings = buildings.filter((b)=>b.building_category === "izhs");
    const susnBuildings = buildings.filter((b)=>b.building_category === "susn");
    // Get districts from all visible categories
    const visibleBuildings = buildings.filter((b)=>showAlseco && b.building_category === "general" || showIzhs && b.building_category === "izhs" || showSusn && b.building_category === "susn");
    // Valid Almaty districts for filter dropdown (only district_id 1-8)
    // Buildings with district_id = null are shown under "Без района"
    const VALID_ALMATY_DISTRICTS = [
        "Алатауский район",
        "Алмалинский район",
        "Ауэзовский район",
        "Бостандыкский район",
        "Жетысуский район",
        "Медеуский район",
        "Наурызбайский район",
        "Турксибский район"
    ];
    // Buildings filtered by selected district (for dynamic counts in checkboxes)
    // "no_district" = buildings where district_id is null (shown as "Не указан")
    const districtFilteredBuildings = districtFilter === "all" ? buildings : districtFilter === "no_district" ? buildings.filter((b)=>b.district_id === null || b.district_id === undefined) : buildings.filter((b)=>b.district === districtFilter);
    const districtFilteredGeneral = districtFilteredBuildings.filter((b)=>b.building_category === "general");
    const districtFilteredIzhs = districtFilteredBuildings.filter((b)=>b.building_category === "izhs");
    const districtFilteredSusn = districtFilteredBuildings.filter((b)=>b.building_category === "susn");
    const districtNames = VALID_ALMATY_DISTRICTS.filter((validDistrict)=>visibleBuildings.some((b)=>b.district === validDistrict));
    // District counts for dropdown
    const districtCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BuildingsWithoutGasPage.useMemo[districtCounts]": ()=>{
            const counts = {
                all: visibleBuildings.length,
                no_district: 0
            };
            for (const b of visibleBuildings){
                // Check if building has a valid district_id (1-8)
                if (b.district_id !== null && b.district_id !== undefined && b.district && VALID_ALMATY_DISTRICTS.includes(b.district)) {
                    counts[b.district] = (counts[b.district] || 0) + 1;
                } else {
                    // Buildings with district_id = null (Без района)
                    counts.no_district++;
                }
            }
            return counts;
        }
    }["BuildingsWithoutGasPage.useMemo[districtCounts]"], [
        visibleBuildings
    ]);
    // Category counts - filtered by selected district
    const categoryCounts = {
        general: districtFilteredGeneral.length,
        izhs: districtFilteredIzhs.length,
        susn: districtFilteredSusn.length
    };
    // Gas connection counts - filtered by selected district and visible categories
    const districtAndCategoryFiltered = districtFilteredBuildings.filter((b)=>showAlseco && b.building_category === "general" || showIzhs && b.building_category === "izhs" || showSusn && b.building_category === "susn");
    const gasCounts = {
        withGas: districtAndCategoryFiltered.filter((b)=>b.has_gas === true).length,
        withoutGas: districtAndCategoryFiltered.filter((b)=>b.has_gas === false).length,
        unknown: districtAndCategoryFiltered.filter((b)=>b.has_gas === null || b.has_gas === undefined).length
    };
    // Total of selected categories
    const selectedCategoriesTotal = (showAlseco ? categoryCounts.general : 0) + (showIzhs ? categoryCounts.izhs : 0) + (showSusn ? categoryCounts.susn : 0);
    // "In Almaty" counts - filtered by selected district
    const inAlmatyCounts = {
        general: districtFilteredGeneral.filter((b)=>!b.is_not_in_almaty).length,
        izhs: districtFilteredIzhs.filter((b)=>!b.is_not_in_almaty).length,
        susn: districtFilteredSusn.filter((b)=>!b.is_not_in_almaty).length
    };
    // "Not in Almaty" counts - filtered by selected district
    const notInAlmatyCounts = {
        general: districtFilteredGeneral.filter((b)=>b.is_not_in_almaty).length,
        izhs: districtFilteredIzhs.filter((b)=>b.is_not_in_almaty).length,
        susn: districtFilteredSusn.filter((b)=>b.is_not_in_almaty).length
    };
    const locationFilteredGeneral = districtFilteredGeneral.filter((b)=>{
        if (showAlsecoInAlmaty && showAlsecoNotInAlmaty) return true;
        if (showAlsecoInAlmaty && !b.is_not_in_almaty) return true;
        if (showAlsecoNotInAlmaty && b.is_not_in_almaty) return true;
        return false;
    });
    const approximateCount = locationFilteredGeneral.filter((b)=>b.is_approximate === true).length;
    const exactCount = locationFilteredGeneral.filter((b)=>b.is_approximate !== true).length;
    const selectedCategoriesInAlmaty = (showAlseco ? inAlmatyCounts.general : 0) + (showIzhs ? inAlmatyCounts.izhs : 0) + (showSusn ? inAlmatyCounts.susn : 0);
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
            className: "relative h-screen w-screen overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "relative z-30 h-14 shrink-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 px-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-orange-500/5 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "Логотип",
                                        className: "h-full w-full object-contain p-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 1159,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-semibold tracking-[0.15em] text-blue-300/70 uppercase leading-none",
                                            children: "Ситуационный центр"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-base font-bold text-white tracking-tight",
                                            children: "Здания без газа"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center bg-black/[0.3] border border-white/[0.1] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.25)] backdrop-blur-sm overflow-hidden",
                            children: [
                                {
                                    color: "#10b981",
                                    glow: "rgba(16,185,129,0.5)",
                                    label: "Точные",
                                    emoji: "🏠"
                                },
                                {
                                    color: "#eab308",
                                    glow: "rgba(234,179,8,0.5)",
                                    label: "Приближённые",
                                    emoji: "🏠"
                                },
                                {
                                    color: "#8b5cf6",
                                    glow: "rgba(139,92,246,0.5)",
                                    label: "Не ИЖС",
                                    emoji: "🏬"
                                },
                                {
                                    color: "#ec4899",
                                    glow: "rgba(236,72,153,0.5)",
                                    label: "Сезонные",
                                    emoji: "❄️"
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-4 bg-white/[0.12]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1177,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-3 py-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "11",
                                                    height: "15",
                                                    viewBox: "0 0 11 15",
                                                    style: {
                                                        filter: `drop-shadow(0 2px 3px ${item.glow})`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M5.5 0C2.46 0 0 2.46 0 5.5 0 9.63 5.5 15 5.5 15S11 9.63 11 5.5C11 2.46 8.54 0 5.5 0z",
                                                            fill: item.color
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1180,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "5.5",
                                                            cy: "5.5",
                                                            r: "2.2",
                                                            fill: "white",
                                                            opacity: "0.95"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1181,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1179,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-white/55 font-semibold tracking-[0.02em]",
                                                    children: [
                                                        item.emoji,
                                                        " ",
                                                        item.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>startTransition(()=>setShowHeatmap(!showHeatmap)),
                                    className: `h-9 px-3 flex items-center gap-2 rounded-lg text-xs font-semibold transition-all ${showHeatmap ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Тепловая карта"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1200,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>startTransition(()=>setShowRenovationAreas(!showRenovationAreas)),
                                    className: `h-9 px-3 flex items-center gap-2 rounded-lg text-xs font-semibold transition-all ${showRenovationAreas ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25" : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Реновация"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-6 bg-white/10 mx-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/buildings-without-gas/analytics",
                                    className: "h-9 px-3 flex items-center gap-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 transition-all text-xs font-semibold",
                                    title: "Аналитика",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Аналитика"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: exportToCSV,
                                    className: "h-9 px-3 flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all text-xs font-medium",
                                    title: "Экспорт CSV",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "CSV"
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>fetchBuildings(true),
                                    disabled: loading,
                                    className: "h-9 w-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-all disabled:opacity-50",
                                    title: "Обновить данные",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: `h-4 w-4 ${loading ? 'animate-spin' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 1236,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                    lineNumber: 1152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1 overflow-hidden",
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
                                                lineNumber: 1249,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-800 text-center mb-2",
                                            children: loadingProgress.status || "Загрузка..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1251,
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
                                                        lineNumber: 1257,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1256,
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
                                                    lineNumber: 1262,
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
                                                    lineNumber: 1269,
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
                                                    lineNumber: 1270,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1268,
                                            columnNumber: 17
                                        }, this),
                                        loadingElapsed > 15 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-600 text-center mt-2",
                                            children: "⏳ Загрузка занимает больше времени чем обычно..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1275,
                                            columnNumber: 19
                                        }, this),
                                        loadingElapsed > 30 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-orange-600 text-center mt-1",
                                            children: "Сервер обрабатывает ~50,000 записей. Пожалуйста, подождите."
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1280,
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
                                            lineNumber: 1285,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1247,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 1246,
                                columnNumber: 13
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full flex-col items-center justify-center gap-3 bg-background",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-12 w-12 text-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 1299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 font-semibold",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 1300,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Используются тестовые данные для демонстрации"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 1301,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>fetchBuildings(true),
                                        children: "Попробовать снова"
                                    }, void 0, false, {
                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                        lineNumber: 1302,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 1298,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BuildingsMap, {
                                buildings: deferredFilteredBuildings.filter((b)=>b.latitude && b.longitude),
                                renovationAreas: renovationAreas,
                                districts: districts,
                                selectedDistrictId: deferredSelectedDistrictId,
                                showHeatmap: deferredShowHeatmap,
                                showRenovationAreas: deferredShowRenovationAreas,
                                showOnlySeasonalUnused: deferredShowOnlySeasonalUnused,
                                onBuildingClick: handleBuildingClick
                            }, void 0, false, {
                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                lineNumber: 1307,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1244,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 h-full w-full pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 bottom-0 w-[300px] pointer-events-auto z-20 flex flex-col bg-white/95 backdrop-blur-xl border-r border-slate-200/80 shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold text-slate-400 uppercase tracking-wider",
                                                        children: "Фильтры"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1327,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-6 w-6 rounded-lg flex items-center justify-center transition-colors ${isPending ? 'bg-amber-100' : 'bg-blue-100'}`,
                                                                children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-3 w-3 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1331,
                                                                    columnNumber: 21
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                                    className: "h-3 w-3 text-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1333,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1329,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm font-bold tabular-nums leading-tight transition-opacity ${isPending ? 'text-slate-400' : 'text-slate-700'}`,
                                                                    children: [
                                                                        filteredBuildings.length.toLocaleString(),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-normal text-slate-400 ml-1",
                                                                            children: [
                                                                                "/ ",
                                                                                selectedCategoriesTotal.toLocaleString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1339,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1337,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1336,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1328,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                lineNumber: 1326,
                                                columnNumber: 13
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1325,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto custom-scrollbar px-4 py-4 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                        className: "h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 1354,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1353,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: searchQuery,
                                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                                    placeholder: "Поиск по адресу...",
                                                                    className: "h-11 w-full rounded-xl border-2 border-slate-100 bg-white pl-11 pr-10 text-sm font-medium placeholder:text-slate-300 transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1356,
                                                                    columnNumber: 17
                                                                }, this),
                                                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setSearchQuery(""),
                                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-all",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "h-3.5 w-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 1365,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1352,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowDistrictDropdown(!showDistrictDropdown),
                                                                    className: `h-11 w-full rounded-xl border-2 bg-white pl-4 pr-4 text-sm font-medium text-slate-700 cursor-pointer outline-none transition-all flex items-center gap-3 ${showDistrictDropdown ? "border-blue-500 ring-4 ring-blue-500/10" : "border-slate-100 hover:border-slate-200"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            className: `h-4 w-4 shrink-0 ${districtFilter !== "all" ? "text-blue-500" : "text-slate-400"}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1378,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 text-left truncate",
                                                                            children: districtFilter === "all" ? "Все районы" : districtFilter === "no_district" ? "Без района" : districtFilter
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1379,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        districtFilter !== "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-600 text-[10px] font-semibold",
                                                                            children: districtCounts[districtFilter]?.toLocaleString() || 0
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1383,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `h-4 w-4 text-slate-400 transition-transform ${showDistrictDropdown ? "rotate-180" : ""}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1387,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1372,
                                                                    columnNumber: 17
                                                                }, this),
                                                                showDistrictDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "fixed inset-0 z-40",
                                                                            onClick: ()=>setShowDistrictDropdown(false)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1394,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>{
                                                                                        handleDistrictFilterChange("all");
                                                                                        setShowDistrictDropdown(false);
                                                                                    },
                                                                                    className: `w-full px-4 py-2.5 flex items-center gap-3 transition-colors ${districtFilter === "all" ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50 text-slate-700"}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: `h-6 w-6 rounded-lg flex items-center justify-center ${districtFilter === "all" ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-400"}`,
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                                className: "h-3.5 w-3.5"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                lineNumber: 1415,
                                                                                                columnNumber: 27
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1412,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "flex-1 text-left text-sm font-medium",
                                                                                            children: "Все районы"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1417,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `px-2 py-0.5 rounded-lg text-[11px] font-semibold ${districtFilter === "all" ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`,
                                                                                            children: districtCounts.all?.toLocaleString() || 0
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1418,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        districtFilter === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                            className: "h-4 w-4 text-blue-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1424,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1401,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-px bg-slate-100"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1428,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                districtCounts.no_district > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>{
                                                                                        handleDistrictFilterChange("no_district");
                                                                                        setShowDistrictDropdown(false);
                                                                                    },
                                                                                    className: `w-full px-4 py-2.5 flex items-center gap-3 transition-colors ${districtFilter === "no_district" ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50 text-slate-700"}`,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: `h-6 w-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${districtFilter === "no_district" ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"}`,
                                                                                            children: "?"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1443,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "flex-1 text-left text-sm font-medium",
                                                                                            children: "Без района"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1448,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: `px-2 py-0.5 rounded-lg text-[11px] font-semibold tabular-nums ${districtFilter === "no_district" ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`,
                                                                                            children: districtCounts.no_district?.toLocaleString() || 0
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1449,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        districtFilter === "no_district" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                            className: "h-4 w-4 text-blue-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1455,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1432,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                districtCounts.no_district > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-px bg-slate-100"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1460,
                                                                                    columnNumber: 58
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "max-h-[280px] overflow-y-auto custom-scrollbar",
                                                                                    children: districtNames.map((district, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>{
                                                                                                handleDistrictFilterChange(district);
                                                                                                setShowDistrictDropdown(false);
                                                                                            },
                                                                                            className: `w-full px-4 py-2.5 flex items-center gap-3 transition-colors ${districtFilter === district ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50 text-slate-700"}`,
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: `h-6 w-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${districtFilter === district ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"}`,
                                                                                                    children: index + 1
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1477,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "flex-1 text-left text-sm font-medium truncate",
                                                                                                    children: district
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1482,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: `px-2 py-0.5 rounded-lg text-[11px] font-semibold tabular-nums ${districtFilter === district ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`,
                                                                                                    children: districtCounts[district]?.toLocaleString() || 0
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1483,
                                                                                                    columnNumber: 29
                                                                                                }, this),
                                                                                                districtFilter === district && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                                    className: "h-4 w-4 text-blue-500 shrink-0"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1489,
                                                                                                    columnNumber: 31
                                                                                                }, this)
                                                                                            ]
                                                                                        }, district, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1465,
                                                                                            columnNumber: 27
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1463,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1399,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1371,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1350,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>document.getElementById('categories-content')?.classList.toggle('hidden'),
                                                            className: "w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                                                className: "h-4 w-4 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                lineNumber: 1508,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1507,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold text-slate-700",
                                                                            children: "Категории данных"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1510,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1506,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "h-4 w-4 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1512,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1502,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            id: "categories-content",
                                                            className: "px-4 pb-4 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-xl border-2 border-orange-100 bg-gradient-to-r from-orange-50/50 to-transparent overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-orange-50/50 transition-colors",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "relative",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: showAlseco,
                                                                                            onChange: (e)=>startTransition(()=>setShowAlseco(e.target.checked)),
                                                                                            className: "peer sr-only"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1520,
                                                                                            columnNumber: 23
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "h-5 w-5 rounded-lg border-2 border-slate-200 bg-white peer-checked:border-orange-500 peer-checked:bg-orange-500 transition-all flex items-center justify-center",
                                                                                            children: showAlseco && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                                className: "h-3.5 w-3.5 text-white"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                lineNumber: 1527,
                                                                                                columnNumber: 40
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1526,
                                                                                            columnNumber: 23
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1519,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-sm font-semibold text-slate-700",
                                                                                            children: "ALSECO"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1531,
                                                                                            columnNumber: 23
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs text-slate-400 ml-2",
                                                                                            children: [
                                                                                                "(",
                                                                                                categoryCounts.general.toLocaleString(),
                                                                                                ")"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1532,
                                                                                            columnNumber: 23
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1530,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-3 w-3 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm shadow-orange-200"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1534,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1518,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        showAlseco && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-4 pb-3 pt-1 space-y-1.5 border-t border-orange-100/50",
                                                                            onClick: (e)=>e.stopPropagation(),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2.5 py-1 cursor-pointer group",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: showAlsecoInAlmaty,
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setShowAlsecoInAlmaty(e.target.checked));
                                                                                            },
                                                                                            className: "h-4 w-4 rounded border-slate-200 text-orange-500 focus:ring-orange-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1539,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "flex-1 text-xs text-slate-500 group-hover:text-slate-700 transition-colors",
                                                                                            children: "В Алматы"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1548,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                                            children: [
                                                                                                "(",
                                                                                                inAlmatyCounts.general.toLocaleString(),
                                                                                                ")"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1549,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1538,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2.5 py-1 cursor-pointer group",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: showAlsecoNotInAlmaty,
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setShowAlsecoNotInAlmaty(e.target.checked));
                                                                                            },
                                                                                            className: "h-4 w-4 rounded border-slate-200 text-orange-500 focus:ring-orange-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1552,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "flex-1 text-xs text-slate-500 group-hover:text-slate-700 transition-colors",
                                                                                            children: "Не в Алматы"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1561,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                                            children: [
                                                                                                "(",
                                                                                                notInAlmatyCounts.general.toLocaleString(),
                                                                                                ")"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1562,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1551,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "border-t border-orange-100/50 my-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1564,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2.5 py-1 cursor-pointer group",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: showApproximate,
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setShowApproximate(e.target.checked));
                                                                                            },
                                                                                            className: "h-4 w-4 rounded border-slate-200 text-yellow-500 focus:ring-yellow-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1566,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-1.5 flex-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-2.5 h-2.5 rounded-full bg-yellow-500"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1576,
                                                                                                    columnNumber: 27
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs text-slate-500 group-hover:text-slate-700 transition-colors",
                                                                                                    children: "Приближённые"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1577,
                                                                                                    columnNumber: 27
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1575,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                                            children: [
                                                                                                "(",
                                                                                                approximateCount.toLocaleString(),
                                                                                                ")"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1579,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1565,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2.5 py-1 cursor-pointer group",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: showExact,
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setShowExact(e.target.checked));
                                                                                            },
                                                                                            className: "h-4 w-4 rounded border-slate-200 text-emerald-500 focus:ring-emerald-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1582,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-1.5 flex-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    className: "w-2.5 h-2.5 rounded-full bg-emerald-500"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1592,
                                                                                                    columnNumber: 27
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs text-slate-500 group-hover:text-slate-700 transition-colors",
                                                                                                    children: "Точные"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                                    lineNumber: 1593,
                                                                                                    columnNumber: 27
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1591,
                                                                                            columnNumber: 25
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                                            children: [
                                                                                                "(",
                                                                                                exactCount.toLocaleString(),
                                                                                                ")"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1595,
                                                                                            columnNumber: 25
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1581,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1537,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1517,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-emerald-100 bg-gradient-to-r from-emerald-50/50 to-transparent cursor-pointer hover:bg-emerald-50/50 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: showIzhs,
                                                                                    onChange: (e)=>startTransition(()=>setShowIzhs(e.target.checked)),
                                                                                    className: "peer sr-only"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1604,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-5 w-5 rounded-lg border-2 border-slate-200 bg-white peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center",
                                                                                    children: showIzhs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                        className: "h-3.5 w-3.5 text-white"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                        lineNumber: 1611,
                                                                                        columnNumber: 36
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1610,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1603,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-semibold text-slate-700",
                                                                                    children: "Районные акиматы"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1615,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-slate-400 ml-2",
                                                                                    children: [
                                                                                        "(",
                                                                                        categoryCounts.izhs.toLocaleString(),
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1616,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1614,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-3 w-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-sm shadow-emerald-200"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1618,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1602,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-blue-100 bg-gradient-to-r from-blue-50/50 to-transparent cursor-pointer hover:bg-blue-50/50 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: showSusn,
                                                                                    onChange: (e)=>startTransition(()=>setShowSusn(e.target.checked)),
                                                                                    className: "peer sr-only"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1624,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-5 w-5 rounded-lg border-2 border-slate-200 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all flex items-center justify-center",
                                                                                    children: showSusn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                        className: "h-3.5 w-3.5 text-white"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                        lineNumber: 1631,
                                                                                        columnNumber: 36
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1630,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1623,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-semibold text-slate-700",
                                                                                    children: "СУСН"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1635,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-slate-400 ml-2",
                                                                                    children: [
                                                                                        "(",
                                                                                        categoryCounts.susn.toLocaleString(),
                                                                                        ")"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1636,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1634,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-3 w-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm shadow-blue-200"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1638,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1622,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1515,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1501,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>document.getElementById('gas-filters')?.classList.toggle('hidden'),
                                                            className: "w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                                                className: "h-4 w-4 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                lineNumber: 1651,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1650,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold text-slate-700",
                                                                            children: "Газоснабжение"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1653,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1649,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "h-4 w-4 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1655,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1645,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            id: "gas-filters",
                                                            className: "px-4 pb-4 pt-2 space-y-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2.5 py-1.5 cursor-pointer group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showWithoutGas,
                                                                            onChange: (e)=>startTransition(()=>setShowWithoutGas(e.target.checked)),
                                                                            className: "h-4 w-4 rounded border-slate-200 text-cyan-500 focus:ring-cyan-500/20"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1660,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 text-xs text-slate-600 group-hover:text-slate-800 transition-colors",
                                                                            children: "Не подключен к газу"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1666,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                            children: [
                                                                                "(",
                                                                                gasCounts.withoutGas.toLocaleString(),
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1667,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1659,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2.5 py-1.5 cursor-pointer group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showWithGas,
                                                                            onChange: (e)=>startTransition(()=>setShowWithGas(e.target.checked)),
                                                                            className: "h-4 w-4 rounded border-slate-200 text-cyan-500 focus:ring-cyan-500/20"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1670,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 text-xs text-slate-600 group-hover:text-slate-800 transition-colors",
                                                                            children: "Подключен к газу"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1676,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                            children: [
                                                                                "(",
                                                                                gasCounts.withGas.toLocaleString(),
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1677,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1669,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center gap-2.5 py-1.5 cursor-pointer group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            checked: showUnknownGas,
                                                                            onChange: (e)=>startTransition(()=>setShowUnknownGas(e.target.checked)),
                                                                            className: "h-4 w-4 rounded border-slate-200 text-cyan-500 focus:ring-cyan-500/20"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1680,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-1 text-xs text-slate-600 group-hover:text-slate-800 transition-colors",
                                                                            children: "Не указано"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1686,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-400 font-medium",
                                                                            children: [
                                                                                "(",
                                                                                gasCounts.unknown.toLocaleString(),
                                                                                ")"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1687,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1658,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1644,
                                                    columnNumber: 13
                                                }, this),
                                                showAlseco && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>document.getElementById('alseco-filters')?.classList.toggle('hidden'),
                                                            className: "w-full px-4 py-3.5 flex items-center justify-between hover:bg-slate-50/50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-8 w-8 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-sm",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                                                className: "h-4 w-4 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                lineNumber: 1701,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1700,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold text-slate-700",
                                                                            children: "Фильтры ALSECO"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1703,
                                                                            columnNumber: 19
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1699,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "h-4 w-4 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1705,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1695,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            id: "alseco-filters",
                                                            className: "px-4 pb-4 space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-xl bg-slate-50/80 p-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2 cursor-pointer",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: showAlsecoIzhsTypes,
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setShowAlsecoIzhsTypes(e.target.checked));
                                                                                            },
                                                                                            className: "h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1713,
                                                                                            columnNumber: 23
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs font-semibold text-slate-600",
                                                                                            children: "ИЖС типы"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1722,
                                                                                            columnNumber: 23
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1712,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setShowAlsecoIzhsSubfilters(!showAlsecoIzhsSubfilters);
                                                                                    },
                                                                                    className: `p-1 rounded-lg hover:bg-slate-200/50 transition-all ${showAlsecoIzhsSubfilters ? 'rotate-180' : ''}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                        className: "h-3.5 w-3.5 text-slate-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                        lineNumber: 1731,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1724,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1711,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        showAlsecoIzhsSubfilters && showAlsecoIzhsTypes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1 mt-2 pl-1",
                                                                            onClick: (e)=>e.stopPropagation(),
                                                                            children: alsecoIzhsLabels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2 py-0.5 cursor-pointer group",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: !!selectedAlsecoIzhsTypes[label],
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setSelectedAlsecoIzhsTypes((prev)=>({
                                                                                                            ...prev,
                                                                                                            [label]: e.target.checked
                                                                                                        })));
                                                                                            },
                                                                                            className: "h-3.5 w-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1738,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[11px] text-slate-500 group-hover:text-slate-700 flex-1",
                                                                                            children: label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1747,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-slate-300 tabular-nums",
                                                                                            children: (alsecoTypeCounts[label] || 0).toLocaleString()
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1748,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, label, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1737,
                                                                                    columnNumber: 25
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1735,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1710,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "rounded-xl bg-slate-50/80 p-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2 cursor-pointer",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: showAlsecoNonIzhsTypes,
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setShowAlsecoNonIzhsTypes(e.target.checked));
                                                                                            },
                                                                                            className: "h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1759,
                                                                                            columnNumber: 23
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-xs font-semibold text-slate-600",
                                                                                            children: "Не ИЖС типы"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1768,
                                                                                            columnNumber: 23
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1758,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setShowAlsecoNonIzhsSubfilters(!showAlsecoNonIzhsSubfilters);
                                                                                    },
                                                                                    className: `p-1 rounded-lg hover:bg-slate-200/50 transition-all ${showAlsecoNonIzhsSubfilters ? 'rotate-180' : ''}`,
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                        className: "h-3.5 w-3.5 text-slate-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                        lineNumber: 1777,
                                                                                        columnNumber: 23
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1770,
                                                                                    columnNumber: 21
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1757,
                                                                            columnNumber: 19
                                                                        }, this),
                                                                        showAlsecoNonIzhsSubfilters && showAlsecoNonIzhsTypes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1 mt-2 pl-1",
                                                                            onClick: (e)=>e.stopPropagation(),
                                                                            children: alsecoNonIzhsLabels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "flex items-center gap-2 py-0.5 cursor-pointer group",
                                                                                    onClick: (e)=>e.stopPropagation(),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "checkbox",
                                                                                            checked: !!selectedAlsecoNonIzhsTypes[label],
                                                                                            onChange: (e)=>{
                                                                                                e.stopPropagation();
                                                                                                startTransition(()=>setSelectedAlsecoNonIzhsTypes((prev)=>({
                                                                                                            ...prev,
                                                                                                            [label]: e.target.checked
                                                                                                        })));
                                                                                            },
                                                                                            className: "h-3.5 w-3.5 rounded border-slate-300 text-orange-500 focus:ring-orange-500/20"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1784,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[11px] text-slate-500 group-hover:text-slate-700 flex-1 truncate",
                                                                                            children: label
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1793,
                                                                                            columnNumber: 27
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-[10px] text-slate-300 tabular-nums",
                                                                                            children: (alsecoTypeCounts[label] || 0).toLocaleString()
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                            lineNumber: 1794,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    ]
                                                                                }, label, true, {
                                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                    lineNumber: 1783,
                                                                                    columnNumber: 25
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 1781,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1756,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1708,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1694,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: exportToJSON,
                                                            className: "flex-1 h-9 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all flex items-center justify-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1810,
                                                                    columnNumber: 17
                                                                }, this),
                                                                " JSON"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1806,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: async ()=>{
                                                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$buildingsCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearBuildingsCache"])();
                                                                fetchBuildings(true);
                                                            },
                                                            className: "h-9 px-3 rounded-xl bg-red-50 text-red-400 text-xs font-medium border border-red-100 hover:bg-red-100 hover:text-red-600 transition-all flex items-center justify-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1816,
                                                                    columnNumber: 17
                                                                }, this),
                                                                " Кэш"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1812,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1805,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1347,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1323,
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
                                                    lineNumber: 1826,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedStatsCategory("izhs"),
                                                    className: `flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${selectedStatsCategory === "izhs" ? "bg-green-500 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100"}`,
                                                    children: "Данные районных акиматов"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1836,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedStatsCategory("susn"),
                                                    className: `flex-1 py-1.5 px-2 rounded-lg text-[9px] font-bold transition-all ${selectedStatsCategory === "susn" ? "bg-blue-500 text-white shadow-sm" : "text-slate-500 hover:bg-slate-100"}`,
                                                    children: "СУСН"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1846,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1825,
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
                                                                lineNumber: 1880,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-[2.75rem] font-bold ${primaryColor.text} leading-none tabular-nums`,
                                                                children: categoryData.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1881,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-[7.5px] ${primaryColor.subtext} mt-1.5 leading-tight`,
                                                                children: "зданий"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1884,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1879,
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
                                                                lineNumber: 1889,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[2.75rem] font-bold text-red-600 leading-none tabular-nums",
                                                                children: categoryData.filter((b)=>b.is_not_in_almaty === true).length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1890,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7.5px] text-red-400 mt-1.5 leading-tight",
                                                                children: "за пределами"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1893,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1888,
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
                                                                lineNumber: 1898,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[2.75rem] font-bold text-cyan-600 leading-none tabular-nums",
                                                                children: categoryData.filter((b)=>!b.is_not_in_almaty).length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1899,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7.5px] text-cyan-400 mt-1.5 leading-tight",
                                                                children: "в городе"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1902,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1897,
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
                                                                lineNumber: 1907,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[2.75rem] font-bold text-emerald-600 leading-none tabular-nums",
                                                                children: categoryData.filter((b)=>!b.is_not_in_almaty && b.latitude && b.longitude).length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1908,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7.5px] text-emerald-400 mt-1.5 leading-tight",
                                                                children: "на карте в городе"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1911,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1906,
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
                                                                lineNumber: 1916,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[2.75rem] font-bold text-amber-600 leading-none tabular-nums",
                                                                children: categoryData.filter((b)=>!b.is_not_in_almaty && (!b.latitude || !b.longitude)).length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1917,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7.5px] text-amber-400 mt-1.5 leading-tight",
                                                                children: "в городе без координат"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1920,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1915,
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
                                                                lineNumber: 1925,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[2.75rem] font-bold text-purple-600 leading-none tabular-nums",
                                                                children: new Set(categoryData.filter((b)=>!b.is_not_in_almaty && b.latitude && b.longitude).map((b)=>`${b.latitude},${b.longitude}`)).size
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1926,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[7.5px] text-purple-400 mt-1.5 leading-tight",
                                                                children: "точек на карте"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1929,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1924,
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
                                                                lineNumber: 1934,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[2.75rem] font-bold text-pink-600 leading-none tabular-nums",
                                                                children: categoryData.filter((b)=>b.is_seasonal_or_unused === true).length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1935,
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
                                                                lineNumber: 1938,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowOnlySeasonalUnused(!showOnlySeasonalUnused),
                                                                className: `mt-2 w-full h-6 rounded text-[9px] font-medium transition-all flex items-center justify-center gap-1 ${showOnlySeasonalUnused ? "bg-pink-600 text-white shadow-sm" : "bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100"}`,
                                                                children: showOnlySeasonalUnused ? "✓ Показаны" : "❄️ Показать на карте"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 1939,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                        lineNumber: 1933,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true);
                                        })()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1823,
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
                                                                lineNumber: 1986,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1983,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase",
                                                                    children: "Карточка объекта"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1989,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-sm font-bold text-slate-900 leading-tight",
                                                                    children: "Информация"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 1990,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 1988,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1982,
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
                                                        lineNumber: 1997,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 1993,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 1981,
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
                                                            lineNumber: 2005,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-m font-bold text-slate-900 leading-snug",
                                                            children: selectedBuilding.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2006,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-500 mt-1 flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "h-3.5 w-3.5 text-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2008,
                                                                    columnNumber: 19
                                                                }, this),
                                                                " ",
                                                                selectedBuilding.district
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2007,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2004,
                                                    columnNumber: 15
                                                }, this),
                                                selectedBuilding.has_gas === true ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-2xl bg-green-50 border border-green-100 flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 shrink-0 rounded-full bg-green-500 flex items-center justify-center shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                className: "h-5 w-5 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 2016,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2015,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xs font-bold text-green-900 uppercase tracking-tight",
                                                                    children: "Газ подключен"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2019,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-green-700 leading-relaxed mt-0.5",
                                                                    children: "Объект имеет централизованное газоснабжение."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2020,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2018,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2014,
                                                    columnNumber: 17
                                                }, this) : selectedBuilding.has_gas === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-2xl bg-orange-50 border border-orange-100 flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 shrink-0 rounded-full bg-orange-500 flex items-center justify-center shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "h-5 w-5 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 2028,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2027,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xs font-bold text-orange-900 uppercase tracking-tight",
                                                                    children: "Газ отсутствует"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2031,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-orange-700 leading-relaxed mt-0.5",
                                                                    children: "Объект числится в списках на газификацию или использует альтернативные источники."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2032,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2030,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2026,
                                                    columnNumber: 17
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-2xl bg-slate-50 border border-slate-200 flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 w-8 shrink-0 rounded-full bg-slate-400 flex items-center justify-center shadow-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                                                className: "h-5 w-5 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 2040,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2039,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xs font-bold text-slate-700 uppercase tracking-tight",
                                                                    children: "Статус газа неизвестен"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2043,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-slate-500 leading-relaxed mt-0.5",
                                                                    children: "Информация о газоснабжении данного объекта отсутствует."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2044,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2038,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                    className: "p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                                    children: "Категория"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2054,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-700 leading-relaxed",
                                                                    children: selectedBuilding.building_type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2055,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2053,
                                                            columnNumber: 17
                                                        }, this),
                                                        selectedBuilding.building_type_raw && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-1",
                                                                    children: "Тип здания"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2061,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-700 leading-relaxed",
                                                                    children: selectedBuilding.building_type_raw
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2062,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2060,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2052,
                                                    columnNumber: 15
                                                }, this),
                                                (selectedBuilding.is_not_in_almaty || selectedBuilding.is_seasonal_or_unused) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        selectedBuilding.is_not_in_almaty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                        className: "h-3 w-3 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 2075,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2074,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium text-blue-800",
                                                                    children: "Не в Алматы"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2077,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2073,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedBuilding.is_seasonal_or_unused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-xl bg-amber-50 border border-amber-100 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "h-3 w-3 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                        lineNumber: 2083,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2082,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-medium text-amber-800",
                                                                    children: "Сезонное / Не используется"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2085,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2081,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2071,
                                                    columnNumber: 17
                                                }, this),
                                                (selectedBuilding.fio || selectedBuilding.mobile_home_number) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Контактная информация"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2094,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-2",
                                                            children: [
                                                                selectedBuilding.fio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[9px] text-slate-400 uppercase",
                                                                            children: "ФИО"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2098,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-slate-700",
                                                                            children: selectedBuilding.fio
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2099,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2097,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.mobile_home_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[9px] text-slate-400 uppercase",
                                                                            children: "Телефон"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2104,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-slate-700",
                                                                            children: selectedBuilding.mobile_home_number
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2105,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2103,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2095,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2093,
                                                    columnNumber: 17
                                                }, this),
                                                (selectedBuilding.type_of_gas || selectedBuilding.gas_connection_available !== null && selectedBuilding.gas_connection_available !== undefined) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Детали газоснабжения"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2115,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-2",
                                                            children: [
                                                                selectedBuilding.type_of_gas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500",
                                                                            children: "Тип газа:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2119,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-medium text-slate-700",
                                                                            children: selectedBuilding.type_of_gas
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2120,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2118,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.gas_connection_available !== null && selectedBuilding.gas_connection_available !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500",
                                                                            children: "Тех. возможность подключения:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2125,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-medium ${selectedBuilding.gas_connection_available ? 'text-green-600' : 'text-red-600'}`,
                                                                            children: selectedBuilding.gas_connection_available ? 'Да' : 'Нет'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2126,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2124,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2116,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2114,
                                                    columnNumber: 17
                                                }, this),
                                                (selectedBuilding.property_not_legalized || selectedBuilding.property_not_eligible_for_gas_connection || selectedBuilding.no_funds_for_gas_connection || selectedBuilding.other_reason) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Причины отсутствия газа"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2138,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                selectedBuilding.property_not_legalized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-5 w-5 rounded-full bg-red-500 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "h-3 w-3 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                lineNumber: 2143,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2142,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-medium text-red-800",
                                                                            children: "Объект не узаконен"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2145,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2141,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.property_not_eligible_for_gas_connection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-5 w-5 rounded-full bg-red-500 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                className: "h-3 w-3 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                lineNumber: 2151,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2150,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-medium text-red-800",
                                                                            children: "Не подлежит газификации"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2153,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2149,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.no_funds_for_gas_connection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-lg bg-amber-50 border border-amber-100 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                                className: "h-3 w-3 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                                lineNumber: 2159,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2158,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-medium text-amber-800",
                                                                            children: "Нет средств на подключение"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2161,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2157,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.other_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded-lg bg-slate-100 border border-slate-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[9px] text-slate-400 uppercase mb-1",
                                                                            children: "Другая причина"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2166,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-700",
                                                                            children: selectedBuilding.other_reason
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2167,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2165,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2139,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2137,
                                                    columnNumber: 17
                                                }, this),
                                                selectedBuilding.has_private_bathhouse !== null && selectedBuilding.has_private_bathhouse !== undefined || selectedBuilding.bathhouse_fuel_type ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Баня"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2177,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-2",
                                                            children: [
                                                                selectedBuilding.has_private_bathhouse !== null && selectedBuilding.has_private_bathhouse !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500",
                                                                            children: "Частная баня:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2181,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-medium ${selectedBuilding.has_private_bathhouse ? 'text-green-600' : 'text-slate-500'}`,
                                                                            children: selectedBuilding.has_private_bathhouse ? 'Есть' : 'Нет'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2182,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2180,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.bathhouse_fuel_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500",
                                                                            children: "Тип топлива бани:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2189,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-medium text-slate-700",
                                                                            children: selectedBuilding.bathhouse_fuel_type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2190,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2188,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2178,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2176,
                                                    columnNumber: 17
                                                }, this) : null,
                                                selectedBuilding.specialist_comment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Комментарий специалиста"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2200,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 border border-slate-100 rounded-xl p-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-700 leading-relaxed",
                                                                children: selectedBuilding.specialist_comment
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                lineNumber: 2202,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2201,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Геолокация"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2209,
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
                                                                            lineNumber: 2212,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold",
                                                                            children: selectedBuilding.latitude?.toFixed(6) || "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2212,
                                                                            columnNumber: 42
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2211,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Долгота:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2215,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold",
                                                                            children: selectedBuilding.longitude?.toFixed(6) || "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2215,
                                                                            columnNumber: 43
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2214,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2210,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2208,
                                                    columnNumber: 15
                                                }, this),
                                                (selectedBuilding.inside_izhs || selectedBuilding.inside_susn || selectedBuilding.inside_alseco) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Территориальная принадлежность"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2223,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-2",
                                                            children: [
                                                                selectedBuilding.inside_izhs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500",
                                                                            children: "Внутри ИЖС:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2227,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-medium text-slate-700",
                                                                            children: selectedBuilding.inside_izhs
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2228,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2226,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.inside_susn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500",
                                                                            children: "Внутри СУСН:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2233,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-medium text-slate-700",
                                                                            children: selectedBuilding.inside_susn
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2234,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2232,
                                                                    columnNumber: 23
                                                                }, this),
                                                                selectedBuilding.inside_alseco && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-slate-500",
                                                                            children: "Внутри Alseco:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2239,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-medium text-slate-700",
                                                                            children: selectedBuilding.inside_alseco
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2240,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2238,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2224,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block",
                                                            children: "Техническая информация"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2249,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-50 border border-slate-100 rounded-xl p-3 font-mono text-[10px] text-slate-500 space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "ID:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2252,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold",
                                                                            children: selectedBuilding.id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2252,
                                                                            columnNumber: 38
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2251,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Район ID:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2255,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold",
                                                                            children: selectedBuilding.district_id ?? "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2255,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2254,
                                                                    columnNumber: 19
                                                                }, this),
                                                                selectedBuilding.gas_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Gas ID:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2259,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold",
                                                                            children: selectedBuilding.gas_id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2259,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2258,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Категория:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2263,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold uppercase",
                                                                            children: selectedBuilding.building_category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                            lineNumber: 2263,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                                    lineNumber: 2262,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                            lineNumber: 2250,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                                    lineNumber: 2248,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                                            lineNumber: 2002,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                                    lineNumber: 1979,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/buildings-without-gas/page.tsx",
                            lineNumber: 1321,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/buildings-without-gas/page.tsx",
                    lineNumber: 1242,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/buildings-without-gas/page.tsx",
            lineNumber: 1150,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(BuildingsWithoutGasPage, "iHg2YK2Fg8B1TmiyrOhqUJa9hnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeferredValue"]
    ];
});
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