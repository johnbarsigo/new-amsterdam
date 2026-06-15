
// SCROLL SECTIONS ACTIVE LINK

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if ( top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });


    // STICKY NAVBAR
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE MOBILE MENU
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    
};


// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= sectionTop - 100) {
//             current = section.getAttribute('id');
//         }
//     });
// });


// Mobile menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});


// Scroll reveal

ScrollReveal({
    
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading, .portfolio-container-11 img, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.services-container', { origin: 'top' });

ScrollReveal().reveal('.responsive-design', {origin: 'top', mobile: false, desktop: true});

ScrollReveal().reveal('.about-img, #features-text', { origin: 'left' });

ScrollReveal().reveal('.phone-1', { origin: 'left', mobile: false });
ScrollReveal().reveal('.phone-2', { origin: 'bottom', mobile: false });
ScrollReveal().reveal('.phone-3, #nextgen-text, #safiri-text ', { origin: 'right', mobile: false });

ScrollReveal().reveal('#nextgen-text, #safiri-text, .responsive-design', {origin: 'left', mobile: true, desktop: false});

ScrollReveal().reveal('.about-text', {origin: 'top', mobile: true, desktop: false});


// Typed js

const typed = new Typed('.multiple-text', {

    strings: ['Software Engineer', 'Backend Developer', 'Frontend Developer', 'Database Admin'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
})


// // Form validation

// const form = document.getElementById('contact-form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Form validation logic

//     if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
//         alert('Please fill in all fields.');
//     } else {
//         // Submit the form
//         form.submit();
//     }

// });