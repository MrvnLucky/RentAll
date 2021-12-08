import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

export default function Items() {
  const [items, setItems] = useState([]);

  async function getItems() {
    const itemsRes = await axios.get("http://localhost:5000/item");
    setItems(itemsRes.data);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <ItemForm />
      <ItemList items={items} />
    </div>
  );
}
