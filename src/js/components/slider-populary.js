const swiperPopulary = new Swiper('.swiper-container-populary', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})