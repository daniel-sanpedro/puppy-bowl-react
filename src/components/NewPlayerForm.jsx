import { useState } from "react";
import { createPlayer, fetchAllPlayers } from "../API";

export function NewPlayerForm({ onPlayerAdded }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    const newPlayer = { name, breed, imageUrl };

    createPlayer(newPlayer).then(() => {
      fetchAllPlayers().then((players) => {
        onPlayerAdded(players);
      });
    });

    setName("");
    setBreed("");
    setImageUrl("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <label htmlFor="name">Image URL:</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button className="submit-btn" type="submit">
        Add Player
      </button>
    </form>
  );
}


