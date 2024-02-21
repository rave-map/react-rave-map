import React from "react";
import { Link } from "react-router-dom";



function HomePage() {
  return (
    <div className="HomePage">
      <h1>Find Rave</h1>
      
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