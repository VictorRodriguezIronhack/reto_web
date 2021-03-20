import React, { Component } from 'react';
import { Col, Card, Button, Modal } from 'react-bootstrap';

import PhoneService from '../../../service/teléfonos.service';
import Phone from './Phone';
import './PhoneCard.css'

class PhoneCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phones: [],
            showModal: false
        }
        this.PhoneService = new PhoneService()
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Col lg={4}>
                    <Card className='phone-card'>
                        <Card.Img className='phone-image' variant='top' src={this.props.image} />
                        <Card.Body>
                        
                            <Card.Title>{this.props.name}</Card.Title>
                            <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                                <Modal.Body>
                                    <Phone closeModal={() => this.handleModal(false)} {...this.props} />
                                </Modal.Body>
                            </Modal>
                                
                            <Button onClick={() => this.handleModal(true)} variant='dark' size='sm'>Ver detalles</Button>

                        </Card.Body>
                    </Card>
                </Col>

                

            </>
        
        )
    }
}

export default PhoneCard