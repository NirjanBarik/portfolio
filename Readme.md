# Modern MERN Portfolio (Cyberpunk Edition) 🚀

Welcome to my personal portfolio repository! This project is a full-stack web application built using the **MERN stack** (MongoDB, Express, React, Node.js), featuring a stunning modern Cyberpunk-inspired aesthetic, smooth animations, and a fully functional backend for handling contact requests.

## ✨ Features

- **High-Fidelity Cyberpunk UI**: A dynamic, vibrant user interface with engaging hover effects and micro-animations that feel premium and alive.
- **Dynamic Backgrounds**: Features an interactive "moving stars" background animation for an immersive Dark Mode experience.
- **Fully Responsive**: Flawless layout and functionality across all devices (Mobile, Tablet, and Desktop).
- **Smooth Animations**: Powered by **Framer Motion** for elegant page transitions and scroll reveals.
- **Light/Dark Mode**: Built-in theme toggling capability tailored to modern user preferences.
- **Functional Contact Form**: Real-world functionality powered by **Nodemailer** and **MongoDB**. Messages submitted through the frontend are saved directly to a database and forwarded as an email notification.

---

## 🛠️ Technology Stack

### **Frontend** (Client)
- **React 19** - UI Framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first styling with custom configurations
- **Framer Motion** - Animations and transitions
- **Lucide React** - Clean and modern SVG icon set
- **React Router v7** - Client-side routing

### **Backend** (Server)
- **Node.js & Express.js** - Scalable server architecture
- **MongoDB & Mongoose** - NoSQL Database for storing contact messages
- **Nodemailer** - For sending emails on contact form submission
- **CORS & Dotenv** - Security and environment variable management

---

## 🚀 Getting Started Locally

To run this project on your local machine, you will need to start both the backend server and the frontend development server.

### Prerequisites
- Node.js installed on your machine
- A MongoDB URI (local or MongoDB Atlas)
- An App Password for Gmail (to use Nodemailer)

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside the `backend` folder and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:5173
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_gmail_app_password
   RECEIVER_EMAIL=your_receiving_email@gmail.com
   ```
4. Start the backend server (Development mode):
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## 🌍 Deployment Configuration

This project is configured to be deployed separately for maximum performance and scalability:
- **Frontend**: Designed to be hosted on **Vercel**. Ensure all API calls use the production backend URL instead of localhost.
- **Backend**: Designed to be hosted on **Render**. Ensure you add the Vercel frontend URL to the `FRONTEND_URL` environment variable to configure CORS properly.

---

## 📂 Project Structure

```
PersonalPortfolio/
│
├── backend/                  # Express server & APIs
│   ├── controllers/          # Route logic
│   ├── models/               # MongoDB schemas (e.g., Contact.js)
│   ├── routes/               # Express routing (e.g., contactRoutes.js)
│   ├── server.js             # Server entry point
│   └── package.json
│
├── frontend/                 # React frontend
│   ├── public/               # Static assets
│   ├── src/                  # React source code (Components, Pages)
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── index.html                # Legacy static files
├── script.js                 # Legacy static files
└── style.css                 # Legacy static files
```

---

## 📜 License

This project is for personal portfolio usage. Feel free to explore the code, draw inspiration, and adapt the components for your own non-commercial projects.
