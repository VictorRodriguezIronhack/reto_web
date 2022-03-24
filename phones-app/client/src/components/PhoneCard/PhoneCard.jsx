import React from 'react'
import { Image, Card, Button,Container } from "react-bootstrap"
import "./Card.css"

function PhoneCard(props) {
  const show = () => {
    props.openModal()
    props.setShowP({ ...props })
  }
  return (
    <div className='card'>
      <Container>
<div className='info'>
        <Image src={require(`../img/${props.imageFileName}`)} />
        <h1>{props.name}</h1>
        <h3>{props.price}€</h3>

        <Button onClick={show}> Detalles</Button>
        </div>
      </Container>

    </div>
  )
}
export default PhoneCard