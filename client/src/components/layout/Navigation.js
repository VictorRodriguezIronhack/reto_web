import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Navigation.css'

import AuthService from './../../service/auth.service'

class Navigation extends Component {

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
            <Navbar style={{backgroundColor:'#C7FFF3'}} variant="light" expand="md">
                <Link to="/">
                    <Navbar.Brand style={{color:'#3A786A'}}>PhoneZone_</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        
                        {
                            this.props.loggedUser
                                ?
                                <Link className="hover" to="/" onClick={this.logOut}>
                                    <Nav.Link as="div">Cerrar Sesión</Nav.Link>
                                </Link>
                                :
                                <>
                                <Link className="hover" to="/iniciosesion">
                                  <Nav.Link as="div">Inicio Sesión</Nav.Link>
                                </Link>
                                <Link className="hover" to="/registro">
                                    <Nav.Link as="div">Registro</Nav.Link>
                                </Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}


export default Navigation