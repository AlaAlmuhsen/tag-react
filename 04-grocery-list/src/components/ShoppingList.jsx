import { useState } from "react";
import ListItem from "./ListItem";

function ShoppingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [];

  if (sortBy == "input") sortedItems = items;

  if (sortBy == "name")
    sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy == "bought")
    sortedItems = items.sort((a, b) => Number(a.bought) - Number(b.bought));
  // sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  return (
    <main className="shopping-list">
      <ul>
        {sortedItems.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="toolbar">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Added Order</option>
          <option value="name">Sort By Name</option>
          <option value="bought">Sort By Bought Status</option>
        </select>
        <button onClick={onClearItems}>Empty Card</button>
      </div>
    </main>
  );
}

export default ShoppingList;
