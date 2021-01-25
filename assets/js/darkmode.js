var togbtn = document.querySelector('.toggle-btn');
var oricheck = document.querySelector('.oricheck');


var html = document.querySelector('html');

if (localStorage.getItem('mode') == null)
    localStorage.setItem('mode', 'lightroot');

setInterval(function() {
    var ls = localStorage.getItem('mode');
    if (html.classList[0] != ls)
        if (ls === 'lightroot')
            html.classList.replace('darkroot', 'lightroot');
        else
            html.classList.replace('lightroot', 'darkroot');


}, 100);


togbtn.addEventListener('click', function() {
    var ls = localStorage.getItem('mode');
    if (ls === 'lightroot') {
        html.classList.toggle('lightroot');
        html.classList.toggle('darkroot');
        localStorage.setItem('mode', 'darkroot');
    } else {
        html.classList.toggle('darkroot');
        html.classList.toggle('lightroot');
        localStorage.setItem('mode', 'lightroot');

    }
});



setInterval(function() {
    var ls = localStorage.getItem('mode');
    if (ls != null) {
        if (ls === 'lightroot')
            oricheck.checked = false;
        else
            oricheck.checked = true;
    }
}, 100);