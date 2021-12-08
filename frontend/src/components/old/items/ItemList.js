import React from "react";

export default function ItemList({ items }) {
  function renderItems() {
    return items.map((item, index) => {
      return (
        <li key={index}>
          {item.name}, {item.description}
        </li>
      );
    });
  }
  return (
    <div>
      <ul>{renderItems()}</ul>
    </div>
  );
}
