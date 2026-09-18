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
    },
    {
        name: "Вода, фонтаны, отходы",
        href: "/eco-almaty",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
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
"[project]/lib/plantsMvtCache.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Persistent IndexedDB cache for binary MVT plant tiles.
// Tiles are stored as ArrayBuffer keyed by "z/x/y".
// TTL is 7 days — plant data changes rarely.
__turbopack_context__.s([
    "getMvtTile",
    ()=>getMvtTile,
    "saveMvtTile",
    ()=>saveMvtTile
]);
const DB_NAME = "PlantsMvtCache_v1";
const STORE_NAME = "tiles";
const DB_VERSION = 1;
const TTL = 7 * 24 * 60 * 60 * 1000;
function openDB() {
    return new Promise((resolve, reject)=>{
        if (typeof indexedDB === "undefined") {
            reject(new Error("no idb"));
            return;
        }
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onerror = ()=>reject(req.error);
        req.onsuccess = ()=>resolve(req.result);
        req.onupgradeneeded = (e)=>{
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME);
        };
    });
}
async function getMvtTile(key) {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, "readonly");
        const req = tx.objectStore(STORE_NAME).get(key);
        return new Promise((resolve)=>{
            req.onsuccess = ()=>{
                db.close();
                const e = req.result;
                if (!e || Date.now() - e.ts > TTL) {
                    resolve(null);
                    return;
                }
                resolve(e.buf);
            };
            req.onerror = ()=>{
                db.close();
                resolve(null);
            };
        });
    } catch  {
        return null;
    }
}
async function saveMvtTile(key, buf) {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, "readwrite");
        tx.objectStore(STORE_NAME).put({
            ts: Date.now(),
            buf
        }, key);
        await new Promise((resolve, reject)=>{
            tx.oncomplete = ()=>{
                db.close();
                resolve();
            };
            tx.onerror = ()=>reject(tx.error);
        });
    } catch  {}
}
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
    ()=>LAYERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$mapbox$2f$dist$2f$mapbox$2d$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapboxOverlay$3e$__ = __turbopack_context__.i("[project]/node_modules/@deck.gl/mapbox/dist/mapbox-overlay.js [app-client] (ecmascript) <export default as MapboxOverlay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$geo$2d$layers$2f$dist$2f$mvt$2d$layer$2f$mvt$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MVTLayer$3e$__ = __turbopack_context__.i("[project]/node_modules/@deck.gl/geo-layers/dist/mvt-layer/mvt-layer.js [app-client] (ecmascript) <export default as MVTLayer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$layers$2f$dist$2f$scatterplot$2d$layer$2f$scatterplot$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScatterplotLayer$3e$__ = __turbopack_context__.i("[project]/node_modules/@deck.gl/layers/dist/scatterplot-layer/scatterplot-layer.js [app-client] (ecmascript) <export default as ScatterplotLayer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$layers$2f$dist$2f$text$2d$layer$2f$text$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextLayer$3e$__ = __turbopack_context__.i("[project]/node_modules/@deck.gl/layers/dist/text-layer/text-layer.js [app-client] (ecmascript) <export default as TextLayer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plantsMvtCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/plantsMvtCache.ts [app-client] (ecmascript)");
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
;
const API = ("TURBOPACK compile-time value", "http://localhost:8000/api/v1") ?? "https://admin.smartalmaty.kz/api/v1";
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
        id: "plants",
        label: "Деревья и кустарники",
        group: "green",
        color: "#16a34a",
        kind: "point",
        endpoint: "",
        plantTiles: true
    }
];
const GREEN_TREE = [
    22,
    163,
    74,
    220
];
const GREEN_SHRUB = [
    74,
    222,
    128,
    210
];
const GREEN_OTHER = [
    134,
    239,
    172,
    200
];
const WHITE = [
    255,
    255,
    255,
    200
];
function getPlantColor(f) {
    const pt = f.properties?.plant_type;
    return pt === 1 ? GREEN_TREE : pt === 2 ? GREEN_SHRUB : GREEN_OTHER;
}
// Cluster circle colour — darker green for denser clusters
function clusterColor(count) {
    if (count > 100000) return [
        5,
        46,
        22,
        240
    ];
    if (count > 10000) return [
        15,
        118,
        53,
        235
    ];
    if (count > 1000) return [
        22,
        163,
        74,
        230
    ];
    if (count > 100) return [
        34,
        197,
        94,
        225
    ];
    return [
        74,
        222,
        128,
        220
    ];
}
// Cluster circle radius in pixels
function clusterRadius(count) {
    if (count > 100000) return 60;
    if (count > 10000) return 48;
    if (count > 1000) return 36;
    if (count > 100) return 26;
    return 18;
}
// Format large counts: 3100000 → "3.1M", 12500 → "13k", 42 → "42"
function fmtCount(n) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
    return String(n);
}
// Custom fetch that checks IndexedDB first, then fetches from server and caches the result.
// MVTLayer passes every tile URL through this so tiles are only downloaded once.
async function cachedFetch(url, options) {
    const match = url.match(/plants-mvt\/(\d+\/\d+\/\d+)/);
    if (!match) return fetch(url, options);
    const key = match[1];
    const cached = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plantsMvtCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMvtTile"])(key);
    if (cached) {
        return new Response(cached, {
            headers: {
                "Content-Type": "application/x-protobuf"
            }
        });
    }
    const res = await fetch(url, options);
    if (res.ok && res.status !== 204) {
        res.clone().arrayBuffer().then((buf)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plantsMvtCache$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveMvtTile"])(key, buf));
    }
    return res;
}
function makePlantLayer(visible, onClickFeat) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$geo$2d$layers$2f$dist$2f$mvt$2d$layer$2f$mvt$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MVTLayer$3e$__["MVTLayer"]({
        id: "plants-mvt",
        data: `${location.origin}/api/plants-mvt/{z}/{x}/{y}`,
        minZoom: 0,
        maxZoom: 16,
        visible,
        // Intercept HTTP fetch to serve tiles from IndexedDB when available
        loadOptions: {
            fetch: cachedFetch
        },
        renderSubLayers: (props)=>{
            const zoom = props.tile.zoom;
            const data = props.data;
            if (zoom < 13) {
                // Cluster view: coloured circle + count label
                return [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$layers$2f$dist$2f$scatterplot$2d$layer$2f$scatterplot$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScatterplotLayer$3e$__["ScatterplotLayer"]({
                        ...props,
                        id: `${props.id}-cluster-circle`,
                        data,
                        getPosition: (f)=>f.geometry.coordinates,
                        getFillColor: (f)=>clusterColor(f.properties.point_count ?? 1),
                        getRadius: (f)=>clusterRadius(f.properties.point_count ?? 1),
                        radiusUnits: "pixels",
                        stroked: false,
                        pickable: false
                    }),
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$layers$2f$dist$2f$text$2d$layer$2f$text$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextLayer$3e$__["TextLayer"]({
                        ...props,
                        id: `${props.id}-cluster-label`,
                        data,
                        getPosition: (f)=>f.geometry.coordinates,
                        getText: (f)=>fmtCount(f.properties.point_count ?? 1),
                        getSize: 12,
                        getColor: [
                            255,
                            255,
                            255,
                            255
                        ],
                        fontWeight: 700,
                        getTextAnchor: "middle",
                        getAlignmentBaseline: "center",
                        pickable: false
                    })
                ];
            }
            // Individual dot view at z >= 13
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$layers$2f$dist$2f$scatterplot$2d$layer$2f$scatterplot$2d$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScatterplotLayer$3e$__["ScatterplotLayer"]({
                ...props,
                id: `${props.id}-dot`,
                data,
                getPosition: (f)=>f.geometry.coordinates,
                getFillColor: getPlantColor,
                getRadius: 4,
                radiusUnits: "pixels",
                radiusMinPixels: 2,
                radiusMaxPixels: 8,
                stroked: zoom >= 14,
                getLineColor: WHITE,
                lineWidthMinPixels: 0.8,
                pickable: true,
                autoHighlight: true,
                highlightColor: [
                    255,
                    255,
                    255,
                    80
                ],
                onClick: (info)=>{
                    const feat = info.object;
                    if (!feat) return;
                    const coords = feat.geometry.coordinates;
                    onClickFeat({
                        properties: feat.properties ?? {},
                        coordinates: coords
                    });
                }
            });
        }
    });
}
// ── DRF paginated fetch ────────────────────────────────────────────────────
async function fetchAll(endpoint) {
    const results = [];
    let url = `${API}/ecology/${endpoint}/?format=json&limit=500`;
    while(url){
        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(url, {
            headers: {
                Accept: "application/json"
            }
        });
        if (!response.ok) break;
        // eslint-disable-next-line no-await-in-loop
        const payload = await response.json();
        const items = Array.isArray(payload) ? payload : payload.results ?? [];
        for (const item of items){
            const obj = item;
            const rawGeom = obj.centroid ?? obj.geometry;
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
    return results;
}
// ── popup helper ───────────────────────────────────────────────────────────
function makePopupHtml(props, label) {
    const skip = new Set([
        "geometry",
        "centroid",
        "id"
    ]);
    const rows = Object.entries(props).filter(([k, v])=>!skip.has(k) && v !== null && v !== undefined && v !== "").slice(0, 12).map(([k, v])=>`<tr><td style="color:#888;padding:2px 8px 2px 0">${k}</td><td style="font-weight:500">${v}</td></tr>`).join("");
    return `<div style="font-family:Inter,sans-serif;font-size:13px;max-width:260px">
    <div style="font-weight:700;margin-bottom:6px;color:#16a34a">${label}</div>
    <table style="border-collapse:collapse">${rows || "<tr><td>—</td></tr>"}</table>
  </div>`;
}
function EcoAlmatyMap({ visibleLayers }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const deckOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [loadedLayers, setLoadedLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // shared loading overlay — counts in-flight fetches across non-plant layers
    const loadCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [globalLoading, setGlobalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const beginLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[beginLoad]": ()=>{
            loadCountRef.current++;
            setGlobalLoading(true);
        }
    }["EcoAlmatyMap.useCallback[beginLoad]"], []);
    const endLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[endLoad]": ()=>{
            loadCountRef.current = Math.max(0, loadCountRef.current - 1);
            if (loadCountRef.current === 0) setGlobalLoading(false);
        }
    }["EcoAlmatyMap.useCallback[endLoad]"], []);
    // synchronous guard so concurrent loadLayer calls don't double-add layers
    const loadingLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // init map + deck.gl overlay
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
            // deck.gl overlay — interleaved so map labels render above plant dots
            const overlay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deck$2e$gl$2f$mapbox$2f$dist$2f$mapbox$2d$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapboxOverlay$3e$__["MapboxOverlay"]({
                interleaved: true,
                layers: []
            });
            map.addControl(overlay);
            deckOverlay.current = overlay;
            mapRef.current = map;
            return ({
                "EcoAlmatyMap.useEffect": ()=>{
                    overlay.finalize();
                    map.remove();
                    mapRef.current = null;
                    deckOverlay.current = null;
                }
            })["EcoAlmatyMap.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["EcoAlmatyMap.useEffect"], []);
    // keep deck.gl plant layer in sync with visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            const overlay = deckOverlay.current;
            if (!overlay) return;
            if (!loadedLayers.has("plants")) return;
            const plantsLabel = LAYERS.find({
                "EcoAlmatyMap.useEffect": (l)=>l.id === "plants"
            }["EcoAlmatyMap.useEffect"]).label;
            overlay.setProps({
                layers: [
                    makePlantLayer(visibleLayers.has("plants"), {
                        "EcoAlmatyMap.useEffect": ({ properties, coordinates })=>{
                            const map = mapRef.current;
                            if (!map) return;
                            popupRef.current?.remove();
                            popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                                maxWidth: "280px"
                            }).setLngLat(coordinates).setHTML(makePopupHtml(properties, plantsLabel)).addTo(map);
                        }
                    }["EcoAlmatyMap.useEffect"])
                ]
            });
        }
    }["EcoAlmatyMap.useEffect"], [
        visibleLayers,
        loadedLayers
    ]);
    // load & add a single layer
    const loadLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EcoAlmatyMap.useCallback[loadLayer]": async (layer)=>{
            const map = mapRef.current;
            if (!map || !map.isStyleLoaded()) return;
            if (loadedLayers.has(layer.id) || loadingLayers.current.has(layer.id)) return;
            loadingLayers.current.add(layer.id);
            // Plants: deck.gl MVTLayer — WebGL instanced rendering of all 3.1M plants
            if ("plantTiles" in layer && layer.plantTiles) {
                const overlay = deckOverlay.current;
                if (!overlay) return;
                overlay.setProps({
                    layers: [
                        makePlantLayer(visibleLayers.has("plants"), {
                            "EcoAlmatyMap.useCallback[loadLayer]": ({ properties, coordinates })=>{
                                const m = mapRef.current;
                                if (!m) return;
                                popupRef.current?.remove();
                                popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                                    maxWidth: "280px"
                                }).setLngLat(coordinates).setHTML(makePopupHtml(properties, layer.label)).addTo(m);
                            }
                        }["EcoAlmatyMap.useCallback[loadLayer]"])
                    ]
                });
                setLoadedLayers({
                    "EcoAlmatyMap.useCallback[loadLayer]": (prev)=>new Set([
                            ...prev,
                            layer.id
                        ])
                }["EcoAlmatyMap.useCallback[loadLayer]"]);
                return;
            }
            if (!layer.endpoint) return;
            beginLoad();
            let features = [];
            try {
                features = await fetchAll(layer.endpoint);
            } finally{
                endLoad();
            }
            if (!features.length) return;
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
            if (layer.kind === "fill") {
                map.addLayer({
                    id: layer.id,
                    type: "fill",
                    source: sourceId,
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
                    paint: {
                        "line-color": layer.color,
                        "line-width": 1.5,
                        "line-opacity": 0.8
                    }
                });
            } else {
                map.addLayer({
                    id: `${layer.id}-clusters`,
                    type: "circle",
                    source: sourceId,
                    filter: [
                        "has",
                        "point_count"
                    ],
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
                    paint: {
                        "circle-color": layer.color,
                        "circle-radius": 6,
                        "circle-stroke-width": 1.5,
                        "circle-stroke-color": "#fff"
                    }
                });
                map.on("click", layer.id, {
                    "EcoAlmatyMap.useCallback[loadLayer]": (e)=>{
                        const feat = e.features?.[0];
                        if (!feat) return;
                        popupRef.current?.remove();
                        popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                            maxWidth: "300px"
                        }).setLngLat(feat.geometry.coordinates).setHTML(makePopupHtml(feat.properties, layer.label)).addTo(map);
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
                        popupRef.current?.remove();
                        popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Popup({
                            maxWidth: "300px"
                        }).setLngLat(e.lngLat).setHTML(makePopupHtml(feat.properties, layer.label)).addTo(map);
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
        visibleLayers,
        beginLoad,
        endLoad
    ]);
    // toggle layer visibility & trigger load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EcoAlmatyMap.useEffect": ()=>{
            const map = mapRef.current;
            if (!map) return;
            LAYERS.forEach({
                "EcoAlmatyMap.useEffect": (layer)=>{
                    const isPlants = "plantTiles" in layer && layer.plantTiles;
                    if (isPlants) {
                        // visibility handled via deck.gl overlay in the separate useEffect above
                        if (visibleLayers.has(layer.id) && !loadedLayers.has(layer.id)) {
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
                    if (visibleLayers.has(layer.id) && !loadedLayers.has(layer.id)) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            globalLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 100,
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    background: "rgba(0,0,0,0.35)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    cursor: "wait"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
            @keyframes spin  { to { transform: rotate(360deg) } }
            @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
          `
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 56,
                            height: 56,
                            borderRadius: "50%",
                            border: "4px solid rgba(255,255,255,0.15)",
                            borderTopColor: "#16a34a",
                            animation: "spin 0.8s linear infinite"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            color: "#fff",
                            fontFamily: "Inter,sans-serif"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 15,
                                    fontWeight: 600,
                                    letterSpacing: 0.2
                                },
                                children: "Загрузка данных карты"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: "rgba(255,255,255,0.6)",
                                    marginTop: 4,
                                    animation: "pulse 1.5s ease-in-out infinite"
                                },
                                children: "Пожалуйста, подождите…"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 410,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 405,
        columnNumber: 5
    }, this);
}
_s(EcoAlmatyMap, "3TmfXyuweC+BlxlY7xq0xZVISds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = EcoAlmatyMap;
var _c;
__turbopack_context__.k.register(_c, "EcoAlmatyMap");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-almaty-map.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-client] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
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
function EcoAlmatyPage() {
    _s();
    const [visibleLayers, setVisibleLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set([
        "waste-sites",
        "fountains",
        "ponds",
        "lakes",
        "rivers",
        "plants"
    ]));
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
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "w-64 shrink-0 border-r border-border bg-card flex flex-col overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold text-foreground",
                                        children: "Слои"
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-0.5",
                                        children: "Выберите данные для отображения"
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 py-2",
                                children: groups.map((group)=>{
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
                                                        lineNumber: 88,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "h-3.5 w-3.5 text-muted-foreground shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 32
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-4 w-4 shrink-0",
                                                        style: {
                                                            color: group.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium flex-1",
                                                        children: group.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 91,
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
                                                        lineNumber: 93,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-8 pr-3 pb-1 space-y-0.5",
                                                children: group.layers.map((layer)=>{
                                                    const on = visibleLayers.has(layer.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer hover:bg-muted/50 group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: on,
                                                                onChange: ()=>toggleLayer(layer.id),
                                                                className: "sr-only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 112,
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
                                                                    lineNumber: 121,
                                                                    columnNumber: 38
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full shrink-0",
                                                                style: {
                                                                    backgroundColor: layer.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs leading-tight", on ? "text-foreground" : "text-muted-foreground"),
                                                                children: layer.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, layer.id, true, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, group.key, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
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
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            "линия — линейный объект"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
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
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            "полигон — площадной объект"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
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
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            "точка — точечный объект"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EcoAlmatyMap, {
                            visibleLayers: visibleLayers
                        }, void 0, false, {
                            fileName: "[project]/app/eco-almaty/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/eco-almaty/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(EcoAlmatyPage, "Wu+HiBj8ZieOqwiY0Q/JgC9hHx0=");
_c1 = EcoAlmatyPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "EcoAlmatyMap");
__turbopack_context__.k.register(_c1, "EcoAlmatyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0daec4d5._.js.map