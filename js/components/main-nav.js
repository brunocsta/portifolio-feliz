const nav = document.querySelector('header.main-header .navigation');
const iconClose = document.querySelector('.icon-close');

iconClose.addEventListener('click' ,function() {
    nav.style = 'display: none';
})