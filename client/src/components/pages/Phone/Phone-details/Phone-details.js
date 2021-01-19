
import React, { Component } from 'react'
import PhoneService from '../../../../service/phone.service'
import './Phone-details.css'

import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'


class PhoneDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: {
                name: '',
                manufacturer: '',
                description: '',
                color: '',
                price: '',
                imageFileName: '',
                screen: '',
                processor: '',
                ram: '',
            },
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        const phone_id = this.props.match.params.phone_id
        this.phoneService
            .getPhone(phone_id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    deleteThisPhone = () => {

        const phone_id = this.props.match.params.phone_id


        this.phoneService
            .deletePhone(phone_id)
            .then(res => { this.props.history.push('/teléfonos') })
            .catch(err => console.log(err))

    }

    render() {

        return (
            <>
                <Container className="phone-details">
                    <h1>{this.state.phone.name}</h1>
                    <Row>
                        <Col md={{ span: 4, offset: 1 }} >
                            <img className="phone-img" src={this.state.phone.imageFileName} alt={this.state.phone.name} />
                        </Col>
                        <Col md={{ span: 6, offset: 1 }}>
                            <i>{this.state.phone.manufacturer}</i>
                            <h3>Description</h3>
                            <p>{this.state.phone.description}</p>
                            <hr />
                            <h3>Technical information</h3>
                            <p>Color: {this.state.phone.color}</p>
                            <p>Price: {this.state.phone.price}€</p>
                            <p>Screen: {this.state.phone.screen}</p>
                            <p>Processor: {this.state.phone.processor}</p>
                            <p>Ram: {this.state.phone.ram}</p>
                            <hr />
                        </Col>
                    </Row>
                    <div>
                        <Link to="/teléfonos" className="btn btn-sm btn-card">Go back</Link>
                        {
                            this.props.loggedUser
                            &&
                            <>
                            <Link className="btn btn-sm btn-card" to={`/teléfonos/editar/${this.state.phone._id}`}>Edit this phone</Link>
                            <Link onClick={() => this.deleteThisPhone()} className="btn btn-danger btn-sm" to={'/'}>Delete from database</Link>
                            </>
                        }
                    </div>
                    <br />
                    <br />
                </Container>
            </>
        )
    }
}

export default PhoneDetails