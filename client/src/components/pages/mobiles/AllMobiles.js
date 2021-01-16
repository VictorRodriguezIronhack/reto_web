import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import MobileService from './../../../service/mobile.service'
import MobileCard from './Mobiles-card'

function MobilesList() {
    const mobileService = new MobileService()
    const [mobile, setMobiles] = useState([])
    
    useEffect(() => {
        mobileService.getMobiles()
        .then(mobile => {setMobiles(mobile.data) })
        .catch(err => console.log (err))
    }, [])

    return (
        <>
            <Container>
                
                <h1>Lista de móviles</h1>
                
                <Row>
                    {mobile.map(elm => <MobileCard key={elm.id}{...elm}/>)}
                </Row>
            </Container>
        </>
    )
}

export default MobilesList
