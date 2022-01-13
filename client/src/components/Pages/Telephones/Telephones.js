import { React, useState, useEffect } from 'react'
import { Badge, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PhoneService from '../../../services/phone.service'
import './Telephones.css'


export default function Telephones() {

    const phoneService = new PhoneService()
    const [telephones, setTelephones] = useState(undefined)

    const phones = () => {
        phoneService.findAll()
            .then(telephones => {
                setTelephones(telephones.data)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        phones()
    }, [])

    return (
        telephones ?
            <Container>
                <Row>
                    {
                        telephones?.map(elm => {
                            return (
                                <Col xs={12} sm={6} lg={4}>
                                    <div className="card-deck">
                                        <Card className='card' style={{ width: '18rem' }, { height: '450px' }} key={elm._id}>
                                            <div className="card-header p-0">
                                                <img className='card-image' src={elm.imageFileName} width="100%" alt={elm.name} />
                                            </div>
                                            <div className="card-body text-center">
                                                <h4>{elm.name}</h4>
                                                <p>{elm.manufacturer}</p>
                                                <p>{elm.color}</p>
                                            </div>
                                            <div className="card-footer">
                                                <Link to={`/detalles-telefono/${elm.id}`}><Badge pill bg="warning"> Detalles </Badge></Link>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })}
                </Row>
            </Container >
            :
            <Spinner className='spinner' animation="border" />
    )
}
