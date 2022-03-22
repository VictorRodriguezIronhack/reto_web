import { Card, Col, Button } from "react-bootstrap";
import "./TelephoneList.css";
import { React, useEffect, useState } from "react";
import telephoneService from "../../services/telephones.services";

function TelephoneList() {
  const [telephone, setTelephone] = useState([]);

  const loadTelephones = () => {
    telephoneService
      .getTelephones()
      .then(({ data }) => setTelephone(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTelephones();
  }, []);

  return (
    <>
      {telephone?.map((phone) => (
        <Col md={6}>
          <Card>
            <Card.Img className="img" src={`images/${phone.imageFileName}`} />
            <Card.Body>
              <Card.Title>
                <h4 key={phone.id}>{phone.name}</h4>
              </Card.Title>
              <Card.Text>
                <p>{phone.manufacturer}</p>
              </Card.Text>
              <Button variant="outline-dark">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default TelephoneList;
