import { Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PhoneDetails.css"

const PhoneDetails = ({ id, name, manufacturer, imageFileName, description, color, price, screen, processor, ram }) => {
  return (
    <>
      <img className="imgPhoneDetails" src={`images/${imageFileName}`} />
      <p className="manufacturer">{manufacturer}</p>
      <p>{description}</p>
      <p>
        <strong>Price: </strong>
        {price} €{" "}
      </p>
      <p>
        <strong>Color: </strong> {color}
      </p>
      <p>
        <strong>Screen: </strong> {screen}
      </p>
      <p>
        <strong>Processor: </strong> {processor}
      </p>
      <p>
        <strong>Ram: </strong>
        {ram}
      </p>
    </>
  );
};

export default PhoneDetails;
