
$(function(){
    $('.arrow-down').on('click', function(){
        $(this).siblings('ul').toggleClass('show');
    })
    $('.menu-mobile__close').on('click', function(){
        $('.menu-mobile').removeClass('show');
    })
})
