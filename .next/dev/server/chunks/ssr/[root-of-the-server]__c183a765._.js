module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/menuData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menu",
    ()=>menu
]);
const menu = {
    smoothies: [
        {
            name: "Jumbo Jumpstart",
            price: 7.5,
            desc: "Banana, peanut butter, whey protein, oat milk, honey.",
            cals: 420,
            tags: [
                "Protein",
                "Vegetarian"
            ]
        },
        {
            name: "Blue & Brown Blast",
            price: 7.0,
            desc: "Blueberries, cacao, spinach, Greek yogurt, almond milk.",
            cals: 360,
            tags: [
                "Antioxidants"
            ]
        },
        {
            name: "Green Lecture",
            price: 6.75,
            desc: "Mango, pineapple, kale, ginger, coconut water.",
            cals: 290,
            tags: [
                "Vegan"
            ]
        }
    ],
    bowls: [
        {
            name: "Power Grain Bowl",
            price: 10.5,
            desc: "Quinoa, roasted sweet potato, chicken, kale, tahini-lemon.",
            cals: 560,
            tags: [
                "Gluten-free"
            ]
        },
        {
            name: "Mediterranean Crunch",
            price: 9.75,
            desc: "Greens, farro, chickpeas, cucumber, feta, olive vinaigrette.",
            cals: 520,
            tags: [
                "Vegetarian"
            ]
        },
        {
            name: "Tofu Teriyaki",
            price: 9.5,
            desc: "Brown rice, sesame tofu, broccoli, scallion, light teriyaki.",
            cals: 540,
            tags: [
                "Vegan"
            ]
        }
    ],
    snacks: [
        {
            name: "Greek Yogurt Cup",
            price: 4.0,
            desc: "Low-sugar yogurt, house granola, seasonal fruit.",
            cals: 250,
            tags: [
                "Vegetarian"
            ]
        },
        {
            name: "PB Oats Bar",
            price: 3.25,
            desc: "House-made oat bar with peanut butter and chia.",
            cals: 220
        },
        {
            name: "Apple + Almond Pack",
            price: 2.75,
            desc: "Crisp apple with a handful of almonds.",
            cals: 200,
            tags: [
                "Vegan",
                "Gluten-free"
            ]
        }
    ],
    drinks: [
        {
            name: "Cold Brew",
            price: 3.5,
            desc: "Smooth and strong. Add oat milk +$0.50.",
            tags: [
                "Caffeine"
            ]
        },
        {
            name: "Herbal Iced Tea",
            price: 2.75,
            desc: "Unsweetened or lightly sweetened."
        },
        {
            name: "Electrolyte Water",
            price: 2.5,
            desc: "Rehydrate fast after practice.",
            tags: [
                "Hydration"
            ]
        }
    ]
};
}),
"[project]/components/MenuCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function MenuCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-2xl border bg-white p-5 shadow-soft",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-lg",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/components/MenuCard.tsx",
                        lineNumber: 13,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-semibold text-tufts-blue",
                        children: [
                            "$",
                            item.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MenuCard.tsx",
                        lineNumber: 14,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MenuCard.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-neutral-700",
                children: item.desc
            }, void 0, false, {
                fileName: "[project]/components/MenuCard.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: [
                    item.cals ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs px-2 py-1 rounded-full bg-neutral-100 border",
                        children: [
                            item.cals,
                            " kcal"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MenuCard.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this) : null,
                    item.tags?.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs px-2 py-1 rounded-full bg-neutral-100 border",
                            children: t
                        }, t, false, {
                            fileName: "[project]/components/MenuCard.tsx",
                            lineNumber: 24,
                            columnNumber: 17
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/MenuCard.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MenuCard.tsx",
        lineNumber: 11,
        columnNumber: 11
    }, this);
}
}),
"[project]/app/menu/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menuData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/menuData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MenuCard.tsx [app-rsc] (ecmascript)");
;
;
;
function MenuPage() {
    const sections = [
        {
            id: "smoothies",
            title: "Smoothies"
        },
        {
            id: "bowls",
            title: "Power Bowls"
        },
        {
            id: "snacks",
            title: "Smart Snacks"
        },
        {
            id: "drinks",
            title: "Drinks"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10 md:py-14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl md:text-4xl font-bold",
                    children: "Menu"
                }, void 0, false, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-neutral-700",
                    children: "Nutrient-dense options made fast. Prices include tax."
                }, void 0, false, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mt-6 flex flex-wrap gap-2",
                    children: sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${s.id}`,
                            className: "px-4 py-2 rounded-full border text-sm hover:bg-neutral-50",
                            children: s.title
                        }, s.id, false, {
                            fileName: "[project]/app/menu/page.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/menu/page.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: s.id,
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold",
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/app/menu/page.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menuData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menu"][s.id].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        item: item
                                    }, item.name, false, {
                                        fileName: "[project]/app/menu/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/menu/page.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.id, true, {
                        fileName: "[project]/app/menu/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/menu/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/menu/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/menu/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/menu/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c183a765._.js.map