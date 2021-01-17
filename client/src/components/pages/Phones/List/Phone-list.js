import React, { Component } from 'react'
import { Container, Row, Button, Col } from 'react-bootstrap'
import PhoneService from '../../../../service/phones.service'
import PhoneCard from "./Phone-card"
import PhoneForm from '../New/Phone-form'
import Popup from "../../../shared/Popup/Popup"

class PhoneList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phones: [],              
            showModal: false            
        }
        this.phonesService = new PhoneService()   
    }

    componentDidMount = () => this.displayPhones()

    displayPhones = () => {
        this.phonesService
            .getPhones()
            .then(res => this.setState({phones: res.data}))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })
   
    render() {
        return (
            
            <>    
                <Container className="mb-5 mt-5">
           
                    <Row className="mb-5 d-flex flex-row justify-content-between">                                      
            
                        {
                           this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} />) 
                        }                   
                                                
                    </Row>

                    <div className="text-center mt-4">
                        <Button onClick={() => this.handleModal(true)} variant="dark" size="lg" className="mb-5 mt-4">Add New Phone</Button>
                    </div>

                </Container>            

                 <Popup show={this.state.showModal} handleModal={this.handleModal}>
                    <PhoneForm closeModal={() => this.handleModal(false)} updateList={this.displayPhones} {...this.props}/>
                </Popup>             
            </> 
        )
    }
} 

export default PhoneList