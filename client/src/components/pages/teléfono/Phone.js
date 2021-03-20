import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PhoneService from './../../../service/teléfonos.service';
import './Phone.css';

class Phone extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
            phone: {},

        }
        this.PhoneService = new PhoneService()
    }


    componentDidMount() {

        const phone_Id = this.props.phone_Id
        
        this.PhoneService
            .getPhone(phone_Id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container className='phone'>
                    <>
                        <h1>Detalles del modelo {this.state.phone.name}</h1>
                        <Row>
                            <Col className='btn-phone'>
                                <img className='phone-image-small' src={this.state.phone.imageFileName} alt={this.state.phone.name} />
                            </Col>
                            <Col>
                                <h5>Compañía</h5>
                                <p>{this.state.phone.manufacturer} euros</p>
                                <hr />
                                <h5>Descripción</h5>
                                <p>{this.state.phone.description}</p>
                                <hr />
                                <h5>Color</h5>
                                <p>{this.state.phone.color}</p>
                                <hr />
                                <h5>Price</h5>
                                <p>{this.state.phone.price} euros</p>
                                <hr />
                                <h5>Pantalla</h5>
                                <p>{this.state.phone.screen}</p>
                                <hr />
                                <h5>Procesador</h5>
                                <p>{this.state.phone.processor}</p>
                                <hr />
                                <h5>Ram</h5>
                                <p>{this.state.phone.ram}</p>
                                <hr />
                            </Col>
                        </Row>

                    </>

            </Container>
        )
    }
}

export default Phone