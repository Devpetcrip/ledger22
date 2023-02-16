jQuery(document).ready((function() {
    if (winWidth = jQuery(window).width(), winWidth > 768) var e = 30,
        i = !1;
    else e = 10, i = !0;
    new Swiper(".swiper-seo-container", {
        slidesPerView: "auto",
        centeredSlides: !1,
        spaceBetween: e,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".swiper-seo-button-next",
            prevEl: ".swiper-seo-button-prev"
        }
    }), new Swiper(".swiper-product-container", {
        slidesPerView: "auto",
        spaceBetween: "1%",
        centeredSlides: i,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".swiper-live-container", {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
            el: ".swiper-live-pagination",
            clickable: !0
        }
    }), jQuery(jQuery("#medias-block .navigation > *").get(0)).addClass("active"), jQuery(jQuery("#medias-block .content").get(0)).addClass("active"), jQuery("#medias-block .navigation > *").each((function() {
        var e = jQuery(this).data("content");
        jQuery(this).on("click", (function() {
            jQuery("#medias-block .navigation > *").removeClass("active"), jQuery(this).addClass("active"), jQuery("#medias-block > .flexbox .content").removeClass("active"), jQuery("#medias-block > .flexbox").find("#" + e).addClass("active")
        }))
    })), jQuery(window).on("load", (function(e) {
        var i = jQuery("#background-video").data("video-url");
        winWidth < 768 ? jQuery("#background-video > *").attr("src", "") : jQuery("#background-video > *").attr("src", i)
    }))
}));