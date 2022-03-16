//Navbar sticky functionality

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Emotions slider

const slides = document.querySelectorAll('.emo_card');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; 
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});



//Friends slider
const sliderContainer = [...document.querySelectorAll('.slider_container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

sliderContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        console.log('I was clicked');
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        console.log('I was clicked');
    })
})

//Smooth Scroll

function scrollToHome(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToBackground(){
    var element = document.getElementById('background');
    var headerOffset = 75;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrollToEmotions(){
    var element = document.getElementById('emotions');
    var headerOffset = 75;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrollToSkills(){
    var element = document.getElementById('skills');
    var headerOffset = 75;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrollToFriends(){
    var element = document.getElementById('friends');
    var headerOffset = 75;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrollToFood(){
    var element = document.getElementById('food');
    var headerOffset = 75;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrollToContact(){
    var element = document.getElementById('contact');
    var headerOffset = 75;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
