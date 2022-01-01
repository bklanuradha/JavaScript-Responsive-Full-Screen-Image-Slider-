// variables

var slides = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var slideInt;  //store on going Timer
var intTime = 5000;

// Function For the next slide
function nextSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');
    // Unset current slide and radio button
    curr.classList.remove ('curr');
    active.classList.remove('active');
    // set next slide and radio button
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
        active.nextElementSibling.classList.add('active');
    }
    else{
        slides[0].classList.add('curr');
        rbtn[0].classList.add('active');
    }
}

// Automatic slide Navigation
slideInt = setInterval(nextSlide, intTime);