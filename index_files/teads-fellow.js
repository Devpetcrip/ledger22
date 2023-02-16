(() => {
    "use strict";
    const n = "6.12.0_51a1e72",
        t = "https://t.teads.tv/track",
        e = "https://cm.teads.tv/v3/conversion",
        o = "js-web",
        i = "js-gtm";
    let a = !1;

    function c() {
        return window.advertiser_domain
    }

    function r() {
        return window.teads_buyer_pixel_id
    }

    function d() {
        return !0 === window.teads_post_message_event_to_opener
    }

    function s() {
        return !0 === window.teads_post_message_event_to_window
    }

    function l(n) {
        window.teads_iab_consent_data = n
    }

    function u() {
        return window.teads_iab_consent_data
    }

    function p(n) {
        window.teads_usp_consent_data = n
    }

    function w() {
        return window.teads_usp_consent_data
    }

    function v() {
        return window.teads_gdpr_advertiser
    }

    function _() {
        return window.teads_ccpa_advertiser
    }

    function f() {
        return !0 === window.teads_tracking_allowed
    }

    function g(n) {
        window.teads_auction_id = n
    }

    function m() {
        return window.teads_auction_id
    }

    function y(n) {
        const t = window.teads_auction_id_forwarded_by || {};
        t[n] = !0, window.teads_auction_id_forwarded_by = t
    }

    function h(n) {
        window.teads_session_id = n
    }

    function b() {
        return window.teads_session_id
    }

    function k() {
        return window.teads_viewer_id
    }

    function C() {
        return !0 !== window.teads_disable_first_party_cookie && window.first_party_cookie_allowed
    }

    function I(n) {
        window.teads_tracking_events_sent || (window.teads_tracking_events_sent = []), window.teads_tracking_events_sent.push(n)
    }
    const E = n => {
        a = n
    };

    function D() {
        if (void 0 !== window.teads && void 0 !== window.teads.advertiserId) {
            if ("number" == typeof window.teads.advertiserId) return window.teads.advertiserId
        } else {
            if (void 0 === window.teads_cv || void 0 === window.teads_cv.advertiserId) return window.teads_adv_id;
            if ("number" == typeof window.teads_cv.advertiserId) return window.teads_cv.advertiserId
        }
    }

    function A() {
        return window.teads_env && [o, i].includes(window.teads_env) ? window.teads_env : o
    }
    const P = "internal";

    function U(n) {
        return "[object Function]" === toString.call(n)
    }

    function S(n) {
        let t = "";
        const e = function(n) {
                let t = n,
                    e = !1;
                try {
                    for (let n = 0; t.parent.document !== t.document || n < 50; n += 1) {
                        if (!t.parent.document) {
                            e = !0;
                            break
                        }
                        t = t.parent
                    }
                } catch (n) {
                    e = !0
                }
                return {
                    topFrame: t,
                    err: e
                }
            }(n),
            {
                topFrame: o
            } = e;
        if (e.err) try {
            t = o.top.location.href
        } catch (n) {
            t = o.location.href
        } else t = o.location.href;
        return t
    }

    function R(t, e, o) {
        try {
            const i = {
                errorMessage: t,
                topUrl: S(window),
                userAgent: void 0 !== window.navigator && void 0 !== window.navigator.userAgent ? window.navigator.userAgent : "",
                exception: e || "",
                version: n,
                type: o || "bad_integration"
            };
            t = JSON.stringify(i)
        } catch (n) {}
        document.createElement("img").src = "".concat("https://l.teads.tv/performance/http-source", "?").concat(encodeURIComponent(t))
    }

    function O(n) {
        const t = ["account", "password", "pass", "secret", "secretkey", "username", "user", "login", "ordernumber", "orderid", "email", "mail", "user.email", "user.password", "user.name", "user.mail", "user.lastname", "user.firstname", "user.phone", "user.phonenumber", "lastname", "firstname", "name", "address", "phonenumber", "phone", "client_secret", "guid"];
        if ("" !== n) {
            const e = n.split("?").length > 1 ? n.split("?")[1] : void 0;
            if (void 0 !== e) {
                let o = "".concat(n.split("?")[0], "?");
                const i = e.split("&");
                for (let n = 0; n < i.length; n += 1) {
                    const e = i[n].split(/=(.+)/);
                    o = "".concat(o + (0 === n ? "" : "&") + e[0], "=").concat(t.indexOf(e[0]) >= 0 ? "XXXXXXXX" : e[1])
                }
                n = o
            }
        }
        return n
    }

    function x(n) {
        try {
            const t = new RegExp(/(?:\?|&|%3F|%26)auctid(?:=|%3D)([0-9a-zA-Z-_]*)/).exec(n);
            if (t && t.length >= 2) return t[1]
        } catch (n) {
            R("Error when extracting Auction ID from url", null == n ? void 0 : n.message, P)
        }
    }

    function T(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            c = "".concat(n, "=").concat(t);
        i && (c += ";path=".concat(i)), "number" == typeof o && (c += ";max-age=".concat(o)), e && (c += ";domain=.".concat(e)), a && (c += ";samesite=".concat(a)), document.cookie = c
    }

    function F(n) {
        try {
            const t = "".concat(n, "="),
                e = document.cookie.split(";");
            for (let n = 0; n < e.length; n += 1)
                if (e[n] = e[n].trim(), 0 === e[n].indexOf(t)) return e[n].substring(t.length, e[n].length)
        } catch (t) {
            R('Error while reading first-party cookie with key "'.concat(n, '"'), null == t ? void 0 : t.message, P)
        }
        return ""
    }
    const L = (n, t) => {
            const e = document.createElement("iframe");
            e.referrerPolicy = "no-referrer-when-downgrade", e.width = "0", e.height = "0", e.src = n, e.allow = t, j(e)
        },
        j = n => (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode).insertBefore(n, null),
        M = "tfpai",
        N = 2592e3,
        V = "tfpsi",
        X = 1800,
        J = "tfpvi",
        B = 7776e3;

    function W(n) {
        try {
            T(n, "", c(), 0, "/", "strict")
        } catch (t) {
            R('Error while deleting cookie on domain with key "'.concat(n, '"'), null == t ? void 0 : t.message, P)
        }
    }

    function z(n, t, e) {
        try {
            T(n, t, c(), e, "/", "strict")
        } catch (t) {
            R('Error while setting cookie on domain with key "'.concat(n, '"'), null == t ? void 0 : t.message, P)
        }
    }

    function G() {
        const n = m();
        C() && n && z(M, n, N)
    }

    function Q() {
        const n = b();
        C() && n && z(V, n, X)
    }
    const Z = "TEADS_PIXEL_LOADED",
        $ = "TEADS_PIXEL_EVENT";

    function H(n) {
        var t, e, o;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
            type: n,
            id: null === (t = window) || void 0 === t ? void 0 : t.name,
            ts: Date.now(),
            host: null === (e = window) || void 0 === e || null === (o = e.location) || void 0 === o ? void 0 : o.host,
            ...i
        }
    }

    function Y(n) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "*";
        try {
            var o, i, a;
            const c = (null === (o = window) || void 0 === o || null === (i = o.opener) || void 0 === i ? void 0 : i.top) || (null === (a = window) || void 0 === a ? void 0 : a.opener);
            U(c.postMessage) && c.postMessage(H(n, t), e)
        } catch (n) {}
    }

    function q(n) {
        var t;
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/";
        if (U(null === (t = window) || void 0 === t ? void 0 : t.postMessage)) try {
            window.postMessage(H(n, e), o)
        } catch (n) {}
    }

    function K(n) {
        var t, e, o, i, a;
        null !== (t = window) && void 0 !== t && t.opener && ("TEADS_PIXEL_DEBUG" === (null == n || null === (o = n.data) || void 0 === o ? void 0 : o.type) && (!0, window.teads_post_message_event_to_opener = true), "TEADS_SDK_PARAMETERS" === (null == n || null === (i = n.data) || void 0 === i ? void 0 : i.type) && null != n && null !== (a = n.data) && void 0 !== a && a.teadsClickId && (g(n.data.teadsClickId), y("postMessage"), G())), "TEADS_ASK_PIXEL_INFO" === (null == n || null === (e = n.data) || void 0 === e ? void 0 : e.type) && (q("TEADS_PIXEL_INFO", {
            buyerPixelId: r(),
            advertiserId: D(),
            trackingAllowed: f(),
            firstPartyCookieAllowed: C(),
            gdprAdvertiser: v(),
            ccpaAdvertiser: _(),
            advertiserDomain: c(),
            auctionId: m(),
            env: A(),
            iabData: u(),
            uspData: w(),
            referer: O(S(window)),
            trackingEventsSent: window.teads_tracking_events_sent || [],
            request: n.data
        }), window.teads_post_message_event_to_window = !0)
    }

    function nn(n) {
        ! function(n) {
            const t = document.createElement("img");
            t.width = 0, t.height = 0, t.alt = "", t.style.position = "absolute", t.src = n, j(t)
        }(n), d() && Y($, {
            trackingUrl: n
        }), s() && q($, {
            trackingUrl: n
        })
    }

    function tn(n) {
        fetch ? fetch(n).then((() => {
            d() && Y($, {
                trackingUrl: n
            }), s() && q($, {
                trackingUrl: n
            })
        })).catch((() => {
            nn(n)
        })) : nn(n)
    }
    async function en(n) {
        try {
            nn(n)
        } catch (n) {
            R("Error when triggering attribution reporting conversion", null == n ? void 0 : n.message, P)
        }
    }

    function on(n, t) {
        let e = 0;

        function o(e, o) {
            o ? !1 !== e.gdprApplies && "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || n(e) : t("CMP unable to register callback function. Please check CMP setup.")
        }

        function i() {
            return !(!window.$sf || !window.$sf.ext)
        }

        function a(n, t) {
            window.$sf.ext.register(1, 1, (function(e, o) {
                if ("cmpReturn" === e) {
                    const e = "getConsentData" === n ? o.vendorConsentData : o.vendorConsents;
                    t(e)
                }
            })), window.$sf.ext.cmp(n)
        }

        function c(n) {
            const t = "".concat(2 === e ? "__tcfapi" : "__cmp", "Return"),
                o = "string" == typeof n.data && "".concat(n.data).includes(t) ? JSON.parse(n.data) : n.data;
            if (o[t] && o[t].callId) {
                const n = o[t];
                void 0 !== s[n.callId] && s[n.callId](n.returnValue, n.success)
            }
        }

        function r(n, t, o) {
            const i = 2 === e ? "__tcfapi" : "__cmp",
                a = "".concat(i, "Call");
            2 === e ? (window[i] = (n, e, o, i) => {
                const c = "".concat(Math.random()),
                    r = {
                        [a]: {
                            command: n,
                            version: e,
                            parameter: i,
                            callId: c
                        }
                    };
                s[c] = o, t.postMessage(r, "*")
            }, window.addEventListener("message", c, !1), window[i](n, e, o)) : (window[i] = (n, e, o) => {
                const i = "".concat(Math.random()),
                    c = {
                        [a]: {
                            command: n,
                            parameter: e,
                            callId: i
                        }
                    };
                s[i] = o, t.postMessage(c, "*")
            }, window.addEventListener("message", c, !1), window[i](n, void 0, o))
        }
        const d = function() {
                const t = {};

                function e() {
                    t.getConsentData && t.getVendorConsents && n(t)
                }
                return {
                    consentDataCallback(n) {
                        t.getConsentData = n, e()
                    },
                    vendorConsentsCallback(n) {
                        t.getVendorConsents = n, e()
                    }
                }
            }(),
            s = {},
            {
                cmpFrame: l,
                cmpFunction: u
            } = function() {
                let n, t, o = window;
                for (; !n;) {
                    try {
                        if ("function" == typeof o.__tcfapi || "function" == typeof o.__cmp) {
                            "function" == typeof o.__tcfapi ? (e = 2, t = o.__tcfapi) : (e = 1, t = o.__cmp), n = o;
                            break
                        }
                    } catch (n) {}
                    try {
                        if (o.frames.__tcfapiLocator) {
                            e = 2, n = o;
                            break
                        }
                    } catch (n) {}
                    try {
                        if (o.frames.__cmpLocator) {
                            e = 1, n = o;
                            break
                        }
                    } catch (n) {}
                    if (o === window.top) break;
                    o = o.parent
                }
                return {
                    cmpFrame: n,
                    cmpFunction: t
                }
            }();
        if (!l) return !1;
        if (new Promise(((n, t) => {
                U(u) ? u("ping", null, (() => n())) : 1 === e && i() && "function" == typeof window.$sf.ext.cmp ? a("ping", (() => n())) : r("ping", l, (() => n())), setTimeout((() => t()), 100)
            })).catch((() => t("Unable to ping the CMP"))), U(u)) {
            if (1 === e) return u("getConsentData", null, d.consentDataCallback), u("getVendorConsents", null, d.vendorConsentsCallback), !0;
            if (2 === e) return u("addEventListener", e, o), !0
        } else {
            if (1 === e && i() && "function" == typeof window.$sf.ext.cmp) return a("getConsentData", d.consentDataCallback), a("getVendorConsents", d.vendorConsentsCallback), !0;
            if (1 === e) return r("getConsentData", l, d.consentDataCallback), r("getVendorConsents", l, d.vendorConsentsCallback), !0;
            if (2 === e) return r("addEventListener", l, o), !0
        }
        return !1
    }

    function an(n, t) {
        function e(n, t, e) {
            window.__uspapi = (n, e, o) => {
                const a = "".concat(Math.random()),
                    c = {
                        __uspapiCall: {
                            command: n,
                            version: e,
                            callId: a
                        }
                    };
                i[a] = o, t.postMessage(c, "*")
            }, window.addEventListener("message", (function(n) {
                const t = n && n.data && n.data.__uspapiReturn;
                t && t.callId && void 0 !== i[t.callId] && (i[t.callId](t.returnValue, t.success), delete i[t.callId])
            }), !1), window.__uspapi(n, 1, e)
        }
        const o = function() {
                const e = {};
                return {
                    consentDataCallback: (o, i) => {
                        i && o.uspString && (e.usPrivacy = o.uspString), e.usPrivacy ? n(e) : t("Unable to get USP consent string.")
                    }
                }
            }(),
            i = {},
            {
                uspapiFrame: a,
                uspapiFunction: c
            } = function() {
                let n, t, e = window;
                for (; !n;) {
                    try {
                        if ("function" == typeof e.__uspapi) {
                            t = e.__uspapi, n = e;
                            break
                        }
                    } catch (n) {}
                    try {
                        if (e.frames.__uspapiLocator) {
                            n = e;
                            break
                        }
                    } catch (n) {}
                    if (e === window.top) break;
                    e = e.parent
                }
                return {
                    uspapiFrame: n,
                    uspapiFunction: t
                }
            }();
        return !!a && (new Promise(((n, t) => {
            U(c) ? c("getUSPData", null, (() => n())) : e("getUSPData", a, (() => n())), setTimeout((() => t()), 100)
        })).catch((() => t("Unable to ping the USP"))), U(c) ? c("getUSPData", 1, o.consentDataCallback) : e("getUSPData", a, o.consentDataCallback), !0)
    }

    function cn(n, t) {
        return new Promise((e => {
            n((n => {
                t({
                    data: n
                }), e()
            }), (n => {
                t({
                    error: n
                }), e()
            })) || e()
        }))
    }

    function rn() {
        var n, t, e, o, i;
        return !(!("browsingTopics" in document) || null === (n = document) || void 0 === n || null === (t = n.featurePolicy) || void 0 === t || null === (e = t.allowedFeatures) || void 0 === e || null === (o = e.call(t)) || void 0 === o || null === (i = o.includes) || void 0 === i || !i.call(o, "browsing-topics"))
    }

    function dn() {
        var n, t, e, o, i;
        return !(null === (n = document) || void 0 === n || null === (t = n.featurePolicy) || void 0 === t || null === (e = t.allowedFeatures) || void 0 === e || null === (o = e.call(t)) || void 0 === o || null === (i = o.includes) || void 0 === i || !i.call(o, "attribution-reporting"))
    }
    const sn = {
        conversionType: "conversion_type",
        price: "aepp",
        currency: "aepc",
        name: "aepn"
    };
    async function ln(n) {
        if (!f()) return;
        const o = function(n, t) {
                const e = {};
                return Object.keys(n).forEach((t => {
                    const o = t,
                        i = n[t];
                    Object.prototype.hasOwnProperty.call(sn, o) ? e[sn[o]] = i + "" : R("Invalid parameter specified in event: ".concat(o))
                })), e
            }(n),
            i = await pn("conversion", o),
            a = t + i;
        if (nn(a), I(a), dn()) {
            const n = e + i;
            await en(n)
        }
    }
    async function un() {
        if (void 0 !== window.teads_e) {
            const n = [];
            for (; window.teads_e.length;) n.push(ln(window.teads_e.shift()));
            try {
                await Promise.all(n)
            } catch (n) {
                R("Error while sending event based conversion", null == n ? void 0 : n.message, P)
            }
            Q()
        } else R("The event queue is not defined.")
    }
    async function pn(t, e) {
        var o, i;
        const a = D(),
            c = r(),
            d = A(),
            s = function(n) {
                const t = [];
                return Object.keys(n).forEach((e => {
                    t.push("".concat(e, "=").concat(encodeURIComponent(n[e])))
                })), t.join("&")
            }(e),
            l = S(window),
            p = function(n) {
                let t = m();
                if (!t) {
                    let e = n;
                    n || (e = S(window)), t = x(e), t && (g(t), y("url"))
                }
                return t
            }(l),
            f = function() {
                const n = window.teads_auction_id_forwarded_by;
                return n ? Object.keys(n).join(",") : void 0
            }(),
            h = b(),
            C = k(),
            I = u(),
            E = w(),
            U = v(),
            T = _(),
            F = await async function() {
                let n = null;
                try {
                    if (rn()) {
                        const t = await document.browsingTopics();
                        t && (n = btoa(JSON.stringify(t)))
                    }
                } catch (n) {
                    R("Error when retrieving topics from Topics API", null == n ? void 0 : n.message, P)
                }
                return n
            }(),
            L = O(l);
        let j = "?action=".concat(t, "&env=").concat(encodeURIComponent(d), "&tag_version=").concat(encodeURIComponent(n));
        return s.length > 0 && (j = "".concat(j, "&").concat(s)), void 0 !== c ? j = "".concat(j, "&buyer_pixel_id=").concat(encodeURIComponent(c)) : void 0 !== a && (j = "".concat(j, "&advertiser_id=").concat(encodeURIComponent(a))), j = "".concat(j, "&referer=").concat(encodeURIComponent(L)), void 0 !== p && (j = "".concat(j, "&auctid=").concat(p)), void 0 !== f && (j = "".concat(j, "&cohort_id=").concat(f)), void 0 !== h && (j = "".concat(j, "&user_session_id=").concat(h)), void 0 !== C && (j = "".concat(j, "&firstPartyCookieTeadsId=").concat(C)), F && (j = "".concat(j, "&browser_topics=").concat(F)), void 0 !== (null == I || null === (o = I.data) || void 0 === o ? void 0 : o.tcString) && (j = "".concat(j, "&gdpr_consent=").concat(I.data.tcString)), null != U && U.apply ? j = "".concat(j, "&gdpr_status=12") : void 0 !== (null == U ? void 0 : U.apply) && (j = "".concat(j, "&gdpr_status=0")), U && (void 0 !== U.apply && (j = "".concat(j, "&gdpr_apply=").concat(U.apply)), void 0 !== U.teadsConsent && (j = "".concat(j, "&gtc=").concat(U.teadsConsent)), void 0 !== U.isServiceSpecific && (j = "".concat(j, "&gdpr_is_service_specific=").concat(U.isServiceSpecific)), void 0 !== U.cmpId && (j = "".concat(j, "&gdpr_cmp_id=").concat(U.cmpId)), void 0 !== U.apiVersion && (j = "".concat(j, "&gdpr_api_version=").concat(U.apiVersion))), void 0 !== (null == E || null === (i = E.data) || void 0 === i ? void 0 : i.usPrivacy) && (j = "".concat(j, "&ccpa_consent=").concat(E.data.usPrivacy)), T && (void 0 !== T.apply && (j = "".concat(j, "&ca=").concat(T.apply)), void 0 !== T.teadsConsent && (j = "".concat(j, "&ctc=").concat(T.teadsConsent))), j
    }
    async function wn() {
        try {
            const {
                sessionId: i,
                auctionId: a,
                viewerId: d,
                gdpr: l,
                ccpa: p,
                firstPartyCookieAllowed: b,
                domain: I,
                trackingAllowed: E
            } = await async function() {
                const n = S(window),
                    t = function(n) {
                        var t;
                        const e = D(),
                            o = r();
                        let i = "referer=".concat(encodeURIComponent(n));
                        void 0 !== o ? i += "&buyer_pixel_id=".concat(encodeURIComponent(o)) : void 0 !== e && (i += "&advertiser_id=".concat(encodeURIComponent(e)));
                        const a = u();
                        var c, d, s, l, p, v;
                        a && (void 0 !== (null == a || null === (c = a.data) || void 0 === c ? void 0 : c.gdprApplies) ? i += "&gdpr_applies=".concat(encodeURIComponent(a.data.gdprApplies)) : void 0 !== (null == a || null === (d = a.data) || void 0 === d || null === (s = d.getConsentData) || void 0 === s ? void 0 : s.gdprApplies) && (i += "&gdpr_applies=".concat(encodeURIComponent(a.data.getConsentData.gdprApplies))), null != a && null !== (l = a.data) && void 0 !== l && l.tcString ? i += "&gdpr_consent=".concat(encodeURIComponent(a.data.tcString)) : null != a && null !== (p = a.data) && void 0 !== p && null !== (v = p.getConsentData) && void 0 !== v && v.consentData && (i += "&gdpr_consent=".concat(encodeURIComponent(a.data.getConsentData.consentData))), null != a && a.error && (i += "&gdpr_error=".concat(encodeURIComponent(a.error))));
                        const _ = w();
                        null != _ && null !== (t = _.data) && void 0 !== t && t.usPrivacy && (i += "&ccpa_consent=".concat(encodeURIComponent(_.data.usPrivacy))), null != _ && _.error && (i += "&ccpa_error=".concat(encodeURIComponent(_.error)));
                        const f = function() {
                            const n = F("optout");
                            if (n) return "1" === n
                        }();
                        return void 0 !== f && (i += "&web_opt_out=".concat(encodeURIComponent(f))), i
                    }(n);
                try {
                    const n = await fetch("".concat("https://cm.teads.tv", "/v2/advertiser?").concat(t));
                    if (200 === (null == n ? void 0 : n.status)) {
                        var e, o, i, a, c, d;
                        const t = await n.json();
                        return {
                            trackingAllowed: !1 !== (null == t ? void 0 : t.tracking_allowed),
                            firstPartyCookieAllowed: !0 === (null == t ? void 0 : t.first_party_cookie_allowed),
                            sessionId: null == t ? void 0 : t.session_id,
                            auctionId: null == t ? void 0 : t.auction_id,
                            viewerId: null == t ? void 0 : t.user_id,
                            domain: null == t ? void 0 : t.domain,
                            ccpa: null != t && t.ccpa ? {
                                apply: null === (e = t.ccpa) || void 0 === e ? void 0 : e.apply,
                                teadsConsent: null === (o = t.ccpa) || void 0 === o ? void 0 : o.teads_consent
                            } : void 0,
                            gdpr: null != t && t.gdpr ? {
                                apply: null === (i = t.gdpr) || void 0 === i ? void 0 : i.apply,
                                teadsConsent: null === (a = t.gdpr) || void 0 === a ? void 0 : a.teads_consent,
                                apiVersion: null === (c = t.gdpr) || void 0 === c ? void 0 : c.api_version,
                                cmpId: null === (d = t.gdpr) || void 0 === d ? void 0 : d.cmp_id,
                                isServiceSpecific: null == t ? void 0 : t.gdpr.is_service_specific
                            } : void 0
                        }
                    }
                } catch (n) {
                    R("Error while trigger API to know advertiser information", null == n ? void 0 : n.message, P)
                }
                const s = x(n);
                return s ? {
                    trackingAllowed: !0,
                    firstPartyCookieAllowed: !1,
                    auctionId: s
                } : {
                    trackingAllowed: !0,
                    firstPartyCookieAllowed: !1
                }
            }();
            if (o = b, window.first_party_cookie_allowed = o, E && (e = E, window.teads_tracking_allowed = e), l && (t = l, window.teads_gdpr_advertiser = t), p && function(n) {
                    window.teads_ccpa_advertiser = n
                }(p), I && (n = I, window.advertiser_domain = n), a && (g(a), y("url")), C()) {
                const n = F(M);
                if (n) {
                    const t = m();
                    t && t !== n || y("cookie"), t || g(n)
                }
                G();
                const t = F(V);
                n && a && n !== a ? h(i) : t ? h(t) : i && h(i), Q();
                const e = F(J);
                d ? (function(n) {
                    window.teads_viewer_id = n
                }(e || d), function() {
                    const n = k();
                    C() && n && z(J, n, B)
                }()) : W(J)
            } else i && h(i), W(M), W(V), W(J);
            s() && q("TEADS_CONSENT_INFO_LOADED", {
                trackingAllowed: f(),
                firstPartyCookieAllowed: C(),
                gdprAdvertiser: v(),
                ccpaAdvertiser: _(),
                advertiserDomain: c(),
                auctionId: m(),
                iabData: u(),
                uspData: w()
            })
        } catch (n) {
            R("Error while initializing advertiser", null == n ? void 0 : n.message, P)
        }
        var n, t, e, o
    }
    const vn = () => {
        const n = window.teads_e || [];
        window.teads_e = [], window.teads_e.push = function() {
            for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
            return Array.prototype.push.apply(this, t), un(), window.teads_e.length
        }, window.teads_e.push(...n)
    };
    async function _n() {
        var n, o, i, c, r;
        f() && (rn() && L("https://p.teads.tv/topics.html", "browsing-topics"), "joinAdInterestGroup" in navigator && null !== (n = document) && void 0 !== n && null !== (o = n.featurePolicy) && void 0 !== o && null !== (i = o.allowedFeatures) && void 0 !== i && null !== (c = i.call(o)) && void 0 !== c && null !== (r = c.includes) && void 0 !== r && r.call(c, "join-ad-interest-group") && L("".concat("https://fledge.teads.tv", "/v1/interest-group/tag.html"), "join-ad-interest-group"), await (async () => {
            const n = await pn("pageView", {}),
                o = t + n;
            if (nn(o), I(o), dn()) {
                const t = e + n;
                await en(t)
            }
        })(), await (async () => {
            const n = await pn("timeSpent", {}),
                e = t + n;
            E(!1), document.addEventListener("visibilitychange", (n => () => {
                "hidden" === document.visibilityState && !0 !== a && (E(!0), function(n) {
                    const t = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
                    try {
                        t && t(n) ? (d() && Y($, {
                            trackingUrl: n
                        }), s() && q($, {
                            trackingUrl: n
                        })) : tn(n)
                    } catch (t) {
                        tn(n)
                    }
                }(n), Q(), I(n))
            })(e))
        })(), vn())
    }
    async function fn() {
        const n = D(),
            t = r();
        "number" != typeof n && "number" != typeof t || (await wn(), await _n())
    }!async function(n) {
        try {
            "undefined" != typeof window && (U(null === (t = window) || void 0 === t ? void 0 : t.addEventListener) && (Y(Z), q(Z), window.addEventListener("message", K)), await new Promise(((n, t) => {
                setTimeout((() => {
                    Promise.all([cn(on, l), cn(an, p)]).then((() => async function() {
                        ! function() {
                            const n = document.createElement("meta");
                            n.httpEquiv = "origin-trial", n.content = "Az9xQo/imzWWuauBg0JngENQMoxulJzGzdGQ0VfUZDk7et2DJfmfUxfOWnHlwQiZRFG+Grc8bH8xWgOPW2ltjQQAAAB+eyJvcmlnaW4iOiJodHRwczovL3RlYWRzLnR2OjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2ODA2NTI3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", document.head.appendChild(n)
                        }();
                        try {
                            window.teads_adv_id || Object.defineProperty(window, "teads_adv_id", {
                                set(n) {
                                    this._teads_adv_id = n, fn()
                                },
                                get() {
                                    return this._teads_adv_id
                                },
                                configurable: !0
                            }), window.teads_buyer_pixel_id || Object.defineProperty(window, "teads_buyer_pixel_id", {
                                set(n) {
                                    this._teads_buyer_pixel_id = n, fn()
                                },
                                get() {
                                    return this._teads_buyer_pixel_id
                                },
                                configurable: !0
                            })
                        } catch (n) {
                            R("Error while binding advertiser and pixel ids", null == n ? void 0 : n.message)
                        }
                        await fn()
                    }())).then(n).catch(t)
                }), 0)
            })))
        } catch (n) {
            R("Unhandled exception", null == n ? void 0 : n.message, P)
        }
        var t
    }()
})();