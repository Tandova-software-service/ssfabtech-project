// Products data
const products = [
  {
    id: 1,
    name: "Premium Casement Window",
    description: "Our best-selling casement window combines elegance with energy efficiency. These windows open outward like a door, providing excellent ventilation and unobstructed views.",
    features: ["Energy Star certified", "Multi-point locking system", "Easy-clean hinges", "Custom sizing available"],
    price: "Starting at $399",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=769&q=80",
    category: "casement"
  },
  {
    id: 2,
    name: "Double-Hung Classic",
    description: "Traditional double-hung windows with a modern twist. Both sashes move up and down for flexible ventilation options, and tilt inward for easy cleaning from inside your home.",
    features: ["Dual operating sashes", "Tilt-in feature for easy cleaning", "Low-E glass option", "Child safety locks"],
    price: "Starting at $369",
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa8d6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    category: "double-hung"
  },
  {
    id: 3,
    name: "Sliding Horizon Window",
    description: "Perfect for contemporary homes, our sliding windows move horizontally on tracks, offering wide views and excellent ventilation with minimal effort.",
    features: ["Smooth sliding track system", "Removable sashes", "Space-saving design", "Security bar options"],
    price: "Starting at $349",
    image: "https://images.unsplash.com/photo-1604084767722-ec15d8347239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "sliding"
  },
  {
    id: 4,
    name: "Bay Window Suite",
    description: "Create a stunning focal point and add extra space with our bay windows. The three-panel design projects outward, bringing in more light and expanding your view.",
    features: ["30° or 45° projections", "Built-in seating or storage options", "Combination of fixed and operating windows", "Custom interior finishes"],
    price: "Starting at $1,199",
    image: "https://images.unsplash.com/photo-1534696703811-54cb7cb3f6a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
    category: "specialty"
  },
  {
    id: 5,
    name: "Awning Ventilation Window",
    description: "Hinged at the top and opening outward, awning windows are ideal for ventilation even during light rain. Perfect for basements, bathrooms, or above other windows.",
    features: ["Weather-resistant design", "Easy-to-reach handles", "Can be left open during light rain", "Egress options available"],
    price: "Starting at $329",
    image: "https://images.unsplash.com/photo-1506368670575-2ecb8dd6d86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "casement"
  },
  {
    id: 6,
    name: "Picture Window",
    description: "Maximize your view with our fixed picture windows. These non-opening windows provide unobstructed views, maximum light, and superior energy efficiency.",
    features: ["Maximized glass area", "Superior insulation", "Custom shapes available", "Combine with operating windows"],
    price: "Starting at $299",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "specialty"
  },
  {
    id: 7,
    name: "Garden Window",
    description: "Add a mini greenhouse to your kitchen with our garden windows. The shelf space is perfect for herbs, plants, or decorative items, while bringing in abundant light.",
    features: ["Built-in shelving", "Operating side vents", "Easy-to-clean glass", "Optional glass shelving"],
    price: "Starting at $899",
    image: "https://images.unsplash.com/photo-1490197415175-074fd86b1fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "specialty"
  },
  {
    id: 8,
    name: "Hopper Basement Window",
    description: "Designed specifically for basements, hopper windows are hinged at the bottom and open inward. They provide ventilation while taking up minimal space.",
    features: ["Secure locking mechanism", "Space-saving design", "Egress options available", "Ideal for basements"],
    price: "Starting at $249",
    image: "https://images.unsplash.com/photo-1581144548754-972084e7ad28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "specialty"
  },
  {
    id: 9,
    name: "Architectural Arch Window",
    description: "Add a touch of elegance with our arch-top windows. These decorative fixed windows create a striking focal point and enhance the architectural character of your home.",
    features: ["Custom sizing", "Various arch radius options", "Can be combined with operating windows", "Decorative grid options"],
    price: "Starting at $499",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "specialty"
  },
  {
    id: 10,
    name: "Double-Hung Modern",
    description: "Our modern take on the classic double-hung window, featuring sleek lines and enhanced energy efficiency for contemporary homes.",
    features: ["Contemporary styling", "Enhanced weather stripping", "Optional obscured glass", "Finger-touch operation"],
    price: "Starting at $389",
    image: "https://images.unsplash.com/photo-1590824130275-cea30202be98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    category: "double-hung"
  },
  {
    id: 11,
    name: "Premium Sliding XL",
    description: "Our largest sliding window option, perfect for creating dramatic, panoramic views in larger spaces while maintaining easy operation.",
    features: ["Extra-large sizing available", "Dual sliding panels", "Tandem rollers for smooth operation", "Optional divided lites"],
    price: "Starting at $479",
    image: "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    category: "sliding"
  },
  {
    id: 12,
    name: "Corner Casement Set",
    description: "Create stunning corner views with our specialized corner casement windows. Perfect for maximizing views and creating architectural interest.",
    features: ["90° or custom angle options", "Unobstructed corner views", "Synchronized operation available", "Custom sizing"],
    price: "Starting at $899",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "casement"
  }
];

// Function to create product card
function createProductCard(product) {
  return `
    <div class="product-card ${product.category} fade-in">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-details">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <ul class="product-features">
          ${product.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
        </ul>
        <div class="product-meta">
          <span class="product-price">${product.price}</span>
          <a href="#contact" class="btn btn-secondary">Inquire</a>
        </div>
      </div>
    </div>
  `;
}

// Initialize products
export function initProducts() {
  const productsGrid = document.getElementById('products-grid');
  
  if (productsGrid) {
    // Clear existing content
    productsGrid.innerHTML = '';
    
    // Add product cards with staggered animation delay
    products.forEach((product, index) => {
      const productCard = createProductCard(product);
      productsGrid.innerHTML += productCard;
      
      // Add staggered animation delay
      setTimeout(() => {
        const card = productsGrid.querySelectorAll('.product-card')[index];
        if (card) {
          card.classList.add('fade-in');
          card.style.animationDelay = `${index * 0.1}s`;
        }
      }, 100);
    });
  }
}