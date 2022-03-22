import { React, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import telephoneService from "../../services/telephones.services";
import PhoneCard from "../PhoneCard/PhoneCard";
import "./PhoneList.css";

function PhoneList() {
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
      <Row>
        {telephone?.map((phone) => (
          <Col md={3}>
            <PhoneCard
              manufacturer={phone.manufacturer}
              name={phone.name}
              imageFileName={phone.imageFileName}
              id={phone.id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default PhoneList;
