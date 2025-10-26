import express from "express";
import mongoose, { connect } from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
dotenv.config();
let port = process.env.PORT;

app.use("/api", authRoutes);
app.use(cookieParser);

/*app.get("/", (req, res) => {
  res.send("Hello World");
});*/

app.listen(port, () => {
  connectDB();
  console.log("iam listening on port", port);
});
