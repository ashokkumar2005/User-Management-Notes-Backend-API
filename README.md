# 🚀 User Management & Notes Backend API

A **production-style backend project** built with **Node.js, Express, and MongoDB** following **MVC architecture**.

This project is designed to **strengthen backend development skills** by implementing real-world concepts like authentication, CRUD operations, middleware, file handling, and secure API design.

---

# ✨ Features

* 🔐 User Authentication (JWT-based)
* 🔑 Password Hashing with bcrypt
* 📝 Notes CRUD Operations
* 📁 File Upload (Multer)
* 🗄 MongoDB with Mongoose
* 🧱 MVC Architecture
* 📊 Request Logging (Morgan)
* 🛡 Security (Helmet, CORS)
* 🚦 Rate Limiting
* ⚠️ Global Error Handling
* 📂 File System Integration

---

# 🛠 Tech Stack

| Technology         | Purpose             |
| ------------------ | ------------------- |
| Node.js            | Runtime Environment |
| Express.js         | Backend Framework   |
| MongoDB            | Database            |
| Mongoose           | ODM                 |
| JWT                | Authentication      |
| Multer             | File Upload         |
| Morgan             | Logging             |
| Helmet             | Security Headers    |
| CORS               | Cross-Origin Access |
| Express Rate Limit | API Protection      |

---

# 📁 Project Structure

```
practice-backend-project/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── noteController.js
│   └── fileController.js
│
├── models/
│   ├── User.js
│   ├── Note.js
│   └── File.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── noteRoutes.js
│   └── fileRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│   ├── errorMiddleware.js
│   └── uploadMiddleware.js
│
├── utils/
│   └── logger.js
│
├── uploads/
│
├── server.js
├── package.json
└── .env
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/ashokkumar2005/practice-backend-project.git
```

## 2️⃣ Navigate to Project

```bash
cd practice-backend-project
```

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/practice_backend
JWT_SECRET=your_secret_key
```

---

# ▶️ Running the Server

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# 📡 API Endpoints

## 🔐 Authentication

```
POST   /api/auth/register   → Register User
POST   /api/auth/login      → Login User
```

## 📝 Notes

```
POST   /api/notes           → Create Note
GET    /api/notes           → Get All Notes
```

## 📁 File Upload

```
POST   /api/files/upload    → Upload File
```

---

# 📚 Concepts Covered

* MVC Architecture
* REST API Design
* Authentication & Authorization
* Middleware Usage
* MongoDB & Mongoose
* File Handling
* Error Handling
* Security Best Practices

---

# 🎯 Project Goal

The goal of this project is to **simulate a real-world backend system** and improve skills required for **backend developer roles**, including:

* Writing scalable APIs
* Structuring projects professionally
* Implementing authentication systems
* Applying security best practices

---

# 🚀 Future Improvements

* ✅ Refresh Token Authentication
* 📊 Pagination & Filtering
* 🔍 Search Functionality
* 📄 API Documentation (Swagger)
* 🧪 Unit & Integration Testing

---

# 👨‍💻 Author

**AshokKumar T**

---

# ⭐ Support

If you found this project helpful:

⭐ Star the repository
🍴 Fork it
📢 Share it with others

---

> 💡 *Built for learning. Structured for real-world development.*
