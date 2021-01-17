import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import SearchBar from '../../shared/Search-bar'
import PhoneCard from './Phone-card'
import Loader from '../../shared/Loader'

import PhonesService from '../../../services/phone.services'
import PopUp from '../../shared/Pop-ups'
import NewPhone from './New-phone'


class PhonesList extends Component{
    constructor() {
        super()
        this.state = {
            allPhones: undefined,
            filterPhones: undefined,
            showModal: false,
            modalTitle: undefined
        }

        this.phoneService = new PhonesService()
    }

    componentDidMount = () => {
        this.loadPhones()
    }

    loadPhones = () => {
        this.phoneService
            .getAllPhones()
            .then(phones => this.setState({ allPhones: phones.data, filterPhones: phones.data }))
            .catch(err => new Error('ERROR GETTING ALL PHONES', err))
    }

    searchBy = value => {
        const filtered = this.state.allPhones.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()) || elm.manufacturer.toLowerCase().includes(value.toLowerCase()))
        this.setState({ filterPhones: filtered })
    }

    handlePopups = (target, visib, content) => {
        target === 'showModal' && this.setState({ [target]: visib, modalTitle: content })
        target === 'showToast' && this.setState({ [target]: visib, toastText: content })
    }


    render() {
        return (
            <>
                <Container>
                    <Row style={{ justifyContent: 'center'}}>
                        <h1 style={{}}>All phones</h1>
                        <hr style={{ width: '100%', margin: '15px 30px' }} />
                    </Row>
                    <Row style={{padding: '0 30px', display: 'flex', justifyContent: 'space-between'}}>
                        <Col xs={7} sm={9} md={9} lg={10} style={{padding: '0'}}>
                            <SearchBar searchFor={value => this.searchBy(value)} />
                        </Col>
                        <Col xs={5} sm={3} md={3} lg={2} style={{padding: '0'}}>
                            <Button variant="dark" style={{width: '100%'}} onClick={() => this.handlePopups('showModal', true, 'new phone')} >New phone</Button>
                        </Col>
                    </Row>
                    {this.state.filterPhones
                        ?
                        <Row style={{ justifyContent: 'center'}}>
                            {this.state.filterPhones.map(elm => <PhoneCard phone={elm} key={elm._id}/>)}
                        </Row>
                        :
                        <Row style={{ justifyContent: 'center'}}>
                            <Loader />
                        </Row>
                    }
                </Container>
                <PopUp show={this.state.showModal} hide={() => this.handlePopups('showModal', false)} title={this.state.modalTitle} size="lg" >
                    <NewPhone closeModal={() => this.handlePopups('showModal', false)} reloadPhones={this.loadPhones} />
                </PopUp>
            </>
        )
    }
}

export default PhonesList