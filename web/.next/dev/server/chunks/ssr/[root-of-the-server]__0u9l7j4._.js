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
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
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
"[project]/src/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formatting helpers. Output strings are matched against the prototype
 * (`../AutoBD Prototype.dc.html`) — e.g. "৳48L – 58L", "৳13.5L", "৳85,000".
 */ /** Prisma Decimal, or anything already number-ish. */ __turbopack_context__.s([
    "bdt",
    ()=>bdt,
    "bdtLakh",
    ()=>bdtLakh,
    "bdtLakhRange",
    ()=>bdtLakhRange,
    "bdtPerYear",
    ()=>bdtPerYear,
    "formatRate",
    ()=>formatRate,
    "jpy",
    ()=>jpy,
    "km",
    ()=>km,
    "num",
    ()=>num
]);
function num(v) {
    if (v === null || v === undefined) return 0;
    return typeof v === "number" ? v : Number(v.toString());
}
const LAKH = 100_000;
function bdtLakh(v) {
    const lakh = num(v) / LAKH;
    // One decimal place, but only when it carries information.
    const s = lakh.toFixed(1).replace(/\.0$/, "");
    return `৳${s}L`;
}
function bdtLakhRange(min, max) {
    return `${bdtLakh(min)} – ${bdtLakh(max).replace("৳", "")}`;
}
const enIN = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0
});
function bdt(v) {
    return `৳${enIN.format(Math.round(num(v)))}`;
}
function bdtPerYear(v) {
    return `${bdt(v)} / yr`;
}
const enUS = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
});
function jpy(v) {
    return `¥${enUS.format(Math.round(num(v)))}`;
}
function km(v) {
    return enUS.format(Math.round(num(v)));
}
const formatRate = (rate)=>rate.toFixed(4);
}),
"[project]/src/lib/used-car-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"407f20fc6f9f6289ebd723db222694a037692454fb":{"name":"rejectOffer"},"40ba40b578bbcd0007af0efcd96d02238e71e1d236":{"name":"markSold"},"40c755502f7203ec7dea1fc2a317905ef410c2ebe6":{"name":"acceptOffer"},"603b213725dd11cd25e0494581efada47ede3ff629":{"name":"submitOffer"},"6040ea8f1e3ed4b7eb37b715ab0e6e6261067c2b9f":{"name":"createListing"}},"src/lib/used-car-actions.ts",""] */ __turbopack_context__.s([
    "acceptOffer",
    ()=>acceptOffer,
    "createListing",
    ()=>createListing,
    "markSold",
    ()=>markSold,
    "rejectOffer",
    ()=>rejectOffer,
    "submitOffer",
    ()=>submitOffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
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
;
;
;
;
/** Accepts "৳20,50,000", "2050000", "20,50,000" — all the same offer. */ function parseBdt(raw) {
    const digits = raw.replace(/[^\d.]/g, "");
    const n = Number(digits);
    return Number.isFinite(n) ? n : NaN;
}
async function submitOffer(_prev, formData) {
    const buyer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentBuyer"])();
    if (!buyer) return {
        error: "Only buyer accounts can make offers."
    };
    const listingId = String(formData.get("listingId") ?? "");
    const amount = parseBdt(String(formData.get("amount") ?? ""));
    if (!Number.isFinite(amount) || amount <= 0) {
        return {
            error: "Enter an offer amount, e.g. ৳20,50,000."
        };
    }
    const listing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
        where: {
            id: listingId
        }
    });
    if (!listing) return {
        error: "That listing is no longer available."
    };
    if (listing.sellerId === buyer.id) return {
        error: "You can't make an offer on your own listing."
    };
    if (listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD) return {
        error: "That car has already sold."
    };
    const duplicate = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.findFirst({
        where: {
            listingId,
            buyerId: buyer.id,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].PENDING
        }
    });
    if (duplicate) return {
        error: "You already have a pending offer on this listing."
    };
    // The seller's dashboard reads status, so flag the listing as having offers.
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.create({
            data: {
                listingId,
                buyerId: buyer.id,
                amountBdt: amount
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
            where: {
                id: listingId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].OFFER_RECEIVED
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    return {
        sentAmount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdt"])(amount)
    };
}
/** Accepted upload types → file extension. */ const IMAGE_EXT = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp"
};
/** Auction sheets are accepted as an image or a PDF; everything else is refused. */ const SHEET_EXT = {
    ...IMAGE_EXT,
    "application/pdf": "pdf"
};
const VIDEO_EXT = {
    "video/mp4": "mp4",
    "video/webm": "webm",
    "video/quicktime": "mov",
    "video/x-matroska": "mkv"
};
const MAX_SHEET_BYTES = 5 * 1024 * 1024; // 5 MB
const MAX_PHOTO_BYTES = 6 * 1024 * 1024; // 6 MB each
const MAX_PHOTOS = 8;
const MAX_VIDEO_BYTES = 40 * 1024 * 1024; // 40 MB
const ACCIDENT_VALUES = new Set(Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccidentStatus"]));
/** Write one uploaded file under public/uploads/<subdir>, return its public path. */ async function saveUpload(file, subdir, ext) {
    const fileName = `${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"])()}.${ext}`;
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "uploads", subdir);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["mkdir"])(dir, {
        recursive: true
    });
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs$2f$promises__$5b$external$5d$__$28$node$3a$fs$2f$promises$2c$__cjs$29$__["writeFile"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(dir, fileName), Buffer.from(await file.arrayBuffer()));
    return `/uploads/${subdir}/${fileName}`;
}
async function createListing(_prev, formData) {
    const seller = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const str = (key)=>String(formData.get(key) ?? "").trim();
    const title = str("title");
    const make = str("make");
    const model = str("model");
    const manufactureYear = Number(str("manufactureYear"));
    const mileageKm = Number(str("mileageKm"));
    const location = str("location");
    const priceBdt = parseBdt(str("priceBdt"));
    const registrationNumber = str("registrationNumber");
    const registrationYearRaw = str("registrationYear");
    const registrationYear = registrationYearRaw ? Number(registrationYearRaw) : null;
    const transmission = str("transmission") || null;
    const fuelType = str("fuelType") || null;
    const engineCcRaw = str("engineCc");
    const engineCc = engineCcRaw ? Number(engineCcRaw) : null;
    const color = str("color") || null;
    const conditionNotes = str("conditionNotes");
    const accidentRaw = str("accidentStatus");
    const thisYear = new Date().getFullYear();
    if (title.length < 4) return {
        error: "Give the listing a clear title, e.g. “2019 Toyota Axio Hybrid”."
    };
    if (!make) return {
        error: "Enter the car's make (e.g. Toyota)."
    };
    if (!model) return {
        error: "Enter the car's model (e.g. Axio)."
    };
    if (!Number.isInteger(manufactureYear) || manufactureYear < 1980 || manufactureYear > thisYear) return {
        error: `Enter a valid manufacture year (1980–${thisYear}).`
    };
    if (!Number.isFinite(mileageKm) || mileageKm < 0 || mileageKm > 2_000_000) return {
        error: "Enter the mileage in kilometres."
    };
    if (!location) return {
        error: "Enter the car's location (city)."
    };
    if (!Number.isFinite(priceBdt) || priceBdt <= 0) return {
        error: "Enter an asking price, e.g. ৳20,50,000."
    };
    if (!registrationNumber) return {
        error: "Enter the BRTA registration number."
    };
    if (registrationYear !== null && (!Number.isInteger(registrationYear) || registrationYear < 1980 || registrationYear > thisYear)) return {
        error: `Registration year must be between 1980 and ${thisYear}.`
    };
    if (engineCc !== null && (!Number.isFinite(engineCc) || engineCc <= 0 || engineCc > 10000)) return {
        error: "That engine size (cc) doesn't look right."
    };
    if (conditionNotes.length < 20) return {
        error: "Describe the car's condition in a little more detail (at least 20 characters)."
    };
    const accidentStatus = ACCIDENT_VALUES.has(accidentRaw) ? accidentRaw : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccidentStatus"].NOT_CHECKED;
    // ---- auction sheet (required) ----
    const sheet = formData.get("auctionSheet");
    if (!(sheet instanceof File) || sheet.size === 0) return {
        error: "Attach the car's auction sheet (JPG, PNG, WebP or PDF)."
    };
    const sheetExt = SHEET_EXT[sheet.type];
    if (!sheetExt) return {
        error: "The auction sheet must be a JPG, PNG, WebP or PDF file."
    };
    if (sheet.size > MAX_SHEET_BYTES) return {
        error: "The auction sheet must be 5 MB or smaller."
    };
    // ---- photos (optional, multiple) ----
    const photoFiles = formData.getAll("photos").filter((f)=>f instanceof File && f.size > 0);
    if (photoFiles.length > MAX_PHOTOS) return {
        error: `You can upload up to ${MAX_PHOTOS} photos.`
    };
    for (const p of photoFiles){
        if (!IMAGE_EXT[p.type]) return {
            error: "Photos must be JPG, PNG or WebP images."
        };
        if (p.size > MAX_PHOTO_BYTES) return {
            error: "Each photo must be 6 MB or smaller."
        };
    }
    // ---- 360°/walkaround video (optional) ----
    const videoRaw = formData.get("video360");
    const videoFile = videoRaw instanceof File && videoRaw.size > 0 ? videoRaw : null;
    let videoExt = "";
    if (videoFile) {
        videoExt = VIDEO_EXT[videoFile.type];
        if (!videoExt) return {
            error: "The video must be an MP4, WebM, MOV or MKV file."
        };
        if (videoFile.size > MAX_VIDEO_BYTES) return {
            error: "The video must be 40 MB or smaller."
        };
    }
    // Everything validated — write the files, then create the row.
    let auctionSheetUrl;
    let photoUrls;
    let videoUrl = null;
    try {
        auctionSheetUrl = await saveUpload(sheet, "auction-sheets", sheetExt);
        photoUrls = await Promise.all(photoFiles.map((p)=>saveUpload(p, "listing-photos", IMAGE_EXT[p.type])));
        if (videoFile) videoUrl = await saveUpload(videoFile, "listing-videos", videoExt);
    } catch  {
        return {
            error: "Couldn't save one of your uploads — please try again."
        };
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.create({
        data: {
            sellerId: seller.id,
            title,
            make,
            model,
            manufactureYear,
            mileageKm,
            location,
            priceBdt,
            conditionNotes,
            accidentStatus,
            registrationNumber,
            registrationYear,
            transmission,
            fuelType,
            engineCc,
            color,
            auctionSheetUrl,
            photoUrls,
            videoUrl,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].PENDING_VERIFICATION
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/used-cars/seller?created=1");
}
async function acceptOffer(offerId) {
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const offer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.findUnique({
        where: {
            id: offerId
        },
        include: {
            listing: {
                select: {
                    id: true,
                    sellerId: true,
                    status: true
                }
            }
        }
    });
    if (!offer) return {
        error: "That offer no longer exists."
    };
    if (offer.listing.sellerId !== me.id) return {
        error: "Only the seller can accept offers."
    };
    if (offer.listing.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD) return {
        error: "This car is already sold."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.update({
            where: {
                id: offerId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].ACCEPTED
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.updateMany({
            where: {
                listingId: offer.listing.id,
                id: {
                    not: offerId
                },
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].PENDING
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].REJECTED
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
            where: {
                id: offer.listing.id
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD
            }
        })
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${offer.listing.id}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars");
    return {
        ok: true
    };
}
async function rejectOffer(offerId) {
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const offer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.findUnique({
        where: {
            id: offerId
        },
        include: {
            listing: {
                select: {
                    id: true,
                    sellerId: true
                }
            }
        }
    });
    if (!offer) return {
        error: "That offer no longer exists."
    };
    if (offer.listing.sellerId !== me.id) return {
        error: "Only the seller can decline offers."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.update({
        where: {
            id: offerId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].REJECTED
        }
    });
    const stillPending = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].offer.count({
        where: {
            listingId: offer.listing.id,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OfferStatus"].PENDING
        }
    });
    if (stillPending === 0) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.updateMany({
            where: {
                id: offer.listing.id,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].OFFER_RECEIVED
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].ACTIVE
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${offer.listing.id}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    return {
        ok: true
    };
}
async function markSold(listingId) {
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const listing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
        where: {
            id: listingId
        },
        select: {
            sellerId: true
        }
    });
    if (!listing) return {
        error: "That listing no longer exists."
    };
    if (listing.sellerId !== me.id) return {
        error: "Only the seller can mark it sold."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.update({
        where: {
            id: listingId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars");
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitOffer,
    createListing,
    acceptOffer,
    rejectOffer,
    markSold
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitOffer, "603b213725dd11cd25e0494581efada47ede3ff629", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createListing, "6040ea8f1e3ed4b7eb37b715ab0e6e6261067c2b9f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(acceptOffer, "40c755502f7203ec7dea1fc2a317905ef410c2ebe6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(rejectOffer, "407f20fc6f9f6289ebd723db222694a037692454fb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markSold, "40ba40b578bbcd0007af0efcd96d02238e71e1d236", null);
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
"[project]/src/lib/fx.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getJpyToBdt",
    ()=>getJpyToBdt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
/**
 * JPY -> BDT, fetched from a real exchange-rate API and cached in the
 * ExchangeRate table for exchangeRateTtlMinutes (agreed: 60).
 *
 * The prototype hardcoded 0.79. Nothing here is hardcoded except the
 * last-resort fallback below, which only applies when the API is unreachable
 * AND we have never cached a rate.
 */ const BASE = "JPY";
const QUOTE = "BDT";
// Free, keyless, no rate limit for this volume.
const ENDPOINT = "https://open.er-api.com/v6/latest/JPY";
/** Only used if the API is down and the cache is empty — see getJpyToBdt. */ const COLD_START_FALLBACK = 0.76;
async function fetchLiveRate() {
    try {
        const res = await fetch(ENDPOINT, {
            // We do our own DB-backed caching with an admin-editable TTL.
            cache: "no-store",
            signal: AbortSignal.timeout(8000)
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (typeof data !== "object" || data === null || data.result !== "success") {
            return null;
        }
        const rate = data.rates?.[QUOTE];
        return typeof rate === "number" && rate > 0 ? rate : null;
    } catch  {
        // Network error / timeout / bad JSON — fall back to cache.
        return null;
    }
}
async function getJpyToBdt() {
    const [cached, ttlMinutes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].exchangeRate.findUnique({
            where: {
                base_quote: {
                    base: BASE,
                    quote: QUOTE
                }
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSetting"])("exchangeRateTtlMinutes")
    ]);
    const ttlMs = ttlMinutes * 60 * 1000;
    const isFresh = cached && Date.now() - cached.fetchedAt.getTime() < ttlMs;
    if (cached && isFresh) {
        return {
            rate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(cached.rate),
            fetchedAt: cached.fetchedAt,
            stale: false
        };
    }
    const live = await fetchLiveRate();
    if (live === null) {
        // Serving a known-old rate beats failing the whole screen, but say so.
        if (cached) {
            return {
                rate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(cached.rate),
                fetchedAt: cached.fetchedAt,
                stale: true
            };
        }
        return {
            rate: COLD_START_FALLBACK,
            fetchedAt: new Date(0),
            stale: true
        };
    }
    const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].exchangeRate.upsert({
        where: {
            base_quote: {
                base: BASE,
                quote: QUOTE
            }
        },
        update: {
            rate: live,
            fetchedAt: new Date()
        },
        create: {
            base: BASE,
            quote: QUOTE,
            rate: live,
            fetchedAt: new Date()
        }
    });
    return {
        rate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(saved.rate),
        fetchedAt: saved.fetchedAt,
        stale: false
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/landed-cost.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agentFeeFor",
    ()=>agentFeeFor,
    "computeLandedCost",
    ()=>computeLandedCost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
;
function agentFeeFor(agent, bidBdt) {
    if (!agent) return {
        amount: 0,
        label: "No agent selected"
    };
    if (agent.feeType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeType"].FLAT) return {
        amount: agent.feeValue,
        label: "flat"
    };
    return {
        amount: bidBdt * agent.feeValue / 100,
        label: `${agent.feeValue}% of bid`
    };
}
function computeLandedCost(input, settings, dutyRatePercent) {
    const bidBdt = input.bidJpy * input.rate;
    const shippingBeforeDiscount = settings.shippingFlatBdt;
    const shipping = input.pooled ? shippingBeforeDiscount * (1 - settings.poolingDiscountPercent / 100) : shippingBeforeDiscount;
    // CIF approximation: duty applies to the goods value plus freight.
    const duty = (bidBdt + shipping) * dutyRatePercent / 100;
    const fee = agentFeeFor(input.agent, bidBdt);
    const port = settings.portHandlingBdt;
    return {
        bidBdt,
        duty,
        dutyRatePercent,
        shipping,
        shippingBeforeDiscount,
        agentFee: fee.amount,
        agentFeeLabel: fee.label,
        port,
        total: bidBdt + duty + shipping + fee.amount + port
    };
}
}),
"[project]/src/lib/landed-cost-server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "dutyRateFor",
    ()=>dutyRateFor,
    "landedCostFor",
    ()=>landedCostFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/landed-cost.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function dutyRateFor(engineCc) {
    const bands = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].dutyRate.findMany({
        orderBy: {
            ccMin: "asc"
        }
    });
    const match = bands.filter((b)=>engineCc >= b.ccMin && (b.ccMax === null || engineCc <= b.ccMax)).at(-1);
    // No band configured for this engine — charge nothing rather than guess.
    return match ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(match.ratePercent) : 0;
}
async function landedCostFor(input) {
    const [settings, dutyRatePercent] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSettings"])(),
        dutyRateFor(input.engineCc)
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["computeLandedCost"])(input, settings, dutyRatePercent);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/cart-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"001598b04c860cd34f23d356317752da2ca4f304ad":{"name":"checkoutCart"},"40245b88de9b8db0cd8cca24e556c8a56cf1a5dcdf":{"name":"removeFromCart"},"60fe7a46e1f1fe6f93ea44806c98d5d58493111f01":{"name":"addToCart"}},"src/lib/cart-actions.ts",""] */ __turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "checkoutCart",
    ()=>checkoutCart,
    "removeFromCart",
    ()=>removeFromCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fx.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/landed-cost-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
/**
 * Look up the real title + price for a cart item, server-side, from whichever
 * table `kind` points at — so a client can never inject its own price.
 */ async function resolveItem(kind, refId) {
    if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemKind"].NEW_CAR) {
        const v = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCarVariant.findUnique({
            where: {
                id: refId
            },
            include: {
                newCar: {
                    include: {
                        brand: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        });
        if (!v) return null;
        return {
            title: `${v.newCar.brand.name} ${v.newCar.model} — ${v.name}`,
            subtitle: `New car · ${v.engine}`,
            amountBdt: Number(v.priceBdt.toString())
        };
    }
    if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemKind"].USED_CAR) {
        const l = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
            where: {
                id: refId
            }
        });
        if (!l || l.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].ACTIVE && l.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].OFFER_RECEIVED) {
            return null;
        }
        return {
            title: l.title,
            subtitle: `Used car · ${l.location}`,
            amountBdt: Number(l.priceBdt.toString())
        };
    }
    if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemKind"].MODIFICATION) {
        const p = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].part.findUnique({
            where: {
                id: refId
            }
        });
        if (!p) return null;
        return {
            title: `${p.brand} ${p.name}`,
            subtitle: "Modification part",
            amountBdt: Number(p.priceBdt.toString())
        };
    }
    // RECONDITIONED — price is the estimated landed cost of the auction lot.
    const lot = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.findUnique({
        where: {
            id: refId
        },
        include: {
            winningBid: true,
            bids: {
                orderBy: {
                    amountJpy: "desc"
                },
                take: 1
            }
        }
    });
    if (!lot) return null;
    const bidJpy = Number((lot.winningBid?.amountJpy ?? lot.bids[0]?.amountJpy ?? lot.startingPriceJpy).toString());
    const fx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJpyToBdt"])();
    const lc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["landedCostFor"])({
        bidJpy,
        rate: fx.rate,
        agent: null,
        pooled: false,
        engineCc: lot.engineCc
    });
    return {
        title: `${lot.manufactureYear} ${lot.make} ${lot.model}`,
        subtitle: "Reconditioned import · est. landed cost",
        amountBdt: Math.round(lc.total)
    };
}
async function addToCart(kind, refId) {
    const buyer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const resolved = await resolveItem(kind, refId);
    if (!resolved) return {
        error: "That item is no longer available."
    };
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cartItem.findFirst({
        where: {
            buyerId: buyer.id,
            kind,
            refId,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemStatus"].IN_CART
        }
    });
    if (existing) return {
        error: "That's already in your cart."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cartItem.create({
        data: {
            buyerId: buyer.id,
            kind,
            refId,
            title: resolved.title,
            subtitle: resolved.subtitle,
            amountBdt: resolved.amountBdt
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cart");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout"); // refresh the header cart badge
    return {
        ok: true
    };
}
async function removeFromCart(id) {
    const buyer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cartItem.deleteMany({
        where: {
            id,
            buyerId: buyer.id,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemStatus"].IN_CART
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cart");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    return {
        ok: true
    };
}
async function checkoutCart() {
    const buyer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cartItem.count({
        where: {
            buyerId: buyer.id,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemStatus"].IN_CART
        }
    });
    if (count === 0) return {
        error: "Your cart is empty."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].cartItem.updateMany({
        where: {
            buyerId: buyer.id,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemStatus"].IN_CART
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CartItemStatus"].PAID,
            paidAt: new Date()
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/cart");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    return {
        ok: true,
        demo: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addToCart,
    removeFromCart,
    checkoutCart
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToCart, "60fe7a46e1f1fe6f93ea44806c98d5d58493111f01", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeFromCart, "40245b88de9b8db0cd8cca24e556c8a56cf1a5dcdf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkoutCart, "001598b04c860cd34f23d356317752da2ca4f304ad", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/listing-chat-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40f17c18561edfe85ead8fcdf15d482a45263b01f3":{"name":"readListingThread"},"603e007f9e51e4d85fd8f5ec877d8f37721b364311":{"name":"replyToThread"},"607d79a02daa52ab88bbed006758e37f6cb6226ac3":{"name":"messageSeller"}},"src/lib/listing-chat-actions.ts",""] */ __turbopack_context__.s([
    "messageSeller",
    ()=>messageSeller,
    "readListingThread",
    ()=>readListingThread,
    "replyToThread",
    ()=>replyToThread
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
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
/** Map a thread's messages for one viewer (drives bubble side + label). */ async function threadMessages(threadId, viewerBuyerId) {
    const msgs = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].listingMessage.findMany({
        where: {
            threadId
        },
        orderBy: {
            createdAt: "asc"
        },
        take: 200,
        include: {
            senderBuyer: {
                select: {
                    id: true,
                    fullName: true
                }
            }
        }
    });
    return msgs.map((m)=>({
            id: m.id,
            body: m.body,
            createdAt: m.createdAt.toISOString(),
            mine: m.senderBuyerId === viewerBuyerId,
            senderLabel: m.senderBuyer.fullName
        }));
}
/** The thread if this buyer is a participant (the interested buyer OR the seller). */ async function participantThread(threadId, buyerId) {
    const thread = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].listingThread.findUnique({
        where: {
            id: threadId
        },
        include: {
            listing: {
                select: {
                    id: true,
                    sellerId: true
                }
            }
        }
    });
    if (!thread) return null;
    if (thread.buyerId !== buyerId && thread.listing.sellerId !== buyerId) return null;
    return thread;
}
async function messageSeller(listingId, body) {
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const text = body.trim();
    if (!text) return {
        error: "Type a message first."
    };
    const listing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findUnique({
        where: {
            id: listingId
        },
        select: {
            sellerId: true,
            status: true
        }
    });
    if (!listing) return {
        error: "That listing no longer exists."
    };
    if (listing.sellerId === me.id) return {
        error: "This is your own listing."
    };
    if (listing.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].ACTIVE && listing.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].OFFER_RECEIVED) {
        return {
            error: "This listing isn't open for messages."
        };
    }
    const thread = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].listingThread.upsert({
        where: {
            listingId_buyerId: {
                listingId,
                buyerId: me.id
            }
        },
        update: {},
        create: {
            listingId,
            buyerId: me.id
        }
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].listingMessage.create({
        data: {
            threadId: thread.id,
            senderBuyerId: me.id,
            body: text
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${listingId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    return {
        threadId: thread.id
    };
}
async function replyToThread(threadId, body) {
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const text = body.trim();
    if (!text) return {
        error: "Type a message first."
    };
    const thread = await participantThread(threadId, me.id);
    if (!thread) return {
        error: "You can't post in this conversation."
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].listingMessage.create({
        data: {
            threadId,
            senderBuyerId: me.id,
            body: text
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/used-cars/${thread.listing.id}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/used-cars/seller");
    return {
        threadId
    };
}
async function readListingThread(threadId) {
    const me = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireBuyer"])();
    const thread = await participantThread(threadId, me.id);
    if (!thread) return {
        error: "Not allowed."
    };
    return {
        messages: await threadMessages(threadId, me.id)
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    messageSeller,
    replyToThread,
    readListingThread
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(messageSeller, "607d79a02daa52ab88bbed006758e37f6cb6226ac3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(replyToThread, "603e007f9e51e4d85fd8f5ec877d8f37721b364311", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(readListingThread, "40f17c18561edfe85ead8fcdf15d482a45263b01f3", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(app)/used-cars/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/used-car-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/cart-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/listing-chat-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/used-car-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cart-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/listing-chat-actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
"[project]/.next-internal/server/app/(app)/used-cars/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/used-car-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/cart-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/lib/listing-chat-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "00bb3976300fa48668860cc326a9dc3591e5182812",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "407f20fc6f9f6289ebd723db222694a037692454fb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rejectOffer"],
    "40ba40b578bbcd0007af0efcd96d02238e71e1d236",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markSold"],
    "40c755502f7203ec7dea1fc2a317905ef410c2ebe6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["acceptOffer"],
    "40f17c18561edfe85ead8fcdf15d482a45263b01f3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readListingThread"],
    "603b213725dd11cd25e0494581efada47ede3ff629",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitOffer"],
    "603e007f9e51e4d85fd8f5ec877d8f37721b364311",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replyToThread"],
    "607d79a02daa52ab88bbed006758e37f6cb6226ac3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["messageSeller"],
    "60fe7a46e1f1fe6f93ea44806c98d5d58493111f01",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToCart"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/used-cars/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/used-car-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/cart-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/lib/listing-chat-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/used-car-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cart-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/listing-chat-actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$used$2d$cars$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$used$2d$car$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cart$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$listing$2d$chat$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0u9l7j4._.js.map