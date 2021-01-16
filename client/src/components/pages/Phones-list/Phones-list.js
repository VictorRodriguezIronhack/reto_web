import React, {Component} from 'react'
import PhoneService from './../../../service/telefonos.service'
import PhoneCard from './Phone-card'
import {Container, Row} from 'react-bootstrap'
import './Phone-list.css'
import Loader from '../../shared/spinner/Loader'

class PhoneList extends Component {
   
    constructor(){
        super()
        this.state = {
            phones: undefined
        }

        this.phonesService = new PhoneService()
    }

    componentDidMount = () => {
        this.phonesService
            .getPhones()
            .then(res => this.setState({phones: res.data}))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <>
            <Container>
            <h1>Lista de teléfonos móviles</h1>
                <Row>
                    {this.state.phones ? 
                        this.state.phones.map(elm => <PhoneCard key={elm.id} {...elm}/>)
                    : 
                    <Loader/>}
                </Row>
            </Container>
            </>
        )
    }
}

export default PhoneList