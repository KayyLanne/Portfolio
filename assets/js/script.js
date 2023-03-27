const header = document.querySelector("header");
function activateScroll(){
    header.classList.toggle("sticky", scrollY > 100);
}

window.addEventListener("scroll", activateScroll);