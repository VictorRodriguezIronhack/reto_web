import { Card, Col, Button } from "react-bootstrap";


const PhoneCard = ({id, name, manufacturer, imageFileName}) => {

  return (
    <>
          <Card>
            <Card.Img className="img" src={`images/${imageFileName}`} />
            <Card.Body>
              <Card.Title>
                <h4 key={id}>{name}</h4>
              </Card.Title>
              <Card.Text>
                <p>{manufacturer}</p>
              </Card.Text>
              <div className="d-grid gap-2">
                <Button variant="outline-dark">Details</Button>
              </div>
            </Card.Body>
          </Card>
    </>
  );
}

export default PhoneCard;
