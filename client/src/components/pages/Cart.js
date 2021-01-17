import './Cart.css'
import { Container, Row, Button, Col } from 'react-bootstrap'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

//COMPONENT
import CartItem from './CartItem'


// ACTIONS
import { addToCart, removeFromCart } from "../../redux/actions/cartActions"


const Cart = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => { }, [])

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeFromCartHandler = id => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2)
    }


    return (
        <Container>
            <h1 className="list-title mt-5 mb-5">Shopping Cart</h1>

            {cartItems.length === 0 ?
                <>
                    <h2>Your Cart is empty</h2>
                    <Link to="/" className="btn btn-secondary">Go Back</Link>
                </>
                : cartItems.map(elm =>
                    <CartItem key={elm.product}{...elm} qtyChangeHandler={qtyChangeHandler} removeHandler={removeFromCartHandler} />
                )
            }
            <hr />
            <Row className="d-flex justify-content-between align-items-baseline">
                <Col className="d-flex justify-content-around ">
                    <p><strong>Subtotal: </strong> ({getCartCount()}) items</p>
                    <p>{getCartSubTotal()} €</p>
                </Col>
                <Col>
                    <Button className="amount-btn btn" variant="secondary" size="sm"> Checkout</Button>
                </Col>
            </Row>

        </Container>
    )
}

export default Cart