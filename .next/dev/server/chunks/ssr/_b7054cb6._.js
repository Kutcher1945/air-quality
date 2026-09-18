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
        name: "Карта датчиков",
        href: "/",
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
    },
    {
        name: "Вода, фонтаны, отходы",
        href: "/eco-almaty",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"]
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
"[project]/components/eco-almaty-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EcoAlmatyMap",
    ()=>EcoAlmatyMap,
    "LAYERS",
    ()=>LAYERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mapbox-gl/dist/mapbox-gl.js [app-ssr] (ecmascript)");
"use client";
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
const FIELD_LABELS = {
    plant_type: "Тип",
    external_id: "ID",
    sanitary_id: "Санитарное состояние",
    redbook: "Краснокнижный",
    pine: "Хвойное"
};
function formatValue(key, val) {
    if (key === "plant_type") return PLANT_TYPE_LABEL[val] ?? String(val);
    if (key === "redbook" || key === "pine") return val === 1 || val === true ? "Да" : "Нет";
    return String(val);
}
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
function makePopupHtml(props, label) {
    const skip = new Set([
        "geometry",
        "centroid",
        "id"
    ]);
    const rows = Object.entries(props).filter(([k, v])=>!skip.has(k) && v !== null && v !== undefined && v !== "").slice(0, 12).map(([k, v])=>{
        const fieldLabel = FIELD_LABELS[k] ?? k;
        return `<tr><td style="color:#666;padding:3px 10px 3px 0;white-space:nowrap">${fieldLabel}</td><td style="font-weight:600;color:#111">${formatValue(k, v)}</td></tr>`;
    }).join("");
    return `<div style="font-family:Inter,sans-serif;font-size:13px;max-width:280px;background:#fff;color:#111;padding:2px">
    <div style="font-weight:700;margin-bottom:6px;color:#16a34a">${label}</div>
    <table style="border-collapse:collapse">${rows || "<tr><td style='color:#666'>—</td></tr>"}</table>
  </div>`;
}
function EcoAlmatyMap({ visibleLayers }) {
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [loadedLayers, setLoadedLayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const popupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedPlant, setSelectedPlant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // keep ref in sync so mapbox click handlers (which close over stale deps) can call the setter
    const setSelectedPlantRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(setSelectedPlant);
    setSelectedPlantRef.current = setSelectedPlant;
    // drawer tab
    const [drawerTab, setDrawerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("detail");
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/plants-stats").then((r)=>r.ok ? r.json() : null).then((d)=>{
            if (d) setStats(d);
        }).catch(()=>{});
    }, []);
    // full detail fetched from DB on click (independent of what's in the tile)
    const [fullDetail, setFullDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const extId = selectedPlant?.properties?.external_id;
        if (!extId) {
            setFullDetail(null);
            return;
        }
        const ctrl = new AbortController();
        setFullDetail(null);
        fetch(`/api/plants-detail/${extId}`, {
            signal: ctrl.signal
        }).then((r)=>r.ok ? r.json() : null).then((data)=>{
            if (data) setFullDetail(data);
        }).catch(()=>{});
        return ()=>ctrl.abort();
    }, [
        selectedPlant?.properties?.external_id
    ]);
    // shared loading overlay — counts in-flight fetches across non-plant layers
    const loadCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [globalLoading, setGlobalLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const beginLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        loadCountRef.current++;
        setGlobalLoading(true);
    }, []);
    const endLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        loadCountRef.current = Math.max(0, loadCountRef.current - 1);
        if (loadCountRef.current === 0) setGlobalLoading(false);
    }, []);
    // synchronous guard so concurrent loadLayer calls don't double-add layers
    const loadingLayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Register service worker that caches plant tiles in browser storage (once per session)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw-plants.js").catch(()=>{});
        }
    }, []);
    // init map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current || mapRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].accessToken = ("TURBOPACK compile-time value", "pk.eyJ1IjoiYXJjdGljLW5pZ2h0bWFyZSIsImEiOiJjbXFocGR5Nm4wMWU3MnhyNjl2dzJneHkyIn0.N_K1OAmPdssi3DrDnRNvSQ") ?? "";
        const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Map({
            container: containerRef.current,
            style: resolvedTheme === "dark" ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v11",
            center: [
                76.945,
                43.238
            ],
            zoom: 11.5
        });
        map.addControl(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].NavigationControl(), "top-right");
        mapRef.current = map;
        return ()=>{
            map.remove();
            mapRef.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // load & add a single layer
    const loadLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (layer)=>{
        const map = mapRef.current;
        if (!map || !map.isStyleLoaded()) return;
        if (loadedLayers.has(layer.id) || loadingLayers.current.has(layer.id)) return;
        loadingLayers.current.add(layer.id);
        // Plants: all 3 type-layers share one MVT vector source
        if ("plantTiles" in layer && layer.plantTiles) {
            // Add the shared source once
            if (!map.getSource("src-plants")) {
                map.addSource("src-plants", {
                    type: "vector",
                    tiles: [
                        `${location.origin}/api/plants-mvt/{z}/{x}/{y}`
                    ],
                    minzoom: 0,
                    maxzoom: 14
                });
            }
            const pt = layer.plantType;
            const typeFilter = [
                "==",
                [
                    "get",
                    "plant_type"
                ],
                pt
            ];
            if (!map.getLayer(layer.id)) {
                map.addLayer({
                    id: layer.id,
                    type: "circle",
                    source: "src-plants",
                    "source-layer": "plants",
                    filter: typeFilter,
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
                            1,
                            12,
                            2.5,
                            16,
                            6
                        ],
                        "circle-stroke-width": [
                            "interpolate",
                            [
                                "linear"
                            ],
                            [
                                "zoom"
                            ],
                            12,
                            0,
                            15,
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
                            0.6,
                            13,
                            0.9
                        ]
                    }
                });
                map.on("click", layer.id, (e)=>{
                    const feat = e.features?.[0];
                    if (!feat) return;
                    const props = feat.properties;
                    popupRef.current?.remove();
                    popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                        maxWidth: "200px",
                        closeButton: false,
                        offset: 8
                    }).setLngLat(feat.geometry.coordinates).setHTML(`<div style="font-family:Inter,sans-serif;font-size:12px;background:#fff;color:#111;padding:4px 6px;border-radius:4px;font-weight:600;color:${layer.color}">${layer.label}</div>`).addTo(map);
                    setSelectedPlantRef.current({
                        label: layer.label,
                        color: layer.color,
                        properties: props
                    });
                });
                map.on("mouseenter", layer.id, ()=>{
                    map.getCanvas().style.cursor = "pointer";
                });
                map.on("mouseleave", layer.id, ()=>{
                    map.getCanvas().style.cursor = "";
                });
            }
            setLoadedLayers((prev)=>new Set([
                    ...prev,
                    layer.id
                ]));
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
            map.on("click", layer.id, (e)=>{
                const feat = e.features?.[0];
                if (!feat) return;
                popupRef.current?.remove();
                popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                    maxWidth: "300px"
                }).setLngLat(feat.geometry.coordinates).setHTML(makePopupHtml(feat.properties, layer.label)).addTo(map);
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
                popupRef.current?.remove();
                popupRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mapbox$2d$gl$2f$dist$2f$mapbox$2d$gl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Popup({
                    maxWidth: "300px"
                }).setLngLat(e.lngLat).setHTML(makePopupHtml(feat.properties, layer.label)).addTo(map);
            });
        }
        setLoadedLayers((prev)=>new Set([
                ...prev,
                layer.id
            ]));
    }, [
        loadedLayers,
        beginLoad,
        endLoad
    ]);
    // toggle layer visibility & trigger load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = mapRef.current;
        if (!map) return;
        LAYERS.forEach((layer)=>{
            const isPlants = "plantTiles" in layer && layer.plantTiles;
            const vis = visibleLayers.has(layer.id) ? "visible" : "none";
            const ids = isPlants ? [
                layer.id
            ] : layer.kind === "point" ? [
                layer.id,
                `${layer.id}-clusters`,
                `${layer.id}-count`
            ] : [
                layer.id
            ];
            ids.forEach((id)=>{
                if (map.getLayer(id)) map.setLayoutProperty(id, "visibility", vis);
            });
            if (visibleLayers.has(layer.id) && !loadedLayers.has(layer.id)) {
                if (map.isStyleLoaded()) loadLayer(layer);
                else map.once("load", ()=>loadLayer(layer));
            }
        });
    }, [
        visibleLayers,
        loadedLayers,
        loadLayer
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: "100%",
            height: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: 380,
                    zIndex: 50,
                    transform: selectedPlant ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.28s cubic-bezier(0.4,0,0.2,1)",
                    background: "#fff",
                    boxShadow: "-4px 0 32px rgba(0,0,0,0.18)",
                    display: "flex",
                    flexDirection: "column",
                    fontFamily: "Inter,sans-serif",
                    overflow: "hidden",
                    pointerEvents: selectedPlant ? "auto" : "none"
                },
                children: selectedPlant && (()=>{
                    const tileProps = selectedPlant.properties;
                    // prefer freshly fetched DB data; fall back to tile properties while loading
                    const p = fullDetail ?? tileProps;
                    const loading = !fullDetail;
                    const sanitaryId = typeof p.sanitary_id === "number" ? p.sanitary_id : parseInt(String(p.sanitary_id ?? ""), 10);
                    const sanitaryLabel = !isNaN(sanitaryId) ? SANITARY_LABEL[sanitaryId] : null;
                    const sanitaryClr = !isNaN(sanitaryId) ? sanitaryColor(sanitaryId) : "#6b7280";
                    const rows = [
                        {
                            label: "Тип",
                            value: PLANT_TYPE_LABEL[p.plant_type] ?? String(p.plant_type ?? "—")
                        },
                        {
                            label: "ID",
                            value: p.external_id != null ? String(p.external_id) : "—"
                        }
                    ];
                    if (sanitaryLabel) rows.push({
                        label: "Сан. состояние",
                        value: sanitaryLabel,
                        accent: sanitaryClr
                    });
                    if (p.redbook != null) rows.push({
                        label: "Краснокнижный",
                        value: p.redbook === 1 || p.redbook === true ? "Да" : "Нет",
                        accent: p.redbook === 1 || p.redbook === true ? "#dc2626" : undefined
                    });
                    if (p.pine != null) rows.push({
                        label: "Хвойное",
                        value: p.pine === 1 || p.pine === true ? "Да" : "Нет"
                    });
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "14px 18px 0",
                                    borderBottom: "1px solid #e5e7eb",
                                    background: "#f9fafb"
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
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: 13,
                                                            height: 13,
                                                            borderRadius: "50%",
                                                            background: selectedPlant.color,
                                                            flexShrink: 0,
                                                            boxShadow: "0 0 0 2px rgba(0,0,0,0.08)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 15,
                                                                    fontWeight: 700,
                                                                    color: "#111",
                                                                    lineHeight: 1.2
                                                                },
                                                                children: selectedPlant.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 23
                                                            }, this),
                                                            tileProps.external_id != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: "#9ca3af",
                                                                    marginTop: 2
                                                                },
                                                                children: [
                                                                    "ID ",
                                                                    String(tileProps.external_id)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 417,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedPlant(null);
                                                    setFullDetail(null);
                                                    popupRef.current?.remove();
                                                    setDrawerTab("detail");
                                                },
                                                style: {
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: "4px 6px",
                                                    borderRadius: 6,
                                                    color: "#9ca3af",
                                                    fontSize: 16,
                                                    lineHeight: 1
                                                },
                                                "aria-label": "Закрыть",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 0
                                        },
                                        children: [
                                            "detail",
                                            "analytics"
                                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setDrawerTab(tab),
                                                style: {
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: "6px 14px",
                                                    fontSize: 13,
                                                    fontWeight: drawerTab === tab ? 600 : 400,
                                                    color: drawerTab === tab ? "#16a34a" : "#9ca3af",
                                                    borderBottom: drawerTab === tab ? "2px solid #16a34a" : "2px solid transparent",
                                                    marginBottom: -1,
                                                    transition: "color 0.15s"
                                                },
                                                children: tab === "detail" ? "Объект" : "Аналитика"
                                            }, tab, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 430,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 428,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 402,
                                columnNumber: 15
                            }, this),
                            drawerTab === "detail" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto",
                                    padding: "16px 18px"
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
                                        children: "Зелёные насаждения"
                                    }, void 0, false, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 446,
                                        columnNumber: 19
                                    }, this),
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 6,
                                            alignItems: "center",
                                            padding: "8px 0",
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
                                                lineNumber: 451,
                                                columnNumber: 23
                                            }, this),
                                            "Загрузка…"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                        lineNumber: 450,
                                        columnNumber: 21
                                    }, this) : rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                padding: "8px 0",
                                                borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : "none"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        color: "#6b7280"
                                                    },
                                                    children: row.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        color: row.accent ?? "#111",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 5
                                                    },
                                                    children: [
                                                        row.accent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: 8,
                                                                height: 8,
                                                                borderRadius: "50%",
                                                                background: row.accent,
                                                                display: "inline-block"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 40
                                                        }, this),
                                                        row.value
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                            lineNumber: 455,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 445,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto",
                                    padding: "16px 18px"
                                },
                                children: !stats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: 6,
                                        alignItems: "center",
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
                                            lineNumber: 472,
                                            columnNumber: 23
                                        }, this),
                                        "Загрузка статистики…"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                    lineNumber: 471,
                                    columnNumber: 21
                                }, this) : (()=>{
                                    const fmt = (n)=>n.toLocaleString("ru-RU");
                                    const typeColors = {
                                        1: "#15803d",
                                        2: "#4ade80",
                                        3: "#166534",
                                        4: "#86efac",
                                        5: "#22c55e",
                                        6: "#f472b6",
                                        7: "#a3e635",
                                        8: "#84cc16"
                                    };
                                    const maxType = Math.max(...stats.byType.map((r)=>r.count));
                                    const maxSan = Math.max(...stats.bySanitary.map((r)=>r.count));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr 1fr",
                                                    gap: 8,
                                                    marginBottom: 20
                                                },
                                                children: [
                                                    {
                                                        label: "Всего",
                                                        value: fmt(stats.total),
                                                        color: "#16a34a"
                                                    },
                                                    {
                                                        label: "Краснокнижных",
                                                        value: fmt(stats.redbook),
                                                        color: "#dc2626"
                                                    },
                                                    {
                                                        label: "Хвойных",
                                                        value: fmt(stats.pine),
                                                        color: "#0891b2"
                                                    }
                                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "#f9fafb",
                                                            borderRadius: 10,
                                                            padding: "10px 8px",
                                                            textAlign: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 16,
                                                                    fontWeight: 700,
                                                                    color: c.color
                                                                },
                                                                children: c.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: "#9ca3af",
                                                                    marginTop: 2
                                                                },
                                                                children: c.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 491,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, c.label, true, {
                                                        fileName: "[project]/components/eco-almaty-map.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 483,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 600,
                                                    color: "#9ca3af",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.08em",
                                                    marginBottom: 8
                                                },
                                                children: "По типу"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 497,
                                                columnNumber: 25
                                            }, this),
                                            stats.byType.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: 7
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                fontSize: 12,
                                                                marginBottom: 3
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: "#374151"
                                                                    },
                                                                    children: PLANT_TYPE_LABEL[r.type] ?? `Тип ${r.type}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: "#6b7280",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: fmt(r.count)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: 5,
                                                                background: "#f3f4f6",
                                                                borderRadius: 3,
                                                                overflow: "hidden"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: "100%",
                                                                    width: `${r.count / maxType * 100}%`,
                                                                    background: typeColors[r.type] ?? "#16a34a",
                                                                    borderRadius: 3
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 505,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, r.type, true, {
                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 27
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    fontWeight: 600,
                                                    color: "#9ca3af",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.08em",
                                                    margin: "16px 0 8px"
                                                },
                                                children: "Санитарное состояние"
                                            }, void 0, false, {
                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                lineNumber: 511,
                                                columnNumber: 25
                                            }, this),
                                            stats.bySanitary.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginBottom: 7
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                fontSize: 12,
                                                                marginBottom: 3
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: "#374151",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: 5
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                width: 7,
                                                                                height: 7,
                                                                                borderRadius: "50%",
                                                                                background: sanitaryColor(r.id),
                                                                                display: "inline-block"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                                                            lineNumber: 516,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        SANITARY_LABEL[r.id] ?? `КСО-${r.id}`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                                    lineNumber: 515,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: "#6b7280",
                                                                        fontWeight: 600
                                                                    },
                                                                    children: fmt(r.count)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                height: 5,
                                                                background: "#f3f4f6",
                                                                borderRadius: 3,
                                                                overflow: "hidden"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: "100%",
                                                                    width: `${r.count / maxSan * 100}%`,
                                                                    background: sanitaryColor(r.id),
                                                                    borderRadius: 3
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/eco-almaty-map.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/eco-almaty-map.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/components/eco-almaty-map.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 27
                                                }, this))
                                        ]
                                    }, void 0, true);
                                })()
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 469,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true);
                })()
            }, void 0, false, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            globalLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
            @keyframes spin  { to { transform: rotate(360deg) } }
            @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
          `
                    }, void 0, false, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 546,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 550,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            color: "#fff",
                            fontFamily: "Inter,sans-serif"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 15,
                                    fontWeight: 600,
                                    letterSpacing: 0.2
                                },
                                children: "Загрузка данных карты"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    color: "rgba(255,255,255,0.6)",
                                    marginTop: 4,
                                    animation: "pulse 1.5s ease-in-out infinite"
                                },
                                children: "Пожалуйста, подождите…"
                            }, void 0, false, {
                                fileName: "[project]/components/eco-almaty-map.tsx",
                                lineNumber: 558,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/eco-almaty-map.tsx",
                        lineNumber: 556,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/eco-almaty-map.tsx",
                lineNumber: 538,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/eco-almaty-map.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/eco-almaty/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/eco-almaty/page.tsx'\n\nUnterminated regexp literal");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=_b7054cb6._.js.map