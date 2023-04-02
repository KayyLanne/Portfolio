const header = document.querySelector("header");
function activateScroll(){
    header.classList.toggle("ativo", scrollY > 100);
}

window.addEventListener("scroll", activateScroll);

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
