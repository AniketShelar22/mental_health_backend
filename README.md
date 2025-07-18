# 🧠 Mental Health Check-in App (Backend)

## 📍 Project Overview

This is the **Backend** of the Mental Health Check-in web application, built using **Node.js**, **Express**, and **MongoDB**. It provides REST API endpoints to:

* Register and log in users
* Handle check-in form data securely
* Protect routes with JWT authentication

---

## 🚀 Live API Endpoint

Backend hosted on **Render**: [https://mental-health-backend-rx5y.onrender.com/api](https://mental-health-backend-rx5y.onrender.com/api)

---

## 📁 Folder Structure

```
mental-health-backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── checkinController.js
├── models/
│   ├── User.js
│   └── Checkin.js
├── routes/
│   ├── authRoutes.js
│   └── checkinRoutes.js
├── middleware/
│   └── authMiddleware.js
├── utils/
│   └── encryption.js
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Technologies Used

* **Node.js** + **Express**
* **MongoDB** with **Mongoose**
* **bcryptjs** for password hashing
* **jsonwebtoken (JWT)** for secure sessions
* **dotenv** for environment config
* **crypto** for check-in data encryption

---

## 🔐 Security Features

* Passwords hashed using bcryptjs
* JWT-based route protection
* **Check-in entries encrypted** before storing in the database
* CORS configured to allow requests only from frontend Netlify domain

---

## 💻 How to Run Locally

1. **Clone the repo:**

   ```bash
   git clone https://github.com/yourusername/mental-health-backend.git
   cd mental-health-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/mental-health?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   ENCRYPTION_KEY=your_32_char_encryption_key
   ```

4. **Start the backend:**

   ```bash
   node server.js
   ```

---

## 🐛 Challenges Faced

* Render's deployment environment needing IP whitelisting in MongoDB Atlas
* Handling encrypted check-in data securely and validating JWT tokens

---

## 🔗 Related Frontend Repo

See: [https://mentalhealthfrontend.netlify.app](https://mentalhealthfrontend.netlify.app)

---

## 👨‍💻 Author

Developed by Aniket Shelar as part of a full-stack developer assignment.
