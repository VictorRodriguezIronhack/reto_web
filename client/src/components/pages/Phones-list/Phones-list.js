import React, { Component } from 'react'
import { Container, Row, Button, Modal } from 'react-bootstrap'
import Loader from './../../shared/Loader/Loader'
import PhoneService from './../../../service/phone.service'
import PhoneForm from './../Phone-form/Phone-form'
import PhoneEdit from './../Phone-edit/Phone-edit'
import PhoneCard from './Phone-card'

export default class PhoneList extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined,
            showCreateModal: false,
            showEditModal: false,
            phoneToEdit: undefined,
            error: ''
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        this.refreshPhoneList()
    }

    refreshPhoneList = () => {
        this.phoneService
            .getPhones()
            .then(res => this.setState({ phones: res.data }))
            .catch(err => this.setState({ error: 'An error occurred while loading the phone list. Please reload the page again.' }))
    }

    deletePhone = phoneId => {
        this.phoneService
            .deletePhone(phoneId)
            .then(() => this.refreshPhoneList())
            .catch(err => this.setState({ error: 'An error occurred while delete the phone. Please, try it again.' }))
    }

    handleCreateModal = visible => this.setState({ showCreateModal: visible })

    handleEditModal = (visible, phone) => this.setState({ showEditModal: visible, phoneToEdit: phone })

    render() {
        return (
            <>
                <Container className="hero">
                    <h1>Phones Catalog</h1>
                    <hr />
                    <div style={{ textAlign: 'center', marginBottom: '25px', borderRadius: '50%' }}>
                        <Button style={{ textAlign: 'center', marginBottom: '25px', borderRadius: '50px' }} onClick={() => this.handleCreateModal(true)} variant="light" size="md">Add new phone⠀➕</Button>
                    </div>
                    <Row>
                        {
                            this.state.phones
                                ?
                                this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} deleteElement={() => this.deletePhone(elm._id)} handleModal={() => this.handleEditModal(true, elm)} />)
                                :
                                <Loader />
                        }
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.showCreateModal} onHide={() => this.handleCreateModal(false)}>
                    <Modal.Body>
                        <PhoneForm closeModal={() => this.handleCreateModal(false)} updateList={this.refreshPhoneList} />
                    </Modal.Body>
                </Modal>
                <Modal size="lg" show={this.state.showEditModal} onHide={() => this.handleEditModal(false)}>
                    <Modal.Body>
                        <PhoneEdit closeModal={() => this.handleEditModal(false)} updateList={this.refreshPhoneList} phone={this.state.phoneToEdit} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}