import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link className="nav-links-link" to="/">
          <h2>
            <img
              className="starwarLogo"
              src="http://imagizer.imageshack.com/a/img922/3783/oyvsRd.png"
            ></img>
          </h2>
        </Link>

        <ul className="nav-links">
          <Link className="nav-links-link" to="/films">
            <li>Films</li>
          </Link>
          <Link className="nav-links-link" to="/starships">
            <li>StarShips</li>
          </Link>
          <Link className="nav-links-link" to="/people">
            <li>People</li>
          </Link>
          <Link className="nav-links-link" to="/planets">
            <li>Planets</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
