import React, { useState, useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
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
                
                <h1 style={{margin: '50px'}}>PhoneCave_ presents:</h1>
                
                <Row>
                    
                    {mobile
                        
                        ?
                        
                        mobile.map(elm => <MobileCard key={elm.id}{...elm} />)

                        :

                        <Spinner animation="border" variant="danger"/>
                        }
                </Row>
            </Container>
        </>
    )
}

export default MobilesList
