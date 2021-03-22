import { Component } from 'react'
import PhoneService from '../../../service/phones.service'
import { Container, Form, Button } from 'react-bootstrap'
import UploadService from '../../../service/upload.service'



class PhoneForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: {
                name: props.phone?.name || '',
                manufacturer: props.phone?.manufacturer || '',
                description: props.phone?.description || '',
                color: props.phone?.color || '',
                price: props.phone?.price || '',
                imageFileName: props.phone?.imageFileName || '',
                screen: props.phone?.screen || '',
                processor: props.phone?.processor || '',
                ram: props.phone?.ram || ''
            },
            
            isUploading: false
        }

        this.phoneService = new PhoneService()
        this.uploadService = new UploadService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ phone: { ...this.state.phone, [name]: value } })
    }

    handleSubmit(e) {

        e.preventDefault()

        if (this.props.phone) {
            this.phoneService
                .editPhone(this.props.phone?._id, this.state.phone)
                .then(() => this.finishAction())
                .catch(error => console.log(error))
        } else {
            this.phoneService
                .savePhone(this.state.phone)
                .then(() => this.finishAction())
                .catch(error => console.log(error))
        }
    }

    finishAction() {
        this.props.closeModal()
        this.props.refreshList()
    }


    handleFileUpload = e => {

        this.setState({ isUploading: true })

        const uploadData = new FormData()
        uploadData.append('imageFileName', e.target.files[0])

        this.uploadService
            .uploadFile(uploadData)
            .then(response => {
                this.setState({
                    isUploading: false,
                    phone: { ...this.state.phone, imageFileName: response.data.secure_url }
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Container>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.phone.name} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Manufacturer:</Form.Label>
                        <Form.Control type="text" name="manufacturer" value={this.state.phone.manufacturer} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" value={this.state.phone.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color:</Form.Label>
                        <Form.Control type="text" name="color" value={this.state.phone.color} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price:</Form.Label>
                        <Form.Control type="text" name="price" value={this.state.phone.price} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Screen:</Form.Label>
                        <Form.Control type="text" name="screen" value={this.state.phone.screen} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Processor:</Form.Label>
                        <Form.Control type="text" name="processor" value={this.state.phone.processor} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ram:</Form.Label>
                        <Form.Control type="text" name="ram" value={this.state.phone.ram} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Add image (File):{this.state.isUploading}</Form.Label>
                        <Form.Control type="file" name="imageFileName" onChange={e => this.handleFileUpload(e)} />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">Done</Button>
                </Form>
            </Container>
        )
    }

}

export default PhoneForm


