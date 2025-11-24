module.exports = [
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/lib/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://algvhtwsybzwiimmglxr.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_Ie8MREsRiI-2yWmEae7HHQ_YD4Xljal"));
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/lib/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Tufts/Fall 2025/ChargingGround/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AdminPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser().then(({ data })=>{
            if (!data.user) router.push("/admin/login");
            else setUser(data.user);
        });
    }, []);
    // Load orders continuously
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) return;
        const fetchOrders = async ()=>{
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").select("*").order("created_at", {
                ascending: false
            });
            if (!error && data) {
                setOrders((prev)=>{
                    // Insert new ones but keep removed ones gone
                    const previousIds = prev.map((o)=>o.id);
                    const newOnes = data.filter((o)=>!previousIds.includes(o.id));
                    // Keep only orders that aren't picked up
                    const filtered = data.filter((o)=>o.status !== "picked-up");
                    return filtered;
                });
            }
        };
        fetchOrders();
        const interval = setInterval(fetchOrders, 4000);
        return ()=>clearInterval(interval);
    }, [
        user
    ]);
    // --- THIS ONE GUARANTEES REMOVAL ---
    async function updateStatus(id, status) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").update({
            status
        }).eq("id", id);
        if (status === "picked-up") {
            setOrders((prev)=>prev.filter((o)=>o.id !== id)); // <- removes instantly
        } else {
            setOrders((prev)=>prev.map((o)=>o.id === id ? {
                        ...o,
                        status
                    } : o));
        }
    }
    if (!orders) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-page py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "All Orders"
            }, void 0, false, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No current orders."
            }, void 0, false, {
                fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this) : orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border rounded mb-4 bg-white shadow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Name:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 20
                                                }, this),
                                                " ",
                                                order.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 20
                                                }, this),
                                                " ",
                                                order.status
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "border p-1 rounded",
                                    value: order.status,
                                    onChange: (e)=>updateStatus(order.id, e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "pending",
                                            children: "Pending"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "preparing",
                                            children: "Preparing"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "ready",
                                            children: "Ready"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "picked-up",
                                            children: "Picked Up"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Items:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc ml-5",
                                    children: order.items?.map((i, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Tufts$2f$Fall__2025$2f$ChargingGround$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                i.item?.name,
                                                " x",
                                                i.qty
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, order.id, true, {
                    fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Tufts/Fall 2025/ChargingGround/app/admin/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__335ac973._.js.map