const galleryThumbs = new Swiper(".gallery-thumbs", {
    direction: 'vertical',
    slidesPerView: 5,
    spaceBetween: 20,
    freeMode: true,
    initialSlide:0,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  const galleryMain = new Swiper(".gallery-main", {
    slidesPerView: 1,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    freeMode: true,
    initialSlide:0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    observer: true,
    thumbs: {
      swiper: galleryThumbs
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 1,
        }

    }
  });
  galleryThumbs.on('slideChange', function (){
    galleryThumbs.update();
})

galleryMain.on('slideChange', function (){
    galleryMain .update();
})
