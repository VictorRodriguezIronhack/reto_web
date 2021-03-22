import { Component } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import PhonesList from './PhonesList'
import PhoneForm from './../Phone-form/Phone-form'
import './Phones.css'
import PhoneService from './../../../service/phones.service'
import Spinner from './../../shared/Spinner/Spinner'



class Phones extends Component {

    constructor() {
        super()
        this.state = {
            phones: [],
            showForm: false,
        }

        this.phoneService = new PhoneService()
    }

    componentDidMount() {
        this.chargingPhones()
    }

    chargingPhones() {
        this.phoneService
            .getPhones()
            .then(response => this.setState({ phones: response.data }))
            .catch(err => console.log(err))
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    render() {

        return (
            <>
                <Container className="navMargin" as="section">
                    <br />
                    <Button onClick={() => this.togglemodalForm(true)} variant="btn btn-secondary" style={{ fontFamily: 'Cormorant Unicase' }} className="new-phone-btn">Create new phone</Button>
                    {this.state.phones.length ? <PhonesList phones={this.state.phones} /> : <Spinner />}
                </Container>

                <Modal style={{ fontFamily: 'Cormorant Unicase' }} className="navMargin" show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Phone</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PhoneForm closeModal={() => this.togglemodalForm(false)} refreshList={() => this.chargingPhones()} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}


export default Phones
