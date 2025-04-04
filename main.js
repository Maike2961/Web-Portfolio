let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
})


let sections = document.querySelectorAll('section')
let navlist = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlist.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active')
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

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'})
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'})


const typed = new Typed('.text-typed', {
    strings: ['Desenvolvedor Fullstack'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})