(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/admin_related/air-quality-data/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_related/air-quality-data/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/button.tsx",
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
"[project]/admin_related/air-quality-data/components/header-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderMenu",
    ()=>HeaderMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HeaderMenu() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    const menuItems = [
        {
            name: "Карта датчиков",
            href: "/",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
        },
        {
            name: "Карта зданий без газа",
            href: "/buildings-without-gas",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
        },
        {
            name: "Исходящие звонки",
            href: "/outgoing-calls",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-16 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-bold text-white",
                                        children: "AQ"
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold text-foreground",
                                            children: "Air Quality Almaty"
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Качество воздуха Алматы"
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:items-center md:gap-1",
                            children: menuItems.map((item)=>{
                                const Icon = item.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, this),
                                            item.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this)
                                }, item.name, false, {
                                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                onClick: toggleMenu,
                                "aria-label": "Toggle menu",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                    lineNumber: 64,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border py-4 md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: menuItems.map((item)=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "w-full justify-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                            lineNumber: 78,
                                            columnNumber: 23
                                        }, this),
                                        item.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                    lineNumber: 77,
                                    columnNumber: 21
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                                lineNumber: 76,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/header-menu.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(HeaderMenu, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = HeaderMenu;
var _c;
__turbopack_context__.k.register(_c, "HeaderMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_related/air-quality-data/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/admin_related/air-quality-data/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OutgoingCallsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/components/header-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_related/air-quality-data/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#8884D8',
    '#82ca9d',
    '#ffc658',
    '#ff7c7c',
    '#8dd1e1'
];
function OutgoingCallsPage() {
    _s();
    const [calls, setCalls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subjectFilter, setSubjectFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [subcategoryFilter, setSubcategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedCall, setSelectedCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDetailPanel, setShowDetailPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutgoingCallsPage.useEffect": ()=>{
            fetchOutgoingCalls();
        }
    }["OutgoingCallsPage.useEffect"], []);
    const fetchOutgoingCalls = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("https://admin.smartalmaty.kz/api/v1/address/address-without-gas-outgoing-calls/");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setCalls(data.results || []);
            console.log("✅ Loaded", data.count, "outgoing calls");
        } catch (error) {
            console.error("Failed to fetch outgoing calls:", error);
            setError(error instanceof Error ? error.message : "Failed to load data");
        } finally{
            setLoading(false);
        }
    };
    const filteredCalls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OutgoingCallsPage.useMemo[filteredCalls]": ()=>{
            return calls.filter({
                "OutgoingCallsPage.useMemo[filteredCalls]": (call)=>{
                    const matchesSearch = searchQuery === "" || call.problem_address.toLowerCase().includes(searchQuery.toLowerCase()) || call.applicant_first_name.toLowerCase().includes(searchQuery.toLowerCase()) || call.applicant_last_name.toLowerCase().includes(searchQuery.toLowerCase()) || call.phone_number.includes(searchQuery) || call.record_number.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesSubject = subjectFilter === "all" || call.request_subject?.id === parseInt(subjectFilter);
                    const matchesSubcategory = subcategoryFilter === "all" || call.request_subcategory?.id === parseInt(subcategoryFilter);
                    return matchesSearch && matchesSubject && matchesSubcategory;
                }
            }["OutgoingCallsPage.useMemo[filteredCalls]"]).sort({
                "OutgoingCallsPage.useMemo[filteredCalls]": (a, b)=>b.id - a.id
            }["OutgoingCallsPage.useMemo[filteredCalls]"]) // Sort by ID descending (latest first)
            ;
        }
    }["OutgoingCallsPage.useMemo[filteredCalls]"], [
        calls,
        searchQuery,
        subjectFilter,
        subcategoryFilter
    ]);
    // Pagination
    const totalPages = Math.ceil(filteredCalls.length / itemsPerPage);
    const paginatedCalls = filteredCalls.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    // Reset to page 1 when filters change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OutgoingCallsPage.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["OutgoingCallsPage.useEffect"], [
        searchQuery,
        subjectFilter,
        subcategoryFilter
    ]);
    // Get unique subjects and subcategories by ID
    const uniqueSubjectIds = new Set(calls.map((c)=>c.request_subject?.id).filter(Boolean));
    const subjects = calls.filter((c)=>c.request_subject && uniqueSubjectIds.has(c.request_subject.id)).reduce((acc, c)=>{
        if (!acc.find((s)=>s.id === c.request_subject.id)) {
            acc.push(c.request_subject);
        }
        return acc;
    }, []);
    const uniqueSubcategoryIds = new Set(calls.map((c)=>c.request_subcategory?.id).filter(Boolean));
    const subcategories = calls.filter((c)=>c.request_subcategory && uniqueSubcategoryIds.has(c.request_subcategory.id)).reduce((acc, c)=>{
        if (!acc.find((s)=>s.id === c.request_subcategory.id)) {
            acc.push(c.request_subcategory);
        }
        return acc;
    }, []);
    const stats = {
        total: calls.length,
        uniqueSubjects: subjects.length,
        uniqueSubcategories: subcategories.length,
        bySubject: subjects.map((s)=>({
                name: s.name,
                value: calls.filter((c)=>c.request_subject?.id === s.id).length
            })).sort((a, b)=>b.value - a.value),
        bySubcategory: subcategories.map((s)=>({
                name: s.name,
                value: calls.filter((c)=>c.request_subcategory?.id === s.id).length
            })).sort((a, b)=>b.value - a.value)
    };
    // Check if filters are active
    const hasActiveFilters = searchQuery !== "" || subjectFilter !== "all" || subcategoryFilter !== "all";
    // Enhanced stats with highlighting for filtered items
    const enhancedStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OutgoingCallsPage.useMemo[enhancedStats]": ()=>{
            const filteredSubjectIds = new Set(filteredCalls.map({
                "OutgoingCallsPage.useMemo[enhancedStats]": (c)=>c.request_subject?.id
            }["OutgoingCallsPage.useMemo[enhancedStats]"]).filter(Boolean));
            const filteredSubcategoryIds = new Set(filteredCalls.map({
                "OutgoingCallsPage.useMemo[enhancedStats]": (c)=>c.request_subcategory?.id
            }["OutgoingCallsPage.useMemo[enhancedStats]"]).filter(Boolean));
            return {
                bySubject: stats.bySubject.map({
                    "OutgoingCallsPage.useMemo[enhancedStats]": (item)=>{
                        const subjectId = subjects.find({
                            "OutgoingCallsPage.useMemo[enhancedStats]": (s)=>s.name === item.name
                        }["OutgoingCallsPage.useMemo[enhancedStats]"])?.id;
                        const isHighlighted = !hasActiveFilters || subjectId && filteredSubjectIds.has(subjectId);
                        const filteredValue = subjectId ? filteredCalls.filter({
                            "OutgoingCallsPage.useMemo[enhancedStats]": (c)=>c.request_subject?.id === subjectId
                        }["OutgoingCallsPage.useMemo[enhancedStats]"]).length : 0;
                        return {
                            ...item,
                            isHighlighted,
                            filteredValue,
                            opacity: isHighlighted ? 1 : 0.3
                        };
                    }
                }["OutgoingCallsPage.useMemo[enhancedStats]"]),
                bySubcategory: stats.bySubcategory.map({
                    "OutgoingCallsPage.useMemo[enhancedStats]": (item)=>{
                        const subcategoryId = subcategories.find({
                            "OutgoingCallsPage.useMemo[enhancedStats]": (s)=>s.name === item.name
                        }["OutgoingCallsPage.useMemo[enhancedStats]"])?.id;
                        const isHighlighted = !hasActiveFilters || subcategoryId && filteredSubcategoryIds.has(subcategoryId);
                        const filteredValue = subcategoryId ? filteredCalls.filter({
                            "OutgoingCallsPage.useMemo[enhancedStats]": (c)=>c.request_subcategory?.id === subcategoryId
                        }["OutgoingCallsPage.useMemo[enhancedStats]"]).length : 0;
                        return {
                            ...item,
                            isHighlighted,
                            filteredValue,
                            opacity: isHighlighted ? 1 : 0.3
                        };
                    }
                }["OutgoingCallsPage.useMemo[enhancedStats]"])
            };
        }
    }["OutgoingCallsPage.useMemo[enhancedStats]"], [
        stats,
        filteredCalls,
        hasActiveFilters,
        subjects,
        subcategories
    ]);
    const exportToCSV = ()=>{
        const csvData = filteredCalls.map((call)=>({
                "Номер записи": call.record_number,
                "Дата регистрации": call.request_registration_date,
                "Дата разрешения": call.actual_resolution_time,
                "Фамилия": call.applicant_last_name,
                "Имя": call.applicant_first_name,
                "Телефон": call.phone_number,
                "Адрес": call.problem_address,
                "Категория": call.request_category?.name || "",
                "Подкатегория": call.request_subcategory?.name || "",
                "Тема обращения": call.request_subject?.name || "",
                "Текст обращения": call.request_text
            }));
        const headers = Object.keys(csvData[0] || {});
        const csvContent = [
            headers.join(","),
            ...csvData.map((row)=>headers.map((header)=>`"${row[header]}"`).join(","))
        ].join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `outgoing-calls-${new Date().toISOString().split("T")[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderMenu"], {}, void 0, false, {
                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-64",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                                }, void 0, false, {
                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-gray-600",
                                    children: "Загрузка данных..."
                                }, void 0, false, {
                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
            lineNumber: 229,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderMenu"], {}, void 0, false, {
                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-red-50 border-red-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600",
                                    children: [
                                        "Ошибка загрузки данных: ",
                                        error
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: fetchOutgoingCalls,
                                    className: "mt-4",
                                    children: "Попробовать снова"
                                }, void 0, false, {
                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderMenu"], {}, void 0, false, {
                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8 max-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-gray-800 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "inline-block mr-3 h-10 w-10 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    "Исходящие звонки (обзвон)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Данные по обзвону объектов без газоснабжения"
                            }, void 0, false, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Всего обращений"
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-blue-600",
                                            children: stats.total
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Отфильтровано"
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-green-600",
                                            children: filteredCalls.length
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Тем обращений"
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-purple-600",
                                            children: stats.uniqueSubjects
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "pb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-sm font-medium text-gray-600",
                                            children: "Типов объектов"
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-orange-600",
                                            children: stats.uniqueSubcategories
                                        }, void 0, false, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            className: "inline-block mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Поиск"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    placeholder: "Адрес, имя, телефон, номер записи...",
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            className: "inline-block mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Тема обращения"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: subjectFilter,
                                                    onChange: (e)=>setSubjectFilter(e.target.value),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "Все темы"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 19
                                                        }, this),
                                                        subjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: subject.id.toString(),
                                                                children: subject.name
                                                            }, subject.id, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                            className: "inline-block mr-2 h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Подкатегория"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: subcategoryFilter,
                                                    onChange: (e)=>setSubcategoryFilter(e.target.value),
                                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "all",
                                                            children: "Все подкатегории"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 19
                                                        }, this),
                                                        subcategories.map((subcat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: subcat.id.toString(),
                                                                children: subcat.name
                                                            }, subcat.id, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: exportToCSV,
                                        variant: "outline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this),
                                            "Экспорт в CSV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-4",
                                children: "Структура потребления топлива по типам предприятий"
                            }, void 0, false, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                children: subcategories.map((subcategory)=>{
                                    const subcategoryCalls = filteredCalls.filter((c)=>c.request_subcategory?.id === subcategory.id);
                                    if (subcategoryCalls.length === 0) return null;
                                    const fuelDistribution = subjects.map((subject)=>({
                                            name: subject.name,
                                            value: subcategoryCalls.filter((c)=>c.request_subject?.id === subject.id).length,
                                            percentage: (subcategoryCalls.filter((c)=>c.request_subject?.id === subject.id).length / subcategoryCalls.length * 100).toFixed(1)
                                        })).filter((item)=>item.value > 0).sort((a, b)=>b.value - a.value);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                className: "pb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-base",
                                                        children: subcategory.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: [
                                                            "Всего: ",
                                                            subcategoryCalls.length,
                                                            " объектов"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: 250,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                    data: fuelDistribution,
                                                                    cx: "50%",
                                                                    cy: "50%",
                                                                    innerRadius: 40,
                                                                    outerRadius: 80,
                                                                    dataKey: "value",
                                                                    label: ({ percentage })=>`${percentage}%`,
                                                                    children: fuelDistribution.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                            fill: COLORS[index % COLORS.length]
                                                                        }, `cell-${index}`, false, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 417,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    formatter: (value, name)=>[
                                                                            `${value} шт (${fuelDistribution.find((f)=>f.name === name)?.percentage}%)`,
                                                                            'Количество'
                                                                        ]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 space-y-2",
                                                        children: fuelDistribution.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-3 h-3 rounded-full",
                                                                                style: {
                                                                                    backgroundColor: COLORS[index % COLORS.length]
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 429,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-700",
                                                                                children: item.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 433,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold",
                                                                        children: [
                                                                            item.value,
                                                                            " (",
                                                                            item.percentage,
                                                                            "%)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 435,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, subcategory.id, true, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-4",
                                children: "Общая статистика по обращениям"
                            }, void 0, false, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Распределение по темам обращений"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                    width: "100%",
                                                    height: 500,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                data: enhancedStats.bySubject,
                                                                cx: "50%",
                                                                cy: "50%",
                                                                labelLine: true,
                                                                label: ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, isHighlighted, index })=>{
                                                                    if (!isHighlighted) return null;
                                                                    const RADIAN = Math.PI / 180;
                                                                    const radius = outerRadius + 30;
                                                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                                                    const color = COLORS[index % COLORS.length];
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: x,
                                                                        y: y,
                                                                        fill: color,
                                                                        textAnchor: x > cx ? 'start' : 'end',
                                                                        dominantBaseline: "central",
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            fontWeight: '600'
                                                                        },
                                                                        children: `${name}: ${(percent * 100).toFixed(0)}%`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 25
                                                                    }, void 0);
                                                                },
                                                                outerRadius: 100,
                                                                fill: "#8884d8",
                                                                dataKey: "value",
                                                                children: enhancedStats.bySubject.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                        fill: COLORS[index % COLORS.length],
                                                                        opacity: entry.opacity
                                                                    }, `cell-${index}`, false, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                formatter: (value, name, props)=>{
                                                                    const { payload } = props;
                                                                    if (hasActiveFilters && payload.filteredValue !== undefined) {
                                                                        return [
                                                                            `${payload.filteredValue} (из ${value})`,
                                                                            'Обращений'
                                                                        ];
                                                                    }
                                                                    return [
                                                                        value,
                                                                        'Обращений'
                                                                    ];
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                                layout: "horizontal",
                                                                verticalAlign: "bottom",
                                                                align: "center",
                                                                wrapperStyle: {
                                                                    paddingTop: '20px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Распределение по типам объектов"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 518,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                    width: "100%",
                                                    height: 500,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                                data: enhancedStats.bySubcategory,
                                                                cx: "50%",
                                                                cy: "50%",
                                                                labelLine: true,
                                                                label: ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, isHighlighted, index })=>{
                                                                    if (!isHighlighted) return null;
                                                                    const RADIAN = Math.PI / 180;
                                                                    const radius = outerRadius + 30;
                                                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                                                    const color = COLORS[index % COLORS.length];
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                        x: x,
                                                                        y: y,
                                                                        fill: color,
                                                                        textAnchor: x > cx ? 'start' : 'end',
                                                                        dominantBaseline: "central",
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            fontWeight: '600'
                                                                        },
                                                                        children: `${name}: ${(percent * 100).toFixed(0)}%`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 538,
                                                                        columnNumber: 25
                                                                    }, void 0);
                                                                },
                                                                outerRadius: 100,
                                                                fill: "#8884d8",
                                                                dataKey: "value",
                                                                children: enhancedStats.bySubcategory.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                        fill: COLORS[index % COLORS.length],
                                                                        opacity: entry.opacity
                                                                    }, `cell-${index}`, false, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                formatter: (value, name, props)=>{
                                                                    const { payload } = props;
                                                                    if (hasActiveFilters && payload.filteredValue !== undefined) {
                                                                        return [
                                                                            `${payload.filteredValue} (из ${value})`,
                                                                            'Обращений'
                                                                        ];
                                                                    }
                                                                    return [
                                                                        value,
                                                                        'Обращений'
                                                                    ];
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                                layout: "horizontal",
                                                                verticalAlign: "bottom",
                                                                align: "center",
                                                                wrapperStyle: {
                                                                    paddingTop: '20px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 521,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 517,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-800 mb-4",
                                        children: "Детальная статистика по темам обращений"
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 585,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Количество обращений по темам"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                    width: "100%",
                                                    height: 500,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                        data: enhancedStats.bySubject,
                                                        margin: {
                                                            top: 20,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 120
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                strokeDasharray: "3 3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 596,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                dataKey: "name",
                                                                angle: -45,
                                                                textAnchor: "end",
                                                                height: 150,
                                                                interval: 0,
                                                                tick: {
                                                                    fontSize: 12
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                formatter: (value, name, props)=>{
                                                                    const { payload } = props;
                                                                    if (hasActiveFilters && payload.filteredValue !== undefined) {
                                                                        return [
                                                                            `${payload.filteredValue} (из ${value})`,
                                                                            'Обращений'
                                                                        ];
                                                                    }
                                                                    return [
                                                                        value,
                                                                        'Обращений'
                                                                    ];
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                dataKey: "value",
                                                                fill: "#8884d8",
                                                                children: enhancedStats.bySubject.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                        fill: COLORS[index % COLORS.length],
                                                                        opacity: entry.opacity
                                                                    }, `cell-${index}`, false, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 21
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 615,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 15
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 590,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 586,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 584,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-800 mb-4",
                                        children: "Список всех обращений"
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: [
                                                        "Список обращений (",
                                                        filteredCalls.length,
                                                        ") - Страница ",
                                                        currentPage,
                                                        " из ",
                                                        totalPages
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "ID"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 644,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "№ записи"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 645,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "Дата"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 646,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "Заявитель"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 647,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "Телефон"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 648,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "Адрес"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 649,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "Тема"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 650,
                                                                                columnNumber: 21
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "text-left p-3 text-sm font-medium text-gray-600",
                                                                                children: "Действия"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 651,
                                                                                columnNumber: 21
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 643,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 17
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    children: paginatedCalls.map((call)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "border-b hover:bg-gray-50",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-sm text-gray-500",
                                                                                    children: call.id
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 657,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-sm font-mono",
                                                                                    children: call.record_number
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 658,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-sm",
                                                                                    children: call.request_registration_date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 659,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-sm",
                                                                                    children: [
                                                                                        call.applicant_last_name,
                                                                                        " ",
                                                                                        call.applicant_first_name
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 660,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-sm font-mono",
                                                                                    children: call.phone_number
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 663,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-sm max-w-xs truncate",
                                                                                    title: call.problem_address,
                                                                                    children: call.problem_address
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 664,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3 text-sm",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs",
                                                                                        children: call.request_subject?.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                        lineNumber: 668,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 667,
                                                                                    columnNumber: 23
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "p-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                        size: "sm",
                                                                                        variant: "outline",
                                                                                        onClick: ()=>{
                                                                                            setSelectedCall(call);
                                                                                            setShowDetailPanel(true);
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                            className: "h-4 w-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                            lineNumber: 681,
                                                                                            columnNumber: 27
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                        lineNumber: 673,
                                                                                        columnNumber: 25
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 672,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, call.id, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 656,
                                                                            columnNumber: 21
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 17
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 15
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    "Показано ",
                                                                    (currentPage - 1) * itemsPerPage + 1,
                                                                    " - ",
                                                                    Math.min(currentPage * itemsPerPage, filteredCalls.length),
                                                                    " из ",
                                                                    filteredCalls.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 15
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "outline",
                                                                        size: "sm",
                                                                        onClick: ()=>setCurrentPage(Math.max(1, currentPage - 1)),
                                                                        disabled: currentPage === 1,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                                className: "h-4 w-4 mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 702,
                                                                                columnNumber: 19
                                                                            }, this),
                                                                            "Назад"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 696,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-1",
                                                                        children: Array.from({
                                                                            length: Math.min(5, totalPages)
                                                                        }, (_, i)=>{
                                                                            let pageNum;
                                                                            if (totalPages <= 5) {
                                                                                pageNum = i + 1;
                                                                            } else if (currentPage <= 3) {
                                                                                pageNum = i + 1;
                                                                            } else if (currentPage >= totalPages - 2) {
                                                                                pageNum = totalPages - 4 + i;
                                                                            } else {
                                                                                pageNum = currentPage - 2 + i;
                                                                            }
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: currentPage === pageNum ? "default" : "outline",
                                                                                size: "sm",
                                                                                onClick: ()=>setCurrentPage(pageNum),
                                                                                children: pageNum
                                                                            }, pageNum, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 721,
                                                                                columnNumber: 23
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 707,
                                                                        columnNumber: 17
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "outline",
                                                                        size: "sm",
                                                                        onClick: ()=>setCurrentPage(Math.min(totalPages, currentPage + 1)),
                                                                        disabled: currentPage === totalPages,
                                                                        children: [
                                                                            "Вперед",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                className: "h-4 w-4 ml-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                lineNumber: 740,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 733,
                                                                        columnNumber: 17
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                lineNumber: 639,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 633,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                lineNumber: 631,
                                columnNumber: 9
                            }, this),
                            showDetailPanel && selectedCall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 bg-black/30 z-40 transition-opacity duration-300",
                                        onClick: ()=>setShowDetailPanel(false)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 752,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-6 sticky top-0 bg-white pb-4 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-2xl font-bold",
                                                            children: "Детали обращения"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: ()=>setShowDetailPanel(false),
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-4 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Основная информация"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Номер записи"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 774,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-mono",
                                                                                    children: selectedCall.record_number || '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 775,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 773,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        selectedCall.request_status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Статус обращения"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 780,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm",
                                                                                        children: selectedCall.request_status
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                        lineNumber: 782,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 781,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 779,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 772,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-4 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Заявитель"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 793,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "ФИО"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 797,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: [
                                                                                        selectedCall.applicant_last_name,
                                                                                        " ",
                                                                                        selectedCall.applicant_first_name
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 798,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 796,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Телефон"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 804,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-mono",
                                                                                    children: selectedCall.phone_number || '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 805,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 803,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        selectedCall.applicant_account && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Аккаунт заявителя"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 810,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.applicant_account
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 811,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 809,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 795,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-4 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Адрес и местоположение"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 819,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Адрес проблемы"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 823,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.problem_address || '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 824,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 822,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        selectedCall.problem_district && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Район проблемы"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 829,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.problem_district
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 830,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 828,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        selectedCall.route_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Номер маршрута"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 836,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base font-mono",
                                                                                    children: selectedCall.route_number
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 837,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 835,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 821,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-4 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Категории обращения"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 845,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Категория"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 849,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.request_category?.name || '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 850,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 848,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Подкатегория"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 854,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.request_subcategory?.name || '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 855,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 853,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Тема обращения"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 859,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm",
                                                                                        children: selectedCall.request_subject?.name || '-'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                        lineNumber: 861,
                                                                                        columnNumber: 27
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 860,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 858,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 847,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 844,
                                                            columnNumber: 19
                                                        }, this),
                                                        (selectedCall.executor_go || selectedCall.current_executor_go || selectedCall.registrar) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-4 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Исполнители"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 872,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        selectedCall.executor_go && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Исполнитель (ГО)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 877,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.executor_go
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 878,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 876,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        selectedCall.current_executor_go && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Текущий исполнитель (ГО)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 884,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.current_executor_go
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 885,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 883,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        selectedCall.registrar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Регистратор"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 891,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.registrar
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 892,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 890,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 871,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-4 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Даты"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 901,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Дата регистрации"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 905,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.request_registration_date || '-'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 906,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 904,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        selectedCall.planned_completion_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Планируемый срок исполнения"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 911,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.planned_completion_date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 912,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 910,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        selectedCall.actual_completion_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Фактическая дата исполнения"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 918,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.actual_completion_date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 919,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 917,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        selectedCall.actual_resolution_time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-sm font-medium text-gray-600",
                                                                                    children: "Фактический срок исполнения"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 925,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-base",
                                                                                    children: selectedCall.actual_resolution_time
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                                    lineNumber: 926,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 924,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 903,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 900,
                                                            columnNumber: 19
                                                        }, this),
                                                        selectedCall.submission_source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pb-4 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Дополнительно"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 935,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-sm font-medium text-gray-600",
                                                                            children: "Источник поступления"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 938,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-base",
                                                                            children: selectedCall.submission_source
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                            lineNumber: 939,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 937,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-800 mb-3",
                                                                    children: "Текст обращения"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 946,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_related$2f$air$2d$quality$2d$data$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm leading-relaxed",
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: (selectedCall.request_text || '-').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/Наименование объекта:/g, '<strong>Наименование объекта:</strong><br/>').replace(/Тип объекта:/g, '<br/><strong>Тип объекта:</strong><br/>').replace(/Район:/g, '<br/><strong>Район:</strong><br/>').replace(/Основной вид топлива:/g, '<br/><strong>Основной вид топлива:</strong><br/>').replace(/Для тех\.нужд:/g, '<br/><strong>Для тех.нужд:</strong><br/>').replace(/Должность:/g, '<br/><strong>Должность:</strong><br/>')
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                        lineNumber: 948,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                                    lineNumber: 947,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                            lineNumber: 945,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                            lineNumber: 759,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                                        lineNumber: 758,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/admin_related/air-quality-data/app/outgoing-calls/page.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s(OutgoingCallsPage, "3rcE24hLFx+V8H+h/f7zR3NahcA=");
_c = OutgoingCallsPage;
var _c;
__turbopack_context__.k.register(_c, "OutgoingCallsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=admin_related_air-quality-data_3b5e5998._.js.map