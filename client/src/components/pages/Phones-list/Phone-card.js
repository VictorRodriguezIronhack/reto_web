import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import DeleteLogo from './klipartz.com.png'



const PhoneCard = ({ title, manufacturer, description, color, price, imageUrl, screenSize, processor, ramMemory, _id, deleteElement, handleModal }) => {
    return (
        <Col sm={12} md={6} lg={4}>
            <MDBCol style={{ maxWidth: "22rem", marginBottom: '40px' }}>
                <MDBCard>
                    <MDBCardImage className="img-fluid phone-card" src={imageUrl} />
                    <MDBCardBody>
                        <MDBCardTitle style={{ textAlign: 'center', fontWeight: '500', marginTop: '25px' }}>{title}</MDBCardTitle>
                        <hr />
                        <MDBCardText><b>Manufacturer: </b> {manufacturer}</MDBCardText>
                        <MDBCardText><b>Description: </b>{description}</MDBCardText>
                        <MDBCardText><b>Color: </b>{color}</MDBCardText>
                        <MDBCardText><b>Price: </b>${price}</MDBCardText>
                        <MDBCardText><b>Screen Size:</b>{screenSize}</MDBCardText>
                        <MDBCardText><b>Processor / RAM Memory: </b>{processor} / {ramMemory}GB RAM </MDBCardText>
                        <MDBBtn className='btn-sm'><Link style={{ textDecoration: 'none', color: 'white', textTransform: 'uppercase' }} to={`/phones/${_id}`}>Details</Link></MDBBtn>
                        <Button className='btn-sm' onClick={() => handleModal()}>Edit phone</Button>
                        <Link><img src={DeleteLogo} alt='Delete logo' style={{ width: '14.1%' }} onClick={() => deleteElement()} /></Link>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </Col>
    )
}

export default PhoneCard;