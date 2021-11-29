import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Route for user register
router.post("/register", async (req, res) => {
  try {
    const { email, name, password, passwordVerify } = req.body;

    //  Validation

    // Check for required fields
    if (!email || !name || !password || !passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });
    }

    // Check for password length
    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "Please enter a password with at least 6 characters",
      });
    }

    // Check for passwordVerify
    if (password !== passwordVerify) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter the same password twice" });
    }

    // Check for existing user with registered email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ errorMessage: "Account with this email already exist" });
    }

    // Hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Save to database

    const newUser = new User({ email, name, passwordHash });
    const savedUser = await newUser.save();

    // sign token
    const token = jwt.sign({ user: savedUser._id }, process.env.JWT_SECRET);

    // send token with HTTP-only cookie
    res.cookie("token", token, { httpOnly: true }).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Validation

    // Check for required fields
    if (!email || !password) {
      return res.status(400).json({
        errorMessage: "Please enter all required fields",
      });
    }

    // Check for existing user with registered email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Wrong email or password" });
    }

    // Check password
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect) {
      return res.status(401).json({ errorMessage: "Wrong email or password" });
    }

    // sign token
    const token = jwt.sign({ user: existingUser._id }, process.env.JWT_SECRET);

    // send token with HTTP-only cookie
    res.cookie("token", token, { httpOnly: true }).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Route for user logout
router.get("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
});

export default router;
