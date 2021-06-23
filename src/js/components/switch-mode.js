$(document).on('click', '.switch-mode', function (e) {
    let target = $(e.target);
    if (target.hasClass('block')) {
        $('.catalog--list').removeClass('active').addClass('hide')
        $('.catalog--block').addClass('active').removeClass('hide')

    }
    if (target.hasClass('list')) {
        $('.catalog--list').addClass('active').removeClass('hide')
        $('.catalog--block').removeClass('active').addClass('hide')
    }
})