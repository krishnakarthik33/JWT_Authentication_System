# JWT Authentication System

## Overview

JWT Authentication System is a full-stack web application that demonstrates secure user authentication and authorization using JSON Web Tokens (JWT).

The application allows users to register, log in, access protected routes, and securely interact with protected backend APIs.

---

## Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Generation
- Protected Frontend Routes
- Protected Backend APIs
- Logout Functionality
- MongoDB Database Integration
- React Router Navigation
- Secure Authentication Flow

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

---

## Project Structure

```
jwt-auth-project
│
├── backend
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── main.jsx
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/CodeAlpha_JWT_Authentication_System.git
```

---

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/jwtauth

JWT_SECRET=mysecretkey
```

---

## API Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

### Protected Profile Route

```http
GET /api/auth/profile
```

---

## Authentication Flow

1. User registers with email and password.
2. Password is hashed using bcrypt before storing in MongoDB.
3. User logs in with valid credentials.
4. Server generates a JWT token.
5. Token is stored on the client side.
6. Protected routes verify the JWT before granting access.

---

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Protected frontend routes
- Secure token verification
- Unauthorized access prevention

---

## Future Enhancements

- Role-Based Authentication
- Admin Dashboard
- Refresh Tokens
- Email Verification
- Password Reset Functionality
- HTTP-Only Cookies

---

## Author

Developed as part of the CodeAlpha Full Stack Web Development Internship Program.
