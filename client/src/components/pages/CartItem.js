import './CartItem.css'
import { Row, Button, Col, Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartItem = (props) => {

    return (

        <Row className="cart-item d-flex align-items-center justify-content-around">

            <img src={props.imageFileName} alt={props.name} />

            <Link to={`/phone/${props.product}`} className="d-flex flex-column" style={{ textDecoration: 'none' }}>
                <h4 style={{ fontSize: '1.2em' }}>{props.manufacturer} {props.name}</h4>
                <p style={{ margin: 0 }}>${props.price} €</p>
            </Link>

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

        </Row>

    )
}

export default CartItem