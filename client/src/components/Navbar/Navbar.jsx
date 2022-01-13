import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="">
          <i className="bi bi-phone-vibrate fs-2"></i>
          <span className="fs-3"> Phones</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
