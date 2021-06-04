window.addEventListener("scroll", bringmenu);

function bringmenu() {
    let headerH = document.getElementById('header').clientHeight;

    if (document.body.scrollTop > headerH || document.documentElement.scrollTop > headerH) {
        document.getElementById("header-fix").style.top = "0";
    } else {
        document.getElementById("header-fix").style.top = "-100%";
    }
}