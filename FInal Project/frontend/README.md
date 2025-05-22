# ShopTune - Shopping App with Music Player

ShopTune is a modern shopping web application built with React. It includes category browsing, cart management, checkout, authentication, and a built-in music player for a more immersive shopping experience.

---

## Features

### Core Shopping Features
- Homepage with Categories: Browse products by Women, Men, and Accessories.
- Category Pages: Dynamically filter products based on category using route params.
- Product Cards: Each product shows image, title, description, and price.
- Add to Cart: Products can be added to a shared cart context.
- All Products Page: Dedicated view that lists all available products using the shared ProductCard component.
- Cart Page:
  - View items in your cart
  - Remove individual items
  - Responsive grid layout

### Checkout System
- Checkout Form includes:
  - Name
  - Email
  - Shipping Address
  - Card Number
  - Expiry Date
  - CVV
- Form Validation: Alerts users if any field is empty.
- Order Submission: Simulated API returns an order confirmation.

### Authentication
- Login Page:
  - Email and password fields
  - Password visibility toggle
  - Alert and redirect on successful login
- Signup Page:
  - Name, email, password, and confirm password
  - Matching password validation
  - Alert and redirect to login on success
  - Password visibility toggle

### Music Player
- Built-in floating music player
  - Plays relaxing background music (Chill Vibes, Focus Flow)
  - Auto-plays next song on end
  - Next button to manually change tracks
  - Hide/Show toggle button to collapse or reopen the player
  - Positioned in the top-right corner of the app

### Navigation Bar
- Bootstrap-based top navbar
- Includes quick links to:
  - Home
  - Women / Men / Accessories
  - Cart
  - Checkout
  - Login / Signup

---

## Tech Stack

- Frontend: React, React Router, Bootstrap
- State Management: Context API for cart
- Styling: Inline styles + Bootstrap classes
- Mock API: Simulated API responses using Promise.resolve() for:
  - Login
  - Signup
  - Product fetching
  - Order submission

---

## Project Structure (Simplified)

