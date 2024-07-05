import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API/index";

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const fetchedPlayer = await fetchSinglePlayer(id);
      setPlayer(fetchedPlayer);
    };
    fetchPlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="player-details">
      <h2>{player.name}</h2>
      <p>
        <strong>Breed:</strong> {player.breed}
      </p>
      <p>
        <strong>Status:</strong> {player.status}
      </p>
      <p>
        <strong>Team:</strong> {player.team?.name}
      </p>
      <p>
        <strong>Owner:</strong> {player.owner}
      </p>
      <img src={player.imageUrl} alt={player.name} />
    </div>
  );
};

export default SinglePlayer;
