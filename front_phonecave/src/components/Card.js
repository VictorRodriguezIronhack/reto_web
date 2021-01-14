import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props)=>{
    const url = `/${props.info.id}`
  return(
    <Link to={url} className="Card">
      <h4>{props.info.name}</h4>
      <p>{props.info.price}€</p>
      <img src={`/${props.info.imageFileName}`} alt={props.info.name}/>
    </Link>
  )
}

export default Card;