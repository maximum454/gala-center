var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 5,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical'
  });
  
  var galleryMain = new Swiper(".gallery-main", {
    slidesPerView: 1,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
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