import React, { Component } from 'react'
import { Row, Col, Container, Form } from 'react-bootstrap'

import TelephoneService from '../../service/telephone.service'
import TelephoneCard from '../TelephoneCard/TelephoneCard'
import Loader from '../shared/Loader/Loader'
import './TelephoneList.css'

class TelephoneList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            telephones: undefined,
            searchResults: undefined
        }
        this.telephoneService = new TelephoneService()
    }

    componentDidMount = () => this.listTelephones()

    handleInputChange = e => {
        const searchResults = [...this.state.telephones].filter(elm => elm.name.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({ searchResults })
    }

    listTelephones = () => {
        this.telephoneService
            .getTelephones()
            .then(res => this.setState({ telephones: res.data }))
            .catch(err => console.log(err))
    }

    render() {

        if (this.state.telephones) {

        }

        return (
            <Container>
                <h1 style={{ textAlign: 'center', marginTop: '50px', fontWeight: '300' }}>Our phones</h1>
                <hr style={{ width: '100px', background: '#E73631', padding: '1px' }} />
                <div className='input'>
                    <Form.Control type="text" placeholder="Search for a model..." className="mr-sm-2" onChange={this.handleInputChange} />
                </div>
                <Row>
                    {this.state.telephones ?
                        this.state.searchResults ?
                            this.state.searchResults.map((elm, idx) => {
                                return (
                                    <Col xs={12} md={6} lg={4} key={idx}>
                                        <TelephoneCard className='phone-card'{...elm} />
                                    </Col>
                                )
                            })
                            :
                            this.state.telephones.map((elm, idx) => {
                                return (
                                    <Col xs={12} md={6} lg={4} key={idx}>
                                        <TelephoneCard className='phone-card'{...elm} />
                                    </Col>
                                )
                            })
                        :
                        < Loader />
                    }
                </Row>
            </Container>
        )
    }
}

export default TelephoneList