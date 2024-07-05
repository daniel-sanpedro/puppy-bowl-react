import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllPlayers, delPlayer } from "../API/index";

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await fetchAllPlayers();
      setPlayers(players);
    };
    fetchPlayers();
  }, []);

  const handleDelete = async (id) => {
    await delPlayer(id);
    setPlayers(players.filter((player) => player.id !== id));
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2>Puppy Bowl Players</h2>
      <input
        type="text"
        placeholder="Search for a player"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="filter-input"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.breed}</td>
              <td>{player.status}</td>
              <td>
                <Link to={`/players/${player.id}`} className="details-btn">
                  Details
                </Link>
                <button
                  className="del-btn"
                  onClick={() => handleDelete(player.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlayers;
