// response nav

var list = document.querySelector('.nav-list');
var resbtn = document.querySelector('.respons-btn');

resbtn.addEventListener('click', function() {
    list.classList.toggle('nav-list');
    list.classList.toggle('respons-nav');
});

document.querySelector('.header').addEventListener('mousedown', e => {
    e.preventDefault();
})