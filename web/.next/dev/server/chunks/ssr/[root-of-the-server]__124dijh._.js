module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/lib/brta.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * BRTA Registration Paper Value Tracker.
 *
 * The FR asks this of "any used or reconditioned listing": how many years of
 * import-eligible registration life remain before the car ages out of common
 * resale categories. The agreed formula is
 *
 *     yearsRemaining = importEligibilityMaxAgeYears - (currentYear - manufactureYear)
 *
 * Cars past the limit are "aged out" — a real and meaningful state for a
 * domestic used listing, which (unlike an auction lot) is not blocked by the
 * import-eligibility gate.
 */ __turbopack_context__.s([
    "brtaPaperValue",
    ()=>brtaPaperValue
]);
function brtaPaperValue(manufactureYear, maxAgeYears, now = new Date()) {
    const age = now.getFullYear() - manufactureYear;
    const remaining = maxAgeYears - age;
    if (remaining <= 0) {
        const over = Math.abs(remaining);
        return {
            yearsRemaining: 0,
            pct: 0,
            yearsOverLimit: over,
            isAgedOut: true,
            label: over === 0 ? `Aged out this year — past the ${maxAgeYears}-year import-eligibility limit` : `Aged out ${over} ${over === 1 ? "year" : "years"} ago — past the ${maxAgeYears}-year import-eligibility limit`
        };
    }
    return {
        yearsRemaining: remaining,
        pct: Math.min(100, remaining / maxAgeYears * 100),
        yearsOverLimit: 0,
        isAgedOut: false,
        label: `${remaining} ${remaining === 1 ? "year" : "years"} import-eligible registration life remaining`
    };
}
}),
"[project]/src/components/PhotoPlaceholder.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The prototype's hatched photo box. The schema carries no image columns and
 * the prototype ships no photos, so this is a faithful port of its placeholder
 * rather than simulated data.
 */ __turbopack_context__.s([
    "PhotoPlaceholder",
    ()=>PhotoPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function PhotoPlaceholder({ label, height, radius = 10, tint = "sand", className = "" }) {
    const stripes = tint === "green" ? "repeating-linear-gradient(135deg,#eef2ee,#eef2ee 10px,#e2ebe4 10px,#e2ebe4 20px)" : "repeating-linear-gradient(135deg,#efece3,#efece3 10px,var(--border) 10px,var(--border) 20px)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center ${className}`,
        style: {
            height,
            borderRadius: radius,
            background: stripes
        },
        children: label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-mono text-[11px]",
            style: {
                color: tint === "green" ? "#7a8a7d" : "#8a8577"
            },
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/PhotoPlaceholder.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PhotoPlaceholder.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/StatusChip.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pill",
    ()=>Pill,
    "accidentPill",
    ()=>accidentPill,
    "listingStatusPill",
    ()=>listingStatusPill,
    "verifiedPill",
    ()=>verifiedPill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
;
;
/**
 * The prototype's verification/accident pills. Colours are fixed rather than
 * theme-driven — the tinted backgrounds are meaningful (green = good, amber =
 * caution, grey = unknown) and must stay legible in both themes.
 */ const TONE = {
    good: {
        bg: "#e8f5ee",
        color: "#1e6b42"
    },
    warn: {
        bg: "#fdf3e3",
        color: "#8a5b12"
    },
    unknown: {
        bg: "#efeee9",
        color: "#6f6a60"
    },
    bad: {
        bg: "#fdecea",
        color: "#c1442d"
    }
};
function Pill({ tone, children, size = "sm" }) {
    const { bg, color } = TONE[tone];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: size === "sm" ? "rounded-md px-[7px] py-[3px] text-[10.5px]" : "rounded-[7px] px-2.5 py-[5px] text-xs",
        style: {
            background: bg,
            color
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/StatusChip.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function verifiedPill(ownershipVerified) {
    return ownershipVerified ? {
        tone: "good",
        label: "Verified Ownership"
    } : {
        tone: "unknown",
        label: "Verification Pending"
    };
}
function accidentPill(status) {
    switch(status){
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccidentStatus"].NONE_FOUND:
            return {
                tone: "good",
                label: "Accident: None Found"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccidentStatus"].ONE_INCIDENT:
            return {
                tone: "warn",
                label: "1 Incident Recorded"
            };
        default:
            return {
                tone: "unknown",
                label: "Accident: Not Checked"
            };
    }
}
function listingStatusPill(status) {
    switch(status){
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].ACTIVE:
            return {
                tone: "good",
                label: "Active"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].OFFER_RECEIVED:
            return {
                tone: "warn",
                label: "Offer received"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD:
            return {
                tone: "unknown",
                label: "Sold"
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].REJECTED:
            return {
                tone: "bad",
                label: "Rejected"
            };
        default:
            return {
                tone: "warn",
                label: "Pending review"
            };
    }
}
}),
"[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfferForm",
    ()=>OfferForm
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const OfferForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OfferForm() from the server but OfferForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx <module evaluation>", "OfferForm");
}),
"[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfferForm",
    ()=>OfferForm
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const OfferForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OfferForm() from the server but OfferForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx", "OfferForm");
}),
"[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$OfferForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$OfferForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$OfferForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingGallery",
    ()=>ListingGallery
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ListingGallery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListingGallery() from the server but ListingGallery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx <module evaluation>", "ListingGallery");
}),
"[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingGallery",
    ()=>ListingGallery
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ListingGallery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListingGallery() from the server but ListingGallery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx", "ListingGallery");
}),
"[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$ListingGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$ListingGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$ListingGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkSoldButton",
    ()=>MarkSoldButton,
    "OfferActions",
    ()=>OfferActions
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MarkSoldButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MarkSoldButton() from the server but MarkSoldButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx <module evaluation>", "MarkSoldButton");
const OfferActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OfferActions() from the server but OfferActions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx <module evaluation>", "OfferActions");
}),
"[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkSoldButton",
    ()=>MarkSoldButton,
    "OfferActions",
    ()=>OfferActions
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const MarkSoldButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MarkSoldButton() from the server but MarkSoldButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx", "MarkSoldButton");
const OfferActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OfferActions() from the server but OfferActions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx", "OfferActions");
}),
"[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$SellerControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$SellerControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$SellerControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/AddToCartButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCartButton",
    ()=>AddToCartButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AddToCartButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AddToCartButton() from the server but AddToCartButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/AddToCartButton.tsx <module evaluation>", "AddToCartButton");
}),
"[project]/src/components/AddToCartButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCartButton",
    ()=>AddToCartButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AddToCartButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AddToCartButton() from the server but AddToCartButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/AddToCartButton.tsx", "AddToCartButton");
}),
"[project]/src/components/AddToCartButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/AddToCartButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/AddToCartButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ListingChatPanel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingChatPanel",
    ()=>ListingChatPanel
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ListingChatPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListingChatPanel() from the server but ListingChatPanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ListingChatPanel.tsx <module evaluation>", "ListingChatPanel");
}),
"[project]/src/components/ListingChatPanel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListingChatPanel",
    ()=>ListingChatPanel
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ListingChatPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListingChatPanel() from the server but ListingChatPanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ListingChatPanel.tsx", "ListingChatPanel");
}),
"[project]/src/components/ListingChatPanel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListingChatPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ListingChatPanel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListingChatPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ListingChatPanel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListingChatPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>UsedCarDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brta.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoPlaceholder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhotoPlaceholder.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusChip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StatusChip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$OfferForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$ListingGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/ListingGallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$SellerControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/SellerControls.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddToCartButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListingChatPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ListingChatPanel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
async function UsedCarDetailPage({ params }) {
    const { id } = await params;
    const [listing, buyer, maxAge] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
            where: {
                id
            },
            include: {
                seller: {
                    select: {
                        id: true,
                        fullName: true
                    }
                }
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentBuyer"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSetting"])("importEligibilityMaxAgeYears")
    ]);
    if (!listing) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const isOwnListing = buyer?.id === listing.sellerId;
    const isPublic = listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].ACTIVE || listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].OFFER_RECEIVED || listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD;
    // Pending and rejected listings are private to their owner — everyone else
    // gets a 404 until an admin approves them. Admins review from the admin panel.
    if (!isPublic && !isOwnListing) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const myOffer = buyer ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.findFirst({
        where: {
            listingId: id,
            buyerId: buyer.id,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].PENDING
        }
    }) : null;
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusChip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifiedPill"])(listing.ownershipVerified);
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusChip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["accidentPill"])(listing.accidentStatus);
    const paper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brta$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brtaPaperValue"])(listing.manufactureYear, maxAge);
    // Structured spec rows — only the fields the seller actually provided show up.
    const detailRows = [
        [
            "Year",
            String(listing.manufactureYear)
        ],
        [
            "Mileage",
            `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["km"])(listing.mileageKm)} km`
        ]
    ];
    if (listing.transmission) detailRows.push([
        "Transmission",
        listing.transmission
    ]);
    if (listing.fuelType) detailRows.push([
        "Fuel",
        listing.fuelType
    ]);
    if (listing.engineCc) detailRows.push([
        "Engine",
        `${listing.engineCc} cc`
    ]);
    if (listing.color) detailRows.push([
        "Colour",
        listing.color
    ]);
    if (listing.registrationNumber) detailRows.push([
        "Registration",
        listing.registrationNumber
    ]);
    if (listing.registrationYear) detailRows.push([
        "Registered",
        String(listing.registrationYear)
    ]);
    const isSold = listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD;
    const blockedReason = !buyer ? "Offers are available on buyer accounts." : isOwnListing ? "This is your own listing — offers appear on your seller dashboard." : isSold ? "This car has already been sold." : undefined;
    let offers = [];
    let sellerThreads = [];
    let myThreadId = null;
    let myMessages = [];
    if (isOwnListing && isPublic) {
        const [offerRows, threadRows] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.findMany({
                where: {
                    listingId: id
                },
                orderBy: {
                    createdAt: "desc"
                },
                include: {
                    buyer: {
                        select: {
                            fullName: true
                        }
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].listingThread.findMany({
                where: {
                    listingId: id
                },
                orderBy: {
                    createdAt: "asc"
                },
                include: {
                    buyer: {
                        select: {
                            fullName: true
                        }
                    },
                    messages: {
                        orderBy: {
                            createdAt: "asc"
                        },
                        take: 200,
                        include: {
                            senderBuyer: {
                                select: {
                                    fullName: true
                                }
                            }
                        }
                    }
                }
            })
        ]);
        offers = offerRows.map((o)=>({
                id: o.id,
                amount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdt"])(o.amountBdt),
                buyerName: o.buyer.fullName,
                status: o.status,
                createdAt: o.createdAt
            }));
        sellerThreads = threadRows.map((t)=>({
                id: t.id,
                buyerName: t.buyer.fullName,
                messages: t.messages.map((m)=>({
                        id: m.id,
                        body: m.body,
                        createdAt: m.createdAt.toISOString(),
                        mine: m.senderBuyerId === buyer?.id,
                        senderLabel: m.senderBuyer.fullName
                    }))
            }));
    } else if (buyer && !isOwnListing && !isSold) {
        const t = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].listingThread.findUnique({
            where: {
                listingId_buyerId: {
                    listingId: id,
                    buyerId: buyer.id
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    },
                    take: 200,
                    include: {
                        senderBuyer: {
                            select: {
                                fullName: true
                            }
                        }
                    }
                }
            }
        });
        if (t) {
            myThreadId = t.id;
            myMessages = t.messages.map((m)=>({
                    id: m.id,
                    body: m.body,
                    createdAt: m.createdAt.toISOString(),
                    mine: m.senderBuyerId === buyer.id,
                    senderLabel: m.senderBuyer.fullName
                }));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto w-full max-w-[900px] px-10 pb-25 pt-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/used-cars",
                className: "mb-4.5 block text-[13px] text-muted hover:text-text",
                children: "← Back to used cars"
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            isOwnListing && listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].PENDING_VERIFICATION && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4.5 rounded-xl border border-[#e7d9b0] bg-[#fdf6e3] px-4 py-3 text-[13px] font-semibold text-[#8a5b12]",
                children: "This listing is awaiting admin review — it isn't on the public marketplace yet. You'll see it go live here once approved."
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 151,
                columnNumber: 9
            }, this),
            isOwnListing && listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].REJECTED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4.5 rounded-xl border border-[#f0d0c8] bg-[#fdecea] px-4 py-3 text-[13px] text-[#c1442d]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold",
                        children: "This listing was rejected."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    " ",
                    listing.rejectionReason ?? "Please review the details and submit again."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            listing.photoUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$ListingGallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingGallery"], {
                photos: listing.photoUrls,
                alt: listing.title
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoPlaceholder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhotoPlaceholder"], {
                label: "listing photos",
                height: 220,
                radius: 14,
                className: "mb-4.5"
            }, void 0, false, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3.5 flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mb-1 text-[26px] font-extrabold text-text",
                                children: listing.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["km"])(listing.mileageKm),
                                    " km · ",
                                    listing.location,
                                    " · Seller:",
                                    " ",
                                    listing.seller.fullName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "whitespace-nowrap text-2xl font-extrabold text-accent",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdtLakh"])(listing.priceBdt)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusChip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pill"], {
                        tone: v.tone,
                        size: "md",
                        children: v.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusChip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pill"], {
                        tone: a.tone,
                        size: "md",
                        children: a.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-4 rounded-2xl border border-border bg-card p-[22px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-[13px] font-bold uppercase tracking-[0.04em] text-dim",
                        children: "Vehicle details"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3",
                        children: detailRows.map(([k, val])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "text-[11px] uppercase tracking-[0.03em] text-dim",
                                        children: k
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-sm font-semibold text-text",
                                        children: val
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, k, true, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            listing.videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-4 rounded-2xl border border-border bg-card p-[22px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-[13px] font-bold uppercase tracking-[0.04em] text-dim",
                        children: "360° / walkaround video"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        controls: true,
                        playsInline: true,
                        preload: "metadata",
                        src: listing.videoUrl,
                        className: "max-h-[460px] w-full rounded-xl border border-border bg-black"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-4 rounded-2xl border border-border bg-card p-[22px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-2.5 text-[13px] font-bold uppercase tracking-[0.04em] text-dim",
                        children: "Condition notes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3.5 text-sm leading-[1.6] text-text",
                        children: listing.conditionNotes
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] text-muted",
                        children: [
                            "Inspection report: ",
                            listing.inspectionNotes ?? "Not yet requested by buyer."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            listing.auctionSheetUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: listing.auctionSheetUrl,
                target: "_blank",
                rel: "noreferrer",
                className: "mb-4 flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-[18px] transition hover:border-accent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-text",
                                children: "Auction sheet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] text-dim",
                                children: "The car's original inspection grade sheet, verified by AutoBD."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "whitespace-nowrap text-[13px] font-bold text-accent",
                        children: "View ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-4 rounded-2xl border border-border bg-card p-[22px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-2.5 text-[13px] font-bold uppercase tracking-[0.04em] text-dim",
                        children: "BRTA registration paper value"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2.5 text-sm text-text",
                        children: paper.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 overflow-hidden rounded-[4px] bg-track",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-[4px] bg-accent",
                            style: {
                                width: `${paper.pct}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2.5 text-xs text-dim",
                        children: [
                            listing.manufactureYear,
                            " model · based on the current ",
                            maxAge,
                            "-year import age limit. Simplified estimate — NBR age rules change with each national budget."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            isOwnListing ? isPublic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-4 rounded-2xl border border-border bg-card p-[22px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[13px] font-bold uppercase tracking-[0.04em] text-dim",
                                        children: "Your listing — offers & messages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    isSold ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StatusChip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pill"], {
                                        tone: "good",
                                        size: "md",
                                        children: "Sold"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$SellerControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MarkSoldButton"], {
                                        listingId: listing.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[12px] font-bold uppercase tracking-[0.03em] text-muted",
                                children: [
                                    "Offers received (",
                                    offers.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this),
                            offers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[13px] text-dim",
                                children: "No offers yet. Buyers can offer or message you below."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 285,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden rounded-xl border border-border",
                                children: offers.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-wrap items-center justify-between gap-3 px-4 py-3 ${i > 0 ? "border-t border-track" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-text",
                                                        children: o.amount
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[12px] text-dim",
                                                        children: [
                                                            "from ",
                                                            o.buyerName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 23
                                            }, this),
                                            o.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].PENDING && !isSold ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$SellerControls$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferActions"], {
                                                offerId: o.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-md bg-chip px-2.5 py-1 text-[11px] font-bold text-dim",
                                                        children: o.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].ACCEPTED ? "Accepted" : o.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].REJECTED ? "Declined" : "Pending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted",
                                                        children: new Date().getTime() - new Date(o.createdAt).getTime() > 7 * 24 * 60 * 60 * 1000 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-red-600",
                                                            children: "Expired"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Expires in ",
                                                                Math.ceil((7 * 24 * 60 * 60 * 1000 - (new Date().getTime() - new Date(o.createdAt).getTime())) / (24 * 60 * 60 * 1000)),
                                                                " days"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 31
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, o.id, true, {
                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 287,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 267,
                        columnNumber: 13
                    }, this),
                    sellerThreads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-[12px] font-bold uppercase tracking-[0.03em] text-muted",
                                children: [
                                    "Buyer messages (",
                                    sellerThreads.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 327,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3",
                                children: sellerThreads.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListingChatPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingChatPanel"], {
                                        mode: "seller",
                                        listingId: listing.id,
                                        threadId: t.id,
                                        initialMessages: t.messages,
                                        title: `Chat with ${t.buyerName}`,
                                        emptyHint: "No messages yet."
                                    }, t.id, false, {
                                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 330,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 326,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    buyer && !isSold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-4 rounded-2xl border border-border bg-card p-[22px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2.5 text-[13px] text-muted",
                                children: "Buy now at the asking price and pay it with the rest of your cart, or make an offer below."
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 351,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AddToCartButton"], {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemKind"].USED_CAR,
                                refId: listing.id,
                                label: `Add to cart · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdtLakh"])(listing.priceBdt)}`,
                                className: "rounded-[10px] bg-accent px-5 py-3 text-sm font-bold text-on-accent transition hover:bg-accent-hover disabled:opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 350,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$OfferForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferForm"], {
                        listingId: listing.id,
                        canOffer: Boolean(buyer) && !isSold,
                        blockedReason: blockedReason,
                        existingOffer: myOffer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdt"])(myOffer.amountBdt) : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this),
                    buyer && !isSold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListingChatPanel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingChatPanel"], {
                            mode: "buyer",
                            listingId: listing.id,
                            threadId: myThreadId,
                            initialMessages: myMessages,
                            title: `Chat with ${listing.seller.fullName} (seller)`,
                            emptyHint: `Ask ${listing.seller.fullName} anything about this car — replies appear here.`
                        }, void 0, false, {
                            fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                            lineNumber: 372,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
                        lineNumber: 371,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(app)/used-cars/[id]/page.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__124dijh._.js.map