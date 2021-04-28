const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
    initialSlide:0,
    speed: 300,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
})