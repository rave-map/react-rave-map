import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateClub.css";

const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";

function CreateClub() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [musicStyle, setMusicStyle] = useState("");
  const [googleMap, setGoogleMap] = useState("");
  const [hint, setHint] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const createClubBox = {
      id:id,
      name: name,
      location:location,
      musicStyle:musicStyle,
      googleMap:googleMap,
      hint:hint,
      imageURL:imageURL,
    };

    axios
      .post(API_URL, createClubBox)
      .then((response) => {
        console.log("Club added successfully!");
        handleClubAdded(createClubBox);
        navigate("/clubs");
      })
      .catch((error) => {
        console.error("Error adding club:", error);
      });
  };


  const handleFileUpload = (e) => {
    // disable the submit form button till we get the image url from Cloudinary
    setWaitingForImageUrl(true);

    //check if we receive the file path correctly
    console.log("The file to be uploaded is: ", e.target.files[0]);

    // create url including your personal Cloudinary Name
    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/upload`;

    const dataToUpload = new FormData();
    // properties needs to have those specific names!!!
    dataToUpload.append("file", e.target.files[0]);
    // VITE_UNSIGNED_UPLOAD_PRESET => name of the unsigned upload preset created in your Cloudinary account
    dataToUpload.append("upload_preset", import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET);

    axios
      .post(url, dataToUpload)
      .then((response) => {
        // to see the structure of the response
        console.log('RESPONSE ', response.data); 
        // the image url is stored in the property secure_url
        setImageURL(response.data.secure_url); 
        setWaitingForImageUrl(false);
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
  };
  

  

  const handleClubAdded = (newClub) => {
    // Handle adding new club
  };

  

  return (
    <div className="container">


      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Club Name:
          </label>
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
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <textarea
            className="form-control"
            id="location"
            rows="3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="musicStyle">
            Music Style:
          </label>
          <input
            type="text"
            className="form-control"
            id="musicStyle"
            value={musicStyle}
            onChange={(e) => setMusicStyle(e.target.value)}
            required
          />
        </div>

        

        <div>
          <label htmlFor="googleMap" className="form-label">
            Google Map:
          </label>
          <input
            type="text"
            className="form-control"
            id="googleMap"
            value={googleMap}
            onChange={(e) => setGoogleMap(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="hint">
            Hint:
          </label>
          <input
            type="text"
            className="form-control"
            id="hint"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="imageURL" className="form-label">
            Image :
          </label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => handleFileUpload(e)}

          />
          {imageURL && <img src={imageURL} alt="my cloudinary image"  style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}/>}
        </div>

        <button type="submit" >
          ADD
        </button>
      </form>
    </div>


  );
}

export default CreateClub;


/*<div>
          <label htmlFor="Image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="Image"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>*/