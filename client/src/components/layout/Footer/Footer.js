import React, { Component } from 'react';
import { Row, Navbar } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {

    render() {

        return (

            <Navbar className="main-footer" bg='dark' variant='dark' expand='sm' >

                <Row>
                <h5>© 2020 Copyright: Lara Lorenzo Iglesias</h5> 
                </Row>
            
            </Navbar>
        )

    }
}

export default Footer