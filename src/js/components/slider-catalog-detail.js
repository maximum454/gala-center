var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 5,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical'
  });
  
  var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    thumbs: {
      swiper: galleryThumbs
    }
  });
  
  galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });
  
  galleryThumbs.on('transitionStart', function(){
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });