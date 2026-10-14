import { useState } from "react";
import RiderList from "./components/RiderList";
import FormAddRider from "./components/FormAddRider";
import Button from "./components/Button";
import FormLogTrip from "./components/FormLogTrip";

const initialRides = [
  {
    id: 1123,
    name: "Alaa",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=85",
    balance: 12,
  },
  {
    id: 11233,
    name: "Ammar",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=725",
    balance: -50,
  },
  {
    id: 23456,
    name: "Ahmad",
    image: "https://api.dicebear.com/9.x/notionists/svg?seed=469",
    balance: 0,
  },
];

function App() {
  const [riders, setRiders] = useState(initialRides);
  const [showAddRider, setShowAddRider] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);

  function handleAddRider() {
    setShowAddRider((i) => !i);
    setSelectedRider(null);
  }

  function handleCreateRider(rider) {
    setRiders((r) => [...r, rider]);
    handleAddRider();
  }

  function handleSelection(rider) {
    setSelectedRider((cur) => (cur?.id == rider.id ? null : rider));
    setShowAddRider(false);
  }

  function handleLogTrip(value) {
    setRiders((riders) =>
      riders.map((rider) =>
        rider.id == selectedRider.id
          ? { ...rider, balance: rider.balance + value }
          : rider,
      ),
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <RiderList
          riders={riders}
          selectedRider={selectedRider}
          onSelection={handleSelection}
        />

        {showAddRider && !selectedRider && (
          <FormAddRider onAddRider={handleCreateRider} />
        )}

        <Button onClick={handleAddRider}>
          {showAddRider ? "Close" : "Add Rider"}
        </Button>
      </div>
      {selectedRider && (
        <FormLogTrip
          selectedRider={selectedRider}
          onLogTrip={handleLogTrip}
          key={selectedRider.id}
        />
      )}
    </div>
  );
}

export default App;
