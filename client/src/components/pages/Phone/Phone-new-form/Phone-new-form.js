import React, { Component } from 'react'
import FilesService from './../../../../service/upload.service'
import { Container, Form, Button } from 'react-bootstrap'
import PhoneService from './../../../../service/phone.service'

class PhoneForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            manufacturer: '',
            description: '',
            color: '',
            price: 0,
            imageFileName: '',
            screen: '',
            processor: '',
            ram: '',
        }

        this.filesService = new FilesService()
        this.phoneService = new PhoneService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.phoneService
            .savePhone(this.state)
            .then(res => { this.props.history.push('/teléfonos') })
            .catch(err => console.log(err))
    }

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])

        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({ ...this.state, imageFileName: response.data.secure_url })
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <div style={{ backgroundColor: "#FDFAF6" }}>

                    <Container style={{ paddingBottom: "120px", paddingTop: "50px" }}>
                        <h1> Add a new smartphone</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="manufacturer">
                                <Form.Label>Manufacturer</Form.Label>
                                <Form.Control type="text" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="color">
                                <Form.Label>Color</Form.Label>
                                <Form.Control type="text" name="color" value={this.state.color} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" name="price" value={this.state.price} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="screen">
                                <Form.Label>Screen</Form.Label>
                                <Form.Control type="text" name="screen" value={this.state.screen} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="processor">
                                <Form.Label>Processor</Form.Label>
                                <Form.Control type="text" name="processor" value={this.state.processor} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="ram">
                                <Form.Label>RAM</Form.Label>
                                <Form.Control type="number" name="ram" value={this.state.ram} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Button className="btn-dark" type="submit">Register the smartphone</Button>
                        </Form>
                    </Container>
                </div>
            </>
        )
    }
}

export default PhoneForm