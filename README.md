# ShopTune

**Final Project Technical Report**  
SE/COM S 3190 – Construction of User Interfaces  
Spring 2025  

---

## 1. Introduction

**Overview:**  
ShopTune is an e-commerce web application designed to simulate a complete shopping experience with frontend-backend integration and a connected MySQL database. This project helped us gain practical experience in full-stack development including user authentication, data storage, and CRUD operations.

**Users:**  
Customers looking to browse, add to cart, and purchase fashion items categorized as Women, Men, and Accessories.

**Goals:**  
- Browse and categorize products  
- Manage cart and checkout process  
- Signup and log in securely  
- Connect frontend to backend and database using REST APIs  
- **Enjoy an integrated music player to listen to music while browsing products**

**Originality:**  
Inspired by commercial e-commerce platforms, but completely original in implementation.

---

## 2. Project Description

**Major Features:**  
- Category-based product browsing (Women, Men, Accessories)  
- Cart and checkout system  
- User login and signup  
- **Music player integration allowing users to listen to music while shopping**

**User Flow:**  
- User lands on HomePage with category selection  
- Navigates to specific category page to view products  
- Adds items to cart  
- Proceeds to checkout or login/signup if not authenticated  

**CRUD Operations:**  
- Create: New user signup, cart creation  
- Read: Product list from database  
- Update: Cart updates and item removal  
- Delete: Remove items from cart  

---

## 4. Code Explanation and Logic Flow

### 4.1 Frontend–Backend Communication  
- Frontend fetches products via `/api/products` endpoint from Express backend  
- Backend uses MySQL to query product data  
- JSON results sent to frontend and rendered with React  

### 4.2 React Component Structure  
- `CartContext` manages global cart state  
- Product info displayed via `ProductCard` components with props  

### 4.3 Database Interaction  
- MySQL database with tables: `users`, `products`  
- Node.js backend uses `mysql2` package to execute queries in `server.js`  

---

