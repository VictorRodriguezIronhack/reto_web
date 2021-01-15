import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Loader from '../shared/Loader'
import PhonesService from '../../services/phone.services'


class PhoneDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: undefined
        }
        this.phoneService = new PhonesService()
    }

    componentDidMount = () => this.loadPhoneInfo()

    loadPhoneInfo = () => {
        this.phoneService
            .getOnePhone(this.props.match.params.id)
            .then(info => this.setState({ phone: info.data }))
            .catch(err => new Error('ERROR GETTING PHONE INFO', err))
    }

    render() {
        return (
            <Container>
                {this.state.phone
                    ?
                    <Row style={{ justifyContent: 'center'}}>
                        <Col md={4}>
                            <img src={`../images/${this.state.phone.imageFileName}`} alt={`${this.state.phone.name} ${this.state.phone.manufacturer}`} style={{ height: '400px', borderColor: 'green'}} />
                        </Col>
                        <Col md={6}>
                            <h2>{this.state.phone.manufacturer} {this.state.phone.name}</h2>
                            <hr />
                            <section>
                                <h5 style={{textTransform: 'capitalize'}}>{this.state.phone.color}</h5>
                                <h5>{this.state.phone.price}€</h5>
                            </section>
                                <p>{this.state.phone.description}</p>
                            <section>
                                <h6>Screen: {this.state.phone.screen}</h6>
                                <h6>Processor: {this.state.phone.processor}</h6>
                            </section>

                        </Col>
                    </Row>
                    :
                    <Row><Loader /></Row>
                }
            </Container>
        )
    }
}

export default PhoneDetails