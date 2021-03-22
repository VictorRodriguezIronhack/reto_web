import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {

    return (

        <div className="navWrapper">
            <Navbar className="navdesign" variant="dark" expand="md">
                <Link to="/">
                    <Navbar bg="transparent">
                        <Navbar.Brand href="#home"> - The Phone Cave -</Navbar.Brand>
                    </Navbar>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/" exact>
                            <Nav.Link as="span">Home</Nav.Link>
                        </NavLink>
                        <NavLink to="/phones-list">
                            <Nav.Link as="span">Phones</Nav.Link>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </div>
    )
}


export default Navigation