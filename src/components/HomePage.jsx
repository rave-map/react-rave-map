import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import CreateClub from "./CreateClub";


function HomePage() {
  return (
    <div className="HomePage">
      <h1>Welcome to the Rave Map</h1>
      
      <Link to="/clubs">
        <button>Club List</button>
      </Link>
      <Link to="/createclub">
        <button>Create Club</button>
      </Link>
     

    </div>
  );
}

export default HomePage;