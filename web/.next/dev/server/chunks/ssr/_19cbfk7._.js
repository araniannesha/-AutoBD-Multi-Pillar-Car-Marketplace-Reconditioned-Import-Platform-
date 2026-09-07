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
"[project]/src/lib/assistant/requirements.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Requirements extracted from a buyer's plain-language brief.
 *
 * The FR wants an LLM to do this extraction. When an API key is configured we
 * use one (see llm.ts); this deterministic parser is the fallback so the
 * assistant still returns real, ranked results without one — rather than the
 * prototype's two canned strings.
 */ __turbopack_context__.s([
    "parseBudget",
    ()=>parseBudget,
    "parseRequirements",
    ()=>parseRequirements
]);
const MAKES = [
    "Toyota",
    "Honda",
    "Nissan",
    "Mazda",
    "Mitsubishi",
    "Suzuki"
];
function parseBudget(text) {
    const t = text.toLowerCase().replace(/,/g, "");
    const lakh = /(\d+(?:\.\d+)?)\s*(?:lakh|lac|lakhs|l\b)/.exec(t);
    if (lakh) return Number(lakh[1]) * 100_000;
    const crore = /(\d+(?:\.\d+)?)\s*(?:crore|cr\b)/.exec(t);
    if (crore) return Number(crore[1]) * 10_000_000;
    // A bare number large enough to be taka rather than a year or a seat count.
    const bare = /(?:under|below|within|budget|upto|up to|max)\D{0,10}(\d{5,9})/.exec(t);
    if (bare) return Number(bare[1]);
    return null;
}
function parseRequirements(text) {
    const t = text.toLowerCase();
    const seats = /(\d+)\s*(?:seat|seater|people|persons|family of)/.exec(t);
    const familyOf = /family of\s*(\d+)/.exec(t);
    return {
        maxBudgetBdt: parseBudget(text),
        minSeats: familyOf ? Number(familyOf[1]) : seats ? Number(seats[1]) : null,
        wantsFuelEfficient: /fuel|efficien|mileage|km\/l|economy|hybrid|petrol cost/.test(t),
        wantsFamily: /family|kids|children|spacious|space/.test(t),
        wantsCityDriving: /city|dhaka|traffic|urban|commut/.test(t),
        wantsLowestTco: /cheap|lowest|total cost|ownership|tco|running cost|budget/.test(t),
        preferredMakes: MAKES.filter((m)=>t.includes(m.toLowerCase())),
        bodyHint: /suv|crossover|jeep/.test(t) ? "SUV" : /sedan|saloon/.test(t) ? "SEDAN" : /hatch/.test(t) ? "HATCH" : null
    };
}
}),
"[project]/src/lib/assistant/llm.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatReply",
    ()=>chatReply,
    "extractWithLlm",
    ()=>extractWithLlm,
    "llmConfigured",
    ()=>llmConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$requirements$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant/requirements.ts [app-rsc] (ecmascript)");
;
/**
 * Optional LLM layer for requirement extraction.
 *
 * The FR names the OpenAI API. This implementation targets Claude's Messages
 * API instead — the provider is isolated to this one module, so swapping it is
 * a single-file change. Without a key the assistant falls back to the
 * deterministic parser and says so in the UI; the ranking, the inventory and
 * the reasoning are real either way.
 */ const MODEL = "claude-sonnet-5";
const ENDPOINT = "https://api.anthropic.com/v1/messages";
const llmConfigured = ()=>Boolean(process.env.ANTHROPIC_API_KEY);
const SYSTEM = `You extract car-buying requirements from a shopper's message in Bangladesh.
Reply with ONLY a JSON object, no prose, matching exactly this shape:
{"maxBudgetBdt": number|null, "minSeats": number|null, "wantsFuelEfficient": boolean,
 "wantsFamily": boolean, "wantsCityDriving": boolean, "wantsLowestTco": boolean,
 "preferredMakes": string[], "bodyHint": "SUV"|"SEDAN"|"HATCH"|null}
Budgets are in BDT; "25 lakh" is 2500000. preferredMakes uses proper case (e.g. "Toyota").`;
async function extractWithLlm(message) {
    if (!llmConfigured()) return null;
    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": process.env.ANTHROPIC_API_KEY,
                "anthropic-version": "2023-06-01"
            },
            body: JSON.stringify({
                model: MODEL,
                max_tokens: 400,
                system: SYSTEM,
                messages: [
                    {
                        role: "user",
                        content: message
                    }
                ]
            }),
            cache: "no-store",
            signal: AbortSignal.timeout(20000)
        });
        if (!res.ok) return null;
        const data = await res.json();
        const text = data.content?.find((c)=>c.type === "text")?.text;
        if (!text) return null;
        // Be tolerant of a stray code fence around the JSON.
        const json = /\{[\s\S]*\}/.exec(text)?.[0];
        if (!json) return null;
        const parsed = JSON.parse(json);
        const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$requirements$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRequirements"])(message);
        return {
            maxBudgetBdt: parsed.maxBudgetBdt ?? fallback.maxBudgetBdt,
            minSeats: parsed.minSeats ?? fallback.minSeats,
            wantsFuelEfficient: parsed.wantsFuelEfficient ?? fallback.wantsFuelEfficient,
            wantsFamily: parsed.wantsFamily ?? fallback.wantsFamily,
            wantsCityDriving: parsed.wantsCityDriving ?? fallback.wantsCityDriving,
            wantsLowestTco: parsed.wantsLowestTco ?? fallback.wantsLowestTco,
            preferredMakes: Array.isArray(parsed.preferredMakes) ? parsed.preferredMakes : fallback.preferredMakes,
            bodyHint: parsed.bodyHint ?? fallback.bodyHint
        };
    } catch  {
        return null;
    }
}
// -------------------------------------------------- conversational advice
const CHAT_SYSTEM = `You are AutoBD's car-buying assistant for Bangladesh. Give concise, friendly, practical advice about buying new, used, and reconditioned (Japanese import) cars here — budgets in BDT/lakh, fuel economy, resale, BRTA registration, and total cost of ownership. When the platform has matched specific cars for the user's request, they are provided to you; refer to them by name and explain the trade-offs, but never invent listings or prices that are not given. Keep replies to a short paragraph or two, in plain language.`;
async function chatReply(history, inventoryNote) {
    if (!llmConfigured()) return null;
    try {
        const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": process.env.ANTHROPIC_API_KEY,
                "anthropic-version": "2023-06-01"
            },
            body: JSON.stringify({
                model: MODEL,
                max_tokens: 500,
                system: inventoryNote ? `${CHAT_SYSTEM}\n\n${inventoryNote}` : CHAT_SYSTEM,
                messages: history.slice(-10)
            }),
            cache: "no-store",
            signal: AbortSignal.timeout(25000)
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.content?.find((c)=>c.type === "text")?.text?.trim() || null;
    } catch  {
        return null;
    }
}
}),
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
"[project]/src/lib/assistant/recommend.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "recommend",
    ()=>recommend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fx.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/landed-cost-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/landed-cost.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/enums.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
/** Seats aren't a column; these are the only body facts we can state honestly. */ const SEVEN_SEATERS = [
    "Xpander"
];
const SUVS = [
    "Harrier",
    "Vezel",
    "CX-5",
    "X-Trail",
    "Corolla Cross",
    "Xpander"
];
const HATCHES = [
    "Swift"
];
const bodyOf = (model)=>SUVS.some((m)=>model.includes(m)) ? "SUV" : HATCHES.some((m)=>model.includes(m)) ? "HATCH" : "SEDAN";
async function recommend(req, limit = 4) {
    const [newCars, usedCars, lots, research, settings, fx] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].newCar.findMany({
            include: {
                variants: {
                    orderBy: {
                        priceBdt: "asc"
                    }
                },
                brand: {
                    select: {
                        name: true,
                        slug: true
                    }
                }
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].usedCarListing.findMany({
            where: {
                status: {
                    not: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListingStatus"].SOLD
                }
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].auctionCar.findMany({
            where: {
                status: {
                    in: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].PENDING,
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LotStatus"].LIVE
                    ]
                }
            },
            include: {
                auction: true,
                bids: {
                    orderBy: {
                        amountJpy: "desc"
                    },
                    take: 1
                }
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].researchModel.findMany({
            include: {
                issues: true
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSettings"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fx$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJpyToBdt"])()
    ]);
    const researchFor = (title)=>research.find((r)=>title.toLowerCase().includes(r.name.split(" ")[1]?.toLowerCase() ?? "§"));
    const out = [];
    const scoreCommon = (priceBdt, model, reasons, tradeoffs)=>{
        let score = 0;
        if (req.maxBudgetBdt !== null) {
            if (priceBdt > req.maxBudgetBdt) return null; // Hard filter: over budget.
            const headroom = 1 - priceBdt / req.maxBudgetBdt;
            score += 40 + headroom * 20;
            reasons.push(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdtLakh"])(priceBdt)} — inside your ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdtLakh"])(req.maxBudgetBdt)} budget`);
        } else {
            score += 20;
        }
        const body = bodyOf(model);
        if (req.bodyHint && body === req.bodyHint) {
            score += 15;
            reasons.push(`${body.toLowerCase()} body, as asked`);
        }
        if (req.minSeats !== null && req.minSeats >= 6) {
            if (SEVEN_SEATERS.some((m)=>model.includes(m))) {
                score += 25;
                reasons.push(`seats ${req.minSeats} — one of the few 7-seaters on the platform`);
            } else {
                score -= 20;
                tradeoffs.push(`5 seats — short of the ${req.minSeats} you asked for`);
            }
        }
        if (req.wantsFamily && body === "SUV") {
            score += 10;
            reasons.push("SUV space suits a family");
        }
        if (req.preferredMakes.length > 0) {
            if (req.preferredMakes.some((m)=>model.toLowerCase().includes(m.toLowerCase()))) {
                score += 12;
            }
        }
        return score;
    };
    // ---- Pillar 1: brand new
    for (const car of newCars){
        const variant = car.variants[0];
        if (!variant) continue;
        const price = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(variant.priceBdt);
        const model = `${car.brand.name} ${car.model}`;
        const reasons = [];
        const tradeoffs = [];
        let score = scoreCommon(price, car.model, reasons, tradeoffs);
        if (score === null) continue;
        const economy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(variant.economyKmPerL);
        if (req.wantsFuelEfficient && economy >= 20) {
            score += 18;
            reasons.push(`${economy} km/l — among the most efficient we list`);
        }
        reasons.push(`${car.warrantyYears}-year warranty, dealer-fulfilled`);
        tradeoffs.push("New-car pricing: no import duty to pay, but the highest sticker of the three routes");
        if (req.preferredMakes.length > 0 && !req.preferredMakes.includes(car.brand.name)) score -= 8;
        out.push({
            id: car.id,
            pillar: "New",
            title: `${model} ${variant.name}`,
            priceLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdtLakh"])(price),
            priceBdt: price,
            href: `/new-cars/${car.brand.slug}/${car.id}`,
            reasons,
            tradeoffs,
            score
        });
    }
    // ---- Pillar 2: used P2P
    for (const listing of usedCars){
        const price = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(listing.priceBdt);
        const reasons = [];
        const tradeoffs = [];
        let score = scoreCommon(price, listing.model, reasons, tradeoffs);
        if (score === null) continue;
        if (req.wantsLowestTco) {
            score += 15;
            reasons.push("cheapest route to ownership — no duty, no shipping");
        }
        if (listing.ownershipVerified) {
            score += 8;
            reasons.push("BRTA ownership documents verified");
        } else {
            score -= 10;
            tradeoffs.push("ownership still under BRTA verification");
        }
        if (listing.accidentStatus === "ONE_INCIDENT") {
            tradeoffs.push("one recorded incident — repaired, but on the record");
            score -= 5;
        }
        tradeoffs.push(`${listing.mileageKm.toLocaleString("en-US")} km already on the clock`);
        const r = researchFor(listing.title);
        if (r?.issues[0]) tradeoffs.push(`known issue: ${r.issues[0].text}`);
        out.push({
            id: listing.id,
            pillar: "Used",
            title: listing.title,
            priceLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdtLakh"])(price),
            priceBdt: price,
            href: `/used-cars/${listing.id}`,
            reasons,
            tradeoffs,
            score
        });
    }
    // ---- Pillar 3: reconditioned import (priced at full landed cost)
    for (const lot of lots){
        const bidJpy = lot.bids[0] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(lot.bids[0].amountJpy) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["num"])(lot.startingPriceJpy);
        const dutyRate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dutyRateFor"])(lot.engineCc);
        const cost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$landed$2d$cost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["computeLandedCost"])(// No agent chosen yet at recommendation time, so agent fee is excluded
        // and flagged as a trade-off rather than guessed.
        {
            bidJpy,
            rate: fx.rate,
            agent: {
                feeType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$enums$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeeType"].PERCENT,
                feeValue: 0
            },
            pooled: false
        }, settings, dutyRate);
        const reasons = [];
        const tradeoffs = [];
        let score = scoreCommon(cost.total, lot.model, reasons, tradeoffs);
        if (score === null) continue;
        reasons.push(`landed cost ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdt"])(cost.total)} incl. ${dutyRate}% duty and shipping`);
        reasons.push(`grade ${lot.grade} at ${lot.auction.house}, ${lot.manufactureYear} model`);
        tradeoffs.push("agent fee not included — it depends which agent you pick");
        tradeoffs.push("you bid against other buyers, so the final price can move");
        const r = researchFor(`${lot.make} ${lot.model}`);
        if (r?.issues[0]) tradeoffs.push(`known issue: ${r.issues[0].text}`);
        if (req.wantsFuelEfficient && lot.engineCc <= 1500) {
            score += 12;
            reasons.push(`${lot.engineCc}cc — lands in the lowest ${dutyRate}% duty band`);
        }
        out.push({
            id: lot.id,
            pillar: "Reconditioned",
            title: `${lot.manufactureYear} ${lot.make} ${lot.model}`,
            priceLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bdt"])(cost.total),
            priceBdt: cost.total,
            href: "/auctions",
            reasons,
            tradeoffs,
            score
        });
    }
    // Lowest-TCO briefs should rank on price, not just fit.
    if (req.wantsLowestTco) {
        for (const s of out)s.score += Math.max(0, 20 - s.priceBdt / 500_000);
    }
    return out.sort((a, b)=>b.score - a.score).slice(0, limit);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/assistant-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"002c8191930f6745a0418af9f9d324082ee938431d":{"name":"assistantStatus"},"6034b1b65714f53ddd7c47a7691245156da064a31a":{"name":"askAssistant"}},"src/lib/assistant-actions.ts",""] */ __turbopack_context__.s([
    "askAssistant",
    ()=>askAssistant,
    "assistantStatus",
    ()=>assistantStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$requirements$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant/requirements.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$llm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant/llm.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$recommend$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant/recommend.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$recommend$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$recommend$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function askAssistant(message, history = []) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireUser"])();
    const text = message.trim();
    if (!text) return {
        error: "Tell me what you're looking for."
    };
    if (text.length > 1000) return {
        error: "That's a bit long — try summarising it."
    };
    const llm = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$llm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractWithLlm"])(text);
    const req = llm ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$requirements$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRequirements"])(text);
    const suggestions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$recommend$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recommend"])(req);
    // Templated fallback answer — used when no LLM key is configured.
    let templated;
    if (suggestions.length === 0) {
        templated = req.maxBudgetBdt !== null ? `Nothing on the platform lands under ${(req.maxBudgetBdt / 100000).toFixed(1)} lakh right now — across all three pillars. Try raising the budget, or ask again once new lots are listed.` : "I couldn't match anything to that. Try mentioning a budget, seats, or a make.";
    } else {
        const bits = [];
        if (req.maxBudgetBdt !== null) bits.push(`under ${(req.maxBudgetBdt / 100000).toFixed(0)} lakh`);
        if (req.minSeats !== null) bits.push(`${req.minSeats} seats`);
        if (req.wantsFuelEfficient) bits.push("fuel-efficient");
        if (req.wantsCityDriving) bits.push("city-friendly");
        if (req.preferredMakes.length) bits.push(req.preferredMakes.join("/"));
        const summary = bits.length ? bits.join(", ") : "what you described";
        templated = `Ranked ${suggestions.length} options for ${summary}, across new, used and reconditioned. Reasoning and trade-offs below come from each car's own numbers.`;
    }
    // Real conversational advice when a key is configured (grounded on the matched
    // cars); otherwise the templated line above.
    const inventoryNote = suggestions.length ? "Cars the platform matched for this request (refer to these, don't invent others):\n" + suggestions.map((s, i)=>`${i + 1}. ${s.title} — ${s.priceLabel} (${s.pillar}). ${s.reasons.join("; ")}`).join("\n") : "No matching cars are currently listed on the platform for this request.";
    const aiReply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$llm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chatReply"])([
        ...history,
        {
            role: "user",
            content: text
        }
    ], inventoryNote);
    return {
        answer: aiReply ?? templated,
        suggestions,
        usedLlm: llm !== null || aiReply !== null
    };
}
async function assistantStatus() {
    return {
        llmConfigured: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2f$llm$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["llmConfigured"])()
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    askAssistant,
    assistantStatus
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(askAssistant, "6034b1b65714f53ddd7c47a7691245156da064a31a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(assistantStatus, "002c8191930f6745a0418af9f9d324082ee938431d", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(app)/assistant/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/assistant-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(app)/assistant/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/assistant-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "00bb3976300fa48668860cc326a9dc3591e5182812",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "6034b1b65714f53ddd7c47a7691245156da064a31a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["askAssistant"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(app)/assistant/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/assistant-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assistant-actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$app$292f$assistant$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assistant$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
}
}),
];

//# sourceMappingURL=_19cbfk7._.js.map