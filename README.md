# User Management & Notes Backend API

This is a **practice backend project** built using **Node.js, Express, and MongoDB** with **MVC architecture**.
The main goal of this project is to improve backend development skills by repeating important concepts like authentication, CRUD operations, middleware, file upload, and REST API design.

---

# 🚀 Features

* User Registration & Login (JWT Authentication)
* Password Hashing using bcrypt
* Notes CRUD API
* File Upload using Multer
* MongoDB Database using Mongoose
* MVC Architecture
* Logging using Morgan
* Security using Helmet & CORS
* Rate Limiting
* Global Error Handling
* File System Usage

---

# 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer (File Upload)
* Morgan (Logging)
* Helmet (Security)
* CORS
* Express Rate Limit

---

# 📁 Project Structure

practice-backend-project
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── userController.js
│   ├── noteController.js
│   └── fileController.js
│
├── models
│   ├── User.js
│   ├── Note.js
│   └── File.js
│
├── routes
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── noteRoutes.js
│   └── fileRoutes.js
│
├── middleware
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│   ├── errorMiddleware.js
│   └── uploadMiddleware.js
│
├── utils
│   └── logger.js
│
├── uploads
│
├── server.js
├── package.json
└── .env

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/practice-backend-project.git
```

Go to project folder

```bash
cd practice-backend-project
```

Install dependencies

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root folder.

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/practice_backend
JWT_SECRET=your_secret_key
```

---

# ▶️ Run the Server

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

---

# 📡 API Endpoints

## Authentication

POST /api/auth/register
POST /api/auth/login

---

## Notes

POST /api/notes
GET /api/notes

---

## File Upload

POST /api/files/upload

---

# 📚 Concepts Covered

* MVC Architecture
* REST API Development
* Authentication & Authorization
* MongoDB & Mongoose
* Middleware in Express
* File Upload Handling
* Error Handling
* Security Best Practices

---

# 🎯 Purpose of This Project

This project was created for practice to improve backend development skills using Node.js and Express. It helps in understanding real-world backend structure and how APIs work in production-level applications.

---

# 👨‍💻 Author

AshokKumar T

---

# ⭐ Support

If you like this project, give it a star on GitHub.
