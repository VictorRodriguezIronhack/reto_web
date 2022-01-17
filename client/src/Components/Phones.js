import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhoneService from '../services/phones.services'
import "../Components/phones.css"

const ListPhones = () => {

  const phoneService = new PhoneService()
  // const [loading, setLoading] = useState(true);
  const [phones, setphones] = useState(undefined)
  
  // const spinner = () =>{
  //   after 0,5 sec setLoading false
  // }
  const allphones = () => {
    phoneService
    .getAlls()
    .then((phones) => {setphones(phones.data);
    })
    .catch((err) => console.error(err))
  };

  useEffect(() => {
    // setLoading(false)
    allphones() 
  }, []);

    return (
      <div>
         <h1>The Phone Cave</h1>
         <div class="loader">Loading...</div>
          {phones?.map(elm=>
          <div key={elm.name}>
          <h3>{elm.name} </h3>
          <img src={`/${elm.imageFileName}`} alt={elm.name}/>
          <Link to={`/details/${elm.id}`} > Detalles</Link>
          </div>
          )}
          
      </div>
    )
}

export default ListPhones