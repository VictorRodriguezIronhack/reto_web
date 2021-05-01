import { Link } from 'react-router-dom'

// Styles
import { Col, Card, ButtonGroup } from 'react-bootstrap'
import './Phone-card.css'


const PhoneCard = ({ name, manufacturer, imageFileName, id }) => {

    return (

        <Col className="phone-card text-center" md={4} lg={3}>

            <Card.Img variant="top" src={`./images/${imageFileName}`} alt={name}/>

            <Card.Body>

                <Card.Title as="h3">{name}</Card.Title>
                <Card.Subtitle as="h5" className="text-muted">{manufacturer}</Card.Subtitle>

                <ButtonGroup>
                    <Link className="btn" to={`/telefonos/${id}`}>Details</Link>
                </ButtonGroup>

            </Card.Body>

        </Col>
    )

}


export default PhoneCard 
