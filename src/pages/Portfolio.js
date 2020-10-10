import React from "react";
import "./Portfolio.css";
import project2 from "../components/img/project2.png";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default () => {
    return <main>
        
        <h3 className="sectionHeader">My Portfolio</h3>
        <div className="container">
            {/* <a href="https://expressbartender.herokuapp.com" target="_blank">
            <img src={project2} className="portfolioImage"/>
            </a> */}

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={project2} />
  <Card.Body>
    <Card.Title>Express Bartender</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>


        </main>
}