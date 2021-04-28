@@include('./partials/jquery.min.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./components/slider-banners.js')
@@include('./components/slider-brands.js')
@@include('./components/slider-season.js')
@@include('./components/slider-populary.js')

$(function () {
    setTimeout(function() {
        $('select').styler();
    }, 100)
})
