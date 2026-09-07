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
"[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/(app)/used-cars/[id]/OfferForm.tsx'\n\nExpected ';', '}' or <eof>");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
"[project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript)", (() => {{

throw new Error("An error occurred while generating the chunk item [project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript)\n\nCaused by:\n- CJS module can't be async.\n\nDebug info:\n- An error occurred while generating the chunk item [project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript)\n- Execution of <EcmascriptModuleAsset as EcmascriptChunkPlaceable>::chunk_item_content failed\n- Execution of EcmascriptChunkItemContent::new failed\n- CJS module can't be async.");

}}),
"[project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(app)/used-cars/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0851rvd._.js.map