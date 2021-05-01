import React from 'react'

// Styles
import { Navbar } from 'react-bootstrap'
import './Navigation.css'


const Navigation = () => {

    return (
        <Navbar className="navbar" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img src="/logo.png" alt="Logo The Phone Cave" width="30" height="30" className="d-inline-block align-top"/>{' '}
                The Phone Cave
            </Navbar.Brand>
        </Navbar>
    )

}


export default Navigation
