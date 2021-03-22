import { Component } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PhoneForm from './../Phone-form/Phone-form'
import PhoneService from './../../../service/phones.service'


class PhoneDetails extends Component {

    constructor() {
        super()
        this.state = {
            phone: undefined,
            showForm: false,
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount() {
        this.chargingPhones()
    }

    chargingPhones() {
        const phone_id = this.props.match.params.phone_id

        this.phoneService
            .getPhone(phone_id)
            .then(response => this.setState({ phone: response.data }))
            .catch(err => console.log(err))
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    deletePhones(phone_id) {
        this.phoneService
            .deletePhone(phone_id)
            .then(() => this.props.history.push("/phones-list"))
            .catch(err => console.log(err))
    }

    editReview() {
        this.phoneService
            .editPhone(this.state.phone?._id, this.state)
            .then(response => {
                this.setState({ phone: response.data })
                this.chargingPhones()
            })
            .catch(error => console.log(error))
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }


    render() {

        return (
            <div className="navMargin" style={{ maxHeight: '100%' }} >
                <Row style={{ backgroundColor: 'rgb(204, 197, 197, 0.7)', height: '57vh' }} >
                    <Col style={{ alignItems: "center" }} xs={6} >
                        <img style={{ height: "57vh", objectFit: 'cover' }} src={this.state.phone?.imageFileName} alt={this.state.phone?.name} />
                    </Col>
                    <Col className='designdetails1' style={{ fontSize: '1vw' }} >
                        <Row style={{ alignItems: "center", marginTop: '15%' }} >
                            <h1 style={{ fontSize: '4em', width: "100%", textAlign: 'center', color: 'rgba(130,108,60,255)' }} > {this.state.phone?.name} </h1>
                        </Row>
                    </Col>
                </Row>
                <Container as="section">
                    <Col>
                        <br />
                        <h3><strong>Details</strong></h3>
                        <hr />
                        <br />
                        <p> <strong> Name:</strong>{this.state.phone?.name}</p>
                        <p> <strong> Manufacturer:</strong>{this.state.phone?.manufacturer}</p>
                        <p> <strong> Color:</strong>{this.state.phone?.color}</p>
                        <p> <strong> Price:</strong>{this.state.phone?.price}</p>
                        <p> <strong> Screen:</strong>{this.state.phone?.screen}</p>
                        <p> <strong> Processor:</strong>{this.state.phone?.processor}</p>
                        <p><strong>Description:</strong></p>
                        <p>{this.state.phone?.description}</p>
                            <div>
                                <Button onClick={() => this.togglemodalForm(true)} variant="outline-secondary" size="sm" style={{ width: '30%' }}>
                                    <Link to={`/details/${this.state.phone?._id}`} className="btn">Edit</Link>
                                </Button>
                                <Button onClick={() => this.deletePhones(this.state.phone?._id)} variant="outline-secondary" size="sm" style={{ width: '30%' }}>
                                <Link to="/phones-list" className="btn">Delete</Link>
                                </Button>
                            </div> 
                        <hr />
                        <Link to="/phones-list" className="btn btn-dark">Go back</Link>
                        <hr />
                    </Col>
                </Container>

                <Modal className="navMargin" show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Phone</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PhoneForm closeModal={() => this.togglemodalForm(false)} phone={this.state.phone} refreshList={() => this.chargingPhones()} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

}


export default PhoneDetails


