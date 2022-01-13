import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PhoneCard.css'

const PhoneCard = ({ _id, name, manufacturer, color, price, imageFileName }) => {
    return (
        <Card className="phone-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageFileName} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{manufacturer}</Card.Text>
                <Card.Text>{color}</Card.Text>
                <Card.Text>{price}</Card.Text>

                <div className='card-button'>
                    <Link to={`/telefonos/detalles/${_id}`}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PhoneCard