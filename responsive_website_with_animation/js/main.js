/*
* ----------------- Select element function -------------------------- *
*/
// (element) takes a whatever class such as list, .menu-toggle
const selectElement = function (element) {
    return document.querySelector(element);
};

/*
* ------------------ Variable ----------------------------------------- *
*/
// The variable equal to the calling function
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

/*
* ------------------ event Listener ----------------------------------- *
*/
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

/*
* ------------------ Scroll reveal ------------------------------------ *
*/
window.sr = ScrollReveal();

// Select the enement
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '125rem',
    delay: 300,
    opacity: null,
    reset: true
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '125rem',
    delay: 600,
    opacity: null,
    reset: true
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '125rem',
    delay: 600,
    opacity: null,
    reset: true
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '125rem',
    delay: 600,
    opacity: null,
    reset: true 
});



function myCallback (el) {
    el.classList.remove('is-animating');
    el.classList.add('is-visible');
}

ScrollReveal().reveal('.animate-bottom', { afterReveal: myCallback });
