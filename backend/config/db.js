import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB connected successfully");
  } catch (err) {
    console.log("error while connecting to mongoDB", err);
  }
};

export default connectDB;
