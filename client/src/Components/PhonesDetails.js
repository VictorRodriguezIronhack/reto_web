import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PhoneService from '../services/phones.services'
import { Link } from 'react-router-dom'
import "../Components/phones.css"

const phoneService = new PhoneService()

const DetailsPhone = (props) => {
  const {id} = useParams();
  const [details, setDetails] = useState(undefined)
  

  const phoneDetails = (props) => {
    phoneService
    .getDetails(id)
    .then((res) => {setDetails(res.data);
    })
    .catch((err) => console.error(err))
  };

  useEffect(() => {
    phoneDetails() 
  }, []);

    return (
      <div>
         <h1>The Phone Cave Details</h1>
         
          {details? (
              <div>
                <h2> {details.name}</h2>
                <img src={`/${details.imageFileName}`} alt={details.name}/>
                <p>Manufacturer: {details.manufacturer}</p>
                <p>Description: {details.description}</p>
                <p>Color: {details.color}</p>
                <p>Price: {details.price}€</p>
                <p>Screen: {details.screen}</p>
                <p>Processor: {details.processor}</p>
                <p>Ram: {details.ram}</p>
            </div>
          ):
          (<p>Not details found</p>)}

          <Link to={"/"} >Home</Link>
      </div>
    )
}

export default DetailsPhone