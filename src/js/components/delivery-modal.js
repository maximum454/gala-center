document.addEventListener('click', function (e) {
        const menuDrop = document.getElementById('nav-delivery');
        const popup = document.querySelector('.nav-scroller__delivery-modal');
        const target = e.target;
        if (target.id != 'nav-delivery') {
            popup.classList.remove("active");

        } else {
            popup.classList.toggle("active");
        }
})