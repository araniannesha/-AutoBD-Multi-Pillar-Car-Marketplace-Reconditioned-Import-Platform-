module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
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
"[project]/src/components/Interactions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Interactions",
    ()=>Interactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function Interactions() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Click ripple + aurora parallax — set up once.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const onClick = (e)=>{
            const el = e.target;
            if (el instanceof Element && el.closest("input, textarea, select, [contenteditable='true']")) return;
            const burst = document.createElement("span");
            burst.className = "click-burst";
            burst.style.left = `${e.clientX}px`;
            burst.style.top = `${e.clientY}px`;
            document.body.appendChild(burst);
            burst.addEventListener("animationend", ()=>burst.remove());
        };
        document.addEventListener("click", onClick);
        let raf = 0;
        const onScroll = ()=>{
            if (raf) return;
            raf = requestAnimationFrame(()=>{
                document.documentElement.style.setProperty("--scroll", String(window.scrollY));
                raf = 0;
            });
        };
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        // Cursor spotlight — feed the pointer position to the CSS glow.
        let lx = 0;
        let ly = 0;
        let mraf = 0;
        const onMove = (e)=>{
            lx = e.clientX;
            ly = e.clientY;
            if (mraf) return;
            mraf = requestAnimationFrame(()=>{
                const s = document.documentElement.style;
                s.setProperty("--mx", `${lx}px`);
                s.setProperty("--my", `${ly}px`);
                s.setProperty("--glow-op", "1");
                mraf = 0;
            });
        };
        window.addEventListener("mousemove", onMove, {
            passive: true
        });
        return ()=>{
            document.removeEventListener("click", onClick);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMove);
            if (raf) cancelAnimationFrame(raf);
            if (mraf) cancelAnimationFrame(mraf);
        };
    }, []);
    // Scroll-reveal — re-scan whenever the route changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const io = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                if (entry.isIntersecting) {
                    entry.target.classList.add("sr-in");
                    io.unobserve(entry.target);
                }
            }
        }, {
            threshold: 0.06,
            rootMargin: "0px 0px -6% 0px"
        });
        // Measure after two frames so the page has actually laid out, then hide the
        // below-the-fold tiles so they animate in on scroll. Above-the-fold content
        // keeps its load-cascade.
        let raf1 = 0;
        let raf2 = 0;
        raf1 = requestAnimationFrame(()=>{
            raf2 = requestAnimationFrame(()=>{
                const vh = window.innerHeight;
                const nodes = document.querySelectorAll("main [class*='grid']:not(.stagger) > *");
                nodes.forEach((node)=>{
                    if (node.getBoundingClientRect().top <= vh * 0.82) return; // above fold
                    node.classList.add("sr");
                    const siblings = node.parentElement?.children;
                    const idx = siblings ? Array.prototype.indexOf.call(siblings, node) : 0;
                    node.style.transitionDelay = `${Math.min(idx * 55, 320)}ms`;
                    io.observe(node);
                });
            });
        });
        return ()=>{
            cancelAnimationFrame(raf1);
            cancelAnimationFrame(raf2);
            io.disconnect();
        };
    }, [
        pathname
    ]);
    return null;
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ds4sff._.js.map