import React, { Component } from 'react'
import { Form, Button, Container, Col } from 'react-bootstrap'

import PhonesService from '../../../services/phone.services'


class NewPhone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            manufacturer: '',
            description: '',
            color: '',
            price: 0,
            imageFileName: 'mike-meyers-unsplash-yellow-phone.jpg',
            screen: '',
            processor: '',
            ram: 0
        }
        this.phoneService = new PhonesService()
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.phoneService
            .newPhone(this.state)
            .then(() => {
                this.props.reloadPhones()
                this.props.closeModal()
            })
            .catch(err => new Error('ERROR CREATING PHONE', err))
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="manufacturer">
                            <Form.Label>Manufacturer</Form.Label>
                            <Form.Control type="text" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInput} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInput} />
                    </Form.Group>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="color">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" name="color" value={this.state.color} onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" value={this.state.price} onChange={this.handleInput} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="screen">
                            <Form.Label>Screen</Form.Label>
                            <Form.Control type="text" name="screen" value={this.state.screen} onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="processor">
                            <Form.Label>Processor</Form.Label>
                            <Form.Control type="text" name="processor" value={this.state.processor} onChange={this.handleInput} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="ram">
                            <Form.Label>Ram</Form.Label>
                            <Form.Control type="number" name="ram" value={this.state.ram} onChange={this.handleInput} />
                        </Form.Group>
                    </Form.Row>
                    
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default NewPhone