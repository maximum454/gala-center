document.addEventListener('click', function (e) {
        let parent = document.querySelector('.header-delivery');
        let child = parent.querySelector('.header-delivery__modal');

        const target = e.target;
        if (target.classList != 'header-delivery') {
            document.querySelector('.header-delivery__modal').classList.remove("active");

        } else {
            target.querySelector('.header-delivery__modal').classList.toggle("active");
        }
})