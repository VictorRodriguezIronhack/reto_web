import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhoneCard from "../../components/phoneCard/PhoneCard";
import phoneService from "../../services/phone.service";

function PhonePage() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    phoneService
      .getAllPhones()
      .then((response) => setPhones(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center">List Phones</h1>
      <Row>
        {phones.map((phone) => {
          return (
            <Col md={3} className="my-3">
              <PhoneCard
                id={phone.id}
                name={phone.name}
                description={phone.description}
                manufacturer={phone.manufacturer}
                price={phone.price}
                imageFileName={phone.imageFileName}
                screen={phone.screen}
                processor={phone.processor}
                ram={phone.ram}
              ></PhoneCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default PhonePage;
