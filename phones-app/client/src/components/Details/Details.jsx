import React from 'react'
import { Card, Image, ListGroupItem, ListGroup } from "react-bootstrap"
import "./Details.css"

 function Details(props) {
  return (
    <div className="detail">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../img/${props.imageFileName}`)} />
      <Card.Body>
        <Card.Title>{props.manufacturer}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Color: {props.color}</ListGroupItem>
        <ListGroupItem>Pantalla: {props.screen}</ListGroupItem>
        <ListGroupItem>Procesador: {props.processor}</ListGroupItem>
        <ListGroupItem>RAM: {props.ram}</ListGroupItem>
      </ListGroup>
      <br />
      <Card.Title> PVP: {props.price}€</Card.Title>

    </Card>
    </div>
  )
}
export default Details