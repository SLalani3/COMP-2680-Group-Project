// ====== Shopping Cart Variables ======
var cart = [];
var total = 0;

// Add Item to Cart Function
function addToCart(item, price) {
    cart.push({ item: item, price: price });
    total = total + price;
    displayCart();
    showMessage(item + " added to cart!");
}

// Display Cart Function
function displayCart() {
    var cartList = document.getElementById('cart-list');
    cartList.innerHTML = "";
    
    for (var i = 0; i < cart.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = cart[i].item + " - $" + cart[i].price;
        cartList.appendChild(listItem);
    }
    
    document.getElementById('total').textContent = "Total: $" + total;
}

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
    var message = document.getElementById("message").value;
    var msgElement = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        msgElement.textContent = "Please fill out all fields!";
        msgElement.style.color = "red";
        return false;
    }

    if (email.indexOf("@") === -1) {
        msgElement.textContent = "Please enter a valid email address!";
        msgElement.style.color = "red";
        return false;
    }

    msgElement.textContent = "Message sent successfully!";
    msgElement.style.color = "green";
    
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
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
// Function to close the popup
function closePopup() {
    var popup = document.getElementById('discount-popup');
    popup.style.display = 'none';
}

// Showing the popup 2 seconds after page loads
window.addEventListener('load', function() {
    setTimeout(function() {
        var popup = document.getElementById('discount-popup');
        popup.style.display = 'flex';
        
        setTimeout(function() {
            popup.style.opacity = '1';
        }, 10);
    }, 2000); // 2000 milliseconds = 2 seconds
});

// Dynamic Footer Date
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");
    const year = new Date().getFullYear();
    const updated = new Date().toLocaleDateString();
    footer.innerHTML = `&copy; ${year} FitnessDawg. Last Updated: ${updated} | Built By Group 10.`;
});