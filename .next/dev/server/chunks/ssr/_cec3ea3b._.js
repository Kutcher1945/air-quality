module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
;
}),
"[project]/components/header-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderMenu",
    ()=>HeaderMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
    },
    {
        name: "Чистый город",
        href: "/eco-almaty",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
    },
    {
        name: "Карта зданий без газа",
        href: "/buildings-without-gas",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
    },
    {
        name: "Исходящие звонки",
        href: "/outgoing-calls",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
    }
];
function HeaderMenu() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // next-themes can resolve the real theme before React hydrates, so the client's first
    // render already differs from the light-default SSR markup. Force both to render the
    // same "light" branch until mounted, then swap post-hydration — avoids the mismatch
    // instead of just guessing a default.
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const isDark = mounted && resolvedTheme === "dark";
    const logoSrc = isDark ? "/logo_aqa.png" : "/logo_aqa_dark_letters.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-16 items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex md:items-center md:gap-1",
                            children: menuItems.map((item)=>{
                                const Icon = item.icon;
                                const active = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                      group relative flex items-center gap-2.5 rounded-xl px-4 py-2 text-sm font-medium
                      transition-all duration-200 cursor-pointer select-none
                      ${active ? "bg-foreground text-background shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                    `,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: `h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${active ? "" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/header-menu.tsx",
                                                lineNumber: 57,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/header-menu.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this),
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>setTheme(isDark ? "light" : "dark"),
                                    "aria-label": "Toggle theme",
                                    className: "h-9 w-9 rounded-xl",
                                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header-menu.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        "aria-label": "Toggle menu",
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header-menu.tsx",
                                            lineNumber: 84,
                                            columnNumber: 27
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border py-3 md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: menuItems.map((item)=>{
                            const Icon = item.icon;
                            const active = pathname === item.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `
                        flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200
                        ${active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                      `,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
}),
"[project]/components/eco-almaty-location-picker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationPickerModal",
    ()=>LocationPickerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
"use client";
;
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
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCoords);
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dropOpen, setDropOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // init map + marker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current || mapRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = MAPBOX_TOKEN;
        const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
            container: containerRef.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: initialCoords,
            zoom: 15
        });
        map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].NavigationControl({
            showCompass: false
        }), "top-right");
        const marker = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Marker({
            draggable: true,
            color: "#16a34a"
        }).setLngLat(initialCoords).addTo(map);
        const updatePos = (c)=>{
            setCoords(c);
            geocodeReverse(c).then(setAddress);
        };
        marker.on("dragend", ()=>{
            const { lng, lat } = marker.getLngLat();
            updatePos([
                lng,
                lat
            ]);
        });
        map.on("click", (e)=>{
            const c = [
                e.lngLat.lng,
                e.lngLat.lat
            ];
            marker.setLngLat(c);
            updatePos(c);
        });
        map.on("load", ()=>setLoading(false));
        mapRef.current = map;
        markerRef.current = marker;
        updatePos(initialCoords);
        return ()=>{
            map.remove();
            mapRef.current = null;
            markerRef.current = null;
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // search debounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!searchQuery.trim()) {
            setResults([]);
            setDropOpen(false);
            return;
        }
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(async ()=>{
            try {
                const enc = encodeURIComponent(searchQuery);
                const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${enc}.json?access_token=${MAPBOX_TOKEN}&proximity=76.945,43.238&country=kz&language=ru&limit=5`);
                if (!res.ok) return;
                const data = await res.json();
                setResults(data.features ?? []);
                setDropOpen(true);
            } catch  {}
        }, 350);
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "14px 18px",
                        borderBottom: "1px solid #e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "10px 16px",
                        borderBottom: "1px solid #f3f4f6",
                        position: "relative",
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "#9ca3af",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "13",
                                        height: "13",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "18",
                                                y1: "6",
                                                x2: "6",
                                                y2: "18"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-location-picker.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                        dropOpen && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            children: results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        flex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: "12px 16px",
                        borderTop: "1px solid #e5e7eb",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        flexShrink: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE",
    ()=>API_BASE
]);
const API_BASE = ("TURBOPACK compile-time truthy", 1) ? "http://localhost:8000/api/v1" : "TURBOPACK unreachable";
}),
"[project]/components/eco-almaty-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DISTRICT_COLORS",
    ()=>DISTRICT_COLORS,
    "EcoAlmatyMap",
    ()=>EcoAlmatyMap,
    "LAYERS",
    ()=>LAYERS,
    "clearGeoCache",
    ()=>clearGeoCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$location$2d$picker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-almaty-location-picker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
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
        endpoint: "eco-water/rivers",
        lineTiles: true,
        tileLayerName: "rivers"
    },
    {
        id: "channels",
        label: "Каналы",
        group: "water",
        color: "#0891b2",
        kind: "line",
        endpoint: "eco-water/channels",
        lineTiles: true,
        tileLayerName: "channels"
    },
    {
        id: "ditches",
        label: "Арычная сеть",
        group: "water",
        color: "#06b6d4",
        kind: "line",
        endpoint: "eco-water/ditch-networks",
        lineTiles: true,
        tileLayerName: "ditches"
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
        endpoint: "eco-fountain/fountains"
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
        id: "waste-containers",
        label: "Мусорные контейнеры (2GIS)",
        group: "waste",
        color: "#6b7280",
        kind: "point",
        endpoint: "eco-waste/containers"
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
// ── GeoJSON cache ──────────────────────────────────────────────────────────
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
        return {
            features: hit.features,
            kb: Math.round(JSON.stringify(hit.features).length / 1024),
            cached: true
        };
    }
    try {
        const raw = localStorage.getItem(lsKey);
        if (raw) {
            const stored = JSON.parse(raw);
            if (Date.now() - stored.ts < GEO_TTL) {
                geoCache.set(cacheKey, stored);
                return {
                    features: stored.features,
                    kb: Math.round(raw.length / 1024),
                    cached: true
                };
            }
        }
    } catch  {}
    const results = [];
    let totalBytes = 0;
    let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/${endpoint}/?format=json&limit=500`;
    while(url){
        const pageCtrl = new AbortController();
        const pageTimer = setTimeout(()=>pageCtrl.abort(), 15_000);
        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(url, {
            headers: {
                Accept: "application/json"
            },
            signal: pageCtrl.signal
        }).finally(()=>clearTimeout(pageTimer));
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
// ── Labels ────────────────────────────────────────────────────────────────
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
    return ({
        1: "#16a34a",
        2: "#ca8a04",
        3: "#ea580c",
        4: "#dc2626",
        5: "#78716c",
        6: "#b91c1c",
        7: "#22c55e"
    })[id] ?? "#6b7280";
}
function str(v, fb = "—") {
    if (v === null || v === undefined || v === "") return fb;
    return String(v);
}
// ── Popup field labels (Russian) ──────────────────────────────────────────
const FIELD_LABEL = {
    name: "Название",
    number_code: "Номер",
    external_id: "ID (EcoAlmaty)",
    structure_type: "Тип сооружения",
    belonging: "Принадлежность",
    service_organization: "Обслуживающая орг.",
    district: "Район",
    length: "Длина, км",
    strengthening_type: "Тип укрепления",
    pond_type: "Тип водоёма",
    channel_type: "Тип канала",
    area: "Площадь",
    volume: "Объём",
    depth: "Глубина",
    address: "Адрес",
    description: "Описание"
};
const HIDDEN_FIELDS = new Set([
    "id",
    "created_at",
    "updated_at",
    "centroid",
    "geometry",
    "centroid_id"
]);
function popupRows(props, limit = 8) {
    return Object.entries(props).filter(([k, v])=>!HIDDEN_FIELDS.has(k) && v !== null && v !== undefined && v !== "").slice(0, limit).map(([k, v])=>{
        const label = FIELD_LABEL[k] ?? k.replace(/_/g, " ");
        return `<tr><td style="color:#666;padding:2px 8px 2px 0;font-size:12px;white-space:nowrap">${label}</td><td style="font-weight:600;color:#111;font-size:12px">${String(v)}</td></tr>`;
    }).join("") || "<tr><td style='color:#9ca3af'>—</td></tr>";
}
async function lookupDistrict(lng, lat) {
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/address/districts/by-point/?lat=${lat}&lng=${lng}`);
        if (!res.ok) return "";
        const data = await res.json();
        return data.district ?? "";
    } catch  {
        return "";
    }
}
async function reverseGeocode(lng, lat, token) {
    // Run Mapbox address lookup and PostGIS district lookup in parallel
    const [geoRes, district] = await Promise.all([
        (async ()=>{
            try {
                const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}&language=ru&types=address&country=kz&limit=1`;
                const res = await fetch(url);
                if (!res.ok) return "";
                const data = await res.json();
                return data.features?.[0]?.place_name?.split(",")[0]?.trim() ?? "";
            } catch  {
                return "";
            }
        })(),
        lookupDistrict(lng, lat)
    ]);
    return {
        address: geoRes,
        district
    };
}
// ── UI primitives ─────────────────────────────────────────────────────────
function PassportSection({ title, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "14px 18px",
            borderBottom: "1px solid #f3f4f6"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 190,
                columnNumber: 7
            }, this),
            rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        paddingTop: i > 0 ? 8 : 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13,
                                color: "#6b7280",
                                flexShrink: 0,
                                marginRight: 8
                            },
                            children: row.label
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13,
                                fontWeight: 600,
                                color: row.accent ?? "#111",
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                                textAlign: "right"
                            },
                            children: [
                                row.accent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 195,
                                    columnNumber: 28
                                }, this),
                                row.value
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
function PhotoPlaceholder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                opacity: 0.45,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "13",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12
                },
                children: "Фото отсутствует"
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
function FormField({ label, required, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 14
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#374151",
                    marginBottom: 6
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#dc2626",
                            marginLeft: 3
                        },
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 220,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
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
// ── Report types per group ─────────────────────────────────────────────────
const REPORT_TYPES_GREEN = [
    "Неверное местоположение",
    "Некорректные данные",
    "Изменилось состояние объекта"
];
const REPORT_TYPES_WASTE = [
    "Неверное местоположение",
    "Некорректные данные",
    "Изменилось состояние объекта",
    "Отсутствует объект на карте",
    "Требуется уборка",
    "Другое"
];
// ── Report form ────────────────────────────────────────────────────────────
function ReportForm({ extId, typeName, coords: initialCoords, kind, onClose }) {
    const reportTypes = kind === "waste" ? REPORT_TYPES_WASTE : REPORT_TYPES_GREEN;
    const [reportType, setReportType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [pickedCoords, setPickedCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeCoords = pickedCoords ?? initialCoords;
    if (submitted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#dcfce7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#16a34a",
                    strokeWidth: "2.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "20 6 9 17 4 12"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 260,
                        columnNumber: 104
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 15,
                            fontWeight: 700,
                            color: "#111"
                        },
                        children: "Обращение отправлено"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 13,
                            color: "#6b7280",
                            marginTop: 4
                        },
                        children: "Спасибо! Мы рассмотрим ваше обращение."
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "16px 18px 80px",
                    flex: 1
                },
                children: [
                    (extId || typeName) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 276,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Тип обращения",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: reportType,
                            onChange: (e)=>setReportType(Number(e.target.value)),
                            style: {
                                ...inputStyle,
                                background: "#fff"
                            },
                            children: reportTypes.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: i,
                                    children: t
                                }, i, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 282,
                                    columnNumber: 40
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Описание",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Фото",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "17 8 12 3 7 8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "3",
                                            x2: "12",
                                            y2: "15"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 292,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                "Нажмите для загрузки"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Адрес",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: address,
                            onChange: (e)=>setAddress(e.target.value),
                            placeholder: "Введите адрес",
                            style: inputStyle
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Координаты",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    showPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$location$2d$picker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocationPickerModal"], {
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
                        lineNumber: 309,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "ФИО",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            placeholder: "Имя и фамилия",
                            style: inputStyle
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                        label: "Телефон / Email",
                        required: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: contact,
                            onChange: (e)=>setContact(e.target.value),
                            placeholder: "+7 700 000 0000 или email@mail.ru",
                            style: inputStyle
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 324,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
// ── Plant passport ─────────────────────────────────────────────────────────
function PlantPassport({ properties, fullDetail, geo }) {
    const p = fullDetail ?? properties;
    const isLoading = fullDetail === null;
    const sanitaryId = parseInt(String(p.sanitary_id ?? ""), 10);
    const sanitaryLbl = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] : null;
    const sanitaryClr = !isNaN(sanitaryId) ? sanitaryColor(sanitaryId) : "#6b7280";
    const isRedbook = p.redbook === 1 || p.redbook === true;
    const isPine = p.pine === 1 || p.pine === true;
    const typeName = PLANT_TYPE_LABEL[p.plant_type] ?? str(p.plant_type);
    const address = str(p.address ?? geo?.address);
    const district = str(p.district ?? p.district_name ?? geo?.district);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflowY: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoPlaceholder, {}, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 6,
                    alignItems: "center",
                    padding: "16px 18px",
                    color: "#9ca3af",
                    fontSize: 13
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        lineNumber: 352,
                        columnNumber: 11
                    }, this),
                    "Загрузка…"
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                        title: "Основная информация",
                        rows: [
                            {
                                label: "Тип объекта",
                                value: typeName
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
                        lineNumber: 357,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                        title: "Идентификация",
                        rows: [
                            {
                                label: "ID объекта",
                                value: str(p.external_id ?? p.id)
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
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
                        lineNumber: 365,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                        title: "Состояние",
                        rows: [
                            {
                                label: "Санитарное состояние",
                                value: sanitaryLbl ?? "—",
                                accent: sanitaryLbl ? sanitaryClr : undefined
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                        title: "Дополнительная информация",
                        rows: [
                            {
                                label: "Комментарий",
                                value: str(p.comment)
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, this);
}
// ── Water passport ─────────────────────────────────────────────────────────
function WaterPassport({ label, properties, geo }) {
    const p = properties;
    const name = str(p.name);
    const extId = str(p.external_id ?? p.id);
    const district = str(p.district ?? p.district_name ?? geo?.district);
    const address = str(p.address ?? geo?.address);
    const numberCode = str(p.number_code);
    // per-object-type fields
    const structureType = str(p.structure_type);
    const belonging = str(p.belonging);
    const serviceOrg = str(p.service_organization);
    const landscaping = str(p.landscaping);
    const pondType = str(p.pond_type);
    const channelType = str(p.channel_type);
    const strengtheningType = str(p.strengthening_type);
    const area = p.area != null ? `${p.area} га` : "—";
    const volume = p.volume != null ? `${p.volume} м³` : "—";
    const depthAvg = p.depth_avg != null ? `${p.depth_avg} м` : p.depth != null ? `${p.depth} м` : "—";
    const depthMax = p.depth_max != null ? `${p.depth_max} м` : null;
    const shoreline = p.shoreline_length != null ? `${p.shoreline_length} км` : null;
    const totalLength = p.total_length != null ? `${p.total_length} км` : null;
    const cityLength = p.length_in_city != null ? `${p.length_in_city} км` : null;
    const width = p.width != null ? `${p.width} м` : null;
    const riverCat = str(p.river_category);
    const inflowCat = str(p.inflow_category);
    const riverMouth = str(p.river_mouth);
    const waterObjName = str(p.water_object_name);
    const stripWidth = p.width != null ? `${p.width} м` : null;
    // which sections to show
    const hasArea = p.area != null || p.volume != null || p.depth != null || p.depth_avg != null;
    const hasHydro = structureType !== "—" || belonging !== "—" || serviceOrg !== "—";
    const hasSizes = totalLength != null || cityLength != null || width != null || stripWidth != null || shoreline != null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflowY: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoPlaceholder, {}, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Основная информация",
                rows: [
                    {
                        label: "Тип объекта",
                        value: label
                    },
                    ...pondType !== "—" ? [
                        {
                            label: "Тип водоёма",
                            value: pondType
                        }
                    ] : [],
                    ...channelType !== "—" ? [
                        {
                            label: "Тип канала",
                            value: channelType
                        }
                    ] : [],
                    ...structureType !== "—" ? [
                        {
                            label: "Тип сооружения",
                            value: structureType
                        }
                    ] : [],
                    ...waterObjName !== "—" ? [
                        {
                            label: "Водный объект",
                            value: waterObjName
                        }
                    ] : [],
                    {
                        label: "Название",
                        value: name
                    },
                    {
                        label: "Номер",
                        value: numberCode
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
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Идентификация",
                rows: [
                    {
                        label: "ID объекта",
                        value: extId
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            hasArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Параметры",
                rows: [
                    {
                        label: "Площадь",
                        value: area
                    },
                    {
                        label: "Объём",
                        value: volume
                    },
                    {
                        label: "Глубина",
                        value: depthAvg
                    },
                    ...depthMax ? [
                        {
                            label: "Макс. глубина",
                            value: depthMax
                        }
                    ] : [],
                    ...shoreline ? [
                        {
                            label: "Береговая линия",
                            value: shoreline
                        }
                    ] : []
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 441,
                columnNumber: 9
            }, this),
            hasSizes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Размеры",
                rows: [
                    ...totalLength ? [
                        {
                            label: "Общая длина",
                            value: totalLength
                        }
                    ] : [],
                    ...cityLength ? [
                        {
                            label: "В пределах города",
                            value: cityLength
                        }
                    ] : [],
                    ...width ? [
                        {
                            label: "Ширина",
                            value: width
                        }
                    ] : [],
                    ...inflowCat !== "—" ? [
                        {
                            label: "Категория притока",
                            value: inflowCat
                        }
                    ] : [],
                    ...riverCat !== "—" ? [
                        {
                            label: "Категория реки",
                            value: riverCat
                        }
                    ] : [],
                    ...riverMouth !== "—" ? [
                        {
                            label: "Устье",
                            value: riverMouth
                        }
                    ] : [],
                    ...strengtheningType !== "—" ? [
                        {
                            label: "Тип укрепления",
                            value: strengtheningType
                        }
                    ] : []
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this),
            hasHydro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Организация",
                rows: [
                    {
                        label: "Принадлежность",
                        value: belonging
                    },
                    {
                        label: "Обслуживающая орг.",
                        value: serviceOrg
                    },
                    ...landscaping !== "—" ? [
                        {
                            label: "Благоустройство",
                            value: landscaping
                        }
                    ] : []
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 461,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, this);
}
// ── Waste passport ─────────────────────────────────────────────────────────
function WastePassport({ label, properties, geo }) {
    const p = properties;
    const address = str(p.address ?? geo?.address);
    const district = str(p.district ?? p.district_name ?? geo?.district);
    const collectionType = str(p.type_of_collection ?? p.waste_type ?? p.collection_type ?? p.type);
    const area = p.area != null ? `${p.area} м²` : "—";
    const containerCount = str(p.container_count ?? p.containers_count);
    const material = str(p.container_material ?? p.material);
    const hasRoof = p.has_roof === true || p.has_roof === 1 ? "Да" : p.has_roof === false || p.has_roof === 0 ? "Нет" : "—";
    const kgoZone = str(p.kgo_zone);
    const comment = str(p.comment ?? p.description);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflowY: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoPlaceholder, {}, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
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
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Идентификация",
                rows: [
                    {
                        label: "ID",
                        value: str(p.external_id ?? p.id)
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
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
                        value: material
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
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PassportSection, {
                title: "Дополнительная информация",
                rows: [
                    {
                        label: "Комментарий",
                        value: comment
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
const DISTRICT_COLORS = {
    1: "#6366f1",
    2: "#0ea5e9",
    3: "#10b981",
    4: "#f59e0b",
    5: "#ec4899",
    6: "#14b8a6",
    7: "#8b5cf6",
    8: "#f97316"
};
function districtColor(id) {
    return DISTRICT_COLORS[id] ?? "#94a3b8";
}
function EcoAlmatyMap({ visibleLayers, centerCoords, activeGroup, showDistricts = false, selectedDistrict = null, onDistrictChange, onLayerLoad, onLoadingChange }) {
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [loadedLayers, setLoadedLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visibleLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(visibleLayers);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        visibleLayersRef.current = visibleLayers;
    }, [
        visibleLayers
    ]);
    const selectedDistrictRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(selectedDistrict);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        selectedDistrictRef.current = selectedDistrict;
    }, [
        selectedDistrict
    ]);
    const onDistrictChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onDistrictChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onDistrictChangeRef.current = onDistrictChange;
    }, [
        onDistrictChange
    ]);
    // Close drawer when module switches
    const prevGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [selectedObject, setSelectedObject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const setSelectedObjRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(setSelectedObject);
    setSelectedObjRef.current = setSelectedObject;
    const [drawerView, setDrawerView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("passport");
    const [showStandaloneReport, setShowStandaloneReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullDetail, setFullDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reverseGeo, setReverseGeo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reset drawer on module switch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (prevGroupRef.current !== undefined && prevGroupRef.current !== activeGroup) {
            setSelectedObject(null);
            setFullDetail(null);
            setReverseGeo(null);
            popupRef.current?.remove();
            setDrawerView("passport");
        }
        prevGroupRef.current = activeGroup;
    }, [
        activeGroup
    ]);
    // Reset drawer view when object changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setDrawerView("passport");
    }, [
        selectedObject
    ]);
    // Fetch plant detail from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/eco-green/plants/${extId}/detail/`, {
            signal: ctrl.signal
        }).then((r)=>r.ok ? r.json() : null).then((data)=>{
            if (data) setFullDetail(data);
        }).catch(()=>{});
        return ()=>ctrl.abort();
    }, [
        selectedObject
    ]);
    // Reverse geocode when object is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectedObject) {
            setReverseGeo(null);
            return;
        }
        const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const [lng, lat] = selectedObject.coords;
        let cancelled = false;
        reverseGeocode(lng, lat, token).then((geo)=>{
            if (!cancelled) setReverseGeo(geo);
        }).catch(()=>{});
        return ()=>{
            cancelled = true;
        };
    }, [
        selectedObject
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!centerCoords || !mapRef.current) return;
        mapRef.current.flyTo({
            center: centerCoords,
            zoom: Math.max(mapRef.current.getZoom(), 15),
            duration: 1200
        });
    }, [
        centerCoords
    ]);
    const [layerProgress, setLayerProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const markLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, label, status, kb = 0)=>{
        setLayerProgress((prev)=>({
                ...prev,
                [id]: {
                    label,
                    status,
                    kb
                }
            }));
    }, []);
    const loadCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mapIdleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [mapReady, setMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [globalLoading, setGlobalLoadingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [forceSkipped, setForceSkipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const onLoadingChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onLoadingChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onLoadingChangeRef.current = onLoadingChange;
    }, [
        onLoadingChange
    ]);
    const setGlobalLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((v)=>{
        setGlobalLoadingState(v);
        onLoadingChangeRef.current?.(v);
    }, []);
    const maybeHideLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (mapIdleRef.current && loadCountRef.current === 0) setGlobalLoading(false);
    }, [
        setGlobalLoading
    ]);
    const beginLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        loadCountRef.current++;
        setGlobalLoading(true);
    }, [
        setGlobalLoading
    ]);
    const endLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        loadCountRef.current = Math.max(0, loadCountRef.current - 1);
        maybeHideLoading();
    }, [
        maybeHideLoading
    ]);
    const loadingLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const districtsLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const loadDistricts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (map)=>{
        if (districtsLoadedRef.current) return;
        districtsLoadedRef.current = true;
        try {
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/address/districts/`);
            if (!res.ok) return;
            const fc = await res.json();
            const EXCLUDED = new Set([
                0,
                9,
                "0",
                "9"
            ]);
            const features = (fc.features ?? []).filter((f)=>{
                const fid = f.id ?? f.properties?.id;
                return !EXCLUDED.has(fid);
            });
            if (!map.getSource("src-districts")) {
                map.addSource("src-districts", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features
                    }
                });
            }
            // Fill layer — per-district colour, very transparent
            if (!map.getLayer("districts-fill")) {
                map.addLayer({
                    id: "districts-fill",
                    type: "fill",
                    source: "src-districts",
                    layout: {
                        visibility: "visible"
                    },
                    paint: {
                        "fill-color": [
                            "match",
                            [
                                "get",
                                "id"
                            ],
                            1,
                            "#6366f1",
                            2,
                            "#0ea5e9",
                            3,
                            "#10b981",
                            4,
                            "#f59e0b",
                            5,
                            "#ec4899",
                            6,
                            "#14b8a6",
                            7,
                            "#8b5cf6",
                            8,
                            "#f97316",
                            "#94a3b8"
                        ],
                        "fill-opacity": 0.07
                    }
                });
            }
            // Stroke layer
            if (!map.getLayer("districts-line")) {
                map.addLayer({
                    id: "districts-line",
                    type: "line",
                    source: "src-districts",
                    layout: {
                        visibility: "visible"
                    },
                    paint: {
                        "line-color": [
                            "match",
                            [
                                "get",
                                "id"
                            ],
                            1,
                            "#6366f1",
                            2,
                            "#0ea5e9",
                            3,
                            "#10b981",
                            4,
                            "#f59e0b",
                            5,
                            "#ec4899",
                            6,
                            "#14b8a6",
                            7,
                            "#8b5cf6",
                            8,
                            "#f97316",
                            "#94a3b8"
                        ],
                        "line-width": 2,
                        "line-opacity": 0.7,
                        "line-dasharray": [
                            4,
                            2
                        ]
                    }
                });
            }
            // Label layer — district name in center
            if (!map.getLayer("districts-label")) {
                map.addLayer({
                    id: "districts-label",
                    type: "symbol",
                    source: "src-districts",
                    layout: {
                        visibility: "visible",
                        "text-field": [
                            "get",
                            "name_ru"
                        ],
                        "text-size": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "zoom"
                            ],
                            10,
                            10,
                            13,
                            13
                        ],
                        "text-font": [
                            "DIN Offc Pro Medium",
                            "Arial Unicode MS Bold"
                        ],
                        "text-max-width": 10,
                        "text-justify": "center",
                        "symbol-placement": "point"
                    },
                    paint: {
                        "text-color": "#1e293b",
                        "text-halo-color": "rgba(255,255,255,0.85)",
                        "text-halo-width": 2,
                        "text-opacity": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "zoom"
                            ],
                            9,
                            0,
                            10,
                            1
                        ]
                    }
                });
            }
            // Cursor + click-to-select
            map.on("mouseenter", "districts-fill", ()=>{
                map.getCanvas().style.cursor = "pointer";
            });
            map.on("mouseleave", "districts-fill", ()=>{
                map.getCanvas().style.cursor = "";
            });
            map.on("click", "districts-fill", (e)=>{
                const feat = e.features?.[0];
                if (!feat) return;
                const props = feat.properties;
                const clickedId = Number(props.id);
                const name = String(props.name_ru ?? "");
                const cur = selectedDistrictRef.current;
                onDistrictChangeRef.current?.(cur?.id === clickedId ? null : {
                    id: clickedId,
                    name
                });
            });
        } catch  {}
    }, []);
    const showDistrictsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(showDistricts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        showDistrictsRef.current = showDistricts;
        const map = mapRef.current;
        if (!map || !map.isStyleLoaded()) return;
        const vis = showDistricts ? "visible" : "none";
        if (showDistricts && !districtsLoadedRef.current) {
            loadDistricts(map);
            return;
        }
        for (const id of [
            "districts-fill",
            "districts-line",
            "districts-label"
        ]){
            if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis);
        }
    }, [
        showDistricts,
        loadDistricts
    ]);
    // District filter — highlight selected district and filter GeoJSON layers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = mapRef.current;
        if (!map || !map.isStyleLoaded()) return;
        if (!map.getLayer("districts-fill")) return;
        if (selectedDistrict) {
            const { id, name } = selectedDistrict;
            // Highlight selected, dim others
            map.setPaintProperty("districts-fill", "fill-opacity", [
                "case",
                [
                    "==",
                    [
                        "get",
                        "id"
                    ],
                    id
                ],
                0.22,
                0.04
            ]);
            if (map.getLayer("districts-line")) {
                map.setPaintProperty("districts-line", "line-opacity", [
                    "case",
                    [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        id
                    ],
                    1.0,
                    0.2
                ]);
                map.setPaintProperty("districts-line", "line-width", [
                    "case",
                    [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        id
                    ],
                    3.5,
                    1
                ]);
            }
            // Apply district filter to all loaded GeoJSON layers
            LAYERS.forEach((layer)=>{
                if ("lineTiles" in layer && layer.lineTiles) return;
                if ("plantTiles" in layer && layer.plantTiles) return;
                if (!loadedLayers.has(layer.id)) return;
                const distF = [
                    "==",
                    [
                        "get",
                        "district"
                    ],
                    name
                ];
                if (layer.kind === "point") {
                    if (map.getLayer(layer.id)) map.setFilter(layer.id, [
                        "all",
                        [
                            "!",
                            [
                                "has",
                                "point_count"
                            ]
                        ],
                        distF
                    ]);
                } else {
                    if (map.getLayer(layer.id)) map.setFilter(layer.id, distF);
                }
            });
        } else {
            // Reset highlight
            map.setPaintProperty("districts-fill", "fill-opacity", 0.07);
            if (map.getLayer("districts-line")) {
                map.setPaintProperty("districts-line", "line-opacity", 0.7);
                map.setPaintProperty("districts-line", "line-width", 2);
            }
            // Remove district filter from all GeoJSON layers
            LAYERS.forEach((layer)=>{
                if ("lineTiles" in layer && layer.lineTiles) return;
                if ("plantTiles" in layer && layer.plantTiles) return;
                if (!loadedLayers.has(layer.id)) return;
                if (layer.kind === "point") {
                    if (map.getLayer(layer.id)) map.setFilter(layer.id, [
                        "!",
                        [
                            "has",
                            "point_count"
                        ]
                    ]);
                } else {
                    if (map.getLayer(layer.id)) map.setFilter(layer.id, null);
                }
            });
        }
    }, [
        selectedDistrict,
        loadedLayers
    ]);
    // Plant MVT tiles: reload source URL with district_id filter when district changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = mapRef.current;
        if (!map) return;
        const src = map.getSource("src-plants");
        if (!src) return;
        const base = `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/eco-green/plants/tiles/{z}/{x}/{y}.mvt`;
        const url = selectedDistrict ? `${base}?district_id=${selectedDistrict.id}` : base;
        src.setTiles([
            url
        ]);
    }, [
        selectedDistrict
    ]);
    // Auto-dismiss after 40s — prevents infinite stuck loading screen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>{
            if (globalLoading) {
                mapIdleRef.current = true;
                setGlobalLoading(false);
            }
        }, 40_000);
        return ()=>clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw-plants.js").catch(()=>{});
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current || mapRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
        const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
            container: containerRef.current,
            // Task 4: streets basemap — more visually rich, standard city map look
            style: resolvedTheme === "dark" ? "mapbox://styles/mapbox/navigation-night-v1" : "mapbox://styles/mapbox/streets-v12",
            center: [
                76.945,
                43.238
            ],
            zoom: 11.5
        });
        map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].NavigationControl(), "top-right");
        map.on("idle", ()=>{
            mapIdleRef.current = true;
            maybeHideLoading();
        });
        map.on("load", ()=>{
            if (showDistrictsRef.current) loadDistricts(map);
            setMapReady(true);
        });
        mapRef.current = map;
        return ()=>{
            map.remove();
            mapRef.current = null;
            mapIdleRef.current = false;
            districtsLoadedRef.current = false;
            setMapReady(false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const loadLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (layer)=>{
        const map = mapRef.current;
        if (!map || !map.isStyleLoaded()) return;
        if (loadedLayers.has(layer.id) || loadingLayers.current.has(layer.id)) return;
        loadingLayers.current.add(layer.id);
        // ── Plant tiles (MVT) ──────────────────────────────────────────────────
        if ("plantTiles" in layer && layer.plantTiles) {
            if (!map.getSource("src-plants")) {
                map.addSource("src-plants", {
                    type: "vector",
                    tiles: [
                        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/eco-green/plants/tiles/{z}/{x}/{y}.mvt`
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
                const nonPlantAnchor = LAYERS.filter((l)=>!("plantTiles" in l)).flatMap((l)=>l.kind === "point" ? [
                        l.id,
                        `${l.id}-clusters`,
                        `${l.id}-count`
                    ] : [
                        l.id
                    ]).find((id)=>map.getLayer(id));
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
                const initialTypes = LAYERS.filter((l)=>"plantTiles" in l && visibleLayers.has(l.id)).map((l)=>l.plantType);
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
                map.on("click", "plants-combined", (e)=>{
                    const feat = e.features?.[0];
                    if (!feat) return;
                    const props = feat.properties;
                    const pt = typeof props.plant_type === "number" ? props.plant_type : parseInt(String(props.plant_type ?? ""), 10);
                    const lm = LAYERS.find((l)=>"plantTiles" in l && l.plantType === pt);
                    const label = lm?.label ?? "Насаждение";
                    const color = PLANT_COLORS[pt] ?? "#16a34a";
                    const coords = feat.geometry.coordinates;
                    const sanitaryId = parseInt(String(props.sanitary_id ?? ""), 10);
                    const sanitaryTxt = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] ?? "" : "";
                    const extId = str(props.external_id ?? props.id, "—");
                    popupRef.current?.remove();
                    popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                        maxWidth: "240px",
                        closeButton: false,
                        offset: 10
                    }).setLngLat(coords).setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px">
              <div style="display:flex;align-items:center;gap:7px;margin-bottom:6px">
                <span style="width:10px;height:10px;border-radius:50%;background:${color};flex-shrink:0"></span>
                <span style="font-weight:700;font-size:13px;color:#111">${label}</span>
              </div>
              <div style="font-size:11px;color:#9ca3af;margin-bottom:${sanitaryTxt ? "4px" : "0"}">ID ${extId}</div>
              ${sanitaryTxt ? `<div style="font-size:11px;color:#6b7280">${sanitaryTxt}</div>` : ""}
            </div>`).addTo(map);
                    setSelectedObjRef.current({
                        kind: "plant",
                        label,
                        color,
                        properties: props,
                        coords
                    });
                });
                map.on("mouseenter", "plants-combined", ()=>{
                    map.getCanvas().style.cursor = "pointer";
                });
                map.on("mouseleave", "plants-combined", ()=>{
                    map.getCanvas().style.cursor = "";
                });
            }
            markLayer(layer.id, layer.label, "done", 0);
            setLoadedLayers((prev)=>new Set([
                    ...prev,
                    layer.id
                ]));
            return;
        }
        // ── Line tiles (MVT) — rivers, channels, ditches ──────────────────────
        if ("lineTiles" in layer && layer.lineTiles) {
            const sourceId = `src-${layer.id}`;
            const tileLayerName = layer.tileLayerName;
            if (!map.getSource(sourceId)) {
                map.addSource(sourceId, {
                    type: "vector",
                    tiles: [
                        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/${layer.endpoint}/tiles/{z}/{x}/{y}.mvt`
                    ],
                    minzoom: 0,
                    maxzoom: 14
                });
            }
            const initVis = visibleLayersRef.current.has(layer.id) ? "visible" : "none";
            const highlightId = `${layer.id}-highlight`;
            if (!map.getLayer(layer.id)) {
                map.addLayer({
                    id: layer.id,
                    type: "line",
                    source: sourceId,
                    "source-layer": tileLayerName,
                    layout: {
                        visibility: initVis
                    },
                    paint: {
                        "line-color": layer.color,
                        "line-width": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "zoom"
                            ],
                            8,
                            1,
                            12,
                            2.5,
                            15,
                            4
                        ],
                        "line-opacity": 0.85
                    }
                });
                // Highlight layer — shows only the selected feature in red
                map.addLayer({
                    id: highlightId,
                    type: "line",
                    source: sourceId,
                    "source-layer": tileLayerName,
                    layout: {
                        visibility: initVis
                    },
                    filter: [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        -1
                    ],
                    paint: {
                        "line-color": "#ef4444",
                        "line-width": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "zoom"
                            ],
                            8,
                            3,
                            12,
                            5,
                            15,
                            8
                        ],
                        "line-opacity": 1
                    }
                });
                map.on("click", layer.id, (e)=>{
                    const feat = e.features?.[0];
                    if (!feat) return;
                    const props = feat.properties;
                    const coords = [
                        e.lngLat.lng,
                        e.lngLat.lat
                    ];
                    const objId = props.id;
                    const objName = str(props.name) || layer.label;
                    if (map.getLayer(highlightId)) map.setFilter(highlightId, [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        objId
                    ]);
                    popupRef.current?.remove();
                    popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                        maxWidth: "280px",
                        closeButton: false,
                        offset: 10
                    }).setLngLat(e.lngLat).setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px">
              <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
                <span style="width:14px;height:3px;background:#ef4444;flex-shrink:0;border-radius:2px"></span>
                <span style="font-weight:700;font-size:13px;color:#111">${objName}</span>
              </div>
              <div style="font-size:11px;color:#9ca3af">ID ${str(objId, "—")} · Загрузка…</div>
            </div>`).addTo(map);
                    setSelectedObjRef.current({
                        kind: "water",
                        label: layer.label,
                        color: layer.color,
                        properties: props,
                        coords
                    });
                    if (objId != null) {
                        const endpoint = layer.endpoint;
                        fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/${endpoint}/${objId}/?format=json`).then((r)=>r.ok ? r.json() : null).then((full)=>{
                            if (full) setSelectedObjRef.current({
                                kind: "water",
                                label: layer.label,
                                color: layer.color,
                                properties: full,
                                coords
                            });
                        }).catch(()=>{});
                    }
                });
                map.on("mouseenter", layer.id, ()=>{
                    map.getCanvas().style.cursor = "pointer";
                });
                map.on("mouseleave", layer.id, ()=>{
                    map.getCanvas().style.cursor = "";
                });
            }
            markLayer(layer.id, layer.label, "done", 0);
            setLoadedLayers((prev)=>new Set([
                    ...prev,
                    layer.id
                ]));
            // Fetch count in background (non-blocking) for sidebar badge
            fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/${layer.endpoint}/?limit=1&format=json`).then((r)=>r.ok ? r.json() : null).then((d)=>{
                if (d?.count != null) onLayerLoad?.(layer.id, d.count);
            }).catch(()=>{});
            return;
        }
        if (!layer.endpoint) return;
        markLayer(layer.id, layer.label, "loading");
        beginLoad();
        let features = [];
        let kb = 0;
        let cached = false;
        let fetchFailed = false;
        try {
            const res = await fetchAll(layer.endpoint, layer.kind);
            features = res.features;
            kb = res.kb;
            cached = res.cached;
        } catch  {
            fetchFailed = true;
        } finally{
            endLoad();
        }
        if (fetchFailed) {
            markLayer(layer.id, layer.label, "error", 0);
            setLoadedLayers((prev)=>new Set([
                    ...prev,
                    layer.id
                ]));
            return;
        }
        markLayer(layer.id, layer.label, cached ? "cached" : "done", kb);
        // Task 2: notify parent of count
        onLayerLoad?.(layer.id, features.length);
        if (!features.length) {
            setLoadedLayers((prev)=>new Set([
                    ...prev,
                    layer.id
                ]));
            return;
        }
        const sourceId = `src-${layer.id}`;
        const isWaste = layer.group === "waste";
        const isWater = layer.group === "water";
        if (!map.getSource(sourceId)) {
            map.addSource(sourceId, {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features
                },
                // Task 6: no clustering for waste — show individual points like plants
                ...layer.kind === "point" && !isWaste ? {
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
        } else if (isWaste) {
            // Task 6: individual points for waste, zoom-based radius like plants
            map.addLayer({
                id: layer.id,
                type: "circle",
                source: sourceId,
                layout: {
                    visibility: initVis
                },
                paint: {
                    "circle-color": layer.color,
                    "circle-radius": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "zoom"
                        ],
                        8,
                        3,
                        12,
                        5,
                        15,
                        8
                    ],
                    "circle-stroke-width": 1.5,
                    "circle-stroke-color": "#fff",
                    "circle-opacity": 0.92
                }
            });
            map.on("click", layer.id, (e)=>{
                const feat = e.features?.[0];
                if (!feat) return;
                const props = feat.properties;
                const coords = feat.geometry.coordinates;
                const extId = str(props.external_id ?? props.id, "—");
                const addr = str(props.address, "");
                const dist = str(props.district ?? props.district_name, "");
                popupRef.current?.remove();
                popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
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
                setSelectedObjRef.current({
                    kind: "waste",
                    label: layer.label,
                    color: layer.color,
                    properties: props,
                    coords
                });
            });
            map.on("mouseenter", layer.id, ()=>{
                map.getCanvas().style.cursor = "pointer";
            });
            map.on("mouseleave", layer.id, ()=>{
                map.getCanvas().style.cursor = "";
            });
        } else {
            // Clustered points for non-waste (water, fountain, etc.)
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
            map.on("click", layer.id, (e)=>{
                const feat = e.features?.[0];
                if (!feat) return;
                const props = feat.properties;
                const coords = feat.geometry.coordinates;
                popupRef.current?.remove();
                popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                    maxWidth: "300px",
                    closeButton: false,
                    offset: 10
                }).setLngLat(coords).setHTML(`<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px">
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
              <span style="width:10px;height:10px;border-radius:50%;background:${layer.color};flex-shrink:0"></span>
              <span style="font-weight:700;font-size:13px;color:#111">${str(props.name) || layer.label}</span>
            </div>
            <div style="font-size:11px;color:#9ca3af">ID ${str(props.external_id ?? props.id, "—")}</div>
          </div>`).addTo(map);
                if (isWater) setSelectedObjRef.current({
                    kind: "water",
                    label: layer.label,
                    color: layer.color,
                    properties: props,
                    coords
                });
            });
            map.on("mouseenter", layer.id, ()=>{
                map.getCanvas().style.cursor = "pointer";
            });
            map.on("mouseleave", layer.id, ()=>{
                map.getCanvas().style.cursor = "";
            });
            map.on("click", `${layer.id}-clusters`, (e)=>{
                const feat = e.features?.[0];
                if (!feat) return;
                const src = map.getSource(sourceId);
                src.getClusterExpansionZoom(feat.properties.cluster_id, (err, zoom)=>{
                    if (err) return;
                    map.easeTo({
                        center: feat.geometry.coordinates,
                        zoom: zoom
                    });
                });
            });
        }
        if (layer.kind !== "point") {
            map.on("click", layer.id, (e)=>{
                const feat = e.features?.[0];
                if (!feat) return;
                const props = feat.properties;
                const coords = [
                    e.lngLat.lng,
                    e.lngLat.lat
                ];
                popupRef.current?.remove();
                popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                    maxWidth: "300px",
                    closeButton: isWater ? false : true,
                    offset: isWater ? 6 : 0
                }).setLngLat(e.lngLat).setHTML(isWater ? `<div style="font-family:Inter,sans-serif;padding:10px 12px;background:#fff;border-radius:8px;min-width:160px"><div style="display:flex;align-items:center;gap:7px;margin-bottom:4px"><span style="width:10px;height:10px;border-radius:3px;background:${layer.color};flex-shrink:0"></span><span style="font-weight:700;font-size:13px;color:#111">${str(props.name) || layer.label}</span></div><div style="font-size:11px;color:#9ca3af">ID ${str(props.external_id ?? props.id, "—")}</div></div>` : `<div style="font-family:Inter,sans-serif;padding:4px"><div style="font-weight:700;margin-bottom:6px;color:${layer.color}">${layer.label}</div><table style="border-collapse:collapse">${popupRows(props)}</table></div>`).addTo(map);
                if (isWater) setSelectedObjRef.current({
                    kind: "water",
                    label: layer.label,
                    color: layer.color,
                    properties: props,
                    coords
                });
            });
        }
        setLoadedLayers((prev)=>new Set([
                ...prev,
                layer.id
            ]));
    }, [
        loadedLayers,
        beginLoad,
        endLoad,
        markLayer,
        onLayerLoad
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = mapRef.current;
        if (!map) return;
        if (map.getLayer("plants-combined")) {
            const visibleTypes = LAYERS.filter((l)=>"plantTiles" in l && visibleLayers.has(l.id)).map((l)=>l.plantType);
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
        LAYERS.forEach((layer)=>{
            if ("plantTiles" in layer && layer.plantTiles || "lineTiles" in layer && layer.lineTiles) {
                if (!loadedLayers.has(layer.id)) {
                    // Not yet loaded — add source+layer (initVis set inside loadLayer)
                    if (map.isStyleLoaded()) loadLayer(layer);
                    else map.once("load", ()=>loadLayer(layer));
                } else if ("lineTiles" in layer && layer.lineTiles) {
                    // Already loaded — toggle visibility (plant tiles use setFilter above)
                    const vis = visibleLayers.has(layer.id) ? "visible" : "none";
                    if (map.getLayer(layer.id)) map.setLayoutProperty(layer.id, "visibility", vis);
                    const hid = `${layer.id}-highlight`;
                    if (map.getLayer(hid)) map.setLayoutProperty(hid, "visibility", vis);
                }
                return;
            }
            if (loadedLayers.has(layer.id)) {
                // Already loaded — just toggle visibility
                const vis = visibleLayers.has(layer.id) ? "visible" : "none";
                const ids = layer.kind === "point" ? [
                    layer.id,
                    `${layer.id}-clusters`,
                    `${layer.id}-count`
                ] : [
                    layer.id
                ];
                ids.forEach((id)=>{
                    if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis);
                });
                return;
            }
            // Not yet loaded — pre-load eagerly in background; initVis controls visibility
            if (map.isStyleLoaded()) loadLayer(layer);
            else map.once("load", ()=>loadLayer(layer));
        });
    }, [
        visibleLayers,
        loadedLayers,
        loadLayer,
        mapReady
    ]);
    const closeDrawer = ()=>{
        setSelectedObject(null);
        setFullDetail(null);
        setReverseGeo(null);
        popupRef.current?.remove();
        setDrawerView("passport");
        const map = mapRef.current;
        if (map) {
            LAYERS.forEach((l)=>{
                if ("lineTiles" in l && l.lineTiles) {
                    const hid = `${l.id}-highlight`;
                    if (map.getLayer(hid)) map.setFilter(hid, [
                        "==",
                        [
                            "get",
                            "id"
                        ],
                        -1
                    ]);
                }
            });
        }
    };
    const isDrawerOpen = selectedObject !== null;
    const extId = str(selectedObject?.properties?.external_id ?? selectedObject?.properties?.id, "—");
    const accentColor = selectedObject?.kind === "plant" ? "#16a34a" : selectedObject?.kind === "water" ? "#2563eb" : "#f97316";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@keyframes spin{to{transform:rotate(360deg)}}`
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 1214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 1215,
                columnNumber: 7
            }, this),
            selectedDistrict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 28,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 40,
                    pointerEvents: "auto",
                    transition: "opacity 0.2s",
                    opacity: isDrawerOpen ? 0 : 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "9px 14px",
                        background: "#1d4ed8",
                        color: "#fff",
                        borderRadius: 24,
                        fontSize: 13,
                        fontWeight: 600,
                        fontFamily: "Inter,sans-serif",
                        boxShadow: "0 4px 20px rgba(29,78,216,0.45)",
                        whiteSpace: "nowrap"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1221,
                                    columnNumber: 113
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "10",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1221,
                                    columnNumber: 171
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 1221,
                            columnNumber: 13
                        }, this),
                        selectedDistrict.name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onDistrictChange?.(null),
                            style: {
                                background: "rgba(255,255,255,0.2)",
                                border: "none",
                                cursor: "pointer",
                                color: "#fff",
                                fontSize: 13,
                                lineHeight: 1,
                                padding: "2px 5px",
                                borderRadius: 10,
                                marginLeft: 2,
                                fontFamily: "Inter,sans-serif"
                            },
                            "aria-label": "Сбросить фильтр по району",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 1223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 1220,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 1219,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 28,
                    left: 16,
                    zIndex: 40,
                    opacity: isDrawerOpen ? 0 : 1,
                    pointerEvents: isDrawerOpen ? "none" : "auto",
                    transition: "opacity 0.2s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1238,
                                columnNumber: 111
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 1238,
                            columnNumber: 11
                        }, this),
                        "Подать обращение"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 1234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 1233,
                columnNumber: 7
            }, this),
            showStandaloneReport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 60,
                    display: "flex",
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "14px 18px",
                                borderBottom: "1px solid #e5e7eb",
                                background: "#f9fafb",
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: "#111"
                                            },
                                            children: "Подать обращение"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 1250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        color: "#9ca3af",
                                        marginTop: 4
                                    },
                                    children: "Сообщите о проблеме на карте"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 1247,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportForm, {
                            onClose: ()=>setShowStandaloneReport(false)
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 1254,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 1246,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 1245,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: selectedObject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: "14px 18px 0",
                                borderBottom: "1px solid #e5e7eb",
                                background: "#f9fafb",
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: 10
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                                minWidth: 0
                                            },
                                            children: drawerView === "report" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 1274,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 1277,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                lineNumber: 1279,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                lineNumber: 1280,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 1272,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            lineNumber: 1285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1271,
                                    columnNumber: 15
                                }, this),
                                drawerView === "passport" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        paddingBottom: 8
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: accentColor,
                                            borderBottom: `2px solid ${accentColor}`,
                                            paddingBottom: 6,
                                            display: "inline-block"
                                        },
                                        children: "Паспорт объекта"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1290,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1289,
                                    columnNumber: 17
                                }, this),
                                drawerView === "report" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "#111",
                                        paddingBottom: 10
                                    },
                                    children: "Оставить обращение"
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1294,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 1270,
                            columnNumber: 13
                        }, this),
                        drawerView === "report" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportForm, {
                            extId: extId,
                            typeName: selectedObject.label,
                            coords: selectedObject.coords,
                            kind: selectedObject.kind,
                            onClose: ()=>setDrawerView("passport")
                        }, void 0, false, {
                            fileName: "[project]/components/eco-almaty-map.tsx",
                            lineNumber: 1299,
                            columnNumber: 15
                        }, this),
                        drawerView === "passport" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                selectedObject.kind === "plant" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlantPassport, {
                                    properties: selectedObject.properties,
                                    fullDetail: fullDetail,
                                    geo: reverseGeo
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1305,
                                    columnNumber: 19
                                }, this) : selectedObject.kind === "water" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WaterPassport, {
                                    label: selectedObject.label,
                                    properties: selectedObject.properties,
                                    geo: reverseGeo
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1307,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WastePassport, {
                                    label: selectedObject.label,
                                    properties: selectedObject.properties,
                                    geo: reverseGeo
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1309,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderTop: "1px solid #e5e7eb",
                                        padding: "12px 16px",
                                        flexShrink: 0,
                                        background: "#fff"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDrawerView("report"),
                                        style: {
                                            width: "100%",
                                            padding: "10px 0",
                                            borderRadius: 8,
                                            fontSize: 13,
                                            fontWeight: 600,
                                            border: "none",
                                            background: accentColor,
                                            color: "#fff",
                                            cursor: "pointer",
                                            fontFamily: "Inter,sans-serif"
                                        },
                                        children: "Оставить обращение"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1314,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 1260,
                columnNumber: 7
            }, this),
            globalLoading && !forceSkipped && (()=>{
                const entries = Object.values(layerProgress);
                const total = entries.length;
                const errors = entries.filter((e)=>e.status === "error");
                const loading = entries.filter((e)=>e.status === "loading");
                const done = entries.filter((e)=>e.status === "done" || e.status === "cached").length;
                const settled = done + errors.length // layers that won't change anymore
                ;
                const pct = total > 0 ? Math.round(settled / total * 100) : 0;
                const totalKb = entries.reduce((s, e)=>s + e.kb, 0);
                const totalMb = (totalKb / 1024).toFixed(1);
                const hasErrors = errors.length > 0;
                const isStuck = loading.length > 0 && settled > 0;
                const spinColor = hasErrors ? "#ef4444" : isStuck ? "#f59e0b" : "#16a34a";
                const activeLabel = loading[0]?.label ?? (hasErrors ? `Ошибка: ${errors.map((e)=>e.label).join(", ")}` : "Инициализация карты…");
                const canSkip = settled > 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "rgba(17,24,39,0.92)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 16,
                            padding: "28px 32px",
                            width: 360,
                            boxShadow: "0 24px 64px rgba(0,0,0,0.5)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 14,
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            flexShrink: 0,
                                            border: "3px solid rgba(255,255,255,0.12)",
                                            borderTopColor: spinColor,
                                            animation: "spin 0.8s linear infinite"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    color: "#f9fafb"
                                                },
                                                children: "Загрузка карты"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1351,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: hasErrors ? "#f87171" : isStuck ? "#f59e0b" : "#9ca3af",
                                                    marginTop: 2,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: isStuck ? `Загружается: ${loading.map((s)=>s.label).join(", ")}` : activeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1352,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1350,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1348,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: "rgba(255,255,255,0.08)",
                                    borderRadius: 99,
                                    height: 6,
                                    overflow: "hidden",
                                    marginBottom: 8
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: "100%",
                                        borderRadius: 99,
                                        background: spinColor,
                                        width: `${pct}%`,
                                        transition: "width 0.4s ease"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 1360,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1359,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: 11,
                                    color: "#6b7280",
                                    marginBottom: entries.length > 0 ? 14 : 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            settled,
                                            " / ",
                                            total,
                                            " слоёв",
                                            hasErrors ? ` · ${errors.length} ошиб.` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            pct,
                                            "%",
                                            totalKb > 0 ? ` · ${totalMb} МБ` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1364,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1362,
                                columnNumber: 15
                            }, this),
                            entries.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    maxHeight: 180,
                                    overflowY: "auto",
                                    marginBottom: canSkip ? 16 : 0
                                },
                                children: [
                                    ...entries
                                ].sort((a, b)=>{
                                    const order = {
                                        loading: 0,
                                        error: 1,
                                        pending: 2,
                                        done: 3,
                                        cached: 4
                                    };
                                    return (order[a.status] ?? 5) - (order[b.status] ?? 5);
                                }).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    flexShrink: 0,
                                                    width: 14,
                                                    textAlign: "center",
                                                    color: e.status === "loading" ? "#f59e0b" : e.status === "error" ? "#ef4444" : "#4b5563"
                                                },
                                                children: e.status === "loading" ? "⏳" : e.status === "cached" ? "⚡" : e.status === "done" ? "✓" : e.status === "error" ? "✕" : "○"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1375,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    flex: 1,
                                                    color: e.status === "loading" ? "#fbbf24" : e.status === "error" ? "#f87171" : "#6b7280",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                },
                                                children: e.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1379,
                                                columnNumber: 23
                                            }, this),
                                            e.kb > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    color: "#4b5563",
                                                    flexShrink: 0
                                                },
                                                children: e.kb >= 1024 ? `${(e.kb / 1024).toFixed(1)} МБ` : `${e.kb} КБ`
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 1382,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, e.label, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 1374,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1369,
                                columnNumber: 17
                            }, this),
                            canSkip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setForceSkipped(true);
                                    setGlobalLoading(false);
                                },
                                style: {
                                    width: "100%",
                                    padding: "8px 0",
                                    borderRadius: 8,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    background: "rgba(255,255,255,0.06)",
                                    color: "#9ca3af",
                                    cursor: "pointer",
                                    fontFamily: "Inter,sans-serif",
                                    transition: "background 0.15s"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                },
                                children: isStuck ? "Пропустить зависшие слои →" : "Пропустить →"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 1390,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 1346,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/eco-almaty-map.tsx",
                    lineNumber: 1345,
                    columnNumber: 11
                }, this);
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 1213,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/eco-almaty-analytics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EcoAlmatyAnalytics",
    ()=>EcoAlmatyAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
"use client";
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-border bg-card p-4 flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const CustomTooltip = ({ active, payload })=>{
    if (!active || !payload?.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-card border border-border rounded-lg px-3 py-2 text-sm shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold text-foreground",
                children: payload[0].name
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-analytics.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
function EcoAlmatyAnalytics() {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = (refresh = false)=>{
        if (refresh) setRefreshing(true);
        else setLoading(true);
        setError(false);
        fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE"]}/ecology/eco-green/plants/stats/${refresh ? "?refresh=1" : ""}`).then((r)=>r.ok ? r.json() : Promise.reject()).then((d)=>{
            setStats(d);
            setLoading(false);
            setRefreshing(false);
        }).catch(()=>{
            setError(true);
            setLoading(false);
            setRefreshing(false);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex items-center justify-center gap-3 text-muted-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    if (error || !stats) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 overflow-y-auto bg-background px-6 py-5 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-semibold text-foreground",
                                children: "Зелёные насаждения — аналитика"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>load(true),
                        disabled: refreshing,
                        className: "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted transition-colors disabled:opacity-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M23 4v6h-6M1 20v-6h6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Всего насаждений",
                        value: fmt(stats.total),
                        sub: "в базе данных",
                        color: "#16a34a"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Здоровые (КСО-1)",
                        value: fmt(healthy),
                        sub: `${healthyPct}% от общего`,
                        color: "#16a34a"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Под угрозой (КСО 4–6)",
                        value: fmt(atRisk),
                        sub: "усыхающие + аварийные",
                        color: "#ea580c"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
                        label: "Краснокнижных",
                        value: fmt(stats.redbook),
                        color: "#dc2626"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KpiCard, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-foreground mb-4",
                                children: "Санитарное состояние"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: 180,
                                        height: 180,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                                                    data: pieData,
                                                    dataKey: "value",
                                                    cx: "50%",
                                                    cy: "50%",
                                                    innerRadius: 52,
                                                    outerRadius: 82,
                                                    paddingAngle: 2,
                                                    strokeWidth: 0,
                                                    children: pieData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-2",
                                        children: pieData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2.5 h-2.5 rounded-full shrink-0",
                                                                style: {
                                                                    background: entry.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-border bg-card p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-semibold text-foreground mb-4",
                                children: "По типу насаждений"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-analytics.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 220,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: barTypeData,
                                    layout: "vertical",
                                    margin: {
                                        left: 8,
                                        right: 16,
                                        top: 0,
                                        bottom: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                            strokeDasharray: "3 3",
                                            horizontal: false,
                                            stroke: "var(--border)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/eco-almaty-analytics.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "value",
                                            radius: [
                                                0,
                                                4,
                                                4,
                                                0
                                            ],
                                            maxBarSize: 18,
                                            children: barTypeData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-border bg-card p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-foreground mb-4",
                        children: "Распределение по санитарному состоянию"
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-analytics.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-10 rounded-lg overflow-hidden gap-px",
                        children: pieData.map((entry, i)=>{
                            const pct = entry.value / stats.total * 100;
                            return pct > 0.3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: `${pct}%`,
                                    background: entry.color
                                },
                                title: `${entry.name}: ${fmt(entry.value)} (${pct.toFixed(1)}%)`,
                                className: "relative group flex-shrink-0",
                                children: pct > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-x-4 gap-y-1 mt-3",
                        children: pieData.map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-xs text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/app/eco-almaty/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EcoAlmatyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-almaty-map.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$analytics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/eco-almaty-analytics.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-ssr] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tree-pine.js [app-ssr] (ecmascript) <export default as TreePine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
;
;
;
const EcoAlmatyMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/eco-almaty-map.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function MapSearch({ onSelect }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!query.trim()) {
            setResults([]);
            setOpen(false);
            return;
        }
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(async ()=>{
            const token = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
            const enc = encodeURIComponent(query);
            try {
                const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${enc}.json?access_token=${token}&proximity=76.945,43.238&country=kz&language=ru&limit=6`);
                if (!res.ok) return;
                const data = await res.json();
                setResults(data.features ?? []);
                setOpen(true);
            } catch  {}
        }, 350);
    }, [
        query
    ]);
    const pick = (r)=>{
        onSelect(r.center);
        setQuery(r.place_name.split(",")[0]);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: 320
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 15,
                        color: "#9ca3af"
                    }, void 0, false, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/app/eco-almaty/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            open && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: results.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 500
                                },
                                children: r.place_name.split(",")[0]
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: "#9ca3af",
                                    marginTop: 2
                                },
                                children: r.place_name.split(",").slice(1).join(",").trim()
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/eco-almaty/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
const GROUP_META = {
    water: {
        label: "Водные объекты",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        color: "#3b82f6"
    },
    fountain: {
        label: "Фонтаны",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        color: "#06d6a0"
    },
    waste: {
        label: "Отходы",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
        color: "#f97316"
    },
    green: {
        label: "Зелёные насаждения",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        color: "#16a34a"
    }
};
const MODULE_TABS = [
    {
        key: "green",
        label: "Зеленые насаждения",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$pine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TreePine$3e$__["TreePine"],
        group: "green",
        hasAnalytics: true
    },
    {
        key: "water",
        label: "Водные объекты",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        group: "water"
    },
    {
        key: "fountain",
        label: "Фонтаны",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        group: "fountain"
    },
    {
        key: "waste",
        label: "Отходы",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
        group: "waste"
    }
];
function EcoAlmatyPage() {
    const [activeModule, setActiveModule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("green");
    const [subTab, setSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("map");
    const [centerCoords, setCenterCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleLayers, setVisibleLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAYERS"].filter((l)=>l.group === "green").map((l)=>l.id)));
    const [layerCounts, setLayerCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isMapLoading, setIsMapLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showDistricts, setShowDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedDistrict, setSelectedDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const currentModule = MODULE_TABS.find((m)=>m.key === activeModule);
    const activeGroup = currentModule.group;
    const [openGroups, setOpenGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set([
        "water",
        "fountain",
        "waste",
        "green"
    ]));
    const toggleLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setVisibleLayers((prev)=>{
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }, []);
    const toggleGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((g)=>{
        setOpenGroups((prev)=>{
            const next = new Set(prev);
            next.has(g) ? next.delete(g) : next.add(g);
            return next;
        });
    }, []);
    const toggleAllInGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((g)=>{
        const ids = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAYERS"].filter((l)=>l.group === g).map((l)=>l.id);
        const allVisible = ids.every((id)=>visibleLayers.has(id));
        setVisibleLayers((prev)=>{
            const next = new Set(prev);
            allVisible ? ids.forEach((id)=>next.delete(id)) : ids.forEach((id)=>next.add(id));
            return next;
        });
    }, [
        visibleLayers
    ]);
    const switchModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key)=>{
        setActiveModule(key);
        setSubTab("map");
        const mod = MODULE_TABS.find((m)=>m.key === key);
        const groupIds = mod.group ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAYERS"].filter((l)=>l.group === mod.group).map((l)=>l.id) : [];
        setVisibleLayers(new Set(groupIds));
    }, []);
    const groups = Object.keys(GROUP_META).map((g)=>({
            key: g,
            ...GROUP_META[g],
            layers: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAYERS"].filter((l)=>l.group === g)
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";
        const EXCLUDED = new Set([
            0,
            9
        ]);
        fetch(`${API}/address/districts/`).then((r)=>r.ok ? r.json() : null).then((fc)=>{
            if (!fc?.features) return;
            const list = fc.features.map((f)=>{
                const id = Number(f.id ?? f.properties?.id ?? 0);
                const name = String(f.properties?.name_ru ?? "");
                return {
                    id,
                    name,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DISTRICT_COLORS"][id] ?? "#94a3b8"
                };
            }).filter((d)=>d.id && !EXCLUDED.has(d.id) && d.name).sort((a, b)=>a.id - b.id);
            setDistricts(list);
        }).catch(()=>{});
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-screen overflow-hidden bg-background",
        children: [
            isMapLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 50,
                    cursor: "wait",
                    pointerEvents: "all"
                }
            }, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderMenu"], {}, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center gap-0 px-4 border-b border-border bg-card shrink-0 overflow-x-auto",
                children: [
                    MODULE_TABS.map(({ key, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>!isMapLoading && switchModule(key),
                            disabled: isMapLoading,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-4 py-2.5 text-sm border-b-2 transition-colors whitespace-nowrap shrink-0", isMapLoading ? "opacity-40 cursor-not-allowed" : "", activeModule === key ? "border-green-600 text-green-700 dark:text-green-400 font-medium" : "border-transparent text-muted-foreground hover:text-foreground"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                label
                            ]
                        }, key, true, {
                            fileName: "[project]/app/eco-almaty/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)),
                    isMapLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 cursor-not-allowed"
                    }, void 0, false, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            subTab === "analytics" && currentModule.hasAnalytics ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$analytics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EcoAlmatyAnalytics"], {}, void 0, false, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "relative w-64 shrink-0 border-r border-border bg-card flex flex-col overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pt-3 pb-0 border-b border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-semibold text-foreground",
                                            children: "Слои"
                                        }, void 0, false, {
                                            fileName: "[project]/app/eco-almaty/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 py-1.5 px-1 mb-1 rounded cursor-pointer hover:bg-muted/50 select-none",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            setShowDistricts((v)=>{
                                                if (v) setSelectedDistrict(null); // clear filter when hiding districts
                                                return !v;
                                            });
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center transition-colors", showDistricts ? "border-transparent bg-indigo-500" : "border-muted-foreground"),
                                                children: showDistricts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block w-1.5 h-1 border-b-2 border-l-2 border-white -rotate-45 -mt-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 35
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full shrink-0 bg-indigo-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-foreground",
                                                children: "Районы города"
                                            }, void 0, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    showDistricts && districts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-1.5 space-y-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedDistrict(null),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors text-left", !selectedDistrict ? "bg-indigo-50 text-indigo-700 font-medium dark:bg-indigo-950/40 dark:text-indigo-300" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center border-transparent bg-indigo-400",
                                                        children: !selectedDistrict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block w-1.5 h-1 border-b-2 border-l-2 border-white -rotate-45 -mt-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/eco-almaty/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 43
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Все районы"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            districts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedDistrict((prev)=>prev?.id === d.id ? null : d),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors text-left", selectedDistrict?.id === d.id ? "font-semibold" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"),
                                                    style: selectedDistrict?.id === d.id ? {
                                                        background: d.color + "18",
                                                        color: d.color
                                                    } : {},
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2.5 h-2.5 rounded-full shrink-0 ring-2 ring-transparent transition-all",
                                                            style: {
                                                                backgroundColor: d.color,
                                                                boxShadow: selectedDistrict?.id === d.id ? `0 0 0 2px ${d.color}55` : undefined
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/eco-almaty/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this),
                                                        d.name
                                                    ]
                                                }, d.id, true, {
                                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    currentModule.hasAnalytics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-0 mb-0",
                                        children: [
                                            "map",
                                            "analytics"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSubTab(t),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-1.5 text-xs border-b-2 transition-colors", subTab === t ? "border-green-600 text-green-700 dark:text-green-400 font-medium" : "border-transparent text-muted-foreground hover:text-foreground"),
                                                children: t === "map" ? "Карта" : "Аналитика"
                                            }, t, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 py-2 overflow-y-auto",
                                children: groups.filter((g)=>g.key === activeGroup).map((group)=>{
                                    const Icon = group.icon;
                                    const isOpen = openGroups.has(group.key);
                                    const allOn = group.layers.every((l)=>visibleLayers.has(l.id));
                                    const anyOn = group.layers.some((l)=>visibleLayers.has(l.id));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3 py-2 hover:bg-muted/50 cursor-pointer select-none",
                                                onClick: ()=>toggleGroup(group.key),
                                                children: [
                                                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "h-3.5 w-3.5 text-muted-foreground shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 31
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "h-3.5 w-3.5 text-muted-foreground shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 32
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-4 w-4 shrink-0",
                                                        style: {
                                                            color: group.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium flex-1",
                                                        children: group.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3 rounded-full border-2 transition-colors shrink-0", allOn ? "border-transparent" : anyOn ? "border-current" : "border-muted-foreground bg-transparent"),
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
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this),
                                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pl-8 pr-3 pb-1 space-y-0.5",
                                                children: group.layers.map((layer)=>{
                                                    const on = visibleLayers.has(layer.id);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-2 py-1.5 px-2 rounded cursor-pointer hover:bg-muted/50 group",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            toggleLayer(layer.id);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: on,
                                                                readOnly: true,
                                                                className: "sr-only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-3.5 h-3.5 rounded border-2 shrink-0 flex items-center justify-center transition-colors", on ? "border-transparent" : "border-muted-foreground"),
                                                                style: {
                                                                    backgroundColor: on ? layer.color : undefined
                                                                },
                                                                children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block w-1.5 h-1 border-b-2 border-l-2 border-white -rotate-45 -mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 38
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 362,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full shrink-0",
                                                                style: {
                                                                    backgroundColor: layer.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs leading-tight flex-1", on ? "text-foreground" : "text-muted-foreground"),
                                                                children: layer.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 29
                                                            }, this),
                                                            layerCounts[layer.id] != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-foreground ml-auto shrink-0 tabular-nums",
                                                                children: layerCounts[layer.id].toLocaleString("ru")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, layer.id, true, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, group.key, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            subTab === "map" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-t border-border text-xs text-muted-foreground space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-0.5 rounded",
                                                        style: {
                                                            backgroundColor: "#3b82f6"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, this),
                                                    "линия — линейный объект"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded opacity-40",
                                                        style: {
                                                            backgroundColor: "#3b82f6"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, this),
                                                    "полигон — площадной объект"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full",
                                                        style: {
                                                            backgroundColor: "#06d6a0"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 19
                                                    }, this),
                                                    "точка — точечный объект"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/eco-almaty/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-3 border-t border-border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$eco$2d$almaty$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearGeoCache"])();
                                                window.location.reload();
                                            },
                                            className: "flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this),
                                                "Обновить кеш карты"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/eco-almaty/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            isMapLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-10 bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 cursor-not-allowed select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 rounded-full border-2 border-border border-t-green-500 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground text-center px-4",
                                        children: "Загрузка данных…"
                                    }, void 0, false, {
                                        fileName: "[project]/app/eco-almaty/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EcoAlmatyMap, {
                                visibleLayers: visibleLayers,
                                centerCoords: centerCoords,
                                activeGroup: activeGroup,
                                showDistricts: showDistricts,
                                selectedDistrict: selectedDistrict,
                                onDistrictChange: setSelectedDistrict,
                                onLayerLoad: (id, count)=>setLayerCounts((prev)=>({
                                            ...prev,
                                            [id]: count
                                        })),
                                onLoadingChange: setIsMapLoading
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 12,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 40,
                                    pointerEvents: "auto"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapSearch, {
                                    onSelect: (coords)=>setCenterCoords(coords)
                                }, void 0, false, {
                                    fileName: "[project]/app/eco-almaty/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/eco-almaty/page.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/eco-almaty/page.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/eco-almaty/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/eco-almaty/page.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_cec3ea3b._.js.map