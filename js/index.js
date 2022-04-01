// Copyright year
const date = new Date();
document.querySelector('#copyright-year').innerHTML = date.getFullYear().toString();

// Topnav
document.querySelector('.icon').onclick = function() {
    var x = document.querySelector('#links');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
};
