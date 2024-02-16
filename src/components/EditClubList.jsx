import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

 function EditClubList(){
    const API_URL= "https://rave-map-backend-server.adaptable.app/clubs"

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [musicStyle, setMusicStyle] = useState("");

    const { clubId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/clubs/${clubId}`)
            .then((response) => {
                setName(response.data.name);
                setLocation(response.data.location);
                setMusicStyle(response.data.musicStyle);
            })
            .catch((error) => {
                console.log("Error getting club details from the API...");
                console.log(error);
            });
    }, [clubId]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedDetails = {
            name: name,
            location: location,
            musicStyle: musicStyle
        };

        axios.put(`${API_URL}/clubs/${clubId}`, updatedDetails)
            .then((response) => {
                navigate(`/clubs/${clubId}`);
            })
            .catch((error) => {
                console.log("Error updating club...");
                console.log(error);
            });
    };

    const deleteClub = () => {
        axios.delete(`${API_URL}/clubs/${clubId}`)
            .then((response) => {
                navigate("/clubs");
            })
            .catch((error) => {
                console.log("Error deleting club...");
                console.log(error);
            });
    };

    return (
        <div className="EditClubPage">
            <h3>Edit the Club</h3>
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
                <button type="submit">Update Club</button>
            </form>
            <button onClick={deleteClub}>Delete Club</button>
        </div>
    );
}

export default EditClubPage;