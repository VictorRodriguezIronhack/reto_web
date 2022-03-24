import React from 'react'
import "./Footer.css"
import { Row, Col, Containmer } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer' bg="dark" expand="lg">
           <Row className='rew'>
            <Col md={3}>
                <Link to="/contact">Contact</Link>
                <p>Shipping info</p>
                <p>Return Policies</p>
            </Col>
            <Col md={6}>
                
            </Col>
                <Col md={3}>
                    <p>carbon print</p>
                    <p>Dealer credentials</p>
                    <p>Return Policies</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer