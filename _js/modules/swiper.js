import Swiper, { Pagination, Navigation, Mousewheel, Parallax, Scrollbar, FreeMode } from "swiper";
Swiper.use([Pagination, Navigation, Mousewheel, Parallax, Scrollbar, FreeMode]);

var swiper_main = document.querySelector(".swiper-main");

if (swiper_main) {
    var swiper = new Swiper(swiper_main, {
        speed: 1500,
        freeMode: true,
        parallax: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        mousewheel: {
            releaseOnEdges: true,
        },
    });
    $('.nav-anchor-slide').each(function (index) {
        $('.nav-anchor-slide-'+index).click(swiper, function (){
            swiper.slideTo(index);
        })
    });

    swiper.on('slideChange', function () {
        $('.nav-anchor-slide').removeClass('nav-active');
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        $('.change-color').css('background-color', 'rgba('+x+','+y+','+z+', .3)');
        $('.nav-anchor-slide-'+swiper.activeIndex).addClass('nav-active');
    });
}
