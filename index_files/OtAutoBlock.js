! function() {
    function n(e) {
        for (var f, a, g, c, b = [], k = 0; k < w.length; k++) {
            var d = w[k];
            if (d.Tag === e) {
                b = d.CategoryId;
                break
            }
            var t = (f = d.Tag, c = g = a = void 0, a = -1 !== (c = f).indexOf("http:") ? c.replace("http:", "") : c.replace("https:", ""), -1 !== (g = a.indexOf("?")) ? a.replace(a.substring(g), "") : a);
            if (e && (-1 !== e.indexOf(t) || -1 !== d.Tag.indexOf(e))) {
                b = d.CategoryId;
                break
            }
        }
        if (!b.length && y) {
            var l = function(h) {
                var p = document.createElement("a");
                p.href = h;
                h = p.hostname.split(".");
                return -1 !== h.indexOf("www") || 2 < h.length ? h.slice(1).join(".") :
                    p.hostname
            }(e);
            z.some(function(h) {
                return h === l
            }) && (b = ["C0004"])
        }
        return b
    }

    function m(e) {
        return e && window.OptanonActiveGroups && e.every(function(f) {
            return -1 !== window.OptanonActiveGroups.indexOf(f)
        })
    }

    function q(e) {
        return -1 !== (e.getAttribute("class") || "").indexOf("optanon-category")
    }

    function r(e) {
        return e.hasAttribute("data-ot-ignore")
    }
    var w = JSON.parse('[{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660711500000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://gist.github.com/CharlesLedger/3867502c9752673c537c353bd210d90c.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/-IwdZUrqsi4","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/sIvOAMS6KQw","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7opwzYh1Fpg","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://contextual.media.net/cksync.php","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/5KFfAfI3udBlTYxmZF4YUe","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/BNv3GF8bY5A","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://ad.360yield.com/match","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660704900000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660693500000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://cw.addthis.com/t.gif","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d28645\x26dpuuid\x3d2dHy4l_n1gNfebeBxnqtC3aF5o3-Y5Js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/YWh6w3pWA8Y","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cdn.shopify.com/s/trekkie.storefront.d53285200e21338c222e3530239ec8b5a93fda5f.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/1jXbi9PoR9NqHWNAaosMw1","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/5Rv6FjlR6A60oqwLJqbtFE","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.google-analytics.com/plugins/ua/ec.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/iframe_api","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://support.ledger.com/cdn-cgi/challenge-platform/h/b/orchestrate/captcha/v1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.35981999a656a5a28309.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ssIS_zpLUFM","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dka575ofm4ao0.cloudfront.net/packs/runtime-6f893734be620b916e7e.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cdn.mathjax.org/mathjax/latest/MathJax.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660692600000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed-podcast/episode/5Rv6FjlR6A60oqwLJqbtFE","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://bam.nr-data.net/1/aa6e0ec721","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/65xb5PvkHNK9GYUl0mjMDR","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://eb2.3lift.com/xuid","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ads.stickyadstv.com/user-registering","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://widget-mediator.zopim.com/s/W/xdds/AWyn3lnUFO93ptZx/c/1621981044263","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://sp.analytics.yahoo.com/sp.pl","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://gum.criteo.com/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660696800000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://ad.yieldlab.net/m","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync.outbrain.com/cookie-sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://us-u.openx.net/w/1.0/sd","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hsadspixel.net/fb.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/txvTC-wwa2Q","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1616509200000/6id5v6n8cptt.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://widget-mediator.zopim.com/s/W/xdds/6mWk-vr4nHZxFjgT/c/1621987398705","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://pixel.tapad.com/idsync/ex/receive/check","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ups.analytics.yahoo.com/ups/58301/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/2OR7KaCbTDSWQey5EXEjH8","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660763400000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/demconf.jpg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.shopify.com/s/trekkie.storefront.205f91b45b7ac6f1738980e73dea86244fc0404d.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://p.yotpo.com/i","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/4Fuc4M6h0y1VFqceAAoiTk","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1616509500000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660656600000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/5NFoSmFf4MT8MIjvrr5QCO","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660712100000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://cdn.shopify.com/shopifycloud/shopify/assets/storefront/load_feature-d8a6f1446d67009c524ed4e68648800ba9082eb75548ee28e1050331cbe7ba28.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/dPrykMF8gQQ","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://t.contentsquare.net/uxa/632f3a9f096b5.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://ib.adnxs.com/getuid","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://analytics.twitter.com/i/adsct","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/6AsTYQ6CxJj7V9MT8wwKjr","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://gum.criteo.com/syncframe","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn-images-1.medium.com/max/250/0*tgIeIB_hNwsl9iDv","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://i.liadm.com/s/28292","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660658400000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1616508900000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/FaCEDklNuMQ","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://secure.adnxs.com/seg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/WZ3vES9q8QM","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://tr.snapchat.com/p","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://r.casalemedia.com/rum","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://syndication.twitter.com/i/jot","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/237213137153741","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/gtm/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.8b83be320cd47888a36c.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/5vGaesSvoQA","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d28645\x26dpuuid\x3d","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://d2wy8f7a9ursnm.cloudfront.net/v6/bugsnag.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/YvQ1TT5gfSo","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://ad.mail.ru/cm.gif","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/poQWhl3fGJw","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://sc-static.net/scevent.min.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://cdn-images-1.medium.com/max/750/1*OorFiUWe9bdATkOj7n2DMQ.jpeg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://gist.github.com/CharlesLedger/b3913a3fbb9bf900e8b5c9b40c3cce7a.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://enterprise.ledger.com/app-0a40eed3454b3ff2785c.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/3Qurv3X4kw6yv8iOo4Oz3O","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMTc0ODc0NDU2Ni90LzI/dpuid/Mynx84Gol7nL6bLoTKd01bnb5PXNiPbJ/url/https%3A%2F%2Fdis.criteo.com%2Fdis%2Frtb%2Fcdb%2Fcookiematch.aspx%3F%26extid%3D%24!%7BTURN_UUID%7D","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://static.criteo.net/js/ld/ld.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Kt-ALNMzwLo","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/q8jednQQFx4","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://player.vimeo.com/video/736054763","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/fV4GPUtoG0I","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://widget-mediator.zopim.com/s/W/xdds/n02pBN20erYqi-XV/c/1621987315605","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://beacon.krxd.net/usermatch.gif","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/5le2e5Xxv0yDhELwOyBuz7","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://match.sharethrough.com/sync/v1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1616510100000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.hs-scripts.com/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://pixel.advertising.com/ups/55945/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660689300000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/destination","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed-podcast/episode/3WXqEdIdwz0evGlttmlv6x","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/200UQlrqPpaR2AxWigzaTl","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/ardg4kZmKs4","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/p1gEYrYMo7Y","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/2ls3lzkr2SyeQIVYX3xwFT","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://bat.bing.com/bat.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/2086145898357496","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://jadserve.postrelease.com/suid/1017","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-banner.com/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://x.bidswitch.net/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel.tapad.com/idsync/ex/receive","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://aa.agkn.com/adscores/g.pixel","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/1GncWhwAsGIyFdr3WTjw93","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cdn.shopify.com/s/files/1/2974/4858/t/202/assets/js_theme.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://ads.yahoo.com/cms/v1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/S2vh6XFRWbY","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cdn.shopify.com/s/trekkie.storefront.ebdc6f6e0c97d8f5d6a7dac9bc6ab298fff7cf1b.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/3OROHXmoS3voGnwnzwexyI","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/028C6aWjXKNuzYkEYNde3L","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/SV15K_H82_U","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cm.g.doubleclick.net/pixel","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/7EJoAQn3ZcTzrqNfyvYYyG","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/YOvIiO_wrWs","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/c0iEg42aAhk","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://static.zdassets.com/web_widget/latest/lazy/web_widget.c519c15861d20bda2997.chunk.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://idsync.rlcdn.com/397596.gif","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.80e35cdf321570eb5b34.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/32sBP8MZZNAgxUFfLqhgNn","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://drive.google.com/file/d/1n7r48dqSShgkXPuuOwQQDI-sjALrPosT/preview","CategoryId":["C0003","C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660676100000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/8F6xKar5cRM","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.googleoptimize.com/optimize.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://simage2.pubmatic.com/AdServer/Pug","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/65Y_ttWRzi4","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/1cLUxEBJHiOft0tBmTOT5D","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/961495034/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/AY5sg26_kko","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://tags.bluekai.com/site/29001/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.segment.com/analytics.js/v1/SzWhWicPLF3UwCW7T1RO668bzI6o3Tfx/analytics.min.js","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://apps.apple.com/app/id1361671700","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660678200000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://static.zdassets.com/web_widget/latest/chat-sdk.34475bc42f3df2dfabe9.chunk.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://ups.analytics.yahoo.com/ups/55945/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://track.hubspot.com/__ptq.gif","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://ad.360yield.com/ul_cb/match","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/-fazu1rgr9k","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660662600000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://sslwidget.criteo.com/event","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/GKEUB9bs-Tk","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7gb0Zv1u-ks","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/iCrjHJZdGP8","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://siteintercept.qualtrics.com/dxjsmodule/12.0dd1d9e7d155335870a6.chunk.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ad.sxp.smartclip.net/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://sync-t1.taboola.com/sg/criteortb-network/1/rtb-h/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ih.adscale.de/adscale-ih/tpui","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/RDF22YX4OG4","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1660661100000/6014057.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://an.yandex.ru/mapuid/criteois/k-6OuXWv4rdUMZU8ifmbL6DjdrRf9srN5_PR6Qzw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://c.bing.com/c.gif","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://open.spotify.com/embed/episode/1sKQ4ZGMqJYIZkQ2qcU6EK","CategoryId":["C0003"],"Vendor":null}]'),
        y = JSON.parse("true"),
        z = "addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" "),
        u = ["embed", "iframe", "img", "script"];
    (new MutationObserver(function(e) {
        Array.prototype.forEach.call(e,
            function(f) {
                Array.prototype.forEach.call(f.addedNodes, function(d) {
                    var t, l;
                    if (1 === d.nodeType && -1 !== u.indexOf(d.tagName.toLowerCase()) && !q(d) && !r(d))
                        if ("script" === d.tagName.toLowerCase()) {
                            if ((l = n(t = d.src || "")).length) {
                                var h = l.join("-"); - 1 === (v = d.getAttribute("class") ? d.getAttribute("class") : "").indexOf("optanon-category-" + h) && d.setAttribute("class", "optanon-category-" + h + " " + v);
                                m(l) || (d.type = "text/plain");
                                var p = function(A) {
                                    "text/plain" === d.getAttribute("type") && A.preventDefault();
                                    d.removeEventListener("beforescriptexecute",
                                        p)
                                };
                                d.addEventListener("beforescriptexecute", p)
                            }
                        } else if ((l = n(t = d.src || "")).length) {
                        var v;
                        h = l.join("-"); - 1 === (v = d.getAttribute("class") ? d.getAttribute("class") : "").indexOf("optanon-category-" + h) && d.setAttribute("class", "optanon-category-" + h + " " + v);
                        m(l) || (d.removeAttribute("src"), d.setAttribute("data-src", t))
                    }
                });
                var a = f.target;
                if (f.attributeName && (!q(a) || !r(a)))
                    if ("script" === a.nodeName.toLowerCase()) {
                        if ((b = n(c = a.src || "")).length) {
                            f = b.join("-"); - 1 === (k = a.getAttribute("class") ? a.getAttribute("class") :
                                "").indexOf("optanon-category-" + f) && a.setAttribute("class", "optanon-category-" + f + " " + k + " ");
                            m(b) || (a.type = "text/plain");
                            var g = function(d) {
                                "text/plain" === a.getAttribute("type") && d.preventDefault();
                                a.removeEventListener("beforescriptexecute", g)
                            };
                            a.addEventListener("beforescriptexecute", g)
                        }
                    } else if (-1 !== u.indexOf(f.target.nodeName.toLowerCase())) {
                    var c, b;
                    if ((b = n(c = a.src || "")).length) {
                        var k;
                        f = b.join("-"); - 1 === (k = a.getAttribute("class") ? a.getAttribute("class") : "").indexOf("optanon-category-" + f) && a.setAttribute("class",
                            "optanon-category-" + f + " " + k);
                        m(b) || (a.removeAttribute("src"), a.setAttribute("data-src", c))
                    }
                }
            })
    })).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["src"]
    });
    var x = document.createElement;
    document.createElement = function() {
        for (var e = [], f = 0; f < arguments.length; f++) e[f] = arguments[f];
        if ("script" !== e[0].toLowerCase() && -1 === u.indexOf(e[0].toLowerCase())) return x.bind(document).apply(void 0, e);
        var a = x.bind(document).apply(void 0, e),
            g = a.setAttribute.bind(a);
        return Object.defineProperties(a, {
            src: {
                get: function() {
                    return a.getAttribute("src") || ""
                },
                set: function(c) {
                    var b = "";
                    "string" == typeof c ? b = c : c instanceof Object && (b = c.toString());
                    b = n(b);
                    !b.length || "script" !== e[0].toLowerCase() || q(a) || m(b) || r(a) ? !b.length || -1 === u.indexOf(e[0].toLowerCase()) || q(a) || m(b) || r(a) ? g("src", c) : (a.removeAttribute("src"), g("data-src", c), a.getAttribute("class") || g("class", "optanon-category-" + b)) : (g("type", "text/plain"), g("src", c));
                    return !0
                }
            },
            type: {
                set: function(c) {
                    var b = n(a.src || "");
                    c = !b.length || q(a) || m(b) || r(a) ?
                        c : "text/plain";
                    return g("type", c), !0
                }
            },
            class: {
                set: function(c) {
                    var b = n(a.src);
                    !b.length || q(a) || m(b) || r(a) ? g("class", c) : (b = b.join("-"), g("class", "optanon-category-" + b + " " + c));
                    return !0
                }
            }
        }), a.setAttribute = function(c, b, k) {
            "type" !== c && "src" !== c || k ? g(c, b) : a[c] = b
        }, a
    }
}();