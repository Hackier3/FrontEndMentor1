const toggleButton = document.getElementsByClassName('hamburger')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const body = document.getElementsByTagName('body')[0];

function nav() {
    const nav_logos = document.querySelector('.nav-logo-hamburger');
    const nav_styles = getComputedStyle(nav_logos);
    var nav_height = nav_styles.height;
    document.getElementsByClassName("nav-links")[0].style.top = nav_height;
}

toggleButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    body.classList.toggle('active');
    nav();
})