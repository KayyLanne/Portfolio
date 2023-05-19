const header = document.querySelector("header");
function activateScroll(){
    header.classList.toggle("ativo", scrollY > 50);
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


const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})

const openModalButton2 = document.querySelector("#open-modal2");
const closeModalButton2 = document.querySelector("#close-modal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");

const toggleModal2 = () => {
    modal2.classList.toggle("hide");
    fade2.classList.toggle("hide");
}

[openModalButton2, closeModalButton2, fade2].forEach((el) => {
    el.addEventListener("click", () => toggleModal2());
})

const openModalButton3 = document.querySelector("#open-modal3");
const closeModalButton3 = document.querySelector("#close-modal3");
const modal3 = document.querySelector("#modal3");
const fade3 = document.querySelector("#fade3");

const toggleModal3 = () => {
    modal3.classList.toggle("hide");
    fade3.classList.toggle("hide");
}

[openModalButton3, closeModalButton3, fade3].forEach((el) => {
    el.addEventListener("click", () => toggleModal3());
})

const openModalButton4 = document.querySelector("#open-modal4");
const closeModalButton4 = document.querySelector("#close-modal4");
const modal4 = document.querySelector("#modal4");
const fade4 = document.querySelector("#fade4");

const toggleModal4 = () => {
    modal4.classList.toggle("hide");
    fade4.classList.toggle("hide");
}

[openModalButton4, closeModalButton4, fade4].forEach((el) => {
    el.addEventListener("click", () => toggleModal4());
})