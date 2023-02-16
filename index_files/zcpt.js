try {
    ! function(e, a, n, r) {
        "use strict";

        function t() {}

        function o(e, n, t) {
            var r = e[n];
            e[n] = function() {
                var e = r.apply(this, arguments);
                return t.apply(this, arguments), e
            }
        }

        function i() {
            e.zemApi.dispatch.apply(e.zemApi, arguments)
        }
        var P = "https://p1.zemanta.com/v2/p/js/",
            c = "PAGE_VIEW",
            s = (i.version = e.zemApi.version, i.loaded = e.zemApi.loaded, i.marketerId = e.zemApi.marketerId, i.queue = e.zemApi.queue, e.zemApi = i);

        function p(e) {
            for (var n = (u().split("?")[1] || "").split(/&/), t = 0; t < n.length; t++)
                if (0 === n[t].indexOf(e + "=")) return n[t].split("=")[1].split("#")[0];
            return ""
        }

        function u() {
            var n = "";
            try {
                n = window.top.location.href
            } catch (e) {
                n = document.referrer
            }
            return n || ""
        }
        s.zcptVersion = "1.1.3";

        function D() {
            var e = arguments;
            if (!e[1]) throw new Error("can't dispatch pixel, event name is missing");
            for (var n, t = e[0], r = e[2] && "object" == typeof e[2] ? e[2] : {}, o = (!1 == (n = s.marketerId, "[object Array]" === Object.prototype.toString.call(n)) && (s.marketerId = [s.marketerId]), function(e) {
                    for (var n = [], t = {}, r = 0; r < e.length; r++) {
                        if (!t[e[r]]) n.push(e[r]);
                        t[e[r]] = true
                    }
                    return n
                }(s.marketerId)), a = 0; a < o.length; a++) {
                var i, c = {};
                for (i in r) c[i] = r[i];
                c.marketerId = o[a].trim(), c.zemApiVersion = s.version, c.zcptVersion = s.zcptVersion, c.name = e[1].replace(/ /g, "-"), c.dl = u(), c.bust = Math.random().toString().replace(".", ""), "track" === t ? (x(c, t), function(e) {
                    if (l) return v(e, d);
                    m.push(e), f || (f = !0, U.checkHasConsent(function(e) {
                        for (l = !0, d = !!e; 0 < m.length;) v(m.shift(), d)
                    }))
                }(c)) : O(O.LOG_TYPES.ERROR, "Command type " + t + " is not recognized", c.name)
            }
        }
        var d, m, f, l, v, w, h, g = {
                get: function(e) {
                    var n = "";
                    try {
                        n = document.cookie ? decodeURIComponent(document.cookie) : ""
                    } catch (e) {
                        return ""
                    }
                    var t = n.indexOf(e + "=");
                    if (t < 0) return "";
                    t += (e + "=").length, e = n.indexOf(";", t), e = 0 < e ? e : document.cookie.length;
                    return n.substring(t, e)
                },
                set: function(e, n, t, r) {
                    var o = new Date,
                        t = (o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3), "expires=" + o.toUTCString()),
                        o = encodeURIComponent(e) + "=" + encodeURIComponent(n) + "; " + t + "; path=/;";
                    r && (o += "domain=" + r + ";");
                    try {
                        document.cookie = o
                    } catch (e) {}
                }
            },
            _ = "zpbid",
            y = (l = f = !(m = []), v = function(e, n) {
                ! function(e, n) {
                    var t = P + e.marketerId + "/" + e.name + "/",
                        r = w(e, n),
                        o = new a;
                    o.referrerPolicy = "no-referrer-when-downgrade", o.src = t + r
                }.apply(null, arguments)
            }, w = function(e, n) {
                e = h(e);
                e.optOut = n ? "false" : "true", e.url_referer = function() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return true
                    }
                }() && "" !== document.referrer ? encodeURIComponent(document.referrer) : "", e.postbackid = n ? function() {
                    var e = p(b);
                    e = e ? (g.set(_, e, 1, ""), e) : g.get(_);
                    return e
                }() : "";
                var t = function(e, n) {
                        var t = h(e),
                            r;
                        for (r in t)
                            if (n.indexOf(r) > -1) delete t[r];
                        return t
                    }(function(e) {
                        var n = h(e),
                            t;
                        for (t in n)
                            if (n[t] === null || n[t] === undefined || n[t] === "") delete n[t];
                        return n
                    }(e), ["content", "contentType", "zemApiVersion", "zcptVersion", "name", "dl", "marketerId"]),
                    n = Object.keys(t).map(function(e) {
                        return e + "=" + t[e]
                    }).join("&");
                return (n ? "?" : "") + n
            }, h = function(e) {
                var n, t = {};
                for (n in e) t[n] = e[n];
                return t
            }, zemApi.dispatch = D, {
                hasConsent: function() {
                    return window.__uspapi && "function" == typeof window.__uspapi
                },
                handleConsent: function(t) {
                    window.__uspapi("getUSPData", 1, function(e, n) {
                        (!n || "1YYN" === e.uspString.toUpperCase() || "1NYN" === e.uspString.toUpperCase()) && e.uspString ? t(!1) : t(!0)
                    })
                }
            }),
            A = 210,
            C = {
                hasConsent: function() {
                    return !!window.__cmp || !!z()
                },
                handleConsent: function(e) {
                    function n(e) {
                        var n;
                        try {
                            n = e && "string" == typeof e.data ? JSON.parse(e.data) : e.data
                        } catch (e) {
                            o(!0)
                        }
                        n && n.__cmpReturn && i(o, n.__cmpReturn.returnValue, n.__cmpReturn.success)
                    }
                    var t, r, o = function() {
                            window.removeEventListener ? window.removeEventListener("message", n, !1) : window.detachEvent && window.detachEvent("message", n, !1), e.apply(e, arguments)
                        },
                        a = function(e) {
                            if (!e) return !0;
                            var n, t = !0;
                            for (n in e)
                                if (e.hasOwnProperty(n) && (t = !1, e[n])) return !0;
                            return !!t
                        },
                        i = function(e, n, t) {
                            if ((!t || !n || !n.vendorConsents || void 0 === n.vendorConsents[A] || !0 === n.vendorConsents[A]) && a(n.purposeConsents)) return e(!0);
                            e(!1)
                        };
                    t = o, "function" == typeof window.__cmp ? window.__cmp("getVendorConsents", [A], function(e, n) {
                        i(t, e, n)
                    }) : (r = z(), window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent && window.attachEvent("message", n, !1), r ? r.postMessage({
                        __cmpCall: {
                            command: "getVendorConsents",
                            parameter: [A],
                            callId: "obamplify"
                        }
                    }, "*") : o({
                        msg: "CMP not found"
                    }, !1))
                }
            };

        function z() {
            var e = window;
            try {
                for (; e && !e.frames.__cmpLocator;) {
                    if (e === window.top) return;
                    e = e.parent
                }
                return e
            } catch (e) {}
        }
        var A = 210,
            R = {
                hasConsent: function() {
                    return !!window.__tcfapi || !!I()
                },
                handleConsent: function(t) {
                    function a(e, n) {
                        r(t, e, n)
                    }

                    function r(e, n, t) {
                        var r, o;
                        t && "tcloaded" === n.eventStatus ? (n && n.vendor && n.vendor.consents && void 0 !== n.vendor.consents[A] && !0 !== n.vendor.consents[A] || !n || (t = n.purpose) && t.consents && (r = t.consents, o = !0, [1, 3, 4].forEach(function(e) {
                            r.hasOwnProperty(e) && !1 === r[e] && (o = !1)
                        }), !o) ? e(!1) : e(!0), __tcfapi("removeEventListener", 2, a)) : e(!0)
                    }

                    function e(e) {
                        e.data.__tcfapiReturn && "obamplify" === e.data.__tcfapiReturn.callId && r(t, e.data.__tcfapiReturn.returnValue, !0)
                    }
                    var n;
                    window.__tcfapi ? (window.__tcfapi("addEventListener", 2, a), __tcfapi("getTCData", 2, a, [A])) : (n = I(), window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent && window.attachEvent("message", e, !1), n.postMessage({
                        __tcfapiCall: {
                            command: "getTCData",
                            parameter: [A],
                            version: 2,
                            callId: "obamplify"
                        }
                    }, "*"))
                }
            };

        function I() {
            var e = window;
            try {
                for (; e && !e.frames.__tcfapiLocator;) {
                    if (e === window.top) return;
                    e = e.parent
                }
                return e
            } catch (e) {}
        }
        E = 0;
        var E, k, N, L, U = {
                checkHasConsent: function(e) {
                    function n() {
                        clearTimeout(E), e.apply(e, arguments)
                    }
                    try {
                        E = setTimeout(function() {
                            e(!0)
                        }, 500), C.hasConsent() ? C.handleConsent(n) : R.hasConsent() ? R.handleConsent(n) : y.hasConsent() ? y.handleConsent(n) : n(!0)
                    } catch (e) {
                        throw n(!0), e
                    }
                }
            },
            O = (n.pushState && n.replaceState && e.addEventListener && (o(n, "pushState", N = function(e, n, t) {
                try {
                    r.href !== k && t && (k = r.href, zemApi("track", c))
                } catch (e) {
                    (new Image).src = "//p1.zemanta.com/v2/plog/?zemApiVersion=" + zemApi.version + "&zcptVersion=" + zemApi.zcptVersion + "&msg=" + encodeURIComponent('{"error":"LOAD", "zemApiVersion": ' + zemApi.version + ', "marketerID": ' + zemApi.marketerId + ', "referrer": ' + document.referrer + ', "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","message":"' + e.message + '"}}')
                }
            }), o(n, "replaceState", N), e.addEventListener("popstate", N, !1)), L = e.postMessage || t, S.LOG_TYPES = {
                LOG: "log",
                WARNING: "warning",
                INFO: "info",
                ERROR: "error"
            }, S);

        function S(e, n, t) {
            L({
                action: "log",
                type: e,
                message: n,
                name: t ? t.replace(/ /g, "-") : ""
            }, "*")
        }

        function Y() {
            for (var e = !1; s.queue.length;) {
                var n = s.queue.shift();
                if (n[1] === c && !n[2]) {
                    if (e) continue;
                    e = !0
                }
                s.dispatch.apply(s, n)
            }
        }
        G = {
            USD: "USD",
            EUR: "EUR",
            GBP: "GBP",
            AUD: "AUD",
            SGD: "SGD",
            BRL: "BRL",
            MYR: "MYR",
            CHF: "CHF",
            ZAR: "ZAR",
            ILS: "ILS",
            INR: "INR",
            JPY: "JPY",
            CAD: "CAD",
            NZD: "NZD",
            TRY: "TRY",
            MXN: "MXN"
        }, T = new RegExp("^[A-Za-z0-9]+[A-Za-z0-9-_]*$"), V = new RegExp("^[0-9]+[.0-9]*$");
        var G, T, V, x = function(e, n) {
                e.contentType, e.content && e.content.id;
                return e.value && !e.currency ? (O(O.LOG_TYPES.WARNING, "Order value reported but no currency is declared", e.name), !1) : e.currency && !e.value ? (O(O.LOG_TYPES.WARNING, "Order currency reported but no value is declared", e.name), !1) : e.currency && !G.hasOwnProperty(e.currency) ? (O(O.LOG_TYPES.WARNING, "Currency not recognized : " + e.currency, e.name), !1) : e.orderValue && !V.test(e.orderValue) ? (O(O.LOG_TYPES.WARNING, "Order value can only be a positive number", e.name), !1) : e.name === c || T.test(e.name) ? !(e.name !== c && 100 < e.name.length) || (O(O.LOG_TYPES.WARNING, "Event name length cannot exceed 100 characters : " + e.name, e.name), !1) : (O(O.LOG_TYPES.WARNING, "Event Name invalid : " + e.name, e.name), !1)
            },
            b = "zpbid";
        Y(), g.get(_) || p(b) || (zemApi.setCachedClickId = function(e) {
            var n;
            "optOut" !== e && (n = p("ob_cvr_pixel_domain"), g.set(_, e, 1, n))
        })
    }(window, (document, Image), history, location)
} catch (e) {
    (new Image).src = "//p1.zemanta.com/v2/plog/?zemApiVersion=" + zemApi.version + "&zcptVersion=" + zemApi.zcptVersion + "&msg=" + encodeURIComponent('{"error":"LOAD", "zemApiVersion": ' + zemApi.version + ', "marketerID": ' + zemApi.marketerId + ', "referrer": ' + document.referrer + ', "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","message":"' + e.message + '"}}')
}