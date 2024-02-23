import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditClubList.css";


 function EditClubList(){
    const API_URL= "https://rave-map-backend-server.adaptable.app/clubs"
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [musicStyle, setMusicStyle] = useState("");
    const [hint , setHint]= useState("");
    const [imageURL, setImageURL ]= useState("");
    const [googleMaps, setGoogelMaps ]= useState("");

    const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/${id}`)
            .then((response) => {
                setName(response.data.name);
                setLocation(response.data.location);
                setMusicStyle(response.data.musicStyle);
            })
            .catch((error) => {
                console.log("Error getting club details from the API...");
                console.log(error);
            });
    }, [id]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedDetails = {
            name: name,
            location: location,
            musicStyle: musicStyle,
            hint:hint,
            imageURL:imageURL,
            googleMaps:googleMaps
        };
        axios.put(`${API_URL}/${id}`, updatedDetails)
            .then((response) => {
                navigate(`/clubs`);
            })
            .catch((error) => {
                console.log("Error updating club...");
                console.log(error);
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
    /*const deleteClub = () => {
        axios.delete(`${API_URL}/clubs/${clubId}`)
            .then((response) => {
                navigate("/clubs");
            })
            .catch((error) => {
                console.log("Error deleting club...");
                console.log(error);
            });
    };*/
    return (
        <div className="EditClubPage">
         
            <form onSubmit={handleFormSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label>Music Style:</label>
                <input
                    type="text"
                    name="musicStyle"
                    value={musicStyle}
                    onChange={(e) => setMusicStyle(e.target.value)}
                />
                <label>Hint:</label>
                <input
                    type="text"
                    name="location"
                    value={hint}
                    onChange={(e) => setHint(e.target.value)}
                />
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
                <button type="submit">Update Club</button>
            </form>
        </div>
    );
}
export default EditClubList;