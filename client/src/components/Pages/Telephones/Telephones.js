import React, { Component } from 'react'
import { Badge, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PhoneService from '../../../services/phone.service'
import './Telephones.css'

export default class Telephones extends Component {

    constructor(props) {
        super(props)
        this.state = {
            telephones: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount() {
        this.phoneService.findAll()
            .then(phone => {
                console.log(phone.data)
                this.setState({
                    telephones: phone.data
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (

            this.state.telephones ?
                <Container>
                    <Row>
                        {this.state.telephones.map(elm => {
                            return (
                                <Col xs={3} md={4}>
                                    <Card className='card' style={{ width: '18rem' }} key={elm._id}>
                                        <img classNAme='card-image' variant="top" src={elm.imageFileName} alt={elm.name} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <Card.Text>
                                                {elm.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>{elm.manufacturer}</ListGroupItem>
                                            <ListGroupItem>{elm.color}</ListGroupItem>
                                            <ListGroupItem>{elm.price} €</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Link to={`/detalles-telefono/${elm.id}`}><Badge pill bg="warning"> Detalles </Badge></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row >
                </Container >
                :
                <div>...Cargando</div>

        )
    }
}
