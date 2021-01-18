import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="lights" className='shadow' variant='light'>
            <Link to='/'><Navbar.Brand as='div'>The Phone Cave</Navbar.Brand></Link>
            <Nav className="ml-auto">
                <Link to='/'><Nav.Link as='div'>Inicio</Nav.Link></Link>
                <Link to='/telefonos'><Nav.Link as='div'>Teléfonos</Nav.Link></Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar