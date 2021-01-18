import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import './Navigation.css'

class Navigation extends Component {

    

    render() {
        return (
            <div id='navbar'>
                <Navbar variant='dark' style={{ background: '#E14B55' }} fixed='top' expand='md'>
                    <Navbar.Brand href='/'>Main Page</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav' >
                        <Nav className='ml-auto'>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation