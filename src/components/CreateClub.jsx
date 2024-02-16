import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";

function CreateClub() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [musicStyle, setMusicStyle] = useState("");
  const [googleMap, setGoogleMap] = useState("");
  const [hint, setHint] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const createClubBox = { name, location, musicStyle, googleMap, hint, imageURL };
    axios
      .post(API_URL, createClubBox)
      .then((response) => {
        console.log("Club added successfully!");
        navigate("/clubs"); 
      })
      .catch((error) => {
        console.error("Error adding club:", error);
      });
  };

  return (
    <div className="CreateClub">
      <h3>Add Club</h3>
      <form onSubmit={handleSubmit}>
        <label>Club Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Location:</label>
        <textarea
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label>Music Style:</label>
        <input
          type="text"
          name="musicStyle"
          value={musicStyle}
          onChange={(e) => setMusicStyle(e.target.value)}
          required
        />

        <label>Google Map:</label>
        <input
          type="text"
          name="googleMap"
          value={googleMap}
          onChange={(e) => setGoogleMap(e.target.value)}
        />

        <label>Hint:</label>
        <input
          type="text"
          name="hint"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default CreateClub;
