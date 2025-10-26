import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../config/token.js";
import { HttpStatusCode } from "axios";

export const SignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, username } = req.body;

    if (!firstName || !lastName || !email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      username,
    });
    let token;
    try {
      token = generateTojken(user._id);
    } catch (err) {
      console.log(err);
    }
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // token generate and pass it in cookie
    return res.status(201).json({
      message: "User registered successfully!",
      user: {
        firstName,
        lastName,
        email,
        username,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
