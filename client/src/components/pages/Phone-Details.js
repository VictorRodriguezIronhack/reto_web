import { Component } from 'react'
import PhoneService from './../../services/phone.service'
import { Link } from 'react-router-dom'
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

        const { phoneId } = this.props.match.params

        this.phoneService
            .getOnePhone(phoneId)
            .then(response => this.setState({ phone: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        const { phone } = this.state

        return (

            <Container>
                {
                    !phone ?
                        <Spinner animation="border" role="status">
                            <span className="sr-only"></span>
                        </Spinner>
                        :

                        <div className="phoneDetailsCard">
                            <img className="detailsImg" src={`http://localhost:5000/img/${phone.imageFileName}`} />
                            <div className="specifications">
                                <h1>{phone.name}</h1>
                                <hr />
                                <Row className="justify-content-between">
                                    <Col md={6}>
                                        <h3>Información</h3>
                                        <p>{phone.manufacturer}</p>
                                        <p>{phone.description}</p>
                                        <hr />
                                        <h3>Especificaciones</h3>
                                        <p><strong>Color:</strong> {phone.color}</p>
                                        <p><strong>Pantalla:</strong> {phone.screen}</p>
                                        <p><strong>Procesador:</strong> {phone.processor}</p>
                                        <p><strong>Memoria RAM:</strong> {phone.ram} GB</p>
                                        <p><strong>Pecio:</strong> {phone.price}</p>
                                        <hr />
                                        <Link to="/" className="btn btn-dark goBackBtn">Volver al listado</Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                }

            </Container>
        )
    }
}

export default PhoneDetails