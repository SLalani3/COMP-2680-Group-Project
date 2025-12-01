# FitnessDawg

## Project Description

FitnessDawg is a modern, responsive e-commerce website for oversized activewear. The website features a sleek athletic design with a video background hero section, product catalog, shopping cart functionality, user registration form, and contact section. Built with pure HTML5, CSS3, and JavaScript, the site showcases a premium athletic aesthetic inspired by brands like Gymshark and YoungLA, using a color palette of matte black, deep charcoal grey, soft gold highlights, and warm beige tones.

## Features

- **Hero Section**: Video background with animated text overlay
- **Product Catalog**: Display of oversized hoodies and trackpants in multiple color options
- **Shopping Cart**: Add products to cart with quantity selection and total calculation
- **User Registration**: Account creation form with validation
- **Contact Section**: Contact form for customer inquiries
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Discount Popup**: Special offer popup that appears 2 seconds after page load
- **Dynamic Footer**: Automatically updates with current year and last updated date

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

1. Navigate to the project folder: `COMP2680_Group10`
2. Double-click on `index.html` to open it in your default web browser
   - **Note**: Some features (like video playback) may be limited when opening files directly due to browser security restrictions

### Required Files

Make sure all the following files are in the same directory:
- `index.html`
- `style.css`
- `script.js`
- `FitnessDawg-video.mp4`
- `logo.jpeg`
- `OsHoodie_black.jpeg`
- `OsHoodie_grey.jpeg`
- `Trackpant_black.jpeg`
- `Trackpant_grey.jpeg`

## Known Limitations

1. **No Backend/Database**: All data is stored client-side only. Cart items, user registrations, and form submissions are not persisted to a server or database. Data is lost when the page is refreshed or closed.

2. **No Payment Processing**: The shopping cart is for demonstration purposes only. There is no actual payment gateway integration or checkout functionality.

3. **No User Authentication**: User registration does not create actual accounts. There is no login/logout system or user session management.

4. **Form Submissions**: Contact form and registration form submissions are not sent to a server. They only display client-side notifications.

5. **Cart Persistence**: Shopping cart contents are not saved between sessions. Items added to the cart will be cleared when the page is refreshed.

6. **Video Loading**: The background video may take time to load depending on internet connection speed. Video playback may be limited when opening `index.html` directly (file:// protocol) in some browsers.

7. **Browser Compatibility**: Some modern CSS features may not be fully supported in older browsers (Internet Explorer, older versions of Safari).

8. **No Product Management**: Product information is hardcoded in HTML. There is no admin panel or dynamic product management system.

9. **Responsive Design**: While the site is responsive, some elements may require further optimization for very small screens (below 320px width).

10. **No Search Functionality**: The product catalog does not include a search or filter feature.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS - no frameworks)
- MP4 Video Format

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Project Structure

```
COMP2680_Group10/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── FitnessDawg-video.mp4  # Hero section background video
├── logo.jpeg           # Website logo
├── OsHoodie_black.jpeg # Product image
├── OsHoodie_grey.jpeg  # Product image
├── Trackpant_black.jpeg # Product image
├── Trackpant_grey.jpeg # Product image
├── wireframe.png       # Design wireframe
└── README.md           # This file
```

## Credits

Built By Group 10

