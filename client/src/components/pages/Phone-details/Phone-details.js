import React, { Component } from 'react'
import PhoneService from '../../../service/phone.service'
import './Phone-details.css'
import Loader from '../../shared/Loader/Loader'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class PhoneDetails extends Component {
    constructor() {
        super()
        this.state = {
            phone: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {

        const phoneId = this.props.match.params.phone_id

        this.phoneService
            .getPhone(phoneId)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container className='phone-details'>
                {
                    this.state.phone
                        ?
                        <>
                            <h1>{this.state.phone.title}</h1>
                            <hr />
                            <Row className='container-description'>
                                <Col md={6} className="left-column-details" >
                                    <img
                                        src={this.state.phone.imageUrl}
                                        alt='Smartphone'
                                    />
                                    <div className='button-home'>
                                        <Button><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Go home</Link></Button>
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <p><b>Manufacturer: </b>{this.state.phone.manufacturer}</p>
                                    <p><b>Color: </b>{this.state.phone.color}</p>
                                    <p><b>Price: </b>${this.state.phone.price}</p>
                                    <p><b>Screen: </b>{this.state.phone.screenSize}</p>
                                    <p><b>Processor: </b>{this.state.phone.processor} / {this.state.phone.ramMemory}GB RAM</p>
                                    <p><b>Description: </b>{this.state.phone.description}</p>
                                    <p><b>Details: </b>{this.state.phone.details}</p>
                                </Col>
                            </Row>
                        </>
                        :
                        <Loader />
                }
            </Container>
        )
    }
}
