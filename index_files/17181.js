var AWIN = AWIN || {};
AWIN.Tracking = AWIN.Tracking || {}, AWIN.sProtocol = "https:" == location.protocol ? "https://" : "http://", AWIN.iScriptCount = 0, AWIN.Tracking.device9Url = "https://the.sciencebehindecommerce.com/d9core", AWIN.Tracking.flags = {
        allowNewAWCCookie: !0,
        allowNewGCLIDCookie: !0
    }, AWIN.Tracking.setFlag = function(e, n) {
        AWIN.Tracking.flags[e] = n
    }, AWIN.Tracking.getFlag = function(e) {
        return AWIN.Tracking.flags[e]
    }, AWIN.tldDomains = ["com", "org", "edu", "gov", "uk", "net", "ca", "de", "jp", "fr", "au", "us", "ru", "ch", "it", "nl", "se", "no", "es", "mil", "gw", "ax", "wf", "yt", "sj", "mobi", "eh", "mh", "bv", "ap", "cat", "kp", "iq", "um", "arpa", "pm", "gb", "cs", "td", "so", "aero", "biz", "coop", "info", "jobs", "museum", "name", "pro", "travel", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "aw", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bw", "by", "bz", "cc", "cd", "cf", "cg", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cx", "cy", "cz", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "er", "et", "eu", "fi", "fj", "fk", "fm", "fo", "ga", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "ir", "is", "je", "jm", "jo", "ke", "kg", "kh", "ki", "km", "kn", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "mg", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rw", "sa", "sb", "sc", "sd", "sg", "sh", "si", "sk", "sl", "sm", "sn", "sr", "st", "sv", "sy", "sz", "tc", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "ws", "ye", "yu", "za", "zm", "zw", "app"], AWIN.twoPartsTldDomains = ["co.bb", "co.ck", "co.cr", "co.in", "co.id", "co.il", "co.jp", "co.nz", "co.za", "co.kr", "co.th", "co.uk", "org.uk", "net.uk", "com.pl", "biz.pl", "net.pl", "com.cl", "com.pe", "com.ar", "com.au", "com.br"], AWIN.Tracking.fingerprinting = function(e) {
        if (!document.getElementById("d9tag")) {
            var n = AWIN.Tracking.getQueryVarValue("mtfp", document.location.search.substring(1));
            if (AWIN.Tracking.device9 && "no" != n) {
                window.D9v = e;
                var t = document.createElement("script");
                t.type = "text/javascript", t.id = "d9tag", t.async = !0, t.src = AWIN.Tracking.device9Url;
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(t, a)
            }
        }
    }, AWIN.Tracking.digestClickId = function(e) {
        if (!/\d+_\d+_.+/.test(e)) return !1;
        var n = e.split("_"),
            t = {};
        return t.sName = "_aw_m_" + n[0], t.sContents = e, t
    }, AWIN.Tracking.getQueryVarValue = function(e, n) {
        for (var t = n.split("&"), a = 0; a < t.length; a++) {
            var r = t[a].split("=");
            if (e.toLowerCase() == r[0].toLowerCase()) return r[1]
        }
    }, AWIN.Tracking.getAnchorValue = function(e) {
        var n = document.location.hash.substring(1);
        if (n) return aid = n.match(e), aid ? aid.toString().substr(4) : null
    }, AWIN.Tracking.buildQueryString = function(e) {
        var n = [];
        for (var t in e) e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
        return n.join("&")
    }, AWIN.Tracking._getDomain = function() {
        return document.domain
    }, AWIN.Tracking._getCookieDomain = function() {
        if (void 0 !== AWIN.Tracking.cookieDomain) return AWIN.Tracking.cookieDomain;
        var e = AWIN.Tracking._getDomain();
        if (e.split(".").length < 3) return "." + e;
        var n = e.split(".").slice(-2).join(".");
        if (AWIN.twoPartsTldDomains.indexOf(n) >= 0) return "." + e.split(".").slice(-3).join(".");
        var t = e.split(".").pop();
        return AWIN.tldDomains.indexOf(t) >= 0 ? "." + e.split(".").slice(-2).join(".") : "www." == e.substr(0, 4) ? e.substr(3) : "." + e
    }, AWIN.Tracking._getAWCValue = function() {
        for (var e, n = /[\?&]awc=(\d+_(\d+)_[0-9a-f]+)/gi, t = 0, a = !1; e = n.exec(AWIN.Tracking._getBrowserSearchBarUrl());) t < e[2] && (t = e[2], a = e[1]);
        return a || AWIN.Tracking.getAnchorValue(/awc=[0-9a-z_]+/i)
    }, AWIN.Tracking._getAWaidValue = function() {
        var e = /[\?&]awaid=(\d+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),
            n = null;
        return e && (n = e[1]), n
    }, AWIN.Tracking._getGCLIDValue = function() {
        var e = /[\?&]gclid=([0-9a-zA-Z_\-]+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),
            n = null;
        return e && (n = e[1]), n
    }, AWIN.Tracking._getBrowserSearchBarUrl = function() {
        return document.location.search
    }, AWIN.Tracking.getQueryParameterDelimiter = function(e) {
        return -1 === e.indexOf("?") ? "?" : "&"
    }, AWIN.Tracking._getATPValue = function() {
        var e = AWIN.Tracking.getQueryVarValue("atp", document.location.search.substring(1));
        return e ? parseInt(e) : AWIN.Tracking.getAnchorValue(/atp=[0-9]+/i) ? parseInt(parseanchorAtp) : 0
    }, AWIN.Tracking.setCookie = function(e, n, t) {
        var a = !1;
        if (AWIN.Tracking.Consent.getSnRegEx().test(e) ? a = !0 : AWIN.Tracking.Consent.getConsentIsRespected() && !AWIN.Tracking.Consent.getConsent() || (a = !0), a) {
            var r = new Date;
            r.setTime(r.getTime() + 31536e6), t && r.setTime(1e3 * t);
            var i = "; expires=" + r.toGMTString();
            if (document.cookie = e + "=" + n + i + "; path=/;domain=" + this._getCookieDomain(), AWIN.Tracking.StorageProvider)
                if (0 === e.indexOf("_aw_m_")) {
                    var c = e.split("_aw_m_")[1];
                    AWIN.Tracking.StorageProvider.setAWC(c, n)
                } else if (0 === e.indexOf("_aw_sn_")) {
                c = e.split("_aw_sn_")[1];
                AWIN.Tracking.StorageProvider.setSn(c, n)
            }
        }
    }, AWIN.Tracking.setAWCCookie = function() {
        var e = AWIN.Tracking._getAWCValue();
        if (!/\d+_\d+_.+/.test(e)) return !1;
        var n = "_aw_m_" + e.split("_")[0];
        AWIN.Tracking.setCookie(n, e)
    }, AWIN.Tracking.setGCLIDCookie = function() {
        var e = AWIN.Tracking._getGCLIDValue(),
            n = AWIN.Tracking._getAWaidValue();
        return null !== e && null !== n && (AWIN.Tracking.setCookie("_aw_m_" + n, "gclid_" + n + "_" + e), !0)
    }, AWIN.Tracking.setIncentiveCookie = function() {
        var e = AWIN.Tracking._getAWCValue();
        if (!/\d+_\d+_.+/.test(e)) return !1;
        var n = "_aw_sn_" + e.split("_")[0];
        AWIN.Tracking.setCookie(n, e)
    }, AWIN.Tracking.setAidCookie = function() {
        var e = AWIN.Tracking.getQueryVarValue("xid", document.location.search.substring(1));
        e || (e = AWIN.Tracking.getAnchorValue(/xid=\d+/)), e && AWIN.Tracking.setCookie("_aw_xid", e)
    }, AWIN.Tracking.getAffiliateId = function() {
        return AWIN.Tracking.getCookiesAsString(/_aw_xid/)
    }, AWIN.Tracking.getSaleChannel = function() {
        return void 0 !== AWIN.Tracking.Sale.channel ? AWIN.Tracking.Sale.channel : ""
    }, AWIN.Tracking.cookiesWereSpecifiedByMerchant = function() {
        if (AWIN.Tracking.Sale && AWIN.Tracking.Sale.click) {
            if (/\d+_\d+_.+/.test(AWIN.Tracking.Sale.click)) return !0
        }
        return !1
    }, AWIN.Tracking.getCookiesAsString = function(e) {
        var n, t = "",
            a = !AWIN.Tracking.Consent.getConsentIsRespected() || AWIN.Tracking.Consent.getConsent(),
            r = !1;
        if (e || (e = /_aw_m_\d+/, n = AWIN.Tracking.Consent.getSnRegEx(), r = !0), r || a) {
            for (var i = [], c = document.cookie.split(";"), o = 0; o < c.length; o++) {
                var A = c[o].split("=");
                e.test(A[0]) ? a && i.push(A[1]) : r && n.test(A[0]) && (i.push(A[1]), AWIN.Tracking.Consent.setIsSnCookieAvailable())
            }
            i.length > 0 && (t = i.toString().replace(" ", ""))
        }
        return t
    }, AWIN.Tracking.getCookiesAsStringEscaped = function(e) {
        return escape(AWIN.Tracking.getCookiesAsString(e))
    }, AWIN.Tracking.getScriptAppendNode = function() {
        var e = ["body", "head", "html"];
        for (var n in e)
            if (document.getElementsByTagName(e[n])[0]) return document.getElementsByTagName(e[n])[0]
    }, AWIN.Tracking.frameAppend = function(e, n) {
        document.getElementsByTagName("body")[0] && AWIN.Tracking.Consent.getGdprAppends(n, AWIN.Tracking.getQueryParameterDelimiter(e), (function(n) {
            e += n;
            var t = document.createElement("iframe");
            t.src = e, document.getElementsByTagName("body")[0].appendChild(t), AWIN.Tracking.hideElement(t)
        }))
    }, AWIN.Tracking.pixelAppend = function(e, n) {
        document.getElementsByTagName("body")[0] && AWIN.Tracking.Consent.getGdprAppends(n, AWIN.Tracking.getQueryParameterDelimiter(e), (function(n) {
            e += n;
            var t = document.createElement("img");
            t.src = e, document.getElementsByTagName("body")[0].appendChild(t), AWIN.Tracking.hideElement(t)
        }))
    }, AWIN.Tracking.scriptAppend = function(e, n, t, a, r) {
        if (!e || !n) {
            var i = document.createElement("script");
            if (i.type = "text/javascript", i.id = "_aw_script_" + AWIN.iScriptCount++, e ? i.src = e : n && (i.text = n), a)
                for (var c in a) i.setAttribute(c, a[c]);
            t && (i.onreadystatechange = function() {
                "complete" != i.readyState && "loaded" != i.readyState || eval(t)
            }, i.onload = function() {
                eval(t)
            }), e ? AWIN.Tracking.Consent.getGdprAppends(r, AWIN.Tracking.getQueryParameterDelimiter(i.src), (function(e) {
                i.src += e, AWIN.Tracking.getScriptAppendNode().appendChild(i)
            })) : AWIN.Tracking.getScriptAppendNode().appendChild(i)
        }
    }, AWIN.scriptsLoader = function(e) {
        e: for (var n = 0; n < e.length; n++) {
            for (var t = e[n], a = 0; a < t.aRequiredVars.length; a++) try {
                if (void 0 === eval(t.aRequiredVars[a])) throw new Error
            } catch (e) {
                continue e
            }
            t.sUrl ? AWIN.Tracking.scriptAppend(t.sUrl) : t.sContents && AWIN.Tracking.scriptAppend(null, t.sContents)
        }
    }, AWIN.Tracking.saleSubmit = function() {
        if (AWIN.Tracking.iMerchantId < 1) return !1;
        AWIN.Tracking.Sale.currency = void 0 !== AWIN.Tracking.Sale.currency ? AWIN.Tracking.Sale.currency : "", AWIN.Tracking.Sale.test = void 0 !== AWIN.Tracking.Sale.test ? AWIN.Tracking.Sale.test : "0", AWIN.Tracking.Sale.voucher = void 0 !== AWIN.Tracking.Sale.voucher ? AWIN.Tracking.Sale.voucher : "", AWIN.Tracking.scriptAppend(AWIN.Tracking.buildSaleUrl("js")), AWIN.Tracking.BasketImage = new Image(1, 1), AWIN.Tracking.BasketImage.src = AWIN.Tracking.buildSaleUrl("ia"), AWIN.Tracking.cookiesWereSpecifiedByMerchant() || (AWIN.enhancedTracking && 1 == AWIN.enhancedTracking && 1 != AWIN.Tracking.Sale.pvOnly && AWIN.Tracking.embedIframe("get"), AWIN.Tracking.fingerprinting({
            AdvID: "1062",
            OrderID: AWIN.Tracking.Sale.orderRef,
            OrderTotal: AWIN.Tracking.Sale.amount,
            SiteID: AWIN.Tracking.iMerchantId,
            TAG: 2
        }))
    }, AWIN.Tracking.basketSubmit = function() {
        var e = /^\s+|\s+$/g,
            n = document.getElementById("aw_basket").value.split("\n"),
            t = new Array;
        AWIN.Tracking.BasketImages = new Array;
        for (var a = 0; a < n.length; a++) {
            var r = n[a].replace(e, "");
            if (r.length > 0) {
                for (var i = r.split("|"), c = "", o = 0; o < i.length; o++) {
                    c += i[o].replace(e, "").substring(0, 255) + "|"
                }
                t[t.length] = encodeURIComponent(c.substring(0, c.length - 1))
            }
        }
        for (a = 0; a < t.length; a++) t[a].length > 0 && (AWIN.Tracking.BasketImages[a] = new Image(1, 1), AWIN.Tracking.BasketImages[a].src = AWIN.sProtocol + "www.zenaps.com/basket.php?product_line=" + t[a])
    }, AWIN.Tracking.getBasketData = function() {
        var e = [];
        if (!document.getElementById("aw_basket")) return e;
        for (var n = document.getElementById("aw_basket").value.split("\n"), t = 0; t < n.length; t++)
            if (n[t].length > 0) {
                var a = n[t].split("|");
                try {
                    e.push({
                        id: a[3].replace(/^\[|\]$/gi, ""),
                        name: a[4].replace(/^\[|\]$/gi, ""),
                        price: a[5].replace(/^\[|\]$/gi, ""),
                        quantity: a[6].replace(/^\[|\]$/gi, ""),
                        sku: a[7].replace(/^\[|\]$/gi, ""),
                        cg: a[8].replace(/^\[|\]$/gi, ""),
                        category: a[9].replace(/^\[|\]$/gi, "")
                    })
                } catch (n) {
                    return e
                }
            }
        return e
    }, AWIN.Tracking.hideElement = function(e) {
        "Microsoft Internet Explorer" == navigator.appName ? (e.style.height = 0, e.style.width = 0, e.style.visibility = "hidden", e.style.display = "inherit", e.style.margin = 0, e.style.border = 0, e.style.padding = 0) : (e.style.setProperty("height", "0", "important"), e.style.setProperty("width", "0", "important"), e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "inherit", "important"), e.style.setProperty("margin", "0", "important"), e.style.setProperty("border", "0", "important"), e.style.setProperty("padding", "0", "important"))
    }, AWIN.Tracking.embedIframe = function(e) {
        if (!document.getElementById("AW_ALT")) {
            if ("set" == e) {
                var n = "https://www.zenaps.com/alt.php?mid=" + AWIN.Tracking.iMerchantId + "&sv=" + AWIN.Tracking._getAWCValue(),
                    t = parseInt(AWIN.Tracking._getATPValue());
                t > 0 && (n = n + "|" + t)
            } else {
                var a = AWIN.Tracking.buildSaleUrl("et");
                n = "https://www.zenaps.com/alt.php?mid=" + AWIN.Tracking.iMerchantId + "&gv=2&l=" + escape(a)
            }
            if (document.getElementsByTagName("body")[0]) {
                var r = document.createElement("iframe");
                r.src = n, r.height = "0", r.width = "0", r.id = "AW_ALT", document.getElementsByTagName("body")[0].appendChild(r);
                var i = document.getElementById("AW_ALT");
                AWIN.Tracking.hideElement(i)
            }
        }
    }, AWIN.Tracking.buildSaleUrl = function(e) {
        var n = "js" == e ? "js" : "php",
            t = "",
            a = "",
            r = "";
        if ("fc" != e && "et" != e) {
            t = "&cks=" + AWIN.Tracking.sCookiesString, AWIN.Tracking.awcStorages && (a = "&awc_st=" + escape(AWIN.Tracking.awcStorages));
            var i = parseInt(AWIN.Tracking.getCookiesAsString(/_aw_atp/));
            i > 0 && (r = "&atp=" + i)
        }
        var c = escape(window.location.href);
        "fc" == e && (c = escape(c));
        var o = "";
        1 == AWIN.Tracking.Sale.pvOnly && (o = "&pv=1");
        var A = AWIN.sProtocol + "www.zenaps.com/sread." + n + "?a=" + AWIN.Tracking.iMerchantId + "&b=" + AWIN.Tracking.Sale.amount + "&cr=" + AWIN.Tracking.Sale.currency + "&c=" + AWIN.Tracking.Sale.orderRef + "&d=" + AWIN.Tracking.Sale.parts + "&vc=" + AWIN.Tracking.Sale.voucher + "&t=" + AWIN.Tracking.Sale.test + "&ch=" + AWIN.Tracking.getSaleChannel() + t + "&l=" + c + "&tv=2" + o + r + "&tt=" + e + a;
        return AWIN.Tracking.Sale.custom && AWIN.Tracking.Sale.custom instanceof Array && (A += AWIN.Tracking.getDynamicParametersAsQueryString("p", AWIN.Tracking.Sale.custom)), AWIN.Tracking.Sale.customerAcquisition && (A = A + "&customeracquisition=" + AWIN.Tracking.Sale.customerAcquisition), AWIN.Tracking.Sale.servicePartnerIds && AWIN.Tracking.Sale.servicePartnerIds instanceof Array && (A += AWIN.Tracking.getDynamicParametersAsQueryString("spa", AWIN.Tracking.Sale.servicePartnerIds)), AWIN.Tracking.Sale.servicePartnerReferences && AWIN.Tracking.Sale.servicePartnerReferences instanceof Array && (A += AWIN.Tracking.getDynamicParametersAsQueryString("sparef", AWIN.Tracking.Sale.servicePartnerReferences)), AWIN.Tracking.Consent.getConsentIsRespected() && (A += AWIN.Tracking.Consent.getGdprQuery()), AWIN.Tracking.Consent.getIsSnCookieAvailable() && (A += "&sn=1"), A
    }, AWIN.Tracking.getDynamicParametersAsQueryString = function(e, n) {
        for (var t = "", a = 0; a < n.length; a++) {
            t = t + "&" + (e + (a + 1)) + "=" + n[a]
        }
        return t
    }, AWIN.Tracking.fetchZxParam = function(e) {
        var n = window["zx_" + e],
            t = AWIN.Tracking.getQueryVarValue("zx_" + e, document.location.search.substring(1)),
            a = AWIN.Tracking.getXPath('//*[@id="zx_' + e + '"]').next();
        if (null !== a) {
            n = null;
            var r = a.innerHTML
        }
        var i = AWIN.Tracking.getXPath('//META[@name="zx:' + e + '"]').next();
        if (null !== i) var c = i.getAttribute("content");
        return n || c || r || t
    }, AWIN.Tracking.getXPath = function(e) {
        return document.evaluate ? {
            list: document.evaluate(e, document, null, XPathResult.ANY_TYPE, null),
            next: function() {
                return this.list.iterateNext()
            }
        } : {
            next: function() {
                return null
            }
        }
    }, AWIN.Tracking.runScripts = function() {
        AWIN.Tracking.aScripts.length > 0 && AWIN.scriptsLoader(AWIN.Tracking.aScripts)
    }, AWIN.Tracking.runCount = 0, AWIN.Tracking.run = function(e) {
        AWIN.Tracking.runCount++, AWIN.Tracking.cookiesWereSpecifiedByMerchant() ? AWIN.Tracking.sCookiesString = escape(AWIN.Tracking.Sale.click) : AWIN.Tracking.sCookiesString = void 0 === e ? escape(AWIN.Tracking.getCookiesAsString()) : escape(e), AWIN.Tracking.Sale && (AWIN.Tracking.Consent.getConsentIsRespected() && !AWIN.Tracking.Consent.getHasResult() || (AWIN.Tracking.saleSubmit(), document.getElementById("aw_basket") && AWIN.Tracking.basketSubmit())), AWIN.Tracking._getAWCValue() ? (AWIN.Tracking.Consent.getSnParameter() ? AWIN.Tracking.getFlag("allowNewAWCCookie") && AWIN.Tracking.setIncentiveCookie() : (AWIN.Tracking.getFlag("allowNewAWCCookie") && AWIN.Tracking.setAWCCookie(), AWIN.Tracking._getATPValue() > 0 && AWIN.Tracking.setCookie("_aw_atp", AWIN.Tracking._getATPValue())), AWIN.Tracking.Consent.getConsentIsRespected() && !AWIN.Tracking.Consent.getConsent() || (AWIN.enhancedTracking && 1 == AWIN.enhancedTracking && AWIN.Tracking.embedIframe("set"), AWIN.Tracking.fingerprinting({
            CampID: "3055",
            CCampID: AWIN.Tracking.iMerchantId,
            ImpID: AWIN.Tracking._getAWCValue(),
            TAG: 1
        }))) : AWIN.Tracking._getGCLIDValue() ? AWIN.Tracking.getFlag("allowNewGCLIDCookie") && AWIN.Tracking.setGCLIDCookie() : AWIN.Tracking.refreshAWCookies(), AWIN.Tracking.setAidCookie()
    }, AWIN.Tracking.getAWCookies = function() {
        for (var e = /_aw_m_\d+/, n = /\d+_\d+_.+/, t = [], a = !AWIN.Tracking.Consent.getConsentIsRespected() || AWIN.Tracking.Consent.getConsent(), r = document.cookie.split(";"), i = 0; i < r.length; i++) {
            var c = r[i].split("=");
            e.test(c[0]) ? a && n.test(c[1]) && t.push(c) : AWIN.Tracking.Consent.getSnRegEx().test(c[0]) && n.test(c[1]) && t.push(c)
        }
        return t
    }, AWIN.Tracking.refreshAWCookies = function() {
        for (var e = AWIN.Tracking.getAWCookies(), n = 0; n < e.length; n++) {
            var t = e[n][0],
                a = e[n][1];
            AWIN.Tracking.setCookie(t, a, 1);
            var r = a.split("_"),
                i = 31536e3 + parseInt(r[1]);
            AWIN.Tracking.setCookie(t, a, i)
        }
    }, "function" != typeof window.CustomEvent ? window.AwinCustomEvent = function(e, n) {
        n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), t
    } : window.AwinCustomEvent = window.CustomEvent, AWIN.Tracking.Consent = {},
    function(e) {
        var n, t = !1,
            a = !1,
            r = !1,
            i = !1,
            c = /_aw_sn_\d+/;
        e.checkForSnParameter = function() {
            var n = AWIN.Tracking.getQueryVarValue("sn", document.location.search.substring(1));
            n && e.setSnParameter(parseInt(n))
        }, e.getGdprQuery = function() {
            return void 0 !== AWIN.Tracking.AdvertiserConsent ? e.getConsent() ? "&cons=1" : "&cons=0" : ""
        }, e.getConsent = function() {
            return void 0 !== AWIN.Tracking.AdvertiserConsent ? AWIN.Tracking.AdvertiserConsent : a
        }, e.getHasResult = function() {
            return void 0 !== AWIN.Tracking.AdvertiserConsent || r
        }, e.setConsentPluginIsUsed = function(e) {
            t = e
        }, e.getConsentIsRespected = function() {
            return void 0 !== AWIN.Tracking.AdvertiserConsent || t
        }, e.setGdprQueryAdditionFunction = function(n) {
            void 0 === AWIN.Tracking.AdvertiserConsent && (e.getGdprQuery = n)
        }, e.setConsent = function(e) {
            a = e, r = !0
        }, e.setAdvertiserConsentStatus = function(e) {
            if (void 0 !== AWIN.Tracking.AdvertiserConsent) {
                AWIN.Tracking.AdvertiserConsent = e, r = !0;
                var n = new AwinCustomEvent("AdvertiserConsentChanged", {
                    detail: {
                        consent: e
                    }
                });
                document.dispatchEvent(n), AWIN.Tracking.StorageProvider ? AWIN.Tracking.StorageProvider.get(AWIN.Tracking.getCookiesAsString(), AWIN.Tracking.run) : AWIN.Tracking.run()
            }
        }, e.setSnParameter = function(e) {
            n = e
        }, e.setIsSnCookieAvailable = function() {
            i = !0
        }, e.getSnParameter = function() {
            return !!n
        }, e.getIsSnCookieAvailable = function() {
            return i
        }, e.getSnRegEx = function() {
            return c
        }, e.getGdprAppends = function(e, n, t) {
            if (e) {
                var a = n + "gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_" + e + "}";
                if ("function" == typeof __tcfapi) try {
                    __tcfapi("getTCData", 2, (function(e, r) {
                        var i = n;
                        if (e && r && void 0 !== e.gdprApplies) return e.gdprApplies ? i += "gdpr=1" : i += "gdpr=0", i += "&gdpr_consent=" + e.tcString, void t(i);
                        t(a)
                    }), [e])
                } catch (e) {
                    t(a)
                } else t(a)
            } else t("")
        }, e.checkForSnParameter()
    }(AWIN.Tracking.Consent), AWIN.SandBoxGenerator = function() {
        var e = AWIN.Tracking.getAffiliateId(),
            n = AWIN.Tracking._getAWCValue();

        function t(t, a) {
            var r = {
                advertiser: {},
                plugin: {}
            };
            return function(t, a) {
                t.plugin.publisherId = e, t.plugin.advertiserId = AWIN.Tracking.iMerchantId, t.plugin.protocol = AWIN.sProtocol, t.plugin.awc = n, t.advertiser.config = AWIN.Tracking[a]
            }(r, a), t.accessConfig.zxParams && function(e, n) {
                n.length > 0 && (e.zxParams = {});
                for (var t = 0; t < n.length; t++) e.zxParams[n[t]] = AWIN.Tracking.fetchZxParam(n[t])
            }(r.plugin, t.accessConfig.zxParams), t.accessConfig.location && (r.plugin.location = document.location), t.accessConfig.referrer && (r.plugin.referrer = document.referrer), t.accessConfig.sale && (r.plugin.sale = AWIN.Tracking.Sale), t.accessConfig.basket && (r.plugin.basket = AWIN.Tracking.getBasketData()), r
        }
        return {
            generate: function(e, n) {
                var a = "<body><script>var AWIN = AWIN || {};AWIN.Tracking = AWIN.Tracking || {};AWIN.payload = " + JSON.stringify(t(AWIN.Tracking[n], n)) + ';AWIN.pluginName = "' + n + '";AWIN.masterTagSb = "var%20AWIN%20%3D%20AWIN%20%7C%7C%20%7B%7D%3B%0AAWIN.iScriptCount%20%3D%200%3B%0A%0AAWIN.Tracking%20%3D%20%28function%20%28pluginName%2C%20payload%29%20%7B%0A%09var%20fetchZxParam%20%3D%20function%20%28name%29%20%7B%0A%09%09return%20payload.plugin.zxParams%5Bname%5D%20%7C%7C%20null%3B%0A%09%7D%3B%0A%09var%20scriptAppend%20%3D%20function%20%28sScriptSrc%2C%20sScriptContent%2C%20sScriptOnLoad%2C%20oScriptTagParams%2C%20tcfVendorId%29%20%7B%0A%09%09//%20only%20one%20of%20the%20two%20can%20be%20set%0A%09%09if%20%28sScriptSrc%20%26%26%20sScriptContent%29%20%7B%0A%09%09%09return%20false%3B%0A%09%09%7D%0A%0A%09%09//%20create%20script%20node%0A%09%09var%20scriptNode%20%3D%20document.createElement%28%27script%27%29%3B%0A%09%09scriptNode.type%20%3D%20%27text/javascript%27%3B%0A%09%09scriptNode.id%20%3D%20%27_aw_script_%27%20+%20AWIN.iScriptCount++%3B%0A%0A%09%09//%20only%20add%20if%20param%20was%20passed%0A%09%09if%20%28sScriptSrc%29%20%7B%0A%09%09%09scriptNode.src%20%3D%20sScriptSrc%3B%0A%09%09%7D%20else%20if%20%28sScriptContent%29%20%7B%0A%09%09%09scriptNode.text%20%3D%20sScriptContent%3B%0A%09%09%7D%0A%0A%09%09//%20set%20optional%20parameters%0A%09%09if%20%28oScriptTagParams%29%20%7B%0A%09%09%09for%20%28var%20name%20in%20oScriptTagParams%29%20%7B%0A%09%09%09%09scriptNode%5Bname%5D%20%3D%20oScriptTagParams%5Bname%5D%3B%0A%09%09%09%7D%0A%09%09%7D%0A%0A%09%09//%20attach%20an%20event%20handler%0A%09%09if%20%28sScriptOnLoad%29%20%7B%0A%09%09%09//%20for%20IE%0A%09%09%09scriptNode.onreadystatechange%20%3D%20function%20%28%29%20%7B%0A%09%09%09%09if%20%28scriptNode.readyState%20%3D%3D%20%27complete%27%20%7C%7C%20scriptNode.readyState%20%3D%3D%20%27loaded%27%29%20%7B%0A%09%09%09%09%09eval%28sScriptOnLoad%29%3B%0A%09%09%09%09%7D%0A%09%09%09%7D%3B%0A%0A%09%09%09//%20for%20everything%20else%0A%09%09%09scriptNode.onload%20%3D%20function%20%28%29%20%7B%0A%09%09%09%09eval%28sScriptOnLoad%29%3B%0A%09%09%09%7D%3B%0A%09%09%7D%0A%0A%09%09//%20append%20node%0A%09%09if%20%28sScriptSrc%29%20%7B%0A%09%09%09AWIN.Tracking.Consent.getGdprAppends%28%0A%09%09%09%09tcfVendorId%2C%0A%09%09%09%09AWIN.Tracking.getQueryParameterDelimiter%28scriptNode.src%29%2C%0A%09%09%09%09function%20%28gdprAppends%29%20%7B%0A%09%09%09%09%09scriptNode.src%20+%3D%20gdprAppends%3B%0A%09%09%09%09%09AWIN.Tracking.getScriptAppendNode%28%29.appendChild%28scriptNode%29%3B%0A%09%09%09%09%7D%0A%09%09%09%29%3B%0A%09%09%7D%20else%20%7B%0A%09%09%09AWIN.Tracking.getScriptAppendNode%28%29.appendChild%28scriptNode%29%3B%0A%09%09%7D%0A%0A%09%09return%20scriptNode%3B%0A%09%7D%3B%0A%09var%20frameAppend%20%3D%20function%20%28sFrameSrc%2C%20tcfVendorId%29%20%7B%0A%09%09if%20%28document.getElementsByTagName%28%27body%27%29%5B0%5D%29%20%7B%0A%09%09%09AWIN.Tracking.Consent.getGdprAppends%28%0A%09%09%09%09tcfVendorId%2C%0A%09%09%09%09AWIN.Tracking.getQueryParameterDelimiter%28sFrameSrc%29%2C%0A%09%09%09%09function%20%28gdprAppends%29%20%7B%0A%09%09%09%09%09sFrameSrc%20+%3D%20gdprAppends%3B%0A%0A%09%09%09%09%09var%20iframe%20%3D%20document.createElement%28%27iframe%27%29%3B%0A%09%09%09%09%09iframe.src%20%3D%20sFrameSrc%3B%0A%09%09%09%09%09document.getElementsByTagName%28%27body%27%29%5B0%5D.appendChild%28iframe%29%3B%0A%09%09%09%09%09//%20AWIN.Tracking.hideElement%28iframe%29%3B%20//%20not%20needed%2C%20iframe%20is%20hidden%20already%0A%09%09%09%09%7D%0A%09%09%09%29%3B%0A%09%09%7D%0A%09%7D%3B%0A%09var%20pixelAppend%20%3D%20function%20%28sImageSrc%2C%20tcfVendorId%29%20%7B%0A%09%09if%20%28document.getElementsByTagName%28%27body%27%29%5B0%5D%29%20%7B%0A%09%09%09AWIN.Tracking.Consent.getGdprAppends%28%0A%09%09%09%09tcfVendorId%2C%0A%09%09%09%09AWIN.Tracking.getQueryParameterDelimiter%28sImageSrc%29%2C%0A%09%09%09%09function%20%28gdprAppends%29%20%7B%0A%09%09%09%09%09sImageSrc%20+%3D%20gdprAppends%3B%0A%0A%09%09%09%09%09var%20image%20%3D%20document.createElement%28%27img%27%29%3B%0A%09%09%09%09%09image.src%20%3D%20sImageSrc%3B%0A%09%09%09%09%09document.getElementsByTagName%28%27body%27%29%5B0%5D.appendChild%28image%29%3B%0A%09%09%09%09%09//%20AWIN.Tracking.hideElement%28image%29%3B%20//%20not%20needed%2C%20iframe%20is%20hidden%20already%0A%09%09%09%09%7D%0A%09%09%09%29%3B%0A%09%09%7D%0A%09%7D%3B%0A%09var%20getQueryParameterDelimiter%20%3D%20function%20%28currentUrl%29%20%7B%0A%09%09return%20currentUrl.indexOf%28%27%3F%27%29%20%3D%3D%3D%20-1%20%3F%20%27%3F%27%20%3A%20%27%26%27%3B%0A%09%7D%3B%0A%09var%20buildQueryString%20%3D%20function%20%28params%29%20%7B%0A%09%09var%20bits%20%3D%20%5B%5D%3B%0A%09%09for%20%28var%20name%20in%20params%29%20%7B%0A%09%09%09if%20%28params.hasOwnProperty%28name%29%29%20%7B%0A%09%09%09%09bits.push%28name%20+%20%27%3D%27%20+%20encodeURIComponent%28params%5Bname%5D%29%29%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%09return%20bits.join%28%27%26%27%29%3B%0A%09%7D%3B%0A%09var%20getScriptAppendNode%20%3D%20function%20%28%29%20%7B%0A%09%09return%20document.body%3B%0A%09%7D%3B%0A%09var%20getBasketData%20%3D%20function%20%28%29%20%7B%0A%09%09return%20payload.plugin.basket%20%7C%7C%20%5B%5D%3B%0A%09%7D%3B%0A%09var%20getAffiliateId%20%3D%20function%20%28%29%20%7B%0A%09%09return%20payload.plugin.publisherId%3B%0A%09%7D%3B%0A%09var%20_getAWCValue%20%3D%20function%20%28%29%20%7B%0A%09%09return%20payload.plugin.awc%3B%0A%09%7D%3B%0A%0A%09var%20Consent%20%3D%20%7B%7D%3B%0A%0A%09%28function%20%28awinTrackingConsent%29%20%7B%0A%09%09//%20if%20we%20locate%20the%20CMP%20iframe%20we%20will%20reference%20it%20with%20this%0A%09%09var%20cmpFrame%3B%0A%0A%09%09%28function%20%28%29%20%7B%0A%09%09%09//%20start%20here%20at%20our%20window%0A%09%09%09let%20frame%20%3D%20window%3B%0A%0A%09%09%09//%20map%20of%20calls%0A%09%09%09const%20cmpCallbacks%20%3D%20%7B%7D%3B%0A%09%09%09while%20%28frame%29%20%7B%0A%09%09%09%09try%20%7B%0A%09%09%09%09%09/**%0A%09%09%09%09%09%20*%20throws%20a%20reference%20error%20if%20no%20frames%20exist%0A%09%09%09%09%09%20*/%0A%09%09%09%09%09if%20%28frame.frames%5B%27__tcfapiLocator%27%5D%29%20%7B%0A%09%09%09%09%09%09cmpFrame%20%3D%20frame%3B%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%7D%20catch%20%28ignore%29%20%7B%7D%0A%09%09%09%09if%20%28frame%20%3D%3D%3D%20window.top%29%20%7B%0A%09%09%09%09%09break%3B%0A%09%09%09%09%7D%0A%09%09%09%09frame%20%3D%20frame.parent%3B%0A%09%09%09%7D%0A%0A%09%09%09/**%0A%09%09%09%20*%20Set%20up%20a%20__tcfapi%20proxy%20method%20to%20do%20the%20postMessage%20and%20map%20the%20callback.%0A%09%09%09%20*%20From%20the%20caller%27s%20perspective%2C%20this%20function%20behaves%20identically%20to%20the%0A%09%09%09%20*%20CMP%20API%27s%20__tcfapi%20call%0A%09%09%09%20*/%0A%09%09%09window.__tcfapi%20%3D%20function%20%28cmd%2C%20version%2C%20callback%2C%20arg%29%20%7B%0A%09%09%09%09if%20%28%21cmpFrame%29%20%7B%0A%09%09%09%09%09callback%28%7B%20msg%3A%20%27CMP%20not%20found%27%20%7D%2C%20false%29%3B%0A%09%09%09%09%7D%20else%20%7B%0A%09%09%09%09%09const%20callId%20%3D%20Math.random%28%29%20+%20%27%27%3B%0A%09%09%09%09%09const%20msg%20%3D%20%7B%0A%09%09%09%09%09%09__tcfapiCall%3A%20%7B%0A%09%09%09%09%09%09%09command%3A%20cmd%2C%0A%09%09%09%09%09%09%09parameter%3A%20arg%2C%0A%09%09%09%09%09%09%09version%3A%20version%2C%0A%09%09%09%09%09%09%09callId%3A%20callId%2C%0A%09%09%09%09%09%09%7D%2C%0A%09%09%09%09%09%7D%3B%0A%0A%09%09%09%09%09/**%0A%09%09%09%09%09%20*%20map%20the%20callback%20for%20lookup%20on%20response%0A%09%09%09%09%09%20*/%0A%09%09%09%09%09cmpCallbacks%5BcallId%5D%20%3D%20callback%3B%0A%09%09%09%09%09cmpFrame.postMessage%28msg%2C%20%27*%27%29%3B%0A%09%09%09%09%7D%0A%09%09%09%7D%3B%0A%0A%09%09%09function%20postMessageHandler%28event%29%20%7B%0A%09%09%09%09/**%0A%09%09%09%09%20*%20when%20we%20get%20the%20return%20message%2C%20call%20the%20mapped%20callback%0A%09%09%09%09%20*/%0A%09%09%09%09let%20json%20%3D%20%7B%7D%3B%0A%0A%09%09%09%09try%20%7B%0A%09%09%09%09%09/**%0A%09%09%09%09%09%20*%20if%20this%20isn%27t%20valid%20JSON%20then%20this%20will%20throw%20an%20error%0A%09%09%09%09%09%20*/%0A%09%09%09%09%09json%20%3D%20typeof%20event.data%20%3D%3D%3D%20%27string%27%20%3F%20JSON.parse%28event.data%29%20%3A%20event.data%3B%0A%09%09%09%09%7D%20catch%20%28ignore%29%20%7B%7D%0A%0A%09%09%09%09const%20payload%20%3D%20json.__tcfapiReturn%3B%0A%09%09%09%09if%20%28payload%29%20%7B%0A%09%09%09%09%09/**%0A%09%09%09%09%09%20*%20messages%20we%20care%20about%20will%20have%20a%20payload%0A%09%09%09%09%09%20*/%0A%09%09%09%09%09if%20%28typeof%20cmpCallbacks%5Bpayload.callId%5D%20%3D%3D%3D%20%27function%27%29%20%7B%0A%09%09%09%09%09%09/**%0A%09%09%09%09%09%09%20*%20call%20the%20mapped%20callback%20and%20then%20remove%20the%20reference%0A%09%09%09%09%09%09%20*/%0A%0A%09%09%09%09%09%09cmpCallbacks%5Bpayload.callId%5D%28payload.returnValue%2C%20payload.success%29%3B%0A%09%09%09%09%09%09cmpCallbacks%5Bpayload.callId%5D%20%3D%20null%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%7D%0A%09%09%09%7D%0A%09%09%09window.addEventListener%28%27message%27%2C%20postMessageHandler%2C%20false%29%3B%0A%09%09%7D%29%28%29%3B%0A%0A%09%09awinTrackingConsent.isCmpPresentOnPage%20%3D%20function%20%28%29%20%7B%0A%09%09%09return%20typeof%20cmpFrame%20%21%3D%3D%20%27undefined%27%3B%0A%09%09%7D%3B%0A%0A%09%09awinTrackingConsent.getGdprAppends%20%3D%20function%20%28tcfVendorId%2C%20delimiter%2C%20callback%29%20%7B%0A%09%09%09if%20%28tcfVendorId%29%20%7B%0A%09%09%09%09//%20prepare%20for%20no%20CMP%20and%20errors%0A%09%09%09%09var%20fallbackAppend%20%3D%20delimiter%20+%20%27gdpr%3D%24%7BGDPR%7D%26gdpr_consent%3D%24%7BGDPR_CONSENT_%27%20+%20tcfVendorId%20+%20%27%7D%27%3B%0A%0A%09%09%09%09//%20cmp%20found%2C%20asking%20__tcfapi%20for%20a%20consent%20string%20for%20this%20vendorId%0A%09%09%09%09if%20%28AWIN.Tracking.Consent.isCmpPresentOnPage%28%29%29%20%7B%0A%09%09%09%09%09try%20%7B%0A%09%09%09%09%09%09__tcfapi%28%0A%09%09%09%09%09%09%09%27getTCData%27%2C%0A%09%09%09%09%09%09%092%2C%0A%09%09%09%09%09%09%09function%20%28tcData%2C%20success%29%20%7B%0A%09%09%09%09%09%09%09%09var%20appends%20%3D%20delimiter%3B%0A%09%09%09%09%09%09%09%09if%20%28tcData%20%26%26%20success%29%20%7B%0A%09%09%09%09%09%09%09%09%09if%20%28typeof%20tcData.gdprApplies%20%21%3D%3D%20%27undefined%27%29%20%7B%0A%09%09%09%09%09%09%09%09%09%09if%20%28tcData.gdprApplies%29%20%7B%0A%09%09%09%09%09%09%09%09%09%09%09appends%20+%3D%20%27gdpr%3D1%27%3B%0A%09%09%09%09%09%09%09%09%09%09%7D%20else%20%7B%0A%09%09%09%09%09%09%09%09%09%09%09appends%20+%3D%20%27gdpr%3D0%27%3B%0A%09%09%09%09%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09%09%09%09%09appends%20+%3D%20%27%26gdpr_consent%3D%27%20+%20tcData.tcString%3B%0A%09%09%09%09%09%09%09%09%09%09callback%28appends%29%3B%0A%09%09%09%09%09%09%09%09%09%09return%3B%0A%09%09%09%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09%09%09//%20no%20data%2C%20no%20success%20or%20missing%20tcData.gdprApplies%0A%09%09%09%09%09%09%09%09callback%28fallbackAppend%29%3B%0A%09%09%09%09%09%09%09%7D%2C%0A%09%09%09%09%09%09%09%5BtcfVendorId%5D%0A%09%09%09%09%09%09%29%3B%0A%09%09%09%09%09%7D%20catch%20%28err%29%20%7B%0A%09%09%09%09%09%09callback%28fallbackAppend%29%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%7D%20else%20%7B%0A%09%09%09%09%09//%20no%20CMP%20found%0A%09%09%09%09%09callback%28fallbackAppend%29%3B%0A%09%09%09%09%7D%0A%09%09%09%7D%20else%20%7B%0A%09%09%09%09//%20no%20vendorId%20provided%0A%09%09%09%09callback%28%27%27%29%3B%0A%09%09%09%7D%0A%09%09%7D%3B%0A%09%7D%29%28Consent%29%3B%0A%0A%09var%20publicObject%20%3D%20%7B%0A%09%09//%20functions%0A%09%09fetchZxParam%3A%20fetchZxParam%2C%0A%09%09scriptAppend%3A%20scriptAppend%2C%0A%09%09frameAppend%3A%20frameAppend%2C%0A%09%09pixelAppend%3A%20pixelAppend%2C%0A%09%09getQueryParameterDelimiter%3A%20getQueryParameterDelimiter%2C%0A%09%09buildQueryString%3A%20buildQueryString%2C%0A%09%09getScriptAppendNode%3A%20getScriptAppendNode%2C%0A%09%09getBasketData%3A%20getBasketData%2C%0A%09%09getAffiliateId%3A%20getAffiliateId%2C%0A%09%09_getAWCValue%3A%20_getAWCValue%2C%0A%09%09Consent%3A%20Consent%2C%0A%0A%09%09//%20Awin%20properties%0A%09%09Sale%3A%20payload.plugin.sale%2C%0A%09%09iMerchantId%3A%20payload.plugin.advertiserId%2C%20//%20can%20be%20added%20without%20configuration%0A%09%09sProtocol%3A%20payload.plugin.protocol%2C%20//%20can%20be%20added%20without%20configuration%0A%0A%09%09//%20new%20access%20property%0A%09%09context%3A%20%7B%0A%09%09%09plugin%3A%20payload.plugin%2C%0A%09%09%09advertiser%3A%20payload.advertiser%2C%0A%09%09%09location%3A%20payload.plugin.location%0A%09%09%7D%2C%0A%09%7D%3B%0A%0A%09AWIN.sProtocol%20%3D%20payload.plugin.protocol%3B%0A%09publicObject%5BpluginName%5D%20%3D%20payload.advertiser.config%3B%0A%09return%20publicObject%3B%0A%7D%29%28AWIN.pluginName%2C%20AWIN.payload%29%3B%0A";AWIN.pluginCode = "' + e + '";eval(unescape(AWIN.masterTagSb) + "\\n" + unescape(AWIN.pluginCode));<\/script></body>',
                    r = document.createElement("iframe");
                r.srcdoc = a, r.sandbox = "allow-scripts", r.id = "awin-plugin-" + n, document.body.appendChild(r), AWIN.Tracking.hideElement(r)
            },
            fetchPayload: t
        }
    }(), AWIN.Tracking.aScripts = [], AWIN.Tracking.iMerchantId = 17181, AWIN.enhancedTracking = !0, "yes" == AWIN.Tracking.getQueryVarValue("awin_tntc", document.location.search.substring(1)) && (AWIN.enhancedTracking = !0), AWIN.Tracking.StorageProvider ? AWIN.Tracking.StorageProvider.get(AWIN.Tracking.getCookiesAsString(), (function(e) {
        AWIN.Tracking.run(e), AWIN.Tracking.runScripts()
    })) : (AWIN.Tracking.run(), AWIN.Tracking.runScripts());