import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import PhoneList from './../teléfono/PhonesList'
import './Homepage.css'

class Homepage extends Component {

    render() {

        return (
              
            <Container>
                <Row className='homepage'>
                <h1>Catálogo de teléfonos</h1>
                    <Row>
                        <PhoneList/>
                    </Row>
                </Row>

            </Container>
        )
    }
}



export default Homepage