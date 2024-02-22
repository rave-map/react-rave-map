import React from "react";
import Search from "./Search"; 
import MusicPlayer from "./MusicPlayer"; // Import the MusicPlayer component
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function NavBar() {
  return (
    <nav className="navbar">
       <div className="music-icon">
        <MusicPlayer />
      </div>
      <div className="logo">
        <Link to="/">
          <img src="bear-logo.png" alt="Logo" />
        </Link>
       
      </div>
      <div className="search-bar">
        <Search />
      </div>
      
    </nav>
  );
}

export default NavBar;
