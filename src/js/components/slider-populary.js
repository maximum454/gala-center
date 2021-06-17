var swiperPopulary = swiperPopulary;
var swiperPopularyInit = false;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1023px)');
    let desktop = window.matchMedia('(min-width: 1024px)');

     // Disable (for tablet)
    if (mobile.matches) {
        swiperPopulary.destroy();
        swiperPopularyInit = false;

    }

    // Disable (for tablet)
    else if (tablet.matches) {
        swiperPopulary.destroy();
        swiperPopularyInit = false;
    }
    // Enable (for mobile)
    else if (desktop.matches) {
        if (!swiperPopularyInit) {
            swiperPopularyInit = true;
            swiperPopulary = new Swiper('.swiper-container-populary', {
                slidesPerView: 3,
                spaceBetween: 45,
                freeMode: true,
                navigation: {
                    nextEl: '.populary-next',
                    prevEl: '.populary-prev',
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 5,
                    }
                }

            });
        }
    }
}

window.addEventListener('load', function () {
    swiperMode();
});

window.addEventListener('resize', function () {
    swiperMode();
});
