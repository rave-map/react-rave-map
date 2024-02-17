import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import ClubDetails from "./ClubDetails"; 
const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";



function ClubList(props) {
  const [clubs, setClubs] = useState([]);

  const getAllClubs = () => {
    axios.get(`${API_URL}`)
      .then((response) => setClubs(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllClubs();
  }, []);

  return (
    <div className="clubList">
      {clubs.map((club) => (
        <div className="Club box" key={club.id}>

         <Link to={`/clubs/${club.id}`}>
            <h3>{club.name}</h3>

          </Link>
        </div>
        
      ))}
      <ClubDetails />
    </div>
  );
}

export default ClubList;
