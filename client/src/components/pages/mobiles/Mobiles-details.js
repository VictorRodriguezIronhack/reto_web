import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Mobiles-details.css'

import MobileService from './../../../service/mobile.service'

class MobileDetails extends Component {

    constructor() {
        super()
        this.state = {
            mobile: []
        }
        this.mobileService = new MobileService ()
    }

    componentDidMount = () => {

        const mobile_id = this.props.match.params.mobile_id

        this.mobileService
            .getOneMobile(mobile_id)
            .then(res => this.setState({ mobile: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        
        return (

            <Container>
                <Row>
                    <Col  className="details" lg={12} md={6} sm={2}>
                        <h1><strong>{this.state.mobile.name}</strong></h1>
                        <h3>Manufacturer: {this.state.mobile.manufacturer}</h3>
                        <h5>Color: {this.state.mobile.color}</h5>
                        <h5>Price: {this.state.mobile.price}€</h5>
                        <h5>Screen: {this.state.mobile.screen} </h5>
                        <h5>Processor: {this.state.mobile.processor}</h5>
                        <p>{this.state.mobile.description}</p>
                    </Col>
                </Row>
            </Container>
           

        )
    }
}

export default MobileDetails
