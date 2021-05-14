@@include('./partials/jquery.min.js')
@@include('./partials/dinamicAdap.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')
@@include('./partials/priority-nav.js')
@@include('./components/slider-banners.js')
@@include('./components/slider-brands.js')
@@include('./components/slider-season.js')
@@include('./components/slider-populary.js')
@@include('./components/slider-tabs.js')
@@include('./components/slider-collection.js')
@@include('./components/slider-price-list.js')
@@include('./components/slider-block.js')
@@include('./components/nav.js')
@@include('./components/delivery-modal.js')
@@include('./components/accordeon.js')
@@include('./components/tabs.js')

$(function () {
    var nav = priorityNav.init({
        navDropdownLabel: "еще",
        navDropdownClassName: "breadcrumb-catalog__dropdown",
        navDropdownToggleClassName: "breadcrumb-catalog__dropdown-toggle",
    });

    setTimeout(function() {
        $('select').styler();
    }, 100)


    $('.header__search .form-control').on('keyup', function () {
        let parents = $(this).parents('form');
        parents.find('.form-dropdawn').show();
        parents.find('.header__search-close').show();
        if (this.value === '') {
            parents.find('.form-dropdawn').hide();
            parents.find('.header__search-close').hide();
        }
    })
    $('.header__search-close').on('click', function (){
        let parents = $(this).parents('form');
        parents.find('.form-dropdawn').hide();
        parents.find('.header__search-close').hide();
    })

    $('.js-materials-more').on('click', function (){
       $('.materials__more').addClass('show');
    })



})
