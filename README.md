# FitnessDawg

## Project Description

FitnessDawg is a modern, responsive e-commerce website for oversized activewear. The website features a sleek athletic design with an image background hero section, comprehensive product catalog for both men's and women's collections, shopping cart functionality, wishlist feature, user authentication, and checkout system. Built with pure HTML5, CSS3, and JavaScript, the site showcases a premium athletic aesthetic using a dark theme with light grey accents, maintaining consistency across all pages.

## Features

### Navigation & Layout
- **Fixed Navigation Bar**: Centered logo with category links (Men, Women) on the left and search bar with icons (Wishlist, Account, Cart) on the right
- **Search Functionality**: Search bar that filters products and navigates to category pages when searching for "hoodie", "track", or "trackpants"
- **Gender-Based Navigation**: Click on "Men" or "Women" to view respective collections
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices with optimized breakpoints

### Product Features
- **Men's Collection**: 
  - Oversized hoodies (Black, Grey)
  - Track pants (Black, Grey)
  - Category cards with "View Collection" functionality
- **Women's Collection**:
  - Training shorts (Black, Grey)
  - Cropped hoodies (Black, Grey)
  - Category cards matching men's collection functionality
- **Product Images**: Click on product images to view them in a popup modal
- **Add to Cart**: Add products to cart with automatic quantity management
- **Wishlist**: Add products to wishlist for later viewing
- **Product Search**: Search products by name or category across both collections

### Shopping Cart
- **Cart Page**: Dedicated cart page with empty state message
- **Quantity Controls**: Increase/decrease quantity buttons for each cart item
- **Remove Items**: Remove individual items from cart
- **Cart Summary**: Display subtotal and total with automatic discount calculation (20% off)
- **Cart Persistence**: Cart items saved to localStorage and persist across page refreshes
- **Cart Badge**: Cart icon displays item count badge on all pages

### Wishlist
- **Wishlist Page**: Dedicated wishlist page with empty state message
- **Add to Wishlist**: Heart icon on products to add/remove from wishlist
- **Wishlist Persistence**: Wishlist items saved to localStorage
- **Professional Display**: Clean card-based grid layout for wishlist items
- **Add to Cart from Wishlist**: Direct "Add to Cart" functionality from wishlist page

### User Authentication
- **Login Page**: User login page with form validation
- **Signup Page**: User registration page with comprehensive account creation form
- **Guest Checkout**: Option to continue as guest on checkout page
- **Form Validation**: Client-side validation for all forms with error messages

### Checkout
- **Checkout Page**: Dedicated checkout page with:
  - Order summary with cart items
  - Quantity controls and remove options
  - Shipping information form
  - Delivery options (Standard, Express, Overnight)
  - Payment method selection
  - Automatic 20% discount application
  - Order total calculation including shipping

### Other Features
- **Discount Popup**: Special 20% discount offer popup that appears once per page load (2 seconds after page loads)
- **Contact Page**: Dedicated contact page with contact form and information
- **About Page**: About section with company information
- **Dynamic Footer**: Automatically updates with current year and last updated date/time
- **Payment Methods**: Footer displays accepted payment methods (Visa, Mastercard, Amex, PayPal, Apple Pay)
- **Social Media Links**: Footer includes working social media links that open in new tabs:
  - Pinterest: https://www.pinterest.com/
  - Instagram: https://www.instagram.com/
  - X (Twitter): https://x.com/
  - Facebook: https://www.facebook.com/
  - YouTube: https://www.youtube.com/
  - Discord: https://discord.com/
- **Image Popups**: Click on product images to view them in full-screen popup
- **Smooth Scrolling**: Smooth scroll behavior for navigation links
- **Sticky Footer**: Footer always stays at the bottom of the page

## Pages

1. **index.html** - Home page with hero section, men's and women's collection category cards, and product listings
2. **pages/login.html** - User login page
3. **pages/signup.html** - User registration page
4. **pages/cart.html** - Shopping cart page
5. **pages/checkout.html** - Checkout and payment page
6. **pages/wishlist.html** - Wishlist page
7. **pages/contact.html** - Contact page with form
8. **pages/About.html** - About page with company information

## Instructions to Run the Website Locally

### Method 1: Using a Local Server (Recommended)

1. **Using Python** (if installed):
   - Open a terminal/command prompt in the project directory
   - Run: `python -m http.server 8000` (Python 3) or `python -m SimpleHTTPServer 8000` (Python 2)
   - Open your browser and navigate to: `http://localhost:8000`

2. **Using Node.js** (if installed):
   - Install a simple HTTP server: `npm install -g http-server`
   - Run: `http-server`
   - Open your browser and navigate to the URL shown (usually `http://localhost:8080`)

3. **Using VS Code Live Server Extension**:
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

### Method 2: Direct File Opening

1. Navigate to the project folder: `COMP2680_GROUP10`
2. Double-click on `index.html` to open it in your default web browser
   - **Note**: Some features (like localStorage) work better with a local server

### Required Files Structure

The project follows an organized folder structure:

```
COMP2680_GROUP10/
├── index.html              # Home page (root)
├── style.css               # Main stylesheet (root)
├── script.js               # JavaScript functionality (root)
├── README.md               # This file
├── images/                 # All image files
│   ├── background.png      # Hero section background image
│   ├── logo.jpeg          # Website logo
│   ├── OsHoodie_black.jpeg
│   ├── OsHoodie_grey.jpeg
│   ├── Trackpant_black.jpeg
│   ├── Trackpant_grey.jpeg
│   ├── shorts-black.png
│   ├── shorts-grey.png
│   ├── cropped-hoodie-black.png
│   ├── grey-cropped-hoodie.png
│   └── wireframe.png
└── pages/                  # All HTML pages (except index.html)
    ├── About.html
    ├── cart.html
    ├── checkout.html
    ├── contact.html
    ├── login.html
    ├── signup.html
    └── wishlist.html
```

## Known Limitations

1. **No Backend/Database**: All data is stored client-side only using localStorage. Cart items and wishlist persist across page refreshes but are stored locally in the browser. User registrations are not persisted to a server or database.

2. **No Payment Processing**: The checkout page is for demonstration purposes only. There is no actual payment gateway integration or real payment processing.

3. **No Server-Side Authentication**: User registration and login forms do not connect to a backend server. There is no real user authentication or session management.

4. **Form Submissions**: Contact form submissions are not sent to a server. They only display client-side notifications.

5. **Browser Storage**: Cart and wishlist data are stored in browser localStorage. Data will be lost if the user clears their browser data or uses a different browser/device.

6. **No Product Management**: Product information is hardcoded in HTML. There is no admin panel or dynamic product management system.

7. **Browser Compatibility**: Some modern CSS features may not be fully supported in older browsers (Internet Explorer, older versions of Safari).

8. **Responsive Design**: While the site is responsive, some elements may require further optimization for very small screens (below 320px width).

## Technologies Used

- **HTML5**: Semantic markup for all pages
- **CSS3**: Modern styling with flexbox, grid, backdrop-filter, and responsive design
- **JavaScript (Vanilla JS)**: No frameworks - pure JavaScript for all functionality
- **LocalStorage API**: For cart and wishlist persistence
- **PNG/JPEG**: Image formats for product images and backgrounds

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Project Structure

```
COMP2680_GROUP10/
├── index.html              # Home page
├── pages/                  # HTML pages folder
│   ├── About.html          # About page
│   ├── cart.html           # Shopping cart page
│   ├── checkout.html       # Checkout and payment page
│   ├── contact.html        # Contact page
│   ├── login.html          # User login page
│   ├── signup.html         # User registration page
│   └── wishlist.html       # Wishlist page
├── images/                 # Images folder
│   ├── background.png      # Hero section background
│   ├── logo.jpeg           # Website logo
│   ├── OsHoodie_black.jpeg # Men's product images
│   ├── OsHoodie_grey.jpeg
│   ├── Trackpant_black.jpeg
│   ├── Trackpant_grey.jpeg
│   ├── shorts-black.png    # Women's product images
│   ├── shorts-grey.png
│   ├── cropped-hoodie-black.png
│   ├── grey-cropped-hoodie.png
│   └── wireframe.png       # Design wireframe
├── style.css               # Main stylesheet
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## Key Functionality

### Cart Management
- Add items to cart from product pages
- View cart on dedicated cart page
- Adjust quantities with +/- buttons
- Remove items from cart
- Cart persists in localStorage
- Automatic discount calculation (20% off)
- Cart count badge updates across all pages

### Wishlist Management
- Add/remove items from wishlist
- View wishlist on dedicated page
- Wishlist persists in localStorage
- Empty state message when wishlist is empty
- Add items to cart directly from wishlist

### Search & Navigation
- Search products by name across both collections
- Search by category keywords ("hoodie", "track", "trackpants")
- Navigate to category pages from search
- Category-based product filtering
- Gender-based navigation (Men/Women)

### Product Display
- Category cards for both Men's and Women's collections
- "View Collection" button to see all products in a category
- "Back to Categories" button to return to category view
- Product images with popup modal view
- Consistent product card layout

### User Experience
- Smooth scrolling navigation
- Image popups for product viewing
- Discount popup (shows once per page load)
- Responsive design for all screen sizes
- Consistent navigation across all pages
- Sticky footer that stays at bottom
- Social media links open in new tabs

## Color Scheme

- **Background**: Dark grey (#1a1a1a)
- **Cards/Sections**: Dark grey (#2a2a2a)
- **Text**: White (#ffffff)
- **Accents**: Light grey (#c0c0c0, #a0a0a0)
- **Hover Effects**: Light grey transitions
- **Buttons**: Black (#000000) with hover effects

## Code Organization

- **Clean Code Structure**: Organized CSS with clear sections and comments
- **No Duplicate Code**: Removed redundant CSS rules and JavaScript functions
- **Modular JavaScript**: Functions organized by feature (cart, wishlist, search, etc.)
- **Responsive Media Queries**: Well-structured breakpoints for different screen sizes
- **Organized File Structure**: Images and pages in separate folders for better maintainability

## Credits

Built By Group 10

---

**Note**: This is a front-end only project. All functionality is client-side using JavaScript and localStorage. No backend server or database is required to run this website.
