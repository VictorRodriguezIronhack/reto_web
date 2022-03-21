import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import phones from '../../phones.json'
import { Container, Row, Col } from 'react-bootstrap'
import './PhoneDetails.css'

function PhoneDetails() {

    const { id } = useParams()
    const [phoneDetails, setPhoneDetails] = useState(phones[id])
    const { name, manufacturer, imageFileName, description, color, price, screen, processor, ram } = phoneDetails

    return (
        <Container className='m-5'>
            <h1>{name}</h1>
            <Row className='mt-5'>
                <Col>
                    <img className='oneimage' src={require(`../../../public/img/${imageFileName}`)} />
                </Col>
                <Col className='text' xs={12} md={6}>
                    <p><str>Manufacturer:</str> {manufacturer}</p>
                    <p><str>Description:</str> {description}</p>
                    <p><str>Color:</str> {color}</p>
                    <p><str>Price:</str> {price}</p>
                    <p><str>Screen:</str> {screen}</p>
                    <p><str>Processor:</str> {processor}</p>
                    <p><str>RAM:</str> {ram}</p>
                    <br />
                    <Link to="/"> Go back</Link>
                </Col>

            </Row>

        </Container>
    )

}
export default PhoneDetails