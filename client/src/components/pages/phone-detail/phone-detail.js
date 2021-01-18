import React, { Component } from 'react'
import PhonesService from './../../../service/phones.service'
import { Spinner, Modal, Button } from 'react-bootstrap'
import PhoneDetailCard from './../phone-detail-card/phone-detail-card'
import './phone-detail.css'

class PhoneDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            phone: undefined,
            setShow: false
        }

        this.phonesService = new PhonesService()
    }

    componentDidMount() {
        console.log(this.props.match.params.id)

        this.phonesService
            .getPhoneDetails(this.props.match.params.id)
            .then(res => this.setState({ phone: res.data }))
            .catch(err => console.log(err))
    }

    deletePhone = () => {

        this.phonesService
            .deletePhone(this.props.match.params.id)
            .then(() => this.props.history.push('/telefonos'))
            .catch(err => console.log(err))

    }

    handleClose = () => this.setState({ setShow: false });
    handleShow = () => this.setState({ setShow: true });

    render() {
        return (
            <>
                {this.state.phone ?
                    <PhoneDetailCard {...this.state.phone} handleModal={this.handleShow} />
                    :
                    <Spinner animation="border" role="status"></Spinner>
                }

                <Modal show={this.state.setShow} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>¿Estás seguro de que quieres eliminar este teléfono?</Modal.Body>
                    <Modal.Body>Esta acción no se puede deshacer.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Atrás
                        </Button>
                        <Button variant="danger" onClick={this.deletePhone}>
                            Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default PhoneDetail