const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav ul');
const xburger = document.querySelector('.x');
const xaside = document.querySelector('.container-aside');
const infoProfile = document.querySelector('aside')

hamburger.addEventListener('click', function() {
    nav.classList.toggle('slide')
    hamburger.classList.toggle('close')
    xburger.classList.toggle('show')
});

document.querySelectorAll('header nav ul li a').forEach(n => n.addEventListener('click', () => {
    nav.classList.toggle('slide')
    xburger.classList.toggle('show')
    hamburger.classList.toggle('close')
}))

xburger.addEventListener('click', function () {
    nav.classList.toggle('slide')
    hamburger.classList.toggle('close')
    xburger.classList.toggle('show')
});

xaside.addEventListener('click',function () {
    infoProfile.classList.toggle('asideClick')
});