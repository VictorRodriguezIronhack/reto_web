import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhoneService from '../services/phones.services'
import "../Components/phones.css"

const ListPhones = () => {

  const phoneService = new PhoneService()
  const [loading, setLoading] = useState(null);
  const [phones, setphones] = useState(undefined)
  
  const allphones = () => {
    phoneService
    .getAlls()
    .then((phones) => {setphones(phones.data);
    })
    .catch((err) => console.error(err))
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      allphones() 
    }, 1000);
    return () => clearTimeout(timer);
  }, []);  
  
    return (
      <div className='phone'>
         <h1>The Phone Cave</h1>
         <div className='list'>
            {phones? phones.map(elm=>
              <div className='card' key={elm.name}>
                <h3 className='cardh3'>{elm.name} </h3>
                <img src={`/${elm.imageFileName}`} alt={elm.name}/>
                <Link className='link' to={`/details/${elm.id}`} > Detalles</Link>
              </div>
            ) : (   
            <div class="loader">Loading...</div>
            )}
          </div>
      </div>
    )
}

export default ListPhones