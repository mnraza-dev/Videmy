import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let mongoURI;
    
    if (process.env.NODE_ENV === 'production') {
      mongoURI = process.env.MONGODB_URI;
    } else if (process.env.NODE_ENV === 'development') {
         mongoURI = process.env.MONGODB_URI || "mongodb://mongodb:27017/videmy";
    } else {
         mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/videmy";
    }
    
    if (!mongoURI) {
      throw new Error("MONGODB_URI environment variable is required");
    }
    
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
