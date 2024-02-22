import React from "react";
import { Link } from "react-router-dom";



function HomePage() {
  return (
    
    <div className="HomePage">
      <h1 className="smokyBg">Rave <span className="Map">Map</span></h1>
      
      <div className="buttons-container">
        <Link to="/clubs">
          <button>Club List</button>
        </Link>
        <Link to="/createclub">
          <button>Create Club</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;