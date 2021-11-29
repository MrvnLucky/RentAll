import express from "express";
const router = express.Router();
import { Item } from "../models/itemModel.js";
import auth from "../middleware/auth.js";

// Route for adding item
router.post("/add", auth, async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const newItem = new Item({ name, description, price });

    const savedItem = await newItem.save();

    res.json(savedItem);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).send;
  }
});
export default router;
