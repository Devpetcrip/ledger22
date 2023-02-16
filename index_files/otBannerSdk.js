/** 
 * onetrust-banner-sdk
 * v6.20.0
 * by OneTrust LLC
 * Copyright 2021 
 */
! function() {
    "use strict";
    var o = function(e, t) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
            })(e, t)
    };
    var C, e, s = function() {
        return (s = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var s in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }).apply(this, arguments)
    };

    function a(r, i, l, a) {
        return new(l = l || Promise)(function(e, t) {
            function o(e) {
                try {
                    s(a.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function n(e) {
                try {
                    s(a.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function s(t) {
                t.done ? e(t.value) : new l(function(e) {
                    e(t.value)
                }).then(o, n)
            }
            s((a = a.apply(r, i || [])).next())
        })
    }

    function u(o, n) {
        var s, r, i, e, l = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }), e;

        function t(t) {
            return function(e) {
                return function(t) {
                    if (s) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (s = 1, r && (i = 2 & t[0] ? r.return : t[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, t[1])).done) return i;
                        switch (r = 0, i && (t = [2 & t[0], i.value]), t[0]) {
                            case 0:
                            case 1:
                                i = t;
                                break;
                            case 4:
                                return l.label++, {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, r = t[1], t = [0];
                                continue;
                            case 7:
                                t = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(i = 0 < (i = l.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                    l.label = t[1];
                                    break
                                }
                                if (6 === t[0] && l.label < i[1]) {
                                    l.label = i[1], i = t;
                                    break
                                }
                                if (i && l.label < i[2]) {
                                    l.label = i[2], l.ops.push(t);
                                    break
                                }
                                i[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        t = n.call(o, l)
                    } catch (e) {
                        t = [6, e], r = 0
                    } finally {
                        s = i = 0
                    }
                    if (5 & t[0]) throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }

    function h() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
        var n = Array(e),
            s = 0;
        for (t = 0; t < o; t++)
            for (var r = arguments[t], i = 0, l = r.length; i < l; i++, s++) n[s] = r[i];
        return n
    }(e = C = C || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var t = setTimeout;

    function c(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function n() {}

    function r(e) {
        if (!(this instanceof r)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(e, this)
    }

    function i(o, n) {
        for (; 3 === o._state;) o = o._value;
        0 !== o._state ? (o._handled = !0, r._immediateFn(function() {
            var e = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (e) {
                    return void d(n.promise, e)
                }
                l(n.promise, t)
            } else(1 === o._state ? l : d)(n.promise, o._value)
        })) : o._deferreds.push(n)
    }

    function l(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof r) return t._state = 3, t._value = e, void p(t);
                if ("function" == typeof o) return void y((n = o, s = e, function() {
                    n.apply(s, arguments)
                }), t)
            }
            t._state = 1, t._value = e, p(t)
        } catch (e) {
            d(t, e)
        }
        var n, s
    }

    function d(e, t) {
        e._state = 2, e._value = t, p(e)
    }

    function p(e) {
        2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
            e._handled || r._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++) i(e, e._deferreds[t]);
        e._deferreds = null
    }

    function k(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
    }

    function y(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0, l(t, e))
            }, function(e) {
                o || (o = !0, d(t, e))
            })
        } catch (e) {
            if (o) return;
            o = !0, d(t, e)
        }
    }

    function g() {}
    r.prototype.catch = function(e) {
        return this.then(null, e)
    }, r.prototype.then = function(e, t) {
        var o = new this.constructor(n);
        return i(this, new k(e, t, o)), o
    }, r.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }, r.all = function(t) {
        return new r(function(n, s) {
            if (!c(t)) return s(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return n([]);
            var i = r.length;

            function l(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o) return void o.call(e, function(e) {
                            l(t, e)
                        }, s)
                    }
                    r[t] = e, 0 == --i && n(r)
                } catch (e) {
                    s(e)
                }
            }
            for (var e = 0; e < r.length; e++) l(e, r[e])
        })
    }, r.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === r ? t : new r(function(e) {
            e(t)
        })
    }, r.reject = function(o) {
        return new r(function(e, t) {
            t(o)
        })
    }, r.race = function(s) {
        return new r(function(e, t) {
            if (!c(s)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = s.length; o < n; o++) r.resolve(s[o]).then(e, t)
        })
    }, r._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    } : function(e) {
        t(e, 0)
    }, r._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var f, b, m, v, P, A, w, T, S, I, L, _, x, E, z, B, V, N, O, G, D, H, M, F, R, q, j, U, W, K, Y, J, Q, Z, X, $, ee, te, oe, ne, se, re, ie, le, ae, ce, de, ue, pe, ke, he, ye, ge, fe = new(g.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
    }, g.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
                if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this),
                    s = parseInt(n.length, 10) || 0;
                if (0 === s) return !1;
                var r, i, l = t[1] || 0;
                for (0 <= l ? r = l : (r = s + l) < 0 && (r = 0); r < s;) {
                    if (e === (i = n[r]) || e != e && i != i) return !0;
                    r++
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }, g.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }, g.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }, g.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }, g.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var s = arguments[n];
                    if (null != s)
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (o[r] = s[r])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }, g.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this) throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, s = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), r = arguments[2], i = void 0 === r ? o : r >> 0, l = i < 0 ? Math.max(o + i, 0) : Math.min(i, o); s < l;) t[s] = e, s++;
                return t
            }
        })
    }, g.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, g.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]'),
            t = document.createElement("meta");
        t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
    }, g.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = r)
    }, g);
    (b = f = f || {})[b.Unknown = 0] = "Unknown", b[b.BannerCloseButton = 1] = "BannerCloseButton", b[b.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", b[b.AcceptAll = 3] = "AcceptAll", b[b.RejectAll = 4] = "RejectAll", b[b.BannerSaveSettings = 5] = "BannerSaveSettings", (v = m = m || {})[v.Purpose = 1] = "Purpose", v[v.SpecialFeature = 2] = "SpecialFeature", (A = P = P || {}).Legal = "legal", A.UserFriendly = "user_friendly", (T = w = w || {}).Top = "top", T.Bottom = "bottom", (I = S = S || {})[I.Banner = 0] = "Banner", I[I.PrefCenterHome = 1] = "PrefCenterHome", I[I.VendorList = 2] = "VendorList", I[I.CookieList = 3] = "CookieList", (_ = L = L || {})[_.RightArrow = 39] = "RightArrow", _[_.LeftArrow = 37] = "LeftArrow", (E = x = x || {}).AfterTitle = "AfterTitle", E.AfterDescription = "AfterDescription", E.AfterDPD = "AfterDPD", (B = z = z || {}).PlusMinus = "Plusminus", B.Caret = "Caret", B.NoAccordion = "NoAccordion", (N = V = V || {}).Consent = "Consent", N.LI = "LI", N.AddtlConsent = "AddtlConsent", (G = O = O || {}).Iab1Pub = "eupubconsent", G.Iab2Pub = "eupubconsent-v2", G.Iab1Eu = "euconsent", G.Iab2Eu = "euconsent-v2", (H = D = D || {})[H.Disabled = 0] = "Disabled", H[H.Consent = 1] = "Consent", H[H.LegInt = 2] = "LegInt", (F = M = M || {})[F["Banner - Allow All"] = 1] = "Banner - Allow All", F[F["Banner - Reject All"] = 2] = "Banner - Reject All", F[F["Banner - Close"] = 3] = "Banner - Close", F[F["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", F[F["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", F[F["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (q = R = R || {}).Active = "1", q.InActive = "0", (U = j = j || {}).Host = "Host", U.GenVendor = "GenVen", (K = W = W || {})[K.Host = 1] = "Host", K[K.GenVen = 2] = "GenVen", K[K.HostAndGenVen = 3] = "HostAndGenVen", (J = Y = Y || {})[J.minDays = 1] = "minDays", J[J.maxDays = 30] = "maxDays", J[J.maxYear = 31536e3] = "maxYear", J[J.maxSecToDays = 86400] = "maxSecToDays", (Z = Q = Q || {})[Z.RTL = 0] = "RTL", Z[Z.LTR = 1] = "LTR", ($ = X = X || {})[$.GoogleVendor = 1] = "GoogleVendor", $[$.GeneralVendor = 2] = "GeneralVendor", (te = ee = ee || {})[te.Days = 1] = "Days", te[te.Weeks = 7] = "Weeks", te[te.Months = 30] = "Months", te[te.Years = 365] = "Years", (ne = oe = oe || {}).Checkbox = "Checkbox", ne.Toggle = "Toggle", (re = se = se || {}).SlideIn = "Slide_In", re.FadeIn = "Fade_In", re.RemoveAnimation = "Remove_Animation", (le = ie = ie || {}).Link = "Link", le.Icon = "Icon", (ce = ae = ae || {}).consent = "consent", ce.set = "set", (ue = de = de || {}).update = "update", ue.default = "default", ue.ads_data_redaction = "ads_data_redaction", (ke = pe = pe || {}).analytics_storage = "analytics_storage", ke.ad_storage = "ad_storage", ke.region = "region", ke.wait_for_update = "wait_for_update", (ye = he = he || {}).granted = "granted", ye.denied = "denied";
    var be = "AwaitingReconsent",
        Ce = "consentId",
        me = "geolocation",
        ve = "interactionCount",
        Pe = "isIABGlobal",
        Ae = "NotLandingPage",
        Te = "isGpcEnabled",
        Se = {
            ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
            ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
            OPTANON_CONSENT: "OptanonConsent",
            EU_PUB_CONSENT: "eupubconsent-v2",
            EU_CONSENT: "euconsent-v2",
            SELECTED_VARIANT: "OTVariant",
            OT_PREVIEW: "otpreview"
        },
        Ie = "CONFIRMED",
        Le = "OPT_OUT",
        _e = "NO_CHOICE",
        we = "NOTGIVEN",
        xe = "always active",
        Ee = "active",
        Be = "inactive landingpage",
        Ve = "inactive",
        Ne = "dnt",
        Oe = "LOCAL",
        Ge = "TEST",
        De = "LOCAL_TEST",
        He = "data-language",
        Me = "otCookieSettingsButton.json",
        Fe = "otCookieSettingsButtonRtl.json",
        Re = "otCenterRounded",
        qe = "otFlat",
        je = "otFloatingRoundedCorner",
        Ue = "otFloatingFlat",
        ze = "otFloatingRoundedIcon",
        We = "otFloatingRounded",
        Ke = "otChoicesBanner",
        Ye = "otNoBanner",
        Je = "otPcCenter",
        Qe = "otPcList",
        Ze = "otPcPanel",
        Xe = "otPcPopup",
        $e = "otPcTab",
        et = "hidebanner",
        tt = ((ge = {})[ee.Days] = "PCenterVendorListLifespanDay", ge[ee.Weeks] = "LfSpnWk", ge[ee.Months] = "PCenterVendorListLifespanMonth", ge[ee.Years] = "LfSpnYr", ge),
        ot = new function() {
            this.otSDKVersion = "6.20.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.hostsConsent = [], this.genVendorsConsent = {}, this.vendors = {
                list: [],
                searchParam: "",
                vendorTemplate: null,
                selectedVendors: [],
                selectedPurpose: [],
                selectedLegInt: [],
                selectedLegIntVendors: [],
                selectedSpecialFeatures: []
            }, this.oneTrustIABConsent = {
                purpose: [],
                legimateInterest: [],
                features: [],
                specialFeatures: [],
                specialPurposes: [],
                vendors: [],
                legIntVendors: [],
                vendorList: null,
                IABCookieValue: ""
            }, this.addtlVendors = {
                vendorConsent: [],
                vendorSelected: {}
            }, this.addtlConsentVersion = "1~", this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
                hostTemplate: null,
                hostCookieTemplate: null
            }, this.generalVendors = {
                gvTemplate: null,
                gvCookieTemplate: null
            }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
                country: "",
                state: ""
            }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1
        },
        nt = new function() {},
        st = "BRANCH",
        rt = "COOKIE",
        it = "IAB2_FEATURE",
        lt = "IAB2_PURPOSE",
        at = "IAB2_SPL_FEATURE",
        ct = "IAB2_SPL_PURPOSE",
        dt = "IAB2_STACK",
        ut = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"],
        pt = ["COOKIE", "BRANCH", "IAB2_STACK"],
        kt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"],
        ht = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"],
        yt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
        gt = (ft.prototype.setRegionRule = function(e) {
            this.rule = e
        }, ft.prototype.getRegionRule = function() {
            return this.rule
        }, ft.prototype.getRegionRuleType = function() {
            return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.rule.Type
        }, ft.prototype.initVariables = function() {
            this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
                purposes: {},
                legIntPurposes: {},
                specialPurposes: {},
                features: {},
                specialFeatures: {}
            }
        }, ft.prototype.init = function(e) {
            this.getGPCSignal(), this.initVariables();
            var t = e.DomainData;
            this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), Ct.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), Ct.gCEnable && this.initGCM()
        }, ft.prototype.getGPCSignal = function() {
            this.gpcEnabled = !0 === navigator.globalPrivacyControl
        }, ft.prototype.isValidConsentNoticeGroup = function(e, t) {
            if (!e.ShowInPopup) return !1;
            var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length,
                n = !1,
                s = !1,
                r = !1;
            if (e && !e.Parent) {
                e.SubGroups.length && (n = e.SubGroups.some(function(e) {
                    return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
                }), s = e.SubGroups.some(function(e) {
                    return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
                }), !t || e.FirstPartyCookies.length && e.Hosts.length || (r = !e.SubGroups.some(function(e) {
                    return -1 === ut.indexOf(e.Type)
                })));
                var i = e.SubGroups.some(function(e) {
                    return -1 < ut.indexOf(e.Type)
                });
                (-1 < ut.indexOf(e.Type) || i) && (e.ShowVendorList = !0), (e.Hosts.length || s || n) && (e.ShowHostList = !0)
            }
            return o || -1 < ut.indexOf(e.Type) || n || s || r
        }, ft.prototype.extractGroupIdForIabGroup = function(e) {
            return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")), e
        }, ft.prototype.populateGroups = function(e, s) {
            var r = this,
                i = {},
                l = [];
            e.forEach(function(e) {
                var t = e.CustomGroupId;
                if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0), !(!s.IsIabEnabled && -1 < ut.indexOf(e.Type) || "IAB2" === r.iabType && (e.Type === lt || e.Type === dt) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === at && !e.HasConsentOptOut) && (t !== bt.purposeOneGrpId || e.ShowInPopup || (r.purposeOneTreatment = !0), r.grpContainLegalOptOut = e.HasLegIntOptOut || r.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? l.push(e) : i[t] = e, "IAB2" === r.iabType && -1 < ut.indexOf(e.Type))) {
                    var o = r.extractGroupIdForIabGroup(t);
                    r.iabGrpIdMap[t] = o, e.IabGrpId = o;
                    var n = {
                        description: e.GroupDescription,
                        descriptionLegal: e.DescriptionLegal,
                        id: Number(o),
                        name: e.GroupName
                    };
                    switch (e.Type) {
                        case lt:
                            r.iabGroups.purposes[o] = n;
                            break;
                        case ct:
                            r.iabGroups.specialPurposes[o] = n;
                            break;
                        case it:
                            r.iabGroups.features[o] = n;
                            break;
                        case at:
                            r.iabGroups.specialFeatures[o] = n
                    }
                }
            }), l.forEach(function(e) {
                i[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < ut.indexOf(e.Type)) && i[e.Parent].SubGroups.push(e)
            });
            var t = [];
            return Object.keys(i).forEach(function(e) {
                r.isValidConsentNoticeGroup(i[e], s.IsIabEnabled) && (i[e].SubGroups.sort(function(e, t) {
                    return e.Order - t.Order
                }), t.push(i[e]))
            }), this.initGrpVar(t), t.sort(function(e, t) {
                return e.Order - t.Order
            })
        }, ft.prototype.initGrpVar = function(e) {
            var o = this,
                n = !0,
                s = !0;
            e.forEach(function(e) {
                h([e], e.SubGroups).forEach(function(e) {
                    var t;
                    e.Type !== rt && e.Type !== lt && e.Type !== at || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 < pt.indexOf(e.Type) && o.consentableGrps.push(e), -1 < kt.indexOf(e.Type) && o.consentableIabGrps.push(e), -1 === pt.indexOf(e.Type) && o.iabGrps.push(e), o.gpcEnabled && e.IsGpcEnabled && (e.Status = Ve), (t = o.DNTEnabled && e.IsDntEnabled ? Ne : e.Status.toLowerCase()) !== Ee && t !== Be && t !== Ne || (n = !1), t !== Be && t !== xe && (s = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
                })
            }), this.isOptInMode = n, this.isSoftOptInMode = s
        }, ft.prototype.domainDataMapper = function(e) {
            var t = {
                cctId: e.cctId,
                MainText: e.MainText,
                MainInfoText: e.MainInfoText,
                AboutText: e.AboutText,
                AboutCookiesText: e.AboutCookiesText,
                ConfirmText: e.ConfirmText,
                AllowAllText: e.PreferenceCenterConfirmText,
                ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
                CookiesUsedText: e.CookiesUsedText,
                AboutLink: e.AboutLink,
                ActiveText: e.ActiveText,
                AlwaysActiveText: e.AlwaysActiveText,
                AlertNoticeText: e.AlertNoticeText,
                AlertCloseText: e.AlertCloseText,
                AlertMoreInfoText: e.AlertMoreInfoText,
                AlertAllowCookiesText: e.AlertAllowCookiesText,
                AdvancedAnalyticsCategory: e.AdvancedAnalyticsCategory || "",
                CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
                BannerTitle: e.BannerTitle,
                BannerFocus: e.BannerFocus,
                BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
                ForceConsent: e.ForceConsent,
                LastReconsentDate: e.LastReconsentDate,
                InactiveText: e.InactiveText,
                CookiesText: e.CookiesText || "Cookies",
                CategoriesText: e.CategoriesText || "Categories",
                CookieSettingButtonText: e.CookieSettingButtonText,
                IsLifespanEnabled: e.IsLifespanEnabled,
                LifespanText: e.LifespanText || "Lifespan",
                Groups: this.populateGroups(e.Groups, e),
                Language: e.Language,
                showBannerCloseButton: e.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
                FooterDescriptionText: e.FooterDescriptionText,
                CustomJs: e.CustomJs,
                LifespanTypeText: e.LifespanTypeText || "Session",
                LifespanDurationText: e.LifespanDurationText || "days",
                CloseText: e.CloseText,
                BannerCloseButtonText: e.BannerCloseButtonText,
                HideToolbarCookieList: e.HideToolbarCookieList,
                AlertLayout: e.AlertLayout,
                AddLinksToCookiepedia: e.AddLinksToCookiepedia,
                ShowAlertNotice: e.ShowAlertNotice,
                IsIabEnabled: e.IsIabEnabled,
                IabType: e.IabType,
                BannerPosition: e.BannerPosition,
                PreferenceCenterPosition: e.PreferenceCenterPosition,
                ReconsentFrequencyDays: e.ReconsentFrequencyDays,
                VendorLevelOptOut: e.IsIabEnabled,
                ConsentModel: {
                    Name: e.ConsentModel
                },
                VendorConsentModel: e.VendorConsentModel,
                IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
                IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
                ScrollCloseBanner: e.ScrollCloseBanner,
                ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
                OnClickCloseBanner: e.OnClickCloseBanner,
                OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
                NextPageCloseBanner: e.NextPageCloseBanner,
                NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
                VendorListText: e.VendorListText,
                ThirdPartyCookieListText: e.ThirdPartyCookieListText,
                CookieListDescription: e.CookieListDescription,
                CookieListTitle: e.CookieListTitle,
                NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
                PCCookiePolicyLinkScreenReader: e.PCCookiePolicyLinkScreenReader,
                PCOpensCookiesDetailsAlert: e.PCOpensCookiesDetailsAlert,
                PCOpensVendorDetailsAlert: e.PCOpensVendorDetailsAlert,
                Flat: e.Flat,
                FloatingFlat: e.FloatingFlat,
                FloatingRoundedCorner: e.FloatingRoundedCorner,
                FloatingRoundedIcon: e.FloatingRoundedIcon,
                FloatingRounded: e.FloatingRounded,
                CenterRounded: e.CenterRounded,
                Center: e.Center,
                Panel: e.Panel,
                Popup: e.Popup,
                List: e.List,
                Tab: e.Tab,
                BannerPurposeTitle: e.BannerPurposeTitle,
                BannerPurposeDescription: e.BannerPurposeDescription,
                BannerFeatureTitle: e.BannerFeatureTitle,
                BannerFeatureDescription: e.BannerFeatureDescription,
                BannerInformationTitle: e.BannerInformationTitle,
                BannerInformationDescription: e.BannerInformationDescription,
                BannerIABPartnersLink: e.BannerIABPartnersLink,
                BannerShowRejectAllButton: e.BannerShowRejectAllButton,
                BannerRejectAllButtonText: e.BannerRejectAllButtonText,
                PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
                PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
                PCCloseButtonType: e.PCCloseButtonType,
                PCContinueText: e.PCContinueText,
                BCloseButtonType: e.BCloseButtonType,
                BContinueText: e.BContinueText,
                BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
                BannerDPDTitle: e.BannerDPDTitle || "",
                BannerDPDDescription: e.BannerDPDDescription || [],
                BannerDPDDescriptionFormat: e.BannerDPDDescriptionFormat || "",
                PCFirstPartyCookieListText: e.PCFirstPartyCookieListText || "First Party Cookies",
                PCViewCookiesText: e.PCViewCookiesText,
                PCenterBackText: e.PCenterBackText,
                PCenterVendorsListText: e.PCenterVendorsListText,
                PCenterVendorListDescText: e.PCenterVendorListDescText,
                PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
                PCenterClearFiltersText: e.PCenterClearFiltersText,
                PCenterApplyFiltersText: e.PCenterApplyFiltersText,
                PCenterEnableAccordion: e.PCenterEnableAccordion,
                PCLogoAria: e.PCLogoScreenReader,
                PCGrpDescType: e.PCGrpDescType,
                PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
                PCVendorFullLegalText: e.PCVendorFullLegalText,
                PCAccordionStyle: z.Caret,
                PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
                PCenterCookiesListText: e.PCenterCookiesListText,
                PCenterCancelFiltersText: e.PCenterCancelFiltersText,
                PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
                PCenterFilterText: e.PCenterFilterText,
                Vendors: e.Vendors,
                OverriddenVendors: e.OverriddenVendors,
                Publisher: e.publisher,
                BannerAdditionalDescription: e.BannerAdditionalDescription,
                BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
                PCShowConsentLabels: !(!e.Tab || !e.PCTemplateUpgrade) && e.PCShowConsentLabels,
                PCActiveText: e.PCActiveText,
                PCShowPersistentCookiesHoverButton: e.PCShowPersistentCookiesHoverButton || !1,
                PCInactiveText: e.PCInactiveText,
                UseGoogleVendors: !!e.PCTemplateUpgrade && this.rule.UseGoogleVendors,
                OverridenGoogleVendors: e.OverridenGoogleVendors,
                PCGoogleVendorsText: e.PCGoogleVendorsText,
                PCIABVendorsText: e.PCIABVendorsText,
                PCTemplateUpgrade: e.PCTemplateUpgrade,
                GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
                GlobalRestrictions: e.GlobalRestrictions,
                GeneralVendors: e.GeneralVendors,
                GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
                PCenterGeneralVendorsText: e.PCenterGeneralVendorsText,
                GenVenOptOut: e.PCenterAllowVendorOptout,
                GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
                BannerNonIABVendorListText: e.BannerNonIABVendorListText,
                PCenterVendorListLifespan: e.PCenterVendorListLifespan,
                PCenterVendorListDisclosure: e.PCenterVendorListDisclosure,
                PCenterVendorListNonCookieUsage: e.PCenterVendorListNonCookieUsage,
                PCenterVendorListStorageIdentifier: e.PCenterVendorListStorageIdentifier,
                PCenterVendorListStorageType: e.PCenterVendorListStorageType,
                PCenterVendorListStoragePurposes: e.PCenterVendorListStoragePurposes,
                PCenterVendorListStorageDomain: e.PCenterVendorListStorageDomain,
                PCenterVendorListLifespanDay: e.PCenterVendorListLifespanDay,
                PCenterVendorListLifespanDays: e.PCenterVendorListLifespanDays,
                PCenterVendorListLifespanMonth: e.PCenterVendorListLifespanMonth,
                PCenterVendorListLifespanMonths: e.PCenterVendorListLifespanMonths,
                LfSpnWk: e.PCLifeSpanWk,
                LfSpnWks: e.PCLifeSpanWks,
                LfSpnYr: e.PCLifeSpanYr,
                LfSpnYrs: e.PCLifeSpanYrs,
                LfSpanSecs: e.PCLifeSpanSecs,
                PCCookiePolicyText: e.PCCookiePolicyText,
                PCGVenPolicyTxt: e.PCGeneralVendorsPolicyText,
                ChoicesBanner: e.ChoicesBanner,
                NoBanner: e.NoBanner,
                BShowSaveBtn: e.BShowSaveBtn,
                BSaveBtnTxt: e.BSaveBtnText,
                firstPartyTxt: e.CookieFirstPartyText,
                thirdPartyTxt: e.CookieThirdPartyText,
                PublisherCC: e.PublisherCC,
                gCEnable: e.GCEnable,
                gCAnalyticsStorage: e.GCAnalyticsStorage,
                gCAdStorage: e.GCAdStorage,
                gCWaitTime: e.GCWaitTime,
                gCRedactEnable: e.GCRedactEnable,
                AriaOpenPreferences: e.AriaOpenPreferences,
                AriaClosePreferences: e.AriaClosePreferences
            };
            e.PCTemplateUpgrade && (e.Center || e.Panel) && e.PCAccordionStyle === z.PlusMinus && (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== z.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0), nt.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), Ct = s(s({}, Ct), t)
        }, ft.prototype.commonDataMapper = function(e) {
            var t = {
                iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
                optanonHideAcceptButton: e.OptanonHideAcceptButton,
                optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
                optanonStyle: e.OptanonStyle,
                optanonStaticContentLocation: e.OptanonStaticContentLocation,
                bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
                pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
                textColor: e.TextColor,
                buttonColor: e.ButtonColor,
                buttonTextColor: e.ButtonTextColor,
                bannerMPButtonColor: e.BannerMPButtonColor,
                bannerMPButtonTextColor: e.BannerMPButtonTextColor,
                backgroundColor: e.BackgroundColor,
                bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
                BContinueColor: e.BContinueColor,
                PCContinueColor: e.PCContinueColor,
                pcTextColor: e.PcTextColor,
                pcButtonColor: e.PcButtonColor,
                pcButtonTextColor: e.PcButtonTextColor,
                pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
                pcLinksTextColor: e.PcLinksTextColor,
                bannerLinksTextColor: e.BannerLinksTextColor,
                pcEnableToggles: e.PcEnableToggles,
                pcBackgroundColor: e.PcBackgroundColor,
                pcMenuColor: e.PcMenuColor,
                pcMenuHighLightColor: e.PcMenuHighLightColor,
                legacyBannerLayout: e.LegacyBannerLayout,
                optanonLogo: e.OptanonLogo,
                oneTrustFtrLogo: e.OneTrustFooterLogo,
                optanonCookieDomain: e.OptanonCookieDomain,
                optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
                optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
                optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
                optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
                optanonShowSubGroupCookies: e.ShowSubGroupCookies,
                useRTL: e.UseRTL,
                showBannerCookieSettings: e.ShowBannerCookieSettings,
                showBannerAcceptButton: e.ShowBannerAcceptButton,
                showCookieList: e.ShowCookieList,
                allowHostOptOut: e.AllowHostOptOut,
                CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
                cookieListTitleColor: e.CookieListTitleColor,
                cookieListGroupNameColor: e.CookieListGroupNameColor,
                cookieListTableHeaderColor: e.CookieListTableHeaderColor,
                CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
                cookieListPrimaryColor: e.CookieListPrimaryColor,
                cookieListCustomCss: e.CookieListCustomCss,
                pcShowCookieHost: e.PCShowCookieHost,
                pcShowCookieDuration: e.PCShowCookieDuration,
                pcShowCookieType: e.PCShowCookieType,
                pcShowCookieCategory: e.PCShowCookieCategory,
                pcShowCookieDescription: e.PCShowCookieDescription,
                ConsentIntegration: e.ConsentIntegration,
                ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
                FeaturesText: e.BFeaturesText || "Features",
                LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
                ConsentText: e.BConsentText || "Consent",
                LegitInterestText: e.BLegitInterestText || "Legit. Interest",
                pcDialogClose: e.PCDialogClose || "dialog closed",
                pCFooterLogoUrl: e.PCFooterLogoUrl,
                SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
                SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
                pcCListName: e.PCCListName || "Name",
                pcCListHost: e.PCCListHost || "Host",
                pcCListDuration: e.PCCListDuration || "Duration",
                pcCListType: e.PCCListType || "Type",
                pcCListCategory: e.PCCListCategory || "Category",
                pcCListDescription: e.PCCListDescription || "Description",
                IabLegalTextUrl: e.IabLegalTextUrl,
                pcLegIntButtonColor: e.PcLegIntButtonColor,
                pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
                PCenterExpandToViewText: e.PCenterExpandToViewText,
                BCategoryContainerColor: e.BCategoryContainerColor,
                BCategoryStyleColor: e.BCategoryStyleColor,
                BLineBreakColor: e.BLineBreakColor,
                BSaveBtnColor: e.BSaveBtnColor,
                BCategoryStyle: e.BCategoryStyle,
                BAnimation: e.BAnimation
            };
            Ct = s(s({}, Ct), t)
        }, ft.prototype.setPublicDomainData = function(s) {
            this.pubDomainData = {
                cctId: s.cctId,
                MainText: s.MainText,
                MainInfoText: s.MainInfoText,
                AboutText: s.AboutText,
                AboutCookiesText: s.AboutCookiesText,
                ConfirmText: s.ConfirmText,
                AllowAllText: s.PreferenceCenterConfirmText,
                ManagePreferenceText: s.PreferenceCenterManagePreferencesText,
                CookiesUsedText: s.CookiesUsedText,
                AboutLink: s.AboutLink,
                ActiveText: s.ActiveText,
                AlwaysActiveText: s.AlwaysActiveText,
                AlertNoticeText: s.AlertNoticeText,
                AlertCloseText: s.AlertCloseText,
                AlertMoreInfoText: s.AlertMoreInfoText,
                AlertAllowCookiesText: s.AlertAllowCookiesText,
                CloseShouldAcceptAllCookies: s.CloseShouldAcceptAllCookies,
                BannerTitle: s.BannerTitle,
                BannerFocus: s.BannerFocus,
                BannerRelativeFontSizesToggle: s.BannerRelativeFontSizesToggle,
                ForceConsent: s.ForceConsent,
                LastReconsentDate: s.LastReconsentDate,
                InactiveText: s.InactiveText,
                CookiesText: s.CookiesText,
                CookieSettingButtonText: s.CookieSettingButtonText,
                CategoriesText: s.CategoriesText,
                IsLifespanEnabled: s.IsLifespanEnabled,
                LifespanText: s.LifespanText,
                GeneralVendors: s.GeneralVendors,
                Groups: null,
                Language: s.Language,
                showBannerCloseButton: s.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: s.ShowPreferenceCenterCloseButton,
                FooterDescriptionText: s.FooterDescriptionText,
                CustomJs: s.CustomJs,
                LifespanTypeText: s.LifespanTypeText,
                LifespanDurationText: s.LifespanDurationText,
                CloseText: s.CloseText,
                BannerCloseButtonText: s.BannerCloseButtonText,
                HideToolbarCookieList: s.HideToolbarCookieList,
                AlertLayout: s.AlertLayout,
                AddLinksToCookiepedia: s.AddLinksToCookiepedia,
                ShowAlertNotice: s.ShowAlertNotice,
                IsIABEnabled: s.IsIabEnabled,
                IabType: s.IabType,
                BannerPosition: s.BannerPosition,
                PreferenceCenterPosition: s.PreferenceCenterPosition,
                VendorLevelOptOut: s.IsIabEnabled,
                ConsentModel: {
                    Name: s.ConsentModel
                },
                VendorConsentModel: s.VendorConsentModel,
                IsConsentLoggingEnabled: s.IsConsentLoggingEnabled,
                IsIabThirdPartyCookieEnabled: s.IsIabThirdPartyCookieEnabled,
                ScrollCloseBanner: s.ScrollCloseBanner,
                ScrollAcceptAllCookies: s.ScrollAcceptAllCookies,
                OnClickCloseBanner: s.OnClickCloseBanner,
                OnClickAcceptAllCookies: s.OnClickAcceptAllCookies,
                NextPageCloseBanner: s.NextPageCloseBanner,
                NextPageAcceptAllCookies: s.NextPageAcceptAllCookies,
                VendorListText: s.VendorListText,
                ThirdPartyCookieListText: s.ThirdPartyCookieListText,
                CookieListDescription: s.CookieListDescription,
                CookieListTitle: s.CookieListTitle,
                BannerPurposeTitle: s.BannerPurposeTitle,
                BannerPurposeDescription: s.BannerPurposeDescription,
                BannerFeatureTitle: s.BannerFeatureTitle,
                BannerFeatureDescription: s.BannerFeatureDescription,
                BannerInformationTitle: s.BannerInformationTitle,
                BannerInformationDescription: s.BannerInformationDescription,
                BannerIABPartnersLink: s.BannerIABPartnersLink,
                BannerShowRejectAllButton: s.BannerShowRejectAllButton,
                BannerRejectAllButtonText: s.BannerRejectAllButtonText,
                PCenterShowRejectAllButton: s.PCenterShowRejectAllButton,
                PCenterRejectAllButtonText: s.PCenterRejectAllButtonText,
                PCCloseButtonType: s.PCCloseButtonType,
                PCContinueText: s.PCContinueText,
                BCloseButtonType: s.BCloseButtonType,
                BContinueText: s.BContinueText,
                BannerSettingsButtonDisplayLink: s.BannerSettingsButtonDisplayLink,
                BannerDPDTitle: s.BannerDPDTitle || "",
                BannerDPDDescription: s.BannerDPDDescription || [],
                BannerDPDDescriptionFormat: s.BannerDPDDescriptionFormat || "",
                ConsentIntegrationData: null,
                PCFirstPartyCookieListText: s.PCFirstPartyCookieListText,
                PCViewCookiesText: s.PCViewCookiesText,
                IsBannerLoaded: !1,
                PCenterBackText: s.PCenterBackText,
                PCenterVendorsListText: s.PCenterVendorsListText,
                PCenterVendorListDescText: s.PCenterVendorListDescText,
                PCenterViewPrivacyPolicyText: s.PCenterViewPrivacyPolicyText,
                PCenterClearFiltersText: s.PCenterClearFiltersText,
                PCenterApplyFiltersText: s.PCenterApplyFiltersText,
                PCenterEnableAccordion: s.PCenterEnableAccordion,
                PCLogoAria: s.PCLogoScreenReader,
                PCGrpDescType: s.PCGrpDescType,
                PCGrpDescLinkPosition: s.PCGrpDescLinkPosition,
                PCVendorFullLegalText: s.PCVendorFullLegalText,
                PCAccordionStyle: z.Caret,
                PCenterExpandToViewText: s.PCenterExpandToViewText,
                PCenterAllowAllConsentText: s.PCenterAllowAllConsentText,
                PCenterCookiesListText: s.PCenterCookiesListText,
                PCenterCancelFiltersText: s.PCenterCancelFiltersText,
                PCenterSelectAllVendorsText: s.PCenterSelectAllVendorsText,
                PCShowPersistentCookiesHoverButton: s.PCShowPersistentCookiesHoverButton,
                PCenterFilterText: s.PCenterFilterText,
                UseGoogleVendors: !!s.PCTemplateUpgrade && this.rule.UseGoogleVendors,
                OverridenGoogleVendors: s.OverridenGoogleVendors,
                PCGoogleVendorsText: s.PCGoogleVendorsText,
                PCIABVendorsText: s.PCIABVendorsText,
                PCTemplateUpgrade: s.PCTemplateUpgrade,
                BCategoryContainerColor: s.BCategoryContainerColor,
                BCategoryStyleColor: s.BCategoryStyleColor,
                BLineBreakColor: s.BLineBreakColor,
                BSaveBtnColor: s.BSaveBtnColor,
                BCategoryStyle: s.BCategoryStyle,
                ChoicesBanner: s.ChoicesBanner,
                NoBanner: s.NoBanner,
                BShowSaveBtn: s.BShowSaveBtn,
                BSaveBtnTxt: s.BSaveBtnText,
                BAnimation: s.BAnimation,
                Domain: nt.moduleInitializer.Domain,
                PCOpensCookiesDetailsAlert: s.PCOpensCookiesDetailsAlert,
                PCOpensVendorDetailsAlert: s.PCOpensVendorDetailsAlert
            }, s.PCTemplateUpgrade && (s.Center || s.Panel) && s.PCAccordionStyle !== z.NoAccordion && (this.pubDomainData.PCAccordionStyle = s.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = s.PCAccordionStyle !== z.NoAccordion;
            var r = [];
            s.Groups.forEach(function(e) {
                var t, o;
                if (s.IsIabEnabled || !e.IsIabPurpose) {
                    e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                    var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function(e, t) {
                        return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                    }, []);
                    (t = e.Cookies).push.apply(t, n), r.push(e)
                }
            }), this.pubDomainData.Groups = r
        }, ft.prototype.setBannerScriptElement = function(e) {
            this.bannerScriptElement = e, this.setDomainElementAttributes()
        }, ft.prototype.setDomainElementAttributes = function() {
            this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")), this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html") && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
        }, ft.prototype.setUseDocumentLanguage = function(e) {
            this.useDocumentLanguage = e
        }, ft.prototype.setPcName = function() {
            Ct.Center ? this.pcName = Je : Ct.Panel ? this.pcName = Ze : Ct.Popup ? this.pcName = Xe : Ct.List ? this.pcName = Qe : Ct.Tab && (this.pcName = $e)
        }, ft.prototype.setBannerName = function() {
            Ct.Flat ? this.bannerName = qe : Ct.FloatingRoundedCorner ? this.bannerName = je : Ct.FloatingFlat ? this.bannerName = Ue : Ct.FloatingRounded ? this.bannerName = We : Ct.FloatingRoundedIcon ? this.bannerName = ze : Ct.CenterRounded ? this.bannerName = Re : Ct.ChoicesBanner ? this.bannerName = Ke : Ct.NoBanner && (this.bannerName = Ye)
        }, ft.prototype.populateGPCSignal = function() {
            this.gpcForAGrpEnabled && vt.writeCookieParam(Se.OPTANON_CONSENT, Te, this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0")
        }, ft.prototype.initGCM = function() {
            var o = [];
            Object.keys(this.rule.States).forEach(function(t) {
                bt.rule.States[t].forEach(function(e) {
                    o.push((t + "-" + e).toUpperCase())
                })
            });
            var e = bt.rule.Countries.map(function(e) {
                return e.toUpperCase()
            });
            bt.gcmCountries = e.concat(o)
        }, ft);

    function ft() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.purposeOneGrpId = "IABV2_1"
    }
    var bt, Ct = {};

    function mt() {}
    var vt, Pt = new(mt.prototype.convertKeyValueLowerCase = function(e) {
            for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t.toLowerCase()] = e[t].toLowerCase(), delete e[t]);
            return e
        }, mt.prototype.arrToStr = function(e) {
            return e.toString()
        }, mt.prototype.strToArr = function(e) {
            return e ? e.split(",") : []
        }, mt.prototype.empty = function(e) {
            var t = document.getElementById(e);
            if (t)
                for (; t.hasChildNodes();) t.removeChild(t.lastChild)
        }, mt.prototype.show = function(e) {
            var t = document.getElementById(e);
            t && (t.style.display = "block")
        }, mt.prototype.remove = function(e) {
            var t = document.getElementById(e);
            t && t.parentNode && t.parentNode.removeChild(t)
        }, mt.prototype.appendTo = function(e, t) {
            var o, n = document.getElementById(e);
            n && ((o = document.createElement("div")).innerHTML = t, n.appendChild(o))
        }, mt.prototype.contains = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
            return !1
        }, mt.prototype.indexOf = function(e, t) {
            var o;
            for (o = 0; o < e.length; o += 1)
                if (e[o] === t) return o;
            return -1
        }, mt.prototype.endsWith = function(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }, mt.prototype.generateUUID = function() {
            var o = (new Date).getTime();
            return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = (o + 16 * Math.random()) % 16 | 0;
                return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }, mt.prototype.getActiveIdArray = function(e) {
            return e.filter(function(e) {
                return "true" === e.split(":")[1]
            }).map(function(e) {
                return parseInt(e.split(":")[0])
            })
        }, mt.prototype.distinctArray = function(e) {
            var t = new Array;
            return e.forEach(function(e) {
                t.indexOf(e) < 0 && t.push(e)
            }), t
        }, mt.prototype.findIndex = function(e, t) {
            for (var o = -1, n = 0; n < e.length; n++)
                if (void 0 !== e[n] && t(e[n], n)) {
                    o = n;
                    break
                }
            return o
        }, mt.prototype.getURL = function(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }, mt.prototype.removeURLPrefixes = function(e) {
            return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
        }, mt.prototype.removeChild = function(e) {
            if (e)
                if (e instanceof NodeList || e instanceof Array)
                    for (var t = 0; t < e.length; t++) e[t].parentElement.removeChild(e[t]);
                else e.parentElement.removeChild(e)
        }, mt.prototype.getRelativeURL = function(e, t, o) {
            if (void 0 === o && (o = !1), t) {
                var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
                return o ? n : n + ".js"
            }
            return e
        }, mt.prototype.setCheckedAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (t.setAttribute("aria-checked", o.toString()), o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
        }, mt.prototype.setDisabledAttribute = function(e, t, o) {
            e && (t = document.querySelector(e)), t && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
        }, mt.prototype.setHtmlAttributes = function(e, t) {
            for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
        }, mt.prototype.calculateCookieLifespan = function(e) {
            if (e < 0) return Ct.LifespanTypeText;
            var t = Math.floor(e / Y.maxSecToDays);
            if (t < Y.minDays) return "< 1 " + Ct.PCenterVendorListLifespanDay;
            if (t < Y.maxDays) return t + " " + Ct.PCenterVendorListLifespanDays;
            var o = Math.floor(t / Y.maxDays);
            return 1 === o ? o + " " + Ct.PCenterVendorListLifespanMonth : o + " " + Ct.PCenterVendorListLifespanMonths
        }, mt.prototype.insertElement = function(e, t, o) {
            e && t && e.insertAdjacentElement(o, t)
        }, mt),
        At = (Tt.prototype.removeAlertBox = function() {
            null !== this.getCookie(Se.ALERT_BOX_CLOSED) && this.setCookie(Se.ALERT_BOX_CLOSED, "", 0, !0)
        }, Tt.prototype.removeIab1 = function() {
            null !== this.getCookie(O.Iab1Pub) && this.setCookie(O.Iab1Pub, "", 0, !0)
        }, Tt.prototype.removeIab2 = function() {
            null !== this.getCookie(O.Iab2Pub) && this.setCookie(O.Iab2Pub, "", 0, !0)
        }, Tt.prototype.removeAddtlStr = function() {
            null !== this.getCookie(Se.ADDITIONAL_CONSENT_STRING) && this.setCookie(Se.ADDITIONAL_CONSENT_STRING, "", 0, !0)
        }, Tt.prototype.removeVariant = function() {
            null !== this.getCookie(Se.SELECTED_VARIANT) && this.setCookie(Se.SELECTED_VARIANT, "", 0, !0)
        }, Tt.prototype.removeOptanon = function() {
            null !== this.getCookie(Se.OPTANON_CONSENT) && this.setCookie(Se.OPTANON_CONSENT, "", 0, !0)
        }, Tt.prototype.removePreview = function() {
            null !== this.getCookie(Se.OT_PREVIEW) && this.setCookie(Se.OT_PREVIEW, "", 0, !0)
        }, Tt.prototype.writeCookieParam = function(e, t, o) {
            var n, s, r, i, l = {},
                a = this.getCookie(e);
            if (a)
                for (s = a.split("&"), n = 0; n < s.length; n += 1) r = s[n].split("="), l[decodeURIComponent(r[0])] = decodeURIComponent(r[1]).replace(/\+/g, " ");
            l[t] = o;
            var c = nt.moduleInitializer.TenantFeatures;
            c && c.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(), l.version = ot.otSDKVersion, i = this.param(l), this.setCookie(e, i, Ct.ReconsentFrequencyDays)
        }, Tt.prototype.readCookieParam = function(e, t) {
            var o, n, s, r, i = this.getCookie(e);
            if (i) {
                for (n = {}, s = i.split("&"), o = 0; o < s.length; o += 1) r = s[o].split("="), n[decodeURIComponent(r[0])] = decodeURIComponent(r[1]).replace(/\+/g, " ");
                return t && n[t] ? n[t] : t && !n[t] ? "" : n
            }
            return ""
        }, Tt.prototype.getCookie = function(e) {
            if (nt && nt.moduleInitializer && nt.moduleInitializer.MobileSDK) {
                var t = this.getCookieDataObj(e);
                if (t) return t.value
            }
            if (ot.isAMP && (ot.ampData = JSON.parse(localStorage.getItem(ot.dataDomainId)) || {}, ot.ampData)) return ot.ampData[e] || null;
            var o, n, s = e + "=",
                r = document.cookie.split(";");
            for (o = 0; o < r.length; o += 1) {
                for (n = r[o];
                    " " === n.charAt(0);) n = n.substring(1, n.length);
                if (0 === n.indexOf(s)) return n.substring(s.length, n.length)
            }
            return null
        }, Tt.prototype.setAmpStorage = function() {
            window.localStorage.setItem(ot.dataDomainId, JSON.stringify(ot.ampData))
        }, Tt.prototype.removeAmpStorage = function() {
            window.localStorage.removeItem(ot.dataDomainId)
        }, Tt.prototype.handleAmp = function(e, t) {
            "" !== t ? ot.ampData[e] = t : delete ot.ampData[e], 0 === Object.keys(ot.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
        }, Tt.prototype.setCookie = function(e, t, o, n, s) {
            if (void 0 === n && (n = !1), void 0 === s && (s = new Date), ot.isAMP) this.handleAmp(e, t);
            else {
                var r = void 0;
                r = o ? (s.setTime(s.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + s.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
                var i = nt.moduleInitializer,
                    l = i && i.Domain ? i.Domain.split("/") : [],
                    a = "",
                    c = i.TenantFeatures;
                l.length <= 1 ? l[1] = "" : a = l.slice(1).join("/");
                var d = "Samesite=Lax";
                c && c.CookiesSameSiteNone && (d = "Samesite=None; Secure");
                var u = i.ScriptType === Ge || i.ScriptType === De;
                if (ot.isPreview || !u && !i.MobileSDK) p = t + r + "; path=/" + a + "; domain=." + l[0] + "; " + d, document.cookie = e + "=" + p;
                else {
                    var p = t + r + "; path=/; " + d;
                    i.MobileSDK ? this.setCookieDataObj({
                        name: e,
                        value: t,
                        expires: r,
                        date: s,
                        domainAndPath: l
                    }) : document.cookie = e + "=" + p
                }
            }
        }, Tt.prototype.setCookieDataObj = function(t) {
            if (t) {
                ot.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? ot.otCookieData = window.OneTrust.otCookieData : ot.otCookieData = []);
                var e = Pt.findIndex(ot.otCookieData, function(e) {
                    return e.name === t.name
                }); - 1 < e ? ot.otCookieData[e] = t : ot.otCookieData.push(t)
            }
        }, Tt.prototype.getCookieDataObj = function(t) {
            ot.otCookieData && 0 !== ot.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? ot.otCookieData = window.OneTrust.otCookieData : ot.otCookieData = []);
            var e = Pt.findIndex(ot.otCookieData, function(e) {
                return e.name === t
            });
            if (0 <= e) {
                var o = ot.otCookieData[e];
                if (o.date) return new Date(o.date) < new Date ? (ot.otCookieData.splice(e, 1), null) : o
            }
            return null
        }, Tt.prototype.param = function(e) {
            var t, o = "";
            for (t in e) e.hasOwnProperty(t) && ("" !== o && (o += "&"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
            return o
        }, Tt);

    function Tt() {}
    var St = (It.insertAfter = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }, It.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }, It.inArray = function(e, t) {
        return t.indexOf(e)
    }, It.ajax = function(e) {
        var t, o, n, s, r, i, l = null,
            a = new XMLHttpRequest;
        t = e.type, o = e.url, e.dataType, n = e.contentType, s = e.data, r = e.success, l = e.error, i = e.sync, a.open(t, o, !i), a.setRequestHeader("Content-Type", n), a.onload = function() {
            if (200 <= this.status && this.status < 400) {
                var e = JSON.parse(this.responseText);
                r(e)
            } else l({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, a.onerror = function(e) {
            l(e)
        }, "post" === t.toLowerCase() || "put" === t.toLowerCase() ? a.send(s) : a.send()
    }, It.prevNextHelper = function(o, e, n) {
        var s = [];

        function r(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && s.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && s.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && s.push(t[e]) : t[e] && s.push(t[e])
        }
        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
            r(o, e, n)
        }) : r(o, e, n), s
    }, It.browser = function() {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), o.join(" "))), {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }, It.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e);
        return "[object NodeList]" === t || "[object Array]" === t
    }, It.prototype.fadeOut = function(e) {
        var t = this;
        if (void 0 === e && (e = 60), 1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) this.el[o].style.visibility = "hidden", this.el[o].style.opacity = "0", this.el[o].style.transition = "visibility 0s " + e + "ms, opacity " + e + "ms linear";
        var n = setInterval(function() {
            if (1 <= t.el.length)
                for (var e = 0; e < t.el.length; e++) t.el[e].style.opacity <= 0 && (t.el[e].style.display = "none", clearInterval(n), "optanon-popup-bg" === t.el[e].id && t.el[e].setAttribute("style", ""))
        }, e);
        return this
    }, It.prototype.hide = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].style.display = "none";
        else It.isNodeList(this.el) || (this.el.style.display = "none");
        return this
    }, It.prototype.show = function(e) {
        if (void 0 === e && (e = "block"), 1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].style.display = e;
        else It.isNodeList(this.el) || (this.el.style.display = e);
        return this
    }, It.prototype.remove = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
        else this.el.parentNode.removeChild(this.el);
        return this
    }, It.prototype.css = function(e) {
        if (e)
            if (1 <= this.el.length) {
                if (!e.includes(":")) return this.el[0].style[e];
                for (var t = 0; t < this.el.length; t++) this.el[t].setAttribute("style", e)
            } else {
                if (!e.includes(":")) return this.el.style[e];
                this.el.setAttribute("style", e)
            }
        return this
    }, It.prototype.removeClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        return this
    }, It.prototype.addClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
        else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }, It.prototype.on = function(s, r, i) {
        var e = this;
        if ("string" != typeof r)
            if (this.el && "HTML" === this.el.nodeName && "load" === s || "resize" === s || "scroll" === s) switch (s) {
                    case "load":
                        window.onload = r;
                        break;
                    case "resize":
                        window.onresize = r;
                        break;
                    case "scroll":
                        window.onscroll = r
                } else if (this.el && 1 <= this.el.length)
                    for (var t = 0; t < this.el.length; t++) this.el[t].addEventListener(s, r);
                else this.el && this.el instanceof Element && this.el.addEventListener(s, r);
        else if (this.el && "HTML" === this.el.nodeName && "load" === s || "resize" === s || "scroll" === s) switch (s) {
            case "load":
                window.onload = i;
                break;
            case "resize":
                window.onresize = i;
                break;
            case "scroll":
                window.onscroll = i
        } else {
            var l = function(o) {
                var n = o.target;
                e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(r), function(e, t) {
                    wt["" + s + r] && delete wt["" + s + r], e.addEventListener(s, i), e === n && i && i.call(e, o)
                }), e.el && e.el[0] ? e.el[0].removeEventListener(s, l) : e.el && e.el instanceof Element && e.el.removeEventListener(s, l)
            };
            if (this.el && 1 <= this.el.length)
                for (t = 0; t < this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(s, l);
            else this.el && (this.el.eventExecuted = !1, !this.el.eventExecuted && this.el instanceof Element && (wt["" + s + r] || (wt["" + s + r] = !0, this.el.addEventListener(s, l))))
        }
        return this
    }, It.prototype.off = function(e, t) {
        if (1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) this.el[o].removeEventListener(e, t);
        else this.el.removeEventListener(e, t);
        return this
    }, It.prototype.one = function(t, o) {
        var n = this;
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
            });
        else {
            var s = function(e) {
                e.stopPropagation(), o(), n.off(t, s)
            };
            this.el.addEventListener(t, s)
        }
        return this
    }, It.prototype.trigger = function(e) {
        var t = new CustomEvent(e, {
            customEvent: "yes"
        });
        return this.el.dispatchEvent(t), this
    }, It.prototype.focus = function() {
        return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(), this
    }, It.prototype.attr = function(e, t) {
        return 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el.getAttribute(e)
    }, It.prototype.html = function(e) {
        if (null == e) return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++) this.el[t].innerHTML = e;
        else this.el.innerHTML = e;
        return this
    }, It.prototype.append = function(o) {
        if ("string" != typeof o || o.includes("<") || o.includes(">"))
            if (Array.isArray(o)) {
                var n = this;
                Array.prototype.forEach.call(o, function(e, t) {
                    document.querySelector(n.selector).appendChild(new It(e, "ce").el)
                })
            } else if ("string" == typeof o || Array.isArray(o))
            if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(new It(o, "ce").el);
            else if (this.useEl) {
            var s = document.createDocumentFragment(),
                r = !(!o.includes("<th") && !o.includes("<td"));
            if (r) {
                var e = o.split(" ")[0].split("<")[1];
                s.appendChild(document.createElement(e)), s.firstChild.innerHTML = o
            }
            Array.prototype.forEach.call(this.el, function(e, t) {
                r ? e.appendChild(s.firstChild) : e.appendChild(new It(o, "ce").el)
            })
        } else this.selector.appendChild(new It(o, "ce").el);
        else if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(o);
        else if (1 <= o.length)
            for (var t = 0; t < o.length; t++) this.selector.appendChild(o[t]);
        else this.selector.appendChild(o);
        else this.el.insertAdjacentText("beforeend", o);
        return this
    }, It.prototype.text = function(o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o) return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function(e, t) {
                    e.textContent = o
                })
            } else {
                if (!o) return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }, It.prototype.data = function(o, n) {
        if (this.el.length < 1) return this;
        if (!(1 <= this.el.length)) return s(this.el, n);

        function s(e, t) {
            if (!t) return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }
        return Array.prototype.forEach.call(this.el, function(e, t) {
            s(e, n)
        }), this
    }, It.prototype.height = function(e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), s = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), i = [t, o, n, s], l = 0, a = 0; a < i.length; a++) 0 < i[a] && (l += i[a]);
        if (!e) return this.selector === document ? r : this.el.clientHeight - l;
        var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
            d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
        return (c && "px" === c || "%" === c || "em" === c || "rem" === c) && (0 < d ? this.el.style.height = l + d + c : "auto" === e && (this.el.style.height = e)), this
    }, It.prototype.each = function(e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t && (this.el = this.el[0]), this
    }, It.prototype.is = function(e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }, It.prototype.filter = function(e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
    }, It.prototype.animate = function(i, l) {
        var a, c = this;
        for (var e in this.el = document.querySelector(this.selector), i) a = e,
            function() {
                var e = parseInt(i[a]),
                    t = i[a].split(parseInt(i[a]))[1] ? i[a].split(parseInt(i[a]))[1] : "px",
                    o = "\n                      @keyframes slide-" + ("top" === a ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + ("top" === a ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === a ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + ("top" === a ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === a ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + ("top" === a ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === a ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      ",
                    n = document.head.querySelector("#onetrust-style");
                if (n) n.innerHTML += o;
                else {
                    var s = document.createElement("style");
                    s.id = "onetrust-legacy-style", s.type = "text/css", s.innerHTML = o, document.head.appendChild(s)
                }
                if (It.browser().type = It.browser().version <= 8) {
                    var r = "top" === a ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + l + "ms ease-out forwards;";
                    c.el.setAttribute("style", r)
                } else c.el.style.animationName = "top" === a ? "slide-up-custom" : "slide-down-custom", c.el.style.animationDuration = l + "ms", c.el.style.animationFillMode = "forwards", c.el.style.animationTimingFunction = "ease-out"
            }();
        return this
    }, It.prototype.scrollTop = function() {
        return this.el.scrollTop
    }, It);

    function It(e, t) {
        switch (void 0 === t && (t = ""), this.selector = e, this.useEl = !1, t) {
            case "ce":
                var o = It.browser().type.toLowerCase(),
                    n = It.browser().version;
                if (n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o) {
                    var s = document.implementation.createHTMLDocument();
                    s.body.innerHTML = e, this.el = s.body.children[0]
                } else {
                    var r = document.createRange().createContextualFragment(e);
                    this.el = r.firstChild
                }
                this.length = 1;
                break;
            case "":
                this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                break;
            default:
                this.length = 0
        }
    }

    function Lt(e, t) {
        return void 0 === t && (t = ""), new St(e, t)
    }
    var _t, wt = {},
        xt = (Et.prototype.addLogoUrls = function() {
            _t.checkMobileOfflineRequest(_t.getBannerVersionUrl()) || (bt.mobileOnlineURL.push(_t.updateCorrectUrl(Ct.optanonLogo)), bt.mobileOnlineURL.push(_t.updateCorrectUrl(Ct.oneTrustFtrLogo)))
        }, Et.prototype.getCookieLabel = function(e, t, o) {
            if (void 0 === o && (o = !0), !e) return "";
            var n = e.Name;
            return t && (n = '<a href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '" rel="noopener" target="_blank" style="text-decoration:underline;">\n                            ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + Ct.NewWinTxt + "</span>\n                          </a>"), n
        }, Et.prototype.getBannerSDKAssestsUrl = function() {
            return this.getBannerVersionUrl() + "/assets"
        }, Et.prototype.getBannerVersionUrl = function() {
            var e = bt.bannerScriptElement.getAttribute("src");
            return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + nt.moduleInitializer.Version
        }, Et.prototype.checkMobileOfflineRequest = function(e) {
            return nt.moduleInitializer.MobileSDK && new RegExp("^file://", "i").test(e)
        }, Et.prototype.updateCorrectIABUrl = function(e) {
            var t = nt.moduleInitializer.ScriptType;
            if (t === Oe || t === De) {
                var o = Pt.getURL(e),
                    n = bt.bannerScriptElement,
                    s = n && n.getAttribute("src") ? Pt.getURL(n.getAttribute("src")) : null;
                s && o && s.hostname !== o.hostname && (e = (e = (s = "" + bt.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, s.hostname))
            }
            return e
        }, Et.prototype.updateCorrectUrl = function(e, t) {
            void 0 === t && (t = !1);
            var o = Pt.getURL(e),
                n = bt.bannerScriptElement,
                s = n && n.getAttribute("src") ? Pt.getURL(n.getAttribute("src")) : null;
            if (s && o && s.hostname !== o.hostname) {
                var r = nt.moduleInitializer.ScriptType;
                if (r === Oe || r === De) {
                    if (t) return e;
                    e = (s = bt.bannerDataParentURL + "/" + bt.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
                } else e = e.replace(o.hostname, s.hostname)
            }
            return e
        }, Et.prototype.isBundleOrStackActive = function(n, s) {
            void 0 === s && (s = null);
            var r = ot.oneTrustIABConsent,
                i = !0;
            s = s || ot.groupsConsent;
            for (var l = 0, e = function() {
                    var t = n.SubGroups[l];
                    if (t.Type === rt)(-1 < (e = Pt.findIndex(s, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    })) && "0" === s[e].split(":")[1] || !s.length) && (i = !1);
                    else {
                        var e, o = t.Type === at ? r.specialFeatures : r.purpose;
                        (-1 < (e = Pt.findIndex(o, function(e) {
                            return e.split(":")[0] === t.IabGrpId
                        })) && "false" === o[e].split(":")[1] || !o.length) && (i = !1)
                    }
                    l++
                }; e(), i && l < n.SubGroups.length;);
            return i
        }, Et.prototype.otFetchOfflineFile = function(s) {
            return a(this, void 0, void 0, function() {
                var t, o, n;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return s = s.replace(".json", ".js"), t = s.split("/"), o = t[t.length - 1], n = o.split(".js")[0], [4, new Promise(function(e) {
                                function t() {
                                    e(window[n])
                                }
                                _t.jsonp(s, t, t)
                            })];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, Et.prototype.jsonp = function(e, t, o) {
            _t.checkMobileOfflineRequest(e) || bt.mobileOnlineURL.push(e);
            var n = document.createElement("script"),
                s = document.getElementsByTagName("head")[0];

            function r() {
                t()
            }
            n.onreadystatechange = function() {
                "loaded" !== this.readyState && "complete" !== this.readyState || r()
            }, n.onload = r, n.onerror = function() {
                o()
            }, n.type = "text/javascript", n.async = !0, n.src = e, ot.crossOrigin && n.setAttribute("crossorigin", ot.crossOrigin), s.appendChild(n)
        }, Et.prototype.isCookiePolicyPage = function(e) {
            var t = !1,
                o = Pt.removeURLPrefixes(window.location.href),
                n = Lt("<div></div>", "ce").el;
            Lt(n).html(e);
            for (var s = n.querySelectorAll("a"), r = 0; r < s.length; r++)
                if (Pt.removeURLPrefixes(s[r].href) === o) {
                    t = !0;
                    break
                }
            return t
        }, Et.prototype.isBannerVisible = function() {
            var e = !1,
                t = document.getElementById("onetrust-banner-sdk");
            return t && t.getAttribute("style") && (e = -1 !== t.getAttribute("style").indexOf("display:none")), e
        }, Et.prototype.hideBanner = function() {
            var e = this;
            ot.bnrAnimationInProg ? setTimeout(function() {
                return e.hideBanner()
            }, 100) : Lt("#onetrust-banner-sdk").fadeOut(400)
        }, Et.prototype.resetFocusToBody = function() {
            document.activeElement && document.activeElement.blur()
        }, Et.prototype.getDuration = function(e) {
            var t = e.Length,
                o = e.DurationType,
                n = "";
            if (!t || 0 === parseInt(t)) return Ct.LfSpanSecs;
            var s = parseInt(t);
            if (o) {
                var r = 1 < (s = this.round_to_precision(s / o, .5)) ? tt[o] + "s" : tt[o];
                n = s + " " + Ct[r]
            } else n = this.getDurationText(s);
            return n
        }, Et.prototype.isDateCurrent = function(e) {
            var t = e.split("/"),
                o = parseInt(t[1]),
                n = parseInt(t[0]),
                s = parseInt(t[2]),
                r = new Date,
                i = r.getDate(),
                l = r.getFullYear(),
                a = r.getMonth() + 1;
            return l < s || s === l && a < n || s === l && n === a && i <= o
        }, Et.prototype.insertFooterLogo = function(e) {
            var t = Lt(e).el;
            if (t.length && Ct.oneTrustFtrLogo) {
                var o = _t.updateCorrectUrl(Ct.oneTrustFtrLogo);
                _t.checkMobileOfflineRequest(_t.getBannerVersionUrl()) && (o = Pt.getRelativeURL(o, !0, !0));
                for (var n = 0; n < t.length; n++) Lt(t[n]).attr("href", Ct.pCFooterLogoUrl), Lt(t[n]).attr("style", 'background-image: url("' + o + '")'), Lt(t[n]).attr("aria-label", "Powered by OneTrust " + Ct.NewWinTxt)
            }
        }, Et.prototype.getDurationText = function(e) {
            return 365 <= e ? (e /= 365, (e = this.round_to_precision(e, .5)) + " " + (1 < e ? Ct.LfSpnYrs : Ct.LfSpnYr)) : e + " " + (1 < e ? Ct.PCenterVendorListLifespanDays : Ct.PCenterVendorListLifespanDay)
        }, Et.prototype.round_to_precision = function(e, t) {
            var o = +e + (void 0 === t ? .5 : t / 2);
            return o - o % (void 0 === t ? 1 : +t)
        }, Et);

    function Et() {}
    var Bt, Vt = {
            P_Content: "#ot-pc-content",
            P_Logo: ".ot-pc-logo",
            P_Title: "#ot-pc-title",
            P_Policy_Txt: "#ot-pc-desc",
            P_Vendor_Title_Elm: "#ot-lst-title",
            P_Vendor_Title: "#ot-lst-title span",
            P_Manage_Cookies_Txt: "#ot-category-title",
            P_Label_Txt: ".ot-label-txt",
            P_Category_Header: ".ot-cat-header",
            P_Category_Grp: ".ot-cat-grp",
            P_Category_Item: ".ot-cat-item",
            P_Vendor_List: "#ot-pc-lst",
            P_Vendor_Content: "#ot-lst-cnt",
            P_Vendor_Container: "#ot-ven-lst",
            P_Ven_Bx: "ot-ven-box",
            P_Ven_Name: ".ot-ven-name",
            P_Ven_Link: ".ot-ven-link",
            P_Ven_Ctgl: "ot-ven-ctgl",
            P_Ven_Ltgl: "ot-ven-litgl",
            P_Ven_Ltgl_Only: "ot-ven-litgl-only",
            P_Ven_Opts: ".ot-ven-opts",
            P_Triangle: "#ot-anchor",
            P_Fltr_Modal: "#ot-fltr-modal",
            P_Fltr_Options: ".ot-fltr-opts",
            P_Fltr_Option: ".ot-fltr-opt",
            P_Select_Cntr: "#ot-sel-blk",
            P_Host_Cntr: "#ot-host-lst",
            P_Host_Hdr: ".ot-host-hdr",
            P_Host_Desc: ".ot-host-desc",
            P_Li_Hdr: ".ot-pli-hdr",
            P_Li_Title: ".ot-li-title",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Host_Title: ".ot-host-name",
            P_Leg_Select_All: ".ot-sel-all-hdr",
            P_Leg_Header: ".ot-li-hdr",
            P_Acc_Header: ".ot-acc-hdr",
            P_Cnsnt_Header: ".ot-consent-hdr",
            P_Tgl_Cntr: ".ot-tgl-cntr",
            P_CBx_Cntr: ".ot-chkbox",
            P_Sel_All_Host_El: "ot-selall-hostcntr",
            P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
            P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
            P_c_Name: "ot-c-name",
            P_c_Host: "ot-c-host",
            P_c_Duration: "ot-c-duration",
            P_c_Type: "ot-c-type",
            P_c_Category: "ot-c-category",
            P_c_Desc: "ot-c-description",
            P_Host_View_Cookies: ".ot-host-expand",
            P_Host_Opt: ".ot-host-opt",
            P_Host_Info: ".ot-host-info",
            P_Arrw_Cntr: ".ot-arw-cntr",
            P_Acc_Txt: ".ot-acc-txt",
            P_Vendor_CheckBx: "ot-ven-chkbox",
            P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
            P_Host_UI: "ot-hosts-ui",
            P_Host_Cnt: "ot-host-cnt",
            P_Host_Bx: "ot-host-box",
            P_Ven_Dets: ".ot-ven-dets",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Close_Btn: ".ot-close-icon",
            P_Ven_Lst_Cntr: ".ot-vlst-cntr",
            P_Host_Lst_cntr: ".ot-hlst-cntr",
            P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
            P_Subgrp_Desc: ".ot-subgrp-desc",
            P_Subgp_ul: ".ot-subgrps",
            P_Subgrp_li: ".ot-subgrp",
            P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
            P_Grp_Container: ".ot-grps-cntr",
            P_Privacy_Txt: "#ot-pvcy-txt",
            P_Privacy_Hdr: "#ot-pvcy-hdr",
            P_Active_Menu: "ot-active-menu",
            P_Desc_Container: ".ot-desc-cntr",
            P_Tab_Grp_Hdr: "ot-grp-hdr1",
            P_Search_Cntr: "#ot-search-cntr",
            P_Clr_Fltr_Txt: "#clear-filters-handler",
            P_Acc_Grp_Desc: ".ot-acc-grpdesc",
            P_Acc_Container: ".ot-acc-grpcntr",
            P_Line_Through: "line-through"
        },
        Nt = {
            P_Grp_Container: ".groups-container",
            P_Content: "#ot-content",
            P_Category_Header: ".category-header",
            P_Desc_Container: ".description-container",
            P_Label_Txt: ".label-text",
            P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
            P_Leg_Int_Hdr: ".leg-int-header",
            P_Not_Always_Active: "p:not(.ot-always-active)",
            P_Category_Grp: ".category-group",
            P_Category_Item: ".category-item",
            P_Sub_Grp_Cntr: ".cookie-subgroups-container",
            P_Acc_Container: ".ot-accordion-pc-container",
            P_Close_Btn: ".pc-close-button",
            P_Logo: ".pc-logo",
            P_Title: "#pc-title",
            P_Privacy_Txt: "#privacy-text",
            P_Privacy_Hdr: "#pc-privacy-header",
            P_Policy_Txt: "#pc-policy-text",
            P_Manage_Cookies_Txt: "#manage-cookies-text",
            P_Vendor_Title: "#vendors-list-title",
            P_Vendor_Title_Elm: "#vendors-list-title",
            P_Vendor_List: "#vendors-list",
            P_Vendor_Content: "#vendor-list-content",
            P_Vendor_Container: "#vendors-list-container",
            P_Ven_Bx: "vendor-box",
            P_Ven_Name: ".vendor-title",
            P_Ven_Link: ".vendor-privacy-notice",
            P_Ven_Ctgl: "ot-vendor-consent-tgl",
            P_Ven_Ltgl: "ot-leg-int-tgl",
            P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
            P_Ven_Opts: ".vendor-options",
            P_Triangle: "#ot-triangle",
            P_Fltr_Modal: "#ot-filter-modal",
            P_Fltr_Options: ".ot-group-options",
            P_Fltr_Option: ".ot-group-option",
            P_Select_Cntr: "#select-all-container",
            P_Host_Cntr: "#hosts-list-container",
            P_Host_Hdr: ".host-info",
            P_Host_Desc: ".host-description",
            P_Host_Opt: ".host-option-group",
            P_Host_Info: ".vendor-host",
            P_Ven_Dets: ".vendor-purpose-groups",
            P_Ven_Disc: ".ot-ven-disc",
            P_Gven_List: "#ot-gn-venlst",
            P_Arrw_Cntr: ".ot-arrow-container",
            P_Li_Hdr: ".leg-int-header",
            P_Li_Title: ".leg-int-title",
            P_Acc_Txt: ".accordion-text",
            P_Tgl_Cntr: ".ot-toggle-group",
            P_CBx_Cntr: ".ot-chkbox-container",
            P_Host_Title: ".host-title",
            P_Leg_Select_All: ".leg-int-sel-all-hdr",
            P_Leg_Header: ".leg-int-hdr",
            P_Cnsnt_Header: ".consent-hdr",
            P_Acc_Header: ".accordion-header",
            P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
            P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
            P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
            P_Sel_All_Host_El: "select-all-hosts-input-container",
            P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
            P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
            P_c_Name: "cookie-name-container",
            P_c_Host: "cookie-host-container",
            P_c_Duration: "cookie-duration-container",
            P_c_Type: "cookie-type-container",
            P_c_Category: "cookie-category-container",
            P_c_Desc: "cookie-description-container",
            P_Host_View_Cookies: ".host-view-cookies",
            P_Vendor_CheckBx: "vendor-chkbox",
            P_Vendor_LegCheckBx: "vendor-leg-chkbox",
            P_Host_UI: "hosts-list",
            P_Host_Cnt: "host-list-content",
            P_Host_Bx: "host-box",
            P_Ven_Lst_Cntr: ".category-vendors-list-container",
            P_Host_Lst_cntr: ".category-host-list-container",
            P_Subgrp_Desc: ".cookie-subgroups-description-legal",
            P_Subgp_ul: ".cookie-subgroups",
            P_Subgrp_li: ".cookie-subgroup",
            P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
            P_Active_Menu: "active-group",
            P_Tab_Grp_Hdr: "group-toggle",
            P_Search_Cntr: "#search-container",
            P_Clr_Fltr_Txt: "#clear-filters-handler p"
        };

    function Ot() {}
    var Gt, Dt = new(Ot.prototype.initializeBannerVariables = function(e) {
            var t, o = e.DomainData;
            bt.iabType = o.IabType, t = o.PCTemplateUpgrade, Bt = t ? Vt : Nt, bt.init(e), ot.showGeneralVendors = Ct.GeneralVendorsEnabled && Ct.GeneralVendors.length && Ct.PCTemplateUpgrade, ot.genVenOptOutEnabled = ot.showGeneralVendors && Ct.GenVenOptOut, _t.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
        }, Ot.prototype.initializeVendorInOverriddenVendors = function(e) {
            Ct.OverriddenVendors[e] = {
                disabledCP: [],
                disabledLIP: [],
                active: !0,
                legInt: !1,
                consent: !1
            }
        }, Ot.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
            var s = Ct.GlobalRestrictions,
                r = Ct.OverriddenVendors;
            switch (r[t] || this.initializeVendorInOverriddenVendors(t), r[t].disabledCP || (r[t].disabledCP = []), r[t].disabledLIP || (r[t].disabledLIP = []), s[o]) {
                case D.Disabled:
                    n ? r[t].disabledCP.push(o) : r[t].disabledLIP.push(o);
                    break;
                case D.Consent:
                    n ? r[t].consent = !0 : (r[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                    break;
                case D.LegInt:
                    n ? (r[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : r[t].legInt = !0
            }
        }, Ot.prototype.checkFlexiblePurpose = function(e, t, o, n) {
            e.flexiblePurposes.includes(o) ? (n ? Ct.OverriddenVendors[t].legInt = !0 : Ct.OverriddenVendors[t].consent = !0, Ct.Publisher.restrictions[o][t] = n ? D.LegInt : D.Consent) : Ct.Publisher.restrictions[o][t] = D.Disabled
        }, Ot.prototype.removeInActiveVendorsForTcf = function(r) {
            var i = this,
                l = ot.iabData.vendorListVersion,
                e = Ct.Publisher,
                a = Ct.GlobalRestrictionEnabled,
                c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
            Object.keys(r.vendors).forEach(function(t) {
                var o = r.vendors[t];
                a && o.iab2GVLVersion > l && (o.purposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                }), o.legIntPurposes.forEach(function(e) {
                    i.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                }));
                var e = !1;
                Ct.IsIabThirdPartyCookieEnabled || (bt.legIntSettings.PAllowLI ? Ct.OverriddenVendors[t] && !Ct.OverriddenVendors[t].active && (e = !0) : -1 < Ct.Vendors.indexOf(Number(t)) && (e = !0));
                var n = !o.purposes.length && !o.flexiblePurposes.length;
                Ct.OverriddenVendors[t] && !Ct.OverriddenVendors[t].consent && (n = !0);
                var s = !0;
                bt.legIntSettings.PAllowLI && (!o.legIntPurposes.length || Ct.OverriddenVendors[t] && !Ct.OverriddenVendors[t].legInt || (s = !1)), !n || !s || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0), !a && c && o.iab2GVLVersion > l && (e = !0), e && delete r.vendors[t]
            })
        }, Ot.prototype.setPublisherRestrictions = function() {
            var e = Ct.Publisher;
            if (e && e.restrictions) {
                var i = this.iabStringSDK(),
                    t = e.restrictions,
                    l = ot.iabData,
                    a = ot.oneTrustIABConsent.vendorList.vendors;
                Object.keys(t).forEach(function(n) {
                    var s, r = t[n],
                        e = bt.iabGroups.purposes[n];
                    e && (s = {
                        description: e.description,
                        purposeId: e.id,
                        purposeName: e.name
                    }), Object.keys(r).forEach(function(e) {
                        if (ot.vendorsSetting[e]) {
                            var t = ot.vendorsSetting[e].arrIndex;
                            1 === r[e] && -1 === a[e].purposes.indexOf(Number(n)) ? l.vendors[t].purposes.push(s) : 2 === r[e] && -1 === a[e].legIntPurposes.indexOf(Number(n)) && l.vendors[t].legIntPurposes.push(s);
                            var o = i.purposeRestriction(Number(n), r[e]);
                            ot.tcModel.publisherRestrictions.add(Number(e), o)
                        }
                    })
                })
            }
        }, Ot.prototype.populateVendorListTCF = function() {
            return a(this, void 0, void 0, function() {
                var t, o, n, s, r, i, l, a, c;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = this.iabStringSDK(), o = ot.iabData, n = _t.updateCorrectIABUrl(o.globalVendorListUrl), s = !this.isIABCrossConsentEnabled(), _t.checkMobileOfflineRequest(_t.getBannerVersionUrl()) ? [3, 1] : (bt.mobileOnlineURL.push(n), r = t.gvl(n, ot.gvlObj), [3, 3]);
                        case 1:
                            return l = (i = t).gvl, a = [null], [4, _t.otFetchOfflineFile(Pt.getRelativeURL(n, !0))];
                        case 2:
                            r = l.apply(i, a.concat([e.sent()])), e.label = 3;
                        case 3:
                            return this.removeInActiveVendorsForTcf(r), ot.oneTrustIABConsent.vendorList = r, this.assignIABDataWithGlobalVendorList(r), c = ot, [4, t.tcModel(r)];
                        case 4:
                            c.tcModel = e.sent(), s && this.setPublisherRestrictions(), ot.tcModel.cmpId = parseInt(o.cmpId), ot.tcModel.cmpVersion = parseInt(o.cmpVersion);
                            try {
                                ot.tcModel.consentLanguage = ot.consentLanguage
                            } catch (e) {
                                ot.tcModel.consentLanguage = "EN"
                            }
                            return ot.tcModel.consentScreen = parseInt(o.consentScreen), ot.tcModel.isServiceSpecific = s, ot.tcModel.purposeOneTreatment = bt.purposeOneTreatment, Ct.PublisherCC ? ot.tcModel.publisherCountryCode = Ct.PublisherCC : ot.userLocation.country && (ot.tcModel.publisherCountryCode = ot.userLocation.country), ot.cmpApi = t.cmpApi(ot.tcModel.cmpId, ot.tcModel.cmpVersion, s, Ct.UseGoogleVendors ? {
                                getTCData: this.addtlConsentString,
                                getInAppTCData: this.addtlConsentString,
                                addEventListener: this.addtlConsentString
                            } : void 0), null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(), [2]
                    }
                })
            })
        }, Ot.prototype.resetTCModel = function() {
            var e = this.iabStringSDK(),
                t = ot.tcModel.clone();
            if (t.unsetAll(), bt.legIntSettings.PAllowLI) {
                var o = bt.consentableIabGrps.filter(function(e) {
                        return e.HasLegIntOptOut && e.Type === lt
                    }).map(function(e) {
                        return parseInt(bt.iabGrpIdMap[e.CustomGroupId])
                    }),
                    n = Object.keys(ot.vendorsSetting).filter(function(e) {
                        return ot.vendorsSetting[e].legInt
                    }).map(function(e) {
                        return parseInt(e)
                    });
                t.purposeLegitimateInterests.set(o), t.vendorLegitimateInterests.set(n), t.isServiceSpecific && t.publisherLegitimateInterests.set(o)
            }
            ot.cmpApi.update(e.tcString().encode(t), !0)
        }, Ot.prototype.addtlConsentString = function(e, t, o) {
            t && (t.addtlConsent = "" + ot.addtlConsentVersion + (ot.isAddtlConsent ? ot.addtlVendors.vendorConsent.join(".") : "")), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
        }, Ot.prototype.setIabData = function() {
            ot.iabData = nt.moduleInitializer.IabV2Data, ot.iabData.consentLanguage = ot.consentLanguage
        }, Ot.prototype.assignIABDataWithGlobalVendorList = function(o) {
            var s = Ct.OverriddenVendors;
            ot.iabData.vendorListVersion = o.vendorListVersion, ot.iabData.vendors = [], Object.keys(o.vendors).forEach(function(n) {
                ot.vendorsSetting[n] = {
                    consent: !0,
                    legInt: !0,
                    arrIndex: 0
                };
                var e = {},
                    t = o.vendors[n];
                e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, e.cookieMaxAge = Pt.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null, bt.legIntSettings.PAllowLI && (!s[n] || s[n].legInt) && (s[n] || t.legIntPurposes.length) || (ot.vendorsSetting[n].legInt = !1), s[n] && !s[n].consent || !s[n] && !t.purposes.length && !t.flexiblePurposes.length ? ot.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (ot.vendorsSetting[n].consent = !1), e.features = t.features.map(function(e) {
                    var t, o = bt.iabGroups.features[e];
                    return o && (t = {
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), t
                }), e.specialFeatures = o.vendors[n].specialFeatures.reduce(function(e, t) {
                    var o = bt.iabGroups.specialFeatures[t];
                    return o && e.push({
                        description: o.description,
                        featureId: o.id,
                        featureName: o.name
                    }), e
                }, []), e.purposes = o.vendors[n].purposes.reduce(function(e, t) {
                    var o = bt.iabGroups.purposes[t];
                    return !o || s[n] && s[n].disabledCP && -1 !== s[n].disabledCP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.legIntPurposes = o.vendors[n].legIntPurposes.reduce(function(e, t) {
                    var o = bt.iabGroups.purposes[t];
                    return !o || s[n] && s[n].disabledLIP && -1 !== s[n].disabledLIP.indexOf(t) || e.push({
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), e
                }, []), e.specialPurposes = t.specialPurposes.map(function(e) {
                    var t, o = bt.iabGroups.specialPurposes[e];
                    return o && (t = {
                        description: o.description,
                        purposeId: o.id,
                        purposeName: o.name
                    }), t
                }), ot.iabData.vendors.push(e), ot.vendorsSetting[n].arrIndex = ot.iabData.vendors.length - 1
            })
        }, Ot.prototype.populateIABCookies = function() {
            return a(this, void 0, void 0, function() {
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!this.isIABCrossConsentEnabled()) return [3, 5];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(Se.EU_CONSENT, "", 0, !0)];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                        case 4:
                            return [3, 6];
                        case 5:
                            Dt.needReconsent() || this.setIABCookieData(), e.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, Ot.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
            var s = Ct.iabThirdPartyConsentUrl;
            try {
                if (s && document.body) return this.updateThirdPartyConsent(s, e, t, o, n);
                throw new ReferenceError
            } catch (e) {
                throw e
            }
        }, Ot.prototype.setIABCookieData = function() {
            ot.oneTrustIABConsent.IABCookieValue = vt.getCookie(Se.EU_PUB_CONSENT)
        }, Ot.prototype.updateThirdPartyConsent = function(n, s, r, i, l) {
            return a(this, void 0, void 0, function() {
                var t, o;
                return u(this, function(e) {
                    return t = window.location.protocol + "//" + n + "/?name=" + s + "&value=" + r + "&expire=" + i + "&isFirstRequest=" + l, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : ((o = document.createElement("iframe")).style.display = "none", o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                        o.onload = function() {
                            bt.thirdPartyiFrameResolve(), bt.thirdPartyiFrameLoaded = !0, e()
                        }, o.onerror = function() {
                            throw bt.thirdPartyiFrameResolve(), bt.thirdPartyiFrameLoaded = !0, e(), new URIError
                        }
                    })])
                })
            })
        }, Ot.prototype.setIABVendor = function(n) {
            if (void 0 === n && (n = !0), ot.iabData.vendors.forEach(function(e) {
                    var t = e.vendorId;
                    if (bt.legIntSettings.PAllowLI) {
                        var o = !ot.vendorsSetting[t].consent;
                        ot.oneTrustIABConsent.vendors.push(t.toString() + ":" + (o ? "false" : n)), ot.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + ot.vendorsSetting[t].legInt)
                    } else ot.oneTrustIABConsent.legIntVendors = [], ot.oneTrustIABConsent.vendors.push(t.toString() + ":" + n)
                }), Ct.UseGoogleVendors) {
                var t = ot.addtlVendors;
                Object.keys(ot.addtlVendorsList).forEach(function(e) {
                    n && (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
                })
            }
        }, Ot.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
            var e = this.getIABCrossConsentflagData();
            Ct.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(Ct.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
        }, Ot.prototype.isIABCrossConsentEnabled = function() {
            return "true" === this.getIABCrossConsentflagData()
        }, Ot.prototype.getIABCrossConsentflagData = function() {
            return vt.readCookieParam(Se.OPTANON_CONSENT, Pe)
        }, Ot.prototype.setGeolocationInCookies = function() {
            var e = vt.readCookieParam(Se.OPTANON_CONSENT, me);
            if (ot.userLocation && !e && this.isAlertBoxClosedAndValid()) {
                var t = ot.userLocation.country + ";" + ot.userLocation.state;
                this.setUpdateGeolocationCookiesData(t)
            } else this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData("")
        }, Ot.prototype.iabStringSDK = function() {
            var e = nt.moduleInitializer.otIABModuleData;
            if (Ct.IsIabEnabled && e) return {
                gvl: e.tcfSdkRef.gvl,
                tcModel: e.tcfSdkRef.tcModel,
                tcString: e.tcfSdkRef.tcString,
                cmpApi: e.tcfSdkRef.cmpApi,
                purposeRestriction: e.tcfSdkRef.purposeRestriction
            }
        }, Ot.prototype.setUpdateGeolocationCookiesData = function(e) {
            vt.writeCookieParam(Se.OPTANON_CONSENT, me, e)
        }, Ot.prototype.reconsentRequired = function() {
            return (nt.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
        }, Ot.prototype.awaitingReconsent = function() {
            return "true" === vt.readCookieParam(Se.OPTANON_CONSENT, be)
        }, Ot.prototype.needReconsent = function() {
            var e = this.alertBoxCloseDate(),
                t = Ct.LastReconsentDate;
            return e && t && new Date(t) > new Date(e)
        }, Ot.prototype.updateCrossConsentCookie = function(e) {
            vt.writeCookieParam(Se.OPTANON_CONSENT, Pe, e)
        }, Ot.prototype.alertBoxCloseDate = function() {
            return vt.getCookie(Se.ALERT_BOX_CLOSED)
        }, Ot.prototype.isAlertBoxClosedAndValid = function() {
            return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
        }, Ot.prototype.generateLegIntButtonElements = function(e, t, o) {
            void 0 === o && (o = !1);
            var n = e ? "display:none;" : "";
            return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + Ct.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                       <span>' + (e ? bt.legIntSettings.PObjectLegIntText : bt.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button class="ot-remove-objection-handler" style="color:' + Ct.pcButtonColor + "; " + n + '">' + bt.legIntSettings.PRemoveObjectionText + "</button>\n                </div>\n        "
        }, Ot.prototype.syncAlertBoxCookie = function(e) {
            var t = Ct.ReconsentFrequencyDays;
            vt.setCookie(Se.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
        }, Ot.prototype.syncCookieExpiry = function() {
            if (ot.syncRequired) {
                var e = Ct.ReconsentFrequencyDays,
                    t = vt.getCookie(Se.ALERT_BOX_CLOSED),
                    o = vt.getCookie(Se.OPTANON_CONSENT);
                vt.setCookie(Se.OPTANON_CONSENT, o, e, !1, new Date(t)), Dt.needReconsent() && vt.removeAlertBox();
                var n = vt.getCookie(Se.EU_PUB_CONSENT);
                n && (Dt.isIABCrossConsentEnabled() ? vt.removeIab2() : vt.setCookie(Se.EU_PUB_CONSENT, n, e, !1, new Date(t)));
                var s = vt.getCookie(Se.ADDITIONAL_CONSENT_STRING);
                s && vt.setCookie(Se.ADDITIONAL_CONSENT_STRING, s, e, !1, new Date(t))
            }
        }, Ot.prototype.syncOtPreviewCookie = function() {
            var e = vt.getCookie(Se.OT_PREVIEW);
            e && vt.setCookie(Se.OT_PREVIEW, e, Ct.ReconsentFrequencyDays, !1)
        }, Ot.prototype.dispatchConsentEvent = function() {
            window.dispatchEvent(new CustomEvent("OTConsentApplied", {
                OTConsentApplied: "yes"
            }))
        }, Ot),
        Ht = (Mt.prototype.isAlwaysActiveGroup = function(e) {
            if (this.getGrpStatus(e)) {
                var t = this.getGrpStatus(e).toLowerCase();
                return e.Parent && t !== xe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === xe
            }
            return !0
        }, Mt.prototype.getGrpStatus = function(e) {
            return e && e.Status ? bt.DNTEnabled && e.IsDntEnabled ? Ne : e.Status : ""
        }, Mt.prototype.getParentGroup = function(t) {
            if (t) {
                var e = Ct.Groups.filter(function(e) {
                    return e.OptanonGroupId === t
                });
                return 0 < e.length ? e[0] : null
            }
            return null
        }, Mt.prototype.checkIfGroupHasConsent = function(t) {
            var e = ot.groupsConsent,
                o = Pt.findIndex(e, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                });
            return -1 < o && "1" === e[o].split(":")[1]
        }, Mt.prototype.checkIsActiveByDefault = function(e) {
            if (this.getGrpStatus(e)) {
                var t = this.getGrpStatus(e).toLowerCase();
                return e.Parent && t !== xe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === xe || t === Be || t === Ee || t === Ne && !bt.DNTEnabled
            }
            return !0
        }, Mt.prototype.getGroupById = function(e) {
            for (var t = null, o = 0, n = Ct.Groups; o < n.length; o++) {
                for (var s = n[o], r = 0, i = h(s.SubGroups, [s]); r < i.length; r++) {
                    var l = i[r];
                    if (l.CustomGroupId === e) {
                        t = l;
                        break
                    }
                }
                if (t) break
            }
            return t
        }, Mt.prototype.isSoftOptInGrp = function(e) {
            if (e) {
                var t = e && !e.Parent ? e : Gt.getParentGroup(e.Parent);
                return "inactive landingpage" === Gt.getGrpStatus(t).toLowerCase()
            }
            return !1
        }, Mt.prototype.isOptInGrp = function(e) {
            return !!e && "inactive" === Gt.getGrpStatus(e).toLowerCase()
        }, Mt);

    function Mt() {}
    var Ft, Rt = (qt.prototype.ensureConsentId = function(e, t) {
        var o, n = !1,
            s = vt.readCookieParam(Se.OPTANON_CONSENT, Ce);
        if (o = !e && t ? (n = !0, 1) : 0, s) {
            var r = parseInt(vt.readCookieParam(Se.OPTANON_CONSENT, ve), 10);
            isNaN(r) || (o = t ? ++r : r, n = !1)
        } else s = Pt.generateUUID(), vt.writeCookieParam(Se.OPTANON_CONSENT, Ce, s);
        return vt.writeCookieParam(Se.OPTANON_CONSENT, ve, o), {
            id: s,
            count: o,
            addDfltInt: n
        }
    }, qt.prototype.isAnonymousConsent = function() {
        var e = !0,
            t = ot.dsParams;
        return t && t.hasOwnProperty("isAnonymous") && (e = t.isAnonymous), e
    }, qt.prototype.isAuthUsr = function(e) {
        ot.consentPreferences ? vt.writeCookieParam(Se.OPTANON_CONSENT, "iType", "") : vt.writeCookieParam(Se.OPTANON_CONSENT, "iType", "" + M[e])
    }, qt.prototype.createConsentTxn = function(e, t, o, n) {
        void 0 === t && (t = ""), void 0 === o && (o = !1), void 0 === n && (n = !0);
        var s = this.ensureConsentId(e, n),
            r = Ct.ConsentIntegration;
        if (r.ConsentApi && r.RequestInformation && s.id) {
            var i = nt.moduleInitializer,
                l = {
                    requestInformation: r.RequestInformation,
                    identifier: s.id,
                    customPayload: {
                        Interaction: s.count,
                        AddDefaultInteraction: s.addDfltInt
                    },
                    isAnonymous: this.isAnonymousConsent(),
                    test: i.ScriptType === Ge || i.ScriptType === De,
                    purposes: this.getConsetPurposes(e),
                    dsDataElements: {}
                };
            ot.isV2Stub && (l.syncGroup = ot.syncGrpId, "IAB2" !== bt.iabType || Dt.isIABCrossConsentEnabled() || (l.tcStringV2 = vt.getCookie(Se.EU_PUB_CONSENT)));
            var a = Gt.getGroupById(Ct.AdvancedAnalyticsCategory);
            if (a && this.canSendAdvancedAnalytics(l.purposes, a) && (l.dsDataElements = {
                    InteractionType: t,
                    Country: ot && ot.userLocation ? ot.userLocation.country : "",
                    UserAgent: window.navigator.userAgent
                }), !i.MobileSDK && n && l.purposes.length) {
                var c = JSON.stringify(l);
                e && navigator.sendBeacon ? (navigator.sendBeacon(r.ConsentApi, c), Dt.dispatchConsentEvent()) : !o && ot.consentInteractionType === t || (ot.isV2Stub && t && this.isAuthUsr(t), St.ajax({
                    url: r.ConsentApi,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(l),
                    sync: e,
                    success: function() {
                        Dt.dispatchConsentEvent()
                    },
                    error: function() {
                        Dt.dispatchConsentEvent()
                    }
                }))
            }
            bt.pubDomainData.ConsentIntegrationData = {
                consentApi: r.ConsentApi,
                consentPayload: l
            }
        }
        ot.consentInteractionType = t
    }, qt.prototype.getGrpDetails = function(e, r) {
        var i = [];
        return e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = "true" === t[1] ? "1" : "0",
                s = Ft.getOptanonIdForIabGroup(o, r);
            i.push(s + ":" + n)
        }), i
    }, qt.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === m.Purpose ? o = "IABV2_" + e : t === m.SpecialFeature && (o = "ISFV2_" + e), o
    }, qt.prototype.getConsetPurposes = function(s) {
        var e, t, r = this,
            i = [],
            o = [],
            n = ot.oneTrustIABConsent;
        return e = n && n.purpose ? this.getGrpDetails(n.purpose, m.Purpose) : [], t = n && n.specialFeatures ? this.getGrpDetails(n.specialFeatures, m.SpecialFeature) : [], o = h(n.specialPurposes, n.features), h(ot.groupsConsent, e, t).forEach(function(e) {
            var t = e.split(":"),
                o = Gt.getGroupById(t[0]);
            if (o && o.PurposeId) {
                var n = void 0;
                n = o.Status === xe ? _e : ot.bannerCloseSource === f.BannerCloseButton && o.Status === Ve || s ? we : r.getTxnType(t[1]), i.push({
                    Id: o.PurposeId,
                    TransactionType: n
                })
            }
        }), o.forEach(function(e) {
            e.purposeId && i.push({
                Id: e.purposeId,
                TransactionType: _e
            })
        }), ot.bannerCloseSource = f.Unknown, i
    }, qt.prototype.getTxnType = function(e) {
        return "0" === e ? Le : Ie
    }, qt.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [Ie, _e];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }, qt.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }, qt);

    function qt() {}
    var jt, Ut = (zt.prototype.isIabCookieValid = function() {
        var e = null;
        switch (bt.iabType) {
            case "IAB2":
                e = vt.getCookie("eupubconsent-v2")
        }
        return null !== e
    }, zt.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (vt.removeAlertBox(), vt.removeIab1())
    }, zt.prototype.initializeIABModule = function() {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return Ct.IsIabEnabled ? (nt.moduleInitializer.otIABModuleData = window.otIabModule, Dt.setIabData(), [4, Dt.populateVendorListTCF()]) : [3, 2];
                    case 1:
                        return e.sent(), Dt.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), Dt.populateIABCookies(), Ct.UseGoogleVendors && this.removeInActiveAddtlVendors(), [3, 3];
                    case 2:
                        vt.removeIab1(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, zt.prototype.removeInActiveAddtlVendors = function() {
        var e = Ct.OverridenGoogleVendors;
        for (var t in ot.addtlVendorsList) e && e[t] && !e[t].active && delete ot.addtlVendorsList[t]
    }, zt.prototype.getIABConsentData = function() {
        var e = ot.oneTrustIABConsent,
            t = Dt.iabStringSDK().tcString();
        ot.tcModel.unsetAllPurposeConsents(), ot.tcModel.unsetAllVendorConsents(), ot.tcModel.unsetAllVendorLegitimateInterests(), ot.tcModel.unsetAllSpecialFeatureOptins(), ot.tcModel.unsetAllPurposeLegitimateInterests(), ot.tcModel.publisherConsents.empty(), ot.tcModel.publisherLegitimateInterests.empty(), ot.tcModel.purposeConsents.set(Pt.getActiveIdArray(e.purpose)), ot.tcModel.publisherConsents.set(Pt.getActiveIdArray(e.purpose));
        var o = bt.legIntSettings.PAllowLI ? Pt.getActiveIdArray(e.legimateInterest) : [];
        ot.tcModel.purposeLegitimateInterests.set(o), ot.tcModel.publisherLegitimateInterests.set(o), ot.tcModel.vendorConsents.set(Pt.getActiveIdArray(Pt.distinctArray(e.vendors))), bt.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []), ot.tcModel.vendorLegitimateInterests.set(Pt.getActiveIdArray(Pt.distinctArray(e.legIntVendors))), ot.tcModel.specialFeatureOptins.set(Pt.getActiveIdArray(e.specialFeatures));
        var n = t.encode(ot.tcModel);
        return ot.cmpApi.update(n, !1), n
    }, zt.prototype.decodeTCString = function(e) {
        return Dt.iabStringSDK().tcString().decode(e)
    }, zt.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }), e.apply(this, o)
    }, zt.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }), e.apply(this, t)
    }, zt.prototype.populateVendorAndPurposeFromCookieData = function() {
        var s = ot.oneTrustIABConsent,
            e = jt.decodeTCString(s.IABCookieValue),
            r = {},
            i = {};
        bt.iabGrps.forEach(function(e) {
            e.Type === lt ? r[bt.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === at && (i[bt.iabGrpIdMap[e.CustomGroupId]] = e)
        });
        var l = [];
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            ot.vendorsSetting[t] && ot.vendorsSetting[t].consent || !e || (l.push(t), o = !1), s.vendors.push(t + ":" + o)
        }), e.vendorConsents.unset(l), l = [], e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            ot.vendorsSetting[t] && ot.vendorsSetting[t].legInt || !e || (l.push(t), o = !1), s.legIntVendors.push(t + ":" + o)
        }), e.vendorLegitimateInterests.unset(l), l = [], e.purposeConsents.forEach(function(e, o) {
            var t = e;
            r[o] && r[o].HasConsentOptOut || !e || (l.push(o), t = !1);
            var n = Pt.findIndex(s.purpose, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? s.purpose.push(o + ":" + t) : s.purpose[n] = o + ":" + t
        }), e.purposeConsents.unset(l), e.publisherConsents.unset(l), l = [], e.specialFeatureOptins.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasConsentOptOut || !e || (l.push(o), t = !1);
            var n = Pt.findIndex(s.specialFeatures, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? s.specialFeatures.push(o + ":" + t) : s.specialFeatures[n] = o + ":" + t
        }), e.specialFeatureOptins.unset(l), l = [], e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e;
            r[o] && r[o].HasLegIntOptOut && bt.legIntSettings.PAllowLI || !e || (l.push(o), t = !1);
            var n = Pt.findIndex(s.legimateInterest, function(e, t) {
                return e.split(":")[0] === o.toString()
            }); - 1 === n ? s.legimateInterest.push(o + ":" + t) : s.legimateInterest[n] = o + ":" + t
        }), e.purposeLegitimateInterests.unset(l), e.publisherLegitimateInterests.unset(l), this.syncBundleAndStack(), e.gvl = ot.tcModel.gvl, e.isServiceSpecific = !Dt.isIABCrossConsentEnabled(), ot.tcModel = e;
        var t = Dt.iabStringSDK().tcString().encode(e);
        Dt.isAlertBoxClosedAndValid() ? (s.IABCookieValue !== t && (s.IABCookieValue = t, Dt.isIABCrossConsentEnabled() ? Dt.setIAB3rdPartyCookie(Se.EU_CONSENT, s.IABCookieValue, Ct.ReconsentFrequencyDays, !1) : vt.setCookie(Se.EU_PUB_CONSENT, s.IABCookieValue, Ct.ReconsentFrequencyDays)), ot.cmpApi.update(t, !1)) : Dt.resetTCModel()
    }, zt.prototype.syncBundleAndStack = function() {
        var e = vt.readCookieParam(Se.OPTANON_CONSENT, "groups");
        ot.groupsConsent = Pt.strToArr(e), Ct.Groups.forEach(function(t) {
            if (t.Type === st || t.Type === dt) {
                var e = _t.isBundleOrStackActive(t),
                    o = Pt.findIndex(ot.groupsConsent, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    }),
                    n = t.CustomGroupId + ":" + Number(e); - 1 < o ? ot.groupsConsent[o] = n : ot.groupsConsent.push(n)
            }
        }), vt.writeCookieParam(Se.OPTANON_CONSENT, "groups", ot.groupsConsent.join(","))
    }, zt.prototype.populateGoogleConsent = function() {
        if (Ct.UseGoogleVendors) {
            var e = vt.getCookie(Se.ADDITIONAL_CONSENT_STRING);
            e && (ot.isAddtlConsent = !0, ot.addtlVendors.vendorConsent = e.replace(ot.addtlConsentVersion, "").split("."))
        }
    }, zt.prototype.isInitIABCookieData = function(e) {
        return "init" === e || Dt.needReconsent()
    }, zt.prototype.updateFromGlobalConsent = function(e) {
        var t = ot.oneTrustIABConsent;
        t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], jt.populateVendorAndPurposeFromCookieData(), vt.setCookie(Se.EU_PUB_CONSENT, "", -1)
    }, zt);

    function zt() {}
    var Wt, Kt = (Yt.prototype.writeHstParam = function(e, t) {
        void 0 === t && (t = null), vt.writeCookieParam(e, "hosts", Pt.arrToStr(t || ot.hostsConsent))
    }, Yt.prototype.writeGenVenCookieParam = function(e) {
        var t = Ct.GeneralVendors,
            o = ot.genVendorsConsent,
            n = "";
        t.forEach(function(e) {
            n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
        }), vt.writeCookieParam(e, "genVendors", n)
    }, Yt.prototype.updateGroupsInCookie = function(e, t) {
        void 0 === t && (t = null), vt.writeCookieParam(e, "groups", Pt.arrToStr(t || ot.groupsConsent))
    }, Yt.prototype.writeGrpParam = function(e, t) {
        void 0 === t && (t = null), this.updateGroupsInCookie(e, t), Ct.IsIabEnabled && Dt.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
    }, Yt.prototype.insertOrUpdateIabCookies = function() {
        var e = ot.oneTrustIABConsent;
        if (e.purpose && e.vendors) {
            ot.isAddtlConsent = Ct.UseGoogleVendors, e.IABCookieValue = jt.getIABConsentData();
            var t = Ct.ReconsentFrequencyDays;
            Dt.isIABCrossConsentEnabled() ? Dt.setIAB3rdPartyCookie(Se.EU_CONSENT, e.IABCookieValue, t, !1) : (vt.setCookie(Se.EU_PUB_CONSENT, e.IABCookieValue, t), Ct.UseGoogleVendors && vt.setCookie(Se.ADDITIONAL_CONSENT_STRING, "" + ot.addtlConsentVersion + ot.addtlVendors.vendorConsent.join("."), t))
        }
    }, Yt);

    function Yt() {}
    var Jt, Qt = (Zt.prototype.initGenVendorConsent = function() {
        var n = this;
        if (Ct.GenVenOptOut) {
            var e = bt.consentableGrps,
                t = vt.readCookieParam(Se.OPTANON_CONSENT, "genVendors");
            t ? (ot.genVendorsConsent = {}, t.split(",").forEach(function(e) {
                if (e) {
                    var t = e.split(":");
                    "1" === t[1] && (ot.genVendorsConsent[t[0]] = !0)
                }
            })) : (ot.genVendorsConsent = {}, e.forEach(function(e) {
                var o = ot.syncRequired ? Gt.checkIfGroupHasConsent(e) : Gt.checkIsActiveByDefault(e);
                e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                    ot.genVendorsConsent[e] = t || o
                })
            }))
        } else ot.genVendorsConsent = {}, Wt.writeGenVenCookieParam(Se.OPTANON_CONSENT)
    }, Zt.prototype.populateGenVendorLists = function() {
        bt.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (Gt.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                ot.alwaysActiveGenVendors.push(e)
            }) : Gt.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                ot.optInGenVendors.push(e)
            }) : Gt.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                ot.optInGenVendors.includes(e) || ot.softOptInGenVendors.push(e)
            }))
        })
    }, Zt.prototype.updateGenVendorStatus = function(e, t) {
        ot.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }, Zt.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return ot.alwaysActiveGenVendors.includes(e)
    }, Zt);

    function Zt() {}
    var Xt, $t = (eo.prototype.synchroniseCookieGroupData = function(e) {
        var t = vt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            i = Pt.strToArr(t),
            l = Pt.strToArr(t.replace(/:0|:1/g, "")),
            a = Dt.needReconsent(),
            c = !Dt.isAlertBoxClosedAndValid(),
            d = !1,
            u = !1;
        e.forEach(function(e) {
            var t = e.CustomGroupId,
                o = e.Type === st || e.Type === dt;
            if (-1 === Pt.indexOf(l, t)) {
                if (o && Ct.IsIabEnabled) return;
                var n;
                n = e.Type === st ? _t.isBundleOrStackActive(e, i) : (d = !0, Gt.checkIsActiveByDefault(e)), u = !0, i.push(t + (n ? ":1" : ":0"))
            } else if (bt.gpcEnabled && e.IsGpcEnabled && (c || a) && -1 < (s = i.indexOf(t + ":1")) && (u = !0, i[s] = t + ":0}"), a && "false" === Dt.getIABCrossConsentflagData() && o) {
                var s, r = _t.isBundleOrStackActive(e, i); - 1 < (s = i.indexOf(t + ":" + (r ? "0" : "1"))) && (u = !0, i[s] = t + (r ? ":1" : ":0"))
            }
        });
        for (var o = i.length, n = function() {
                var t = i[o].replace(/:0|:1/g, "");
                Ct.Groups.some(function(e) {
                    return (!a || e.Type !== dt) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                        return e.CustomGroupId === t
                    }))
                }) || (u = !0, i.splice(o, 1))
            }; o--;) n();
        u && (ot.fireOnetrustGrp = !0, Wt.updateGroupsInCookie(Se.OPTANON_CONSENT, i), ot.syncRequired && d && vt.removeAlertBox())
    }, eo.prototype.groupHasConsent = function(t) {
        var e = Pt.strToArr(vt.readCookieParam(Se.OPTANON_CONSENT, "groups")),
            o = Pt.findIndex(e, function(e) {
                return e.split(":")[0] === t.CustomGroupId
            });
        return -1 < o && "1" === e[o].split(":")[1]
    }, eo.prototype.synchroniseCookieHostData = function() {
        var n = this,
            e = vt.readCookieParam(Se.OPTANON_CONSENT, "hosts"),
            s = Pt.strToArr(e),
            r = Pt.strToArr(e.replace(/:0|:1/g, "")),
            i = !1;
        Ct.Groups.forEach(function(e) {
            h(e.SubGroups, [e]).forEach(function(o) {
                o.Hosts.length && o.Hosts.forEach(function(e) {
                    if (-1 === Pt.indexOf(r, e.HostId)) {
                        i = !0;
                        var t = ot.syncRequired ? n.groupHasConsent(o) : Gt.checkIsActiveByDefault(o);
                        s.push(e.HostId + (t ? ":1" : ":0"))
                    }
                })
            })
        });
        for (var o = s.length, t = function() {
                var t = s[o].replace(/:0|:1/g, "");
                Ct.Groups.some(function(e) {
                    return h(e.SubGroups, [e]).some(function(e) {
                        return e.Hosts.some(function(e) {
                            return e.HostId === t
                        })
                    })
                }) || (i = !0, s.splice(o, 1))
            }; o--;) t();
        i && (ot.fireOnetrustGrp = !0, Wt.writeHstParam(Se.OPTANON_CONSENT, s))
    }, eo.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }, eo.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            Jt.updateGenVendorStatus(e, t)
        })
    }, eo.prototype.updateHostStatus = function(t, e) {
        var o = Pt.findIndex(ot.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        if (-1 < o) {
            var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
            ot.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
        }
    }, eo.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return ot.oneTrustAlwaysActiveHosts.includes(e)
    }, eo);

    function eo() {}
    var to, oo = function() {
            this.assets = function() {
                return {
                    name: "otCookiePolicy",
                    html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                    css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                    cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                }
            }
        },
        no = (so.prototype.isLandingPage = function() {
            var e = vt.readCookieParam(Se.OPTANON_CONSENT, "landingPath");
            return !e || e === location.href
        }, so.prototype.setLandingPathParam = function(e) {
            vt.writeCookieParam(Se.OPTANON_CONSENT, "landingPath", e)
        }, so);

    function so() {}
    var ro, io = "#onetrust-banner-sdk",
        lo = (ao.prototype.BannerPushDownHandler = function() {
            this.checkIsBrowserIE11OrBelow() || (ro.pushPageDown(io), Lt(window).on("resize", function() {
                "none" !== Lt(io).css("display") && ro.pushPageDown(io)
            }))
        }, ao.prototype.pushPageUp = function() {
            Lt("body").css("top: 0;")
        }, ao.prototype.checkIsBrowserIE11OrBelow = function() {
            var e = window.navigator.userAgent;
            return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
        }, ao.prototype.pushPageDown = function(e) {
            var t = Lt(e).height() + "px";
            Lt(e).show().css(" bottom: auto; position:absolute; top:-" + t), Lt("body").css("position: relative; top:" + t)
        }, ao);

    function ao() {}
    var co, uo = (po.prototype.loadBanner = function() {
        nt.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? Lt(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            Lt(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? Lt(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            Lt(window).trigger("otloadbanner")
        }), bt.pubDomainData.IsBannerLoaded = !0
    }, po.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        co.consentChangedEventMap[t] || (co.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
    }, po.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        bt.ignoreGoogleAnlyticsCall || (void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga && window.ga("send", "event", e, t, o, n)), void 0 !== window.dataLayer && window.dataLayer.constructor === Array && window.dataLayer.push({
            event: "trackOptanonEvent",
            optanonCategory: e,
            optanonAction: t,
            optanonLabel: o,
            optanonValue: n
        })
    }, po.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString();
        e ? vt.setCookie(Se.ALERT_BOX_CLOSED, t, Ct.ReconsentFrequencyDays) : vt.setCookie(Se.ALERT_BOX_CLOSED, t, 0), bt.pagePushedDown && !ro.checkIsBrowserIE11OrBelow() && ro.pushPageUp();
        var o = Lt(".onetrust-pc-dark-filter").el[0];
        o && "none" !== getComputedStyle(o).getPropertyValue("display") && Lt(".onetrust-pc-dark-filter").fadeOut(400)
    }, po.prototype.updateConsentFromCookie = function(t) {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                return t ? (jt.isInitIABCookieData(t) || jt.updateFromGlobalConsent(t), "init" === t && (vt.removeIab1(), Dt.isAlertBoxClosedAndValid() && Dt.resetTCModel(), vt.removeAlertBox())) : (Dt.resetTCModel(), Dt.updateCrossConsentCookie(!1), Dt.setIABCookieData()), co.assetPromise.then(function() {
                    co.loadBanner()
                }), [2]
            })
        })
    }, po);

    function po() {
        var t = this;
        this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        })
    }
    var ko, ho = "opt-out",
        yo = "OneTrust Cookie Consent",
        go = "Banner Auto Close",
        fo = "Banner Close Button",
        bo = "Banner Preferences Saved",
        Co = "Preferences Close Button",
        mo = "Preference Center Opened From Banner",
        vo = "Preference Center Opened From Button",
        Po = "Preference Center Opened From Function",
        Ao = "Preferences Save Settings",
        To = "Vendors List Opened From Function",
        So = "Floating Cookie Settings Open Button",
        Io = "Floating Cookie Settings Close Button",
        Lo = "Preferences Toggle On",
        _o = "Preferences Toggle Off",
        wo = "General Vendor Toggle On",
        xo = "General Vendor Toggle Off",
        Eo = "Host Toggle On",
        Bo = "Host Toggle Off",
        Vo = "Preferences Legitimate Interest Objection",
        No = "Preferences Legitimate Interest Remove Objection",
        Oo = "IAB Vendor Toggle ON",
        Go = "IAB Vendor Toggle Off",
        Do = "IAB Vendor Legitimate Interest Objection",
        Ho = "IAB Vendor Legitimate Interest Remove Objection",
        Mo = (Fo.prototype.getDataLanguageCulture = function() {
            var e = bt.bannerScriptElement;
            return e && e.getAttribute(He) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(He).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
        }, Fo.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
            return e.replace(/\_/, "-")
        }, Fo.prototype.detectDocumentOrBrowserLanguage = function() {
            var e = Pt.convertKeyValueLowerCase(bt.langSwitcherPldr),
                t = this.getUserLanguage().toLowerCase(),
                o = "";
            if (!(o = e[t] || e[t + "-" + t] || (e.default === t ? e.default : null)))
                if (2 === t.length)
                    for (var n = 0; n < Object.keys(e).length; n += 1) {
                        var s = Object.keys(e)[n];
                        if (s.substr(0, 2) === t) {
                            o = e[s];
                            break
                        }
                    } else 2 < t.length && (o = e[t.substr(0, 2)]);
            return o = o || e.default
        }, Fo.prototype.getUserLanguage = function() {
            return bt.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
        }, Fo.prototype.isValidLanguage = function(e, t) {
            var o = Pt.convertKeyValueLowerCase(bt.langSwitcherPldr);
            return !(!o[t] && !o[t + "-" + t] && o.default !== t)
        }, Fo.prototype.getLangJsonUrl = function(e) {
            void 0 === e && (e = null);
            var t = bt.getRegionRule();
            if (e) {
                if (e = e.toLowerCase(), !this.isValidLanguage(t, e)) return null
            } else e = this.getDataLanguageCulture();
            ot.lang = e, ot.consentLanguage = e.substr(0, 2);
            var o = bt.bannerDataParentURL + "/" + t.Id + "/" + e;
            return bt.multiVariantTestingEnabled && (o = bt.bannerDataParentURL + "/" + t.Id + "/variants/" + bt.selectedVariant.Id + "/" + e), o
        }, Fo.prototype.populateLangSwitcherPlhdr = function() {
            var e = bt.getRegionRule(),
                t = e.Variants;
            if (bt.multiVariantTestingEnabled && t) {
                var o = vt.getCookie(Se.SELECTED_VARIANT),
                    n = void 0;
                o ? n = t[Pt.findIndex(t, function(e) {
                    return e.Id === o
                })] : o && n || (n = t[Math.floor(Math.random() * t.length)]), bt.langSwitcherPldr = n.LanguageSwitcherPlaceholder, bt.selectedVariant = n
            } else bt.langSwitcherPldr = e.LanguageSwitcherPlaceholder
        }, Fo);

    function Fo() {}
    var Ro, qo = (jo.prototype.getLangJson = function(e) {
        void 0 === e && (e = null);
        var t = ko.getLangJsonUrl(e);
        return t ? Ro.otFetch(t + ".json") : Promise.resolve(null)
    }, jo.prototype.fetchGvlObj = function() {
        return this.otFetch(nt.moduleInitializer.IabV2Data.globalVendorListUrl)
    }, jo.prototype.fetchGoogleVendors = function() {
        var e = _t.updateCorrectIABUrl(nt.moduleInitializer.GoogleData.googleVendorListUrl);
        return _t.checkMobileOfflineRequest(_t.getBannerVersionUrl()) ? _t.otFetchOfflineFile(Pt.getRelativeURL(e, !0)) : (bt.mobileOnlineURL.push(e), this.otFetch(e))
    }, jo.prototype.getStorageDisclosure = function(t) {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, this.otFetch(t)]
            })
        })
    }, jo.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            _t.jsonp(_t.getBannerVersionUrl() + "/" + t + ".js", e, e)
        })
    }, jo.prototype.getCSBtnContent = function() {
        return a(this, void 0, void 0, function() {
            var t, o, n, s;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Ct.useRTL ? Q.RTL : Q.LTR, ot.csBtnAsset[t] ? [3, 2] : (o = _t.getBannerSDKAssestsUrl() + "/" + (Ct.useRTL ? Fe : Me), n = ot.csBtnAsset, s = t, [4, this.otFetch(o)]);
                    case 1:
                        n[s] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.csBtnAsset[t]]
                }
            })
        })
    }, jo.prototype.getPcContent = function(i) {
        return void 0 === i && (i = !1), a(this, void 0, void 0, function() {
            var t, o, n, s, r;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Ct.useRTL ? Q.RTL : Q.LTR, ot.pcAsset[t] && !i ? [3, 2] : (o = _t.getBannerSDKAssestsUrl(), Ct.PCTemplateUpgrade && (o += "/v2"), n = o + "/" + bt.pcName + (Ct.useRTL ? "Rtl" : "") + ".json", s = ot.pcAsset, r = t, [4, this.otFetch(n)]);
                    case 1:
                        s[r] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.pcAsset[t]]
                }
            })
        })
    }, jo.prototype.getBannerContent = function(r) {
        return void 0 === r && (r = !1), a(this, void 0, void 0, function() {
            var t, o, n, s;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Ct.useRTL ? Q.RTL : Q.LTR, ot.bAsset[t] && !r ? [3, 2] : (o = _t.getBannerSDKAssestsUrl() + "/" + bt.bannerName + (Ct.useRTL ? "Rtl" : "") + ".json", n = ot.bAsset, s = t, [4, this.otFetch(o)]);
                    case 1:
                        n[s] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.bAsset[t]]
                }
            })
        })
    }, jo.prototype.getSyncNtfyContent = function() {
        return a(this, void 0, void 0, function() {
            var t, o, n, s;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = Ct.useRTL ? Q.RTL : Q.LTR, ot.syncNtfyContent[t] ? [3, 2] : (o = _t.getBannerSDKAssestsUrl() + "/otSyncNotification" + (Ct.useRTL ? "Rtl" : "") + ".json", n = ot.syncNtfyContent, s = t, [4, this.otFetch(o)]);
                    case 1:
                        n[s] = e.sent(), e.label = 2;
                    case 2:
                        return [2, ot.syncNtfyContent[t]]
                }
            })
        })
    }, jo.prototype.getConsentProfile = function(e, t) {
        var o = this,
            n = {
                Identifier: e,
                TenantId: ot.tenantId,
                Authorization: t
            };
        return new Promise(function(e) {
            o.getJSON(ot.consentApi, n, e, e)
        })
    }, jo.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }, jo.prototype.otFetch = function(n) {
        return a(this, void 0, void 0, function() {
            var t, o = this;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return _t.checkMobileOfflineRequest(n) ? [4, _t.otFetchOfflineFile(n)] : [3, 2];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return e.trys.push([2, 7, , 8]), bt.mobileOnlineURL.push(n), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                            o.getJSON(n, null, e, e)
                        })];
                    case 3:
                        return [4, fetch(n)];
                    case 4:
                        return [4, e.sent().json()];
                    case 5:
                        return [2, e.sent()];
                    case 6:
                        return [3, 8];
                    case 7:
                        return t = e.sent(), console.log("Error in fetch URL : " + n + " Exception :" + t), [3, 8];
                    case 8:
                        return [2]
                }
            })
        })
    }, jo.prototype.getJSON = function(e, t, o, n) {
        void 0 === t && (t = null);
        var s = new XMLHttpRequest;
        if (s.open("GET", e, !0), t)
            for (var r in t) s.setRequestHeader(r, t[r]);
        s.onload = function() {
            if (200 <= this.status && this.status < 400 && this.responseText) {
                var e = JSON.parse(this.responseText);
                o(e)
            } else n({
                message: "Error Loading Data",
                statusCode: this.status
            })
        }, s.onerror = function(e) {
            n(e)
        }, s.send()
    }, jo);

    function jo() {}
    var Uo, zo = (new oo).assets(),
        Wo = (Ko.prototype.initializeFeaturesAndSpecialPurposes = function() {
            ot.oneTrustIABConsent.features = [], ot.oneTrustIABConsent.specialPurposes = [], Ct.Groups.forEach(function(e) {
                if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                    var t = {};
                    t.groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, "IAB2_FEATURE" === e.Type ? ot.oneTrustIABConsent.features.push(t) : ot.oneTrustIABConsent.specialPurposes.push(t)
                }
            })
        }, Ko.prototype.initGrpsAndHosts = function() {
            this.initializeGroupData(bt.consentableGrps), Ct.showCookieList && (Ct.allowHostOptOut || ot.genVenOptOutEnabled) ? this.initializeHostData(bt.consentableGrps) : (ot.hostsConsent = [], Wt.writeHstParam(Se.OPTANON_CONSENT))
        }, Ko.prototype.ensureHtmlGroupDataInitialised = function() {
            if (this.initGrpsAndHosts(), ot.showGeneralVendors && (Jt.populateGenVendorLists(), Jt.initGenVendorConsent()), Ct.IsIabEnabled && (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), Dt.setOrUpdate3rdPartyIABConsentFlag(), Dt.setGeolocationInCookies(), Ct.IsConsentLoggingEnabled) {
                var e = window.OneTrust.dataSubjectParams || {},
                    t = vt.readCookieParam(Se.OPTANON_CONSENT, "iType"),
                    o = "",
                    n = !1;
                t && ot.isV2Stub && e.id && e.token && (n = !0, o = M[t]), Ft.createConsentTxn(!1, o, !1, n)
            }
        }, Ko.prototype.initializeGroupData = function(e) {
            var t = vt.readCookieParam(Se.OPTANON_CONSENT, "groups");
            t ? (Xt.synchroniseCookieGroupData(e), t = vt.readCookieParam(Se.OPTANON_CONSENT, "groups"), ot.groupsConsent = Pt.strToArr(t)) : (ot.groupsConsent = [], e.forEach(function(e) {
                ot.groupsConsent.push(e.CustomGroupId + (Gt.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
            }), Ct.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
        }, Ko.prototype.initializeHostData = function(e) {
            var t = vt.readCookieParam(Se.OPTANON_CONSENT, "hosts");
            if (t) Xt.synchroniseCookieHostData(), t = vt.readCookieParam(Se.OPTANON_CONSENT, "hosts"), ot.hostsConsent = Pt.strToArr(t), e.forEach(function(e) {
                Gt.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    ot.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            });
            else {
                ot.hostsConsent = [];
                var s = {};
                e.forEach(function(e) {
                    var o = Gt.isAlwaysActiveGroup(e),
                        n = ot.syncRequired ? Xt.groupHasConsent(e) : Gt.checkIsActiveByDefault(e);
                    e.Hosts.length && e.Hosts.forEach(function(e) {
                        if (s[e.HostId]) Xt.updateHostStatus(e, n);
                        else {
                            s[e.HostId] = !0, o && ot.oneTrustAlwaysActiveHosts.push(e.HostId);
                            var t = Xt.isHostPartOfAlwaysActiveGroup(e.HostId);
                            ot.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                        }
                    })
                })
            }
        }, Ko.prototype.consentDefaulCall = function() {
            var e = parseInt(vt.readCookieParam(Se.OPTANON_CONSENT, ve), 10);
            !isNaN(e) && 0 !== e || (co.triggerGoogleAnalyticsEvent(yo, "Click", "No interaction"), Ct.IsConsentLoggingEnabled && Ft.createConsentTxn(!0), window.removeEventListener("beforeunload", Uo.consentDefaulCall))
        }, Ko.prototype.fetchAssets = function() {
            return a(this, void 0, void 0, function() {
                var t, o, n, s, r, i, l, a, c, d;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return s = nt.moduleInitializer, r = Dt.isAlertBoxClosedAndValid(), i = !s.IsSuppressBanner || Ct.ShowAlertNotice && !r && s.IsSuppressBanner && !Lt("#onetrust-banner-sdk").length, l = Lt("#ot-sdk-btn").length || Lt(".ot-sdk-show-settings").length || Lt(".optanon-show-settings").length, a = "IAB2" === Ct.IabType ? !s.TenantFeatures.CookieV2RemoveSettingsIcon && !l : Ct.PCShowPersistentCookiesHoverButton, c = "true" === ot.urlParams.get(et), ot.hideBanner = c, [4, Promise.all([!i || Ct.NoBanner || c ? Promise.resolve(null) : Ro.getBannerContent(), !s.IsSuppressPC || ot.isPCVisible ? Ro.getPcContent() : Promise.resolve(null), a ? Ro.getCSBtnContent() : Promise.resolve(null)])];
                        case 1:
                            return d = e.sent(), t = d[0], o = d[1], n = d[2], t && (this.bannerGroup = {
                                name: t.name,
                                html: atob(t.html),
                                css: t.css
                            }), o && (this.preferenceCenterGroup = {
                                name: o.name,
                                html: atob(o.html),
                                css: o.css
                            }, nt.isV2Template = Ct.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(o.name)), this.cookieListGroup = {
                                name: zo.name,
                                html: zo.html,
                                css: Ct.useRTL ? zo.cssRTL : zo.css
                            }, n && (this.csBtnGroup = {
                                name: "CookieSettingsButton",
                                html: atob(n.html),
                                css: n.css
                            }), [2]
                    }
                })
            })
        }, Ko.prototype.initializeIabPurposeConsentOnReload = function() {
            var t = this;
            bt.consentableIabGrps.forEach(function(e) {
                t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
            })
        }, Ko.prototype.initializeIABData = function(o, n) {
            var s = this;
            void 0 === o && (o = !1), void 0 === n && (n = !1);
            var e = ot.oneTrustIABConsent;
            if (e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [], ot.addtlVendors.vendorConsent = [], !e.IABCookieValue || o || n || Dt.reconsentRequired()) {
                bt.consentableIabGrps.forEach(function(e) {
                    if (n) s.setIABConsent(e, Gt.isAlwaysActiveGroup(e));
                    else {
                        var t = o && e.HasConsentOptOut;
                        s.setIABConsent(e, t), "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0, s.setIABConsent(e, e.HasLegIntOptOut))
                    }
                });
                var t = o || !n && Ct.VendorConsentModel === ho;
                Dt.setIABVendor(t), !Dt.reconsentRequired() || o || n || Dt.resetTCModel()
            } else this.initializeIabPurposeConsentOnReload(), jt.populateGoogleConsent(), jt.populateVendorAndPurposeFromCookieData()
        }, Ko.prototype.canSoftOptInInsertForGroup = function(e) {
            var t = Gt.getGroupById(e);
            if (t) {
                var o = t && !t.Parent ? t : Gt.getParentGroup(t.Parent);
                return "inactive landingpage" !== Gt.getGrpStatus(o).toLowerCase() || !to.isLandingPage()
            }
        }, Ko.prototype.setIABConsent = function(e, t) {
            e.Type === at ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
        }, Ko.prototype.setIabPurposeConsent = function(o, n) {
            var s = !1;
            ot.oneTrustIABConsent.purpose = ot.oneTrustIABConsent.purpose.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, s = !0), e
            }), s || ot.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
        }, Ko.prototype.setIabLegIntConsent = function(o, n) {
            var s = !1;
            ot.oneTrustIABConsent.legimateInterest = ot.oneTrustIABConsent.legimateInterest.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, s = !0), e
            }), s || ot.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
        }, Ko.prototype.setIabSpeciFeatureConsent = function(o, n) {
            var s = !1;
            ot.oneTrustIABConsent.specialFeatures = ot.oneTrustIABConsent.specialFeatures.map(function(e) {
                var t = e.split(":")[0];
                return t === o.IabGrpId && (e = t + ":" + n, s = !0), e
            }), s || ot.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
        }, Ko);

    function Ko() {}
    var Yo, Jo = (Qo.prototype.getAllowAllButton = function() {
        return Lt("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }, Qo.prototype.getSelectedVendors = function() {
        return Lt("#onetrust-pc-sdk " + Bt.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }, Qo);

    function Qo() {}
    var Zo, Xo = ($o.prototype.setBannerFocus = function() {
        var e = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
            t = Array.prototype.slice.call(Lt('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
            o = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-bnr-save-handler").el),
            n = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
            s = Array.prototype.concat.call(Array.prototype.slice.call(Lt("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-cat-lst button").el), e),
            r = Array.prototype.concat.call(t, s),
            i = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
        bt.bannerName === Ue && (r = Array.prototype.concat.call(e, t));
        var l = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-accept-btn-handler").el),
            a = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
            c = Array.prototype.concat.call(o, l, a, n);
        (bt.bannerName !== qe || Ct.IsIabEnabled) && bt.bannerName !== Re && bt.bannerName !== We || (c = Array.prototype.concat.call(n, a, l));
        var d = Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-gv-list-handler").el);
        bt.bannerName === Ke ? (r = Array.prototype.concat.call(d, r), c = Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-button-group button").el)) : r = Array.prototype.concat.call(r, d), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(Lt("#onetrust-banner-sdk #onetrust-cookie-btn").el), r, Array.prototype.slice.call(Lt("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(Lt("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), i), this.banner = Lt("#onetrust-banner-sdk").el[0], nt.fp.CookieV2NoCursorFocus && !Ct.ForceConsent || (Ct.BannerFocus ? this.banner.focus() : this.bannerEl[0].focus())
    }, $o.prototype.handleBannerFocus = function(e, t) {
        var o = e.target,
            n = Zo.bannerEl,
            s = n.indexOf(o),
            r = n.length - 1,
            i = null;
        if (!Ct.ForceConsent && Ct.BannerFocus && (t && 0 === s || !t && s === r)) _t.resetFocusToBody();
        else if (this.banner === o) t && Ct.ForceConsent ? i = n[r] : t || (i = n[0]);
        else
            for (; !i;) {
                var l = void 0;
                0 !== (l = t ? 0 === s ? n[r] : n[s - 1] : s === r ? n[0] : n[s + 1]).clientHeight || 0 !== l.offsetHeight ? i = l : t ? s-- : s++
            }
        i && (e.preventDefault(), i.focus())
    }, $o.prototype.setPCFocus = function(e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++) e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = Ct.ShowPreferenceCenterCloseButton,
                n = o ? this.getElementForFocus(e, Ct.Popup ? 2 : 1, !0) : null,
                s = {
                    preventScroll: !0
                };
            this.firstItem ? o ? n.focus(s) : this.firstItem.focus(s) : e[0].focus(), this.firstItem && Lt(this.firstItem).on("keydown", Zo.firstItemHandler), this.lastItem && Lt(this.lastItem).on("keydown", Zo.lastItemHandler)
        }
    }, $o.prototype.setFirstAndLast = function(e) {
        this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }, $o.prototype.setLastItem = function() {
        var e = this.getPCElements(),
            t = this.getElementForFocus(e, e.length - 1, !1);
        t !== this.lastItem && (Lt(this.lastItem).off("keydown", Zo.lastItemHandler), this.lastItem = t, Lt(t).on("keydown", Zo.lastItemHandler))
    }, $o.prototype.getPCElements = function() {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + Bt.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return ot.pcLayer === S.CookieList ? e += " ,#onetrust-pc-sdk " + Bt.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(Lt(e).el)
    }, $o.prototype.getActiveTab = function() {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }, $o.prototype.getElementForFocus = function(e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t;) n = e[t], o ? ++t : --t;
        return n
    }, $o.prototype.firstItemHandler = function(e) {
        var t = document.getElementById("onetrust-banner-sdk");
        if (9 === e.keyCode && e.shiftKey && Zo.firstItem !== t) e.preventDefault(), Zo.lastItem.focus();
        else {
            var o = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
            if (Ct.Tab && ot.pcLayer === S.PrefCenterHome && !o) {
                var n = Zo.getActiveTab();
                n && (e.preventDefault(), n.focus())
            }
        }
    }, $o.prototype.lastItemHandler = function(e) {
        if (9 === e.keyCode && !e.shiftKey) {
            e.preventDefault();
            var t = ot.pcLayer === S.VendorList || ot.pcLayer === S.CookieList;
            Ct.Tab && ot.isPCVisible && !Ct.ShowPreferenceCenterCloseButton && !t ? Zo.getActiveTab().focus() : Zo.firstItem.focus()
        }
    }, $o);

    function $o() {
        this.bannerEl = []
    }
    var en, tn = (on.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + Bt.P_Category_Grp + " " + Bt.P_Category_Item)
    }, on.prototype.toggleGrpElements = function(e, t, o) {
        bt.pcName === $e && Ct.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var n = e.querySelectorAll('input[class*="category-switch-handler"]'), s = 0; s < n.length; s++) Pt.setCheckedAttribute(null, n[s], o), n[s] && Ct.PCShowConsentLabels && (n[s].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Ct.PCActiveText : Ct.PCInactiveText);
        bt.legIntSettings.PAllowLI && bt.legIntSettings.PShowLegIntBtn && t.Type === lt && t.HasLegIntOptOut && en.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }, on.prototype.toogleAllSubGrpElements = function(e, t) {
        if (e.ShowSubgroup) {
            var o = e.CustomGroupId,
                n = this.getGroupElementByOptanonGroupId(o.toString());
            en.toogleSubGroupElement(n, t, e.IsLegIntToggle)
        } else this.updateHiddenSubGroupData(e, t)
    }, on.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1), void 0 === n && (n = !1), bt.pcName === $e && Ct.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var s = e.querySelectorAll("li" + Bt.P_Subgrp_li), r = 0; r < s.length; r++) {
            var i = Gt.getGroupById(s[r].getAttribute("data-optanongroupid")),
                l = i.OptanonGroupId,
                a = Gt.getParentGroup(i.Parent);
            bt.legIntSettings.PAllowLI && bt.legIntSettings.PShowLegIntBtn && o && i.Type === lt && i.HasLegIntOptOut && a.ShowSubgroupToggle && en.updateLegIntBtnElement(s[r], t);
            var c = o ? "[id='ot-sub-group-id-" + l + "-leg-out']" : "[id='ot-sub-group-id-" + l + "']",
                d = s[r].querySelector('input[class*="cookie-subgroup-handler"]' + c);
            Pt.setCheckedAttribute(null, d, t), d && Ct.PCShowConsentLabels && (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? Ct.PCActiveText : Ct.PCInactiveText), n || (i.IsLegIntToggle = o, en.toggleGrpStatus(i, t), i.IsLegIntToggle = !1, Xt.toggleGroupHosts(i, t), ot.genVenOptOutEnabled && Xt.toggleGroupGenVendors(i, t))
        }
    }, on.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === lt ? t ? No : Vo : t ? Lo : _o;
        co.triggerGoogleAnalyticsEvent(yo, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }, on.prototype.setInputID = function(e, t, o, n, s) {
        Lt(e).attr("id", t), Lt(e).attr("name", t), Lt(e).data("optanonGroupId", o), Pt.setCheckedAttribute(null, e, n), Lt(e).attr("aria-labelledby", s)
    }, on.prototype.updateEnabledGroupData = function(e) {
        if (-1 < kt.indexOf(e.Type)) this.updateIabGroupData(e, !0);
        else {
            var t = en.getGroupVariable(),
                o = Pt.indexOf(t, e.CustomGroupId + ":0"); - 1 !== o && (t[o] = e.CustomGroupId + ":1")
        }
    }, on.prototype.updateDisabledGroupData = function(e) {
        if (-1 < kt.indexOf(e.Type)) this.updateIabGroupData(e, !1);
        else if (e.Status !== xe) {
            var t = en.getGroupVariable(),
                o = Pt.indexOf(t, e.CustomGroupId + ":1"); - 1 !== o && (t[o] = e.CustomGroupId + ":0")
        }
    }, on.prototype.updateIabGroupData = function(e, t) {
        if (e.Type === at) this.updateIabSpecialFeatureData(e.IabGrpId, t);
        else {
            var o = e.IsLegIntToggle ? ot.vendors.selectedLegInt : ot.vendors.selectedPurpose;
            this.updateIabPurposeData(e.IabGrpId, t, o)
        }
    }, on.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return en.isGroupActive(e)
        })
    }, on.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return en.IsGroupInActive(e)
        })
    }, on.prototype.toggleGroupHtmlElement = function(e, t, o) {
        if (bt.legIntSettings.PAllowLI && bt.legIntSettings.PShowLegIntBtn && e.Type === lt && e.HasLegIntOptOut) {
            var n = document.querySelector("[data-el-id=" + t + "]");
            n && this.updateLegIntBtnElement(n, o)
        }
        var s = Lt("#ot-group-id-" + t).el[0];
        Pt.setCheckedAttribute(null, s, o), s && Ct.PCShowConsentLabels && (s.parentElement.querySelector(".ot-label-status").innerHTML = o ? Ct.PCActiveText : Ct.PCInactiveText)
    }, on.prototype.updateLegIntBtnElement = function(e, t) {
        var o = bt.legIntSettings,
            n = e.querySelector(".ot-obj-leg-btn-handler"),
            s = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, s.style.display = t ? "none" : "inline-block"
    }, on.prototype.isGroupActive = function(e) {
        return -1 < kt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== St.inArray(e.CustomGroupId + ":1", en.getGroupVariable())
    }, on.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }, on.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o, n = null != e && void 0 !== e,
            s = vt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            r = ot.groupsConsent.join(","),
            i = vt.readCookieParam(Se.OPTANON_CONSENT, "hosts"),
            l = ot.hostsConsent.join(",");
        if (t) return !0;
        s === r && i === l || Uo.ensureHtmlGroupDataInitialised(), o = Pt.contains(ot.groupsConsent.concat(ot.hostsConsent), e + ":1");
        var a = this.doesHostExist(e),
            c = this.doesGroupExist(e),
            d = !!a || o && Uo.canSoftOptInInsertForGroup(e);
        return !(!n || !(o && d || !c && !a))
    }, on.prototype.setAllowAllButton = function() {
        var t = 0,
            e = Ct.Groups.some(function(e) {
                if (-1 === ht.indexOf(e.Type)) return en.IsGroupInActive(e) && t++, e.SubGroups.some(function(e) {
                    return en.IsGroupInActive(e)
                }) && t++, 1 <= t
            }),
            o = Yo.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(), Zo.lastItem && Zo.setLastItem(), e
    }, on.prototype.getGroupVariable = function() {
        return ot.groupsConsent
    }, on.prototype.IsGroupInActive = function(e) {
        return -1 < kt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < ht.indexOf(e.Type)) && -1 === St.inArray(e.CustomGroupId + ":1", en.getGroupVariable())
    }, on.prototype.updateIabPurposeData = function(t, e, o) {
        var n = Pt.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[n = -1 === n ? Number(t) : n] = t + ":" + e
    }, on.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = Pt.findIndex(ot.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        });
        o = -1 === o ? Number(t) : o, ot.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }, on.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + Bt.P_Category_Grp + " " + Bt.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }, on.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            en.toggleGrpStatus(e, t), Xt.toggleGroupHosts(e, t), ot.genVenOptOutEnabled && Xt.toggleGroupGenVendors(e, t)
        })
    }, on.prototype.isIabPurposeActive = function(e) {
        var t;
        return t = e.Type === at ? ot.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? ot.vendors.selectedLegInt : ot.vendors.selectedPurpose, St.inArray(e.IabGrpId + ":true", t)
    }, on.prototype.doesGroupExist = function(e) {
        return !!Gt.getGroupById(e)
    }, on.prototype.doesHostExist = function(e) {
        var t = ot.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }, on);

    function on() {}
    var nn, sn = (rn.prototype.insertCookiePolicyHtml = function() {
        if (Lt(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t = document.createDocumentFragment();
            if (Uo.cookieListGroup) {
                var o = Ct.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
                    n = document.createElement("div");
                Lt(n).html(Uo.cookieListGroup.html), n.removeChild(n.querySelector(o)), e = n.querySelector(".ot-sdk-cookie-policy"), Ct.useRTL && Lt(e).attr("dir", "rtl")
            }
            e.querySelector("#cookie-policy-title").innerHTML = Ct.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = Ct.CookieListDescription || "";
            var s = e.querySelector("section"),
                r = e.querySelector("section tbody tr"),
                i = null,
                l = null;
            Ct.CookiesV2NewCookiePolicy || (i = e.querySelector("section.subgroup"), l = e.querySelector("section.subgroup tbody tr"), Lt(e).el.removeChild(e.querySelector("section.subgroup"))), Lt(e).el.removeChild(e.querySelector("section")), !Lt("#ot-sdk-cookie-policy").length && Lt("#optanon-cookie-policy").length ? Lt("#optanon-cookie-policy").append('<div id="ot-sdk-cookie-policy"></div>') : (Lt("#ot-sdk-cookie-policy").html(""), Lt("#optanon-cookie-policy").html(""));
            for (var a = 0; a < Ct.Groups.length; a++)
                if (Ct.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(Ct, Ct.Groups, s, a, r, e, t);
                else if (this.insertGroupHTML(Ct, Ct.Groups, s, a, r, e, t), Ct.Groups[a].ShowSubgroup)
                for (var c = 0; c < Ct.Groups[a].SubGroups.length; c++) this.insertGroupHTML(Ct, Ct.Groups[a].SubGroups, i, c, l, e, t)
        }
    }, rn.prototype.insertGroupHTMLV2 = function(l, e, t, o, a, n, s) {
        var r, c, d, i = this;

        function u(e) {
            return p.querySelector(e)
        }
        r = e[o];
        var p = t.cloneNode(!0),
            k = e[o].SubGroups;
        Lt(u("tbody")).html("");
        var h = r.Hosts.slice(),
            y = r.FirstPartyCookies.slice(),
            g = h.length || y.length ? r.GroupName : "";
        if (e[o].ShowSubgroup && k.length) {
            var f = p.querySelector("section.ot-sdk-subgroup ul li");
            k.forEach(function(e) {
                var t = f.cloneNode(!0);
                h = h.concat(e.Hosts), y = y.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) && (g += "," + e.GroupName), Lt(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), Lt(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(i.groupsClass.safeFormattedGroupDescription(e)), Lt(f.parentElement).append(t)
            }), p.querySelector("section.ot-sdk-subgroup ul").removeChild(f)
        } else p.removeChild(p.querySelector("section.ot-sdk-subgroup"));
        l.IsLifespanEnabled ? Lt(u("th.ot-life-span")).el.innerHTML = l.LifespanText : Lt(u("thead tr")).el.removeChild(Lt(u("th.ot-life-span")).el), Lt(u("th.ot-cookies")).el.innerHTML = l.CookiesText, Lt(u("th.ot-host")).el.innerHTML = l.CategoriesText, Lt(u("th.ot-cookies-type")).el.innerHTML = l.CookiesUsedText, c = this.transformFirstPartyCookies(y, h);
        var b = !1;
        c.some(function(e) {
            return e.Description
        }) ? b = !0 : Lt(u("thead tr")).el.removeChild(Lt(u("th.ot-host-description")).el), Lt(u(".ot-sdk-cookie-policy-group")).html(r.GroupName), Lt(u(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r));
        for (var C = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = a.cloneNode(!0);
                Lt(t(".ot-cookies-td span")).text(""), Lt(t(".ot-life-span-td span")).text(""), Lt(t(".ot-cookies-type span")).text(""), Lt(t(".ot-cookies-td .ot-cookies-td-content")).html(""), Lt(t(".ot-host-td")).html(""), Lt(t(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + c[e].Description + "</p> ");
                for (var n = [], s = [], r = 0; r < c[e].Cookies.length; r++)(d = c[e].Cookies[r]).IsSession ? n.push(l.LifespanTypeText) : n.push(_t.getDuration(d).toLowerCase()), s.push(c[e].Type ? '<a href="https://cookiepedia.co.uk/cookies/' + d.Name + '" rel="noopener" target="_blank" aria-label="' + d.Name + " " + Ct.NewWinTxt + '">' + d.Name + "</a>" : d.Name);
                Lt(t(".ot-host-td")).append('<span class="ot-mobile-border"></span>'), t(".ot-host-td").setAttribute("data-label", l.CategoriesText), t(".ot-cookies-td").setAttribute("data-label", l.CookiesText), t(".ot-cookies-type").setAttribute("data-label", l.CookiesUsedText), t(".ot-life-span-td").setAttribute("data-label", l.LifespanText);
                var i = c[e].DisplayName || c[e].HostName;
                Lt(t(".ot-host-td")).append(c[e].Type ? i : '<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank" aria-label="' + i + " " + Ct.NewWinTxt + '">' + i + "</a>"), t(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", s.join(", ")), t(".ot-life-span-td .ot-life-span-td-content").innerText = n.join(", "), t(".ot-cookies-type .ot-cookies-type-td-content").innerText = c[e].Type ? Ct.firstPartyTxt : Ct.thirdPartyTxt, l.IsLifespanEnabled || o.removeChild(t("td.ot-life-span-td")), b || o.removeChild(t("td.ot-host-description-td")), Lt(u("tbody")).append(o)
            }, m = 0; m < c.length; m++) C(m);
        0 === c.length ? p.removeChild(p.querySelector("table")) : Lt(u("caption")).el.innerHTML = g, Lt(n).append(p), Lt(s).append(n), Lt("#ot-sdk-cookie-policy").append(s)
    }, rn.prototype.insertGroupHTML = function(l, e, t, o, a, n, s) {
        var r, i, c, d;

        function u(e) {
            return p.querySelector(e)
        }
        r = e[o];
        var p = t.cloneNode(!0);
        Lt(u("caption")).el.innerHTML = r.GroupName, Lt(u("tbody")).html(""), Lt(u("thead tr")), l.IsLifespanEnabled ? Lt(u("th.life-span")).el.innerHTML = l.LifespanText : Lt(u("thead tr")).el.removeChild(Lt(u("th.life-span")).el), Lt(u("th.cookies")).el.innerHTML = l.CookiesText, Lt(u("th.host")).el.innerHTML = l.CategoriesText;
        var k = !1;
        if (r.Hosts.some(function(e) {
                return e.description
            }) ? k = !0 : Lt(u("thead tr")).el.removeChild(Lt(u("th.host-description")).el), Lt(u(".ot-sdk-cookie-policy-group")).html(r.GroupName), Lt(u(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)), 0 < r.FirstPartyCookies.length) {
            Lt(u(".cookies-used-header")).html(l.CookiesUsedText), Lt(u(".cookies-list")).html("");
            for (var h = 0; h < r.FirstPartyCookies.length; h++) i = r.FirstPartyCookies[h], Lt(u(".cookies-list")).append("<li> " + _t.getCookieLabel(i, l.AddLinksToCookiepedia) + " <li>")
        } else p.removeChild(u(".cookies-used-header")), p.removeChild(u(".cookies-list"));
        c = r.Hosts;
        for (var y = function(e) {
                function t(e) {
                    return o.querySelector(e)
                }
                var o = a.cloneNode(!0);
                Lt(t(".cookies-td ul")).html(""), Lt(t(".life-span-td ul")).html(""), Lt(t(".host-td")).html(""), Lt(t(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + c[e].Description + "</p> ");
                for (var n = 0; n < c[e].Cookies.length; n++) {
                    var s = "";
                    s = (d = c[e].Cookies[n]).IsSession ? l.LifespanTypeText : 0 === d.Length ? "<1 " + l.LifespanDurationText : d.Length + " " + l.LifespanDurationText;
                    var r = l.IsLifespanEnabled ? "&nbsp;(" + s + ")" : "";
                    if (Lt(t(".cookies-td ul")).append("<li> " + d.Name + " " + r + " </li>"), l.IsLifespanEnabled) {
                        var i = d.Length ? d.Length + " days" : "N/A";
                        Lt(t(".life-span-td ul")).append("<li>" + i + "</li>")
                    }
                    0 === n && (Lt(t(".host-td")).append('<span class="ot-mobile-border"></span>'), Lt(t(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (c[e].DisplayName || c[e].HostName) + " " + Ct.NewWinTxt + '">' + (c[e].DisplayName || c[e].HostName) + "</a>"))
                }
                k || o.removeChild(t("td.host-description-td")), Lt(u("tbody")).append(o)
            }, g = 0; g < c.length; g++) y(g);
        0 === c.length && Lt(u("table")).el.removeChild(Lt(u("thead")).el), Lt(n).append(p), Lt(s).append(n), Lt("#ot-sdk-cookie-policy").append(s)
    }, rn.prototype.transformFirstPartyCookies = function(e, t) {
        var o = t.slice();
        return e.forEach(function(t) {
            o.some(function(e) {
                if (e.HostName === t.Host) return e.Cookies.push(t), !0
            }) || o.unshift({
                HostName: t.Host,
                DisplayName: t.Host,
                HostId: "",
                Description: "",
                Type: Ct.firstPartyTxt,
                Cookies: [t]
            })
        }), o
    }, rn);

    function rn() {
        this.groupsClass = en, this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    var ln, an = function() {};
    var cn, dn = (un.prototype.updateFilterSelection = function(e) {
        var t, o;
        void 0 === e && (e = !1), o = e ? (t = ot.filterByCategories, "data-optanongroupid") : (t = ot.filterByIABCategories, "data-purposeid");
        for (var n = Lt("#onetrust-pc-sdk .category-filter-handler").el, s = 0; s < n.length; s++) {
            var r = n[s].getAttribute(o); - 1 < t.indexOf(r) ? n[s].checked = !0 : n[s].checked = !1
        }
    }, un.prototype.cancelHostFilter = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            e[t].checked && ot.filterByCategories.indexOf(o) < 0 && (e[t].checked = "")
        }
    }, un.prototype.updateHostFilterList = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            if (e[t].checked && ot.filterByCategories.indexOf(o) < 0) ot.filterByCategories.push(o);
            else if (!e[t].checked && -1 < ot.filterByCategories.indexOf(o)) {
                var n = ot.filterByCategories;
                ot.filterByCategories.splice(n.indexOf(o), 1)
            }
        }
        return ot.filterByCategories
    }, un.prototype.InitializeHostList = function() {
        ot.hosts.hostTemplate = Lt(Bt.P_Vendor_List + " " + Bt.P_Host_Cntr + " li").el[0].cloneNode(!0), ot.hosts.hostCookieTemplate = Lt(Bt.P_Vendor_List + " " + Bt.P_Host_Cntr + " " + Bt.P_Host_Opt + " li").el[0].cloneNode(!0)
    }, un.prototype.getCookiesForGroup = function(t) {
        var o = [],
            n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(s(s({}, e), {
                groupName: t.GroupName
            }))
        }), t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(s(s({}, e), {
                isActive: "always active" === Gt.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: j.Host
            }))
        }), {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }, un.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
    }, un.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode,
            o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length)
            for (var s = 0; s < n.length; s++) "type" !== n[s].name ? o.setAttribute(n[s].name, n[s].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o), t.removeChild(e)
    }, un.prototype.reactivateTag = function(e, t) {
        var o = e.className.match(/optanon-category(-[a-zA-Z0-9]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-"),
            n = !0;
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!en.canInsertForGroup(o[s].trim())) {
                    n = !1;
                    break
                }
            n && (t ? this.reactivateSrcTag(e) : this.reactivateScriptTag(e))
        }
    }, un.prototype.substitutePlainTextScriptTags = function() {
        var t = this,
            e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]')),
            o = document.querySelectorAll('*[class*="optanon-category"]');
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }), Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }, un);

    function un() {}
    var pn, kn = (hn.prototype.getSearchQuery = function(e) {
        var t = this,
            o = e.trim().split(/\s+/g);
        return new RegExp(o.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?", "gi")
    }, hn.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }, hn.prototype.setGlobalFilteredList = function(e) {
        return ot.currentGlobalFilteredList = e
    }, hn.prototype.filterList = function(t, e, n) {
        var o = n && n.length;
        if ("" === t && !o) return this.setGlobalFilteredList(e);
        if (o) {
            var s = Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Options + " input").el.length,
                r = [],
                i = !1;
            s !== n.length ? e.forEach(function(o) {
                i = !0, o.vendorName && n.forEach(function(e) {
                    var t = parseInt(bt.iabGrpIdMap[e]); - 1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                        e.featureId === t && r.push(o)
                    }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                        e.featureId === t && r.push(o)
                    }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                        e.purposeId === t && r.push(o)
                    }) : (o.purposes.forEach(function(e) {
                        e.purposeId === t && r.push(o)
                    }), o.legIntPurposes.forEach(function(e) {
                        e.purposeId === t && r.push(o)
                    }))
                })
            }) : r = e, i && (r = r.filter(function(e, t, o) {
                return o.indexOf(e) === t
            })), this.setGlobalFilteredList(r)
        }
        return "" === t ? ot.currentGlobalFilteredList : ot.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })
    }, hn.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = ot.vendors;
        ot.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, ot.filterByIABCategories = [], cn.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = ot.filterByIABCategories;
        var n = this.filterList(o.searchParam, o.list, t);
        Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content).el[0].scrollTop = 0, this.initVendorsData(e, n)
    }, hn.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var s = this.getSearchQuery(n),
                r = 0;
            for (var i in t)
                if (i) {
                    var l = o === X.GoogleVendor ? i : t[i].VendorCustomId,
                        a = Lt("" + e.vendorAccBtn + l).el[0].parentElement;
                    s.lastIndex = 0, s.test(t[i][e.name]) ? (a.style.display = "", r++) : a.style.display = "none"
                }
            0 === r ? (Lt(e.accId).hide(), o === X.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === X.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, Lt(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var c = Lt(" " + e.venListId + ' li[style^="display"]').el, d = 0; d < c.length; d++) c[d].style.display = "";
        var u = Lt("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display"]) ' + e.ctgl + " > input[checked]") ? Pt.setCheckedAttribute("", u, !0) : Pt.setCheckedAttribute("", u, !1), document.querySelector(e.venListId + ' li:not([style^="display"]) ' + e.ctgl + " > input:not([checked])") ? u.parentElement.classList.add("line-through") : u.parentElement.classList.remove("line-through")
    }, hn.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(ot.addtlVendorsList), this.venAdtlSelAllTglEvent()
    }, hn.prototype.initGenVendors = function() {
        this.populateGeneralVendors(), Ct.GenVenOptOut && Ct.GeneralVendors && Ct.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }, hn.prototype.resetAddtlVendors = function() {
        pn.searchVendors(pn.googleSearchSelectors, ot.addtlVendorsList, X.GoogleVendor), this.showConsentHeader()
    }, hn.prototype.venAdtlSelAllTglEvent = function() {
        pn.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }, hn.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: Bt.P_Gven_List + " .ot-ven-gvctgl input",
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        pn.selectAllEventHandler(e)
    }, hn.prototype.selectAllEventHandler = function(e) {
        for (var t = Lt(e.vendorsList).el, o = Lt(e.selAllCntr).el[0], n = Lt(e.selAllChkbox).el[0], s = !0, r = 0; r < t.length; r++) {
            if (!t[r].checked) {
                s = !1;
                break
            }
            s = !0
        }
        o && (s ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
        for (var i = 0; i < t.length && !t[i].checked; i++) i !== t.length - 1 || t[i].checked || (n.checked = !1);
        Pt.setCheckedAttribute("", n, n.checked)
    }, hn.prototype.vendorLegIntToggleEvent = function() {
        for (var e = Lt(Bt.P_Vendor_Container + ' li:not([style^="display"]) .' + Bt.P_Ven_Ltgl + " input").el, t = Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Leg_El).el[0], o = Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, s = 0; s < e.length; s++) {
            if (!e[s].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var r = 0; r < e.length && !e[r].checked; r++) r !== e.length - 1 || e[r].checked || (o.checked = !1);
        Pt.setCheckedAttribute("", o, o.checked)
    }, hn.prototype.vendorsListEvent = function() {
        for (var e = Lt(Bt.P_Vendor_Container + ' li:not([style^="display"]) .' + Bt.P_Ven_Ctgl + " input").el, t = Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Consent_El).el[0], o = Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, s = 0; s < e.length; s++) {
            if (!e[s].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var r = 0; r < e.length && !e[r].checked; r++) r !== e.length - 1 || e[r].checked || (o.checked = !1);
        Pt.setCheckedAttribute("", o, o.checked)
    }, hn.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = Lt("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content).removeClass("no-results"), n.length && n.remove())
    }, hn.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(Bt.P_Host_Cntr + " > li") : document.querySelectorAll(Bt.P_Vendor_Container + ' li:not([style$="none;"]),' + Bt.P_Gven_List + ' li:not([style$="none;"])'),
            o = t.length,
            n = Lt('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }, hn.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o = Lt("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
            var n = document.createElement("div"),
                s = document.createElement("p"),
                r = document.createTextNode(" did not match any " + (t ? "hosts." : "vendors.")),
                i = document.createElement("span");
            return n.id = "no-results", i.id = "user-text", i.innerText = e, s.appendChild(i), s.appendChild(r), n.appendChild(s), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content).addClass("no-results"), Lt("#vendor-search-handler").el[0].setAttribute("aria-describedby", n.id), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content).append(n)
        }
        o.querySelector("span").innerText = e
    }, hn.prototype.searchHostList = function(e) {
        var t = ot.currentGlobalFilteredList;
        e && (t = this.searchList(e, t)), this.initHostData(e, t)
    }, hn.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
        })
    }, hn.prototype.initHostData = function(e, d) {
        var u = this;
        ot.optanonHostList = d;
        var p = nt.isV2Template,
            k = bt.pcName,
            h = ot.cookieListType === W.GenVen || ot.cookieListType === W.HostAndGenVen ? Ct.GenVenOptOut : Ct.allowHostOptOut,
            y = !1;
        this.setBackBtnTxt(), Lt(Bt.P_Vendor_List + " #select-all-text-container p").html(Ct.PCenterAllowAllConsentText), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content + " ul" + Bt.P_Host_Cntr).html(""), this.showEmptyResults(d && 0 === d.length, e, !0), !nt.isV2Template && k === $e || Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Title).html(Ct.PCenterCookiesListText), nt.isV2Template && Lt("#ot-sel-blk span:first-child").html(Ct.PCenterAllowAllConsentText || Ct.ConsentText);
        for (var t = function(o) {
                var n = ot.hosts.hostTemplate.cloneNode(!0),
                    e = n.querySelector("." + Bt.P_Host_Bx),
                    t = d[o].DisplayName || d[o].HostName;
                e && Pt.setHtmlAttributes(e, {
                    id: "host-" + o,
                    name: "host-" + o,
                    "aria-label": t + " " + Ct.PCViewCookiesText,
                    "aria-controls": "ot-host-acc-txt-" + o
                });
                var s = n.querySelector(Bt.P_Acc_Txt);
                if (s && Pt.setHtmlAttributes(s, {
                        id: "ot-host-acc-txt-" + o,
                        role: "region",
                        "aria-labelledby": e.id
                    }), !h || d[o].isFirstParty) {
                    var r = n.querySelector(".ot-host-tgl");
                    r && r.parentElement.removeChild(r)
                } else {
                    var i = void 0;
                    p ? ((i = ln.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), i.querySelector("input").classList.add("host-checkbox-handler"), k === $e ? n.querySelector(Bt.P_Host_Hdr).insertAdjacentElement("beforeBegin", i) : n.querySelector(Bt.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", i)) : i = n.querySelector(".ot-host-tgl"), Pt.setHtmlAttributes(i.querySelector("input"), {
                        id: "ot-host-chkbox-" + o,
                        "aria-label": t,
                        hostId: d[o].HostId,
                        ckType: d[o].Type
                    }), i.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (d[o].Type === j.GenVendor ? ot.genVendorsConsent[d[o].HostId] : -1 !== ot.hostsConsent.indexOf(d[o].HostId + ":1")) ? (Pt.setCheckedAttribute(null, i.querySelector("input"), !0), d[o].isActive ? Pt.setDisabledAttribute(null, i.querySelector("input"), !0) : y = y || !0) : (y = !0, Pt.setCheckedAttribute(null, i.querySelector("input"), !1)), i.querySelector(Bt.P_Label_Txt).innerText = t
                }
                if (Ct.PCAccordionStyle === z.PlusMinus) n.querySelector(Bt.P_Acc_Header).insertAdjacentElement("afterBegin", ln.plusMinusEl.cloneNode(!0));
                else if (p) {
                    var l = ln.arrowEl.cloneNode(!0);
                    k === $e ? n.querySelector(Bt.P_Host_View_Cookies).insertAdjacentElement("afterend", l) : n.querySelector(Bt.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", l)
                }
                Ct.AddLinksToCookiepedia && !d[o].isFirstParty && (t = '<a href="http://cookiepedia.co.uk/host/' + d[o].HostName + '" rel="noopener" target="_blank"\n              style="text-decoration: underline;">' + t + '&nbsp;<span class="ot-scrn-rdr">' + Ct.NewWinTxt + "</span></a>"), n.querySelector(Bt.P_Host_Title).innerHTML = t, n.querySelector(Bt.P_Host_Desc).innerText = d[o].Description, d[o].PrivacyPolicy && Ct.pcShowCookieHost && n.querySelector(Bt.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + d[o].PrivacyPolicy + '" rel="noopener" target="_blank">' + (p ? Ct.PCGVenPolicyTxt : Ct.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + Ct.NewWinTxt + "</span></a>");
                var a = n.querySelector(Bt.P_Host_View_Cookies);
                if (ot.showGeneralVendors && !d[o].Cookies.length ? (Pt.removeChild(a), Lt(n).addClass("ot-hide-acc")) : Ct.PCViewCookiesText && (a.innerHTML = Ct.PCViewCookiesText), !d[o].Description || !Ct.pcShowCookieHost) {
                    var c = n.querySelector(Bt.P_Host_Desc);
                    c.parentElement.removeChild(c)
                }
                Lt(n.querySelector(Bt.P_Host_Opt)).html(""), d[o].Cookies.forEach(function(e) {
                    var t = u.getCookieElement(e, d[o]);
                    Lt(n.querySelector(Bt.P_Host_Opt)).append(t)
                }), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content + " ul" + Bt.P_Host_Cntr).append(n)
            }, o = 0; o < d.length; o++) t(o);
        var n = 1 === d.length && d[0].HostName === Ct.PCFirstPartyCookieListText;
        if (!Ct.allowHostOptOut && !ot.genVenOptOutEnabled || n) Lt("#onetrust-pc-sdk " + Bt.P_Select_Cntr).addClass("ot-hide");
        else {
            Pt.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !y);
            for (var s = Lt("#onetrust-pc-sdk " + Bt.P_Host_Cntr + " .ot-host-tgl input").el, r = 0; r < s.length; r++) s[r].addEventListener("click", this.hostsListEvent);
            Lt("#onetrust-pc-sdk " + Bt.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
        }
    }, hn.prototype.hostsListEvent = function() {
        for (var e = Lt("#onetrust-pc-sdk " + Bt.P_Host_Cntr + " .ot-host-tgl input").el, t = Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Host_El).el[0], o = Lt("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = Lt("#onetrust-pc-sdk " + Bt.P_Cnsnt_Header).el[0], s = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                s = !1;
                break
            }
            s = !0
        }
        s ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
        Pt.setCheckedAttribute("", o, o.checked), o && n && o.setAttribute("aria-label", n.textContent + " " + Ct.PCenterSelectAllVendorsText)
    }, hn.prototype.loadHostList = function(e, o) {
        void 0 === e && (e = "");
        var n = [],
            s = [],
            t = [];
        if (ot.cookieListType !== W.GenVen && (Ct.Groups.forEach(function(e) {
                h(e.SubGroups, [e]).forEach(function(e) {
                    if (o.length) {
                        if (-1 !== o.indexOf(e.CustomGroupId)) {
                            var t = cn.getCookiesForGroup(e);
                            s = h(s, t.firstPartyCookiesList), n = h(n, t.thirdPartyCookiesList)
                        }
                    } else t = cn.getCookiesForGroup(e), s = h(s, t.firstPartyCookiesList), n = h(n, t.thirdPartyCookiesList)
                })
            }), s.length && n.unshift({
                HostName: Ct.PCFirstPartyCookieListText,
                DisplayName: Ct.PCFirstPartyCookieListText,
                HostId: "first-party-cookies-group",
                isFirstParty: !0,
                Cookies: s,
                Description: ""
            })), ot.showGeneralVendors) {
            var r = this.getFilteredGenVendorsList(o),
                i = this.mapGenVendorListToHostFormat(r);
            t = h(n, i)
        } else t = n;
        ot.currentGlobalFilteredList = t, this.initHostData(e, t)
    }, hn.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: j.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < ot.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }, hn.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: j.GenVendor
        }
    }, hn.prototype.getFilteredGenVendorsList = function(t) {
        var o = [],
            e = [];
        if (t.length) {
            Ct.Groups.forEach(function(e) {
                h(e.SubGroups, [e]).forEach(function(e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                        o.push(e)
                    })
                })
            });
            var n = Ct.GeneralVendors;
            return o.length && (e = n.filter(function(e) {
                if (-1 < o.indexOf(e.VendorCustomId)) return e
            })), e
        }
        return Ct.GeneralVendors
    }, hn.prototype.initVendorsData = function(e, t) {
        var o = t,
            n = ot.vendors.list;
        if (this.setBackBtnTxt(), Lt(Bt.P_Vendor_List + " #select-all-text-container p").html(Ct.PCenterAllowAllConsentText), nt.isV2Template && (Lt("#ot-sel-blk span:first-child").html(Ct.PCenterAllowAllConsentText || Ct.ConsentText), Lt("#ot-sel-blk span:last-child").html(Ct.LegitInterestText), bt.legIntSettings.PAllowLI && !bt.legIntSettings.PShowLegIntBtn || (Lt("#ot-sel-blk span:first-child").el[0].style.maxWidth = "100%")), this.hasIabVendors = 0 < o.length, this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1), 0 === o.length ? Lt("#ot-lst-cnt .ot-acc-cntr").hide() : Lt("#ot-lst-cnt .ot-acc-cntr").show(), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Container + " ." + Bt.P_Ven_Bx).length !== n.length && this.attachVendorsToDOM(), o.length !== n.length) n.forEach(function(e) {
            Lt(Bt.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement.style.display = -1 === o.indexOf(e) ? "none" : ""
        });
        else
            for (var s = Lt(Bt.P_Vendor_Container + ' li[style^="display"]').el, r = 0; r < s.length; r++) s[r].style.display = "";
        !nt.isV2Template && bt.pcName === $e || Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Title).html(Ct.PCenterVendorsListText);
        var i = document.querySelector("#vdr-lst-dsc");
        if (!i && Ct.PCenterVendorListDescText)
            if ((i = document.createElement("p")).id = "vdr-lst-dsc", Lt(i).html(Ct.PCenterVendorListDescText), bt.pcName !== $e && bt.pcName !== Qe) {
                var l = document.querySelector("#onetrust-pc-sdk " + Bt.P_Vendor_Title_Elm);
                l && l.insertAdjacentElement("afterend", i)
            } else {
                var a = document.querySelector(Bt.P_Vendor_Content + " .ot-sdk-row");
                a && a.insertAdjacentElement("beforebegin", i)
            }
        Lt("#onetrust-pc-sdk " + Bt.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), bt.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }, hn.prototype.updateVendorsDOMToggleStatus = function(e) {
        for (var t = Lt(Bt.P_Vendor_Container + " " + Bt.P_Tgl_Cntr).el, o = 0; o < t.length; o++) {
            var n = t[o].querySelector("." + Bt.P_Ven_Ctgl + " input"),
                s = t[o].querySelector("." + Bt.P_Ven_Ltgl + " input");
            n && Pt.setCheckedAttribute("", n, e), s && Pt.setCheckedAttribute("", s, e)
        }
        var r = Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        r && (r.parentElement.classList.remove("line-through"), Pt.setCheckedAttribute("", r, e));
        var i = Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        i && (i.parentElement.classList.remove("line-through"), Pt.setCheckedAttribute("", i, e)), Ct.UseGoogleVendors && this.updateGoogleCheckbox(e), ot.showGeneralVendors && Ct.GenVenOptOut && this.updateGenVenCheckbox(e)
    }, hn.prototype.updateGenVenCheckbox = function(e) {
        for (var t = Lt(Bt.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++) Pt.setCheckedAttribute("", t[o], e);
        var n = Lt("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), Pt.setCheckedAttribute("", n, e))
    }, hn.prototype.updateGoogleCheckbox = function(e) {
        for (var t = Lt("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++) Pt.setCheckedAttribute("", t[o], e);
        var n = Lt("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"), Pt.setCheckedAttribute("", n, e))
    }, hn.prototype.updateVendorDisclosure = function(e, t) {
        var o = Lt(Bt.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        if (t && t.disclosures) {
            var s = o.querySelector(Bt.P_Ven_Dets),
                r = o.querySelector(Bt.P_Ven_Disc).cloneNode(!0),
                n = r.cloneNode(!0);
            n.innerHTML = "<p><b>" + Ct.PCenterVendorListDisclosure + ": </b></p>", s.insertAdjacentElement("beforeend", n), t.disclosures.forEach(function(e) {
                var t = r.cloneNode(!0),
                    o = "<p>" + Ct.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                if (e.type && (o += "<p>" + Ct.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"), e.maxAgeSeconds) {
                    var n = Pt.calculateCookieLifespan(e.maxAgeSeconds);
                    o += "<p>" + Ct.PCenterVendorListLifespan + " </p> <p>" + n + " </p>"
                }
                e.domain && (o += "<p>" + Ct.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"), e.purposes && (o += "<p>" + Ct.PCenterVendorListStoragePurposes + " </p> <p>" + e.purposes + " </p>"), t.innerHTML = o, s.insertAdjacentElement("beforeend", t)
            })
        }
    }, hn.prototype.attachVendorsToDOM = function() {
        var H, M, F = ot.vendors.list,
            R = Ct.IabType,
            q = bt.pcName,
            j = ot.vendors.vendorTemplate.cloneNode(!0);
        ot.discVendors = {}, nt.isV2Template && (H = j.querySelector(".ot-ven-pur").cloneNode(!0), M = j.querySelector(Bt.P_Ven_Disc).cloneNode(!0), Lt(j.querySelector(".ot-ven-dets")).html(""));
        for (var e = function(e) {
                var t = j.cloneNode(!0),
                    o = F[e].vendorId,
                    n = F[e].vendorName,
                    s = t.querySelector("." + Bt.P_Ven_Bx),
                    r = ot.vendorsSetting[o];
                Pt.setHtmlAttributes(s, {
                    id: "IAB" + o,
                    name: "IAB" + o,
                    "aria-controls": "IAB-ACC-TXT" + o,
                    "aria-label": n
                }), s.nextElementSibling.setAttribute("for", "IAB" + o), t.querySelector(Bt.P_Ven_Name).innerText = n, Pt.setHtmlAttributes(t.querySelector(Bt.P_Ven_Link), {
                    href: F[e].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), t.querySelector(Bt.P_Ven_Link).innerHTML = Ct.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + Ct.NewWinTxt + "</span>";
                var i = nt.isV2Template ? ln.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox"),
                    l = i.cloneNode(!0),
                    a = i.cloneNode(!0),
                    c = t.querySelector(Bt.P_Tgl_Cntr);
                nt.isV2Template || i.parentElement.removeChild(i);
                var d = t.querySelector(Bt.P_Arrw_Cntr);
                if (r.consent) {
                    a.classList.add(Bt.P_Ven_Ctgl);
                    var u = -1 !== St.inArray(o + ":true", ot.vendors.selectedVendors),
                        p = a.querySelector("input");
                    if (nt.isV2Template) {
                        p.classList.add("vendor-checkbox-handler");
                        var k = a.querySelector(".ot-label-status");
                        Ct.PCShowConsentLabels ? k.innerHTML = u ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(k)
                    }
                    Pt.setCheckedAttribute("", p, u), Pt.setHtmlAttributes(p, {
                        id: Bt.P_Vendor_CheckBx + "-" + e,
                        vendorid: o,
                        "aria-label": n
                    }), a.querySelector("label").setAttribute("for", Bt.P_Vendor_CheckBx + "-" + e), a.querySelector(Bt.P_Label_Txt).textContent = n, q === $e ? Ct.PCTemplateUpgrade ? c.insertAdjacentElement("beforeend", a) : Lt(c).append(a) : c.insertBefore(a, d)
                }
                if (r.legInt) {
                    var h = -1 !== St.inArray(o + ":true", ot.vendors.selectedLegIntVendors);
                    if (bt.legIntSettings.PShowLegIntBtn) {
                        var y = Dt.generateLegIntButtonElements(h, o, !0);
                        t.querySelector(Bt.P_Acc_Txt).insertAdjacentHTML("beforeend", y)
                    } else p = l.querySelector("input"), nt.isV2Template && (p.classList.add("vendor-checkbox-handler"), k = l.querySelector(".ot-label-status"), Ct.PCShowConsentLabels ? k.innerHTML = h ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(k)), l.classList.add(Bt.P_Ven_Ltgl), p.classList.remove("vendor-checkbox-handler"), p.classList.add("vendor-leg-checkbox-handler"), Pt.setCheckedAttribute("", p, h), Pt.setHtmlAttributes(p, {
                        id: Bt.P_Vendor_LegCheckBx + "-" + e,
                        "leg-vendorid": o,
                        "aria-label": n
                    }), l.querySelector("label").setAttribute("for", Bt.P_Vendor_LegCheckBx + "-" + e), l.querySelector(Bt.P_Label_Txt).textContent = n, t.querySelector("." + Bt.P_Ven_Ctgl) && (d = t.querySelector("." + Bt.P_Ven_Ctgl)), q !== $e || c.children.length ? c.insertBefore(l, d) : Lt(c).append(l), r.consent || q !== $e || l.classList.add(Bt.P_Ven_Ltgl_Only)
                }
                nt.isV2Template && (c.insertAdjacentElement("beforeend", ln.arrowEl.cloneNode(!0)), Ct.PCAccordionStyle !== z.Caret && t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", ln.plusMinusEl.cloneNode(!0)));
                var g = t.querySelector(Bt.P_Acc_Txt);
                if (g && Pt.setHtmlAttributes(g, {
                        id: "IAB-ACC-TXT" + o,
                        "aria-labelledby": "IAB-ACC-TXT" + o,
                        role: "region"
                    }), F[e].deviceStorageDisclosureUrl && (Pt.setHtmlAttributes(s, {
                        "disc-vid": o
                    }), ot.discVendors[o] = {
                        isFetched: !1,
                        disclosureUrl: F[e].deviceStorageDisclosureUrl
                    }), nt.isV2Template) U.populateVendorDetailsHtml(t, H, F[e], M);
                else {
                    var f = t.querySelector(".vendor-option-purpose"),
                        b = t.querySelector(".vendor-consent-group"),
                        C = t.querySelector(".legitimate-interest"),
                        m = t.querySelector(".legitimate-interest-group"),
                        v = t.querySelector(".spl-purpose"),
                        P = t.querySelector(".spl-purpose-grp"),
                        A = t.querySelector(".vendor-feature"),
                        T = t.querySelector(".vendor-feature-group"),
                        S = t.querySelector(".vendor-spl-feature"),
                        I = t.querySelector(".vendor-spl-feature-grp"),
                        L = b.cloneNode(!0),
                        _ = m.cloneNode(!0),
                        w = P.cloneNode(!0),
                        x = T.cloneNode(!0),
                        E = I.cloneNode(!0);
                    M = t.querySelector(Bt.P_Ven_Disc);
                    var B = t.querySelector(Bt.P_Ven_Dets),
                        V = M.cloneNode(!0);
                    M.parentElement.removeChild(M), U.attachVendorDisclosure(V, F[e]), B.insertAdjacentElement("afterbegin", V), b.parentElement.removeChild(b), r.consent && (Lt(f.querySelector("p")).text(Ct.ConsentPurposesText), F[e].purposes.forEach(function(e) {
                        Lt(L.querySelector(".consent-category")).text(e.purposeName);
                        var t = L.querySelector(".consent-status");
                        t && L.removeChild(t), C.insertAdjacentHTML("beforebegin", L.outerHTML)
                    })), r.consent || f.parentElement.removeChild(f);
                    var N = _.querySelector(".vendor-opt-out-handler");
                    "IAB2" === Ct.IabType && N.parentElement.removeChild(N), m.parentElement.removeChild(m), r.legInt && (Lt(C.querySelector("p")).text(Ct.LegitimateInterestPurposesText), bt.legIntSettings.PAllowLI && "IAB2" === Ct.IabType && F[e].legIntPurposes.forEach(function(e) {
                        Lt(_.querySelector(".consent-category")).text(e.purposeName), C.insertAdjacentHTML("afterend", _.outerHTML)
                    })), r.legInt || C.parentElement.removeChild(C), P.parentElement.removeChild(P), "IAB2" === R && F[e].specialPurposes.forEach(function(e) {
                        Lt(w.querySelector(".consent-category")).text(e.purposeName), v.insertAdjacentHTML("afterend", w.outerHTML)
                    }), 0 === F[e].specialPurposes.length ? v.parentElement.removeChild(v) : Lt(v.querySelector("p")).text(Ct.SpecialPurposesText), T.parentElement.removeChild(T), Lt(A.querySelector("p")).text(Ct.FeaturesText), F[e].features.forEach(function(e) {
                        Lt(x.querySelector(".consent-category")).text(e.featureName), A.insertAdjacentHTML("afterend", x.outerHTML)
                    }), 0 === F[e].features.length && A.parentElement.removeChild(A), S.parentElement.removeChild(I), "IAB2" === R && F[e].specialFeatures.forEach(function(e) {
                        Lt(E.querySelector(".consent-category")).text(e.featureName), S.insertAdjacentHTML("afterend", E.outerHTML)
                    }), 0 === F[e].specialFeatures.length ? S.parentElement.removeChild(S) : Lt(S.querySelector("p")).text(Ct.SpecialFeaturesText);
                    var O = s.parentElement.querySelector(".vendor-purposes p");
                    O.parentElement.removeChild(O)
                }
                Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Container).append(t);
                var G = Lt("#onetrust-pc-sdk " + Bt.P_Sel_All_Vendor_Consent_Handler).el[0];
                G && G.setAttribute("aria-label", Ct.PCenterSelectAllVendorsText + " " + Ct.LegitInterestText);
                var D = Lt("#onetrust-pc-sdk " + Bt.P_Sel_All_Vendor_Leg_Handler).el[0];
                D && D.setAttribute("aria-label", Ct.PCenterSelectAllVendorsText + " " + Ct.ConsentText)
            }, U = this, t = 0; t < F.length; t++) e(t)
    }, hn.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var s = e.querySelector(".ot-ven-dets"),
            r = ot.vendorsSetting[o.vendorId],
            i = n.cloneNode(!0);
        if (this.attachVendorDisclosure(i, o), s.insertAdjacentElement("beforeEnd", i), r.consent) {
            var l = t.cloneNode(!0),
                a = "<p>" + Ct.ConsentPurposesText + "</p>";
            o.purposes.forEach(function(e) {
                a += "<p>" + e.purposeName + "</p>"
            }), l.innerHTML = a, s.insertAdjacentElement("beforeEnd", l)
        }
        if (r.legInt && o.legIntPurposes.length) {
            var c = t.cloneNode(!0),
                d = "<p>" + Ct.LegitimateInterestPurposesText + "</p>";
            o.legIntPurposes.forEach(function(e) {
                d += "<p>" + e.purposeName + "</p>"
            }), c.innerHTML = d, s.insertAdjacentElement("beforeEnd", c)
        }
        if ("IAB2" === bt.iabType && o.specialPurposes.length) {
            var u = t.cloneNode(!0),
                p = "<p>" + Ct.SpecialPurposesText + "</p>";
            o.specialPurposes.forEach(function(e) {
                p += "<p>" + e.purposeName + "</p>"
            }), u.innerHTML = p, s.insertAdjacentElement("beforeEnd", u)
        }
        if (o.features.length) {
            var k = t.cloneNode(!0),
                h = "<p>" + Ct.FeaturesText + "</p>";
            o.features.forEach(function(e) {
                h += "<p>" + e.featureName + "</p>"
            }), k.innerHTML = h, s.insertAdjacentElement("beforeEnd", k)
        }
        if ("IAB2" === bt.iabType && o.specialFeatures.length) {
            var y = t.cloneNode(!0),
                g = "<p>" + Ct.SpecialFeaturesText + "</p>";
            o.specialFeatures.forEach(function(e) {
                g += "<p>" + e.featureName + "</p>"
            }), y.innerHTML = g, s.insertAdjacentElement("beforeEnd", y)
        }
    }, hn.prototype.InitializeVendorList = function() {
        if (ot.vendors.list = ot.iabData ? ot.iabData.vendors : null, ot.vendors.vendorTemplate = Lt(Bt.P_Vendor_Container + " li").el[0].cloneNode(!0), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Container).html(""), !nt.isV2Template && bt.pcName === $e) {
            var e, t = ot.vendors.vendorTemplate.querySelectorAll(Bt.P_Acc_Header);
            bt.legIntSettings.PAllowLI && "IAB2" === bt.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
        }
    }, hn.prototype.cancelVendorFilter = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            e[t].checked && ot.filterByIABCategories.indexOf(o) < 0 && (e[t].checked = "")
        }
    }, hn.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<p><b>" + Ct.PCenterVendorListLifespan + " :</b> " + t.cookieMaxAge + "</p>";
        t.usesNonCookieAccess && (o += "<p>" + Ct.PCenterVendorListNonCookieUsage + "</p>"), e.innerHTML = o
    }, hn.prototype.updateVendorFilterList = function() {
        for (var e = Lt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            if (e[t].checked && ot.filterByIABCategories.indexOf(o) < 0) ot.filterByIABCategories.push(o);
            else if (!e[t].checked && -1 < ot.filterByIABCategories.indexOf(o)) {
                var n = ot.filterByIABCategories;
                ot.filterByIABCategories.splice(n.indexOf(o), 1)
            }
        }
        return ot.filterByIABCategories
    }, hn.prototype.saveVendorStatus = function() {
        var e = ot.vendors,
            t = ot.oneTrustIABConsent;
        t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice();
        var o = ot.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected)
    }, hn.prototype.updateIabVariableReference = function() {
        var e = ot.oneTrustIABConsent,
            t = ot.vendors;
        t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice();
        var o = ot.addtlVendors;
        o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }, hn.prototype.allowAllhandler = function() {
        Uo.initializeIABData(!0, !1)
    }, hn.prototype.rejectAllHandler = function() {
        Uo.initializeIABData(!1, !0)
    }, hn.prototype.populateAddtlVendors = function(e) {
        var t = Ct.PCAccordionStyle === z.Caret ? ln.arrowEl.cloneNode(!0) : ln.plusMinusEl.cloneNode(!0),
            o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            n = o.cloneNode(!0);
        Pt.removeChild(n.querySelector("#ot-selall-hostcntr")), Pt.removeChild(o.querySelector("#ot-selall-vencntr")), Pt.removeChild(o.querySelector("#ot-selall-licntr"));
        var s = ln.accordionEl.cloneNode(!0);
        s.classList.add("ot-iab-acc"), s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), s.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Ct.PCIABVendorsText + "</div>"), s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), s.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Lt("#ot-ven-lst").el[0]), Lt("#ot-lst-cnt .ot-sdk-column").append(s), s.querySelector("button").setAttribute("aria-label", Ct.PCIABVendorsText), this.iabAccInit = !0;
        var r = n.cloneNode(!0);
        Pt.removeChild(r.querySelector("#ot-selall-licntr")), r.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", r.querySelector("input").id = "ot-selall-adtlven-handler", r.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
        var i = ln.accordionEl.cloneNode(!0);
        i.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), i.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Ct.PCGoogleVendorsText + "</div>"), i.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", r), i.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"), i.classList.add("ot-adtlv-acc"), i.querySelector("button").setAttribute("aria-label", Ct.PCGoogleVendorsText);
        var l = ot.vendors.vendorTemplate.cloneNode(!0);
        for (var a in l.querySelector("button").classList.remove("ot-ven-box"), l.querySelector("button").classList.add("ot-addtl-venbox"), Pt.removeChild(l.querySelector(".ot-acc-txt")), e)
            if (e[a]) {
                var c = l.cloneNode(!0),
                    d = e[a].name;
                c.querySelector(Bt.P_Ven_Name).innerText = d;
                var u = c.querySelector("button");
                Pt.setHtmlAttributes(u, {
                    id: "Adtl-IAB" + a
                }), Pt.setHtmlAttributes(c.querySelector(Bt.P_Ven_Link), {
                    href: e[a].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), c.querySelector(Bt.P_Ven_Link).innerHTML = Ct.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + d + " " + Ct.NewWinTxt + "</span>";
                var p = ln.chkboxEl.cloneNode(!0);
                p.classList.remove("ot-ven-ctgl"), p.classList.add("ot-ven-adtlctgl");
                var k = Boolean(ot.addtlVendors.vendorSelected[a]),
                    h = p.querySelector("input");
                h.classList.add("ot-addtlven-chkbox-handler");
                var y = p.querySelector(".ot-label-status");
                Ct.PCShowConsentLabels ? y.innerHTML = k ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(y), Pt.setCheckedAttribute("", h, k), Pt.setHtmlAttributes(h, {
                    id: "ot-addtlven-chkbox-" + a,
                    "addtl-vid": a,
                    "aria-label": d
                }), p.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + a), p.querySelector(Bt.P_Label_Txt).textContent = d;
                var g = c.querySelector(Bt.P_Tgl_Cntr);
                Lt(g).append(p), g.insertAdjacentElement("beforeend", ln.arrowEl.cloneNode(!0)), Ct.PCAccordionStyle !== z.Caret && c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", ln.plusMinusEl.cloneNode(!0)), Lt(i.querySelector("#ot-addtl-venlst")).append(c)
            }
        Lt("#ot-lst-cnt .ot-sdk-column").append(i), Lt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            Pt.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader()
    }, hn.prototype.populateGeneralVendors = function() {
        var u = this,
            e = Ct.GeneralVendors,
            t = document.querySelector(".ot-gv-acc"),
            p = !!t;
        if (!e.length) return this.hasGenVendors = !1, void(t && Lt(t).hide());
        this.hasGenVendors = !0, t && Lt(t).show();
        var o = Ct.PCAccordionStyle === z.Caret ? ln.arrowEl.cloneNode(!0) : ln.plusMinusEl.cloneNode(!0);
        this.iabAccInit || this.addIabAccordion();
        var n = document.createElement("div");
        n.setAttribute("class", "ot-sel-all-chkbox");
        var s = ln.chkboxEl.cloneNode(!0);
        s.id = "ot-selall-gnvencntr", s.querySelector("input").id = "ot-selall-gnven-handler", s.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), Lt(n).append(s);
        var k = ln.accordionEl.cloneNode(!0);
        k.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)), k.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Ct.PCenterGeneralVendorsText + "</div>"), Ct.GenVenOptOut && k.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), k.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"), k.classList.add("ot-gv-acc"), k.querySelector("button").setAttribute("aria-label", Ct.PCenterGeneralVendorsText);
        var h = ot.vendors.vendorTemplate.cloneNode(!0);
        h.querySelector("button").classList.remove("ot-ven-box"), h.querySelector("button").classList.add("ot-gv-venbox"), Lt(h.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'), p && Lt("" + Bt.P_Gven_List).html("");
        var y = !0;
        e.forEach(function(e) {
            var o = u.mapGenVendorToHostFormat(e),
                n = h.cloneNode(!0),
                t = e.VendorCustomId,
                s = e.Name;
            n.querySelector(Bt.P_Ven_Name).innerText = s;
            var r = n.querySelector("button");
            if (Pt.setHtmlAttributes(r, {
                    id: "Gn-" + t
                }), e.PrivacyPolicyUrl ? (Pt.setHtmlAttributes(n.querySelector(Bt.P_Ven_Link), {
                    href: e.PrivacyPolicyUrl,
                    rel: "noopener",
                    target: "_blank"
                }), n.querySelector(Bt.P_Ven_Link).innerHTML = Ct.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + s + " " + Ct.NewWinTxt + "</span>") : n.querySelector(Bt.P_Ven_Link).classList.add("ot-hide"), Ct.GenVenOptOut) {
                var i = ln.chkboxEl.cloneNode(!0);
                i.classList.remove("ot-ven-ctgl"), i.classList.add("ot-ven-gvctgl");
                var l = Boolean(ot.genVendorsConsent[t]),
                    a = i.querySelector("input");
                a.classList.add("ot-gnven-chkbox-handler");
                var c = i.querySelector(".ot-label-status");
                Ct.PCShowConsentLabels ? c.innerHTML = l ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(c), Pt.setCheckedAttribute("", a, l), Pt.setHtmlAttributes(a, {
                    id: "ot-gnven-chkbox-" + t,
                    "gn-vid": t,
                    "aria-label": s
                }), Jt.isGenVenPartOfAlwaysActiveGroup(t) ? Pt.setDisabledAttribute(null, a, !0) : y = !1, i.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t), i.querySelector(Bt.P_Label_Txt).textContent = s;
                var d = n.querySelector(Bt.P_Tgl_Cntr);
                Lt(d).append(i), d.insertAdjacentElement("beforeend", ln.arrowEl.cloneNode(!0))
            }
            Ct.PCAccordionStyle !== z.Caret && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", ln.plusMinusEl.cloneNode(!0)), e.Cookies.length || Lt(n).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                var t = u.getCookieElement(e, o);
                Lt(n.querySelector(".ot-host-opt")).append(t)
            }), p ? Lt("" + Bt.P_Gven_List).append(n) : Lt(k.querySelector("" + Bt.P_Gven_List)).append(n)
        }), p || Lt("#ot-lst-cnt .ot-sdk-column").append(k), Lt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            Pt.setCheckedAttribute(null, e.target, e.target.checked)
        }), this.showConsentHeader(), y && Pt.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
    }, hn.prototype.addIabAccordion = function() {
        var e = Ct.PCAccordionStyle === z.Caret ? ln.arrowEl.cloneNode(!0) : ln.plusMinusEl.cloneNode(!0),
            t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
            o = t.cloneNode(!0);
        Pt.removeChild(o.querySelector("#ot-selall-hostcntr")), Pt.removeChild(t.querySelector("#ot-selall-vencntr")), Pt.removeChild(t.querySelector("#ot-selall-licntr"));
        var n = ln.accordionEl.cloneNode(!0);
        n.classList.add("ot-iab-acc"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Ct.PCIABVendorsText + "</div>"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", Lt("#ot-ven-lst").el[0]), Lt("#ot-lst-cnt .ot-sdk-column").append(n), n.querySelector("button").setAttribute("aria-label", Ct.PCIABVendorsText), this.iabAccInit = !0
    }, hn.prototype.showConsentHeader = function() {
        var e = bt.legIntSettings;
        Lt("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI && !e.PShowLegIntBtn || Lt("#onetrust-pc-sdk .ot-li-hdr").hide()
    }, hn.prototype.setBackBtnTxt = function() {
        nt.isV2Template ? (Lt(Bt.P_Vendor_List + " .back-btn-handler").attr("aria-label", Ct.PCenterBackText), Lt(Bt.P_Vendor_List + " .back-btn-handler title").html(Ct.PCenterBackText)) : Lt(Bt.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(Ct.PCenterBackText)
    }, hn.prototype.getCookieElement = function(e, t) {
        var o = ot.hosts.hostCookieTemplate.cloneNode(!0),
            n = o.querySelector("div").cloneNode(!0);
        n.classList.remove("cookie-name-container"), Lt(o).html("");
        var s = e.Name;
        Ct.AddLinksToCookiepedia && t.isFirstParty && (s = _t.getCookieLabel(e, Ct.AddLinksToCookiepedia));
        var r = n.cloneNode(!0);
        if (r.classList.add(Bt.P_c_Name), r.querySelector("div:nth-child(1)").innerHTML = Ct.pcCListName, r.querySelector("div:nth-child(2)").innerHTML = s, Lt(o).append(r), Ct.pcShowCookieHost) {
            var i = n.cloneNode(!0);
            i.classList.add(Bt.P_c_Host), i.querySelector("div:nth-child(1)").innerHTML = Ct.pcCListHost, i.querySelector("div:nth-child(2)").innerHTML = e.Host, Lt(o).append(i)
        }
        if (Ct.pcShowCookieDuration) {
            var l = n.cloneNode(!0);
            l.classList.add(Bt.P_c_Duration), l.querySelector("div:nth-child(1)").innerHTML = Ct.pcCListDuration, l.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? Ct.LifespanTypeText : _t.getDuration(e).toLowerCase(), Lt(o).append(l)
        }
        if (Ct.pcShowCookieType) {
            var a = t.Type === j.GenVendor ? !e.isThirdParty : t.isFirstParty,
                c = n.cloneNode(!0);
            c.classList.add(Bt.P_c_Type), c.querySelector("div:nth-child(1)").innerHTML = Ct.pcCListType, c.querySelector("div:nth-child(2)").innerHTML = a ? Ct.firstPartyTxt : Ct.thirdPartyTxt, Lt(o).append(c)
        }
        if (Ct.pcShowCookieCategory) {
            var d = void 0;
            if (d = t.Type === j.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                var u = n.cloneNode(!0);
                u.classList.add(Bt.P_c_Category), u.querySelector("div:nth-child(1)").innerHTML = Ct.pcCListCategory, u.querySelector("div:nth-child(2)").innerHTML = d, Lt(o).append(u)
            }
        }
        if (Ct.pcShowCookieDescription && e.description) {
            var p = n.cloneNode(!0);
            p.classList.add(Bt.P_c_Desc), p.querySelector("div:nth-child(1)").innerHTML = Ct.pcCListDescription, p.querySelector("div:nth-child(2)").innerHTML = e.description, Lt(o).append(p)
        }
        return o
    }, hn);

    function hn() {
        this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        }, this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    var yn, gn = (fn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        ot.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", ""),
                o = Gt.getGrpStatus(Gt.getGroupById(t)).toLowerCase() === xe;
            Pt.endsWith(e, ":1") && (Uo.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }), ot.hostsConsent.forEach(function(e) {
            Pt.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }), ot.showGeneralVendors && Ct.GenVenOptOut && Ct.GeneralVendors.forEach(function(e) {
            ot.genVendorsConsent[e.VendorCustomId] && (ot.softOptInGenVendors.includes(e.VendorCustomId) && to.isLandingPage() || n.push(e.VendorCustomId))
        });
        var t, o, s = "," + Pt.arrToStr(n) + ",";
        window.OnetrustActiveGroups = s, window.OptanonActiveGroups = s, void 0 !== window.dataLayer ? window.dataLayer.constructor === Array && (window.dataLayer.push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: s
        }), window.dataLayer.push({
            event: "OptanonLoaded",
            OptanonActiveGroups: s
        })) : window.dataLayer = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: s
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: s
        }], e && (t = new CustomEvent("consent.onetrust", {
            detail: n
        })), this.updateGCMTags(n, e);
        var r = vt.readCookieParam(Se.OPTANON_CONSENT, "groups");
        !ot.fireOnetrustGrp && r && !e || (ot.fireOnetrustGrp = !1, window.dataLayer.constructor === Array && window.dataLayer.push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: s
        }), o = new CustomEvent("OneTrustGroupsUpdated", {
            detail: n
        })), setTimeout(function() {
            t && window.dispatchEvent(t), o && window.dispatchEvent(o)
        })
    }, fn.prototype.updateGCMTags = function(e, t) {
        var o, n = e.includes(Ct.gCAdStorage) ? he.granted : he.denied,
            s = e.includes(Ct.gCAnalyticsStorage) ? he.granted : he.denied,
            r = vt.getCookie(Se.ALERT_BOX_CLOSED),
            i = bt.getRegionRule().Global;
        if ("function" != typeof window.gtag && Ct.gCEnable && (window.gtag = function(e, t, o) {
                window.dataLayer.push(arguments)
            }), "function" == typeof window.gtag && Ct.gCEnable && r) {
            var l = ((o = {})[pe.ad_storage] = n, o[pe.analytics_storage] = s, o);
            i || (l[pe.region] = bt.gcmCountries), window.gtag(ae.consent, de.update, l)
        }
    }, fn);

    function fn() {}
    var bn, Cn = "Banner",
        mn = "Preference Center",
        vn = "Close",
        Pn = "Allow All",
        An = "Reject All",
        Tn = "Confirm",
        Sn = (In.prototype.showConsentNotice = function() {
            switch (!Ct.NoBanner || Ct.ForceConsent ? Lt(".onetrust-pc-dark-filter").removeClass("ot-hide") : Lt(".onetrust-pc-dark-filter").addClass("ot-hide"), Lt("#onetrust-pc-sdk").removeClass("ot-hide"), bt.pcName) {
                case Ze:
                    Lt("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || Lt("#onetrust-pc-sdk").addClass("ot-animated");
                    var e = Ct.PreferenceCenterPosition,
                        t = Ct.useRTL,
                        o = t ? "right" : "left",
                        n = t ? "left" : "right";
                    Lt("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) && Lt("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)), Lt("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
            }
            en.setAllowAllButton(), Zo.setPCFocus(Zo.getPCElements()), Ct.NoBanner && Ct.ScrollCloseBanner || this.pcHasScroll()
        }, In.prototype.hideConsentNoticeV2 = function() {
            if (0 !== Lt("" + this.ONETRUST_PC_SDK).length) {
                if (nt.isV2Template && this.closePCText(), Ct.ForceConsent && !_t.isCookiePolicyPage(Ct.AlertNoticeText) && !Dt.isAlertBoxClosedAndValid() && Ct.ShowAlertNotice ? Lt("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645").show() : Lt("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(Ct.Panel ? 500 : 400), Ct.Panel) {
                    var e = Ct.PreferenceCenterPosition,
                        t = Ct.useRTL,
                        o = t ? "right" : "left",
                        n = t ? "left" : "right";
                    Lt("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)), Lt("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
                }
                if (Lt("" + this.ONETRUST_PC_SDK).fadeOut(Ct.Panel ? 500 : 400), ot.isPCVisible = !1, Ct.NoBanner && Ct.ScrollCloseBanner || (Lt("html").el[0].style.overflow = this.htmlScrollProp || "", Lt("body").el[0].style.overflow = this.bodyScrollProp || ""), ot.pcLayer = S.Banner, ot.pcSource || Dt.isAlertBoxClosedAndValid())
                    if (ot.pcSource) ot.pcSource.focus(), ot.pcSource = null;
                    else if (Ct.BannerFocus) _t.resetFocusToBody();
                else {
                    var s = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    s.length && s[0].focus()
                } else {
                    var r = Lt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
                    r && r.focus()
                }
            }
        }, In.prototype.closePCText = function() {
            var e = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
                t = Ct.AboutCookiesText;
            e.innerText = t + " " + Ct.pcDialogClose
        }, In.prototype.pcHasScroll = function() {
            var e = Lt(Bt.P_Grp_Container).el[0] || Lt("#onetrust-pc-sdk " + Bt.P_Content).el[0];
            e.scrollHeight > e.clientHeight && (this.bodyScrollProp = Lt("body").el[0].style.overflow, this.htmlScrollProp = Lt("html").el[0].style.overflow, Lt("html").el[0].style.overflow = "hidden", Lt("body").el[0].style.overflow = "hidden")
        }, In);

    function In() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var Ln, _n = (wn.prototype.init = function() {
        this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
    }, wn.prototype.getContent = function() {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, Ro.getSyncNtfyContent().then(function(e) {
                    ot.syncNtfyGrp = {
                        name: e.name,
                        html: atob(e.html),
                        css: e.css
                    }
                })]
            })
        })
    }, wn.prototype.insertHtml = function() {
        function e(e) {
            return t.querySelector(e)
        }
        this.removeHtml();
        var t = document.createDocumentFragment(),
            o = document.createElement("div");
        Lt(o).html(ot.syncNtfyGrp.html);
        var n = o.querySelector(this.El);
        Ct.BannerRelativeFontSizesToggle && Lt(n).addClass("otRelFont"), Ct.useRTL && Lt(n).attr("dir", "rtl"), Lt(t).append(n);
        var s = Ct.NtfyConfig;
        this.initHtml("Sync", s.Sync, e, t.querySelector(this.El)), s.ShowCS ? Lt(e(".ot-pc-handler")).html(s.CSTxt) : (Lt(n).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
        var r = document.createElement("div");
        Lt(r).append(t), Lt("#onetrust-consent-sdk").append(r.firstChild)
    }, wn.prototype.initHandler = function() {
        Lt(this.El + " .ot-sync-close-handler").on("click", function() {
            return Ln.close()
        })
    }, wn.prototype.showNty = function() {
        var e = Lt(this.El);
        e.css("bottom: -300px"), e.animate({
            bottom: "1em"
        }, 1e3), setTimeout(function() {
            e.css("bottom: 1rem")
        }, 1e3), e.focus()
    }, wn.prototype.changeState = function() {
        setTimeout(function() {
            Ln.refreshState()
        }, 1500)
    }, wn.prototype.refreshState = function() {
        function e(e) {
            return t.querySelector(e)
        }
        var t = Lt(this.El).el[0];
        t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync");
        var o = Ct.NtfyConfig;
        this.initHtml("Complete", o.Complete, e, t), o.ShowCS && ("LINK" === o.CSType && Lt(e(".ot-pc-handler")).addClass("ot-pc-link"), Lt(".ot-sync-btncntr").show("inline-block"), this.alignContent(), Lt(window).on("resize", function() {
            return Ln.resizeEvent
        })), setTimeout(function() {
            Ln.close()
        }, 1e3 * Ct.NtfyConfig.NtfyDuration)
    }, wn.prototype.insertCss = function() {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += ot.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
    }, wn.prototype.addCustomStyles = function() {
        var e = Ct.NtfyConfig,
            t = e.Sync,
            o = e.Complete,
            n = e.CSButton,
            s = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color:" + t.BgColor + ";\n            border:1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill:" + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align:" + t.TitleAlign + ";\n            color:" + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align:" + t.DescAlign + ";\n            color:" + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color:" + o.BgColor + ";\n            border:1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill:" + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align:" + o.TitleAlign + ";\n            color:" + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align:" + o.DescAlign + ";\n            color:" + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color:" + n.BgColor + ";\n            border:1px solid " + n.BdrColor + ";\n            color:" + n.Color + ";\n            text-align:" + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color:" + s.Color + ";\n            text-align:" + s.Align + ";\n        }") + "\n        "
    }, wn.prototype.initHtml = function(e, t, o, n) {
        var s = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check",
            r = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (Lt(o(s)).show(), Lt(o(r)).hide(), Lt(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (Lt(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? Lt(o("#ot-sync-title")).html(t.Title) : Lt(o("#ot-sync-title")).hide(), t.Desc ? Lt(o(".ot-sync-desc")).html(t.Desc) : Lt(o(".ot-sync-desc")).hide(), t.ShowClose ? (Lt(o(".ot-sync-close-handler")).show("inline-block"), Lt(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (Lt(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
    }, wn.prototype.close = function() {
        this.hideSyncNtfy(), _t.resetFocusToBody()
    }, wn.prototype.hideSyncNtfy = function() {
        Ct.NtfyConfig.ShowCS && window.removeEventListener("resize", Ln.resizeEvent), Lt("#ot-sync-ntfy").fadeOut(400)
    }, wn.prototype.removeHtml = function() {
        var e = Lt(this.El).el;
        e && Pt.removeChild(e)
    }, wn.prototype.alignContent = function() {
        Lt(".ot-sync-btncntr").el[0].clientHeight > Lt(".ot-sync-titlecntr").el[0].clientHeight && (Lt(".ot-sync-titlecntr").addClass("ot-pos-abs"), Lt(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }, wn.prototype.resizeEvent = function() {
        window.innerWidth <= 896 && Ln.alignContent()
    }, wn);

    function wn() {
        this.El = "#ot-sync-ntfy"
    }
    var xn, En = (Bn.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
    }, Bn.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1), nt.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }, Bn.prototype.bannerActionsHandler = function(t, n) {
        to.setLandingPathParam(Ae), ot.groupsConsent = [], ot.hostsConsent = [], ot.genVendorsConsent = {};
        var s = {};
        Ct.Groups.forEach(function(e) {
            if (e.IsAboutGroup) return !1;
            h(e.SubGroups, [e]).forEach(function(e) {
                var o = !!t || !!n && Gt.isAlwaysActiveGroup(e); - 1 < pt.indexOf(e.Type) && ot.groupsConsent.push(e.CustomGroupId + ":" + (o && e.HasConsentOptOut ? "1" : "0")), e.Hosts.length && (Ct.allowHostOptOut || ot.genVenOptOutEnabled) && e.Hosts.forEach(function(e) {
                    if (s[e.HostId]) Xt.updateHostStatus(e, o);
                    else {
                        s[e.HostId] = !0;
                        var t = Xt.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                        ot.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                    }
                }), ot.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    Jt.updateGenVendorStatus(e, o)
                })
            })
        }), Ct.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler()), bn.hideConsentNoticeV2(), Wt.writeGrpParam(Se.OPTANON_CONSENT), Wt.writeHstParam(Se.OPTANON_CONSENT), ot.genVenOptOutEnabled && Wt.writeGenVenCookieParam(Se.OPTANON_CONSENT), cn.substitutePlainTextScriptTags(), yn.updateGtmMacros(), this.executeOptanonWrapper()
    }, Bn.prototype.nextPageCloseBanner = function() {
        to.isLandingPage() || Dt.isAlertBoxClosedAndValid() || this.closeBanner(Ct.NextPageAcceptAllCookies)
    }, Bn.prototype.rmScrollAndClickBodyEvents = function() {
        Ct.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner), Ct.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }, Bn.prototype.onClickCloseBanner = function(e) {
        Dt.isAlertBoxClosedAndValid() || (co.triggerGoogleAnalyticsEvent(yo, go), this.closeBanner(Ct.OnClickAcceptAllCookies), e.stopPropagation()), xn.rmScrollAndClickBodyEvents()
    }, Bn.prototype.scrollCloseBanner = function() {
        var e = Lt(document).height() - Lt(window).height();
        0 === e && (e = Lt(window).height());
        var t = 100 * Lt(window).scrollTop() / e;
        t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)), 25 < t && !Dt.isAlertBoxClosedAndValid() && (!ot.isPCVisible || Ct.NoBanner) ? (co.triggerGoogleAnalyticsEvent(yo, go), xn.closeBanner(Ct.ScrollAcceptAllCookies), xn.rmScrollAndClickBodyEvents()) : Dt.isAlertBoxClosedAndValid() && xn.rmScrollAndClickBodyEvents()
    }, Bn.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var s = Gt.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], s, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), Ct.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
    }, Bn.prototype.rejectAll = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = t ? M[5] : M[2], n = this.groupsClass.getAllGroupElements(), s = 0; s < n.length; s++) {
            var r = Gt.getGroupById(n[s].getAttribute("data-optanongroupid"));
            "always active" !== Gt.getGrpStatus(r).toLowerCase() && (en.toggleGrpElements(n[s], r, !1), this.groupsClass.toogleSubGroupElement(n[s], !1, !1, !0), this.groupsClass.toogleSubGroupElement(n[s], !1, !0, !0))
        }
        this.bannerActionsHandler(!1, !0), o !== ot.consentInteractionType && this.consentTransactions(e, !1, t), Ct.IsIabEnabled && (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1), this.updateVendorLegBtns(!1))
    }, Bn.prototype.executeCustomScript = function() {
        Ct.CustomJs && new Function(Ct.CustomJs)()
    }, Bn.prototype.updateConsentData = function(e) {
        to.setLandingPathParam(Ae), Ct.IsIabEnabled && !e && this.iab.saveVendorStatus(), Wt.writeGrpParam(Se.OPTANON_CONSENT), Wt.writeHstParam(Se.OPTANON_CONSENT), ot.showGeneralVendors && Ct.GenVenOptOut && Wt.writeGenVenCookieParam(Se.OPTANON_CONSENT), cn.substitutePlainTextScriptTags(), yn.updateGtmMacros()
    }, Bn.prototype.close = function(e, t) {
        void 0 === t && (t = !1), bn.hideConsentNoticeV2(), this.updateConsentData(e), Ct.IsConsentLoggingEnabled ? Ft.createConsentTxn(!1, (t ? mn : Cn) + " - " + (t ? Tn : vn), t) : Dt.dispatchConsentEvent(), this.executeOptanonWrapper()
    }, Bn.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = ot.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e]; - 1 === ot.srcExecGrps.indexOf(o) && ot.srcExecGrps.push(o)
                }
                ot.srcExecGrpsTemp = [];
                for (var n = 0, s = ot.htmlExecGrpsTemp; n < s.length; n++) o = s[n], -1 === ot.htmlExecGrps.indexOf(o) && ot.htmlExecGrps.push(o);
                ot.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }, Bn.prototype.updateVendorLegBtns = function(e) {
        if (bt.legIntSettings.PAllowLI && bt.legIntSettings.PShowLegIntBtn)
            for (var t = Lt(Bt.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
    }, Bn.prototype.showFltgCkStgButton = function() {
        var e = Lt("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), Lt(".ot-floating-button__front svg").attr("aria-hidden", ""), Lt(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }, Bn.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1), Ft && !e && Ct.IsConsentLoggingEnabled ? Ft.createConsentTxn(!1, (o ? mn : Cn) + " - " + (t ? Pn : An), o) : Dt.dispatchConsentEvent()
    }, Bn);

    function Bn() {
        var o = this;
        this.iab = pn, this.groupsClass = en, this.closeOptanonAlertBox = function() {
            _t.hideBanner(), Ct.NtfyConfig.ShowNtfy && Ln.hideSyncNtfy(), !bt.isOptInMode && (bt.isOptInMode || Dt.isAlertBoxClosedAndValid()) || co.setAlertBoxClosed(!0), Uo.csBtnGroup && o.showFltgCkStgButton()
        }, this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || xn.onClickCloseBanner(e)
        }, this.bannerCloseButtonHandler = function(e) {
            if (void 0 === e && (e = !1), xn.closeOptanonAlertBox(), nt.moduleInitializer.MobileSDK) window.OneTrust.Close();
            else {
                var t = ot.bannerCloseSource === f.ConfirmChoiceButton;
                xn.close(e, t)
            }
            return !1
        }, this.allowAllEventHandler = function(e) {
            void 0 === e && (e = !1);
            var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
            co.triggerGoogleAnalyticsEvent(yo, t), o.allowAllEvent(!1, e)
        }, this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), xn.allowAll(e, t)
        }, this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1);
            var t = e ? "Preferences Reject All" : "Banner Reject All";
            co.triggerGoogleAnalyticsEvent(yo, t), nt.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : o.rejectAllEvent(!1, e)
        }, this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1), void 0 === t && (t = !1), o.closeOptanonAlertBox(), Dt.isIABCrossConsentEnabled() ? bt.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : bt.thirdPartyiFramePromise.then(function() {
                o.rejectAll(e, t)
            }) : o.rejectAll(e, t)
        }
    }
    var Vn, Nn = (On.prototype.setFilterList = function(t) {
        var o = this,
            n = Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Modal + " " + Bt.P_Fltr_Option).el[0].cloneNode(!0);
        Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Modal + " " + Bt.P_Fltr_Options).html(""), (nt.isV2Template || Ct.Popup) && Lt("#onetrust-pc-sdk #filter-cancel-handler").html(Ct.PCenterCancelFiltersText || "Cancel"), !nt.isV2Template && Ct.Popup || (Lt("#onetrust-pc-sdk " + Bt.P_Clr_Fltr_Txt).html(Ct.PCenterClearFiltersText), Lt("#filter-btn-handler").el[0].setAttribute("aria-label", Ct.PCenterFilterText)), Lt("#onetrust-pc-sdk #filter-apply-handler").html(Ct.PCenterApplyFiltersText), t ? bt.consentableGrps.forEach(function(e) {
            (ot.cookieListType === W.GenVen || ot.cookieListType === W.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t)
        }) : bt.iabGrps.forEach(function(e) {
            o.filterGroupOptionSetter(n, e, t)
        })
    }, On.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId,
            s = n + "-filter",
            r = e.cloneNode(!0);
        Lt(Bt.P_Fltr_Modal + " " + Bt.P_Fltr_Options).append(r), Lt(r.querySelector("input")).attr("id", s), Lt(r.querySelector("label")).attr("for", s), nt.isV2Template ? Lt(r.querySelector(Bt.P_Label_Txt)).html(t.GroupName) : Lt(r.querySelector("label span")).html(t.GroupName), Lt(r.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }, On);

    function On() {
        this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var Gn, Dn = (new function() {
            this.importCSS = function() {
                return {
                    css: '#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-left:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk:focus{outline:2px solid #000;outline-offset:-2px}#onetrust-banner-sdk a:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon,#ot-sync-ntfy .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a,#ot-sync-ntfy .powered-by-logo,#ot-sync-ntfy .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *,#ot-sync-ntfy h3 *,#ot-sync-ntfy h4 *,#ot-sync-ntfy h6 *,#ot-sync-ntfy button *,#ot-sync-ntfy a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide,#ot-sync-ntfy .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-right:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;left:50%;margin-left:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr,.ot-sdk-cookie-policy .screen-reader-only,.ot-sdk-cookie-policy .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in,#onetrust-banner-sdk.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;left:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}#onetrust-banner-sdk .banner-option-input:focus+label{outline:1px solid #000;outline-style:auto}\n#onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy,#ot-sync-ntfy{font-size:16px}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before,#ot-sync-ntfy *,#ot-sync-ntfy ::after,#ot-sync-ntfy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox,#ot-sync-ntfy div,#ot-sync-ntfy span,#ot-sync-ntfy h1,#ot-sync-ntfy h2,#ot-sync-ntfy h3,#ot-sync-ntfy h4,#ot-sync-ntfy h5,#ot-sync-ntfy h6,#ot-sync-ntfy p,#ot-sync-ntfy img,#ot-sync-ntfy svg,#ot-sync-ntfy button,#ot-sync-ntfy section,#ot-sync-ntfy a,#ot-sync-ntfy label,#ot-sync-ntfy input,#ot-sync-ntfy ul,#ot-sync-ntfy li,#ot-sync-ntfy nav,#ot-sync-ntfy table,#ot-sync-ntfy thead,#ot-sync-ntfy tr,#ot-sync-ntfy td,#ot-sync-ntfy tbody,#ot-sync-ntfy .ot-main-content,#ot-sync-ntfy .ot-toggle,#ot-sync-ntfy #ot-content,#ot-sync-ntfy #ot-pc-content,#ot-sync-ntfy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;left:auto;right:auto;top:auto;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before,#ot-sync-ntfy label:before,#ot-sync-ntfy label:after,#ot-sync-ntfy .checkbox:after,#ot-sync-ntfy .checkbox:before{content:"";content:none}\n#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:left;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-left:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-left:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-left:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-left:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-left:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-left:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-left:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-left:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-left:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-left:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-left:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-left:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-left:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-left:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-left:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #000;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-left:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-left:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:left;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:right}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:left}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block}\n',
                    cssRTL: '#onetrust-banner-sdk{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}#onetrust-banner-sdk .onetrust-vendors-list-handler{cursor:pointer;color:#1f96db;font-size:inherit;font-weight:bold;text-decoration:none;margin-right:5px}#onetrust-banner-sdk .onetrust-vendors-list-handler:hover{color:#1f96db}#onetrust-banner-sdk:focus{outline:2px solid #000;outline-offset:-2px}#onetrust-banner-sdk a:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-close-icon,#onetrust-pc-sdk .ot-close-icon,#ot-sync-ntfy .ot-close-icon{background-image:url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");background-size:contain;background-repeat:no-repeat;background-position:center;height:12px;width:12px}#onetrust-banner-sdk .powered-by-logo,#onetrust-banner-sdk .ot-pc-footer-logo a,#onetrust-pc-sdk .powered-by-logo,#onetrust-pc-sdk .ot-pc-footer-logo a,#ot-sync-ntfy .powered-by-logo,#ot-sync-ntfy .ot-pc-footer-logo a{background-size:contain;background-repeat:no-repeat;background-position:center;height:25px;width:152px;display:block}#onetrust-banner-sdk h3 *,#onetrust-banner-sdk h4 *,#onetrust-banner-sdk h6 *,#onetrust-banner-sdk button *,#onetrust-banner-sdk a[data-parent-id] *,#onetrust-pc-sdk h3 *,#onetrust-pc-sdk h4 *,#onetrust-pc-sdk h6 *,#onetrust-pc-sdk button *,#onetrust-pc-sdk a[data-parent-id] *,#ot-sync-ntfy h3 *,#ot-sync-ntfy h4 *,#ot-sync-ntfy h6 *,#ot-sync-ntfy button *,#ot-sync-ntfy a[data-parent-id] *{font-size:inherit;font-weight:inherit;color:inherit}#onetrust-banner-sdk .ot-hide,#onetrust-pc-sdk .ot-hide,#ot-sync-ntfy .ot-hide{display:none !important}#onetrust-pc-sdk .ot-sdk-row .ot-sdk-column{padding:0}#onetrust-pc-sdk .ot-sdk-container{padding-left:0}#onetrust-pc-sdk .ot-sdk-row{flex-direction:initial;width:100%}#onetrust-pc-sdk [type="checkbox"]:checked,#onetrust-pc-sdk [type="checkbox"]:not(:checked){pointer-events:initial}#onetrust-pc-sdk [type="checkbox"]:disabled+label::before,#onetrust-pc-sdk [type="checkbox"]:disabled+label:after,#onetrust-pc-sdk [type="checkbox"]:disabled+label{pointer-events:none;opacity:0.7}#onetrust-pc-sdk #vendor-list-content{transform:translate3d(0, 0, 0)}#onetrust-pc-sdk li input[type="checkbox"]{z-index:1}#onetrust-pc-sdk li .ot-checkbox label{z-index:2}#onetrust-pc-sdk li .ot-checkbox input[type="checkbox"]{height:auto;width:auto}#onetrust-pc-sdk li .host-title a,#onetrust-pc-sdk li .ot-host-name a,#onetrust-pc-sdk li .accordion-text,#onetrust-pc-sdk li .ot-acc-txt{z-index:2;position:relative}#onetrust-pc-sdk input{margin:3px 0.1ex}#onetrust-pc-sdk .toggle-always-active{opacity:0.6;cursor:default}#onetrust-pc-sdk .pc-logo,#onetrust-pc-sdk .ot-pc-logo{height:60px;width:180px;background-position:center;background-size:contain;background-repeat:no-repeat}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext{visibility:hidden;width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;bottom:125%;right:50%;margin-right:-60px;opacity:0;transition:opacity 0.3s}#onetrust-pc-sdk .ot-tooltip .ot-tooltiptext::after{content:"";position:absolute;top:100%;right:50%;margin-right:-5px;border-width:5px;border-style:solid;border-color:#555 transparent transparent transparent}#onetrust-pc-sdk .ot-tooltip:hover .ot-tooltiptext{visibility:visible;opacity:1}#onetrust-pc-sdk .ot-tooltip{position:relative;display:inline-block;z-index:3}#onetrust-pc-sdk .ot-tooltip svg{color:grey;height:20px;width:20px}#onetrust-pc-sdk .screen-reader-only,#onetrust-pc-sdk .ot-scrn-rdr,.ot-sdk-cookie-policy .screen-reader-only,.ot-sdk-cookie-policy .ot-scrn-rdr{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}#onetrust-pc-sdk.ot-fade-in,.onetrust-pc-dark-filter.ot-fade-in,#onetrust-banner-sdk.ot-fade-in{animation-name:onetrust-fade-in;animation-duration:400ms;animation-timing-function:ease-in-out}#onetrust-pc-sdk.ot-hide{display:none !important}.onetrust-pc-dark-filter.ot-hide{display:none !important}#ot-sdk-btn.ot-sdk-show-settings,#ot-sdk-btn.optanon-show-settings{color:#68b631;border:1px solid #68b631;height:auto;white-space:normal;word-wrap:break-word;padding:0.8em 2em;font-size:0.8em;line-height:1.2;cursor:pointer;-moz-transition:0.1s ease;-o-transition:0.1s ease;-webkit-transition:1s ease;transition:0.1s ease}#ot-sdk-btn.ot-sdk-show-settings:hover,#ot-sdk-btn.optanon-show-settings:hover{color:#fff;background-color:#68b631}.onetrust-pc-dark-filter{background:rgba(0,0,0,0.5);z-index:2147483646;width:100%;height:100%;overflow:hidden;position:fixed;top:0;bottom:0;right:0}@keyframes onetrust-fade-in{0%{opacity:0}100%{opacity:1}}@media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape){#onetrust-pc-sdk p{font-size:0.75em}}#onetrust-banner-sdk .banner-option-input:focus+label{outline:1px solid #000;outline-style:auto}\n#onetrust-banner-sdk,#onetrust-pc-sdk,#ot-sdk-cookie-policy,#ot-sync-ntfy{font-size:16px}#onetrust-banner-sdk *,#onetrust-banner-sdk ::after,#onetrust-banner-sdk ::before,#onetrust-pc-sdk *,#onetrust-pc-sdk ::after,#onetrust-pc-sdk ::before,#ot-sdk-cookie-policy *,#ot-sdk-cookie-policy ::after,#ot-sdk-cookie-policy ::before,#ot-sync-ntfy *,#ot-sync-ntfy ::after,#ot-sync-ntfy ::before{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}#onetrust-banner-sdk div,#onetrust-banner-sdk span,#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-banner-sdk p,#onetrust-banner-sdk img,#onetrust-banner-sdk svg,#onetrust-banner-sdk button,#onetrust-banner-sdk section,#onetrust-banner-sdk a,#onetrust-banner-sdk label,#onetrust-banner-sdk input,#onetrust-banner-sdk ul,#onetrust-banner-sdk li,#onetrust-banner-sdk nav,#onetrust-banner-sdk table,#onetrust-banner-sdk thead,#onetrust-banner-sdk tr,#onetrust-banner-sdk td,#onetrust-banner-sdk tbody,#onetrust-banner-sdk .ot-main-content,#onetrust-banner-sdk .ot-toggle,#onetrust-banner-sdk #ot-content,#onetrust-banner-sdk #ot-pc-content,#onetrust-banner-sdk .checkbox,#onetrust-pc-sdk div,#onetrust-pc-sdk span,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#onetrust-pc-sdk p,#onetrust-pc-sdk img,#onetrust-pc-sdk svg,#onetrust-pc-sdk button,#onetrust-pc-sdk section,#onetrust-pc-sdk a,#onetrust-pc-sdk label,#onetrust-pc-sdk input,#onetrust-pc-sdk ul,#onetrust-pc-sdk li,#onetrust-pc-sdk nav,#onetrust-pc-sdk table,#onetrust-pc-sdk thead,#onetrust-pc-sdk tr,#onetrust-pc-sdk td,#onetrust-pc-sdk tbody,#onetrust-pc-sdk .ot-main-content,#onetrust-pc-sdk .ot-toggle,#onetrust-pc-sdk #ot-content,#onetrust-pc-sdk #ot-pc-content,#onetrust-pc-sdk .checkbox,#ot-sdk-cookie-policy div,#ot-sdk-cookie-policy span,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy p,#ot-sdk-cookie-policy img,#ot-sdk-cookie-policy svg,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy section,#ot-sdk-cookie-policy a,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy input,#ot-sdk-cookie-policy ul,#ot-sdk-cookie-policy li,#ot-sdk-cookie-policy nav,#ot-sdk-cookie-policy table,#ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy tr,#ot-sdk-cookie-policy td,#ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy .ot-main-content,#ot-sdk-cookie-policy .ot-toggle,#ot-sdk-cookie-policy #ot-content,#ot-sdk-cookie-policy #ot-pc-content,#ot-sdk-cookie-policy .checkbox,#ot-sync-ntfy div,#ot-sync-ntfy span,#ot-sync-ntfy h1,#ot-sync-ntfy h2,#ot-sync-ntfy h3,#ot-sync-ntfy h4,#ot-sync-ntfy h5,#ot-sync-ntfy h6,#ot-sync-ntfy p,#ot-sync-ntfy img,#ot-sync-ntfy svg,#ot-sync-ntfy button,#ot-sync-ntfy section,#ot-sync-ntfy a,#ot-sync-ntfy label,#ot-sync-ntfy input,#ot-sync-ntfy ul,#ot-sync-ntfy li,#ot-sync-ntfy nav,#ot-sync-ntfy table,#ot-sync-ntfy thead,#ot-sync-ntfy tr,#ot-sync-ntfy td,#ot-sync-ntfy tbody,#ot-sync-ntfy .ot-main-content,#ot-sync-ntfy .ot-toggle,#ot-sync-ntfy #ot-content,#ot-sync-ntfy #ot-pc-content,#ot-sync-ntfy .checkbox{font-family:inherit;font-weight:normal;-webkit-font-smoothing:auto;letter-spacing:normal;line-height:normal;padding:0;margin:0;height:auto;min-height:0;max-height:none;width:auto;min-width:0;max-width:none;border-radius:0;border:none;clear:none;float:none;position:static;bottom:auto;right:auto;left:auto;top:auto;text-align:right;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;white-space:normal;background:none;overflow:visible;vertical-align:baseline;visibility:visible;z-index:auto;box-shadow:none}#onetrust-banner-sdk label:before,#onetrust-banner-sdk label:after,#onetrust-banner-sdk .checkbox:after,#onetrust-banner-sdk .checkbox:before,#onetrust-pc-sdk label:before,#onetrust-pc-sdk label:after,#onetrust-pc-sdk .checkbox:after,#onetrust-pc-sdk .checkbox:before,#ot-sdk-cookie-policy label:before,#ot-sdk-cookie-policy label:after,#ot-sdk-cookie-policy .checkbox:after,#ot-sdk-cookie-policy .checkbox:before,#ot-sync-ntfy label:before,#ot-sync-ntfy label:after,#ot-sync-ntfy .checkbox:after,#ot-sync-ntfy .checkbox:before{content:"";content:none}\n#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{position:relative;width:100%;max-width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{width:100%;float:right;box-sizing:border-box;padding:0;display:initial}@media (min-width: 400px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:90%;padding:0}}@media (min-width: 550px){#onetrust-banner-sdk .ot-sdk-container,#onetrust-pc-sdk .ot-sdk-container,#ot-sdk-cookie-policy .ot-sdk-container{width:100%}#onetrust-banner-sdk .ot-sdk-column,#onetrust-banner-sdk .ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-column,#onetrust-pc-sdk .ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-columns{margin-right:4%}#onetrust-banner-sdk .ot-sdk-column:first-child,#onetrust-banner-sdk .ot-sdk-columns:first-child,#onetrust-pc-sdk .ot-sdk-column:first-child,#onetrust-pc-sdk .ot-sdk-columns:first-child,#ot-sdk-cookie-policy .ot-sdk-column:first-child,#ot-sdk-cookie-policy .ot-sdk-columns:first-child{margin-right:0}#onetrust-banner-sdk .ot-sdk-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one.ot-sdk-columns{width:4.66666666667%}#onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns{width:13.3333333333%}#onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns{width:22%}#onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-five.ot-sdk-columns{width:39.3333333333%}#onetrust-banner-sdk .ot-sdk-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-six.ot-sdk-columns{width:48%}#onetrust-banner-sdk .ot-sdk-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-seven.ot-sdk-columns{width:56.6666666667%}#onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns{width:74%}#onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns{width:82.6666666667%}#onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns{width:91.3333333333%}#onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns{width:100%;margin-right:0}#onetrust-banner-sdk .ot-sdk-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-third.ot-sdk-column{width:30.6666666667%}#onetrust-banner-sdk .ot-sdk-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-two-thirds.ot-sdk-column{width:65.3333333333%}#onetrust-banner-sdk .ot-sdk-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-one-half.ot-sdk-column{width:48%}#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one.ot-sdk-columns{margin-right:8.66666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two.ot-sdk-columns{margin-right:17.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-three.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-three.ot-sdk-columns{margin-right:26%}#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-four.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-four.ot-sdk-columns{margin-right:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-five.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-five.ot-sdk-columns{margin-right:43.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-six.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-six.ot-sdk-columns{margin-right:52%}#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-seven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-seven.ot-sdk-columns{margin-right:60.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eight.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eight.ot-sdk-columns{margin-right:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-nine.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-nine.ot-sdk-columns{margin-right:78%}#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-ten.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-ten.ot-sdk-columns{margin-right:86.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-eleven.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-eleven.ot-sdk-columns{margin-right:95.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-third.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-third.ot-sdk-columns{margin-right:34.6666666667%}#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-two-thirds.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-two-thirds.ot-sdk-columns{margin-right:69.3333333333%}#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-banner-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-column,#onetrust-pc-sdk .ot-sdk-offset-by-one-half.ot-sdk-columns,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-column,#ot-sdk-cookie-policy .ot-sdk-offset-by-one-half.ot-sdk-columns{margin-right:52%}}#onetrust-banner-sdk h1,#onetrust-banner-sdk h2,#onetrust-banner-sdk h3,#onetrust-banner-sdk h4,#onetrust-banner-sdk h5,#onetrust-banner-sdk h6,#onetrust-pc-sdk h1,#onetrust-pc-sdk h2,#onetrust-pc-sdk h3,#onetrust-pc-sdk h4,#onetrust-pc-sdk h5,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h1,#ot-sdk-cookie-policy h2,#ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy h5,#ot-sdk-cookie-policy h6{margin-top:0;font-weight:600;font-family:inherit}#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem;line-height:1.2}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem;line-height:1.25}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem;line-height:1.3}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem;line-height:1.35}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem;line-height:1.5}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem;line-height:1.6}@media (min-width: 550px){#onetrust-banner-sdk h1,#onetrust-pc-sdk h1,#ot-sdk-cookie-policy h1{font-size:1.5rem}#onetrust-banner-sdk h2,#onetrust-pc-sdk h2,#ot-sdk-cookie-policy h2{font-size:1.5rem}#onetrust-banner-sdk h3,#onetrust-pc-sdk h3,#ot-sdk-cookie-policy h3{font-size:1.5rem}#onetrust-banner-sdk h4,#onetrust-pc-sdk h4,#ot-sdk-cookie-policy h4{font-size:1.5rem}#onetrust-banner-sdk h5,#onetrust-pc-sdk h5,#ot-sdk-cookie-policy h5{font-size:1.5rem}#onetrust-banner-sdk h6,#onetrust-pc-sdk h6,#ot-sdk-cookie-policy h6{font-size:1.5rem}}#onetrust-banner-sdk p,#onetrust-pc-sdk p,#ot-sdk-cookie-policy p{margin:0 0 1em 0;font-family:inherit;line-height:normal}#onetrust-banner-sdk a,#onetrust-pc-sdk a,#ot-sdk-cookie-policy a{color:#565656;text-decoration:underline}#onetrust-banner-sdk a:hover,#onetrust-pc-sdk a:hover,#ot-sdk-cookie-policy a:hover{color:#565656;text-decoration:none}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button{margin-bottom:1rem;font-family:inherit}#onetrust-banner-sdk .ot-sdk-button,#onetrust-banner-sdk button,#onetrust-banner-sdk input[type="submit"],#onetrust-banner-sdk input[type="reset"],#onetrust-banner-sdk input[type="button"],#onetrust-pc-sdk .ot-sdk-button,#onetrust-pc-sdk button,#onetrust-pc-sdk input[type="submit"],#onetrust-pc-sdk input[type="reset"],#onetrust-pc-sdk input[type="button"],#ot-sdk-cookie-policy .ot-sdk-button,#ot-sdk-cookie-policy button,#ot-sdk-cookie-policy input[type="submit"],#ot-sdk-cookie-policy input[type="reset"],#ot-sdk-cookie-policy input[type="button"]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:0.9em;font-weight:400;line-height:38px;letter-spacing:0.01em;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:2px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-button:hover,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-banner-sdk input[type="submit"]:hover,#onetrust-banner-sdk input[type="reset"]:hover,#onetrust-banner-sdk input[type="button"]:hover,#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:hover,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:hover,#onetrust-pc-sdk input[type="submit"]:hover,#onetrust-pc-sdk input[type="reset"]:hover,#onetrust-pc-sdk input[type="button"]:hover,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:hover,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:hover,#ot-sdk-cookie-policy input[type="submit"]:hover,#ot-sdk-cookie-policy input[type="reset"]:hover,#ot-sdk-cookie-policy input[type="button"]:hover,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{color:#333;border-color:#888;opacity:0.7}#onetrust-banner-sdk .ot-sdk-button:focus,#onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-banner-sdk input[type="submit"]:focus,#onetrust-banner-sdk input[type="reset"]:focus,#onetrust-banner-sdk input[type="button"]:focus,#onetrust-pc-sdk .ot-sdk-button:focus,#onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,#onetrust-pc-sdk input[type="submit"]:focus,#onetrust-pc-sdk input[type="reset"]:focus,#onetrust-pc-sdk input[type="button"]:focus,#ot-sdk-cookie-policy .ot-sdk-button:focus,#ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus,#ot-sdk-cookie-policy input[type="submit"]:focus,#ot-sdk-cookie-policy input[type="reset"]:focus,#ot-sdk-cookie-policy input[type="button"]:focus{outline:2px solid #000}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-banner-sdk button.ot-sdk-button-primary,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,#onetrust-pc-sdk button.ot-sdk-button-primary,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,#ot-sdk-cookie-policy button.ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-banner-sdk button.ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-banner-sdk button.ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,#onetrust-pc-sdk button.ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,#onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,#onetrust-pc-sdk button.ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,#onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,#ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,#ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus{color:#fff;background-color:#1eaedb;border-color:#1eaedb}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-banner-sdk select,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#onetrust-pc-sdk select,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea,#ot-sdk-cookie-policy select{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #d1d1d1;border-radius:4px;box-shadow:none;box-sizing:border-box}#onetrust-banner-sdk input[type="email"],#onetrust-banner-sdk input[type="number"],#onetrust-banner-sdk input[type="search"],#onetrust-banner-sdk input[type="text"],#onetrust-banner-sdk input[type="tel"],#onetrust-banner-sdk input[type="url"],#onetrust-banner-sdk input[type="password"],#onetrust-banner-sdk textarea,#onetrust-pc-sdk input[type="email"],#onetrust-pc-sdk input[type="number"],#onetrust-pc-sdk input[type="search"],#onetrust-pc-sdk input[type="text"],#onetrust-pc-sdk input[type="tel"],#onetrust-pc-sdk input[type="url"],#onetrust-pc-sdk input[type="password"],#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy input[type="email"],#ot-sdk-cookie-policy input[type="number"],#ot-sdk-cookie-policy input[type="search"],#ot-sdk-cookie-policy input[type="text"],#ot-sdk-cookie-policy input[type="tel"],#ot-sdk-cookie-policy input[type="url"],#ot-sdk-cookie-policy input[type="password"],#ot-sdk-cookie-policy textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}#onetrust-banner-sdk textarea,#onetrust-pc-sdk textarea,#ot-sdk-cookie-policy textarea{min-height:65px;padding-top:6px;padding-bottom:6px}#onetrust-banner-sdk input[type="email"]:focus,#onetrust-banner-sdk input[type="number"]:focus,#onetrust-banner-sdk input[type="search"]:focus,#onetrust-banner-sdk input[type="text"]:focus,#onetrust-banner-sdk input[type="tel"]:focus,#onetrust-banner-sdk input[type="url"]:focus,#onetrust-banner-sdk input[type="password"]:focus,#onetrust-banner-sdk textarea:focus,#onetrust-banner-sdk select:focus,#onetrust-pc-sdk input[type="email"]:focus,#onetrust-pc-sdk input[type="number"]:focus,#onetrust-pc-sdk input[type="search"]:focus,#onetrust-pc-sdk input[type="text"]:focus,#onetrust-pc-sdk input[type="tel"]:focus,#onetrust-pc-sdk input[type="url"]:focus,#onetrust-pc-sdk input[type="password"]:focus,#onetrust-pc-sdk textarea:focus,#onetrust-pc-sdk select:focus,#ot-sdk-cookie-policy input[type="email"]:focus,#ot-sdk-cookie-policy input[type="number"]:focus,#ot-sdk-cookie-policy input[type="search"]:focus,#ot-sdk-cookie-policy input[type="text"]:focus,#ot-sdk-cookie-policy input[type="tel"]:focus,#ot-sdk-cookie-policy input[type="url"]:focus,#ot-sdk-cookie-policy input[type="password"]:focus,#ot-sdk-cookie-policy textarea:focus,#ot-sdk-cookie-policy select:focus{border:1px solid #000;outline:0}#onetrust-banner-sdk label,#onetrust-banner-sdk legend,#onetrust-pc-sdk label,#onetrust-pc-sdk legend,#ot-sdk-cookie-policy label,#ot-sdk-cookie-policy legend{display:block;margin-bottom:0.5rem;font-weight:600}#onetrust-banner-sdk fieldset,#onetrust-pc-sdk fieldset,#ot-sdk-cookie-policy fieldset{padding:0;border-width:0}#onetrust-banner-sdk input[type="checkbox"],#onetrust-banner-sdk input[type="radio"],#onetrust-pc-sdk input[type="checkbox"],#onetrust-pc-sdk input[type="radio"],#ot-sdk-cookie-policy input[type="checkbox"],#ot-sdk-cookie-policy input[type="radio"]{display:inline}#onetrust-banner-sdk label>.label-body,#onetrust-pc-sdk label>.label-body,#ot-sdk-cookie-policy label>.label-body{display:inline-block;margin-right:0.5rem;font-weight:normal}#onetrust-banner-sdk ul,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ul{list-style:circle inside}#onetrust-banner-sdk ol,#onetrust-pc-sdk ol,#ot-sdk-cookie-policy ol{list-style:decimal inside}#onetrust-banner-sdk ol,#onetrust-banner-sdk ul,#onetrust-pc-sdk ol,#onetrust-pc-sdk ul,#ot-sdk-cookie-policy ol,#ot-sdk-cookie-policy ul{padding-right:0;margin-top:0}#onetrust-banner-sdk ul ul,#onetrust-banner-sdk ul ol,#onetrust-banner-sdk ol ol,#onetrust-banner-sdk ol ul,#onetrust-pc-sdk ul ul,#onetrust-pc-sdk ul ol,#onetrust-pc-sdk ol ol,#onetrust-pc-sdk ol ul,#ot-sdk-cookie-policy ul ul,#ot-sdk-cookie-policy ul ol,#ot-sdk-cookie-policy ol ol,#ot-sdk-cookie-policy ol ul{margin:1.5rem 3rem 1.5rem 0;font-size:90%}#onetrust-banner-sdk li,#onetrust-pc-sdk li,#ot-sdk-cookie-policy li{margin-bottom:1rem}#onetrust-banner-sdk code,#onetrust-pc-sdk code,#ot-sdk-cookie-policy code{padding:0.2rem 0.5rem;margin:0 0.2rem;font-size:90%;white-space:nowrap;background:#f1f1f1;border:1px solid #e1e1e1;border-radius:4px}#onetrust-banner-sdk pre>code,#onetrust-pc-sdk pre>code,#ot-sdk-cookie-policy pre>code{display:block;padding:1rem 1.5rem;white-space:pre}#onetrust-banner-sdk th,#onetrust-banner-sdk td,#onetrust-pc-sdk th,#onetrust-pc-sdk td,#ot-sdk-cookie-policy th,#ot-sdk-cookie-policy td{padding:12px 15px;text-align:right;border-bottom:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-u-full-width,#onetrust-pc-sdk .ot-sdk-u-full-width,#ot-sdk-cookie-policy .ot-sdk-u-full-width{width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-max-full-width,#onetrust-pc-sdk .ot-sdk-u-max-full-width,#ot-sdk-cookie-policy .ot-sdk-u-max-full-width{max-width:100%;box-sizing:border-box}#onetrust-banner-sdk .ot-sdk-u-pull-right,#onetrust-pc-sdk .ot-sdk-u-pull-right,#ot-sdk-cookie-policy .ot-sdk-u-pull-right{float:left}#onetrust-banner-sdk .ot-sdk-u-pull-left,#onetrust-pc-sdk .ot-sdk-u-pull-left,#ot-sdk-cookie-policy .ot-sdk-u-pull-left{float:right}#onetrust-banner-sdk hr,#onetrust-pc-sdk hr,#ot-sdk-cookie-policy hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #e1e1e1}#onetrust-banner-sdk .ot-sdk-container:after,#onetrust-banner-sdk .ot-sdk-row:after,#onetrust-banner-sdk .ot-sdk-u-cf,#onetrust-pc-sdk .ot-sdk-container:after,#onetrust-pc-sdk .ot-sdk-row:after,#onetrust-pc-sdk .ot-sdk-u-cf,#ot-sdk-cookie-policy .ot-sdk-container:after,#ot-sdk-cookie-policy .ot-sdk-row:after,#ot-sdk-cookie-policy .ot-sdk-u-cf{content:"";display:table;clear:both}#onetrust-banner-sdk .ot-sdk-row,#onetrust-pc-sdk .ot-sdk-row,#ot-sdk-cookie-policy .ot-sdk-row{margin:0;max-width:none;display:block}\n'
                }
            }
        }).importCSS(),
        Hn = (Mn.prototype.initialiseCssReferences = function() {
            var e;
            document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : (e = document.createElement("style")).id = "onetrust-style", e.innerHTML += Ct.useRTL ? Dn.cssRTL : Dn.css, Uo.bannerGroup && (e.innerHTML += Uo.bannerGroup.css, e.innerHTML += this.addCustomBannerCSS()), Uo.preferenceCenterGroup && (e.innerHTML += Uo.preferenceCenterGroup.css, e.innerHTML += this.addCustomPreferenceCenterCSS()), Uo.cookieListGroup && (e.innerHTML += Uo.cookieListGroup.css, e.innerHTML += this.addCustomCookieListCSS()), this.processedCSS = e.innerHTML, bt.ignoreInjectingHtmlCss || Lt(document.head).append(e)
        }, Mn);

    function Mn() {
        this.processedCSS = "", this.addCustomBannerCSS = function() {
            var e = Ct.backgroundColor,
                t = Ct.buttonColor,
                o = Ct.textColor,
                n = Ct.buttonTextColor,
                s = Ct.bannerMPButtonColor,
                r = Ct.bannerMPButtonTextColor,
                i = Ct.bannerAccordionBackgroundColor,
                l = Ct.BSaveBtnColor,
                a = Ct.BCategoryContainerColor,
                c = Ct.BLineBreakColor,
                d = Ct.BCategoryStyleColor,
                u = Ct.bannerLinksTextColor,
                p = "\n        " + (bt.bannerName === Ue ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk > .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (i ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + i + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            if ((t || n) && (p += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                            " + (n ? "color: " + n + ";" : "") + "\n                        }"), (r || s) && (p += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (r ? "color: " + r + "; border-color: " + r + ";" : "") + "\n                background-color: \n                " + (s && !Ct.BannerSettingsButtonDisplayLink ? s : e) + ";\n            }"), bt.bannerName === Ke) {
                var k = void 0,
                    h = void 0,
                    y = void 0,
                    g = void 0,
                    f = void 0;
                l && (k = "color: " + n + ";border-color: " + n + ";background-color: " + l + ";"), a && (h = "background-color: " + a + ";"), c && (y = "border-color: " + c + ";"), d && (g = "background-color: " + d + ";", f = "border-color: " + d + ";"), p += "#onetrust-banner-sdk .ot-bnr-save-handler {" + k + "}#onetrust-banner-sdk .ot-cat-lst {" + h + "}#onetrust-banner-sdk .ot-cat-bdr {" + y + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + g + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + f + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
            }
            return Ct.BCloseButtonType === ie.Link && (p += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + Ct.BContinueColor + "}"), Ct.bannerCustomCSS && (p += Ct.bannerCustomCSS), p
        }, this.addCustomPreferenceCenterCSS = function() {
            var e = Ct.pcBackgroundColor,
                t = Ct.pcButtonColor,
                o = Ct.pcTextColor,
                n = Ct.pcButtonTextColor,
                s = Ct.pcLinksTextColor,
                r = Ct.PCenterEnableAccordion,
                i = Ct.pcAccordionBackgroundColor,
                l = Ct.pcMenuColor,
                a = Ct.pcMenuHighLightColor,
                c = Ct.pcLegIntButtonColor,
                d = Ct.pcLegIntButtonTextColor,
                u = "\n            " + (e ? (bt.pcName === Qe ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container, \n                        #onetrust-pc-sdk " + Bt.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + Bt.P_Search_Cntr + ",\n                " + (r && bt.pcName === Qe ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + Bt.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Title + ":after\n                " + (nt.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Vendor_Container + " " + Bt.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Host_Cntr + " " + Bt.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Vendor_List + " " + Bt.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Vendor_List + " " + Bt.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Vendor_List + " " + Bt.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Vendor_List + " " + Bt.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler \n                {\n                    color: " + o + ";\n                }" : "") + "\n            " + (s ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Host_Cntr + " " + Bt.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Host_Cntr + " " + Bt.P_Acc_Header + " " + Bt.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Host_Cntr + " " + Bt.P_Host_Info + " a\n                    {\n                        color: " + s + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { opacity: .7;}\n            " + (r && i ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Acc_Container + Bt.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Acc_Txt + " " + Bt.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + i + ";\n            }" : "") + "\n            " + (i ? " #onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Host_Cntr + " " + Bt.P_Host_Info + ",\n                    " + (nt.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Acc_Txt + " " + Bt.P_Ven_Opts) + "\n                            {\n                                background-color: " + i + ";\n                            }" : "") + "\n        ";
            return (t || n) && (u += "#onetrust-consent-sdk #onetrust-pc-sdk \n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + Bt.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + (bt.pcName === Qe ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Bt.P_Category_Item + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + Bt.P_Li_Hdr + "{\n                border-color: " + t + ";\n            }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border:1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (c ? "background-color: " + c + ";" : "") + "\n                " + (d ? "color: " + d + "; border-color: " + d + ";" : "") + "\n            }\n            "), Ct.PCCloseButtonType === ie.Link && (u += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + Ct.PCContinueColor + "}"), bt.pcName === $e && (l && (u += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + l + "\n                }"), a && (u += "#onetrust-consent-sdk #onetrust-pc-sdk ." + Bt.P_Active_Menu + " {\n                    background-color: " + a + "\n                }")), Ct.pcCustomCSS && (u += Ct.pcCustomCSS), u
        }, this.addCustomCookieListCSS = function() {
            var e = Ct.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                t = "\n                " + (Ct.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + Ct.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (Ct.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + Ct.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (Ct.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + Ct.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (Ct.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + Ct.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && Ct.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + Ct.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return Ct.cookieListCustomCss && (t += Ct.cookieListCustomCss), t
        }
    }
    var Fn, Rn = (qn.prototype.insertPcHtml = function() {
        Fn.jsonAddAboutCookies(Ct);
        var t = document.createDocumentFragment();
        if (Uo.preferenceCenterGroup) {
            var e = document.createElement("div");
            Lt(e).html(Uo.preferenceCenterGroup.html);
            var o = e.querySelector("#onetrust-pc-sdk");
            /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || Lt(o).addClass("ot-sdk-not-webkit"), Ct.useRTL && Lt(o).attr("dir", "rtl"), bt.legIntSettings.PAllowLI && "IAB2" === bt.iabType && (Lt(o).addClass("ot-leg-opt-out"), bt.legIntSettings.PShowLegIntBtn && Lt(o).addClass("ot-leg-btn")), Ct.BannerRelativeFontSizesToggle && Lt(o).addClass("otRelFont"), Ct.PCShowConsentLabels && Lt(o).addClass("ot-tgl-with-label"), (Ct.UseGoogleVendors || ot.showGeneralVendors) && Lt(o).addClass("ot-addtl-vendors"), "right" === Ct.PreferenceCenterPosition && Lt(o).addClass(Ct.useRTL ? "right-rtl" : "right"), Lt(t).append(o);
            var n = function(e) {
                    return t.querySelector(e)
                },
                s = function(e) {
                    return t.querySelectorAll(e)
                },
                r = Lt(s(Bt.P_Close_Btn)).el;
            if (Ct.ShowPreferenceCenterCloseButton)
                for (Ct.CloseText || (Ct.CloseText = "Close Preference Center"), i = 0; i < r.length; i++) Ct.PCCloseButtonType === ie.Link && Ct.PCTemplateUpgrade ? (Lt(r[i]).html(Ct.PCContinueText), Lt(o).addClass("ot-close-btn-link"), Lt(r[i]).el.removeAttribute("aria-label")) : Lt(r[i]).el.setAttribute("aria-label", Ct.CloseText);
            else
                for (var i = 0; i < r.length; i++) Lt(r[i].parentElement).el.removeChild(r[i]);
            Ct.Language && Ct.Language.Culture && Lt(n("#onetrust-pc-sdk")).attr("lang", Ct.Language.Culture);
            var l = n(Bt.P_Logo);
            if (l && Ct.optanonLogo) {
                var a = _t.updateCorrectUrl(Ct.optanonLogo);
                _t.checkMobileOfflineRequest(_t.getBannerVersionUrl()) && (a = Pt.getRelativeURL(a, !0, !0)), Lt(l).attr("style", 'background-image: url("' + a + '");\n                    background-position: ' + (Ct.useRTL ? "right" : "left")), Ct.PCLogoAria && Lt(l).attr("aria-label", Ct.PCLogoAria)
            }
            _t.insertFooterLogo(s(".ot-pc-footer-logo a")), Lt(n(Bt.P_Title)).html(Ct.MainText), bt.pcName === $e && (Lt(n(Bt.P_Privacy_Txt)).html(Ct.AboutCookiesText), Lt(n(Bt.P_Privacy_Hdr)).html(Ct.AboutCookiesText)), Lt(n(Bt.P_Policy_Txt)).html(Ct.MainInfoText), Ct.AboutText && Lt(n(Bt.P_Policy_Txt)).html(Lt(n(Bt.P_Policy_Txt)).html() + '\n                <br/><a href="' + Ct.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                        aria-label="' + Ct.PCCookiePolicyLinkScreenReader + '">' + Ct.AboutText + "</a>"), Ct.ConfirmText.trim() ? Lt(n("#accept-recommended-btn-handler")).html(Ct.ConfirmText) : n("#accept-recommended-btn-handler").parentElement.removeChild(n("#accept-recommended-btn-handler"));
            var c = s(".save-preference-btn-handler");
            for (i = 0; i < c.length; i++) Lt(c[i]).html(Ct.AllowAllText);
            var d = s(".ot-pc-refuse-all-handler");
            if (Ct.PCenterShowRejectAllButton && Ct.PCenterRejectAllButtonText.trim())
                for (i = 0; i < d.length; i++) Lt(d[i]).html(Ct.PCenterRejectAllButtonText);
            else Pt.removeChild(d);
            if (n(Bt.P_Manage_Cookies_Txt) && Lt(n(Bt.P_Manage_Cookies_Txt)).html(Ct.ManagePreferenceText), Fn.initializePreferenceCenterGroups(n, t), !Ct.IsIabEnabled) {
                var u = n(Bt.P_Vendor_Container);
                u && u.parentElement.removeChild(u)
            }
            if (!Ct.showCookieList && !ot.showGeneralVendors) {
                var p = n(Bt.P_Host_Cntr);
                p && p.parentElement.removeChild(p)
            }
        }
        Lt(t.querySelector("#onetrust-pc-sdk")).append('<iframe class="ot-text-resize" title="onetrust-text-resize" style="position:absolute;top:-50000px;width:100em;" aria-hidden="true"></iframe>');
        var k = document.getElementById("onetrust-consent-sdk");
        Lt(k).append(t), bt.ignoreInjectingHtmlCss || Lt(document.body).append(k), (Ct.showCookieList || ot.showGeneralVendors) && cn.InitializeHostList()
    }, qn.prototype.setParentGroupName = function(e, t, o, n) {
        var s = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        Lt(s).html(t), Lt(s).attr("id", o), bt.pcName === $e && (e.querySelector(Bt.P_Category_Header).innerHTML = t, e.querySelector("" + Bt.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }, qn.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var s = !0; - 1 < ot.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (s = !1);
        var r = Dt.generateLegIntButtonElements(s, t.OptanonGroupId);
        o ? n.insertAdjacentHTML("afterend", r) : e.insertAdjacentHTML("beforeend", r)
    }, qn.prototype.setParentGroupDescription = function(e, t, o, n, s) {
        var r = en.safeFormattedGroupDescription(t),
            i = e.querySelector("p:not(.ot-always-active)"),
            l = e.querySelector(Bt.P_Acc_Grp_Desc),
            a = i || l;
        return -1 < yt.indexOf(t.Type) && o.PCGrpDescType === P.Legal ? r = t.DescriptionLegal : a.classList.add("ot-category-desc"), bt.legIntSettings.PAllowLI && !bt.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? a.parentElement.classList.add("ot-leg-border-color") : Pt.removeChild(e.querySelector(Bt.P_Li_Hdr))), bt.pcName !== $e && a.setAttribute("id", n), Lt(a).html(r), t.Type === dt && Pt.removeChild(a), a
    }, qn.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        ln.toggleEl = Lt(e(".ot-tgl")).el.cloneNode(!0), ln.arrowEl = Lt(e("#onetrust-pc-sdk > " + Bt.P_Arrw_Cntr)).el.cloneNode(!0), ln.subGrpEl = Lt(e(Bt.P_Sub_Grp_Cntr)).el.cloneNode(!0), ln.vListEl = Lt(e(Bt.P_Ven_Lst_Cntr)).el.cloneNode(!0), ln.cListEl = Lt(e(Bt.P_Host_Lst_cntr)).el.cloneNode(!0), ln.chkboxEl = Lt(e(Bt.P_CBx_Cntr)).el.cloneNode(!0), ln.accordionEl = Lt(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(bt.pcName) && (ln.plusMinusEl = Lt(e(".ot-plus-minus")).el.cloneNode(!0)), Pt.removeChild(e(".ot-tgl")), Pt.removeChild(e("#onetrust-pc-sdk > " + Bt.P_Arrw_Cntr)), Pt.removeChild(e(Bt.P_Sub_Grp_Cntr)), Pt.removeChild(e(Bt.P_Ven_Lst_Cntr)), Pt.removeChild(e(Bt.P_Host_Lst_cntr)), Pt.removeChild(e(Bt.P_CBx_Cntr)), Pt.removeChild(e(".ot-acc-cntr")), t.test(bt.pcName) && Pt.removeChild(e(".ot-plus-minus"))
    }, qn.prototype.insertSelectAllEls = function(e) {
        var t = e(Bt.P_Select_Cntr + " .ot-sel-all-chkbox"),
            o = ln.chkboxEl.cloneNode(!0);
        o.id = Bt.P_Sel_All_Host_El, o.querySelector("input").id = "select-all-hosts-groups-handler", o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), Lt(t).append(o);
        var n = ln.chkboxEl.cloneNode(!0);
        n.id = Bt.P_Sel_All_Vendor_Consent_El, n.querySelector("input").id = "select-all-vendor-groups-handler", n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), Lt(t).append(n);
        var s = ln.chkboxEl.cloneNode(!0);
        s.id = Bt.P_Sel_All_Vendor_Leg_El, s.querySelector("input").id = "select-all-vendor-leg-handler", s.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), Lt(t).append(s)
    }, qn.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o = bt.pcName;
        if (nt.isV2Template) {
            Fn.cloneOtHtmlEls(e);
            var n = ln.chkboxEl.cloneNode(!0);
            n.querySelector("input").classList.add("category-filter-handler"), Lt(e(Bt.P_Fltr_Modal + " " + Bt.P_Fltr_Option)).append(n), Fn.insertSelectAllEls(e)
        }
        var s = Lt(e("#onetrust-pc-sdk " + Bt.P_Category_Grp));
        o === Je || o === Ze || o === Qe ? Ct.PCenterEnableAccordion ? Pt.removeChild(s.el.querySelector(Bt.P_Category_Item + ":not(.ot-accordion-layout)")) : Pt.removeChild(s.el.querySelector(Bt.P_Category_Item + ".ot-accordion-layout")) : o === $e && (Ct.PCenterEnableAccordion = !1);
        var r, i = e("#onetrust-pc-sdk " + Bt.P_Category_Item),
            l = nt.isV2Template ? ln.subGrpEl.cloneNode(!0) : Lt(e(Bt.P_Sub_Grp_Cntr)),
            a = nt.isV2Template ? "" : Lt(e(Bt.P_Acc_Container + " " + Bt.P_Sub_Grp_Cntr));
        Ct.PCTemplateUpgrade && /otPcTab/.test(o) && (r = e(".ot-abt-tab").cloneNode(!0), Pt.removeChild(e(".ot-abt-tab"))), s.el.removeChild(i), nt.isV2Template ? Ct.PCAccordionStyle === z.Caret && (Lt(e("#onetrust-pc-sdk " + Bt.P_Vendor_List)).addClass("ot-enbl-chr"), Ct.PCenterEnableAccordion && Lt(e("#onetrust-pc-sdk " + Bt.P_Content)).addClass("ot-enbl-chr")) : Lt(i.querySelector(Bt.P_Sub_Grp_Cntr)).remove();
        var c = Ct.Groups.filter(function(e) {
                return e.Order
            }),
            d = 0 === s.el.children.length,
            u = e(Bt.P_Li_Hdr) || i.querySelector(Bt.P_Li_Hdr);
        bt.legIntSettings.PAllowLI && bt.grpContainLegalOptOut && "IAB2" === Ct.IabType && !bt.legIntSettings.PShowLegIntBtn ? (u.querySelector("span:first-child").innerText = Ct.ConsentText, u.querySelector("span:last-child").innerText = Ct.LegitInterestText, Ct.PCenterEnableAccordion && u ? u.classList.add("ot-leg-border-color") : "otPcList" === o && i.insertAdjacentElement("afterbegin", u)) : (Pt.removeChild(e("#onetrust-pc-sdk " + Bt.P_Li_Hdr)), Pt.removeChild(i.querySelector(Bt.P_Li_Hdr)));
        for (var p = e(".ot-tab-desc"), k = 0; k < c.length; k++) {
            var h = c[k],
                y = h.GroupName,
                g = h.CustomGroupId,
                f = i.cloneNode(!0),
                b = "ot-group-id-" + g,
                C = "ot-header-id-" + g,
                m = "ot-desc-id-" + g;
            (f = Lt(f).el).setAttribute("data-optanongroupid", g);
            var v = f.querySelector("input,button");
            v && (v.setAttribute("aria-controls", m), v.setAttribute("aria-labelledby", C)), Fn.setParentGroupName(f, y, C, m), o === Xe && (h.ShowVendorList && "IAB2" === Ct.IabType ? (Pt.removeChild(f.querySelector("p:not(.ot-always-active)")), Pt.removeChild(f.querySelector(Bt.P_Acc_Txt + ":not(" + Bt.P_Acc_Container + ")")), h.SubGroups.length || nt.isV2Template || Pt.removeChild(f.querySelector(Bt.P_Sub_Grp_Cntr))) : Pt.removeChild(f.querySelector(Bt.P_Acc_Container)));
            var P = Fn.setParentGroupDescription(f, h, Ct, m, b);
            nt.isV2Template ? Fn.setToggle(f, P, h, b, C) : Fn.setToggleProps(f, P, h, b, C);
            var A = !!e("#onetrust-pc-sdk " + Bt.P_Category_Grp).querySelector(Bt.P_Category_Item),
                T = s.el.querySelectorAll(Bt.P_Category_Item);
            if (T = T[T.length - 1], d ? s.append(f) : A ? St.insertAfter(f, T) : St.insertAfter(f, s.el.querySelector(Bt.P_Li_Hdr) || s.el.querySelector("h3")), 0 < h.SubGroups.length && h.ShowSubgroup) {
                var S = o === Xe && h.ShowVendorList && "IAB2" === Ct.IabType && !Ct.PCTemplateUpgrade;
                Fn.setSubGrps(h, S ? a : l, f, Ct)
            }
            var I = Ct.PCGrpDescLinkPosition === w.Top;
            h.Type === dt && I && (P = f.querySelector(Bt.P_Sub_Grp_Cntr));
            var L = I ? P : null;
            Fn.setVendorListBtn(f, e, t, h, L, Ct), Fn.setHostListBtn(f, e, t, h), ot.dataGroupState.push(h)
        }
        if ("otPcTab" === o)
            if (r && e("#onetrust-pc-sdk " + Bt.P_Category_Grp).insertAdjacentElement("afterbegin", r), p && 640 < window.innerWidth && Lt(p).append(t.querySelectorAll("#onetrust-pc-sdk " + Bt.P_Desc_Container)), Ct.IsIabEnabled) e(Bt.P_Desc_Container + " .category-vendors-list-handler").innerHTML = Ct.VendorListText + "&#x200E;";
            else {
                var _ = e(Bt.P_Desc_Container + " .category-vendors-list-handler");
                _ && _.parentElement.removeChild(_)
            }
    }, qn.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
    }, qn.prototype.setVendorListBtn = function(e, t, o, n, s, r) {
        var i = bt.pcName;
        if (n.ShowVendorList) {
            var l = void 0,
                a = void 0;
            if (nt.isV2Template ? l = (a = ln.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : a = (l = e.querySelector(".category-vendors-list-handler")).parentElement, l.innerHTML = r.VendorListText + "&#x200E;", l.setAttribute("aria-label", r.VendorListText + " " + Ct.PCOpensVendorDetailsAlert), l.setAttribute("data-parent-id", n.CustomGroupId), r.PCGrpDescType === P.UserFriendly && l.insertAdjacentHTML("afterend", "<a href='" + Ct.IabLegalTextUrl + "?lang=" + ot.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + r.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + Ct.NewWinTxt + "</span></a>"), nt.isV2Template) {
                var c = e;
                i === $e ? c = e.querySelector("" + Bt.P_Desc_Container) : r.PCenterEnableAccordion && (c = e.querySelector(Bt.P_Acc_Txt)), c.insertAdjacentElement("beforeend", a)
            }
            s && s.insertAdjacentElement("beforebegin", a)
        } else if (!nt.isV2Template) {
            if (i !== Ze && i !== Je || r.PCenterEnableAccordion) {
                if (i === Xe || i === Ze || i === Je && r.PCenterEnableAccordion) {
                    var d = t("#vendor-list-container"),
                        u = e.querySelector(Bt.P_Acc_Txt);
                    d && o.querySelector("" + Bt.P_Content).removeChild(d), nt.isV2Template || Lt(u).el.removeChild(u.querySelector(Bt.P_Ven_Lst_Cntr))
                }
            } else Pt.removeChild(e.querySelector(Bt.P_Ven_Lst_Cntr));
            if (i === $e || i === Qe) {
                var p = e.querySelector(Bt.P_Ven_Lst_Cntr);
                p && p.parentElement.removeChild(p)
            }
        }
    }, qn.prototype.setHostListBtn = function(e, t, o, n) {
        var s = bt.pcName,
            r = !1;
        Ct.showCookieList && (r = -1 < Pt.findIndex(h(n.SubGroups, [n]), function(e) {
            return -1 === ut.indexOf(e.Type) && e.FirstPartyCookies.length
        }));
        var i = ot.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
        if ((Ct.showCookieList || ot.showGeneralVendors) && (n.ShowHostList || r || i)) {
            var l = void 0;
            if (nt.isV2Template) {
                var a = ln.cListEl.cloneNode(!0);
                l = a.querySelector(".category-host-list-handler");
                var c = e;
                s === $e ? c = e.querySelector("" + Bt.P_Desc_Container) : Ct.PCenterEnableAccordion && (c = e.querySelector(Bt.P_Acc_Txt)), c.insertAdjacentElement("beforeend", a)
            } else l = e.querySelector(".category-host-list-handler");
            if (l) {
                var d = ot.showGeneralVendors ? Ct.GroupGenVenListLabel : Ct.ThirdPartyCookieListText;
                l.innerHTML = d + "&#x200E;", l.setAttribute("aria-label", d + " " + Ct.PCOpensCookiesDetailsAlert), l.setAttribute("data-parent-id", n.CustomGroupId)
            }
        } else if (s === Xe) {
            var u = t("#vendor-list-container"),
                p = e.querySelector(Bt.P_Acc_Txt);
            u && o.querySelector("" + Bt.P_Content).removeChild(u), p.querySelector(Bt.P_Host_Lst_cntr) && Lt(p).el.removeChild(p.querySelector(Bt.P_Host_Lst_cntr))
        } else {
            var k = e.querySelector(Bt.P_Host_Lst_cntr);
            k && k.parentElement.removeChild(k)
        }
    }, qn.prototype.setSubGrps = function(A, T, S, I) {
        var L = bt.pcName,
            _ = I.PCGrpDescType === P.Legal,
            w = h(kt, pt),
            x = L === Xe && A.ShowVendorList && "IAB2" === I.IabType;
        if (x && !Ct.PCTemplateUpgrade) {
            var e = S.querySelector(Bt.P_Sub_Grp_Cntr);
            e.parentElement.removeChild(e)
        }
        A.SubGroups.forEach(function(e) {
            var t;
            "IAB2" !== bt.iabType || e.Type !== lt || e.HasConsentOptOut || (t = !0);
            var o, n, s = nt.isV2Template ? T.cloneNode(!0) : T.el.cloneNode(!0),
                r = s.querySelector(Bt.P_Subgrp_li).cloneNode(!0),
                i = e.CustomGroupId,
                l = "ot-sub-group-id-" + i,
                a = Gt.getGrpStatus(e).toLowerCase(),
                c = Gt.getGrpStatus(A).toLowerCase(),
                d = r.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"),
                u = r.querySelector(Bt.P_Tgl_Cntr);
            r.setAttribute("data-optanongroupid", i), nt.isV2Template ? ((n = ln.toggleEl.cloneNode(!0)).querySelector("input").setAttribute("data-optanongroupid", i), n.querySelector("input").classList.add("cookie-subgroup-handler"), o = n.cloneNode(!0), u.insertAdjacentElement("beforeend", o)) : (o = r.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", i), Lt(s.querySelector(Bt.P_Subgp_ul)).html(""), Lt(d).html(e.GroupName), o.querySelector("input").setAttribute("id", l), o.querySelector("input").setAttribute("aria-label", e.GroupName), o.querySelector("label").setAttribute("for", l);
            var p = Lt(r.querySelector(Bt.P_Subgrp_Desc));
            if (x) {
                var k = e.DescriptionLegal && _ ? e.DescriptionLegal : e.GroupDescription;
                p.html(k)
            } else {
                k = en.safeFormattedGroupDescription(e);
                var h = !1; - 1 < yt.indexOf(e.Type) && _ && (h = !0, k = e.DescriptionLegal), I.PCenterEnableAccordion && h || (p = Lt(r.querySelector("p"))), A.ShowSubGroupDescription ? p.html(k) : p.html("")
            }
            if (A.ShowSubgroupToggle && -1 < w.indexOf(e.Type)) {
                var y = en.isGroupActive(e);
                y && (r.querySelector("input").setAttribute("checked", ""), "always active" === c && -1 === yt.indexOf(e.Type) && (r.querySelector("input").disabled = !0, r.querySelector("input").setAttribute("disabled", !0)));
                var g = u.querySelector(".ot-label-status");
                if (Ct.PCShowConsentLabels ? g.innerHTML = y ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(g), bt.legIntSettings.PAllowLI && e.Type === lt && e.HasLegIntOptOut)
                    if (bt.legIntSettings.PShowLegIntBtn) Fn.setLegIntButton(r, e);
                    else {
                        var f = u.cloneNode(!0);
                        u.insertAdjacentElement("afterend", f);
                        var b = f.querySelector(".ot-label-status"),
                            C = f.querySelector("input");
                        C.setAttribute("id", l + "-leg-out"), f.querySelector("label").setAttribute("for", l + "-leg-out"), e.IsLegIntToggle = !0;
                        var m = en.isGroupActive(e);
                        Ct.PCShowConsentLabels ? b.innerHTML = m ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(b), Pt.setCheckedAttribute(null, C, m), e.IsLegIntToggle = !1
                    }
            } else "always active" === a && (A.ShowSubgroupToggle || -1 === ht.indexOf(e.Type)) || (t = !0);
            if (t && (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute("aria-hidden", !0)), "always active" !== a || t || (o && o.parentElement.removeChild(o), r.querySelector(Bt.P_Tgl_Cntr).classList.add("ot-always-active-subgroup"), Fn.setAlwaysActive(r, !0)), "COOKIE" === e.Type && -1 !== e.Parent.indexOf("STACK") && (s.style = "display:none;"), Lt(s.querySelector(Bt.P_Subgp_ul)).append(r), nt.isV2Template) {
                var v = S;
                "otPcTab" === L ? v = S.querySelector("" + Bt.P_Desc_Container) : I.PCenterEnableAccordion && (v = S.querySelector(Bt.P_Acc_Txt)), v.insertAdjacentElement("beforeend", s)
            } else {
                var P = S.querySelector(Bt.P_Category_Item + " " + Bt.P_Ven_Lst_Cntr);
                P && P.insertAdjacentElement("beforebegin", s)
            }
        })
    }, qn.prototype.setToggle = function(e, t, o, n, s) {
        var r = ln.toggleEl.cloneNode(!0);
        r.querySelector("input").classList.add("category-switch-handler");
        var i = r.querySelector("input"),
            l = e.querySelector(Bt.P_Category_Header),
            a = en.isGroupActive(o),
            c = "always active" === Gt.getGrpStatus(o).toLowerCase(),
            d = o.OptanonGroupId.toString(),
            u = !0;
        if ("IAB2" !== bt.iabType || o.Type !== lt && o.Type !== dt || o.HasConsentOptOut || (u = !1), Lt(r.querySelector("label")).attr("for", n), Lt(r.querySelector(".ot-label-txt")).html(o.GroupName), bt.legIntSettings.PAllowLI && o.Type === lt && o.HasLegIntOptOut)
            if (bt.legIntSettings.PShowLegIntBtn) Fn.setLegIntButton(e, o, !0, t);
            else {
                var p = r.cloneNode(!0);
                o.IsLegIntToggle = !0;
                var k = en.isGroupActive(o),
                    h = p.querySelector(".ot-label-status");
                Ct.PCShowConsentLabels ? h.innerHTML = k ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(h), o.IsLegIntToggle = !1, en.setInputID(p.querySelector("input"), n + "-leg-out", d, k, s), Lt(p.querySelector("label")).attr("for", n + "-leg-out"), l.insertAdjacentElement("afterend", p)
            }
        var y = r.querySelector(".ot-label-status");
        Ct.PCShowConsentLabels ? y.innerHTML = a ? Ct.PCActiveText : Ct.PCInactiveText : Pt.removeChild(y), !c && u || (r.classList.add("ot-hide-tgl"), r.querySelector("input").setAttribute("aria-hidden", !0)), u && (c ? Fn.setAlwaysActive(e) : (l.insertAdjacentElement("afterend", r), en.setInputID(i, n, d, a, s))), Ct.PCenterEnableAccordion && (Ct.PCAccordionStyle === z.Caret ? l.insertAdjacentElement("afterend", ln.arrowEl.cloneNode(!0)) : l.insertAdjacentElement("beforebegin", ln.plusMinusEl.cloneNode(!0)))
    }, qn.prototype.setToggleProps = function(e, t, o, n, s) {
        var r = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
            i = e.querySelectorAll("label"),
            l = en.isGroupActive(o),
            a = o.CustomGroupId,
            c = e.querySelector(".label-text");
        c && Lt(c).html(o.GroupName);
        for (var d = 0; d < r.length; d++)
            if (i[d] && Lt(i[d]).attr("for", n), 2 <= r.length && 0 === d) Lt(r[d]).attr("id", n + "-toggle");
            else {
                var u = !0;
                if ("IAB2" !== bt.iabType || o.Type !== lt && o.Type !== dt || o.HasConsentOptOut || (u = !1), bt.legIntSettings.PAllowLI && o.Type === lt && o.HasLegIntOptOut)
                    if (bt.legIntSettings.PShowLegIntBtn) Fn.setLegIntButton(e, o, !0, t);
                    else {
                        var p = e.querySelector(Bt.P_Tgl_Cntr + ":not(" + Bt.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle"),
                            k = p.cloneNode(!0);
                        p.insertAdjacentElement("afterend", k);
                        var h = k.querySelector("input");
                        o.IsLegIntToggle = !0;
                        var y = en.isGroupActive(o);
                        o.IsLegIntToggle = !1, en.setInputID(h, n + "-leg-out", a, y, s), Lt(k.querySelector("label")).attr("for", n + "-leg-out"), Pt.removeChild(k.querySelector(Bt.P_Arrw_Cntr))
                    }
                var g = "always active" === Gt.getGrpStatus(o).toLowerCase();
                if (g || !u) {
                    var f = r[d].closest(".ot-toggle");
                    f && (f.classList.add("ot-hide-tgl"), f.querySelector("input").setAttribute("aria-hidden", !0))
                }
                u && (g && Fn.setAlwaysActive(e), en.setInputID(r[d], n, a, l, s))
            }
    }, qn.prototype.setAlwaysActive = function(e, t) {
        void 0 === t && (t = !1);
        var o = bt.pcName;
        if (o === Xe || o === $e || t) e.querySelector(Bt.P_Tgl_Cntr).insertAdjacentElement("afterbegin", Lt("<div class='ot-always-active'>" + Ct.AlwaysActiveText + "</div>", "ce").el);
        else {
            var n = e.querySelector(Bt.P_Category_Header);
            !nt.isV2Template && Ct.PCenterEnableAccordion && (n = e.querySelector(Bt.P_Arrw_Cntr)), Lt(n).el.insertAdjacentElement("afterend", Lt("<div class='ot-always-active'>" + Ct.AlwaysActiveText + "</div>", "ce").el)
        }
        if (Ct.PCenterEnableAccordion) {
            var s = e.querySelector(Bt.P_Acc_Header);
            s && s.classList.add("ot-always-active-group")
        } else {
            var r = e.querySelector("" + Bt.P_Desc_Container);
            r && r.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group")
        }
    }, qn);

    function qn() {}
    var jn, Un = (zn.prototype.showBanner = function() {
        var e = bt.bannerName,
            t = Lt(this.El);
        ot.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== je && e !== qe && e !== We ? t.css("display: block") : Ct.BAnimation === se.SlideIn ? this.slideInAnimation(t, e) : Ct.BAnimation === se.FadeIn && t.addClass("ot-fade-in")
    }, zn.prototype.insertAlertHtml = function() {
        function e(e) {
            return r.querySelector(e)
        }

        function t(e) {
            return r.querySelectorAll(e)
        }
        var o = this,
            n = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }],
            s = Ct.BannerPurposeTitle || Ct.BannerPurposeDescription || Ct.BannerFeatureTitle || Ct.BannerFeatureDescription || Ct.BannerInformationTitle || Ct.BannerInformationDescription,
            r = document.createDocumentFragment();
        if (Uo.bannerGroup) {
            var i = bt.bannerName,
                l = document.createElement("div");
            Lt(l).html(Uo.bannerGroup.html);
            var a = l.querySelector("#onetrust-banner-sdk");
            Ct.BannerRelativeFontSizesToggle && Lt(a).addClass("otRelFont"), Ct.BannerFocus && a.setAttribute("tabindex", "0"), Ct.useRTL && Lt(a).attr("dir", "rtl"), "IAB2" === bt.iabType && Ct.BannerDPDDescription.length && Lt(a).addClass("ot-iab-2");
            var c = Ct.BannerPosition;
            if (c && ("bottom-left" === c ? Lt(a).addClass("ot-bottom-left") : "bottom-right" === c ? Lt(a).addClass("ot-bottom-right") : Lt(a).addClass(c)), Lt(r).append(a), Ct.BannerTitle ? (Lt(e("#onetrust-policy-title")).html(Ct.BannerTitle), Lt(e('[role="alertdialog"]')).attr("aria-labelledby", "onetrust-policy-title")) : (Pt.removeChild(e("#onetrust-policy-title")), Lt(e("#onetrust-banner-sdk")).addClass("ot-wo-title")), !Ct.IsIabEnabled && ot.showGeneralVendors && Ct.BannerNonIABVendorListText) {
                var d = document.createElement("div");
                d.setAttribute("id", "ot-gv-link-ctnr"), Lt(d).html('<button class="ot-link-btn ot-gv-list-handler">' + Ct.BannerNonIABVendorListText + "</button>"), Lt(e("#onetrust-policy")).el.appendChild(d)
            }
            Lt(e("#onetrust-policy-text")).html(Ct.AlertNoticeText), "IAB2" === Ct.IabType && Ct.BannerDPDDescription.length && i !== Ke ? (Lt(e(".ot-dpd-container .ot-dpd-title")).html(Ct.BannerDPDTitle), Lt(e(".ot-dpd-container .ot-dpd-desc")).html(Ct.BannerDPDDescription.join(",&nbsp;"))) : Pt.removeChild(e(".ot-dpd-container"));
            var u = Lt(e("#onetrust-group-container"));
            "IAB2" === bt.iabType && Ct.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
            var p = "IAB2" === Ct.IabType && Ct.BannerDPDDescription.length ? i !== Ke ? Lt(e(".ot-dpd-container .ot-dpd-desc")) : u : Lt(e("#onetrust-policy-text"));
            Ct.IsIabEnabled && Ct.BannerIABPartnersLink && p.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n                ' + Ct.BannerIABPartnersLink + "\n                </button>"), Ct.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), Lt(this._acceptBtn).html(Ct.AlertAllowCookiesText), i !== We || Ct.showBannerCookieSettings || Ct.BannerShowRejectAllButton || Lt(this._acceptBtn.parentElement).addClass("accept-btn-only")) : Pt.removeChild(e("#onetrust-accept-btn-handler")), Ct.BannerShowRejectAllButton && Ct.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), Lt(this._rejectBtn).html(Ct.BannerRejectAllButtonText), e("#onetrust-button-group-parent").classList.add("has-reject-all-button")) : (Pt.removeChild(e("#onetrust-reject-all-handler")), Pt.removeChild(e("#onetrust-reject-btn-container")));
            var k = Lt(e("#onetrust-pc-btn-handler"));
            Ct.showBannerCookieSettings ? (k.html(Ct.AlertMoreInfoText), Ct.BannerSettingsButtonDisplayLink && k.addClass("cookie-setting-link"), i !== We || Ct.showBannerAcceptButton || k.addClass("cookie-settings-btn-only")) : Pt.removeChild(k.el);
            var h = !Ct.showBannerAcceptButton && !Ct.showBannerCookieSettings && !Ct.BannerShowRejectAllButton;
            h && e("#onetrust-button-group-parent").parentElement.removeChild(e("#onetrust-button-group-parent"));
            var y = Ct.showBannerCloseButton,
                g = Lt(t(".banner-close-button")).el,
                f = e("#onetrust-button-group"),
                b = Ct.BCloseButtonType === ie.Link;
            if (y)
                for (C = 0; C < g.length; C++) b ? (Lt(g[C]).html(Ct.BContinueText), Lt(a).addClass("ot-close-btn-link"), Lt(g[C]).removeClass("onetrust-close-btn-ui"), Lt(g[C]).removeClass("ot-close-icon"), i !== Ue && i !== ze || (f.insertAdjacentElement("afterbegin", e(".onetrust-close-btn-handler").parentElement), Lt(g[C]).attr("tabindex", "1"))) : Lt(g[C]).el.setAttribute("aria-label", Ct.BannerCloseButtonText || "Close Cookie Banner");
            else {
                for (var C = 0; C < g.length; C++) Lt(g[C].parentElement).el.removeChild(g[C]);
                i !== qe && i !== ze || Pt.removeChild(e("#onetrust-close-btn-container-mobile"))
            }
            if (i === qe && ("IAB2" === bt.iabType && (u.removeClass("ot-sdk-eight"), Ct.showBannerAcceptButton && f.insertAdjacentElement("afterbegin", this._acceptBtn), Ct.showBannerCookieSettings && f.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))), y && !h && "IAB2" === bt.iabType ? u.addClass("ot-sdk-nine") : y && h ? u.addClass("ot-sdk-eleven") : !y && h ? u.addClass("ot-sdk-twelve") : y || h || "IAB2" !== bt.iabType || (u.addClass("ot-sdk-ten"), Lt(e("#onetrust-button-group-parent")).addClass("ot-sdk-two"), Lt(e("#onetrust-button-group-parent")).removeClass("ot-sdk-three"))), y && i === Ue && "IAB2" === bt.iabType && !b) {
                var m = e(".banner-close-btn-container");
                m.parentElement.removeChild(m), Lt(a).el.insertAdjacentElement("beforeEnd", m), Lt(e("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
            }
            var v = Lt(e("#banner-options")).el;
            s ? (i === ze ? this.setFloatingRoundedIconBannerCmpOptions(e, n) : (this.setCmpBannerOptions(e, n), i === Ke && u.el.insertAdjacentElement("beforeend", v)), Lt(window).on("resize", function() {
                window.innerWidth <= 896 && o.setBannerOptionContent()
            })) : (bt.bannerName === Ue && (v = Lt(e(".banner-options-card")).el), Pt.removeChild(v))
        }
        bt.bannerName === Ke && (this._fourBtns = Ct.BannerShowRejectAllButton && Ct.showBannerAcceptButton && Ct.showBannerCookieSettings && Ct.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), Ct.BShowSaveBtn ? Lt(this._saveBtn).html(Ct.BSaveBtnTxt) : (Pt.removeChild(this._saveBtn), this._saveBtn = null), _t.insertFooterLogo(t(".ot-bnr-footer-logo a")), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
            o.setBannerBtn()
        }), this._fourBtns && Lt(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e));
        var P = document.createElement("div");
        Lt(P).append(r), bt.ignoreInjectingHtmlCss || (Lt("#onetrust-consent-sdk").append(P.firstChild), s && this.setBannerOptionContent());
        var A = Lt("#onetrust-group-container").el,
            T = Lt("#onetrust-button-group-parent").el;
        (A.length && A[0].clientHeight) < (T.length && T[0].clientHeight) ? Lt("#onetrust-banner-sdk").removeClass("vertical-align-content"): Lt("#onetrust-banner-sdk").addClass("vertical-align-content");
        var S = document.querySelector("#onetrust-button-group-parent button:first-of-type"),
            I = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        I && S && 1 < Math.abs(I.offsetTop - S.offsetTop) && Lt("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }, zn.prototype.slideInAnimation = function(e, t) {
        t === qe ? "bottom" === Ct.BannerPosition ? (e.css("bottom: -99px"), e.animate({
            bottom: "0px"
        }, 1e3), ot.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 0px"), ot.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto"), bt.pagePushedDown && !ro.checkIsBrowserIE11OrBelow() ? ro.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3), ot.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("top: 0px; bottom: auto"), ot.bnrAnimationInProg = !1
        }, 1e3))) : t !== je && t !== We || (e.css("bottom: -300px"), e.animate({
            bottom: "1em"
        }, 2e3), ot.bnrAnimationInProg = !0, setTimeout(function() {
            e.css("bottom: 1rem"), ot.bnrAnimationInProg = !1
        }, 2e3))
    }, zn.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (Pt.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), Pt.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), Pt.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), Pt.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (Pt.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), Pt.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), Pt.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), Pt.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }, zn.prototype.setCmpBannerOptions = function(r, e) {
        var i = Lt(r("#banner-options .banner-option")).el.cloneNode(!0);
        Lt(r("#banner-options")).html("");
        var l = 1;
        e.forEach(function(e) {
            var t = i.cloneNode(!0),
                o = Ct[e.titleKey],
                n = Ct[e.descriptionKey];
            if (o || n) {
                t.querySelector(".banner-option-header :first-child").innerHTML = o;
                var s = t.querySelector(".banner-option-details");
                n ? (s.setAttribute("id", "option-details-" + l++), s.innerHTML = n) : s.parentElement.removeChild(s), Lt(r("#banner-options")).el.appendChild(t)
            }
        })
    }, zn.prototype.setFloatingRoundedIconBannerCmpOptions = function(s, e) {
        var r = Lt(s("#banner-options button")).el.cloneNode(!0),
            n = Lt(s(".banner-option-details")).el.cloneNode(!0);
        Lt(s("#banner-options")).html(""), e.forEach(function(e) {
            var t = r.cloneNode(!0),
                o = Ct[e.titleKey],
                n = Ct[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, Lt(s("#banner-options")).el.appendChild(t))
        }), e.forEach(function(e) {
            var t = Ct[e.descriptionKey];
            if (t) {
                var o = n.cloneNode(!0);
                o.innerHTML = t, o.classList.add(e.identifier), Lt(s("#banner-options")).el.appendChild(o)
            }
        })
    }, zn.prototype.setBannerOptionContent = function() {
        bt.bannerName !== qe && bt.bannerName !== ze || setTimeout(function() {
            if (window.innerWidth < 769) {
                var e = Lt("#banner-options").el[0];
                Lt("#onetrust-group-container").el[0].appendChild(e)
            } else e = Lt("#banner-options").el[0], bt.bannerName === ze ? Lt(".banner-content").el[0].appendChild(e) : Lt("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
        })
    }, zn.prototype.setAdditionalDesc = function(e) {
        var t = Ct.BannerAdditionalDescPlacement,
            o = document.createElement("span");
        o.classList.add("ot-b-addl-desc"), o.innerHTML = Ct.BannerAdditionalDescription;
        var n = e("#onetrust-policy-text");
        if (t === x.AfterTitle) n.insertAdjacentElement("beforeBegin", o);
        else if (t === x.AfterDescription) n.insertAdjacentElement("afterEnd", o);
        else if (t === x.AfterDPD) {
            var s = e(".ot-dpd-container .ot-dpd-desc");
            Ct.ChoicesBanner && (s = e("#onetrust-group-container")), s.insertAdjacentElement("beforeEnd", o)
        }
    }, zn.prototype.insertGrps = function(e) {
        var p = e(".ot-cat-item").cloneNode(!0);
        Pt.removeChild(e(".ot-cat-item")), Ct.BCategoryStyle === oe.Checkbox ? Pt.removeChild(p.querySelector(".ot-tgl")) : (Pt.removeChild(p.querySelector(".ot-chkbox")), Lt(p).addClass("ot-cat-bdr"));
        var k = e(".ot-cat-lst ul");
        Ct.Groups.forEach(function(e) {
            var t = p.cloneNode(!0),
                o = t.querySelector(".ot-tgl,.ot-chkbox"),
                n = e.GroupName,
                s = e.CustomGroupId,
                r = "ot-bnr-grp-id-" + s,
                i = "ot-bnr-hdr-id-" + s,
                l = -1 !== ht.indexOf(e.Type),
                a = Gt.getGrpStatus(e).toLowerCase() === xe || l,
                c = en.isGroupActive(e) || l;
            Lt(o.querySelector("label")).attr("for", r), Lt(o.querySelector(".ot-label-txt")).html(e.GroupName);
            var d = o.querySelector("input");
            a && (Ct.BCategoryStyle === oe.Toggle ? (Pt.removeChild(o), t.insertAdjacentElement("beforeend", Lt("<div class='ot-always-active'>" + Ct.AlwaysActiveText + "</div>", "ce").el)) : Lt(d).attr("disabled", !0)), d.classList.add("category-switch-handler"), en.setInputID(d, r, s, c, i);
            var u = t.querySelector("h4");
            Lt(u).html(n), Lt(u).attr("id", i), Lt(k).append(t)
        })
    }, zn);

    function zn() {
        this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1
    }
    var Wn, Kn = (Yn.prototype.initCookieSettingHandlers = function() {
        Lt(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookieSettingsBoundListner)
    }, Yn.prototype.initFlgtCkStgBtnEventHandlers = function() {
        Lt(".ot-floating-button__open").on("click", Wn.floatingCookieSettingOpenBtnClicked), Lt(".ot-floating-button__close").on("click", Wn.floatingCookieSettingCloseBtnClicked)
    }, Yn.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        Lt(Wn.fltgBtnSltr).addClass("ot-pc-open"), Lt(Wn.fltgBtnFSltr).attr("aria-hidden", "true"), Lt(Wn.fltgBtnBSltr).attr("aria-hidden", ""), Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-label", ""), Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !0), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-label", Ct.AriaClosePreferences), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !1), co.triggerGoogleAnalyticsEvent(yo, So), Wn.showCookieSettingsHandler(e)
    }, Yn.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-label", Ct.AriaOpenPreferences), Lt(Wn.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !1), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-label", ""), Lt(Wn.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !0), e && (co.triggerGoogleAnalyticsEvent(yo, Io), Wn.hideCookieSettingsHandler(e))
    }, Yn.prototype.initialiseLegIntBtnHandlers = function() {
        Lt(document).on("click", ".ot-obj-leg-btn-handler", Wn.onLegIntButtonClick), Lt(document).on("click", ".ot-remove-objection-handler", Wn.onLegIntButtonClick)
    }, Yn.prototype.initialiseAddtlVenHandler = function() {
        Lt("#onetrust-pc-sdk #ot-addtl-venlst").on("click", Wn.selectVendorsGroupHandler), Lt("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", Wn.selAllAdtlVenHandler)
    }, Yn.prototype.initializeGenVenHandlers = function() {
        Lt("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", Wn.genVendorToggled), Lt("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", Wn.genVendorDetails), Lt("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", Wn.selectAllGenVenHandler)
    }, Yn.prototype.initialiseConsentNoticeHandlers = function() {
        var t = 37,
            o = 39;
        if (bt.pcName === $e && Wn.categoryMenuSwitchHandler(), Lt("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", Wn.bannerCloseButtonHandler), Lt("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", xn.allowAllEventHandler.bind(this, !0)), Lt("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", xn.rejectAllEventHandler.bind(this, !0)), Lt("#onetrust-pc-sdk #close-pc-btn-handler").on("click", Wn.hideCookieSettingsHandler), Lt(document).on("keydown", function(e) {
                var t = document.getElementById("onetrust-pc-sdk");
                if (27 === e.keyCode && t && "none" !== window.getComputedStyle(t).display) {
                    var o = Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Modal).el[0];
                    "block" === o.style.display || "0px" < o.style.width ? (Wn.closeFilter(), Lt("#onetrust-pc-sdk #filter-btn-handler").focus()) : Ct.NoBanner && !Ct.ShowPreferenceCenterCloseButton || Wn.hideCookieSettingsHandler(), Wn.confirmPC()
                }
            }), Lt("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", Wn.hideCookieSettingsHandler), Lt("#onetrust-pc-sdk .category-switch-handler").on("click", Wn.toggleV2Category), Lt("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", Wn.toggleSubCategory), Lt("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
                bt.pcName === $e && (e.keyCode !== t && e.keyCode !== o || (Ct.PCTemplateUpgrade ? Wn.changeSelectedTabV2(e) : Wn.changeSelectedTab(e)))
            }), Lt("#onetrust-pc-sdk").on("click", Bt.P_Category_Item + " > input:first-child," + Bt.P_Category_Item + " > button:first-child", Wn.onCategoryItemToggle.bind(this)), (Ct.showCookieList || ot.showGeneralVendors) && (Lt("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
                ot.showGeneralVendors && Ct.showCookieList ? ot.cookieListType = W.HostAndGenVen : ot.showGeneralVendors ? ot.cookieListType = W.GenVen : ot.cookieListType = W.Host, Wn.pcLinkSource = e.target, Wn.loadCookieList(e.target)
            }), Ct.allowHostOptOut || ot.genVenOptOutEnabled ? (Lt("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", Wn.selectAllHostsGroupsHandler), Lt("#onetrust-pc-sdk " + Bt.P_Host_Cntr).on("click", Wn.selectHostsGroupHandler)) : Lt("#onetrust-pc-sdk " + Bt.P_Host_Cntr).on("click", Wn.toggleAccordionStatus)), Ct.IsIabEnabled && (Lt("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
                Wn.pcLinkSource = e.target, Wn.showVendorsList(e.target)
            }), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Container).on("click", Wn.selectVendorsGroupHandler), Ct.UseGoogleVendors || Wn.bindSelAllHandlers(), Wn.initialiseLegIntBtnHandlers()), Ct.IsIabEnabled || Ct.showCookieList || ot.showGeneralVendors) {
            Lt(document).on("click", ".back-btn-handler", Wn.backBtnHandler), Lt("#onetrust-pc-sdk #vendor-search-handler").on("keyup", function(e) {
                var t = e.target.value.trim();
                Wn.isCookieList ? pn.searchHostList(t) : (pn.loadVendorList(t, []), Ct.UseGoogleVendors && pn.searchVendors(pn.googleSearchSelectors, ot.addtlVendorsList, X.GoogleVendor, t), ot.showGeneralVendors && pn.searchVendors(pn.genVendorSearchSelectors, Ct.GeneralVendors, X.GeneralVendor, t)), pn.playSearchStatus(Wn.isCookieList)
            }), Lt("#onetrust-pc-sdk #filter-btn-handler").on("click", Wn.toggleVendorFiltersHandler), Lt("#onetrust-pc-sdk #filter-apply-handler").on("click", Wn.applyFilterHandler), Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Modal).on("click", Wn.tglFltrOptionHandler), !nt.isV2Template && bt.pcName !== Xe || Lt("#onetrust-pc-sdk #filter-cancel-handler").on("click", Wn.cancelFilterHandler), !nt.isV2Template && bt.pcName === Xe || Lt("#onetrust-pc-sdk #clear-filters-handler").on("click", Wn.clearFiltersHandler), nt.isV2Template ? Lt("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Lt("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
            }) : Lt("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(), Lt("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
            });
            var e = Lt("#onetrust-pc-sdk .category-filter-handler").el;
            Lt(e[0]).on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(), Lt("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
            })
        }
        Ct.NoBanner && (Ct.OnClickCloseBanner && document.body.addEventListener("click", xn.bodyClickEvent), Ct.ScrollCloseBanner && window.addEventListener("scroll", xn.scrollCloseBanner))
    }, Yn.prototype.bindSelAllHandlers = function() {
        Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", Wn.selectAllVendorsLegIntHandler), Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", Wn.SelectAllVendorConsentHandler)
    }, Yn.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event), co.triggerGoogleAnalyticsEvent(yo, Co), bn.hideConsentNoticeV2(), Wn.getResizeElement().removeEventListener("resize", Wn.setCenterLayoutFooterHeight), window.removeEventListener("resize", Wn.setCenterLayoutFooterHeight), !nt.isV2Template && bt.pcName !== Xe || Wn.closeFilter(!1), bt.pcName === Qe && Lt("#onetrust-pc-sdk " + Bt.P_Content).removeClass("ot-hide"), Wn.hideVendorsList(), Uo.csBtnGroup && (Lt(Wn.fltgBtnSltr).removeClass("ot-pc-open"), this.floatingCookieSettingCloseBtnClicked(null)), Wn.confirmPC(e), !1
    }, Yn.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked,
            o = Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Host_El).el[0],
            n = o.classList.contains("line-through"),
            s = Lt("#onetrust-pc-sdk .host-checkbox-handler").el;
        Pt.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var r = 0; r < s.length; r++) s[r].getAttribute("disabled") || Pt.setCheckedAttribute(null, s[r], t);
        ot.optanonHostList.forEach(function(e) {
            Xt.updateHostStatus(e, t)
        }), Ct.GeneralVendors.forEach(function(e) {
            Jt.updateGenVendorStatus(e.VendorCustomId, t)
        }), n && o.classList.remove("line-through")
    }, Yn.prototype.selectHostsGroupHandler = function(e) {
        Wn.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId"),
            o = e.target.getAttribute("ckType"),
            n = e.target.checked;
        if (null !== t) {
            if (o === j.GenVendor) {
                var s = Ct.GeneralVendors.find(function(e) {
                    return e.VendorCustomId === t
                }).Name;
                co.triggerGoogleAnalyticsEvent(yo, n ? wo : xo, s + ": VEN_" + t), Jt.updateGenVendorStatus(t, n)
            } else {
                var r = Pt.findIndex(ot.optanonHostList, function(e) {
                        return e.HostId === t
                    }),
                    i = ot.optanonHostList[r];
                Wn.toggleHostStatus(i, n)
            }
            Pt.setCheckedAttribute(null, e.target, n)
        }
    }, Yn.prototype.onCategoryItemToggle = function(e) {
        bt.pcName === Qe && this.setPcListContainerHeight(), Wn.toggleAccordionStatus(e)
    }, Yn.prototype.toggleAccordionStatus = function(e) {
        var t = e.target;
        if (t && t.getAttribute("aria-expanded")) {
            var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
            t.setAttribute("aria-expanded", o)
        }
    }, Yn.prototype.toggleHostStatus = function(e, t) {
        co.triggerGoogleAnalyticsEvent(yo, t ? Eo : Bo, e.HostName + ": H_" + e.HostId), Xt.updateHostStatus(e, t)
    }, Yn.prototype.toggleBannerOptions = function(e) {
        Lt(".banner-option-input").each(function(e) {
            Lt(e).el.setAttribute("aria-expanded", !1)
        }), Wn.toggleAccordionStatus(e)
    }, Yn.prototype.bannerCloseButtonHandler = function(e) {
        if (e && e.target && e.target.className) {
            var t = e.target.className; - 1 < t.indexOf("save-preference-btn-handler") ? (ot.bannerCloseSource = f.ConfirmChoiceButton, co.triggerGoogleAnalyticsEvent(yo, Ao)) : -1 < t.indexOf("banner-close-button") ? (ot.bannerCloseSource = f.BannerCloseButton, co.triggerGoogleAnalyticsEvent(yo, fo)) : -1 < t.indexOf("ot-bnr-save-handler") && (ot.bannerCloseSource = f.BannerSaveSettings, co.triggerGoogleAnalyticsEvent(yo, bo))
        }
        return Wn.hideVendorsList(), xn.bannerCloseButtonHandler()
    }, Yn.prototype.onLegIntButtonClick = function(e) {
        if (e) {
            var t = event.currentTarget,
                o = "true" === t.parentElement.getAttribute("is-vendor"),
                n = t.parentElement.getAttribute("data-group-id"),
                s = !t.classList.contains("ot-leg-int-enabled");
            if (o) Wn.onVendorToggle(n, V.LI);
            else {
                var r = Gt.getGroupById(n);
                r.Parent ? Wn.updateSubGroupToggles(r, s, !0) : Wn.updateGroupToggles(r, s, !0)
            }
            en.updateLegIntBtnElement(t.parentElement, s)
        }
    }, Yn.prototype.updateGroupToggles = function(e, t, o) {
        Xt.toggleGroupHosts(e, t), ot.genVenOptOutEnabled && Xt.toggleGroupGenVendors(e, t), e.IsLegIntToggle = o, en.toggleGrpStatus(e, t), e.SubGroups && e.SubGroups.length && en.toogleAllSubGrpElements(e, t), this.allowAllVisible(en.setAllowAllButton()), e.IsLegIntToggle = !1
    }, Yn.prototype.updateSubGroupToggles = function(e, t, o) {
        Xt.toggleGroupHosts(e, t), ot.genVenOptOutEnabled && Xt.toggleGroupGenVendors(e, t);
        var n = Gt.getGroupById(e.Parent);
        e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle;
        var s = en.isGroupActive(n);
        t ? (en.toggleGrpStatus(e, !0), en.isAllSubgroupsEnabled(n) && !s && (en.toggleGrpStatus(n, !0), Xt.toggleGroupHosts(n, t), ot.genVenOptOutEnabled && Xt.toggleGroupGenVendors(n, t), en.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (en.toggleGrpStatus(e, !1), en.isAllSubgroupsDisabled(n) && s ? (en.toggleGrpStatus(n, !1), Xt.toggleGroupHosts(n, t), ot.genVenOptOutEnabled && Xt.toggleGroupGenVendors(n, t), en.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (en.toggleGrpStatus(n, !1), Xt.toggleGroupHosts(n, !1), ot.genVenOptOutEnabled && Xt.toggleGroupGenVendors(n, t), en.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(en.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
    }, Yn.prototype.hideCategoryContainer = function(e) {
        void 0 === e && (e = !1);
        var t = bt.pcName,
            o = nt.isV2Template;
        this.isCookieList = e, Ct.PCTemplateUpgrade ? Lt("#onetrust-pc-sdk " + Bt.P_Content).addClass("ot-hide") : Lt("#onetrust-pc-sdk .ot-main-content").hide(), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_List).removeClass("ot-hide"), t !== Xe && t !== Qe && Lt("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), t === Qe && (Lt("#onetrust-pc-sdk").el[0].style.height = ""), e ? (Lt(Bt.P_Vendor_List + " #select-all-text-container").show("inline-block"), Lt("#onetrust-pc-sdk " + Bt.P_Host_Cntr).show(), Ct.allowHostOptOut || ot.genVenOptOutEnabled ? Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Host_El).show("inline-block") : Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Host_El).hide(), Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Leg_El).hide(), Lt("#onetrust-pc-sdk " + Bt.P_Leg_Header).hide(), o || Lt("#onetrust-pc-sdk " + Bt.P_Leg_Select_All).hide(), Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Consent_El).hide(), Lt("#onetrust-pc-sdk  " + Bt.P_Vendor_Container).hide(), (Ct.UseGoogleVendors || ot.showGeneralVendors) && Lt("#onetrust-pc-sdk .ot-acc-cntr").hide(), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_List).addClass(Bt.P_Host_UI), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content).addClass(Bt.P_Host_Cnt)) : (Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Container).show(), Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Consent_El).show("inline-block"), Ct.UseGoogleVendors && Lt("#onetrust-pc-sdk .ot-acc-cntr").show(), bt.legIntSettings.PAllowLI && "IAB2" === bt.iabType ? (Lt("#onetrust-pc-sdk " + Bt.P_Select_Cntr).show(nt.isV2Template ? void 0 : "inline-block"), Lt("#onetrust-pc-sdk " + Bt.P_Leg_Select_All).show("inline-block"), Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Leg_El).show("inline-block"), Lt(Bt.P_Vendor_List + " #select-all-text-container").hide(), bt.legIntSettings.PShowLegIntBtn ? (Lt("#onetrust-pc-sdk " + Bt.P_Leg_Header).hide(), Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Leg_El).hide()) : Lt("#onetrust-pc-sdk " + Bt.P_Leg_Header).show()) : (Lt("#onetrust-pc-sdk " + Bt.P_Select_Cntr).show(), Lt(Bt.P_Vendor_List + " #select-all-text-container").show("inline-block"), Lt("#onetrust-pc-sdk " + Bt.P_Leg_Select_All).hide(), Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Leg_El).hide()), Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Host_El).hide(), Lt("#onetrust-pc-sdk " + Bt.P_Host_Cntr).hide(), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_List).removeClass(Bt.P_Host_UI), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_Content).removeClass(Bt.P_Host_Cnt)), Vn.setFilterList(e)
    }, Yn.prototype.showAllVendors = function(t) {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, Wn.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), Wn.showVendorsList(null, !0), [4, Wn.showCookieSettingsHandler(t)];
                    case 2:
                        return e.sent(), [2]
                }
            })
        })
    }, Yn.prototype.fetchAndSetupPC = function() {
        return a(this, void 0, void 0, function() {
            var t, o;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return nt.moduleInitializer.IsSuppressPC && 0 === Lt("#onetrust-pc-sdk").length ? [4, Ro.getPcContent()] : [3, 2];
                    case 1:
                        t = e.sent(), Uo.preferenceCenterGroup = {
                            name: t.name,
                            html: atob(t.html),
                            css: t.css
                        }, nt.isV2Template = Ct.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name), (o = document.getElementById("onetrust-style")).innerHTML += Uo.preferenceCenterGroup.css, o.innerHTML += Gn.addCustomPreferenceCenterCSS(), Fn.insertPcHtml(), Wn.initialiseConsentNoticeHandlers(), Ct.IsIabEnabled && pn.InitializeVendorList(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, Yn.prototype.setVendorContent = function() {
        Lt("#onetrust-pc-sdk #filter-count").text(ot.filterByIABCategories.length.toString()), pn.loadVendorList("", ot.filterByIABCategories), Ct.UseGoogleVendors && (ot.vendorDomInit ? pn.resetAddtlVendors() : (pn.initGoogleVendors(), Lt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Wn.toggleAccordionStatus.bind(this)))), ot.vendorDomInit || (ot.vendorDomInit = !0, Wn.initialiseLegIntBtnHandlers(), Ct.UseGoogleVendors && (Wn.initialiseAddtlVenHandler(), Wn.bindSelAllHandlers())), ot.showGeneralVendors && !ot.genVendorDomInit && (ot.genVendorDomInit = !0, pn.initGenVendors(), Wn.initializeGenVenHandlers(), Ct.UseGoogleVendors || (Wn.bindSelAllHandlers(), Lt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Wn.toggleAccordionStatus.bind(this))))
    }, Yn.prototype.showVendorsList = function(e, t) {
        if (void 0 === t && (t = !1), Wn.hideCategoryContainer(!1), !t) {
            var o = e.getAttribute("data-parent-id");
            if (o) {
                var n = Gt.getGroupById(o);
                if (n) {
                    var s = h(n.SubGroups, [n]).reduce(function(e, t) {
                        return -1 < ut.indexOf(t.Type) && e.push(t.CustomGroupId), e
                    }, []);
                    ot.filterByIABCategories = h(ot.filterByIABCategories, s)
                }
            }
        }
        return Wn.setVendorContent(), cn.updateFilterSelection(!1), Wn.setBackButtonFocus(), ot.pcLayer = S.VendorList, e && Zo.setPCFocus(Zo.getPCElements()), !1
    }, Yn.prototype.loadCookieList = function(e) {
        ot.filterByCategories = [], Wn.hideCategoryContainer(!0);
        var t = e && e.getAttribute("data-parent-id");
        if (t) {
            var o = Gt.getGroupById(t);
            ot.filterByCategories.push(t), o.SubGroups.length && o.SubGroups.forEach(function(e) {
                if (-1 === ut.indexOf(e.Type)) {
                    var t = e.CustomGroupId;
                    ot.filterByCategories.indexOf(t) < 0 && ot.filterByCategories.push(t)
                }
            })
        }
        return pn.loadHostList("", ot.filterByCategories), Lt("#onetrust-pc-sdk #filter-count").text(ot.filterByCategories.length.toString()), cn.updateFilterSelection(!0), Wn.setBackButtonFocus(), ot.pcLayer = S.CookieList, Zo.setPCFocus(Zo.getPCElements()), !1
    }, Yn.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Leg_El).el[0],
            o = t.classList.contains("line-through"),
            n = Lt(Bt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
            s = e.target.checked,
            r = {};
        ot.vendors.selectedLegIntVendors.map(function(e, t) {
            r[e.split(":")[0]] = t
        });
        for (var i = 0; i < n.length; i++) {
            Pt.setCheckedAttribute(null, n[i], s), Ct.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = s ? Ct.PCActiveText : Ct.PCInactiveText);
            var l = n[i].getAttribute("leg-vendorid"),
                a = r[l];
            void 0 === a && (a = l), ot.vendors.selectedLegIntVendors[a] = l + ":" + s
        }
        o && t.classList.remove("line-through"), Pt.setCheckedAttribute(null, e.target, s)
    }, Yn.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = Lt("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = Lt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, s = e.target.checked, r = 0; r < n.length; r++) Pt.setCheckedAttribute(null, n[r], s), Ct.PCShowConsentLabels && (n[r].parentElement.querySelector(".ot-label-status").innerHTML = s ? Ct.PCActiveText : Ct.PCInactiveText);
        s ? Ct.UseGoogleVendors && Object.keys(ot.addtlVendorsList).forEach(function(e) {
            ot.addtlVendors.vendorSelected[e] = !0
        }) : ot.addtlVendors.vendorSelected = {}, o && t.classList.remove("line-through")
    }, Yn.prototype.selectAllGenVenHandler = function(e) {
        var t = e.target.checked;
        Wn.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", t)
    }, Yn.prototype.selectAllHandler = function(e, t, o) {
        for (var n = Lt(e.selAllEl).el[0], s = n.classList.contains("line-through"), r = Lt(e.vendorBoxes).el, i = 0; i < r.length; i++) "genven" === t && !o && ot.alwaysActiveGenVendors.includes(r[i].getAttribute("gn-vid")) ? (Pt.setDisabledAttribute(null, r[i], !0), Pt.setCheckedAttribute(null, r[i], !0)) : Pt.setCheckedAttribute(null, r[i], o), Ct.PCShowConsentLabels && (r[i].parentElement.querySelector(".ot-label-status").innerHTML = o ? Ct.PCActiveText : Ct.PCInactiveText);
        o ? "googleven" === t && Ct.UseGoogleVendors ? Object.keys(ot.addtlVendorsList).forEach(function(e) {
            ot.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && ot.showGeneralVendors && Ct.GeneralVendors.forEach(function(e) {
            ot.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? ot.addtlVendors.vendorSelected = {} : (ot.genVendorsConsent = {}, ot.alwaysActiveGenVendors.forEach(function(e) {
            ot.genVendorsConsent[e] = !0
        })), s && n.classList.remove("line-through")
    }, Yn.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = Lt("#onetrust-pc-sdk #" + Bt.P_Sel_All_Vendor_Consent_El).el[0],
            o = t.classList.contains("line-through"),
            n = Lt(Bt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
            s = e.target.checked,
            r = {};
        ot.vendors.selectedVendors.map(function(e, t) {
            r[e.split(":")[0]] = t
        });
        for (var i = 0; i < n.length; i++) {
            Pt.setCheckedAttribute(null, n[i], s), Ct.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = s ? Ct.PCActiveText : Ct.PCInactiveText);
            var l = n[i].getAttribute("vendorid"),
                a = r[l];
            void 0 === a && (a = l), ot.vendors.selectedVendors[a] = l + ":" + s
        }
        o && t.classList.remove("line-through"), Pt.setCheckedAttribute(null, e.target, s)
    }, Yn.prototype.onVendorToggle = function(n, e) {
        var t = ot.vendors,
            o = ot.addtlVendors,
            s = e === V.LI ? t.selectedLegIntVendors : e === V.AddtlConsent ? [] : t.selectedVendors,
            r = !1,
            i = Number(n);
        s.some(function(e, t) {
            var o = e.split(":");
            if (o[0] === n) return i = t, r = "true" === o[1], !0
        }), e === V.LI ? (co.triggerGoogleAnalyticsEvent(yo, r ? Do : Ho, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedLegIntVendors[i] = n + ":" + !r, bt.legIntSettings.PShowLegIntBtn || pn.vendorLegIntToggleEvent()) : e === V.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0, pn.venAdtlSelAllTglEvent()) : (co.triggerGoogleAnalyticsEvent(yo, r ? Go : Oo, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n), t.selectedVendors[i] = n + ":" + !r, pn.vendorsListEvent())
    }, Yn.prototype.onVendorDisclosure = function(n) {
        return a(this, void 0, void 0, function() {
            var t, o;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (t = ot.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0, [4, Ro.getStorageDisclosure(t[n].disclosureUrl)]);
                    case 1:
                        o = e.sent(), pn.updateVendorDisclosure(n, o), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, Yn.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && Pt.setCheckedAttribute(null, e.target, e.target.checked)
    }, Yn.prototype.selectVendorsGroupHandler = function(e) {
        Wn.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid"),
            o = e.target.getAttribute("vendorid"),
            n = e.target.getAttribute("addtl-vid"),
            s = e.target.getAttribute("disc-vid");
        t ? Wn.onVendorToggle(t, V.LI) : o ? Wn.onVendorToggle(o, V.Consent) : n && Wn.onVendorToggle(n, V.AddtlConsent), s && Wn.onVendorDisclosure(s), (t || o || n) && (Pt.setCheckedAttribute(null, e.target, e.target.checked), Ct.PCShowConsentLabels && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? Ct.PCActiveText : Ct.PCInactiveText))
    }, Yn.prototype.toggleVendorFiltersHandler = function() {
        var e = !1,
            t = Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Modal).el[0];
        switch (bt.pcName) {
            case Ze:
            case Je:
            case Qe:
            case $e:
                if (e = "block" === t.style.display) Wn.closeFilter();
                else {
                    var o = Lt("#onetrust-pc-sdk " + Bt.P_Triangle).el[0];
                    Lt(o).attr("style", "display:block"), Lt(t).attr("style", "display:block");
                    var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                    Zo.setPCFocus(n)
                }
                break;
            case Xe:
                896 < window.innerWidth || 896 < window.screen.height ? t.style.width = "400px" : t.setAttribute("style", "height: 100%; width: 100%"), t.querySelector(".ot-checkbox input").focus();
                break;
            default:
                return
        }
        nt.isV2Template && !e && (Lt("#onetrust-pc-sdk").addClass("ot-shw-fltr"), Lt("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }, Yn.prototype.clearFiltersHandler = function() {
        for (var e = Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++) e[t].checked && (e[t].checked = !1);
        Wn.isCookieList ? ot.filterByCategories = [] : ot.filterByIABCategories = []
    }, Yn.prototype.cancelFilterHandler = function() {
        Wn.isCookieList ? cn.cancelHostFilter() : pn.cancelVendorFilter(), Wn.closeFilter(), Lt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Yn.prototype.applyFilterHandler = function() {
        var e;
        Wn.isCookieList ? (e = cn.updateHostFilterList(), pn.loadHostList("", e)) : (e = pn.updateVendorFilterList(), pn.loadVendorList("", e)), Lt("#onetrust-pc-sdk #filter-count").text(String(e.length)), Wn.closeFilter(), Lt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }, Yn.prototype.setPcListContainerHeight = function() {
        Lt("#onetrust-pc-sdk " + Bt.P_Content).el[0].classList.contains("ot-hide") ? Lt("#onetrust-pc-sdk").el[0].style.height = "" : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight), !Lt("#onetrust-pc-sdk " + Bt.P_Content).el[0].scrollHeight || Lt("#onetrust-pc-sdk " + Bt.P_Content).el[0].scrollHeight >= e ? Lt("#onetrust-pc-sdk").el[0].style.height = e + "px" : Lt("#onetrust-pc-sdk").el[0].style.height = "auto"
        })
    }, Yn.prototype.changeSelectedTab = function(e) {
        var t, o = Lt("#onetrust-pc-sdk .category-menu-switch-handler"),
            n = 0,
            s = Lt(o.el[0]);
        o.each(function(e, t) {
            Lt(e).el.classList.contains(Bt.P_Active_Menu) && (n = t, Lt(e).el.classList.remove(Bt.P_Active_Menu), s = Lt(e))
        }), e.keyCode === L.RightArrow ? t = n + 1 >= o.el.length ? Lt(o.el[0]) : Lt(o.el[n + 1]) : e.keyCode === L.LeftArrow && (t = Lt(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, s)
    }, Yn.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement;
        e.keyCode === L.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === L.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(), this.groupTabClick(n)
    }, Yn.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = Lt("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function(e) {
            if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
        })
    }, Yn.prototype.groupTabClick = function(e) {
        var t = Lt("#onetrust-pc-sdk " + Bt.P_Grp_Container).el[0],
            o = t.querySelector("." + Bt.P_Active_Menu),
            n = e.currentTarget || e,
            s = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(Bt.P_Active_Menu), t.querySelector(Bt.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + s).classList.remove("ot-hide"), n.setAttribute("tabindex", 0), n.setAttribute("aria-selected", !0), n.classList.add(Bt.P_Active_Menu)
    }, Yn.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + Bt.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + Bt.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(Bt.P_Active_Menu)
    }, Yn.prototype.hideVendorsList = function() {
        Lt("#onetrust-pc-sdk").length && (Ct.PCTemplateUpgrade ? Lt("#onetrust-pc-sdk " + Bt.P_Content).removeClass("ot-hide") : Lt("#onetrust-pc-sdk .ot-main-content").show(), Lt("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), Lt("#onetrust-pc-sdk " + Bt.P_Vendor_List).addClass("ot-hide"))
    }, Yn.prototype.closeFilter = function(e) {
        void 0 === e && (e = !0);
        var t = Lt("#onetrust-pc-sdk " + Bt.P_Fltr_Modal).el[0],
            o = Lt("#onetrust-pc-sdk " + Bt.P_Triangle).el[0];
        bt.pcName === Xe ? 896 < window.innerWidth || 896 < window.screen.height ? t.style.width = "0" : t.setAttribute("style", "height:0") : t.setAttribute("style", "display:none"), o && Lt(o).attr("style", "display:none"), nt.isV2Template && Lt("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e && Zo.setFirstAndLast(Zo.getPCElements())
    }, Yn.prototype.setBackButtonFocus = function() {
        Lt("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }, Yn.prototype.setCenterLayoutFooterHeight = function() {
        var e = Wn.pc;
        if (Wn.setMainContentHeight(), bt.pcName === $e && e) {
            var t = e.querySelectorAll("" + Bt.P_Desc_Container),
                o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + Bt.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
            else e.querySelector(".category-menu-switch-handler + " + Bt.P_Desc_Container) && 640 < window.innerWidth && Lt(e.querySelector(".ot-tab-desc")).append(t)
        }
    }, Yn.prototype.setMainContentHeight = function() {
        var e = this.pc,
            t = e.querySelector(".ot-pc-footer"),
            o = e.querySelector(".ot-pc-header"),
            n = e.querySelectorAll(".ot-pc-footer button"),
            s = n[n.length - 1];
        if (e.classList.remove("ot-ftr-stacked"), n[0] && s && 1 < Math.abs(n[0].offsetTop - s.offsetTop) && e.classList.add("ot-ftr-stacked"), !Ct.PCTemplateUpgrade && !Ct.Center) {
            var r = e.clientHeight - t.clientHeight - o.clientHeight - 3;
            if (Ct.PCTemplateUpgrade && !Ct.Tab && Ct.PCenterVendorListDescText) {
                var i = Lt("#vdr-lst-dsc").el;
                r = r - (i.length && i[0].clientHeight) - 10
            }
            e.querySelector("" + Bt.P_Vendor_List).style.height = r + "px"
        }
        var l = e.querySelector("" + Bt.P_Content);
        if (Ct.PCTemplateUpgrade && Ct.Center) {
            var a = 600 < window.innerWidth && 475 < window.innerHeight;
            if (!this.pcBodyHeight && a && (this.pcBodyHeight = l.scrollHeight), a) {
                var c = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                c > .8 * window.innerHeight || 0 === this.pcBodyHeight ? e.style.height = .8 * window.innerHeight + "px" : e.style.height = c + "px"
            } else e.style.height = "100%"
        } else e.querySelector("" + Bt.P_Content).style.height = e.clientHeight - t.clientHeight - o.clientHeight - 3 + "px"
    }, Yn.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && Ct.Tab && Ct.PCTemplateUpgrade && (this.setMainContentHeight(), this.allowVisible = e)
    }, Yn.prototype.restorePc = function() {
        ot.pcLayer === S.CookieList ? (Wn.hideCategoryContainer(!0), pn.loadHostList("", ot.filterByCategories), Lt("#onetrust-pc-sdk #filter-count").text(ot.filterByCategories.length.toString())) : ot.pcLayer === S.VendorList && (Wn.hideCategoryContainer(!1), Wn.setVendorContent()), ot.isPCVisible = !1, Wn.toggleInfoDisplay(), ot.pcLayer !== S.VendorList && ot.pcLayer !== S.CookieList || (cn.updateFilterSelection(ot.pcLayer === S.CookieList), Wn.setBackButtonFocus(), Zo.setPCFocus(Zo.getPCElements()))
    }, Yn.prototype.toggleInfoDisplay = function() {
        return a(this, void 0, void 0, function() {
            var t, o;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return Uo.csBtnGroup && (Lt(Wn.fltgBtnSltr).addClass("ot-pc-open"), Lt(Wn.fltgBtnFSltr).attr("aria-hidden", "true"), Lt(Wn.fltgBtnBSltr).attr("aria-hidden", "")), [4, Wn.fetchAndSetupPC()];
                    case 1:
                        return e.sent(), bt.pcName === Qe && this.setPcListContainerHeight(), void 0 !== ot.pcLayer && ot.pcLayer !== S.Banner || (ot.pcLayer = S.PrefCenterHome), t = Lt("#onetrust-pc-sdk").el[0], Lt(".onetrust-pc-dark-filter").el[0].setAttribute("style", ""), t.setAttribute("style", ""), ot.isPCVisible || (bn.showConsentNotice(), ot.isPCVisible = !0, Ct.PCTemplateUpgrade && (this.pc = t, o = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = o && 0 < o.clientHeight, this.setCenterLayoutFooterHeight(), Wn.getResizeElement().addEventListener("resize", Wn.setCenterLayoutFooterHeight), window.addEventListener("resize", Wn.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                            OneTrustPCLoaded: "yes"
                        })), [2]
                }
            })
        })
    }, Yn.prototype.close = function(e) {
        xn.bannerCloseButtonHandler(e), Wn.getResizeElement().removeEventListener("resize", Wn.setCenterLayoutFooterHeight), window.removeEventListener("resize", Wn.setCenterLayoutFooterHeight)
    }, Yn.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
    }, Yn.prototype.initializeAlartHtmlAndHandler = function() {
        ot.skipAddingHTML = 0 < Lt("#onetrust-banner-sdk").length, ot.skipAddingHTML || jn.insertAlertHtml(), this.initialiseAlertHandlers()
    }, Yn.prototype.initialiseAlertHandlers = function() {
        var e = this;
        jn.showBanner(), Ct.ForceConsent && !_t.isCookiePolicyPage(Ct.AlertNoticeText) && Lt(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645"), Ct.OnClickCloseBanner && document.body.addEventListener("click", xn.bodyClickEvent), Ct.ScrollCloseBanner && (window.addEventListener("scroll", xn.scrollCloseBanner), Lt(document).on("click", ".onetrust-close-btn-handler", xn.rmScrollAndClickBodyEvents), Lt(document).on("click", "#onetrust-accept-btn-handler", xn.rmScrollAndClickBodyEvents), Lt(document).on("click", "#accept-recommended-btn-handler", xn.rmScrollAndClickBodyEvents)), (Ct.IsIabEnabled || Ct.UseGoogleVendors || ot.showGeneralVendors) && Lt(document).on("click", ".onetrust-vendors-list-handler", Wn.showAllVendors), Ct.FloatingRoundedIcon && Lt("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
            ot.pcSource = e.currentTarget, Wn.showCookieSettingsHandler(e)
        }), Lt("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", Wn.bannerCloseButtonHandler), Lt("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", Wn.showCookieSettingsHandler), Lt("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", xn.allowAllEventHandler.bind(this, !1)), Lt("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", xn.rejectAllEventHandler.bind(this, !1)), Lt("#onetrust-banner-sdk .banner-option-input").on("click", bt.bannerName === ze ? Wn.toggleBannerOptions : Wn.toggleAccordionStatus), Lt("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
            return a(e, void 0, void 0, function() {
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return ot.cookieListType = W.GenVen, [4, Wn.fetchAndSetupPC()];
                        case 1:
                            return e.sent(), Wn.loadCookieList(t.target), Wn.showCookieSettingsHandler(t), [2]
                    }
                })
            })
        }), Lt("#onetrust-banner-sdk .category-switch-handler").on("click", Wn.toggleBannerCategory), Lt("#onetrust-banner-sdk").on("keydown", function(e) {
            9 !== e.keyCode && "tab" !== e.code || Zo.handleBannerFocus(e, e.shiftKey)
        })
    }, Yn.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e.contentWindow || e || document
    }, Yn.prototype.insertCookieSettingText = function() {
        for (var e = Ct.CookieSettingButtonText, t = Lt(".ot-sdk-show-settings").el, o = 0; o < t.length; o++) Lt(t[o]).text(e);
        Wn.initCookieSettingHandlers()
    }, Yn.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid");
        Jt.updateGenVendorStatus(t, e.target.checked);
        var o = Ct.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name;
        co.triggerGoogleAnalyticsEvent(yo, e.target.checked ? wo : xo, o + ": VEN_" + t), pn.genVenSelectAllTglEvent()
    }, Yn.prototype.genVendorDetails = function(e) {
        Wn.toggleAccordionStatus(e)
    }, Yn.prototype.confirmPC = function(e) {
        var t = Dt.isAlertBoxClosedAndValid();
        Ct.NoBanner && Ct.ShowPreferenceCenterCloseButton && !t && xn.bannerCloseButtonHandler();
        var o = _t.isBannerVisible();
        !nt.moduleInitializer.MobileSDK || !t && o || Wn.closePreferenceCenter(e)
    }, Yn);

    function Yn() {
        var e = this;
        this.fltgBtnSltr = "#ot-sdk-btn-floating", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.pc = null, this.allowVisible = !1, this.pcLinkSource = null, this.isCookieList = !1, this.showCookieSettingsHandler = function(r) {
            return a(e, void 0, void 0, function() {
                var t, o, n, s;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return r && r.stopPropagation(), r && r.target && (t = r.target.className, o = "onetrust-pc-btn-handler" === r.target.id, n = "ot-sdk-show-settings" === t, (o || n) && (s = o ? mo : vo, co.triggerGoogleAnalyticsEvent(yo, s)), ot.pcSource = r.target), [4, Wn.toggleInfoDisplay()];
                        case 1:
                            return e.sent(), [2, !1]
                    }
                })
            })
        }, this.cookieSettingsBoundListner = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
            return e.hideVendorsList(), bt.pcName === Qe && (Lt("#onetrust-pc-sdk " + Bt.P_Content).removeClass("ot-hide"), Lt("#onetrust-pc-sdk").el[0].removeAttribute("style"), e.setPcListContainerHeight()), Lt("#onetrust-pc-sdk #filter-count").text("0"), Lt("#onetrust-pc-sdk #vendor-search-handler").length && (Lt("#onetrust-pc-sdk #vendor-search-handler").el[0].value = ""), ot.currentGlobalFilteredList = [], ot.filterByCategories = [], ot.filterByIABCategories = [], ot.vendors.searchParam = "", Wn.closeFilter(), ot.pcLayer = S.PrefCenterHome, e.pcLinkSource ? (e.pcLinkSource.focus(), e.pcLinkSource = null) : Zo.setPCFocus(Zo.getPCElements()), !1
        }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleV2Category = function(e, t, o, n) {
            var s, r = this;
            if (!t) {
                var i = Pt.findIndex(ot.dataGroupState, function(e) {
                    return "function" == typeof r.getAttribute && e.CustomGroupId === r.getAttribute("data-optanongroupid")
                });
                t = ot.dataGroupState[i]
            }
            void 0 === o && (o = Lt(this).is(":checked")), Ct.ChoicesBanner && Pt.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n ? document.querySelector("#ot-group-id-" + n) && (Pt.setCheckedAttribute("#ot-group-id-" + n, null, o), s = document.querySelector("#ot-group-id-" + n)) : (s = this, Pt.setCheckedAttribute(null, this, o)), Ct.PCShowConsentLabels && (s.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Ct.PCActiveText : Ct.PCInactiveText);
            var l = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Wn.updateGroupToggles(t, o, l)
        }, this.toggleBannerCategory = function() {
            var t = this,
                e = Pt.findIndex(ot.dataGroupState, function(e) {
                    return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
                }),
                o = ot.dataGroupState[e],
                n = Lt(t).is(":checked");
            Wn.toggleV2Category(null, o, n, o.CustomGroupId)
        }, this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var s, r = Gt.getGroupById(t);
            void 0 === o && (o = Lt(this).is(":checked")), n ? (Pt.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), s = document.querySelector("#ot-sub-group-id-" + n)) : (s = this, Pt.setCheckedAttribute(null, this, o)), Ct.PCShowConsentLabels && (s.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Ct.PCActiveText : Ct.PCInactiveText);
            var i = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Wn.updateSubGroupToggles(r, o, i)
        }
    }
    var Jn, Qn = (Zn.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(), nt.moduleInitializer.CookieSPAEnabled ? Lt(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : Lt(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }, Zn.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += Uo.csBtnGroup.css;
        var t = document.createElement("div");
        Lt(t).html(Uo.csBtnGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && Lt(o).removeClass("ot-hide"), Lt("#onetrust-consent-sdk").append(o)
    }, Zn.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !to.isLandingPage() && "true" === vt.readCookieParam(Se.OPTANON_CONSENT, be) && this.checkForRefreshCloseImplied()
    }, Zn.prototype.isImpliedConsent = function() {
        return Ct.ConsentModel && "implied consent" === Ct.ConsentModel.Name.toLowerCase()
    }, Zn.prototype.checkForRefreshCloseImplied = function() {
        xn.closeOptanonAlertBox(), xn.close(!0)
    }, Zn.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && e.setAttribute("style", "display:none")
    }, Zn.prototype.windowLoadBanner = function() {
        return a(this, void 0, void 0, function() {
            var t, o, n, s, r, i, l, a;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.core.substitutePlainTextScriptTags(), t = nt.moduleInitializer, Lt("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"), Lt(n).attr("id", "onetrust-consent-sdk"), Lt(document.body).append(n)), Lt(".onetrust-pc-dark-filter").length || (o = document.createElement("div"), Lt(o).attr("class", "onetrust-pc-dark-filter"), Lt(o).attr("class", "ot-hide"), Lt(o).attr("class", "ot-fade-in"), n.firstChild ? n.insertBefore(o, n.firstChild) : Lt(n).append(o)), Ct.IsIabEnabled && this.iab.updateIabVariableReference(), t.IsSuppressPC || (Fn.insertPcHtml(), Wn.initialiseConsentNoticeHandlers(), Ct.IsIabEnabled && this.iab.InitializeVendorList()), s = Dt.isAlertBoxClosedAndValid(), r = Ct.ShowAlertNotice && !s && !Ct.NoBanner && !ot.hideBanner, i = Ct.ShowAlertNotice && !s && Ct.NoBanner, ot.ntfyRequired ? (this.hideCustomHtml(), Ln.init(), Ln.changeState()) : r ? Wn.initializeAlartHtmlAndHandler() : this.hideCustomHtml(), this.insertCSBtn(!r), i ? [4, Wn.toggleInfoDisplay()] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return Wn.insertCookieSettingText(), l = Lt(this.FLOATING_COOKIE_BTN), a = Lt(this.FLOATIN_COOKIE_FRONT_BTN), l.length && (l.attr("title", Ct.CookieSettingButtonText), a.el[0].setAttribute("aria-label", Ct.AriaOpenPreferences)), nn.insertCookiePolicyHtml(), xn.executeOptanonWrapper(), vt.readCookieParam(Se.OPTANON_CONSENT, "groups") || Wt.writeGrpParam(Se.OPTANON_CONSENT), vt.readCookieParam(Se.OPTANON_CONSENT, "hosts") || Wt.writeHstParam(Se.OPTANON_CONSENT), r && Zo.setBannerFocus(), [2]
                }
            })
        })
    }, Zn.prototype.insertCSBtn = function(e) {
        Uo.csBtnGroup && (this.insertCSBtnHtmlAndCss(e), Wn.initFlgtCkStgBtnEventHandlers())
    }, Zn);

    function Zn() {
        this.iab = pn, this.core = cn, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATIN_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open"
    }
    var Xn, $n = (es.prototype.initialiseLandingPath = function() {
        if (to.isLandingPage()) to.setLandingPathParam(location.href);
        else {
            if (Dt.needReconsent() && !Dt.awaitingReconsent()) return to.setLandingPathParam(location.href), void vt.writeCookieParam(Se.OPTANON_CONSENT, be, !0);
            to.setLandingPathParam(Ae), vt.writeCookieParam(Se.OPTANON_CONSENT, be, !1), bt.isSoftOptInMode && !nt.moduleInitializer.MobileSDK && co.setAlertBoxClosed(!0), Ct.NextPageCloseBanner && Ct.ShowAlertNotice && xn.nextPageCloseBanner()
        }
    }, es);

    function es() {}
    var ts, os = (ns.prototype.IsAlertBoxClosedAndValid = function() {
        return Dt.isAlertBoxClosedAndValid()
    }, ns.prototype.LoadBanner = function() {
        co.loadBanner()
    }, ns.prototype.Init = function(e) {
        void 0 === e && (e = !1), fe.insertViewPortTag(), Uo.ensureHtmlGroupDataInitialised(), yn.updateGtmMacros(!1), Xn.initialiseLandingPath(), e || Gn.initialiseCssReferences()
    }, ns.prototype.FetchAndDownloadPC = function() {
        Wn.fetchAndSetupPC()
    }, ns.prototype.ToggleInfoDisplay = function() {
        co.triggerGoogleAnalyticsEvent(yo, Po), Wn.toggleInfoDisplay()
    }, ns.prototype.Close = function(e) {
        Wn.close(e)
    }, ns.prototype.AllowAll = function(e) {
        xn.allowAllEvent(e)
    }, ns.prototype.RejectAll = function(e) {
        xn.rejectAllEvent(e)
    }, ns.prototype.setDataSubjectIdV2 = function(e, t) {
        void 0 === t && (t = !1), e && e.trim() && (vt.writeCookieParam(Se.OPTANON_CONSENT, Ce, e), ot.dsParams.isAnonymous = t)
    }, ns.prototype.getDataSubjectId = function() {
        return vt.readCookieParam(Se.OPTANON_CONSENT, Ce)
    }, ns.prototype.synchroniseCookieWithPayload = function(r) {
        var e = vt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            t = Pt.strToArr(e),
            i = [];
        t.forEach(function(e) {
            var t = e.split(":"),
                o = Gt.getGroupById(t[0]),
                n = Pt.findIndex(r, function(e) {
                    return e.Id === o.PurposeId
                }),
                s = r[n];
            s ? s.TransactionType === Ie ? (i.push(t[0] + ":1"), o.Parent ? Wn.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : Wn.toggleV2Category(null, o, !0, o.CustomGroupId)) : (i.push(t[0] + ":0"), o.Parent ? Wn.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : Wn.toggleV2Category(null, o, !1, o.CustomGroupId)) : i.push(t[0] + ":" + t[1])
        }), Wt.writeGrpParam(Se.OPTANON_CONSENT, i)
    }, ns.prototype.getGeolocationData = function() {
        return ot.userLocation
    }, ns.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        co.triggerGoogleAnalyticsEvent(e, t, o, n)
    }, ns.prototype.ReconsentGroups = function() {
        var s = !1,
            e = vt.readCookieParam(Se.OPTANON_CONSENT, "groups"),
            r = Pt.strToArr(e),
            i = Pt.strToArr(e.replace(/:0|:1/g, "")),
            l = !1,
            t = vt.readCookieParam(Se.OPTANON_CONSENT, "hosts"),
            a = Pt.strToArr(t),
            c = Pt.strToArr(t.replace(/:0|:1/g, "")),
            d = ["inactive", "inactive landingpage", "do not track"];
        e && (Ct.Groups.forEach(function(e) {
            h(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId,
                    o = Pt.indexOf(i, t);
                if (-1 !== o) {
                    var n = Gt.getGrpStatus(e).toLowerCase(); - 1 < d.indexOf(n) && (s = !0, r[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                }
            })
        }), s && Wt.writeGrpParam(Se.OPTANON_CONSENT, r)), t && (Ct.Groups.forEach(function(e) {
            h(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t = Pt.indexOf(c, e.HostId);
                    if (-1 !== t) {
                        var o = Gt.getGrpStatus(n).toLowerCase(); - 1 < d.indexOf(o) && (l = !0, a[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                    }
                })
            })
        }), l && Wt.writeHstParam(Se.OPTANON_CONSENT, a))
    }, ns.prototype.SetAlertBoxClosed = function(e) {
        co.setAlertBoxClosed(e)
    }, ns.prototype.GetDomainData = function() {
        return bt.pubDomainData
    }, ns.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""), ot.userLocation = {
            country: e,
            state: t
        }
    }, ns.prototype.changeLang = function(t) {
        if (t !== ot.lang) {
            var o = nt.moduleInitializer;
            Ro.getLangJson(t).then(function(e) {
                e ? (bt.init(e), Uo.fetchAssets().then(function() {
                    var e = document.getElementById("onetrust-style");
                    e && (e.textContent = ""), Gn.initialiseCssReferences(), o.IsSuppressPC && !ot.isPCVisible || (Pt.removeChild(Lt("#onetrust-pc-sdk").el), ot.vendorDomInit = !1, ot.genVendorDomInit = !1, Fn.insertPcHtml(), Wn.initialiseConsentNoticeHandlers(), Ct.IsIabEnabled && pn.InitializeVendorList(), ot.isPCVisible && Wn.restorePc());
                    var t = !0;
                    Dt.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || ot.skipAddingHTML) || Ct.NoBanner || (Pt.removeChild(Lt("#onetrust-banner-sdk").el), Wn.initializeAlartHtmlAndHandler(), t = !1), ts.initCookiePolicyAndSettings(), Pt.removeChild(Lt("#ot-sdk-btn-floating").el), Jn.insertCSBtn(t), ts.processedHtml = null
                })) : console.error("Language:" + t + " doesn't exist for the geo rule")
            })
        }
    }, ns.prototype.initCookiePolicyAndSettings = function() {
        nn.insertCookiePolicyHtml(), Wn.insertCookieSettingText()
    }, ns.prototype.showVendorsList = function() {
        ot.pcLayer !== S.VendorList && (Wn.showAllVendors(), co.triggerGoogleAnalyticsEvent(yo, To))
    }, ns.prototype.getTestLogData = function() {
        var e = Ct.Groups,
            t = bt.pubDomainData;
        console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain ? t.Domain : Ct.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("The consent model is: " + t.ConsentModel.Name);
        var o = null !== Dt.alertBoxCloseDate();
        console.info("Consent has " + (o ? "" : "not ") + "been given " + (o ? "👍" : "🛑"));
        var n = [];
        e.forEach(function(e) {
            var t = "";
            t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : en.isGroupActive(e) ? "Active" : "Inactive", n.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }), console.groupCollapsed("Current Category Status"), console.table(n), console.groupEnd();
        var s = [];
        t.GeneralVendors.forEach(function(e) {
            s.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: ts.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }), console.groupCollapsed("General Vendor Ids"), console.table(s), console.groupEnd();
        var r = bt.getRegionRule(),
            i = ot.userLocation,
            l = nt.moduleInitializer.GeoRuleGroupName;
        console.groupCollapsed("Geolocation and Template"), ot.userLocation.country && console.info("The Geolocation is " + i.country.toUpperCase()), console.info("The Geolocation rule is " + r.Name), console.info("The GeolocationRuleGroup is " + l), console.info("The TemplateName is " + r.TemplateName), console.groupEnd();
        var a = e.filter(function(e) {
            return en.isGroupActive(e) && "COOKIE" === e.Type
        });
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), a.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            var t = ts.getAllFormatCookiesForAGroup(e);
            console.table(t, ["Name", "Host", "description"]), console.groupEnd()
        }), console.groupEnd()
    }, ns.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf(e)
    }, ns.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t, o = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }), o
    }, ns);

    function ns() {
        this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
            return Jn.initBanner()
        }, this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (Fn.insertPcHtml(), jn.insertAlertHtml()), ts.processedHtml || (ts.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), ts.processedHtml
        }, this.getCSS = function() {
            return Gn.processedCSS
        }, this.setConsentProfile = function(e) {
            if (e.customPayload) {
                var t = e.customPayload;
                t.Interaction && vt.writeCookieParam(Se.OPTANON_CONSENT, ve, t.Interaction)
            }
            ts.setDataSubjectIdV2(e.identifier, e.isAnonymous), ts.synchroniseCookieWithPayload(e.purposes), xn.executeOptanonWrapper()
        }, this.InsertScript = function(e, t, o, n, s, r) {
            var i, l = null != n && void 0 !== n,
                a = l && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (en.canInsertForGroup(s, a) && !Pt.contains(ot.srcExecGrps, s)) {
                ot.srcExecGrpsTemp.push(s), l && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Pt.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (i = !1, c.onload = c.onreadystatechange = function() {
                    i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0, o())
                }), c.type = "text/javascript", c.src = e, r && (c.async = r), t) {
                    case "head":
                        document.getElementsByTagName("head")[0].appendChild(c);
                        break;
                    case "body":
                        document.getElementsByTagName("body")[0].appendChild(c);
                        break;
                    default:
                        var d = document.getElementById(t);
                        d && (d.appendChild(c), l && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Pt.show(t))
                }
                if (l && void 0 !== n.makeElementsVisible)
                    for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                        var k = p[u];
                        Pt.show(k)
                    }
                if (l && void 0 !== n.deleteElements)
                    for (var h = 0, y = n.deleteElements; h < y.length; h++) {
                        k = y[h];
                        Pt.remove(k)
                    }
            }
        }, this.InsertHtml = function(e, t, o, n, s) {
            var r = null != n && void 0 !== n,
                i = r && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (en.canInsertForGroup(s, i) && !Pt.contains(ot.htmlExecGrps, s)) {
                if (ot.htmlExecGrpsTemp.push(s), r && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Pt.empty(t), Pt.appendTo(t, e), r && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Pt.show(t), r && void 0 !== n.makeElementsVisible)
                    for (var l = 0, a = n.makeElementsVisible; l < a.length; l++) {
                        var c = a[l];
                        Pt.show(c)
                    }
                if (r && void 0 !== n.deleteElements)
                    for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                        c = u[d];
                        Pt.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }, this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !en.canInsertForGroup(t)
        }
    }
    var ss, rs, is, ls, as = (o(rs = ds, is = ss = os), rs.prototype = null === is ? Object.create(is) : (cs.prototype = is.prototype, new cs), ds.prototype.Close = function(e) {
        xn.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
    }, ds.prototype.RejectAll = function(e) {
        xn.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
    }, ds.prototype.AllowAll = function(e) {
        xn.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
    }, ds.prototype.ToggleInfoDisplay = function() {
        Wn.toggleInfoDisplay()
    }, ds);

    function cs() {
        this.constructor = rs
    }

    function ds() {
        var e = null !== ss && ss.apply(this, arguments) || this;
        return e.mobileOnlineURL = bt.mobileOnlineURL, e
    }
    var us, ps = (ks.prototype.toggleVendorConsent = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = ot.oneTrustIABConsent.vendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                s = Lt(Bt.P_Vendor_Container + " ." + Bt.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
            s && Pt.setCheckedAttribute("", s, "true" === n)
        });
        var o = Lt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        if (o) {
            var n = Pt.getActiveIdArray(Pt.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Vt.P_Line_Through) : o.parentElement.classList.add(Vt.P_Line_Through), Pt.setCheckedAttribute("", o, t)
        }
    }, ks.prototype.toggleVendorLi = function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = null), e.length || (e = ot.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                s = Lt(Bt.P_Vendor_Container + " ." + Bt.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
            s && Pt.setCheckedAttribute("", s, "true" === n)
        });
        var o = Lt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (o) {
            var n = Pt.getActiveIdArray(Pt.distinctArray(e));
            null === t && (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Vt.P_Line_Through) : o.parentElement.classList.add(Vt.P_Line_Through), Pt.setCheckedAttribute("", o, t)
        }
    }, ks.prototype.updateVendorLegBtns = function(e) {
        void 0 === e && (e = []), e.length || (e = ot.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
            var t = e.split(":"),
                o = t[0],
                n = t[1],
                s = Lt(Bt.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
            s && en.updateLegIntBtnElement(s, "true" === n)
        })
    }, ks);

    function ks() {}
    var hs, ys = (gs.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1), e ? (ot.dsParams.id = e.trim(), ts.setDataSubjectIdV2(e)) : e = ot.dsParams.id, o && (ot.dsParams.isAnonymous = o), t = t || ot.dsParams.token, e && t && Ro.getConsentProfile(e, t).then(function(e) {
            return hs.consentProfileCallback(e)
        })
    }, gs.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
            case C[C.ACTIVE]:
            case C[C.ALWAYS_ACTIVE]:
                t = R.Active;
                break;
            case C[C.EXPIRED]:
            case C[C.OPT_OUT]:
            case C[C.PENDING]:
            case C[C.WITHDRAWN]:
                t = R.InActive
        }
        return t
    }, gs.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }, gs.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = vt.getCookie(Se.ALERT_BOX_CLOSED),
            n = o,
            s = !1,
            r = !0,
            i = !1,
            l = Pt.strToArr(vt.readCookieParam(Se.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var a = 0, c = e.preferences; a < c.length; a++) {
                var d = c[a],
                    u = d.status === C[C.NO_CONSENT],
                    p = bt.domainGrps[d.id];
                if (p)
                    if (-1 < ot.grpsSynced.indexOf(p) && (ot.syncedValidGrp = !0), u && l.length) {
                        for (var k = -1, h = 0; h < l.length; h++)
                            if (l[h].split(":")[0] === p) {
                                k = h;
                                break
                            } - 1 < k && (l.splice(k, 1), ot.grpsSynced.push(p))
                    } else if (!u && (!o || new Date(d.consentDate) > new Date(n))) {
                    var y = this.getConsentValue(d.status);
                    if (i = !0, o = d.consentDate, !t && this.isCookieGroup(p)) {
                        var g = p + ":" + y,
                            f = -1;
                        for (h = 0; h < l.length; h++) {
                            var b = l[h].split(":");
                            if (b[0] === p) {
                                b[1] !== y && (l[h] = g, s = !0), f = h;
                                break
                            }
                        } - 1 === f && (l.push(g), s = !0)
                    }
                }
            } else r = !1;
        return {
            alertBoxCookieVal: o,
            groupsConsent: l,
            profileFound: r,
            syncRequired: s,
            syncOnlyDate: i = i && !s
        }
    }, gs.prototype.hideBannerAndPc = function() {
        var e = _t.isBannerVisible();
        e && _t.hideBanner(), (e || ot.isPCVisible) && bn.hideConsentNoticeV2()
    }, gs.prototype.setOptanonConsentCookie = function(e, t) {
        if (e.syncRequired) {
            vt.writeCookieParam(Se.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
            var o = vt.getCookie(Se.OPTANON_CONSENT);
            vt.setCookie(Se.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
        }
    }, gs.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[ot.syncGrpId] && o.syncGroups[ot.syncGrpId].tcStringV2 ? vt.getCookie(Se.EU_PUB_CONSENT) !== o.syncGroups[ot.syncGrpId].tcStringV2 && (e.syncRequired = !0, vt.setCookie(Se.EU_PUB_CONSENT, o.syncGroups[ot.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }, gs.prototype.setAddtlVendorsCookie = function(e, t) {
        Ct.UseGoogleVendors && (vt.getCookie(Se.ADDITIONAL_CONSENT_STRING) || vt.setCookie(Se.ADDITIONAL_CONSENT_STRING, ot.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
    }, gs.prototype.createTrans = function() {
        var e = vt.readCookieParam(Se.OPTANON_CONSENT, "iType");
        Ft.createConsentTxn(!1, M[e], !1, !0)
    }, gs.prototype.updateGrpsDom = function() {
        for (var e = function(e) {
                var t = e.getAttribute("data-optanongroupid"),
                    o = Gt.getGroupById(t),
                    n = !0,
                    s = Pt.findIndex(ot.groupsConsent, function(e) {
                        return e.split(":")[0] === t
                    }); - 1 < s && ot.groupsConsent[s].split(":")[1] === R.InActive && (n = !1), en.toggleGrpElements(e, o, n), en.toogleSubGroupElement(e, n, !1, !0), en.toogleSubGroupElement(e, n, !0, !0)
            }, t = 0, o = en.getAllGroupElements(); t < o.length; t++) e(o[t])
    }, gs.prototype.updateVendorsDom = function() {
        Ct.IsIabEnabled && (pn.updateIabVariableReference(), us.toggleVendorConsent(), bt.legIntSettings.PAllowLI && (bt.legIntSettings.PShowLegIntBtn ? us.updateVendorLegBtns() : us.toggleVendorLi()))
    }, gs.prototype.consentProfileCallback = function(s) {
        return a(this, void 0, void 0, function() {
            var t, o, n;
            return u(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = this.syncPreferences(s), o = Ct.ReconsentFrequencyDays, n = Dt.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), Ct.IsIabEnabled && !n && this.setIabCookie(t, o, s), t.syncOnlyDate && (Dt.syncAlertBoxCookie(t.alertBoxCookieVal), Dt.syncCookieExpiry()), t.syncRequired && t.profileFound ? (ot.syncRequired = t.syncRequired, Dt.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), Uo.initGrpsAndHosts(), !n && Ct.NtfyConfig.ShowNtfy && Dt.isAlertBoxClosedAndValid() ? [4, Ln.getContent()] : [3, 2]) : [3, 3];
                    case 1:
                        e.sent(), Ln.init(), Ln.changeState(), e.label = 2;
                    case 2:
                        return Ct.IsIabEnabled && (Dt.setIABCookieData(), jt.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), to.setLandingPathParam(Ae), cn.substitutePlainTextScriptTags(), yn.updateGtmMacros(!0), xn.executeOptanonWrapper(), [3, 4];
                    case 3:
                        !t.profileFound && t.alertBoxCookieVal && this.createTrans(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, gs);

    function gs() {}
    var fs, bs = (Cs.prototype.removeCookies = function() {
        vt.removePreview(), vt.removeOptanon(), vt.removeAlertBox(), vt.removeIab2(), vt.removeAddtlStr(), vt.removeVariant(), ot.isPreview && fs.setPreviewCookie(), ot.urlParams.get("otreset") && ot.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + ot.urlParams.toString() + window.location.hash;
        fs.replaceHistory(e)
    }, Cs.prototype.setPreviewCookie = function() {
        var e = new Date;
        e.setTime(e.getTime() + 864e5);
        var t = ot.geoFromUrl ? "&geo=" + ot.geoFromUrl : "",
            o = "expiry=" + e.toISOString() + t;
        vt.setCookie(Se.OT_PREVIEW, o, 365, !1)
    }, Cs.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return fs.onMessage(e)
        })
    }, Cs.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e), location.reload()
    }, Cs.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === fs.CLEAR_COOKIES && (fs.removeCookies(), e.source && e.source.postMessage && e.source.postMessage(fs.CLEARED_COOKIES, e.origin))
    }, Cs);

    function Cs() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    fe.initPolyfill(), vt = new At, _t = new xt, bt = new gt, ko = new Mo, fs = new bs,
        function() {
            var e = window.otStubData;
            if (e) {
                nt.moduleInitializer = e.domainData, nt.fp = nt.moduleInitializer.TenantFeatures, ot.isAMP = e.isAmp, ot.dataDomainId = e.domainId, ot.isPreview = e.isPreview, ot.urlParams = e.urlParams, ot.isV2Stub = e.isV2Stub || !1, e.isReset ? fs.removeCookies() : e.isPreview && fs.setPreviewCookie(), bt.setBannerScriptElement(e.stubElement), bt.setRegionRule(e.regionRule), ot.userLocation = e.userLocation, ot.crossOrigin = e.crossOrigin, bt.bannerDataParentURL = e.bannerBaseDataURL, bt.mobileOnlineURL = h(bt.mobileOnlineURL, e.mobileOnlineURL);
                var t = bt.getRegionRule();
                bt.multiVariantTestingEnabled = nt.moduleInitializer.MultiVariantTestingEnabled && 0 < t.Variants.length && _t.isDateCurrent(t.TestEndTime), ot.grpsSynced = e.grpsSynced || [], ot.isIabSynced = e.isIabSynced, ot.syncRequired = e.isIabSynced || e.grpsSynced && 0 < e.grpsSynced.length, ot.consentPreferences = e.preferences, ot.syncGrpId = e.syncGrpId, ot.consentApi = e.consentApi, ot.tenantId = e.tenantId, ot.geoFromUrl = e.geoFromUrl, ko.populateLangSwitcherPlhdr(), window.otStubData = {
                    userLocation: ot.userLocation
                }, window.OneTrustStub = null
            }
        }(),
        function() {
            a(this, void 0, void 0, function() {
                var t, o, n, s, r;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return Gt = new Ht, en = new tn, Yo = new Jo, pn = new kn, cn = new dn, xn = new En, Wn = new Kn, Fn = new Rn, jn = new Un, Jn = new Qn, nn = new sn, Gn = new Hn, Jt = new Qt, Uo = new Wo, yn = new gn, Xn = new $n, co = new uo, ln = new an, hs = new ys, us = new ps, Ro = new qo, Zo = new Xo, bn = new Sn, nt.moduleInitializer.MobileSDK ? ls = new as : ts = new os, jt = new Ut, t = bt.getRegionRule(), "IAB2" !== bt.getRegionRuleType() ? [3, 2] : [4, Promise.all([Ro.getLangJson(), Ro.fetchGvlObj(), t.UseGoogleVendors ? Ro.fetchGoogleVendors() : Promise.resolve(null), Ro.loadCMP()])];
                        case 1:
                            return r = e.sent(), o = r[0], n = r[1], s = r[2], ot.gvlObj = n, ot.addtlVendorsList = s ? s.vendors : null, [3, 4];
                        case 2:
                            return [4, Ro.getLangJson()];
                        case 3:
                            o = e.sent(), e.label = 4;
                        case 4:
                            return function(s) {
                                a(this, void 0, void 0, function() {
                                    var t, o, n;
                                    return u(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                        var t, o = nt.moduleInitializer.MobileSDK;
                                                        t = o ? ls : ts;
                                                        var n = {
                                                            AllowAll: t.AllowAll,
                                                            BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                            Close: t.Close,
                                                            getCSS: t.getCSS,
                                                            GetDomainData: t.GetDomainData,
                                                            getGeolocationData: t.getGeolocationData,
                                                            getHTML: t.getHTML,
                                                            Init: t.Init,
                                                            InitializeBanner: t.InitializeBanner,
                                                            initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                            InsertHtml: t.InsertHtml,
                                                            InsertScript: t.InsertScript,
                                                            IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                            IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                            LoadBanner: t.LoadBanner,
                                                            OnConsentChanged: co.OnConsentChanged,
                                                            ReconsentGroups: t.ReconsentGroups,
                                                            RejectAll: t.RejectAll,
                                                            SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                            setGeoLocation: t.setGeoLocation,
                                                            ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                            TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                            useGeoLocationService: t.useGeoLocationService,
                                                            FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                            changeLanguage: t.changeLang,
                                                            testLog: t.getTestLogData
                                                        };
                                                        e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, ot.isV2Stub && (n.syncConsentProfile = hs.syncConsentProfile));
                                                        o && (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = ot.otCookieData);
                                                        e.IsIabEnabled && (n.updateConsentFromCookies = co.updateConsentFromCookie, n.getPingRequest = jt.getPingRequestForTcf, n.getVendorConsentsRequestV2 = jt.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                        return n
                                                    }(s.DomainData)), Dt.initializeBannerVariables(s), Wt = new Kt, Xt = new $t, Ft = new Rt, ro = new lo, to = new no, Vn = new Nn, Ln = new _n,
                                                    function() {
                                                        var o = window.OTExternalConsent;
                                                        if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                                            var n = [],
                                                                e = o.groups.split(",");
                                                            e.forEach(function(e) {
                                                                var t = e.split(":");
                                                                n.push({
                                                                    consentDate: o.consentedDate,
                                                                    status: "1" === t[1] ? C[C.ACTIVE] : C[C.OPT_OUT],
                                                                    id: t[0]
                                                                }), ot.grpsSynced.push(t[0])
                                                            }), ot.consentPreferences = {
                                                                preferences: n,
                                                                syncGroups: null
                                                            }, ot.syncRequired = !0, Wt.updateGroupsInCookie(Se.OPTANON_CONSENT, e), vt.setCookie(Se.ALERT_BOX_CLOSED, o.consentedDate, 365), o.tcString && (ot.isIabSynced = !0, vt.setCookie(Se.EU_PUB_CONSENT, o.tcString, 365)), o.addtlString && vt.setCookie(Se.ADDITIONAL_CONSENT_STRING, "" + ot.addtlConsentVersion + o.addtlString, 365)
                                                        }
                                                    }(), ot.isPreview && (Dt.syncOtPreviewCookie(), fs.bindStopPreviewEvent()), t = hs.syncPreferences(ot.consentPreferences, !0), (ot.syncRequired || t.syncRequired) && Dt.syncAlertBoxCookie(t.alertBoxCookieVal), Dt.syncCookieExpiry(), o = window.OneTrust.dataSubjectParams || {}, (ot.dsParams = o).id && ts.setDataSubjectIdV2(o.id, o.isAnonymous), bt.multiVariantTestingEnabled && bt.selectedVariant && vt.setCookie(Se.SELECTED_VARIANT, bt.selectedVariant.Id, Ct.ReconsentFrequencyDays), [4, jt.initializeIABModule()];
                                            case 1:
                                                return e.sent(), window.OneTrust.Init(!0), [4, Uo.fetchAssets()];
                                            case 2:
                                                return (e.sent(), Jn.initBanner(), co.assetResolve(!0), Gn.initialiseCssReferences(), n = Dt.isIABCrossConsentEnabled(), (ot.syncedValidGrp || ot.isIabSynced) && !n && Ct.NtfyConfig.ShowNtfy && Dt.isAlertBoxClosedAndValid()) ? (ot.ntfyRequired = !0, [4, Ln.getContent()]) : [3, 4];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return n || window.OneTrust.LoadBanner(), [2]
                                        }
                                    })
                                })
                            }(o), [2]
                    }
                })
            })
        }()
}();