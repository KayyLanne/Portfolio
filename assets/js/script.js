const header = document.querySelector("header");
function activateScroll(){
    header.classList.toggle("ativo", scrollY > 100);
}

window.addEventListener("scroll", activateScroll);