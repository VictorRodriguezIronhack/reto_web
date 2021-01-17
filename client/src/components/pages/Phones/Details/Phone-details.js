import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PhoneService from '../../../../service/phones.service'
import PhoneEdit from "../Edit/Phone-edit"
import Popup from "../../../shared/Popup/Popup"

class PhoneDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: {},       
            showModal: false,
           
        }
        this.phonesService = new PhoneService()
    }

    componentDidMount = () => this.displayPhone() 

    displayPhone = () => {
        const id = this.props.match.params.id

        this.phonesService
            .getPhone(id)
            .then(res => this.setState({ phone: res.data }))        
            .catch(err => console.log(err))   
    }

    deletePhone = () => {
        const id = this.props.match.params.id

        this.phonesService
            .deletePhone(id)
            .then(res => {
                this.setState({ phone: res.data })
                this.props.history.push(`/`)  
            })
            .catch(err => console.log(err))   
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (        
      
            <Container className="phone-container mt-5">               
           
                <Row>
                    <Col md={5} className="text-center">
                        {this.state.phone.name && <h2>{this.state.phone.name.toUpperCase()}</h2> }
                    </Col>
                </Row>
                    <hr></hr>                
                <Row>
                    <Col md={5} className="d-flex flex-column align-items-center text-center">
                
                        <img src={this.state.phone.imageFileName} className="mb-4 mt-4 phone-list-img"></img>             
               

                        <div>
                            <Button onClick={() => this.handleModal(true)} variant="light grey" size="sm" className="text-center">Edit</Button>                    
                            <Button onClick={() => this.deletePhone()} variant="black" size="sm" className="">Delete</Button>
                        </div>
                    </Col>
                                
                    <Col md={6} className="phone-details text-justify mt-4">
                        {this.state.phone.color && <p className="mt-1"><strong>Color:</strong>{this.state.phone.color.trim().replace(/^\w/, (c) => c.toUpperCase())}</p>}
                        <p><strong>Price:</strong>{this.state.phone.price}€</p>
                        <p><strong>Ram:</strong>{this.state.phone.ram}GB</p>
                        <p><strong>Screen:</strong>{this.state.phone.screen}</p>
                        <p><strong>Processor:</strong>{this.state.phone.processor}</p>
                        <p><strong>Manufacturer:</strong>{this.state.phone.manufacturer}</p>
                        <p><strong>Description:</strong>{this.state.phone.description}</p>        
                    </Col>
                </Row> 

                <Popup show={this.state.showModal} handleModal={this.handleModal}>
                    <PhoneEdit closeModal={() => this.handleModal(false)} updatePhone={this.displayPhone} {...this.props}/>
                </Popup>
        
            </Container> 
    
        )    
    }
}

export default PhoneDetails