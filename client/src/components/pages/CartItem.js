import './CartItem.css'
import { Row, Button, Card, Col, Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartItem = (props) => {

    return (

        <Card className="cart-item">
            <Card.Body className="d-flex align-items-center justify-content-between">

                <article className="d-flex align-items-center">
                    <img src={props.imageFileName} alt={props.name} />
                    <Link to={`/phone/${props.product}`} className="d-flex flex-column" style={{ textDecoration: 'none' }}>
                        <h4 style={{ fontSize: '1.2em' }}>{props.name}</h4>
                        <p className="item-price">{props.price} €</p>
                    </Link>
                </article >

                <ListGroup.Item className="d-flex ">
                    <p className="mr-3 my-auto">Quantity</p>
                    <Form.Control as="select" defaultValue="Choose..." value={props.qty} onChange={(e) => props.qtyChangeHandler(props.product, e.target.value)}>
                        {[...Array(props.stock).keys()].map(elm => (
                            <option key={elm + 1} value={elm + 1}>
                                {elm + 1}
                            </option>
                        ))}
                    </Form.Control>
                </ListGroup.Item>
                <Button className="amount-btn" variant="outline-secondary" size="sm" onClick={() => props.removeHandler(props.product)}><i className="fas fa-trash"></i></Button>
            </Card.Body>
        </Card >

    )
}

export default CartItem