import React, { Component } from 'react'

// Services
import PhoneService from '../../../service/phones.service'

// Components
import PhoneCard from './Phone-card'
import Alert from './../../shared/Alert/Alert'

// Styles
import { Container, Row } from 'react-bootstrap'


class PhoneList extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined,
            showToast: false,
            toastText: ''
        }
        this.phoneService = new PhoneService()
    }


    componentDidMount = () => {
        this.phoneService
            .getPhones()
            .then(res => this.setState({ phones: res.data }))
            .catch(err => this.setState({ showToast: true, toastText: err.response.data.message }))
    }


    handleToast = (visible, text) => this.setState({ showToast: visible, toastText: text })


    render() {
        return (
            <>
                <Container fluid>
                    <h1 className="text-center">Phone List</h1>
                    <Row className="justify-content-center">
                        {
                            this.state.phones
                                ?
                                this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} />)
                                :
                                <h3>Cargando...</h3>
                        }
                    </Row>
                </Container>

                <Alert show={this.state.showToast} handleToast={this.handleToast} toastText={this.state.toastText} />
            </>
        )
    }
    
}


export default PhoneList
