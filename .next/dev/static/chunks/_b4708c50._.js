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
"[project]/components/header-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderMenu",
    ()=>HeaderMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
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
const menuItems = [
    {
        name: "Карта датчиков",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
    },
    {
        name: "Карта зданий без газа",
        href: "/buildings-without-gas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
    },
    {
        name: "Исходящие звонки",
        href: "/outgoing-calls",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
    }
];
function HeaderMenu() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // resolvedTheme is undefined during hydration — treat undefined as "light" so the
    // correct logo renders on first paint instead of briefly flashing the dark logo
    const logoSrc = resolvedTheme === "dark" ? "/logo_aqa.png" : "/logo_aqa_dark_letters.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-16 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: logoSrc,
                                alt: "AQA Logo",
                                width: 180,
                                height: 180,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/components/header-menu.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/header-menu.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:items-center md:gap-1",
                            children: menuItems.map((item)=>{
                                const Icon = item.icon;
                                const active = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                      group relative flex items-center gap-2.5 rounded-xl px-4 py-2 text-sm font-medium
                      transition-all duration-200 cursor-pointer select-none
                      ${active ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                    `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: `h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${active ? "" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/header-menu.tsx",
                                                lineNumber: 51,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/header-menu.tsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this),
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-background/40"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header-menu.tsx",
                                                lineNumber: 54,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 41,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/header-menu.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>setTheme(resolvedTheme === "dark" ? "light" : "dark"),
                                    "aria-label": "Toggle theme",
                                    className: "h-9 w-9 rounded-xl",
                                    children: resolvedTheme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 72,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        "aria-label": "Toggle menu",
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header-menu.tsx",
                                            lineNumber: 78,
                                            columnNumber: 27
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header-menu.tsx",
                                            lineNumber: 78,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header-menu.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header-menu.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border py-3 md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: menuItems.map((item)=>{
                            const Icon = item.icon;
                            const active = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                        flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200
                        ${active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                      `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "h-4 w-4 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header-menu.tsx",
                                            lineNumber: 102,
                                            columnNumber: 23
                                        }, this),
                                        item.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 93,
                                    columnNumber: 21
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/header-menu.tsx",
                                lineNumber: 92,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/header-menu.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/header-menu.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/header-menu.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/header-menu.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(HeaderMenu, "13QyM+gjqfSCjd18zPyHdXCa2dw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = HeaderMenu;
var _c;
__turbopack_context__.k.register(_c, "HeaderMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/filter-dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDropdown",
    ()=>FilterDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FilterDropdown({ value, onChange, options, allLabel = "Все", placeholder = "Выбрать…", searchPlaceholder = "Поиск…" }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedLabel = value === "all" ? allLabel : options.find((o)=>o.value === value)?.label ?? placeholder;
    const filtered = options.filter((o)=>o.label.toLowerCase().includes(search.toLowerCase()));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterDropdown.useEffect": ()=>{
            if (!open) {
                setSearch("");
                return;
            }
            setTimeout({
                "FilterDropdown.useEffect": ()=>searchRef.current?.focus()
            }["FilterDropdown.useEffect"], 60);
        }
    }["FilterDropdown.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterDropdown.useEffect": ()=>{
            function onOutside(e) {
                if (containerRef.current && !containerRef.current.contains(e.target)) {
                    setOpen(false);
                }
            }
            if (open) document.addEventListener("mousedown", onOutside);
            return ({
                "FilterDropdown.useEffect": ()=>document.removeEventListener("mousedown", onOutside)
            })["FilterDropdown.useEffect"];
        }
    }["FilterDropdown.useEffect"], [
        open
    ]);
    const isAll = value === "all";
    const borderCls = open ? "border-primary/60 shadow-sm shadow-primary/10" : isAll ? "border-border" : "border-primary/50 shadow-sm";
    const bgCls = open ? "bg-primary/5" : isAll ? "bg-background hover:bg-muted/40" : "bg-primary/8";
    const textCls = open || !isAll ? "text-foreground" : "text-muted-foreground hover:text-foreground";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-8 items-center rounded-lg border transition-all duration-150 ${borderCls} ${bgCls}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setOpen((v)=>!v),
                        className: `flex h-full items-center gap-1.5 pl-3 ${isAll ? "pr-3" : "pr-1"} text-sm font-medium outline-none ${textCls}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "max-w-[120px] truncate",
                                children: selectedLabel
                            }, void 0, false, {
                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 ${open ? "-rotate-180" : ""} ${isAll ? "opacity-50" : "opacity-70"}`
                            }, void 0, false, {
                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/filter-dropdown.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    !isAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            onChange("all");
                            setOpen(false);
                        },
                        className: "flex h-full items-center pr-2 opacity-60 transition-opacity hover:opacity-100",
                        "aria-label": "Сбросить фильтр",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/filter-dropdown.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/filter-dropdown.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/filter-dropdown.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
            absolute left-0 top-[calc(100%+6px)] z-[2000] min-w-[200px]
            overflow-hidden rounded-xl border border-border
            bg-popover shadow-lg shadow-black/10
            animate-in fade-in-0 zoom-in-95 duration-100
          `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 border-b border-border px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-3.5 w-3.5 flex-shrink-0 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: searchRef,
                                value: search,
                                onChange: (e)=>setSearch(e.target.value),
                                placeholder: searchPlaceholder,
                                className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSearch(""),
                                className: "text-muted-foreground hover:text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/filter-dropdown.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/filter-dropdown.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-[240px] overflow-y-auto py-1",
                        children: [
                            !search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onChange("all");
                                    setOpen(false);
                                },
                                className: `
                  flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors
                  ${isAll ? "bg-primary/8 text-primary font-medium" : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"}
                `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-4 w-4 flex-shrink-0 items-center justify-center",
                                        children: isAll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/filter-dropdown.tsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/filter-dropdown.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this),
                                    allLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-3 py-3 text-center text-xs text-muted-foreground",
                                children: "Ничего не найдено"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this),
                            filtered.map((opt)=>{
                                const selected = value === opt.value;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        onChange(opt.value);
                                        setOpen(false);
                                    },
                                    className: `
                    flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors
                    ${selected ? "bg-primary/8 text-primary font-medium" : "text-foreground hover:bg-muted/60"}
                  `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-4 w-4 flex-shrink-0 items-center justify-center",
                                            children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/filter-dropdown.tsx",
                                                lineNumber: 166,
                                                columnNumber: 34
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/filter-dropdown.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: opt.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/filter-dropdown.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, opt.value, true, {
                                    fileName: "[project]/components/ui/filter-dropdown.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/filter-dropdown.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/filter-dropdown.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/filter-dropdown.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(FilterDropdown, "EDhZqtZwbG5hSyJZxCwk5f25N/8=");
_c = FilterDropdown;
var _c;
__turbopack_context__.k.register(_c, "FilterDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pm25.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PM2.5 concentration categories and US EPA AQI (2024) calculation.
 *
 * Note: "levels" here are PM2.5 concentration categories (WHO/health-based),
 * NOT the US EPA AQI index (0–500). See pm25ToEpaAqi() for the actual index.
 *
 * Thresholds aligned with WHO 2021 guidelines:
 *   ≤5   → very-good  (meets WHO annual PM2.5 guideline of 5 µg/m³)
 *   ≤15  → good       (meets WHO 24h PM2.5 guideline of 15 µg/m³)
 *   ≤35  → moderate   (EPA 2024 "Moderate" upper bound at 35.4 µg/m³)
 *   ≤55  → unhealthy  (unhealthy for sensitive groups)
 *   ≤150 → very-unhealthy
 *   >150 → hazardous
 */ // ── Types ──────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "getPm25Config",
    ()=>getPm25Config,
    "pm25Color",
    ()=>pm25Color,
    "pm25Label",
    ()=>pm25Label,
    "pm25ToEpaAqi",
    ()=>pm25ToEpaAqi
]);
function pm25Color(pm25) {
    if (pm25 == null) return "#9ca3af";
    if (pm25 <= 5) return "#3b82f6";
    if (pm25 <= 15) return "#22c55e";
    if (pm25 <= 35) return "#eab308";
    if (pm25 <= 55) return "#ef4444";
    if (pm25 <= 150) return "#a855f7";
    return "#7f1d1d";
}
function pm25Label(pm25) {
    if (pm25 == null) return "Нет данных";
    if (pm25 <= 5) return "Отлично";
    if (pm25 <= 15) return "Хорошо";
    if (pm25 <= 35) return "Умеренно";
    if (pm25 <= 55) return "Чувствительным";
    if (pm25 <= 150) return "Вредно";
    return "Очень вредно";
}
function getPm25Config(pm25) {
    if (pm25 <= 5) return {
        level: "very-good",
        label: "Отлично",
        heroLabel: "Отлично",
        heroBg: "#dbeafe",
        barBg: "#3b82f6",
        accent: "#3b82f6",
        accentLight: "#dbeafe"
    };
    if (pm25 <= 15) return {
        level: "good",
        label: "Хорошо",
        heroLabel: "Хорошо",
        heroBg: "#dcfce7",
        barBg: "#22c55e",
        accent: "#22c55e",
        accentLight: "#dcfce7"
    };
    if (pm25 <= 35) return {
        level: "moderate",
        label: "Умеренно",
        heroLabel: "Умеренно",
        heroBg: "#fef9c3",
        barBg: "#eab308",
        accent: "#ca8a04",
        accentLight: "#fef9c3"
    };
    if (pm25 <= 55) return {
        level: "unhealthy",
        label: "Вредно для чувствительных групп",
        heroLabel: "Чувствительным",
        heroBg: "#fee2e2",
        barBg: "#ef4444",
        accent: "#ef4444",
        accentLight: "#fee2e2"
    };
    if (pm25 <= 150) return {
        level: "very-unhealthy",
        label: "Вредно",
        heroLabel: "Вредно",
        heroBg: "#f3e8ff",
        barBg: "#a855f7",
        accent: "#a855f7",
        accentLight: "#f3e8ff"
    };
    return {
        level: "hazardous",
        label: "Очень вредно",
        heroLabel: "Очень вредно",
        heroBg: "#fee2e2",
        barBg: "#7f1d1d",
        accent: "#7f1d1d",
        accentLight: "#fee2e2"
    };
}
// ── US EPA AQI (2024) ──────────────────────────────────────────────────────────
/**
 * EPA 2024 PM2.5 breakpoints (eCFR Appendix G, Table 2).
 * Input must be 24-hour AVERAGE PM2.5, truncated to 1 decimal.
 * Source: https://www.ecfr.gov/current/title-40/appendix-Appendix_G_to_Part_58
 */ const EPA_2024_BREAKPOINTS = [
    {
        cLo: 0.0,
        cHi: 9.0,
        iLo: 0,
        iHi: 50,
        level: "very-good"
    },
    {
        cLo: 9.1,
        cHi: 35.4,
        iLo: 51,
        iHi: 100,
        level: "good"
    },
    {
        cLo: 35.5,
        cHi: 55.4,
        iLo: 101,
        iHi: 150,
        level: "moderate"
    },
    {
        cLo: 55.5,
        cHi: 125.4,
        iLo: 151,
        iHi: 200,
        level: "unhealthy"
    },
    {
        cLo: 125.5,
        cHi: 225.4,
        iLo: 201,
        iHi: 300,
        level: "very-unhealthy"
    },
    {
        cLo: 225.5,
        cHi: 325.4,
        iLo: 301,
        iHi: 500,
        level: "hazardous"
    }
];
function pm25ToEpaAqi(pm25_24h_avg) {
    if (!isFinite(pm25_24h_avg) || pm25_24h_avg < 0) return null;
    // EPA truncates to 1 decimal place (not rounds)
    const c = Math.floor(pm25_24h_avg * 10) / 10;
    const bp = EPA_2024_BREAKPOINTS.find((x)=>c >= x.cLo && c <= x.cHi) ?? EPA_2024_BREAKPOINTS[EPA_2024_BREAKPOINTS.length - 1];
    const aqi = Math.round((bp.iHi - bp.iLo) / (bp.cHi - bp.cLo) * (c - bp.cLo) + bp.iLo);
    return {
        aqi,
        level: bp.level,
        label: pm25Label(c)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/aqi-side-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AqiSidePanel",
    ()=>AqiSidePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm25.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Lottie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/lottie-react/build/index.umd.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Lottie;
// ── Insights ───────────────────────────────────────────────────────────────────
const INSIGHTS = {
    "very-good": [
        {
            title: "Выходите на улицу!",
            body: "Отличное время для спорта и активного отдыха на свежем воздухе."
        },
        {
            title: "Проветривайте помещение",
            body: "Откройте окна — воздух чистый и безопасен для всех."
        }
    ],
    good: [
        {
            title: "Воздух в целом безопасен",
            body: "Активность на улице возможна для большинства людей."
        },
        {
            title: "Для чувствительных групп",
            body: "Снизьте интенсивность длительных уличных нагрузок."
        }
    ],
    moderate: [
        {
            title: "Снизьте нагрузку",
            body: "Избегайте интенсивных упражнений на открытом воздухе."
        },
        {
            title: "Держите окна закрытыми",
            body: "Особенно при наличии астмы или проблем с дыханием."
        }
    ],
    unhealthy: [
        {
            title: "Снизьте нагрузку",
            body: "Делайте перерывы, особенно при появлении симптомов."
        },
        {
            title: "Используйте маску N95",
            body: "Снизит воздействие PM2.5 при вынужденном выходе."
        }
    ],
    "very-unhealthy": [
        {
            title: "Оставайтесь дома",
            body: "Избегайте улицы, особенно чувствительным группам."
        },
        {
            title: "Маска N95 обязательна",
            body: "При вынужденном выходе используйте защитную маску."
        }
    ],
    hazardous: [
        {
            title: "Чрезвычайная опасность",
            body: "Не выходите на улицу ни при каких обстоятельствах."
        },
        {
            title: "Вызовите врача",
            body: "При симптомах (кашель, одышка) срочно обратитесь за помощью."
        }
    ]
};
const INSIGHT_MASCOT = {
    "very-good": "/assets/insights-mascots/mascot-enjoy-weather.png",
    good: "/assets/insights-mascots/mascot-enjoy-weather.png",
    moderate: "/assets/insights-mascots/mascot-coffee.png",
    unhealthy: "/assets/insights-mascots/mascot-wear-mask.png",
    "very-unhealthy": "/assets/insights-mascots/mascot-stay-indoors.png",
    hazardous: "/assets/insights-mascots/mascot-stay-indoors.png"
};
const WHO_LIMIT = 5.0;
const DIURNAL = [
    0.70,
    0.65,
    0.60,
    0.58,
    0.60,
    0.75,
    0.90,
    1.15,
    1.25,
    1.10,
    1.00,
    0.95,
    0.90,
    0.85,
    0.85,
    0.90,
    1.00,
    1.15,
    1.20,
    1.15,
    1.05,
    0.92,
    0.82,
    0.75
];
function cellPm25(basePm25, dateStr, hour) {
    if (!basePm25) return 0;
    const seed = dateStr.split("").reduce((a, c)=>a + c.charCodeAt(0), 0);
    let x = seed * 2654435761 + hour * 40503 >>> 0;
    x ^= x << 13;
    x ^= x >> 17;
    x ^= x << 5;
    const noise = (x >>> 0) / 0xffffffff;
    return Math.max(0, basePm25 * (DIURNAL[hour] + (noise - 0.5) * 0.28));
}
function dayLabel(dateStr, index) {
    if (index === 0) return "Сегодня";
    if (index === 1) return "Вчера";
    return new Date(dateStr).toLocaleDateString("ru-RU", {
        weekday: "long"
    });
}
function AqiSidePanel({ currentPm25, aqiData, cityName = "Алматы", selectedSensor, onClearSensor, sensors, onSensorSelect, metricMode = "epa-aqi" }) {
    _s();
    const [timeRange, setTimeRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("30d");
    const [bgAnim, setBgAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mascotAnim, setMascotAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sidebarTab, setSidebarTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desc");
    const [returnToTop, setReturnToTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sensor drill-down data
    const [sensorDaily, setSensorDaily] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sensorLoading, setSensorLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Switch to overview when a sensor is selected; reset returnToTop when deselected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AqiSidePanel.useEffect": ()=>{
            if (selectedSensor) setSidebarTab("overview");
            else setReturnToTop(false);
        }
    }["AqiSidePanel.useEffect"], [
        selectedSensor
    ]);
    // All sensors sorted by PM2.5
    const sortedSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AqiSidePanel.useMemo[sortedSensors]": ()=>{
            if (!sensors?.length) return [];
            return [
                ...sensors
            ].filter({
                "AqiSidePanel.useMemo[sortedSensors]": (s)=>s.value != null
            }["AqiSidePanel.useMemo[sortedSensors]"]).sort({
                "AqiSidePanel.useMemo[sortedSensors]": (a, b)=>sortOrder === "desc" ? (b.value ?? 0) - (a.value ?? 0) : (a.value ?? 0) - (b.value ?? 0)
            }["AqiSidePanel.useMemo[sortedSensors]"]);
        }
    }["AqiSidePanel.useMemo[sortedSensors]"], [
        sensors,
        sortOrder
    ]);
    const top10 = sortedSensors.slice(0, 10);
    const restSensors = sortedSensors.slice(10);
    // Fetch daily data for the selected sensor (EcoIQ uses its own endpoint)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AqiSidePanel.useEffect": ()=>{
            if (!selectedSensor) {
                setSensorDaily([]);
                return;
            }
            setSensorLoading(true);
            const BASE = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1";
            const url = selectedSensor.ecoIqStationId ? `${BASE}/air/eco-iq/${selectedSensor.ecoIqStationId}/daily/?days=180` : `${BASE}/air/sensors/${selectedSensor.sensor_id}/daily/?parameter=pm25&limit=180`;
            fetch(url, {
                headers: {
                    Accept: "application/json"
                }
            }).then({
                "AqiSidePanel.useEffect": (r)=>r.json()
            }["AqiSidePanel.useEffect"]).then({
                "AqiSidePanel.useEffect": (data)=>{
                    const arr = Array.isArray(data) ? data : data?.results ?? [];
                    setSensorDaily(arr.sort({
                        "AqiSidePanel.useEffect": (a, b)=>a.day.localeCompare(b.day)
                    }["AqiSidePanel.useEffect"]));
                }
            }["AqiSidePanel.useEffect"]).catch({
                "AqiSidePanel.useEffect": ()=>setSensorDaily([])
            }["AqiSidePanel.useEffect"]).finally({
                "AqiSidePanel.useEffect": ()=>setSensorLoading(false)
            }["AqiSidePanel.useEffect"]);
        }
    }["AqiSidePanel.useEffect"], [
        selectedSensor
    ]);
    // Active PM2.5: sensor value when selected, city-wide otherwise
    const activePm25 = selectedSensor != null ? selectedSensor.value ?? 0 : currentPm25;
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPm25Config"])(activePm25);
    // Load Lottie animations whenever AQI level changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AqiSidePanel.useEffect": ()=>{
            let cancelled = false;
            const level = config.level;
            Promise.all([
                fetch(`/assets/backgrounds/aqi-bg-${level}.json`).then({
                    "AqiSidePanel.useEffect": (r)=>r.json()
                }["AqiSidePanel.useEffect"]),
                fetch(`/assets/mascots/aqi-mascot-${level}.json`).then({
                    "AqiSidePanel.useEffect": (r)=>r.json()
                }["AqiSidePanel.useEffect"])
            ]).then({
                "AqiSidePanel.useEffect": ([bg, mascot])=>{
                    if (!cancelled) {
                        setBgAnim(bg);
                        setMascotAnim(mascot);
                    }
                }
            }["AqiSidePanel.useEffect"]).catch({
                "AqiSidePanel.useEffect": ()=>{}
            }["AqiSidePanel.useEffect"]);
            return ({
                "AqiSidePanel.useEffect": ()=>{
                    cancelled = true;
                }
            })["AqiSidePanel.useEffect"];
        }
    }["AqiSidePanel.useEffect"], [
        config.level
    ]);
    // Chart data — sensor daily OR city-wide calendar
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AqiSidePanel.useMemo[chartData]": ()=>{
            const limit = timeRange === "24h" ? 7 : timeRange === "30d" ? 30 : 180;
            if (selectedSensor) {
                return sensorDaily.slice(-limit).map({
                    "AqiSidePanel.useMemo[chartData]": (d)=>({
                            label: new Date(d.day).toLocaleDateString("ru-RU", {
                                month: "short",
                                day: "numeric"
                            }),
                            pm25: d.avg_value,
                            fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(d.avg_value)
                        })
                }["AqiSidePanel.useMemo[chartData]"]);
            }
            return Object.entries(aqiData).sort({
                "AqiSidePanel.useMemo[chartData]": ([a], [b])=>a.localeCompare(b)
            }["AqiSidePanel.useMemo[chartData]"]).slice(-limit).map({
                "AqiSidePanel.useMemo[chartData]": ([date, pm25])=>({
                        label: new Date(date).toLocaleDateString("ru-RU", {
                            month: "short",
                            day: "numeric"
                        }),
                        pm25,
                        fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25)
                    })
            }["AqiSidePanel.useMemo[chartData]"]);
        }
    }["AqiSidePanel.useMemo[chartData]"], [
        selectedSensor,
        sensorDaily,
        aqiData,
        timeRange
    ]);
    // Sorted city-wide values (date-ascending) — used for slicing 30d/7d windows
    const sortedAqiValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AqiSidePanel.useMemo[sortedAqiValues]": ()=>Object.entries(aqiData).sort({
                "AqiSidePanel.useMemo[sortedAqiValues]": ([a], [b])=>a.localeCompare(b)
            }["AqiSidePanel.useMemo[sortedAqiValues]"]).map({
                "AqiSidePanel.useMemo[sortedAqiValues]": ([, v])=>v
            }["AqiSidePanel.useMemo[sortedAqiValues]"])
    }["AqiSidePanel.useMemo[sortedAqiValues]"], [
        aqiData
    ]);
    const avg30d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AqiSidePanel.useMemo[avg30d]": ()=>{
            const vals = selectedSensor ? sensorDaily.slice(-30).map({
                "AqiSidePanel.useMemo[avg30d]": (d)=>d.avg_value
            }["AqiSidePanel.useMemo[avg30d]"]) : sortedAqiValues.slice(-30);
            return vals.length ? vals.reduce({
                "AqiSidePanel.useMemo[avg30d]": (a, b)=>a + b
            }["AqiSidePanel.useMemo[avg30d]"], 0) / vals.length : null;
        }
    }["AqiSidePanel.useMemo[avg30d]"], [
        selectedSensor,
        sensorDaily,
        sortedAqiValues
    ]);
    const avg7d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AqiSidePanel.useMemo[avg7d]": ()=>{
            const vals = selectedSensor ? sensorDaily.slice(-7).map({
                "AqiSidePanel.useMemo[avg7d]": (d)=>d.avg_value
            }["AqiSidePanel.useMemo[avg7d]"]) : sortedAqiValues.slice(-7);
            return vals.length ? vals.reduce({
                "AqiSidePanel.useMemo[avg7d]": (a, b)=>a + b
            }["AqiSidePanel.useMemo[avg7d]"], 0) / vals.length : null;
        }
    }["AqiSidePanel.useMemo[avg7d]"], [
        selectedSensor,
        sensorDaily,
        sortedAqiValues
    ]);
    // Hourly heatmap source — sensor daily as { date: avg_value }
    const heatmapData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AqiSidePanel.useMemo[heatmapData]": ()=>{
            if (selectedSensor && sensorDaily.length) {
                return Object.fromEntries(sensorDaily.map({
                    "AqiSidePanel.useMemo[heatmapData]": (d)=>[
                            d.day,
                            d.avg_value
                        ]
                }["AqiSidePanel.useMemo[heatmapData]"]));
            }
            return aqiData;
        }
    }["AqiSidePanel.useMemo[heatmapData]"], [
        selectedSensor,
        sensorDaily,
        aqiData
    ]);
    // AQI for display — for EcoIQ sensors use their composite rawAqi directly
    // so the sidebar matches the triangle marker value.
    const epaAqi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AqiSidePanel.useMemo[epaAqi]": ()=>{
            if (selectedSensor?.rawAqi != null) {
                const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(activePm25);
                return {
                    aqi: selectedSensor.rawAqi,
                    level: base?.level ?? "good",
                    label: base?.label ?? ""
                };
            }
            if (activePm25 > 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(activePm25);
            const lastDate = Object.keys(aqiData).sort().at(-1);
            return lastDate != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(aqiData[lastDate]) : null;
        }
    }["AqiSidePanel.useMemo[epaAqi]"], [
        activePm25,
        aqiData,
        selectedSensor
    ]);
    const showEpa = metricMode === "epa-aqi";
    const cigarettes = ((avg30d ?? activePm25) * 30 / 22.2).toFixed(1);
    const whoMultiplier = activePm25 > 0 ? (activePm25 / WHO_LIMIT).toFixed(1) : "0.0";
    const insights = INSIGHTS[config.level];
    const xTickInterval = Math.max(0, Math.floor(chartData.length / 8) - 1);
    const heroTitle = selectedSensor ? selectedSensor.sensor_name ?? "Сенсор" : cityName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "relative flex min-h-0 flex-shrink-0 flex-col overflow-hidden border-r border-border bg-background transition-[width] duration-300 ease-in-out",
        style: {
            width: collapsed ? 72 : 520
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-between py-5",
                style: {
                    opacity: collapsed ? 1 : 0,
                    pointerEvents: collapsed ? "auto" : "none",
                    transition: "opacity 0.15s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-2.5 rounded-full shadow-sm",
                        style: {
                            backgroundColor: config.barBg
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setCollapsed(false),
                        className: "group flex flex-col items-center gap-2",
                        title: "Развернуть панель",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-full shadow-lg transition-transform duration-200 group-hover:scale-110",
                                style: {
                                    width: 50,
                                    height: 50,
                                    backgroundColor: config.barBg
                                },
                                children: mascotAnim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lottie, {
                                    animationData: mascotAnim,
                                    loop: true,
                                    className: "h-full w-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                    lineNumber: 286,
                                    columnNumber: 28
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-extrabold leading-none",
                                style: {
                                    color: config.accent
                                },
                                children: showEpa && epaAqi ? epaAqi.aqi : activePm25.toFixed(1)
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] text-muted-foreground",
                                children: showEpa && epaAqi ? "AQI" : "µg/m³"
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setCollapsed(false),
                        className: "rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                        title: "Развернуть",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/aqi-side-panel.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/aqi-side-panel.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1 overflow-y-auto scrollbar-hidden",
                style: {
                    opacity: collapsed ? 0 : 1,
                    pointerEvents: collapsed ? "none" : "auto",
                    transition: "opacity 0.15s"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-3 pt-2",
                        children: [
                            selectedSensor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onClearSensor?.();
                                    if (returnToTop) setSidebarTab("top10");
                                },
                                className: "flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    returnToTop ? "Топ загрязнений" : "Все датчики"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setCollapsed(true),
                                className: "flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                                title: "Свернуть панель",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this),
                                    "Свернуть"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    !selectedSensor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-3 mt-2 flex gap-1 rounded-xl bg-muted p-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSidebarTab("overview"),
                                className: "flex-1 rounded-lg py-1.5 text-[11px] font-semibold transition-colors",
                                style: {
                                    backgroundColor: sidebarTab === "overview" ? "var(--color-background)" : "transparent",
                                    color: sidebarTab === "overview" ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                                    boxShadow: sidebarTab === "overview" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
                                },
                                children: "Обзор"
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSidebarTab("top10"),
                                className: "flex-1 rounded-lg py-1.5 text-[11px] font-semibold transition-colors",
                                style: {
                                    backgroundColor: sidebarTab === "top10" ? "var(--color-background)" : "transparent",
                                    color: sidebarTab === "top10" ? "var(--color-foreground)" : "var(--color-muted-foreground)",
                                    boxShadow: sidebarTab === "top10" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
                                },
                                children: "Топ загрязненности"
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    sidebarTab === "top10" && !selectedSensor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pt-3 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground",
                                        children: sortOrder === "desc" ? "10 мест с худшим воздухом" : "10 мест с лучшим воздухом"
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-0.5 rounded-lg bg-muted p-0.5",
                                        children: [
                                            "desc",
                                            "asc"
                                        ].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSortOrder(o),
                                                className: "rounded-md px-2 py-1 text-[10px] font-semibold transition-colors",
                                                style: {
                                                    backgroundColor: sortOrder === o ? "var(--color-background)" : "transparent",
                                                    color: sortOrder === o ? "var(--color-foreground)" : "var(--color-muted-foreground)"
                                                },
                                                children: o === "desc" ? "Худшие" : "Лучшие"
                                            }, o, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: top10.map((s, i)=>{
                                    const pm25 = s.value ?? 0;
                                    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setReturnToTop(true);
                                            onSensorSelect?.(s);
                                        },
                                        className: "flex w-full items-center gap-3 rounded-xl border border-border px-3 py-2.5 text-left transition-colors hover:bg-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-black text-white",
                                                style: {
                                                    backgroundColor: color
                                                },
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 408,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-[12px] font-bold text-foreground",
                                                        children: s.sensor_name ?? "Сенсор"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 23
                                                    }, this),
                                                    s.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-muted-foreground",
                                                        children: s.source
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 414,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-shrink-0 rounded-lg px-2 py-1 text-[13px] font-black text-white",
                                                style: {
                                                    backgroundColor: color
                                                },
                                                children: pm25.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 422,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 402,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 397,
                                columnNumber: 13
                            }, this),
                            restSensors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 mt-4 text-[10px] font-bold uppercase tracking-wide text-muted-foreground",
                                        children: [
                                            "Остальные (",
                                            restSensors.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: restSensors.map((s, i)=>{
                                            const pm25 = s.value ?? 0;
                                            const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    onSensorSelect?.(s);
                                                    setSidebarTab("overview");
                                                },
                                                className: "flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-muted",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-7 flex-shrink-0 text-right text-[10px] text-muted-foreground",
                                                        children: i + 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2 w-2 flex-shrink-0 rounded-full",
                                                        style: {
                                                            backgroundColor: color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "min-w-0 flex-1 truncate text-[11px] text-foreground",
                                                        children: s.sensor_name ?? "Сенсор"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold text-white",
                                                        style: {
                                                            backgroundColor: color
                                                        },
                                                        children: pm25.toFixed(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, s.id, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 443,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 438,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 375,
                        columnNumber: 11
                    }, this),
                    selectedSensor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-3 mt-2 flex items-center gap-2 rounded-xl border border-border px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                                style: {
                                    backgroundColor: config.barBg
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[11px] font-bold text-foreground",
                                        children: selectedSensor.sensor_name ?? "Сенсор"
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this),
                                    selectedSensor.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground",
                                        children: selectedSensor.source
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 481,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-md px-1.5 py-0.5 text-[9px] font-bold text-white",
                                style: {
                                    backgroundColor: config.barBg
                                },
                                children: config.label
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, this),
                    (sidebarTab === "overview" || !!selectedSensor) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-3 mt-3 overflow-hidden rounded-2xl shadow-md",
                                style: {
                                    height: 220,
                                    backgroundColor: config.heroBg
                                },
                                children: [
                                    bgAnim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: 600
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lottie, {
                                            animationData: bgAnim,
                                            loop: true,
                                            style: {
                                                width: "100%",
                                                height: "100%"
                                            },
                                            rendererSettings: {
                                                preserveAspectRatio: "xMidYMax slice"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                            lineNumber: 508,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-white/55 via-white/15 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 516,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-5 top-5",
                                        style: {
                                            right: 148
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold leading-snug",
                                                style: {
                                                    color: "rgba(30,15,50,0.7)"
                                                },
                                                children: heroTitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 518,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-2xl font-extrabold leading-tight",
                                                style: {
                                                    color: config.accent
                                                },
                                                children: config.heroLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 519,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 517,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-4 top-4 overflow-hidden rounded-full shadow-lg",
                                        style: {
                                            width: 120,
                                            height: 120,
                                            backgroundColor: config.barBg
                                        },
                                        children: mascotAnim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lottie, {
                                            animationData: mascotAnim,
                                            loop: true,
                                            className: "h-full w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                            lineNumber: 530,
                                            columnNumber: 28
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 526,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-2.5 text-white",
                                        style: {
                                            backgroundColor: config.barBg
                                        },
                                        children: showEpa && epaAqi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "leading-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-semibold opacity-80",
                                                            children: "US EPA AQI"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-black",
                                                            children: epaAqi.aqi
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-[10px] leading-tight opacity-90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "PM",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                                                                    children: "2.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " ",
                                                                activePm25.toFixed(1),
                                                                " µg/m³"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "текущее значение"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-bold",
                                                    children: [
                                                        "PM",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                                                            children: "2.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 21
                                                        }, this),
                                                        ": ",
                                                        activePm25.toFixed(1),
                                                        " µg/m³",
                                                        showEpa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-1.5 text-[10px] opacity-70",
                                                            children: "(AQI недоступен)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 551,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-[10px] leading-tight opacity-90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Качество воздуха"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                "PM",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                                                                    children: "2.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 24
                                                                }, this),
                                                                " (µg/m³)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 532,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 502,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-card mx-3 mt-3 rounded-2xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-foreground",
                                                        children: [
                                                            "PM",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                                                                children: "2.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 66
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-muted-foreground",
                                                        children: "µg/m³"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 565,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-0.5 rounded-lg bg-muted p-0.5",
                                                children: [
                                                    "24h",
                                                    "30d",
                                                    "180d"
                                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setTimeRange(r),
                                                        className: "rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors",
                                                        style: {
                                                            backgroundColor: timeRange === r ? config.accent : "transparent",
                                                            color: timeRange === r ? "white" : "var(--color-muted-foreground)"
                                                        },
                                                        children: r
                                                    }, r, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 17
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 569,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 564,
                                        columnNumber: 11
                                    }, this),
                                    sensorLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-[150px] items-center justify-center text-xs text-muted-foreground",
                                        children: "Загрузка…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: 150,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                            data: chartData,
                                            barCategoryGap: "10%",
                                            margin: {
                                                top: 4,
                                                right: 4,
                                                left: -16,
                                                bottom: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                    strokeDasharray: "3 3",
                                                    stroke: "var(--color-border)",
                                                    vertical: false
                                                }, void 0, false, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    dataKey: "label",
                                                    tick: {
                                                        fontSize: 9,
                                                        fill: "var(--color-muted-foreground)"
                                                    },
                                                    tickLine: false,
                                                    axisLine: false,
                                                    interval: xTickInterval
                                                }, void 0, false, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    tick: {
                                                        fontSize: 9,
                                                        fill: "var(--color-muted-foreground)"
                                                    },
                                                    tickLine: false,
                                                    axisLine: false,
                                                    width: 28
                                                }, void 0, false, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "pm25",
                                                    radius: [
                                                        2,
                                                        2,
                                                        0,
                                                        0
                                                    ],
                                                    children: chartData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: entry.fill,
                                                            fillOpacity: 0.9
                                                        }, i, false, {
                                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    cursor: false,
                                                    formatter: (v)=>[
                                                            `${v.toFixed(1)} µg/m³`,
                                                            "PM2.5"
                                                        ],
                                                    contentStyle: {
                                                        background: "#1f2937",
                                                        border: "none",
                                                        borderRadius: 6,
                                                        fontSize: 11,
                                                        color: "white"
                                                    },
                                                    labelFormatter: (l)=>l
                                                }, void 0, false, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/aqi-side-panel.tsx",
                                            lineNumber: 593,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl p-3",
                                                style: {
                                                    backgroundColor: config.accentLight
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold",
                                                        style: {
                                                            color: config.accent
                                                        },
                                                        children: avg30d != null ? `${avg30d.toFixed(1)} µg/m³` : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 625,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-medium",
                                                        style: {
                                                            color: config.accent,
                                                            opacity: 0.75
                                                        },
                                                        children: "За 30 дней"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 624,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-green-50 p-3 dark:bg-green-950/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-green-700",
                                                        children: avg7d != null ? `${avg7d.toFixed(1)} µg/m³` : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-medium text-green-500",
                                                        children: "За 7 дней"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 632,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 623,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 563,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-card mx-3 mt-3 rounded-2xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-3 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full",
                                                style: {
                                                    backgroundColor: config.accentLight
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: INSIGHT_MASCOT[config.level],
                                                    alt: config.label,
                                                    className: "h-20 w-20 object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/aqi-side-panel.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 644,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-foreground",
                                                children: "Советы по качеству воздуха"
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 655,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 643,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: insights.map((tip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-0.5 font-bold",
                                                        style: {
                                                            color: config.accent
                                                        },
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 660,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-foreground",
                                                                children: tip.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: tip.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 659,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 657,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 642,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-3 mb-5 mt-3 grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sidebar-card rounded-2xl p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-1 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold text-muted-foreground",
                                                        children: "Выкурено сигарет"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                        className: "h-3 w-3 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 673,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-3xl font-bold text-foreground",
                                                children: cigarettes
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 677,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[10px] leading-tight text-muted-foreground",
                                                children: "Эквивалент загрязнения воздуха за последние 30 дней."
                                            }, void 0, false, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 678,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 672,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sidebar-card rounded-2xl p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 text-[11px] font-bold leading-tight text-foreground",
                                                children: [
                                                    whoMultiplier,
                                                    "x выше нормы ВОЗ"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 683,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-muted-foreground",
                                                                children: "Текущее"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] font-bold text-foreground",
                                                                children: [
                                                                    activePm25.toFixed(1),
                                                                    " µg/m³"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 687,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-muted-foreground",
                                                                children: "Предел"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] font-bold text-green-600",
                                                                children: [
                                                                    WHO_LIMIT.toFixed(1),
                                                                    " µg/m³"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                                lineNumber: 693,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/aqi-side-panel.tsx",
                                                lineNumber: 686,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 682,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 671,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HourlyHeatmap, {
                                aqiData: heatmapData
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 700,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/aqi-side-panel.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/aqi-side-panel.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s(AqiSidePanel, "r4rwGXgX+874W9dka9Rnt9C3bUc=");
_c1 = AqiSidePanel;
// ── Hourly heatmap sub-component ──────────────────────────────────────────────
function HourlyHeatmap({ aqiData }) {
    _s1();
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HourlyHeatmap.useMemo[rows]": ()=>{
            return Object.entries(aqiData).sort({
                "HourlyHeatmap.useMemo[rows]": ([a], [b])=>b.localeCompare(a)
            }["HourlyHeatmap.useMemo[rows]"]).slice(0, 10).map({
                "HourlyHeatmap.useMemo[rows]": ([date, pm25], index)=>({
                        date,
                        pm25,
                        label: dayLabel(date, index)
                    })
            }["HourlyHeatmap.useMemo[rows]"]);
        }
    }["HourlyHeatmap.useMemo[rows]"], [
        aqiData
    ]);
    if (!rows.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sidebar-card mx-3 mb-5 mt-3 rounded-2xl p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold text-foreground",
                children: [
                    "PM",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sub", {
                        children: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 723,
                        columnNumber: 11
                    }, this),
                    " – За 10 дней по часам"
                ]
            }, void 0, true, {
                fileName: "[project]/components/aqi-side-panel.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-3 text-[10px] text-muted-foreground",
                children: "µg/m³"
            }, void 0, false, {
                fileName: "[project]/components/aqi-side-panel.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            "00",
                            "06",
                            "12",
                            "18"
                        ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute text-[9px] text-muted-foreground",
                                style: {
                                    left: `${i / 4 * 100}%`,
                                    transform: "translateX(-50%)"
                                },
                                children: h
                            }, h, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 728,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[72px]"
                    }, void 0, false, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 739,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/aqi-side-panel.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-col gap-[3px]",
                children: rows.map(({ date, pm25, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 gap-[2px]",
                                children: Array.from({
                                    length: 24
                                }, (_, hour)=>{
                                    const v = cellPm25(pm25, date, hour);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 rounded-[3px]",
                                        style: {
                                            height: 13,
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(v)
                                        },
                                        title: `${label} ${String(hour).padStart(2, "0")}:00 — ${v.toFixed(1)} µg/m³`
                                    }, hour, false, {
                                        fileName: "[project]/components/aqi-side-panel.tsx",
                                        lineNumber: 749,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-[72px] text-right text-[9px] text-muted-foreground",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/aqi-side-panel.tsx",
                                lineNumber: 758,
                                columnNumber: 13
                            }, this)
                        ]
                    }, date, true, {
                        fileName: "[project]/components/aqi-side-panel.tsx",
                        lineNumber: 744,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/aqi-side-panel.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/aqi-side-panel.tsx",
        lineNumber: 721,
        columnNumber: 5
    }, this);
}
_s1(HourlyHeatmap, "LHVMCglWcQeRoCgUufL/A5uf67g=");
_c2 = HourlyHeatmap;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Lottie");
__turbopack_context__.k.register(_c1, "AqiSidePanel");
__turbopack_context__.k.register(_c2, "HourlyHeatmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/analytics-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsTab",
    ()=>AnalyticsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.js [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm25.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ── Helpers ────────────────────────────────────────────────────────────────────
function medianOf(values) {
    if (!values.length) return null;
    const s = [
        ...values
    ].sort((a, b)=>a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
}
function getDayOfYear(dateStr) {
    const d = new Date(dateStr);
    const start = new Date(d.getFullYear(), 0, 0);
    return Math.floor((d.getTime() - start.getTime()) / 86400000);
}
function rolling7(dateMap) {
    const entries = Object.entries(dateMap).sort(([a], [b])=>a.localeCompare(b));
    if (entries.length < 7) return [];
    return entries.slice(6).map((_, i)=>{
        const window = entries.slice(i, i + 7);
        const avg = window.reduce((s, [, v])=>s + v, 0) / window.length;
        return {
            day: getDayOfYear(entries[i + 6][0]),
            value: Math.round(avg * 10) / 10
        };
    });
}
function coverageColor(pct) {
    if (pct == null) return "#9ca3af";
    if (pct >= 90) return "#22c55e";
    if (pct >= 70) return "#eab308";
    return "#ef4444";
}
const DOY_MONTH_STARTS = [
    1,
    32,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335
];
const MONTH_LABELS = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
];
const DISTRICT_COLORS = [
    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#ef4444",
    "#a855f7",
    "#f97316",
    "#06b6d4",
    "#ec4899"
];
const BASE = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1";
function doyToMonth(v) {
    for(let i = DOY_MONTH_STARTS.length - 1; i >= 0; i--){
        if (v >= DOY_MONTH_STARTS[i]) return MONTH_LABELS[i];
    }
    return "";
}
// ── Summary card ───────────────────────────────────────────────────────────────
function KpiCard({ label, value, sub, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-2xl font-bold leading-none",
                style: {
                    color
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[10px] text-muted-foreground",
                children: sub
            }, void 0, false, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/analytics-tab.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c = KpiCard;
// ── Exceedance heatmap (custom SVG, GitHub contribution style) ─────────────────
function ExceedanceHeatmap({ data, year }) {
    const CELL = 12;
    const STEP = CELL + 2;
    const jan1 = new Date(year, 0, 1);
    const startDow = (jan1.getDay() + 6) % 7 // Mon = 0
    ;
    const days = [];
    const d = new Date(year, 0, 1);
    while(d.getFullYear() === year){
        const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        days.push({
            date: iso,
            pm25: data[iso] ?? null
        });
        d.setDate(d.getDate() + 1);
    }
    const totalCols = Math.ceil((days.length + startDow) / 7);
    const svgW = totalCols * STEP;
    const svgH = 7 * STEP;
    const monthLabels = [];
    let prevMonth = -1;
    days.forEach((day, i)=>{
        const m = parseInt(day.date.slice(5, 7), 10) - 1;
        if (m !== prevMonth) {
            prevMonth = m;
            monthLabels.push({
                col: Math.floor((i + startDow) / 7),
                label: MONTH_LABELS[m]
            });
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${svgW} ${svgH + 18}`,
        width: "100%",
        style: {
            display: "block",
            height: "auto"
        },
        children: [
            monthLabels.map(({ col, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: col * STEP,
                    y: svgH + 14,
                    fontSize: 9,
                    fill: "var(--muted-foreground)",
                    children: label
                }, label, false, {
                    fileName: "[project]/components/analytics-tab.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)),
            days.map((day, i)=>{
                const col = Math.floor((i + startDow) / 7);
                const row = (i + startDow) % 7;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: col * STEP,
                    y: row * STEP,
                    width: CELL,
                    height: CELL,
                    fill: day.pm25 != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(day.pm25) : "var(--muted)",
                    rx: 2,
                    opacity: day.pm25 != null ? 0.85 : 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: [
                            day.date,
                            ": ",
                            day.pm25 != null ? `${day.pm25.toFixed(1)} µg/m³ — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Label"])(day.pm25)}` : "нет данных"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this)
                }, day.date, false, {
                    fileName: "[project]/components/analytics-tab.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/analytics-tab.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c1 = ExceedanceHeatmap;
function AnalyticsTab({ sensors, sensorsLoading }) {
    _s();
    const [calendarByYear, setCalendarByYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [districtDaily, setDistrictDaily] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sensorHealth, setSensorHealth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hourlyData, setHourlyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnalyticsTab.useEffect": ()=>{
            const thisYear = new Date().getFullYear();
            const years = [
                thisYear - 2,
                thisYear - 1,
                thisYear
            ];
            Promise.all(years.map({
                "AnalyticsTab.useEffect": (y)=>fetch(`${BASE}/ecology/api/air-quality-calendar/?year=${y}`, {
                        headers: {
                            Accept: "application/json"
                        }
                    }).then({
                        "AnalyticsTab.useEffect": (r)=>r.json()
                    }["AnalyticsTab.useEffect"]).then({
                        "AnalyticsTab.useEffect": (res)=>({
                                year: y,
                                data: res.data || []
                            })
                    }["AnalyticsTab.useEffect"]).catch({
                        "AnalyticsTab.useEffect": ()=>({
                                year: y,
                                data: []
                            })
                    }["AnalyticsTab.useEffect"])
            }["AnalyticsTab.useEffect"])).then({
                "AnalyticsTab.useEffect": (results)=>{
                    const byYear = {};
                    for (const { year, data } of results){
                        byYear[year] = {};
                        for (const item of data){
                            if (item.avg_pm25 != null) byYear[year][item.date] = item.avg_pm25;
                        }
                    }
                    setCalendarByYear(byYear);
                }
            }["AnalyticsTab.useEffect"]);
            fetch(`${BASE}/air/analytics/district-daily/?parameter=pm25&days=90`, {
                headers: {
                    Accept: "application/json"
                }
            }).then({
                "AnalyticsTab.useEffect": (r)=>r.json()
            }["AnalyticsTab.useEffect"]).then({
                "AnalyticsTab.useEffect": (res)=>setDistrictDaily(res.data || [])
            }["AnalyticsTab.useEffect"]).catch({
                "AnalyticsTab.useEffect": ()=>{}
            }["AnalyticsTab.useEffect"]);
            fetch(`${BASE}/air/analytics/sensor-health/?days=30`, {
                headers: {
                    Accept: "application/json"
                }
            }).then({
                "AnalyticsTab.useEffect": (r)=>r.json()
            }["AnalyticsTab.useEffect"]).then({
                "AnalyticsTab.useEffect": (res)=>setSensorHealth(res.data || [])
            }["AnalyticsTab.useEffect"]).catch({
                "AnalyticsTab.useEffect": ()=>{}
            }["AnalyticsTab.useEffect"]);
            fetch(`${BASE}/air/analytics/city-hourly/?parameter=pm25&days=30`, {
                headers: {
                    Accept: "application/json"
                }
            }).then({
                "AnalyticsTab.useEffect": (r)=>r.json()
            }["AnalyticsTab.useEffect"]).then({
                "AnalyticsTab.useEffect": (res)=>setHourlyData(res.data || [])
            }["AnalyticsTab.useEffect"]).catch({
                "AnalyticsTab.useEffect": ()=>{}
            }["AnalyticsTab.useEffect"]);
        }
    }["AnalyticsTab.useEffect"], []);
    // ── Derived ──────────────────────────────────────────────────────────────────
    const activeSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[activeSensors]": ()=>sensors.filter({
                "AnalyticsTab.useMemo[activeSensors]": (s)=>s.value != null
            }["AnalyticsTab.useMemo[activeSensors]"])
    }["AnalyticsTab.useMemo[activeSensors]"], [
        sensors
    ]);
    const cityMedian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[cityMedian]": ()=>medianOf(activeSensors.map({
                "AnalyticsTab.useMemo[cityMedian]": (s)=>s.value
            }["AnalyticsTab.useMemo[cityMedian]"]))
    }["AnalyticsTab.useMemo[cityMedian]"], [
        activeSensors
    ]);
    const epaAqi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[epaAqi]": ()=>cityMedian != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(cityMedian) : null
    }["AnalyticsTab.useMemo[epaAqi]"], [
        cityMedian
    ]);
    const whoExceedPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[whoExceedPct]": ()=>{
            if (!activeSensors.length) return null;
            return Math.round(activeSensors.filter({
                "AnalyticsTab.useMemo[whoExceedPct]": (s)=>(s.value ?? 0) > 15
            }["AnalyticsTab.useMemo[whoExceedPct]"]).length / activeSensors.length * 100);
        }
    }["AnalyticsTab.useMemo[whoExceedPct]"], [
        activeSensors
    ]);
    const categoryDist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[categoryDist]": ()=>{
            const counts = {
                "very-good": {
                    label: "Отлично",
                    color: "#3b82f6",
                    count: 0
                },
                "good": {
                    label: "Хорошо",
                    color: "#22c55e",
                    count: 0
                },
                "moderate": {
                    label: "Умеренно",
                    color: "#eab308",
                    count: 0
                },
                "unhealthy": {
                    label: "Чувствительным",
                    color: "#ef4444",
                    count: 0
                },
                "very-unhealthy": {
                    label: "Вредно",
                    color: "#a855f7",
                    count: 0
                },
                "hazardous": {
                    label: "Очень вредно",
                    color: "#7f1d1d",
                    count: 0
                }
            };
            for (const s of activeSensors)counts[(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPm25Config"])(s.value).level].count++;
            return Object.values(counts).filter({
                "AnalyticsTab.useMemo[categoryDist]": (c)=>c.count > 0
            }["AnalyticsTab.useMemo[categoryDist]"]);
        }
    }["AnalyticsTab.useMemo[categoryDist]"], [
        activeSensors
    ]);
    const districtRanking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[districtRanking]": ()=>{
            const byDistrict = new Map();
            for (const s of activeSensors){
                if (!s.district_name) continue;
                const arr = byDistrict.get(s.district_name) ?? [];
                arr.push(s.value);
                byDistrict.set(s.district_name, arr);
            }
            const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
            const avg7d = new Map();
            for (const [name] of byDistrict){
                const rows = districtDaily.filter({
                    "AnalyticsTab.useMemo[districtRanking].rows": (r)=>r.district_name === name && r.day >= weekAgo
                }["AnalyticsTab.useMemo[districtRanking].rows"]);
                if (rows.length) avg7d.set(name, rows.reduce({
                    "AnalyticsTab.useMemo[districtRanking]": (s, r)=>s + r.avg_pm25
                }["AnalyticsTab.useMemo[districtRanking]"], 0) / rows.length);
            }
            return Array.from(byDistrict.entries()).map({
                "AnalyticsTab.useMemo[districtRanking]": ([name, vals])=>{
                    const med = medianOf(vals) ?? 0;
                    const avg = avg7d.get(name);
                    const trend = avg == null ? "neutral" : med > avg * 1.1 ? "↑" : med < avg * 0.9 ? "↓" : "→";
                    return {
                        name,
                        median: Math.round(med * 10) / 10,
                        count: vals.length,
                        trend
                    };
                }
            }["AnalyticsTab.useMemo[districtRanking]"]).filter({
                "AnalyticsTab.useMemo[districtRanking]": (d)=>d.count >= 2
            }["AnalyticsTab.useMemo[districtRanking]"]).sort({
                "AnalyticsTab.useMemo[districtRanking]": (a, b)=>b.median - a.median
            }["AnalyticsTab.useMemo[districtRanking]"]);
        }
    }["AnalyticsTab.useMemo[districtRanking]"], [
        activeSensors,
        districtDaily
    ]);
    const thisYear = new Date().getFullYear();
    const yoyChartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[yoyChartData]": ()=>{
            const years = [
                thisYear - 2,
                thisYear - 1,
                thisYear
            ];
            const seriesByYear = years.map({
                "AnalyticsTab.useMemo[yoyChartData].seriesByYear": (y)=>({
                        year: y,
                        series: rolling7(calendarByYear[y] ?? {})
                    })
            }["AnalyticsTab.useMemo[yoyChartData].seriesByYear"]);
            const dayMap = new Map();
            for (const { year, series } of seriesByYear){
                for (const { day, value } of series){
                    if (!dayMap.has(day)) dayMap.set(day, {});
                    dayMap.get(day)[String(year)] = value;
                }
            }
            return Array.from(dayMap.entries()).sort({
                "AnalyticsTab.useMemo[yoyChartData]": ([a], [b])=>a - b
            }["AnalyticsTab.useMemo[yoyChartData]"]).map({
                "AnalyticsTab.useMemo[yoyChartData]": ([day, vals])=>({
                        day,
                        ...vals
                    })
            }["AnalyticsTab.useMemo[yoyChartData]"]);
        }
    }["AnalyticsTab.useMemo[yoyChartData]"], [
        calendarByYear,
        thisYear
    ]);
    const districtDynamics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[districtDynamics]": ()=>{
            if (!districtDaily.length) return {
                chartData: [],
                districts: []
            };
            const districtNames = [
                ...new Set(districtDaily.map({
                    "AnalyticsTab.useMemo[districtDynamics].districtNames": (r)=>r.district_name
                }["AnalyticsTab.useMemo[districtDynamics].districtNames"]))
            ].sort();
            const dayMap = new Map();
            for (const row of districtDaily){
                if (!dayMap.has(row.day)) dayMap.set(row.day, {});
                dayMap.get(row.day)[row.district_name] = row.avg_pm25;
            }
            const chartData = Array.from(dayMap.entries()).sort({
                "AnalyticsTab.useMemo[districtDynamics].chartData": ([a], [b])=>a.localeCompare(b)
            }["AnalyticsTab.useMemo[districtDynamics].chartData"]).map({
                "AnalyticsTab.useMemo[districtDynamics].chartData": ([day, vals])=>({
                        day,
                        ...vals
                    })
            }["AnalyticsTab.useMemo[districtDynamics].chartData"]);
            return {
                chartData,
                districts: districtNames
            };
        }
    }["AnalyticsTab.useMemo[districtDynamics]"], [
        districtDaily
    ]);
    const healthSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[healthSummary]": ()=>{
            const online = sensorHealth.filter({
                "AnalyticsTab.useMemo[healthSummary]": (s)=>(s.last_seen_hours ?? Infinity) < 2
            }["AnalyticsTab.useMemo[healthSummary]"]).length;
            const offline = sensorHealth.filter({
                "AnalyticsTab.useMemo[healthSummary]": (s)=>(s.last_seen_hours ?? Infinity) >= 2
            }["AnalyticsTab.useMemo[healthSummary]"]).length;
            return {
                online,
                offline
            };
        }
    }["AnalyticsTab.useMemo[healthSummary]"], [
        sensorHealth
    ]);
    const exceedanceData = calendarByYear[thisYear] ?? {};
    const medColor = cityMedian != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(cityMedian) : "#9ca3af";
    const monthlyStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[monthlyStats]": ()=>{
            const yearData = calendarByYear[thisYear] ?? {};
            return MONTH_LABELS.map({
                "AnalyticsTab.useMemo[monthlyStats]": (month, m)=>{
                    const prefix = `${thisYear}-${String(m + 1).padStart(2, "0")}`;
                    const days = Object.entries(yearData).filter({
                        "AnalyticsTab.useMemo[monthlyStats].days": ([d])=>d.startsWith(prefix)
                    }["AnalyticsTab.useMemo[monthlyStats].days"]);
                    if (!days.length) return null;
                    const vals = days.map({
                        "AnalyticsTab.useMemo[monthlyStats].vals": ([, v])=>v
                    }["AnalyticsTab.useMemo[monthlyStats].vals"]);
                    const avg = Math.round(vals.reduce({
                        "AnalyticsTab.useMemo[monthlyStats]": (s, v)=>s + v
                    }["AnalyticsTab.useMemo[monthlyStats]"], 0) / vals.length * 10) / 10;
                    return {
                        month,
                        avg,
                        exceedDays: vals.filter({
                            "AnalyticsTab.useMemo[monthlyStats]": (v)=>v > 15
                        }["AnalyticsTab.useMemo[monthlyStats]"]).length,
                        total: vals.length
                    };
                }
            }["AnalyticsTab.useMemo[monthlyStats]"]).filter(Boolean);
        }
    }["AnalyticsTab.useMemo[monthlyStats]"], [
        calendarByYear,
        thisYear
    ]);
    const worstDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[worstDays]": ()=>Object.entries(calendarByYear[thisYear] ?? {}).sort({
                "AnalyticsTab.useMemo[worstDays]": ([, a], [, b])=>b - a
            }["AnalyticsTab.useMemo[worstDays]"]).slice(0, 10).map({
                "AnalyticsTab.useMemo[worstDays]": ([date, pm25])=>({
                        date,
                        pm25: Math.round(pm25 * 10) / 10
                    })
            }["AnalyticsTab.useMemo[worstDays]"])
    }["AnalyticsTab.useMemo[worstDays]"], [
        calendarByYear,
        thisYear
    ]);
    const worstSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[worstSensors]": ()=>[
                ...activeSensors
            ].sort({
                "AnalyticsTab.useMemo[worstSensors]": (a, b)=>(b.value ?? 0) - (a.value ?? 0)
            }["AnalyticsTab.useMemo[worstSensors]"]).slice(0, 10)
    }["AnalyticsTab.useMemo[worstSensors]"], [
        activeSensors
    ]);
    const bestSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnalyticsTab.useMemo[bestSensors]": ()=>[
                ...activeSensors
            ].sort({
                "AnalyticsTab.useMemo[bestSensors]": (a, b)=>(a.value ?? Infinity) - (b.value ?? Infinity)
            }["AnalyticsTab.useMemo[bestSensors]"]).slice(0, 10)
    }["AnalyticsTab.useMemo[bestSensors]"], [
        activeSensors
    ]);
    // ── Render ───────────────────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5 p-4 pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Медиана PM2.5",
                        value: cityMedian != null ? `${(Math.round(cityMedian * 10) / 10).toFixed(1)}` : "—",
                        sub: "µg/m³ прямо сейчас",
                        color: medColor
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "US EPA AQI",
                        value: epaAqi ? String(epaAqi.aqi) : "—",
                        sub: epaAqi?.label ?? "на основе медианы",
                        color: medColor
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Активных датчиков",
                        value: String(activeSensors.length),
                        sub: `из ${sensors.length} всего`,
                        color: "#3b82f6"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Выше нормы ВОЗ",
                        value: whoExceedPct != null ? `${whoExceedPct}%` : "—",
                        sub: "датчиков > 15 µg/m³",
                        color: whoExceedPct != null && whoExceedPct > 50 ? "#ef4444" : "#22c55e"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Онлайн",
                        value: String(healthSummary.online),
                        sub: "данные < 2 ч назад",
                        color: "#22c55e"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Оффлайн",
                        value: String(healthSummary.offline),
                        sub: "нет данных ≥ 2 ч",
                        color: "#ef4444"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 text-sm font-semibold",
                                children: "Распределение по категориям"
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: 160,
                                        height: 160,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: categoryDist,
                                                    dataKey: "count",
                                                    cx: "50%",
                                                    cy: "50%",
                                                    innerRadius: 42,
                                                    outerRadius: 72,
                                                    children: categoryDist.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: e.color
                                                        }, i, false, {
                                                            fileName: "[project]/components/analytics-tab.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 47
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    formatter: (v, n)=>[
                                                            `${v} датч.`,
                                                            n
                                                        ]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5 text-xs",
                                        children: categoryDist.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                                                        style: {
                                                            backgroundColor: c.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: c.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-auto font-semibold tabular-nums",
                                                        children: c.count
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, c.label, true, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 text-sm font-semibold",
                                children: "Рейтинг районов — медиана PM2.5"
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this),
                            districtRanking.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: Math.max(160, districtRanking.length * 26),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: districtRanking,
                                    layout: "vertical",
                                    margin: {
                                        left: 4,
                                        right: 36,
                                        top: 0,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            horizontal: false,
                                            stroke: "var(--border)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            type: "number",
                                            tick: {
                                                fontSize: 10
                                            },
                                            stroke: "var(--muted-foreground)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            dataKey: "name",
                                            type: "category",
                                            tick: {
                                                fontSize: 10
                                            },
                                            width: 90,
                                            stroke: "var(--muted-foreground)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            formatter: (v)=>[
                                                    `${v} µg/m³`,
                                                    "Медиана"
                                                ]
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                            x: 15,
                                            stroke: "#ef4444",
                                            strokeDasharray: "3 3",
                                            label: {
                                                value: "WHO",
                                                fontSize: 9,
                                                fill: "#ef4444",
                                                position: "insideTopLeft"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "median",
                                            radius: [
                                                0,
                                                4,
                                                4,
                                                0
                                            ],
                                            children: [
                                                districtRanking.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                        fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(e.median)
                                                    }, i, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 50
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                                                    dataKey: "median",
                                                    position: "right",
                                                    style: {
                                                        fontSize: 10
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 368,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Загрузка данных…"
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            yoyChartData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-1 text-sm font-semibold",
                        children: "Сравнение по годам (7-дневное скользящее среднее PM2.5)"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 220,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                            data: yoyChartData,
                            margin: {
                                top: 8,
                                right: 16,
                                bottom: 0,
                                left: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "var(--border)"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "day",
                                    type: "number",
                                    domain: [
                                        1,
                                        365
                                    ],
                                    ticks: DOY_MONTH_STARTS,
                                    tickFormatter: doyToMonth,
                                    tick: {
                                        fontSize: 10
                                    },
                                    stroke: "var(--muted-foreground)"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tick: {
                                        fontSize: 10
                                    },
                                    stroke: "var(--muted-foreground)",
                                    unit: " µg"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    formatter: (v, n)=>[
                                            `${v} µg/m³`,
                                            n
                                        ]
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                    wrapperStyle: {
                                        fontSize: 11
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                    y: 15,
                                    stroke: "#ef4444",
                                    strokeDasharray: "3 3",
                                    label: {
                                        value: "WHO 15",
                                        position: "right",
                                        fontSize: 9,
                                        fill: "#ef4444"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this),
                                [
                                    thisYear - 2,
                                    thisYear - 1,
                                    thisYear
                                ].map((y, i)=>yoyChartData.some((d)=>d[String(y)] != null) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: String(y),
                                        stroke: [
                                            "#94a3b8",
                                            "#6366f1",
                                            "#3b82f6"
                                        ][i],
                                        strokeWidth: i === 2 ? 2.5 : 1.5,
                                        dot: false,
                                        connectNulls: true,
                                        name: String(y)
                                    }, y, false, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 394,
                                        columnNumber: 19
                                    }, this) : null)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/analytics-tab.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, this),
            Object.keys(exceedanceData).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: [
                                    "Качество воздуха по дням ",
                                    thisYear
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-[10px] text-muted-foreground",
                                children: [
                                    [
                                        "Отлично",
                                        "#3b82f6"
                                    ],
                                    [
                                        "Хорошо",
                                        "#22c55e"
                                    ],
                                    [
                                        "Умеренно",
                                        "#eab308"
                                    ],
                                    [
                                        "Вредно",
                                        "#ef4444"
                                    ]
                                ].map(([l, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2 w-2 rounded-sm",
                                                style: {
                                                    backgroundColor: c
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this),
                                            l
                                        ]
                                    }, l, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 409,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 405,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExceedanceHeatmap, {
                        data: exceedanceData,
                        year: thisYear
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            (monthlyStats.length > 0 || worstDays.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
                children: [
                    monthlyStats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 text-sm font-semibold",
                                children: [
                                    "Среднее PM2.5 по месяцам ",
                                    thisYear
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 427,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 200,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: monthlyStats,
                                    margin: {
                                        top: 5,
                                        right: 8,
                                        bottom: 0,
                                        left: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            stroke: "var(--border)",
                                            vertical: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 430,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "month",
                                            tick: {
                                                fontSize: 10
                                            },
                                            stroke: "var(--muted-foreground)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 431,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            tick: {
                                                fontSize: 10
                                            },
                                            stroke: "var(--muted-foreground)",
                                            unit: " µg"
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 432,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            formatter: (v, n)=>n === "avg" ? [
                                                    `${v} µg/m³`,
                                                    "Среднее"
                                                ] : [
                                                    v,
                                                    "Дней > нормы"
                                                ],
                                            labelFormatter: (l)=>`${l} ${thisYear}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 433,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                            y: 15,
                                            stroke: "#ef4444",
                                            strokeDasharray: "3 3",
                                            label: {
                                                value: "WHO",
                                                position: "right",
                                                fontSize: 9,
                                                fill: "#ef4444"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 437,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "avg",
                                            radius: [
                                                4,
                                                4,
                                                0,
                                                0
                                            ],
                                            children: [
                                                monthlyStats.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                        fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(e.avg)
                                                    }, i, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 49
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
                                                    dataKey: "avg",
                                                    position: "top",
                                                    style: {
                                                        fontSize: 9
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 438,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 429,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 428,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-4 gap-1.5",
                                children: monthlyStats.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-muted/30 px-2 py-1.5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-muted-foreground",
                                                children: m.month
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 447,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold",
                                                style: {
                                                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(m.avg)
                                                },
                                                children: m.avg
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 448,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] text-muted-foreground",
                                                children: [
                                                    m.exceedDays,
                                                    "/",
                                                    m.total,
                                                    "д"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 449,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, m.month, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 446,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 444,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 426,
                        columnNumber: 13
                    }, this),
                    worstDays.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 text-sm font-semibold",
                                children: [
                                    "10 худших дней ",
                                    thisYear,
                                    " по PM2.5"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: worstDays.map(({ date, pm25 }, i)=>{
                                    const pct = Math.min(100, pm25 / (worstDays[0].pm25 || 1) * 100);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 text-right text-[11px] font-semibold text-muted-foreground",
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 465,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-24 text-xs text-muted-foreground",
                                                children: new Date(date).toLocaleDateString("ru-RU", {
                                                    day: "numeric",
                                                    month: "short"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 466,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 h-5 rounded overflow-hidden bg-muted/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-y-0 left-0 rounded",
                                                        style: {
                                                            width: `${pct}%`,
                                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(pm25),
                                                            opacity: 0.7
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute inset-0 flex items-center px-2 text-[11px] font-medium",
                                                        children: [
                                                            pm25,
                                                            " µg/m³ — ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Label"])(pm25)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 469,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, date, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 464,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 458,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 422,
                columnNumber: 9
            }, this),
            (worstSensors.length > 0 || bestSensors.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 text-sm font-semibold",
                                children: "Топ-10 загрязнённых датчиков сейчас"
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: worstSensors.map((s, i)=>{
                                    const pct = Math.min(100, (s.value ?? 0) / (worstSensors[0].value ?? 1) * 100);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 text-right text-[11px] font-semibold text-muted-foreground",
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 498,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 h-5 rounded overflow-hidden bg-muted/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-y-0 left-0 rounded",
                                                        style: {
                                                            width: `${pct}%`,
                                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(s.value ?? 0),
                                                            opacity: 0.7
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute inset-0 flex items-center justify-between px-2 text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate font-medium",
                                                                children: s.sensor_name ?? `#${s.id}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/analytics-tab.tsx",
                                                                lineNumber: 502,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-1 flex-shrink-0 font-semibold",
                                                                children: [
                                                                    Math.round(s.value ?? 0),
                                                                    " µg/m³"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/analytics-tab.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 499,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 497,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 493,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 491,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-3 text-sm font-semibold",
                                children: "Топ-10 чистых датчиков сейчас"
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 513,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: bestSensors.map((s, i)=>{
                                    const pct = Math.min(100, (s.value ?? 0) / (worstSensors[0]?.value ?? 1) * 100);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-5 text-right text-[11px] font-semibold text-muted-foreground",
                                                children: i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 519,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 h-5 rounded overflow-hidden bg-muted/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-y-0 left-0 rounded",
                                                        style: {
                                                            width: `${Math.max(pct, 4)}%`,
                                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(s.value ?? 0),
                                                            opacity: 0.7
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute inset-0 flex items-center justify-between px-2 text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate font-medium",
                                                                children: s.sensor_name ?? `#${s.id}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/analytics-tab.tsx",
                                                                lineNumber: 523,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-1 flex-shrink-0 font-semibold",
                                                                children: [
                                                                    Math.round(s.value ?? 0),
                                                                    " µg/m³"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/analytics-tab.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/analytics-tab.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 520,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 518,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 514,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 512,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 489,
                columnNumber: 9
            }, this),
            hourlyData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-1 text-sm font-semibold",
                        children: "Суточный паттерн PM2.5 (последние 30 дней)"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 539,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-[11px] text-muted-foreground",
                        children: "По часу суток (Asia/Almaty). Сплошная — среднее, пунктир — P25/P75"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 200,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                            data: hourlyData,
                            margin: {
                                top: 5,
                                right: 16,
                                bottom: 0,
                                left: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "var(--border)"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "hour",
                                    tick: {
                                        fontSize: 10
                                    },
                                    tickFormatter: (h)=>`${h}:00`,
                                    stroke: "var(--muted-foreground)"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tick: {
                                        fontSize: 10
                                    },
                                    stroke: "var(--muted-foreground)",
                                    unit: " µg"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    formatter: (v, n)=>{
                                        const labels = {
                                            avg_pm25: "Среднее",
                                            p75: "P75",
                                            p25: "P25"
                                        };
                                        return [
                                            `${typeof v === "number" ? v.toFixed(1) : v} µg/m³`,
                                            labels[String(n)] ?? String(n)
                                        ];
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                    y: 15,
                                    stroke: "#ef4444",
                                    strokeDasharray: "3 3",
                                    label: {
                                        value: "WHO",
                                        position: "right",
                                        fontSize: 9,
                                        fill: "#ef4444"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 550,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: "p75",
                                    stroke: "#94a3b8",
                                    strokeWidth: 1,
                                    strokeDasharray: "4 2",
                                    dot: false,
                                    name: "P75"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 551,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: "p25",
                                    stroke: "#94a3b8",
                                    strokeWidth: 1,
                                    strokeDasharray: "4 2",
                                    dot: false,
                                    name: "P25"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                    type: "monotone",
                                    dataKey: "avg_pm25",
                                    stroke: "#3b82f6",
                                    strokeWidth: 2.5,
                                    dot: false,
                                    name: "Среднее"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 553,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/analytics-tab.tsx",
                            lineNumber: 542,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 541,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 538,
                columnNumber: 9
            }, this),
            districtDynamics.chartData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 text-sm font-semibold",
                        children: "Динамика PM2.5 по районам (90 дней)"
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 562,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                        width: "100%",
                        height: 250,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                            data: districtDynamics.chartData,
                            margin: {
                                top: 5,
                                right: 16,
                                bottom: 0,
                                left: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                    strokeDasharray: "3 3",
                                    stroke: "var(--border)"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 565,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                    dataKey: "day",
                                    tick: {
                                        fontSize: 10
                                    },
                                    tickFormatter: (d)=>d.slice(5),
                                    stroke: "var(--muted-foreground)",
                                    interval: "preserveStartEnd"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 566,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                    tick: {
                                        fontSize: 10
                                    },
                                    stroke: "var(--muted-foreground)",
                                    unit: " µg"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 567,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                    formatter: (v, n)=>[
                                            `${typeof v === "number" ? v.toFixed(1) : v} µg/m³`,
                                            String(n)
                                        ]
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                    wrapperStyle: {
                                        fontSize: 10
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 569,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                    y: 15,
                                    stroke: "#ef4444",
                                    strokeDasharray: "3 3"
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this),
                                districtDynamics.districts.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                        type: "monotone",
                                        dataKey: name,
                                        stroke: DISTRICT_COLORS[i % DISTRICT_COLORS.length],
                                        strokeWidth: 1.5,
                                        dot: false,
                                        connectNulls: true
                                    }, name, false, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 572,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/analytics-tab.tsx",
                            lineNumber: 564,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 563,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 561,
                columnNumber: 9
            }, this),
            sensorHealth.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold",
                                children: "Надёжность датчиков (30 дней)"
                            }, void 0, false, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1 text-green-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 586,
                                                columnNumber: 17
                                            }, this),
                                            healthSummary.online,
                                            " онлайн"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 585,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1 text-red-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 589,
                                                columnNumber: 17
                                            }, this),
                                            healthSummary.offline,
                                            " оффлайн"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/analytics-tab.tsx",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 582,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-80 overflow-y-auto rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "sticky top-0 border-b border-border bg-card",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 text-left font-medium",
                                                children: "Датчик"
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 597,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 text-left font-medium",
                                                children: "Район"
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 598,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 text-right font-medium",
                                                children: "Uptime"
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 599,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 text-right font-medium",
                                                children: "Последнее"
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 600,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-2 text-right font-medium",
                                                children: "PM2.5 30д"
                                            }, void 0, false, {
                                                fileName: "[project]/components/analytics-tab.tsx",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/analytics-tab.tsx",
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 595,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: sensorHealth.map((s)=>{
                                        const lh = s.last_seen_hours;
                                        const lastSeenStr = lh == null ? "—" : lh < 1 ? "< 1 ч" : lh < 24 ? `${Math.round(lh)}ч` : `${Math.round(lh / 24)}д`;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-border/40 hover:bg-muted/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "max-w-[140px] truncate py-1.5 pr-2",
                                                    children: s.sensor_name || `#${s.id}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "max-w-[100px] truncate py-1.5 pr-2 text-muted-foreground",
                                                    children: s.district_name ?? "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-1.5 pr-2 text-right font-medium tabular-nums",
                                                    style: {
                                                        color: coverageColor(s.coverage_pct)
                                                    },
                                                    children: s.coverage_pct != null ? `${s.coverage_pct}%` : "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-1.5 pr-2 text-right text-muted-foreground tabular-nums",
                                                    children: lastSeenStr
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-1.5 text-right font-medium tabular-nums",
                                                    style: {
                                                        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(s.avg_pm25_30d ?? undefined)
                                                    },
                                                    children: s.avg_pm25_30d != null ? s.avg_pm25_30d : "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/analytics-tab.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, s.id, true, {
                                            fileName: "[project]/components/analytics-tab.tsx",
                                            lineNumber: 609,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/analytics-tab.tsx",
                                    lineNumber: 604,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/analytics-tab.tsx",
                            lineNumber: 594,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/analytics-tab.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/analytics-tab.tsx",
                lineNumber: 581,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/analytics-tab.tsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_s(AnalyticsTab, "4t2FAiwzLtxQzDzwh2G2FXnUCeQ=");
_c2 = AnalyticsTab;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "KpiCard");
__turbopack_context__.k.register(_c1, "ExceedanceHeatmap");
__turbopack_context__.k.register(_c2, "AnalyticsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ai-tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiTab",
    ()=>AiTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm25.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BASE = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1";
const MONTH_LABELS = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
];
function medianOf(nums) {
    if (!nums.length) return null;
    const sorted = [
        ...nums
    ].sort((a, b)=>a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
function aggregateMonthly(data) {
    const byMonth = {};
    for (const [date, val] of Object.entries(data)){
        const m = parseInt(date.slice(5, 7), 10) - 1;
        if (!byMonth[m]) byMonth[m] = [];
        byMonth[m].push(val);
    }
    return MONTH_LABELS.map((month, m)=>{
        const vals = byMonth[m] ?? [];
        if (!vals.length) return null;
        const avg = Math.round(vals.reduce((s, v)=>s + v, 0) / vals.length * 10) / 10;
        return {
            month,
            avg,
            exceedDays: vals.filter((v)=>v > 15).length,
            total: vals.length
        };
    }).filter(Boolean);
}
function extractYears(text) {
    const now = new Date().getFullYear();
    const found = text.match(/\b(20\d{2})\b/g) ?? [];
    return [
        ...new Set(found.map(Number).filter((y)=>y >= 2020 && y <= now))
    ];
}
const SUGGESTIONS = [
    "Какой район Алматы самый загрязнённый сейчас?",
    "Насколько опасен текущий PM2.5 для детей?",
    "за 2025 год какие показатели были?",
    "Когда воздух в Алматы чище всего?",
    "Что вызывает загрязнение воздуха в Алматы?"
];
function AiTab({ sensors, sensorsLoading }) {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [calendarCache, setCalendarCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiTab.useMemo[activeSensors]": ()=>sensors.filter({
                "AiTab.useMemo[activeSensors]": (s)=>s.value != null && s.parameter === "pm25"
            }["AiTab.useMemo[activeSensors]"])
    }["AiTab.useMemo[activeSensors]"], [
        sensors
    ]);
    const cityMedian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiTab.useMemo[cityMedian]": ()=>medianOf(activeSensors.map({
                "AiTab.useMemo[cityMedian]": (s)=>s.value
            }["AiTab.useMemo[cityMedian]"]))
    }["AiTab.useMemo[cityMedian]"], [
        activeSensors
    ]);
    const epaAqi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiTab.useMemo[epaAqi]": ()=>cityMedian != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(cityMedian) : null
    }["AiTab.useMemo[epaAqi]"], [
        cityMedian
    ]);
    const whoExceedPct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiTab.useMemo[whoExceedPct]": ()=>{
            if (!activeSensors.length) return null;
            return Math.round(activeSensors.filter({
                "AiTab.useMemo[whoExceedPct]": (s)=>(s.value ?? 0) > 15
            }["AiTab.useMemo[whoExceedPct]"]).length / activeSensors.length * 100);
        }
    }["AiTab.useMemo[whoExceedPct]"], [
        activeSensors
    ]);
    const districtRanking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AiTab.useMemo[districtRanking]": ()=>{
            const by = {};
            for (const s of activeSensors){
                const n = s.district_name ?? "Неизвестный район";
                (by[n] ??= []).push(s.value);
            }
            return Object.entries(by).map({
                "AiTab.useMemo[districtRanking]": ([name, vals])=>({
                        name,
                        median: Math.round((medianOf(vals) ?? 0) * 10) / 10
                    })
            }["AiTab.useMemo[districtRanking]"]).sort({
                "AiTab.useMemo[districtRanking]": (a, b)=>b.median - a.median
            }["AiTab.useMemo[districtRanking]"]);
        }
    }["AiTab.useMemo[districtRanking]"], [
        activeSensors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiTab.useEffect": ()=>{
            bottomRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["AiTab.useEffect"], [
        messages,
        loading
    ]);
    async function fetchCalendarYear(year) {
        if (calendarCache[year]) return calendarCache[year];
        try {
            const res = await fetch(`${BASE}/ecology/api/air-quality-calendar/?year=${year}`, {
                headers: {
                    Accept: "application/json"
                }
            });
            const json = await res.json();
            // API returns {year, data: [{date, avg_pm25, ...}], stats}
            let data = {};
            if (Array.isArray(json.data)) {
                for (const row of json.data){
                    if (row.date && row.avg_pm25 != null) data[row.date] = row.avg_pm25;
                }
            } else if (typeof json === "object" && !Array.isArray(json)) {
                // Fallback: flat {date: value} dict
                data = json;
            }
            setCalendarCache((prev)=>({
                    ...prev,
                    [year]: data
                }));
            return data;
        } catch  {
            return {};
        }
    }
    async function send(text) {
        const trimmed = text.trim();
        if (!trimmed || loading) return;
        const userMsg = {
            role: "user",
            content: trimmed
        };
        const next = [
            ...messages,
            userMsg
        ];
        setMessages(next);
        setInput("");
        setLoading(true);
        setError(null);
        // Detect year mentions and fetch calendar data
        const years = extractYears(trimmed);
        const historicalYears = [];
        const charts = [];
        if (years.length) {
            await Promise.all(years.map(async (year)=>{
                const raw = await fetchCalendarYear(year);
                const monthly = aggregateMonthly(raw);
                if (monthly.length) {
                    historicalYears.push({
                        year,
                        monthly
                    });
                    charts.push({
                        year,
                        monthly
                    });
                }
            }));
        }
        const context = {
            city_median: cityMedian != null ? Math.round(cityMedian * 10) / 10 : null,
            epa_aqi: epaAqi?.aqi ?? null,
            who_exceed_pct: whoExceedPct,
            active_sensors: activeSensors.length,
            today: new Date().toLocaleDateString("sv-SE"),
            districts: districtRanking,
            monthly: [],
            historical_years: historicalYears
        };
        try {
            const res = await fetch(`${BASE}/air/analytics/ai-chat/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    messages: next.map(({ role, content })=>({
                            role,
                            content
                        })),
                    context
                })
            });
            const raw = await res.text();
            let json;
            try {
                json = JSON.parse(raw);
            } catch  {
                throw new Error(raw.slice(0, 200));
            }
            if (json.error) throw new Error(json.error);
            const assistantMsg = {
                role: "assistant",
                content: json.reply ?? "",
                charts: charts.length ? charts : undefined
            };
            setMessages([
                ...next,
                assistantMsg
            ]);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Ошибка запроса");
        } finally{
            setLoading(false);
            setTimeout(()=>inputRef.current?.focus(), 50);
        }
    }
    function handleKey(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send(input);
        }
    }
    const medColor = cityMedian != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(cityMedian) : "#6b7280";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-center gap-4 border-b border-border bg-card/50 px-4 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-3.5 w-3.5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium",
                                children: "Mistral Large"
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: "• ИИ-ассистент по качеству воздуха"
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-3 text-xs text-muted-foreground",
                        children: [
                            cityMedian != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "PM2.5 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        style: {
                                            color: medColor
                                        },
                                        children: [
                                            (Math.round(cityMedian * 10) / 10).toFixed(1),
                                            " µg/m³"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ai-tab.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            epaAqi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "AQI ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        style: {
                                            color: medColor
                                        },
                                        children: epaAqi.aqi
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-tab.tsx",
                                        lineNumber: 221,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    activeSensors.length,
                                    " датчиков онлайн"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMessages([]);
                                    setError(null);
                                },
                                className: "flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-muted transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-tab.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    "Сбросить"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ai-tab.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-4 py-4 space-y-4",
                children: [
                    messages.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full gap-6 text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-7 w-7 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-tab.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-semibold",
                                        children: "Спросите про воздух в Алматы"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-tab.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-muted-foreground max-w-sm",
                                        children: [
                                            "ИИ знает текущие данные ",
                                            activeSensors.length,
                                            " датчиков и архив по годам — спросите про любой период"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ai-tab.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-2 max-w-lg",
                                children: SUGGESTIONS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>send(s),
                                        className: "rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/ai-tab.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`,
                            children: [
                                m.role === "assistant" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3.5 w-3.5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai-tab.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-tab.tsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex flex-col gap-3 ${m.role === "user" ? "items-end max-w-[75%]" : "items-start w-full max-w-[85%]"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border text-foreground rounded-bl-sm w-full"}`,
                                            children: m.content.split(/\n+/).filter(Boolean).map((para, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: j > 0 ? "mt-2" : "",
                                                    children: para
                                                }, j, false, {
                                                    fileName: "[project]/components/ai-tab.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-tab.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        m.charts?.map(({ year, monthly })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full rounded-xl border border-border bg-card p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-3 text-xs font-semibold text-muted-foreground",
                                                        children: [
                                                            "PM2.5 по месяцам — ",
                                                            year,
                                                            " год (данные с датчиков)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ai-tab.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: 180,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                            data: monthly,
                                                            margin: {
                                                                top: 4,
                                                                right: 8,
                                                                bottom: 0,
                                                                left: -8
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                    strokeDasharray: "3 3",
                                                                    stroke: "var(--border)",
                                                                    vertical: false
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ai-tab.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    dataKey: "month",
                                                                    tick: {
                                                                        fontSize: 10
                                                                    },
                                                                    stroke: "var(--muted-foreground)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ai-tab.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    tick: {
                                                                        fontSize: 10
                                                                    },
                                                                    stroke: "var(--muted-foreground)",
                                                                    unit: "µg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ai-tab.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    formatter: (v)=>[
                                                                            `${v} µg/m³ — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Label"])(v)}`,
                                                                            "Среднее"
                                                                        ],
                                                                    labelFormatter: (l)=>`${l} ${year}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ai-tab.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                                                    y: 15,
                                                                    stroke: "#ef4444",
                                                                    strokeDasharray: "3 3",
                                                                    label: {
                                                                        value: "ВОЗ 15",
                                                                        position: "right",
                                                                        fontSize: 9,
                                                                        fill: "#ef4444"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ai-tab.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                    dataKey: "avg",
                                                                    radius: [
                                                                        4,
                                                                        4,
                                                                        0,
                                                                        0
                                                                    ],
                                                                    children: monthly.map((e, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                            fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(e.avg),
                                                                            fillOpacity: 0.85
                                                                        }, idx, false, {
                                                                            fileName: "[project]/components/ai-tab.tsx",
                                                                            lineNumber: 303,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ai-tab.tsx",
                                                                    lineNumber: 301,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ai-tab.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai-tab.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 grid grid-cols-4 gap-1 sm:grid-cols-6 lg:grid-cols-12",
                                                        children: monthly.map((m2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded bg-muted/30 p-1 text-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[9px] text-muted-foreground",
                                                                        children: m2.month
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ai-tab.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] font-semibold",
                                                                        style: {
                                                                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25Color"])(m2.avg)
                                                                        },
                                                                        children: m2.avg
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/ai-tab.tsx",
                                                                        lineNumber: 312,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[9px] text-muted-foreground",
                                                                        children: [
                                                                            m2.exceedDays,
                                                                            "д↑"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/ai-tab.tsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, m2.month, true, {
                                                                fileName: "[project]/components/ai-tab.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai-tab.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, year, true, {
                                                fileName: "[project]/components/ai-tab.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ai-tab.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this),
                                m.role === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold",
                                    children: "Вы"
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-tab.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/ai-tab.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this)),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 justify-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-3.5 w-3.5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-tab.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 items-center h-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce",
                                            style: {
                                                animationDelay: "0ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-tab.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce",
                                            style: {
                                                animationDelay: "150ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-tab.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce",
                                            style: {
                                                animationDelay: "300ms"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai-tab.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ai-tab.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/ai-tab.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: bottomRef
                    }, void 0, false, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ai-tab.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-t border-border bg-card/50 px-4 py-3",
                children: [
                    messages.length > 0 && messages.length < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex gap-2 overflow-x-auto pb-1",
                        children: SUGGESTIONS.slice(0, 3).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>send(s),
                                disabled: loading,
                                className: "shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground disabled:opacity-40",
                                children: s
                            }, s, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ref: inputRef,
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                onKeyDown: handleKey,
                                disabled: loading || sensorsLoading,
                                placeholder: "Спросите про качество воздуха… Например: «за 2024 год какие показатели были?»",
                                rows: 1,
                                className: "flex-1 resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50",
                                style: {
                                    maxHeight: "120px",
                                    overflowY: "auto"
                                },
                                onInput: (e)=>{
                                    const t = e.currentTarget;
                                    t.style.height = "auto";
                                    t.style.height = `${Math.min(t.scrollHeight, 120)}px`;
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>send(input),
                                disabled: !input.trim() || loading || sensorsLoading,
                                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ai-tab.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ai-tab.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-center text-[10px] text-muted-foreground/50",
                        children: [
                            "Данные с ",
                            sensors.length,
                            " датчиков Smart Almaty • Упомяните год для просмотра архива"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai-tab.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ai-tab.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ai-tab.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_s(AiTab, "OJlRNS4bQ6XUwgEe8B2kg+lMcGA=");
_c = AiTab;
var _c;
__turbopack_context__.k.register(_c, "AiTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/time-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeSlider",
    ()=>TimeSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function formatSlot(iso) {
    // Datetime slot (contains "T") → "17 июн 14:00"
    if (iso.includes("T")) {
        const d = new Date(iso);
        return d.toLocaleString("ru-RU", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        });
    }
    // Date slot → "17 июн"
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short"
    });
}
function TimeSlider({ slots, selectedIdx, onSelect, loading = false }) {
    _s();
    const isLive = selectedIdx === null;
    const sliderMax = slots.length;
    const sliderVal = isLive ? sliderMax : selectedIdx;
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const playRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopPlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimeSlider.useCallback[stopPlay]": ()=>{
            setPlaying(false);
            if (playRef.current) {
                clearInterval(playRef.current);
                playRef.current = null;
            }
        }
    }["TimeSlider.useCallback[stopPlay]"], []);
    const startPlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TimeSlider.useCallback[startPlay]": ()=>{
            const startIdx = selectedIdx === null ? 0 : selectedIdx + 1 >= slots.length ? 0 : selectedIdx + 1;
            let idx = startIdx;
            onSelect(idx);
            setPlaying(true);
            playRef.current = setInterval({
                "TimeSlider.useCallback[startPlay]": ()=>{
                    idx++;
                    if (idx >= slots.length) {
                        onSelect(null);
                        stopPlay();
                    } else {
                        onSelect(idx);
                    }
                }
            }["TimeSlider.useCallback[startPlay]"], 400);
        }
    }["TimeSlider.useCallback[startPlay]"], [
        slots.length,
        selectedIdx,
        onSelect,
        stopPlay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimeSlider.useEffect": ()=>({
                "TimeSlider.useEffect": ()=>{
                    if (playRef.current) clearInterval(playRef.current);
                }
            })["TimeSlider.useEffect"]
    }["TimeSlider.useEffect"], []);
    if (slots.length === 0) return null;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-3 left-1/2 z-[1000] -translate-x-1/2 w-[min(260px,75vw)] rounded-lg border border-border bg-background/95 px-2.5 py-1.5 shadow-md backdrop-blur",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-1 flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-4 shrink-0 rounded-full bg-muted animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/components/time-slider.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-muted-foreground",
                            children: "Загрузка…"
                        }, void 0, false, {
                            fileName: "[project]/components/time-slider.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/time-slider.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-0.5 w-full rounded-full bg-muted animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/components/time-slider.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/time-slider.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-3 left-1/2 z-[1000] -translate-x-1/2 w-[min(260px,75vw)] rounded-lg border border-border bg-background/95 px-2.5 py-1.5 shadow-md backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex items-center gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: playing ? stopPlay : startPlay,
                        className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-80",
                        title: playing ? "Пауза" : "Воспроизвести",
                        children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "6",
                            height: "6",
                            viewBox: "0 0 10 10",
                            fill: "currentColor",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "1",
                                    y: "0",
                                    width: "3",
                                    height: "10",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/time-slider.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "6",
                                    y: "0",
                                    width: "3",
                                    height: "10",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/time-slider.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/time-slider.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "6",
                            height: "6",
                            viewBox: "0 0 10 10",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "1,0 10,5 1,10"
                            }, void 0, false, {
                                fileName: "[project]/components/time-slider.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/time-slider.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/time-slider.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-semibold text-foreground",
                        children: isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block h-1.5 w-1.5 rounded-full bg-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/time-slider.tsx",
                                    lineNumber: 95,
                                    columnNumber: 57
                                }, this),
                                "Сейчас"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/time-slider.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this) : formatSlot(slots[sliderVal])
                    }, void 0, false, {
                        fileName: "[project]/components/time-slider.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    !isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            stopPlay();
                            onSelect(null);
                        },
                        className: "ml-auto text-[9px] text-primary hover:underline",
                        children: "Сейчас →"
                    }, void 0, false, {
                        fileName: "[project]/components/time-slider.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/time-slider.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: 0,
                max: sliderMax,
                value: sliderVal,
                onChange: (e)=>{
                    stopPlay();
                    const v = Number(e.target.value);
                    onSelect(v >= sliderMax ? null : v);
                },
                className: "w-full cursor-pointer accent-primary",
                style: {
                    height: "2px"
                }
            }, void 0, false, {
                fileName: "[project]/components/time-slider.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-0.5 flex justify-between text-[8px] text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: formatSlot(slots[0])
                    }, void 0, false, {
                        fileName: "[project]/components/time-slider.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-green-600 font-medium",
                        children: "Сейчас"
                    }, void 0, false, {
                        fileName: "[project]/components/time-slider.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/time-slider.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/time-slider.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(TimeSlider, "q4w+KyxPqHFq1s+mm570VJBZGzU=");
_c = TimeSlider;
var _c;
__turbopack_context__.k.register(_c, "TimeSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AirQualityDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column.js [app-client] (ecmascript) <export default as BarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$filter$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/filter-dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$aqi$2d$side$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/aqi-side-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$analytics$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/analytics-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ai$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ai-tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm25.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$time$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/time-slider.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// ── Calendar day hover helpers ────────────────────────────────────────────────
function pm25ToHex(pm25) {
    if (pm25 <= 5) return "#3b82f6";
    if (pm25 <= 15) return "#22c55e";
    if (pm25 <= 35) return "#eab308";
    if (pm25 <= 55) return "#ef4444";
    if (pm25 <= 150) return "#a855f7";
    return "#7f1d1d";
}
function pm25ToLabel(pm25) {
    if (pm25 <= 5) return "Отлично";
    if (pm25 <= 15) return "Хорошо";
    if (pm25 <= 35) return "Умеренно";
    if (pm25 <= 55) return "Чувствительным группам";
    if (pm25 <= 150) return "Вредно";
    return "Очень вредно";
}
;
;
;
;
;
;
;
// Inverse US EPA 2024 PM2.5 AQI → concentration (µg/m³).
// Breakpoints mirror EPA_2024_BREAKPOINTS in lib/pm25.ts exactly so that
// pm25ToEpaAqi(aqiToPm25Approx(x)) ≈ x for any integer AQI x.
function aqiToPm25Approx(aqi) {
    if (aqi <= 50) return aqi * 9.0 / 50;
    if (aqi <= 100) return 9.1 + (aqi - 51) * (35.4 - 9.1) / 49;
    if (aqi <= 150) return 35.5 + (aqi - 101) * (55.4 - 35.5) / 49;
    if (aqi <= 200) return 55.5 + (aqi - 151) * (125.4 - 55.5) / 49;
    if (aqi <= 300) return 125.5 + (aqi - 201) * (225.4 - 125.5) / 99;
    return 225.5;
}
function ecoIqToAirSensor(s) {
    const pm25 = s.pm25_concentration ?? (s.aqi != null ? aqiToPm25Approx(s.aqi) : null);
    return {
        id: 0,
        sensor_id: -1,
        sensor_name: `${s.name ?? "EcoIQ"} ▲`,
        source: "EcoIQ",
        parameter: "pm25",
        value: pm25,
        unit: "µg/m³",
        measured_at: s.measured_at,
        latitude: s.latitude,
        longitude: s.longitude,
        district_id: null,
        district_name: null,
        rawAqi: s.aqi,
        ecoIqStationId: s.id
    };
}
const SensorMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/sensor-map-yandex.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = SensorMap;
const normalizeApiStats = (apiStats)=>{
    if (!apiStats) return null;
    const pm25 = apiStats.pm25 || {};
    return {
        total_days: apiStats.total_days ?? 0,
        good_days: pm25.good_days ?? 0,
        moderate_days: pm25.moderate_days ?? 0,
        sensitive_days: pm25.sensitive_days ?? 0,
        unhealthy_days: pm25.unhealthy_days ?? 0,
        very_unhealthy_days: pm25.very_unhealthy_days ?? 0,
        hazardous_days: pm25.hazardous_days ?? 0,
        avg_pm25: pm25.avg ?? undefined,
        max_pm25: pm25.max ?? undefined,
        min_pm25: pm25.min ?? undefined
    };
};
const computeStatisticsFromData = (data)=>{
    const values = Object.values(data || {});
    if (!values.length) return null;
    return {
        total_days: values.length,
        good_days: values.filter((v)=>v <= 15).length,
        moderate_days: values.filter((v)=>v > 15 && v <= 35).length,
        sensitive_days: values.filter((v)=>v > 35 && v <= 55).length,
        unhealthy_days: values.filter((v)=>v > 55 && v <= 150).length,
        very_unhealthy_days: values.filter((v)=>v > 150 && v <= 250).length,
        hazardous_days: values.filter((v)=>v > 250).length,
        avg_pm25: values.reduce((a, b)=>a + b, 0) / values.length,
        max_pm25: Math.max(...values),
        min_pm25: Math.min(...values)
    };
};
const AQI_LEGEND = [
    {
        label: "Отлично",
        range: "0–5",
        className: "bg-aqi-good"
    },
    {
        label: "Хорошо",
        range: "6–15",
        className: "bg-aqi-moderate"
    },
    {
        label: "Умеренно",
        range: "16–35",
        className: "bg-aqi-sensitive"
    },
    {
        label: "Чувствительные",
        range: "36–55",
        className: "bg-aqi-unhealthy"
    },
    {
        label: "Вредно",
        range: "56–150",
        className: "bg-aqi-very-unhealthy"
    },
    {
        label: "Очень вредно",
        range: "150+",
        className: "bg-aqi-hazardous"
    }
];
function getAQICategory(aqi) {
    if (aqi <= 5) return {
        label: "Отлично",
        color: "bg-aqi-good"
    };
    if (aqi <= 15) return {
        label: "Хорошо",
        color: "bg-aqi-moderate"
    };
    if (aqi <= 35) return {
        label: "Умеренно",
        color: "bg-aqi-sensitive"
    };
    if (aqi <= 55) return {
        label: "Чувствительные группы",
        color: "bg-aqi-unhealthy"
    };
    if (aqi <= 150) return {
        label: "Вредно",
        color: "bg-aqi-very-unhealthy"
    };
    return {
        label: "Очень вредно",
        color: "bg-aqi-hazardous"
    };
}
function AirQualityDashboard() {
    _s();
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("map");
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const [sidebarAqiData, setSidebarAqiData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [aqiData, setAqiData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [statistics, setStatistics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sensors, setSensors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sensorsLoading, setSensorsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [sensorsError, setSensorsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ecoIqSensors, setEcoIqSensors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sensorSearch, setSensorSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sourceFilter, setSourceFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [districtFilter, setDistrictFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredDay, setHoveredDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSensor, setSelectedSensor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metricMode, setMetricMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("epa-aqi");
    const [timeseries, setTimeseries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timeseriesLoading, setTimeseriesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedDayIdx, setSelectedDayIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Build last-48-hours client-side so slider shows immediately before data loads.
    const timeseriesDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[timeseriesDays]": ()=>{
            if (timeseries) return timeseries.hours;
            const now = new Date();
            now.setMinutes(0, 0, 0);
            return Array.from({
                length: 48
            }, {
                "AirQualityDashboard.useMemo[timeseriesDays]": (_, i)=>{
                    const d = new Date(now.getTime() - (47 - i) * 3600_000);
                    return d.toISOString().replace(/\.\d{3}Z$/, "+00:00");
                }
            }["AirQualityDashboard.useMemo[timeseriesDays]"]);
        }
    }["AirQualityDashboard.useMemo[timeseriesDays]"], [
        timeseries
    ]);
    const MIN_YEAR = 2019;
    const MAX_YEAR = new Date().getFullYear();
    const themeIsDark = resolvedTheme === "dark";
    const fetchSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AirQualityDashboard.useCallback[fetchSensors]": async ()=>{
            try {
                setSensorsLoading(true);
                setSensorsError(null);
                const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1"}/air/current/?parameter=pm25&limit=500`, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (!response.ok) throw new Error(`Sensors API returned ${response.status}`);
                const payload = await response.json();
                const rawSensors = Array.isArray(payload) ? payload : payload?.results || [];
                setSensors(rawSensors.filter({
                    "AirQualityDashboard.useCallback[fetchSensors]": (s)=>s.latitude != null && s.longitude != null
                }["AirQualityDashboard.useCallback[fetchSensors]"]));
            } catch  {
                setSensors([]);
                setSensorsError("Не удалось загрузить список сенсоров");
            } finally{
                setSensorsLoading(false);
            }
        }
    }["AirQualityDashboard.useCallback[fetchSensors]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AirQualityDashboard.useEffect": ()=>{
            const fetchAirQuality = {
                "AirQualityDashboard.useEffect.fetchAirQuality": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1"}/ecology/api/air-quality-calendar/?year=${currentYear}`, {
                            headers: {
                                Accept: "application/json"
                            }
                        });
                        if (!response.ok) throw new Error(`API returned ${response.status}`);
                        if (!response.headers.get("content-type")?.includes("application/json")) throw new Error("Response is not JSON");
                        const result = await response.json();
                        const processedData = {};
                        result.data?.forEach({
                            "AirQualityDashboard.useEffect.fetchAirQuality": (item)=>{
                                if (item.avg_pm25 != null) processedData[item.date] = item.avg_pm25;
                            }
                        }["AirQualityDashboard.useEffect.fetchAirQuality"]);
                        setAqiData(processedData);
                        setStatistics(computeStatisticsFromData(processedData) || normalizeApiStats(result.stats));
                    } catch  {
                        setAqiData({});
                        setStatistics(null);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AirQualityDashboard.useEffect.fetchAirQuality"];
            fetchAirQuality();
        }
    }["AirQualityDashboard.useEffect"], [
        currentYear
    ]);
    // Sidebar always shows rolling data across current + previous year (independent of calendar tab)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AirQualityDashboard.useEffect": ()=>{
            const thisYear = new Date().getFullYear();
            const prevYear = thisYear - 1;
            Promise.all([
                fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1"}/ecology/api/air-quality-calendar/?year=${prevYear}`, {
                    headers: {
                        Accept: "application/json"
                    }
                }).then({
                    "AirQualityDashboard.useEffect": (r)=>r.json()
                }["AirQualityDashboard.useEffect"]),
                fetch(`${("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1"}/ecology/api/air-quality-calendar/?year=${thisYear}`, {
                    headers: {
                        Accept: "application/json"
                    }
                }).then({
                    "AirQualityDashboard.useEffect": (r)=>r.json()
                }["AirQualityDashboard.useEffect"])
            ]).then({
                "AirQualityDashboard.useEffect": ([prev, curr])=>{
                    const merged = {};
                    for (const result of [
                        prev,
                        curr
                    ]){
                        result.data?.forEach({
                            "AirQualityDashboard.useEffect": (item)=>{
                                if (item.avg_pm25 != null) merged[item.date] = item.avg_pm25;
                            }
                        }["AirQualityDashboard.useEffect"]);
                    }
                    setSidebarAqiData(merged);
                }
            }["AirQualityDashboard.useEffect"]).catch({
                "AirQualityDashboard.useEffect": ()=>{}
            }["AirQualityDashboard.useEffect"]);
        }
    }["AirQualityDashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AirQualityDashboard.useEffect": ()=>{
            fetchSensors();
            const id = setInterval(fetchSensors, 10 * 60 * 1000);
            return ({
                "AirQualityDashboard.useEffect": ()=>clearInterval(id)
            })["AirQualityDashboard.useEffect"];
        }
    }["AirQualityDashboard.useEffect"], [
        fetchSensors
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AirQualityDashboard.useEffect": ()=>{
            const BASE = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1";
            const fetchEcoIq = {
                "AirQualityDashboard.useEffect.fetchEcoIq": ()=>fetch(`${BASE}/air/eco-iq/current/`, {
                        headers: {
                            Accept: "application/json"
                        }
                    }).then({
                        "AirQualityDashboard.useEffect.fetchEcoIq": (r)=>r.json()
                    }["AirQualityDashboard.useEffect.fetchEcoIq"]).then({
                        "AirQualityDashboard.useEffect.fetchEcoIq": (data)=>setEcoIqSensors(Array.isArray(data) ? data : [])
                    }["AirQualityDashboard.useEffect.fetchEcoIq"]).catch({
                        "AirQualityDashboard.useEffect.fetchEcoIq": ()=>{}
                    }["AirQualityDashboard.useEffect.fetchEcoIq"])
            }["AirQualityDashboard.useEffect.fetchEcoIq"];
            fetchEcoIq();
            const id = setInterval(fetchEcoIq, 10 * 60 * 1000);
            return ({
                "AirQualityDashboard.useEffect": ()=>clearInterval(id)
            })["AirQualityDashboard.useEffect"];
        }
    }["AirQualityDashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AirQualityDashboard.useEffect": ()=>{
            setTimeseriesLoading(true);
            const BASE = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1";
            fetch(`${BASE}/air/analytics/map-timeseries-hourly/?hours=48`, {
                headers: {
                    Accept: "application/json"
                }
            }).then({
                "AirQualityDashboard.useEffect": (r)=>r.json()
            }["AirQualityDashboard.useEffect"]).then({
                "AirQualityDashboard.useEffect": (data)=>setTimeseries(data)
            }["AirQualityDashboard.useEffect"]).catch({
                "AirQualityDashboard.useEffect": ()=>{}
            }["AirQualityDashboard.useEffect"]).finally({
                "AirQualityDashboard.useEffect": ()=>setTimeseriesLoading(false)
            }["AirQualityDashboard.useEffect"]);
        }
    }["AirQualityDashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AirQualityDashboard.useEffect": ()=>{
            setMounted(true);
        }
    }["AirQualityDashboard.useEffect"], []);
    const sources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[sources]": ()=>{
            const set = new Set();
            sensors.forEach({
                "AirQualityDashboard.useMemo[sources]": (s)=>{
                    if (s.source) set.add(s.source);
                }
            }["AirQualityDashboard.useMemo[sources]"]);
            return Array.from(set).sort();
        }
    }["AirQualityDashboard.useMemo[sources]"], [
        sensors
    ]);
    const districtNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[districtNames]": ()=>{
            const set = new Set();
            sensors.forEach({
                "AirQualityDashboard.useMemo[districtNames]": (s)=>{
                    if (s.district_name) set.add(s.district_name);
                }
            }["AirQualityDashboard.useMemo[districtNames]"]);
            return Array.from(set).sort();
        }
    }["AirQualityDashboard.useMemo[districtNames]"], [
        sensors
    ]);
    const filteredSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[filteredSensors]": ()=>sensors.filter({
                "AirQualityDashboard.useMemo[filteredSensors]": (sensor)=>{
                    if (sourceFilter !== "all" && sensor.source !== sourceFilter) return false;
                    if (districtFilter !== "all" && sensor.district_name !== districtFilter) return false;
                    if (sensorSearch.trim()) {
                        const term = sensorSearch.toLowerCase();
                        if (!sensor.sensor_name?.toLowerCase().includes(term) && !sensor.source?.toLowerCase().includes(term)) return false;
                    }
                    return true;
                }
            }["AirQualityDashboard.useMemo[filteredSensors]"])
    }["AirQualityDashboard.useMemo[filteredSensors]"], [
        sensors,
        sourceFilter,
        districtFilter,
        sensorSearch
    ]);
    // When a historical day is selected, override each sensor's value from the timeseries snapshot.
    // valueMap is keyed by air_initiative_sensors.id which equals AirSensor.sensor_id (the FK).
    const displaySensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[displaySensors]": ()=>{
            if (selectedDayIdx === null || !timeseries) return filteredSensors;
            const valueMap = {};
            for (const tsSensor of timeseries.sensors.filter({
                "AirQualityDashboard.useMemo[displaySensors]": (s)=>s.source === "aai"
            }["AirQualityDashboard.useMemo[displaySensors]"])){
                if (tsSensor.sensor_id != null) valueMap[tsSensor.sensor_id] = tsSensor.values[selectedDayIdx] ?? null;
            }
            return filteredSensors.map({
                "AirQualityDashboard.useMemo[displaySensors]": (s)=>{
                    const historical = valueMap[s.sensor_id];
                    return historical !== undefined ? {
                        ...s,
                        value: historical
                    } : s;
                }
            }["AirQualityDashboard.useMemo[displaySensors]"]);
        }
    }["AirQualityDashboard.useMemo[displaySensors]"], [
        filteredSensors,
        selectedDayIdx,
        timeseries
    ]);
    const displayEcoIqSensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[displayEcoIqSensors]": ()=>{
            if (selectedDayIdx === null || !timeseries) return ecoIqSensors;
            const valueMap = {};
            for (const tsSensor of timeseries.sensors.filter({
                "AirQualityDashboard.useMemo[displayEcoIqSensors]": (s)=>s.source === "iqair"
            }["AirQualityDashboard.useMemo[displayEcoIqSensors]"])){
                valueMap[String(tsSensor.id)] = tsSensor.values[selectedDayIdx] ?? null;
            }
            return ecoIqSensors.map({
                "AirQualityDashboard.useMemo[displayEcoIqSensors]": (s)=>{
                    if (!(String(s.id) in valueMap)) return s;
                    const pm25 = valueMap[String(s.id)];
                    const aqi = pm25 != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm25$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pm25ToEpaAqi"])(pm25)?.aqi ?? null : null;
                    return {
                        ...s,
                        pm25_concentration: pm25,
                        pm25_aqi: aqi,
                        aqi
                    };
                }
            }["AirQualityDashboard.useMemo[displayEcoIqSensors]"]);
        }
    }["AirQualityDashboard.useMemo[displayEcoIqSensors]"], [
        ecoIqSensors,
        selectedDayIdx,
        timeseries
    ]);
    const sensorsWithData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[sensorsWithData]": ()=>sensors.filter({
                "AirQualityDashboard.useMemo[sensorsWithData]": (s)=>s.value != null
            }["AirQualityDashboard.useMemo[sensorsWithData]"])
    }["AirQualityDashboard.useMemo[sensorsWithData]"], [
        sensors
    ]);
    const activeSensors = sensors;
    const currentPm25 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[currentPm25]": ()=>{
            const values = sensorsWithData.map({
                "AirQualityDashboard.useMemo[currentPm25].values": (s)=>s.value
            }["AirQualityDashboard.useMemo[currentPm25].values"]).filter({
                "AirQualityDashboard.useMemo[currentPm25].values": (v)=>v != null
            }["AirQualityDashboard.useMemo[currentPm25].values"]).sort({
                "AirQualityDashboard.useMemo[currentPm25].values": (a, b)=>a - b
            }["AirQualityDashboard.useMemo[currentPm25].values"]);
            if (!values.length) return statistics?.avg_pm25 ?? 0;
            const mid = Math.floor(values.length / 2);
            return values.length % 2 === 0 ? (values[mid - 1] + values[mid]) / 2 : values[mid];
        }
    }["AirQualityDashboard.useMemo[currentPm25]"], [
        sensorsWithData,
        statistics
    ]);
    const lastCalendarDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AirQualityDashboard.useMemo[lastCalendarDate]": ()=>{
            const dates = Object.keys(aqiData || {});
            if (!dates.length) return null;
            return new Date(Math.max(...dates.map({
                "AirQualityDashboard.useMemo[lastCalendarDate]": (d)=>new Date(d).getTime()
            }["AirQualityDashboard.useMemo[lastCalendarDate]"]))).toISOString();
        }
    }["AirQualityDashboard.useMemo[lastCalendarDate]"], [
        aqiData
    ]);
    const canGoPreviousYear = currentYear > MIN_YEAR;
    const canGoNextYear = currentYear < MAX_YEAR;
    const renderMonthCalendar = (month)=>{
        const monthName = new Date(currentYear, month).toLocaleDateString("ru-RU", {
            month: "long"
        });
        const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
        const firstDay = new Date(currentYear, month, 1).getDay();
        const numRows = Math.ceil((firstDay + daysInMonth) / 7);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-0 flex-col rounded-lg border border-border bg-muted/50 p-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-0.5 shrink-0 text-center text-[10px] font-semibold capitalize text-foreground",
                    children: monthName
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-0.5 grid shrink-0 grid-cols-7",
                    children: [
                        "Вс",
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб"
                    ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-0.5 text-[8px] font-semibold text-muted-foreground",
                            children: d
                        }, d, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-0 flex-1 grid grid-cols-7 gap-[2px]",
                    style: {
                        gridTemplateRows: `repeat(${numRows}, minmax(0, 1fr))`
                    },
                    children: [
                        Array.from({
                            length: firstDay
                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, `e-${i}`, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)),
                        Array.from({
                            length: daysInMonth
                        }, (_, i)=>{
                            const day = i + 1;
                            const dateStr = `${currentYear}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                            const aqi = aqiData[dateStr];
                            const category = aqi != null ? getAQICategory(aqi) : null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative flex flex-col items-center justify-center rounded-[3px] text-white transition-transform duration-100 ${category ? `${category.color} cursor-pointer hover:z-10 hover:scale-[1.18] hover:shadow-lg` : "bg-muted/30"}`,
                                onMouseEnter: aqi != null ? (e)=>{
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const tw = 228;
                                    const th = 195;
                                    const gap = 10;
                                    let x = rect.left + rect.width / 2 - tw / 2;
                                    if (x < 8) x = 8;
                                    if (x + tw > window.innerWidth - 8) x = window.innerWidth - tw - 8;
                                    const above = rect.top > th + 20;
                                    const y = above ? rect.top - th - gap : rect.bottom + gap;
                                    setHoveredDay({
                                        date: dateStr,
                                        pm25: aqi,
                                        x,
                                        y,
                                        above
                                    });
                                } : undefined,
                                onMouseLeave: ()=>setHoveredDay(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-semibold leading-none",
                                        children: day
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, this),
                                    aqi != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] font-bold leading-none opacity-90",
                                        children: aqi.toFixed(0)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, day, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 410,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            ]
        }, month, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 386,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen flex-col overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderMenu"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$aqi$2d$side$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AqiSidePanel"], {
                        currentPm25: currentPm25,
                        aqiData: sidebarAqiData,
                        cityName: "Алматы",
                        selectedSensor: selectedSensor,
                        onClearSensor: ()=>setSelectedSensor(null),
                        sensors: sensors,
                        onSensorSelect: (s)=>setSelectedSensor(s),
                        metricMode: metricMode
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 448,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex shrink-0 items-center gap-1 border-b border-border bg-background px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveTab("map"),
                                        className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "map" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, this),
                                            "Карта сенсоров"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveTab("calendar"),
                                        className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "calendar" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 484,
                                                columnNumber: 15
                                            }, this),
                                            "Календарь"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveTab("analytics"),
                                        className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "analytics" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart2$3e$__["BarChart2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 15
                                            }, this),
                                            "Аналитика"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveTab("ai"),
                                        className: `flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === "ai" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this),
                                            "ИИ-анализ"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto flex items-center gap-3 py-2",
                                        children: [
                                            activeTab === "map" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center rounded-lg border border-border bg-muted/50 p-0.5",
                                                        children: [
                                                            "epa-aqi",
                                                            "pm25"
                                                        ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setMetricMode(mode),
                                                                className: `rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${metricMode === mode ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                                                                children: mode === "epa-aqi" ? "US EPA AQI" : "PM2.5 µg/m³"
                                                            }, mode, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 w-px bg-border"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: sensorSearch,
                                                        onChange: (e)=>setSensorSearch(e.target.value),
                                                        placeholder: "Поиск…",
                                                        className: "h-8 w-44 rounded-md border border-border bg-background px-3 text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$filter$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdown"], {
                                                        value: sourceFilter,
                                                        onChange: setSourceFilter,
                                                        options: sources.map((s)=>({
                                                                value: s,
                                                                label: s
                                                            })),
                                                        allLabel: "Все поставщики",
                                                        searchPlaceholder: "Поиск поставщика…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$filter$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterDropdown"], {
                                                        value: districtFilter,
                                                        onChange: setDistrictFilter,
                                                        options: districtNames.map((d)=>({
                                                                value: d,
                                                                label: d
                                                            })),
                                                        allLabel: "Все районы",
                                                        searchPlaceholder: "Поиск района…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-muted-foreground whitespace-nowrap",
                                                        children: [
                                                            filteredSensors.length,
                                                            " / ",
                                                            sensors.length,
                                                            " · ",
                                                            sensorsWithData.length,
                                                            " с PM2.5"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        className: "h-8 text-xs text-muted-foreground",
                                                        onClick: ()=>{
                                                            setSensorSearch("");
                                                            setSourceFilter("all");
                                                            setDistrictFilter("all");
                                                        },
                                                        children: "Сброс"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            activeTab === "calendar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "sm",
                                                        onClick: ()=>setCurrentYear((y)=>y - 1),
                                                        disabled: !canGoPreviousYear,
                                                        className: "h-8 border-border bg-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                className: "mr-1 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 21
                                                            }, this),
                                                            currentYear - 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-foreground",
                                                        children: currentYear
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "sm",
                                                        onClick: ()=>setCurrentYear((y)=>y + 1),
                                                        disabled: !canGoNextYear,
                                                        className: "h-8 border-border bg-transparent",
                                                        children: [
                                                            currentYear + 1,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                className: "ml-1 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "icon",
                                                onClick: ()=>setTheme(themeIsDark ? "light" : "dark"),
                                                className: "h-8 w-8 border-border",
                                                "aria-label": "Toggle theme",
                                                children: mounted ? themeIsDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative min-h-0 flex-1 ${activeTab === "map" ? "flex" : "hidden"}`,
                                children: [
                                    sensorsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full items-center justify-center text-muted-foreground",
                                        children: "Загрузка сенсоров…"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this) : sensorsError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full w-full flex-col items-center justify-center gap-3 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-red-500",
                                                children: sensorsError
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: fetchSensors,
                                                children: "Попробовать снова"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 618,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SensorMap, {
                                        sensors: displaySensors,
                                        ecoIqSensors: displayEcoIqSensors,
                                        onSensorSelect: (s)=>setSelectedSensor(s),
                                        onEcoIqSelect: (s)=>setSelectedSensor(ecoIqToAirSensor(s)),
                                        focusedSensor: selectedSensor,
                                        metricMode: metricMode,
                                        sourceFilter: sourceFilter
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this),
                                    !sensorsLoading && !sensorsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$time$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeSlider"], {
                                        slots: timeseriesDays,
                                        selectedIdx: selectedDayIdx,
                                        onSelect: setSelectedDayIdx,
                                        loading: timeseriesLoading
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, this),
                                    !sensorsLoading && !sensorsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 left-4 z-[1000] flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2 text-xs backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: activeSensors.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 647,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "активных"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 648,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-border",
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-foreground",
                                                children: sensorsWithData.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: "с PM2.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 610,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `min-h-0 flex-1 overflow-y-auto ${activeTab === "analytics" ? "block" : "hidden"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$analytics$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalyticsTab"], {
                                    sensors: sensors,
                                    sensorsLoading: sensorsLoading
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 658,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `min-h-0 flex-1 overflow-y-auto ${activeTab === "ai" ? "block" : "hidden"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ai$2d$tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiTab"], {
                                    sensors: sensors,
                                    sensorsLoading: sensorsLoading
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 663,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `min-h-0 flex-1 overflow-hidden flex-col px-3 pb-2 pt-3 ${activeTab === "calendar" ? "flex" : "hidden"}`,
                                children: [
                                    statistics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 grid shrink-0 grid-cols-6 gap-2",
                                        children: [
                                            {
                                                label: "Всего дней",
                                                value: statistics.total_days,
                                                color: "text-foreground"
                                            },
                                            {
                                                label: "Среднее PM2.5",
                                                value: statistics.avg_pm25?.toFixed(1) ?? "—",
                                                color: "text-foreground"
                                            },
                                            {
                                                label: "Хорошие",
                                                value: statistics.good_days,
                                                color: "text-aqi-good"
                                            },
                                            {
                                                label: "Умеренные",
                                                value: statistics.moderate_days,
                                                color: "text-aqi-moderate"
                                            },
                                            {
                                                label: "Вредные",
                                                value: statistics.unhealthy_days,
                                                color: "text-aqi-unhealthy"
                                            },
                                            {
                                                label: "Опасные",
                                                value: statistics.hazardous_days,
                                                color: "text-aqi-hazardous"
                                            }
                                        ].map(({ label, value, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border border-border bg-card px-3 py-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-muted-foreground",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xl font-bold leading-tight ${color}`,
                                                        children: value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 682,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1.5 flex shrink-0 items-baseline gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold text-foreground",
                                                children: currentYear
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 690,
                                                columnNumber: 15
                                            }, this),
                                            lastCalendarDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-muted-foreground",
                                                children: [
                                                    "Данные по ",
                                                    new Date(lastCalendarDate).toLocaleDateString("ru-RU")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 692,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this),
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 items-center justify-center text-sm text-muted-foreground",
                                        children: "Загрузка данных…"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 700,
                                        columnNumber: 15
                                    }, this) : !Object.keys(aqiData).length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 flex-col items-center justify-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-red-500",
                                                children: "Ошибка загрузки данных"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 705,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Убедитесь, что API доступен и возвращает JSON."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 704,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-h-0 flex-1 grid grid-cols-4 grid-rows-3 gap-2",
                                        children: Array.from({
                                            length: 12
                                        }, (_, i)=>renderMonthCalendar(i))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 flex shrink-0 items-center justify-center gap-4",
                                        children: AQI_LEGEND.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-3 w-3 flex-shrink-0 rounded-sm ${item.className}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-muted-foreground",
                                                        children: [
                                                            item.label,
                                                            " ",
                                                            item.range
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.label, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 717,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 715,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 667,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            hoveredDay && (()=>{
                const { date, pm25, x, y } = hoveredDay;
                const hex = pm25ToHex(pm25);
                const label = pm25ToLabel(pm25);
                const whoRatio = pm25 / 5.0;
                const barPct = Math.min(100, pm25 / 60 * 100);
                const cigs = (pm25 / 22).toFixed(2);
                const fullDate = new Date(date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                });
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none fixed z-[9999]",
                    style: {
                        left: x,
                        top: y,
                        width: 228
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-2xl border border-border bg-card shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2.5",
                                style: {
                                    backgroundColor: hex
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold text-white/80",
                                        children: fullDate
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-black leading-none text-white",
                                                children: pm25.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mb-0.5 text-xs font-medium text-white/75",
                                                children: "µg/m³"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 749,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 745,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2.5 w-2.5 rounded-full flex-shrink-0",
                                                style: {
                                                    backgroundColor: hex
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 756,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold text-foreground",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 757,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-muted-foreground",
                                                        children: "Норма ВОЗ 5.0 µg/m³"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold",
                                                        style: {
                                                            color: hex
                                                        },
                                                        children: [
                                                            whoRatio.toFixed(1),
                                                            "×"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 764,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 762,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 rounded-full bg-muted overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full",
                                                    style: {
                                                        width: `${barPct}%`,
                                                        backgroundColor: hex
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 border-t border-border pt-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base",
                                                children: "🚬"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 776,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-foreground",
                                                        children: cigs
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 778,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1 text-[10px] text-muted-foreground",
                                                        children: "сигарет за день"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 777,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 753,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 743,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 739,
                    columnNumber: 11
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 442,
        columnNumber: 5
    }, this);
}
_s(AirQualityDashboard, "ayAUlxCSKQvTdtqV9I07zCu8bzI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = AirQualityDashboard;
var _c, _c1;
__turbopack_context__.k.register(_c, "SensorMap");
__turbopack_context__.k.register(_c1, "AirQualityDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b4708c50._.js.map