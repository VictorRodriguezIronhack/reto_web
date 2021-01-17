import React, { Component } from 'react'
import { Container, Row, CardDeck } from 'react-bootstrap'

import Loader from './../../shared/Loader'
import PhonesService from '../../service/phones.service'

import PhoneCard from './phone.card'

export default class PhonesList extends Component {
    constructor() {
        super()

        this.state = { phones: undefined }
    }

    componentDidMount = () => this.fetchData()

    fetchData = () => {
        PhonesService
            .getAll()
            .then(response => this.setState({ phones: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1 style={{marginTop: 50, marginBottom: 30, fontSize: 30, fontWeight: 'bold'}}>Mobile phones list</h1>
                    <CardDeck>
                        {this.state.phones ?
                            this.state.phones.map(phone => <PhoneCard key={phone.id} {...phone} />)
                            :
                            <Loader />
                        }
                    </CardDeck>
                </Row>
            </Container>

        )
    }
}