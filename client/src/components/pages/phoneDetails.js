import React, { Component } from 'react'
import PhoneService from './../../service/phone.service'

import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './phoneDetails.css'

export default class PhoneDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        const Id = this.props.match.params.phoneId
    

        this.phoneService
            .getOnePhone(Id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.phone
                        ?
                        <>
                    <Col lg={5}>
                        <figure>
                            <img className="phoneImg" src={this.state.phone.imageFileName}></img>
                        </figure>
                    </Col>
                    <Col lg={7}>
                        <Card>
                            <Card.Header as="h5">{this.state.phone.name}</Card.Header>
                            <Card.Body>
                                        <Card.Text>
                                            <p><b>Manufacturer: </b>{this.state.phone.manufacturer}</p>
                                            <p><b>Color: </b>{this.state.phone.color}</p>
                                            <p><b>Price: </b>${this.state.phone.price}</p>
                                            <p><b>Screen: </b>{this.state.phone.screenSize}</p>
                                            <p><b>Processor: </b>{this.state.phone.processor} / {this.state.phone.ram}GB RAM</p>
                                            <p><b>Description: </b>{this.state.phone.description}</p>                        
                                </Card.Text>
                                <Link to='/'>Go back</Link>
                            </Card.Body>
                            </Card>
                        
                    </Col>
                    </>
                    :
                    <Spinner variant="primary"/>
                    }    

                </Row>
            </Container>
        )
    }
}