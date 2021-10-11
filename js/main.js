const navMenu = document.querySelector('.responsive-menu__ul');

addEventListener('DOMContentLoaded', () => {
    const responsiveMenu = document.querySelector('.responsive-menu');

    if (responsiveMenu) {
        responsiveMenu.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            })
        }
    });

