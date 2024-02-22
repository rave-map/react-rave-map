
  


import React from "react";
import Search from "./Search"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
          <img src="bear-logo.png" alt="Logo" />
        </Link>

      </div>
      <div className="search-bar">
        <Search />
      </div>
      <FontAwesomeIcon icon={faMusic} />
    </nav>
  );
}

export default NavBar;   
