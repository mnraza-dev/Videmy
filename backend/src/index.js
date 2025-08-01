import connectDB from "./config/db.js";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });
