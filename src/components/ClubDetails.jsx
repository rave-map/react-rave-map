import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



function ClubDetails() {

    const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";

    const { clubId } = useParams();

    const [club, setClub] = useState(null);

    const getClub = () => {
        axios.get(`${API_URL}/${clubId}`)
            .then((response) => {
                setClub(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getClub();
    }, [clubId]);

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
