@@include('./partials/jquery.min.js')
@@include('./partials/dinamicAdap.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')
@@include('./components/slider-banners.js')
@@include('./components/slider-brands.js')
@@include('./components/slider-season.js')
@@include('./components/slider-populary.js')
@@include('./components/slider-tabs.js')
@@include('./components/slider-collection.js')
@@include('./components/nav.js')
@@include('./components/delivery-modal.js')

$(function () {
    setTimeout(function() {
        $('select').styler();
    }, 100)


})
