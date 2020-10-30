// select element function
const selectElement = (element) => {
    return document.querySelector(element);
};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let links = document.querySelectorAll('.nav-list .nav-item');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    })
});

// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1300,
    distance: '25rem',
    delay: 100,
    // scale: .5
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1300,
    distance: '25rem',
    delay: 100,
    // scale: .5
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1100,
    distance: '1rem'
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '5rem'
});