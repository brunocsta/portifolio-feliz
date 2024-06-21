const nav = document.querySelector('header.main-header .navigation');
const iconClose = document.querySelector('.icon-close');
const carousel = document.querySelector('.main-carousel');
const iconMenu = document.querySelector('.icon-menu');
const mediaQuery = window.matchMedia("(max-width: 980px)");

mediaQuery.addEventListener('change', (Event) => {
    if (Event.matches){
        iconMenu.addEventListener('click', function() {
            nav.style = 'display: flex';
            nav.style = 'width: 0px';
            carousel.style = 'display: none';
        });

        iconClose.addEventListener('click' ,function() {
            nav.style = 'display: none';
            carousel.style = 'display: flex';

        })
        
    }
    else { 
        nav.style = 'display: flex';
    }
})



