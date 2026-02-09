# Naksh Jewels Backend API

A comprehensive Node.js and Express-based backend API for the Naksh Jewels e-commerce jewelry platform. This backend provides complete functionality for user management, product catalog, shopping cart, orders, and category management.

---

##  Features

### User Management
- **User Registration**: Create new user accounts with encrypted passwords
- **User Login/Logout**: Secure JWT-based authentication system
- **User Profile**: Retrieve authenticated user information
- **Admin Registration**: Special admin account creation with role-based access control
- **Password Security**: Bcrypt encryption with 10-11 salt rounds

### Product Management
- **Add Products**: Admin can add new products with name, price, category, and stock information
- **Get All Products**: Fetch complete product catalog
- **Get Products by Category**: Filter products based on category
- **Get Product Details**: Retrieve detailed information about a specific product by ID
- **Category Management**: Create, retrieve, and delete product categories

### Shopping Cart
- **Add to Cart**: Add products to user's cart with quantity tracking
- **View Cart**: Get all items in the shopping cart
- **Update Quantity**: Modify product quantities in the cart
- **Remove Item**: Delete specific products from the cart
- **Clear Cart**: Remove all items from the cart

### Order Management
- **Create Orders**: Place orders directly from products with delivery address
- **Order Tracking**: Track order status including delivery and payment status
- **Order Details**: Automatic calculation of total prices with delivery time (2 days)

### Security Features
- **JWT Authentication**: Token-based authentication with 7-day expiration
- **Role-Based Access Control**: Admin and user role differentiation
- **Cookie-based Token Storage**: Secure HTTP-only cookies for tokens
- **Email Validation**: Using validator library for email format verification
- **CORS Configuration**: Secure cross-origin resource sharing setup

---

##  Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose v9.1.5
- **Authentication**: JSON Web Tokens (JWT) v9.0.3
- **Password Encryption**: Bcryptjs v3.0.3 & Bcrypt v6.0.0
- **Middleware**: Cookie-Parser, CORS
- **Validation**: Validator.js v13.15.26
- **Environment Management**: dotenv v17.2.3
- **Containerization**: Docker

---

### Installation

1. **Clone the repository**
   git clone <repository-url>
   cd backend

2. **Install dependencies**
   npm install


3. **Create `.env` file** in the root directory
   
   cp .env.example .env
   

4. **Configure environment variables** (see below)

### Environment Variables

Create a `.env` file in the backend root directory:


# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production

# Node Environment
NODE_ENV=development

### Development Mode
npm start

1. **Build Docker image**
  
   docker build -t naksh-jewels-backend .

2. **Run Docker container**
   
   docker run -p 4000:5000 --env-file .env naksh-jewels-backend


3. **Using Docker Compose** (from root directory)

   docker-compose up backend
   


















