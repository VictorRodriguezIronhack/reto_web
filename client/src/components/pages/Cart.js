import './Cart.css'
import { Container, Row } from 'react-bootstrap'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

//COMPONENT
import CartItem from './CartItem'


// ACTIONS
import { addToCart, removeFromCart } from "../../redux/actions/cartActions"


const Cart = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => { }, []);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const removeFromCartHandler = id => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };


    return (
        <Container>
            <h1 className="list-title mt-5 mb-5">Shopping Cart</h1>

            {cartItems.length === 0 ?
                <>
                    <h2>Your Cart is empy</h2>
                    <Link to="/">Go Back</Link>
                </>
                : cartItems.map(elm =>

                    <CartItem key={elm.product}{...elm} qtyChangeHandler={qtyChangeHandler} removeHandler={removeFromCartHandler} />

                )
            }
        </Container>
    )
}

export default Cart