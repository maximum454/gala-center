const swiperPopulary = new Swiper('.swiper-container-populary', {
    slidesPerView: 'auto',
    spaceBetween: 45,
    freeMode: true,
    navigation: {
        nextEl: '.populary-next',
        prevEl: '.populary-prev',
    },
})
swiperPopulary.on('slideChange', function (){
    swiper.update();
    console.log('sdd')
})