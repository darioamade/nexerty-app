// const menuOpen = document.querySelector('.menu-open');
// const menuClose = document.querySelector('.menu-close');
// const nav = document.querySelector('.nav');

// menuOpen.addEventListener('click', menuTog);
// menuClose.addEventListener('click', menuTog);

// function menuTog(e) {
//   nav.classList.toggle('active');
// }

// const header = document.querySelector('header');
// const sectionOne = document.querySelector('.realtors');

// const sectionOneOptions = {
//   rootMargin: '-115px 0px 0px 0px',
// };

// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       header.classList.add('nav-scrolled');
//     } else {
//       header.classList.remove('nav-scrolled');
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

// gsap.from('.services', {
//   duration: 1,
//   y: '-600%',
//   ease: 'in',
//   delay: 1,
//   stagger: 0.5,
// });

///////////////////////////////////////
// Slider
/* const sliderOverview = function () {
  const slides = document.querySelectorAll('.slide-overview');
  const btnLeft = document.querySelector('.slider__btn--left-overview');
  const btnRight = document.querySelector('.slider__btn--right-overview');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
sliderOverview(); */
//IMPORTANT
 
 

// const openMenu = document.querySelector('.nav-menu');
// const closeMenu = document.querySelector('.nav-menu-container-icon');
// const menuBar = document.querySelector('.header-nav-menu');
// // const menuBars = menuBar.closest('header-nav-menu;');
// menuBar.addEventListener('click', function () {
//   openMenu.classList.add('active');
// });
// closeMenu.addEventListener('click', function () {
//   openMenu.classList.remove('active');
// });

// const slideOpen = document.querySelector('.view-all');
// const slideAddClass = document.querySelector('.slider');
// slideOpen.addEventListener('click', function (e) {
//   slideAddClass.classList.toggle('slider-block');
//   e.target.textContent = 'Show less';
// });

// Slider
/* const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left-overview');
  const btnRight = document.querySelector('.slider__btn--right-overview');

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    // activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    // activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    // createDots();

    // activateDot(0);
  };
  init();

  // // Event handlers
     btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
slider();
 */
/* 

function loop() {
  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }

  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
} */

// // Slider
// export const slider = function () {
//   const slides = document.querySelectorAll('.slide');
//   const btnLeft = document.querySelector('.slider__btn--left-overview');
//   const btnRight = document.querySelector('.slider__btn--right-overview');
//   const dotContainer = document.querySelector('.dots');

//   let curSlide = 0;
//   const maxSlide = slides.length;

//   // Functions
//   const createDots = function () {
//     slides.forEach(function (_, i) {
//       dotContainer.insertAdjacentHTML(
//         'beforeend',
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//     });
//   };

//   const activateDot = function (slide) {
//     document
//       .querySelectorAll('.dots__dot')
//       .forEach((dot) => dot.classList.remove('dots__dot--active'));

//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add('dots__dot--active');
//   };

//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };

//   // Next slide
//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const init = function () {
//     goToSlide(0);
//     createDots();

//     activateDot(0);
//   };
//   init();

//   // Event handlers
//   btnRight.addEventListener('click', nextSlide);
//   btnLeft.addEventListener('click', prevSlide);

//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'ArrowLeft') prevSlide();
//     e.key === 'ArrowRight' && nextSlide();
//   });

//   dotContainer.addEventListener('click', function (e) {
//     if (e.target.classList.contains('dots__dot')) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// slider();
