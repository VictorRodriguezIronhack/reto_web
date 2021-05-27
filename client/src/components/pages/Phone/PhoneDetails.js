import './PhoneDetails.css'
import { Component } from 'react'
import PhoneService from '../../../service/phone.service'
import OrderService from '../../../service/order.service'
import { Container, Row, Col, Spinner, Form, Button } from 'react-bootstrap'

class PhoneDetails extends Component {
    constructor() {
        super()
        this.state = {
            phone: undefined,
            quantity: 0
        }
        this.phoneService = new PhoneService()
        this.orderService = new OrderService()
    }

    componentDidMount() {
        this.getPhone()
    }

    getPhone() {
        this.phoneService
            .getOnePhone(this.props.match.params.id)
            .then(response => this.setState({phone: response.data}))
            .catch(err => console.log(err))
    }

    handleInputChange(e) {
        const quantity = e.target.value
        this.setState({ quantity: quantity })
    }

    handleSubmit(e) {
        e.preventDefault()
        const product = this.state.phone._id
        const quantity = this.state.quantity
        this.orderService
            .createOrder({product, quantity})
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    render() {
        const phone = this.state.phone
        return(
            <Container>
                {!this.state.phone? <Spinner animation="border" role="status"></Spinner> : 
                <Row className="phone-details">
                    <Col md={6}>
                        <img src={phone.imageFileName} alt={phone.name}></img>
                    </Col>
                    <Col md={6}>
                        <h1>{phone.name}</h1>
                        <h2>$ {phone.price}</h2>
                        <p><i>{phone.manufacturer}</i></p>
                        <p>{phone.description}</p>
                        <p><b>Color:</b> {phone.color}</p>
                        <p><b>Screen:</b> {phone.screen}</p>
                        <p><b>Processor:</b> {phone.processor}</p>
                        <p><b>Ram:</b> {phone.ram}</p>
                         <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Row className="add-cart-bar">
                                <Col xs={3}>
                                    <Form.Group controlId="quantity">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="number" min="1" value={this.state.quantity} onChange={e => this.handleInputChange(e)} name="quantity" />
                                    </Form.Group>
                                </Col>
                                <Col xs={3}>
                                    <Button variant="dark" type="submit">Add to Cart</Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>}
            </Container>
        )
    }
}

export default PhoneDetails