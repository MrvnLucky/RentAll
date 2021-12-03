import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
    default: 1,
  },
  // profile: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   adress: [
  //     {
  //       type: String,
  //     },
  //   ],
  // },
});

export const User = mongoose.model("User", userSchema);
