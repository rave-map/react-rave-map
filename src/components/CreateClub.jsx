import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateClub.css";

const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";

function CreateClub() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [musicStyle, setMusicStyle] = useState("");
  const [googleMap, setGoogleMap] = useState("");
  const [hint, setHint] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);

  const handleFileUpload = async (e) => {
    setWaitingForImageUrl(true);
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/upload`

    const dataToUpload = new FormData();
    dataToUpload.append("file", e.target.files[0]);
    dataToUpload.append("upload_preset", import.meta.env.VITE_UNSIGNED_UPLOAD_PRESET)

    try {
      const response = await axios.post(url, dataToUpload);
      const imageUrl = response.data.secure_url;

      postImageUrlToDatabase(imageUrl);
      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const postImageUrlToDatabase = (imageUrl) => {
    console.log("Posting image URL to database:", imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createClubBox = {
      name,
      location,
      musicStyle,
      googleMap,
      hint,
      imageURL,
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
          <label htmlFor="Image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="Image"
            onChange={(e) => handleFileUpload(e)}
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
            Image URL:
          </label>
          <input
            type="text"
            className="form-control"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <button type="submit" >
          ADD
        </button>
      </form>
    </div>


  );
}

export default CreateClub;
