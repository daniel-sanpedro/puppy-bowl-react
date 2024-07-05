const cohortCode = "2401-FTB-MT-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortCode}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (err) {
    console.error(err);
  }
}

export async function createPlayer(playerObj) {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    return result.data.newPlayer;
  } catch (err) {
    console.error(err);
  }
}

export async function delPlayer(playerId) {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    return result.data;
  } catch (err) {
    console.error(err);
  }
}
