import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from 'react-router-dom';




function ClubDetails() {

    const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";

    const { id } = useParams();

    const [club, setClub] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            axios
                .get(`${API_URL}/${id}`)
                .then((response) => setClub(response.data))
                .catch((error) => console.log(error));
        }
    }, [id]);


    const deleteClub = () => {

        // console.log("silindi")
        axios.delete(`${API_URL}/${id}`)
            .then((response) => {
                console.log("club deleted")
                navigate(`/clubs`);


            })
            .catch((error) => {
                console.log("ERROR");
                console.log(error);
            });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '500px' }} >
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

                        <button onClick={deleteClub}>Delete Club</button>
                        <button>
                            <Link to={`/editclublist/${club.id}`}>Update</Link>
                        </button>

                    </>
                )}


        </div>
        </div>
    );
}
export default ClubDetails;


