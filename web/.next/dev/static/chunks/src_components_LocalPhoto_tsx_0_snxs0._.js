(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LocalPhoto.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalPhoto",
    ()=>LocalPhoto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LocalPhoto({ srcs, alt, fallback, imgClassName, containerClassName, containerStyle }) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const src = srcs[index];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${containerClassName ?? ""}`,
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    opacity: loaded ? 0 : 1,
                    transition: "opacity 0.2s ease"
                },
                "aria-hidden": loaded,
                children: fallback
            }, void 0, false, {
                fileName: "[project]/src/components/LocalPhoto.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            src && // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt,
                // A cached image can finish loading before React attaches onLoad, so
                // check `complete` on mount too — otherwise it stays invisible.
                ref: (node)=>{
                    if (node?.complete && node.naturalWidth > 0) setLoaded(true);
                },
                className: `absolute inset-0 h-full w-full ${imgClassName ?? ""}`,
                style: {
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.2s ease"
                },
                onLoad: ()=>setLoaded(true),
                onError: ()=>{
                    setLoaded(false);
                    setIndex((i)=>i + 1);
                }
            }, src, false, {
                fileName: "[project]/src/components/LocalPhoto.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LocalPhoto.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(LocalPhoto, "7WuCm8TKOwCsVt876L/n+FWMnBY=");
_c = LocalPhoto;
var _c;
__turbopack_context__.k.register(_c, "LocalPhoto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_LocalPhoto_tsx_0_snxs0._.js.map