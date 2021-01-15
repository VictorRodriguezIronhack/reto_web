import React, { Component } from 'react'
import PhoneService from '../../../service/phone.service'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export default class PhoneEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: this.props.phone.title,
            manufacturer: this.props.phone.manufacturer,
            description: this.props.phone.description,
            color: this.props.phone.color,
            price: this.props.phone.price,
            imageUrl: this.props.phone.imageUrl,
            screenSize: this.props.phone.screenSize,
            processor: this.props.phone.processor,
            ramMemory: this.props.phone.ramMemory,
            details: this.props.phone.details,
            error: ''
        }
        this.phoneService = new PhoneService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.phoneService
            .editPhone(this.props.phone._id, this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err=> this.setState({error: 'An error occurred while edit the phone. Please try it again.' }))
    }

    render() {
        return (
            <Container className='phone-form'>
                <h1 style={{ fontWeight: '400' }}>📱 Edit phone details 📱 </h1>
                <hr />
                <h5 style={{ color: 'red', textAlign: 'center' }}>{this.state.error}</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Phone name</Form.Label>
                        <Form.Control type="text" minLength="3" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="manufacturer">
                        <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Manufacturer</Form.Label>
                        <Form.Control type="text" minLength="3" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Description</Form.Label>
                        <Form.Control type="text" as="textarea" rows={5} minLength="50" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="processor">
                                <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Processor</Form.Label>
                                <Form.Control type="text" minLength="2" name="processor" value={this.state.processor} onChange={this.handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="ramMemory">
                                <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>RAM Memory</Form.Label>
                                <Form.Control type="number" minLength="1" name="ramMemory" value={this.state.ramMemory} onChange={this.handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="color">
                                <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Color</Form.Label>
                                <Form.Control type="text" minLength="1" name="color" value={this.state.color} onChange={this.handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="screenSize">
                                <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Screen size</Form.Label>
                                <Form.Control type="text" minLength="3" name="screenSize" value={this.state.screenSize} onChange={this.handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                            <Form.Group controlId="details">
                                <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>More details</Form.Label>
                                <Form.Control type="text" as="textarea" rows={5} minLength="1" name="details" value={this.state.details} onChange={this.handleInputChange} />
                            </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="price">
                                <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Price</Form.Label>
                                <Form.Control type="number" minLength="1" name="price" value={this.state.price} onChange={this.handleInputChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="imageUrl">
                        <Form.Label style={{ marginLeft: '10px', fontSize: '1.2em', fontWeight: '300' }}>Phone image</Form.Label>
                        <Form.Control type="text" minLength="5" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark btn-block" type="submit">Confirm edit</Button>
                </Form>
            </Container>
        )
    }
}