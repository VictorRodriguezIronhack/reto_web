import { React, useState, useEffect } from 'react'
import { Badge, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PhoneService from '../../../services/phone.service'
import './TelephoneDetails.css'

export default function TelephoneDetails(props) {

    const phoneService = new PhoneService()
    const [phone, setphone] = useState([])

    const onePhone = () => {
        phoneService.findOnePhone(props.match.params.id)
            .then(phone => {
                console.log(phone)
                setphone(phone.data)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        onePhone()
    }, [])

    return (
        phone ?
            <Container className='details'>
                {phone.map(elm => {
                    return (
                        <Row>
                            <Col >
                                <img className='image-details' src={elm.imageFileName} alt={elm.name} />
                            </Col>
                            <Col>
                                <p>{elm.name}</p>
                                <p>{elm.description}</p>
                                <p>{elm.manufacturer}</p>
                                <p>{elm.color}</p>
                                <p>{elm.processor}</p>
                                <p>{elm.screen}</p>
                                <p>{elm.price} €</p>
                                <Link to={'/telefonos'}><Badge pill bg="primary"> Volver </Badge></Link>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
            :
            <Spinner className='spinner' animation="border" />
    )
}
