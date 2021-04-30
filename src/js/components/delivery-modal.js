document.addEventListener('click', function (e) {
        let parent = document.getElementsByClassName('header-delivery');
        let child = parent.getElementsByClassName('header-delivery__modal');

        const target = e.target;
        if (target.classList != 'header-delivery') {
            child.classList.remove("active");

        } else {
            child.classList.toggle("active");
        }
})