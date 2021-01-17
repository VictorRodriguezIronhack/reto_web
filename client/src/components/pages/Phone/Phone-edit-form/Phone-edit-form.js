import React, { Component } from 'react'
import PhoneService from './../../../../service/phone.service'
import { Container, Form, Button } from 'react-bootstrap'

class PhoneForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: {
                name: '',
                manufacturer: '',
                description: '',
                color: '',
                price: '',
                imageFileName: '',
                screen: '',
                processor: '',
                ram: '',
            },
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {

        const phone_id = this.props.match.params.phone_id

        this.phoneService
            .getPhone(phone_id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => this.setState({ phone: { ...this.state.phone, [e.target.name]: e.target.value } })

    handleSubmit = e => {

        const phone_id = this.props.match.params.phone_id
        e.preventDefault()

        this.phoneService
            .editPhone(phone_id, this.state.phone)
            .then(res => this.props.history.push('/teléfonos'))
            .catch(err => console.log(err))
    }


    render() {

        return (
            <div>
                <Container style={{ paddingBottom: "120px", paddingTop: "50px" }}>
                    <h1> Add a new smartphone</h1>
                    <hr />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.phone.name} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="manufacturer">
                            <Form.Label>Manufacturer</Form.Label>
                            <Form.Control type="text" name="manufacturer" value={this.state.phone.manufacturer} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="description" value={this.state.phone.description} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="color">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" name="color" value={this.state.phone.color} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" value={this.state.phone.price} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="screen">
                            <Form.Label>Screen</Form.Label>
                            <Form.Control type="text" name="screen" value={this.state.phone.screen} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="processor">
                            <Form.Label>Processor</Form.Label>
                            <Form.Control type="text" name="processor" value={this.state.phone.processor} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="ram">
                            <Form.Label>RAM</Form.Label>
                            <Form.Control type="number" name="ram" value={this.state.phone.ram} onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={this.handleImageUpload} />
                        </Form.Group>
                        <Button className="btn-dark" type="submit">Register the smartphone</Button>
                    </Form>
                </Container>
            </div >
        )
    }
}

export default PhoneForm