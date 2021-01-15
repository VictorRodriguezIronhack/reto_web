import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'

import SearchBar from '../shared/Search-bar'
import PhoneCard from './Phone-card'
import Loader from '../shared/Loader'

import PhonesService from '../../services/phone.services'


class PhonesList extends Component{
    constructor() {
        super()
        this.state = {
            allPhones: undefined,
            filterPhones: undefined
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


    render() {
        return (
            <>
                <Container>
                    <Row style={{ justifyContent: 'center'}}>
                        <h1 style={{}}>All phones</h1>
                        <hr style={{ width: '100%', margin: '15px 30px' }}/>
                        <SearchBar searchFor={value => this.searchBy(value)} style={{padding: '0px 15px'}} />
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
            </>
        )
    }
}

export default PhonesList