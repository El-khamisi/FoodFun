var html = document.querySelector('html');


setInterval(function() {
    var ls = localStorage.getItem('mode');
    if (html.classList[0] != ls)
        if (ls == 'lightroot')
            html.classList.replace('darkroot', 'lightroot');
        else
            html.classList.replace('lightroot', 'darkroot');


}, 100);