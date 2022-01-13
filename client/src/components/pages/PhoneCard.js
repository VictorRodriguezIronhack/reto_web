import React from 'react';
import { Card } from 'react-bootstrap';

const PhoneCard = ({id, name, manufacturer, descriptions, color, price, imageFileName, screen, processor, ram }) => {

    return (
        <div>
            <Card>
                <Card.Img src={imageFileName} />
                <Card.Body>
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Text>{descriptions}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PhoneCard;
