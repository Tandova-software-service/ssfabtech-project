// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Jennifer & Mark Wilson",
    location: "Crystal City, CA",
    content: "The CrystalView team transformed our 1970s home with beautiful, energy-efficient windows. We've noticed a significant drop in our energy bills, and the installation team was professional and clean. Couldn't be happier with the results!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Robert Johnson",
    location: "Lakeside, CA",
    content: "After getting quotes from several companies, we chose CrystalView for their competitive pricing and excellent reputation. They didn't disappoint! The windows look fantastic, and their customer service was top-notch from start to finish.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah & David Chen",
    location: "Hillcrest, CA",
    content: "We had CrystalView install new windows throughout our home last spring. The difference in both appearance and function is remarkable. We especially love our new bay window in the living room - it's completely transformed the space.",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "Harbor View, CA",
    content: "As a contractor, I've worked with many window companies over the years. CrystalView stands out for their quality products and reliable service. They're now my go-to recommendation for clients looking for window replacements.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    location: "Sunset District, CA",
    content: "The casement windows we had installed in our kitchen and dining area have made such a difference! They're easy to operate and clean, and the increased ventilation is wonderful. The installation team was efficient and respectful of our home.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 4
  }
];

// Function to create testimonial slide
function createTestimonialSlide(testimonial) {
  // Create rating stars
  let ratingStars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= testimonial.rating) {
      ratingStars += '<i class="fas fa-star"></i>';
    } else {
      ratingStars += '<i class="far fa-star"></i>';
    }
  }
  
  return `
    <div class="testimonial-slide" data-id="${testimonial.id}">
      <div class="testimonial-content">
        <p>${testimonial.content}</p>
        <div class="testimonial-rating">
          ${ratingStars}
        </div>
      </div>
      <div class="testimonial-author">
        <div class="author-image">
          <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
        </div>
        <h4 class="author-name">${testimonial.name}</h4>
        <p class="author-location">${testimonial.location}</p>
      </div>
    </div>
  `;
}

// Initialize testimonials
export function initTestimonials() {
  const testimonialSlider = document.getElementById('testimonial-slider');
  const testimonialDots = document.getElementById('testimonial-dots');
  const prevButton = document.getElementById('testimonial-prev');
  const nextButton = document.getElementById('testimonial-next');
  
  if (testimonialSlider && testimonialDots) {
    // Clear existing content
    testimonialSlider.innerHTML = '';
    testimonialDots.innerHTML = '';
    
    // Add testimonial slides
    testimonials.forEach((testimonial, index) => {
      const testimonialSlideHtml = createTestimonialSlide(testimonial);
      testimonialSlider.innerHTML += testimonialSlideHtml;
      
      // Add dot for this testimonial
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.setAttribute('data-index', index);
      testimonialDots.appendChild(dot);
      
      // Add click event to dot
      dot.addEventListener('click', () => {
        showTestimonial(index);
      });
    });
    
    // Set up navigation buttons
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => {
        const currentIndex = getCurrentTestimonialIndex();
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(newIndex);
      });
      
      nextButton.addEventListener('click', () => {
        const currentIndex = getCurrentTestimonialIndex();
        const newIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(newIndex);
      });
    }
    
    // Show first testimonial
    showTestimonial(0);
    
    // Set up auto-rotation
    let testimonialInterval = setInterval(() => {
      const currentIndex = getCurrentTestimonialIndex();
      const newIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(newIndex);
    }, 6000);
    
    // Pause rotation on hover
    testimonialSlider.addEventListener('mouseenter', () => {
      clearInterval(testimonialInterval);
    });
    
    // Resume rotation on mouse leave
    testimonialSlider.addEventListener('mouseleave', () => {
      testimonialInterval = setInterval(() => {
        const currentIndex = getCurrentTestimonialIndex();
        const newIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(newIndex);
      }, 6000);
    });
  }
}

// Show testimonial by index
function showTestimonial(index) {
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  
  // Hide all slides
  testimonialSlides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove active class from all dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show selected slide
  testimonialSlides[index].classList.add('active');
  
  // Add active class to selected dot
  dots[index].classList.add('active');
}

// Get current testimonial index
function getCurrentTestimonialIndex() {
  const activeSlide = document.querySelector('.testimonial-slide.active');
  if (!activeSlide) return 0;
  
  const slides = document.querySelectorAll('.testimonial-slide');
  return Array.from(slides).indexOf(activeSlide);
}