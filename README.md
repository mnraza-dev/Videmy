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

streamly/
├── client/ # React frontend
│ └── ...
├── server/ # Node.js + Express API
│ └── ...
├── README.md
└── .env # Environment variables

---

## 🧪 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/mnraza-dev/videmy.git
   cd videmy

   ```
2. Backend Setup

   ```bash
   cd server
   pnpm install
   pnpm run dev

   ```

3. Frontend Setup

   ```bash
   cd client
   npm install
   npm start
   ```

4. Configure Environment
   Create a .env file in /server and /client as needed:

```bash
MONGO_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=
```
