import React from 'react'

// Styles
import { Navbar } from 'react-bootstrap'
import './Navigation.css'


const Navigation = () => {

    return (
        <Navbar className="navbar" bg="dark" variant="dark">
            <Navbar.Brand href="/">The Phone Cave</Navbar.Brand>
        </Navbar>
    )

}


export default Navigation
