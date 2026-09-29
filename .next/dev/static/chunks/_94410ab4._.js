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
        name: "Воздух",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
    },
    {
        name: "Чистый город",
        href: "/eco-almaty",
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
    // next-themes can resolve the real theme before React hydrates, so the client's first
    // render already differs from the light-default SSR markup. Force both to render the
    // same "light" branch until mounted, then swap post-hydration — avoids the mismatch
    // instead of just guessing a default.
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderMenu.useEffect": ()=>{
            setMounted(true);
        }
    }["HeaderMenu.useEffect"], []);
    const isDark = mounted && resolvedTheme === "dark";
    const logoSrc = isDark ? "/logo_aqa.png" : "/logo_aqa_dark_letters.png";
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
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/header-menu.tsx",
                            lineNumber: 36,
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
                                                lineNumber: 57,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/header-menu.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this),
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-background/40"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header-menu.tsx",
                                                lineNumber: 60,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this)
                                }, item.href, false, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/header-menu.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>setTheme(isDark ? "light" : "dark"),
                                    "aria-label": "Toggle theme",
                                    className: "h-9 w-9 rounded-xl",
                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 70,
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
                                            lineNumber: 84,
                                            columnNumber: 27
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header-menu.tsx",
                                            lineNumber: 84,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header-menu.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header-menu.tsx",
                    lineNumber: 34,
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
                                            lineNumber: 108,
                                            columnNumber: 23
                                        }, this),
                                        item.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header-menu.tsx",
                                    lineNumber: 99,
                                    columnNumber: 21
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/components/header-menu.tsx",
                                lineNumber: 98,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/header-menu.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/header-menu.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/header-menu.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/header-menu.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(HeaderMenu, "lp5MrwRWS7Os4RPCjjxXDlwYhu8=", false, function() {
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
"[project]/components/eco-almaty-location-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationPickerModal",
    ()=>LocationPickerModal
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
const MAPBOX_TOKEN = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
async function geocodeReverse(coords) {
    try {
        const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${MAPBOX_TOKEN}&language=ru&limit=1`);
        if (!res.ok) return "";
        const data = await res.json();
        return data.features[0]?.place_name ?? "";
    } catch  {
        return "";
    }
}
function LocationPickerModal({ initialCoords, onConfirm, onClose }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCoords);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dropOpen, setDropOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // init map + marker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationPickerModal.useEffect": ()=>{
            if (!containerRef.current || mapRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = MAPBOX_TOKEN;
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: containerRef.current,
                style: "mapbox://styles/mapbox/light-v11",
                center: initialCoords,
                zoom: 15
            });
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl({
                showCompass: false
            }), "top-right");
            const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Marker({
                draggable: true,
                color: "#16a34a"
            }).setLngLat(initialCoords).addTo(map);
            const updatePos = {
                "LocationPickerModal.useEffect.updatePos": (c)=>{
                    setCoords(c);
                    geocodeReverse(c).then(setAddress);
                }
            }["LocationPickerModal.useEffect.updatePos"];
            marker.on("dragend", {
                "LocationPickerModal.useEffect": ()=>{
                    const { lng, lat } = marker.getLngLat();
                    updatePos([
                        lng,
                        lat
                    ]);
                }
            }["LocationPickerModal.useEffect"]);
            map.on("click", {
                "LocationPickerModal.useEffect": (e)=>{
                    const c = [
                        e.lngLat.lng,
                        e.lngLat.lat
                    ];
                    marker.setLngLat(c);
                    updatePos(c);
                }
            }["LocationPickerModal.useEffect"]);
            map.on("load", {
                "LocationPickerModal.useEffect": ()=>setLoading(false)
            }["LocationPickerModal.useEffect"]);
            mapRef.current = map;
            markerRef.current = marker;
            updatePos(initialCoords);
            return ({
                "LocationPickerModal.useEffect": ()=>{
                    map.remove();
                    mapRef.current = null;
                    markerRef.current = null;
                }
            })["LocationPickerModal.useEffect"];
        }
    }["LocationPickerModal.useEffect"], []); // eslint-disable-line react-hooks/exhaustive-deps
    // search debounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationPickerModal.useEffect": ()=>{
            if (!searchQuery.trim()) {
                setResults([]);
                setDropOpen(false);
                return;
            }
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout({
                "LocationPickerModal.useEffect": async ()=>{
                    try {
                        const enc = encodeURIComponent(searchQuery);
                        const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${enc}.json?access_token=${MAPBOX_TOKEN}&proximity=76.945,43.238&country=kz&language=ru&limit=5`);
                        if (!res.ok) return;
                        const data = await res.json();
                        setResults(data.features ?? []);
                        setDropOpen(true);
                    } catch  {}
                }
            }["LocationPickerModal.useEffect"], 350);
        }
    }["LocationPickerModal.useEffect"], [
        searchQuery
    ]);
    const flyTo = (r)=>{
        mapRef.current?.flyTo({
            center: r.center,
            zoom: 16,
            duration: 700
        });
        markerRef.current?.setLngLat(r.center);
        setCoords(r.center);
        setAddress(r.place_name);
        setSearchQuery(r.place_name.split(",")[0]);
        setDropOpen(false);
    };
    const handleBackdrop = (e)=>{
        if (e.target === e.currentTarget) onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleBackdrop,
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter,sans-serif"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 620,
                maxWidth: "calc(100vw - 32px)",
                height: 540,
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 24px 64px rgba(0,0,0,0.30)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "14px 18px",
                        borderBottom: "1px solid #e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#111"
                            },
                            children: "Выбрать местоположение"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "#9ca3af",
                                fontSize: 18,
                                lineHeight: 1,
                                padding: "2px 6px"
                            },
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "10px 16px",
                        borderBottom: "1px solid #f3f4f6",
                        position: "relative",
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                                padding: "7px 12px",
                                background: "#fff"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#9ca3af",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                            lineNumber: 150,
                                            columnNumber: 47
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: "Поиск адреса в Алматы…",
                                    style: {
                                        flex: 1,
                                        border: "none",
                                        outline: "none",
                                        fontSize: 13,
                                        color: "#111",
                                        background: "transparent",
                                        fontFamily: "Inter,sans-serif"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setSearchQuery("");
                                        setResults([]);
                                        setDropOpen(false);
                                    },
                                    style: {
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "#9ca3af",
                                        padding: 0,
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "13",
                                        height: "13",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "6",
                                                y1: "6",
                                                x2: "18",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                                lineNumber: 162,
                                                columnNumber: 57
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        dropOpen && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: "calc(100% - 4px)",
                                left: 16,
                                right: 16,
                                background: "#fff",
                                border: "1px solid #e5e7eb",
                                borderRadius: 8,
                                boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
                                zIndex: 300,
                                overflow: "hidden"
                            },
                            children: results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>flyTo(r),
                                    style: {
                                        width: "100%",
                                        textAlign: "left",
                                        padding: "8px 14px",
                                        border: "none",
                                        background: "none",
                                        cursor: "pointer",
                                        fontSize: 13,
                                        borderBottom: i < results.length - 1 ? "1px solid #f3f4f6" : "none",
                                        fontFamily: "Inter,sans-serif"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "#f9fafb";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "none";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#111",
                                                fontWeight: 500
                                            },
                                            children: r.place_name.split(",")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#9ca3af",
                                                fontSize: 11,
                                                marginLeft: 6
                                            },
                                            children: r.place_name.split(",").slice(1, 2).join("").trim()
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        flex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: containerRef,
                            style: {
                                position: "absolute",
                                inset: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                inset: 0,
                                background: "#f3f4f6",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#9ca3af",
                                fontSize: 13,
                                zIndex: 10
                            },
                            children: "Загрузка карты…"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                bottom: 10,
                                left: "50%",
                                transform: "translateX(-50%)",
                                background: "rgba(0,0,0,0.6)",
                                color: "#fff",
                                fontSize: 11,
                                padding: "5px 12px",
                                borderRadius: 20,
                                zIndex: 10,
                                pointerEvents: "none",
                                whiteSpace: "nowrap"
                            },
                            children: "Нажмите на карту или перетащите маркер"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "12px 16px",
                        borderTop: "1px solid #e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: "#374151",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    },
                                    children: address || "Определение адреса…"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: "#9ca3af",
                                        marginTop: 2,
                                        fontVariantNumeric: "tabular-nums"
                                    },
                                    children: [
                                        coords[1].toFixed(6),
                                        ", ",
                                        coords[0].toFixed(6)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                padding: "8px 16px",
                                borderRadius: 8,
                                border: "1px solid #e5e7eb",
                                background: "#f9fafb",
                                fontSize: 13,
                                cursor: "pointer",
                                color: "#6b7280",
                                fontFamily: "Inter,sans-serif",
                                flexShrink: 0
                            },
                            children: "Отмена"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onConfirm(coords, address),
                            style: {
                                padding: "8px 16px",
                                borderRadius: 8,
                                border: "none",
                                background: "#16a34a",
                                fontSize: 13,
                                cursor: "pointer",
                                color: "#fff",
                                fontWeight: 600,
                                fontFamily: "Inter,sans-serif",
                                flexShrink: 0
                            },
                            children: "Подтвердить"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-location-picker.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/eco-almaty-location-picker.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/eco-almaty-location-picker.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(LocationPickerModal, "9VUvSqCXGO2O0lI1ZHYZIfnWL3s=");
_c = LocationPickerModal;
var _c;
__turbopack_context__.k.register(_c, "LocationPickerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = ("TURBOPACK compile-time truthy", 1) ? "http://localhost:8000/api/v1" : "TURBOPACK unreachable";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-almaty-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EcoAlmatyMap",
    ()=>EcoAlmatyMap,
    "LAYERS",
    ()=>LAYERS,
    "clearGeoCache",
    ()=>clearGeoCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$location$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-almaty-location-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const LAYERS = [
    {
        id: "ponds",
        label: "Пруды",
        group: "water",
        color: "#3b82f6",
        kind: "fill",
        endpoint: "eco-water/ponds"
    },
    {
        id: "lakes",
        label: "Озёра",
        group: "water",
        color: "#1d4ed8",
        kind: "fill",
        endpoint: "eco-water/lakes"
    },
    {
        id: "reservoirs",
        label: "Водохранилища",
        group: "water",
        color: "#1e40af",
        kind: "fill",
        endpoint: "eco-water/reservoirs"
    },
    {
        id: "rivers",
        label: "Реки",
        group: "water",
        color: "#2563eb",
        kind: "line",
        endpoint: "eco-water/rivers"
    },
    {
        id: "channels",
        label: "Каналы",
        group: "water",
        color: "#0891b2",
        kind: "line",
        endpoint: "eco-water/channels"
    },
    {
        id: "ditches",
        label: "Арычная сеть",
        group: "water",
        color: "#06b6d4",
        kind: "line",
        endpoint: "eco-water/ditch-networks"
    },
    {
        id: "strips",
        label: "Водоохр. полосы",
        group: "water",
        color: "#67e8f9",
        kind: "fill",
        endpoint: "eco-water/protection-strips"
    },
    {
        id: "hydraulic",
        label: "Гидросооружения",
        group: "water",
        color: "#0284c7",
        kind: "point",
        endpoint: "eco-water/hydraulic-structures"
    },
    {
        id: "fountains",
        label: "Фонтаны",
        group: "fountain",
        color: "#06d6a0",
        kind: "point",
        endpoint: "eco-fountain/fountains",
        centroid: true
    },
    {
        id: "waste-sites",
        label: "Площадки ТКО",
        group: "waste",
        color: "#f97316",
        kind: "point",
        endpoint: "eco-waste/municipal-sites"
    },
    {
        id: "kgo-zones",
        label: "Зоны КГО",
        group: "waste",
        color: "#ea580c",
        kind: "fill",
        endpoint: "eco-waste/kgo-zones"
    },
    {
        id: "waste-separate",
        label: "Контейнеры раздельного сбора",
        group: "waste",
        color: "#3b82f6",
        kind: "point",
        endpoint: "eco-waste/separate-containers"
    },
    {
        id: "waste-recycle-pts",
        label: "Пункты приёма вторсырья",
        group: "waste",
        color: "#f59e0b",
        kind: "point",
        endpoint: "eco-waste/recycling-points"
    },
    {
        id: "waste-sorting",
        label: "Предприятия по сортировке",
        group: "waste",
        color: "#8b5cf6",
        kind: "point",
        endpoint: "eco-waste/sorting-enterprises"
    },
    {
        id: "waste-processing",
        label: "Предприятия по переработке",
        group: "waste",
        color: "#ec4899",
        kind: "point",
        endpoint: "eco-waste/processing-enterprises"
    },
    {
        id: "waste-utilization",
        label: "Предприятия по утилизации",
        group: "waste",
        color: "#dc2626",
        kind: "point",
        endpoint: "eco-waste/utilization-enterprises"
    },
    {
        id: "waste-burial",
        label: "Объекты захоронения",
        group: "waste",
        color: "#78716c",
        kind: "point",
        endpoint: "eco-waste/burial-sites"
    },
    {
        id: "plants-1",
        label: "Деревья",
        group: "green",
        color: "#15803d",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 1
    },
    {
        id: "plants-2",
        label: "Кустарники",
        group: "green",
        color: "#4ade80",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 2
    },
    {
        id: "plants-3",
        label: "Куртина (деревья)",
        group: "green",
        color: "#166534",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 3
    },
    {
        id: "plants-4",
        label: "Куртина (кустарники)",
        group: "green",
        color: "#86efac",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 4
    },
    {
        id: "plants-5",
        label: "Живая изгородь",
        group: "green",
        color: "#22c55e",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 5
    },
    {
        id: "plants-6",
        label: "Цветник",
        group: "green",
        color: "#f472b6",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 6
    },
    {
        id: "plants-7",
        label: "Газон",
        group: "green",
        color: "#a3e635",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 7
    },
    {
        id: "plants-8",
        label: "Лиана",
        group: "green",
        color: "#84cc16",
        kind: "point",
        endpoint: "",
        plantTiles: true,
        plantType: 8
    }
];
// ── DRF paginated fetch with module-level cache ────────────────────────────
const geoCache = new Map();
const GEO_TTL = 60 * 60 * 1000;
const LS_PREFIX = "eco_geo:";
function clearGeoCache() {
    geoCache.clear();
    try {
        Object.keys(localStorage).filter((k)=>k.startsWith(LS_PREFIX)).forEach((k)=>localStorage.removeItem(k));
    } catch  {}
}
async function fetchAll(endpoint, kind = "point") {
    const cacheKey = `${endpoint}:${kind}`;
    const lsKey = `${LS_PREFIX}${cacheKey}`;
    const hit = geoCache.get(cacheKey);
    if (hit && Date.now() - hit.ts < GEO_TTL) {
        const kb = Math.round(JSON.stringify(hit.features).length / 1024);
        return {
            features: hit.features,
            kb,
            cached: true
        };
    }
    try {
        const raw = localStorage.getItem(lsKey);
        if (raw) {
            const stored = JSON.parse(raw);
            if (Date.now() - stored.ts < GEO_TTL) {
                geoCache.set(cacheKey, stored);
                const kb = Math.round(raw.length / 1024);
                return {
                    features: stored.features,
                    kb,
                    cached: true
                };
            }
        }
    } catch  {}
    const results = [];
    let totalBytes = 0;
    let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/${endpoint}/?format=json&limit=500`;
    while(url){
        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(url, {
            headers: {
                Accept: "application/json"
            }
        });
        if (!response.ok) break;
        // eslint-disable-next-line no-await-in-loop
        const text = await response.text();
        totalBytes += text.length;
        let payload;
        try {
            payload = JSON.parse(text);
        } catch  {
            break;
        }
        const items = Array.isArray(payload) ? payload : payload.results ?? [];
        for (const item of items){
            const obj = item;
            const rawGeom = kind === "point" ? obj.centroid ?? obj.geometry : obj.geometry ?? obj.centroid;
            if (!rawGeom) continue;
            results.push({
                type: "Feature",
                geometry: rawGeom,
                properties: {
                    ...obj,
                    geometry: undefined,
                    centroid: undefined
                }
            });
        }
        url = Array.isArray(payload) ? null : payload.next ?? null;
    }
    const entry = {
        features: results,
        ts: Date.now()
    };
    geoCache.set(cacheKey, entry);
    try {
        localStorage.setItem(lsKey, JSON.stringify(entry));
    } catch  {}
    return {
        features: results,
        kb: Math.round(totalBytes / 1024),
        cached: false
    };
}
// ── Labels / formatters ────────────────────────────────────────────────────
const PLANT_TYPE_LABEL = {
    1: "Дерево",
    2: "Кустарник",
    3: "Куртина (Деревья)",
    4: "Куртина (Кустарники)",
    5: "Живая изгородь",
    6: "Цветник",
    7: "Газон",
    8: "Лиана"
};
const SANITARY_LABEL = {
    1: "Здоровые (КСО-1)",
    2: "Ослабленные (КСО-2)",
    3: "Угнетённые (КСО-3)",
    4: "Усыхающие (КСО-4)",
    5: "Сухостой (КСО-5)",
    6: "Аварийное (КСО-5)",
    7: "Хорошее (КСО-2)"
};
function sanitaryColor(id) {
    const m = {
        1: "#16a34a",
        2: "#ca8a04",
        3: "#ea580c",
        4: "#dc2626",
        5: "#78716c",
        6: "#b91c1c",
        7: "#22c55e"
    };
    return m[id] ?? "#6b7280";
}
function str(v, fallback = "—") {
    if (v === null || v === undefined || v === "") return fallback;
    return String(v);
}
// ── PassportSection ────────────────────────────────────────────────────────
function PassportSection({ title, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "14px 18px",
            borderBottom: "1px solid #f3f4f6"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 10
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: i > 0 ? 8 : 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13,
                                color: "#6b7280"
                            },
                            children: row.label
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13,
                                fontWeight: 600,
                                color: row.accent ?? "#111",
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                                textAlign: "right",
                                maxWidth: "55%"
                            },
                            children: [
                                row.accent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        background: row.accent,
                                        display: "inline-block",
                                        flexShrink: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 160,
                                    columnNumber: 28
                                }, this),
                                row.value
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c = PassportSection;
// ── Photo placeholder ──────────────────────────────────────────────────────
function PhotoPlaceholder({ label = "Фото отсутствует" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: 150,
            background: "#f3f4f6",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "#9ca3af",
            borderBottom: "1px solid #e5e7eb"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                opacity: 0.45,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "13",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_c1 = PhotoPlaceholder;
// ── FormField ──────────────────────────────────────────────────────────────
function FormField({ label, required, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 14
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: 6
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#dc2626",
                            marginLeft: 3
                        },
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 192,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c2 = FormField;
// ── Report form ────────────────────────────────────────────────────────────
const REPORT_TYPES = [
    "Неверное местоположение",
    "Некорректные данные",
    "Изменилось состояние объекта",
    "Отсутствует объект на карте",
    "Фактически объект отсутствует",
    "Другое"
];
const inputStyle = {
    width: "100%",
    padding: "9px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    fontSize: 13,
    color: "#111",
    boxSizing: "border-box",
    fontFamily: "Inter,sans-serif"
};
function ReportForm({ extId, typeName, coords: initialCoords, onClose }) {
    _s();
    const [reportType, setReportType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pickedCoords, setPickedCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeCoords = pickedCoords ?? initialCoords;
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 32,
                gap: 16
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "#dcfce7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#16a34a",
                        strokeWidth: "2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "20 6 9 17 4 12"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 233,
                            columnNumber: 106
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 15,
                                fontWeight: 700,
                                color: "#111"
                            },
                            children: "Обращение отправлено"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 13,
                                color: "#6b7280",
                                marginTop: 4
                            },
                            children: "Спасибо! Мы рассмотрим ваше обращение."
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        padding: "9px 24px",
                        borderRadius: 8,
                        border: "1px solid #e5e7eb",
                        background: "#f9fafb",
                        fontSize: 13,
                        cursor: "pointer",
                        color: "#374151",
                        fontFamily: "Inter,sans-serif"
                    },
                    children: "Закрыть"
                }, void 0, false, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/eco-almaty-map.tsx",
            lineNumber: 231,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px 18px 80px",
                    flex: 1
                },
                children: [
                    (extId || typeName) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 12,
                            color: "#6b7280",
                            background: "#f3f4f6",
                            padding: "7px 12px",
                            borderRadius: 8,
                            marginBottom: 16
                        },
                        children: [
                            typeName ?? "Объект",
                            extId ? ` · ID ${extId}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Тип обращения",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: reportType,
                            onChange: (e)=>setReportType(Number(e.target.value)),
                            style: {
                                ...inputStyle,
                                background: "#fff"
                            },
                            children: REPORT_TYPES.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: i,
                                    children: t
                                }, i, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 259,
                                    columnNumber: 41
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Описание",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: description,
                            onChange: (e)=>setDescription(e.target.value),
                            rows: 3,
                            placeholder: "Опишите ситуацию…",
                            style: {
                                ...inputStyle,
                                resize: "vertical"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Фото",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: "1.5px dashed #d1d5db",
                                borderRadius: 8,
                                padding: "20px 16px",
                                textAlign: "center",
                                color: "#9ca3af",
                                fontSize: 13,
                                cursor: "pointer",
                                background: "#fafafa"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    style: {
                                        margin: "0 auto 6px",
                                        display: "block"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 8 12 3 7 8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "3",
                                            x2: "12",
                                            y2: "15"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                "Нажмите для загрузки"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Адрес",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: address,
                            onChange: (e)=>setAddress(e.target.value),
                            placeholder: "Введите адрес",
                            style: inputStyle
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Координаты",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    readOnly: true,
                                    value: activeCoords ? `${activeCoords[1].toFixed(6)}, ${activeCoords[0].toFixed(6)}` : "",
                                    placeholder: "Не указаны",
                                    style: {
                                        ...inputStyle,
                                        flex: 1,
                                        background: "#f9fafb",
                                        color: "#6b7280"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setShowPicker(true),
                                    style: {
                                        padding: "9px 12px",
                                        borderRadius: 8,
                                        border: "1px solid #e5e7eb",
                                        background: "#f9fafb",
                                        cursor: "pointer",
                                        fontSize: 12,
                                        color: "#374151",
                                        fontFamily: "Inter,sans-serif",
                                        whiteSpace: "nowrap",
                                        flexShrink: 0
                                    },
                                    children: "📍 На карте"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    showPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$location$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocationPickerModal"], {
                        initialCoords: activeCoords ?? [
                            76.945,
                            43.238
                        ],
                        onConfirm: (c, addr)=>{
                            setPickedCoords(c);
                            if (addr && !address) setAddress(addr.split(",")[0]);
                            setShowPicker(false);
                        },
                        onClose: ()=>setShowPicker(false)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "ФИО",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            placeholder: "Имя и фамилия",
                            style: inputStyle
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Телефон / Email",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: contact,
                            onChange: (e)=>setContact(e.target.value),
                            placeholder: "+7 700 000 0000 или email@mail.ru",
                            style: inputStyle
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "sticky",
                    bottom: 0,
                    background: "#fff",
                    borderTop: "1px solid #e5e7eb",
                    padding: "12px 16px",
                    display: "flex",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            flex: 1,
                            padding: "9px 0",
                            borderRadius: 8,
                            fontSize: 13,
                            border: "1px solid #e5e7eb",
                            background: "#f9fafb",
                            color: "#6b7280",
                            cursor: "pointer",
                            fontWeight: 500,
                            fontFamily: "Inter,sans-serif"
                        },
                        children: "Отмена"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSubmitted(true),
                        style: {
                            flex: 1,
                            padding: "9px 0",
                            borderRadius: 8,
                            fontSize: 13,
                            border: "none",
                            background: "#16a34a",
                            color: "#fff",
                            cursor: "pointer",
                            fontWeight: 600,
                            fontFamily: "Inter,sans-serif"
                        },
                        children: "Отправить"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s(ReportForm, "fbrnS3Welz742jkvonFj2Hv6ScA=");
_c3 = ReportForm;
// ── Plant passport ─────────────────────────────────────────────────────────
function PlantPassport({ properties, fullDetail }) {
    const p = fullDetail ?? properties;
    const isLoading = fullDetail === null;
    const sanitaryId = typeof p.sanitary_id === "number" ? p.sanitary_id : parseInt(String(p.sanitary_id ?? ""), 10);
    const sanitaryLabel = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] : null;
    const sanitaryClr = !isNaN(sanitaryId) ? sanitaryColor(sanitaryId) : "#6b7280";
    const isRedbook = p.redbook === 1 || p.redbook === true;
    const isPine = p.pine === 1 || p.pine === true;
    const typeName = PLANT_TYPE_LABEL[p.plant_type] ?? str(p.plant_type);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoPlaceholder, {}, void 0, false, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: 6,
                        alignItems: "center",
                        padding: "16px 18px",
                        color: "#9ca3af",
                        fontSize: 13
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                width: 14,
                                height: 14,
                                borderRadius: "50%",
                                border: "2px solid #e5e7eb",
                                borderTopColor: "#16a34a",
                                display: "inline-block",
                                animation: "spin 0.7s linear infinite"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        "Загрузка…"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/eco-almaty-map.tsx",
            lineNumber: 364,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflowY: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoPlaceholder, {}, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Основная информация",
                rows: [
                    {
                        label: "Тип объекта",
                        value: typeName
                    },
                    {
                        label: "Адрес",
                        value: str(p.address)
                    },
                    {
                        label: "Район",
                        value: str(p.district ?? p.district_name)
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Идентификация",
                rows: [
                    {
                        label: "ID объекта",
                        value: str(p.external_id ?? p.id)
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Характеристики",
                rows: [
                    {
                        label: "Порода / вид",
                        value: str(p.species ?? p.breed ?? p.kind_name)
                    },
                    {
                        label: "Хвойное",
                        value: isPine ? "Да" : "Нет",
                        accent: isPine ? "#0891b2" : undefined
                    },
                    {
                        label: "Краснокнижное",
                        value: isRedbook ? "Да" : "Нет",
                        accent: isRedbook ? "#dc2626" : undefined
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Состояние",
                rows: [
                    {
                        label: "Санитарное состояние",
                        value: sanitaryLabel ?? "—",
                        accent: sanitaryLabel ? sanitaryClr : undefined
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Дополнительная информация",
                rows: [
                    {
                        label: "Комментарий",
                        value: str(p.comment)
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, this);
}
_c4 = PlantPassport;
// ── Waste passport ─────────────────────────────────────────────────────────
function WastePassport({ label, properties }) {
    const p = properties;
    const address = str(p.address);
    const district = str(p.district ?? p.district_name);
    const collectionType = str(p.type_of_collection ?? p.waste_type ?? p.collection_type ?? p.type);
    const area = p.area != null ? `${p.area} м²` : "—";
    const containerCount = str(p.container_count ?? p.containers_count);
    const containerMaterial = str(p.container_material ?? p.material);
    const hasRoof = p.has_roof === true || p.has_roof === 1 ? "Да" : p.has_roof === false || p.has_roof === 0 ? "Нет" : "—";
    const kgoZone = str(p.kgo_zone);
    const comment = str(p.comment ?? p.description);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflowY: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoPlaceholder, {}, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Основная информация",
                rows: [
                    {
                        label: "Тип объекта",
                        value: label
                    },
                    {
                        label: "Тип сбора",
                        value: collectionType
                    },
                    {
                        label: "Адрес",
                        value: address
                    },
                    {
                        label: "Район",
                        value: district
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Идентификация",
                rows: [
                    {
                        label: "ID",
                        value: str(p.external_id ?? p.id)
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Характеристики",
                rows: [
                    {
                        label: "Площадь площадки",
                        value: area
                    },
                    {
                        label: "Кол-во контейнеров",
                        value: containerCount
                    },
                    {
                        label: "Материал контейнера",
                        value: containerMaterial
                    },
                    {
                        label: "Навес",
                        value: hasRoof
                    },
                    {
                        label: "Зона для КГО",
                        value: kgoZone
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Дополнительная информация",
                rows: [
                    {
                        label: "Комментарий",
                        value: comment
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
_c5 = WastePassport;
function EcoAlmatyMap({ visibleLayers, centerCoords }) {
    _s1();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [loadedLayers, setLoadedLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visibleLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(visibleLayers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            visibleLayersRef.current = visibleLayers;
        }
    }["EcoAlmatyMap.useEffect"], [
        visibleLayers
    ]);
    const [selectedObject, setSelectedObject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setSelectedObjectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(setSelectedObject);
    setSelectedObjectRef.current = setSelectedObject;
    const [drawerView, setDrawerView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("passport");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            setDrawerView("passport");
        }
    }["EcoAlmatyMap.useEffect"], [
        selectedObject
    ]);
    const [showStandaloneReport, setShowStandaloneReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullDetail, setFullDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            if (selectedObject?.kind !== "plant") {
                setFullDetail(null);
                return;
            }
            const extId = selectedObject.properties?.external_id;
            if (!extId) {
                setFullDetail(null);
                return;
            }
            const ctrl = new AbortController();
            setFullDetail(null);
            fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/eco-green/plants/${extId}/detail/`, {
                signal: ctrl.signal
            }).then({
                "EcoAlmatyMap.useEffect": (r)=>r.ok ? r.json() : null
            }["EcoAlmatyMap.useEffect"]).then({
                "EcoAlmatyMap.useEffect": (data)=>{
                    if (data) setFullDetail(data);
                }
            }["EcoAlmatyMap.useEffect"]).catch({
                "EcoAlmatyMap.useEffect": ()=>{}
            }["EcoAlmatyMap.useEffect"]);
            return ({
                "EcoAlmatyMap.useEffect": ()=>ctrl.abort()
            })["EcoAlmatyMap.useEffect"];
        }
    }["EcoAlmatyMap.useEffect"], [
        selectedObject
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            if (!centerCoords || !mapRef.current) return;
            mapRef.current.flyTo({
                center: centerCoords,
                zoom: Math.max(mapRef.current.getZoom(), 15),
                duration: 1200
            });
        }
    }["EcoAlmatyMap.useEffect"], [
        centerCoords
    ]);
    const [layerProgress, setLayerProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const markLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[markLayer]": (id, label, status, kb = 0)=>{
            setLayerProgress({
                "EcoAlmatyMap.useCallback[markLayer]": (prev)=>({
                        ...prev,
                        [id]: {
                            label,
                            status,
                            kb
                        }
                    })
            }["EcoAlmatyMap.useCallback[markLayer]"]);
        }
    }["EcoAlmatyMap.useCallback[markLayer]"], []);
    const loadCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mapIdleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [globalLoading, setGlobalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const maybeHideLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[maybeHideLoading]": ()=>{
            if (mapIdleRef.current && loadCountRef.current === 0) setGlobalLoading(false);
        }
    }["EcoAlmatyMap.useCallback[maybeHideLoading]"], []);
    const beginLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[beginLoad]": ()=>{
            loadCountRef.current++;
            setGlobalLoading(true);
        }
    }["EcoAlmatyMap.useCallback[beginLoad]"], []);
    const endLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[endLoad]": ()=>{
            loadCountRef.current = Math.max(0, loadCountRef.current - 1);
            maybeHideLoading();
        }
    }["EcoAlmatyMap.useCallback[endLoad]"], [
        maybeHideLoading
    ]);
    const loadingLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register("/sw-plants.js").catch({
                    "EcoAlmatyMap.useEffect": ()=>{}
                }["EcoAlmatyMap.useEffect"]);
            }
        }
    }["EcoAlmatyMap.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            if (!containerRef.current || mapRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Map({
                container: containerRef.current,
                style: resolvedTheme === "dark" ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v11",
                center: [
                    76.945,
                    43.238
                ],
                zoom: 11.5
            });
            map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].NavigationControl(), "top-right");
            map.on("idle", {
                "EcoAlmatyMap.useEffect": ()=>{
                    mapIdleRef.current = true;
                    maybeHideLoading();
                }
            }["EcoAlmatyMap.useEffect"]);
            mapRef.current = map;
            return ({
                "EcoAlmatyMap.useEffect": ()=>{
                    map.remove();
                    mapRef.current = null;
                    mapIdleRef.current = false;
                }
            })["EcoAlmatyMap.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["EcoAlmatyMap.useEffect"], []);
    const loadLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[loadLayer]": async (layer)=>{
            const map = mapRef.current;
            if (!map || !map.isStyleLoaded()) return;
            if (loadedLayers.has(layer.id) || loadingLayers.current.has(layer.id)) return;
            loadingLayers.current.add(layer.id);
            // ── plant tiles (MVT) ──────────────────────────────────────────────────
            if ("plantTiles" in layer && layer.plantTiles) {
                if (!map.getSource("src-plants")) {
                    map.addSource("src-plants", {
                        type: "vector",
                        tiles: [
                            `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/eco-green/plants/tiles/{z}/{x}/{y}.mvt`
                        ],
                        minzoom: 8,
                        maxzoom: 14
                    });
                }
                if (!map.getLayer("plants-combined")) {
                    const PLANT_COLORS = {
                        1: "#15803d",
                        2: "#4ade80",
                        3: "#166534",
                        4: "#86efac",
                        5: "#22c55e",
                        6: "#f472b6",
                        7: "#a3e635",
                        8: "#84cc16"
                    };
                    const nonPlantAnchor = LAYERS.filter({
                        "EcoAlmatyMap.useCallback[loadLayer].nonPlantAnchor": (l)=>!("plantTiles" in l)
                    }["EcoAlmatyMap.useCallback[loadLayer].nonPlantAnchor"]).flatMap({
                        "EcoAlmatyMap.useCallback[loadLayer].nonPlantAnchor": (l)=>l.kind === "point" ? [
                                l.id,
                                `${l.id}-clusters`,
                                `${l.id}-count`
                            ] : [
                                l.id
                            ]
                    }["EcoAlmatyMap.useCallback[loadLayer].nonPlantAnchor"]).find({
                        "EcoAlmatyMap.useCallback[loadLayer].nonPlantAnchor": (id)=>map.getLayer(id)
                    }["EcoAlmatyMap.useCallback[loadLayer].nonPlantAnchor"]);
                    const colorExpr = [
                        "match",
                        [
                            "get",
                            "plant_type"
                        ],
                        1,
                        "#15803d",
                        2,
                        "#4ade80",
                        3,
                        "#166534",
                        4,
                        "#86efac",
                        5,
                        "#22c55e",
                        6,
                        "#f472b6",
                        7,
                        "#a3e635",
                        8,
                        "#84cc16",
                        "#6b7280"
                    ];
                    const initialTypes = LAYERS.filter({
                        "EcoAlmatyMap.useCallback[loadLayer].initialTypes": (l)=>"plantTiles" in l && visibleLayers.has(l.id)
                    }["EcoAlmatyMap.useCallback[loadLayer].initialTypes"]).map({
                        "EcoAlmatyMap.useCallback[loadLayer].initialTypes": (l)=>l.plantType
                    }["EcoAlmatyMap.useCallback[loadLayer].initialTypes"]);
                    map.addLayer({
                        id: "plants-combined",
                        type: "circle",
                        source: "src-plants",
                        "source-layer": "plants",
                        minzoom: 8,
                        filter: initialTypes.length > 0 ? [
                            "in",
                            [
                                "get",
                                "plant_type"
                            ],
                            [
                                "literal",
                                initialTypes
                            ]
                        ] : [
                            "literal",
                            false
                        ],
                        paint: {
                            "circle-color": colorExpr,
                            "circle-radius": [
                                "interpolate",
                                [
                                    "linear"
                                ],
                                [
                                    "zoom"
                                ],
                                8,
                                1.5,
                                12,
                                3,
                                16,
                                7
                            ],
                            "circle-stroke-width": [
                                "interpolate",
                                [
                                    "linear"
                                ],
                                [
                                    "zoom"
                                ],
                                11,
                                0,
                                14,
                                1.5
                            ],
                            "circle-stroke-color": "#fff",
                            "circle-opacity": [
                                "interpolate",
                                [
                                    "linear"
                                ],
                                [
                                    "zoom"
                                ],
                                8,
                                0.7,
                                12,
                                0.95
                            ]
                        }
                    }, nonPlantAnchor);
                    map.on("click", "plants-combined", {
                        "EcoAlmatyMap.useCallback[loadLayer]": (e)=>{
                            const feat = e.features?.[0];
                            if (!feat) return;
                            const props = feat.properties;
                            const pt = typeof props.plant_type === "number" ? props.plant_type : parseInt(String(props.plant_type ?? ""), 10);
                            const layerMatch = LAYERS.find({
                                "EcoAlmatyMap.useCallback[loadLayer].layerMatch": (l)=>"plantTiles" in l && l.plantType === pt
                            }["EcoAlmatyMap.useCallback[loadLayer].layerMatch"]);
                            const label = layerMatch?.label ?? "Насаждение";
                            const color = PLANT_COLORS[pt] ?? "#16a34a";
                            const coords = feat.geometry.coordinates;
                            const sanitaryId = parseInt(String(props.sanitary_id ?? ""), 10);
                            const sanitaryTxt = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] ?? "" : "";
                            const extId = str(props.external_id ?? props.id, "—");
                            popupRef.current?.remove();
                            popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                                maxWidth: "240px",
                                closeButton: false,
                                offset: 10
                            }).setLngLat(coords).setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px">
              <div style="display:flex;align-items:center;gap:7px;margin-bottom:6px">
                <span style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0"></span>
                <span style="font-weight:700;font-size:13px;color:#111">${label}</span>
              </div>
              <div style="font-size:11px;color:#9ca3af;margin-bottom:4px">ID ${extId}</div>
              ${sanitaryTxt ? `<div style="font-size:11px;color:#6b7280">${sanitaryTxt}</div>` : ""}
            </div>`).addTo(map);
                            setSelectedObjectRef.current({
                                kind: "plant",
                                label,
                                color,
                                properties: props,
                                coords
                            });
                        }
                    }["EcoAlmatyMap.useCallback[loadLayer]"]);
                    map.on("mouseenter", "plants-combined", {
                        "EcoAlmatyMap.useCallback[loadLayer]": ()=>{
                            map.getCanvas().style.cursor = "pointer";
                        }
                    }["EcoAlmatyMap.useCallback[loadLayer]"]);
                    map.on("mouseleave", "plants-combined", {
                        "EcoAlmatyMap.useCallback[loadLayer]": ()=>{
                            map.getCanvas().style.cursor = "";
                        }
                    }["EcoAlmatyMap.useCallback[loadLayer]"]);
                }
                markLayer(layer.id, layer.label, "done", 0);
                setLoadedLayers({
                    "EcoAlmatyMap.useCallback[loadLayer]": (prev)=>new Set([
                            ...prev,
                            layer.id
                        ])
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
                return;
            }
            if (!layer.endpoint) return;
            markLayer(layer.id, layer.label, "loading");
            beginLoad();
            let features = [];
            let kb = 0;
            let cached = false;
            try {
                const res = await fetchAll(layer.endpoint, layer.kind);
                features = res.features;
                kb = res.kb;
                cached = res.cached;
            } finally{
                endLoad();
            }
            markLayer(layer.id, layer.label, cached ? "cached" : "done", kb);
            if (!features.length) {
                setLoadedLayers({
                    "EcoAlmatyMap.useCallback[loadLayer]": (prev)=>new Set([
                            ...prev,
                            layer.id
                        ])
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
                return;
            }
            const sourceId = `src-${layer.id}`;
            if (!map.getSource(sourceId)) {
                map.addSource(sourceId, {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features
                    },
                    ...layer.kind === "point" ? {
                        cluster: true,
                        clusterMaxZoom: 14,
                        clusterRadius: 40
                    } : {}
                });
            }
            const initVis = visibleLayersRef.current.has(layer.id) ? "visible" : "none";
            if (layer.kind === "fill") {
                map.addLayer({
                    id: layer.id,
                    type: "fill",
                    source: sourceId,
                    layout: {
                        visibility: initVis
                    },
                    paint: {
                        "fill-color": layer.color,
                        "fill-opacity": 0.4,
                        "fill-outline-color": layer.color
                    }
                });
            } else if (layer.kind === "line") {
                map.addLayer({
                    id: layer.id,
                    type: "line",
                    source: sourceId,
                    layout: {
                        visibility: initVis
                    },
                    paint: {
                        "line-color": layer.color,
                        "line-width": 1.5,
                        "line-opacity": 0.8
                    }
                });
            } else {
                // Point layer
                map.addLayer({
                    id: `${layer.id}-clusters`,
                    type: "circle",
                    source: sourceId,
                    filter: [
                        "has",
                        "point_count"
                    ],
                    layout: {
                        visibility: initVis
                    },
                    paint: {
                        "circle-color": layer.color,
                        "circle-radius": [
                            "step",
                            [
                                "get",
                                "point_count"
                            ],
                            16,
                            10,
                            22,
                            100,
                            28
                        ],
                        "circle-stroke-width": 2,
                        "circle-stroke-color": "#fff"
                    }
                });
                map.addLayer({
                    id: `${layer.id}-count`,
                    type: "symbol",
                    source: sourceId,
                    filter: [
                        "has",
                        "point_count"
                    ],
                    layout: {
                        visibility: initVis,
                        "text-field": [
                            "get",
                            "point_count_abbreviated"
                        ],
                        "text-size": 11,
                        "text-font": [
                            "DIN Offc Pro Medium",
                            "Arial Unicode MS Bold"
                        ]
                    },
                    paint: {
                        "text-color": "#fff"
                    }
                });
                map.addLayer({
                    id: layer.id,
                    type: "circle",
                    source: sourceId,
                    filter: [
                        "!",
                        [
                            "has",
                            "point_count"
                        ]
                    ],
                    layout: {
                        visibility: initVis
                    },
                    paint: {
                        "circle-color": layer.color,
                        "circle-radius": 6,
                        "circle-stroke-width": 1.5,
                        "circle-stroke-color": "#fff"
                    }
                });
                const isWaste = layer.group === "waste";
                map.on("click", layer.id, {
                    "EcoAlmatyMap.useCallback[loadLayer]": (e)=>{
                        const feat = e.features?.[0];
                        if (!feat) return;
                        const props = feat.properties;
                        const coords = feat.geometry.coordinates;
                        popupRef.current?.remove();
                        if (isWaste) {
                            const extId = str(props.external_id ?? props.id, "—");
                            const addr = str(props.address, "");
                            const dist = str(props.district ?? props.district_name, "");
                            popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                                maxWidth: "240px",
                                closeButton: false,
                                offset: 10
                            }).setLngLat(coords).setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px">
              <div style="display:flex;align-items:center;gap:7px;margin-bottom:6px">
                <span style="width:10px;height:10px;border-radius:50%;background:${layer.color};flex-shrink:0"></span>
                <span style="font-weight:700;font-size:13px;color:#111">${layer.label}</span>
              </div>
              ${addr ? `<div style="font-size:12px;color:#6b7280">${addr}${dist ? ", " + dist : ""}</div>` : ""}
              <div style="font-size:11px;color:#9ca3af;margin-top:3px">ID ${extId}</div>
            </div>`).addTo(map);
                            setSelectedObjectRef.current({
                                kind: "waste",
                                label: layer.label,
                                color: layer.color,
                                properties: props,
                                coords
                            });
                        } else {
                            const rows = Object.entries(props).filter({
                                "EcoAlmatyMap.useCallback[loadLayer].rows": ([, v])=>v !== null && v !== undefined && v !== ""
                            }["EcoAlmatyMap.useCallback[loadLayer].rows"]).slice(0, 8).map({
                                "EcoAlmatyMap.useCallback[loadLayer].rows": ([k, v])=>`<tr><td style="color:#666;padding:2px 8px 2px 0;font-size:12px">${k}</td><td style="font-weight:600;color:#111;font-size:12px">${String(v)}</td></tr>`
                            }["EcoAlmatyMap.useCallback[loadLayer].rows"]).join("");
                            popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                                maxWidth: "300px"
                            }).setLngLat(coords).setHTML(`<div style="font-family:Inter,sans-serif;padding:4px">
              <div style="font-weight:700;margin-bottom:6px;color:${layer.color}">${layer.label}</div>
              <table style="border-collapse:collapse">${rows || "<tr><td style='color:#9ca3af'>—</td></tr>"}</table>
            </div>`).addTo(map);
                        }
                    }
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
                map.on("mouseenter", layer.id, {
                    "EcoAlmatyMap.useCallback[loadLayer]": ()=>{
                        map.getCanvas().style.cursor = "pointer";
                    }
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
                map.on("mouseleave", layer.id, {
                    "EcoAlmatyMap.useCallback[loadLayer]": ()=>{
                        map.getCanvas().style.cursor = "";
                    }
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
                map.on("click", `${layer.id}-clusters`, {
                    "EcoAlmatyMap.useCallback[loadLayer]": (e)=>{
                        const feat = e.features?.[0];
                        if (!feat) return;
                        const src = map.getSource(sourceId);
                        src.getClusterExpansionZoom(feat.properties.cluster_id, {
                            "EcoAlmatyMap.useCallback[loadLayer]": (err, zoom)=>{
                                if (err) return;
                                map.easeTo({
                                    center: feat.geometry.coordinates,
                                    zoom: zoom
                                });
                            }
                        }["EcoAlmatyMap.useCallback[loadLayer]"]);
                    }
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
            }
            if (layer.kind !== "point") {
                map.on("click", layer.id, {
                    "EcoAlmatyMap.useCallback[loadLayer]": (e)=>{
                        const feat = e.features?.[0];
                        if (!feat) return;
                        const props = feat.properties;
                        const rows = Object.entries(props).filter({
                            "EcoAlmatyMap.useCallback[loadLayer].rows": ([, v])=>v !== null && v !== undefined && v !== ""
                        }["EcoAlmatyMap.useCallback[loadLayer].rows"]).slice(0, 8).map({
                            "EcoAlmatyMap.useCallback[loadLayer].rows": ([k, v])=>`<tr><td style="color:#666;padding:2px 8px 2px 0;font-size:12px">${k}</td><td style="font-weight:600;color:#111;font-size:12px">${String(v)}</td></tr>`
                        }["EcoAlmatyMap.useCallback[loadLayer].rows"]).join("");
                        popupRef.current?.remove();
                        popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                            maxWidth: "300px"
                        }).setLngLat(e.lngLat).setHTML(`<div style="font-family:Inter,sans-serif;padding:4px">
            <div style="font-weight:700;margin-bottom:6px;color:${layer.color}">${layer.label}</div>
            <table style="border-collapse:collapse">${rows || "<tr><td style='color:#9ca3af'>—</td></tr>"}</table>
          </div>`).addTo(map);
                    }
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
            }
            setLoadedLayers({
                "EcoAlmatyMap.useCallback[loadLayer]": (prev)=>new Set([
                        ...prev,
                        layer.id
                    ])
            }["EcoAlmatyMap.useCallback[loadLayer]"]);
        }
    }["EcoAlmatyMap.useCallback[loadLayer]"], [
        loadedLayers,
        beginLoad,
        endLoad,
        markLayer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            const map = mapRef.current;
            if (!map) return;
            if (map.getLayer("plants-combined")) {
                const visibleTypes = LAYERS.filter({
                    "EcoAlmatyMap.useEffect.visibleTypes": (l)=>"plantTiles" in l && visibleLayers.has(l.id)
                }["EcoAlmatyMap.useEffect.visibleTypes"]).map({
                    "EcoAlmatyMap.useEffect.visibleTypes": (l)=>l.plantType
                }["EcoAlmatyMap.useEffect.visibleTypes"]);
                map.setFilter("plants-combined", visibleTypes.length > 0 ? [
                    "in",
                    [
                        "get",
                        "plant_type"
                    ],
                    [
                        "literal",
                        visibleTypes
                    ]
                ] : [
                    "literal",
                    false
                ]);
            }
            LAYERS.forEach({
                "EcoAlmatyMap.useEffect": (layer)=>{
                    if ("plantTiles" in layer && layer.plantTiles) {
                        if (!loadedLayers.has(layer.id)) {
                            if (map.isStyleLoaded()) loadLayer(layer);
                            else map.once("load", {
                                "EcoAlmatyMap.useEffect": ()=>loadLayer(layer)
                            }["EcoAlmatyMap.useEffect"]);
                        }
                        return;
                    }
                    const vis = visibleLayers.has(layer.id) ? "visible" : "none";
                    const ids = layer.kind === "point" ? [
                        layer.id,
                        `${layer.id}-clusters`,
                        `${layer.id}-count`
                    ] : [
                        layer.id
                    ];
                    ids.forEach({
                        "EcoAlmatyMap.useEffect": (id)=>{
                            if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis);
                        }
                    }["EcoAlmatyMap.useEffect"]);
                    if (!loadedLayers.has(layer.id)) {
                        if (map.isStyleLoaded()) loadLayer(layer);
                        else map.once("load", {
                            "EcoAlmatyMap.useEffect": ()=>loadLayer(layer)
                        }["EcoAlmatyMap.useEffect"]);
                    }
                }
            }["EcoAlmatyMap.useEffect"]);
        }
    }["EcoAlmatyMap.useEffect"], [
        visibleLayers,
        loadedLayers,
        loadLayer
    ]);
    const closeDrawer = ()=>{
        setSelectedObject(null);
        setFullDetail(null);
        popupRef.current?.remove();
        setDrawerView("passport");
    };
    const isDrawerOpen = selectedObject !== null;
    const extId = str(selectedObject?.properties?.external_id ?? selectedObject?.properties?.id, "—");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 812,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 28,
                    left: 16,
                    zIndex: 40,
                    transition: "opacity 0.2s",
                    opacity: isDrawerOpen ? 0 : 1,
                    pointerEvents: isDrawerOpen ? "none" : "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowStandaloneReport(true),
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 18px",
                        borderRadius: 10,
                        border: "none",
                        background: "#16a34a",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 13,
                        cursor: "pointer",
                        fontFamily: "Inter,sans-serif",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.25)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 833,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 832,
                            columnNumber: 11
                        }, this),
                        "Подать обращение"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 822,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 816,
                columnNumber: 7
            }, this),
            showStandaloneReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 60,
                    display: "flex",
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 380,
                        height: "100%",
                        background: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
                        fontFamily: "Inter,sans-serif"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "14px 18px",
                                borderBottom: "1px solid #e5e7eb",
                                background: "#f9fafb",
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: "#111"
                                            },
                                            children: "Подать обращение"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 845,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowStandaloneReport(false),
                                            style: {
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                fontSize: 16,
                                                color: "#9ca3af",
                                                lineHeight: 1
                                            },
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 846,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 844,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: "#9ca3af",
                                        marginTop: 4
                                    },
                                    children: "Сообщите о проблеме на карте"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 849,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 843,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportForm, {
                            onClose: ()=>setShowStandaloneReport(false)
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 851,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 842,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 841,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: 380,
                    zIndex: 50,
                    transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
                    background: "#fff",
                    boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "Inter,sans-serif",
                    overflow: "hidden",
                    pointerEvents: isDrawerOpen ? "auto" : "none"
                },
                children: selectedObject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "14px 18px 0",
                                borderBottom: "1px solid #e5e7eb",
                                background: "#f9fafb",
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                                minWidth: 0
                                            },
                                            children: drawerView === "report" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setDrawerView("passport"),
                                                style: {
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: "4px 6px",
                                                    borderRadius: 6,
                                                    color: "#6b7280",
                                                    fontSize: 13,
                                                    fontFamily: "Inter,sans-serif",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: "← Назад"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 879,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: 13,
                                                            height: 13,
                                                            borderRadius: "50%",
                                                            background: selectedObject.color,
                                                            flexShrink: 0,
                                                            boxShadow: "0 0 0 2px rgba(0,0,0,0.08)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 15,
                                                                    fontWeight: 700,
                                                                    color: "#111",
                                                                    lineHeight: 1.2,
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis",
                                                                    whiteSpace: "nowrap"
                                                                },
                                                                children: selectedObject.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 889,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: "#9ca3af",
                                                                    marginTop: 2
                                                                },
                                                                children: [
                                                                    "ID ",
                                                                    extId
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 892,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 877,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeDrawer,
                                            style: {
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: "4px 6px",
                                                borderRadius: 6,
                                                color: "#9ca3af",
                                                fontSize: 16,
                                                lineHeight: 1,
                                                flexShrink: 0
                                            },
                                            "aria-label": "Закрыть",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 897,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 876,
                                    columnNumber: 15
                                }, this),
                                drawerView === "passport" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        paddingBottom: 8
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: selectedObject.kind === "plant" ? "#16a34a" : "#f97316",
                                            borderBottom: `2px solid ${selectedObject.kind === "plant" ? "#16a34a" : "#f97316"}`,
                                            paddingBottom: 6,
                                            display: "inline-block"
                                        },
                                        children: "Паспорт объекта"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 906,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 905,
                                    columnNumber: 17
                                }, this),
                                drawerView === "report" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "#111",
                                        paddingBottom: 10
                                    },
                                    children: "Оставить обращение"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 916,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 872,
                            columnNumber: 13
                        }, this),
                        drawerView === "report" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportForm, {
                            extId: extId,
                            typeName: selectedObject.label,
                            coords: selectedObject.coords,
                            onClose: ()=>setDrawerView("passport")
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 924,
                            columnNumber: 15
                        }, this),
                        drawerView === "passport" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                selectedObject.kind === "plant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlantPassport, {
                                    properties: selectedObject.properties,
                                    fullDetail: fullDetail
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 936,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WastePassport, {
                                    label: selectedObject.label,
                                    properties: selectedObject.properties
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 938,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderTop: "1px solid #e5e7eb",
                                        padding: "12px 16px",
                                        display: "flex",
                                        gap: 8,
                                        flexShrink: 0,
                                        background: "#fff"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                flex: 1,
                                                padding: "9px 0",
                                                borderRadius: 8,
                                                fontSize: 13,
                                                fontWeight: 500,
                                                border: "1px solid #e5e7eb",
                                                background: "#f9fafb",
                                                color: "#9ca3af",
                                                cursor: "not-allowed",
                                                fontFamily: "Inter,sans-serif"
                                            },
                                            children: "Редактировать"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 946,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setDrawerView("report"),
                                            style: {
                                                flex: 1,
                                                padding: "9px 0",
                                                borderRadius: 8,
                                                fontSize: 13,
                                                fontWeight: 600,
                                                border: "none",
                                                background: selectedObject.kind === "plant" ? "#16a34a" : "#f97316",
                                                color: "#fff",
                                                cursor: "pointer",
                                                fontFamily: "Inter,sans-serif"
                                            },
                                            children: "Оставить обращение"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 951,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 941,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 857,
                columnNumber: 7
            }, this),
            globalLoading && (()=>{
                const entries = Object.values(layerProgress);
                const total = entries.length;
                const done = entries.filter((e)=>e.status === "done" || e.status === "cached").length;
                const pct = total > 0 ? Math.round(done / total * 100) : 0;
                const totalKb = entries.reduce((s, e)=>s + e.kb, 0);
                const totalMb = (totalKb / 1024).toFixed(1);
                const activeLabel = entries.find((e)=>e.status === "loading")?.label ?? "Инициализация карты…";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 100,
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Inter,sans-serif"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "rgba(17,24,39,0.92)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 16,
                            padding: "28px 32px",
                            width: 340,
                            boxShadow: "0 24px 64px rgba(0,0,0,0.5)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14,
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                            border: "3px solid rgba(255,255,255,0.12)",
                                            borderTopColor: "#16a34a",
                                            animation: "spin 0.8s linear infinite"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 991,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    color: "#f9fafb"
                                                },
                                                children: "Загрузка карты"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 998,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: "#9ca3af",
                                                    marginTop: 2
                                                },
                                                children: activeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 999,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 997,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 990,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "rgba(255,255,255,0.08)",
                                    borderRadius: 99,
                                    height: 6,
                                    overflow: "hidden",
                                    marginBottom: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: "100%",
                                        borderRadius: 99,
                                        background: "#16a34a",
                                        width: `${pct}%`,
                                        transition: "width 0.4s ease"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1003,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1002,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: 11,
                                    color: "#6b7280",
                                    marginBottom: entries.length > 0 ? 16 : 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            done,
                                            " / ",
                                            total,
                                            " слоёв"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            pct,
                                            "%",
                                            totalKb > 0 ? ` · ${totalMb} МБ` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1008,
                                columnNumber: 15
                            }, this),
                            entries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 5,
                                    maxHeight: 200,
                                    overflowY: "auto"
                                },
                                children: entries.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    flexShrink: 0,
                                                    width: 14,
                                                    textAlign: "center"
                                                },
                                                children: e.status === "loading" ? "⏳" : e.status === "cached" ? "⚡" : e.status === "done" ? "✓" : "○"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    flex: 1,
                                                    color: e.status === "loading" ? "#f9fafb" : "#6b7280",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: e.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1019,
                                                columnNumber: 23
                                            }, this),
                                            e.kb > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    color: "#4b5563",
                                                    flexShrink: 0
                                                },
                                                children: e.kb >= 1024 ? `${(e.kb / 1024).toFixed(1)} МБ` : `${e.kb} КБ`
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1025,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, e.label, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1013,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 984,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 977,
                    columnNumber: 11
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 811,
        columnNumber: 5
    }, this);
}
_s1(EcoAlmatyMap, "TaYM4VAInLU0jRzPRW6n59GBZVA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c6 = EcoAlmatyMap;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "PassportSection");
__turbopack_context__.k.register(_c1, "PhotoPlaceholder");
__turbopack_context__.k.register(_c2, "FormField");
__turbopack_context__.k.register(_c3, "ReportForm");
__turbopack_context__.k.register(_c4, "PlantPassport");
__turbopack_context__.k.register(_c5, "WastePassport");
__turbopack_context__.k.register(_c6, "EcoAlmatyMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/eco-almaty-analytics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EcoAlmatyAnalytics",
    ()=>EcoAlmatyAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PLANT_TYPE_LABEL = {
    1: "Деревья",
    2: "Кустарники",
    3: "Куртина (дер.)",
    4: "Куртина (куст.)",
    5: "Живая изгородь",
    6: "Цветник",
    7: "Газон",
    8: "Лиана"
};
const TYPE_COLOR = {
    1: "#15803d",
    2: "#4ade80",
    3: "#166534",
    4: "#86efac",
    5: "#22c55e",
    6: "#f472b6",
    7: "#a3e635",
    8: "#84cc16"
};
const SANITARY_LABEL = {
    1: "Здоровые (КСО-1)",
    2: "Ослабленные (КСО-2)",
    3: "Угнетённые (КСО-3)",
    4: "Усыхающие (КСО-4)",
    5: "Сухостой (КСО-5)",
    6: "Аварийное (КСО-5)",
    7: "Хорошее (КСО-2)"
};
const SANITARY_COLOR = {
    1: "#16a34a",
    2: "#22c55e",
    3: "#ca8a04",
    4: "#ea580c",
    5: "#78716c",
    6: "#b91c1c",
    7: "#4ade80"
};
function fmt(n) {
    return n.toLocaleString("ru-RU");
}
function KpiCard({ label, value, sub, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-4 flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold",
                style: {
                    color: color ?? "var(--foreground)"
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: sub
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 47,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-analytics.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c = KpiCard;
const CustomTooltip = ({ active, payload })=>{
    if (!active || !payload?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card border border-border rounded-lg px-3 py-2 text-sm shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold text-foreground",
                children: payload[0].name
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted-foreground",
                children: fmt(payload[0].value)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-analytics.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = CustomTooltip;
function EcoAlmatyAnalytics() {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = (refresh = false)=>{
        if (refresh) setRefreshing(true);
        else setLoading(true);
        setError(false);
        fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/eco-green/plants/stats/${refresh ? "?refresh=1" : ""}`).then((r)=>r.ok ? r.json() : Promise.reject()).then((d)=>{
            setStats(d);
            setLoading(false);
            setRefreshing(false);
        }).catch(()=>{
            setError(true);
            setLoading(false);
            setRefreshing(false);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyAnalytics.useEffect": ()=>{
            load();
        }
    }["EcoAlmatyAnalytics.useEffect"], []); // eslint-disable-line react-hooks/exhaustive-deps
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center gap-3 text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-5 h-5 rounded-full border-2 border-border border-t-green-500 animate-spin"
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            "Загрузка статистики…"
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-analytics.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
    if (error || !stats) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center text-muted-foreground",
        children: "Не удалось загрузить данные"
    }, void 0, false, {
        fileName: "[project]/components/eco-almaty-analytics.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
    const healthy = stats.bySanitary.find((r)=>r.id === 1)?.count ?? 0;
    const atRisk = stats.bySanitary.filter((r)=>r.id >= 4).reduce((s, r)=>s + r.count, 0);
    const healthyPct = stats.total > 0 ? Math.round(healthy / stats.total * 100) : 0;
    const pieData = stats.bySanitary.map((r)=>({
            name: SANITARY_LABEL[r.id] ?? `КСО-${r.id}`,
            value: r.count,
            color: SANITARY_COLOR[r.id] ?? "#6b7280"
        }));
    const barTypeData = stats.byType.map((r)=>({
            name: PLANT_TYPE_LABEL[r.type] ?? `Тип ${r.type}`,
            value: r.count,
            color: TYPE_COLOR[r.type] ?? "#16a34a"
        })).sort((a, b)=>b.value - a.value);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto bg-background px-6 py-5 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-semibold text-foreground",
                                children: "Зелёные насаждения — аналитика"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground mt-0.5",
                                children: [
                                    "Данные от ",
                                    new Date(stats.cachedAt).toLocaleString("ru-RU"),
                                    " · обновляются раз в час"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>load(true),
                        disabled: refreshing,
                        className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted transition-colors disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "13",
                                height: "13",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: refreshing ? "animate-spin" : "",
                                style: {
                                    color: "var(--muted-foreground)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M23 4v6h-6M1 20v-6h6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            refreshing ? "Обновление…" : "Обновить кеш"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Всего насаждений",
                        value: fmt(stats.total),
                        sub: "в базе данных",
                        color: "#16a34a"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Здоровые (КСО-1)",
                        value: fmt(healthy),
                        sub: `${healthyPct}% от общего`,
                        color: "#16a34a"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Под угрозой (КСО 4–6)",
                        value: fmt(atRisk),
                        sub: "усыхающие + аварийные",
                        color: "#ea580c"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Краснокнижных",
                        value: fmt(stats.redbook),
                        color: "#dc2626"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Хвойных",
                        value: fmt(stats.pine),
                        color: "#0891b2"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-foreground mb-4",
                                children: "Санитарное состояние"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: 180,
                                        height: 180,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: pieData,
                                                    dataKey: "value",
                                                    cx: "50%",
                                                    cy: "50%",
                                                    innerRadius: 52,
                                                    outerRadius: 82,
                                                    paddingAngle: 2,
                                                    strokeWidth: 0,
                                                    children: pieData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                            fill: entry.color
                                                        }, i, false, {
                                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 46
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 35
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-2",
                                        children: pieData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2.5 h-2.5 rounded-full shrink-0",
                                                                style: {
                                                                    background: entry.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-foreground truncate",
                                                                children: entry.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-foreground shrink-0",
                                                        children: fmt(entry.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-foreground mb-4",
                                children: "По типу насаждений"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 220,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: barTypeData,
                                    layout: "vertical",
                                    margin: {
                                        left: 8,
                                        right: 16,
                                        top: 0,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            horizontal: false,
                                            stroke: "var(--border)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            type: "number",
                                            tickFormatter: (v)=>(v / 1000).toFixed(0) + "k",
                                            tick: {
                                                fontSize: 11,
                                                fill: "var(--muted-foreground)"
                                            },
                                            axisLine: false,
                                            tickLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                            type: "category",
                                            dataKey: "name",
                                            width: 110,
                                            tick: {
                                                fontSize: 11,
                                                fill: "var(--muted-foreground)"
                                            },
                                            axisLine: false,
                                            tickLine: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                lineNumber: 185,
                                                columnNumber: 33
                                            }, void 0),
                                            cursor: {
                                                fill: "rgba(255,255,255,0.04)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "value",
                                            radius: [
                                                0,
                                                4,
                                                4,
                                                0
                                            ],
                                            maxBarSize: 18,
                                            children: barTypeData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: entry.color
                                                }, i, false, {
                                                    fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 48
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-analytics.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-foreground mb-4",
                        children: "Распределение по санитарному состоянию"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-10 rounded-lg overflow-hidden gap-px",
                        children: pieData.map((entry, i)=>{
                            const pct = entry.value / stats.total * 100;
                            return pct > 0.3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: `${pct}%`,
                                    background: entry.color
                                },
                                title: `${entry.name}: ${fmt(entry.value)} (${pct.toFixed(1)}%)`,
                                className: "relative group flex-shrink-0",
                                children: pct > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold",
                                    children: [
                                        pct.toFixed(1),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-analytics.tsx",
                                    lineNumber: 205,
                                    columnNumber: 19
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this) : null;
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-x-4 gap-y-1 mt-3",
                        children: pieData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-sm",
                                        style: {
                                            background: entry.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    entry.name
                                ]
                            }, i, true, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-analytics.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(EcoAlmatyAnalytics, "GfdxVxmqwhex8iTOPODl5Fkg6m8=");
_c2 = EcoAlmatyAnalytics;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "KpiCard");
__turbopack_context__.k.register(_c1, "CustomTooltip");
__turbopack_context__.k.register(_c2, "EcoAlmatyAnalytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/eco-almaty/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EcoAlmatyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-almaty-map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$analytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-almaty-analytics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-client] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const EcoAlmatyMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/eco-almaty-map.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>({
            default: m.EcoAlmatyMap
        })), {
    loadableGenerated: {
        modules: [
            "[project]/components/eco-almaty-map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = EcoAlmatyMap;
function MapSearch({ onSelect }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapSearch.useEffect": ()=>{
            if (!query.trim()) {
                setResults([]);
                setOpen(false);
                return;
            }
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout({
                "MapSearch.useEffect": async ()=>{
                    const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
                    const enc = encodeURIComponent(query);
                    try {
                        const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${enc}.json?access_token=${token}&proximity=76.945,43.238&country=kz&language=ru&limit=6`);
                        if (!res.ok) return;
                        const data = await res.json();
                        setResults(data.features ?? []);
                        setOpen(true);
                    } catch  {}
                }
            }["MapSearch.useEffect"], 350);
        }
    }["MapSearch.useEffect"], [
        query
    ]);
    const pick = (r)=>{
        onSelect(r.center);
        setQuery(r.place_name.split(",")[0]);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: 320
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    padding: "7px 12px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 15,
                        color: "#9ca3af"
                    }, void 0, false, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "Поиск адреса в Алматы…",
                        style: {
                            flex: 1,
                            border: "none",
                            outline: "none",
                            fontSize: 13,
                            color: "#111",
                            background: "transparent",
                            fontFamily: "Inter,sans-serif"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setQuery("");
                            setResults([]);
                            setOpen(false);
                        },
                        style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            color: "#9ca3af",
                            display: "flex"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/app/eco-almaty/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            open && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    left: 0,
                    right: 0,
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: 10,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
                    overflow: "hidden",
                    zIndex: 200
                },
                children: results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>pick(r),
                        style: {
                            width: "100%",
                            textAlign: "left",
                            padding: "9px 14px",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            fontSize: 13,
                            color: "#111",
                            borderBottom: i < results.length - 1 ? "1px solid #f3f4f6" : "none",
                            fontFamily: "Inter,sans-serif",
                            display: "block"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = "#f9fafb";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = "none";
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 500
                                },
                                children: r.place_name.split(",")[0]
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: "#9ca3af",
                                    marginTop: 2
                                },
                                children: r.place_name.split(",").slice(1).join(",").trim()
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/eco-almaty/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(MapSearch, "M3C7JJb0RpGMh/7T8+aHAE5erO0=");
_c1 = MapSearch;
const GROUP_META = {
    water: {
        label: "Водные объекты",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        color: "#3b82f6"
    },
    fountain: {
        label: "Фонтаны",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        color: "#06d6a0"
    },
    waste: {
        label: "Отходы",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
        color: "#f97316"
    },
    green: {
        label: "Зелёные насаждения",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        color: "#16a34a"
    }
};
const MODULE_TABS = [
    {
        key: "green",
        label: "Зеленые насаждения",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        group: "green",
        hasAnalytics: true
    },
    {
        key: "water",
        label: "Водные объекты",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        group: "water"
    },
    {
        key: "fountain",
        label: "Фонтаны",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        group: "fountain"
    },
    {
        key: "waste",
        label: "Отходы",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
        group: "waste"
    }
];
function EcoAlmatyPage() {
    _s1();
    const [activeModule, setActiveModule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("green");
    const [subTab, setSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("map");
    const [centerCoords, setCenterCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleLayers, setVisibleLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EcoAlmatyPage.useState": ()=>new Set(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYERS"].filter({
                "EcoAlmatyPage.useState": (l)=>l.group === "green"
            }["EcoAlmatyPage.useState"]).map({
                "EcoAlmatyPage.useState": (l)=>l.id
            }["EcoAlmatyPage.useState"]))
    }["EcoAlmatyPage.useState"]);
    const currentModule = MODULE_TABS.find((m)=>m.key === activeModule);
    const activeGroup = currentModule.group;
    const [openGroups, setOpenGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([
        "water",
        "fountain",
        "waste",
        "green"
    ]));
    const toggleLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyPage.useCallback[toggleLayer]": (id)=>{
            setVisibleLayers({
                "EcoAlmatyPage.useCallback[toggleLayer]": (prev)=>{
                    const next = new Set(prev);
                    next.has(id) ? next.delete(id) : next.add(id);
                    return next;
                }
            }["EcoAlmatyPage.useCallback[toggleLayer]"]);
        }
    }["EcoAlmatyPage.useCallback[toggleLayer]"], []);
    const toggleGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyPage.useCallback[toggleGroup]": (g)=>{
            setOpenGroups({
                "EcoAlmatyPage.useCallback[toggleGroup]": (prev)=>{
                    const next = new Set(prev);
                    next.has(g) ? next.delete(g) : next.add(g);
                    return next;
                }
            }["EcoAlmatyPage.useCallback[toggleGroup]"]);
        }
    }["EcoAlmatyPage.useCallback[toggleGroup]"], []);
    const toggleAllInGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyPage.useCallback[toggleAllInGroup]": (g)=>{
            const ids = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYERS"].filter({
                "EcoAlmatyPage.useCallback[toggleAllInGroup].ids": (l)=>l.group === g
            }["EcoAlmatyPage.useCallback[toggleAllInGroup].ids"]).map({
                "EcoAlmatyPage.useCallback[toggleAllInGroup].ids": (l)=>l.id
            }["EcoAlmatyPage.useCallback[toggleAllInGroup].ids"]);
            const allVisible = ids.every({
                "EcoAlmatyPage.useCallback[toggleAllInGroup].allVisible": (id)=>visibleLayers.has(id)
            }["EcoAlmatyPage.useCallback[toggleAllInGroup].allVisible"]);
            setVisibleLayers({
                "EcoAlmatyPage.useCallback[toggleAllInGroup]": (prev)=>{
                    const next = new Set(prev);
                    allVisible ? ids.forEach({
                        "EcoAlmatyPage.useCallback[toggleAllInGroup]": (id)=>next.delete(id)
                    }["EcoAlmatyPage.useCallback[toggleAllInGroup]"]) : ids.forEach({
                        "EcoAlmatyPage.useCallback[toggleAllInGroup]": (id)=>next.add(id)
                    }["EcoAlmatyPage.useCallback[toggleAllInGroup]"]);
                    return next;
                }
            }["EcoAlmatyPage.useCallback[toggleAllInGroup]"]);
        }
    }["EcoAlmatyPage.useCallback[toggleAllInGroup]"], [
        visibleLayers
    ]);
    const switchModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyPage.useCallback[switchModule]": (key)=>{
            setActiveModule(key);
            setSubTab("map");
            const mod = MODULE_TABS.find({
                "EcoAlmatyPage.useCallback[switchModule].mod": (m)=>m.key === key
            }["EcoAlmatyPage.useCallback[switchModule].mod"]);
            const groupIds = mod.group ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYERS"].filter({
                "EcoAlmatyPage.useCallback[switchModule]": (l)=>l.group === mod.group
            }["EcoAlmatyPage.useCallback[switchModule]"]).map({
                "EcoAlmatyPage.useCallback[switchModule]": (l)=>l.id
            }["EcoAlmatyPage.useCallback[switchModule]"]) : [];
            setVisibleLayers(new Set(groupIds));
        }
    }["EcoAlmatyPage.useCallback[switchModule]"], []);
    const groups = Object.keys(GROUP_META).map((g)=>({
            key: g,
            ...GROUP_META[g],
            layers: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYERS"].filter((l)=>l.group === g)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen overflow-hidden bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderMenu"], {}, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-0 px-4 border-b border-border bg-card shrink-0 overflow-x-auto",
                children: MODULE_TABS.map(({ key, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>switchModule(key),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-4 py-2.5 text-sm border-b-2 transition-colors whitespace-nowrap shrink-0", activeModule === key ? "border-green-600 text-green-700 dark:text-green-400 font-medium" : "border-transparent text-muted-foreground hover:text-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            label
                        ]
                    }, key, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            subTab === "analytics" && currentModule.hasAnalytics ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$analytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EcoAlmatyAnalytics"], {}, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-64 shrink-0 border-r border-border bg-card flex flex-col overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pt-3 pb-0 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-semibold text-foreground",
                                            children: "Слои"
                                        }, void 0, false, {
                                            fileName: "[project]/app/eco-almaty/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    currentModule.hasAnalytics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-0 mb-0",
                                        children: [
                                            "map",
                                            "analytics"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSubTab(t),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-1.5 text-xs border-b-2 transition-colors", subTab === t ? "border-green-600 text-green-700 dark:text-green-400 font-medium" : "border-transparent text-muted-foreground hover:text-foreground"),
                                                children: t === "map" ? "Карта" : "Аналитика"
                                            }, t, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 py-2 overflow-y-auto",
                                children: groups.filter((g)=>g.key === activeGroup).map((group)=>{
                                    const Icon = group.icon;
                                    const isOpen = openGroups.has(group.key);
                                    const allOn = group.layers.every((l)=>visibleLayers.has(l.id));
                                    const anyOn = group.layers.some((l)=>visibleLayers.has(l.id));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3 py-2 hover:bg-muted/50 cursor-pointer select-none",
                                                onClick: ()=>toggleGroup(group.key),
                                                children: [
                                                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "h-3.5 w-3.5 text-muted-foreground shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "h-3.5 w-3.5 text-muted-foreground shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 32
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-4 w-4 shrink-0",
                                                        style: {
                                                            color: group.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium flex-1",
                                                        children: group.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-full border-2 transition-colors shrink-0", allOn ? "border-transparent" : anyOn ? "border-current" : "border-muted-foreground bg-transparent"),
                                                        style: {
                                                            backgroundColor: allOn ? group.color : anyOn ? group.color + "44" : undefined
                                                        },
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            toggleAllInGroup(group.key);
                                                        },
                                                        title: allOn ? "Скрыть все" : "Показать все"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 19
                                            }, this),
                                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-8 pr-3 pb-1 space-y-0.5",
                                                children: group.layers.map((layer)=>{
                                                    const on = visibleLayers.has(layer.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer hover:bg-muted/50 group",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            toggleLayer(layer.id);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: on,
                                                                readOnly: true,
                                                                className: "sr-only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center transition-colors", on ? "border-transparent" : "border-muted-foreground"),
                                                                style: {
                                                                    backgroundColor: on ? layer.color : undefined
                                                                },
                                                                children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block w-1.5 h-1 border-b-2 border-l-2 border-white -rotate-45 -mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 38
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full shrink-0",
                                                                style: {
                                                                    backgroundColor: layer.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs leading-tight", on ? "text-foreground" : "text-muted-foreground"),
                                                                children: layer.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, layer.id, true, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 256,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, group.key, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            subTab === "map" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-t border-border text-xs text-muted-foreground space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-0.5 rounded",
                                                        style: {
                                                            backgroundColor: "#3b82f6"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this),
                                                    "линия — линейный объект"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded opacity-40",
                                                        style: {
                                                            backgroundColor: "#3b82f6"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 19
                                                    }, this),
                                                    "полигон — площадной объект"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full",
                                                        style: {
                                                            backgroundColor: "#06d6a0"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this),
                                                    "точка — точечный объект"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-t border-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearGeoCache"])();
                                                window.location.reload();
                                            },
                                            className: "flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, this),
                                                "Обновить кеш карты"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/eco-almaty/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EcoAlmatyMap, {
                                visibleLayers: visibleLayers,
                                centerCoords: centerCoords
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 12,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 40,
                                    pointerEvents: "auto"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapSearch, {
                                    onSelect: (coords)=>setCenterCoords(coords)
                                }, void 0, false, {
                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/eco-almaty/page.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s1(EcoAlmatyPage, "E2siLzhK8ONQ/b6rmruLNREPdnI=");
_c2 = EcoAlmatyPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EcoAlmatyMap");
__turbopack_context__.k.register(_c1, "MapSearch");
__turbopack_context__.k.register(_c2, "EcoAlmatyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_94410ab4._.js.map