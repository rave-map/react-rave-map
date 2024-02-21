import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import ClubDetails from "./ClubDetails"; 
import { Card, Row, Col } from 'react-bootstrap';
const API_URL = "https://rave-map-backend-server.adaptable.app/clubs";



function ClubList(props) {
  const [clubs, setClubs] = useState([]);

  const getAllClubs = () => {
    axios.get(`${API_URL}`)
      .then((response) => setClubs(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllClubs();
  }, []);

  return (
    
    <div className="clubList p-3 container mx-auto text-center d-flex justify-content-center align-items-center " style={{ height: '600px' }} >
      <Row xs={1} md={3} className="g-4 row align-items-center">
        {clubs.map((club) => (
          <Col key={club.id}>
            <Card className=" container-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{club.name}</Card.Title>
                <Card.Text>{club.description}</Card.Text>
                <Link to={`/clubs/${club.id}`} className="btn btn-danger">
                  Detail
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ClubList;
