import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PhoneService from '../services/phones.services'
import { Link } from 'react-router-dom'
import "../Components/phones.css"

const phoneService = new PhoneService()

const DetailsPhone = (props) => {
  const {id} = useParams();
  const [loading, setLoading] = useState(null);
  const [details, setDetails] = useState(undefined)
  
  const phoneDetails = (props) => {
    phoneService
    .getDetails(id)
    .then((res) => {setDetails(res.data);
    })
    .catch((err) => console.error(err))
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      phoneDetails()  
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    return (
      <div className='details'>
         <h1>The Phone Cave Details</h1>
         
          {details? (
              <div className='phoneDetails'>
                  <h1> {details.name}</h1>
                  <img src={`/${details.imageFileName}`} alt={details.name}/>

                  <div className='descriptionPhone'>
                    <p> <h3 className='phoneDetailsh3'>Manufacturer: </h3> {details.manufacturer}</p>
                    <p><h3 className='phoneDetailsh3'>Description:</h3> {details.description}</p>
                  </div>

                  <div className='moredetails'>
                      <p><h3 className='moredetailsh3'>Color:</h3> {details.color}</p>
                      <p><h3 className='moredetailsh3'>Price:</h3> {details.price}€</p>
                      <p><h3 className='moredetailsh3'>Screen:</h3> {details.screen}</p>
                      <p><h3 className='moredetailsh3'>Processor:</h3> {details.processor}</p>
                      <p><h3 className='moredetailsh3'>Ram:</h3> {details.ram}</p>
                  </div>
            </div>
          ):
          (<div class="loader">Loading...</div>)}

          <Link className='homeButton' to={"/"} >Home</Link>
      </div>
    )
}

export default DetailsPhone