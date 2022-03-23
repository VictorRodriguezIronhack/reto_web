import { React, useEffect, useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import telephoneService from "../../services/telephones.services";
import PhoneCard from "../PhoneCard/PhoneCard";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import "./PhoneList.css";

function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState();

  const loadTelephones = () => {
    telephoneService
      .getTelephones()
      .then(({ data }) => setPhones(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTelephones();
  }, []);


 const openModal = () => setShowModal(true)
 const closeModal = () => setShowModal(false)

  return (
    <>
      <Row>
        {phones?.map((phone) => (
          <Col md={3} key={phone.id}>
            <PhoneCard
              manufacturer={phone.manufacturer}
              name={phone.name}
              imageFileName={phone.imageFileName}
              id={phone.id}
              openModal={openModal}
            />
          </Col>
        ))}
      </Row>
      <Modal onClick={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPhone?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PhoneDetails />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PhoneList;
