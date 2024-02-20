import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function Footer(){
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <div className="content">
    {/* Sayfa içeriği buraya gelebilir */}
  </div>
    <Card className=" list-group-item list-group-item-secondary p-1 text-primary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3 container-fluid fixed-bottom " style={{ height: '120px' }} >
      <ListGroup  className="  text-left ">
        <ListGroup.Item>About us</ListGroup.Item>
        <ListGroup.Item>Contact</ListGroup.Item>
        <ListGroup.Item>Club list</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );


}
export default Footer 