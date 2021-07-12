var swiperPopulary= swiperPopulary;
var swiperPopularyInit = false;


function swiperPopularyMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
    let desktop = window.matchMedia('(min-width: 1024px)');

    if (mobile.matches) {
        if(swiperPopulary){
            swiperPopulary.destroy();
            swiperPopularyInit = false;
        }
        

    }
    
    else if (desktop.matches) {
        if (!swiperPopularyInit) {
            swiperPopularyInit = true;
            let sliderSpaceBetween = document.querySelector('.swiper-container-populary').getAttribute('data-spacebetween');
            swiperPopulary = new Swiper('.swiper-container-populary', {
                slidesPerView: 3,
                spaceBetween: !sliderSpaceBetween ? 45: sliderSpaceBetween,
                freeMode: true,
                navigation: {
                    nextEl: '.populary-next',
                    prevEl: '.populary-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    }
                }

            });
        }
    }
}

window.addEventListener('load', function() {
    if($('.swiper-container-populary').length){
        swiperPopularyMode();
    }
});

window.addEventListener('resize', function() {
    if($('.swiper-container-populary').length){
        swiperPopularyMode();
    }
});
