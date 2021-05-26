const galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 5,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    mousewheel: false,
    freeMode: true,
    direction: 'vertical',
    initialSlide:0,
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
  
  galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });
  
  galleryThumbs.on('transitionStart', function(){
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });