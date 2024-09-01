'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.getElementsByTagName('header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

for (const btnOpenModal of btnsOpenModal) {
  btnOpenModal.addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const navItemQuerySelector = document.querySelector('.nav__item');
const navItemQuerySelectorAll = document.querySelectorAll('.nav__item');

console.log(navItemQuerySelector);
console.log(navItemQuerySelectorAll);

// const navItemHTMLCollection = document.getElementByClassName('nav__item');
const navItemsHTMLCollection = document.getElementsByClassName('nav__item');
const getItemById = document.getElementsByTagName('button');

// console.log(navItemHTMLCollection);
console.log(navItemsHTMLCollection);
console.log(getItemById);

// navItemsHTMLCollection[0].remove();
// navItemQuerySelectorAll[1].remove();

console.log(navItemsHTMLCollection);
console.log(navItemQuerySelectorAll);

console.log(navItemsHTMLCollection[0].querySelector('.nav__link'));
console.log(navItemQuerySelectorAll[2].closest('header'));

console.log(navItemsHTMLCollection[0].parentElement.parentElement);
console.log(navItemsHTMLCollection[0].parentNode.parentNode);
console.log(navItemsHTMLCollection[0].parentNode.parentElement);
console.log(navItemsHTMLCollection[0].parentElement.parentNode);

const newParagraphDiv = document.createElement('div');
const paragraph = document.createElement('p');
const cookieButton = document.createElement('button');
cookieButton.classList.add('btn');
cookieButton.classList.add('cookie--close-modal');

cookieButton.innerHTML = 'Got it!';
paragraph.textContent = 'We use cookies to enhance user, experience';
paragraph.style.color = 'white';
newParagraphDiv.innerHTML = paragraph.outerHTML;
newParagraphDiv.append(cookieButton);
// newParagraphDiv.insertAdjacentHTML('beforeEnd', cookieButton.outerHTML);
newParagraphDiv.classList.add('cookie-message');
newParagraphDiv.style.width = '100vw';
newParagraphDiv.style.border = '0';
newParagraphDiv.style.height = '150px';

// newParagraphDiv.style.margin = '10px';
newParagraphDiv.style.backgroundColor = 'black';
// newParagraphDiv.style.color = 'white';

header[0].append(newParagraphDiv);
newParagraphDiv.style.display = 'none';
console.log(newParagraphDiv);
cookieButton.addEventListener('click', function (e) {
  console.log(this.parentElement);
  this.parentElement.remove();
});

// also check before and after methods for dom manipulation

const moveToSection1Btn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

moveToSection1Btn.addEventListener('click', function (e) {
  console.log('Entered move to section scroll function');
  const positionOfSection1AndOtherDetails = section1.getBoundingClientRect();
  console.log(positionOfSection1AndOtherDetails);
  // console.log(window.pageYOffset);
  console.log(window.scrollY);
  scrollTo({
    left: positionOfSection1AndOtherDetails.x,
    top: positionOfSection1AndOtherDetails.y + scrollY,
    behavior: 'smooth',
  });
});
// const checkRemoveEventListener = function (e) {
//   alert('Wow');
//   h1.removeEventListener('mouseover', checkRemoveEventListener);
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseover', checkRemoveEventListener);

// const navLinks = document.querySelectorAll('.nav__link');
// navLinks.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     const moveTo = this.getAttribute('href').replace('#', '');
//     // console.log(moveTo);
//     const moveToElem = document.getElementById(moveTo);
//     // console.log(moveToElem);
//     const rectCoords = moveToElem.getBoundingClientRect();
//     console.log(rectCoords);

//     scrollTo({
//       top: rectCoords.y + window.pageYOffset,
//       left: rectCoords.x + window.pageXOffset,
//       behavior: 'smooth',
//     });
//   });
// });

const navLinkParent = document.querySelector('nav');

navLinkParent.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  const targetId = e.target.getAttribute('href').replace('#', '');
  console.log(targetId);
  const targetElement = document.getElementById(targetId);
  console.log(targetElement);
  const getCoordsOfTarget = targetElement.getBoundingClientRect();
  console.log(getCoordsOfTarget);
  scrollTo({
    top: getCoordsOfTarget.y + window.pageYOffset,
    left: getCoordsOfTarget.x + window.pageXOffset,
    behavior: 'smooth',
  });
});

const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContents = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  console.log(e.target);
  if (!e.target) return;

  const getTab = e.target.closest('.btn');
  if (!getTab) return;

  tabs.forEach(item => item.classList.remove('operations__tab--active'));
  getTab.classList.add('operations__tab--active');

  // tabContent.forEach(tabContent =>
  //   tabContent.classList.add('operations__content--active')
  // );
  tabContents.forEach(tabContents =>
    tabContents.classList.remove('operations__content--active')
  );
  const selectedTabIndex = getTab.dataset.tab;

  document
    .querySelector(`.operations__content--${selectedTabIndex}`)
    .classList.add('operations__content--active');
});

const navigationBar = document.querySelector('.nav');
const hover = function (e) {
  // e.target.classList.contains('nav__link') && (e.target.style.opacity = this);
  if (!e.target.classList.contains('nav__link')) return;
  const logo = e.target.closest('nav').querySelector('img');
  const siblings = e.target.closest('nav').querySelectorAll('.nav__link');

  console.log(siblings);

  siblings.forEach(item =>
    e.target != item ? (item.style.opacity = this) : ''
  );

  logo.style.opacity = this;
  // console.log(siblings);

  // siblings.forEach(item => (item.style.opacity = this));
};
navigationBar.addEventListener('mouseover', hover.bind(0.5));

navigationBar.addEventListener('mouseout', hover.bind(1));

// document.addEventListener('scroll', function (e) {
//   console.log(e);
//   const getRectOfFirstSection = section1.getBoundingClientRect();
//   if (
//     (2 / 3) * (window.pageYOffset + getRectOfFirstSection.y) <
//     window.scrollY
//   ) {
//     navigationBar.classList.add('sticky');
//   } else {
//     navigationBar.classList.remove('sticky');
//   }
// });

// const optionsForIntersectionOfSectionObserver = {
//   root: null,
//   threshold: 0.3,
// };

// const callbackObserver = function (entries, observer) {
//   console.log(entries);
//   entries.forEach(item =>
//     item.isIntersecting
//       ? navigationBar.classList.add('sticky')
//       : navigationBar.classList.remove('sticky')
//   );
// };
// const interrsectionObserver = new IntersectionObserver(
//   callbackObserver,
//   optionsForIntersectionOfSectionObserver
// );
// interrsectionObserver.observe(section1);

const callbackObserver = function (entries) {
  const [entry] = entries;
  console.log(entry);
  !entry.isIntersecting
    ? navigationBar.classList.add('sticky')
    : navigationBar.classList.remove('sticky');
};
const optionsForIntersectionOfSectionObserver = {
  root: null,
  threshold: 0,
};

const intersectionObserver = new IntersectionObserver(
  callbackObserver,
  optionsForIntersectionOfSectionObserver
);
intersectionObserver.observe(header[0]);

const sections = document.querySelectorAll('section');
console.log(sections);
// sections.forEach(item => item.classList.add('section--hidden'));

const options = { threshold: 0.15, root: null };
const sectionObserverCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(
  sectionObserverCallback,
  options
);
// sections.forEach(item => sectionObserver.observe(item));
sections.forEach(function (item) {
  item.classList.add('section--hidden');
  sectionObserver.observe(item);
});

// const images = document.querySelectorAll('.lazy-img');
const images = document.querySelectorAll('img[data-src]');
console.log(images);
const lazyOptions = { root: null, threshold: 0.1 };
const lazyObserver = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });
};
const imageLazyObserver = new IntersectionObserver(lazyObserver, lazyOptions);
images.forEach(item => imageLazyObserver.observe(item));

const slides = document.querySelectorAll('.slide');
slides.forEach(function (slide, index) {
  slide.style.transform = `translateX(${index * 75}%)`;
});

const prevBtn = document.querySelector('.slider__btn--left');
const nextBtn = document.querySelector('.slider__btn--right');
let currSlide = 0;
const slidesLength = slides.length;

const nextSlideCurrValue = function () {
  return currSlide >= slidesLength - 1 ? (currSlide = 0) : currSlide++;
};

const prevSlideCurrValue = function () {
  return currSlide <= 0 ? (currSlide = slidesLength - 1) : currSlide--;
};

const nextSlide = function (current) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${(index - current) * 100}%)`;
  });
};
nextBtn.addEventListener('click', function (e) {
  nextSlideCurrValue();
  nextSlide(currSlide);
});
const prevSlide = function (current) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${-(index - current) * 100}%)`;
  });
};
prevBtn.addEventListener('click', function (e) {
  prevSlideCurrValue();
  prevSlide(currSlide);
});

const dots = document.querySelector('.dots');
slides.forEach((_, index) => {
  const btn = ` <button class = "dots__dot" data-slide="${index}"></button>`;
  dots.insertAdjacentHTML('beforeEnd', btn);
});

const buttonSliders = document.querySelectorAll('.dots__dot');

buttonSliders.forEach(btn =>
  btn.addEventListener('click', function (e) {
    console.log('click');

    nextSlide(+btn.dataset.slide);
    currSlide = +btn.dataset.slide;

    buttonSliders.forEach(btn => {
      btn.classList.contains('dots__dot--active')
        ? btn.classList.remove('dots__dot--active')
        : '';

      btn.dataset.slide == currSlide && btn.classList.add('dots__dot--active');
    });
  })
);
