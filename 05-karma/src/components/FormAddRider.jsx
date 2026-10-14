import { useState } from "react";
import Button from "./Button";

function FormAddRider({ onAddRider }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://api.dicebear.com/9.x/notionists/svg",
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) {
      return;
    }

    const id = crypto.randomUUID();

    const newRider = {
      id,
      name,
      image: `${image}?seed=${id}`,
      balance: 0,
    };

    onAddRider(newRider);
    setName("");
    setImage("https://api.dicebear.com/9.x/notionists/svg");
  }

  return (
    <form className="form-add-rider" onSubmit={handleSubmit}>
      <label>🙋 Rider name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Avatar URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddRider;
