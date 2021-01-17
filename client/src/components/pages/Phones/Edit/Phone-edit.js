import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import PhoneService from '../../../../service/phones.service'
import FilesService from '../../../../service/upload.service'
import Spinner from "../../../shared/Spinner/Spinner"

class PhoneEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: {},
            uploadingActive: false,
        }
        this.phonesService = new PhoneService()
        this.filesService = new FilesService()  
    }

    componentDidMount = () => this.phoneInfo()

    phoneInfo = () => {
        const id = this.props.match.params.id

        this.phonesService
            .getPhone(id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))  
    }

    handleInputChange = e => { this.setState({ phone: { ...this.state.phone, [e.target.name]: e.target.value } }) }

    handleSubmit = e => {  
        e.preventDefault()
        const id = this.props.match.params.id

        this.phonesService
            .editPhone(id, this.state.phone)
            .then(() => {
                this.props.updatePhone()      
                this.props.closeModal()              
            })
            .catch(err => console.log(err))
    }

    handleImageUpload = e => {
        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])     

        this.setState({ uploadingActive: true })

        this.filesService
            .uploadImage(uploadData)
            .then(response => {              
                this.setState({
                    phone: { ...this.state.phone, imageFileName: response.data.secure_url },
                    uploadingActive: false                   
                })            
            })
            .catch(err => console.log(err))
    }  

    render() {

        return (
            <Container className="">       
                <Form onSubmit={this.handleSubmit} >
                    
                    {/* <!-- Name --> */}
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.phone.name} onChange={this.handleInputChange} minLength="2" maxLength="10" required/>
                    </Form.Group>

                    {/* <!-- Manufacturer --> */}
                    <Form.Group controlId="manufacturer">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control type="text" name="manufacturer" value={this.state.phone.manufacturer} onChange={this.handleInputChange} minLength="2" maxLength="12" required/>
                    </Form.Group>

                    {/* <!-- Color --> */}
                    <Form.Group controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" name="color" value={this.state.phone.color} onChange={this.handleInputChange} minLength="2" maxLength="30" required/>
                    </Form.Group>

                    {/* <!-- Price --> */}
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" value={this.state.phone.price} onChange={this.handleInputChange} min="50" max="3000" required/>
                    </Form.Group>

                    {/* <!-- Ram --> */}
                    <Form.Group controlId="ram">
                        <Form.Label>Ram</Form.Label>
                        <Form.Control type="number" name="ram" value={this.state.phone.ram} onChange={this.handleInputChange} min="2" max="256" required/>
                    </Form.Group>

                    {/* <!-- Screen --> */}
                    <Form.Group controlId="screen">
                        <Form.Label>Screen</Form.Label>
                        <Form.Control type="text" name="screen" value={this.state.phone.screen} onChange={this.handleInputChange} minLength="2" maxLength="20" required/>
                    </Form.Group>

                    {/* <!-- Processor --> */}
                    <Form.Group controlId="processor">
                        <Form.Label>Processor</Form.Label>
                        <Form.Control type="text" name="processor" value={this.state.phone.processor} onChange={this.handleInputChange} minLength="2" maxLength="20" required/>
                    </Form.Group>

                    {/* <!-- Description --> */}
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={4} type="textarea" name="description" value={this.state.phone.description} onChange={this.handleInputChange} minLength="100" maxLength="400" required/>
                    </Form.Group>                
             
                    {/* <!-- Image --> */}
                    <Form.Group>
                        <Form.Label>Image (file) {this.state.uploadingActive && <Spinner />}</Form.Label>
                        <Form.File id="custom-file-translate-scss" label="image" lang="en" custom onChange={this.handleImageUpload}/>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="light grey" className="" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Loading image' : 'Save'}</Button>
                    </div>

                </Form>
            </Container>
        )
    }
}

export default PhoneEdit
