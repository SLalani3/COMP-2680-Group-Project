// ====== Shopping Cart Variables ======
var cart = [];
var wishlist = [];
var total = 0;
var discountPercent = 20; // 20% discount

// Load cart and wishlist from localStorage
function loadFromStorage() {
    var savedCart = localStorage.getItem('fitnessDawgCart');
    var savedWishlist = localStorage.getItem('fitnessDawgWishlist');
    
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
        displayCart();
    }
    
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
        displayWishlist();
    }
}

// Save to localStorage
function saveToStorage() {
    localStorage.setItem('fitnessDawgCart', JSON.stringify(cart));
    localStorage.setItem('fitnessDawgWishlist', JSON.stringify(wishlist));
}

// Helper function to correct image path based on current page location
function getImagePath(imagePath) {
    // Skip correction for absolute URLs or already corrected paths
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('../')) {
        return imagePath;
    }
    
    // If we're in the pages/ folder, prepend '../' to relative image paths
    var isInPagesFolder = window.location.pathname.indexOf('pages/') !== -1;
    if (isInPagesFolder && imagePath.startsWith('images/')) {
        return '../' + imagePath;
    }
    
    return imagePath;
}

// Add Item to Cart Function
function addToCart(item, price, image) {
    var existingItem = cart.find(function(product) {
        return product.item === item;
    });
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ 
            item: item, 
            price: price, 
            image: image,
            quantity: 1 
        });
    }
    
    saveToStorage();
    updateCartCount();
    displayCart();
    showMessage(item + " added to cart!");
}

// Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveToStorage();
    updateCartCount();
    displayCart();
}

// Update Quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    saveToStorage();
    displayCart();
}

// Update Cart Count Badge
function updateCartCount() {
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
    }
    var cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = count;
    }
}

// Display Cart Function (only for checkout page)
function displayCart() {
    var cartItems = document.getElementById('cart-items');
    var cartEmpty = document.getElementById('cart-empty');
    var cartSummary = document.getElementById('cart-summary');
    
    // Only display if on checkout page or cart section exists
    if (!cartItems && !cartSummary) {
        // Just update count if on home page
        updateCartCount();
        return;
    }
    
    if (cartItems) {
        cartItems.innerHTML = "";
    }
    
    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = "block";
        if (cartSummary) cartSummary.style.display = "none";
        updateCartCount();
        return;
    }
    
    if (cartEmpty) cartEmpty.style.display = "none";
    if (cartSummary) cartSummary.style.display = "block";
    
    var subtotal = 0;
    
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        if (cartItems) {
            var imagePath = getImagePath(item.image);
            var cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = 
                '<img src="' + imagePath + '" alt="' + item.item + '" onclick="showProductImage(\'' + imagePath + '\')">' +
                '<div class="cart-item-info">' +
                    '<h4>' + item.item + '</h4>' +
                    '<p>$' + item.price.toFixed(2) + ' each</p>' +
                    '<p>Total: $' + itemTotal.toFixed(2) + '</p>' +
                '</div>' +
                '<div class="cart-item-controls">' +
                    '<button class="quantity-btn" onclick="updateQuantity(' + i + ', -1)">-</button>' +
                    '<span class="quantity-display">' + item.quantity + '</span>' +
                    '<button class="quantity-btn" onclick="updateQuantity(' + i + ', 1)">+</button>' +
                    '<button class="remove-btn" onclick="removeFromCart(' + i + ')">Remove</button>' +
                '</div>';
            
            cartItems.appendChild(cartItem);
        }
    }
    
    var discount = subtotal * (discountPercent / 100);
    total = subtotal - discount;
    
    // Update cart section totals
    var cartSubtotalEl = document.getElementById('cart-subtotal');
    var cartTotalEl = document.getElementById('cart-total');
    if (cartSubtotalEl) {
        cartSubtotalEl.textContent = '$' + subtotal.toFixed(2);
    }
    if (cartTotalEl) {
        cartTotalEl.textContent = '$' + total.toFixed(2);
    }
    
    var subtotalEl = document.getElementById('subtotal');
    var discountEl = document.getElementById('discount-amount');
    var totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
    if (discountEl) discountEl.textContent = discount.toFixed(2);
    if (totalEl) totalEl.textContent = total.toFixed(2);
    
    updateCartCount();
}

// Wishlist Functions
function addToWishlist(item, price, image) {
    var existingItem = wishlist.find(function(product) {
        return product.item === item;
    });
    
    if (!existingItem) {
        wishlist.push({ item: item, price: price, image: image });
        saveToStorage();
        displayWishlist();
        showMessage(item + " added to wishlist!");
    } else {
        showMessage(item + " is already in your wishlist!");
    }
}

function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    saveToStorage();
    displayWishlist();
}

function displayWishlist() {
    var wishlistItems = document.getElementById('wishlist-items');
    var wishlistEmpty = document.getElementById('wishlist-empty-state');
    
    if (!wishlistItems || !wishlistEmpty) return;
    
    wishlistItems.innerHTML = "";
    
    if (wishlist.length === 0) {
        wishlistEmpty.style.display = "block";
        wishlistItems.style.display = "none";
        return;
    }
    
    wishlistEmpty.style.display = "none";
    wishlistItems.style.display = "grid";
    
    for (var i = 0; i < wishlist.length; i++) {
        var item = wishlist[i];
        var wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        var imagePath = getImagePath(item.image);
        wishlistItem.innerHTML = 
            '<div class="wishlist-item-image-wrapper">' +
                '<button class="wishlist-remove" onclick="removeFromWishlist(' + i + ')" title="Remove from wishlist">×</button>' +
                '<img src="' + imagePath + '" alt="' + item.item + '" onclick="showProductImage(\'' + imagePath + '\')">' +
            '</div>' +
            '<div class="wishlist-item-details">' +
                '<h3>' + item.item + '</h3>' +
                '<p class="wishlist-price">$' + item.price.toFixed(2) + '</p>' +
                '<button class="wishlist-add-cart-btn" onclick="addToCart(\'' + item.item + '\', ' + item.price + ', \'' + item.image + '\')">Add to Cart</button>' +
            '</div>';
        
        wishlistItems.appendChild(wishlistItem);
    }
}

// Product Image Popup
function showProductImage(imageSrc) {
    var popup = document.getElementById('image-popup');
    var popupImage = document.getElementById('popup-image');
    if (popup && popupImage) {
        popupImage.src = imageSrc;
        popup.style.display = 'flex';
    }
}

function closeImagePopup() {
    var popup = document.getElementById('image-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Show Category Products
function showCategoryProducts(category) {
    var categoryCards = document.getElementById('category-cards');
    var productGrid = document.getElementById('product-grid');
    var products = document.querySelectorAll('.product[data-category]');
    
    // Hide category cards
    if (categoryCards) {
        categoryCards.style.display = 'none';
    }
    
    // Show product grid
    if (productGrid) {
        productGrid.style.display = 'grid';
    }
    
    // Filter and show products for selected category
    products.forEach(function(product) {
        var productCategory = product.getAttribute('data-category');
        if (productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Scroll to products
    var productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show Category Cards
function showCategoryCards() {
    var categoryCards = document.getElementById('category-cards');
    var productGrid = document.getElementById('product-grid');
    
    // Show category cards
    if (categoryCards) {
        categoryCards.style.display = 'grid';
    }
    
    // Hide product grid
    if (productGrid) {
        productGrid.style.display = 'none';
    }
    
    // Scroll to products section
    var productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show Women Category Products
function showWomenCategoryProducts(category) {
    var categoryCards = document.getElementById('women-category-cards');
    var productGrid = document.getElementById('women-product-grid');
    var products = document.querySelectorAll('#women-product-grid .product[data-category]');
    
    // Hide category cards
    if (categoryCards) {
        categoryCards.style.display = 'none';
    }
    
    // Show product grid
    if (productGrid) {
        productGrid.style.display = 'grid';
    }
    
    // Filter and show products for selected category
    products.forEach(function(product) {
        var productCategory = product.getAttribute('data-category');
        if (productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Scroll to women section
    var womenSection = document.getElementById('women');
    if (womenSection) {
        womenSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show Women Category Cards
function showWomenCategoryCards() {
    var categoryCards = document.getElementById('women-category-cards');
    var productGrid = document.getElementById('women-product-grid');
    
    // Show category cards
    if (categoryCards) {
        categoryCards.style.display = 'grid';
    }
    
    // Hide product grid
    if (productGrid) {
        productGrid.style.display = 'none';
    }
    
    // Scroll to women section
    var womenSection = document.getElementById('women');
    if (womenSection) {
        womenSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show Gender Section (Men or Women)
function showGender(gender) {
    // Check if we're on index.html
    var isIndexPage = window.location.pathname.endsWith('index.html') || 
                      window.location.pathname.endsWith('/') || 
                      window.location.pathname.indexOf('index.html') !== -1;
    
    if (isIndexPage) {
        // On index page, scroll to the appropriate section
        if (gender === 'men') {
            var menSection = document.getElementById('products');
            if (menSection) {
                menSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (gender === 'women') {
            var womenSection = document.getElementById('women');
            if (womenSection) {
                womenSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } else {
        // On other pages, redirect to index.html with the appropriate section
        var indexPath = window.location.pathname.indexOf('pages/') !== -1 ? '../index.html' : 'index.html';
        if (gender === 'men') {
            window.location.href = indexPath + '#products';
        } else if (gender === 'women') {
            window.location.href = indexPath + '#women';
        }
    }
}

// Search Products
function searchProducts() {
    var searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    var searchTerm = searchInput.value.toLowerCase().trim();
    
    // Check for category keywords first
    var indexPath = window.location.pathname.indexOf('pages/') !== -1 ? '../index.html' : 'index.html';
    if (searchTerm === 'hoodie' || searchTerm === 'hoodies') {
        // If not on index page, redirect to index with hoodie category
        if (window.location.pathname !== '/index.html' && !window.location.pathname.endsWith('/') && window.location.pathname.indexOf('index.html') === -1) {
            window.location.href = indexPath + '#products';
            setTimeout(function() {
                if (typeof showCategoryProducts === 'function') {
                    showCategoryProducts('hoodie');
                }
            }, 500);
            return;
        }
        // On index page, show hoodie category
        if (typeof showCategoryProducts === 'function') {
            showCategoryProducts('hoodie');
        }
        return;
    } else if (searchTerm === 'track' || searchTerm === 'tracks' || searchTerm === 'trackpants' || searchTerm === 'track pants') {
        // If not on index page, redirect to index with track category
        if (window.location.pathname !== '/index.html' && !window.location.pathname.endsWith('/') && window.location.pathname.indexOf('index.html') === -1) {
            window.location.href = indexPath + '#products';
            setTimeout(function() {
                if (typeof showCategoryProducts === 'function') {
                    showCategoryProducts('track');
                }
            }, 500);
            return;
        }
        // On index page, show track category
        if (typeof showCategoryProducts === 'function') {
            showCategoryProducts('track');
        }
        return;
    }
    
    // If not on index page, redirect to index for product search
    if (window.location.pathname !== '/index.html' && !window.location.pathname.endsWith('/') && window.location.pathname.indexOf('index.html') === -1) {
        window.location.href = indexPath + '#products';
        setTimeout(function() {
            var input = document.getElementById('search-input');
            if (input) {
                input.value = searchTerm;
                performSearch();
            }
        }, 500);
        return;
    }
    
    performSearch();
}

function performSearch() {
    var searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    var searchTerm = searchInput.value.toLowerCase().trim();
    var products = document.querySelectorAll('.product[data-category]');
    var categoryCards = document.getElementById('category-cards');
    var productGrid = document.getElementById('product-grid');
    
    if (products.length === 0) return;
    
    if (searchTerm) {
        // Hide category cards and show product grid when searching
        if (categoryCards) {
            categoryCards.style.display = 'none';
        }
        if (productGrid) {
            productGrid.style.display = 'grid';
        }
        
        // Filter products by search term
        products.forEach(function(product) {
            var productName = product.getAttribute('data-name');
            var productCategory = product.getAttribute('data-category');
            if (productName && (productName.toLowerCase().includes(searchTerm) || productCategory.toLowerCase().includes(searchTerm))) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
        
        // Scroll to products section
        var productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Show category cards when search is cleared
        if (categoryCards) {
            categoryCards.style.display = 'grid';
        }
        if (productGrid) {
            productGrid.style.display = 'none';
        }
    }
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchProducts();
            }
        });
    }
});

function showMessage(message) {
    var notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = "position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 15px 20px; border-radius: 5px; z-index: 1000;";
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.remove();
    }, 3000);
}

// Contact Form Validation
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject");
    var message = document.getElementById("message").value;
    var msgElement = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        msgElement.textContent = "Please fill out all required fields!";
        msgElement.style.color = "#d32f2f";
        msgElement.style.backgroundColor = "#ffebee";
        return false;
    }

    if (subject && subject.value === "") {
        msgElement.textContent = "Please fill out all required fields!";
        msgElement.style.color = "#d32f2f";
        msgElement.style.backgroundColor = "#ffebee";
        return false;
    }

    if (email.indexOf("@") === -1) {
        msgElement.textContent = "Please enter a valid email address!";
        msgElement.style.color = "#d32f2f";
        msgElement.style.backgroundColor = "#ffebee";
        return false;
    }

    msgElement.textContent = "Message sent successfully! We'll get back to you soon.";
    msgElement.style.color = "#2e7d32";
    msgElement.style.backgroundColor = "#e8f5e9";
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    if (subject) subject.value = "";
    document.getElementById("message").value = "";
    
    return false; 
}

// Smooth scroll and image error handling
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Image Error Handling
    var images = document.querySelectorAll('.product img');
    for (var j = 0; j < images.length; j++) {
        images[j].addEventListener('error', function() {
            this.style.background = '#f0f0f0';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<span style="color: #999;">Image not available</span>';
        });
    }
});

// Registration Form Logic
function registerUser() {
    let msg = document.getElementById("reg-message");

    let first = document.getElementById("firstName").value.trim();
    let last = document.getElementById("lastName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    if (!first || !last || !email || !pass || !confirm) {
        msg.textContent = "Please fill all required fields.";
        msg.style.color = "red";
        return false;
    }

    if (pass.length < 6) {
        msg.textContent = "Password must be at least 6 characters.";
        msg.style.color = "red";
        return false;
    }

    if (pass !== confirm) {
        msg.textContent = "Passwords do not match.";
        msg.style.color = "red";
        return false;
    }

    if (!terms) {
        msg.textContent = "You must accept the terms.";
        msg.style.color = "red";
        return false;
    }

    msg.textContent = "Account created successfully!";
    msg.style.color = "green";

    document.getElementById("registrationForm").reset();
    return false;
}

// ====== Discount Popup Functionality ======
// Flag to track if popup has been shown on this page load
var discountPopupShown = false;

// Function to close the popup
function closePopup() {
    var popup = document.getElementById('discount-popup');
    if (popup) {
        popup.style.display = 'none';
        discountPopupShown = true;
    }
}

// Showing the popup 2 seconds after page loads (only once per page load)
window.addEventListener('load', function() {
    // Reset flag on page load
    discountPopupShown = false;
    
    // Only show if it hasn't been shown yet on this page load
    if (!discountPopupShown) {
        setTimeout(function() {
            var popup = document.getElementById('discount-popup');
            if (popup && !discountPopupShown) {
                popup.style.display = 'flex';
                
                setTimeout(function() {
                    popup.style.opacity = '1';
                }, 10);
                
                // Mark as shown
                discountPopupShown = true;
            }
        }, 2000); // 2000 milliseconds = 2 seconds
    }
});

// Dynamic Footer Date
document.addEventListener("DOMContentLoaded", function () {
    // Load cart and wishlist
    loadFromStorage();
    
    // Update footer dates with enhanced Date/Time functionality
    var footerYear = document.getElementById("footer-year");
    var footerDate = document.getElementById("footer-date");
    
    if (footerYear) {
        var currentDate = new Date();
        footerYear.textContent = currentDate.getFullYear();
    }
    
    if (footerDate) {
        var now = new Date();
        var dateStr = now.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        footerDate.textContent = dateStr;
    }
    
    // Display current time
    function updateTime() {
        var timeElements = document.querySelectorAll('.current-time');
        timeElements.forEach(function(el) {
            var now = new Date();
            var timeStr = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            el.textContent = timeStr;
        });
    }
    updateTime();
    setInterval(updateTime, 1000);
    
    // Close image popup on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImagePopup();
        }
    });
});