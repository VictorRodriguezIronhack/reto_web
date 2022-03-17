import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import "./Navigation.css"

function Navigation() {

    return (
        < Navbar bg="dark" variant='dark' expand="lg" style={{ marginBottom: 30 }}>
            <Container>
                <NavLink to="/" className="navlink">
                    <Navbar.Brand as="span">Phones Page</Navbar.Brand>
                </NavLink>
            </Container>
        </Navbar >
    )
}

export default Navigation