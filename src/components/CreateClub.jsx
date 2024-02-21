import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import "./CreateClub.css";

const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";

function CreateClub() {

  const [club, setClub]= useState("");
  
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
        handleClubAdded(createClubBox);
        setClub([createClubBox, ...club]);
        

        
        navigate("/clubs"); 
      })
      .catch((error) => {
        console.error("Error adding club:", error);
      });
  };

const handleClubAdded= (newClub) => {
  setClub([newClub,...club]);
};


  return (

    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h3 className="text-center mb-4">Add Club</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Club Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location:</label>
              <textarea
                className="form-control"
                id="location"
                rows="3"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="musicStyle" className="form-label">Music Style:</label>
              <input
                type="text"
                className="form-control"
                id="musicStyle"
                value={musicStyle}
                onChange={(e) => setMusicStyle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="googleMap" className="form-label">Google Map:</label>
              <input
                type="text"
                className="form-control"
                id="googleMap"
                value={googleMap}
                onChange={(e) => setGoogleMap(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="hint" className="form-label">Hint:</label>
              <input
                type="text"
                className="form-control"
                id="hint"
                value={hint}
                onChange={(e) => setHint(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="imageURL" className="form-label">Image URL:</label>
              <input
                type="text"
                className="form-control"
                id="imageURL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">ADD</button>
          </form>
        </div>
      </div>
    </div>
  );
}
   /* <div className="CreateClub">
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

 
}*/

export default CreateClub;
