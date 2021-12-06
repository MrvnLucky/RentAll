import React, { useState } from "react";
import axios from "axios";
export default function ItemForm() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  async function saveItem(e) {
    e.preventDefault();
    try {
      const itemData = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
      };
      await axios.post("http://localhost:5000/item/add", itemData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveItem}>
        <input
          type="text"
          placeholder="Item Name"
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          value={itemName}
        />
        <input
          type="text"
          placeholder="Item Description"
          onChange={(e) => {
            setItemDescription(e.target.value);
          }}
          value={itemDescription}
        />
        <input
          type="text"
          placeholder="Item Price"
          onChange={(e) => {
            setItemPrice(e.target.value);
          }}
          value={itemPrice}
        />
        <button type="submit">Save new item</button>
      </form>
    </div>
  );
}
