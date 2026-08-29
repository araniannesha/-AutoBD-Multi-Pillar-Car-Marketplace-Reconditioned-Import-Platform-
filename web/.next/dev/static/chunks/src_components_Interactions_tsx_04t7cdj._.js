(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Interactions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Interactions",
    ()=>Interactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Interactions() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Click ripple + aurora parallax — set up once.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Interactions.useEffect": ()=>{
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const onClick = {
                "Interactions.useEffect.onClick": (e)=>{
                    const el = e.target;
                    if (el instanceof Element && el.closest("input, textarea, select, [contenteditable='true']")) return;
                    const burst = document.createElement("span");
                    burst.className = "click-burst";
                    burst.style.left = `${e.clientX}px`;
                    burst.style.top = `${e.clientY}px`;
                    document.body.appendChild(burst);
                    burst.addEventListener("animationend", {
                        "Interactions.useEffect.onClick": ()=>burst.remove()
                    }["Interactions.useEffect.onClick"]);
                }
            }["Interactions.useEffect.onClick"];
            document.addEventListener("click", onClick);
            let raf = 0;
            const onScroll = {
                "Interactions.useEffect.onScroll": ()=>{
                    if (raf) return;
                    raf = requestAnimationFrame({
                        "Interactions.useEffect.onScroll": ()=>{
                            document.documentElement.style.setProperty("--scroll", String(window.scrollY));
                            raf = 0;
                        }
                    }["Interactions.useEffect.onScroll"]);
                }
            }["Interactions.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            // Cursor spotlight — feed the pointer position to the CSS glow.
            let lx = 0;
            let ly = 0;
            let mraf = 0;
            const onMove = {
                "Interactions.useEffect.onMove": (e)=>{
                    lx = e.clientX;
                    ly = e.clientY;
                    if (mraf) return;
                    mraf = requestAnimationFrame({
                        "Interactions.useEffect.onMove": ()=>{
                            const s = document.documentElement.style;
                            s.setProperty("--mx", `${lx}px`);
                            s.setProperty("--my", `${ly}px`);
                            s.setProperty("--glow-op", "1");
                            mraf = 0;
                        }
                    }["Interactions.useEffect.onMove"]);
                }
            }["Interactions.useEffect.onMove"];
            window.addEventListener("mousemove", onMove, {
                passive: true
            });
            return ({
                "Interactions.useEffect": ()=>{
                    document.removeEventListener("click", onClick);
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("mousemove", onMove);
                    if (raf) cancelAnimationFrame(raf);
                    if (mraf) cancelAnimationFrame(mraf);
                }
            })["Interactions.useEffect"];
        }
    }["Interactions.useEffect"], []);
    // Scroll-reveal — re-scan whenever the route changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Interactions.useEffect": ()=>{
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const io = new IntersectionObserver({
                "Interactions.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            entry.target.classList.add("sr-in");
                            io.unobserve(entry.target);
                        }
                    }
                }
            }["Interactions.useEffect"], {
                threshold: 0.06,
                rootMargin: "0px 0px -6% 0px"
            });
            // Measure after two frames so the page has actually laid out, then hide the
            // below-the-fold tiles so they animate in on scroll. Above-the-fold content
            // keeps its load-cascade.
            let raf1 = 0;
            let raf2 = 0;
            raf1 = requestAnimationFrame({
                "Interactions.useEffect": ()=>{
                    raf2 = requestAnimationFrame({
                        "Interactions.useEffect": ()=>{
                            const vh = window.innerHeight;
                            const nodes = document.querySelectorAll("main [class*='grid']:not(.stagger) > *");
                            nodes.forEach({
                                "Interactions.useEffect": (node)=>{
                                    if (node.getBoundingClientRect().top <= vh * 0.82) return; // above fold
                                    node.classList.add("sr");
                                    const siblings = node.parentElement?.children;
                                    const idx = siblings ? Array.prototype.indexOf.call(siblings, node) : 0;
                                    node.style.transitionDelay = `${Math.min(idx * 55, 320)}ms`;
                                    io.observe(node);
                                }
                            }["Interactions.useEffect"]);
                        }
                    }["Interactions.useEffect"]);
                }
            }["Interactions.useEffect"]);
            return ({
                "Interactions.useEffect": ()=>{
                    cancelAnimationFrame(raf1);
                    cancelAnimationFrame(raf2);
                    io.disconnect();
                }
            })["Interactions.useEffect"];
        }
    }["Interactions.useEffect"], [
        pathname
    ]);
    return null;
}
_s(Interactions, "tjXKfJWuFDa0epp0CJaCeazyqhM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Interactions;
var _c;
__turbopack_context__.k.register(_c, "Interactions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_Interactions_tsx_04t7cdj._.js.map