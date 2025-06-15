// Gallery data
const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611048268330-53de574cae3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Modern Home Renovation",
    description: "Complete window replacement for a contemporary home"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Victorian Restoration",
    description: "Custom arched windows for historical home restoration"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Lakefront Property",
    description: "Panoramic sliding windows with water views"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1628611225249-6c3c7c689552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Mountain Cabin",
    description: "Energy-efficient casement windows for extreme climates"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1613864557811-3cdcb7266a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Urban Loft",
    description: "Industrial-style windows for converted warehouse space"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Suburban Makeover",
    description: "Before & after: Complete window replacement"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1625585598750-3d19f909f112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Coastal Home",
    description: "Hurricane-resistant windows with ocean views"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Commercial Project",
    description: "Office building with custom window installation"
  }
];

// Function to create gallery item
function createGalleryItem(item) {
  return `
    <div class="gallery-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
      </div>
    </div>
  `;
}

// Initialize gallery
export function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  
  if (galleryGrid) {
    // Clear existing content
    galleryGrid.innerHTML = '';
    
    // Add gallery items
    galleryItems.forEach(item => {
      const galleryItemHtml = createGalleryItem(item);
      galleryGrid.innerHTML += galleryItemHtml;
    });
    
    // Add click event to gallery items
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const itemId = item.getAttribute('data-id');
        const galleryItem = galleryItems.find(item => item.id === parseInt(itemId));
        
        if (galleryItem) {
          openLightbox(galleryItem);
        }
      });
    });
  }
}

// Create lightbox HTML
function createLightbox() {
  // Check if lightbox already exists
  if (document.getElementById('gallery-lightbox')) {
    return;
  }
  
  const lightbox = document.createElement('div');
  lightbox.id = 'gallery-lightbox';
  lightbox.className = 'gallery-lightbox';
  
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close"><i class="fas fa-times"></i></button>
      <div class="lightbox-image-container">
        <img src="" alt="" class="lightbox-image">
      </div>
      <div class="lightbox-details">
        <h3 class="lightbox-title"></h3>
        <p class="lightbox-description"></p>
      </div>
      <div class="lightbox-navigation">
        <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
        <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  `;
  
  document.body.appendChild(lightbox);
  
  // Add event listener to close button
  const closeButton = lightbox.querySelector('.lightbox-close');
  closeButton.addEventListener('click', closeLightbox);
  
  // Add event listeners to navigation buttons
  const prevButton = lightbox.querySelector('.lightbox-prev');
  const nextButton = lightbox.querySelector('.lightbox-next');
  
  prevButton.addEventListener('click', () => navigateLightbox('prev'));
  nextButton.addEventListener('click', () => navigateLightbox('next'));
  
  // Close lightbox when clicking outside content
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Add keyboard navigation
  document.addEventListener('keydown', handleLightboxKeyboard);
}

// Current lightbox item ID
let currentLightboxId = null;

// Open lightbox
function openLightbox(item) {
  createLightbox();
  
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  
  // Set current item ID
  currentLightboxId = item.id;
  
  // Update lightbox content
  lightboxImage.src = item.image;
  lightboxImage.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description;
  
  // Show lightbox
  lightbox.style.display = 'flex';
  setTimeout(() => {
    lightbox.style.opacity = '1';
  }, 10);
  
  // Disable scrolling on body
  document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  
  if (lightbox) {
    lightbox.style.opacity = '0';
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 300);
    
    // Enable scrolling on body
    document.body.style.overflow = '';
    
    // Reset current item ID
    currentLightboxId = null;
  }
  
  // Remove keyboard event listener
  document.removeEventListener('keydown', handleLightboxKeyboard);
}

// Navigate lightbox
function navigateLightbox(direction) {
  if (currentLightboxId === null) return;
  
  // Find current index
  const currentIndex = galleryItems.findIndex(item => item.id === currentLightboxId);
  
  // Calculate next index
  let nextIndex;
  if (direction === 'next') {
    nextIndex = (currentIndex + 1) % galleryItems.length;
  } else {
    nextIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  }
  
  // Get next item
  const nextItem = galleryItems[nextIndex];
  
  // Update lightbox
  openLightbox(nextItem);
}

// Handle keyboard navigation
function handleLightboxKeyboard(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowRight') {
    navigateLightbox('next');
  } else if (e.key === 'ArrowLeft') {
    navigateLightbox('prev');
  }
}