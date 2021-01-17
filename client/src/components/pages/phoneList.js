import React, { Component } from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'

import PhoneService from './../../service/phone.service'
import PhoneCard from './phoneCard'

class Allphones extends Component {
    constructor() {
        super()
        this.state = {
            phones: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        this.refreshPhones()
    }

    refreshPhones = () => {
        this.phoneService
            .getPhones()
            .then(res => this.setState({ phones: res.data }))
            .catch(err => console.log(err)) 
    }

    render() {
        return (
            <Container>
                    <h1 align="center">Phones catalog</h1>
                <Row>
                    {this.state.phones
                        ?
                        this.state.phones.map(elm => {
                            return (
                                <Col lg={4}>     
                                        <PhoneCard {...elm} />
                                </Col>
                            )
                        })
                        : 
                        <Spinner animation="border" variant="primary" />

                    }
 
                </Row>
            </Container>
        )
    }
}

export default Allphones