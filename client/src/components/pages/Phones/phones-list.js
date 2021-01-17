import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import PhoneService from './../../../service/phone.service'
import PhoneCard from './phone-card'


function PhoneList () {
    const phoneService = new PhoneService()
    const [phone, setPhones] = useState([])


    useEffect(() => {
        phoneService.getPhones()
            .then(phone => {
                setPhones(phone.data)
            })
        .catch(err => console.log(err))
    }, [])

    const Title = styled.h2`
    color: white;
    text-align: center;
    margin-top: 30px;
    text-transform: uppercase;
    text-shadow: 0 1px white, 0 5px #092756;
    `

    return (
        <body className="body" style={{ position: "absolute", width: "100%"}}>
            <Container>
                <Title>Check some of our best phones</Title>
                <Row className="phone-card">
                    {phone.map(elm => <PhoneCard key={elm._id} {...elm}></PhoneCard>)}
                </Row>
            </Container>
        </body>
    )
} 

export default PhoneList 