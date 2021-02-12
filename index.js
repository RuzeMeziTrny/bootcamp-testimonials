'use strict';

const persons = [
  {
    id: 'tanya',
    firstname: 'Tanya',
    lastname: 'Sinclair',
    role: 'UX Engineer',
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
  },
  {
    id: 'john',
    firstname: 'John',
    lastname: 'Tarkpor',
    role: 'Junior Front-end Developer',
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
  },
];

// incrementing/decrementing index to show different persons
let i = 0;

const incrementIndex = () => {
  i < persons.length - 1 ? i++ : (i = 0);
  updateMainElm();
};

const decrementIndex = () => {
  i > 0 ? i-- : (i = persons.length - 1);
  updateMainElm();
};

// function to update content and add event listeners
const updateMainElm = () => {
  mainElm.innerHTML = mainElmContent();

  const btnLeft = mainElm.querySelector('.visual__arrow--left');
  btnLeft.addEventListener('click', decrementIndex);

  const btnRight = mainElm.querySelector('.visual__arrow--right');
  btnRight.addEventListener('click', incrementIndex);
};

// function to create content
const mainElmContent = () => `
  <section class="visual">
    <img class="visual__bg" src="images/pattern-bg.svg">
    <img class="visual__photo" src="images/image-${persons[i].id}.jpg" alt="${persons[i].firstname}">
    <div class="visual__arrows">
      <button class="visual__arrow--left">
        <img src="images/icon-prev.svg" alt="left arrow">
      </button>
      <button class="visual__arrow--right">
        <img src="images/icon-next.svg" alt="right arrow">
      </button>
    </div>
  </section>

  <section class="text">
    <img class="text__image-before" src="images/pattern-quotes.svg">
    <p class="text__testimonial">${persons[i].testimonial}</p>
    <p class="text__name">${persons[i].firstname} ${persons[i].lastname}</p>
    <p class="text__role">${persons[i].role}</p>
    <img class="text__image-after" src="images/pattern-curve.svg">
  </section>
`;

// creation of main element
const mainElm = document.createElement('main');
mainElm.className = 'main';
updateMainElm();

// creation of attribution element
const attributElm = document.createElement('div');
attributElm.className = 'attribution';
attributElm.innerHTML = `
  <p>
    Challenge by 
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by RuzeMeziTrny.
  </p>
`;

// appending elements to HTML
document.querySelector('#container').appendChild(mainElm);
document.querySelector('#container').appendChild(attributElm);
