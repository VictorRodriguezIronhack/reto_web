import { Link } from 'react-router-dom'

// Styles
import { Col, Card, ButtonGroup } from 'react-bootstrap'
import './Phone-card.css'


const PhoneCard = ({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram, id }) => {

    return (

        <Col>

            <Card.Img variant="top" src={`./images/${imageFileName}`} />

            <Card.Body>

                <Card.Title as="h3">{name}</Card.Title>
                <Card.Subtitle as="h5" className="text-muted">{manufacturer}</Card.Subtitle>

                <ButtonGroup>
                    <Link to={`/telefonos/${id}`}>Ver detalles</Link>
                </ButtonGroup>

            </Card.Body>

        </Col>
    )
}



export default PhoneCard 
