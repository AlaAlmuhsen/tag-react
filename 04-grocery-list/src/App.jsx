import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import Summary from "./components/Summary";

const arr = [
  {
    id: 123,
    amount: 1,
    name: "test",
    bought: false,
  },
  {
    id: 134,
    amount: 1,
    name: "test",
    bought: true,
  },
];

function App() {
  const [items, setItems] = useState(arr);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToddleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item,
      ),
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <ShoppingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToddleItem}
        onClearItems={handleClearItems}
      />
      <Summary items={items} />
    </div>
  );
}

export default App;
