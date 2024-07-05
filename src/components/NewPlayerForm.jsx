import React, { useState } from "react";
import { createPlayer } from "../API/index";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("bench");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPlayer = await createPlayer({ name, breed, status, imageUrl });
    console.log("New player added:", newPlayer);
    setName("");
    setBreed("");
    setStatus("bench");
    setImageUrl("");
  };

  return (
    <div className="form-container">
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Breed:</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />

        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="bench">Bench</option>
          <option value="field">Field</option>
        </select>

        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button type="submit">Add Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
