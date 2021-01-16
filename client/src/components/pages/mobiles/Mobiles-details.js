import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
                    <Col>
                        <img src={this.state.mobile.imageFileName} alt={this.state.mobile.name}></img>
                    </Col>
                    <Col>
                        <h1>{this.state.mobile.name}</h1>
                        <h3>Marca: {this.state.mobile.manufacturer}</h3>
                        <h5>Color: {this.state.mobile.color} Precio: {this.state.mobile.price}</h5>
                        <h5>Tipo de pantalla: {this.state.mobile.screen} </h5>
                        <h5>Procesador: {this.state.mobile.processor}</h5>
                        <p>{this.state.mobile.description}</p>
                    </Col>
                </Row>
            </Container>
           

        )
    }
}

export default MobileDetails
