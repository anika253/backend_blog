import express from "express";
import { SignUp } from "../controllers/auth.controller.js";

const authrouter = express.Router();

// Route for user registration
authrouter.post("/signup", SignUp);
authrouter.post("/login", login);
authrouter.post("/logout", logout);

// You can add login, logout, etc., later like this:
// router.post("/login", Login);

export default authrouter;
