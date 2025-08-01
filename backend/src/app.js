import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { User } from "./models/user.model.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Videmy Backend is running!" });
});



export { app };
