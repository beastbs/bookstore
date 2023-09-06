import slide1 from "./slider_images/bookdisplaysmall.jpeg";
import slide2 from "./slider_images/bookcoverssmall2.jpeg";
import slide3 from "./slider_images/bookstackssmall3.jpeg";

const sliderImages = [slide1, slide2, slide3];
const totalSlides = sliderImages.length;

let handleDragStart;
let handleDrag;
let handleDragEnd;
let swipeSliderInterval;

let slideIndex = 0;
let isDragging = false;
let startPosX = 0;
let offsetX = 0;

export function initSliders(container) {
  const sliderContainer = container.querySelector(".home__slider");
  const indicatorContainer = container.querySelector("#slider-indicators");

  for (let i = 0; i < sliderImages.length; i++) {
    const slide = createElement("home__slide");
    slide.style.backgroundImage = `url(${sliderImages[i]})`;
    sliderContainer.append(slide);

    createIndicators(i);
  }

  updateSliderPosition();
  updateIndicators();

  function updateSliderPosition() {
    console.log("updated slider");
    const slideWidth = sliderContainer.children[0].offsetWidth;
    sliderContainer.style.transform = `translateX(${
      -slideIndex * slideWidth
    }px)`;

    if(window.location.pathname !== "/home"){
      removeSliderListeners()
    }
  }

  function updateIndicators() {
    const indicators = Array.from(indicatorContainer.children);
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("indicator-active", index === slideIndex);
    });
    
  }

  function createIndicators(index) {
    const indicator = createElement("indicator");
    indicatorContainer.append(indicator);

    indicator.addEventListener("click", () => {
      slideIndex = index;
      updateSliderPosition();
      updateIndicators();
    });
  }

   handleDragStart = (event) => {
    isDragging = true;
    startPosX = event.clientX;
    sliderContainer.style.transition = "none";
  }

   handleDrag = (event) => {
    if (!isDragging) return;
    const currentPosX = event.clientX;
    offsetX = currentPosX - startPosX;
    updateSliderPosition();
    // sliderContainer.style.transform = `translateX(${offsetX}px)`;
  }
   handleDragEnd = () => {
    if (!isDragging) return;

    isDragging = false;
    const slideWidth = sliderContainer.children[0].offsetWidth;
    const threshold = slideWidth * 0.2;

    if (offsetX < -threshold) {
      if (slideIndex >= totalSlides - 1) {
        slideIndex = 0;
      } else {
        slideIndex += 1;
      }

    } else if (offsetX > threshold) {
      if (slideIndex <= 0) {
        slideIndex = totalSlides - 1;
      } else {
        slideIndex -= 1;
      }

    }
    offsetX = 0;
    sliderContainer.style.transition = "";

    updateSliderPosition();
    updateIndicators();
  }

   swipeSliderInterval = setInterval(() => {
     slideIndex++;
     if (slideIndex >= totalSlides) {
       slideIndex = 0;
      } 
 
     updateSliderPosition();
     updateIndicators();
   }, 3000);
 


  sliderContainer.addEventListener("mousedown", handleDragStart);
  sliderContainer.addEventListener("touchstart", handleDragStart);

  window.addEventListener("mousemove", handleDrag);
  window.addEventListener("touchmove", handleDrag);

  window.addEventListener("mouseup", handleDragEnd);
  window.addEventListener("touchend", handleDragEnd);
  window.addEventListener("touchcancel", handleDragEnd);

   function removeSliderListeners() {
    sliderContainer.removeEventListener("mousedown", handleDragStart);
    sliderContainer.removeEventListener("touchstart", handleDragStart);
  
    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("touchmove", handleDrag);
  
    window.removeEventListener("mouseup", handleDragEnd);
    window.removeEventListener("touchend", handleDragEnd);
    window.removeEventListener("touchcancel", handleDragEnd);
  
    clearInterval(swipeSliderInterval);
  }
  
}



function createElement(classes) {
  const div = document.createElement("div");
  div.classList.add(classes);
  return div;
}


