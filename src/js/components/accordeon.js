$(function() {
    $('.accordeon .accordeon__item').on('click', function (){
        $('.accordeon .accordeon__body').not($(this).next()).slideUp(300);
        $('.accordeon__body').next().slideToggle(300);
    });
});


function accordeon(){
    let accordeon = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < accordeon.length; i++) {
        accordeon[i].addEventListener("click", function() {
            /* Переключение между добавлением и удалением класса "active",
            чтобы выделить кнопку, управляющую панелью */
            this.classList.toggle("active");

            /* Переключение между скрытием и отображением активной панели */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

