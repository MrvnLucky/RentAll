import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Mongoose = new mongoose.Mongoose();

const port = process.env.PORT || 8000;

Mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }).catch(
  (error) => {
    handleError(error);
  }
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
