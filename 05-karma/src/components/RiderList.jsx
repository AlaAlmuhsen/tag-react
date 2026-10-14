import Button from "./Button";

function RiderList({ riders, selectedRider, onSelection }) {
  return (
    <ul>
      {riders.map((rider) => (
        <Rider
          rider={rider}
          key={rider.id}
          selectedRider={selectedRider}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default RiderList;

function Rider({ rider, selectedRider, onSelection }) {
  const { id, name, image, balance } = rider;
  const isSelected = selectedRider?.id == id;
  return (
    <li className={`${isSelected ? "selected" : ""}`}>
      <img src={image} />
      <h3>{name}</h3>
      {balance == 0 && <p>You and {name} are square</p>}
      {balance > 0 && (
        <p className="owed">
          {name} owes you {balance} km of driving
        </p>
      )}
      {balance < 0 && (
        <p className="owe">
          You owe {name} {Math.abs(balance)} km of driving
        </p>
      )}

      <Button onClick={() => onSelection(rider)}>
        {isSelected ? "Close" : "Ride"}
      </Button>
    </li>
  );
}

// You owe Lina 12 km of driving

// Omar owes you 30 km of driving

// You and Yuki are square
