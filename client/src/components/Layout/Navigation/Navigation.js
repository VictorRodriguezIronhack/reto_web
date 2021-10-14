import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function () {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Inicio</Link>
                    <Link to='/telefonos'>Telefonos</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
