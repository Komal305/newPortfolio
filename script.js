let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Java Developer', 'SpringBoot Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typedHeadings = document.querySelectorAll('.typed-heading');
typedHeadings.forEach(heading => {
    new Typed(heading, {
        strings: [heading.getAttribute('data-text')],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

let toggleIcon = document.querySelector('#toggle-icon');
toggleIcon.onclick = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        toggleIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        toggleIcon.classList.replace('bx-sun', 'bx-moon');
    }
};

const hobbiesList = ['Books Reading', 'Pencil Art', 'Dance', 'Yoga', 'Travelling'];
const booksList = [
    { title: '1. The Secret', author: 'Rhonda byrne', img: 'pics/books/theSecret.jpg' },
    { title: '2. The Power', author: 'Rhonda byrne', img: 'pics/books/ThePower.jpg' },
    { title: '3. The magic', author: 'Rhonda byrne', img: 'pics/books/TheMagic.jpg' },
    { title: '4. Think and Grow Rich', author: 'Napoleon Hill', img: 'pics/books/thinkAndGrowRich.jpg' },
    { title: '5. The Power of Subconcious Mind', author: 'Joseph Murphy', img: 'pics/books/ThePowerOfSubconciousMind.jpg' },
    { title: '6. How to Win Friends', author: ' Dale Carnegie', img: 'pics/HowToWin.jpg' },
    { title: 'Book Title 2', author: 'Author Name 2', img: 'pics/IMG_5502.jpeg' },
   
];

const hobbiesTicker = document.querySelector('.hobbies-ticker');
hobbiesTicker.innerHTML = hobbiesList.map(hobby => `<span>${hobby}</span>`).join('');

const booksTicker = document.querySelector('.books-ticker');
booksTicker.innerHTML = booksList.map(book => `
    <div class="book-box">
        <img src="${book.img}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
    </div>
`).join('');