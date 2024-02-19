import React from "react";
import Search from "./Search"; 

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Your logo component or content */}
      </div>
      <div className="search-bar">
        {/* Render the Search component */}
        <Search />
      </div>
      <div className="menu">
        {/* Your menu items */}
      </div>
    </nav>
  );
}

export default NavBar;
