import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Initialization
const app = express();
app.use(cors());
app.use(express.json());

// Config
dotenv.config();
const port = process.env.PORT || 5000;
const db = process.env.DB_URI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, connectTimeoutMS: 5000 })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Routes
import userRouter from "./routes/user.js";
app.use("/user", userRouter);

// App listener
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
