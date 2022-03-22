import { React } from "react";
import { Container, Row } from "react-bootstrap";
import PhoneList from "../../components/PhoneList/PhoneList";
import "./HomePage.css"

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
