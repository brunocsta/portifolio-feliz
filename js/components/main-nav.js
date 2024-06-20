const nav = document.querySelector('header.main-header .navigation');
const iconClose = document.querySelector('.icon-close');
const iconMenu = document.querySelector('.icon-menu');
const mediaQuery = window.matchMedia("(max-width: 980px)");

mediaQuery.addEventListener('change', (Event) => {
    if (Event.matches){
        iconMenu.addEventListener('click', function() {
            nav.style = 'display: flex';
        })

        iconClose.addEventListener('click' ,function() {
            nav.style = 'display: none';
        })
        
    }
})



