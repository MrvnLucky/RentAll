import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Initialization

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Routes
import userRouter from "./routes/userRouter.js";
app.use("/auth", userRouter);

// App listener

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
