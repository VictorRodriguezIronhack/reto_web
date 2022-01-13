import { Container, Navbar, Nav } from 'react-bootstrap';
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

function NavbarComp() {
    return (
       <> 
      <Navbar bg="light" variant="light">
        <Container >
          <Navbar.Brand href="/">PHONEY</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}

export default NavbarComp;
