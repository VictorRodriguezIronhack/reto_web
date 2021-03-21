import { useLayoutEffect, useState } from 'react'

import { Container, Row, Col, Spinner } from "react-bootstrap"
import PhoneService from '../../services/phone.Services'
import '../Index/home.css'



const PhoneDetails = (props) => {

    const phoneService = new PhoneService()
    const [phones, setPhones] = useState(undefined)

    useLayoutEffect(() => {
        phoneService
            .getPhones()
            .then(response => setTimeout(() => { setPhones(response.data) }, 500))

    }, [])

    return (
        <Container>
            {phones
                ?

                <Row>
                    <Col md={{ span: 8 }}>
                        <h2>{phones[props.match.params.id]?.name}</h2>

                        <hr />
                        <p>{phones[props.match.params.id]?.description}</p>
                        <p>Manufacturer: {phones[props.match.params.id]?.manufacturer} | Color: {phones[props.match.params.id]?.color} | Price:{phones[props.match.params.id]?.price} $</p>
                        <p>Screen: {phones[props.match.params.id]?.screen} | Color: {phones[props.match.params.id]?.processor} | Ram: {phones[props.match.params.id]?.ram}</p>

                        <hr />

                    </Col>

                    <Col md={4}>
                        <h2>Photos</h2>
                        <img style={{ width: '100%', marginBottom: 20 }} src={`https://res.cloudinary.com/df5xojjiw/image/upload/v1616327791/retoWeb/${phones[props.match.params.id]?.imageFileName}`} alt={phones[props.match.params.id]?.name} />
                    </Col>

                </Row>
                :
                <Spinner className='loader' animation="border" variant="success" />
            }
        </Container>
    )
}

export default PhoneDetails