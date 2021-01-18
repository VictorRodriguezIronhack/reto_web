import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Loader from './../../shared/Spinner/Loader'
import './phone-details.css'
import PhoneService from './../../../service/phone.service'


class PhoneDetails extends Component {

    constructor() {
        super()
        this.state = {
            phone: []
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {

        const phone_id = this.props.match.params.phone_id

        this.phoneService
            .getPhonesDetails(phone_id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <body className="body" style={{ position: "absolute", width: "100%", height: '100%', color:'black'}}>
                <Container className="details-container">
                    {this.state.phone
                        ?
                        <Row>
                            <Col lg={{ span: 6, offset: 3 }}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title style={{textAlign: 'center'}}>{this.state.phone.name}</Card.Title>
                                        <hr />
                                        <Card.Text style={{textAlign: 'justify'}}>{this.state.phone.description}</Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Color: {this.state.phone.color}</ListGroup.Item>
                                            <ListGroup.Item>Screen: {this.state.phone.screen}</ListGroup.Item>
                                            <ListGroup.Item>Processor: {this.state.phone.processor}</ListGroup.Item>
                                            <ListGroup.Item>Manufacturer: {this.state.phone.manufacturer}</ListGroup.Item>
                                            <ListGroup.Item>Ram: {this.state.phone.ram}</ListGroup.Item>
                                            <ListGroup.Item>Price: {this.state.phone.price}$</ListGroup.Item>
                                        </ListGroup>
                                        <Link to={`/listado`}>
                                            <Button className="btn btn-primary btn-block btn-large">Go Back</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        :
                        <Loader />
                    }
                </Container>
            </body>
        )
    }
}

export default PhoneDetails
