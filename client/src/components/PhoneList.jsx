import React from 'react'
import PhoneCard from './PhoneCard'
import {Row,Col} from 'react-bootstrap'


 function PhoneList({phones}) {
  return (
   <Row>
       {phones.map(phone=> {
           return <Col md={4} key={phone._id}> <PhoneCard {...phone}/></Col>
       })}
   </Row>
  )
}
export default PhoneList

