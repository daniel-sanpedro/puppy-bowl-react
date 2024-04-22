import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";

function App() {
  // TODO
  // Add form to create a new player
  // add the player to all players list without refreshing the page

  // TODO
  // Add styles from previous Puppy Bowl
  // or styles from scratch

  // TODO
  // Add try/catch around functions in useEffect
  // to handle errors
  // HINT: const [hasError, setHasError] = useState(false)

  return (
    <>
      <h1>Puppy Bowl</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
      </Routes>
    </>
  );
}

export default App;
