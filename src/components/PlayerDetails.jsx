import { useState, useEffect } from "react";

export function PlayerDetails({ player }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!!player.id);
  }, [player]);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="player-details">
      {isOpen && (
        <dialog open={isOpen} className="dialog">
          <img
            src={player.imageUrl}
            alt="image not found"
            style={{
              maxWidth: "20vw",
              maxHeight: "54vw",
            }}
          />
          <p>ID: {player.id}</p>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <p>Created At: {player.createdAt}</p>

          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </dialog>
      )}
    </div>
  );
}
