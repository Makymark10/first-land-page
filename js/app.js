const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.mennu-nav');


menuNav.addEventListener('click', toggleNav);


function toggleNav() {
    if (showMenu) {
        nav.classList.add('open')
    }
}

