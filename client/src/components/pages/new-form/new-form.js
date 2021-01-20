import React, { Component } from 'react'
import { Form, Button, Spinner, Container, Row, Col } from 'react-bootstrap'
import PhonesService from '../../../service/phones.service'
import UploadService from '../../../service/upload.service'
import { Link } from 'react-router-dom'
import './new-form.css'


export default class EditForm extends Component {

    constructor(props) {

        super(props)

        this.state = {
            phone: {
                name: '',
                manufacturer: '',
                description: '',
                color: '',
                price: '',
                screen: '',
                processor: '',
                ram: '',
                img: ''

            }
        }

        this.phonesService = new PhonesService()
        this.uploadService = new UploadService()
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

        this.phonesService
            .newPhone(this.state.phone)
            .then(res => this.props.history.push(`/telefonos`))
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

                                <Col sm={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} className='newPhone-Col'>

                                    <h2>Nuevo teléfono</h2>
                                    <Form onSubmit={this.handleSubmit} className='new-form'>

                                        <Form.Group>
                                            <p>Modelo</p>
                                            <Form.Control type="text" name="name" value={this.state.phone.name} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Marca</p>
                                            <Form.Control type="text" name="manufacturer" value={this.state.phone.manufacturer} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Descripción</p>
                                            <Form.Control as="textarea" rows={6} name="description" value={this.state.phone.description} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Color</p>
                                            <Form.Control type="text" name="color" value={this.state.phone.color} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Precio (en euros)</p>
                                            <Form.Control type="number" name="price" value={this.state.phone.price} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Pantalla</p>
                                            <Form.Control type="text" name="screen" value={this.state.phone.screen} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Procesador</p>
                                            <Form.Control type="text" name="processor" value={this.state.phone.processor} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <Form.Group>
                                            <p>Ram (gb)</p>
                                            <Form.Control type="text" name="ram" value={this.state.phone.ram} onChange={this.handleInputChange} />
                                        </Form.Group>

                                        <p>Imagen</p>
                                        {!this.state.uploadingActive ?
                                            <div className="img-upload-div">
                                                <Form.File name='img' className="file-upload" style={{ "color": "transparent" }} onChange={this.handleImageUpload}>
                                                </Form.File>
                                            </div>
                                            :
                                            <Spinner animation="border" role="status" />
                                        }

                                        <div className='newForm-btns'>

                                            <Button variant="outline-dark" type="submit">
                                                Añadir
                                        </Button>
                                            <Link to={`/telefonos`}>
                                                <Button variant="outline-dark" type="submit">
                                                    Cancelar
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