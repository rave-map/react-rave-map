import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 


import "./Clublist.css";

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
    
    <div className="clubList-container">
      {clubs.map((club) => (
        <div key={club.id} className="club-card">
          <img src="holder.js/100px180" alt={`Club ${club.id}`} />
          <div className="club-info">
            <h3>{club.name}</h3>
            <p>{club.description}</p>
            <Link to={`/clubs/${club.id}`} className="club-detail-link">
              Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClubList;
