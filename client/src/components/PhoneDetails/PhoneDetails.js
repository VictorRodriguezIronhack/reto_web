import React, { Component } from 'react'
import PhoneService from './../../service/phones.service'
import { Col, Container, Row, Spinner } from 'react-bootstrap'



class PhoneDetails extends Component {

    constructor() {
        super()
        this.state = {
            phone: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        const phone_id = this.props.match.params.phone_id

        this.phoneService
            .getOnePhone(phone_id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    render() {
 
        return (
            <>
                <Container>
                    {this.state.phone
                        ?
                        <Row>
                            <Col lg={6}>
                                <div className='img-details'>
                                    <img src={this.state.phone.imageFileName} alt={`Imágen de ${this.state.phone.name}`} ></img>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <h1>{this.state.phone.name}</h1>
                                    <p>{this.state.phone.description}</p>
                                </div>
                                <hr></hr>
                                <p><span>Price:</span> {this.state.phone.price} €</p>
                                <p><span>Manufacturer:</span> {this.state.phone.manufacturer} </p>
                                <p><span>Color:</span> {this.state.phone.color} </p>
                                <p><span>Screen:</span> {this.state.phone.screen} </p>
                                <p><span>Processor:</span> {this.state.phone.processor} </p>
                                <p><span>Ram:</span> {this.state.phone.ram} GB</p>
                            </Col>
                        </Row>
                        :
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                </Container>
            </>
        )
    }
}

export default PhoneDetails