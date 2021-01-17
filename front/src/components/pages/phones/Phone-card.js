import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, ButtonGroup, Button } from 'react-bootstrap'


const PhoneCard = props => {
    return (
        <>
            <Col xs={12} sm={6} md={6} lg={4} style={{ padding: '0 30px'}}>
                <Card style={{ marginTop: "30px" }} class="phone-card">
                    <Link to={`/details/${props.phone._id}`}>
                        <Card.Img variant="top" src={`/images/${props.phone.imageFileName}`} style={{ height: '400px' }} />
                    </Link>
                    <Card.Body>
                        <Link to={`/details/${props.phone._id}`}>
                            <Card.Title>{props.phone.manufacturer} {props.phone.name}</Card.Title>
                        </Link>
                        <Card.Text style={{textTransform: 'capitalize'}}>{props.phone.color}</Card.Text>
                        <Card.Subtitle >Price: {props.phone.price}€</Card.Subtitle>
                        {props.theUser
                            &&
                        <ButtonGroup style={{ width: '100%', marginTop: '15px'}}>
                            <Button variant="secondary" onClick={() => props.editPhone(props.phone._id)}>Edit</Button>
                            <Button variant="secondary" onClick={() => props.deletePhone(props.phone._id)}>Delete</Button>
                        </ButtonGroup>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default PhoneCard