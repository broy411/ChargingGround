module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://algvhtwsybzwiimmglxr.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_Ie8MREsRiI-2yWmEae7HHQ_YD4Xljal"));
}),
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrackOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/lib/supabase.ts [app-rsc] (ecmascript)");
;
;
async function TrackOrder({ params }) {
    const { data: order } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from("orders").select().eq("id", params.id).single();
    if (!order) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-page py-10",
            children: "Order not found."
        }, void 0, false, {
            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx",
            lineNumber: 11,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-page py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold",
                children: "Order Status"
            }, void 0, false, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4",
                children: [
                    "Order ID: ",
                    order.id
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Status:"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    " ",
                    order.status
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/track/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08637a26._.js.map