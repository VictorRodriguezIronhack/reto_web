import React from 'react'
import PhonesService from "./../../services/phones.service";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const phonesService = new PhonesService();

const PhoneDetails = () => {

    const [phone, setPhone] = useState(null)

    const displayPhone = () => {
        return phone ? (
            <>
                <Col xs={8} sm={4} lg={6}>
                    <img style={{width: "100%"}} src={phone.imageFileName} alt={phone.name}/>
                </Col>

                <Col xs={8} sm={8} lg={6}>
                    <p><strong>Name: </strong> {phone.name}</p>
                    <p><strong>Manufacturer: </strong>{phone.manufacturer}</p>
                    <p><strong>Description:</strong> </p> <p> {phone.description}</p>
                    <p><strong>Color: </strong> <span>{phone.color}</span></p>
                    <p><strong>Price: </strong> {phone.price}</p>
                    <p><strong>Screen: </strong>{phone.screen}</p>
                    <p><strong>Processor: </strong>{phone.processor}</p>
                    <p><strong>RAM: </strong> {phone.ram}</p>
                </Col>
            </>
                ) : (
                    <Spinner className="mt-5" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
    }
                
    const {id} = useParams()

    useEffect(() => {
        
        phonesService
            .getPhone(id)
            .then(res => setPhone(res.data))
            .catch((err) => console.log(err))
      }, []);

    return (
        <Container>

            <Row>
                <Link to="/telefonos">
                    <Button className="rounded-pill mt-5">Volver</Button>
                </Link>
            </Row>

            <Row className="justify-content-center mt-5" >
                {displayPhone()}    
            </Row>
            
        </Container>
    )
}

export default PhoneDetails
