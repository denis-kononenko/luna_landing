'use strict';

const slides = document.querySelector('.features__slides');
const previousButton = document.querySelector('.features__previous-button');
const nextButton = document.querySelector('.features__next-button');
const activeSlideBlock = document.querySelector('.features__active-slide');
const form = document.querySelector('.get-in-touch__form');
const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.header__menu-opener');
const menuCross = document.querySelector('.menu__cross');
const menuLinks = menu.querySelectorAll('a');
let activeSlide = 0;

const moveSlides = () => {
  slides.style.transform = `translateX(-${33.33 * activeSlide}%)`;
  activeSlideBlock.innerText = `0${activeSlide + 1}`;
};

const closeMenu = () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page__body--menu-opened');
};

previousButton.addEventListener('click', () => {
  if (activeSlide > 0) {
    activeSlide--;

    if (activeSlide === 0) {
      previousButton.classList.add('features__previous-button--not-active');
    }

    moveSlides();

    nextButton.classList.remove('features__next-button--not-active');
  }
});

nextButton.addEventListener('click', () => {
  if (activeSlide < 2) {
    activeSlide++;

    if (activeSlide === 2) {
      nextButton.classList.add('features__next-button--not-active');
    }

    moveSlides();

    previousButton.classList.remove('features__previous-button--not-active');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page__body--menu-opened');
});

menuCross.addEventListener('click', closeMenu);

menuLinks.forEach(link => link.addEventListener('click', closeMenu));
