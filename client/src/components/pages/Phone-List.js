import { Component } from 'react'
import PhoneService from './../../services/phone.service'
import PhoneCard from './../pages/PhoneCard'

import { Container, Row, Spinner } from 'react-bootstrap'


class PhonesList extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined
        }
        this.phoneService = new PhoneService()
    }


    componentDidMount() {
        this.loadPhones()
    }

    loadPhones() {

        this.phoneService
            .getAllPhones()
            .then(response => this.setState({ phones: response.data }))
            .catch(err => console.log('ERROR', err))
    }

    render() {

        const { phones } = this.state

        return (

            !phones
                ?
                <Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>
                :
                <>
                    <Container>
                        <Row>
                            {phones.map(elm => <PhoneCard key={elm.id} {...elm} />)}
                        </Row>
                    </Container>
                </>

        )
    }
}

export default PhonesList