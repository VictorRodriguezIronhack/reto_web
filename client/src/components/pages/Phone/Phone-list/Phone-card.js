import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Phone-card.css'

const PhoneCard = ({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram, _id }) => {

        return (
            <Col lg={4}>
                <Card className="phone-card">
                    <Card.Img variant="top" src={imageFileName} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Link className="btn btn-card btn-block btn-sm" to={`/teléfonos/${_id}`}>More details</Link>
                    </Card.Body>
                </Card>
            </Col>
        )
   

}

export default PhoneCard


