import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {

    return (
        <Navbar className='navbar' bg="dark">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand as='span'><img
                        src='https://res.cloudinary.com/deif2qotx/image/upload/v1647628751/pbs_yfnqd4.svg'
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="logo"
                    /></Navbar.Brand>
                </NavLink>
                <Nav.Link as='span' style={{ cursor: 'pointer', color: 'white' }}>Get random phone</Nav.Link>
            </Container>
        </Navbar>
    )
}
//onClick={handleModalOpen} 
export default Navigation
