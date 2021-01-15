import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Megamanx from './Megamanx running (1).png'

const Navigation = () => {

    return (
        <Navbar className="navbar" variant="dark" expand="md">
             <Link to='/'>
                <Navbar.Brand>
                    <img src={Megamanx} width="40" height="40" className="d-inline-block align-top" alt="Phones App logo" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="md-auto">
                    <Link to='/'>
                        <Nav.Link as="div">All phones</Nav.Link>
                    </Link>
                    <Link to='/new-phone'>
                        <Nav.Link as="div">New phone</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
