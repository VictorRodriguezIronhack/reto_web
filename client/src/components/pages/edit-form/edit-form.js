import React, { Component } from 'react'
import { Form, Button, Spinner, Container, Row, Col } from 'react-bootstrap'
import PhonesService from './../../../service/phones.service'
import UploadService from './../../../service/upload.service'
import { Link } from 'react-router-dom'
import './edit-form.css'



export default class EditForm extends Component {

    constructor(props) {

        super(props)

        this.state = {
            phoneName: undefined,
            phone: undefined
        }

        this.phonesService = new PhonesService()
        this.uploadService = new UploadService()
    }

    componentDidMount() {
        this.phonesService
            .getPhoneDetails(this.props.match.params.id)
            .then(res => this.setState({ phone: res.data, phoneName: res.data.name }))
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        this.setState({
            phone: {
                ...this.state.phone,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {

        e.preventDefault()

        console.log(this.props)
        this.phonesService
            .updatePhone(this.props.match.params.id, this.state.phone)
            .then(res => this.props.history.push(`/telefonos/${res.data._id}`))
            .catch(err => console.log(err))
    }


    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])

        this.setState({ uploadingActive: true })

        this.uploadService
            .uploadImage(uploadData)
            .then(response => {
                this.setState({
                    phone: { ...this.state.phone, img: response.data.secure_url },
                    uploadingActive: false
                })
            })
            .catch(err => console.log('Error:', err))
    }

    render() {
        return (
            <>
                {this.state.phone ?
                    <>
                        <Container className='newPhone-Container'>

                            <Row>

                                <Col md={{ span: 6, offset: 3 }} className='newPhone-Col'>

                                    <h2>Editar {this.state.phoneName}</h2>
                                    <Form onSubmit={this.handleSubmit} className='new-form'>

                                        <Form.Group>
                                            <p>Modelo:</p>
                                            <Form.Control type="text" name="name" value={this.state.phone.name} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Marca:</p>
                                            <Form.Control type="text" name="manufacturer" value={this.state.phone.manufacturer} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Descripción:</p>
                                            <Form.Control as="textarea" rows={6} name="description" value={this.state.phone.description} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Color:</p>
                                            <Form.Control type="text" name="color" value={this.state.phone.color} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Precio (en euros):</p>
                                            <Form.Control type="number" name="price" value={this.state.phone.price} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Pantalla:</p>
                                            <Form.Control type="text" name="screen" value={this.state.phone.screen} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Procesador:</p>
                                            <Form.Control type="text" name="processor" value={this.state.phone.processor} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Ram:</p>
                                            <Form.Control type="text" name="ram" value={this.state.phone.ram} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <p>Imagen:</p>
                                        {!this.state.uploadingActive ?
                                            <>
                                                <Form.File name='img' onChange={this.handleImageUpload}>
                                                </Form.File>
                                            </>
                                            :
                                            <Spinner animation="border" role="status" />
                                        }

                                        <div className='newForm-btns'>
                                            <Button variant="outline-dark" type="submit">
                                                Submit
                                        </Button>
                                            <Link to={`/telefonos/${this.state.phone._id}`}>

                                                <Button variant="outline-dark" type="submit">
                                                    Atrás
                                        </Button></Link>
                                        </div>

                                    </Form>

                                </Col>

                            </Row>

                        </Container>

                    </>
                    :
                    <Spinner animation="border" role="status"></Spinner>
                }
            </>
        )
    }
}