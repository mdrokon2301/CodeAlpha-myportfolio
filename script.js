// --------------------------- Toggle icon navbar -------------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

// --------------------------- Toggle icon navbar -------------------------

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
});


// --------------------------- Sticky Navbar -------------------------
let header = document.querySelector('header');
header.classList.toggle('sticky', window.screenY > 100);

// --------------------------- Remove toggle icon and navbar -------------------------
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


// --------------------------- Scrollbar Reveal -------------------------
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

// --------------------------- Typed JS -------------------------
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


//  --------------- Pop up notification for starting download ------------------

function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}


// // ---------------------------------- Thanks popup --------------------------------
// let popup = document.createElementById("popup");

// function openPopup() {
//     popup.classList.add("open-popup");
// }

// function closePopup() {
//     popup.classList.remove("open-popup");
// }



