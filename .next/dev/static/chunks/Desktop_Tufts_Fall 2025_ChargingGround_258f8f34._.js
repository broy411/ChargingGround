(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/lib/CartContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CartProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function addToCart(item) {
        setCart((prev)=>[
                ...prev,
                item
            ]);
    }
    function clearCart() {
        setCart([]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            clearCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/lib/CartContext.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "ZqFaEIYkzI5UoYUmTgmqHbYYm/0=");
_c = CartProvider;
function useCart() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
}
_s1(useCart, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/components/MenuCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/lib/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MenuCard({ item }) {
    _s();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-2xl border bg-white p-5 shadow-soft",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold",
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/components/MenuCard.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "$",
                            item.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/components/MenuCard.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/components/MenuCard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-neutral-700 mt-1",
                children: item.desc
            }, void 0, false, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/components/MenuCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>addToCart(item),
                className: "btn btn-primary mt-3",
                children: "Add to Cart"
            }, void 0, false, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/components/MenuCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/components/MenuCard.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(MenuCard, "YPx5musMedcmtt2OkzMtHcKllYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = MenuCard;
var _c;
__turbopack_context__.k.register(_c, "MenuCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Tufts_Fall%202025_ChargingGround_258f8f34._.js.map