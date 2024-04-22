import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <button className="details-btn">
            <Link to="/">HOME</Link>
          </button>
          <button className="details-btn">
            <Link to="/roster">ROSTER</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
}
