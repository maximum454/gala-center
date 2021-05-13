const swiperBlock = new Swiper('.swiper-container-block', {
    slidesPerView: 3,
    slidesPerGroup: 6,
    spaceBetween: 28,
    mousewheel: false,
    initialSlide:0,
    speed: 300,
    navigation: {
        nextEl: '.block-next',
        prevEl: '.block-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        450: {
            slidesPerView: 2.5,
        },
        640: {
            slidesPerView: 3,
        },
        1023: {
            slidesPerView: 3,
        },

    }
})