// select element function
const selectElement = (element) => {
    return document.querySelector(element);
};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
const links = document.querySelectorAll('.nav-list .nav-item');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});

