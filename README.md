# 🎥 Videmy (YouTube-like Video Sharing Platform)

Videmy is a modern video-sharing platform where users can upload, watch, and interact with video content — similar to YouTube, but crafted as a full-stack project for learning, showcasing and scaling.

---

## 🚀 Features

- 📹 Upload, stream, and watch high-quality videos
- 👤 User authentication (Sign up / Login / OAuth)
- 💬 Comment system
- 👍 Like/Dislike videos
- 📁 Categories & tags for videos
- 🔍 Search and filter functionality
- 📊 Video views tracking
- 🧑‍💼 User dashboard to manage videos
- 📱 Responsive design (mobile-friendly)

---

## 🛠 Tech Stack

**Frontend**

- React.js (with Hooks + Context API or Redux)
- Tailwind CSS / Material UI
- React Router
- Axios

**Backend**

- Node.js + Express.js
- MongoDB (Mongoose)
- Cloudinary / AWS S3 (for video uploads)
- JWT Authentication
- Multer for file handling

**Optional Enhancements**

- WebSockets for live chat (on video watch page)
- Admin dashboard
- Notifications (bell icon)
- Video processing (FFmpeg or third-party service)

---

## 📦 Folder Structure
```bash
Videmy/
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── assets/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html
│   ├── README.md
│   ├── Dockerfile
│   └── .gitignore
├── backend/                     # Node.js + Express API
│   ├── src/
│   │   ├── app.js
│   │   ├── index.js
│   │   ├── constants.js
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── package.json
│   ├── Dockerfile
│   ├── .gitignore
│   ├── .eslintrc
│   ├── .prettierrc
│   └── .prettierIgnore
├── README.md
└── docker-compose.yaml
```
---

## 🧪 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/mnraza-dev/videmy.git
   cd videmy

   ```
2. Backend Setup

   ```bash
   cd backend
   pnpm install
   pnpm run dev

   ```

3. Frontend Setup

   ```bash
   cd frontend
   pnpm install
   pnpm run dev
   ```

4. Configure Environment
   
   **Backend Environment Setup:**
   
   Create a `.env` file in the `backend/` directory:
   ```bash
   # Server Configuration
   PORT=4000
   NODE_ENV=development
   
   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/videmy
   
   # Add other environment variables as needed
   # JWT_SECRET=your_jwt_secret_here
   # CORS_ORIGIN=http://localhost:5173
   ```
   
   **For Docker Development:**
   The `MONGODB_URI` will automatically be set to `mongodb://mongodb:27017/videmy` when running with Docker Compose.
