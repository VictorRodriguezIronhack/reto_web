import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import phoneService from '../services/phoneServices'
import { Container, Row, Col, Button } from 'react-bootstrap'


 function PhoneDetails() {
     const [phoneDetails,setPhoneDetails]=useState({})
     const {phone_id}=useParams()
     useEffect(()=>{
         phoneService
         .getOnePhone(phone_id)
         .then(({data})=>setPhoneDetails(data))
         .catch(err=>console-log(err))
     },[])

  return (
    <Container>
<h1>Details</h1>
<br></br>
<Row>
    <Col md={2}>
<h3> {phoneDetails.name}</h3>

    </Col>
</Row>

    </Container>

  )
}
export default PhoneDetails