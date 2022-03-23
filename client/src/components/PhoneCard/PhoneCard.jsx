import { React, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import './PhoneCard.css';

const PhoneCard = ({
  id,
  name,
  manufacturer,
  imageFileName,
  description,
  color,
  price,
  screen,
  processor,
  ram,
}) => {
  const [mustShowModal, setMustShowModal] = useState(false);
  const showModal = () => setMustShowModal(true);
  const hideModal = () => setMustShowModal(false);

  return (
    <>
      <Card className="phone-card">
        <Card.Img className="img" src={`images/${imageFileName}`} />
        <Card.Body>
          <Card.Title>
            <h4 key={id}>{name}</h4>
          </Card.Title>
          <Card.Text>{manufacturer}</Card.Text>
          <div className="d-grid gap-2">
            <Button variant="outline-dark" onClick={showModal}>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={mustShowModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{manufacturer} - {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PhoneDetails
            id={id}
            name={name}
            manufacturer={manufacturer}
            imageFileName={imageFileName}
            description={description}
            color={color}
            price={price}
            screen={screen}
            processor={processor}
            ram={ram}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PhoneCard;
