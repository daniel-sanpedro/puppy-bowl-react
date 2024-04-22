import { PlayerDetails } from "../components/PlayerDetails";
import { NewPlayerForm } from "../components/NewPlayerForm";
import { useState, useEffect } from "react";
import { delPlayer, fetchAllPlayers, fetchSinglePlayer } from "../API";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchAllPlayers().then(setPlayers);
  }, []);

  function handleDetails(playerId) {
    fetchSinglePlayer(playerId).then(setPlayer);
  }

  function handleDelete(playerId) {
    delPlayer(playerId).then(() => {
      fetchAllPlayers().then(setPlayers);
    });
  }

  function handlePlayerAdded(updatedPlayers) {
    setPlayers(updatedPlayers);
  }

  function handleFilter(evt) {
    setFilter(evt.target.value);
  }

  return (
    <div className="container">
      <h2>Roster Page</h2>
      <p>Use the below to add some puppers </p>
      <div onClick={() => setPlayer({})}>
        <PlayerDetails player={player} className="player-container" />
        <div className="form-container">
          <NewPlayerForm onPlayerAdded={handlePlayerAdded} />
          <label htmlFor="name">Search:</label>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilter}
          />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {players
                .filter((player) => player.name.toLowerCase().includes(filter))
                .map((player) => {
                  return (
                    <player
                      key={player.id}
                      player={player}
                      onClick={handleDetails}
                      onDelete={handleDelete}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
