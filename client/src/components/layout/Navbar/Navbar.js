import React, { Component } from 'react'
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap'
import AuthService from './../../../service/auth.service'
import { Link } from 'react-router-dom'

class navbar extends Component {

    constructor() {
        super()
        this.authService = new AuthService()
    }

    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Navbar className="sticky-top" expand="lg">
                <Navbar.Brand>
                    <Link to='/'>
                        <Nav.Link as="div" className="brand-navbar">The Phone Cave</Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/teléfonos">
                            <Nav.Link as="div">Smartphones</Nav.Link>
                        </Link>

                        {
                            this.props.loggedUser
                                ?
                                <Nav.Link as="div" onClick={this.logOut}>Logout</Nav.Link>
                                :
                                <>
                                    <Link to="/registro">
                                        <Nav.Link as="div">Register</Nav.Link>
                                    </Link>
                                    <Link to="/acceso-usuario">
                                        <Nav.Link as="div">Login</Nav.Link>
                                    </Link>
                                </>
                        }
                        <Nav.Link as="div">Hello, {this.props.loggedUser ? this.props.loggedUser.username : 'guess'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default navbar