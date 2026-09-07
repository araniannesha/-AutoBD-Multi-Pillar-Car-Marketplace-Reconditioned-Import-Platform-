module.exports = [
"[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00bb3976300fa48668860cc326a9dc3591e5182812":{"name":"logout"},"601ef00d131487f6192dd1dbfbca8318ea8875f51d":{"name":"register"},"6077f6bd81fb33552b256502352b936db7d6db61db":{"name":"login"}},"src/lib/auth-actions.ts",""] */ __turbopack_context__.s([
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const PASSWORD_MIN = 8;
function normalizeEmail(v) {
    return String(v ?? "").trim().toLowerCase();
}
async function login(_prev, formData) {
    const email = normalizeEmail(formData.get("email"));
    const password = String(formData.get("password") ?? "");
    if (!email || !password) return {
        error: "Email and password are required."
    };
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            email,
            password,
            redirectTo: "/"
        });
        return {};
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"]) {
            return {
                error: "Incorrect email or password."
            };
        }
        // signIn throws a redirect on success — let Next handle it.
        throw err;
    }
}
async function register(_prev, formData) {
    const role = String(formData.get("role") ?? "");
    const email = normalizeEmail(formData.get("email"));
    const password = String(formData.get("password") ?? "");
    // Admin accounts are provisioned internally and cannot self-register.
    if (role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].ADMIN) {
        return {
            error: "Admin accounts are provisioned internally and cannot self-register."
        };
    }
    if (role !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].BUYER && role !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].ORGANIZATION) {
        return {
            error: "Choose a valid role."
        };
    }
    if (!email || !password) return {
        error: "Email and password are required."
    };
    if (password.length < PASSWORD_MIN) {
        return {
            error: `Password must be at least ${PASSWORD_MIN} characters.`
        };
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            email
        }
    });
    if (existing) return {
        error: "An account with that email already exists."
    };
    const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
    if (role === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].BUYER) {
        const fullName = String(formData.get("fullName") ?? "").trim();
        const phone = String(formData.get("phone") ?? "").trim();
        if (!fullName || !phone) return {
            error: "Full name and phone are required."
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.create({
            data: {
                email,
                passwordHash,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].BUYER,
                buyer: {
                    create: {
                        fullName,
                        phone
                    }
                }
            }
        });
    } else {
        const companyName = String(formData.get("companyName") ?? "").trim();
        const licenseNumber = String(formData.get("licenseNumber") ?? "").trim();
        const yearsInOperation = Number(formData.get("yearsInOperation") ?? 0);
        const feeType = String(formData.get("feeType") ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeType"].PERCENT);
        const feeValue = Number(formData.get("feeValue") ?? 0);
        if (!companyName || !licenseNumber) {
            return {
                error: "Company name and license number are required."
            };
        }
        if (!Number.isFinite(yearsInOperation) || yearsInOperation < 0) {
            return {
                error: "Years of track record must be a number."
            };
        }
        if (!Number.isFinite(feeValue) || feeValue <= 0) {
            return {
                error: "Fee value must be greater than zero."
            };
        }
        const dupLicense = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.findUnique({
            where: {
                licenseNumber
            }
        });
        if (dupLicense) return {
            error: "That license number is already registered."
        };
        // Organizations start PENDING and stay inactive until an admin approves.
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.create({
            data: {
                email,
                passwordHash,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].ORGANIZATION,
                organization: {
                    create: {
                        companyName,
                        licenseNumber,
                        yearsInOperation: Math.trunc(yearsInOperation),
                        feeType: feeType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeType"].FLAT ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeType"].FLAT : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeType"].PERCENT,
                        feeValue
                    }
                }
            }
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            email,
            password,
            redirectTo: "/"
        });
        return {};
    } catch (err) {
        if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthError"]) return {
            error: "Account created, but sign-in failed."
        };
        throw err;
    }
}
async function logout() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
        redirectTo: "/login"
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    register,
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "6077f6bd81fb33552b256502352b936db7d6db61db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(register, "601ef00d131487f6192dd1dbfbca8318ea8875f51d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00bb3976300fa48668860cc326a9dc3591e5182812", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "currentBuyer",
    ()=>currentBuyer,
    "requireAdmin",
    ()=>requireAdmin,
    "requireBuyer",
    ()=>requireBuyer,
    "requireOrganization",
    ()=>requireOrganization,
    "requireUser",
    ()=>requireUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function requireUser() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    return session.user;
}
async function requireBuyer() {
    const user = await requireUser();
    const buyer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].buyer.findUnique({
        where: {
            userId: user.id
        }
    });
    if (!buyer) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    return buyer;
}
async function currentBuyer() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user?.id) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].buyer.findUnique({
        where: {
            userId: session.user.id
        }
    });
}
async function requireOrganization() {
    const user = await requireUser();
    const org = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.findUnique({
        where: {
            userId: user.id
        }
    });
    if (!org) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    return org;
}
async function requireAdmin() {
    const user = await requireUser();
    if (user.role !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Role"].ADMIN) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    const admin = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].admin.findUnique({
        where: {
            userId: user.id
        }
    });
    if (!admin) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    return admin;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/settings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "SETTING_DEFAULTS",
    ()=>DEFAULTS,
    "SETTING_KEYS",
    ()=>SETTING_KEYS,
    "getSetting",
    ()=>getSetting,
    "getSettings",
    ()=>getSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
/**
 * Admin-editable platform settings. Defaults mirror prisma/seed.ts so a missing
 * row degrades to the agreed value rather than NaN.
 */ const DEFAULTS = {
    shippingFlatBdt: 195000,
    portHandlingBdt: 42000,
    antiSnipeWindowSeconds: 30,
    antiSnipeExtendSeconds: 60,
    antiSnipeWarnAfterExtensions: 20,
    containerCapacity: 10,
    poolingDiscountPercent: 30,
    importEligibilityMaxAgeYears: 5,
    minBidIncrementJpy: 5000,
    exchangeRateTtlMinutes: 60,
    // Commission rates behind the admin revenue breakdown. The FR names the four
    // sources but sets no rates, so these are placeholders for the business to
    // set — they are admin-editable and every revenue figure is derived from real
    // transaction rows using them.
    referralFeePerInquiryBdt: 2000,
    listingFeeBdt: 500,
    agentPlacementCutPercent: 10,
    modSourcingMarginPercent: 8
};
const SETTING_KEYS = Object.keys(DEFAULTS);
async function getSettings() {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].platformSetting.findMany();
    const byKey = new Map(rows.map((r)=>[
            r.key,
            r.value
        ]));
    const out = {};
    for (const key of SETTING_KEYS){
        const raw = byKey.get(key);
        const parsed = raw === undefined ? NaN : Number(raw);
        out[key] = Number.isFinite(parsed) ? parsed : DEFAULTS[key];
    }
    return out;
}
async function getSetting(key) {
    const row = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].platformSetting.findUnique({
        where: {
            key
        }
    });
    const parsed = row ? Number(row.value) : NaN;
    return Number.isFinite(parsed) ? parsed : DEFAULTS[key];
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/admin-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40159f1005128d0f41653c02d9067a71bc21291dc8":{"name":"updateSettings"},"405d405883e5793e35c76bbc845e85db77f06aa1b1":{"name":"startAuction"},"40948b15518d7e0e8098d909a50e9e46e74210faf5":{"name":"endAuction"},"6006a00f376c3e84a56feb61977109d85da34d903d":{"name":"updateDutyBand"},"60dce12897397bf2a515cc32a1b62e825e413802c2":{"name":"startLot"},"7075ddb9032bbeee5c29fa284d30dd1c9831526d88":{"name":"reviewListing"},"70b2db06a3828f05531585832e527903120cdc3d43":{"name":"reviewOrganization"},"78f9b78efb26d54588978ce03d7d5ef66b06b74b36":{"name":"setBroadcast"}},"src/lib/admin-actions.ts",""] */ __turbopack_context__.s([
    "endAuction",
    ()=>endAuction,
    "reviewListing",
    ()=>reviewListing,
    "reviewOrganization",
    ()=>reviewOrganization,
    "setBroadcast",
    ()=>setBroadcast,
    "startAuction",
    ()=>startAuction,
    "startLot",
    ()=>startLot,
    "updateDutyBand",
    ()=>updateDutyBand,
    "updateSettings",
    ()=>updateSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
async function reviewOrganization(organizationId, decision, rejectionReason) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const status = decision === "APPROVE" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrgStatus"].APPROVED : decision === "REJECT" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrgStatus"].REJECTED : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrgStatus"].SUSPENDED;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.update({
        where: {
            id: organizationId
        },
        data: {
            status,
            reviewedAt: new Date(),
            reviewedById: admin.id,
            rejectionReason: decision === "APPROVE" ? null : rejectionReason?.trim() || null
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/auctions");
    return {
        ok: true
    };
}
async function reviewListing(listingId, decision, rejectionReason) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const listing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
        where: {
            id: listingId
        },
        select: {
            id: true,
            status: true
        }
    });
    if (!listing) return {
        error: "That listing no longer exists."
    };
    if (listing.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].PENDING_VERIFICATION) return {
        error: "That listing has already been reviewed."
    };
    if (decision === "APPROVE") {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
            where: {
                id: listingId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].ACTIVE,
                ownershipVerified: true,
                reviewedAt: new Date(),
                rejectionReason: null
            }
        });
    } else {
        const reason = rejectionReason?.trim();
        if (!reason) return {
            error: "Add a short reason so the seller knows what to fix."
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
            where: {
                id: listingId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].REJECTED,
                reviewedAt: new Date(),
                rejectionReason: reason
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    return {
        ok: true
    };
}
async function startLot(auctionCarId, durationSeconds) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    if (!Number.isFinite(durationSeconds) || durationSeconds < 30 || durationSeconds > 86400) {
        return {
            error: "Duration must be between 30 seconds and 24 hours."
        };
    }
    const lot = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.findUnique({
        where: {
            id: auctionCarId
        },
        include: {
            auction: {
                select: {
                    id: true,
                    status: true
                }
            }
        }
    });
    if (!lot) return {
        error: "That lot no longer exists."
    };
    if (lot.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].SOLD) return {
        error: "That lot has already sold."
    };
    const now = new Date();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        // Only one lot is on the block at a time, as at a real auction house.
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.updateMany({
            where: {
                auctionId: lot.auctionId,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].LIVE,
                id: {
                    not: auctionCarId
                }
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].PENDING,
                startedAt: null,
                endsAt: null
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.update({
            where: {
                id: auctionCarId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].LIVE,
                startedAt: now,
                endsAt: new Date(now.getTime() + durationSeconds * 1000),
                durationSeconds,
                // A restarted lot begins its anti-snipe history afresh.
                extensionCount: 0,
                winningBidId: null
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auction.update({
            where: {
                id: lot.auctionId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuctionStatus"].LIVE
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/auctions", "layout");
    return {
        ok: true
    };
}
async function endAuction(auctionId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.updateMany({
            where: {
                auctionId,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].LIVE
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].NO_SALE,
                endsAt: new Date()
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auction.update({
            where: {
                id: auctionId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuctionStatus"].ENDED
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/auctions", "layout");
    return {
        ok: true
    };
}
async function startAuction(auctionId) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const auction = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auction.findUnique({
        where: {
            id: auctionId
        },
        include: {
            lots: {
                orderBy: {
                    lotNumber: "asc"
                }
            }
        }
    });
    if (!auction) return {
        error: "That auction no longer exists."
    };
    const target = auction.lots.find((l)=>l.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].LIVE) ?? auction.lots.find((l)=>l.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].SOLD);
    if (!target) return {
        error: "Every lot in this session has already sold."
    };
    const now = new Date();
    const durationSeconds = target.durationSeconds || 120;
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        // At a real auction house only one lot is on the block at a time.
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.updateMany({
            where: {
                auctionId,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].LIVE,
                id: {
                    not: target.id
                }
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].PENDING,
                startedAt: null,
                endsAt: null
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.update({
            where: {
                id: target.id
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].LIVE,
                startedAt: now,
                endsAt: new Date(now.getTime() + durationSeconds * 1000),
                durationSeconds,
                extensionCount: 0,
                winningBidId: null
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auction.update({
            where: {
                id: auctionId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuctionStatus"].LIVE
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/auctions", "layout");
    return {
        ok: true
    };
}
async function setBroadcast(auctionId, url, kind, isLive) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const trimmed = url.trim();
    if (isLive && !trimmed) return {
        error: "Add a stream URL before going live."
    };
    if (trimmed) {
        try {
            const parsed = new URL(trimmed);
            if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
                return {
                    error: "Stream URL must be http(s)."
                };
            }
        } catch  {
            return {
                error: "That isn't a valid URL."
            };
        }
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].broadcast.upsert({
        where: {
            auctionId
        },
        update: {
            url: trimmed || null,
            kind,
            isLive,
            updatedByAdminId: admin.id
        },
        create: {
            auctionId,
            url: trimmed || null,
            kind,
            isLive,
            updatedByAdminId: admin.id
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/auctions", "layout");
    return {
        ok: true
    };
}
async function updateSettings(formData) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const updates = [];
    for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SETTING_KEYS"]){
        const raw = formData.get(key);
        if (raw === null) continue;
        const value = Number(String(raw));
        if (!Number.isFinite(value) || value < 0) {
            return {
                error: `${key} must be a non-negative number.`
            };
        }
        updates.push({
            key,
            value: String(value)
        });
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(updates.map((u)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].platformSetting.upsert({
            where: {
                key: u.key
            },
            update: {
                value: u.value
            },
            create: {
                key: u.key,
                value: u.value
            }
        })));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/auctions", "layout");
    return {
        ok: true
    };
}
async function updateDutyBand(id, ratePercent) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    if (!Number.isFinite(ratePercent) || ratePercent < 0 || ratePercent > 1000) {
        return {
            error: "Duty rate must be between 0 and 1000%."
        };
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dutyRate.update({
        where: {
            id
        },
        data: {
            ratePercent
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/auctions", "layout");
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    reviewOrganization,
    reviewListing,
    startLot,
    endAuction,
    startAuction,
    setBroadcast,
    updateSettings,
    updateDutyBand
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reviewOrganization, "70b2db06a3828f05531585832e527903120cdc3d43", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(reviewListing, "7075ddb9032bbeee5c29fa284d30dd1c9831526d88", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(startLot, "60dce12897397bf2a515cc32a1b62e825e413802c2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(endAuction, "40948b15518d7e0e8098d909a50e9e46e74210faf5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(startAuction, "405d405883e5793e35c76bbc845e85db77f06aa1b1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setBroadcast, "78f9b78efb26d54588978ce03d7d5ef66b06b74b36", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSettings, "40159f1005128d0f41653c02d9067a71bc21291dc8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateDutyBand, "6006a00f376c3e84a56feb61977109d85da34d903d", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/lib/uploads.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IMAGE_EXT",
    ()=>IMAGE_EXT,
    "MAX_IMAGE_BYTES",
    ()=>MAX_IMAGE_BYTES,
    "MAX_VIDEO_BYTES",
    ()=>MAX_VIDEO_BYTES,
    "VIDEO_EXT",
    ()=>VIDEO_EXT,
    "saveImage",
    ()=>saveImage,
    "saveUpload",
    ()=>saveUpload,
    "saveVideo",
    ()=>saveVideo
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
;
;
const IMAGE_EXT = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp"
};
const MAX_IMAGE_BYTES = 6 * 1024 * 1024; // 6 MB each
const VIDEO_EXT = {
    "video/mp4": "mp4",
    "video/webm": "webm",
    "video/quicktime": "mov",
    "video/x-matroska": "mkv"
};
const MAX_VIDEO_BYTES = 60 * 1024 * 1024; // 60 MB each
async function saveUpload(file, subdir, ext) {
    const fileName = `${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])()}.${ext}`;
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "uploads", subdir);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(dir, {
        recursive: true
    });
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dir, fileName), Buffer.from(await file.arrayBuffer()));
    return `/uploads/${subdir}/${fileName}`;
}
async function saveImage(file, subdir) {
    const ext = IMAGE_EXT[file.type];
    if (!ext) return {
        error: "Photos must be JPG, PNG or WebP."
    };
    if (file.size > MAX_IMAGE_BYTES) return {
        error: "Each photo must be 6 MB or smaller."
    };
    return {
        url: await saveUpload(file, subdir, ext)
    };
}
async function saveVideo(file, subdir) {
    const ext = VIDEO_EXT[file.type];
    if (!ext) return {
        error: "Videos must be MP4, WebM, MOV or MKV."
    };
    if (file.size > MAX_VIDEO_BYTES) return {
        error: "Each video must be 60 MB or smaller."
    };
    return {
        url: await saveUpload(file, subdir, ext)
    };
}
}),
"[project]/src/lib/system-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"600c827e1039b5d95e64eb326f18847f858e82cf7d":{"name":"setUsedCarVideo"},"6041c54a913f1a07cf86847d98a8ffe7c813a27ea9":{"name":"updateCar"},"6047a155675b703eb8bdb97e605e31ad9b7217fb27":{"name":"createUsedCar"},"604c3e123afe40953efddaf1a9ff85363a60549335":{"name":"deleteBrand"},"604c4ee57a964826ee12e09ff86ae3f6753a492443":{"name":"removeUsedCarPhoto"},"604d151eab7a8fff6b8e188bbdc34f93f31cc2a28a":{"name":"deleteCar"},"60503d2af8fbce412a34433d5b78d3d3f7158e0a95":{"name":"addCarVideos"},"605eaa8849376f52594228768f2ed1915447b7fdc3":{"name":"updateUsedCar"},"6063bcf1d01fb58475dec12fd700e3bf1084d7690c":{"name":"createBrand"},"6081ec55a231e70c53a95e255767c3ebf5ffeb84fe":{"name":"deleteVariant"},"6086290e4c1fd2e1abfe1c6f7830f2c5ee7a4cc794":{"name":"removeUsedCarVideo"},"60876e9a6ac405bb1915b2dfa0346f86491ac40941":{"name":"createVariant"},"608a7733413e61cec8e29db16edd986c652eef2eaa":{"name":"removeCarPhoto"},"609258b902e6cadcf9705cf584b6122d1c8f157c76":{"name":"deleteUsedCar"},"60bc373fb1cad930078a1f26ef8b151241753fa292":{"name":"removeCarVideo"},"60c47a9f01788cb1a4f0799f8af88dcc1cf59af435":{"name":"addCarPhotos"},"60c6f6ebc36d7328c9613c95da3681d3138cad12d1":{"name":"updateBrand"},"60e31bf073e89ee778405ee213455e410c77d9e148":{"name":"createCar"},"60efd634a44214ce3ef62b88905b243dd8b226b9e0":{"name":"addUsedCarPhotos"},"60f696c98514ae0ef86cf07891589e97e7551ce97f":{"name":"updateVariant"}},"src/lib/system-actions.ts",""] */ __turbopack_context__.s([
    "addCarPhotos",
    ()=>addCarPhotos,
    "addCarVideos",
    ()=>addCarVideos,
    "addUsedCarPhotos",
    ()=>addUsedCarPhotos,
    "createBrand",
    ()=>createBrand,
    "createCar",
    ()=>createCar,
    "createUsedCar",
    ()=>createUsedCar,
    "createVariant",
    ()=>createVariant,
    "deleteBrand",
    ()=>deleteBrand,
    "deleteCar",
    ()=>deleteCar,
    "deleteUsedCar",
    ()=>deleteUsedCar,
    "deleteVariant",
    ()=>deleteVariant,
    "removeCarPhoto",
    ()=>removeCarPhoto,
    "removeCarVideo",
    ()=>removeCarVideo,
    "removeUsedCarPhoto",
    ()=>removeUsedCarPhoto,
    "removeUsedCarVideo",
    ()=>removeUsedCarVideo,
    "setUsedCarVideo",
    ()=>setUsedCarVideo,
    "updateBrand",
    ()=>updateBrand,
    "updateCar",
    ()=>updateCar,
    "updateUsedCar",
    ()=>updateUsedCar,
    "updateVariant",
    ()=>updateVariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/uploads.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const MAX_CAR_PHOTOS = 12;
const MAX_CAR_VIDEOS = 6;
const str = (fd, key)=>String(fd.get(key) ?? "").trim();
const parseNum = (raw)=>Number(raw.replace(/[^\d.]/g, ""));
function slugify(name) {
    return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
/** Brand slugs are unique — derive from the name, then de-duplicate. */ async function uniqueBrandSlug(name, ignoreId) {
    const base = slugify(name) || "brand";
    let slug = base;
    let n = 2;
    // Loop until no other brand holds this slug.
    while(true){
        const clash = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.findFirst({
            where: {
                slug,
                ...ignoreId ? {
                    id: {
                        not: ignoreId
                    }
                } : {}
            },
            select: {
                id: true
            }
        });
        if (!clash) return slug;
        slug = `${base}-${n++}`;
    }
}
// saveImage / saveVideo now live in @/lib/uploads (shared with the reconditioned module).
function revalidateCatalog() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/system/new-cars");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/new-cars", "layout");
}
async function createBrand(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const name = str(fd, "name");
    if (!name) return {
        error: "Brand name is required."
    };
    const country = str(fd, "country") || null;
    let logoUrl = null;
    const logo = fd.get("logo");
    if (logo instanceof File && logo.size > 0) {
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveImage"])(logo, "brand-logos");
        if (r.error) return {
            error: r.error
        };
        logoUrl = r.url;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.create({
        data: {
            name,
            slug: await uniqueBrandSlug(name),
            country,
            logoUrl
        }
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function updateBrand(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    const name = str(fd, "name");
    if (!id) return {
        error: "Missing brand id."
    };
    if (!name) return {
        error: "Brand name is required."
    };
    const country = str(fd, "country") || null;
    const data = {
        name,
        slug: await uniqueBrandSlug(name, id),
        country
    };
    const logo = fd.get("logo");
    if (logo instanceof File && logo.size > 0) {
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveImage"])(logo, "brand-logos");
        if (r.error) return {
            error: r.error
        };
        data.logoUrl = r.url;
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.update({
        where: {
            id
        },
        data
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function deleteBrand(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    if (!id) return {
        error: "Missing brand id."
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].brand.delete({
            where: {
                id
            }
        });
    } catch  {
        return {
            error: "Couldn't delete this brand — it may have related records."
        };
    }
    revalidateCatalog();
    return {
        ok: true
    };
}
// ============================================================ CAR MODELS
/** Read + validate the shared car fields from the form. */ function readCarFields(fd) {
    const model = str(fd, "model");
    if (!model) return {
        error: "Model name is required."
    };
    const priceMinBdt = parseNum(str(fd, "priceMinBdt"));
    const priceMaxBdt = parseNum(str(fd, "priceMaxBdt"));
    const warrantyYears = parseNum(str(fd, "warrantyYears"));
    const warrantyKm = parseNum(str(fd, "warrantyKm"));
    if (!Number.isFinite(priceMinBdt) || !Number.isFinite(priceMaxBdt) || priceMinBdt <= 0 || priceMaxBdt <= 0) return {
        error: "Enter valid min and max prices."
    };
    if (priceMinBdt > priceMaxBdt) return {
        error: "Min price can't be higher than max price."
    };
    if (!Number.isFinite(warrantyYears) || warrantyYears < 0) return {
        error: "Warranty years must be 0 or more."
    };
    if (!Number.isFinite(warrantyKm) || warrantyKm < 0) return {
        error: "Warranty km must be 0 or more."
    };
    return {
        data: {
            model,
            priceMinBdt,
            priceMaxBdt,
            warrantyYears: Math.round(warrantyYears),
            warrantyKm: Math.round(warrantyKm)
        }
    };
}
async function createCar(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const brandId = str(fd, "brandId");
    if (!brandId) return {
        error: "Missing brand."
    };
    const { data, error } = readCarFields(fd);
    if (error) return {
        error
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.create({
        data: {
            brandId,
            ...data
        }
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function updateCar(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    if (!id) return {
        error: "Missing car id."
    };
    const { data, error } = readCarFields(fd);
    if (error) return {
        error
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.update({
        where: {
            id
        },
        data: data
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function deleteCar(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    if (!id) return {
        error: "Missing car id."
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.delete({
            where: {
                id
            }
        });
    } catch  {
        return {
            error: "Couldn't delete this car — it may have inquiries or test drives attached."
        };
    }
    revalidateCatalog();
    return {
        ok: true
    };
}
async function addCarPhotos(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const carId = str(fd, "carId");
    if (!carId) return {
        error: "Missing car id."
    };
    const files = fd.getAll("photos").filter((f)=>f instanceof File && f.size > 0);
    if (files.length === 0) return {
        error: "Choose at least one image to upload."
    };
    const car = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.findUnique({
        where: {
            id: carId
        },
        select: {
            photoUrls: true
        }
    });
    if (!car) return {
        error: "That car no longer exists."
    };
    if (car.photoUrls.length + files.length > MAX_CAR_PHOTOS) return {
        error: `A car can have at most ${MAX_CAR_PHOTOS} photos.`
    };
    const urls = [];
    for (const file of files){
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveImage"])(file, "new-cars");
        if (r.error) return {
            error: r.error
        };
        urls.push(r.url);
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.update({
        where: {
            id: carId
        },
        data: {
            photoUrls: {
                set: [
                    ...car.photoUrls,
                    ...urls
                ]
            }
        }
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function removeCarPhoto(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const carId = str(fd, "carId");
    const url = str(fd, "url");
    if (!carId || !url) return {
        error: "Missing photo reference."
    };
    const car = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.findUnique({
        where: {
            id: carId
        },
        select: {
            photoUrls: true
        }
    });
    if (!car) return {
        error: "That car no longer exists."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.update({
        where: {
            id: carId
        },
        data: {
            photoUrls: {
                set: car.photoUrls.filter((u)=>u !== url)
            }
        }
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function addCarVideos(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const carId = str(fd, "carId");
    if (!carId) return {
        error: "Missing car id."
    };
    const files = fd.getAll("videos").filter((f)=>f instanceof File && f.size > 0);
    if (files.length === 0) return {
        error: "Choose at least one video to upload."
    };
    const car = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.findUnique({
        where: {
            id: carId
        },
        select: {
            videoUrls: true
        }
    });
    if (!car) return {
        error: "That car no longer exists."
    };
    if (car.videoUrls.length + files.length > MAX_CAR_VIDEOS) return {
        error: `A car can have at most ${MAX_CAR_VIDEOS} videos.`
    };
    const urls = [];
    for (const file of files){
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveVideo"])(file, "new-car-videos");
        if (r.error) return {
            error: r.error
        };
        urls.push(r.url);
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.update({
        where: {
            id: carId
        },
        data: {
            videoUrls: {
                set: [
                    ...car.videoUrls,
                    ...urls
                ]
            }
        }
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function removeCarVideo(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const carId = str(fd, "carId");
    const url = str(fd, "url");
    if (!carId || !url) return {
        error: "Missing video reference."
    };
    const car = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.findUnique({
        where: {
            id: carId
        },
        select: {
            videoUrls: true
        }
    });
    if (!car) return {
        error: "That car no longer exists."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.update({
        where: {
            id: carId
        },
        data: {
            videoUrls: {
                set: car.videoUrls.filter((u)=>u !== url)
            }
        }
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
// ============================================================ VARIANTS
function readVariantFields(fd) {
    const name = str(fd, "name");
    const engine = str(fd, "engine");
    const transmission = str(fd, "transmission");
    const priceBdt = parseNum(str(fd, "priceBdt"));
    const economyKmPerL = parseNum(str(fd, "economyKmPerL"));
    if (!name) return {
        error: "Variant name is required."
    };
    if (!engine) return {
        error: "Engine is required."
    };
    if (!transmission) return {
        error: "Transmission is required."
    };
    if (!Number.isFinite(priceBdt) || priceBdt <= 0) return {
        error: "Enter a valid variant price."
    };
    if (!Number.isFinite(economyKmPerL) || economyKmPerL <= 0) return {
        error: "Enter a valid fuel economy (km/l)."
    };
    return {
        data: {
            name,
            priceBdt,
            engine,
            transmission,
            economyKmPerL
        }
    };
}
async function createVariant(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const newCarId = str(fd, "carId");
    if (!newCarId) return {
        error: "Missing car."
    };
    const { data, error } = readVariantFields(fd);
    if (error) return {
        error
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCarVariant.create({
        data: {
            newCarId,
            ...data
        }
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function updateVariant(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    if (!id) return {
        error: "Missing variant id."
    };
    const { data, error } = readVariantFields(fd);
    if (error) return {
        error
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCarVariant.update({
        where: {
            id
        },
        data: data
    });
    revalidateCatalog();
    return {
        ok: true
    };
}
async function deleteVariant(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    if (!id) return {
        error: "Missing variant id."
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCarVariant.delete({
            where: {
                id
            }
        });
    } catch  {
        return {
            error: "Couldn't delete this variant — it may have inquiries or payments attached."
        };
    }
    revalidateCatalog();
    return {
        ok: true
    };
}
// ============================================================ USED CARS
const ACCIDENT_VALUES = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccidentStatus"]);
function revalidateUsedCars() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/system/used-cars");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin"); // the main admin panel also lists pending listings
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars", "layout");
}
/** Read + validate the editable used-car listing fields from the form. */ function readUsedCarFields(fd) {
    const title = str(fd, "title");
    const make = str(fd, "make");
    const model = str(fd, "model");
    const location = str(fd, "location");
    const conditionNotes = str(fd, "conditionNotes");
    if (!title || !make || !model) return {
        error: "Title, make and model are required."
    };
    if (!location) return {
        error: "Location is required."
    };
    if (!conditionNotes) return {
        error: "Condition notes are required."
    };
    const manufactureYear = parseNum(str(fd, "manufactureYear"));
    const mileageKm = parseNum(str(fd, "mileageKm"));
    const priceBdt = parseNum(str(fd, "priceBdt"));
    const thisYear = new Date().getFullYear();
    if (!Number.isFinite(manufactureYear) || manufactureYear < 1980 || manufactureYear > thisYear) return {
        error: "Enter a valid manufacture year."
    };
    if (!Number.isFinite(mileageKm) || mileageKm < 0) return {
        error: "Enter a valid mileage."
    };
    if (!Number.isFinite(priceBdt) || priceBdt <= 0) return {
        error: "Enter a valid price."
    };
    const accidentRaw = str(fd, "accidentStatus");
    const accidentStatus = ACCIDENT_VALUES.includes(accidentRaw) ? accidentRaw : "NOT_CHECKED";
    const engineCcRaw = str(fd, "engineCc");
    const regYearRaw = str(fd, "registrationYear");
    return {
        data: {
            title,
            make,
            model,
            location,
            conditionNotes,
            manufactureYear: Math.round(manufactureYear),
            mileageKm: Math.round(mileageKm),
            priceBdt,
            accidentStatus,
            transmission: str(fd, "transmission") || null,
            fuelType: str(fd, "fuelType") || null,
            engineCc: engineCcRaw ? Math.round(parseNum(engineCcRaw)) : null,
            color: str(fd, "color") || null,
            registrationNumber: str(fd, "registrationNumber") || null,
            registrationYear: regYearRaw ? Math.round(parseNum(regYearRaw)) : null
        }
    };
}
async function createUsedCar(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const sellerId = str(fd, "sellerId");
    if (!sellerId) return {
        error: "Choose a seller for this listing."
    };
    const seller = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].buyer.findUnique({
        where: {
            id: sellerId
        },
        select: {
            id: true
        }
    });
    if (!seller) return {
        error: "That seller no longer exists."
    };
    const { data, error } = readUsedCarFields(fd);
    if (error) return {
        error
    };
    // Admin-created listings are published straight away (the admin is vouching).
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.create({
        data: {
            sellerId,
            ...data,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].ACTIVE,
            ownershipVerified: true,
            reviewedAt: new Date()
        }
    });
    revalidateUsedCars();
    return {
        ok: true
    };
}
async function updateUsedCar(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    if (!id) return {
        error: "Missing listing id."
    };
    const { data, error } = readUsedCarFields(fd);
    if (error) return {
        error
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
        where: {
            id
        },
        data: data
    });
    revalidateUsedCars();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${id}`);
    return {
        ok: true
    };
}
async function deleteUsedCar(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = str(fd, "id");
    if (!id) return {
        error: "Missing listing id."
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.delete({
            where: {
                id
            }
        });
    } catch  {
        return {
            error: "Couldn't delete this listing — it may have payments attached."
        };
    }
    revalidateUsedCars();
    return {
        ok: true
    };
}
async function addUsedCarPhotos(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const listingId = str(fd, "listingId");
    if (!listingId) return {
        error: "Missing listing id."
    };
    const files = fd.getAll("photos").filter((f)=>f instanceof File && f.size > 0);
    if (files.length === 0) return {
        error: "Choose at least one image to upload."
    };
    const listing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
        where: {
            id: listingId
        },
        select: {
            photoUrls: true
        }
    });
    if (!listing) return {
        error: "That listing no longer exists."
    };
    if (listing.photoUrls.length + files.length > MAX_CAR_PHOTOS) return {
        error: `A listing can have at most ${MAX_CAR_PHOTOS} photos.`
    };
    const urls = [];
    for (const file of files){
        const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveImage"])(file, "listing-photos");
        if (r.error) return {
            error: r.error
        };
        urls.push(r.url);
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
        where: {
            id: listingId
        },
        data: {
            photoUrls: {
                set: [
                    ...listing.photoUrls,
                    ...urls
                ]
            }
        }
    });
    revalidateUsedCars();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    return {
        ok: true
    };
}
async function removeUsedCarPhoto(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const listingId = str(fd, "listingId");
    const url = str(fd, "url");
    if (!listingId || !url) return {
        error: "Missing photo reference."
    };
    const listing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
        where: {
            id: listingId
        },
        select: {
            photoUrls: true
        }
    });
    if (!listing) return {
        error: "That listing no longer exists."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
        where: {
            id: listingId
        },
        data: {
            photoUrls: {
                set: listing.photoUrls.filter((u)=>u !== url)
            }
        }
    });
    revalidateUsedCars();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    return {
        ok: true
    };
}
async function setUsedCarVideo(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const listingId = str(fd, "listingId");
    if (!listingId) return {
        error: "Missing listing id."
    };
    const file = fd.get("video");
    if (!(file instanceof File) || file.size === 0) return {
        error: "Choose a video to upload."
    };
    const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$uploads$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveVideo"])(file, "listing-videos");
    if (r.error) return {
        error: r.error
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
        where: {
            id: listingId
        },
        data: {
            videoUrl: r.url
        }
    });
    revalidateUsedCars();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    return {
        ok: true
    };
}
async function removeUsedCarVideo(_prev, fd) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const listingId = str(fd, "listingId");
    if (!listingId) return {
        error: "Missing listing id."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
        where: {
            id: listingId
        },
        data: {
            videoUrl: null
        }
    });
    revalidateUsedCars();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createBrand,
    updateBrand,
    deleteBrand,
    createCar,
    updateCar,
    deleteCar,
    addCarPhotos,
    removeCarPhoto,
    addCarVideos,
    removeCarVideo,
    createVariant,
    updateVariant,
    deleteVariant,
    createUsedCar,
    updateUsedCar,
    deleteUsedCar,
    addUsedCarPhotos,
    removeUsedCarPhoto,
    setUsedCarVideo,
    removeUsedCarVideo
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBrand, "6063bcf1d01fb58475dec12fd700e3bf1084d7690c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBrand, "60c6f6ebc36d7328c9613c95da3681d3138cad12d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBrand, "604c3e123afe40953efddaf1a9ff85363a60549335", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCar, "60e31bf073e89ee778405ee213455e410c77d9e148", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCar, "6041c54a913f1a07cf86847d98a8ffe7c813a27ea9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCar, "604d151eab7a8fff6b8e188bbdc34f93f31cc2a28a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCarPhotos, "60c47a9f01788cb1a4f0799f8af88dcc1cf59af435", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeCarPhoto, "608a7733413e61cec8e29db16edd986c652eef2eaa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addCarVideos, "60503d2af8fbce412a34433d5b78d3d3f7158e0a95", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeCarVideo, "60bc373fb1cad930078a1f26ef8b151241753fa292", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createVariant, "60876e9a6ac405bb1915b2dfa0346f86491ac40941", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateVariant, "60f696c98514ae0ef86cf07891589e97e7551ce97f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteVariant, "6081ec55a231e70c53a95e255767c3ebf5ffeb84fe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUsedCar, "6047a155675b703eb8bdb97e605e31ad9b7217fb27", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUsedCar, "605eaa8849376f52594228768f2ed1915447b7fdc3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUsedCar, "609258b902e6cadcf9705cf584b6122d1c8f157c76", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addUsedCarPhotos, "60efd634a44214ce3ef62b88905b243dd8b226b9e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeUsedCarPhoto, "604c4ee57a964826ee12e09ff86ae3f6753a492443", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setUsedCarVideo, "600c827e1039b5d95e64eb326f18847f858e82cf7d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeUsedCarVideo, "6086290e4c1fd2e1abfe1c6f7830f2c5ee7a4cc794", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(app)/admin/system/used-cars/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/system-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/system-actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(app)/admin/system/used-cars/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/system-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "00bb3976300fa48668860cc326a9dc3591e5182812",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "40159f1005128d0f41653c02d9067a71bc21291dc8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSettings"],
    "405d405883e5793e35c76bbc845e85db77f06aa1b1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startAuction"],
    "40948b15518d7e0e8098d909a50e9e46e74210faf5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["endAuction"],
    "6006a00f376c3e84a56feb61977109d85da34d903d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateDutyBand"],
    "600c827e1039b5d95e64eb326f18847f858e82cf7d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setUsedCarVideo"],
    "6047a155675b703eb8bdb97e605e31ad9b7217fb27",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUsedCar"],
    "604c4ee57a964826ee12e09ff86ae3f6753a492443",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeUsedCarPhoto"],
    "605eaa8849376f52594228768f2ed1915447b7fdc3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUsedCar"],
    "6086290e4c1fd2e1abfe1c6f7830f2c5ee7a4cc794",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeUsedCarVideo"],
    "609258b902e6cadcf9705cf584b6122d1c8f157c76",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUsedCar"],
    "60dce12897397bf2a515cc32a1b62e825e413802c2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startLot"],
    "60efd634a44214ce3ef62b88905b243dd8b226b9e0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addUsedCarPhotos"],
    "7075ddb9032bbeee5c29fa284d30dd1c9831526d88",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reviewListing"],
    "70b2db06a3828f05531585832e527903120cdc3d43",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reviewOrganization"],
    "78f9b78efb26d54588978ce03d7d5ef66b06b74b36",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setBroadcast"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$admin$2f$system$2f$used$2d$cars$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/admin/system/used-cars/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/admin-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/system-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/system-actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$admin$2f$system$2f$used$2d$cars$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$admin$2f$system$2f$used$2d$cars$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$system$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0epeoa9._.js.map