const swiperSeason = new Swiper('.swiper-container-season', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 28,
    mousewheel: false,
    initialSlide:0,
    speed: 300,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})