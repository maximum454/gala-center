const swiperPopulary = new Swiper('.swiper-container-populary', {
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
})
