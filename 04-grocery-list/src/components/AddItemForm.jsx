import { useState } from "react";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("Carrot");
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name) {
      setError("please fill the name");
      return;
    }

    const newItem = {
      name,
      amount,
      bought: false,
      id: Date.now(),
    };

    // update the items state
    onAddItem(newItem);
    // reset the form values
    setAmount(1);
    setName("");
  }
  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <h3>What do you need from the market? 🥕</h3>
      <div className="add-item__controls">
        <select value={amount} onChange={(e) => setAmount(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button>+ Add</button>
      </div>
    </form>
  );
}

export default AddItemForm;
