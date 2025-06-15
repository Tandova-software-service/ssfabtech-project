import { initProducts } from './products.js';
import { initGallery } from './gallery.js';
import { initTestimonials } from './testimonials.js';

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize header scroll effect
  initHeaderScroll();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize smooth scrolling
  initSmoothScroll();
  
  // Initialize back to top button
  initBackToTop();
  
  // Initialize animations on scroll
  initScrollAnimations();
  
  // Initialize form validation and submission
  initContactForm();
  
  // Initialize newsletter form
  initNewsletterForm();
  
  // Initialize product filters
  initProductFilters();
  
  // Initialize product content
  initProducts();
  
  // Initialize gallery
  initGallery();
  
  // Initialize testimonials
  initTestimonials();
});

// Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById('header');
  const scrollThreshold = 100;
  
  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  // Initial check
  handleScroll();
}

// Mobile menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      // Toggle menu icon
      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        
        // Reset menu icon
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
  
  // Active nav link on scroll
  const sections = document.querySelectorAll('section');
  
  function setActiveLink() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Initial check
}

// Smooth scrolling
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Back to top button
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  function toggleBackToTopButton() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', toggleBackToTopButton);
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.appear-on-scroll');
  
  function checkInView() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkInView);
  window.addEventListener('resize', checkInView);
  window.addEventListener('load', checkInView);
  
  // Initial check
  checkInView();
}

// Contact form
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !phone || !service) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // In a real application, you would send this data to a server
      console.log('Form submitted:', { name, email, phone, service, message });
      
      // Show success message
      alert('Thank you for your inquiry! We will contact you shortly.');
      
      // Reset form
      contactForm.reset();
    });
  }
}

// Newsletter form
function initNewsletterForm() {
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      // Basic validation
      if (!email) {
        alert('Please enter your email address.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // In a real application, you would send this data to a server
      console.log('Newsletter subscription:', { email });
      
      // Show success message
      alert('Thank you for subscribing to our newsletter!');
      
      // Reset form
      newsletterForm.reset();
    });
  }
}

// Product filters
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productsGrid = document.getElementById('products-grid');
  
  if (filterButtons.length && productsGrid) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter products
        const productCards = productsGrid.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
          if (filterValue === 'all' || card.classList.contains(filterValue)) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
}