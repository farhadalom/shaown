let menuBtn = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active'); 
    scrollIndicator(); 
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function scrollIndicator(){

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';

}

var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 3,
       },
       1000: {
         slidesPerView: 2,
       },
    },
 });