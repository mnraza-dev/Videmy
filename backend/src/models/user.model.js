import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  addressLine1: [
    {
      type: String,
      required: true,
    },
  ],
  addressLine2: [
    {
      type: String,
    },
  ],
});

export const User = mongoose.model("User", userSchema);
