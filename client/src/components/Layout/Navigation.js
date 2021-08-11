import { Navbar, Nav } from 'react-bootstrap'


const NavBar = () => {
    return (<Navbar className='navbar' bg="light" variant="light" expand="md">
        <Navbar.Brand href="/">Home</Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">


            </Nav>
        </Navbar.Collapse>
    </Navbar >)
}

export default NavBar