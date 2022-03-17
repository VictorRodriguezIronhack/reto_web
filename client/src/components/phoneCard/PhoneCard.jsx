import "./PhoneCard.css";

import { Card } from "react-bootstrap";

import { React } from "react";

import { Link } from "react-router-dom";

function PhoneCard({
  id,
  name,
  description,
  manufacturer,
  price,
  imageFileName,
  screen,
  processor,
  ram,
}) {
  return (
    <Card className="rounded mx-auto phone-card" style={{ width: "18rem" }}>
      <Card.Header className="p-0 mx-auto">
        <Link to={`/phones/${id}`}>
          <img src={require(`../../images/${imageFileName}`)} alt="phone" />
        </Link>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fs-3 fw-bold">{name}</Card.Title>
        <Card.Text className="ellipsis">
          <span className="fw-bold">Description: </span>
          {description}
        </Card.Text>
        <Card.Text className="text-dark">
          <span className="fw-bold">Manufacturer: </span>
          {manufacturer}
        </Card.Text>
        <Card.Text className="text-dark">
          <span className="fw-bold">Price: € </span>
          {price}
        </Card.Text>
        <Card.Text className="text-dark">
          <span className="fw-bold">screen: </span>
          {screen}
        </Card.Text>
        <Card.Text className="text-dark">
          <span className="fw-bold">processor: </span>
          {processor}
        </Card.Text>
        <Card.Text className="text-dark">
          <span className="fw-bold">Ram: </span>
          {ram}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PhoneCard;
