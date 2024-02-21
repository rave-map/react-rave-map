
  


import React from "react";
import Search from "./Search"; 
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
          <img src="bear-logo.png" alt="Logo" />
        </Link>

      </div>
      <div className="search-bar">
         {/* Render the Search component */}
        <Search />
      </div>
      <div className="menu">
        {/*Your menu items */}
      </div>
    </nav>
  );
}

export default NavBar;   
