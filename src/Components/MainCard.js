import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import { Card, Col, Row } from "react-bootstrap";
import "./MainCard.css"; // Import the CSS file for custom styles
import { useNavigate } from "react-router-dom";

const MainCard = () => {
    const navigate = useNavigate()
  const cards = [
    {
      title: "JavaScript",
      content: "This is the content for card 1",
      path: "/javascriptinterview",
    },
    {
      title: "React Js",
      content: "This is the content for card 2",
      path: "/reactinterview",
    },
    {
      title: "Node Js",
      content: "This is the content for card 3",
      path: "/nodeinterview",
    },
    {
      title: "Java",
      content: "This is the content for card 4",
      path: "/javainterview",
    },
    {
      title: "Python",
      content: "This is the content for card 5",
      path: "/pythoninterview",
    },
    {
      title: "React Native",
      content: "This is the content for card 6",
      path: "/reactnative",
    },
  ];

  return (
    <div className="main-container">
      <h1 className="heading">Welcome To Zuppa Geo Navigation </h1>
      <div className="content-container">
        <Row>
          {cards.map((card, index) => (
            <Col xs={10} sm={6} md={4} key={index}>
              <Card className="mb-4 animate-card">
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.content}</Card.Text>
                  <Button variant="contained" onClick={()=> navigate(`${card.path}`)}>Get Started</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MainCard;
