// Copyright 2012 Google Inc. All rights reserved.
(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');
(function() {

    var data = {
        "resource": {
            "version": "271",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user_country"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=[\"GBR\"],b=[\"CAN\"],c=\"USA ATG ARG BHS BRB BRA BOL VEN ECU PRY PER GUY CHL COL BLZ CRI CUB DMA DOM SLV GRD GTM HTI HND JAM MEX NIC PAN KNA LCA VCT TTO AIA ABW BMU BES CYM CUW GRL GLP MTQ MSR PRI BLM MAF SPM SXM TCA\".split(\" \"),d=\"ALB DZA AND AGO AUT BHR BLR BEL BEN BIH BWA BGR BFA BDI CMR CPV CAF TCD COM HRV CYP CZE COD DNK DJI EGY GNQ ERI EST ETH FRO FIN FRA GAB DEU GMB GEO GHA GIB GRC GGY GIN GNB HUN ISL IRN IRQ IRL IMN ISR ITA CIV JEY JOR KEN KWT LVA LBN LSO LBR LBY LIE LTU LUX MKD MDG MWI MLI MLT MRT MUS MDA MCO MNE MAR MOZ NAM NLD NER NGA NOR OMN PSE POL PRT QAT ROU RWA SMR STP SAU SEN SRB RUS SVK SVN SOM ZAF ESP SDN SWZ SWE CHE SYR TZA TGO TUN TUR UGA UKR ARE VAT ESH YEM ZMB ZWE\".split(\" \");\nreturn a.includes(", ["escape", ["macro", 3], 8, 16], ")?54310:b.includes(", ["escape", ["macro", 3], 8, 16], ")?64492:c.includes(", ["escape", ["macro", 3], 8, 16], ")?50353:d.includes(", ["escape", ["macro", 3], 8, 16], ")?51182:\"AUS\"==", ["escape", ["macro", 3], 8, 16], "?51200:\"\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.theme.current_object.id?window.theme.current_object.id:document.querySelector(\".add-to-cart__variant\").value})();"]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user_country"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "buyer_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.items.discount"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "site_language"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "mail_marketing"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 8]],
                    ["map", "index", "3", "group", ["macro", 9]]
                ],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 10]],
                    ["map", "index", "2", "dimension", ["macro", 11]],
                    ["map", "index", "4", "dimension", ["macro", 12]],
                    ["map", "index", "5", "dimension", ["macro", 8]],
                    ["map", "index", "6", "dimension", ["macro", 13]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-55894473-10",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.add.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.actionField.step"
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.currency"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(a){var f=a.get(\"sendHitTask\");a.set(\"sendHitTask\",function(c){f(c);(function(){if(c.get(\"exp\")){var a=function(b){return 1\u003Cb.indexOf(\"!\")?!0:!1},f=function(b,g){function a(b){try{var a=b.split(\"!\"),d;for(d=0;d\u003Ca.length;d++){var c=a[d].split(\".\")[0],g=a[d].split(\".\")[1];b={key:\"AB_Goo_Optimize_\"+c,value:g};e.push(b)}}catch(n){}}function c(b){try{var a=b.split(\".\")[0],c=b.split(\".\")[1];b={key:\"AB_Goo_Optimize_\"+a,value:c};e.push(b)}catch(m){}}var e=[];if(g)return a(b),e;\nc(b);return e},k=function(b){try{var a;for(a=0;a\u003Cb.length;a++)window._uxa=window._uxa||[],window._uxa.push([\"trackDynamicVariable\",b[a]])}catch(l){}};try{var h=f(c.get(\"exp\"),a(c.get(\"exp\")));h\u0026\u00260\u003Ch.length\u0026\u0026k(h)}catch(b){}}})()})}})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "_ga"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "customTask", "value", ["macro", 19]]],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "6", "dimension", ["macro", 20]]],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-55894473-2",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__k",
                "convert_null_to": "not_aff",
                "convert_undefined_to": "not_aff",
                "vtp_decodeCookie": false,
                "vtp_name": "ledger.affiliate_uuid"
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "ledger.affiliate_tracker"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_useEcommerceDataLayer": true,
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": true,
                "vtp_trackingId": "UA-55894473-2",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_ecommerceIsEnabled": true,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorMessage",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorLineNumber",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0.00",
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.currency"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return[1572838211626,1920551026730,0xd14bbcc802a]})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "transaction_id"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 2],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_defaultValue": "G-D5QKW7TM1W",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\.quest.ledger.com$", "value", "G-L6CCH6E7T2"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "hs-form-guid"
            }, {
                "function": "__c",
                "vtp_value": "5fefacb2-108d-4d83-8c43-7b198bce2a67"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currency"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.revenue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout_option.actionField.option"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "item_category"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 2],
                "vtp_map": ["list", ["map", "key", "shop.ledger.com", "value", "G-Y38HP2KGC3"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page_path"
            }, {
                "function": "__cvt_9346581_711",
                "vtp_option": "auto"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.currencyCode"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.items"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout_option.actionField.step"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.affiliation"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.tax"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.shipping"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.coupon"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optin_mail"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "method"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_difficulty"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "hours_left"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user_login"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_step"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_question_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_question_text"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "content_type"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "content_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "timer"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_success"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "nft_reward"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "user_score"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "time_completion"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "quiz_total_question"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 2],
                "vtp_map": ["list", ["map", "key", ".*\\.quest.ledger.com$", "value", "UA-55894473-10"]]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "anonymizeIp", "value", "true"],
                    ["map", "fieldName", "forceSSL", "value", "true"]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 8]],
                    ["map", "index", "3", "group", ["macro", 9]]
                ],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "4", "dimension", ["macro", 12]],
                    ["map", "index", "5", "dimension", ["macro", 8]],
                    ["map", "index", "16", "dimension", ["macro", 67]],
                    ["map", "index", "10", "dimension", ["macro", 62]],
                    ["map", "index", "11", "dimension", ["macro", 64]],
                    ["map", "index", "12", "dimension", ["macro", 69]],
                    ["map", "index", "13", "dimension", ["macro", 74]],
                    ["map", "index", "14", "dimension", ["macro", 71]],
                    ["map", "index", "15", "dimension", ["macro", 72]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 79],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "audio_url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "audio_title"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "audio_percent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "audio_duration"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 1],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_defaultValue": "G-D5QKW7TM1W",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*\\.academy$", "value", "G-DZJD8GG2SX"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_url"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_title"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_percent"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "video_duration"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "content_category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search_results"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 1],
                "vtp_map": ["list", ["map", "key", ".*\\.academy$", "value", "UA-55894473-10"]]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "anonymizeIp", "value", "true"],
                    ["map", "fieldName", "forceSSL", "value", "true"]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 8]],
                    ["map", "index", "4", "group", ["macro", 93]],
                    ["map", "index", "3", "group", ["macro", 9]]
                ],
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_dimension": ["list", ["map", "index", "4", "dimension", ["macro", 12]],
                    ["map", "index", "5", "dimension", ["macro", 8]],
                    ["map", "index", "15", "dimension", ["macro", 72]],
                    ["map", "index", "17", "dimension", ["macro", 93]],
                    ["map", "index", "18", "dimension", ["macro", 94]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 95],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "content_topic"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "content_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "location"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "search_term"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "filter_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "filter_category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "side_bar_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "side_bar_category"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "product_placement_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "item_id"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.theme.cart_json.items})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.products"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.getElementsByClassName(\"payment-method-summary__list\")[0];return a.innerText}catch(b){return\"\"}})();"]
            }, {
                "function": "__jsm",
                "convert_null_to": "\"\"",
                "vtp_javascript": ["template", "(function(){try{var a=document.getElementsByClassName(\"order-prices__label-text order-prices__label-text--item_discount\")[0];return a.innerText}catch(b){return\"\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.getElementsByClassName(\"shipping-method-summary__item\")[0];return a.innerText}catch(b){return\"\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.getElementsByClassName(\"postal-address__locality\")[1];return a.innerText}catch(b){return\"\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.getElementsByClassName(\"postal-address__country\")[1];return a.innerText}catch(b){return\"\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.getElementsByClassName(\"postal-address__locality\")[0];return a.innerText}catch(b){return\"\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{var a=document.getElementsByClassName(\"payment-method-summary__item\")[0];return a.innerText}catch(b){return\"\"}})();"]
            }, {
                "function": "__k",
                "vtp_decodeCookie": false,
                "vtp_name": "aw_source"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "DEFAULT",
                "vtp_name": "ecommerce.purchase.actionField.group"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return parseFloat(", ["escape", ["macro", 36], 8, 16], ")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 117], 8, 16], "+\":\"+parseFloat(", ["escape", ["macro", 118], 8, 16], ")})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "GBP",
                "vtp_name": "ecommerce.purchase.actionField.currency"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "0.00",
                "vtp_name": "shipping"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.actionField.tax"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.products"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var r=!1,l=[{value:10},{value:25},{value:50},{value:75}];return function(){var h=0,m=[],n={},k={},e=function(a){switch(a.type){case \"timeupdate\":var b=k[a.target.id],g=a.target.duration,c=Math.round(a.target.currentTime),d;g=Math.round(c\/g*100);c=0;for(d=b.length;c\u003Cd;c++)g\u003Eb[c].value\u0026\u0026!b[c].reached\u0026\u0026(b[c].reached=!0,window.dataLayer.push({event:\"video_progress\",video_percent:b[c].value,video_url:decodeURIComponent(a.target.currentSrc.split(\"?\")[0]),video_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-\n1]),video_duration:Math.round(a.target.duration)}));break;case \"play\":\"play\"!==m[a.target.id]\u0026\u0026window.dataLayer.push({event:\"video_start\",video_percent:0,video_url:decodeURIComponent(a.target.currentSrc.split(\"?\")[0]),video_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1]),video_duration:Math.round(a.target.duration)});m[a.target.id]=\"play\";break;case \"ended\":window.dataLayer.push({event:\"video_complete\",video_percent:100,video_url:decodeURIComponent(a.target.currentSrc.split(\"?\")[0]),\nvideo_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1]),video_duration:Math.round(a.target.duration)}),k[a.target.id]=JSON.parse(JSON.stringify(l))}},p=function(){var a=document.getElementsByTagName(\"video\"),b,g=a.length;for(b=0;b\u003Cg;b+=1){var c=a[b].id||a[b].currentSrc.split(\"\/\",-1).slice(-1)[0].split(\".\",1);a[b].id=c;if(!n[c]){n[c]=a[b];var d=a[b];window.addEventListener?(d.addEventListener(\"play\",e,!1),d.addEventListener(\"timeupdate\",e,!1),d.addEventListener(\"ended\",\ne,!1)):(d.attachEvent(\"play\",e),d.attachEvent(\"timeupdate\",e),d.attachEvent(\"ended\",e));k[c]=JSON.parse(JSON.stringify(l))}}r\u0026\u0026setTimeout(p,500)},f=function(){h||\"complete\"!==document.readyState||(h+=1,p())},q=function(){\"complete\"!==document.readyState||h||f()};if(document.readyState){if(\"complete\"===document.readyState)return f()}else setTimeout(f,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",f),window.addEventListener(\"load\",f),document.addEventListener(\"readystatechange\",\nq)):(window.attachEvent(\"onload\",f),document.attachEvent(\"onreadystatechange\",q));return\"JS - video_html5\"}})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){audioAfterDOM=!1;audioPercents=[{value:10},{value:25},{value:50},{value:75}];return function(){var h=0,l=[],m={},k={},e=function(a){switch(a.type){case \"timeupdate\":var b=k[a.target.id],g=a.target.duration,c=Math.round(a.target.currentTime),d;g=Math.round(c\/g*100);c=0;for(d=b.length;c\u003Cd;c++)g\u003Eb[c].value\u0026\u0026!b[c].reached\u0026\u0026(b[c].reached=!0,window.dataLayer.push({event:\"audio_progress\",audio_percent:b[c].value,audio_url:decodeURIComponent(a.target.currentSrc.split(\"?\")[0]),audio_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-\n1]),audio_duration:Math.round(a.target.duration)}));break;case \"play\":\"play\"!==l[a.target.id]\u0026\u0026window.dataLayer.push({event:\"audio_start\",audio_percent:0,audio_url:decodeURIComponent(a.target.currentSrc.split(\"?\")[0]),audio_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1]),audio_duration:Math.round(a.target.duration)});l[a.target.id]=\"play\";break;case \"ended\":window.dataLayer.push({event:\"audio_complete\",audio_percent:100,audio_url:decodeURIComponent(a.target.currentSrc.split(\"?\")[0]),\naudio_title:decodeURIComponent(a.target.currentSrc.split(\"\/\")[a.target.currentSrc.split(\"\/\").length-1]),audio_duration:Math.round(a.target.duration)}),k[a.target.id]=JSON.parse(JSON.stringify(audioPercents))}},n=function(){var a=document.getElementsByTagName(\"audio\"),b,g=a.length;for(b=0;b\u003Cg;b+=1){var c=a[b].id||a[b].currentSrc.split(\"\/\",-1).slice(-1)[0].split(\".\",1);a[b].id=c;if(!m[c]){m[c]=a[b];var d=a[b];window.addEventListener?(d.addEventListener(\"play\",e,!1),d.addEventListener(\"timeupdate\",e,\n!1),d.addEventListener(\"ended\",e,!1)):(d.attachEvent(\"play\",e),d.attachEvent(\"timeupdate\",e),d.attachEvent(\"ended\",e));k[c]=JSON.parse(JSON.stringify(audioPercents))}}audioAfterDOM\u0026\u0026setTimeout(n,500)},f=function(){h||\"complete\"!==document.readyState||(h+=1,n())},p=function(){\"complete\"!==document.readyState||h||f()};if(document.readyState){if(\"complete\"===document.readyState)return f()}else setTimeout(f,500);window.addEventListener?(window.addEventListener(\"DOMContentLoaded\",f),window.addEventListener(\"load\",\nf),document.addEventListener(\"readystatechange\",p)):(window.attachEvent(\"onload\",f),document.attachEvent(\"onreadystatechange\",p));return\"JS - audio_html5\"}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.detail.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "page_title"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.detail.products"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 130], 8, 16], ".length})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 122], 8, 16], ";return a.reduce(function(a,b){return a.concat(b.name)},[])})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 122], 8, 16], ";return a.reduce(function(a,b){return a.concat(b.price)},[])})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 122], 8, 16], ";return a.reduce(function(a,b){return a.concat(b.quantity)},[])})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){try{if(void 0!=document.getElementsByClassName(\"order-prices__value\")[6]){var a=document.getElementsByClassName(\"order-prices__value\")[6],b=a.innerText,c=b.replace(\/[^0-9.-]+\/g,\"\");return c}return 0}catch(d){return\"\"}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.products.price"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.purchase.customer.email:"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "total_price"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "item_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "app_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.item_list_name"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.item_list_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 1,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.click.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.impression"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.value"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.remove.products"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ecommerce.checkout.products"
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 2],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": false,
                "vtp_defaultValue": "G-3PSG4B4M9Z",
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*ledger.com$", "value", "G-Y38HP2KGC3"]]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "ranked_id"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventLabel"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "deviceType"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__hid"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__paused",
                "vtp_originalTagType": "twitter_website_tag",
                "tag_id": 6
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_c_navTimingApi": false,
                "vtp_tagId": "134633242",
                "vtp_c_storeConvTrackCookies": true,
                "vtp_uetqName": "uetq",
                "vtp_c_disableAutoPageView": false,
                "vtp_c_removeQueryFromUrls": false,
                "vtp_eventType": "PAGE_LOAD",
                "tag_id": 7
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": ["macro", 4],
                "vtp_tagType": "HOME_TAG",
                "vtp_siteType": ["macro", 5],
                "tag_id": 10
            }, {
                "function": "__crto",
                "once_per_event": true,
                "vtp_accountId": ["macro", 4],
                "vtp_productID": ["macro", 6],
                "vtp_tagType": "PRODUCT_TAG",
                "vtp_siteType": ["macro", 5],
                "tag_id": 11
            }, {
                "function": "__hjtc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_hotjar_site_id": "966505",
                "tag_id": 16
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "addToCart",
                "vtp_dimension": ["list", ["map", "index", "19", "dimension", ["macro", 15]]],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 30
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "checkout",
                "vtp_eventLabel": ["macro", 16],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 31
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "productImpression",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 32
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "currencyCode", "value", ["macro", 18]]],
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "Purchase",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 33
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 236, 0]],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "siteSpeedSampleRate", "value", "10"]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_contentGroup": ["list", ["map", "index", "3", "group", ["macro", 9]]],
                "vtp_gaSettings": ["macro", 21],
                "vtp_dimension": ["list", ["map", "index", "2", "dimension", ["macro", 22]],
                    ["map", "index", "3", "dimension", ["macro", 23]],
                    ["map", "index", "7", "dimension", ["macro", 12]],
                    ["map", "index", "6", "dimension", ["macro", 20]],
                    ["map", "index", "5", "dimension", ["macro", 9]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 34
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Click_Become_a_retailer",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 37
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Product_quantity",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 39
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Navigation bar",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Products click",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 49
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Navigation bar",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Nano S click",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 50
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Navigation bar",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Live click",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 51
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Navigation bar",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Crypto Assets click",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 52
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Navigation bar",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Vault click",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 53
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Navigation bar",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Blog click",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 54
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Navigation bar",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Support click",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 55
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Get Offer",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 61
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button_clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Pre-order",
                "vtp_eventLabel": "Pre-order_Banner",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 69
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button_clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Learn more",
                "vtp_eventLabel": "Learn-more_Banner",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 70
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button_clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Pre-order",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 72
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button_clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "View details",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 73
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button_clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Pre-order-sticky",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 75
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button_clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Pre-order",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 76
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Video_watch",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Play_video",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 77
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Video Report",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", "1", "metric", "1"]],
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": ["template", "video Starts - ", ["macro", 30]],
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 79
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Video Report",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": ["template", ["macro", 31], " - ", ["macro", 30]],
                "vtp_eventLabel": ["template", "looked ", ["macro", 32], "% - complete on ", ["macro", 1]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 80
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Javascript_error",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": ["template", ["macro", 33], " - ", ["macro", 34]],
                "vtp_eventLabel": ["macro", 35],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 81
            }, {
                "function": "__gclidw",
                "once_per_event": true,
                "vtp_enableCrossDomain": false,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "tag_id": 84
            }, {
                "function": "__paused",
                "vtp_originalTagType": "ua",
                "tag_id": 85
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_goalValue": ["macro", 36],
                "vtp_p_currency": ["macro", 37],
                "vtp_eventValue": ["macro", 36],
                "vtp_eventCategory": "Ecommerce",
                "vtp_uetqName": "134633245",
                "vtp_eventType": "CUSTOM",
                "vtp_eventLabel": "Purchase_Bing",
                "tag_id": 89
            }, {
                "function": "__sp",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableDynamicRemarketing": false,
                "vtp_conversionId": "961495034",
                "vtp_customParamsFormat": "NONE",
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 38],
                "vtp_enableRdpCheckbox": true,
                "vtp_enableConversionLinkingSettings": true,
                "tag_id": 90
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Product View",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 92
            }, {
                "function": "__awj",
                "once_per_event": true,
                "vtp_merchantId": "17181",
                "tag_id": 99
            }, {
                "function": "__crto",
                "once_per_event": true,
                "vtp_accountId": ["macro", 4],
                "vtp_tagType": "LISTING_TAG",
                "vtp_listingID": ["macro", 40],
                "vtp_siteType": ["macro", 5],
                "tag_id": 100
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 102
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 103
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Link click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": ["template", "Form submitted on ", ["macro", 1]],
                "vtp_eventLabel": ["template", "Click on ", ["macro", 25]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 104
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Engagement",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "opt-in",
                "vtp_eventLabel": "checkout step 1 optin",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 105
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "interaction",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "click",
                "vtp_eventLabel": "close_cart",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 107
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": ["macro", 4],
                "vtp_tagType": "HOME_TAG",
                "vtp_siteType": ["macro", 5],
                "tag_id": 127
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": ["macro", 4],
                "vtp_tagType": "HOME_TAG",
                "vtp_siteType": ["macro", 5],
                "tag_id": 128
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 269
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 278
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_9346581_283",
                "tag_id": 284
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_9346581_283",
                "tag_id": 285
            }, {
                "function": "__paused",
                "vtp_originalTagType": "cvt_9346581_283",
                "tag_id": 286
            }, {
                "function": "__paused",
                "vtp_originalTagType": "bzi",
                "tag_id": 290
            }, {
                "function": "__paused",
                "vtp_originalTagType": "bzi",
                "tag_id": 291
            }, {
                "function": "__awct",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_productReportingDataSource": "DATA_LAYER",
                "vtp_enableConversionLinker": true,
                "vtp_orderId": ["macro", 41],
                "vtp_enableProductReporting": true,
                "vtp_conversionValue": ["macro", 36],
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "961495034",
                "vtp_currencyCode": "EUR",
                "vtp_conversionLabel": "kHZlCPi24toBEPr_vMoD",
                "vtp_rdp": false,
                "vtp_url": ["macro", 38],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableCustomParams": false,
                "tag_id": 292
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendPageView": true,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "tag_id": 299
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 302
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Form",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 27],
                "vtp_eventAction": "Submit",
                "vtp_eventLabel": ["macro", 43],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 306
            }, {
                "function": "__paused",
                "vtp_originalTagType": "qpx",
                "tag_id": 308
            }, {
                "function": "__cvt_9346581_309",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_type": "PAGE_VIEW",
                "vtp_pixel_id": ["macro", 44],
                "vtp_page_url": ["macro", 38],
                "tag_id": 311
            }, {
                "function": "__cvt_9346581_312",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_id": "t2_bq5gt56v",
                "vtp_eventType": "PageVisit",
                "tag_id": 313
            }, {
                "function": "__cvt_9346581_312",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_currency": ["macro", 45],
                "vtp_id": "t2_bq5gt56v",
                "vtp_eventType": "Purchase",
                "vtp_transactionValue": ["macro", 46],
                "vtp_advancedMatching": false,
                "tag_id": 314
            }, {
                "function": "__cvt_9346581_309",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_transaction_id": ["macro", 41],
                "vtp_event_type": "PURCHASE",
                "vtp_pixel_id": "5fefacb2-108d-4d83-8c43-7b198bce2a67",
                "vtp_page_url": ["macro", 38],
                "tag_id": 316
            }, {
                "function": "__qpx",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_pixel_id": "74e388af06194de88e00046f744285c8",
                "vtp_pixel_event": "AddToCart",
                "tag_id": 318
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "productClick",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 350
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "productDetail",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 352
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "view_cart",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 354
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "removeFromCart",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 356
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "checkoutOption",
                "vtp_eventLabel": ["macro", 47],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 360
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 487
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 489
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 14],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 491
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "page_view",
                "vtp_eventParameters": ["list", ["map", "name", "site_language", "value", ["macro", 12]],
                    ["map", "name", "user_country", "value", ["macro", 8]],
                    ["map", "name", "item_category", "value", ["macro", 48]],
                    ["map", "name", "page_type", "value", ["macro", 9]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 495
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "page_view",
                "vtp_eventParameters": ["list", ["map", "name", "site_language", "value", ["macro", 12]],
                    ["map", "name", "user_country", "value", ["macro", 8]],
                    ["map", "name", "page_type", "value", ["macro", 9]],
                    ["map", "name", "page_path", "value", ["macro", 50]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 497
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "select_item",
                "vtp_eventParameters": ["list", ["map", "name", "items", "value", ["macro", 51]],
                    ["map", "name", "currency", "value", ["macro", 52]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 499
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "add_to_cart",
                "vtp_eventParameters": ["list", ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 502
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "view_item",
                "vtp_eventParameters": ["list", ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 504
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "view_item_list",
                "vtp_eventParameters": ["list", ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 506
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "view_cart",
                "vtp_eventParameters": ["list", ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "items", "value", ["macro", 53]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 509
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "remove_from_cart",
                "vtp_eventParameters": ["list", ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 511
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "begin_checkout",
                "vtp_eventParameters": ["list", ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 513
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "add_shipping_info",
                "vtp_eventParameters": ["list", ["map", "name", "mail_marketing", "value", ["macro", 13]],
                    ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "shipping_tier", "value", ["macro", 47]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 516
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "add_payment_info",
                "vtp_eventParameters": ["list", ["map", "name", "mail_marketing", "value", ["macro", 13]],
                    ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "checkout_step", "value", ["macro", 54]],
                    ["map", "name", "checkout_option", "value", ["macro", 47]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 517
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "purchase",
                "vtp_eventParameters": ["list", ["map", "name", "buyer_type", "value", ["macro", 10]],
                    ["map", "name", "mail_marketing", "value", ["macro", 13]],
                    ["map", "name", "currency", "value", ["macro", 52]],
                    ["map", "name", "transaction_id", "value", ["macro", 55]],
                    ["map", "name", "affiliation", "value", ["macro", 56]],
                    ["map", "name", "value", "value", ["macro", 46]],
                    ["map", "name", "tax", "value", ["macro", 57]],
                    ["map", "name", "shipping", "value", ["macro", 58]],
                    ["map", "name", "coupon", "value", ["macro", 59]],
                    ["map", "name", "items", "value", ["macro", 51]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 518
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "marketing_checkout",
                "vtp_eventParameters": ["list", ["map", "name", "mail_marketing", "value", ["macro", 13]],
                    ["map", "name", "optin_mail", "value", ["macro", 60]]
                ],
                "vtp_measurementId": ["macro", 49],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 537
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "login",
                "vtp_eventParameters": ["list", ["map", "name", "method", "value", ["macro", 61]]],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 566
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "quiz_began",
                "vtp_eventParameters": ["list", ["map", "name", "quiz_name", "value", ["macro", 62]],
                    ["map", "name", "quiz_id", "value", ["macro", 63]],
                    ["map", "name", "quiz_category", "value", ["macro", 64]],
                    ["map", "name", "quiz_difficulty", "value", ["macro", 65]],
                    ["map", "name", "hours_left", "value", ["macro", 66]],
                    ["map", "name", "user_login", "value", ["macro", 67]]
                ],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 567
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "quiz_progress",
                "vtp_eventParameters": ["list", ["map", "name", "quiz_name", "value", ["macro", 62]],
                    ["map", "name", "quiz_id", "value", ["macro", 63]],
                    ["map", "name", "quiz_category", "value", ["macro", 64]],
                    ["map", "name", "quiz_difficulty", "value", ["macro", 65]],
                    ["map", "name", "quiz_step", "value", ["macro", 68]],
                    ["map", "name", "quiz_question_id", "value", ["macro", 69]],
                    ["map", "name", "user_login", "value", ["macro", 67]],
                    ["map", "name", "quiz_question_text", "value", ["macro", 70]]
                ],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 568
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "companion_clicked",
                "vtp_eventParameters": ["list", ["map", "name", "quiz_name", "value", ["macro", 62]],
                    ["map", "name", "quiz_id", "value", ["macro", 63]],
                    ["map", "name", "quiz_category", "value", ["macro", 64]],
                    ["map", "name", "quiz_difficulty", "value", ["macro", 65]],
                    ["map", "name", "quiz_step", "value", ["macro", 68]],
                    ["map", "name", "quiz_question_id", "value", ["macro", 69]],
                    ["map", "name", "content_type", "value", ["macro", 71]],
                    ["map", "name", "content_name", "value", ["macro", 72]],
                    ["map", "name", "timer", "value", ["macro", 73]],
                    ["map", "name", "user_login", "value", ["macro", 67]],
                    ["map", "name", "quiz_question_text", "value", ["macro", 70]]
                ],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 569
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "quiz_stopped",
                "vtp_eventParameters": ["list", ["map", "name", "quiz_name", "value", ["macro", 62]],
                    ["map", "name", "quiz_id", "value", ["macro", 63]],
                    ["map", "name", "quiz_category", "value", ["macro", 64]],
                    ["map", "name", "quiz_difficulty", "value", ["macro", 65]],
                    ["map", "name", "quiz_step", "value", ["macro", 68]],
                    ["map", "name", "quiz_question_id", "value", ["macro", 69]],
                    ["map", "name", "user_login", "value", ["macro", 67]],
                    ["map", "name", "quiz_question_text", "value", ["macro", 70]]
                ],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 570
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "quiz_completed",
                "vtp_eventParameters": ["list", ["map", "name", "quiz_name", "value", ["macro", 62]],
                    ["map", "name", "quiz_id", "value", ["macro", 63]],
                    ["map", "name", "quiz_category", "value", ["macro", 64]],
                    ["map", "name", "quiz_difficulty", "value", ["macro", 65]],
                    ["map", "name", "quiz_success", "value", ["macro", 74]],
                    ["map", "name", "nft_reward", "value", ["macro", 75]],
                    ["map", "name", "user_score", "value", ["macro", 76]],
                    ["map", "name", "time_completion", "value", ["macro", 77]],
                    ["map", "name", "quiz_total_question", "value", ["macro", 78]],
                    ["map", "name", "user_login", "value", ["macro", 67]]
                ],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 571
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "nft_claimed",
                "vtp_eventParameters": ["list", ["map", "name", "quiz_name", "value", ["macro", 62]],
                    ["map", "name", "quiz_id", "value", ["macro", 63]],
                    ["map", "name", "quiz_category", "value", ["macro", 64]],
                    ["map", "name", "quiz_difficulty", "value", ["macro", 65]],
                    ["map", "name", "nft_reward", "value", ["macro", 75]],
                    ["map", "name", "user_login", "value", ["macro", 67]],
                    ["map", "name", "quiz_success", "value", ["macro", 74]],
                    ["map", "name", "user_score", "value", ["macro", 76]],
                    ["map", "name", "quiz_total_question", "value", ["macro", 78]],
                    ["map", "name", "time_completion", "value", ["macro", 77]]
                ],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 572
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "login",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "login",
                "vtp_eventLabel": ["macro", 61],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 574
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "quiz",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "quiz_began",
                "vtp_eventLabel": ["macro", 62],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 575
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "quiz",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "quiz_progress",
                "vtp_eventLabel": ["macro", 62],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 576
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "companion",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "companion_clicked",
                "vtp_eventLabel": ["macro", 72],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 578
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "quiz",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "quiz_stopped",
                "vtp_eventLabel": ["macro", 62],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 581
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "quiz",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "quiz_completed",
                "vtp_eventLabel": ["macro", 62],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 582
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "nft",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "nft_claimed",
                "vtp_eventLabel": ["macro", 75],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 583
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "checkoutOption",
                "vtp_eventLabel": ["macro", 47],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 590
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "productDetail",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 591
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "productClick",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 593
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "productImpression",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 594
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "removeFromCart",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 595
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "view_cart",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 596
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_overrideGaSettings": true,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_gaSettings": ["macro", 21],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 597
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 236, 0]],
                "once_per_load": true,
                "vtp_overrideGaSettings": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "siteSpeedSampleRate", "value", "10"]],
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_contentGroup": ["list", ["map", "index", "1", "group", ["macro", 8]],
                    ["map", "index", "2", "group", ["macro", 48]],
                    ["map", "index", "3", "group", ["macro", 9]]
                ],
                "vtp_gaSettings": ["macro", 14],
                "vtp_dimension": ["list", ["map", "index", "7", "dimension", ["macro", 22]],
                    ["map", "index", "8", "dimension", ["macro", 23]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 598
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Checkout Button",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 599
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button Clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Download__live",
                "vtp_eventLabel": "Page Live",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 600
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_useGA4SchemaForEcommerce": false,
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Add to Cart",
                "vtp_dimension": ["list", ["map", "index", "19", "dimension", ["macro", 15]]],
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 601
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Checkout",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 602
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_useEcommerceDataLayer": true,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "currencyCode", "value", ["macro", 18]]],
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Purchase",
                "vtp_enableEcommerce": true,
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_ecommerceIsEnabled": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 603
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Checkout Contact info",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 604
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Visit Payment Method",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 605
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Ecommerce",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "visit shipping info",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 606
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Link Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Close_Cart",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 607
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Download",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Download_whitepaper",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 608
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Engagement",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "opt-in",
                "vtp_eventLabel": "checkout step 1 optin",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 609
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Link Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": ["macro", 39],
                "vtp_eventLabel": ["template", ["macro", 25], " | ", ["macro", 26], " | ", ["macro", 24], " |", ["macro", 81]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 610
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Engagement",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Scroll",
                "vtp_eventLabel": ["template", ["macro", 82], " ", ["macro", 83]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 611
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Video Report",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", "1", "metric", "1"]],
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": ["template", "video Starts - ", ["macro", 30]],
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 612
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Video Report",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": ["template", ["macro", 31], " - ", ["macro", 30]],
                "vtp_eventLabel": ["template", "looked ", ["macro", 32], "% - complete on ", ["macro", 1]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 613
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Javascript_error",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": ["template", ["macro", 33], " - ", ["macro", 34]],
                "vtp_eventLabel": ["macro", 35],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 614
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "Button_clicks",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 21],
                "vtp_eventAction": "Learn more",
                "vtp_eventLabel": ["macro", 1],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 615
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "interaction",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 14],
                "vtp_eventAction": "click",
                "vtp_eventLabel": "register to newsletter",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 619
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 235, 0]],
                "once_per_event": true,
                "vtp_eventName": ["macro", 7],
                "vtp_eventParameters": ["list", ["map", "name", "audio_url", "value", ["macro", 84]],
                    ["map", "name", "audio_title", "value", ["macro", 85]],
                    ["map", "name", "audio_percent", "value", ["macro", 86]],
                    ["map", "name", "audio_duration", "value", ["macro", 87]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 673
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 235, 0]],
                "once_per_event": true,
                "vtp_eventName": ["macro", 7],
                "vtp_eventParameters": ["list", ["map", "name", "video_url", "value", ["macro", 89]],
                    ["map", "name", "video_title", "value", ["macro", 90]],
                    ["map", "name", "video_percent", "value", ["macro", 91]],
                    ["map", "name", "video_duration", "value", ["macro", 92]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 674
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": ["macro", 7],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": ["macro", 85],
                "vtp_eventLabel": ["template", ["macro", 86], "%"],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 675
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": ["macro", 7],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": ["macro", 90],
                "vtp_eventLabel": ["template", ["macro", 91], "%"],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 676
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "select_content",
                "vtp_eventParameters": ["list", ["map", "name", "content_category", "value", ["macro", 93]],
                    ["map", "name", "content_topic", "value", ["macro", 97]],
                    ["map", "name", "content_name", "value", ["macro", 72]],
                    ["map", "name", "content_id", "value", ["macro", 98]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 678
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "journey_begin",
                "vtp_eventParameters": ["list", ["map", "name", "location", "value", ["macro", 99]]],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 679
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "library_discover",
                "vtp_eventParameters": ["list", ["map", "name", "location", "value", ["macro", 99]]],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 680
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "search",
                "vtp_eventParameters": ["list", ["map", "name", "search_results", "value", ["macro", 94]],
                    ["map", "name", "search_term", "value", ["macro", 100]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 681
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "library_filter_activate",
                "vtp_eventParameters": ["list", ["map", "name", "filter_name", "value", ["macro", 101]],
                    ["map", "name", "filter_category", "value", ["macro", 102]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 682
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "library_filter_desactivate",
                "vtp_eventParameters": ["list", ["map", "name", "filter_name", "value", ["macro", 101]],
                    ["map", "name", "filter_category", "value", ["macro", 102]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 683
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "clear_all_filter",
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 684
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "sticky_side_bar",
                "vtp_eventParameters": ["list", ["map", "name", "side_bar_name", "value", ["macro", 103]],
                    ["map", "name", "side_bar_category", "value", ["macro", 104]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 685
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "select_suggested_content",
                "vtp_eventParameters": ["list", ["map", "name", "content_category", "value", ["macro", 93]],
                    ["map", "name", "content_topic", "value", ["macro", 97]],
                    ["map", "name", "content_name", "value", ["macro", 72]],
                    ["map", "name", "content_id", "value", ["macro", 98]],
                    ["map", "name", "location", "value", ["macro", 99]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 686
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_eventName": "select_product_placement",
                "vtp_eventParameters": ["list", ["map", "name", "product_placement_name", "value", ["macro", 105]],
                    ["map", "name", "location", "value", ["macro", 99]]
                ],
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 687
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "content",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "select_content",
                "vtp_eventLabel": ["macro", 72],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 688
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "classroom",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "journey_begin",
                "vtp_eventLabel": ["macro", 99],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 689
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "library",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "library_discover",
                "vtp_eventLabel": ["macro", 99],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 690
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "library",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "search",
                "vtp_eventLabel": ["macro", 100],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 691
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "library",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "library_filter_activate",
                "vtp_eventLabel": ["macro", 101],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 692
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "library",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "library_filter_desactivate",
                "vtp_eventLabel": ["macro", 101],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 693
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "library",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "clear_all_filter",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 694
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "engagement",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "sticky_side_bar",
                "vtp_eventLabel": ["macro", 103],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 695
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "content",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "select_suggested_content",
                "vtp_eventLabel": ["macro", 72],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 696
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "engagement",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 96],
                "vtp_eventAction": "select_product_placement",
                "vtp_eventLabel": ["macro", 105],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 697
            }, {
                "function": "__cvt_9346581_715",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_pixel_id": "nzkax",
                "tag_id": 716
            }, {
                "function": "__cvt_9346581_717",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_id": "tw-nzkax-obtft",
                "vtp_conversion_id": ["macro", 41],
                "vtp_currency": ["macro", 45],
                "vtp_value": ["macro", 46],
                "tag_id": 718
            }, {
                "function": "__cvt_9346581_717",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_event_id": "tw-nzkax-obtfp",
                "tag_id": 719
            }, {
                "function": "__cvt_9346581_312",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_enableFirstPartyCookies": true,
                "vtp_currency": ["macro", 45],
                "vtp_id": "t2_bq5gt56v",
                "vtp_eventType": "AddToCart",
                "vtp_transactionValue": ["macro", 46],
                "vtp_advancedMatching": false,
                "tag_id": 720
            }, {
                "function": "__cvt_9346581_726",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_pixelId": "6887",
                "vtp_accountType": "tam",
                "vtp_pixelType": "base",
                "vtp_disableFirstPartyCookie": false,
                "tag_id": 727
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_sendEcommerceData": false,
                "vtp_eventName": "select_content",
                "vtp_eventParameters": ["list", ["map", "name", "content_type", "value", ["macro", 71]],
                    ["map", "name", "content_name", "value", ["macro", 72]],
                    ["map", "name", "item_id", "value", ["macro", 106]],
                    ["map", "name", "user_login", "value", ["macro", 67]]
                ],
                "vtp_measurementId": ["macro", 42],
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "tag_id": 729
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "content",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 80],
                "vtp_eventAction": "select_content_nft_platform",
                "vtp_eventLabel": ["macro", 71],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 730
            }, {
                "function": "__crto",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_accountId": "50353",
                "vtp_tagType": "HOME_TAG",
                "vtp_siteType": "m",
                "tag_id": 733
            }, {
                "function": "__cl",
                "tag_id": 739
            }, {
                "function": "__cl",
                "tag_id": 740
            }, {
                "function": "__cl",
                "tag_id": 741
            }, {
                "function": "__cl",
                "tag_id": 742
            }, {
                "function": "__cl",
                "tag_id": 743
            }, {
                "function": "__cl",
                "tag_id": 744
            }, {
                "function": "__cl",
                "tag_id": 745
            }, {
                "function": "__cl",
                "tag_id": 746
            }, {
                "function": "__cl",
                "tag_id": 747
            }, {
                "function": "__cl",
                "tag_id": 748
            }, {
                "function": "__cl",
                "tag_id": 749
            }, {
                "function": "__cl",
                "tag_id": 750
            }, {
                "function": "__cl",
                "tag_id": 751
            }, {
                "function": "__cl",
                "tag_id": 752
            }, {
                "function": "__cl",
                "tag_id": 753
            }, {
                "function": "__cl",
                "tag_id": 754
            }, {
                "function": "__cl",
                "tag_id": 755
            }, {
                "function": "__cl",
                "tag_id": 756
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "10,25,50,75,90",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "9346581_135",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 757
            }, {
                "function": "__cl",
                "tag_id": 758
            }, {
                "function": "__cl",
                "tag_id": 759
            }, {
                "function": "__cl",
                "tag_id": 760
            }, {
                "function": "__cl",
                "tag_id": 761
            }, {
                "function": "__cl",
                "tag_id": 762
            }, {
                "function": "__cl",
                "tag_id": 763
            }, {
                "function": "__cl",
                "tag_id": 764
            }, {
                "function": "__cl",
                "tag_id": 765
            }, {
                "function": "__cl",
                "tag_id": 766
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "0,25,50,75,100",
                "vtp_captureComplete": true,
                "vtp_captureStart": false,
                "vtp_fixMissingApi": true,
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": true,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "9346581_148",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 767
            }, {
                "function": "__ytl",
                "vtp_captureComplete": false,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_capturePause": false,
                "vtp_captureProgress": false,
                "vtp_uniqueTriggerId": "9346581_152",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 768
            }, {
                "function": "__jel",
                "tag_id": 769
            }, {
                "function": "__cl",
                "tag_id": 770
            }, {
                "function": "__cl",
                "tag_id": 771
            }, {
                "function": "__cl",
                "tag_id": 772
            }, {
                "function": "__cl",
                "tag_id": 773
            }, {
                "function": "__cl",
                "tag_id": 774
            }, {
                "function": "__hl",
                "tag_id": 775
            }, {
                "function": "__cl",
                "tag_id": 776
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "7000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "9346581_270",
                "tag_id": 777
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "50",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "9346581_271",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 778
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "10000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "9346581_322",
                "tag_id": 779
            }, {
                "function": "__cl",
                "tag_id": 780
            }, {
                "function": "__cl",
                "tag_id": 781
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:", ["escape", ["macro", 4], 8, 16], "},{event:\"setSiteType\",type:", ["escape", ["macro", 5], 8, 16], "},{event:\"viewBasket\",currency:\"EUR\",item:", ["escape", ["macro", 107], 8, 16], "});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 9
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:", ["escape", ["macro", 4], 8, 16], "},{event:\"setSiteType\",type:", ["escape", ["macro", 5], 8, 16], "},{event:\"trackTransaction\",currency:\"EUR\",id:", ["escape", ["macro", 41], 8, 16], ",item:", ["escape", ["macro", 108], 8, 16], "});\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 12
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({\"payment-method\":\"", ["escape", ["macro", 109], 7], "\"});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 86
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(a){a+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var b=d[c];\" \"==b.charAt(0);)b=b.substring(1);if(0==b.indexOf(a))return b.substring(a.length,b.length)}return\"\"}var cookieValue=getCookie(\"aw_source\"),otherCookie=\"ledger.affiliate_uuid\";\"awin\"==cookieValue\u0026\u0026(document.cookie=\"ledger.affiliate_uuid\\x3d; expires \\x3d Thu, 01 Jan 1970 00:00:00 GMT\");\nvar iCookieLength=30,sCookieName=\"aw_source\",sSourceParameterName=\"utm_source\",_getQueryStringValue=function(a){for(var d=document.location.search.substring(1).split(\"\\x26\"),c=0;c\u003Cd.length;c++){var b=d[c].split(\"\\x3d\");if(a.toLowerCase()==b[0].toLowerCase())return b[1].replace(\/_\/g,\"\")}},_getDomain=function(){var a=document.domain;return 3\u003Ea.split(\".\").length?\".\"+a:4\u003Ea.split(\".\").length?\".\"+a.split(\".\").slice(-2).join(\".\"):a},_setCookie=function(a,d,c){var b=new Date;b.setTime(b.getTime()+864E5*c);\ndocument.cookie=a+\"\\x3d\"+d+\"; expires\\x3d\"+b.toGMTString()+\"; path\\x3d\/;domain\\x3d\"+this._getDomain()};_getQueryStringValue(sSourceParameterName)\u0026\u0026_setCookie(sCookieName,_getQueryStringValue(sSourceParameterName),iCookieLength);0\u003Edocument.cookie.indexOf(\"aw_source\\x3d\")\u0026\u0026_setCookie(sCookieName,\"direct\",iCookieLength);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 96
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({AwinInfo:[{voucherCode:\"", ["escape", ["macro", 110], 7], "\",\"shipping-method-summary__item\":\"", ["escape", ["macro", 111], 7], "\",billing_town:\"", ["escape", ["macro", 112], 7], "\",billing_country:\"", ["escape", ["macro", 113], 7], "\",delivery_town:\"", ["escape", ["macro", 114], 7], "\",payment_type:\"", ["escape", ["macro", 115], 7], "\"}]});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 97
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\n  \n\u003Cscript type=\"text\/gtmscript\"\u003Evar sProtocol=\"http:\"==location.protocol?\"http\":\"https\",awPixel=new Image(0,0);awPixel.src=sProtocol+\":\/\/www.awin1.com\/sread.img?tt\\x3dns\\x26tv\\x3d2\\x26merchant\\x3d17181\\x26amount\\x3d", ["escape", ["macro", 36], 7], "\\x26ch\\x3d", ["escape", ["macro", 116], 7], "\\x26parts\\x3d", ["escape", ["macro", 119], 7], "\\x26ref\\x3d", ["escape", ["macro", 120], 7], "\\x26vc\\x3d", ["escape", ["macro", 110], 7], "\\x26cr\\x3d", ["escape", ["macro", 121], 7], "\";\u003C\/script\u003E\n\n  \n\u003Cscript type=\"text\/gtmscript\"\u003Evar AWIN={Tracking:{}};AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=\"", ["escape", ["macro", 36], 7], "\";AWIN.Tracking.Sale.currency=\"", ["escape", ["macro", 121], 7], "\";AWIN.Tracking.Sale.orderRef=\"", ["escape", ["macro", 120], 7], "\";AWIN.Tracking.Sale.parts=\"", ["escape", ["macro", 119], 7], "\";AWIN.Tracking.Sale.voucher=\"", ["escape", ["macro", 110], 7], "\";AWIN.Tracking.Sale.test=\"0\";AWIN.Tracking.Sale.channel=\"", ["escape", ["macro", 116], 7], "\";var transactionProducts=\"", ["escape", ["macro", 122], 7], "\";AWIN.Tracking.Sale.plt=\"\";\nfor(i=0;i\u003CtransactionProducts.length;i++)AWIN.Tracking.Sale.plt+=\"AW:P|17181|", ["escape", ["macro", 120], 7], "|\"+transactionProducts[i].id+\"|\"+transactionProducts[i].name+\"|\"+transactionProducts[i].price+\"|\"+transactionProducts[i].quantity+\"|\"+transactionProducts[i].id+\"|", ["escape", ["macro", 117], 7], "|\";var basketForm=document.createElement(\"form\");basketForm.setAttribute(\"style\",\"display:none;\");basketForm.setAttribute(\"name\",\"basket_form\");var basketTextArea=document.createElement(\"textarea\");\nbasketTextArea.setAttribute(\"wrap\",\"physical\");basketTextArea.setAttribute(\"id\",\"aw_basket\");basketTextArea.value=AWIN.Tracking.Sale.plt;basketForm.appendChild(basketTextArea);document.getElementsByTagName(\"body\")[0].appendChild(basketForm);\u003C\/script\u003E\n\n \u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/17181.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 98
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window._uxa=window._uxa||[];window._uxa.push([\"afterPageView\",function(f){if(1==f.pageNumber){f=document.referrer;\"\"==f\u0026\u0026(f=\"Direct\");window._uxa.push([\"trackDynamicVariable\",{key:\"Referrer\",value:f}]);if(\"\"!=document.location.search){var c=\"utm_medium\";var d=\"utm_campaign\";var e=\"utm_source\";var b=\"\\x3d([a-zA-Z0-9-_]+)\";c=new RegExp(c+b);c=c.exec(document.location.search);d=new RegExp(d+b);d=d.exec(document.location.search);e=new RegExp(e+b);e=e.exec(document.location.search);b=RegExp(\"gclid\\x3d([a-zA-Z0-9-_]+)\");\nb=b.exec(document.location.search);var g=RegExp(\"fbclid\\x3d([a-zA-Z0-9-_]+)\");g=g.exec(document.location.search);var h=RegExp(\"dclid\\x3d([a-zA-Z0-9-_]+)\");h=h.exec(document.location.search)}try{null!==c\u0026\u0026\"undefined\"!==typeof c?\"undefined\"!==typeof c[1]\u0026\u0026window._uxa.push([\"trackDynamicVariable\",{key:\"Medium\",value:c[1].toLowerCase()}]):window._uxa.push([\"trackDynamicVariable\",{key:\"Medium\",value:\"false\"}]),null!==d\u0026\u0026\"undefined\"!==typeof d?\"undefined\"!==typeof d[1]\u0026\u0026window._uxa.push([\"trackDynamicVariable\",\n{key:\"Campaign\",value:d[1].toLowerCase()}]):window._uxa.push([\"trackDynamicVariable\",{key:\"Campaign\",value:\"false\"}]),null!==e\u0026\u0026\"undefined\"!==typeof e?\"undefined\"!==typeof e[1]\u0026\u0026window._uxa.push([\"trackDynamicVariable\",{key:\"Source\",value:e[1].toLowerCase()}]):window._uxa.push([\"trackDynamicVariable\",{key:\"Source\",value:\"false\"}]),null!==b\u0026\u0026\"undefined\"!==typeof b?\"undefined\"!==typeof b[1]\u0026\u0026window._uxa.push([\"trackDynamicVariable\",{key:\"Gclid\",value:\"true\"}]):window._uxa.push([\"trackDynamicVariable\",\n{key:\"Gclid\",value:\"false\"}]),null!==g\u0026\u0026\"undefined\"!==typeof g?\"undefined\"!==typeof g[1]\u0026\u0026window._uxa.push([\"trackDynamicVariable\",{key:\"Fbclid\",value:\"true\"}]):window._uxa.push([\"trackDynamicVariable\",{key:\"Fbclid\",value:\"false\"}]),null!==h\u0026\u0026\"undefined\"!==typeof h?\"undefined\"!==typeof h[1]\u0026\u0026window._uxa.push([\"trackDynamicVariable\",{key:\"Dclid\",value:\"true\"}]):window._uxa.push([\"trackDynamicVariable\",{key:\"Dclid\",value:\"false\"}])}catch(l){}}}]);try{if(\"undefined\"!==typeof dataLayer)for(var a=0;a\u003C\ndataLayer.length;a++)for(var k=0;k\u003CdataLayer[a].length;k++)window._uxa.push([\"setCustomVariable\",1,\"ecomm_pagetype\",dataLayer[a][k].ecomm_pagetype,3]),window._uxa.push([\"setCustomVariable\",2,\"site_language\",dataLayer[a][k].site_language,3])}catch(f){}\"undefined\"===typeof CS_CONF?(window._uxa.push([\"setPath\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]),a=document.createElement(\"script\"),a.type=\"text\/javascript\",a.async=!0,a.src=\"\/\/t.contentsquare.net\/uxa\/632f3a9f096b5.js\",document.getElementsByTagName(\"head\")[0].appendChild(a)):\nwindow._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")])})();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 106
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"ecommerce:addTransaction\",{id:\"", ["escape", ["macro", 41], 7], "\",revenue:\"", ["escape", ["macro", 36], 7], "\",shipping:\"", ["escape", ["macro", 123], 7], "\",tax:\"", ["escape", ["macro", 124], 7], "}\"}]);window._uxa.push([\"ecommerce:send\"]);\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 109
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")+\"?cs-add-to-cart\"]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 110
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 111
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._uxa=window._uxa||[];window._uxa.push([\"trackPageview\",window.location.pathname+window.location.hash.replace(\"#\",\"?__\")]);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 112
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2086145898357496\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=2086145898357496\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 114
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/staticw2.yotpo.com\/VjYC1hjLHPTTjBOJGQajJPG9ZjLqy7OBx6uqubzH\/widget.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003EyotpoTrackConversionData={orderId:\"", ["escape", ["macro", 41], 7], "\",orderAmount:\"", ["escape", ["macro", 36], 7], "\",orderCurrency:\"", ["escape", ["macro", 18], 7], "\"};\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/api.yotpo.com\/conversion_tracking.gif?app_key=VjYC1hjLHPTTjBOJGQajJPG9ZjLqy7OBx6uqubzH\u0026amp;order_id=######ORDER_ID######\u0026amp;order_amount=######ORDER_AMOUNT#####\u0026amp;order_currency=######CURRENCY######\" width=\"1\" height=\"1\"\u003E\u003C\/noscript\u003E\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 126
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:[51182,54310,50353,51200,64492]},{event:\"setSiteType\",type:deviceType},{event:\"viewHome\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 129
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\" id=\"hs-script-loader\" async defer data-gtmsrc=\"\/\/js.hs-scripts.com\/6014057.js\"\u003E\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 132
            }, {
                "function": "__html",
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar onWindow=function(b,a){\"undefined\"!==typeof window.addEventListener?window.addEventListener(b,a,!1):window.attachEvent(\"on\"+b,function(){a.call(window)})},onWindowLeave=function(b){onWindow(\"mouseout\",function(a){a=a?a:window.event;(a=a.relatedTarget||a.toElement)\u0026\u0026\"HTML\"!==a.nodeName||\"function\"===typeof b\u0026\u0026b()})};onWindowLeave(function(){dataLayer.push({event:\"exit_intent\"})});\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 273
            }, {
                "function": "__html",
                "metadata": ["map"],
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"237213137153741\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"237213137153741\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=237213137153741\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 275
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript id=\"ze-snippet\" data-gtmsrc=\"https:\/\/static.zdassets.com\/ekr\/snippet.js?key=b46f83a6-2862-423c-8290-53e0541d43d6\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 288
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,d,g,a,e,f){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"237213137153741\");var product_ids=getProductIds(", ["escape", ["macro", 125], 8, 16], ");\nfunction getProductIds(b){var c=[];b.forEach(function(d){c.push(d.id)});return c}fbq(\"track\",\"Purchase\",{value:", ["escape", ["macro", 36], 8, 16], ",currency:", ["escape", ["macro", 37], 8, 16], ",content_type:\"product\",content_ids:product_ids});\u003C\/script\u003E\n \n\n"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 296
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"message\",function(a){\"hsFormCallback\"===a.data.type\u0026\u0026\"onFormSubmitted\"===a.data.eventName\u0026\u0026window.dataLayer.push({event:\"hubspot-form-success\",\"hs-form-guid\":a.data.id})});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 303
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.analytics=window.analytics||[];if(!a.initialize)if(a.invoked)window.console\u0026\u0026console.error\u0026\u0026console.error(\"Segment snippet included twice.\");else{a.invoked=!0;a.methods=\"trackSubmit trackClick trackLink trackForm pageview identify reset group track ready alias debug page once off on addSourceMiddleware addIntegrationMiddleware setAnonymousId addDestinationMiddleware\".split(\" \");a.factory=function(b){return function(){var c=Array.prototype.slice.call(arguments);c.unshift(b);\na.push(c);return a}};for(var e=0;e\u003Ca.methods.length;e++){var f=a.methods[e];a[f]=a.factory(f)}a.load=function(b,c){var d=document.createElement(\"script\");d.type=\"text\/javascript\";d.async=!0;d.src=\"https:\/\/cdn.segment.com\/analytics.js\/v1\/\"+b+\"\/analytics.min.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(d,b);a._loadOptions=c};a._writeKey=\"SzWhWicPLF3UwCW7T1RO668bzI6o3Tfx\";a.SNIPPET_VERSION=\"4.13.2\";a.load(\"SzWhWicPLF3UwCW7T1RO668bzI6o3Tfx\");a.page()}}();\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 307
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,k,b){a[b]=a[b]||[];a[b].push({projectId:\"10000\",properties:{pixelId:\"10159916\",userEmail:\"\\x3cemail_address\\x3e\"}});var d=c.createElement(e);d.src=k;d.async=!0;d.onload=d.onreadystatechange=function(){var f=this.readyState,l=a[b];if(!f||\"complete\"==f||\"loaded\"==f)try{var g=YAHOO.ywa.I13N.fireBeacon;a[b]=[];a[b].push=function(h){g([h])};g(l)}catch(h){}};c=c.getElementsByTagName(e)[0];e=c.parentNode;e.insertBefore(d,c)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 321
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,k,b){a[b]=a[b]||[];a[b].push({projectId:\"10000\",properties:{pixelId:\"10159917\",userEmail:\"\\x3cemail_address\\x3e\"}});var d=c.createElement(e);d.src=k;d.async=!0;d.onload=d.onreadystatechange=function(){var f=this.readyState,l=a[b];if(!f||\"complete\"==f||\"loaded\"==f)try{var g=YAHOO.ywa.I13N.fireBeacon;a[b]=[];a[b].push=function(h){g([h])};g(l)}catch(h){}};c=c.getElementsByTagName(e)[0];e=c.parentNode;e.insertBefore(d,c)})(window,document,\"script\",\"https:\/\/s.yimg.com\/wi\/ytc.js\",\"dotq\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 323
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10159916\",qstrings:{et:\"custom\",ec:\"AddToCart\"}}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 324
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10159916\",qstrings:{et:\"custom\",ec:\"Checkout\"}}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 325
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dotq=window.dotq||[];window.dotq.push({projectId:\"10000\",properties:{pixelId:\"10159916\",qstrings:{et:\"custom\",ec:\"CompleteOrder\"}}});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 326
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c,d,g,a,e,f){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"237213137153741\");var product_ids=getProductIds(theme.cart._object.items);\nfunction getProductIds(b){var c=[];b.forEach(function(d){c.push(d.id)});return c}fbq(\"track\",\"AddToCart\",{content_name:\"\",content_category:\"\",num_items:\"\",value:\"\",currency:\"\",content_ids:product_ids,content_type:\"product\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 526
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"https:\/\/utt.impactcdn.com\/A3238801-f82b-4109-932d-bf396d31cc2d1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:\"\",customerEmail:\"\"});\u003C\/script\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 528
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar products=getProductIds(flow.checkout.getOrder().order.items);function getProductIds(b){return b.map(function(a){return{subTotal:a.local.prices[0].base.amount*a.quantity,category:\"Ledger\",sku:a.name,quantity:a.quantity,name:a.name}})}ire(\"trackConversion\",29217,{orderId:flow.checkout.getOrder().order.number,currencyCode:Flow.session.getCurrency(),items:products},{verifySiteDefinitionMatch:!0});\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 529
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cmeta name=\"apple-itunes-app\" content=\"app-id=1361671700\"\u003E\n \n\u003Cp\u003EThis is my website\u003C\/p\u003E\n \n\u003Cimg src=\"https:\/\/app.adjust.com\/pgkj8xv?deeplink=ledgerlive%3A%2F%2Fportfolio\" height=\"1\" width=\"1\" border=\"0\"\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 633
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E", ["escape", ["macro", 126], 8, 16], "();", ["escape", ["macro", 127], 8, 16], "();\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 677
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cscript data-gtmsrc=\"https:\/\/js.adsrvr.org\/up_loader.1.1.0.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n        \u003Cscript type=\"text\/gtmscript\"\u003Ettd_dom_ready(function(){if(\"function\"===typeof TTDUniversalPixelApi){var a=new TTDUniversalPixelApi;a.init(\"ybd3fwz\",[\"x70jfyp\"],\"https:\/\/insight.adsrvr.org\/track\/up\",{td1:", ["escape", ["macro", 41], 8, 16], ",td2:", ["escape", ["macro", 128], 8, 16], ",v:", ["escape", ["macro", 46], 8, 16], "})}});\u003C\/script\u003E"],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 722
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": ["template", "\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=ybd3fwz\u0026amp;ct=0:473lpds\u0026amp;fmt=3\u0026amp;td1=", ["escape", ["macro", 41], 12], "\u0026amp;td2=", ["escape", ["macro", 128], 12], "\u0026amp;td3=Product ID\u0026amp;v=", ["escape", ["macro", 46], 12], "\"\u003E\n\n  "],
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 723
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.teads_e.push({conversionType:\"AddToCart\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 724
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.teads_e.push({conversionType:\"Purchase\"});\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 728
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\n\u003Cscript type=\"text\/gtmscript\"\u003Etype=\"text\/javascript\";src=\"\/\/dynamic.criteo.com\/js\/ld\/ld.js?a\\x3d50353\";async=\"true\";\u003C\/script\u003E\n\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 731
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){var e=\"59051\";if(a.zemApi)b=function(d){return\"[object Array]\"===Object.prototype.toString.call(d)?d:[d]},a.zemApi.marketerId=b(a.zemApi.marketerId).concat(b(e));else{var c=a.zemApi=function(){c.dispatch?c.dispatch.apply(c,arguments):c.queue.push(arguments)};c.version=\"1.0\";c.loaded=!0;c.marketerId=e;c.queue=[];a=b.createElement(\"script\");a.async=!0;a.src=\"\/\/js-tag.zemanta.com\/zcpt.js\";a.type=\"text\/javascript\";b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,\ndocument);zemApi(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 736
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\t\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods=\"page track identify instances debug on off once ready alias group enableCookie disableCookie\".split(\" \");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f=\"https:\/\/analytics.tiktok.com\/i18n\/pixel\/events.js\";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=f+\"?sdkid\\x3d\"+b+\"\\x26lib\\x3d\"+e;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"CCM80A3C77U9QMO0Q980\");a.page()}(window,document,\"ttq\");\u003C\/script\u003E\n\t",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 738
            }, {
                "function": "__gaawc",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_fieldsToSet": ["list", ["map", "name", "site_language", "value", ["macro", 12]],
                    ["map", "name", "page_title", "value", ["macro", 129]],
                    ["map", "name", "page_type", "value", ["macro", 9]]
                ],
                "vtp_userProperties": ["list", ["map", "name", "user_country", "value", ["macro", 8]]],
                "vtp_sendPageView": false,
                "vtp_enableSendToServerContainer": false,
                "vtp_measurementId": ["macro", 88],
                "vtp_enableUserProperties": true,
                "vtp_enableEuid": false,
                "tag_id": 701
            }, {
                "function": "__paused",
                "vtp_originalTagType": "opt",
                "tag_id": 35
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 1],
                "arg1": "\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "www.ledger.com"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(\\\/products\\\/)|(\\\/pages\\\/ledger-nano)"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "EEaddToCart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "EEaddToCart"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "EEcheckout"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "EEcheckout"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "impressionAdded"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "impressionAdded"
            }, {
                "function": "_cn",
                "arg0": ["macro", 7],
                "arg1": "EEtransaction"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "\/confirmation"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "EEtransaction"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "retailers-distributor__btn"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "add-to-cart__box"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Products"
            }, {
                "function": "_cn",
                "arg0": ["macro", 26],
                "arg1": "https:\/\/www.ledger.com\/collections\/all-products"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Nano S"
            }, {
                "function": "_cn",
                "arg0": ["macro", 26],
                "arg1": "https:\/\/www.ledger.com\/products\/ledger-nano-s"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Live"
            }, {
                "function": "_cn",
                "arg0": ["macro", 26],
                "arg1": "https:\/\/www.ledger.com\/pages\/ledger-live"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Crypto assets"
            }, {
                "function": "_cn",
                "arg0": ["macro", 26],
                "arg1": "https:\/\/www.ledger.com\/pages\/supported-crypto-assets"
            }, {
                "function": "_cn",
                "arg0": ["macro", 26],
                "arg1": "enterprise.ledger.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Blog"
            }, {
                "function": "_cn",
                "arg0": ["macro", 26],
                "arg1": "https:\/\/www.ledger.fr\/category\/blog-posts\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Support"
            }, {
                "function": "_cn",
                "arg0": ["macro", 26],
                "arg1": "https:\/\/support.ledgerwallet.com\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Get offer"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "ledger-banner__cta"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Pre-order"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "ledger-banner__cta--alternate"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Learn more"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "tile__button--atc"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/collections\/all-products"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "tile__button tile__button--detail"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "View details"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "subbar__submit"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "ledger-cta--primary"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "ledger-cta--alternate"
            }, {
                "function": "_cn",
                "arg0": ["macro", 28],
                "arg1": "https:\/\/youtu.be\/VR4p7pkh2TY"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 29],
                "arg1": "(^$|((^|,)9346581_152($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 29],
                "arg1": "(^$|((^|,)9346581_148($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.pageError"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/confirmation"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/products\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/confirmation"
            }, {
                "function": "_cn",
                "arg0": ["macro", 2],
                "arg1": "shop.ledger.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "enterprise.ledger.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "primary button vault"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "enterprise.ledger.com"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "marketing_checkout"
            }, {
                "function": "_re",
                "arg0": ["macro", 24],
                "arg1": "cart__flyout-overlay|icon__x-close"
            }, {
                "function": "_ew",
                "arg0": ["macro", 1],
                "arg1": "-wallet\/"
            }, {
                "function": "_sw",
                "arg0": ["macro", 39],
                "arg1": "https:\/\/www.ledger.com"
            }, {
                "function": "_sw",
                "arg0": ["macro", 39],
                "arg1": "https:\/\/www.ledger.com\/academy\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.timer"
            }, {
                "function": "_re",
                "arg0": ["macro", 29],
                "arg1": "(^$|((^|,)9346581_270($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "hubspot-form-success"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "productClick"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "detail"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "view_cart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "removeFromCart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "checkoutOption"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/apps\/flow"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "view_side_cart"
            }, {
                "function": "_eq",
                "arg0": ["macro", 16],
                "arg1": "1"
            }, {
                "function": "_cn",
                "arg0": ["macro", 54],
                "arg1": "2"
            }, {
                "function": "_cn",
                "arg0": ["macro", 54],
                "arg1": "3"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "login"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "quiz_began"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "quiz_progress"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "companion_clicked"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "quiz_stopped"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "quiz_completed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "nft_claimed"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "page_view"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "cart__button cart__button--checkout"
            }, {
                "function": "_eq",
                "arg0": ["macro", 24],
                "arg1": "ledger-live__top-banner__button"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Download Now"
            }, {
                "function": "_cn",
                "arg0": ["macro", 28],
                "arg1": "https:\/\/download-live.ledger.com\/releases\/latest\/download\/mac"
            }, {
                "function": "_cn",
                "arg0": ["macro", 28],
                "arg1": "https:\/\/download-live.ledger.com\/releases\/latest\/download\/win"
            }, {
                "function": "_cn",
                "arg0": ["macro", 28],
                "arg1": "https:\/\/download-live.ledger.com\/releases\/latest\/download\/linux"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "\/contact-info"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "payment-info"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "shipping-method"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "vaultplatform.ledger.com\/solutions"
            }, {
                "function": "_cn",
                "arg0": ["macro", 24],
                "arg1": "hs-button primary large"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 29],
                "arg1": "(^$|((^|,)9346581_135($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 81],
                "arg1": "button_1"
            }, {
                "function": "_cn",
                "arg0": ["macro", 25],
                "arg1": "Register to newsletter"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "audio_complete"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "audio_progress"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "audio_start"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "video_complete"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "video_progress"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "video_start"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "select_content"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "journey_begin"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "library_discover"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "search"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "library_filter_activate"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "library_filter_desactivate"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "clear_all_filter"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "sticky_side_bar"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "select_suggested_content"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "select_product_placement"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/iot"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/vault"
            }, {
                "function": "_sw",
                "arg0": ["macro", 39],
                "arg1": "https:\/\/support."
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/pages\/reseller-program\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/apps\/flow\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/cart\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/products\/ledger-nano-x-reseller"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "\/products\/ledger-nano-s-reseller"
            }, {
                "function": "_sw",
                "arg0": ["macro", 39],
                "arg1": "https:\/\/ledgerstore-dev."
            }, {
                "function": "_sw",
                "arg0": ["macro", 39],
                "arg1": "https:\/\/www-staging.ledger"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "ledger.com"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.historyChange"
            }, {
                "function": "_cn",
                "arg0": ["macro", 1],
                "arg1": "supported-crypto-assets"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "support.ledger.com"
            }, {
                "function": "_re",
                "arg0": ["macro", 29],
                "arg1": "(^$|((^|,)9346581_322($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 39],
                "arg1": "bitcoin-cash-wallet"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 1, 4, 9, 30, 33, 38, 46, 49, 50, 52, 53, 55, 56, 57, 66, 69, 146, 150, 153, 200, 203, 212, 213, 218, 224, 227, 228, 232, 233, 234, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 195, 196]
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 2, 210]
                ],
                [
                    ["if", 3, 4],
                    ["add", 3]
                ],
                [
                    ["if", 5, 6],
                    ["add", 5, 48, 60, 67, 72, 106, 148, 149, 205, 220, 223, 230]
                ],
                [
                    ["if", 7, 8],
                    ["add", 6, 107]
                ],
                [
                    ["if", 9, 10],
                    ["add", 7, 74, 99]
                ],
                [
                    ["if", 11, 13],
                    ["unless", 12],
                    ["add", 8, 32, 45, 47, 51, 58, 59, 80, 108, 147, 198, 201, 202, 204, 209, 215, 222, 229, 231]
                ],
                [
                    ["if", 14, 15],
                    ["add", 10]
                ],
                [
                    ["if", 15, 16],
                    ["add", 11]
                ],
                [
                    ["if", 15, 17, 18],
                    ["add", 12]
                ],
                [
                    ["if", 15, 19, 20],
                    ["add", 13]
                ],
                [
                    ["if", 15, 21, 22],
                    ["add", 14]
                ],
                [
                    ["if", 15, 23, 24],
                    ["add", 15]
                ],
                [
                    ["if", 15, 25],
                    ["add", 16]
                ],
                [
                    ["if", 15, 26, 27],
                    ["add", 17]
                ],
                [
                    ["if", 15, 28, 29],
                    ["add", 18]
                ],
                [
                    ["if", 15, 30],
                    ["add", 19]
                ],
                [
                    ["if", 15, 31, 32],
                    ["add", 20]
                ],
                [
                    ["if", 15, 33, 34],
                    ["add", 21]
                ],
                [
                    ["if", 15, 35, 36],
                    ["add", 22]
                ],
                [
                    ["if", 15, 37, 38],
                    ["add", 23]
                ],
                [
                    ["if", 15, 32, 39],
                    ["add", 24]
                ],
                [
                    ["if", 15, 32, 40],
                    ["add", 25]
                ],
                [
                    ["if", 15, 41, 42],
                    ["add", 26]
                ],
                [
                    ["if", 43, 44],
                    ["add", 27, 117]
                ],
                [
                    ["if", 43, 45],
                    ["add", 28, 118]
                ],
                [
                    ["if", 46],
                    ["add", 29, 119]
                ],
                [
                    ["if", 3, 47],
                    ["add", 31, 199]
                ],
                [
                    ["if", 0, 48],
                    ["add", 34]
                ],
                [
                    ["if", 0],
                    ["unless", 11, 49],
                    ["add", 35]
                ],
                [
                    ["if", 1, 3, 50],
                    ["add", 36]
                ],
                [
                    ["if", 0, 51],
                    ["add", 37, 208, 211, 216, 217]
                ],
                [
                    ["if", 15, 52, 53],
                    ["add", 39]
                ],
                [
                    ["if", 54],
                    ["add", 40, 81, 114]
                ],
                [
                    ["if", 15, 55],
                    ["add", 41, 112, 206]
                ],
                [
                    ["if", 0, 56, 57],
                    ["add", 42, 210]
                ],
                [
                    ["if", 0, 58],
                    ["add", 43, 210]
                ],
                [
                    ["if", 59, 60],
                    ["add", 44]
                ],
                [
                    ["if", 61],
                    ["add", 54]
                ],
                [
                    ["if", 62],
                    ["add", 61, 71, 98]
                ],
                [
                    ["if", 63],
                    ["add", 62, 73, 97]
                ],
                [
                    ["if", 64],
                    ["add", 63, 75, 101]
                ],
                [
                    ["if", 65],
                    ["add", 64, 76, 100]
                ],
                [
                    ["if", 66],
                    ["add", 65, 96]
                ],
                [
                    ["if", 68],
                    ["add", 68, 70, 102]
                ],
                [
                    ["if", 8, 69],
                    ["add", 77]
                ],
                [
                    ["if", 66, 70],
                    ["add", 78]
                ],
                [
                    ["if", 66, 71],
                    ["add", 79]
                ],
                [
                    ["if", 72],
                    ["add", 82, 89]
                ],
                [
                    ["if", 73],
                    ["add", 83, 90]
                ],
                [
                    ["if", 74],
                    ["add", 84, 91]
                ],
                [
                    ["if", 75],
                    ["add", 85, 92]
                ],
                [
                    ["if", 76],
                    ["add", 86, 93]
                ],
                [
                    ["if", 77],
                    ["add", 87, 94]
                ],
                [
                    ["if", 78],
                    ["add", 88, 95]
                ],
                [
                    ["if", 79],
                    ["add", 103]
                ],
                [
                    ["if", 15, 80],
                    ["add", 104, 221]
                ],
                [
                    ["if", 15, 81, 82],
                    ["add", 105]
                ],
                [
                    ["if", 15, 83],
                    ["add", 105]
                ],
                [
                    ["if", 15, 84],
                    ["add", 105]
                ],
                [
                    ["if", 15, 85],
                    ["add", 105]
                ],
                [
                    ["if", 0, 86],
                    ["add", 109]
                ],
                [
                    ["if", 0, 87],
                    ["add", 110]
                ],
                [
                    ["if", 0, 88],
                    ["add", 111]
                ],
                [
                    ["if", 15, 89, 90],
                    ["add", 113]
                ],
                [
                    ["if", 15],
                    ["add", 115]
                ],
                [
                    ["if", 91, 92],
                    ["add", 116]
                ],
                [
                    ["if", 15, 20, 34, 93],
                    ["add", 120]
                ],
                [
                    ["if", 15, 94],
                    ["add", 121]
                ],
                [
                    ["if", 95],
                    ["add", 122, 124]
                ],
                [
                    ["if", 96],
                    ["add", 122, 124]
                ],
                [
                    ["if", 97],
                    ["add", 122, 124]
                ],
                [
                    ["if", 98],
                    ["add", 123, 125]
                ],
                [
                    ["if", 99],
                    ["add", 123, 125]
                ],
                [
                    ["if", 100],
                    ["add", 123, 125]
                ],
                [
                    ["if", 101],
                    ["add", 126, 136, 151, 152]
                ],
                [
                    ["if", 102],
                    ["add", 127, 137]
                ],
                [
                    ["if", 103],
                    ["add", 128, 138]
                ],
                [
                    ["if", 104],
                    ["add", 129, 139]
                ],
                [
                    ["if", 105],
                    ["add", 130, 140]
                ],
                [
                    ["if", 106],
                    ["add", 131, 141]
                ],
                [
                    ["if", 107],
                    ["add", 132, 142]
                ],
                [
                    ["if", 108],
                    ["add", 133, 143]
                ],
                [
                    ["if", 109],
                    ["add", 134, 144]
                ],
                [
                    ["if", 110],
                    ["add", 135, 145]
                ],
                [
                    ["if", 3],
                    ["add", 172, 193]
                ],
                [
                    ["if", 0],
                    ["unless", 51, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
                    ["add", 192]
                ],
                [
                    ["if", 0],
                    ["unless", 121],
                    ["add", 194]
                ],
                [
                    ["if", 6],
                    ["add", 197]
                ],
                [
                    ["if", 122],
                    ["add", 207]
                ],
                [
                    ["if", 0, 123],
                    ["add", 210]
                ],
                [
                    ["if", 0, 124],
                    ["add", 214]
                ],
                [
                    ["if", 59, 125],
                    ["add", 219]
                ],
                [
                    ["if", 13],
                    ["add", 225]
                ],
                [
                    ["if", 0, 126],
                    ["add", 226]
                ],
                [
                    ["if", 0, 67],
                    ["block", 66]
                ]
            ]
        },
        "runtime": [
            [50, "__cvt_9346581_309", [46, "a"],
                [41, "b", "c", "d", "e", "f", "g", "h", "i", "j"],
                [50, "k", [46],
                    [41, "n", "o", "p"],
                    [3, "n", [8]],
                    [3, "o", 0],
                    [42, [23, [15, "o"],
                            [17, [15, "arguments"], "length"]
                        ],
                        [35, [3, "o", [0, [15, "o"], 1]]], false, [46, [47, "p", [16, [15, "arguments"],
                                [15, "o"]
                            ],
                            [46, [43, [15, "n"],
                                [15, "p"],
                                [16, [16, [15, "arguments"],
                                        [15, "o"]
                                    ],
                                    [15, "p"]
                                ]
                            ]]
                        ]]
                    ],
                    [36, [15, "n"]]
                ],
                [50, "l", [46],
                    [41, "n"],
                    [3, "n", ["e", "snaptr"]],
                    [22, [15, "n"],
                        [46, [36, [15, "n"]]]
                    ],
                    ["j", "snaptr", [51, "", [7],
                        [41, "o"],
                        [3, "o", ["e", "snaptr.handleRequest"]],
                        [22, [15, "o"],
                            [46, ["c", "snaptr.handleRequest.apply", [45],
                                [15, "arguments"]
                            ]],
                            [46, ["c", "snaptr.queue.push", [15, "arguments"]]]
                        ]
                    ]],
                    [36, ["e", "snaptr"]]
                ],
                [50, "m", [46],
                    [41, "n", "o", "p", "q"],
                    [3, "n", ["l"]],
                    ["f", "snaptr.queue"],
                    ["j", "snaptr.sendPixelByGTM", [15, "i"], true],
                    [43, [15, "a"], "integration", "gtm"],
                    ["b", "data = ", [15, "a"]],
                    [3, "o", [39, [17, [15, "a"], "additional_init_data"],
                        ["h", [17, [15, "a"], "additional_init_data"], "key", "value"],
                        [8]
                    ]],
                    [3, "p", ["k", [15, "a"],
                        [15, "o"]
                    ]],
                    ["b", "initData = ", [15, "p"]],
                    ["n", "init", [17, [15, "p"], "pixel_id"],
                        [15, "p"]
                    ],
                    ["n", "track", [17, [15, "p"], "pixel_id"],
                        [17, [15, "p"], "event_type"],
                        [15, "a"]
                    ],
                    [3, "q", "https://sc-static.net/scevent.min.js"],
                    ["g", [15, "q"],
                        [17, [15, "a"], "gtmOnSuccess"],
                        [17, [15, "a"], "gtmOnFailure"],
                        [15, "q"]
                    ]
                ],
                [3, "b", ["require", "logToConsole"]],
                [3, "c", ["require", "callInWindow"]],
                [3, "d", ["require", "callLater"]],
                [3, "e", ["require", "copyFromWindow"]],
                [3, "f", ["require", "createQueue"]],
                [3, "g", ["require", "injectScript"]],
                [3, "h", ["require", "makeTableMap"]],
                [3, "i", ["require", "sendPixel"]],
                [3, "j", ["require", "setInWindow"]],
                ["m"]
            ],
            [50, "__cvt_9346581_312", [46, "a"],
                [41, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
                [3, "b", ["require", "injectScript"]],
                [3, "c", ["require", "copyFromWindow"]],
                [3, "d", ["require", "setInWindow"]],
                [3, "e", ["require", "callInWindow"]],
                [3, "f", ["require", "createQueue"]],
                [3, "g", ["require", "makeTableMap"]],
                [3, "h", [51, "", [7],
                    [41, "l", "m"],
                    [3, "l", ["c", "rdt"]],
                    [22, [15, "l"],
                        [46, [36, [15, "l"]]]
                    ],
                    ["d", "rdt", [51, "", [7],
                        [41, "n"],
                        [3, "n", ["c", "rdt.sendEvent"]],
                        [22, [15, "n"],
                            [46, ["e", "rdt.sendEvent.apply", [15, "l"],
                                [15, "arguments"]
                            ]],
                            [46, ["m", [15, "arguments"]]]
                        ]
                    ]],
                    [3, "m", ["f", "rdt.callQueue"]],
                    [36, ["c", "rdt"]]
                ]],
                [3, "i", [39, [1, [17, [15, "a"], "advancedMatchingParams"],
                        [17, [17, [15, "a"], "advancedMatchingParams"], "length"]
                    ],
                    ["g", [17, [15, "a"], "advancedMatchingParams"], "name", "value"],
                    [8]
                ]],
                [43, [15, "i"], "integration", "gtm"],
                [43, [15, "i"], "useDecimalCurrencyValues", true],
                [3, "j", ["h"]],
                [22, [28, [17, [15, "j"], "advertiserId"]],
                    [46, ["j", "init", [17, [15, "a"], "id"],
                        [15, "i"]
                    ]]
                ],
                [22, [28, [17, [15, "a"], "enableFirstPartyCookies"]],
                    [46, ["j", "disableFirstPartyCookies"]]
                ],
                [3, "k", [8, "currency", [17, [15, "a"], "currency"], "value", [17, [15, "a"], "transactionValue"]]],
                [22, [1, [29, [17, [15, "a"], "eventType"], "AddToCart"],
                        [29, [17, [15, "a"], "eventType"], "AddToWishlist"]
                    ],
                    [46, [43, [15, "k"], "transactionId", [17, [15, "a"], "transactionId"]]]
                ],
                [22, [1, [29, [17, [15, "a"], "eventType"], "SignUp"],
                        [29, [17, [15, "a"], "eventType"], "Lead"]
                    ],
                    [46, [43, [15, "k"], "itemCount", [17, [15, "a"], "itemCount"]]]
                ],
                [22, [1, [12, [17, [15, "a"], "eventType"], "Custom"],
                        [17, [15, "a"], "customEventName"]
                    ],
                    [46, [43, [15, "k"], "customEventName", [17, [15, "a"], "customEventName"]]]
                ],
                ["j", "track", [17, [15, "a"], "eventType"],
                    [15, "k"]
                ],
                ["b", "https://www.redditstatic.com/ads/pixel.js", [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "rdtPixel"
                ]
            ],
            [50, "__cvt_9346581_711", [46, "a"],
                [52, "b", ["require", "copyFromDataLayer"]],
                [52, "c", ["require", "getType"]],
                [52, "d", ["require", "makeNumber"]],
                [52, "e", ["require", "makeTableMap"]],
                [52, "f", ["require", "Math"]],
                [52, "g", [39, [17, [15, "a"], "customDims"],
                    ["e", [17, [15, "a"], "customDims"], "cdindex", "cdparam"],
                    [8]
                ]],
                [52, "h", [39, [17, [15, "a"], "customMets"],
                    ["e", [17, [15, "a"], "customMets"], "cmindex", "cmparam"],
                    [8]
                ]],
                [52, "i", [51, "", [7, "l"],
                    [52, "m", [39, [17, [15, "l"], "category"],
                        [2, [17, [15, "l"], "category"], "split", [7, "/"]],
                        [7]
                    ]],
                    [52, "n", [8, "item_id", [17, [15, "l"], "id"], "item_name", [17, [15, "l"], "name"], "price", [17, [15, "l"], "price"], "item_brand", [17, [15, "l"], "brand"], "item_variant", [17, [15, "l"], "variant"], "quantity", [39, [17, [15, "l"], "quantity"],
                        [2, [15, "f"], "round", [7, [17, [15, "l"], "quantity"]]],
                        [17, [15, "l"], "quantity"]
                    ]]],
                    [2, [15, "m"], "forEach", [7, [51, "", [7, "o", "p"],
                        [22, [20, [15, "p"], 0],
                            [46, [43, [15, "n"], "item_category", [15, "o"]]],
                            [46, [43, [15, "n"],
                                [0, "item_category", [0, [15, "p"], 1]],
                                [15, "o"]
                            ]]
                        ]
                    ]]],
                    [55, "o", [15, "l"],
                        [46, [22, [16, [15, "g"],
                                    [15, "o"]
                                ],
                                [46, [43, [15, "n"],
                                    [16, [15, "g"],
                                        [15, "o"]
                                    ],
                                    [16, [15, "l"],
                                        [15, "o"]
                                    ]
                                ]]
                            ],
                            [22, [16, [15, "h"],
                                    [15, "o"]
                                ],
                                [46, [43, [15, "n"],
                                    [16, [15, "h"],
                                        [15, "o"]
                                    ],
                                    [16, [15, "l"],
                                        [15, "o"]
                                    ]
                                ]]
                            ],
                            [22, [20, [2, [15, "o"], "indexOf", [7, "dimension"]], 0],
                                [46, [53, [41, "p"],
                                    [3, "p", [16, [15, "g"],
                                        [16, [2, [15, "o"], "split", [7, "dimension"]], 1]
                                    ]],
                                    [43, [15, "n"],
                                        [30, [15, "p"],
                                            [15, "o"]
                                        ],
                                        [16, [15, "l"],
                                            [15, "o"]
                                        ]
                                    ]
                                ]]
                            ],
                            [22, [20, [2, [15, "o"], "indexOf", [7, "metric"]], 0],
                                [46, [53, [41, "p"],
                                    [3, "p", [16, [15, "h"],
                                        [16, [2, [15, "o"], "split", [7, "metric"]], 1]
                                    ]],
                                    [43, [15, "n"],
                                        [30, [15, "p"],
                                            [15, "o"]
                                        ],
                                        [30, ["d", [16, [15, "l"],
                                            [15, "o"]
                                        ]], 0]
                                    ]
                                ]]
                            ]
                        ]
                    ],
                    [36, [15, "n"]]
                ]],
                [52, "j", [51, "", [7, "l"],
                    [52, "m", ["i", [15, "l"]]],
                    [43, [15, "m"], "item_list_name", [17, [15, "l"], "list"]],
                    [43, [15, "m"], "index", [17, [15, "l"], "position"]],
                    [36, [15, "m"]]
                ]],
                [52, "k", [51, "", [7, "l"],
                    [36, [8, "promotion_name", [17, [15, "l"], "name"], "promotion_id", [17, [15, "l"], "id"], "creative_name", [17, [15, "l"], "creative"], "creative_slot", [17, [15, "l"], "position"]]]
                ]],
                [22, [20, [17, [15, "a"], "option"], "auto"],
                    [46, [53, [52, "l", [30, ["b", "ecommerce", 1],
                            [8]
                        ]],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "click"]],
                                [20, ["c", [17, [17, [15, "l"], "click"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "click"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "click"], "actionField"],
                                    [17, [17, [17, [15, "l"], "click"], "actionField"], "list"],
                                    [44]
                                ]],
                                [43, [15, "n"], "index", [17, [15, "m"], "position"]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "detail"]],
                                [20, ["c", [17, [17, [15, "l"], "detail"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "detail"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "detail"], "actionField"],
                                    [17, [17, [17, [15, "l"], "detail"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "add"]],
                                [20, ["c", [17, [17, [15, "l"], "add"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "add"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "add"], "actionField"],
                                    [17, [17, [17, [15, "l"], "add"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "remove"]],
                                [20, ["c", [17, [17, [15, "l"], "remove"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "remove"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "remove"], "actionField"],
                                    [17, [17, [17, [15, "l"], "remove"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "checkout"]],
                                [20, ["c", [17, [17, [15, "l"], "checkout"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "checkout"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "checkout"], "actionField"],
                                    [17, [17, [17, [15, "l"], "checkout"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "purchase"]],
                                [20, ["c", [17, [17, [15, "l"], "purchase"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "purchase"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "purchase"], "actionField"],
                                    [17, [17, [17, [15, "l"], "purchase"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "refund"]],
                                [20, ["c", [17, [17, [15, "l"], "refund"], "products"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "refund"], "products"], "map", [7, [51, "", [7, "m"],
                                [52, "n", ["i", [15, "m"]]],
                                [43, [15, "n"], "item_list_name", [39, [17, [17, [15, "l"], "refund"], "actionField"],
                                    [17, [17, [17, [15, "l"], "refund"], "actionField"], "list"],
                                    [44]
                                ]],
                                [36, [15, "n"]]
                            ]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "impressions"]],
                                [20, ["c", [17, [15, "l"], "impressions"]], "array"]
                            ],
                            [46, [36, [2, [17, [15, "l"], "impressions"], "map", [7, [15, "j"]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "promoView"]],
                                [20, ["c", [17, [17, [15, "l"], "promoView"], "promotions"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "promoView"], "promotions"], "map", [7, [15, "k"]]]]]
                        ],
                        [22, [1, [2, [15, "l"], "hasOwnProperty", [7, "promoClick"]],
                                [20, ["c", [17, [17, [15, "l"], "promoClick"], "promotions"]], "array"]
                            ],
                            [46, [36, [2, [17, [17, [15, "l"], "promoClick"], "promotions"], "map", [7, [15, "k"]]]]]
                        ],
                        [36, [7]]
                    ]]
                ],
                [22, [1, [20, [17, [15, "a"], "option"], "products"],
                        [20, ["c", [17, [15, "a"], "productsVar"]], "array"]
                    ],
                    [46, [36, [2, [17, [15, "a"], "productsVar"], "map", [7, [15, "i"]]]]]
                ],
                [22, [1, [20, [17, [15, "a"], "option"], "impressions"],
                        [20, ["c", [17, [15, "a"], "impressionsVar"]], "array"]
                    ],
                    [46, [36, [2, [17, [15, "a"], "impressionsVar"], "map", [7, [15, "j"]]]]]
                ],
                [22, [20, [17, [15, "a"], "option"], "promotions"],
                    [46, [36, [2, [17, [15, "a"], "promotionsVar"], "map", [7, [15, "k"]]]]]
                ]
            ],
            [50, "__cvt_9346581_715", [46, "a"],
                [50, "m", [46, "p", "q", "r"],
                    [2, [15, "r"], "forEach", [7, [51, "", [7, "s"],
                        [22, [16, [15, "p"],
                                [15, "s"]
                            ],
                            [46, [43, [15, "q"],
                                [15, "s"],
                                [16, [15, "p"],
                                    [15, "s"]
                                ]
                            ]]
                        ]
                    ]]]
                ],
                [50, "n", [46, "p", "q"],
                    [38, [17, [15, "p"], "page_location_op"],
                        [46, 1, 2],
                        [46, [5, [46, [43, [15, "q"], "hide_page_location", true],
                                [4]
                            ]],
                            [5, [46, [43, [15, "q"], "page_location", [17, [15, "p"], "page_location"]],
                                [4]
                            ]],
                            [9, [46]]
                        ]
                    ]
                ],
                [50, "o", [46, "p", "q"],
                    [22, [28, [17, [15, "p"], "additionalParams"]],
                        [46, [36]]
                    ],
                    [52, "r", ["h", [17, [15, "p"], "additionalParams"], "name", "value"]],
                    [2, [2, [15, "g"], "keys", [7, [15, "r"]]], "forEach", [7, [51, "", [7, "s"],
                        [43, [15, "q"],
                            [15, "s"],
                            [16, [15, "r"],
                                [15, "s"]
                            ]
                        ]
                    ]]]
                ],
                [52, "b", ["require", "callInWindow"]],
                [52, "c", ["require", "copyFromWindow"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "JSON"]],
                [52, "f", ["require", "logToConsole"]],
                [52, "g", ["require", "Object"]],
                [52, "h", ["require", "makeTableMap"]],
                [52, "i", ["require", "setInWindow"]],
                ["f", [0, "data: ", [2, [15, "e"], "stringify", [7, [15, "a"]]]]],
                [52, "j", [51, "", [7],
                    [22, ["c", "twq.exe"],
                        [46, ["b", "twq.exe.apply", [45],
                            [15, "arguments"]
                        ]],
                        [46, ["b", "twq.queue.push", [15, "arguments"]]]
                    ]
                ]],
                [43, [15, "j"], "integration", "gtm"],
                [43, [15, "j"], "queue", [7]],
                ["i", "twq", [15, "j"], false],
                [52, "k", [8]],
                ["m", [15, "a"],
                    [15, "k"],
                    [7, "email_address", "phone_number", "external_id", "twclid"]
                ],
                ["n", [15, "a"],
                    [15, "k"]
                ],
                ["o", [15, "a"],
                    [15, "k"]
                ],
                ["b", "twq", "config", [17, [15, "a"], "pixel_id"],
                    [15, "k"]
                ],
                [52, "l", "https://static.ads-twitter.com/uwt.js"],
                ["d", [15, "l"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [15, "l"]
                ],
                [36, [15, "j"]]
            ],
            [50, "__cvt_9346581_717", [46, "a"],
                [50, "m", [46, "q", "r", "s"],
                    [2, [15, "s"], "forEach", [7, [51, "", [7, "t"],
                        [22, [16, [15, "q"],
                                [15, "t"]
                            ],
                            [46, [43, [15, "r"],
                                [15, "t"],
                                [16, [15, "q"],
                                    [15, "t"]
                                ]
                            ]]
                        ]
                    ]]]
                ],
                [50, "n", [46, "q", "r"],
                    [22, [28, [17, [15, "q"], "contents"]],
                        [46, [36]]
                    ],
                    [52, "s", [7, [8]]],
                    [2, [17, [15, "q"], "contents"], "forEach", [7, [51, "", [7, "t"],
                        [52, "u", [16, [15, "s"],
                            [37, [17, [15, "s"], "length"], 1]
                        ]],
                        [22, [2, [15, "u"], "hasOwnProperty", [7, [17, [15, "t"], "key"]]],
                            [46, [53, [52, "v", [8]],
                                [43, [15, "v"],
                                    [17, [15, "t"], "key"],
                                    [17, [15, "t"], "value"]
                                ],
                                [2, [15, "s"], "push", [7, [15, "v"]]]
                            ]],
                            [46, [43, [15, "u"],
                                [17, [15, "t"], "key"],
                                [17, [15, "t"], "value"]
                            ]]
                        ]
                    ]]],
                    [43, [15, "r"], "contents", [15, "s"]]
                ],
                [50, "o", [46, "q", "r"],
                    [38, [17, [15, "q"], "page_location_op"],
                        [46, 1, 2],
                        [46, [5, [46, [43, [15, "r"], "hide_page_location", true],
                                [4]
                            ]],
                            [5, [46, [43, [15, "r"], "page_location", [17, [15, "q"], "page_location"]],
                                [4]
                            ]],
                            [9, [46]]
                        ]
                    ]
                ],
                [50, "p", [46, "q", "r"],
                    [22, [28, [17, [15, "q"], "additionalParams"]],
                        [46, [36]]
                    ],
                    [52, "s", ["h", [17, [15, "q"], "additionalParams"], "name", "value"]],
                    [2, [2, [15, "g"], "keys", [7, [15, "s"]]], "forEach", [7, [51, "", [7, "t"],
                        [43, [15, "r"],
                            [15, "t"],
                            [16, [15, "s"],
                                [15, "t"]
                            ]
                        ]
                    ]]]
                ],
                [52, "b", ["require", "callInWindow"]],
                [52, "c", ["require", "copyFromWindow"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "JSON"]],
                [52, "f", ["require", "logToConsole"]],
                [52, "g", ["require", "Object"]],
                [52, "h", ["require", "makeTableMap"]],
                [52, "i", ["require", "setInWindow"]],
                ["f", [0, "data: ", [2, [15, "e"], "stringify", [7, [15, "a"]]]]],
                [52, "j", [51, "", [7],
                    [22, ["c", "twq.exe"],
                        [46, ["b", "twq.exe.apply", [45],
                            [15, "arguments"]
                        ]],
                        [46, ["b", "twq.queue.push", [15, "arguments"]]]
                    ]
                ]],
                [43, [15, "j"], "integration", "gtm"],
                [43, [15, "j"], "queue", [7]],
                ["i", "twq", [15, "j"], false],
                [52, "k", [8]],
                ["m", [15, "a"],
                    [15, "k"],
                    [7, "value", "currency", "conversion_id", "description", "search_string", "twclid", "email_address", "phone_number", "external_id"]
                ],
                ["n", [15, "a"],
                    [15, "k"]
                ],
                ["o", [15, "a"],
                    [15, "k"]
                ],
                ["p", [15, "a"],
                    [15, "k"]
                ],
                ["b", "twq", "event", [17, [15, "a"], "event_id"],
                    [15, "k"]
                ],
                [52, "l", "https://static.ads-twitter.com/uwt.js"],
                ["d", [15, "l"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [15, "l"]
                ],
                [36, [15, "j"]]
            ],
            [50, "__cvt_9346581_726", [46, "a"],
                [41, "f"],
                [52, "b", ["require", "injectScript"]],
                [52, "c", ["require", "setInWindow"]],
                [52, "d", ["require", "createQueue"]],
                [52, "e", ["require", "makeNumber"]],
                ["c", "teads_env", "js-gtm", true],
                [3, "f", [8]],
                [52, "g", "https://p.teads.tv/teads-fellow.js"],
                ["b", [15, "g"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [15, "g"]
                ],
                [52, "h", ["d", "teads_e"]],
                [52, "i", ["e", [17, [15, "a"], "pixelId"]]],
                [22, [20, [17, [15, "a"], "accountType"], "tam"],
                    [46, ["c", "teads_buyer_pixel_id", [15, "i"], true]],
                    [46, ["c", "teads_adv_id", [15, "i"], true]]
                ],
                [22, [17, [15, "a"], "disableFirstPartyCookie"],
                    [46, ["c", "teads_disable_first_party_cookie", "true", true]]
                ],
                [22, [17, [15, "a"], "advertiserEventType"],
                    [46, [53, [52, "j", [39, [20, [17, [15, "a"], "advertiserEventType"], "legacyConversion"],
                            [17, [15, "a"], "legacyConversionName"],
                            [17, [15, "a"], "advertiserEventType"]
                        ]],
                        [43, [15, "f"], "conversionType", [15, "j"]],
                        [22, [17, [15, "a"], "name"],
                            [46, [43, [15, "f"], "name", [17, [15, "a"], "name"]]]
                        ],
                        [22, [1, [17, [15, "a"], "price"],
                                [17, [15, "a"], "currency"]
                            ],
                            [46, [43, [15, "f"], "price", [17, [15, "a"], "price"]],
                                [43, [15, "f"], "currency", [17, [15, "a"], "currency"]]
                            ]
                        ],
                        ["h", [15, "f"]]
                    ]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]],
                [36, [15, "f"]]
            ],
            [50, "__awj", [46, "a"],
                [52, "b", ["require", "injectScript"]],
                ["b", [0, [0, "https://www.dwin1.com/", [17, [15, "a"], "merchantId"]], ".js"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "awj"
                ]
            ],
            [50, "__baut", [46, "a"],
                [52, "b", ["require", "injectScript"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "makeTableMap"]],
                [38, [17, [15, "a"], "eventType"],
                    [46, "PAGE_LOAD", "VARIABLE_REVENUE", "CUSTOM"],
                    [46, [5, [46, [43, [15, "a"], "eventType", "pageView"],
                            [4]
                        ]],
                        [5, [46, [43, [15, "a"], "eventType", "variableRevenue"],
                            [4]
                        ]],
                        [5, [46, [43, [15, "a"], "eventType", "custom"]]]
                    ]
                ],
                [22, [17, [15, "a"], "eventCategory"],
                    [46, [43, [15, "a"], "p_event_category", [17, [15, "a"], "eventCategory"]]]
                ],
                [22, [17, [15, "a"], "eventLabel"],
                    [46, [43, [15, "a"], "p_event_label", [17, [15, "a"], "eventLabel"]]]
                ],
                [22, [17, [15, "a"], "eventValue"],
                    [46, [43, [15, "a"], "p_event_value", [17, [15, "a"], "eventValue"]]]
                ],
                [22, [17, [15, "a"], "goalValue"],
                    [46, [43, [15, "a"], "p_revenue_value", [17, [15, "a"], "goalValue"]]]
                ],
                [52, "e", [51, "", [7],
                    [52, "i", [39, [30, [20, [17, [15, "a"], "eventType"], "pageView"],
                            [28, [17, [15, "a"], "customParamTable"]]
                        ],
                        [8],
                        ["d", [17, [15, "a"], "customParamTable"], "customParamName", "customParamValue"]
                    ]],
                    [52, "j", [8, "pageViewSpa", [7, "page_path", "page_title"], "variableRevenue", [7, "currency", "revenue_value"], "custom", [7, "event_category", "event_label", "event_value", "currency", "revenue_value"], "ecommerce", [7, "ecomm_prodid", "ecomm_pagetype", "ecomm_totalvalue", "ecomm_category"], "hotel", [7, "currency", "hct_base_price", "hct_booking_xref", "hct_checkin_date", "hct_checkout_date", "hct_length_of_stay", "hct_partner_hotel_id", "hct_total_price", "hct_pagetype"], "travel", [7, "travel_destid", "travel_originid", "travel_pagetype", "travel_startdate", "travel_enddate", "travel_totalvalue"]]],
                    [65, "k", [30, [16, [15, "j"],
                                [17, [15, "a"], "eventType"]
                            ],
                            [7]
                        ],
                        [46, [43, [15, "i"],
                            [15, "k"],
                            [30, [16, [15, "i"],
                                    [15, "k"]
                                ],
                                [16, [15, "a"],
                                    [0, "p_", [15, "k"]]
                                ]
                            ]
                        ]]
                    ],
                    [43, [15, "i"], "tpp", "1"],
                    [36, [15, "i"]]
                ]],
                [52, "f", [51, "", [7],
                    [52, "i", [39, [28, [17, [15, "a"], "customConfigTable"]],
                        [8],
                        ["d", [17, [15, "a"], "customConfigTable"], "customConfigName", "customConfigValue"]
                    ]],
                    [54, "k", [15, "i"],
                        [46, [22, [20, [16, [15, "i"],
                                [15, "k"]
                            ], "true"],
                            [46, [43, [15, "i"],
                                [15, "k"], true
                            ]],
                            [46, [22, [20, [16, [15, "i"],
                                    [15, "k"]
                                ], "false"],
                                [46, [43, [15, "i"],
                                    [15, "k"], false
                                ]]
                            ]]
                        ]]
                    ],
                    [52, "j", [7, "navTimingApi", "storeConvTrackCookies", "removeQueryFromUrls", "disableAutoPageView"]],
                    [65, "k", [15, "j"],
                        [46, [43, [15, "i"],
                            [15, "k"],
                            [30, [16, [15, "i"],
                                    [15, "k"]
                                ],
                                [16, [15, "a"],
                                    [0, "c_", [15, "k"]]
                                ]
                            ]
                        ]]
                    ],
                    [43, [15, "i"], "ti", [17, [15, "a"], "tagId"]],
                    [43, [15, "i"], "tm", "gtm002"],
                    [36, [15, "i"]]
                ]],
                [52, "g", [51, "", [7],
                    [22, [20, [17, [15, "a"], "eventType"], "pageView"],
                        [46, [53, [52, "i", ["f"]],
                            ["c", "UET_init", [17, [15, "a"], "uetqName"],
                                [15, "i"]
                            ],
                            ["c", "UET_push", [17, [15, "a"], "uetqName"], "pageLoad"]
                        ]],
                        [46, [53, [52, "i", ["e"]],
                            [22, [20, [17, [15, "a"], "eventType"], "pageViewSpa"],
                                [46, ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", "page_view", [15, "i"]]],
                                [46, [53, [52, "j", [30, [30, [17, [15, "a"], "customEventAction"],
                                        [17, [15, "a"], "eventAction"]
                                    ], ""]],
                                    ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", [15, "j"],
                                        [15, "i"]
                                    ]
                                ]]
                            ]
                        ]]
                    ],
                    [2, [15, "a"], "gtmOnSuccess", [7]]
                ]],
                [52, "h", "https://bat.bing.com/bat.js"],
                ["b", [15, "h"],
                    [15, "g"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [15, "h"]
                ]
            ],
            [50, "__crto", [46, "a"],
                [52, "b", ["require", "createQueue"]],
                [52, "c", ["require", "injectScript"]],
                [52, "d", "https://static.criteo.net/js/ld/ld.js"],
                [52, "e", ["b", "criteo_q"]],
                [41, "f"],
                [3, "f", [8, "event", "viewHome"]],
                [38, [17, [15, "a"], "tagType"],
                    [46, "LISTING_TAG", "PRODUCT_TAG", "BASKET_TAG", "TRANSACTION_TAG"],
                    [46, [5, [46, [3, "f", [8, "event", "viewList", "item", [17, [15, "a"], "listingID"]]],
                            [4]
                        ]],
                        [5, [46, [3, "f", [8, "event", "viewItem", "item", [17, [15, "a"], "productID"]]],
                            [4]
                        ]],
                        [5, [46, [3, "f", [8, "event", "viewBasket", "item", [17, [15, "a"], "basketArray"]]],
                            [4]
                        ]],
                        [5, [46, [3, "f", [8, "event", "trackTransaction", "id", [30, [17, [15, "a"], "TransactionID"], ""], "item", [17, [15, "a"], "TransactionArray"]]],
                            [4]
                        ]]
                    ]
                ],
                ["e", [8, "event", "setAccount", "account", [17, [15, "a"], "accountId"]],
                    [8, "event", "setHashedEmail", "email", [30, [17, [15, "a"], "hashedEmail"], ""]],
                    [8, "event", "setSiteType", "type", [30, [17, [15, "a"], "siteType"], "d"]],
                    [15, "f"]
                ],
                ["c", [15, "d"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"], "criteoStatic"
                ]
            ],
            [50, "__hjtc", [46, "a"],
                [52, "b", ["require", "createArgumentsQueue"]],
                [52, "c", ["require", "encodeUriComponent"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "makeString"]],
                [52, "f", ["require", "setInWindow"]],
                ["b", "hj", "hj.q"],
                [52, "g", [17, [15, "a"], "hotjar_site_id"]],
                ["f", "_hjSettings", [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"]],
                ["d", [0, [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]], ".js?sv=7"],
                    [17, [15, "a"], "gtmOnSuccess"],
                    [17, [15, "a"], "gtmOnFailure"]
                ]
            ],
            [50, "__qpx", [46, "a"],
                [50, "n", [46, "o", "p"],
                    [41, "q"],
                    [3, "q", [0, [0, [0, [0, [0, "https://q.quora.com/_/ad/", [15, "h"]], "/pixel?tag="],
                            [15, "o"]
                        ], "&i=gtm&u="],
                        [15, "m"]
                    ]],
                    [22, [15, "p"],
                        [46, [3, "q", [0, [15, "q"],
                            [0, "&em=", [15, "p"]]
                        ]]]
                    ],
                    ["b", [15, "q"]]
                ],
                [52, "b", ["require", "sendPixel"]],
                [52, "c", ["require", "setInWindow"]],
                [52, "d", ["require", "copyFromWindow"]],
                [52, "e", ["require", "getUrl"]],
                [52, "f", ["require", "encodeUriComponent"]],
                [52, "g", ["require", "sha256"]],
                [52, "h", [17, [15, "a"], "pixel_id"]],
                [52, "i", [17, [15, "a"], "pixel_event"]],
                [52, "j", [17, [15, "a"], "email"]],
                [52, "k", ["d", "qp"]],
                [52, "l", ["e", [45]]],
                [52, "m", ["f", [15, "l"]]],
                [22, [29, [15, "i"], "ViewContent"],
                    [46, [22, [15, "j"],
                        [46, ["g", [15, "j"],
                            [51, "", [7, "o"],
                                ["n", [15, "i"],
                                    [15, "o"]
                                ]
                            ],
                            [17, [15, "a"], "gtmOnFailure"]
                        ]],
                        [46, ["n", [15, "i"],
                            [45]
                        ]]
                    ]]
                ],
                [22, [28, [15, "k"]],
                    [46, ["b", [0, [0, [0, "https://q.quora.com/_/ad/", [15, "h"]], "/pixel?tag=ViewContent&i=gtm&u="],
                        [15, "m"]
                    ]]]
                ],
                ["c", "qp", "1", true],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": {
            "__cvt_9346581_309": {
                "inject_script": {
                    "urls": ["https:\/\/sc-static.net\/*", "https:\/\/tr.snapchat.com\/*"]
                },
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "snaptr",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "snaptr.handleRequest",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.handleRequest.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "snaptr.queue.push",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "snaptr.sendPixelByGTM",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "send_pixel": {
                    "allowedUrls": "specific",
                    "urls": ["https:\/\/tr.snapchat.com\/*"]
                }
            },
            "__cvt_9346581_312": {
                "inject_script": {
                    "urls": ["https:\/\/www.redditstatic.com\/ads\/pixel.js"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "rdt",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "rdt.callQueue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "rdt.sendEvent.apply",
                        "read": true,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "rdt.callQueue.push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "rdt.sendEvent",
                        "read": true,
                        "write": false,
                        "execute": false
                    }, {
                        "key": "rdt.advertiserId",
                        "read": true,
                        "write": false,
                        "execute": false
                    }]
                }
            },
            "__cvt_9346581_711": {
                "read_data_layer": {
                    "keyPatterns": ["ecommerce"]
                }
            },
            "__cvt_9346581_715": {
                "access_globals": {
                    "keys": [{
                        "key": "twq",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "twq.integration",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "twq.exe",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.queue.push",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.exe.apply",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.ads-twitter.com\/uwt.js"]
                },
                "logging": {
                    "environments": "debug"
                }
            },
            "__cvt_9346581_717": {
                "access_globals": {
                    "keys": [{
                        "key": "twq",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.integration",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "twq.queue",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "twq.queue.push",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.exe",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "twq.exe.apply",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.ads-twitter.com\/uwt.js"]
                },
                "logging": {
                    "environments": "debug"
                }
            },
            "__cvt_9346581_726": {
                "access_globals": {
                    "keys": [{
                        "key": "teads_e",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "teads_buyer_pixel_id",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "teads_adv_id",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "teads_disable_first_party_cookie",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "teads_env",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/p.teads.tv\/teads-fellow.js"]
                }
            },
            "__awj": {
                "inject_script": {
                    "urls": ["https:\/\/www.dwin1.com\/*"]
                }
            },
            "__baut": {
                "inject_script": {
                    "urls": ["https:\/\/bat.bing.com\/bat.js"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "UET_push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "UET_init",
                        "read": false,
                        "write": false,
                        "execute": true
                    }]
                }
            },
            "__crto": {
                "access_globals": {
                    "keys": [{
                        "key": "criteo_q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.criteo.net\/js\/ld\/ld.js"]
                }
            },
            "__hjtc": {
                "access_globals": {
                    "keys": [{
                        "key": "hj",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "hj.q",
                        "read": true,
                        "write": true,
                        "execute": false
                    }, {
                        "key": "_hjSettings",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "inject_script": {
                    "urls": ["https:\/\/static.hotjar.com\/c\/hotjar-*"]
                }
            },
            "__qpx": {
                "send_pixel": {
                    "urls": ["https:\/\/q.quora.com\/"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "qp",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "get_url": {
                    "urlParts": "any"
                }
            }
        },
        "sandboxed_scripts": ["__cvt_9346581_309", "__cvt_9346581_312", "__cvt_9346581_711", "__cvt_9346581_715", "__cvt_9346581_717", "__cvt_9346581_726"],
        "security_groups": {
            "nonGooglePixels": ["__qpx"],
            "nonGoogleScripts": ["__awj", "__baut", "__crto", "__hjtc"]
        }


    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var da, ea = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ja = ma.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ia,
        pa = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (na) na(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Jl = b.prototype
        },
        qa = this || self,
        ra = function(a) {
            return a
        };
    var sa = function(a, b) {
        this.h = a;
        this.B = b
    };
    var ta = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        ua = function() {
            this.D = {};
            this.F = !1;
            this.N = {}
        },
        va = function(a, b) {
            var c = [],
                d;
            for (d in a.D)
                if (a.D.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    ua.prototype.get = function(a) {
        return this.D["dust." + a]
    };
    ua.prototype.set = function(a, b) {
        this.F || (a = "dust." + a, this.N.hasOwnProperty(a) || (this.D[a] = b))
    };
    ua.prototype.has = function(a) {
        return this.D.hasOwnProperty("dust." + a)
    };
    var wa = function(a, b) {
        b = "dust." + b;
        a.F || a.N.hasOwnProperty(b) || delete a.D[b]
    };
    ua.prototype.Qb = function() {
        this.F = !0
    };
    ua.prototype.Ie = function() {
        return this.F
    };
    var xa = function(a) {
        this.B = new ua;
        this.h = [];
        this.D = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ta(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]))
    };
    da = xa.prototype;
    da.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof xa ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    da.set = function(a, b) {
        if (!this.D)
            if ("length" === a) {
                if (!ta(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else ta(a) ? this.h[Number(a)] = b : this.B.set(a, b)
    };
    da.get = function(a) {
        return "length" === a ? this.length() : ta(a) ? this.h[Number(a)] : this.B.get(a)
    };
    da.length = function() {
        return this.h.length
    };
    da.Pb = function() {
        for (var a = va(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new xa(a)
    };
    var ya = function(a, b) {
        ta(b) ? delete a.h[Number(b)] : wa(a.B, b)
    };
    da = xa.prototype;
    da.pop = function() {
        return this.h.pop()
    };
    da.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    da.shift = function() {
        return this.h.shift()
    };
    da.splice = function(a, b, c) {
        return new xa(this.h.splice.apply(this.h, arguments))
    };
    da.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    da.has = function(a) {
        return ta(a) && this.h.hasOwnProperty(a) || this.B.has(a)
    };
    da.Qb = function() {
        this.D = !0;
        Object.freeze(this.h);
        this.B.Qb()
    };
    da.Ie = function() {
        return this.D
    };
    var za = function() {
        this.quota = {}
    };
    za.prototype.reset = function() {
        this.quota = {}
    };
    var Aa = function(a, b) {
        this.U = a;
        this.N = function(c, d, e) {
            return c.apply(d, e)
        };
        this.D = b;
        this.B = new ua;
        this.h = this.F = void 0
    };
    Aa.prototype.add = function(a, b) {
        Ba(this, a, b, !1)
    };
    var Ba = function(a, b, c, d) {
        if (!a.B.Ie())
            if (d) {
                var e = a.B;
                e.set(b, c);
                e.N["dust." + b] = !0
            } else a.B.set(b, c)
    };
    Aa.prototype.set = function(a, b) {
        this.B.Ie() || (!this.B.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.B.set(a, b))
    };
    Aa.prototype.get = function(a) {
        return this.B.has(a) ? this.B.get(a) : this.D ? this.D.get(a) : void 0
    };
    Aa.prototype.has = function(a) {
        return !!this.B.has(a) || !(!this.D || !this.D.has(a))
    };
    var Ca = function(a) {
        var b = new Aa(a.U, a);
        a.F && (b.F = a.F);
        b.N = a.N;
        b.h = a.h;
        return b
    };
    var Da = function() {},
        Ea = function(a) {
            return "function" === typeof a
        },
        k = function(a) {
            return "string" === typeof a
        },
        Ga = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ia = Array.isArray,
        Ka = function(a, b) {
            if (a && Ia(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        La = function(a, b) {
            if (!Ga(a) || !Ga(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Na = function(a, b) {
            for (var c = new Ma, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        m = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Oa = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Pa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Qa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ra = function(a) {
            var b = [];
            if (Ia(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Sa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ta = function() {
            return new Date(Date.now())
        },
        Ua = function() {
            return Ta().getTime()
        },
        Ma = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ma.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ma.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Va = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Xa = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ya = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Za = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        $a = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        bb = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        cb = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        db = /^\w{1,9}$/,
        eb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            m(a, function(d, e) {
                db.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        fb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var gb = function(a, b) {
        ua.call(this);
        this.U = a;
        this.eb = b
    };
    pa(gb, ua);
    gb.prototype.toString = function() {
        return this.U
    };
    gb.prototype.Pb = function() {
        return new xa(va(this, 1))
    };
    gb.prototype.h = function(a, b) {
        return this.eb.apply(new hb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    gb.prototype.B = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var jb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = ib(a, b[d]), c instanceof sa); d++);
            return c
        },
        ib = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof gb)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.h.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.F;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        hb = function(a, b) {
            this.B = a;
            this.h = b
        },
        E = function(a, b) {
            return Ia(b) ? ib(a.h, b) : b
        },
        F = function(a) {
            return a.B.U
        };
    var kb = function() {
        ua.call(this)
    };
    pa(kb, ua);
    kb.prototype.Pb = function() {
        return new xa(va(this, 1))
    };
    var lb = {
        map: function(a) {
            for (var b = new kb, c = 0; c < arguments.length - 1; c += 2) {
                var d = E(this, arguments[c]) + "",
                    e = E(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new xa, c = 0; c < arguments.length; c++) {
                var d = E(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h,
                e = E(this, b);
            if (!(e instanceof xa)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new gb(a, function() {
                return function(g) {
                    var h = Ca(d);
                    void 0 ===
                        h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = E(this, l[n]), l[n] instanceof sa) return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new xa(l));
                    var r = jb(h, f);
                    if (r instanceof sa) return "return" === r.h ? r.B : r
                }
            }())
        },
        control: function(a, b) {
            return new sa(a, E(this, b))
        },
        undefined: function() {}
    };
    var mb = function() {
            this.D = new za;
            this.h = new Aa(this.D)
        },
        nb = function(a, b, c) {
            var d = new gb(b, c);
            d.Qb();
            a.h.set(b, d)
        },
        ob = function(a, b, c) {
            lb.hasOwnProperty(b) && nb(a, c || b, lb[b])
        };
    mb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.B(c)
    };
    mb.prototype.B = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = ib(this.h, arguments[c]);
        return b
    };
    mb.prototype.F = function(a, b) {
        var c = Ca(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = ib(c, arguments[e]);
        return d
    };

    function pb() {
        for (var a = qb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function rb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var qb, sb;

    function tb(a) {
        qb = qb || rb();
        sb = sb || pb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(qb[l], qb[n], qb[p], qb[q])
        }
        return b.join("")
    }

    function ub(a) {
        function b(l) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = sb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        qb = qb || rb();
        sb = sb || pb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var vb = {},
        wb = function(a, b) {
            vb[a] = vb[a] || [];
            vb[a][b] = !0
        },
        xb = function() {
            delete vb.GA4_EVENT
        },
        yb = function(a) {
            var b = vb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return tb(c.join("")).replace(/\.+$/, "")
        };
    var zb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var Ab, Bb = function() {
        if (void 0 === Ab) {
            var a = null,
                b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                Ab = a
            } else Ab = a
        }
        return Ab
    };
    var Db = function(a, b) {
        this.h = b === Cb ? a : ""
    };
    Db.prototype.toString = function() {
        return this.h + ""
    };
    var Eb = function(a) {
            return a instanceof Db && a.constructor === Db ? a.h : "type_error:TrustedResourceUrl"
        },
        Cb = {},
        Fb = function(a) {
            var b = a,
                c = Bb(),
                d = c ? c.createScriptURL(b) : b;
            return new Db(d, Cb)
        };
    var Gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Hb() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function Ib(a) {
        return -1 != Hb().indexOf(a)
    };

    function Jb() {
        return Ib("Firefox") || Ib("FxiOS")
    }

    function Kb() {
        return (Ib("Chrome") || Ib("CriOS")) && !Ib("Edge") || Ib("Silk")
    };
    var Lb = {},
        Mb = function(a, b) {
            this.h = b === Lb ? a : ""
        };
    Mb.prototype.toString = function() {
        return this.h.toString()
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Nb = {};
    var Ob = function() {},
        Pb = function(a) {
            this.h = a
        };
    pa(Pb, Ob);
    Pb.prototype.toString = function() {
        return this.h
    };

    function Qb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("");
            if ("style" === a.tagName.toLowerCase()) throw Error("");
        }
        a.innerHTML = b instanceof Mb && b.constructor === Mb ? b.h : "type_error:SafeHtml"
    }

    function Rb(a, b) {
        var c = [new Pb(Sb[0].toLowerCase(), Nb)];
        if (0 === c.length) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Pb) g = f.h;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };

    function Tb(a) {
        var b = a = Ub(a),
            c = Bb(),
            d = c ? c.createHTML(b) : b;
        return new Mb(d, Lb)
    }

    function Ub(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var Vb = {},
        z = window,
        I = document,
        Wb = navigator,
        Xb = I.currentScript && I.currentScript.src,
        Yb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Zb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        $b = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        ac = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function bc(a, b, c) {
        b && m(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var cc = function(a, b, c, d, e) {
            var f = I.createElement("script");
            bc(f, d, $b);
            f.type = "text/javascript";
            f.async = !0;
            var g;
            g = Fb(Ub(a));
            f.src = Eb(g);
            var h, l, n, p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
            (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
            Zb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = I.getElementsByTagName("script")[0] || I.body || I.head;
                q.parentNode.insertBefore(f, q)
            }
            return f
        },
        dc = function() {
            if (Xb) {
                var a =
                    Xb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        ec = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                h = !1;
            g || (g = I.createElement("iframe"), h = !0);
            bc(g, c, ac);
            d && m(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (h) {
                var l = I.body && I.body.lastChild || I.body || I.head;
                l.parentNode.insertBefore(g, l)
            }
            Zb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        fc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload =
                function() {
                    d.onload = null;
                    b && b()
                };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        gc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        hc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        J = function(a) {
            z.setTimeout(a, 0)
        },
        ic = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        jc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,
                ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        kc = function(a) {
            var b = I.createElement("div");
            Qb(b, Tb("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        lc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        mc = function(a) {
            var b;
            try {
                b = Wb.sendBeacon && Wb.sendBeacon(a)
            } catch (c) {
                wb("TAGGING", 15)
            }
            b || fc(a)
        },
        nc = function(a,
            b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        oc = function() {
            var a = z.performance;
            if (a && Ea(a.now)) return a.now()
        },
        pc = function() {
            return z.performance || void 0
        };
    var qc = function(a, b) {
            return E(this, a) && E(this, b)
        },
        rc = function(a, b) {
            return E(this, a) === E(this, b)
        },
        sc = function(a, b) {
            return E(this, a) || E(this, b)
        },
        tc = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        uc = function(a, b) {
            a = String(E(this, a));
            b = String(E(this, b));
            return a.substring(0, b.length) === b
        },
        vc = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof kb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var yc = function() {
        this.h = new mb;
        wc(this)
    };
    yc.prototype.execute = function(a) {
        return this.h.B(a)
    };
    var wc = function(a) {
        ob(a.h, "map");
        var b = function(c, d) {
            nb(a.h, c, d)
        };
        b("and", qc);
        b("contains", tc);
        b("equals", rc);
        b("or", sc);
        b("startsWith", uc);
        b("variable", vc)
    };
    var zc = function(a) {
        if (a instanceof zc) return a;
        this.Qa = a
    };
    zc.prototype.toString = function() {
        return String(this.Qa)
    };
    var Bc = function(a) {
        ua.call(this);
        this.h = a;
        this.set("then", Ac(this));
        this.set("catch", Ac(this, !0));
        this.set("finally", Ac(this, !1, !0))
    };
    pa(Bc, kb);
    var Ac = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new gb("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof gb || (d = void 0);
            e instanceof gb || (e = void 0);
            var f = Ca(this.h),
                g = function(l) {
                    return function(n) {
                        return c ? (l.h(f), a.h) : l.h(f, n)
                    }
                },
                h = a.h.then(d && g(d), e && g(e));
            return new Bc(h)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Cc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Dc = function(a) {
            if (null == a) return String(a);
            var b = Cc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ec = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Fc = function(a) {
            if (!a || "object" != Dc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ec(a, "constructor") && !Ec(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ec(a, b)
        },
        K = function(a, b) {
            var c = b || ("array" == Dc(a) ? [] : {}),
                d;
            for (d in a)
                if (Ec(a, d)) {
                    var e = a[d];
                    "array" == Dc(e) ? ("array" != Dc(c[d]) && (c[d] = []), c[d] = K(e, c[d])) : Fc(e) ? (Fc(c[d]) || (c[d] = {}), c[d] = K(e, c[d])) : c[d] = e
                }
            return c
        };
    var Hc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n = va(h, 1), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var l = d.indexOf(h);
                    if (-1 < l) return e[l];
                    if (h instanceof xa) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Pb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof Bc) return h.h;
                    if (h instanceof kb) {
                        var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    if (h instanceof gb) {
                        var u = function() {
                            for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Gc(v[w],
                                b, c);
                            var y = new Aa(b ? b.U : new za);
                            b && (y.h = b.h);
                            return g(h.h.apply(h, [y].concat(v)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (h instanceof zc && t) return h.Qa;
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        Gc = function(a,
            b, c) {
            var d = [],
                e = [],
                f = function(h, l) {
                    for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]))
                },
                g = function(h) {
                    var l = d.indexOf(h);
                    if (-1 < l) return e[l];
                    if (Ia(h) || Oa(h)) {
                        var n = new xa([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (Fc(h)) {
                        var q = new kb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var r = new gb("", function(x) {
                            for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = Hc(E(this, A[B]), b, c);
                            return g((0, this.h.N)(h, h, A))
                        });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    var w = typeof h;
                    if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
                    var y = !1;
                    switch (c) {
                        case 1:
                            y = !0;
                            break;
                        case 2:
                            y = !1;
                            break;
                        default:
                    }
                    if (void 0 !== h && y) return new zc(h)
                };
            return g(a)
        };
    var Ic = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        Jc = function(a) {
            if (void 0 === a || Ia(a) || Fc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var Kc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof xa)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new xa(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new xa(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new xa(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Ic(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new xa(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Ic(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Lc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Mc = new sa("break"),
        Nc = new sa("continue"),
        Oc = function(a, b) {
            return E(this, a) + E(this, b)
        },
        Pc = function(a, b) {
            return E(this, a) && E(this, b)
        },
        Qc = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            if (!(c instanceof xa)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = Hc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= Lc.indexOf(b)) {
                    var f = Hc(c);
                    return Gc(a[b].apply(a, f), this.h)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof xa) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof gb) {
                        var h = Ic(c);
                        h.unshift(this.h);
                        return g.h.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Kc.supportedMethods.indexOf(b)) {
                    var l = Ic(c);
                    l.unshift(this.h);
                    return Kc[b].apply(a, l)
                }
            }
            if (a instanceof gb || a instanceof kb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof gb) {
                        var p = Ic(c);
                        p.unshift(this.h);
                        return n.h.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof gb ? a.U : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, Ic(c))
            }
            if (a instanceof zc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Rc = function(a, b) {
            a = E(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = E(this, b);
            c.set(a, d);
            return d
        },
        Sc = function(a) {
            var b = Ca(this.h),
                c = jb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof sa) return c
        },
        Tc = function() {
            return Mc
        },
        Uc = function(a) {
            for (var b = E(this, a), c = 0; c < b.length; c++) {
                var d = E(this, b[c]);
                if (d instanceof sa) return d
            }
        },
        Vc = function(a) {
            for (var b =
                    this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = E(this, arguments[c + 1]);
                    Ba(b, d, e, !0)
                }
            }
        },
        Wc = function() {
            return Nc
        },
        Xc = function(a, b, c) {
            var d = new xa;
            b = E(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, E(this, f))
        },
        Yc = function(a, b) {
            return E(this, a) / E(this, b)
        },
        Zc = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            var c = a instanceof zc,
                d = b instanceof zc;
            return c || d ? c && d ? a.Qa == b.Qa : !1 : a ==
                b
        },
        $c = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = E(this, arguments[c]);
            return b
        };

    function ad(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = jb(f, d);
            if (g instanceof sa) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function bd(a, b, c) {
        if ("string" === typeof b) return ad(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof kb || b instanceof xa || b instanceof gb) {
            var d = b.Pb(),
                e = d.length();
            return ad(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var cd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return bd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        dd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return bd(function(e) {
                var f = Ca(d);
                Ba(f, a, e, !0);
                return f
            }, b, c)
        },
        ed = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return bd(function(e) {
                var f = Ca(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        gd = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return fd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        hd =
        function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return fd(function(e) {
                var f = Ca(d);
                Ba(f, a, e, !0);
                return f
            }, b, c)
        },
        id = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            var d = this.h;
            return fd(function(e) {
                var f = Ca(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function fd(a, b, c) {
        if ("string" === typeof b) return ad(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof xa) return ad(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var jd = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var u = f.get(r);
                    q.add(u, p.get(u))
                }
            }
            var f = E(this, a);
            if (!(f instanceof xa)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = E(this, d);
            var h = Ca(g);
            for (e(g, h); ib(h, b);) {
                var l = jb(h, d);
                if (l instanceof sa) {
                    if ("break" === l.h) break;
                    if ("return" === l.h) return l
                }
                var n = Ca(g);
                e(h, n);
                ib(n, c);
                h = n
            }
        },
        kd = function(a) {
            a = E(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        ld = function(a, b) {
            var c;
            a = E(this, a);
            b = E(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof kb || a instanceof xa || a instanceof gb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : ta(b) && (c = a[b]);
            else if (a instanceof zc) return;
            return c
        },
        md = function(a, b) {
            return E(this, a) > E(this,
                b)
        },
        nd = function(a, b) {
            return E(this, a) >= E(this, b)
        },
        od = function(a, b) {
            a = E(this, a);
            b = E(this, b);
            a instanceof zc && (a = a.Qa);
            b instanceof zc && (b = b.Qa);
            return a === b
        },
        pd = function(a, b) {
            return !od.call(this, a, b)
        },
        qd = function(a, b, c) {
            var d = [];
            E(this, a) ? d = E(this, b) : c && (d = E(this, c));
            var e = jb(this.h, d);
            if (e instanceof sa) return e
        },
        rd = function(a, b) {
            return E(this, a) < E(this, b)
        },
        sd = function(a, b) {
            return E(this, a) <= E(this, b)
        },
        td = function(a, b) {
            return E(this, a) % E(this, b)
        },
        ud = function(a, b) {
            return E(this, a) * E(this, b)
        },
        vd = function(a) {
            return -E(this,
                a)
        },
        wd = function(a) {
            return !E(this, a)
        },
        xd = function(a, b) {
            return !Zc.call(this, a, b)
        },
        yd = function() {
            return null
        },
        zd = function(a, b) {
            return E(this, a) || E(this, b)
        },
        Ad = function(a, b) {
            var c = E(this, a);
            E(this, b);
            return c
        },
        Bd = function(a) {
            return E(this, a)
        },
        Cd = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        Dd = function(a) {
            return new sa("return", E(this, a))
        },
        Ed = function(a, b, c) {
            a = E(this, a);
            b = E(this, b);
            c = E(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof gb || a instanceof xa || a instanceof kb) && a.set(b, c);
            return c
        },
        Fd = function(a, b) {
            return E(this, a) - E(this, b)
        },
        Gd = function(a, b, c) {
            a = E(this, a);
            var d = E(this, b),
                e = E(this, c);
            if (!Ia(d) || !Ia(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === E(this, d[h]))
                    if (f = E(this, e[h]), f instanceof sa) {
                        var l = f.h;
                        if ("break" === l) return;
                        if ("return" === l || "continue" === l) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = E(this, e[e.length - 1]), f instanceof sa && ("return" === f.h || "continue" ===
                    f.h))) return f
        },
        Hd = function(a, b, c) {
            return E(this, a) ? E(this, b) : E(this, c)
        },
        Id = function(a) {
            a = E(this, a);
            return a instanceof gb ? "function" : typeof a
        },
        Jd = function(a) {
            for (var b = this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        Kd = function(a, b, c, d) {
            var e = E(this, d);
            if (E(this, c)) {
                var f = jb(this.h, e);
                if (f instanceof sa) {
                    if ("break" === f.h) return;
                    if ("return" === f.h) return f
                }
            }
            for (; E(this, a);) {
                var g = jb(this.h, e);
                if (g instanceof sa) {
                    if ("break" === g.h) break;
                    if ("return" === g.h) return g
                }
                E(this,
                    b)
            }
        },
        Od = function(a) {
            return ~Number(E(this, a))
        },
        Pd = function(a, b) {
            return Number(E(this, a)) << Number(E(this, b))
        },
        Qd = function(a, b) {
            return Number(E(this, a)) >> Number(E(this, b))
        },
        Rd = function(a, b) {
            return Number(E(this, a)) >>> Number(E(this, b))
        },
        Sd = function(a, b) {
            return Number(E(this, a)) & Number(E(this, b))
        },
        Td = function(a, b) {
            return Number(E(this, a)) ^ Number(E(this, b))
        },
        Ud = function(a, b) {
            return Number(E(this, a)) | Number(E(this, b))
        };
    var Wd = function() {
        this.h = new mb;
        Vd(this)
    };
    Wd.prototype.execute = function(a) {
        return Xd(this.h.B(a))
    };
    var Yd = function(a, b, c) {
            return Xd(a.h.F(b, c))
        },
        Vd = function(a) {
            var b = function(d, e) {
                ob(a.h, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                nb(a.h, String(d), e)
            };
            c(0, Oc);
            c(1, Pc);
            c(2, Qc);
            c(3, Rc);
            c(53, Sc);
            c(4, Tc);
            c(5, Uc);
            c(52, Vc);
            c(6, Wc);
            c(9, Uc);
            c(50, Xc);
            c(10, Yc);
            c(12, Zc);
            c(13, $c);
            c(47, cd);
            c(54, dd);
            c(55, ed);
            c(63, jd);
            c(64, gd);
            c(65, hd);
            c(66, id);
            c(15, kd);
            c(16, ld);
            c(17, ld);
            c(18, md);
            c(19, nd);
            c(20, od);
            c(21, pd);
            c(22, qd);
            c(23, rd);
            c(24, sd);
            c(25, td);
            c(26, ud);
            c(27,
                vd);
            c(28, wd);
            c(29, xd);
            c(45, yd);
            c(30, zd);
            c(32, Ad);
            c(33, Ad);
            c(34, Bd);
            c(35, Bd);
            c(46, Cd);
            c(36, Dd);
            c(43, Ed);
            c(37, Fd);
            c(38, Gd);
            c(39, Hd);
            c(40, Id);
            c(41, Jd);
            c(42, Kd);
            c(58, Od);
            c(57, Pd);
            c(60, Qd);
            c(61, Rd);
            c(56, Sd);
            c(62, Td);
            c(59, Ud)
        };

    function Xd(a) {
        if (a instanceof sa || a instanceof gb || a instanceof xa || a instanceof kb || a instanceof zc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var Zd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Ki: a("consent"),
            Dg: a("convert_case_to"),
            Eg: a("convert_false_to"),
            Fg: a("convert_null_to"),
            Gg: a("convert_true_to"),
            Hg: a("convert_undefined_to"),
            xl: a("debug_mode_metadata"),
            Wa: a("function"),
            Bf: a("instance_name"),
            zj: a("live_only"),
            Aj: a("malware_disabled"),
            Bj: a("metadata"),
            Ej: a("original_activity_id"),
            Bl: a("original_vendor_template_id"),
            Al: a("once_on_load"),
            Dj: a("once_per_event"),
            Hh: a("once_per_load"),
            Dl: a("priority_override"),
            El: a("respected_consent_types"),
            Lh: a("setup_tags"),
            Bb: a("tag_id"),
            Qh: a("teardown_tags")
        }
    }();
    var $d = [],
        ae = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        be = function(a) {
            return ae[a]
        },
        ce = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var ge = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        he = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        ie = function(a) {
            return he[a]
        };
    $d[7] = function(a) {
        return String(a).replace(ge, ie)
    };
    $d[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(ge, ie) + "'"
        }
    };
    var oe = /['()]/g,
        pe = function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        };
    $d[12] = function(a) {
        var b =
            encodeURIComponent(String(a));
        oe.lastIndex = 0;
        return oe.test(b) ? b.replace(oe, pe) : b
    };
    var qe = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        re = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        se = function(a) {
            return re[a]
        };
    $d[16] = function(a) {
        return a
    };
    var ue;
    var ve = [],
        we = [],
        xe = [],
        ye = [],
        ze = [],
        Ae = {},
        Be, Ce, Ee = function() {
            var a = De;
            Ce = Ce || a
        },
        Ge, He = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        Ie = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Ae[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Vh && d.Vh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.Uh && (f.vtp_gtmCachedValues = d.Uh);
            if (b) {
                if (null ==
                    b.name) {
                    var h;
                    a: {
                        var l = b.index;
                        if (null == l) h = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = ve[l];
                                    break;
                                case 1:
                                    n = ye[l];
                                    break;
                                default:
                                    h = "";
                                    break a
                            }
                            var p = n && n[Zd.Bf];
                            h = p ? String(p) : ""
                        }
                    }
                    b.name = h
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : ue(c, f, b)
        },
        Ke = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Je(a[e], b, c));
            return d
        },
        Je = function(a, b, c) {
            if (Ia(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Je(a[e],
                            b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ve[f];
                        if (!g || b.Yf(g)) return;
                        c[f] = !0;
                        var h = String(g[Zd.Bf]);
                        try {
                            var l = Ke(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                            d = Ie(l, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            Ge && (d = Ge.Rj(d, l))
                        } catch (x) {
                            b.hi && b.hi(x, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Je(a[n], b, c)] = Je(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Je(a[q], b, c);
                            Ce && (p = p || r === Ce.te);
                            d.push(r)
                        }
                        return Ce && p ? Ce.Tj(d) : d.join("");
                    case "escape":
                        d = Je(a[1], b, c);
                        if (Ce && Ia(a[1]) && "macro" === a[1][0] && Ce.vk(a)) return Ce.Ok(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) $d[a[u]] && (d = $d[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!ye[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = {
                            ai: a[2],
                            index: t
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Le(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        Le = function(a, b, c) {
            try {
                return Be(Ke(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Me = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.B = a;
        this.h = c
    };
    pa(Me, Error);

    function Ne(a, b) {
        if (Ia(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Ne(a[c], b[c])
        }
    };
    var Oe = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Kk = a;
        this.B = b;
        this.h = []
    };
    pa(Oe, Error);
    var Qe = function() {
        return function(a, b) {
            a instanceof Oe || (a = new Oe(a, Pe));
            b && a.h.push(b);
            throw a;
        }
    };

    function Pe(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var Te = function(a) {
            function b(r) {
                for (var u = 0; u < r.length; u++) d[r[u]] = !0
            }
            for (var c = [], d = [], e = Re(a), f = 0; f < we.length; f++) {
                var g = we[f],
                    h = Se(g, e);
                if (h) {
                    for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < ye.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Se = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Re = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Le(xe[c], a));
                return b[c]
            }
        };
    var Ue = {
        Rj: function(a, b) {
            b[Zd.Dg] && "string" === typeof a && (a = 1 == b[Zd.Dg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Zd.Fg) && null === a && (a = b[Zd.Fg]);
            b.hasOwnProperty(Zd.Hg) && void 0 === a && (a = b[Zd.Hg]);
            b.hasOwnProperty(Zd.Gg) && !0 === a && (a = b[Zd.Gg]);
            b.hasOwnProperty(Zd.Eg) && !1 === a && (a = b[Zd.Eg]);
            return a
        }
    };
    var Ve = function() {
        this.h = {}
    };

    function We(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new Me(c, d, g);
            }
    }

    function Xe(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    We(e, b, d, g);
                    We(f, b, d, g)
                }
            }
        }
    };
    var $e = function() {
            var a = data.permissions || {},
                b = L.H,
                c = this;
            this.B = new Ve;
            this.h = {};
            var d = {},
                e = Xe(this.B, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            m(a, function(f, g) {
                var h = {};
                m(g, function(l, n) {
                    var p = Ye(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.ba)
                });
                c.h[f] = function(l, n) {
                    var p = h[l];
                    if (!p) throw Ze(l, {}, "The requested permission " + l + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        bf =
        function(a) {
            return af.h[a] || function() {}
        };

    function Ye(a, b) {
        var c = He(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ze;
        try {
            return Ie(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Me(e, {}, "Permission " + e + " is unknown.");
                },
                ba: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Ze(a, b, c) {
        return new Me(a, b, c)
    };
    var cf = !1;
    var df = {};
    df.vl = Qa('');
    df.Wj = Qa('');
    var ef = cf,
        ff = df.Wj,
        gf = df.vl;
    var vf = /^[a-z$_][\w$]*$/i,
        wf = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i,
        xf = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!wf.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = -1 !== f && f === e.length - 2,
                    h = g ? e.slice(0, e.length - 2) : e,
                    l;
                a: if (0 === d.length) l = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!vf.exec(n[p])) {
                                l = !1;
                                break a
                            }
                        l = !0
                    }
                if (!l || h.length > d.length || !g && d.length != e.length ? 0 : g ? 0 === d.indexOf(h) && (d === h || "." == d.charAt(h.length)) : d === h) return !0
            }
            return !1
        };

    var yf = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        zf = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            yf(b, "/*") && (b = b.slice(0, -2));
            yf(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        Af = /^[a-z0-9-]+$/i,
        Bf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        Df = function(a, b) {
            var c;
            if (!(c = !Cf(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!Af.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var l = a,
                    n = b[g];
                if (!Bf.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var u = l.hostname,
                    t = q;
                if (0 !== t.indexOf("*.")) r = u.toLowerCase() === t.toLowerCase();
                else {
                    t = t.slice(2);
                    var v = u.toLowerCase().indexOf(t.toLowerCase());
                    r = -1 === v ? !1 : u.length === t.length ?
                        !0 : u.length !== t.length + v ? !1 : "." === u[v - 1]
                }
                if (r) {
                    var w = p.slice(p.indexOf("/"));
                    h = zf(l.pathname + l.search, w) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        Cf = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var Ef = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Ff(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var Gf = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        Hf = {
            Fn: "function",
            DustMap: "Object",
            List: "Array"
        },
        M = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Gf.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d];
                if (null == l) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof l;
                    l instanceof gb ? n = "Fn" : l instanceof xa ? n = "List" : l instanceof kb ? n = "DustMap" : l instanceof zc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Hf[n] || n) + ", which does not match required type " + (Hf[h] || h) + ".");
                }
            }
        };

    function If(a) {
        return "" + a
    }

    function Jf(a, b) {
        var c = [];
        return c
    };
    var Kf = function(a, b) {
            var c = new gb(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = E(this, d[e]);
                return b.apply(this, d)
            });
            c.Qb();
            return c
        },
        Lf = function(a, b) {
            var c = new kb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ea(e) ? c.set(d, Kf(a + "_" + d, e)) : (Ga(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Qb();
            return c
        };
    var Mf = function(a, b) {
        M(F(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new kb;
        return d = Lf("AssertApiSubject", c)
    };
    var Nf = function(a, b) {
        M(F(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof Bc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new kb;
        return d = Lf("AssertThatSubject", c)
    };

    function Of(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Hc(arguments[d], c));
            return Gc(a.apply(null, b))
        }
    }
    var Sf = function() {
        for (var a = Math, b = Rf, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Of(a[e].bind(a)))
        }
        return c
    };
    var Tf = function(a) {
        var b;
        return b
    };
    var Uf = function(a) {
        var b;
        return b
    };
    var Vf = function(a) {
        return encodeURI(a)
    };
    var Wf = function(a) {
        return encodeURIComponent(a)
    };
    var Xf = function(a) {
        M(F(this), ["message:?string"], arguments);
    };
    var Yf = function(a, b) {
        M(F(this), ["min:!number", "max:!number"], arguments);
        return La(a, b)
    };
    var O = function(a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        d.Pj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Zf = function() {
        O(this, "read_container_data");
        var a = new kb;
        a.set("containerId", 'GTM-W5FKZ2N');
        a.set("version", '271');
        a.set("environmentName", '');
        a.set("debugMode", ef);
        a.set("previewMode", gf);
        a.set("environmentMode", ff);
        a.Qb();
        return a
    };
    var $f = function() {
        return (new Date).getTime()
    };
    var ag = function(a) {
        if (null === a) return "null";
        if (a instanceof xa) return "array";
        if (a instanceof gb) return "function";
        if (a instanceof zc) {
            a = a.Qa;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var bg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (ef || gf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Gc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Hc(c))
            })
        }
    };
    var cg = function(a) {
        return Pa(Hc(a, this.h))
    };
    var dg = function(a) {
        return Number(Hc(a, this.h))
    };
    var eg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var fg = function(a, b, c) {
        var d = null,
            e = !1;
        M(F(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new kb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof kb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Rf = "floor ceil round max min abs pow sqrt".split(" ");
    var gg = function() {
            var a = {};
            return {
                ik: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                kl: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        hg = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return gb.prototype.h.apply(a, c)
            }
        },
        ig = function(a, b) {
            M(F(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var jg = {};
    var kg = function(a) {
        var b = new kb;
        if (a instanceof xa)
            for (var c = a.Pb(), d = 0; d < c.length(); d++) {
                var e = c.get(d);
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof gb)
                for (var f = va(a, 1), g = 0; g < f.length; g++) {
                    var h = f[g];
                    b.set(h, a.get(h))
                } else
                    for (var l = 0; l < a.length; l++) b.set(l, a[l]);
        return b
    };
    jg.keys = function(a) {
        M(F(this), ["input:!*"], arguments);
        if (a instanceof xa || a instanceof gb || "string" === typeof a) a = kg(a);
        if (a instanceof kb) return a.Pb();
        return new xa
    };
    jg.values = function(a) {
        M(F(this), ["input:!*"], arguments);
        if (a instanceof xa || a instanceof gb || "string" === typeof a) a = kg(a);
        if (a instanceof kb) return new xa(va(a, 2));
        return new xa
    };
    jg.entries = function(a) {
        M(F(this), ["input:!*"], arguments);
        if (a instanceof xa || a instanceof gb || "string" === typeof a) a = kg(a);
        if (a instanceof kb) {
            for (var b = va(a, 3), c = new xa, d = 0; d < b.length; d++) {
                var e = new xa(b[d]);
                c.push(e)
            }
            return c
        }
        return new xa
    };
    jg.freeze = function(a) {
        (a instanceof kb || a instanceof xa || a instanceof gb) && a.Qb();
        return a
    };
    jg.delete = function(a, b) {
        if (a instanceof kb && !a.Ie()) return wa(a, b), !0;
        return !1
    };
    var lg = function() {
        this.h = {};
        this.B = {};
    };
    lg.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    lg.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ea(b) ? Kf(a, b) : Lf(a, b)
    };

    function mg(a, b) {
        var c = void 0;
        return c
    };

    function ng() {
        var a = {};
        return a
    };
    var pg = function(a) {
            return og ? I.querySelectorAll(a) : null
        },
        qg = function(a, b) {
            if (!og) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        rg = !1;
    if (I.querySelectorAll) try {
        var sg = I.querySelectorAll(":root");
        sg && 1 == sg.length && sg[0] == I.documentElement && (rg = !0)
    } catch (a) {}
    var og = rg;
    var S = function(a) {
        wb("GTM", a)
    };
    var tg = function(a) {
            return null == a ? "" : k(a) ? Sa(String(a)) : "e0"
        },
        vg = function(a) {
            return a.replace(ug, "")
        },
        xg = function(a) {
            return wg(a.replace(/\s/g, ""))
        },
        wg = function(a) {
            return Sa(a.replace(yg, "").toLowerCase())
        },
        Ag = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return zg.test(a) ? a : "e0"
        },
        Cg = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (Bg.test(c)) return c
            }
            return "e0"
        },
        Fg = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== Dg.indexOf(c.name) ? Eg(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        Eg = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) {
                if (Gg.test(a)) return Promise.resolve(a);
                try {
                    var b = Hg(a);
                    return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        Hg = function(a) {
            var b;
            if (z.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        yg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Bg = /^\S+@\S+\.\S+$/,
        zg = /^\+\d{10,15}$/,
        ug = /[.~]/g,
        Ig = /^[0-9A-Za-z_-]{43}$/,
        Gg = /^[0-9A-Fa-f]{64}$/,
        Jg = {},
        Kg = (Jg.email = "em", Jg.phone_number = "pn", Jg.first_name = "fn", Jg.last_name = "ln", Jg.street = "sa", Jg.city = "ct", Jg.region = "rg", Jg.country = "co", Jg.postal_code = "pc", Jg.error_code = "ec", Jg),
        Lg = {},
        Mg = (Lg.email = "sha256_email_address", Lg.phone_number = "sha256_phone_number", Lg.first_name = "sha256_first_name", Lg.last_name =
            "sha256_last_name", Lg.street = "sha256_street", Lg),
        Ng = function(a, b) {
            function c(u, t, v, w) {
                var y = tg(u);
                "" !== y && (Gg.test(y) ? l.push({
                    name: t,
                    value: y,
                    index: w
                }) : l.push({
                    name: t,
                    value: v(y),
                    index: w
                }))
            }

            function d(u, t) {
                var v = u;
                if (k(v) || Ia(v)) {
                    v = Ia(u) ? u : [u];
                    for (var w = 0; w < v.length; ++w) {
                        var y = tg(v[w]),
                            x = Gg.test(y);
                        t && !x && S(89);
                        !t && x && S(88)
                    }
                }
            }

            function e(u, t) {
                var v = u[t];
                d(v, !1);
                var w = Mg[t];
                u.hasOwnProperty(w) && (u.hasOwnProperty(t) && S(90), v = u[w], d(v, !0));
                return v
            }

            function f(u, t, v) {
                var w = e(u, t);
                w = Ia(w) ? w : [w];
                for (var y =
                        0; y < w.length; ++y) c(w[y], t, v)
            }

            function g(u, t, v, w) {
                var y = e(u, t);
                c(y, t, v, w)
            }

            function h(u) {
                return function(t) {
                    S(64);
                    return u(t)
                }
            }
            var l = [];
            if ("https:" === z.location.protocol) {
                f(a, "email", Cg);
                f(a, "phone_number", Ag);
                f(a, "first_name", h(xg));
                f(a, "last_name", h(xg));
                var n = a.home_address || {};
                f(n, "street", h(wg));
                f(n, "city", h(wg));
                f(n, "postal_code", h(vg));
                f(n, "region", h(wg));
                f(n, "country", h(vg));
                var p = a.address || {};
                p = Ia(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", xg, q);
                    g(r, "last_name", xg, q);
                    g(r, "street", wg, q);
                    g(r, "city", wg, q);
                    g(r, "postal_code", vg, q);
                    g(r, "region", wg, q);
                    g(r, "country", vg, q)
                }
                Fg(l, b)
            } else l.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(l)
        },
        Og = function(a, b) {
            Ng(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        l = c[f].index,
                        n = Kg[g];
                    n && h && (-1 === Dg.indexOf(g) || /^e\d+$/.test(h) || Ig.test(h) || Gg.test(h)) && (void 0 !== l && (n += l), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Pg = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    Og(a,
                        function(c, d) {
                            b({
                                kg: c,
                                Nk: d
                            })
                        })
                })
            } catch (b) {}
        },
        Dg = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var T = {
            g: {
                K: "ad_storage",
                W: "analytics_storage",
                Se: "region",
                zg: "consent_updated",
                Te: "wait_for_update",
                Oi: "app_remove",
                Pi: "app_store_refund",
                Qi: "app_store_subscription_cancel",
                Ri: "app_store_subscription_convert",
                Si: "app_store_subscription_renew",
                Ig: "add_payment_info",
                Jg: "add_shipping_info",
                Hc: "add_to_cart",
                Ic: "remove_from_cart",
                Kg: "view_cart",
                Yb: "begin_checkout",
                Jc: "select_item",
                Gb: "view_item_list",
                Zb: "select_promotion",
                Hb: "view_promotion",
                Ha: "purchase",
                Kc: "refund",
                Ia: "view_item",
                Lg: "add_to_wishlist",
                Ti: "first_open",
                Ui: "first_visit",
                Ea: "gtag.config",
                Ja: "gtag.get",
                Vi: "in_app_purchase",
                Lc: "page_view",
                Wi: "session_start",
                We: "user_engagement",
                ac: "gclid",
                na: "ads_data_redaction",
                da: "allow_ad_personalization_signals",
                Xe: "allow_custom_scripts",
                Xi: "allow_display_features",
                Nd: "allow_enhanced_conversions",
                Ib: "allow_google_signals",
                Fa: "allow_interest_groups",
                Od: "auid",
                Yi: "auto_detection_enabled",
                Jb: "aw_remarketing",
                Ye: "aw_remarketing_only",
                Pd: "discount",
                Qd: "aw_feed_country",
                Rd: "aw_feed_language",
                ja: "items",
                Sd: "aw_merchant_id",
                Mg: "aw_basket_type",
                Td: "campaign_content",
                Ud: "campaign_id",
                Vd: "campaign_medium",
                Wd: "campaign_name",
                Mc: "campaign",
                Xd: "campaign_source",
                Yd: "campaign_term",
                ub: "client_id",
                Zi: "content_group",
                aj: "content_type",
                Ka: "conversion_cookie_prefix",
                Nc: "conversion_id",
                xa: "conversion_linker",
                Oc: "conversion_api",
                vb: "cookie_domain",
                Ra: "cookie_expires",
                wb: "cookie_flags",
                Pc: "cookie_name",
                Ze: "cookie_path",
                ib: "cookie_prefix",
                bc: "cookie_update",
                Qc: "country",
                sa: "currency",
                Zd: "customer_lifetime_value",
                Rc: "custom_map",
                bj: "debug_mode",
                fa: "developer_id",
                cj: "disable_merchant_reported_purchases",
                dj: "dc_custom_params",
                ej: "dc_natural_search",
                af: "dynamic_event_settings",
                fj: "affiliation",
                Ng: "checkout_option",
                Og: "checkout_step",
                gj: "coupon",
                bf: "item_list_name",
                cf: "list_name",
                ij: "promotions",
                ae: "shipping",
                Pg: "tax",
                be: "engagement_time_msec",
                Sc: "enhanced_client_id",
                Tc: "enhanced_conversions",
                Qg: "enhanced_conversions_automatic_settings",
                ce: "estimated_delivery_date",
                df: "euid_logged_in_state",
                cc: "event_callback",
                fc: "event_developer_id_string",
                Rg: "event",
                de: "event_settings",
                ee: "event_timeout",
                jj: "experiments",
                ef: "firebase_id",
                fe: "first_party_collection",
                he: "_x_20",
                Kb: "_x_19",
                Sg: "fledge",
                Tg: "flight_error_code",
                Ug: "flight_error_message",
                Vg: "gac_gclid",
                ie: "gac_wbraid",
                Wg: "gac_wbraid_multiple_conversions",
                ff: "ga_restrict_domain",
                hf: "ga_temp_client_id",
                Xg: "gdpr_applies",
                Yg: "geo_granularity",
                xb: "value_callback",
                jb: "value_key",
                yl: "google_ono",
                kb: "google_signals",
                Uc: "google_tld",
                je: "groups",
                Zg: "gsa_experiment_id",
                ah: "iframe_state",
                ke: "ignore_referrer",
                jf: "internal_traffic_results",
                me: "is_legacy_loaded",
                bh: "is_passthrough",
                Sa: "language",
                kf: "legacy_developer_id_string",
                ya: "linker",
                ic: "accept_incoming",
                Lb: "decorate_forms",
                V: "domains",
                jc: "url_position",
                dh: "method",
                Vc: "new_customer",
                eh: "non_interaction",
                kj: "optimize_id",
                ne: "page_path",
                Ua: "page_referrer",
                kc: "page_title",
                fh: "passengers",
                gh: "phone_conversion_callback",
                lj: "phone_conversion_country_code",
                hh: "phone_conversion_css_class",
                mj: "phone_conversion_ids",
                ih: "phone_conversion_number",
                jh: "phone_conversion_options",
                kh: "quantity",
                Wc: "redact_device_info",
                lf: "redact_enhanced_user_id",
                nj: "redact_ga_client_id",
                oj: "redact_user_id",
                oe: "referral_exclusion_definition",
                Mb: "restricted_data_processing",
                pj: "retoken",
                lh: "screen_name",
                Nb: "screen_resolution",
                qj: "search_term",
                La: "send_page_view",
                Ob: "send_to",
                Xc: "session_duration",
                pe: "session_engaged",
                nf: "session_engaged_time",
                yb: "session_id",
                qe: "session_number",
                Yc: "delivery_postal_code",
                nh: "temporary_client_id",
                rj: "tracking_id",
                pf: "traffic_type",
                Va: "transaction_id",
                za: "transport_url",
                oh: "trip_type",
                Zc: "update",
                zb: "url_passthrough",
                qf: "_user_agent_architecture",
                rf: "_user_agent_bitness",
                sf: "_user_agent_full_version_list",
                tf: "_user_agent_mobile",
                uf: "_user_agent_model",
                vf: "_user_agent_platform",
                wf: "_user_agent_platform_version",
                ph: "_user_agent_wait",
                xf: "_user_agent_wow64",
                va: "user_data",
                qh: "user_data_auto_latency",
                rh: "user_data_auto_meta",
                sh: "user_data_auto_multi",
                th: "user_data_auto_selectors",
                uh: "user_data_auto_status",
                vh: "user_data_mode",
                yf: "user_data_settings",
                Aa: "user_id",
                Ma: "user_properties",
                wh: "us_privacy_string",
                qa: "value",
                se: "wbraid",
                xh: "wbraid_multiple_conversions",
                Dh: "_host_name",
                Eh: "_in_page_command",
                Fh: "_is_passthrough_cid",
                Gh: "non_personalized_ads",
                ed: "_sst_parameters",
                hb: "conversion_label",
                Ta: "page_location",
                hc: "global_developer_id_string",
                mh: "tc_privacy_string"
            }
        },
        Qg = {},
        Rg = Object.freeze((Qg[T.g.da] = 1, Qg[T.g.Nd] = 1, Qg[T.g.Ib] = 1, Qg[T.g.ja] = 1, Qg[T.g.vb] = 1, Qg[T.g.Ra] = 1, Qg[T.g.wb] = 1, Qg[T.g.Pc] = 1, Qg[T.g.Ze] = 1, Qg[T.g.ib] = 1, Qg[T.g.bc] = 1, Qg[T.g.Rc] = 1,
            Qg[T.g.fa] = 1, Qg[T.g.af] = 1, Qg[T.g.cc] = 1, Qg[T.g.de] = 1, Qg[T.g.ee] = 1, Qg[T.g.fe] = 1, Qg[T.g.ff] = 1, Qg[T.g.kb] = 1, Qg[T.g.Uc] = 1, Qg[T.g.je] = 1, Qg[T.g.jf] = 1, Qg[T.g.me] = 1, Qg[T.g.ya] = 1, Qg[T.g.lf] = 1, Qg[T.g.oe] = 1, Qg[T.g.Mb] = 1, Qg[T.g.La] = 1, Qg[T.g.Ob] = 1, Qg[T.g.Xc] = 1, Qg[T.g.nf] = 1, Qg[T.g.Yc] = 1, Qg[T.g.za] = 1, Qg[T.g.Zc] = 1, Qg[T.g.yf] = 1, Qg[T.g.Ma] = 1, Qg[T.g.ed] = 1, Qg));
    Object.freeze([T.g.Ta, T.g.Ua, T.g.kc, T.g.Sa, T.g.lh, T.g.Aa, T.g.ef, T.g.Zi]);
    var Sg = {},
        Tg = Object.freeze((Sg[T.g.Oi] = 1, Sg[T.g.Pi] = 1, Sg[T.g.Qi] = 1, Sg[T.g.Ri] = 1, Sg[T.g.Si] = 1, Sg[T.g.Ti] = 1, Sg[T.g.Ui] = 1, Sg[T.g.Vi] = 1, Sg[T.g.Wi] = 1, Sg[T.g.We] = 1, Sg)),
        Ug = {},
        Vg = Object.freeze((Ug[T.g.Ig] = 1, Ug[T.g.Jg] = 1, Ug[T.g.Hc] = 1, Ug[T.g.Ic] = 1, Ug[T.g.Kg] = 1, Ug[T.g.Yb] = 1, Ug[T.g.Jc] = 1, Ug[T.g.Gb] = 1, Ug[T.g.Zb] = 1, Ug[T.g.Hb] = 1, Ug[T.g.Ha] = 1, Ug[T.g.Kc] = 1, Ug[T.g.Ia] = 1, Ug[T.g.Lg] = 1, Ug)),
        Wg = Object.freeze([T.g.da, T.g.Ib, T.g.bc]),
        Xg = Object.freeze([].concat(Wg)),
        Yg = Object.freeze([T.g.Ra, T.g.ee, T.g.Xc, T.g.nf, T.g.be]),
        Zg = Object.freeze([].concat(Yg)),
        $g = {},
        ah = ($g[T.g.K] = "1", $g[T.g.W] = "2", $g),
        bh = {},
        ch = Object.freeze((bh[T.g.da] = 1, bh[T.g.Nd] = 1, bh[T.g.Fa] = 1, bh[T.g.Jb] = 1, bh[T.g.Ye] = 1, bh[T.g.Pd] = 1, bh[T.g.Qd] = 1, bh[T.g.Rd] = 1, bh[T.g.ja] = 1, bh[T.g.Sd] = 1, bh[T.g.Ka] = 1, bh[T.g.xa] = 1, bh[T.g.vb] = 1, bh[T.g.Ra] = 1, bh[T.g.wb] = 1, bh[T.g.ib] = 1, bh[T.g.sa] = 1, bh[T.g.Zd] = 1, bh[T.g.fa] = 1, bh[T.g.cj] = 1, bh[T.g.Tc] = 1, bh[T.g.ce] = 1, bh[T.g.ef] = 1, bh[T.g.fe] = 1, bh[T.g.me] = 1, bh[T.g.Sa] = 1, bh[T.g.Vc] = 1, bh[T.g.Ta] = 1, bh[T.g.Ua] = 1, bh[T.g.gh] = 1, bh[T.g.hh] = 1,
            bh[T.g.ih] = 1, bh[T.g.jh] = 1, bh[T.g.Mb] = 1, bh[T.g.La] = 1, bh[T.g.Ob] = 1, bh[T.g.Yc] = 1, bh[T.g.Va] = 1, bh[T.g.za] = 1, bh[T.g.Zc] = 1, bh[T.g.zb] = 1, bh[T.g.va] = 1, bh[T.g.Aa] = 1, bh[T.g.qa] = 1, bh));
    Object.freeze(T.g);
    var dh = {},
        eh = z.google_tag_manager = z.google_tag_manager || {},
        fh = Math.random();
    dh.oc = "3210";
    dh.dd = Number("0") || 0;
    dh.ka = "dataLayer";
    dh.Mi = "ChAIgNvtngYQ1cbujKyL49dMEiQAJh8eAW4Gqda5J68sXKuy9KwoxRAvKIx9nZb4is7x1r5oYjQaAuwj";
    var gh = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        hh = {
            __paused: !0,
            __tg: !0
        },
        ih;
    for (ih in gh) gh.hasOwnProperty(ih) && (hh[ih] = !0);
    var jh = Qa(""),
        kh, lh = !1;
    kh = lh;
    var mh, nh = !1;
    mh = nh;
    var oh, ph = !1;
    oh = ph;
    var qh, rh = !1;
    qh = rh;
    dh.Md = "www.googletagmanager.com";
    var sh = "" + dh.Md + (kh ? "/gtag/js" : "/gtm.js"),
        th = null,
        uh = null,
        vh = {},
        wh = {},
        xh = {},
        yh = function() {
            var a = eh.sequence || 1;
            eh.sequence = a + 1;
            return a
        };
    dh.Li = "";
    var zh = "";
    dh.xe = zh;
    var Ah = new Ma,
        Bh = {},
        Ch = {},
        Fh = {
            name: dh.ka,
            set: function(a, b) {
                K(cb(a, b), Bh);
                Dh()
            },
            get: function(a) {
                return Eh(a, 2)
            },
            reset: function() {
                Ah = new Ma;
                Bh = {};
                Dh()
            }
        },
        Eh = function(a, b) {
            return 2 != b ? Ah.get(a) : Gh(a)
        },
        Gh = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Bh, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Oh = function(a, b) {
            Ch.hasOwnProperty(a) || (Ah.set(a, b), K(cb(a, b), Bh), Dh())
        },
        Ph = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Eh(c, 1);
                if (Ia(d) || Fc(d)) d = K(d);
                Ch[c] = d
            }
        },
        Dh = function(a) {
            m(Ch, function(b, c) {
                Ah.set(b, c);
                K(cb(b), Bh);
                K(cb(b, c), Bh);
                a && delete Ch[b]
            })
        },
        Qh = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Gh(a) : Ah.get(a);
            "array" === Dc(d) || "object" === Dc(d) ? c = K(d) : c = d;
            return c
        };
    var Rh, Sh = !1;

    function Th() {
        Sh = !0;
        Rh = Rh || {}
    }
    var Uh = function(a) {
        Sh || Th();
        return Rh[a]
    };
    var Vh = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Wh = function(a) {
            if (I.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var Xh = function() {
            var a = I.body,
                b = I.documentElement || a && a.parentElement,
                c, d;
            if (I.compatMode && "BackCompat" !== I.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        Yh = function(a) {
            var b = Xh(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var ei = /:[0-9]+$/,
        fi = /^\d+\.fls\.doubleclick\.net$/,
        gi = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var l = h.slice(1).join("=");
                    if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        ji = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = hi(a.protocol) || hi(z.location.protocol);
            "port" === b ? a.port =
                String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(ei, "").toLowerCase());
            return ii(a, b, c, d, e)
        },
        ii = function(a, b, c, d, e) {
            var f, g = hi(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ki(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ei, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f =
                        String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || wb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = gi(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        hi = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ki = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        li = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || wb("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(ei, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        mi = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n :
                    p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = li(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        },
        ni = function(a) {
            var b = li(z.location.href),
                c = ji(b, "host", !1);
            if (c && c.match(fi)) {
                var d = ji(b,
                    "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var oi = {};
    var qi = function(a, b, c) {
            if (a) {
                var d = a.element,
                    e = {
                        cb: a.cb,
                        tagName: d.tagName,
                        type: 1
                    };
                b && (e.querySelector = pi(d));
                c && (e.isVisible = !Wh(d));
                return e
            }
        },
        ti = function(a) {
            if (0 != a.length) {
                var b;
                b = ri(a, function(c) {
                    return !si.test(c.cb)
                });
                b = ri(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = ri(b, function(c) {
                    return !Wh(c.element)
                });
                return b[0]
            }
        },
        ri = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        pi = function(a) {
            var b;
            if (a === I.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = pi(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        ui = !0,
        vi = !1;
    oi.Ii = "true";
    var wi = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        xi = /@(gmail|googlemail)\./i,
        si = /support|noreply/i,
        yi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        zi = ["BR"],
        Ai = {},
        Bi = function(a) {
            a = a || {
                wc: !0,
                xc: !0
            };
            a.nb = a.nb || {
                email: !0,
                phone: !0,
                address: !0
            };
            var b, c = a,
                d = !!c.wc + "." + !!c.xc;
            c && c.kd && c.kd.length && (d += "." + c.kd.join("."));
            c && c.nb && (d += "." + c.nb.email + "." + c.nb.phone + "." + c.nb.address);
            b = d;
            var e = Ai[b];
            if (e && 200 > Ua() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var l = h.querySelectorAll("*"),
                        n = 0; n < l.length && 1E4 > n; n++) {
                    var p = l[n];
                    if (!(0 <= yi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= zi.indexOf(p.children[r].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < l.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var u = f,
                t = u.status,
                v = [],
                w;
            if (a.nb && a.nb.email) {
                for (var y = u.elements, x = [], A = 0; A < y.length; A++) {
                    var B = y[A],
                        C = B.textContent;
                    "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
                    if (C) {
                        var D = C.match(wi);
                        if (D) {
                            var H = D[0],
                                G;
                            if (z.location) {
                                var N = ii(z.location, "host", !0);
                                G = 0 <= H.toLowerCase().indexOf(N)
                            } else G = !1;
                            G || x.push({
                                element: B,
                                cb: H
                            })
                        }
                    }
                }
                var Q = a && a.kd;
                if (Q && 0 !== Q.length) {
                    for (var aa = [], oa = 0; oa < x.length; oa++) {
                        for (var P = !0, R = 0; R < Q.length; R++) {
                            var ka = Q[R];
                            if (ka && qg(x[oa].element, ka)) {
                                P = !1;
                                break
                            }
                        }
                        P && aa.push(x[oa])
                    }
                    v = aa
                } else v = x;
                w = ti(v);
                10 < x.length && (t = "3")
            }
            var ca = [];
            !a.vi && w && (v = [w]);
            for (var ba = 0; ba < v.length; ba++) ca.push(qi(v[ba], a.wc, a.xc));
            var Fa = {
                elements: ca.slice(0, 10),
                ng: qi(w,
                    a.wc, a.xc),
                status: t
            };
            Ai[b] = {
                timestamp: Ua(),
                result: Fa
            };
            return Fa
        },
        Ci = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.cb.length + ":" + xi.test(a.cb)
        };
    var Di = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), h = 0; h < g.length; h++) {
                    var l = g[h].trim();
                    if (l) {
                        if (0 === l.indexOf("dataLayer.")) f = Eh(l.substring(10));
                        else {
                            var n = l.split(".");
                            f = z[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && og) {
                var q = pg(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(jc(q[r]) ||
                        Sa(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        Ei = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Di(b, "email", a.email) || c;
                c = Di(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = Di(f, "first_name", d[e].first_name) || c;
                    c = Di(f, "last_name", d[e].last_name) || c;
                    c = Di(f, "street", d[e].street) || c;
                    c = Di(f, "city", d[e].city) || c;
                    c = Di(f, "region", d[e].region) || c;
                    c = Di(f, "country", d[e].country) || c;
                    c = Di(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        Fi = function(a) {
            return a.D[T.g.yf]
        },
        Gi = function(a) {
            var b = U(a, T.g.Tc) || {},
                c = !1;
            m(b, function(d, e) {
                var f = e.enhanced_conversions_mode;
                if ("automatic" === f || "manual" === f) c = !0
            });
            return c
        },
        Hi = function(a) {
            if (!Fc(a)) return !1;
            var b = a.mode;
            return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
        },
        Ii = function(a) {
            if (a) {
                if ("selectors" === a.mode || Fc(a.selectors)) return Ei(a.selectors);
                if ("auto_detect" === a.mode || Fc(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Bi({
                                wc: !1,
                                xc: !1,
                                kd: c.exclude_element_selectors,
                                nb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    address: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.cb;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
                }
            }
        };
    var Ji = function(a) {
            var b = a && a[T.g.Qg];
            return b && b[T.g.Yi]
        },
        Ki = function() {
            return -1 !== Wb.userAgent.toLowerCase().indexOf("firefox")
        },
        Li = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var Mi = {
        Lf: "NG",
        oi: "NG-LA"
    };
    var Ni = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Oi = function(a) {
        Oi[" "](a);
        return a
    };
    Oi[" "] = function() {};
    var Qi = function() {
        var a = Pi,
            b = "Wf";
        if (a.Wf && a.hasOwnProperty(b)) return a.Wf;
        var c = new a;
        return a.Wf = c
    };
    var Pi = function() {
        var a = {};
        this.h = function() {
            var b = Ni.h,
                c = Ni.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.B = function() {
            a[Ni.h] = !0
        }
    };
    var Ri = [];

    function Si() {
        var a = Yb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ti,
            update: Ui,
            addListener: Vi,
            notifyListeners: Wi,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Ti(a, b, c, d, e, f) {
        var g = Si();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: l.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== l.initial) h[a] = r;
                q && z.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1, Xi(a), Wi(), wb("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Ui(a, b) {
        var c = Si();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Yi(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Yi(c, a);
            f.quiet ? (f.quiet = !1, Xi(a)) : g !== d && Xi(a)
        }
    }

    function Vi(a, b) {
        Ri.push({
            Kf: a,
            ck: b
        })
    }

    function Xi(a) {
        for (var b = 0; b < Ri.length; ++b) {
            var c = Ri[b];
            Ia(c.Kf) && -1 !== c.Kf.indexOf(a) && (c.li = !0)
        }
    }

    function Wi(a, b) {
        for (var c = 0; c < Ri.length; ++c) {
            var d = Ri[c];
            if (d.li) {
                d.li = !1;
                try {
                    d.ck({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Yi(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Zi = function(a) {
            var b = Si();
            b.accessedAny = !0;
            return Yi(b, a)
        },
        $i = function(a) {
            var b = Si();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        aj = function(a) {
            var b = Si();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        bj = function() {
            if (!Qi().h()) return !1;
            var a = Si();
            a.accessedAny = !0;
            return a.active
        },
        cj = function() {
            var a = Si();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        dj = function(a, b) {
            Si().addListener(a, b)
        },
        ej = function(a, b) {
            Si().notifyListeners(a, b)
        },
        fj = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!aj(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                dj(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        gj = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === Zi(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && dj(d, function(f) {
                var g = c();
                0 < g.length && (f.Kf = g, a(f))
            })
        };

    function hj() {}

    function ij() {};

    function jj(a) {
        for (var b = [], c = 0; c < kj.length; c++) {
            var d = a(kj[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var kj = [T.g.K, T.g.W],
        lj = function(a) {
            var b = a[T.g.Se];
            b && S(40);
            var c = a[T.g.Te];
            c && S(41);
            for (var d = Ia(b) ? b : [b], e = {
                    Cc: 0
                }; e.Cc < d.length; e = {
                    Cc: e.Cc
                }, ++e.Cc) m(a, function(f) {
                return function(g, h) {
                    if (g !== T.g.Se && g !== T.g.Te) {
                        var l = d[f.Cc],
                            n = Mi.Lf,
                            p = Mi.oi;
                        Si().set(g, h, l, n, p, c)
                    }
                }
            }(e))
        },
        mj = function(a, b) {
            m(a, function(c, d) {
                Si().update(c, d)
            });
            ej(b.eventId, b.priorityId)
        },
        nj = function(a) {
            var b = Zi(a);
            return void 0 != b ? b : !0
        },
        oj = function() {
            return "G1" + jj(Zi)
        },
        pj = function(a, b) {
            dj(a, b)
        },
        qj = function(a, b) {
            gj(a, b)
        },
        rj = function(a,
            b) {
            fj(a, b)
        };
    var sj = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var tj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var uj = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        vj = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function wj(a) {
        return "null" !== a.origin
    };
    var zj = function(a, b, c, d) {
            return xj(d) ? tj(a, String(b || yj()), c) : []
        },
        Cj = function(a, b, c, d, e) {
            if (xj(e)) {
                var f = Aj(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Bj(f, function(g) {
                        return g.De
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Bj(f, function(g) {
                        return g.yd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Dj(a, b, c, d) {
        var e = yj(),
            f = window;
        wj(f) && (f.document.cookie = a);
        var g = yj();
        return e != g || void 0 != c && 0 <= zj(b, g, !1, d).indexOf(c)
    }
    var Hj = function(a, b, c, d) {
            function e(w, y, x) {
                if (null == x) return delete h[y], w;
                h[y] = x;
                return w + "; " + y + "=" + x
            }

            function f(w, y) {
                if (null == y) return delete h[y], w;
                h[y] = !0;
                return w + "; " + y
            }
            if (!xj(c.qb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ej(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.Gk);
            g = e(g, "samesite",
                c.Yk);
            c.al && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Fj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
                    var t = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", t);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!Gj(t, c.path) && Dj(v, a, b, c.qb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Gj(n, c.path) ? 1 : Dj(g, a, b, c.qb) ? 0 : 1
        },
        Ij = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Hj(a,
                b, c)
        };

    function Bj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Aj(a, b, c) {
        for (var d = [], e = zj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"), d.push({
                    id: g.join("."),
                    De: 1 * l[0] || 1,
                    yd: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var Ej = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Jj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Kj = /(^|\.)doubleclick\.net$/i,
        Gj = function(a, b) {
            return Kj.test(window.document.location.hostname) || "/" === b && Jj.test(a)
        },
        yj = function() {
            return wj(window) ? window.document.cookie : ""
        },
        Fj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Kj.test(e) || Jj.test(e) || a.push("none");
            return a
        },
        xj = function(a) {
            if (!Qi().h() || !a || !bj()) return !0;
            if (!aj(a)) return !1;
            var b = Zi(a);
            return null == b ? !0 : !!b
        };
    var Lj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ sj(a) & 2147483647) : String(b)
        },
        Mj = function(a) {
            return [Lj(a), Math.round(Ua() / 1E3)].join(".")
        },
        Pj = function(a, b, c, d, e) {
            var f = Nj(b);
            return Cj(a, f, Oj(c), d, e)
        },
        Qj = function(a, b, c, d) {
            var e = "" + Nj(c),
                f = Oj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Nj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Oj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function Rj(a, b, c, d) {
        var e, f = Number(null != a.Db ? a.Db : void 0);
        0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            qb: d
        }
    };
    var Sj;
    var Wj = function() {
            var a = Tj,
                b = Uj,
                c = Vj(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                gc(I, "mousedown", d);
                gc(I, "keyup", d);
                gc(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Xj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Vj().decorators.push(f)
        },
        Yj = function(a, b, c) {
            for (var d = Vj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var l = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (l && (p || n !== I.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ya(e, g.callback())
                }
            }
            return e
        };

    function Vj() {
        var a = Yb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Zj = /(.*?)\*(.*?)\*(.*)/,
        ak = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        bk = /^(?:www\.|m\.|amp\.)+/,
        ck = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function dk(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var fk = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(tb(String(d))))
            }
        var e = b.join("*");
        return ["1", ek(e), e].join("*")
    };

    function ek(a, b) {
        var c = [Wb.userAgent, (new Date).getTimezoneOffset(), Wb.userLanguage || Wb.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Sj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Sj = d;
        for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ Sj[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }

    function gk() {
        return function(a) {
            var b = li(z.location.href),
                c = b.search.replace("?", ""),
                d = gi(c, "_gl", !1, !0) || "";
            a.query = hk(d) || {};
            var e = ji(b, "fragment").match(dk("_gl"));
            a.fragment = hk(e && e[3] || "") || {}
        }
    }

    function ik(a, b) {
        var c = dk(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var jk = function(a, b) {
            b || (b = "_gl");
            var c = ck.exec(a);
            if (!c) return "";
            var d = c[1],
                e = ik(b, (c[2] || "").slice(1)),
                f = ik(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        kk = function(a) {
            var b = gk(),
                c = Vj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ya(d, e.query), a && Ya(d, e.fragment));
            return d
        },
        hk = function(a) {
            try {
                var b = lk(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = ub(d[e + 1]);
                        c[f] = g
                    }
                    wb("TAGGING", 6);
                    return c
                }
            } catch (h) {
                wb("TAGGING",
                    8)
            }
        };

    function lk(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Zj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    l;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ek(h, p)) {
                            l = !0;
                            break a
                        }
                    l = !1
                }
                if (l) return h;
                wb("TAGGING", 7)
            }
        }
    }

    function mk(a, b, c, d) {
        function e(p) {
            p = ik(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = ck.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }

    function nk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Yj(b, 1, c),
            e = Yj(b, 2, c),
            f = Yj(b, 3, c);
        if (Za(d)) {
            var g = fk(d);
            c ? ok("_gl", g, a) : pk("_gl", g, a, !1)
        }
        if (!c && Za(e)) {
            var h = fk(e);
            pk("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l)) a: {
                var n = l,
                    p = f[l],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        pk(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        ok(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && mk(n, p, q)
            }
    }

    function pk(a, b, c, d) {
        if (c.href) {
            var e = mk(a, b, c.href, void 0 === d ? !1 : d);
            Gb.test(e) && (c.href = e)
        }
    }

    function ok(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = I.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = mk(a, b, c.action);
                Gb.test(n) && (c.action = n)
            }
        }
    }

    function Tj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || nk(e, e.hostname)
            }
        } catch (g) {}
    }

    function Uj(a) {
        try {
            if (a.action) {
                var b = ji(li(a.action), "host");
                nk(a, b)
            }
        } catch (c) {}
    }
    var qk = function(a, b, c, d) {
            Wj();
            Xj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        rk = function(a, b) {
            Wj();
            Xj(a, [ii(z.location, "host", !0)], b, !0, !0)
        },
        sk = function() {
            var a = I.location.hostname,
                b = ak.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(bk, ""),
                l = e.replace(bk, ""),
                n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        tk = function(a, b) {
            return !1 === a ? !1 : a || b || sk()
        };
    var uk = {};
    var vk = ["1"],
        wk = {},
        xk = {},
        Bk = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = yk(a.prefix);
            if (!wk[c] && !zk(c, a.path, a.domain)) {
                if (void 0 == uk.enable_auid_fl_iframe ? 0 : uk.enable_auid_fl_iframe) {
                    var d = ni("auiddc");
                    if (d) {
                        wb("TAGGING", 17);
                        wk[c] = d;
                        return
                    }
                }
                if (b) {
                    var e = yk(a.prefix),
                        f = Mj();
                    if (0 === Ak(e, f, a)) {
                        var g = Yb("google_tag_data", {});
                        g._gcl_au || (g._gcl_au = f)
                    }
                    zk(c, a.path, a.domain)
                }
            }
        };

    function Ak(a, b, c, d) {
        var e = Qj(b, "1", c.domain, c.path),
            f = Rj(c, d);
        f.qb = "ad_storage";
        return Ij(a, e, f)
    }

    function zk(a, b, c) {
        var d = Pj(a, b, c, vk, "ad_storage");
        if (!d) return !1;
        Ck(a, d);
        return !0
    }

    function Ck(a, b) {
        var c = b.split(".");
        5 === c.length ? (wk[a] = c.slice(0, 2).join("."), xk[a] = {
            id: c.slice(2, 4).join("."),
            fi: Number(c[4]) || 0
        }) : 3 === c.length ? xk[a] = {
            id: c.slice(0, 2).join("."),
            fi: Number(c[2]) || 0
        } : wk[a] = b
    }

    function yk(a) {
        return (a || "_gcl") + "_au"
    }

    function Dk(a) {
        bj() || a();
        fj(function() {
            Zi("ad_storage") && a();
            gj(a, "ad_storage")
        }, ["ad_storage"])
    }

    function Ek(a) {
        var b = kk(!0),
            c = yk(a.prefix);
        Dk(function() {
            var d = b[c];
            if (d) {
                Ck(c, d);
                var e = 1E3 * Number(wk[c].split(".")[1]);
                if (e) {
                    wb("TAGGING", 16);
                    var f = Rj(a, e);
                    f.qb = "ad_storage";
                    var g = Qj(d, "1", a.domain, a.path);
                    Ij(c, g, f)
                }
            }
        })
    }

    function Fk(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = yk(d.prefix),
                g = {},
                h = Pj(f, d.path, d.domain, vk, "ad_storage");
            if (!h) return g;
            g[f] = h;
            return g
        };
        Dk(function() {
            qk(e, a, b, c)
        })
    };
    var Gk = [];
    Gk[7] = !0;
    Gk[9] = !0;
    Gk[27] = !0;
    Gk[11] = !0;
    Gk[13] = !0;
    Gk[15] = !0;
    Gk[25] = !0;
    Gk[36] = !0;
    Gk[38] = !0;
    Gk[43] = !0;
    a: {
        for (var Hk, Ik, Jk = 0; Hk === Ik;)
            if (Hk = Math.floor(2 * Math.random()), Ik = Math.floor(2 * Math.random()), Jk++, 20 < Jk) break a;Hk ? Gk[46] = !0 : Gk[47] = !0
    }
    Gk[52] = !0;
    Gk[57] = !0;
    Gk[60] = !0;
    Gk[65] = !0;

    Gk[68] = !0;
    Gk[72] = !0;

    var V = function(a) {
        return !!Gk[a]
    };
    var Kk = function() {
        eh.dedupe_gclid || (eh.dedupe_gclid = "" + Mj());
        return eh.dedupe_gclid
    };
    var Lk = function() {
        var a = !1;
        return a
    };
    var L = {
            H: "GTM-W5FKZ2N",
            fb: "9346581"
        },
        Mk = {
            ji: "GTM-W5FKZ2N",
            ki: "GTM-W5FKZ2N"
        };
    L.Cf = Qa("");
    var Nk = function() {
            return Mk.ji ? Mk.ji.split("|") : [L.H]
        },
        Ok = function() {
            return Mk.ki ? Mk.ki.split("|") : []
        },
        Pk = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Rk = function() {
            for (var a = Qk(), b = Nk(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || Ga(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = Ok(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && S(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[L.fb] = 2
        },
        Sk = function(a) {
            return !!Qk().container[a]
        },
        Tk = function() {
            var a =
                Qk().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (Ga(c)) {
                        if (1 === c) return !0
                    } else if (1 === c.state) return !0
                }
            return !1
        },
        Uk = function() {
            var a = {};
            m(Qk().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function Qk() {
        var a = eh.tidr;
        a || (a = new Pk, eh.tidr = a);
        return a
    }
    var Vk = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: "g",
            OPT: "o"
        },
        Wk = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        Xk = function(a) {
            var b = L.H.split("-"),
                c = b[0].toUpperCase();
            if (V(45)) {
                var d = {};
                d.Uj = L.H;
                d.Vk = dh.dd;
                d.Xk = dh.oc;
                d.Ek = L.Cf ? 2 : 1;
                kh ? (d.Ne = Wk[c], d.Ne || (d.Ne = 0)) : d.Ne = qh ? 13 : 10;
                oh ? d.fg = 1 : Lk() ? d.fg = 2 : d.fg = 3;
                var e;
                var f = d.Ne,
                    g = d.fg;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + Ff(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
                var h = d.Fl,
                    l = 4 + e + (h ? "" + Ff(2,
                        1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h] : ""),
                    n, p = d.Xk;
                n = p && Ef.test(p) ? "" + Ff(3, 2) + p : "";
                var q, r = d.Vk;
                q = r ? "" + Ff(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
                var u;
                var t = d.Uj;
                if (t && a) {
                    var v = t.split("-"),
                        w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w) u = "";
                    else {
                        var y = v[1];
                        u = "" + Ff(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + y.length] + (d.Ek || 0) + y
                    }
                } else u = "";
                return l + n + q + u
            }
            var x = Vk[c] || "i",
                A = a && "GTM" === c ? b[1] : "OPT" ===
                c ? b[1] : "",
                B = "w";
            kh && (B = Lk() ? "s" : "o");
            mh ? ("w" === B && (B = "x"), "o" === B && (B = "q")) : oh ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : qh && (B = "z");
            return "2" + B + x + (4 === dh.oc.length ? dh.oc.slice(1) : dh.oc) + A
        };

    function Yk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Zk = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function $k() {
        return Ib("iPhone") && !Ib("iPod") && !Ib("iPad")
    }

    function al() {
        $k() || Ib("iPad") || Ib("iPod")
    };
    Ib("Opera");
    Ib("Trident") || Ib("MSIE");
    Ib("Edge");
    !Ib("Gecko") || -1 != Hb().toLowerCase().indexOf("webkit") && !Ib("Edge") || Ib("Trident") || Ib("MSIE") || Ib("Edge"); - 1 != Hb().toLowerCase().indexOf("webkit") && !Ib("Edge") && Ib("Mobile");
    Ib("Macintosh");
    Ib("Windows");
    Ib("Linux") || Ib("CrOS");
    var bl = qa.navigator || null;
    bl && (bl.appVersion || "").indexOf("X11");
    Ib("Android");
    $k();
    Ib("iPad");
    Ib("iPod");
    al();
    Hb().toLowerCase().indexOf("kaios");
    var cl = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var h = a.charCodeAt(e + f);
                    if (!h || 61 == h || 38 == h || 35 == h) return e
                }
                e += f + 1
            }
            return -1
        },
        dl = /#|$/,
        el = function(a, b) {
            var c = a.search(dl),
                d = cl(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        fl = /[?&]($|#)/,
        gl = function(a, b, c) {
            for (var d, e = a.search(dl), f = 0, g, h = []; 0 <= (g = cl(a, f, b, e));) h.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            h.push(a.slice(f));
            d = h.join("").replace(fl, "$1");
            var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var u = d.indexOf("?"),
                    t;
                0 > u || u > r ? (u = r, t = "") : t = d.substring(u + 1, r);
                q = [d.slice(0, u), t, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else l = d;
            return l
        };
    var hl = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

    function il(a) {
        if (!a || !I.head) return null;
        var b = jl("META");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var kl = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            if (a) return a[a.length - 1] == z.location.origin ? 1 : 2;
            var b;
            var c = z.top;
            try {
                var d;
                if (d = !!c && null != c.location.href) b: {
                    try {
                        Oi(c.foo);
                        d = !0;
                        break b
                    } catch (e) {}
                    d = !1
                }
                b = d
            } catch (e) {
                b = !1
            }
            return b ? 1 : 2
        },
        jl = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function ll(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = jl("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = zb(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Zk(e, "load", f);
            Zk(e, "error", f)
        }
        d && (e.attributionsrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var El = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            hl(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Dl(c, b)
        },
        Dl = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else ll(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Fl = function() {};
    var Gl = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Hl = function(a, b) {
            b = void 0 === b ? {} : b;
            this.B = a;
            this.h = null;
            this.N = {};
            this.eb = 0;
            var c;
            this.U = null != (c = b.pl) ? c : 500;
            var d;
            this.F = null != (d = b.Gl) ? d : !1;
            this.D = null
        };
    pa(Hl, Fl);
    Hl.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = vj(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.U && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.U));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Gl(c), c.internalBlockOnErrors = b.F, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Il(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Hl.prototype.removeEventListener = function(a) {
        a && a.listenerId && Il(this, "removeEventListener", null, a.listenerId)
    };
    var Kl = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Jl(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Jl(a.purpose.consents, b)
                } else l = !0;
            else l = 1 === h ? a.purpose && a.vendor ? Jl(a.purpose.legitimateInterests,
                b) && Jl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        Jl = function(a, b) {
            return !(!a || !a[b])
        },
        Il = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.B.__tcfapi) {
                var e = a.B.__tcfapi;
                e(b, 2, c, d)
            } else if (Ll(a)) {
                Ml(a);
                var f = ++a.eb;
                a.N[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Ll = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.B, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Ml = function(a) {
            a.D || (a.D = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.N[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Zk(a.B, "message", a.D))
        },
        Nl = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Gl(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (El({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Ol = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Pl = Yk('', 500);

    function Ql() {
        var a = eh.tcf || {};
        return eh.tcf = a
    }
    var Ul = function() {
        var a = Ql(),
            b = new Hl(z, {
                pl: -1
            });
        if (!0 === z.gtag_enable_tcf_support && !a.active && ("function" === typeof z.__tcfapi || "function" === typeof b.B.__tcfapi || null != Ll(b))) {
            a.active = !0;
            a.Je = {};
            Rl();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Sl(a), Tl(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Ol) Ol.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" ===
                            c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                h;
                            for (h in Ol)
                                if (Ol.hasOwnProperty(h))
                                    if ("1" === h) {
                                        var l, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        l = Nl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Kl(n, "1", 0) : !1;
                                        g["1"] = l
                                    } else g[h] = Kl(c, h, Ol[h]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.Je = d, Tl(a))
                    }
                })
            } catch (c) {
                Sl(a), Tl(a)
            }
        }
    };

    function Sl(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Rl() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Pl, a);
        lj(b)
    }

    function Tl(a) {
        var b = {},
            c = (b.ad_storage = a.Je["1"] ? "granted" : "denied", b);
        mj(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Vl()
        })
    }
    var Vl = function() {
            var a = Ql();
            return a.active ? a.tcString || "" : ""
        },
        Wl = function() {
            var a = Ql();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        Xl = function(a) {
            if (!Ol.hasOwnProperty(String(a))) return !0;
            var b = Ql();
            return b.active && b.Je ? !!b.Je[String(a)] : !0
        };
    var Yl = function(a) {
        var b = String(a[Zd.Wa] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    };
    var Zl = ["L", "S", "Y"],
        $l = ["S", "E"],
        am = {
            sampleRate: "0.005000",
            Gi: "",
            Fi: Number("5"),
            Ei: Number("")
        },
        bm = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        cm;
    if (!(cm = bm)) {
        var dm = Math.random(),
            em = am.sampleRate;
        cm = dm < em
    }
    var fm = cm,
        gm = "https://www.googletagmanager.com/a?id=" + L.H + "&cv=271",
        hm = {
            label: L.H + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };

    function im() {
        return [gm, "&v=3&t=t", "&pid=" + La(), "&rv=" + dh.oc].join("")
    }
    var jm = im();

    function km() {
        jm = im()
    }
    var lm = {},
        mm = "",
        nm = "",
        om = "",
        pm = "",
        qm = [],
        rm = "",
        sm = {},
        tm = !1,
        um = {},
        vm = {},
        wm = {},
        xm = "",
        ym = void 0,
        zm = {},
        Am = {},
        Bm = void 0,
        Cm = 5;
    0 < am.Fi && (Cm = am.Fi);
    var Dm = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                wk: function() {
                    return c < a ? !1 : Ua() - d[c % a] < b
                },
                Sk: function() {
                    var f = c++ % a;
                    d[f] = Ua()
                }
            }
        }(Cm, 1E3),
        Em = 1E3,
        Fm = "";

    function Gm(a) {
        var b = ym;
        if (void 0 === b) return "";
        var c = yb("GTM"),
            d = yb("TAGGING"),
            e = yb("HEALTH"),
            f = jm,
            g = lm[b] ? "" : "&es=1",
            h = zm[b],
            l = Hm(b),
            n = Im(),
            p = mm,
            q = nm,
            r = xm,
            u = Jm(a),
            t = om,
            v = pm,
            w;
        return [f, g, h, l, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, r, u, t, v, w, rm ? "&dl=" + encodeURIComponent(rm) : "", 0 < qm.length ? "&tdp=" + qm.join(".") : "", dh.dd ?
            "&x=" + dh.dd : "", "&z=0"
        ].join("")
    }

    function Lm() {
        Bm && (z.clearTimeout(Bm), Bm = void 0);
        if (void 0 !== ym && (!lm[ym] || mm || nm))
            if (Am[ym] || Dm.wk() || 0 >= Em--) S(1), Am[ym] = !0;
            else {
                Dm.Sk();
                var a = Gm(!0);
                fc(a);
                if (pm || rm && 0 < qm.length) {
                    var b = a.replace("/a?", "/td?");
                    fc(b)
                }
                lm[ym] = !0;
                rm = pm = om = xm = nm = mm = "";
                qm = []
            }
    }

    function Mm() {
        Bm || (Bm = z.setTimeout(Lm, 500))
    }

    function Nm(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function Om() {
        2022 <= Gm().length && Lm()
    }

    function Im() {
        return "&tc=" + ye.filter(function(a) {
            return a
        }).length
    }
    var Qm = function(a, b) {
            if (fm && !Am[a] && ym !== a) {
                Lm();
                ym = a;
                om = mm = "";
                zm[a] = "&e=" + Nm(b) + "&eid=" + a;
                Mm();
            }
        },
        Rm = function(a, b, c, d) {
            if (fm && b) {
                var e = Yl(b),
                    f = c + e;
                if (!Am[a]) {
                    a !== ym && (Lm(), ym = a);
                    mm = mm ? mm + "." + f : "&tr=" + f;
                    var g = b["function"];
                    if (!g) throw Error("Error: No function name given for function call.");
                    var h = (Ae[g] ? "1" : "2") + e;
                    om = om ? om + "." + h : "&ti=" + h;
                    Mm();
                    Om()
                }
            }
        },
        Sm = function(a, b, c) {
            if (fm && a && a[Zd.Bb]) {
                var d = b + "." + a[Zd.Bb];
                wm[d] = c;
                "html" == Yl(a) && Fm == d && (mm += ":" + Math.floor(c))
            }
        };

    function Jm(a) {}

    function Hm(a) {}
    var Zm = function(a, b, c) {
            if (fm && void 0 !== a && !Am[a]) {
                a !== ym && (Lm(), ym = a);
                var d = c + b;
                nm = nm ? nm + "." + d : "&epr=" + d;
                Mm();
                Om()
            }
        },
        $m = function(a, b, c) {},
        Km = void 0;
    var an = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Jb();
    $k() || Ib("iPod");
    Ib("iPad");
    !Ib("Android") || Kb() || Jb() || Ib("Opera") || Ib("Silk");
    Kb();
    !Ib("Safari") || Kb() || Ib("Coast") || Ib("Opera") || Ib("Edge") || Ib("Edg/") || Ib("OPR") || Jb() || Ib("Silk") || Ib("Android") || al();
    var bn = {},
        cn = null,
        dn = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!cn) {
                cn = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                    var n = g.concat(h[l].split(""));
                    bn[l] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === cn[q] && (cn[q] = p)
                    }
                }
            }
            for (var r = bn[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    A = b[v + 2],
                    B = r[y >> 2],
                    C = r[(y & 3) << 4 | x >> 4],
                    D = r[(x & 15) << 2 | A >> 6],
                    H = r[A & 63];
                u[w++] = "" + B + C + D + H
            }
            var G = 0,
                N = t;
            switch (b.length - v) {
                case 2:
                    G = b[v + 1], N = r[(G & 15) << 2] || t;
                case 1:
                    var Q = b[v];
                    u[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | G >> 4] + N + t
            }
            return u.join("")
        };
    var en = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function fn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function gn() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function hn() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function jn(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function kn() {
        var a = z;
        if (!jn(a)) return null;
        var b = fn(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(en).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var ln, mn = function() {
            if (jn(z) && (ln = Ua(), !hn())) {
                var a = kn();
                a && (a.then(function() {
                    S(95);
                }), a.catch(function() {
                    S(96)
                }))
            }
        },
        on = function(a) {
            var b = nn.ul,
                c = function(g, h) {
                    try {
                        a(g, h)
                    } catch (l) {}
                },
                d = gn();
            if (d) c(d);
            else {
                var e = hn();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.vd || (c.vd = !0, S(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.vd || (c.vd = !0, S(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.vd || (c.vd = !0, S(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        pn = function(a, b) {
            a && (b.C[T.g.qf] = a.architecture, b.C[T.g.rf] = a.bitness, a.fullVersionList && (b.C[T.g.sf] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.C[T.g.tf] = a.mobile ? "1" : "0", b.C[T.g.uf] = a.model, b.C[T.g.vf] = a.platform, b.C[T.g.wf] = a.platformVersion, b.C[T.g.xf] = a.wow64 ? "1" : "0")
        };
    var qn = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                wg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function rn(a, b) {
        var c = qn(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].wg] || (d[c[e].wg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ia: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].wg].push(g)
            }
        }
        return d
    };
    var sn = /^\w+$/,
        tn = /^[\w-]+$/,
        un = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        vn = function() {
            if (!Qi().h() || !bj()) return !0;
            var a = Zi("ad_storage");
            return null == a ? !0 : !!a
        },
        wn = function(a, b) {
            aj("ad_storage") ? vn() ? a() : gj(a, "ad_storage") : b ? wb("TAGGING", 3) : fj(function() {
                wn(a, !0)
            }, ["ad_storage"])
        },
        yn = function(a) {
            return xn(a).map(function(b) {
                return b.ia
            })
        },
        xn = function(a) {
            var b = [];
            if (!wj(z) || !I.cookie) return b;
            var c = zj(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Hd: d.Hd
                }, e++) {
                var f = zn(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Hd = g.ia;
                    var l = g.timestamp,
                        n = g.labels,
                        p = Ka(b, function(q) {
                            return function(r) {
                                return r.ia === q.Hd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = An(p.labels, n || [])) : b.push({
                        version: h,
                        ia: d.Hd,
                        timestamp: l,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Bn(b)
        };

    function An(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Cn(a) {
        return a && "string" == typeof a && a.match(sn) ? a : "_gcl"
    }
    var En = function() {
            var a = li(z.location.href),
                b = ji(a, "query", !1, void 0, "gclid"),
                c = ji(a, "query", !1, void 0, "gclsrc"),
                d = ji(a, "query", !1, void 0, "wbraid"),
                e = ji(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || gi(f, "gclid", !1);
                c = c || gi(f, "gclsrc", !1);
                d = d || gi(f, "wbraid", !1)
            }
            return Dn(b, c, e, d)
        },
        Dn = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && tn.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(tn)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Gn = function(a) {
            var b = En();
            wn(function() {
                Fn(b, !1, a)
            })
        };

    function Fn(a, b, c, d, e) {
        function f(w, y) {
            var x = Hn(w, g);
            x && (Ij(x, y, h), l = !0)
        }
        c = c || {};
        e = e || [];
        var g = Cn(c.prefix);
        d = d || Ua();
        var h = Rj(c, d, !0);
        h.qb = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!l && a.gb) {
            var q = a.gb[0],
                r = Hn("gb", g),
                u = !1;
            if (!b)
                for (var t = xn(r), v = 0; v < t.length; v++) t[v].ia === q && t[v].labels &&
                    0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Jn = function(a, b) {
            var c = kk(!0);
            wn(function() {
                for (var d = Cn(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== un[f]) {
                        var g = Hn(f, d),
                            h = c[g];
                        if (h) {
                            var l = Math.min(In(h), Ua()),
                                n;
                            b: {
                                var p = l;
                                if (wj(z))
                                    for (var q = zj(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (In(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = Rj(b, l, !0);
                                u.qb = "ad_storage";
                                Ij(g, h, u)
                            }
                        }
                    }
                }
                Fn(Dn(c.gclid, c.gclsrc), !1, b)
            })
        },
        Hn = function(a, b) {
            var c = un[a];
            if (void 0 !== c) return b + c
        },
        In = function(a) {
            return 0 !== Kn(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function zn(a) {
        var b = Kn(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ia: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Kn(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !tn.test(a[2]) ? [] : a
    }
    var Ln = function(a, b, c, d, e) {
            if (Ia(b) && wj(z)) {
                var f = Cn(e),
                    g = function() {
                        for (var h = {}, l = 0; l < a.length; ++l) {
                            var n = Hn(a[l], f);
                            if (n) {
                                var p = zj(n, I.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                wn(function() {
                    qk(g, b, c, d)
                })
            }
        },
        Bn = function(a) {
            return a.filter(function(b) {
                return tn.test(b.ia)
            })
        },
        Mn = function(a, b) {
            if (wj(z)) {
                for (var c = Cn(b.prefix), d = {}, e = 0; e < a.length; e++) un[a[e]] && (d[a[e]] = un[a[e]]);
                wn(function() {
                    m(d, function(f, g) {
                        var h = zj(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            t) {
                            return In(t) - In(u)
                        });
                        if (h.length) {
                            var l = h[0],
                                n = In(l),
                                p = 0 !== Kn(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== Kn(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            Fn(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Nn(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var On = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (bj()) {
                var c = En();
                if (Nn(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    rk(function() {
                        return d
                    }, 3);
                    rk(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Pn = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!vn()) return e;
            var f = xn(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var h = f[0],
                    l = f[0].timestamp,
                    n = [h.version, Math.round(l /
                        1E3), h.ia].concat(h.labels || [], [b]).join("."),
                    p = Rj(c, l, !0);
                p.qb = "ad_storage";
                Ij(a, n, p)
            }
            return e
        };

    function Qn(a, b) {
        var c = Cn(b),
            d = Hn(a, c);
        if (!d) return 0;
        for (var e = xn(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Rn(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Sn = function(a) {
        var b = Math.max(Qn("aw", a), Rn(vn() ? rn() : {}));
        return Math.max(Qn("gb", a), Rn(vn() ? rn("_gac_gb", !0) : {})) > b
    };
    var Tn = function(a, b) {
            var c = a && !nj(T.g.K);
            return b && c ? "0" : b
        },
        Wn = function(a) {
            function b(t) {
                var v;
                eh.reported_gclid || (eh.reported_gclid = {});
                v = eh.reported_gclid;
                var w, y = g;
                w = !g || bj() && !nj(T.g.K) ? l + (t ? "gcu" : "gcs") : l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
                if (!v[w]) {
                    v[w] = !0;
                    var x = [],
                        A = {},
                        B = function(oa, P) {
                            P && (x.push(oa + "=" + encodeURIComponent(P)), A[oa] = !0)
                        },
                        C = "https://www.google.com";
                    if (bj()) {
                        var D = nj(T.g.K);
                        B("gcs", oj());
                        t && B("gcu", "1");
                        cj() && B("gcd", "G1" + jj($i));
                        B("rnd", Kk());
                        if ((!l || n && "aw.ds" !== n) && nj(T.g.K)) {
                            var H = yn("_gcl_aw");
                            B("gclaw", H.join("."))
                        }
                        B("url", String(z.location).split(/[?#]/)[0]);
                        B("dclid", Tn(d, p));
                        D || (C = "https://pagead2.googlesyndication.com")
                    }
                    B("gdpr_consent", Vl());
                    B("gdpr", Wl());
                    "1" === kk(!1)._up && B("gtm_up", "1");
                    B("gclid", Tn(d, l));
                    B("gclsrc", n);
                    if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", Tn(d, q)), !A.gbraid && bj() && nj(T.g.K))) {
                        var G = yn("_gcl_gb");
                        0 < G.length && B("gclgb", G.join("."))
                    }
                    B("gtm",
                        Xk(!e));
                    g && nj(T.g.K) && (Bk(f || {}), y && B("auid", wk[yk(f.prefix)] || ""));
                    Vn || a.Zh && B("did", a.Zh);
                    a.Uf && B("gdid", a.Uf);
                    a.Qf && B("edid", a.Qf);
                    var N = V(64) ? gn() : null;
                    if (N) {
                        var Q = function(oa, P) {
                            x.push(oa + "=" + encodeURIComponent(P));
                            A[oa] = !0
                        };
                        Q("uaa", N.architecture);
                        Q("uab", N.bitness);
                        N.fullVersionList && Q("uafvl", N.fullVersionList.map(function(oa) {
                            return encodeURIComponent(oa.brand || "") + ";" + encodeURIComponent(oa.version || "")
                        }).join("|"));
                        Q("uam", N.model);
                        Q("uap", N.platform);
                        Q("uapv", N.platformVersion);
                        Q("uaw",
                            N.wow64 ? "1" : "0")
                    }
                    var aa = C + "/pagead/landing?" + x.join("&");
                    mc(aa)
                }
            }
            var c = !!a.Jf,
                d = !!a.Me,
                e = a.ca,
                f = void 0 === a.uc ? {} : a.uc,
                g = void 0 === a.He ? !0 : a.He,
                h = En(),
                l = h.gclid || "",
                n = h.gclsrc,
                p = h.dclid || "",
                q = h.gbraid || "",
                r = !c && ((!l || n && "aw.ds" !== n ? !1 : !0) || q),
                u = bj();
            if (r || u) u ? rj(function() {
                b();
                nj(T.g.K) || qj(function(t) {
                    return b(!0, t.consentEventId, t.consentPriorityId)
                }, T.g.K)
            }, [T.g.K]) : b()
        },
        Un = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = dh.Mi || z._CONSENT_MODE_SALT;
            return a ? c ? String(sj(b + a + c)) : "0" : ""
        },
        Vn = !1;
    var Xn = /[A-Z]+/,
        Yn = /\s/,
        Zn = function(a) {
            if (k(a)) {
                a = Sa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Xn.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Yn.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            X: c + "-" + d[0],
                            O: d
                        }
                    }
                }
            }
        },
        ao = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Zn(a[c]);
                d && (b[d.id] = d)
            }
            $n(b);
            var e = [];
            m(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function $n(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.O[1] && b.push(d.X)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var bo = function(a, b, c, d) {
        var e = dc(),
            f;
        if (1 === e) a: {
            var g = sh;g = g.toLowerCase();
            for (var h = "https://" + g, l = "http://" + g, n = 1, p = I.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(l)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(h) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var eo = function(a, b, c) {
            if (z[a.functionName]) return b.ig && J(b.ig), z[a.functionName];
            var d = co();
            z[a.functionName] = d;
            if (a.Ae)
                for (var e = 0; e < a.Ae.length; e++) z[a.Ae[e]] = z[a.Ae[e]] || co();
            a.Ge && void 0 === z[a.Ge] && (z[a.Ge] = c);
            cc(bo("https://", "http://", a.ug), b.ig, b.Jk);
            return d
        },
        co = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        fo = {
            functionName: "_googWcmImpl",
            Ge: "_googWcmAk",
            ug: "www.gstatic.com/wcm/loader.js"
        },
        go = {
            functionName: "_gaPhoneImpl",
            Ge: "ga_wpid",
            ug: "www.gstatic.com/gaphone/loader.js"
        },
        ho = {
            Ji: "",
            Gj: "5"
        },
        io = {
            functionName: "_googCallTrackingImpl",
            Ae: [go.functionName, fo.functionName],
            ug: "www.gstatic.com/call-tracking/call-tracking_" + (ho.Ji || ho.Gj) + ".js"
        },
        jo = {},
        ko = function(a, b, c, d) {
            S(22);
            if (c) {
                d = d || {};
                var e = eo(fo, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.pb && (f.autoreplace = c);
                e(2, d.pb, f, c, 0, Ta(), d.options)
            }
        },
        lo = function(a, b, c, d) {
            S(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ta()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    jo[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.O.length ? (e.adData = {
                            ak: g.O[0],
                            cl: g.O[1]
                        }, jo[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.X
                        }, jo[g.id] = !0))
                }(e.gaData || e.adData) && eo(io, d)(d.pb, e, d.options)
            }
        },
        mo = function() {
            var a = !1;
            return a
        },
        no = function(a, b) {
            if (a)
                if (Lk()) {} else {
                    if (k(a)) {
                        var c =
                            Zn(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = U(b, T.g.mj);
                    if (f && Ia(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = Zn(f[g]);
                            h && (d.push(h), (a.id === h.id || a.id === a.X && a.X === h.X) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var l = U(b, T.g.ih),
                            n;
                        if (l) {
                            Ia(l) ? n = l : n = [l];
                            var p = U(b, T.g.gh),
                                q = U(b, T.g.hh),
                                r = U(b, T.g.jh),
                                u = U(b, T.g.lj),
                                t = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) lo(d, n[w], u, {
                                        pb: t,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.O[1]) mo() ? lo([a], n[w], u || "US", {
                                pb: t,
                                options: r
                            }) : ko(a.O[0], a.O[1], n[w], {
                                pb: t,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (mo()) lo([a], n[w], u || "US", {
                                    pb: t
                                });
                                else {
                                    var y = a.X,
                                        x = n[w],
                                        A = {
                                            pb: t
                                        };
                                    S(23);
                                    if (x) {
                                        A = A || {};
                                        var B = eo(go, A, y),
                                            C = {};
                                        void 0 !== A.pb ? C.receiver = A.pb : C.replace = x;
                                        C.ga_wpid = y;
                                        C.destination = x;
                                        B(2, Ta(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var oo = function(a, b, c) {
            this.target = a;
            this.eventName = b;
            this.s = c;
            this.C = {};
            this.metadata = K(c.eventMetadata || {});
            this.M = !1
        },
        po = function(a, b, c) {
            var d = U(a.s, b);
            void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c)
        },
        qo = function(a, b, c) {
            var d = Uh(a.target.X);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function ro(a) {
        return {
            getDestinationId: function() {
                return a.target.X
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.C[b]
            },
            setHitData: function(b, c) {
                return void(a.C[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.C[b] && (a.C[b] = c)
            },
            copyToHitData: function(b, c) {
                po(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.M = !0)
            },
            getProcessedEvent: function() {
                return a
            },
            getFromEventContext: function(b) {
                return U(a.s, b)
            }
        }
    };
    var to = function(a) {
            var b = so[a.target.X];
            if (!a.M && b)
                for (var c = ro(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.M = !0
                    }
                    if (a.M) break
                }
        },
        uo = function(a, b) {
            var c = so[a];
            c || (c = so[a] = []);
            c.push(b)
        },
        so = {};
    var xo = function(a) {
            a = a || {};
            var b;
            if (!bj() || Zi(vo)) {
                (b = wo(a)) || (b = Mj());
                var c = a,
                    d = yk(c.prefix),
                    e = yk(c.prefix),
                    f = wk[e];
                if (f) {
                    var g = f.split(".");
                    if (2 === g.length) {
                        var h = Number(g[1]) || 0;
                        if (h) {
                            var l = f;
                            b && (l = f + "." + b + "." + Math.floor(Ua() / 1E3));
                            Ak(e, l, c, 1E3 * h)
                        }
                    }
                }
                delete wk[d];
                delete xk[d];
                zk(d, c.path, c.domain);
                return wo(a)
            }
        },
        wo = function(a) {
            if (!bj() || Zi(vo)) {
                a = a || {};
                Bk(a, !1);
                var b = xk[yk(Cn(a.prefix))];
                if (b && !(18E5 < Ua() - 1E3 * b.fi)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < Ua() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        vo = T.g.K;
    var yo = function(a) {
            var b = [];
            m(a, function(c, d) {
                d = Bn(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ia);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Ao = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = ni("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Cn(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !nj(zo) && c,
                    g;
                g = En()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var h = Hn(a, e);
            return h ? yn(h) : []
        },
        Bo = function(a, b) {
            aj(zo) ? nj(zo) ? a() : gj(a, zo) : b ? S(42) : rj(function() {
                Bo(a, !0)
            }, [zo])
        },
        zo = T.g.K,
        Co = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Do = function(a, b) {
            return Ao("aw", a, b)
        },
        Eo = function(a, b) {
            return Ao("dc", a, b)
        },
        Fo = function(a) {
            var b = ni("gac");
            return b ? !nj(zo) && a ? "0" : decodeURIComponent(b) : yo(vn() ? rn() : {})
        },
        Go = function(a) {
            var b = ni("gacgb");
            return b ? !nj(zo) && a ? "0" : decodeURIComponent(b) : yo(vn() ? rn("_gac_gb", !0) : {})
        },
        Ho = function(a) {
            var b = En(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                ia: d,
                od: f
            });
            e && c.push({
                ia: e,
                od: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                ia: b.gbraid,
                od: "gb"
            });
            V(77) && 0 === c.length &&
                "aw.ds" === f && c.push({
                    ia: "",
                    od: "aw.ds"
                });
            Bo(function() {
                Bk(a);
                var g = wk[yk(a.prefix)];
                if (g) {
                    var h = ["auid=" + g];
                    if (V(15)) {
                        var l = I.referrer ? ji(li(I.referrer), "host") : "";
                        0 === c.length && Co.test(l) && c.push({
                            ia: "",
                            od: ""
                        });
                        if (0 === c.length) return;
                        l && h.push("ref=" + encodeURIComponent(l));
                        var n = 1 === kl() ? z.top.location.href : z.location.href;
                        n = n.replace(/[\?#].*$/, "");
                        h.push("url=" + encodeURIComponent(n));
                        h.push("tft=" + Ua());
                        var p = oc();
                        void 0 !== p && h.push("tfd=" + Math.round(p));
                        if (V(76)) {
                            var q = kl();
                            h.push("frm=" + q)
                        }
                    }
                    if (0 <
                        c.length)
                        for (var r = eh.joined_auid = eh.joined_auid || {}, u = 0; u < c.length; u++) {
                            var t = c[u],
                                v = t.ia,
                                w = t.od,
                                y = (a.prefix || "_gcl") + "." + w + "." + v;
                            if (!r[y]) {
                                var x = "https://adservice.google.com/pagead/regclk?" + h.join("&");
                                "" !== v ? x = "gb" === w ? x + "&wbraid=" + v : x + "&gclid=" + v + "&gclsrc=" + w : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                                mc(x);
                                r[y] = !0
                            }
                        }
                }
            })
        },
        Io = function(a) {
            return ni("gclaw") || ni("gac") || 0 < (En().aw || []).length ? !1 : 0 < (En().gb || []).length ? !0 : Sn(a)
        };
    var Jo = function(a, b, c, d, e, f, g, h, l, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.N = d;
            this.B = e;
            this.F = f;
            this.U = g;
            this.D = h;
            this.eventMetadata = l;
            this.aa = n;
            this.Z = p;
            this.J = q
        },
        U = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.N[b]) return a.N[b];
            if (void 0 !== a.B[b]) return a.B[b];
            fm && Ko(a, a.F[b], a.U[b]) && (S(71), S(79));
            return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c
        },
        Lo = function(a) {
            function b(g) {
                for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1
            }
            var c = {};
            b(a.h);
            b(a.N);
            b(a.B);
            b(a.F);
            if (fm)
                for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        S(71);
                        S(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        Mo = function(a, b, c) {
            function d(l) {
                Fc(l) && m(l, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.D[b]), d(a.F[b]), d(a.B[b]), d(a.N[b]));
            c && 2 !== c || d(a.h[b]);
            if (fm) {
                var g = f,
                    h = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.D[b]), d(a.U[b]), d(a.B[b]), d(a.N[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Ko(a, e, h)) S(71), S(81);
                f = g;
                e = h
            }
            return f ? e : void 0
        },
        No = function(a) {
            var b = [T.g.Mc, T.g.Td, T.g.Ud, T.g.Vd, T.g.Wd, T.g.Xd, T.g.Yd],
                c = {},
                d = !1,
                e = function(h) {
                    for (var l = 0; l < b.length; l++) void 0 !== h[b[l]] && (c[b[l]] = h[b[l]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.N) || e(a.B)) return c;
            e(a.F);
            if (fm) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.U);
                Ko(a, c, f) && (S(71), S(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.D);
            return c
        },
        Ko = function(a, b, c) {
            if (!fm) return !1;
            try {
                if (b === c) return !1;
                var d = Dc(b);
                if (d !== Dc(c) || !(Fc(b) && Fc(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Ko(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Ko(a, b[g], c[g])) return !0
                }
            } catch (h) {
                S(72)
            }
            return !1
        },
        Oo = function(a, b) {
            this.uj = a;
            this.vj = b;
            this.F = {};
            this.Bh = {};
            this.h = {};
            this.N = {};
            this.B = {};
            this.bd = {};
            this.D = {};
            this.Gc = function() {};
            this.eb = function() {};
            this.U = !1
        },
        Po = function(a, b) {
            a.F = b;
            return a
        },
        Qo = function(a, b) {
            a.Bh = b;
            return a
        },
        Ro = function(a, b) {
            a.h = b;
            return a
        },
        So = function(a, b) {
            a.N = b;
            return a
        },
        To = function(a, b) {
            a.B = b;
            return a
        },
        Uo = function(a,
            b) {
            a.bd = b;
            return a
        },
        Vo = function(a, b) {
            a.D = b || {};
            return a
        },
        Wo = function(a, b) {
            a.Gc = b;
            return a
        },
        Xo = function(a, b) {
            a.eb = b;
            return a
        },
        Yo = function(a) {
            a.U = !0;
            return a
        },
        Zo = function(a) {
            return new Jo(a.uj, a.vj, a.F, a.Bh, a.h, a.N, a.B, a.bd, a.D, a.Gc, a.eb, a.U)
        };
    var ap = function(a, b) {
            var c = a.gi,
                d = a.Ai;
            a.Wh && (tk(c[T.g.ic], !!c[T.g.V]) && (Jn($o, b), V(73) && Ek(b)), Gn(b), Mn($o, b), Ho(b));
            c[T.g.V] && (Ln($o, c[T.g.V], c[T.g.jc], !!c[T.g.Lb], b.prefix), V(73) && Fk(c[T.g.V], c[T.g.jc], !!c[T.g.Lb], b));
            d && On($o)
        },
        bp = function(a, b, c, d) {
            var e = a.Di,
                f = a.callback,
                g = a.ii;
            if ("function" === typeof f)
                if (e === T.g.ac && void 0 === g) {
                    var h = d(b.prefix, c);
                    0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
                } else e === T.g.Od ? (S(65), Bk(b, !1), f(wk[yk(b.prefix)])) : f(g)
        },
        $o = ["aw", "dc", "gb"];
    var cp = function() {
        var a = Wb && Wb.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };

    function dp() {
        return "attribution-reporting"
    }

    function ep(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var fp = !1;

    function gp() {
        if (ep("join-ad-interest-group") && Ea(Wb.joinAdInterestGroup)) return !0;
        fp || (il('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), fp = !0);
        return ep("join-ad-interest-group") && Ea(Wb.joinAdInterestGroup)
    }

    function hp(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ua() - d) {
                wb("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                wb("TAGGING", 10);
                return
            }
        } catch (e) {}
        ec(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ua()
        }, c)
    }

    function ip() {
        return V(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };
    var jp = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        kp = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        lp = /^\d+\.fls\.doubleclick\.net$/,
        mp = /;gac=([^;?]+)/,
        np = /;gacgb=([^;?]+)/,
        op = /;gclaw=([^;?]+)/,
        pp = /;gclgb=([^;?]+)/;

    function qp(a, b) {
        if (lp.test(I.location.host)) {
            var c = I.location.href.match(b);
            return c && 2 == c.length && c[1].match(jp) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].ia);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var rp = function(a, b, c) {
        var d = vn() ? rn("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var h = Pn("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(l) {
                return 1 === l
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            fk: f ? e.join(";") : "",
            ek: qp(d, np)
        }
    };

    function sp(a, b, c) {
        if (lp.test(I.location.host)) {
            var d = I.location.href.match(c);
            if (d && 2 == d.length && d[1].match(kp)) return [{
                ia: d[1]
            }]
        } else return xn((a || "_gcl") + b);
        return []
    }
    var tp = function(a) {
            return sp(a, "_aw", op).map(function(b) {
                return b.ia
            }).join(".")
        },
        up = function(a) {
            return sp(a, "_gb", pp).map(function(b) {
                return b.ia
            }).join(".")
        },
        vp = function(a, b) {
            var c = Pn((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var wp = function() {
        if (Ea(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var xp = function() {
            var a = I.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        yp = function(a) {
            a.metadata.speculative_in_message || (a.metadata.speculative = !1)
        },
        zp = function(a, b) {
            Ia(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        Ap = function(a) {
            var b = a.target.O[0];
            if (b) {
                a.C[T.g.Nc] = b;
                var c = a.target.O[1];
                c && (a.C[T.g.hb] = c)
            } else a.M = !0
        },
        Bp =
        function(a) {
            if (zp(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.C[T.g.hb],
                    c = !0 === U(a.s, T.g.Ye);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && yp(a);
                        Ki() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.M = !0);
                        break;
                    case "remarketing":
                        !c && b || yp(a)
                }
                a.C[T.g.Dh] = a.metadata.is_gcp_conversion ? "www.google.com" : "www.googleadservices.com"
            }
        },
        Cp = function(a) {
            zp(a, ["conversion", "remarketing"])
        },
        Dp =
        function(a) {
            if (zp(a, ["conversion", "remarketing"])) {
                var b = kl();
                a.C[T.g.ah] = b;
                var c = U(a.s, T.g.Ta);
                c || (c = 1 === b ? z.top.location.href : z.location.href);
                var d = a.C,
                    e = T.g.Ta,
                    f;
                if (null != c) {
                    var g = String(c).substring(0, 512),
                        h = g.indexOf("#");
                    f = -1 == h ? g : g.substring(0, h)
                } else f = "";
                d[e] = f;
                po(a, T.g.Ua, I.referrer);
                a.C[T.g.kc] = xp();
                po(a, T.g.Sa);
                var l = Vh();
                a.C[T.g.Nb] = l.width + "x" + l.height
            }
        },
        Ep = function(a) {
            zp(a, ["conversion", "remarketing"]) && (po(a, T.g.Va), po(a, T.g.qa), po(a, T.g.sa), "remarketing" === a.metadata.hit_type && po(a,
                T.g.Aa))
        },
        Fp = function(a) {
            if (V(13))
                if (!jn(z)) S(87);
                else if (void 0 !== ln) {
                S(85);
                var b = gn();
                b ? pn(b, a) : S(86)
            }
        },
        Hp = function(a) {
            zp(a, ["conversion"]) && (!0 === z._gtmpcm || cp() ? a.C[T.g.Oc] = "2" : V(7) && (Gp || ep(dp()) || (il('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Gp = !0), ep(dp()) && (a.C[T.g.Oc] = "1")))
        },
        Ip = function(a) {
            zp(a, ["conversion", "remarketing"]) && V(9) && nj(T.g.K) && !1 !== U(a.s, T.g.Fa) && !1 !== U(a.s, T.g.da) && !1 !== U(a.s, T.g.Jb) && !1 !== U(a.s, T.g.La) && gp() && (a.C[T.g.Sg] = "1", a.metadata.send_fledge_experiment = !0)
        },
        Jp = function(a) {
            var b = function(d) {
                return U(a.s, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(T.g.xa);
            var c = {
                prefix: b(T.g.Ka) || b(T.g.ib),
                domain: b(T.g.vb),
                Db: b(T.g.Ra),
                flags: b(T.g.wb)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(T.g.na) && !1 !== b(T.g.na);
            a.metadata.allow_ad_personalization = !1 !== b(T.g.da)
        },
        Kp = function(a) {
            if (qo(a, "ccd_add_1p_data", !1) && nj(T.g.K)) {
                var b = Fi(a.s);
                if (Hi(b)) {
                    if (b.enable_code) {
                        var c = U(a.s, T.g.va);
                        if (Fc(c) || null === c) a.metadata.user_data_from_code = c
                    }
                    Fc(b.selectors) &&
                        (a.metadata.user_data_from_manual = Ei(b.selectors))
                }
            }
        },
        Lp = function(a) {
            var b = !a.metadata.send_user_data_hit && zp(a, ["conversion", "user_data_web"]),
                c = !qo(a, "ccd_add_1p_data", !1) && zp(a, "user_data_lead");
            if ((b || c) && nj(T.g.K)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.s,
                    f = void 0,
                    g = U(e, T.g.va);
                if (d) {
                    var h = (U(e, T.g.Tc) || {})[a.C[T.g.hb]];
                    if (!0 === U(e, T.g.Nd) || h) {
                        var l;
                        var n;
                        if (h) b: {
                            switch (h.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && Fc(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = h.enhanced_conversions_manual_var;
                                    n = void 0 !==
                                        p ? p : z.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = Ei(h[T.g.Qg]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = z.enhanced_conversion_data;
                        var q = n,
                            r = (h || {}).enhanced_conversions_mode,
                            u;
                        if (q) {
                            if ("manual" === r) switch (q._tag_mode) {
                                case "CODE":
                                    u = "c";
                                    break;
                                case "AUTO":
                                    u = "a";
                                    break;
                                case "MANUAL":
                                    u = "m";
                                    break;
                                default:
                                    u = "c"
                            } else u = "automatic" === r ? Ji(h) ? "a" : "m" : "c";
                            l = {
                                cb: q,
                                Ci: u
                            }
                        } else l = {
                            cb: q,
                            Ci: void 0
                        };
                        var t = l,
                            v = t.Ci;
                        f = t.cb;
                        a.C[T.g.vh] = v
                    }
                } else {
                    if (a.metadata.is_config_command || !a.s.J && !Gi(a.s)) return;
                    Hi(Fi(a.s)) && null !== g && (Fc(g) ?
                        f = g : f = Ii(Fi(a.s)), f && yp(a))
                }
                a.metadata.user_data = f
            }
        },
        Mp = function(a) {
            zp(a, ["conversion", "remarketing"]) && (a.s.J ? "conversion" !== a.metadata.hit_type && a.eventName && (a.C[T.g.Rg] = a.eventName) : a.C[T.g.Rg] = a.eventName, m(a.s.h, function(b, c) {
                ch[b.split(".")[0]] || (a.C[b] = c)
            }))
        },
        Np = function(a) {
            if (a.eventName === T.g.Ea && (a.metadata.is_config_command = !0, zp(a, "conversion") && (a.metadata.speculative = !0), !zp(a, "remarketing") || !1 !== U(a.s, T.g.Jb) && !1 !== U(a.s, T.g.La) || (a.metadata.speculative = !0), zp(a, "landing_page"))) {
                var b =
                    U(a.s, T.g.bc),
                    c = U(a.s, T.g.ya) || {},
                    d = U(a.s, T.g.zb),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                ap({
                    Wh: e,
                    Sj: b,
                    gi: c,
                    Ai: d
                }, f);
                no(a.target, a.s);
                Wn({
                    Jf: !1,
                    Me: a.metadata.redact_ads_data,
                    ca: a.target.id,
                    eventId: a.s.eventId,
                    priorityId: a.s.priorityId,
                    uc: e ? f : void 0,
                    He: e,
                    Zh: a.C[T.g.kf],
                    Uf: a.C[T.g.hc],
                    Qf: a.C[T.g.fc]
                });
                a.M = !0
            }
        },
        Op = function(a) {
            if (!qo(a, "hasPreAutoPiiCcdRule", !1)) {
                var b = V(50);
                if ((!V(49) || b || a.s.J) && zp(a, "conversion") && nj(T.g.K)) {
                    var c = (U(a.s, T.g.Tc) || {})[a.C[T.g.hb]],
                        d = a.C[T.g.Nc],
                        e;
                    if (!(e = Ji(c)))
                        if ("false" !== oi.Ii && ui)
                            if (vi) e = !0;
                            else {
                                var f = Uh("AW-" + d);
                                e = !!f && !!f.preAutoPii
                            }
                    else e = !1;
                    if (e) {
                        var g = Ua(),
                            h = Bi({
                                wc: !0,
                                xc: !0,
                                vi: !0
                            });
                        if (0 !== h.elements.length) {
                            for (var l = [], n = 0; n < h.elements.length; ++n) {
                                var p = h.elements[n];
                                l.push(p.querySelector + "*" + Ci(p) + "*" + p.type)
                            }
                            a.C[T.g.sh] = l.join("~");
                            var q = h.ng;
                            q && (a.C[T.g.th] = q.querySelector, a.C[T.g.rh] = Ci(q));
                            a.C[T.g.qh] = String(Ua() - g);
                            a.C[T.g.uh] = h.status
                        }
                    }
                }
            }
        },
        Pp = function(a) {
            if (a.eventName === T.g.Ja && !a.s.J) {
                if (!a.metadata.consent_updated && zp(a,
                        "conversion")) {
                    var b = U(a.s, T.g.xb);
                    if ("function" !== typeof b) return;
                    var c = String(U(a.s, T.g.jb)),
                        d = a.C[c],
                        e = U(a.s, c);
                    c === T.g.ac || c === T.g.Od ? bp({
                        Di: c,
                        callback: b,
                        ii: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, Do) : b(d || e)
                }
                a.M = !0
            }
        },
        Qp = function(a) {
            if (zp(a, "conversion") && nj(T.g.K) && (a.C[T.g.se] || a.C[T.g.ie])) {
                var b = a.C[T.g.hb],
                    c = K(a.metadata.cookie_options),
                    d = Cn(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.C[T.g.se]) {
                    var e = vp(b, c);
                    e && (a.C[T.g.xh] = e)
                }
                if (a.C[T.g.ie]) {
                    var f = rp(b, c).fk;
                    f && (a.C[T.g.Wg] =
                        f)
                }
            }
        },
        Rp = function(a) {
            var b = V(4),
                c = a.s,
                d, e, f;
            if (!b) {
                var g = Mo(c, T.g.fa);
                d = eb(Fc(g) ? g : {})
            }
            var h = Mo(c, T.g.fa, 1),
                l = Mo(c, T.g.fa, 2);
            e = eb(Fc(h) ? h : {}, ".");
            f = eb(Fc(l) ? l : {}, ".");
            b || (a.C[T.g.kf] = d);
            a.C[T.g.hc] = e;
            a.C[T.g.fc] = f
        },
        Sp = function(a) {
            if (zp(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== T.g.Ha || (po(a, T.g.ja), b && (po(a, T.g.Sd), po(a, T.g.Qd), po(a, T.g.Rd), po(a, T.g.Pd), a.C[T.g.Mg] = a.eventName))
            }
        },
        Tp = function(a) {
            if (zp(a, ["conversion", "remarketing"])) {
                var b = a.s,
                    c = U(b,
                        T.g.Mb);
                if (!0 === c || !1 === c) a.C[T.g.Mb] = c;
                var d = U(b, T.g.da);
                if (!0 === d || !1 === d) a.C[T.g.Gh] = !d;
                !1 === d && zp(a, "remarketing") && (a.M = !0)
            }
        },
        Up = function(a) {
            zp(a, "conversion") && (po(a, T.g.Vc), po(a, T.g.Zd), po(a, T.g.Yc), po(a, T.g.ce), po(a, T.g.Qc), po(a, T.g.ae))
        },
        Vp = function(a) {
            to(a);
        },
        Wp = function(a) {
            if (zp(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (Ea(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.C[T.g.Zg] = c)
                } catch (d) {}
            }
        },
        Xp = function(a) {
            if (zp(a, ["conversion", "remarketing"])) {
                var b = wp();
                void 0 !== b && (a.C[T.g.wh] = b || "error");
                var c = Wl();
                c && (a.C[T.g.Xg] = c);
                var d = Vl();
                d && (a.C[T.g.mh] = d)
            }
        },
        Yp = function(a) {
            zp(a, ["conversion"]) && "1" === kk(!1)._up && (a.C[T.g.bh] = !0)
        },
        Zp = function(a) {
            zp(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !nj(T.g.K))
        },
        $p = function(a) {
            if (zp(a, ["conversion", "user_data_lead", "user_data_web"]) && nj(T.g.K) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c =
                    Cn(b.prefix);
                "_gcl" === c && (c = "");
                var d = c;
                if (lp.test(I.location.host) ? op.test(I.location.href) || mp.test(I.location.href) : !Sn(d)) {
                    var e = tp(c);
                    e && (a.C[T.g.ac] = e);
                    if (!c) {
                        var f = qp(vn() ? rn() : {}, mp);
                        f && (a.C[T.g.Vg] = f)
                    }
                } else {
                    var g = up(c);
                    g && (a.C[T.g.se] = g);
                    if (!c) {
                        var h = a.C[T.g.hb];
                        b = K(b);
                        b.prefix = c;
                        var l = rp(h, b, !0).ek;
                        l && (a.C[T.g.ie] = l)
                    }
                }
            }
        },
        aq = function(a) {
            if (zp(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && nj(T.g.K)) {
                var b = !V(3);
                if ("remarketing" !== a.metadata.hit_type ||
                    b) {
                    var c = a.metadata.cookie_options;
                    Bk(c, "conversion" === a.metadata.hit_type && a.eventName !== T.g.Ja);
                    a.C[T.g.Od] = wk[yk(c.prefix)]
                }
            }
        },
        bq = function(a) {
            if (zp(a, ["conversion"])) {
                var b = wo(a.metadata.cookie_options);
                if (b && !a.C[T.g.Va]) {
                    var c = Mj(a.C[T.g.hb]);
                    a.C[T.g.Va] = c
                }
                b && (a.C[T.g.yb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        cq = function(a) {
            var b = !nj(T.g.K);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.M = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.M = b;
                    break;
                case "conversion":
                    a.metadata.consent_updated &&
                        (a.C[T.g.zg] = !0)
            }
        },
        dq = function(a) {
            zp(a, ["conversion"]) && a.s.eventMetadata.is_external_event && (a.C[T.g.Eh] = !0)
        },
        eq = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    yp(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    yp(a);
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && S(b);
            !0 === a.metadata.speculative && (a.M = !0)
        },
        Gp = !1;
    var fq = function(a) {
        if (nj(T.g.K)) return a;
        a = a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = mi(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        });
        return a = a.replace(/&ref=([^&#]+)/, function(b, c) {
            var d = mi(decodeURIComponent(c));
            return "&ref=" + encodeURIComponent(d)
        })
    };
    var gq = {
        I: {
            yg: "ads_conversion_hit",
            wl: "container_execute_start",
            Bg: "container_setup_end",
            Fc: "container_setup_start",
            Ag: "container_execute_end",
            Cg: "container_yield_end",
            Ue: "container_yield_start",
            yh: "event_execute_end",
            zh: "event_setup_end",
            ad: "event_setup_start",
            Ah: "ga4_conversion_hit",
            nc: "page_load",
            Cl: "pageview",
            Ab: "snippet_load",
            Mh: "tag_callback_error",
            Nh: "tag_callback_failure",
            Oh: "tag_callback_success",
            Ph: "tag_execute_end",
            qc: "tag_execute_start"
        }
    };
    var hq = !1,
        iq = "L S Y E TC HTC".split(" "),
        jq = ["S", "E"],
        kq = ["TS", "TE"];
    var Hq = function(a, b, c, d, e, f) {
            var g = {};
            return g
        },
        Iq = function(a) {
            var b = !1;
            return b
        },
        Jq = function(a, b) {},
        Kq = function() {
            var a = {};
            return a
        },
        Aq = function() {
            var a = {};
            return a
        },
        Lq = function() {},
        Mq = function(a, b, c) {},
        Nq = function(a) {
            pc() && pc().mark(L.H + "_" + a + "_start")
        },
        Oq = function(a) {
            if (pc()) {
                var b = pc(),
                    c = L.H + "_" +
                    a + "_start",
                    d = L.H + "_" + a + "_duration";
                b.measure(d, c);
                var e = pc().getEntriesByName(d)[0];
                b.clearMarks(c);
                b.clearMeasures(d);
                var f = eh._p || {};
                void 0 === f[a] && (f[a] = e.duration, eh._p = f);
                return e.duration
            }
        },
        Pq = function() {
            var a = Hq("PAGEVIEW");
            if (sq(a.lb, "mark")[0]) {
                var b = pc();
                b.clearMarks(a.lb);
                b.clearMeasures("GTM-" + gq.I.nc + ":to:PAGEVIEW")
            }
            var c = Hq(gq.I.nc);
            Iq(a) && Jq(a, c)
        };
    var Qq = function(a, b) {
        var c = z,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Rq = function(a, b) {
        var c = el(a, "fmt");
        if (b) {
            var d = el(a, "random"),
                e = el(a, "label") || "";
            if (!d) return !1;
            var f = dn(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!Qq(f, b)) return !1
        }
        c && 4 != c && (a = gl(a, "rfmt", c));
        var g = gl(a, "fmt", 4);
        cc(g, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, void 0, I.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Sq = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    h;
                for (h in d) "google_business_vertical" !== h && (h in g || (g[h] = []), g[h].push(d[h]))
            }
            return Object.keys(b).map(function(l) {
                return b[l]
            })
        },
        Tq = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        Uq = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        Wq = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(Vq(d.value)), e.push(Vq(d.quantity)),
                    e.push(Vq(d.item_id)), e.push(Vq(d.start_date)), e.push(Vq(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        Vq = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        Yq = function(a, b) {
            var c = Xq(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        Xq = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            m(a, function(c, d) {
                var e, f;
                if (Ia(d)) {
                    for (var g = [], h = 0; h < d.length; ++h) {
                        var l = Zq(d[h]);
                        void 0 != l && g.push(l)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    Zq(d);
                e = f;
                var n = Zq(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        Zq = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        $q = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            m(b, d);
            return c.join("&")
        },
        ar = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.C[T.g.Nc],
                e = nj(T.g.K),
                f = [],
                g, h = a.s.aa,
                l, n = Lk() ? 2 : 3,
                p = 0,
                q = function(w) {
                    f.push(w);
                    w.ab && p++
                };
            switch (c) {
                case "conversion":
                    l = "pagead/conversion";
                    var r = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", l = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({
                        ob: "" + g + l + "/" + d + "/?" + $q(a, b) + r,
                        format: n,
                        ab: !0
                    });
                    a.metadata.send_ccm_parallel_ping && q({
                        ob: "" +
                            g + "ccm/conversion/" + d + "/?" + $q(a, b) + r,
                        format: 2,
                        ab: !0
                    });
                    a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
                        ob: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + $q(a, b) + r,
                        format: n,
                        ab: !0
                    }));
                    break;
                case "remarketing":
                    var u = b.data || "",
                        t = Sq(Tq(a.C[T.g.ja]));
                    if (t.length) {
                        for (var v = 0; v < t.length; v++) b.data = Yq(u, t[v]), q({
                            ob: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + $q(a, b),
                            format: n,
                            ab: !0
                        }), a.metadata.send_fledge_experiment && q({
                            ob: ip() +
                                "/td/rul/" + d + "?" + $q(a, b),
                            format: 4,
                            ab: !1
                        }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        ob: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + $q(a, b),
                        format: n,
                        ab: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        ob: "https://google.com/pagead/form-data/" + d + "?" + $q(a, b),
                        format: 1,
                        ab: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        ob: "https://google.com/ccm/form-data/" + d + "?" + $q(a, b),
                        format: 1,
                        ab: !0
                    })
            }
            1 < f.length && Ea(a.s.aa) && (h = fb(a.s.aa, p));
            Lk() || "conversion" !== c && "remarketing" !==
                c || !a.metadata.send_fledge_experiment || q({
                    ob: ip() + "/td/rul/" + d + "?" + $q(a, b),
                    format: 4,
                    ab: !1
                });
            return {
                aa: h,
                qk: f
            }
        },
        br = function(a, b, c, d, e) {
            if (V(70)) {
                var f = Hq(gq.I.yg, L.fb, c.s.eventId, void 0, c.eventName);
                Iq(f) && Jq(f)
            }
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    mc(a);
                    e && e();
                    break;
                case 2:
                    fc(a, g);
                    break;
                case 3:
                    var h = !1;
                    try {
                        h = Rq(a, g)
                    } catch (p) {
                        h = !1
                    }
                    h || br(a, 2, c, d, g);
                    break;
                case 4:
                    var l = "AW-" + c.C[T.g.Nc],
                        n = c.C[T.g.hb];
                    n && (l = l + "/" + n);
                    hp(a, l)
            }
        },
        cr = {},
        dr = (cr[T.g.zg] = "gcu", cr[T.g.ac] = "gclaw", cr[T.g.Od] = "auid", cr[T.g.Pd] =
            "dscnt", cr[T.g.Qd] = "fcntr", cr[T.g.Rd] = "flng", cr[T.g.Sd] = "mid", cr[T.g.Mg] = "bttype", cr[T.g.hb] = "label", cr[T.g.Oc] = "capi", cr[T.g.sa] = "currency_code", cr[T.g.Zd] = "vdltv", cr[T.g.bj] = "_dbg", cr[T.g.ce] = "oedeld", cr[T.g.fc] = "edid", cr[T.g.Sg] = "fledge", cr[T.g.Vg] = "gac", cr[T.g.ie] = "gacgb", cr[T.g.Wg] = "gacmcov", cr[T.g.Xg] = "gdpr", cr[T.g.hc] = "gdid", cr[T.g.Zg] = "gsaexp", cr[T.g.ah] = "frm", cr[T.g.bh] = "gtm_up", cr[T.g.kf] = "did", cr[T.g.Vc] = void 0, cr[T.g.Ta] = "url", cr[T.g.Ua] = "ref", cr[T.g.kc] = "tiba", cr[T.g.Mb] = "rdp", cr[T.g.yb] =
            "ecsid", cr[T.g.Yc] = "delopc", cr[T.g.mh] = "gdpr_consent", cr[T.g.Va] = "oid", cr[T.g.qh] = "ec_lat", cr[T.g.rh] = "ec_meta", cr[T.g.sh] = "ec_m", cr[T.g.th] = "ec_sel", cr[T.g.uh] = "ec_s", cr[T.g.vh] = "ec_mode", cr[T.g.Aa] = "userId", cr[T.g.wh] = "us_privacy", cr[T.g.qa] = "value", cr[T.g.se] = "gclgb", cr[T.g.xh] = "mcov", cr[T.g.Dh] = "hn", cr[T.g.Eh] = "gtm_ee", cr[T.g.Gh] = "npa", cr[T.g.Nc] = null, cr[T.g.Nb] = null, cr[T.g.Sa] = null, cr[T.g.ja] = null, cr),
        fr = function(a) {
            er(a, function(b) {
                for (var c = ar(a, b), d = c.aa, e = c.qk, f = 0; f < e.length; f++) {
                    var g = e[f],
                        h = g.ob,
                        l = g.format,
                        n = g.ab,
                        p = a.metadata.redact_ads_data ? fq(h) : h;
                    br(p, l, a, b, n ? d : void 0)
                }
            })
        },
        er = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = Xk();
            bj() && "remarketing" !== c && (d.gcs = oj(), cj() && (d.gcd = "G1" + jj($i)));
            if (a.C[T.g.Nb]) {
                var h = a.C[T.g.Nb].split("x");
                2 === h.length && (d.u_w = h[0], d.u_h = h[1])
            }
            if (a.C[T.g.Sa]) {
                var l = a.C[T.g.Sa];
                2 === l.length ? d.hl = l : 5 ===
                    l.length && (d.hl = l.substring(0, 2), d.gl = l.substring(3, 5))
            }
            V(13) && (dr[T.g.qf] = "uaa", dr[T.g.rf] = "uab", dr[T.g.sf] = "uafvl", dr[T.g.tf] = "uamb", dr[T.g.uf] = "uam", dr[T.g.vf] = "uap", dr[T.g.wf] = "uapv", dr[T.g.xf] = "uaw");
            m(a.C, function(t, v) {
                if (dr.hasOwnProperty(t)) {
                    var w = dr[t];
                    w && (d[w] = v)
                } else e[t] = v
            });
            var n = a.C[T.g.Vc];
            void 0 != n && "" !== n && (d.vdnc = String(n));
            var p = a.C[T.g.ae];
            void 0 !== p && (d.shf = p);
            var q = a.C[T.g.Qc];
            void 0 !== q && (d.delc = q);
            d.data = Xq(e);
            var r = a.C[T.g.ja];
            r && "conversion" === c && (d.iedeld = Li(r), d.item = Wq(Uq(r)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!V(68) || nj(T.g.K))) {
                var u = Pg(a.metadata.user_data);
                u && f.push(u.then(function(t) {
                    d.em = t.kg;
                    if ("user_data_web" === c && 0 < t.Nk) {
                        var v = xo(a.metadata.cookie_options);
                        d.ecsid = v
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (t) {}
            b(d)
        };
    var gr = function() {
            this.h = {}
        },
        hr = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        ir = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        kr = function(a, b, c, d) {
            if (!bj()) {
                jr(a, b, c, d);
                return
            }
            rj(function() {
                nj(T.g.K) ? jr(a, b, c, d) : d && d()
            }, [T.g.K]);
        };
    var lr = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return Ao("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Go(c)
                    },
                    gclaw: function() {
                        return Do(b, c).join(".")
                    },
                    gac: function() {
                        return Fo(c)
                    }
                },
                e = Io(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                h = d[g],
                l = (0, d[f])(),
                n = "_gcl" !== b ? "" : h();
            l && hr(a, f, l);
            n && hr(a, g, n)
        },
        jr = function(a, b, c, d) {
            c = c || {};
            var e = c.uc || {},
                f = new gr;
            Og(b, function(g, h) {
                hr(f, "em", g);
                hr(f, "gtm", Xk());
                bj() && (hr(f, "gcs", oj()), hr(f, "gcd", "G1" + jj($i)));
                lr(f, Cn(e.prefix), c.Me);
                hr(f, "auid", wk[yk(e.prefix)]);
                if (0 < h) {
                    var l = xo(e);
                    hr(f, "ecsid", l)
                }
                var n = ir(f);
                mc("https://google.com/pagead/form-data/" + a + "?" + n);
                mc("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function mr(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return li("" + c + b).href
        }
    }

    function nr() {
        return !!dh.xe && "SGTM_TOKEN" !== dh.xe.split("@@").join("")
    };
    var pr = function(a, b, c, d) {
            if (!or() && !Sk(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + dh.ka,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var h = nr();
                h && (f += "&sign=" + dh.xe);
                var l = mh || oh ? mr(b, e + f) : void 0;
                if (!l) {
                    var n = dh.Md + e;
                    h && Xb && g && (n = Xb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    l = bo("https://", "http://", n + f)
                }
                Qk().container[a] = {
                    state: 1,
                    context: d
                };
                cc(l)
            }
        },
        qr = function(a, b, c) {
            var d;
            if (d = !or()) {
                var e = Qk().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Tk()) Qk().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, S(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + dh.ka + "&cx=c";
                    nr() && (f += "&sign=" + dh.xe);
                    var g = mh || oh ? mr(b, f) : void 0;
                    g || (g = bo("https://", "http://", dh.Md + f));
                    Qk().destination[a] = {
                        state: 1,
                        context: c
                    };
                    cc(g)
                }
        };

    function or() {
        if (Lk()) {
            return !0
        }
        return !1
    };
    var rr = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        sr = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        tr = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ur = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        xr = function(a) {
            var b = Eh("gtm.allowlist") || Eh("gtm.whitelist");
            b && S(9);
            kh && (b = ["google", "gtagfl", "lcl", "zone"]);
            vr() && (kh ?
                S(116) : S(117), wr && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && $a(Ra(b), sr),
                d = Eh("gtm.blocklist") || Eh("gtm.blacklist");
            d || (d = Eh("tagTypeBlacklist")) && S(3);
            d ? S(8) : d = [];
            vr() && (d = Ra(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ra(d).indexOf("google") && S(2);
            var e = d && $a(Ra(d), tr),
                f = {};
            return function(g) {
                var h = g && g[Zd.Wa];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = wh[h] || [],
                    n = a(h, l);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > c.indexOf(l[q])) {
                                        S(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var u = 0 <= e.indexOf(h);
                    if (u) r = u;
                    else {
                        var t = Na(e, l || []);
                        t && S(10);
                        r = t
                    }
                }
                var v = !n || r;
                v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Na(e, ur));
                return f[h] = v
            }
        },
        wr = !1;
    var vr = function() {
        return rr.test(z.location && z.location.hostname)
    };
    var yr = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        zr = {},
        Ar = Object.freeze((zr[T.g.La] = !0, zr)),
        Br = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
        Dr = function(a, b, c) {
            if (fm && "config" === a && !(1 < Zn(b).O.length)) {
                var d, e = Yb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = K(c.F);
                K(c.h, f);
                var g = [],
                    h;
                for (h in d) {
                    var l = Cr(d[h], f);
                    l.length && (Br && console.log(l), g.push(h))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        pm = pm ? pm + "!" + n : "&tdc=" + n
                    }
                    wb("TAGGING",
                        yr[I.readyState] || 14)
                }
                d[b] = f
            }
        };

    function Er(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Cr(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var u = r[q];
                return void 0 === u ? Ar[q] : u
            },
            f;
        for (f in Er(a, b)) {
            var g = (d ? d + "." : "") + f,
                h = e(f, a),
                l = e(f, b),
                n = "object" === Dc(h) || "array" === Dc(h),
                p = "object" === Dc(l) || "array" === Dc(l);
            if (n && p) Cr(h, l, c, g);
            else if (n || p || h !== l) c[g] = !0
        }
        return Object.keys(c)
    };
    var Fr = !1,
        Gr = 0,
        Hr = [];

    function Ir(a) {
        if (!Fr) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Fr = !0;
                for (var e = 0; e < Hr.length; e++) J(Hr[e])
            }
            Hr.push = function() {
                for (var f = 0; f < arguments.length; f++) J(arguments[f]);
                return 0
            }
        }
    }

    function Jr() {
        if (!Fr && 140 > Gr) {
            Gr++;
            try {
                I.documentElement.doScroll("left"), Ir()
            } catch (a) {
                z.setTimeout(Jr, 50)
            }
        }
    }
    var Kr = function(a) {
        Fr ? a() : Hr.push(a)
    };
    var Mr = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: L.H
        }
    };
    var Or = function(a, b) {
            this.h = !1;
            this.F = [];
            this.N = {
                tags: []
            };
            this.U = !1;
            this.B = this.D = 0;
            Nr(this, a, b)
        },
        Pr = function(a, b, c, d) {
            if (hh.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Fc(d) && (e = K(d, e));
            e.id = c;
            e.status = "timeout";
            return a.N.tags.push(e) - 1
        },
        Qr = function(a, b, c, d) {
            var e = a.N.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Rr = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        Nr = function(a, b, c) {
            void 0 !== b && a.ze(b);
            c && z.setTimeout(function() {
                return Rr(a)
            }, Number(c))
        };
    Or.prototype.ze = function(a) {
        var b = this,
            c = Xa(function() {
                return J(function() {
                    a(L.H, b.N)
                })
            });
        this.h ? c() : this.F.push(c)
    };
    var Sr = function(a) {
            a.D++;
            return Xa(function() {
                a.B++;
                a.U && a.B >= a.D && Rr(a)
            })
        },
        Tr = function(a) {
            a.U = !0;
            a.B >= a.D && Rr(a)
        };
    var Ur = {},
        Vr = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        Wr = !1;
    var Xr = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Ta());
                z[b] = c
            }
            return z[b]
        },
        Yr = function(a) {
            if (bj()) {
                var b = Vr();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function Zr() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var $r = function(a) {},
        as = function(a, b) {
            return function() {
                var c = Vr(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function fs(a, b, c, d) {
        var e = ye[a],
            f = gs(a, b, c, d);
        if (!f) return null;
        var g = Je(e[Zd.Lh], c, []);
        if (g && g.length) {
            var h = g[0];
            f = fs(h.index, {
                aa: f,
                Z: 1 === h.ai ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function gs(a, b, c, d) {
        function e() {
            if (f[Zd.Aj]) h();
            else {
                var w = Ke(f, c, []),
                    y = w[Zd.Ki];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!nj(y[x])) {
                            h();
                            return
                        }
                var A = Pr(c.Cb, String(f[Zd.Wa]), Number(f[Zd.Bb]), w[Zd.Bj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var G = Ua() - H;
                        Rm(c.id, ye[a], "5", G);
                        Qr(c.Cb, A, "success", G);
                        V(70) && Mq(c, f, gq.I.Oh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var G = Ua() - H;
                        Rm(c.id, ye[a], "6", G);
                        Qr(c.Cb, A, "failure", G);
                        V(70) && Mq(c, f, gq.I.Nh);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Rm(c.id, f, "1");
                var C = function() {
                    var G = Ua() - H;
                    Rm(c.id, f, "7", G);
                    Qr(c.Cb, A, "exception", G);
                    V(70) && Mq(c, f, gq.I.Mh);
                    B || (B = !0, h())
                };
                if (V(70)) {
                    var D = Hq(gq.I.qc, L.H, c.id, Number(f[Zd.Bb]), c.name, Yl(f));
                    Iq(D)
                }
                var H = Ua();
                try {
                    Ie(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (G) {
                    C(G)
                }
                V(70) && Mq(c, f, gq.I.Ph)
            }
        }
        var f = ye[a],
            g = b.aa,
            h = b.Z,
            l = b.terminate;
        if (c.Yf(f)) return null;
        var n = Je(f[Zd.Qh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = fs(p.index, {
                    aa: g,
                    Z: h,
                    terminate: l
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.ai ? l : q
        }
        if (f[Zd.Hh] || f[Zd.Dj]) {
            var r = f[Zd.Hh] ? ze : c.ml,
                u = g,
                t = h;
            if (!r[a]) {
                e = Xa(e);
                var v = hs(a, r, e);
                g =
                    v.aa;
                h = v.Z
            }
            return function() {
                r[a](u, t)
            }
        }
        return e
    }

    function hs(a, b, c) {
        var d = [],
            e = [];
        b[a] = is(d, e, c);
        return {
            aa: function() {
                b[a] = js;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            Z: function() {
                b[a] = ks;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function is(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function js(a) {
        a()
    }

    function ks(a, b) {
        b()
    };
    var ms = function(a, b) {
            return 1 === arguments.length ? ls("set", a) : ls("set", a, b)
        },
        ns = function(a, b) {
            return 1 === arguments.length ? ls("config", a) : ls("config", a, b)
        },
        os = function(a, b, c) {
            c = c || {};
            c[T.g.Ob] = a;
            return ls("event", b, c)
        };

    function ls(a) {
        return arguments
    }
    var ps = function() {
        this.h = [];
        this.B = []
    };
    ps.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.B.length; f++) try {
            this.B[f](e)
        } catch (g) {}
    };
    ps.prototype.listen = function(a) {
        this.B.push(a)
    };
    ps.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    ps.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var rs = function(a, b, c) {
            qs().enqueue(a, b, c)
        },
        ts = function() {
            var a = ss;
            qs().listen(a)
        };

    function qs() {
        var a = eh.mb;
        a || (a = new ps, eh.mb = a);
        return a
    }
    var Bs = function(a) {
            var b = eh.zones;
            return b ? b.getIsAllowedFn(Nk(), a) : function() {
                return !0
            }
        },
        Cs = function(a) {
            var b = eh.zones;
            return b ? b.isActive(Nk(), a) : !0
        };
    var Fs = function(a, b) {
        for (var c = [], d = 0; d < ye.length; d++)
            if (a[d]) {
                var e = ye[d];
                var f = Sr(b.Cb);
                try {
                    var g = fs(d, {
                        aa: f,
                        Z: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            l = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Ae[p];
                        l.call(h, {
                            yi: n,
                            mi: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Ds(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort(Es);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 < c.length
    };

    function Es(a, b) {
        var c, d = b.mi,
            e = a.mi;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.yi,
                h = b.yi;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Ds(a, b) {
        if (fm) {
            var c = function(d) {
                var e = b.Yf(ye[d]) ? "3" : "4",
                    f = Je(ye[d][Zd.Lh], b, []);
                f && f.length && c(f[0].index);
                Rm(b.id, ye[d], e);
                var g = Je(ye[d][Zd.Qh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Is = !1,
        Gs;
    var Os = function(a) {
        var b = Ua(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if (V(70)) {
            var f = Hq(gq.I.ad, L.H, c, void 0, e);
            Iq(f)
        }
        if ("gtm.js" === e) {
            if (Is) return !1;
            Is = !0;
        }
        var l, n = !1;
        if (Cs(c)) l = Bs(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            n = !0;
            l = Bs(Number.MAX_SAFE_INTEGER)
        }
        Qm(c,
            e);
        var p = a.eventCallback,
            q = a.eventTimeout,
            r = {
                id: c,
                priorityId: d,
                name: e,
                Yf: xr(l),
                ml: [],
                hi: function() {
                    S(6);
                    wb("HEALTH", 0)
                },
                Uh: Ks(),
                Vh: Ls(c),
                Cb: new Or(function() {
                    if (V(70)) {
                        var x = Hq(gq.I.yh, L.H, c, void 0, e);
                        if (Iq(x)) {
                            var A = Hq(gq.I.ad, L.H, c, void 0, e);
                            Jq(x, A)
                        }
                        if ("gtm.load" === e) {
                            var B = Hq(gq.I.Ag, L.H);
                            if (Iq(B)) {
                                var C = Hq(gq.I.Fc, L.H);
                                Jq(B, C)
                            }
                            Lq();
                        }
                    }
                    p && p.apply(p, [].slice.call(arguments, 0))
                }, q)
            },
            u = Te(r);
        n && (u = Ms(u));
        if (V(70)) {
            var t = Hq(gq.I.zh, L.H, c, void 0, e);
            if (Iq(t)) {
                var v = Hq(gq.I.ad, L.H, c, void 0, e);
                Jq(t, v)
            }
        }
        var w = Fs(u, r),
            y = !1;
        Tr(r.Cb);
        "gtm.js" !== e && "gtm.sync" !== e || $r(L.H);
        return Ns(u, w) || y
    };

    function Ls(a) {
        return function(b) {
            fm && (Jc(b) || $m(a, "input", b))
        }
    }

    function Ks() {
        var a = {};
        a.event = Qh("event", 1);
        a.ecommerce = Qh("ecommerce", 1);
        a.gtm = Qh("gtm");
        a.eventModel = Qh("eventModel");
        return a
    }

    function Ms(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(ye[c][Zd.Wa]);
                if (gh[d] || void 0 !== ye[c][Zd.Ej] || xh[d]) b[c] = !0;
                V(58) || 0 !== ye[c][Zd.Wa].indexOf("__ccd") && 0 !== ye[c][Zd.Wa].indexOf("__ogt") && "__set_product_settings" !== ye[c][Zd.Wa] || (b[c] = !0)
            }
        return b
    }

    function Ns(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && ye[c] && !hh[String(ye[c][Zd.Wa])]) return !0;
        return !1
    }
    var Qs = function(a, b, c, d) {
            Ps.push("event", [b, a], c, d)
        },
        Rs = function(a, b, c, d) {
            Ps.push("get", [a, b], c, d)
        },
        Ss = function() {
            this.status = 1;
            this.N = {};
            this.h = {};
            this.B = {};
            this.U = null;
            this.F = {};
            this.D = !1
        },
        Ts = function(a, b, c, d) {
            var e = Ua();
            this.type = a;
            this.B = e;
            this.ca = b || "";
            this.h = c;
            this.messageContext = d
        },
        Us = function() {
            this.B = {};
            this.D = {};
            this.h = []
        },
        Vs = function(a, b) {
            var c = Zn(b);
            return a.B[c.X] = a.B[c.X] || new Ss
        },
        Ws = function(a, b, c, d) {
            if (d.ca) {
                var e = Vs(a, d.ca),
                    f = e.U;
                if (f) {
                    var g = K(c),
                        h = K(e.N[d.ca]),
                        l = K(e.F),
                        n = K(e.h),
                        p = K(a.D),
                        q = {};
                    if (fm) try {
                        q = K(Bh)
                    } catch (v) {
                        S(72)
                    }
                    var r = Zn(d.ca).prefix,
                        u = function(v) {
                            Zm(d.messageContext.eventId, r, v);
                            var w = g[T.g.cc];
                            w && J(w)
                        },
                        t = Zo(Xo(Wo(Vo(To(So(Uo(Ro(Qo(Po(new Oo(d.messageContext.eventId, d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("3")
                            }
                        }));
                    try {
                        Zm(d.messageContext.eventId, r, "1"), Dr(d.type, d.ca, t), f(d.ca, b, d.B, t)
                    } catch (v) {
                        Zm(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Us.prototype.register = function(a, b, c) {
        var d = Vs(this, a);
        3 !== d.status && (d.U = b, d.status = 3, c && (K(d.h, c), d.h = c), this.flush())
    };
    Us.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Zn(c)) return;
            if (c) {
                var e = Zn(c);
                e && 1 === Vs(this, c).status && (Vs(this, c).status = 2, this.push("require", [{}], e.X, {}))
            }
            Vs(this, c).D && (d.deferrable = !1)
        }
        this.h.push(new Ts(a, c, b, d));
        d.deferrable || this.flush()
    };
    Us.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.ca || Vs(this, f.ca).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Vs(this, f.ca);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        m(f.h[0], function(r, u) {
                            K(cb(r, u), b.D)
                        });
                        break;
                    case "config":
                        g = Vs(this, f.ca);
                        e.rb = {};
                        m(f.h[0], function(r) {
                            return function(u, t) {
                                K(cb(u, t), r.rb)
                            }
                        }(e));
                        var h = !!e.rb[T.g.Zc];
                        delete e.rb[T.g.Zc];
                        var l = Zn(f.ca),
                            n = l.X === l.id;
                        h || (n ? g.F = {} : g.N[f.ca] = {});
                        g.D && h || Ws(this, T.g.Ea, e.rb, f);
                        g.D = !0;
                        n ? K(e.rb, g.F) : (K(e.rb, g.N[f.ca]), S(70));
                        d = !0;
                        break;
                    case "event":
                        g = Vs(this, f.ca);
                        e.Gd = {};
                        m(f.h[0], function(r) {
                            return function(u, t) {
                                K(cb(u, t), r.Gd)
                            }
                        }(e));
                        Ws(this, f.h[1], e.Gd, f);
                        break;
                    case "get":
                        g = Vs(this, f.ca);
                        var p = {},
                            q = (p[T.g.jb] = f.h[0], p[T.g.xb] = f.h[1], p);
                        Ws(this, T.g.Ja, q, f)
                }
                this.h.shift();
                Xs(this, f)
            }
            e = {
                rb: e.rb,
                Gd: e.Gd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Xs = function(a, b) {
            if ("require" !== b.type)
                if (b.ca)
                    for (var c = Vs(a, b.ca).B[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.B)
                        if (a.B.hasOwnProperty(e)) {
                            var f = a.B[e];
                            if (f && f.B)
                                for (var g = f.B[b.type] || [], h = 0; h < g.length; h++) g[h]()
                        }
        },
        Ys = function(a, b) {
            var c = Ps,
                d = K(b);
            K(Vs(c, a).h, d);
            Vs(c, a).h = d
        },
        Ps = new Us;
    var af;
    var ot = {},
        Ct = {},
        Dt = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    Ld: d.Ld,
                    Id: d.Id
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.Ld = Zn(f), d.Ld && (Ka(Ok(), function(p) {
                    return function(q) {
                        return p.Ld.X === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = ot[f] || [];
                    d.Id = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.Id[q] = !0
                        }
                    }(d));
                    for (var h = Nk(), l = 0; l < h.length; l++)
                        if (d.Id[h[l]]) {
                            b = b.concat(Ok());
                            break
                        }
                    var n = Ct[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                Fk: b,
                Ik: c
            }
        },
        Et = function(a) {
            m(ot, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Ft = function(a) {
            m(Ct, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Gt = "HA GF G UA AW DC MC".split(" "),
        Ht = !1,
        It = !1;

    function Jt(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: yh()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Kt = {
            config: function(a, b) {
                var c = Jt(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Fc(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = Zn(a[1]);
                    if (e) {
                        Qm(c.eventId, "gtag.config");
                        var f = e.X,
                            g = e.id !== f;
                        if (g ? -1 === Ok().indexOf(f) : -1 === Nk().indexOf(f)) {
                            if (!V(61) || !d[T.g.me]) {
                                var h = d[T.g.za] || Ps.D[T.g.za];
                                g ? qr(f, h, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : pr(f, h, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (jh && !g && !d[T.g.Zc]) {
                                var l = It;
                                It = !0;
                                if (l) return
                            }
                            Ht || S(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    Ft(e.id);
                                    var n = e.id,
                                        p = d[T.g.je] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var r = Ct[p[q]] || [];
                                        Ct[p[q]] = r;
                                        0 > r.indexOf(n) && r.push(n)
                                    }
                                } else {
                                    Et(e.id);
                                    var u = e.id,
                                        t = d[T.g.je] || "default";
                                    t = t.toString().split(",");
                                    for (var v = 0; v < t.length; v++) {
                                        var w = ot[t[v]] || [];
                                        ot[t[v]] = w;
                                        0 > w.indexOf(u) && w.push(u)
                                    }
                                }
                            delete d[T.g.je];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                y;
                            delete d[T.g.cc];
                            for (var x = g ? [e.id] : Ok(), A = 0; A < x.length; A++) {
                                var B = K(b);
                                Ps.push("config", [d], x[A], B)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    S(39);
                    var c = Jt(a, b),
                        d = a[1];
                    "default" === d ? lj(a[2]) : "update" === d && mj(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Fc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = K(e), e[T.g.cc] && (g.eventCallback = e[T.g.cc]), e[T.g.ee] && (g.eventTimeout = e[T.g.ee]));
                    var h = Jt(a, b),
                        l = h.eventId,
                        n = h.priorityId;
                    g["gtm.uniqueEventId"] = l;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[T.g.Ob];
                    void 0 === r && (r = Eh(T.g.Ob, 2), void 0 === r && (r = "default"));
                    if (k(r) || Ia(r)) {
                        var u = r.toString().replace(/\s+/g, "").split(","),
                            t = Dt(u),
                            v = t.Fk,
                            w = t.Ik;
                        if (w.length)
                            for (var y = q && q[T.g.za] || Ps.D[T.g.za], x = 0; x < w.length; x++) {
                                var A = Zn(w[x]);
                                A && qr(A.X, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = ao(v)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        Qm(l,
                            c);
                        for (var C = [], D = 0; D < B.length; D++) {
                            var H = B[D],
                                G = K(b);
                            if (-1 !== Gt.indexOf(H.prefix)) {
                                var N = K(d),
                                    Q = G.eventMetadata || {};
                                Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !G.fromContainerExecution);
                                G.eventMetadata = Q;
                                delete N[T.g.cc];
                                Qs(c, N, H.id, G)
                            }
                            C.push(H.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[T.g.Ob] = C.join() : delete g.eventModel[T.g.Ob];
                        Ht || S(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                S(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && Ea(a[3])) {
                    var c = Zn(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Ht || S(43);
                        var f = Ps.D[T.g.za];
                        if (!Ka(Ok(), function(h) {
                                return c.X === h
                            })) qr(c.X, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Gt.indexOf(c.prefix)) {
                            Jt(a, b);
                            var g = {};
                            hj(K((g[T.g.jb] = d, g[T.g.xb] = e, g)));
                            Rs(d, function(h) {
                                J(function() {
                                    return e(h)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Ht = !0;
                    var c = Jt(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 ===
                    a.length && k(a[1]) && Ea(a[2])) {
                    var b = a[1],
                        c = a[2],
                        d = af.B;
                    d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                    if (S(74), "all" === a[1]) {
                        S(75);
                        var e = !1;
                        try {
                            e = a[2](L.H, "unknown", {})
                        } catch (f) {}
                        e || S(76)
                    }
                } else {
                    S(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && Fc(a[1]) ? c = K(a[1]) : 3 == a.length && k(a[1]) &&
                    (c = {}, Fc(a[2]) || Ia(a[2]) ? c[a[1]] = K(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = Jt(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    K(c);
                    var g = K(c);
                    Ps.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    V(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        Lt = {
            policy: !0
        };
    var Mt = function(a) {
            var b = z[dh.ka].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Nt = function(a) {
            var b = z[dh.ka],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Ot = !1,
        Pt = [];

    function Qt() {
        if (!Ot) {
            Ot = !0;
            for (var a = 0; a < Pt.length; a++) J(Pt[a])
        }
    }
    var Rt = function(a) {
        Ot ? J(a) : Pt.push(a)
    };
    var hu = function(a) {
        if (gu(a)) return a;
        this.Qa = a
    };
    hu.prototype.getUntrustedMessageValue = function() {
        return this.Qa
    };
    var gu = function(a) {
        return !a || "object" !== Dc(a) || Fc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    hu.prototype.getUntrustedMessageValue = hu.prototype.getUntrustedMessageValue;
    var iu = 0,
        ju = {},
        ku = [],
        lu = [],
        mu = !1,
        nu = !1;

    function ou(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var pu = function(a) {
            return z[dh.ka].push(a)
        },
        qu = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return pu(a)
        },
        ru = function(a, b) {
            var c = eh[dh.ka],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function su(a, b) {
        var c = a._clear || b.overwriteModelFields;
        m(a, function(e, f) {
            "_clear" !== e && (c && Oh(e), Oh(e, f))
        });
        th || (th = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = yh(), a["gtm.uniqueEventId"] = d, Oh("gtm.uniqueEventId", d));
        return Os(a)
    }

    function tu(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Oa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function uu() {
        var a;
        if (lu.length) a = lu.shift();
        else if (ku.length) a = ku.shift();
        else return;
        var b;
        var c = a;
        if (mu || !tu(c.message)) b = c;
        else {
            mu = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = yh());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                h = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            ku.unshift(h, c);
            if (fm && L.H) {
                var l;
                if (L.Cf) {
                    var n = L.H,
                        p = Qk().destination[n];
                    l = p && p.context
                } else {
                    var q = L.H,
                        r = Qk().container[q];
                    l = r && r.context
                }
                var u = l,
                    t, v = li(z.location.href);
                t = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution,
                    y = u && u.source,
                    x = L.H,
                    A = L.fb,
                    B = L.Cf;
                rm || (rm = t);
                qm.push(x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function vu() {
        for (var a = !1, b; !nu && (b = uu());) {
            nu = !0;
            delete Bh.eventModel;
            Dh();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) nu = !1;
            else {
                e.fromContainerExecution && Ph();
                try {
                    if (Ea(d)) try {
                        d.call(Fh)
                    } catch (y) {} else if (Ia(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split("."),
                                h = g.pop(),
                                l = f.slice(1),
                                n = Eh(g.join("."), 2);
                            if (null != n) try {
                                n[h].apply(n, l)
                            } catch (y) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Oa(d)) {
                            a: {
                                if (d.length &&
                                    k(d[0])) {
                                    var r = Kt[d[0]];
                                    if (r && (!e.fromContainerExecution || !Lt[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p && "set" === d[0] && !!p.event) && S(101)
                        }
                        else p = d;
                        if (p) {
                            var u = su(p, e);
                            a = u || a;
                            q && u && S(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Dh(!0);
                    var t = d["gtm.uniqueEventId"];
                    if ("number" === typeof t) {
                        for (var v = ju[String(t)] || [], w = 0; w < v.length; w++) lu.push(wu(v[w]));
                        v.length && lu.sort(ou);
                        delete ju[String(t)];
                        t > iu && (iu = t)
                    }
                    nu = !1
                }
            }
        }
        return !a
    }

    function xu() {
        if (V(70) && yu()) {
            var b = Hq(gq.I.Ue, L.H),
                c = Hq(gq.I.Cg, L.H);
            Iq(c) && Jq(c, b)
        }
        var d = vu();
        try {
            Mt(L.H)
        } catch (e) {}
        return d
    }

    function ss(a) {
        if (iu < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            ju[b] = ju[b] || [];
            ju[b].push(a)
        } else lu.push(wu(a)), lu.sort(ou), J(function() {
            nu || vu()
        })
    }

    function wu(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var zu = function() {
            function a(g) {
                var h = {};
                if (gu(g)) {
                    var l = g;
                    g = gu(l) ? l.getUntrustedMessageValue() : void 0;
                    h.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: h
                }
            }
            var b = Yb(dh.ka, []),
                c = eh[dh.ka] = eh[dh.ka] || {};
            !0 === c.pruned && S(83);
            ju = qs().get();
            ts();
            Kr(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            Rt(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < eh.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var h = 0; h < arguments.length; h++) g[h] = new hu(arguments[h])
                } else g = [].slice.call(arguments, 0);
                var l = g.map(function(r) {
                    return a(r)
                });
                ku.push.apply(ku, l);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (S(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return vu() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            ku.push.apply(ku, e);
            if (yu()) {
                if (V(70)) {
                    var f = Hq(gq.I.Ue, L.H);
                    Iq(f)
                }
                J(xu)
            }
        },
        yu = function() {
            var a = !0;
            return a
        };

    function Au(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ua();
        return b < c + 3E5 && b > c - 9E5
    }

    function Bu(a) {
        return a && 0 === a.indexOf("pending:") ? Au(a.substr(8)) : !1
    };
    var De = {};
    De.te = new String("undefined");
    var Cu = function(a) {
        this.h = function(b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === De.te ? b : a[d]);
            return c.join("")
        }
    };
    Cu.prototype.toString = function() {
        return this.h("undefined")
    };
    Cu.prototype.valueOf = Cu.prototype.toString;
    De.Hj = Cu;
    De.Df = {};
    De.Tj = function(a) {
        return new Cu(a)
    };
    var Du = {};
    De.Tk = function(a, b) {
        var c = yh();
        Du[c] = [a, b];
        return c
    };
    De.Xh = function(a) {
        var b = a ? 0 : 1;
        return function(c) {
            var d = Du[c];
            if (d && "function" === typeof d[b]) d[b]();
            Du[c] = void 0
        }
    };
    De.vk = function(a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
            b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    De.Ok = function(a) {
        if (a === De.te) return a;
        var b = yh();
        De.Df[b] = a;
        return 'google_tag_manager["' + L.H + '"].macro(' + b + ")"
    };
    De.Hk = function(a, b, c) {
        a instanceof De.Hj && (a = a.h(De.Tk(b, c)), b = Da);
        return {
            rk: a,
            aa: b
        }
    };
    var Eu = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": nc(a, "className"),
                "gtm.elementId": a["for"] || ic(a, "id") || "",
                "gtm.elementTarget": a.formTarget || nc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || nc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Fu = function(a) {
            eh.hasOwnProperty("autoEventsSettings") || (eh.autoEventsSettings = {});
            var b = eh.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        Gu = function(a, b, c) {
            Fu(a)[b] = c
        },
        Hu = function(a, b, c, d) {
            var e = Fu(a),
                f = Va(e, b, d);
            e[b] = c(f)
        },
        Iu = function(a, b, c) {
            var d = Fu(a);
            return Va(d, b, c)
        },
        Ju = function(a) {
            return "string" === typeof a ? a : String(yh())
        };
    var Pu = !!z.MutationObserver,
        Qu = void 0,
        Ru = function(a) {
            if (!Qu) {
                var b = function() {
                    var c = I.body;
                    if (c)
                        if (Pu)(new MutationObserver(function() {
                            for (var e = 0; e < Qu.length; e++) J(Qu[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            gc(c, "DOMNodeInserted", function() {
                                d || (d = !0, J(function() {
                                    d = !1;
                                    for (var e = 0; e < Qu.length; e++) J(Qu[e])
                                }))
                            })
                        }
                };
                Qu = [];
                I.body ? b() : J(b)
            }
            Qu.push(a)
        };
    var bv = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Ua() - e) * g.playbackRate / 1E3 : 0;
            e = Ua()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, l) {
                var n = a(),
                    p = n.Pf,
                    q = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(n.Pf * h) : Math.round(n.Yh),
                    r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    u = I.hidden ? !1 : .5 <= Yh(c);
                d();
                var t = void 0;
                void 0 !== b && (t = [b]);
                var v = Eu(c, "gtm.video", t);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = u;
                return v
            },
            ui: function() {
                e = Ua()
            },
            sc: function() {
                d()
            }
        }
    };
    var cv = z.clearTimeout,
        dv = z.setTimeout,
        W = function(a, b, c, d) {
            if (Lk()) {
                b && J(b)
            } else return cc(a, b, c, d)
        },
        ev = function() {
            return new Date
        },
        fv = function() {
            return z.location.href
        },
        gv = function(a) {
            return ji(li(a), "fragment")
        },
        hv = function(a) {
            return ki(li(a))
        },
        iv = function(a, b) {
            return Eh(a, b || 2)
        },
        jv = function(a, b, c) {
            return b ? qu(a, b, c) : pu(a)
        },
        kv = function(a, b) {
            z[a] = b
        },
        X = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        lv = function(a, b, c) {
            return zj(a, b, void 0 === c ? !0 : !!c)
        },
        mv = function(a, b, c) {
            return 0 === Ij(a, b, c)
        },
        nv = function(a, b) {
            if (Lk()) {
                b && J(b)
            } else ec(a, b)
        },
        ov = function(a) {
            return !!Iu(a, "init", !1)
        },
        pv = function(a) {
            Gu(a, "init", !0)
        },
        qv = function(a, b, c) {
            fm && (Jc(a) || $m(c, b, a))
        };

    var rv = De.Hk;
    var Ov = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Pv(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Qv = new Ma;

    function Rv(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Qv.get(e);
            f || (f = new RegExp(b, d), Qv.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Sv(a, b) {
        function c(g) {
            var h = li(g),
                l = ji(h, "protocol"),
                n = ji(h, "host", !0),
                p = ji(h, "port"),
                q = ji(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p) l = "web", p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Tv(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function Uv(a, b) {
        return String(a) === String(b)
    }

    function Vv(a, b) {
        return Number(a) >= Number(b)
    }

    function Wv(a, b) {
        return Number(a) <= Number(b)
    }

    function Xv(a, b) {
        return Number(a) > Number(b)
    }

    function Yv(a, b) {
        return Number(a) < Number(b)
    }

    function Zv(a, b) {
        return 0 === String(a).indexOf(String(b))
    }

    function $v(a) {
        return aw(a) ? 1 : 0
    }

    function aw(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = K(a, {});
                K({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if ($v(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return Tv(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < Ov.length; g++) {
                            var h = Ov[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Pv(b, c);
            case "_eq":
                return Uv(b, c);
            case "_ge":
                return Vv(b, c);
            case "_gt":
                return Xv(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Wv(b, c);
            case "_lt":
                return Yv(b, c);
            case "_re":
                return Rv(b, c, a.ignore_case);
            case "_sw":
                return Zv(b, c);
            case "_um":
                return Sv(b, c)
        }
        return !1
    };

    function bw(a, b) {
        var c = this;
    }
    bw.R = "addConsentListener";
    var cw;
    var dw = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (cw) try {
                a[b]()
            } catch (c) {
                S(77)
            } else a[b]()
    };

    function ew(a, b, c) {
        var d = this,
            e;
        return e
    }
    ew.P = "internal.addDataLayerEventListener";

    function fw(a, b, c) {}
    fw.R = "addDocumentEventListener";

    function gw(a, b, c, d) {}
    gw.R = "addElementEventListener";

    function hw(a) {}
    hw.R = "addEventCallback";

    function lw(a) {}
    lw.P = "internal.addFormAbandonmentListener";
    var mw = {},
        nw = [],
        ow = {},
        pw = 0,
        qw = 0;

    function xw(a, b) {}
    xw.P = "internal.addFormInteractionListener";

    function Ew(a, b) {}
    Ew.P = "internal.addFormSubmitListener";

    function Jw(a) {}
    Jw.P = "internal.addGaSendListener";
    var Kw = {},
        Lw = [];
    var Sw = function(a, b) {};
    Sw.P = "internal.addHistoryChangeListener";

    function Tw(a, b, c) {}
    Tw.R = "addWindowEventListener";

    function Uw(a, b) {
        return !0
    }
    Uw.R = "aliasInWindow";

    function Vw(a, b, c) {}
    Vw.P = "internal.appendRemoteConfigParameter";

    function Ww() {
        var a = 2;
        return a
    };

    function Xw(a, b) {
        var c;
        M(F(this), ["path:!string"], [a]);
        O(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++)
            if (e = f, f = f[d[g]], e === z || e === I) return;
        if ("function" !== Dc(f)) return;
        for (var h = Ww(), l = [], n = 1; n < arguments.length; n++) l.push(Hc(arguments[n], this.h, h));
        var p = (0, this.h.N)(f, e, l);
        c = Gc(p, this.h, h);
        void 0 === c && void 0 !== p && S(45);
        return c
    }
    Xw.R = "callInWindow";

    function Yw(a) {
        M(F(this), ["fn:!Fn"], arguments);
        var b = this.h;
        J(function() {
            a instanceof gb && a.B(b)
        });
    }
    Yw.R = "callLater";

    function Zw(a) {}
    Zw.P = "callOnDomReady";

    function $w(a) {}
    $w.P = "callOnWindowLoad";

    function ax(a) {
        var b;
        return b
    }
    ax.P = "internal.computeGtmParameter";

    function bx(a, b) {
        var c;
        M(F(this), ["key:!string", "dataLayerVersion:?number"], arguments), O(this, "read_data_layer", a), c = 2 !== (b || 2) ? Eh(a, 1) : Gh(a, [z, I]);
        var d = Gc(c, this.h, Ww());
        void 0 === d && void 0 !== c && S(45);
        return d
    }
    bx.R = "copyFromDataLayer";

    function cx(a) {
        var b;
        M(F(this), ["path:!string"], arguments);
        O(this, "access_globals", "read", a);
        var c = a.split("."),
            d = bb(c, [z, I]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = Gc(e, this.h, Ww());
        void 0 === b && void 0 !== e && S(45);
        return b
    }
    cx.R = "copyFromWindow";

    function dx(a, b) {
        var c;
        return c
    }
    dx.P = "internal.copyPreHit";

    function ex(a, b) {
        var c = null,
            d = Ww();
        M(F(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        O(this, "access_globals", "readwrite", a);
        O(this, "access_globals", "readwrite", b);
        var e = [z, I],
            f = a.split("."),
            g = bb(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var l = g[h];
        if (l && !Ea(l)) return null;
        if (l) return Gc(l, this.h, d);
        var n;
        l = function() {
            if (!Ea(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = l;
        var p = b.split("."),
            q = bb(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            l.apply(l, Array.prototype.slice.call(arguments, 0))
        };
        return Gc(c, this.h, d)
    }
    ex.R = "createArgumentsQueue";

    function fx(a) {
        var b;
        M(F(this), ["path:!string"], arguments);
        O(this, "access_globals", "readwrite", a);
        var c = a.split("."),
            d = bb(c, [z, I]),
            e = c[c.length - 1];
        if (void 0 === d) throw Error("Path " + a + " does not exist.");
        var f = d[e];
        void 0 === f && (f = [], d[e] = f);
        b = function() {
            if (!Ea(f.push)) throw Error("Object at " + a + " in window is not an array.");
            f.push.apply(f, Array.prototype.slice.call(arguments, 0))
        };
        return Gc(b, this.h,
            Ww())
    }
    fx.R = "createQueue";
    var gx = {},
        hx = [],
        ix = {},
        jx = 0,
        kx = 0;

    function qx(a, b) {
        var c = this;
        return b
    }
    qx.P = "internal.enableAutoEventOnFormInteraction";

    function vx(a, b) {
        var c = this;
        return b
    }
    vx.P = "internal.enableAutoEventOnFormSubmit";

    function Ax() {
        var a = this;
    }
    Ax.P = "internal.enableAutoEventOnGaSend";
    var Bx = {},
        Cx = [];

    function Jx(a, b) {
        var c = this;
        return b
    }
    Jx.P = "internal.enableAutoEventOnHistoryChange";

    function Nx(a, b) {
        var c = this;
        return b
    }
    Nx.P = "internal.enableAutoEventOnLinkClick";
    var Ox, Px;

    function Yx(a, b) {
        var c = this;
        return b
    }
    Yx.P = "internal.enableAutoEventOnScroll";
    var Sb = fa(["data-gtm-yt-inspected-"]),
        Zx = ["www.youtube.com", "www.youtube-nocookie.com"],
        $x, ay = !1;

    function ky(a, b) {
        var c = this;
        return b
    }
    ky.P = "internal.enableAutoEventOnYouTubeActivity";

    function ly(a, b) {
        var c = !1;
        return c
    }
    ly.P = "internal.evaluateBooleanExpression";
    var qy;

    function ry(a) {
        var b = !1;
        return b
    }
    ry.P = "internal.evaluateMatchingRules";

    function Ay(a, b) {
        var c = !1;
        return c
    }
    Ay.P = "internal.evaluatePredicates";
    var By = function(a) {
        var b;
        return b
    };

    function Cy(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    Cy.R = "getCookieValues";

    function Dy() {
        return Mi.Lf
    }
    Dy.P = "internal.getCountryCode";

    function Ey() {
        var a = [];
        return Gc(a)
    }
    Ey.P = "internal.getDestinationIds";

    function Fy(a) {
        var b = null;
        return b
    }
    Fy.R = "getElementById";
    var Gy = {};
    Gy.enableAdsHistoryChangeEvents = V(36);
    Gy.enableAlwaysSendFormStart = V(38);
    Gy.enableCcdEmForm = V(82);
    Gy.enableCcdEnhancedMeasurement = V(41);
    Gy.enableCcdEventBlocking = V(40);
    Gy.enableCcdEventEditingAndCreation = V(26);
    Gy.enableCcdGaConversions = V(39);
    Gy.enableCcdPreAutoPiiDetection = V(49);
    Gy.enableCcdUserData = V(16);
    Gy.enableEesPagePath = V(43);
    Gy.enableEuidAutoMode = V(37);
    Gy.enableGa4OnoRemarketing = V(34);
    Gy.enableGaGamWindowSet = V(67);
    Gy.autoPiiEligible = !0;

    function Hy() {
        return Gc(Gy)
    }
    Hy.P = "internal.getFlags";

    function Iy(a, b) {
        var c;
        return c
    }
    Iy.P = "internal.getProductSettingsParameter";

    function Jy(a, b) {
        var c;
        return c
    }
    Jy.R = "getQueryParameters";

    function Ky(a, b) {
        var c;
        return c
    }
    Ky.R = "getReferrerQueryParameters";

    function Ly(a) {
        var b = "";
        return b
    }
    Ly.R = "getReferrerUrl";

    function My() {
        return Mi.oi
    }
    My.P = "internal.getRegionCode";

    function Ny(a, b) {
        var c;
        return c
    }
    Ny.P = "internal.getRemoteConfigParameter";

    function Oy(a) {
        var b = "";
        M(F(this), ["component:?string"], arguments), O(this, "get_url", a), b = ji(li(z.location.href), a);
        return b
    }
    Oy.R = "getUrl";

    function Py() {
        O(this, "get_user_agent");
        return Wb.userAgent
    }
    Py.R = "getUserAgent";

    function Qy(a) {
        if (!a) return {};
        var b = a.bk;
        return Mr(b.type, b.index, b.name)
    }

    function Ry(a) {
        return a ? {
            originatingEntity: Qy(a)
        } : {}
    };

    function Ty(a, b) {}
    Ty.R = "gtagSet";

    function Uy(a, b) {}
    Uy.R = "injectHiddenIframe";
    var Vy = {};
    var Wy = function(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], cc(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) J(g[h]);
            g.push = function(l) {
                J(l);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) J(g[h]);
            e[f] = null
        }, b)) : cc(a, c, d, b)
    };

    function Xy(a, b, c, d) {
        if (!Lk()) {
            M(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
            O(this, "inject_script", a);
            var e = this.h;
            Wy(a, void 0, function() {
                b && b.B(e)
            }, function() {
                c && c.B(e)
            }, Vy, d)
        }
    }
    var Yy = Object.freeze({
            dl: 1,
            id: 1
        }),
        Zy = {};

    function $y(a, b, c, d) {}
    Xy.R = "injectScript";
    $y.P = "internal.injectScript";

    function az(a) {
        var b = !0;
        return b
    }
    az.R = "isConsentGranted";
    var bz = function() {
        var a = bg(function(b) {
            this.h.h.log("error", b)
        });
        a.R = "JSON";
        return a
    };
    var cz = function() {
            return !1
        },
        dz = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var ez = ["textContent", "value", "tagName", "children", "childElementCount"];

    function fz(a) {
        var b;
        return b
    }
    fz.P = "internal.locateUserData";

    function hz() {
        try {
            O(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = Hc(a[b], this.h);
        console.log.apply(console, a);
    }
    hz.R = "logToConsole";

    function iz(a) {
        var b = void 0;
        return b
    }
    iz.R = "parseUrl";

    function jz(a) {}
    jz.P = "internal.processAsNewEvent";

    function kz(a, b) {
        var c = !1;
        return c
    }
    kz.R = "queryPermission";

    function lz() {
        var a = "";
        return a
    }
    lz.R = "readCharacterSet";

    function mz() {
        var a = "";
        return a
    }
    mz.R = "readTitle";

    function nz(a, b) {
        var c = this;
    }
    nz.P = "internal.registerCcdCallback";
    var oz = Object.freeze(["config", "event", "get", "set"]);

    function pz(a, b, c) {}
    pz.P = "internal.registerGtagCommandListener";

    function qz(a, b) {
        var c = !1;
        return c
    }
    qz.P = "internal.removeDataLayerEventListener";

    function rz() {}
    rz.R = "resetDataLayer";

    function Gz() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Hz = function() {
            var a = Gz();
            a.hid = a.hid || La();
            return a.hid
        },
        Iz = function(a, b) {
            var c = Gz();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var dA = function() {
            var a = !0;
            Xl(7) && Xl(9) && Xl(10) || (a = !1);
            return a
        },
        eA = function() {
            var a = !0;
            Xl(3) && Xl(4) || (a = !1);
            return a
        };
    var HA = window,
        IA = document,
        JA = function(a) {
            var b = HA._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === HA["ga-disable-" + a]) return !0;
            try {
                var c = HA.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = tj("AMP_TOKEN", String(IA.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return IA.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function RA(a) {
        m(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[T.g.Ma] || {};
        m(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var aB = function(a, b) {};

    function $A(a, b) {
        var c = function() {};
        return c
    }

    function bB(a, b, c) {};
    var cB = function(a, b) {
            var c;
            c = b ? [Xp, Yp, $p, Kp, Op, bq, Pp, aq, Vp, Lp, eq, Qp, Zp, Ip, cq, Fp] : [Jp, Ap, Mp, Bp, Cp, Dp, Ep, Rp, Sp, Up, Wp, Np, Tp, Hp, dq];
            for (var d = 0; d < c.length && (c[d](a), !a.M); d++);
        },
        dB = function(a, b, c, d) {
            var e = new oo(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Ua();
            e.metadata.speculative_in_message = d.eventMetadata.speculative;
            return e
        },
        eB = function(a) {
            var b = a.indexOf("/"),
                c = 3 <= b,
                d = a.substring(3, c ? b : a.length);
            return {
                id: a,
                prefix: "AW",
                X: "AW-" + d,
                O: [d, c ? a.substring(b +
                    1) : void 0]
            }
        },
        fB = function(a, b, c, d) {
            function e() {
                for (var q = 0; q < g.length; q++) {
                    var r = g[q];
                    r.M || (cB(g[q], !0), r.metadata.speculative || r.M || fr(r))
                }
            }
            var f = Zn(a);
            !f && d.J && (f = eB(a));
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var h = d.eventMetadata.hit_type_override;
                    Array.isArray(h) || (h = [h]);
                    for (var l = 0; l < h.length; l++) {
                        var n = dB(h[l], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === T.g.Ea && g.push(dB("landing_page", f, b, d)), g.push(dB("conversion", f, b, d)), g.push(dB("user_data_lead", f, b, d)), g.push(dB("user_data_web",
                    f, b, d)), g.push(dB("remarketing", f, b, d));
                for (var p = 0; p < g.length; p++) cB(g[p], !1);
                fj(function() {
                    for (var q = [], r = [], u = 0; u < g.length; u++) {
                        var t = g[u];
                        q.push(t.M);
                        r.push(t.metadata.speculative)
                    }
                    e();
                    Zi(T.g.K) || gj(function(v) {
                        for (var w = v.consentEventId, y = v.consentPriorityId, x = 0; x < g.length; x++) {
                            var A = g[x];
                            A.metadata.consent_updated = !0;
                            A.metadata.speculative = r[x];
                            A.metadata.event_start_timestamp_ms = Ua();
                            A.M = q[x];
                            A.metadata.consent_event_id = w;
                            A.metadata.consent_priority_id = y
                        }
                        e()
                    }, [T.g.K])
                }, [T.g.K])
            }
        };
    var hB = function() {
            var a = eh.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > Ua() - b) return Promise.resolve(c)
            }
            try {
                return Promise.race([I.interestCohort().then(function(d) {
                    eh.floc = {
                        ts: Ua(),
                        floc: d
                    };
                    return d
                }), new Promise(function(d) {
                    z.setTimeout(function() {
                        return d()
                    }, gB)
                })]).catch(function() {})
            } catch (d) {}
        },
        gB = Number("200"),
        iB = !1;
    var KB = function(a, b) {
            if (!b.J) {
                var c = U(b, T.g.jb),
                    d = U(b, T.g.xb),
                    e = U(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    HB.hasOwnProperty(c) ? f = HB[c] : IB.hasOwnProperty(c) && (f = IB[c]);
                    1 === f && (f = JB(c));
                    k(f) ? Vr()(function() {
                        var g = Vr().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        LB = function(a, b) {
            var c = a[T.g.jc],
                d = b + ".",
                e = a[T.g.V] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[T.g.Lb];
            e = String(e).replace(/\s+/g, "").split(",");
            var h = Vr();
            h(d + "require", "linker");
            h(d + "linker:autoLink", e, f, g)
        },
        PB = function(a, b, c) {
            if (bj() &&
                (!c.J || !MB[a])) {
                var d = !nj(T.g.W),
                    e = function(f) {
                        var g, h, l = Vr(),
                            n = NB(b, "", c),
                            p, q = n.createOnlyFields._useUp;
                        if (c.J || OB(b, n.createOnlyFields)) {
                            c.J && (g = "gtm" + yh(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
                            l(function() {
                                var u = l.getByName(b);
                                u && (p = u.get("clientId"));
                                c.J || l.remove(b)
                            });
                            l("create", a, c.J ? h : n.createOnlyFields);
                            d &&
                                nj(T.g.W) && (d = !1, l(function() {
                                    var u = Vr().getByName(c.J ? g : b);
                                    !u || u.get("clientId") == p && q || (c.J ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = ah[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = ah[f]), u.set(n.fieldsToSet), c.J ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                                }));
                            c.J && l(function() {
                                l.remove(g)
                            })
                        }
                    };
                qj(function() {
                    return e(T.g.W)
                }, T.g.W);
                qj(function() {
                    return e(T.g.K)
                }, T.g.K);
                c.J && (MB[a] = !0)
            }
        },
        QB = function(a, b) {
            nr() && b && (a[T.g.Kb] = b)
        },
        ZB = function(a, b, c) {
            function d() {
                var G = U(c,
                    T.g.Rc);
                h(function() {
                    if (!c.J && Fc(G)) {
                        var N = t.fieldsToSend,
                            Q = l().getByName(n),
                            aa;
                        for (aa in G)
                            if (G.hasOwnProperty(aa) && /^(dimension|metric)\d+$/.test(aa) && void 0 != G[aa]) {
                                var oa = Q.get(JB(G[aa]));
                                RB(N, aa, oa)
                            }
                    }
                })
            }

            function e() {
                if (t.displayfeatures) {
                    var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: G
                    })
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                h = c.J ? Xr(U(c, "gaFunctionName")) : Xr();
            if (Ea(h)) {
                var l = Vr,
                    n;
                c.J ? n = U(c, "name") || U(c, "gtmTrackerName") :
                    n = "gtag_" + f.split("-").join("_");
                var p = function(G) {
                        var N = [].slice.call(arguments, 0);
                        N[0] = n ? n + "." + N[0] : "" + N[0];
                        h.apply(window, N)
                    },
                    q = function(G) {
                        var N = function(ka, ca) {
                                for (var ba = 0; ca && ba < ca.length; ba++) p(ka, ca[ba])
                            },
                            Q = c.J,
                            aa = Q ? SB(t) : TB(b, c);
                        if (aa) {
                            var oa = {};
                            QB(oa, G);
                            p("require", "ec", "ec.js", oa);
                            Q && aa.Mf && p("set", "&cu", aa.Mf);
                            var P = aa.action;
                            if (Q || "impressions" === P)
                                if (N("ec:addImpression", aa.ei), !Q) return;
                            if ("promo_click" === P || "promo_view" === P || Q && aa.Ad) {
                                var R = aa.Ad;
                                N("ec:addPromo", R);
                                if (R && 0 < R.length &&
                                    "promo_click" === P) {
                                    Q ? p("ec:setAction", P, aa.Xa) : p("ec:setAction", P);
                                    return
                                }
                                if (!Q) return
                            }
                            "promo_view" !== P && "impressions" !== P && (N("ec:addProduct", aa.Sb), p("ec:setAction", P, aa.Xa))
                        }
                    },
                    r = function(G) {
                        if (G) {
                            var N = {};
                            if (Fc(G))
                                for (var Q in UB) UB.hasOwnProperty(Q) && VB(UB[Q], Q, G[Q], N);
                            QB(N, y);
                            p("require", "linkid", N)
                        }
                    },
                    u = function() {
                        if (Lk()) {} else {
                            var G = U(c, T.g.kj);
                            G && (p("require", G, {
                                dataLayer: dh.ka
                            }), p("require", "render"))
                        }
                    },
                    t = NB(n,
                        b, c),
                    v = function(G, N, Q) {
                        Q && (N = "" + N);
                        t.fieldsToSend[G] = N
                    };
                !c.J && OB(n, t.createOnlyFields) && (h(function() {
                    l() && l().remove(n)
                }), WB[n] = !1);
                h("create", f, t.createOnlyFields);
                if (t.createOnlyFields[T.g.Kb] && !c.J) {
                    var w = mh || oh ? mr(t.createOnlyFields[T.g.Kb], "/analytics.js") : void 0;
                    w && (g = w)
                }
                var y = c.J ? t.fieldsToSet[T.g.Kb] : t.createOnlyFields[T.g.Kb];
                if (y) {
                    var x = c.J ? t.fieldsToSet[T.g.he] : t.createOnlyFields[T.g.he];
                    x && !WB[n] && (WB[n] = !0, h(as(n, x)))
                }
                c.J ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(),
                    r(t.linkAttribution));
                var A = t[T.g.ya];
                A && A[T.g.V] && LB(A, n);
                p("set", t.fieldsToSet);
                if (c.J) {
                    if (t.enableLinkId) {
                        var B = {};
                        QB(B, y);
                        p("require", "linkid", "linkid.js", B)
                    }
                    bj() && PB(f, n, c)
                }
                if (b === T.g.Lc)
                    if (c.J) {
                        e();
                        if (t.remarketingLists) {
                            var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", {
                                cookieName: C
                            })
                        }
                        q(y);
                        p("send", "pageview");
                        t.createOnlyFields._useUp && Yr(n + ".")
                    } else u(), p("send", "pageview", t.fieldsToSend);
                else b === T.g.Ea ? (u(), no(f, c), U(c, T.g.zb) && (On(["aw", "dc"]), Yr(n + ".")), 0 != t.sendPageView &&
                    p("send", "pageview", t.fieldsToSend), PB(f, n, c)) : b === T.g.Ja ? KB(n, c) : "screen_view" === b ? p("send", "screenview", t.fieldsToSend) : "timing_complete" === b ? (t.fieldsToSend.hitType = "timing", v("timingCategory", t.eventCategory, !0), c.J ? v("timingVar", t.timingVar, !0) : v("timingVar", t.name, !0), v("timingValue", Pa(t.value)), void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0), p("send", t.fieldsToSend)) : "exception" === b ? p("send", "exception", t.fieldsToSend) : "" === b && c.J || ("track_social" === b && c.J ? (t.fieldsToSend.hitType =
                    "social", v("socialNetwork", t.socialNetwork, !0), v("socialAction", t.socialAction, !0), v("socialTarget", t.socialTarget, !0)) : ((c.J || XB[b]) && q(y), c.J && e(), t.fieldsToSend.hitType = "event", v("eventCategory", t.eventCategory, !0), v("eventAction", t.eventAction || b, !0), void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0), void 0 !== t.value && v("eventValue", Pa(t.value))), p("send", t.fieldsToSend));
                if (!YB && !c.J) {
                    YB = !0;
                    var D = function() {
                            c.Z()
                        },
                        H = function() {
                            l().loaded || D()
                        };
                    Lk() ? J(H) : cc(g, H, D)
                }
            } else J(c.Z)
        },
        $B = function(a,
            b, c, d) {
            rj(function() {
                ZB(a, b, d)
            }, [T.g.W, T.g.K])
        },
        bC = function(a) {
            function b(e) {
                function f(h, l) {
                    for (var n = 0; n < l.length; n++) {
                        var p = l[n];
                        if (e[p]) {
                            g[h] = e[p];
                            break
                        }
                    }
                }
                var g = K(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var h = "", l = 0; l <
                            aC.length; l++) void 0 !== e[aC[l]] && (h && (h += "/"), h += e[aC[l]]);
                        h && (g.category = h)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && Fc(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        cC = function(a) {
            return nj(a)
        },
        dC = !1;
    var YB, WB = {},
        MB = {},
        eC = {},
        HB = Object.freeze((eC.client_storage =
            "storage", eC.sample_rate = 1, eC.site_speed_sample_rate = 1, eC.store_gac = 1, eC.use_amp_client_id = 1, eC[T.g.ub] = 1, eC[T.g.xa] = "storeGac", eC[T.g.vb] = 1, eC[T.g.Ra] = 1, eC[T.g.wb] = 1, eC[T.g.Pc] = 1, eC[T.g.Ze] = 1, eC[T.g.bc] = 1, eC)),
        fC = {},
        gC = Object.freeze((fC._cs = 1, fC._useUp = 1, fC.allowAnchor = 1, fC.allowLinker = 1, fC.alwaysSendReferrer = 1, fC.clientId = 1, fC.cookieDomain = 1, fC.cookieExpires = 1, fC.cookieFlags = 1, fC.cookieName = 1, fC.cookiePath = 1, fC.cookieUpdate = 1, fC.legacyCookieDomain = 1, fC.legacyHistoryImport = 1, fC.name = 1, fC.sampleRate =
            1, fC.siteSpeedSampleRate = 1, fC.storage = 1, fC.storeGac = 1, fC.useAmpClientId = 1, fC._cd2l = 1, fC)),
        hC = Object.freeze({
            anonymize_ip: 1
        }),
        iC = {},
        IB = Object.freeze((iC.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, iC.app_id = 1, iC.app_installer_id = 1, iC.app_name = 1, iC.app_version = 1, iC.description = "exDescription", iC.fatal = "exFatal", iC.language = 1, iC.page_hostname = "hostname", iC.transport_type = "transport", iC[T.g.sa] = "currencyCode",
            iC[T.g.eh] = 1, iC[T.g.Ta] = "location", iC[T.g.ne] = "page", iC[T.g.Ua] = "referrer", iC[T.g.kc] = "title", iC[T.g.lh] = 1, iC[T.g.Aa] = 1, iC)),
        jC = {},
        kC = Object.freeze((jC.content_id = 1, jC.event_action = 1, jC.event_category = 1, jC.event_label = 1, jC.link_attribution = 1, jC.name = 1, jC[T.g.ya] = 1, jC[T.g.dh] = 1, jC[T.g.La] = 1, jC[T.g.qa] = 1, jC)),
        lC = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        aC = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        mC = {},
        UB = Object.freeze((mC.levels = 1, mC[T.g.Ra] = "duration", mC[T.g.Pc] = 1, mC)),
        nC = {},
        oC = Object.freeze((nC.anonymize_ip = 1, nC.fatal = 1, nC.send_page_view = 1, nC.store_gac = 1, nC.use_amp_client_id = 1, nC[T.g.xa] = 1, nC[T.g.eh] = 1, nC)),
        VB = function(a, b, c, d) {
            if (void 0 !== c)
                if (oC[b] && (c = Qa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[JB(b)] = c;
                else if (k(a)) d[a] =
                c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        JB = function(a) {
            return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        pC = {},
        XB = Object.freeze((pC.checkout_progress = 1, pC.select_content = 1, pC.set_checkout_option = 1, pC[T.g.Hc] = 1, pC[T.g.Ic] = 1, pC[T.g.Yb] = 1, pC[T.g.Jc] = 1, pC[T.g.Gb] = 1, pC[T.g.Zb] = 1, pC[T.g.Hb] = 1, pC[T.g.Ha] = 1, pC[T.g.Kc] = 1, pC[T.g.Ia] = 1, pC)),
        qC = {},
        rC = Object.freeze((qC.checkout_progress = 1, qC.set_checkout_option = 1, qC[T.g.Ig] = 1, qC[T.g.Jg] = 1, qC[T.g.Hc] =
            1, qC[T.g.Ic] = 1, qC[T.g.Kg] = 1, qC[T.g.Yb] = 1, qC[T.g.Ha] = 1, qC[T.g.Kc] = 1, qC[T.g.Lg] = 1, qC)),
        sC = {},
        tC = Object.freeze((sC.generate_lead = 1, sC.login = 1, sC.search = 1, sC.select_content = 1, sC.share = 1, sC.sign_up = 1, sC.view_search_results = 1, sC[T.g.Jc] = 1, sC[T.g.Gb] = 1, sC[T.g.Zb] = 1, sC[T.g.Hb] = 1, sC[T.g.Ia] = 1, sC)),
        uC = function(a) {
            var b = "general";
            rC[a] ? b = "ecommerce" : tC[a] ? b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        vC = {},
        wC = Object.freeze((vC.view_search_results = 1, vC[T.g.Gb] = 1, vC[T.g.Hb] = 1, vC[T.g.Ia] = 1, vC)),
        RB = function(a,
            b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        xC = function(a) {
            if (Ia(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        NB = function(a, b, c) {
            var d = function(N) {
                    return U(c, N)
                },
                e = {},
                f = {},
                g = {},
                h = {},
                l = xC(d(T.g.jj));
            !c.J && l && RB(f, "exp", l);
            g["&gtm"] = Xk(!0);
            V(69) && !c.J && (g._no_slc = !0);
            bj() && (h._cs = cC);
            var n = d(T.g.Rc);
            if (!c.J && Fc(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) &&
                        void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && RB(f, p, q)
                    }
            for (var r = Lo(c), u = 0; u < r.length; ++u) {
                var t = r[u];
                if (c.J) {
                    var v = d(t);
                    lC.hasOwnProperty(t) ? e[t] = v : gC.hasOwnProperty(t) ? h[t] = v : g[t] = v
                } else {
                    var w = void 0;
                    w = t !== T.g.fa ? d(t) : Mo(c, t);
                    if (kC.hasOwnProperty(t)) VB(kC[t], t, w, e);
                    else if (hC.hasOwnProperty(t)) VB(hC[t], t, w, g);
                    else if (IB.hasOwnProperty(t)) VB(IB[t], t, w, f);
                    else if (HB.hasOwnProperty(t)) VB(HB[t], t, w, h);
                    else if (/^(dimension|metric|content_group)\d+$/.test(t)) VB(1, t, w, f);
                    else if (t === T.g.fa) {
                        if (!dC) {
                            var y =
                                eb(w);
                            y && (f["&did"] = y)
                        }
                        var x = void 0,
                            A = void 0;
                        b === T.g.Ea ? x = eb(Mo(c, t), ".") : (x = eb(Mo(c, t, 1), "."), A = eb(Mo(c, t, 2), "."));
                        x && (f["&gdid"] = x);
                        A && (f["&edid"] = A)
                    } else t === T.g.ib && 0 > r.indexOf(T.g.Pc) && (h.cookieName = w + "_ga")
                }
            }!1 !== d(T.g.Xi) && !1 !== d(T.g.Ib) && dA() || (g.allowAdFeatures = !1);
            !1 !== d(T.g.da) && eA() || (g.allowAdPersonalizationSignals = !1);
            !c.J && d(T.g.zb) && (h._useUp = !0);
            if (c.J) {
                h.name = h.name || e.gtmTrackerName;
                var B = g.hitCallback;
                g.hitCallback = function() {
                    Ea(B) && B();
                    c.aa()
                }
            } else {
                RB(h, "cookieDomain", "auto");
                RB(g, "forceSSL", !0);
                RB(e, "eventCategory", uC(b));
                wC[b] && RB(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? RB(e, "eventLabel", d(T.g.dh)) : "search" === b || "view_search_results" === b ? RB(e, "eventLabel", d(T.g.qj)) : "select_content" === b && RB(e, "eventLabel", d(T.g.aj));
                var C = e[T.g.ya] || {},
                    D = C[T.g.ic];
                D || 0 != D && C[T.g.V] ? h.allowLinker = !0 : !1 === D && RB(h, "useAmpClientId", !1);
                f.hitCallback = c.aa;
                h.name = a
            }
            bj() && (g["&gcs"] = oj(), nj(T.g.W) || (h.storage = "none"), nj(T.g.K) || (g.allowAdFeatures = !1, h.storeGac = !1));
            var H =
                d(T.g.za) || d(T.g.Kb),
                G = d(T.g.he);
            H && (c.J || (h[T.g.Kb] = H), h._cd2l = !0);
            G && !c.J && (h[T.g.he] = G);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = h;
            return e
        },
        SB = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.Mf = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.ei = "impressions" === b.translateIfKeyEquals ? bC(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Ad = "promoView" === b.translateIfKeyEquals ? bC(e) : e
            }
            if (b.promoClick) {
                c.action =
                    "promo_click";
                var f = b.promoClick.promotions;
                c.Ad = "promoClick" === b.translateIfKeyEquals ? bC(f) : f;
                c.Xa = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var h = b[g].products;
                    c.Sb = "products" === b.translateIfKeyEquals ? bC(h) : h;
                    c.Xa = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        TB = function(a, b) {
            function c(t) {
                return {
                    id: d(T.g.Va),
                    affiliation: d(T.g.fj),
                    revenue: d(T.g.qa),
                    tax: d(T.g.Pg),
                    shipping: d(T.g.ae),
                    coupon: d(T.g.gj),
                    list: d(T.g.cf) || d(T.g.bf) || t
                }
            }
            for (var d = function(t) {
                    return U(b, t)
                }, e = d(T.g.ja), f, g = 0; e && g < e.length && !(f = e[g][T.g.cf] || e[g][T.g.bf]); g++);
            var h = d(T.g.Rc);
            if (Fc(h))
                for (var l = 0; e && l < e.length; ++l) {
                    var n = e[l],
                        p;
                    for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && RB(n, p, n[h[p]])
                }
            var q = null,
                r = d(T.g.ij);
            if (a === T.g.Ha || a === T.g.Kc) q = {
                action: a,
                Xa: c(),
                Sb: bC(e)
            };
            else if (a === T.g.Hc) q = {
                action: "add",
                Xa: c(),
                Sb: bC(e)
            };
            else if (a === T.g.Ic) q = {
                action: "remove",
                Xa: c(),
                Sb: bC(e)
            };
            else if (a === T.g.Ia) q = {
                action: "detail",
                Xa: c(f),
                Sb: bC(e)
            };
            else if (a === T.g.Gb) q = {
                action: "impressions",
                ei: bC(e)
            };
            else if (a === T.g.Hb) q = {
                action: "promo_view",
                Ad: bC(r) || bC(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === T.g.Zb) q = {
                action: "promo_click",
                Ad: bC(r) || bC(e)
            };
            else if ("select_content" === a || a === T.g.Jc) q = {
                action: "click",
                Xa: {
                    list: d(T.g.cf) || d(T.g.bf) || f
                },
                Sb: bC(e)
            };
            else if (a === T.g.Yb || "checkout_progress" === a) {
                var u = {
                    step: a === T.g.Yb ? 1 : d(T.g.Og),
                    option: d(T.g.Ng)
                };
                q = {
                    action: "checkout",
                    Sb: bC(e),
                    Xa: K(c(), u)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                Xa: {
                    step: d(T.g.Og),
                    option: d(T.g.Ng)
                }
            });
            q && (q.Mf = d(T.g.sa));
            return q
        },
        yC = {},
        OB = function(a, b) {
            var c = yC[a];
            yC[a] = K(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var zC = $A;
    var AC = function(a, b, c) {
        for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
    };

    function BC(a, b, c, d) {}
    BC.P = "internal.sendGtagEvent";

    function CC(a, b, c) {
        M(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
        O(this, "send_pixel", a);
        var d = this.h;
        fc(a, function() {
            b instanceof gb && b.B(d)
        }, function() {
            c instanceof gb && c.B(d)
        });
    }
    CC.R = "sendPixel";

    function DC(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    DC.R = "setCookie";

    function EC(a) {
        M(F(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Pb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e === T.g.Se || V(17) && e === T.g.Te || O(this, "access_consent", e, "write")
        }
        var f = this.h.h,
            g = f.eventId,
            h = Ry(f),
            l = ls("consent", "default", Hc(a));
        rs(l, g, h)
    }
    EC.R = "setDefaultConsentState";

    function FC(a, b, c) {
        M(F(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
        O(this, "access_globals", "readwrite", a);
        var d = a.split("."),
            e = bb(d, [z, I]),
            f = d.pop();
        if (e && (void 0 === e[f] || c)) return e[f] = Hc(b, this.h, Ww()), !0;
        return !1
    }
    FC.R = "setInWindow";

    function GC(a, b, c) {}
    GC.P = "internal.setProductSettingsParameter";

    function HC(a, b, c) {}
    HC.P = "internal.setRemoteConfigParameter";

    function IC(a, b, c, d) {
        var e = this;
        var f = function(t, v) {
                var w = new kb;
                w.set("name", t);
                w.set("message", v);
                return w
            },
            g = function(t, v) {
                var w = new Uint8Array(t);
                if (2 === v) {
                    for (var y = "", x = 0; x < w.length; x++) {
                        var A = w[x].toString(16);
                        y += 1 === A.length ? "0" + A : A
                    }
                    return y
                }
                for (var B = Array(w.length), C = 0; C < w.length; C++) B[C] = w[C];
                var D = B.map(function(H) {
                    return String.fromCharCode(H)
                }).join("");
                return z.btoa(D)
            };
        M(F(this), ["input:!string", "onSuccess:!Fn", "onFailure:?Fn"], arguments);
        var h = "hex" === (d instanceof kb ? Hc(d) : {}).outputEncoding ? 2 : 1;
        c = c || new gb("emptyFn", function() {});
        for (var l = z.msCrypto, n = z.crypto, p = an(a), q = new Uint8Array(p.length), r = 0; r < p.length; r++) q[r] = p[r];
        if (n && n.subtle) n.subtle.digest("SHA-256", q).then(function(t) {
            return void b.h(e.h, g(t, h))
        }, function(t) {
            return void c.h(e.h, f(t.name, t.message))
        });
        else if (l && l.subtle) {
            var u = l.subtle.digest("SHA-256", q);
            u.oncomplete = function(t) {
                return void b.h(e.h, g(t.target.result, h))
            };
            u.onerror = function(t) {
                return void c.h(e.h,
                    f(t.target.result.name, t.target.result.message))
            }
        } else c.h(this.h, f("BrowserNotSupported", "This method is not supported in this browser."));
    }
    IC.R = "sha256";

    function JC(a, b, c) {}
    JC.P = "internal.sortRemoteConfigParameters";
    var KC = {},
        LC = {};
    KC.R = "templateStorage";
    KC.getItem = function(a) {
        var b = null;
        return b
    };
    KC.setItem = function(a, b) {};
    KC.removeItem = function(a) {};
    KC.clear = function() {};
    var MC = function(a) {
        var b;
        return b
    };

    function NC(a) {
        M(F(this), ["consentSettings:!DustMap"], arguments);
        var b = Hc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && O(this, "access_consent", c, "write");
        var d = this.h.h;
        rs(ls("consent", "update", b), d.eventId, Ry(d))
    }
    NC.R = "updateConsentState";
    var OC = function() {
        var a = new lg,
            b = function(d) {
                var e = d.P;
                if (a.B.hasOwnProperty(e)) throw "Attempting to add a private function which already exists: " + e + ".";
                if (a.h.hasOwnProperty(e)) throw "Attempting to add a private function with an existing API name: " + e + ".";
                a.B[e] = Ea(d) ? Kf(e, d) : Lf(e, d)
            },
            c = function(d) {
                return a.add(d.R, d)
            };
        c(bw);
        c(hw);
        c(Uw);
        c(Xw);
        c(Yw);
        c(bx);
        c(cx);
        c(ex);
        c(bz());
        c(fx);
        c(Cy);
        c(Jy);
        c(Ky);
        c(Ly);
        c(Oy);
        c(Ty);
        c(Uy);
        c(Xy);
        c(az);
        c(hz);
        c(iz);
        c(kz);
        c(lz);
        c(mz);
        c(CC);
        c(DC);
        c(EC);
        c(FC);
        c(IC);
        c(KC);
        c(NC);
        a.add("Math", Sf());
        a.add("Object", jg);
        a.add("TestHelper", ng());
        a.add("assertApi", Mf);
        a.add("assertThat", Nf);
        a.add("decodeUri", Tf);
        a.add("decodeUriComponent", Uf);
        a.add("encodeUri", Vf);
        a.add("encodeUriComponent", Wf);
        a.add("fail", Xf);
        a.add("generateRandom", Yf);
        a.add("getContainerVersion", Zf);
        a.add("getTimestamp", $f);
        a.add("getTimestampMillis", $f);
        a.add("getType", ag);
        a.add("makeInteger", cg);
        a.add("makeNumber", dg);
        a.add("makeString", eg);
        a.add("makeTableMap", fg);
        a.add("mock", ig);
        a.add("fromBase64",
            By, !("atob" in z));
        a.add("localStorage", dz, !cz());
        a.add("toBase64", MC, !("btoa" in z));
        b(ew);
        b(xw);
        b(Ew);
        b(Jw);
        b(Sw);
        b(Vw);
        b($w);
        b(dx);
        b(qx);
        b(vx);
        b(Ax);
        b(Jx);
        b(Nx);
        b(Yx);
        b(ky);
        b(ly);
        b(ry);
        b(Dy);
        b(Ey);
        b(Hy);
        b(Iy);
        b(My);
        b(Ny);
        b($y);
        b(fz);
        b(jz);
        b(nz);
        b(pz);
        b(qz);
        b(BC);
        b(GC);
        b(HC);
        b(JC);
        return function(d) {
            var e;
            if (a.h.hasOwnProperty(d)) e = a.get(d, this);
            else {
                var f;
                if (f = a.B.hasOwnProperty(d)) {
                    var g = !1,
                        h = this.h.h;
                    if (h) {
                        var l = h.pd();
                        if (l) {
                            0 !== l.indexOf("__cvt_") && (g = !0);
                        }
                    }
                    f =
                        g
                }
                if (f) {
                    var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
                    e = n
                } else throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var PC = function() {
            return !1
        },
        QC = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var RC;

    function SC() {
        var a = RC;
        return function(b, c, d) {
            var e = d && d.event;
            TC(c);
            var f = new kb;
            m(c, function(q, r) {
                var u = Gc(r);
                void 0 === u && void 0 !== r && S(44);
                f.set(q, u)
            });
            a.h.h.F = Qe();
            var g = {
                Pj: bf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ze: void 0 !== e ? function(q) {
                    return e.Cb.ze(q)
                } : void 0,
                pd: function() {
                    return b
                },
                log: function() {},
                bk: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (PC()) {
                var h = QC(),
                    l = void 0,
                    n = void 0;
                g.Pa = {
                    vg: [],
                    fd: {},
                    Ya: function(q, r, u) {
                        1 === r && (l = q);
                        7 === r && (n =
                            u);
                        h(q, r, u)
                    },
                    gg: gg()
                };
                g.log = function(q, r) {
                    if (l) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, {
                            level: q,
                            source: n,
                            message: u
                        })
                    }
                }
            }
            var p = Yd(a, g, [b, f]);
            a.h.h.F = void 0;
            p instanceof sa && "return" === p.h && (p = p.B);
            return Hc(p)
        }
    }

    function TC(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ea(b) && (a.gtmOnSuccess = function() {
            J(b)
        });
        Ea(c) && (a.gtmOnFailure = function() {
            J(c)
        })
    }

    function UC() {
        RC.h.h.N = function(a, b, c) {
            eh.SANDBOXED_JS_SEMAPHORE = eh.SANDBOXED_JS_SEMAPHORE || 0;
            eh.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                eh.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function VC(a) {
        void 0 !== a && m(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                wh[e] = wh[e] || [];
                wh[e].push(b)
            }
        })
    };
    var WC = encodeURI,
        Y = encodeURIComponent,
        XC = function(a, b, c) {
            fc(a, b, c)
        },
        YC = function(a, b) {
            if (!a) return !1;
            var c = ji(li(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        ZC = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        m: {}
    };

    Z.m.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(l("horiz.pix")).length || Object.keys(l("horiz.pct")).length || Object.keys(l("vert.pix")).length || Object.keys(l("vert.pct")).length)
            }

            function b(x) {
                for (var A = [], B = x.split(","), C = 0; C < B.length; C++) {
                    var D = Number(B[C]);
                    if (isNaN(D)) return [];
                    p.test(B[C]) || A.push(D)
                }
                return A
            }

            function c() {
                var x = 0,
                    A = 0;
                return function() {
                    var B = Xh(),
                        C = B.height;
                    x = Math.max(v.scrollLeft + B.width, x);
                    A = Math.max(v.scrollTop + C, A);
                    return {
                        Nf: x,
                        Of: A
                    }
                }
            }

            function d() {
                u = X("self");
                t = u.document;
                v = t.scrollingElement || t.body && t.body.parentNode;
                y = c()
            }

            function e(x, A, B, C) {
                var D = l(A),
                    H = {},
                    G;
                for (G in D) {
                    H.Xb = G;
                    if (D.hasOwnProperty(H.Xb)) {
                        var N = Number(H.Xb);
                        x < N || (jv({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": N,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": C,
                            "gtm.triggers": D[H.Xb].join(",")
                        }), Hu("sdl", A, function(Q) {
                            return function(aa) {
                                delete aa[Q.Xb];
                                return aa
                            }
                        }(H), {}))
                    }
                    H = {
                        Xb: H.Xb
                    }
                }
            }

            function f() {
                var x = y(),
                    A = x.Nf,
                    B = x.Of,
                    C = A / v.scrollWidth * 100,
                    D = B / v.scrollHeight * 100;
                e(A, "horiz.pix",
                    q.ve, r.Ch);
                e(C, "horiz.pct", q.ue, r.Ch);
                e(B, "vert.pix", q.ve, r.Rh);
                e(D, "vert.pct", q.ue, r.Rh);
                Gu("sdl", "pending", !1)
            }

            function g() {
                var x = 250,
                    A = !1;
                t.scrollingElement && t.documentElement && u.addEventListener && (x = 50, A = !0);
                var B = 0,
                    C = !1,
                    D = function() {
                        C ? B = dv(D, x) : (B = 0, f(), ov("sdl") && !a() && (hc(u, "scroll", H), hc(u, "resize", H), Gu("sdl", "init", !1)));
                        C = !1
                    },
                    H = function() {
                        A && y();
                        B ? C = !0 : (B = dv(D, x), Gu("sdl", "pending", !0))
                    };
                return H
            }

            function h(x, A, B) {
                if (A) {
                    var C = b(String(x));
                    Hu("sdl", B, function(D) {
                        for (var H = 0; H < C.length; H++) {
                            var G =
                                String(C[H]);
                            D.hasOwnProperty(G) || (D[G] = []);
                            D[G].push(A)
                        }
                        return D
                    }, {})
                }
            }

            function l(x) {
                return Iu("sdl", x, {})
            }

            function n(x) {
                J(x.vtp_gtmOnSuccess);
                var A = x.vtp_uniqueTriggerId,
                    B = x.vtp_horizontalThresholdsPixels,
                    C = x.vtp_horizontalThresholdsPercent,
                    D = x.vtp_verticalThresholdUnits,
                    H = x.vtp_verticalThresholdsPixels,
                    G = x.vtp_verticalThresholdsPercent;
                switch (x.vtp_horizontalThresholdUnits) {
                    case q.ve:
                        h(B, A, "horiz.pix");
                        break;
                    case q.ue:
                        h(C, A, "horiz.pct")
                }
                switch (D) {
                    case q.ve:
                        h(H, A, "vert.pix");
                        break;
                    case q.ue:
                        h(G,
                            A, "vert.pct")
                }
                ov("sdl") ? Iu("sdl", "pending") || (w || (d(), w = !0), J(function() {
                    return f()
                })) : (d(), w = !0, v && (pv("sdl"), Gu("sdl", "pending", !0), J(function() {
                    f();
                    if (a()) {
                        var N = g();
                        gc(u, "scroll", N);
                        gc(u, "resize", N)
                    } else Gu("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    ue: "PERCENT",
                    ve: "PIXELS"
                },
                r = {
                    Rh: "vertical",
                    Ch: "horizontal"
                },
                u, t, v, w = !1,
                y;
            (function(x) {
                Z.__sdl = x;
                Z.__sdl.o = "sdl";
                Z.__sdl.isVendorTemplate = !0;
                Z.__sdl.priorityOverride = 0;
                Z.__sdl.isInfrastructure = !1
            })(function(x) {
                x.vtp_triggerStartOption ? n(x) : Rt(function() {
                    n(x)
                })
            })
        }();

    Z.m.jsm = ["customScripts"],
        function() {
            (function(a) {
                Z.__jsm = a;
                Z.__jsm.o = "jsm";
                Z.__jsm.isVendorTemplate = !0;
                Z.__jsm.priorityOverride = 0;
                Z.__jsm.isInfrastructure = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = X("google_tag_manager");
                        var d = c && c.e && c.e(b);
                        qv(d, "jsm", a.vtp_gtmEventId);
                        return d
                    } catch (e) {}
                }
            })
        }();
    Z.m.c = ["google"],
        function() {
            (function(a) {
                Z.__c = a;
                Z.__c.o = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0;
                Z.__c.isInfrastructure = !1
            })(function(a) {
                qv(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value
            })
        }();
    Z.m.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.o = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.m.f = ["google"],
        function() {
            (function(a) {
                Z.__f = a;
                Z.__f.o = "f";
                Z.__f.isVendorTemplate = !0;
                Z.__f.priorityOverride = 0;
                Z.__f.isInfrastructure = !1
            })(function(a) {
                var b = iv("gtm.referrer", 1) || I.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? ji(li(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : hv(String(b)) : String(b)
            })
        }();
    Z.m.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = Eu(c, "gtm.click");
                    jv(d)
                }
            }(function(b) {
                Z.__cl = b;
                Z.__cl.o = "cl";
                Z.__cl.isVendorTemplate = !0;
                Z.__cl.priorityOverride = 0;
                Z.__cl.isInfrastructure = !1
            })(function(b) {
                if (!ov("cl")) {
                    var c = X("document");
                    gc(c, "click", a, !0);
                    pv("cl")
                }
                J(b.vtp_gtmOnSuccess)
            })
        }();
    Z.m.k = ["google"],
        function() {
            (function(a) {
                Z.__k = a;
                Z.__k.o = "k";
                Z.__k.isVendorTemplate = !0;
                Z.__k.priorityOverride = 0;
                Z.__k.isInfrastructure = !1
            })(function(a) {
                return lv(a.vtp_name, iv("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
            })
        }();
    Z.m.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Z.__access_globals = b;
                Z.__access_globals.o = "access_globals";
                Z.__access_globals.isVendorTemplate = !0;
                Z.__access_globals.priorityOverride = 0;
                Z.__access_globals.isInfrastructure = !1
            })(function(b) {
                for (var c =
                        b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var l = c[h],
                        n = l.key;
                    l.read && e.push(n);
                    l.write && f.push(n);
                    l.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!k(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " +
                            q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    ba: a
                }
            })
        }();
    Z.m.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Z.__u = b;
                Z.__u.o = "u";
                Z.__u.isVendorTemplate = !0;
                Z.__u.priorityOverride = 0;
                Z.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : iv("gtm.url", 1)) || fv();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return hv(String(c));
                var e = li(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        l = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ia(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = ji(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!l || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = ji(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Z.m.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.o = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = iv(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                qv(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.m.ytl = ["google"],
        function() {
            function a() {
                var t = Math.round(1E9 * Math.random()) + "";
                return I.getElementById(t) ? a() : t
            }

            function b(t, v) {
                if (!t) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= t.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(t, v) {
                var w = t.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var y = t.setAttribute,
                            x;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) x = w + A + "enablejsapi=1";
                        else {
                            if (!r) {
                                var B = X("document");
                                r = B.location.protocol + "//" + B.location.hostname;
                                B.location.port && (r += ":" + B.location.port)
                            }
                            x = w + A + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        y.call(t, "src", x);
                        return !0
                    }
                }
                return !1
            }

            function d(t, v) {
                if (!t.getAttribute("data-gtm-yt-inspected-" + v.Za) && (t.setAttribute("data-gtm-yt-inspected-" + v.Za, "true"), c(t, v.nd))) {
                    t.id || (t.id = a());
                    var w = X("YT"),
                        y = w.get(t.id);
                    y || (y = new w.Player(t.id));
                    var x = f(y, v),
                        A = {},
                        B;
                    for (B in x) A.Ec = B, x.hasOwnProperty(A.Ec) && y.addEventListener(A.Ec, function(C) {
                        return function(D) {
                            return x[C.Ec](D.data)
                        }
                    }(A)), A = {
                        Ec: A.Ec
                    }
                }
            }

            function e(t) {
                J(function() {
                    function v() {
                        for (var y =
                                w.getElementsByTagName("iframe"), x = y.length, A = 0; A < x; A++) d(y[A], t)
                    }
                    var w = X("document");
                    v();
                    Ru(v)
                })
            }

            function f(t, v) {
                var w, y;

                function x() {
                    aa = bv(function() {
                        return {
                            url: R,
                            title: ka,
                            Pf: P,
                            Yh: t.getCurrentTime(),
                            playbackRate: ca
                        }
                    }, v.Za, t.getIframe());
                    P = 0;
                    ka = R = "";
                    ca = 1;
                    return A
                }

                function A(Ha) {
                    switch (Ha) {
                        case q.PLAYING:
                            P = Math.round(t.getDuration());
                            R = t.getVideoUrl();
                            if (t.getVideoData) {
                                var Ja = t.getVideoData();
                                ka = Ja ? Ja.title : ""
                            }
                            ca = t.getPlaybackRate();
                            v.If ? jv(aa.createEvent("start")) : aa.sc();
                            oa = l(v.pg, v.og, t.getDuration());
                            return B(Ha);
                        default:
                            return A
                    }
                }

                function B() {
                    ba = t.getCurrentTime();
                    Fa = ev().getTime();
                    aa.ui();
                    Q();
                    return C
                }

                function C(Ha) {
                    var Ja;
                    switch (Ha) {
                        case q.ENDED:
                            return H(Ha);
                        case q.PAUSED:
                            Ja = "pause";
                        case q.BUFFERING:
                            var ab = t.getCurrentTime() - ba;
                            Ja = 1 < Math.abs((ev().getTime() - Fa) / 1E3 * ca - ab) ? "seek" : Ja || "buffering";
                            t.getCurrentTime() && (v.Hf ? jv(aa.createEvent(Ja)) : aa.sc());
                            N();
                            return D;
                        case q.UNSTARTED:
                            return x(Ha);
                        default:
                            return C
                    }
                }

                function D(Ha) {
                    switch (Ha) {
                        case q.ENDED:
                            return H(Ha);
                        case q.PLAYING:
                            return B(Ha);
                        case q.UNSTARTED:
                            return x(Ha);
                        default:
                            return D
                    }
                }

                function H() {
                    for (; y;) {
                        var Ha = w;
                        cv(y);
                        Ha()
                    }
                    v.Gf && jv(aa.createEvent("complete", 1));
                    return x(q.UNSTARTED)
                }

                function G() {}

                function N() {
                    y && (cv(y), y = 0, w = G)
                }

                function Q() {
                    if (oa.length && 0 !== ca) {
                        var Ha = -1,
                            Ja;
                        do {
                            Ja = oa[0];
                            if (Ja.ra > t.getDuration()) return;
                            Ha = (Ja.ra - t.getCurrentTime()) / ca;
                            if (0 > Ha && (oa.shift(), 0 === oa.length)) return
                        } while (0 > Ha);
                        w = function() {
                            y = 0;
                            w = G;
                            0 < oa.length && oa[0].ra === Ja.ra && (oa.shift(), jv(aa.createEvent("progress", Ja.zd, Ja.Bd)));
                            Q()
                        };
                        y = dv(w, 1E3 *
                            Ha)
                    }
                }
                var aa, oa = [],
                    P, R, ka, ca, ba, Fa, Wa = x(q.UNSTARTED);
                y = 0;
                w = G;
                return {
                    onStateChange: function(Ha) {
                        Wa = Wa(Ha)
                    },
                    onPlaybackRateChange: function(Ha) {
                        ba = t.getCurrentTime();
                        Fa = ev().getTime();
                        aa.sc();
                        ca = Ha;
                        N();
                        Q()
                    }
                }
            }

            function g(t) {
                for (var v = t.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var A = parseInt(v[x], 10);
                    isNaN(A) || 100 < A || 0 > A || y.push(A / 100)
                }
                y.sort(function(B, C) {
                    return B - C
                });
                return y
            }

            function h(t) {
                for (var v = t.split(","), w = v.length, y = [], x = 0; x < w; x++) {
                    var A = parseInt(v[x], 10);
                    isNaN(A) || 0 > A || y.push(A)
                }
                y.sort(function(B,
                    C) {
                    return B - C
                });
                return y
            }

            function l(t, v, w) {
                var y = t.map(function(B) {
                    return {
                        ra: B,
                        Bd: B,
                        zd: void 0
                    }
                });
                if (!v.length) return y;
                var x = v.map(function(B) {
                    return {
                        ra: B * w,
                        Bd: void 0,
                        zd: B
                    }
                });
                if (!y.length) return x;
                var A = y.concat(x);
                A.sort(function(B, C) {
                    return B.ra - C.ra
                });
                return A
            }

            function n(t) {
                var v = !!t.vtp_captureStart,
                    w = !!t.vtp_captureComplete,
                    y = !!t.vtp_capturePause,
                    x = g(t.vtp_progressThresholdsPercent + ""),
                    A = h(t.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!t.vtp_fixMissingApi;
                if (v || w || y || x.length || A.length) {
                    var C = {
                            If: v,
                            Gf: w,
                            Hf: y,
                            og: x,
                            pg: A,
                            nd: B,
                            Za: void 0 === t.vtp_uniqueTriggerId ? "" : t.vtp_uniqueTriggerId
                        },
                        D = X("YT"),
                        H = function() {
                            e(C)
                        };
                    J(t.vtp_gtmOnSuccess);
                    if (D) D.ready && D.ready(H);
                    else {
                        var G = X("onYouTubeIframeAPIReady");
                        kv("onYouTubeIframeAPIReady", function() {
                            G && G();
                            H()
                        });
                        J(function() {
                            for (var N = X("document"), Q = N.getElementsByTagName("script"), aa = Q.length, oa = 0; oa < aa; oa++) {
                                var P = Q[oa].getAttribute("src");
                                if (b(P, "iframe_api") || b(P, "player_api")) return
                            }
                            for (var R = N.getElementsByTagName("iframe"), ka = R.length, ca = 0; ca <
                                ka; ca++)
                                if (!u && c(R[ca], C.nd)) {
                                    W("https://www.youtube.com/iframe_api");
                                    u = !0;
                                    break
                                }
                        })
                    }
                } else J(t.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                r, u = !1;
            (function(t) {
                Z.__ytl = t;
                Z.__ytl.o = "ytl";
                Z.__ytl.isVendorTemplate = !0;
                Z.__ytl.priorityOverride = 0;
                Z.__ytl.isInfrastructure = !1
            })(function(t) {
                t.vtp_triggerStartOption ? n(t) : Kr(function() {
                    n(t)
                })
            })
        }();

    Z.m.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Z.__gclidw = b;
                Z.__gclidw.o = "gclidw";
                Z.__gclidw.isVendorTemplate = !0;
                Z.__gclidw.priorityOverride = 100;
                Z.__gclidw.isInfrastructure = !1
            })(function(b) {
                J(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, f = b.vtp_cookieFlags);
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                !b.vtp_enableCrossDomainFeature || b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || !b.vtp_enableCrossDomain &&
                    !sk() || (Jn(a, g), V(73) && Ek(g));
                Gn(g);
                Mn(["aw", "dc"], g);
                Ho(g);
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var h = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    Ln(a, h, b.vtp_urlPosition, !!b.vtp_formDecoration, g.prefix);
                    V(73) && Fk(h, b.vtp_urlPosition, !!b.vtp_formDecoration, g)
                }
                var l = iv(T.g.na);
                Wn({
                    eventId: b.vtp_gtmEventId,
                    priorityId: b.vtp_gtmPriorityId,
                    Jf: !1,
                    Me: void 0 != l && !1 !== l,
                    uc: g,
                    He: !0
                });
                b.vtp_enableUrlPassthrough && On(["aw", "dc", "gb"])
            })
        }();

    Z.m.aev = ["google"],
        function() {
            function a(r, u, t, v, w) {
                w || (w = "element");
                var y = u + "." + t,
                    x;
                if (n.hasOwnProperty(y)) x = n[y];
                else {
                    var A = r[w];
                    if (A && (x = v(A), n[y] = x, p.push(y), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return x
            }

            function b(r, u, t) {
                var v = r[q[u]];
                return void 0 !== v ? v : t
            }

            function c(r, u) {
                if (!r) return !1;
                var t = d(fv());
                Ia(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
                for (var v = [t], w = 0; w < u.length; w++) {
                    var y = u[w];
                    if (y.hasOwnProperty("is_regex"))
                        if (y.is_regex) try {
                            y = new RegExp(y.domain)
                        } catch (B) {
                            continue
                        } else y =
                            y.domain;
                    var x = d(r);
                    if (y instanceof RegExp) {
                        if (y.test(x)) return !1
                    } else {
                        var A = y;
                        if (0 != A.length) {
                            if (0 <= x.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !YC(r, v)
            }

            function d(r) {
                l.test(r) || (r = "http://" + r);
                return ji(li(r), "HOST", !0)
            }

            function e(r, u, t, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(u, t, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(u, t, "FORM." + r, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return h(u, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(u, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(u,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var y = u.interactedFormFieldPosition;
                        return void 0 === y ? v : y;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var x = u.interactSequenceNumber;
                        return void 0 === x ? v : x;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return ic(r, "value");
                    case "button":
                        return jc(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var u = 0, t = 0; t < r.elements.length; t++) Mu(r.elements[t]) && u++;
                    return u
                }
            }

            function h(r, u, t) {
                var v = r.interactedFormField;
                return v && ic(v, u) || t
            }
            var l = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Z.__aev = r;
                Z.__aev.o = "aev";
                Z.__aev.isVendorTemplate = !0;
                Z.__aev.priorityOverride = 0;
                Z.__aev.isInfrastructure = !1
            })(function(r) {
                var u =
                    r.vtp_gtmEventId,
                    t = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var y = w.element;
                        return y && y.tagName || t;
                    case "TEXT":
                        return a(w, u, v, jc) || t;
                    case "URL":
                        var x;
                        a: {
                            var A = String(w.elementUrl || t || ""),
                                B = li(A),
                                C = String(r.vtp_component || "URL");
                            switch (C) {
                                case "URL":
                                    x = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    x = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    x = ji(B, C, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return x;
                    case "ATTRIBUTE":
                        var D;
                        if (void 0 === r.vtp_attribute) D = b(w,
                            v, t);
                        else {
                            var H = w.element;
                            D = H && ic(H, r.vtp_attribute) || t || ""
                        }
                        return D;
                    case "MD":
                        var G = r.vtp_mdValue,
                            N = a(w, u, "MD", Yu);
                        return G && N ? av(N, G) || t : N || t;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, u, t);
                    default:
                        var Q = b(w, v, t);
                        qv(Q, "aev", r.vtp_gtmEventId);
                        return Q
                }
            })
        }();
    Z.m.read_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_data_layer = b;
                Z.__read_data_layer.o = "read_data_layer";
                Z.__read_data_layer.isVendorTemplate = !0;
                Z.__read_data_layer.priorityOverride = 0;
                Z.__read_data_layer.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_keyPatterns || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!k(f)) throw d(e, {}, "Keys must be strings.");
                        try {
                            if (xf(f, c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid key filter.");
                        }
                        throw d(e, {}, "Prohibited read from data layer variable: " +
                            f + ".");
                    },
                    ba: a
                }
            })
        }();
    Z.m.hl = ["google"],
        function() {
            function a(f) {
                return f.target && f.target.location && f.target.location.href ? f.target.location.href : fv()
            }

            function b(f, g) {
                gc(f, "hashchange", function(h) {
                    var l = a(h);
                    g({
                        source: "hashchange",
                        state: null,
                        url: hv(l),
                        T: gv(l)
                    })
                })
            }

            function c(f, g) {
                gc(f, "popstate", function(h) {
                    var l = a(h);
                    g({
                        source: "popstate",
                        state: h.state,
                        url: hv(l),
                        T: gv(l)
                    })
                })
            }

            function d(f, g, h) {
                var l = g.history,
                    n = l[f];
                if (Ea(n)) try {
                    l[f] = function(p, q, r) {
                        n.apply(l, [].slice.call(arguments, 0));
                        h({
                            source: f,
                            state: p,
                            url: hv(fv()),
                            T: gv(fv())
                        })
                    }
                } catch (p) {}
            }

            function e() {
                var f = {
                    source: null,
                    state: X("history").state || null,
                    url: hv(fv()),
                    T: gv(fv())
                };
                return function(g) {
                    var h = f,
                        l = {};
                    l[h.source] = !0;
                    l[g.source] = !0;
                    if (!l.popstate || !l.hashchange || h.T != g.T) {
                        var n = {
                            event: "gtm.historyChange",
                            "gtm.historyChangeSource": g.source,
                            "gtm.oldUrlFragment": f.T,
                            "gtm.newUrlFragment": g.T,
                            "gtm.oldHistoryState": f.state,
                            "gtm.newHistoryState": g.state,
                            "gtm.oldUrl": f.url,
                            "gtm.newUrl": g.url
                        };
                        f = g;
                        jv(n)
                    }
                }
            }(function(f) {
                Z.__hl = f;
                Z.__hl.o = "hl";
                Z.__hl.isVendorTemplate = !0;
                Z.__hl.priorityOverride = 0;
                Z.__hl.isInfrastructure = !1
            })(function(f) {
                var g = X("self");
                if (!ov("hl")) {
                    var h = e();
                    b(g, h);
                    c(g, h);
                    d("pushState", g, h);
                    d("replaceState", g, h);
                    pv("hl")
                }
                J(f.vtp_gtmOnSuccess)
            })
        }();
    Z.m.smm = ["google"],
        function() {
            (function(a) {
                Z.__smm = a;
                Z.__smm.o = "smm";
                Z.__smm.isVendorTemplate = !0;
                Z.__smm.priorityOverride = 0;
                Z.__smm.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_input,
                    c = ZC(a.vtp_map, "key", "value") || {},
                    d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
                qv(d, "smm", a.vtp_gtmEventId);
                return d
            })
        }();
    Z.m.paused = [],
        function() {
            (function(a) {
                Z.__paused = a;
                Z.__paused.o = "paused";
                Z.__paused.isVendorTemplate = !0;
                Z.__paused.priorityOverride = 0;
                Z.__paused.isInfrastructure = !1
            })(function(a) {
                J(a.vtp_gtmOnFailure)
            })
        }();



    Z.m.gaawc = ["google"],
        function() {
            (function(a) {
                Z.__gaawc = a;
                Z.__gaawc.o = "gaawc";
                Z.__gaawc.isVendorTemplate = !0;
                Z.__gaawc.priorityOverride = 10;
                Z.__gaawc.isInfrastructure = !1
            })(function(a) {
                var b = String(a.vtp_measurementId);
                if (!k(b) || 0 >= b.indexOf("-")) J(a.vtp_gtmOnFailure);
                else {
                    var c = ZC(a.vtp_fieldsToSet, "name", "value") || {};
                    if (c.hasOwnProperty(T.g.Ma) || a.vtp_userProperties) {
                        var d = c[T.g.Ma] || {};
                        K(ZC(a.vtp_userProperties, "name", "value"), d);
                        c[T.g.Ma] = d
                    }
                    a.vtp_enableSendToServerContainer && a.vtp_serverContainerUrl &&
                        (c[T.g.za] = a.vtp_serverContainerUrl, c[T.g.fe] = !0);
                    var e = a.vtp_userDataVariable;
                    e && (c[T.g.va] = e);
                    AC(c, Wg, function(f) {
                        return Qa(f)
                    });
                    AC(c, Yg, function(f) {
                        return Number(f)
                    });
                    c.send_page_view = a.vtp_sendPageView;
                    rs(ns(b, c), a.vtp_gtmEventId, {
                        noTargetGroup: !0,
                        originatingEntity: Mr(1, a.vtp_gtmEntityIndex, a.vtp_gtmEntityName)
                    });
                    J(a.vtp_gtmOnSuccess)
                }
            })
        }();
    Z.m.gaawe = ["google"],
        function() {
            function a(f, g, h) {
                for (var l = 0; l < g.length; l++) f.hasOwnProperty(g[l]) && (f[g[l]] = h(f[g[l]]))
            }

            function b(f, g, h) {
                var l = {},
                    n = function(t, v) {
                        l[t] = l[t] || v
                    },
                    p = function(t, v, w) {
                        w = void 0 === w ? !1 : w;
                        c.push(6);
                        if (t) {
                            l.items = l.items || [];
                            for (var y = {}, x = 0; x < t.length; y = {
                                    Vb: y.Vb
                                }, x++) y.Vb = {}, m(t[x], function(B) {
                                return function(C, D) {
                                    w && "id" === C ? B.Vb.promotion_id = D : w && "name" === C ? B.Vb.promotion_name = D : B.Vb[C] = D
                                }
                            }(y)), l.items.push(y.Vb)
                        }
                        if (v)
                            for (var A in v) d.hasOwnProperty(A) ? n(d[A], v[A]) : n(A,
                                v[A])
                    },
                    q;
                "dataLayer" === f.vtp_getEcommerceDataFrom ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, Fc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (Fc(q)) {
                    var r = !1,
                        u;
                    for (u in q) q.hasOwnProperty(u) && (r || (c.push(5), r = !0), "currencyCode" === u ? n("currency", q.currencyCode) : "impressions" === u && g === T.g.Gb ? p(q.impressions, null) : "promoClick" === u && g === T.g.Zb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : "promoView" === u && g === T.g.Hb ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(u) ? g === e[u] && p(q[u].products, q[u].actionField) : l[u] = q[u]);
                    K(l, h)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Z.__gaawe = f;
                Z.__gaawe.o = "gaawe";
                Z.__gaawe.isVendorTemplate = !0;
                Z.__gaawe.priorityOverride = 0;
                Z.__gaawe.isInfrastructure = !1
            })(function(f) {
                var g =
                    String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (k(g) && 0 === g.indexOf("G-")) {
                    var h = String(f.vtp_eventName),
                        l = {};
                    c = [];
                    f.vtp_sendEcommerceData && (Vg.hasOwnProperty(h) || "checkout_option" === h) && b(f, h, l);
                    var n = ZC(f.vtp_eventParameters, "name", "value"),
                        p;
                    for (p in n) n.hasOwnProperty(p) && (l[p] = n[p]);
                    var q = f.vtp_userDataVariable;
                    q && (l[T.g.va] = q);
                    if (l.hasOwnProperty(T.g.Ma) || f.vtp_userProperties) {
                        var r = l[T.g.Ma] || {};
                        K(ZC(f.vtp_userProperties, "name", "value"), r);
                        l[T.g.Ma] = r
                    }
                    var u = {
                        originatingEntity: Mr(1,
                            f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (0 < c.length) {
                        var t = {};
                        u.eventMetadata = (t.event_usage = c, t)
                    }
                    a(l, Wg, function(w) {
                        return Qa(w)
                    });
                    a(l, Yg, function(w) {
                        return Number(w)
                    });
                    var v = f.vtp_gtmEventId;
                    u.noGtmEvent = !0;
                    rs(os(g, h, l), v, u);
                    J(f.vtp_gtmOnSuccess)
                } else J(f.vtp_gtmOnFailure)
            })
        }();

    Z.m.send_pixel = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__send_pixel = b;
                Z.__send_pixel.o = "send_pixel";
                Z.__send_pixel.isVendorTemplate = !0;
                Z.__send_pixel.priorityOverride = 0;
                Z.__send_pixel.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_allowedUrls || "specific",
                    d = b.vtp_urls || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!k(g)) throw e(f, {}, "URL must be a string.");
                        try {
                            if ("any" === c && Cf(li(g)) || "specific" === c && Df(li(g), d)) return
                        } catch (h) {
                            throw e(f, {}, "Invalid URL filter.");
                        }
                        throw e(f, {}, "Prohibited URL: " + g + ".");
                    },
                    ba: a
                }
            })
        }();


    Z.m.sp = ["google"],
        function() {
            (function(a) {
                Z.__sp = a;
                Z.__sp.o = "sp";
                Z.__sp.isVendorTemplate = !0;
                Z.__sp.priorityOverride = 0;
                Z.__sp.isInfrastructure = !1
            })(function(a) {
                var b, c = {};
                "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = ZC(a.vtp_customParams, "key", "value"));
                b = Fc(c) ? c : {};
                b[T.g.Ye] = !0;
                if (a.vtp_enableConversionLinkingSettings) {
                    var d = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker;
                    b[T.g.Ka] = a.vtp_conversionCookiePrefix;
                    b[T.g.xa] = d
                }
                a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[T.g.qa] = a.vtp_eventValue), a.vtp_eventItems && (b[T.g.ja] = a.vtp_eventItems));
                a.vtp_rdp && (b[T.g.Mb] = !0);
                a.vtp_userId && (b[T.g.Aa] = a.vtp_userId);
                b[T.g.Fa] = iv(T.g.Fa), b[T.g.da] = iv(T.g.da), b[T.g.Jb] = iv(T.g.Jb), b[T.g.La] = iv(T.g.La);
                var e = Zo(Yo(Xo(Wo(Po(new Oo(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure))),
                    f = "AW-" + a.vtp_conversionId;
                a.vtp_conversionLabel && (f += "/" + a.vtp_conversionLabel);
                e.eventMetadata.hit_type_override = "remarketing";
                fB(f, a.vtp_eventName || "", Date.now(), e)
            })
        }();

    Z.m.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.eg && b.hg >= b.eg) b.Xf && X("self").clearInterval(b.Xf);
                    else {
                        b.hg++;
                        var c = ev().getTime();
                        jv({
                            event: b.eventName,
                            "gtm.timerId": b.Xf,
                            "gtm.timerEventNumber": b.hg,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.eg,
                            "gtm.timerStartTime": b.xi,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.xi,
                            "gtm.triggers": b.sl
                        })
                    }
                }
            }(function(b) {
                Z.__tl = b;
                Z.__tl.o = "tl";
                Z.__tl.isVendorTemplate = !0;
                Z.__tl.priorityOverride = 0;
                Z.__tl.isInfrastructure = !1
            })(function(b) {
                J(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        eventName: b.vtp_eventName,
                        hg: 0,
                        interval: Number(b.vtp_interval),
                        eg: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        sl: String(b.vtp_uniqueTriggerId || "0"),
                        xi: ev().getTime()
                    };
                    c.Xf = X("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();

    Z.m.ua = ["google"],
        function() {
            function a(l, n) {
                for (var p in l)
                    if (!h[p] && l.hasOwnProperty(p)) {
                        var q = g[p] ? Qa(l[p]) : l[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(l) {
                var n = {};
                l.vtp_gaSettings && K(ZC(l.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                K(ZC(l.vtp_fieldsToSet, "fieldName", "value"), n);
                Qa(n.urlPassthrough) && (n._useUp = !0);
                l.vtp_transportUrl && (n._x_19 = l.vtp_transportUrl);
                return n
            }

            function c(l, n) {
                return void 0 === n ? n : l(n)
            }

            function d(l, n, p) {
                var q =
                    function(N, Q, aa) {
                        for (var oa in N)
                            if (r.hasOwnProperty(oa)) {
                                var P = aa[Q] || {};
                                P.actionField = P.actionField || {};
                                P.actionField[r[oa]] = N[oa];
                                aa[Q] = P
                            }
                    },
                    r = {
                        transaction_id: "id",
                        affiliation: "affiliation",
                        value: "revenue",
                        tax: "tax",
                        shipping: "shipping",
                        coupon: "coupon",
                        item_list_name: "list"
                    },
                    u = {},
                    t = (u[T.g.Jc] = "click", u[T.g.Ia] = "detail", u[T.g.Hc] = "add", u[T.g.Ic] = "remove", u[T.g.Yb] = "checkout", u[T.g.Ha] = "purchase", u[T.g.Kc] = "refund", u),
                    v;
                if (l.vtp_useEcommerceDataLayer) {
                    var w = !1;
                    l.vtp_useGA4SchemaForEcommerce && (v = l.vtp_gtmCachedValues.eventModel,
                        w = !!v);
                    w || (v = iv("ecommerce", 1))
                } else l.vtp_ecommerceMacroData && (v = l.vtp_ecommerceMacroData.ecommerce, !v && l.vtp_useGA4SchemaForEcommerce && (v = l.vtp_ecommerceMacroData));
                if (!Fc(v)) return;
                v = Object(v);
                var y = {},
                    x = v.currencyCode;
                l.vtp_useGA4SchemaForEcommerce && (x = x || v.currency);
                var A = Va(n, "currencyCode", x);
                A && (y.currencyCode = A);
                v.impressions &&
                    (y.impressions = v.impressions);
                v.promoView && (y.promoView = v.promoView);
                if (l.vtp_useGA4SchemaForEcommerce) {
                    if (p === T.g.Gb && !v.impressions) v.items && (y.impressions = v.items, y.translateIfKeyEquals = "impressions");
                    else if (p === T.g.Hb && !v.promoView) v.promoView = {}, v.items && (y.promoView = {}, y.promoView.promotions = v.items, y.translateIfKeyEquals = "promoView");
                    else if (p === T.g.Zb && !v.promoClick) v.promoClick = {}, v.items && (y.promoClick = {}, y.promoClick.promotions = v.items, y.translateIfKeyEquals = "promoClick", q(v, "promoClick",
                        y));
                    else if (t.hasOwnProperty(p)) {
                        var B = t[p];
                        !v[B] && v.items && (y[B] = {}, y[B].products = v.items, y.translateIfKeyEquals = "products", q(v, B, y))
                    }
                    var C = y.translateIfKeyEquals;
                    if ("promoClick" === C || "products" === C) return y
                }
                if (v.promoClick) return y.promoClick = v.promoClick, y;
                for (var D = "detail checkout checkout_option click add remove purchase refund".split(" "), H = 0; H < D.length; H++) {
                    var G = v[D[H]];
                    if (G) return y[D[H]] = G, y
                }
                l.vtp_useGA4SchemaForEcommerce && t.hasOwnProperty(p) && q(v, t[p], y);
                return y;
            }

            function e(l, n) {
                if (!f) {
                    var p = l.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    l.vtp_useInternalVersion && !l.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = l.vtp_gtmOnFailure,
                        r = mh || oh ? mr(n._x_19, "/analytics.js") : void 0,
                        u = bo("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    W("analytics.js" === p && r ? r : u, function() {
                        var t = Vr();
                        t && t.loaded || q();
                    }, q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                h = {
                    urlPassthrough: !0
                };
            (function(l) {
                Z.__ua = l;
                Z.__ua.o = "ua";
                Z.__ua.isVendorTemplate = !0;
                Z.__ua.priorityOverride = 0;
                Z.__ua.isInfrastructure = !1
            })(function(l) {
                function n() {
                    if (l.vtp_doubleClick || "DISPLAY_FEATURES" == l.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (l.vtp_gaSettings) {
                    var u = l.vtp_gaSettings;
                    K(ZC(u.vtp_contentGroup, "index", "group"), p);
                    K(ZC(u.vtp_dimension, "index", "dimension"), q);
                    K(ZC(u.vtp_metric, "index", "metric"), r);
                    var t = K(u);
                    t.vtp_fieldsToSet = void 0;
                    t.vtp_contentGroup = void 0;
                    t.vtp_dimension = void 0;
                    t.vtp_metric = void 0;
                    l = K(l, t)
                }
                K(ZC(l.vtp_contentGroup, "index", "group"), p);
                K(ZC(l.vtp_dimension, "index", "dimension"), q);
                K(ZC(l.vtp_metric, "index", "metric"), r);
                var v = b(l),
                    w = String(l.vtp_trackingId || ""),
                    y = "",
                    x = "",
                    A = "";
                l.vtp_setTrackerName &&
                    "string" == typeof l.vtp_trackerName ? "" !== l.vtp_trackerName && (A = l.vtp_trackerName, x = A + ".") : (A = "gtm" + yh(), x = A + ".");
                var B = function(ca, ba) {
                    for (var Fa in ba) ba.hasOwnProperty(Fa) && (v[ca + Fa] = ba[Fa])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                l.vtp_enableEcommerce && (y = l.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(l, v, y));
                if ("TRACK_EVENT" === l.vtp_trackType) y = "track_event", n(), v.eventCategory = String(l.vtp_eventCategory), v.eventAction = String(l.vtp_eventAction), v.eventLabel = c(String, l.vtp_eventLabel),
                    v.value = c(Pa, l.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == l.vtp_trackType) {
                    if (y = T.g.Lc, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == l.vtp_advertisingFeaturesType && (v.remarketingLists = !0), l.vtp_autoLinkDomains) {
                        var C = {};
                        C[T.g.V] = l.vtp_autoLinkDomains;
                        C.use_anchor = l.vtp_useHashAutoLink;
                        C[T.g.Lb] = l.vtp_decorateFormsAutoLink;
                        v[T.g.ya] = C
                    }
                } else "TRACK_SOCIAL" === l.vtp_trackType ? (y = "track_social", v.socialNetwork = String(l.vtp_socialNetwork), v.socialAction = String(l.vtp_socialAction), v.socialTarget = String(l.vtp_socialActionTarget)) :
                    "TRACK_TIMING" == l.vtp_trackType && (y = "timing_complete", v.eventCategory = String(l.vtp_timingCategory), v.timingVar = String(l.vtp_timingVar), v.value = Pa(l.vtp_timingValue), v.eventLabel = c(String, l.vtp_timingLabel));
                l.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                l.vtp_enableLinkId && (v.enableLinkId = !0);
                var D = {};
                a(v, D);
                v.name || (D.gtmTrackerName = A);
                D.gaFunctionName = l.vtp_functionName;
                void 0 !== l.vtp_nonInteraction && (D.nonInteraction = l.vtp_nonInteraction);
                var H = Zo(Yo(Xo(Wo(Po(new Oo(l.vtp_gtmEventId, l.vtp_gtmPriorityId),
                    D), l.vtp_gtmOnSuccess), l.vtp_gtmOnFailure)));
                $B(w, y, Date.now(), H);
                var G = Xr(l.vtp_functionName);
                if (Ea(G)) {
                    var N = function(ca) {
                        var ba = [].slice.call(arguments, 0);
                        ba[0] = x + ba[0];
                        G.apply(window, ba)
                    };
                    if ("TRACK_TRANSACTION" == l.vtp_trackType) {} else if ("DECORATE_LINK" == l.vtp_trackType) {} else if ("DECORATE_FORM" == l.vtp_trackType) {} else if ("TRACK_DATA" == l.vtp_trackType) {}
                    e(l, v)
                } else J(l.vtp_gtmOnFailure)
            })
        }();
    Z.m.get_url = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    component: c,
                    queryKey: d
                }
            }(function(b) {
                Z.__get_url = b;
                Z.__get_url.o = "get_url";
                Z.__get_url.isVendorTemplate = !0;
                Z.__get_url.priorityOverride = 0;
                Z.__get_url.isInfrastructure = !1
            })(function(b) {
                var c = "any" === b.vtp_urlParts ? null : [];
                c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
                var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h) {
                        if (g) {
                            if (!k(g)) throw e(f, {}, "URL component must be a string.");
                            if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
                            if ("query" === g && d) {
                                if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                                if (!k(h)) throw e(f, {}, "Query key must be a string.");
                                if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
                            }
                        } else if (c) throw e(f, {},
                            "Prohibited from getting entire URL when components are specified.");
                    },
                    ba: a
                }
            })
        }();
    Z.m.jel = ["google"],
        function() {
            (function(a) {
                Z.__jel = a;
                Z.__jel.o = "jel";
                Z.__jel.isVendorTemplate = !0;
                Z.__jel.priorityOverride = 0;
                Z.__jel.isInfrastructure = !1
            })(function(a) {
                if (!ov("jel")) {
                    var b = X("self"),
                        c = b.onerror;
                    b.onerror = function(d, e, f, g, h) {
                        c && c(d, e, f, g, h);
                        jv({
                            event: "gtm.pageError",
                            "gtm.errorMessage": d,
                            "gtm.errorUrl": e,
                            "gtm.errorLineNumber": f
                        });
                        return !1
                    };
                    pv("jel")
                }
                J(a.vtp_gtmOnSuccess)
            })
        }();
    Z.m.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Z.__inject_script = b;
                Z.__inject_script.o = "inject_script";
                Z.__inject_script.isVendorTemplate = !0;
                Z.__inject_script.priorityOverride = 0;
                Z.__inject_script.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!k(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (Df(li(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " +
                            f);
                    },
                    ba: a
                }
            })
        }();
    Z.m.gas = ["google"],
        function() {
            (function(a) {
                Z.__gas = a;
                Z.__gas.o = "gas";
                Z.__gas.isVendorTemplate = !0;
                Z.__gas.priorityOverride = 0;
                Z.__gas.isInfrastructure = !1
            })(function(a) {
                var b = K(a),
                    c = b;
                c[Zd.Wa] = null;
                c[Zd.Bf] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();
    Z.m.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? iv(g) : b[f]
                }
            }(function(b) {
                Z.__awct = b;
                Z.__awct.o = "awct";
                Z.__awct.isVendorTemplate = !0;
                Z.__awct.priorityOverride = 0;
                Z.__awct.isInfrastructure = !1
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = ZC(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[T.g.qa] = b.vtp_conversionValue || 0, f[T.g.sa] =
                        b.vtp_currencyCode, f[T.g.Va] = b.vtp_orderId, f[T.g.Ka] = b.vtp_conversionCookiePrefix, f[T.g.xa] = c, f[T.g.Nd] = d, f[T.g.na] = iv(T.g.na), f[T.g.fa] = iv("developer_id"), f);
                g[T.g.Fa] = iv(T.g.Fa), g[T.g.da] = iv(T.g.da), g[T.g.Jb] = iv(T.g.Jb), g[T.g.La] = iv(T.g.La);
                b.vtp_rdp && (g[T.g.Mb] = !0);
                if (b.vtp_enableCustomParams)
                    for (var h in e) ch.hasOwnProperty(h) || (g[h] = e[h]);
                if (b.vtp_enableProductReporting) {
                    var l = a(b, g, b.vtp_productReportingDataSource);
                    l(T.g.Sd, "vtp_awMerchantId", "aw_merchant_id");
                    l(T.g.Qd, "vtp_awFeedCountry", "aw_feed_country");
                    l(T.g.Rd, "vtp_awFeedLanguage", "aw_feed_language");
                    l(T.g.Pd, "vtp_discount", "discount");
                    l(T.g.ja, "vtp_items", "items")
                }
                b.vtp_enableShippingData && (g[T.g.Yc] = b.vtp_deliveryPostalCode, g[T.g.ce] = b.vtp_estimatedDeliveryDate, g[T.g.Qc] = b.vtp_deliveryCountry, g[T.g.ae] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[T.g.za] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(T.g.Vc, "vtp_awNewCustomer", "new_customer");
                    n(T.g.Zd, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var r = p;
                if (r) {
                    var u = {};
                    g[T.g.Tc] = (u[b.vtp_conversionLabel] = r, u)
                }
                var t = Zo(Yo(Xo(Wo(Po(new Oo(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure))),
                    v = "AW-" +
                    b.vtp_conversionId + "/" + b.vtp_conversionLabel;
                t.eventMetadata.hit_type_override = "conversion";
                fB(v, T.g.Ha, Date.now(), t)
            })
        }();
    Z.m.remm = ["google"],
        function() {
            (function(a) {
                Z.__remm = a;
                Z.__remm.o = "remm";
                Z.__remm.isVendorTemplate = !0;
                Z.__remm.priorityOverride = 0;
                Z.__remm.isInfrastructure = !1
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var l = new RegExp(h, e);
                    if (l.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(l, n));
                        f = n;
                        break
                    }
                }
                qv(f, "remm", a.vtp_gtmEventId);
                return f
            })
        }();

    Z.m.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__logging = b;
                Z.__logging.o = "logging";
                Z.__logging.isVendorTemplate = !0;
                Z.__logging.priorityOverride = 0;
                Z.__logging.isInfrastructure = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    ba: a
                }
            })
        }();


    Z.m.hid = ["google"],
        function() {
            (function(a) {
                Z.__hid = a;
                Z.__hid.o = "hid";
                Z.__hid.isVendorTemplate = !0;
                Z.__hid.priorityOverride = 0;
                Z.__hid.isInfrastructure = !1
            })(function() {
                return De.te
            })
        }();


    Z.m.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                l = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = I.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, Zb(n, l));
                                d.insertBefore(n, null);
                                p || l()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, l, g)()
                            } else d.insertBefore(h, null), l()
                        } else f()
                    } catch (r) {
                        J(g)
                    }
                }
            }

            function b(d) {
                if (I.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = rv(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.rk,
                        h = f.aa;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, h, e) : a(I.body, kc(g), h, e)()
                } else dv(function() {
                    b(d)
                }, 200)
            }
            Z.__html = b;
            Z.__html.o =
                "html";
            Z.__html.isVendorTemplate = !0;
            Z.__html.priorityOverride = 0;
            Z.__html.isInfrastructure = !1
        }();


    var qE = {};
    qE.macro = function(a) {
        if (De.Df.hasOwnProperty(a)) return De.Df[a]
    }, qE.onHtmlSuccess = De.Xh(!0), qE.onHtmlFailure = De.Xh(!1);
    qE.dataLayer = Fh;
    qE.callback = function(a) {
        vh.hasOwnProperty(a) && Ea(vh[a]) && vh[a]();
        delete vh[a]
    };
    qE.bootstrap = 0;
    qE._spx = !1;

    function rE() {
        eh[L.H] = eh[L.H] || qE;
        L.fb && (eh["ctid_" + L.fb] = qE);
        Rk();
        Tk() || m(Uk(), function(a, b) {
            qr(a, b.transportUrl, b.context);
            S(92)
        });
        Ya(wh, Z.m);
        Ee();
        Ge = Ue
    }
    (function(a) {
        function b() {
            l = I.documentElement.getAttribute("data-tag-assistant-present");
            Au(l) && (h = g.sj)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (I.referrer) {
                var d = li(I.referrer);
                c = "cct.google" === ii(d, "host")
            }
            if (!c) {
                var e = zj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, cc("https://cct.google/taggy/agent.js"))
        }
        if (qh) a();
        else {
            var f = function(t) {
                    var v = "GTM",
                        w = "GTM";
                    kh ? (v = "OGT", w = "GTAG") : qh && (w = v = "OPT");
                    var y = z["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        z["google.tagmanager.debugui2.queue"] = y, cc("https://" + dh.Md + "/debug/bootstrap?id=" + L.H + "&src=" + w + "&cond=" + t + "&gtm=" + Xk()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Xb,
                            containerProduct: v,
                            debug: !1,
                            id: L.H,
                            isGte: jh
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    dh.Li && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    zl: 1,
                    tj: 2,
                    Fj: 3,
                    Ni: 4,
                    sj: 5
                },
                h = void 0,
                l = void 0,
                n = ji(z.location, "query", !1, void 0, "gtm_debug");
            Au(n) && (h = g.tj);
            if (!h && I.referrer) {
                var p = li(I.referrer);
                "tagassistant.google.com" === ii(p, "host") && (h = g.Fj)
            }
            if (!h) {
                var q =
                    zj("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.Ni)
            }
            h || b();
            if (!h && Bu(l)) {
                var r = function() {
                        if (u) return !0;
                        u = !0;
                        b();
                        h && Xb ? f(h) : a()
                    },
                    u = !1;
                gc(I, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else h && Xb ? f(h) : a()
        }
    })(function() {
        var a = !1;
        a && Nq("INIT");
        if (V(70)) {
            var b =
                Hq(gq.I.Fc, L.H);
            Iq(b)
        }
        Qi().B();
        Ul();
        if (L.fb ? eh["ctid_" + L.fb] : eh[L.H]) {
            var c = eh.zones;
            c && c.unregisterChild(Nk());
        } else {
            (V(11) || V(13) || V(55) || V(48)) && mn();
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) ve.push(e[f]);
            for (var g = d.tags || [], h = 0; h < g.length; h++) ye.push(g[h]);
            for (var l = d.predicates || [], n = 0; n < l.length; n++) xe.push(l[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], u = {}, t = 0; t < r.length; t++) u[r[t][0]] = Array.prototype.slice.call(r[t], 1);
                we.push(u)
            }
            Ae = Z;
            Be = $v;
            af = new $e;
            var v = data.sandboxed_scripts,
                w = data.security_groups,
                y = data.infra,
                x = data.runtime || [],
                A = data.runtime_lines;
            RC = new Wd;
            UC();
            ue = SC();
            var B = RC,
                C = OC();
            nb(B.h, "require", C);
            for (var D = 0; D < x.length; D++) {
                var H = x[D];
                if (!Ia(H) || 3 > H.length) {
                    if (0 === H.length) continue;
                    break
                }
                A && A[D] && A[D].length && Ne(H, A[D]);
                RC.execute(H)
            }
            if (void 0 !== v)
                for (var G = ["sandboxedScripts"],
                        N = 0; N < v.length; N++) {
                    var Q = v[N].replace(/^_*/, "");
                    wh[Q] = G
                }
            VC(w);
            if (void 0 !== y)
                for (var aa = 0; aa < y.length; aa++) xh[y[aa]] = !0;
            rE();
            zu();
            Fr = !1;
            Gr = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) Ir();
            else {
                gc(I, "DOMContentLoaded", Ir);
                gc(I, "readystatechange", Ir);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var oa = !0;
                    try {
                        oa = !z.frameElement
                    } catch (Wa) {}
                    oa && Jr()
                }
                gc(z, "load", Ir)
            }
            Ot = !1;
            "complete" === I.readyState ? Qt() : gc(z, "load", Qt);
            fm && z.setInterval(km, 864E5);
            V(46) && (S(111), wb("HEALTH", 1));
            V(47) && (S(112), wb("HEALTH", 2));
            uh =
                Ua();
            qE.bootstrap = uh;
            if (a) {
                var ca = Oq("INIT");
            }
            if (V(70)) {
                var ba = Hq(gq.I.Bg, L.H);
                if (Iq(ba)) {
                    var Fa = Hq(gq.I.Fc, L.H);
                    Jq(ba, Fa)
                }
            }
        }
    });

})()