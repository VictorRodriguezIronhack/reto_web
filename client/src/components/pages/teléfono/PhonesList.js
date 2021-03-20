import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import PhoneService from './../../../service/teléfonos.service';
import PhoneCard from './PhoneCard';
import './PhoneList.css'

class PhoneList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phones: [],
            showModal: false,
            error: ''
        }
        this.PhoneService = new PhoneService()
    }

    componentDidMount = () => this.allPhones()


    allPhones = () => {
        this.PhoneService
            .getPhones()
            .then(res => this.setState({ phones: res.data }))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (

            <Container>
                <Row className='phonelist'>
                    <Row>
                        {
                            this.state.phones && this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} updateList={this.allPhones} />)
                        }
                    </Row>
                </Row>

            </Container>
        )
    }
}



export default PhoneList