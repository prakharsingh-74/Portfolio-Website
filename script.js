// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

var typed = new Typed((".motion"),{
  strings : ["C++ and DSA","Frontend Developer", "Machine Learning","UI Designer", "Content Creator", "E-sports Athlete"],
  typeSpeed : 100,
  backspeed : 100,
  backdelay : 1000,
  loop :  true
})

// sticky header
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and navbar when click navbar link
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');