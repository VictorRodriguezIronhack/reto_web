import './Cart.css'
import { Container, Row } from 'react-bootstrap'
import CartItem from './CartItem'

const Cart = () => {

    return (
        <Container>
            <h1 className="list-title mt-5 mb-5">Shopping Cart</h1>

            <CartItem />

        </Container>
    )
}

export default Cart