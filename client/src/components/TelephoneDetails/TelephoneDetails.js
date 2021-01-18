import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Loader from '../shared/Loader/Loader'
import TelephoneService from '../../service/telephone.service'
import './TelephoneDetails.css'
import PaymentForm from '../PaymentForm/PaymentForm'

class TelephoneDetails extends Component {

    constructor() {
        super()
        this.state = {
            telephone: undefined,
            showModal: false
        }
        this.telephoneService = new TelephoneService()
    }

    componentDidMount = () => {
        this.telephoneService
            .getTelephones()
            .then(res => {
                const telephone = res.data.filter(elm => elm.id === Number(this.props.match.params.phone_id))[0]
                this.setState({ telephone })
            })
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Container>
                    {
                        this.state.telephone ?
                            <Row className='phone-details'>
                                <Col xs={12}>
                                    <h2>{this.state.telephone.name}</h2>
                                    <p style={{ color: 'grey' }} className='manufacturer'>{this.state.telephone.manufacturer}</p>
                                    <hr style={{ width: '100px', background: '#E73631', padding: '1px' }} />
                                </Col>
                                <Col xs={12} sm={4}>
                                    <img src={`/images/${this.state.telephone.imageFileName}`} alt={this.state.telephone.name} className='phone-det-img' />
                                </Col>
                                <Col xs={12} sm={8}>
                                    <p style={{ marginTop: '20px', textAlign:'justify' }}>{this.state.telephone.description}</p>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <p><strong>Color:</strong> {this.state.telephone.color}</p>
                                            <p><strong>Screen:</strong> {this.state.telephone.screen}</p>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <p><strong>Processor:</strong> {this.state.telephone.processor}</p>
                                            <p><strong>RAM:</strong> {this.state.telephone.ram}</p>
                                        </Col>
                                        <Col xs={12}>
                                            <p style={{ fontSize: '2em' }} className='price'>{this.state.telephone.price}€</p>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <div className='buy'>
                                                <h3 className="info-btn" style={{ fontSize: '1.5em', padding: '10px 50px', width: '100%' }} onClick={() => this.handleModal(true)}>Buy</h3>
                                            </div>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>
                            :
                            <Loader />
                    }
                </Container>

                <PaymentForm show={this.state.showModal} handleModal={this.handleModal} />

            </>
        )
    }
}

export default TelephoneDetails