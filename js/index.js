$(function () {
    var swiper = new Swiper('.banner .left .swiper-container', {
        autoplay: true,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.banner .right .swiper-container', {
        speed: 0,
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var swiper = new Swiper('.storey .live .swiper-container', {
        autoplay: true,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.storey .show-news .swiper-container', {
        autoplay: true,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.storey .china-show .swiper-container', {
        autoplay: true,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var bannerTop = $(".banner").offset().top;
    function sideScroll() {
        if ($(document).scrollTop() > bannerTop) {
            $(".side-list-wrap").css({
                position: "fixed",
                top: 20
            })
        }
        else {
            $(".side-list-wrap").css({
                position: "absolute",
                top: 0
            })
        }
    };
    function bodyScroll() {
        $(".storey section").each(function (i, ele) {
            if (i === 0 && $(document).scrollTop() < ($(ele).offset().top) - 300) {
                $(".side-list-wrap li").removeClass();
            }
            else if ($(document).scrollTop() >= ($(ele).offset().top) - 300 && i < 24) {
                if (i > 4) {
                    i -= 2;
                }
                else if (i > 2) {
                    i--;
                }
                $(".side-list-wrap li").eq(i).addClass("current").siblings().removeClass();
            }
        })
    }
    sideScroll();
    bodyScroll();
    $(window).scroll(function () {
        // side scroll
        sideScroll();
        // body scroll
        bodyScroll();
    })
    // side click
    $(".side-list-wrap li").click(function () {
        var index = $(this).index();
        if (index > 21) {
            if (index > 22) {
                // back to top
                $("body,html").stop().animate({
                    scrollTop: 0
                }, 1)
            }
            else {
                $(this).toggleClass("current").siblings().removeClass();
                if ($(this).prop("class") !== "current") {
                    bodyScroll();
                }
            }
        }
        else {
            $(this).addClass("current").siblings().removeClass();
            if (index > 3) {
                index += 2;
            }
            else if (index > 2) {
                index++;
            };
            var current = $(".storey section").eq(index).offset().top;
            $("body,html").stop().animate({
                scrollTop: current
            }, 1)
        }
    })
})