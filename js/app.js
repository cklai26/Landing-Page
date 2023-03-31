// Define Global Variables
const navUl = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build nav
const makeNav = () => {
    let navList;
    sections.forEach(section => {
        navList += `<li><a href="#${section.id}" class="menu__link">${section.dataset.nav}</a></li>`
    });
    navUl.innerHTML = navList;
};
makeNav();

// Nav links & section activation 
// navLink.hash used to iterate (using forEach) through the links by accessing the # property in <a href>
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function () {

    navLinks.forEach(navLink => {
        const sectionView = document.querySelector(navLink.hash);
        const secBox = sectionView.getBoundingClientRect()
    
        if (secBox.top <= 320 && secBox.bottom >= 320){
            navLink.classList.add('your-active-class');
            sectionView.classList.add('your-active-class');
        } else {
            navLink.classList.remove('your-active-class');
            sectionView.classList.remove('your-active-class');   
        }
    });
});

//Scroll-margin used in CSS to modify the scroll position after clicking the links.

//To top button
const toTop = () => {
    document.body.scrollTop = 0;
}
const toTopButton = document.querySelector('.to-top');
toTopButton.addEventListener('click', toTop);