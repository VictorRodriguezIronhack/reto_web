import React, { Component } from 'react'

// Services
import PhoneService from '../../../service/phones.service'

// Components
import PhoneCard from './Phone-card'

// Styles
import { Container, Row } from 'react-bootstrap'
import './Phone-list.css'


class PhoneList extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined
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
            <>
                <Container>
                    <h1>Telefonos</h1>
                    <Row>
                        {
                            this.state.phones
                                ?
                                this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} />)
                                :
                                <h3>Cargando...</h3>
                        }
                    </Row>
                </Container>
            </>
        )
    }
}


export default PhoneList