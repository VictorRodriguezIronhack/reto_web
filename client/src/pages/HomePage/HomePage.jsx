import { React, useEffect, useState } from "react";
import telephoneService from "../../services/telephones.services";
import "./HomePage.css"
import { Container, Row } from "react-bootstrap";
import PhoneList from "../TelephoneList/PhoneList";

function HomePage() {
  

  return (
    <>
      <Container>
        <Row>
          <h2>The phone shop</h2>
          <h3>Available phones 📱</h3>
        </Row>
        <PhoneList />
      </Container>
    </>
  );
}

export default HomePage;
