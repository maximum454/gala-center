@@include('./partials/jquery.min.js')
@@include('./partials/dinamicAdap.js')
@@include('./partials/swiper-bundle.min.js')
@@include('./partials/jquery.formstyler.min.js')
@@include('./partials/remodal.js')
@@include('./partials/priority-nav.js')
@@include('./partials/jquery.fancybox.min.js')

@@include('./components/slider-banners.js')
@@include('./components/slider-brands.js')
@@include('./components/slider-season.js')
@@include('./components/selections-goods.js')
@@include('./components/slider-populary.js')
@@include('./components/slider-tabs.js')
@@include('./components/slider-collection.js')
@@include('./components/slider-price-list.js')
@@include('./components/slider-block.js')
@@include('./components/nav.js')
@@include('./components/delivery-modal.js')
@@include('./components/accordeon.js')
@@include('./components/tabs.js')
@@include('./components/slider-preview-product.js')
@@include('./components/slider-catalog-detail.js')

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
       $('.materials__items').addClass('show');
    })

    $('.js-minus').on('click',function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.js-plus').on('click',function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.js-add-quantity-store').on('click', function(){
        $(this).parents('.products__item').toggleClass('active').siblings().removeClass('active');
        $('.products--list').toggleClass('active');
    });

    $('.js-products-like').on('click', function(){
        $(this).toggleClass('active');
    });

    $('.js-catalog-menu').on('click', function(){
        $('.menu, .header, .overdraw').toggleClass('open');
    })
    $('.js-menu-close').on('click', function(){
        $('.menu, .header, .overdraw').toggleClass('open');
    })
    
    $('.js-other-store').on('click', function(){
        $(this).toggleClass('open');
    })

    $('.slider-preview-product__img').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active')
        let src = $(this).find('img').attr('src');
        $('.slider-preview-product__big').css({'background-image':'url('+src+')'});
    
    })


})
