import React, { Component, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Loader from '../shared/Loader/Loader'
import TelephoneService from '../../service/telephone.service'
import './TelephoneDetails.css'
import PaymentForm from '../PaymentForm/PaymentForm'

const TelephoneDetails = ({ match }) => {

    const [telephone, setTelephone] = useState()
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => setShowModal(value => !value)

    useEffect(() => {

        const telephoneService = new TelephoneService()

        telephoneService
            .getTelephones()
            .then(res => {
                const telephone = res.data.filter(elm => elm.id === Number(match.params.phone_id))[0]
                setTelephone(telephone)
            })
            .catch(err => console.log(err))
        
    }, [match.params.phone_id])

    return (
        <>
            <Container>
                {
                    telephone ?
                        <Row className='phone-details'>
                            <Col xs={12}>
                                <h2>{telephone.name}</h2>
                                <p style={{ color: 'grey' }} className='manufacturer'>{telephone.manufacturer}</p>
                                <hr style={{ width: '100px', background: '#E73631', padding: '1px' }} />
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={`/images/${telephone.imageFileName}`} alt={telephone.name} className='phone-det-img' />
                            </Col>
                            <Col xs={12} sm={8}>
                                <p style={{ marginTop: '20px', textAlign: 'justify' }}>{telephone.description}</p>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <p><strong>Color:</strong> {telephone.color}</p>
                                        <p><strong>Screen:</strong> {telephone.screen}</p>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <p><strong>Processor:</strong> {telephone.processor}</p>
                                        <p><strong>RAM:</strong> {telephone.ram}</p>
                                    </Col>
                                    <Col xs={12}>
                                        <p style={{ fontSize: '2em' }} className='price'>{telephone.price}€</p>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className='buy'>
                                            <h3 className="info-btn" style={{ fontSize: '1.5em', padding: '10px 50px', width: '100%' }} onClick={handleModal}>Buy</h3>
                                        </div>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                        :
                        <Loader />
                }
            </Container>

            <PaymentForm show={showModal} handleModal={handleModal} />

        </>
    )
}

// class TelephoneDetailsOld extends Component {

//     constructor() {
//         super()
//         this.state = {
//             telephone: undefined,
//             showModal: false
//         }
//         this.telephoneService = new TelephoneService()
//     }

//     componentDidMount = () => {
//         this.telephoneService
//             .getTelephones()
//             .then(res => {
//                 const telephone = res.data.filter(elm => elm.id === Number(this.props.match.params.phone_id))[0]
//                 this.setState({ telephone })
//             })
//             .catch(err => console.log(err))
//     }

//     handleModal = visible => this.setState({ showModal: visible })

//     render() {
//         return (
//             <>
//                 <Container>
//                     {
//                         this.state.telephone ?
//                             <Row className='phone-details'>
//                                 <Col xs={12}>
//                                     <h2>{this.state.telephone.name}</h2>
//                                     <p style={{ color: 'grey' }} className='manufacturer'>{this.state.telephone.manufacturer}</p>
//                                     <hr style={{ width: '100px', background: '#E73631', padding: '1px' }} />
//                                 </Col>
//                                 <Col xs={12} sm={4}>
//                                     <img src={`/images/${this.state.telephone.imageFileName}`} alt={this.state.telephone.name} className='phone-det-img' />
//                                 </Col>
//                                 <Col xs={12} sm={8}>
//                                     <p style={{ marginTop: '20px', textAlign: 'justify' }}>{this.state.telephone.description}</p>
//                                     <Row>
//                                         <Col xs={12} sm={6}>
//                                             <p><strong>Color:</strong> {this.state.telephone.color}</p>
//                                             <p><strong>Screen:</strong> {this.state.telephone.screen}</p>
//                                         </Col>
//                                         <Col xs={12} sm={6}>
//                                             <p><strong>Processor:</strong> {this.state.telephone.processor}</p>
//                                             <p><strong>RAM:</strong> {this.state.telephone.ram}</p>
//                                         </Col>
//                                         <Col xs={12}>
//                                             <p style={{ fontSize: '2em' }} className='price'>{this.state.telephone.price}€</p>
//                                         </Col>
//                                         <Col xs={12} sm={6}>
//                                             <div className='buy'>
//                                                 <h3 className="info-btn" style={{ fontSize: '1.5em', padding: '10px 50px', width: '100%' }} onClick={() => this.handleModal(true)}>Buy</h3>
//                                             </div>
//                                         </Col>
//                                     </Row>

//                                 </Col>
//                             </Row>
//                             :
//                             <Loader />
//                     }
//                 </Container>

//                 <PaymentForm show={this.state.showModal} handleModal={this.handleModal} />

//             </>
//         )
//     }
// }

export default TelephoneDetails