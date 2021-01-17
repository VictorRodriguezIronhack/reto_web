import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import PhoneService from '../../../../service/phones.service'
import FilesService from '../../../../service/upload.service'
import Spinner from "../../../shared/Spinner/Spinner"

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
                screen: '',
                processor: '',
                ram: '',
                imageFileName: '',
            },       
            uploadingActive: false,        
        }
        this.phonesService = new PhoneService()
        this.filesService = new FilesService()     
    }

    handleInputChange = e => this.setState({ phone: { ...this.state.phone, [e.target.name]: e.target.value } })

    handleSubmit = e => {
        e.preventDefault()

        this.phonesService
            .savePhone(this.state.phone)
            .then(() => {
                this.props.updateList()
                this.props.closeModal()            
            })
            .catch(err => console.log({err})) 
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
            <Container className="account-edit">
                
                <Form onSubmit={this.handleSubmit} >
                    
                    {/* <!-- Name --> */}
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} minLength="2" maxLength="10" required/>
                    </Form.Group>

                    {/* <!-- Manufacturer --> */}
                    <Form.Group controlId="manufacturer">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control type="text" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange} minLength="2" maxLength="12" required/>
                    </Form.Group>

                    {/* <!-- Color --> */}
                    <Form.Group controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" name="color" value={this.state.color} onChange={this.handleInputChange} minLength="2" maxLength="30" required/>
                    </Form.Group>

                    {/* <!-- Price --> */}
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" value={this.state.price} onChange={this.handleInputChange} min="20" max="3000" required/>
                    </Form.Group>

                    {/* <!-- Ram --> */}
                    <Form.Group controlId="ram">
                        <Form.Label>Ram</Form.Label>
                        <Form.Control type="number" name="ram" value={this.state.ram} onChange={this.handleInputChange} min="2" max="256" required/>
                    </Form.Group>

                    {/* <!-- Screen --> */}
                    <Form.Group controlId="screen">
                        <Form.Label>Screen</Form.Label>
                        <Form.Control type="text" name="screen" value={this.state.screen} onChange={this.handleInputChange} minLength="2" maxLength="20" required/>
                    </Form.Group>

                    {/* <!-- Processor --> */}
                    <Form.Group controlId="processor">
                        <Form.Label>Processor</Form.Label>
                        <Form.Control type="text" name="processor" value={this.state.processor} onChange={this.handleInputChange} minLength="2" maxLength="20" required/>
                    </Form.Group>

                    {/* <!-- Description --> */}
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={4} type="textarea" name="description" value={this.state.description} onChange={this.handleInputChange} minLength="100" maxLength="400" required/>
                    </Form.Group>                
             
                    {/* <!-- Image --> */}
                    <Form.Group>
                        <Form.Label>Image (file) {this.state.uploadingActive && <Spinner />}</Form.Label>
                        <Form.File id="custom-file-translate-scss" label="image" lang="en" custom onChange={this.handleImageUpload}/>
                    </Form.Group>

                    <div className="text-center mb-2 mt-4">
                        <Button variant="light grey" className="" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Loading image' : 'Save'}</Button>
                    </div>
                    <small><i>* All fields are required</i></small>

                </Form>
        
            </Container>
        )
    }
}

export default PhoneForm