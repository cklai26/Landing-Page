// Define Global Variables
const navUl = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build nav
const makeNav = () => {
    let navList = '';
    sections.forEach(section => {
        navList += `<li><a href="#${section.id}" class="menu__link">${section.dataset.nav}</a></li>`
    });
    navUl.innerHTML = navList;
};
makeNav();

// Nav links & section activation 
// navLink.hash used to iterate (using forEach) through the links by accessing the # property in <a href>
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
    navLinks.forEach(navLink => {
        const sectionView = document.querySelector(navLink.hash);
        const secBox = sectionView.getBoundingClientRect()
    
        if (secBox.top <= 300 && secBox.bottom >= 300){
            navLink.classList.add('your-active-class');
            sectionView.classList.add('your-active-class');
        } else {
            navLink.classList.remove('your-active-class');
            sectionView.classList.remove('your-active-class');   
        }
    });
});

// Click to scroll to sections
navUl.addEventListener('click', (evt) => {
    evt.preventDefault();
    const link = evt.target.getAttribute('href');
    const section = document.querySelector(link);
    section?.scrollIntoView({behavior: "smooth"});
});

//To top button
const toTop = () => {
    document.body.scrollTop = 0;
}
const toTopButton = document.querySelector('.to-top');
toTopButton.addEventListener('click', toTop);

//Hamburger
const menuToggleIcon = document.getElementById('menu-toggle-icon');
menuToggleIcon.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.list-container');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
});