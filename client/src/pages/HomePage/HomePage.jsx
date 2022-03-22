import { React, useEffect, useState } from "react";
import telephoneService from "../../services/telephones.services";
import { Container, Row } from "react-bootstrap";
import TelephoneList from "../TelephoneList/TelephoneList";
import "./HomePage.css"

function HomePage() {
  

  return (
    <>
      <Container>
        <Row>
          <h1>The phone shop</h1>
          <h3>Available phones 📱</h3>
        </Row>
        <TelephoneList />
      </Container>
    </>
  );
}

export default HomePage;
