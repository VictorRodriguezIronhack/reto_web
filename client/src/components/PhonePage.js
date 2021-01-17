import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap'
import PhoneServices from '../services/phones.service'

const PhonePage = ({ phoneId }) => {

    const [phone, setPhone] = useState(undefined)

    useEffect(() => {

        const fetchPhone = async () => {

            try {
                const phoneServices = new PhoneServices()
                const phone = await phoneServices.getPhone(phoneId)
                setPhone(phone.data)

            } catch (error) {
                console.log(error.response.data.message)
            }
        }

        fetchPhone()

    }, [])

    return (
        <Container>
            {phone ?
                <Card>
                    <Row>
                        <Col md={6}>
                            <Card.Img variant="top" src={phone.imageFileName} />
                        </Col>
                        <Col md={6}>
                            <Card.Body>
                                <Card.Title>{phone.manufacturer} {phone.name}  -  €{phone.price}</Card.Title><hr />
                                <Card.Text>
                                    {phone.description}<br /><br />
                                    <small className="text-muted" style={{ fontWeight: 'bold' }}>Color: {phone.color}</small><br />
                                    <small className="text-muted" style={{ fontWeight: 'bold' }}>Screen: {phone.screen}</small><br />
                                    <small className="text-muted" style={{ fontWeight: 'bold' }}>Processor: {phone.processor}</small><br />
                                    <small className="text-muted" style={{ fontWeight: 'bold' }}>Ram: {phone.ram}</small><br />
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                :
                <h2>Cargando</h2>
            }
        </Container>
    );
}

export default PhonePage;