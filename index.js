/*const upBtn = document.querySelector('.up-button')

const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainslide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainslide.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

const changeSlide = function(direction) {
    if (direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    const height = container.clientHeight
    mainslide.style.transform = `translateY(-${height * activeSlideIndex}px)`

    sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`
}

upBtn.addEventListener('click', () => {
    changeSlide('up')
}) 

downBtn.addEventListener('click', () => {
    changeSlide('down')
}) 


var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    console.log('UP');
    changeSlide('up')
  } else {
    console.log('Down');
    changeSlide('down')
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
   loop: true,



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});