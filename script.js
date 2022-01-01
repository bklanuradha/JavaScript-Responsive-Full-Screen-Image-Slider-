// variables

var slides = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
var slideInt;  //store on going Timer
var intTime = 5000;

// Iterate All Radio Navigation Buttons
rbtn.forEach(function(item, index){
    // click events for Button
    item.addEventListener('click', function(){
        manButtonNav(index);
    })
});

// Click events for Arrows
// right Arrow
rightArrow.addEventListener('click', function(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
});

// Left Arrow
leftArrow.addEventListener('click', function(e){
    e.preventDefault();
    prevSlide();
    clrInterval();
});

// function for Radio Navigation
function manButtonNav(index){
    for(var i = 0; i < slides.length; i++){
        // set slide and radio navigation button
        if(i !== index){
            slides[i].classList.remove('curr');
            rbtn[i].classList.remove('active');
        }
        else{
            slides[index].classList.add('curr');
            rbtn[index].classList.add('active');
        }
    }
    clrInterval();
}

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

// Function For the previous slide
function prevSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');
    // Unset current slide and radio button
    curr.classList.remove ('curr');
    active.classList.remove('active');
    // set next slide and radio button
    if(curr.prevElementSibling){
        curr.prevElementSibling.classList.add('curr');
        active.prevElementSibling.classList.add('active');
    }
    else{
        slides[slides.length - 1].classList.add('curr');
        rbtn[rbtn.length - 1].classList.add('active');
    }
}

// function for clear Interval
function clrInterval(){
    clrInterval(slideInt);
    slideInt = setInterval(nextSlide, intTime);
}

// Automatic slide Navigation
slideInt = setInterval(nextSlide, intTime);