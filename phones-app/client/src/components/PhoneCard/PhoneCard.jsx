import React from 'react'
import { Image, Card, Button } from "react-bootstrap"

function PhoneCard(props) {
  const show = () => {
    props.openModal()
    props.setPhoneToShow({ ...props })
  }
  return (
    <div>
      <Card>
        <Image src={require(`../img/${props.imageFileName}`)} />
        <p>{props.name}</p>
        <Button onClick={show}> Detalles</Button>
      </Card>

    </div>
  )
}
export default PhoneCard