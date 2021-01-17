import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import React, { useState } from 'react';
import Popup from '../shared/PopUp'
import PhonePage from './PhonePage'

const PhoneCard = ({ phone, loggedUser }) => {

    const [modal, setModal] = useState(false)

    return (
        <Col md={4}>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" style={{ objectFit: 'cover', height: '160px' }} src={phone.imageFileName} />
                <Card.Body>
                    <Card.Title onClick={() => { setModal(true) }} >{phone.name}</Card.Title>
                    <Card.Text>
                        {phone.manufacturer} - €{phone.price}
                    </Card.Text>
                    {loggedUser && <Button variant='primary sm'>Add</Button>}
                </Card.Body>
            </Card>

            <Popup show={modal} title='Phone Details' handleModal={setModal}>
                <PhonePage phoneId={phone.id} />
            </Popup>
        </Col>
    );
}

export default PhoneCard;