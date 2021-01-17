import React, { Component } from 'react'
import PhonesService from '../../service/phones.service'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class PhonesDetails extends Component {
    constructor() {
        super()

        this.state = { phone: undefined }
    }

    componentDidMount = () => this.fetchData()

    fetchData = () => {
        const phoneId = parseInt(this.props.match.params.id, 10)
        PhonesService
            .getAll()
            .then(response => {
                const phoneFiltered = response.data.filter(phone => phone.id === phoneId)
                this.setState({ phone: phoneFiltered })
            })
            .catch(err => console.log(err))
    }

    render() {
        const phone = !!this.state.phone && this.state.phone[0];
        const { name, imageFileName, description, color, screen, ram, processor, price, manufacturer } = phone

        return (
            <Container>
                    <h1 style={{marginTop: 50, marginBottom: 30, fontSize: 30, fontWeight: 'bold'}}>{name} details</h1>
                < Row >
                    <Col md={{ span: 6, offset: 3}}>
                        <Card style={{ margin: 50, borderColor: 'rgba(0, 0, 0, 0.5)', borderWidth: 3, boxShadow: '2px 2px 2px 3px rgba(0, 0, 0, 0.2)' }}>
                            <Card.Img style={{ width: 250, height: 250, margin: 'auto', marginTop: 20, objectFit: 'cover' }} variant="top" src={`${process.env.PUBLIC_URL}/${imageFileName}`} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Color: {color}</ListGroupItem>
                                <ListGroupItem>Screen: {screen}</ListGroupItem>
                                <ListGroupItem>RAM memory: {ram}</ListGroupItem>
                                <ListGroupItem>Processor: {processor}</ListGroupItem>
                                <ListGroupItem>Price: {price} €</ListGroupItem>
                                <ListGroupItem>Brand: {manufacturer}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Link className="btn btn-info btn-sm" style={{ marginLeft: 100, width: 200 }} to={'/'}>Go back</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
            </Container >
        )
    }
}
export default PhonesDetails