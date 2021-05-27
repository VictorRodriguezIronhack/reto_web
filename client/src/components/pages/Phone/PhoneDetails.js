import './PhoneDetails.css'
import { Component } from 'react'
import PhoneService from '../../../service/phone.service'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

class PhoneDetails extends Component {
    constructor() {
        super()
        this.state = {
            phone: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount() {
        this.getPhone()
    }

    getPhone() {
        this.phoneService
            .getOnePhone(this.props.match.params.id)
            .then(response => this.setState({phone: response.data}))
            .catch(err => console.log(err))
    }

    render() {
        const phone = this.state.phone
        return(
            <Container>
                {!this.state.phone? <Spinner animation="border" role="status"></Spinner> : 
                <Row className="phone-details">
                    <Col md={6}>
                        <img src={phone.imageFileName} alt={phone.name}></img>
                    </Col>
                    <Col md={6}>
                        <h1>{phone.name}</h1>
                        <h2>{phone.price}</h2>
                        <p><i>{phone.manufacturer}</i></p>
                        <p>{phone.description}</p>
                        <p><b>Color:</b> {phone.color}</p>
                        <p><b>Screen:</b> {phone.screen}</p>
                        <p><b>Processor:</b> {phone.processor}</p>
                        <p><b>Ram:</b> {phone.ram}</p>
                    </Col>
                </Row>}
            </Container>
        )
    }
}

export default PhoneDetails