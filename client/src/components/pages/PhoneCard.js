import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Phones.css'

const PhoneCard = ({ id, name, manufacturer, imageFileName }) => {

    return (
        <Col md={3}>
            <Link to={`/details/${id}`}>
                <Card className="phone-card">
                    <Card.Img variant="top" src={`http://localhost:5000/img/${imageFileName}`} />
                    <Card.Body>
                        <Card.Title className="phone-brand">{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted phone-manufacturer">{manufacturer}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default PhoneCard