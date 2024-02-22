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
        <div className="details-container">
        {club === null ? (
          <p>Loading...</p>
        ) : (
           <div >
            <img src={club.imageURL} alt={`Club ${club.id}`}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }} />
            <h1>{club.name}</h1>
            <p>{club.location}</p>
            <p>{club.musicStyle}</p>
            <p>{club.googleMap}</p>
            <p>{club.hint}</p>
           
  
            <button onClick={deleteClub} >
              Delete Club
            </button>
           
            <Link to={`/editclublist/${club.id}`} >
            <button> Update</button>
            </Link>
           
            </div>
        )}
      </div>
    );


        
        
    
}
export default ClubDetails;


