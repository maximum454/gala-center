$(function () {
    $('.slider-tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.slider-tabs').find('.slider-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
})

var swiperTabs = swiperTabs;
var swiperTabsInit = false;


function swiperTabsMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');
    let desktop = window.matchMedia('(min-width: 1024px)');

    if (mobile.matches) {
        if(swiperTabs){
            for(const swiperTab of swiperTabs){
                swiperTab.destroy();
            }
            swiperTabsInit = false;
        }
       

    } else if (desktop.matches) {
        if (!swiperTabsInit) {
            swiperTabsInit = true;
            swiperTabs = new Swiper('.swiper-container-tabs', {
                slidesPerView: 3,
                spaceBetween: 45,
                freeMode: true,
                navigation: {
                    nextEl: '.tabs-next',
                    prevEl: '.tabs-prev',
                },
                observer: true,
                observeParents: true,
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
    swiperTabsMode();
});

window.addEventListener('resize', function () {
    swiperTabsMode();
});
