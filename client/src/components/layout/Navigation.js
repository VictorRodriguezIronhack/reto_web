import './Navigation.css'
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Navigation = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const cartCounter = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }


    return (

        <Navbar bg="light" expand="md" className="menu" style={{ borderBottom: '1px solid #ddd' }}>
            <Link to="/"><i className="fas fa-phone-alt mr-3" />
                <Navbar.Brand>The Phone Cave</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/cart" className="btn-cart">
                        <i className="fas fa-shopping-cart mr-2" />Shopping Cart<span className="cart-counter"> {cartCounter()}</span>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )

}

export default Navigation