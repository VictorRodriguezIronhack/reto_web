import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import SearchBar from '../../shared/Search-bar'
import PhoneCard from './Phone-card'
import Loader from '../../shared/Loader'

import PhonesService from '../../../services/phone.service'
import PopUp from '../../shared/Pop-ups'
import NewPhone from './New-phone'
import EditPhone from './Edit-phone'


class PhonesList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            allPhones: undefined,
            filterPhones: undefined,
            showModal: false,
            modalTitle: undefined,
            targetPhone: undefined
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

    deletePhone = phoneId => {
        this.phoneService
            .deletePhone(phoneId)
            .then(() => this.loadPhones())
            .catch(err => new Error('ERROR DELETING PHONE', err))
    }

    editPhone = phoneId => {
        this.setState({ targetPhone: phoneId })
        this.handlePopups('showModal', true, 'edit phone')
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
                            {this.state.filterPhones.map(elm => <PhoneCard phone={elm} key={elm._id} theUser={this.props.theUser} deletePhone={id => this.deletePhone(id)} editPhone={id => this.editPhone(id)} />)}
                        </Row>
                        :
                        <Row style={{ justifyContent: 'center'}}>
                            <Loader />
                        </Row>
                    }
                </Container>
                <PopUp show={this.state.showModal} hide={() => this.handlePopups('showModal', false)} title={this.state.modalTitle} size="lg" >
                    {this.state.modalTitle === 'new phone' && <NewPhone closeModal={() => this.handlePopups('showModal', false)} reloadPhones={this.loadPhones} />}
                    {this.state.modalTitle === 'edit phone' && <EditPhone closeModal={() => this.handlePopups('showModal', false)} reloadPhones={this.loadPhones} phoneId={this.state.targetPhone} /> }
                </PopUp>
            </>
        )
    }
}

export default PhonesList
