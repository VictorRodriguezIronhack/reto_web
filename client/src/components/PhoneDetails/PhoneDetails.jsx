import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PhoneDetails = ({ id, name, manufacturer, imageFileName, description, color, price, screen, processor, ram }) => {
  return (
    <>
      <Card>
        <Card.Img className="img" src={`images/${imageFileName}`} />
        <Card.Body>
          <Card.Title>
            <h4 key={id}>{name}</h4>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PhoneDetails;
