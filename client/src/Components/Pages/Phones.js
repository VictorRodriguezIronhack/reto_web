import React, { useEffect, useState } from 'react';
import PhoneService from '../../service/phone.service'
import { Card, Button, Container, Col, Row, Spinner } from 'react-bootstrap'
import img from '../../img/Galaxy_S7.png'

export default function Phones() {


    const phoneService = new PhoneService()
    const [phones, setPhones] = useState(null)

    const getPhones = () => {
        phoneService.findPhones()
            .then(res => {
                console.log(res.data)
                setPhones(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPhones()
    }, [])

    return (
        <div>
            <Container>
                {phones ?
                    <Row>
                        {phones?.map(elm => {
                            return (
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={elm.imageFileName} alt={elm.name} />
                                        <Card.Body>
                                            <Card.Title>{elm.name}</Card.Title>
                                            <Card.Text>
                                                {elm.description}
                                            </Card.Text>
                                            <Button variant="primary">Ver detalles</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }

            </Container>
        </div>
    )
}
