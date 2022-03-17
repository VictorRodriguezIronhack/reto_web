import { useEffect, useState } from "react"
import phonesService from "../../services/phones.services"
import { Col, Row } from "react-bootstrap"
import { Link} from "react-router-dom"

import "./IndexPage.css"



const IndexPage = () => {

    const [phones, setPhones ] = useState([])

    useEffect(()=> {
        loadPhones()
        
    }, [])
    
    const loadPhones = () => {
        phonesService 
        .getAll()
        .then(response => setPhones(response.data))
        .catch(err => console.log(err))
        
    }
   
    return (
        <>
        <h1 className="title">The Phone Cave</h1>
        <Row>
            {
               phones.map((phone)=>{
                   
                   return(
                       <Col md={4} key={phone.id} className='phoneDiv'>
                           <p>{phone.name}</p>
                           <p>{phone.manufacturer}</p>
                           <img src={require(`../../assets/${phone.imageFileName}`)} alt='phone' />
                           <Link to={`/${phone.id}`} props={phone}>Detalles</Link>

                       </Col>
                   )
               })
            }
        </Row>
        </>
    )
}

export default IndexPage

  //  < img src = { require(`./${phone.imageFileName }`)} alt='phone' />
