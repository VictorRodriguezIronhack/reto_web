import React, { useContext, useState } from 'react'
import { Container, Form, Row, Button, Col, Image } from 'react-bootstrap'
import './Contact.css'

import { useNavigate } from 'react-router-dom'


function ContactElement() {

    const [contactData, setContactData] = useState({
        text: "",
        email: ""
    })
    const { text, email } = contactData

    const handleInputChange = e => {
        const { value, name } = e.target

        setContactData({
            ...contactData,
            [name]: value
        })
    }

    return (
        <>
        
            <Container>
                <Row>
                    <Col md={4} >
                        
                    </Col>
                    <Col md={8}>

                        <Form className='cont' >
                            <h1>Doubts? Plase Contact us¡¡</h1>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Yuor email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" value={contactData.email} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Write to Us</Form.Label>
                                <Form.Control name="text" value={contactData.text} onChange={handleInputChange} as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="buttonS" type="submit">
                                Send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ContactElement