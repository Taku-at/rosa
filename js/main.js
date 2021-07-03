/*
* Select element function
*/
// (element) takes a whatever class such as list, .menu-toggle
const selectElement = function (element) {
    return document.querySelector(element);
};

/*
* Variable
*/
// The variable equal to the calling function
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

/*
* The event listener
*/
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});