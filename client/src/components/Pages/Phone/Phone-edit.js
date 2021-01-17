import React, { Component } from 'react'
import phoneService from '../../../Service/Phone.service'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import FilesService from '../../../Service/Upload.service'
import './Phone-form.css'


class PhoneEdit extends Component {

    constructor(props) {

        super(props)

        this.state = {
            name: '',
            user: this.props.loggedUser ? this.props.loggedUser._id : null

        }
        this.phoneService = new phoneService()
        this.filesService = new FilesService()

    }
    componentDidMount = () => {
        const phoneId = this.props.match.params.phone_id
        this.setState({ id: phoneId })
        this.phoneService
            .getPhone(phoneId)
            .then(res => {

                this.setState({ image: res.data.image,  name: res.data.name, color: res.data.color, manufacturer: res.data.manufacturer, price:res.data.price, processor:res.data.processor, screen: res.data.screenSize, ram: res.data.ram, description:res.data.description, user:res.data.user })
            })
    }

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('image', e.target.files[0])


        this.filesService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({ image: response.data.secure_url, uploadingActive: false })

                console.log(response)
            })

            .catch(err => console.log('ERRORRR!', err))


    }


    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {

        e.preventDefault()

        this.phoneService
            .editPhone(this.state)
            .then(res => {
                this.props.history.push(`/phones`)

            })
            .catch(err => console.log('Ha habido un error', err))


    }

    delete = () => {
         console.log( this.state.id)
         this.phoneService
             .deletePhone(this.state.id)
             .then(res => {
             this.props.history.push('/phones')
         })
   }
    

    render() {

        return (
            <>
                <Container>

                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <h1>New phone</h1>
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
                                    <Form.Label>description</Form.Label>
                                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="color">
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control type="text" name="color" value={this.state.color} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="image">
                                    <Form.Label>Image (file)</Form.Label>
                                    <Form.Control type="file" onChange={this.handleImageUpload} />
                                    {this.state.image ? <img className="uploadedImg" src={this.state.image} /> : null}
                                </Form.Group>
                                <Form.Group controlId="sreen">
                                    <Form.Label>Screen size</Form.Label>
                                    <Form.Control type="text" name="screen" value={this.state.screen} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="processor">
                                    <Form.Label>Proccessor</Form.Label>
                                    <Form.Control type="text" name="processor" value={this.state.processor} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="ram">
                                    <Form.Label>RAM</Form.Label>
                                    <Form.Control type="text" name="ram" value={this.state.ram} onChange={this.handleInputChange} />
                                </Form.Group>
                                <br>

                                </br>
                                <Button variant="dark" type="submit" className="create" >Edit phone</Button>

                                <Button onClick={this.delete} className="create" >Delete phone</Button>

                                <br />

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default PhoneEdit
