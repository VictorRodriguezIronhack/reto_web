import { Card, Col, Button } from "react-bootstrap";
import "./TelephoneList.css";
import { React, useEffect, useState } from "react";
import telephoneService from "../../services/telephones.services";
import PhoneCard from "../../components/PhoneCard";

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
        <Col md={3}>
          <PhoneCard 
            manufacturer={phone.manufacturer}
            name={phone.name}
            imageFileName={phone.imageFileName}
            id={phone.id} />
        </Col>
      ))}
    </>
  );
}

export default TelephoneList;
