import { Card, Col, Button } from 'react-bootstrap'
import React, { useState } from 'react';
import styled from '@emotion/styled'
import Popup from '../shared/PopUp'
import PhonePage from './PhonePage'

const StyledTitle = styled(Card.Title)`
    &:hover{
        cursor:pointer;
        color:gray
    }
`

const PhoneCard = ({ phone, loggedUser, addPhone }) => {

    const [modal, setModal] = useState(false)

    return (
        <Col md={4}>
            <Card style={{ margin: '10px 0' }}>
                <Card.Img variant="top" style={{ objectFit: 'cover', height: '160px' }} src={phone.imageFileName} />
                <Card.Body>
                    <StyledTitle onClick={() => { setModal(true) }} >{phone.name}</StyledTitle>
                    <Card.Text>
                        {phone.manufacturer} - €{phone.price}
                    </Card.Text>
                    {loggedUser && <Button variant='primary' size='sm' onClick={() => addPhone(loggedUser._id, phone.id)}>Add</Button>}
                </Card.Body>
            </Card>

            <Popup show={modal} title='Phone Details' handleModal={setModal}>
                <PhonePage phoneId={phone.id} />
            </Popup>
        </Col>
    );
}

export default PhoneCard;