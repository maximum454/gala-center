$('.nav__burger').on('click', function(){
    $('.nav-scroller').toggleClass('active');
    $('body').toggleClass('lock');
})