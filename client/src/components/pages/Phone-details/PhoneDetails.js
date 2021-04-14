import { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PhoneForm from './../Phone-form/Phone-form'
import PhoneService from './../../../service/phones.service'
import swal from 'sweetalert'


class PhoneDetails extends Component {

    constructor() {
        super()
        this.state = {
            phone: undefined,
            showForm: false,
            showDelete: false
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

    deleteAlert(phone_id) {
        swal({
            title:'Delete',
            text:'Are you sure you want to delete this phone? This action can not be undone.',
            icon:'warning',
            buttons: ['No','Yes'],

        }).then(ans=>{
            if (ans){
                this.phoneService
                    .deletePhone(phone_id)
                    .then(() => this.props.history.push("/phones-list"))
                    .catch(err => console.log(err))
                swal({ text:'The file has been deleted successfully', icon:'success',timer:'2000'})   
            }
        })
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
            <div className="navMargin" style={{ maxHeight: '100%', fontFamily: 'Cormorant Unicase' }} >
                <Row style={{ height: 'auto', maxWidth: '100%' }} >
                    <Col style={{ alignItems: "center" }} md={6} >
                        <img style={{ maxWidth: '100%', height: 'auto', maxHeight: '50vw', minHeight: '50vw', objectFit: 'cover' }} src={this.state.phone?.imageFileName} alt={this.state.phone?.name} />
                    </Col>
                    <Col className='designdetails1' style={{ fontSize: '1vw', alignItems: "center", marginTop: '1.5%' }} >
                        <h1 style={{ fontSize: '4rem', width: "100%", textAlign: 'center', color: 'rgba(130,108,60,255)' }} > {this.state.phone?.name} </h1>
                        <h3><strong>Details</strong></h3>
                        <hr />
                        <p style={{ fontSize: '1.3rem' }} ><strong> Name: </strong>{this.state.phone?.name}</p>
                        <p style={{ fontSize: '1.3rem' }} ><strong> Manufacturer: </strong>{this.state.phone?.manufacturer}</p>
                        <p style={{ fontSize: '1.3rem' }} ><strong> Color: </strong>{this.state.phone?.color}</p>
                        <p style={{ fontSize: '1.3rem' }} ><strong> Price: </strong>{this.state.phone?.price}</p>
                        <p style={{ fontSize: '1.3rem' }} ><strong> Screen: </strong>{this.state.phone?.screen}</p>
                        <p style={{ fontSize: '1.3rem' }} ><strong> Processor: </strong>{this.state.phone?.processor}</p>
                        <p style={{ fontSize: '1.3rem' }} ><strong> RAM: </strong>{this.state.phone?.ram}</p>
                        <p style={{ fontSize: '1.3rem' }} ><strong>Description: </strong></p>
                        <p style={{ fontSize: '1.3rem' }} >{this.state.phone?.description}</p>
                        <div alignItems='center'>
                            <hr />
                            <Link onClick={() => this.togglemodalForm(true)} className="btn btn-outline-danger" variant="outline-secondary" size="sm" style={{ width: '30%' }} to={`/details/${this.state.phone?._id}`}>Edit</Link>
                            <Link onClick={() => this.deleteAlert(this.state.phone?._id)} variant="outline-secondary" size="sm" style={{ width: '30%' }} className="btn btn-danger">Delete</Link>
                            <hr />
                            <br />
                            <Link to="/phones-list" className="btn btn-secondary">Go back</Link>
                            <p />
                        </div>
                    </Col>
                </Row>


                <Modal className="navMargin" style={{ fontFamily: 'Cormorant Unicase' }} show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
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
