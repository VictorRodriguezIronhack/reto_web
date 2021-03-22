import { Component } from 'react'
import PhoneService from '../../../service/phones.service'
import UploadService from '../../../service/upload.service' 
import Spinner from './../../Shared/Spinner/Spinner'

import { Form, Button, Container } from 'react-bootstrap'

class PhoneForm extends Component {

    constructor() {
        super()
        this.state = {
            phone: {
                name: '',
                manufacturer: '',
                description: '',
                color: '',
                price: 0,
                imageUrl: '',
                screen: '',
                processor: '',
                ram: ''
            },
            isUploading: false
        }

        this.phonesService = new PhoneService()
        this.uploadService = new UploadService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ phone: { ...this.state.phone, [name]: value } })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.phonesService
            .newPhone(this.state.phone)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
                this.props.handleAlert(true, 'Register saved', 'Phone has been saved into our Database')
            })
            .catch(err => console.log({err}))
    }

    handleFileUpload = e => {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])

        this.uploadService
            .uploadFile(uploadData)
            .then(response => {
                this.props.handleAlert(true, 'ImageUrl Uploaded', 'ImageUrl has been saved')
                this.setState({
                    isUploading: false,
                    phone: { ...this.state.phone, imageUrl: response.data.secure_url }
                })
            })
            .catch(err => console.log({err}))
    }


    render() {
        return (
            <Container>

                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control type="text" name="manufacturer" value={this.state.manufacturer} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" name="color" value={this.state.color} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" value={this.state.price} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Screen</Form.Label>
                        <Form.Control type="text" name="screen" value={this.state.screen} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Processor</Form.Label>
                        <Form.Control type="text" name="processor" value={this.state.processor} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ram</Form.Label>
                        <Form.Control type="text" name="ram" value={this.state.ram} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Imagen (File) {this.state.isUploading && <Spinner />}</Form.Label>
                        <Form.Control type="file" name="imageUrl" onChange={e => this.handleFileUpload(e)} />
                    </Form.Group>
                    <Button variant="dark" block type="submit" disabled={this.state.isUploading}>{this.state.isUploading ? 'Wait, uploading...' : 'Create new phone'}</Button>
                </Form>
            </Container>
        )
    }
}



export default PhoneForm