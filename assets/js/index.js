// Slideshow


var cnt = 1;
var acdot = 0;


var cards = document.querySelector('.cards');
var card = document.querySelectorAll('.card');
var dot = document.querySelectorAll('.dot');

var flag = true;
var x = 0;
var isactive = false;


var calc = 0;
var lwidth = window.innerWidth;
var cyclelimit = 2;
if (lwidth <= 1000) {
    cyclelimit = 1;
}

dot[acdot].classList.add('active');
setInterval(function() {

    if (flag) {
        if (cnt >= 4) {
            cnt = 1;
            cards.style.transition = '0s';
            cards.style.transform = 'translateX(' + 0 + 'px)';
        }
        calc = -1 * (cards.clientWidth / cyclelimit) * cnt;
        cards.style.transform = 'translateX(' + calc + 'px)';
        cards.style.transition = 'transform 0.5s ease-in-out';
        cnt++;

        dot[acdot].classList.remove('active');
        dot[acdot ^ 1].classList.add('active');
        acdot ^= 1;

    }


}, 1500);


cards.addEventListener('mousedown', function(e) {
    flag = false;
    e.preventDefault();
    if (isactive === false) {
        x = e.pageX;
        isactive = true;
    }
});

cards.addEventListener('mousemove', function(e) {
    flag = false;
    e.preventDefault();
    if (isactive) {
        const space = Math.abs(e.pageX - x);
        if (e.pageX > x)
            cards.style.transform = 'translateX(' + (calc + space) + 'px)';
        else
            cards.style.transform = 'translateX(' + (calc - space) + 'px)';

        cards.style.transition = 'transform 0s ease-in-out';

    }
});
cards.addEventListener('mouseenter', function() {
    flag = false;

});
cards.addEventListener('mouseleave', function() {
    flag = true;


});

cards.addEventListener('mouseup', function(e) {
    isactive = false;
    flag = true;
    for (var i = 0; i < 1e9; i++);

});