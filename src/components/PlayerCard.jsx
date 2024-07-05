import React from "react";
import { Link } from "react-router-dom";

const PlayerCard = ({ player, handleDelete }) => {
  return (
    <div className="player-card">
      <img src={player.imageUrl} alt={player.name} className="player-image" />
      <h3>{player.name}</h3>
      <p>
        <strong>Breed:</strong> {player.breed}
      </p>
      <p>
        <strong>Status:</strong> {player.status}
      </p>
      <div className="actions">
        <Link to={`/players/${player.id}`} className="details-btn">
          Details
        </Link>
        <button className="del-btn" onClick={() => handleDelete(player.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
