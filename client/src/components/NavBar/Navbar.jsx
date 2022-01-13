import './NavBar.css'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <NavLink to="/" className="navbar-brand">Phones 4 All</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search by title"
                    className="me-1"
                    aria-label="Search"
                    />
                    <Button variant="info">Search</Button>
                </Form>

                <Nav>
                    <NavLink to="/" className="nav-link">Home</NavLink>

                    <Link to="/mostPopular" className="nav-link">Most Popular</Link>


                    <NavDropdown title="My Lists" id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Wish List</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Black List</Link>
                        </NavDropdown.Item>    
                    </NavDropdown>


                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Modify Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                    </NavDropdown>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="/user">Guillem</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar