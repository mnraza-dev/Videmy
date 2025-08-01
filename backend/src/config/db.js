import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let mongoURI;
    
    if (process.env.NODE_ENV === 'production') {
      mongoURI = process.env.MONGO_URI;
    } else if (process.env.NODE_ENV === 'development') {
         mongoURI = process.env.MONGO_URI || "mongodb://mongodb:27017/videmy";
    } else {
         mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/videmy";
    }
    
    if (!mongoURI) {
      throw new Error("MONGO_URI environment variable is required");
    }
    
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    // Don't exit the process, just log the error
    console.log("Server will start without database connection");
  }
};

export default connectDB;
