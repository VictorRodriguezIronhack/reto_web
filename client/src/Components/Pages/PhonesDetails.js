import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PhoneService from '../../service/phone.service'

export default function PhonesDetails(props) {

    const phoneService = new PhoneService()
    const [phone, setPhone] = useState(null)

    const getOnePhone = () => {

        phoneService.findOnePhone(props.match.params.id)
            .then(phone => {
                setPhone(phone.data)
            })
            .catch(err => console.log(err))
    }
    console.log(phone)

    useEffect(() => {
        getOnePhone()
    }, [])


    return (
        <div>
            <Container>
                <Row>
                    {phone?.map(elm => {
                        return (
                            <>
                                <Col>
                                    <p>Nombre: {elm.name}</p>
                                    <p>Fabricante: {elm.manufacturer}</p>
                                    <p>Color: {elm.color}</p>
                                    <p>Descripción: {elm.description}</p>
                                    <p>Precio: {elm.price}</p>
                                    <p>Procesador: {elm.processor}</p>
                                    <p>Memoria Ram: {elm.ram}</p>
                                    <p>Pantalla: {elm.screen}</p>
                                </Col>
                                <Col>
                                    <img src={elm.imageFileName} alt={elm.name} />
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
