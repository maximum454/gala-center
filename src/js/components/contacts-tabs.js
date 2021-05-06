$(function () {
    $('.contacts__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.contacts').find('.contacts__content').removeClass('active').eq($(this).index()).addClass('active');
    });
})