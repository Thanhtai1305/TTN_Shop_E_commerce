# 🛍️ TTN Shop - E-commerce Platform

A modern, full-stack e-commerce application built with the MERN stack. Featuring a complete shopping experience with user authentication, product management, shopping cart, and order processing.


## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Author](#author)
---

## 🌟 Features <a id="features"></a>

### 🛒 Shopping Experience
- **🏪 Product Catalog** - Browse products with categories and filters
- **🔍 Advanced Search** - Search products by name, category, and keywords
- **🛍️ Shopping Cart** - Add/remove items with quantity management
- **💳 Checkout Process** - Secure payment integration
- **📦 Order Management** - Track order status and history

### 👤 User Management
- **🔐 User Authentication** - JWT-based login/register system
- **👤 User Profiles** - Personal information management
- **📋 Order History** - View past purchases and order status
- **❤️ Wishlist** - Save favorite products for later

### 🎨 Admin Features
- **📊 Product Management** - CRUD operations for products
- **👥 User Management** - Manage customer accounts
- **📈 Order Management** - Process and track orders
- **📊 Dashboard Analytics** - Sales and performance metrics

### 🛡️ Security & Performance
- **🔒 Secure Payments** - Payment gateway integration
- **🚀 Responsive Design** - Mobile-first approach
- **⚡ Performance Optimized** - Fast loading and smooth interactions
- **🛡️ Data Validation** - Server-side and client-side validation

---

## 🛠 Tech Stack <a id="tech-stack"></a>

### Frontend
```markdown
- React.js with Hooks
- Redux for State Management
- Bootstrap/React-Bootstrap
- Axios for API calls
- React Router for navigation
- CSS3 with responsive design
```

### Backend
```markdown
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt.js for password hashing
- Multer for file uploads
- Express Validator for input validation
```

### Payment & Services
```markdown
- Razor payment integration
- Nodemailer for email notifications
```

---

## 📋 Prerequisites <a id="prerequisites"></a>

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn** package manager
- **Git** for version control

---

## 📥 Installation <a id="installation"></a>

1. **Clone the repository**
   ```bash
   git clone https://github.com/Thanhtai1305/TTN_Shop_E_commerce.git
   cd TTN_Shop_E_commerce
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables** (see Environment Configuration section)

---

## ⚙️ Environment Configuration <a id="environment-configuration"></a>

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration (for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Payment Gateway
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

---

## 🚀 Development <a id="development"></a>

### Running the Application

1. **Start the backend server**
   ```bash
   # From root directory
   npm run server
   ```

2. **Start the frontend development server** (in a new terminal)
   ```bash
   npm run client
   ```

3. **Run both frontend and backend concurrently**
   ```bash
   npm run dev
   ```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs

---

## 📦 Building for Production <a id="building-for-production"></a>

### Build the Frontend

```bash
cd frontend
npm run build
```

This creates a `build` folder with optimized production files.

### Production Deployment

```bash
# Set environment to production
NODE_ENV=production

# Start production server
npm start
```

---

## 🚀 Deployment <a id="deployment"></a>

### Platform Recommendations

**Frontend Deployment:**
- **Vercel** - Best for React applications
- **Netlify** - Great for static sites with CI/CD
- **AWS S3 + CloudFront** - Scalable solution

**Backend Deployment:**
- **Heroku** - Easy deployment for Node.js applications
- **Railway** - Modern deployment platform
- **AWS EC2** - Full control over server environment
- **DigitalOcean** - Affordable VPS solutions

**Database:**
- **MongoDB Atlas** - Managed cloud database
- **AWS DocumentDB** - MongoDB-compatible

**File Storage:**
- **Cloudinary** - Image and media management
- **AWS S3** - Scalable file storage

### Environment Variables for Production

Ensure you set the following in your production environment:

```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=strong_production_secret
CLOUDINARY_*_KEY=your_production_cloudinary_keys
```

---

## 📁 Project Structure <a id="project-structure"></a>

```
TTN_Shop_E_commerce/
├── 📁 backend/
│   ├── 📁 config/                 # Database and app configuration
│   ├── 📁 controllers/            # Route controllers
│   ├── 📁 middleware/             # Custom middleware
│   ├── 📁 models/                 # MongoDB models
│   ├── 📁 routes/                 # API routes
│   ├── 📁 utils/                  # Utility functions
│   ├── server.js                 # Express server entry point
|   └── seeder.js                  # Seed or clean sample data in database
│         
│
├── 📁 frontend/
│   ├── 📁 public/                 # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/         # Reusable components
│   │   ├── 📁 pages/              # Page components
│   │   ├── 📁 redux/              # Redux store and slices
│   │   ├── 📁 utils/              # Utility functions
│   │   ├── App.js                 # Main App component
│   │   ├── index.js               # React entry point
│   │   └── index.css              # Global styles
│   └── package.json               # Frontend dependencies
│
├── 📁 uploads/                # Item images
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── package.json                   # Root package.json
└── README.md                      # Project documentation
```

---

## 📚 API Documentation <a id="api-documentation"></a>

### Authentication Endpoints
```http
POST /api/auth/register     # Register new user
POST /api/auth/login        # User login
GET  /api/auth/me           # Get current user
GET  /api/auth/logout       # User logout
```

### Product Endpoints
```http
GET    /api/products        # Get all products
GET    /api/products/:id    # Get single product
POST   /api/products        # Create product (admin)
PUT    /api/products/:id    # Update product (admin)
DELETE /api/products/:id    # Delete product (admin)
```

### Order Endpoints
```http
POST   /api/orders          # Create new order
GET    /api/orders          # Get user orders
GET    /api/orders/:id      # Get order by ID
PUT    /api/orders/:id/pay  # Update order to paid
```

### User Endpoints
```http
GET    /api/users           # Get all users (admin)
GET    /api/users/:id       # Get user by ID
PUT    /api/users/profile   # Update user profile
PUT    /api/users/:id       # Update user (admin)
```

---

## 👨‍💻 Author <a id="author"></a>

**Thanh Tai**  
- GitHub: [@Thanhtai1305](https://github.com/Thanhtai1305)  



---

**Happy Shopping!** 🛍️ For any questions or support, please open an issue in the repository or contact the author.
