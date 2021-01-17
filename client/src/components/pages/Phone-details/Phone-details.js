import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Services
import PhoneService from '../../../service/phones.service'

// Styles
import { Container, Row, Col, ButtonGroup } from 'react-bootstrap'
import './Phone-details.css'


class PhoneDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: undefined
        }
        this.phoneService = new PhoneService()
    }


    componentDidMount = () => {

        const phone_id = this.props.match.params.phone_id

        this.phoneService
            .getPhone(phone_id)
            .then(res => {
                this.setState({ phone: res.data[0] })
                console.log(this.state.phone)
            })
            .catch(err => console.log(err))
        
    }

    render() {
        return (
            <Container>

                    {this.state.phone
                        ?
                        <>
                            <Row>
                            
                                <Col className="text-center" md={6} >
                                
                                    <h3>{this.state.phone.name}</h3>

                                    <img className="phoneImg" src={`/images/${this.state.phone.imageFileName}`} alt={this.state.phone.name} />

                                </Col>

                                <Col md={6}>

                                <p><strong>Description: </strong>{this.state.phone.description}</p>

                                <hr />

                                <h4 className="text-center">Data Sheet</h4>
                                <p><strong>Manufacturer: </strong>{this.state.phone.manufacturer}</p>
                                <p><strong>Screen: </strong>{this.state.phone.screen}</p>
                                <p><strong>Processor: </strong>{this.state.phone.processor}</p>
                                <p><strong>Ram: </strong>{this.state.phone.ram}</p>
                                <p><strong>Color: </strong>{this.state.phone.color}</p>

                                <hr />

                                <p><strong>Price: </strong>{this.state.phone.price}€</p>

                                <ButtonGroup className="backButton">
                                    <Link className="btn" to="/telefonos">Back</Link>
                                </ButtonGroup>
                                    
                                </Col>

                            </Row>

                        </>

                        :

                        <h1>Cargando...</h1>
                    }

                </Container>
        )
    }
}


export default PhoneDetails
