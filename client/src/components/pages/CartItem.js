import './CartItem.css'
import { Row, Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartItem = () => {

    return (

        <Card className="cart-item">
            <Card.Body className="d-flex align-items-center justify-content-between">

                <article className="d-flex align-items-center">
                    <img src="https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png" alt="Samsung Galaxy S8" />
                    <Link to={'/phone'} className="d-flex flex-column" style={{ textDecoration: 'none' }}>
                        <h4 style={{ fontSize: '1.2em' }}>Samsung Galaxy S8</h4>
                        <p className="item-price">$399.99</p>
                        <Button className="remove-btn" size="sm" variant="secondary" >Remove</Button>
                    </Link>
                </article >

                <article className="d-flex flex-column align-items-center">
                    <Button className="amount-btn btn" variant="outline-secondary" size="sm"><i className="fas fa-chevron-up"></i></Button>
                    <p className="amount my-auto">1</p>
                    <Button className="amount-btn" variant="outline-secondary" size="sm"><i className="fas fa-chevron-down"></i></Button>
                </article >

            </Card.Body>
        </Card >

    )
}

export default CartItem