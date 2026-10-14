import { useState } from "react";
import Button from "./Button";

function FormLogTrip({ selectedRider, onLogTrip }) {
  const { name: riderName } = selectedRider;
  const [distance, setDistance] = useState("");
  const [shareByUser, setShareByUser] = useState("");
  const [whoIsDriving, setWhoIsDriving] = useState("user");
  const shareByRider = distance > 0 ? distance - shareByUser : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!distance || !shareByUser) {
      return;
    }
    onLogTrip(whoIsDriving == "user" ? shareByRider : -shareByUser);
    setDistance("");
    setShareByUser("");
    setWhoIsDriving("user");
  }

  return (
    <form className="form-log-trip" onSubmit={handleSubmit}>
      <h2>Log a trip with {riderName}</h2>

      <label>🛣️ Trip distance (km)</label>
      <input
        type="text"
        value={distance}
        onChange={(e) => setDistance(+e.target.value)}
      />

      <label>🧑 Your share (km)</label>
      <input
        type="number"
        value={shareByUser}
        onChange={(e) =>
          setShareByUser(
            +e.target.value > distance ? shareByUser : +e.target.value,
          )
        }
      />

      <label>🧍 {riderName} share (km)</label>
      <input type="text" value={shareByRider} disabled />

      <label>🚗 Who is driving</label>
      <select
        value={whoIsDriving}
        onChange={(e) => setWhoIsDriving(e.target.value)}
      >
        <option value="user">You</option>
        <option value="rider">{riderName}</option>
      </select>

      <Button>Log Trip</Button>
    </form>
  );
}

export default FormLogTrip;
