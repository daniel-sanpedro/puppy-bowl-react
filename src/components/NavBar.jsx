import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/">All Players</Link>
        </li>
        <li>
          <Link to="/new-player">Add New Player</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
