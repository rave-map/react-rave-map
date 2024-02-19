import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function ClubDetails() {

    const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";

    const { id } = useParams();

    const [club, setClub] = useState(null);

    useEffect(() => {
    if (id) {
      axios
        .get(`${API_URL}/${id}`)
        .then((response) => setClub(response.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

    return (
        <div className="ClubDetails">
            {club === null
                ? <p>Loading...</p>
                : (
                    <>
                        <h1>{club.name}</h1>
                        <p>{club.location}</p>
                        <p>{club.musicStyle}</p>
                        <p>{club.googleMap}</p>
                        <p>{club.hint}</p>
                        <p>{club.imageURL}</p>


                    </>
                )}


        </div>
    );
}
export default ClubDetails; 


