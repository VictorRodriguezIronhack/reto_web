import { Card, Button, } from "react-bootstrap"
import './Phone.css'
import React from 'react'
import {Link} from 'react-router-dom'


function PhoneCard({ _id, name, manufacturer, description, color, price, imagenFileName, processor, screen, ram }) {
     const phoneData = {_id,name,manufacturer,description,color,price,imagenFileName,processor,screen,ram}

  return (
      <Card className="CardV zoom shadow-lg p-3 mb-5" style={{ width: '18rem' }}>
          <Card.Body >
              <Card.Img className='cardImg' variant="top" src={imagenFileName} />
              <Card.Title><h1>{name}</h1></Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{manufacturer}</Card.Text>
              <Card.Text>{color}</Card.Text>
              <Card.Text>{price}</Card.Text>
              <Card.Text>{processor}</Card.Text>
              <Card.Text>{screen}</Card.Text>
              <Card.Text>{ram}</Card.Text>
    {/* <Link to={`/details/${_id}`}>
        
        <Button variant="warning"> Details</Button>
    </Link> */}
          </Card.Body>


      </Card >
  )
}
export default PhoneCard