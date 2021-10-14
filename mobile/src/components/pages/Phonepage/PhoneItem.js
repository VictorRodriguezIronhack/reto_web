import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PhoneItem({ _id, name, imageFileName, price }) {
  return (
    <Col md={4} className="mb-3 phone-item" >
      <Card>
        <Card.Img variant="top" src={imageFileName} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price} €
          </Card.Text>
          <Link to={`/telefono/${_id}`}>
           <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}
