import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Victor Koontz",
    role: "Trainer",
    img: "assets/images/review-people-img-1.jpg"
  },
  {
    quote: "A wonderful experience! I learned so much.",
    name: "Gene Billups",
    role: "Teacher",
    img: "assets/images/review-people-img-2.jpg"
  },
  {
    quote: "Highly recommended! The team is very professional.",
    name: "Salvatore Baum",
    role: "Founder",
    img: "assets/images/review-people-img-3.jpg"
  }
];

const slider = document.getElementById('testimonial-slider');
const dotsContainer = document.getElementById('testimonial-dots');
let currentIndex = 0;

function showTestimonial(index) {
  slider.innerHTML = '';
  const t = testimonials[index];

  const card = document.createElement('div');
  card.className = 'testimonial-card';
  card.innerHTML = `
    <img src="assets/images/svg/quote-left.svg" alt="Quote" class="quote">
    <div class="testimonial-text">${t.quote}</div>
    <div class="author-info">
      <img src="${t.img}" alt="${t.name}">
      <div class="author-details">
        <h3>${t.name}</h3>
        <p>${t.role}</p>
      </div>
    </div>
  `;
  slider.appendChild(card);
  updateDots(index);
}

function updateDots(index) {
  dotsContainer.innerHTML = '';
  testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = i === index ? 'active' : '';
    dot.addEventListener('click', () => {
      currentIndex = i;
      showTestimonial(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });
}

document.getElementById('testimonial-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

document.getElementById('testimonial-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

// Initial load
showTestimonial(currentIndex);
