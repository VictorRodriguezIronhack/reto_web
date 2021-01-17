import React, {Component} from 'react'
import PhoneService from './../../../service/telefonos.service'
import PhoneCard from './Phone-card'
import {Container, Row, Modal, Button} from 'react-bootstrap'
import './Phone-list.css'
import Loader from '../../shared/spinner/Loader'
import PhoneForm from './../Phone-form/Phone-form'



class PhoneList extends Component {
   
    constructor(){
        super()
        this.state = {
            phones: undefined,
            showModal: false
        }

        this.phonesService = new PhoneService()
    }

    componentDidMount = () => this.refreshPhones()

    refreshPhones = () => {
        this.phonesService
            .getPhones()
            .then(res => this.setState({phones: res.data}))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({showModal: visible})
    render(){
        return (
            <>
            <Container>
            <h1>Lista de teléfonos móviles</h1>
            <Button variant="light" block onClick={() => this.handleModal(true)}>Añadir un nuevo teléfono</Button>
                <Row>
                    {this.state.phones ? 
                        this.state.phones.map(elm => <PhoneCard key={elm.id} {...elm}/>)
                    : 
                    <Loader/>}
                </Row>
            </Container>

            <Modal show={this.state.showModal} onHide={() => this.handleModal(false)} updateList={this.refreshPhones} >
                <Modal.Body><PhoneForm closeModal={() => this.handleModal(false)} updateList={this.refreshPhones}/></Modal.Body>
            </Modal>
            </>
        )
    }
}

export default PhoneList