import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Navigation = () => {
    return (
        <Navbar bg="dark">
            <Link to="/" >
                <Navbar.Brand href="#home" className="text-white">
                <img
                    src={logo}
                    width="60"
                    height="60"
                    className="d-inline-block mr-3 ml-3"
                    alt="Phone Cave logo"                  
                />
                PHONE CAVE
                </Navbar.Brand>
            </Link>
        </Navbar>
    )
}  

export default Navigation;