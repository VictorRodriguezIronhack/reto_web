import React from 'react'
import {Card, Image} from "react-bootstrap"


 function Details(props) {
  return (
    <div>
      <Image src={requestAnimationFrame(`../img/${props.imageFileName}`)}/>
   <p>{props.manufacturer}</p>
          <p>{props.description}</p>
          <p>{props.color}</p>
          <p>{props.screen}</p>
          <p>{props.processor}</p>
          <p>{props.ram}</p>
          <p>{props.price}</p>
    </div>

  )
}
export default Details