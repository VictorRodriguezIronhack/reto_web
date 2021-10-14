import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PhoneService from '../../../services/phone.service'
import './TelephoneDetails.css'

export default class TelephoneDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: []
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount() {
        this.phoneService.findOnePhone(this.props.match.params.id)
            .then(res => {
                console.log(res)
                this.setState({
                    phone: res.data
                })
            })
            .catch(err => console.error(err))
    }


    render() {
        return (
            this.state.phone ?
                <Container className='details'>
                    {this.state.phone.map(elm => {
                        return (
                            <Row>
                                <Col >
                                    <img className='image-details' src={elm.imageFileName} alt={elm.name} />
                                </Col>
                                <Col>
                                    <p>{elm.name}</p>
                                    <p>{elm.description}</p>
                                    <p>{elm.manufacturer}</p>
                                    <p>{elm.color}</p>
                                    <p>{elm.processor}</p>
                                    <p>{elm.screen}</p>
                                    <p>{elm.price} €</p>
                                </Col>
                            </Row>
                        )
                    })}
                </Container>
                :
                <div>...Cargando</div>
        )
    }
}
