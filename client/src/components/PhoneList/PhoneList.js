import React, { Component } from 'react'
import PhoneService from '../../service/phones.service'
import { Container, Row, Spinner } from 'react-bootstrap'
import PhoneCard from './PhoneCard'
import './PhoneList.css'



class PhonesList extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined,

        }
        this.phoneService = new PhoneService()

    }

    componentDidMount = () => {
        this.phoneService
            .getPhones()
            .then(res => this.setState({ phones: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <h1 id='h1'>All Phones</h1>
                <Row>
                    {this.state.phones
                        ?
                        this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} />) 
                        :
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                </Row>
            </Container>)
    }
}
export default PhonesList