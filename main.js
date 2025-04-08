const CONFIG = {
    scrollReveal: {
        distance: '80px',
        duration: 2000,
        delay: 200
    },
    typed: {
        strings: ['Desenvolvedor Fullstack'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    }
};

const Navigation = {
    menuIcon: document.querySelector("#menu-icon"),
    navbar: document.querySelector(".navbar"),

    toggleMenu: function () {
        this.menuIcon.classList.toggle('fa-x')
        this.navbar.classList.toggle('active')
    },

    closeMenu: function () {
        this.menuIcon.classList.remove('fa-x')
        this.navbar.classList.remove('active')
    },

    init: function () {
        this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
        return { closeMenu: this.closeMenu.bind(this) };
    }
};


const Scroll = {
    header: document.querySelector('header'),
    sections: document.querySelectorAll('section'),
    navlist: document.querySelectorAll('header nav a'),


    handleScroll: function () {
        this.header.classList.toggle('sticky', window.scollY > 100);

        const scrollPosition = window.scrollY;

        this.sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id')

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                this.navlist.forEach(links => {
                    links.classList.remove('active')
                    const match = document.querySelector('header nav a[href*=' + id + ']');
                    if (match) match.classList.add('active')
                })
            }
        })
    },


    init: function () {
        window.addEventListener('scroll', this.handleScroll.bind(this))
        this.handleScroll();
    }
}


const Animations = {
    initScrollReveal: function () {
        ScrollReveal(150).reveal('.home-content, heading', { origin: 'top' })
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' })
        ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' })
    },

    initTyped: function () {
        new Typed('.text-typed', CONFIG.typed)
    },

    init: function () {
        this.initScrollReveal();
        this.initTyped();
    },
};



document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
    Scroll.init();
    Animations.init();
})











/* let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
})


let sections = document.querySelectorAll('section')
let navlist = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navlist.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}


let header = document.querySelector('header')
header.classList.toggle('sticky', window.scollY > 100);

menuIcon.classList.remove('fa-x')
navbar.classList.remove('active')

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' })


const typed = new Typed('.text-typed', {
    strings: ['Desenvolvedor Fullstack'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
}) */