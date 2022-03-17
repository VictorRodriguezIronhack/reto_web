import { useEffect, useState } from "react"
import phonesService from "../../services/phones.services"
import { Col, Row } from "react-bootstrap"
import Galaxy_S7 from "./Galaxy_S7.png"
import IPhone_7 from "./IPhone_7.png"
import { Link, NavLink } from "react-router-dom"

import "./IndexPage.css"



const IndexPage = () => {

    const [phones, setPhones ] = useState([])

    useEffect(()=> {
        loadPhones()
        //console.log(phones[0].imageFileName.slice(0, -4))
    }, [phones])
    
    const loadPhones = () => {
        phonesService 
        .getAll()
        .then(response => setPhones(response.data))
        .catch(err => console.log(err))
        
    }
   // client / src / assets / Galaxy_S7.png
    return (
        <>
        <h1>The Phone Cave</h1>
        <Row>
            {
               phones.map((phone)=>{
                   console.log(phone.imageFileName.slice(0, -4))
                   return(
                       <Col md={4} key={phone.id} className='phoneDiv'>
                           <p>Name: {phone.name}</p>
                           <p>Manufacturer: {phone.manufacturer}</p>
                           <img src={phone.imageFileName.slice(0, -4)} alt='phone' />
                           <Link to={`/${phone.id}`}>Detalles</Link>

                       </Col>
                   )
               })
            }
        </Row>
        </>
    )
}

export default IndexPage