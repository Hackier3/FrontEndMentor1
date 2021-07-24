const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const body = document.getElementsByTagName('body')[0];

function navbar() {
    const navbar_logos = document.querySelector('.navbar-logo-hamburger');
    const navbar_styles = getComputedStyle(navbar_logos);
    var navbar_height = navbar_styles.height;
    document.getElementsByClassName("navbar-links")[0].style.top = navbar_height;
}

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    body.classList.toggle('active');
    navbar();
})