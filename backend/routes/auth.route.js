import express from "express";
import { SignUp } from "../controllers/auth.controller.js";

const router = express.Router();

// Route for user registration
router.post("/signup", SignUp);

// You can add login, logout, etc., later like this:
// router.post("/login", Login);

export default router;
