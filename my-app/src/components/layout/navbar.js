import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="md" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Phones Cueva App</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/telefonos">
            Phones
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
