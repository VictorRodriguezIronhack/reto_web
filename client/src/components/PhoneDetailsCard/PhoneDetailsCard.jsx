import { Card, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./PhoneDetailsCard.css"


function PhoneDetailsCard({ phone }) {

    const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = phone

    return (
        <Card className="PhoneDetailsCard">
            <Card.Img variant="top" src={require(`../../images/${imageFileName}`)} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Id: {id}</ListGroup.Item>
                    <ListGroup.Item>Name: {name}</ListGroup.Item>
                    <ListGroup.Item>Manufacturer: {manufacturer}</ListGroup.Item>
                    <ListGroup.Item>Description: {description}</ListGroup.Item>
                    <ListGroup.Item>Color: {color }</ListGroup.Item>
                    <ListGroup.Item>Price: {price }</ListGroup.Item>
                    <ListGroup.Item>Size Screen: {screen }</ListGroup.Item>
                    <ListGroup.Item>Processor: {processor }</ListGroup.Item>
                    <ListGroup.Item>RAM: {ram }</ListGroup.Item>
                </ListGroup>        
            </Card.Body>
        </Card >
    )
}

export default PhoneDetailsCard