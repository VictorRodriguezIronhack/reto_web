import React, { Component } from 'react'
import AuthService from './../../../Service/Auth.service'
import './Nav.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor() {
        super()
        this.authService = new AuthService()
    }

    logout = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }
    render() {
        return (<>
            <Navbar  variant="dark" expand="md" className="nav">

                <Link to="/">

                    <Navbar.Brand >
                        <img
                            alt="Logo"
                            src="https://www.flaticon.com/svg/vstatic/svg/2971/2971416.svg?token=exp=1610888900~hmac=48a48835f0ffe55e616241e35a3cd6fd"
                            width="50"
                            height="50"
                            className="d-inline-block align-top logo"
                        />{' '}</Navbar.Brand>
                </Link>
                <Link to="/">
                    <Navbar.Brand as="span" href="/">PhonApp</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">
                            <Nav.Link as="div">Home</Nav.Link>
                        </Link>
                        <Link to="/phones">
                            <Nav.Link as="div">Phones</Nav.Link>
                        </Link>
                      
                        {this.props.loggedUser ?<>
                              <Link to="/nuevo-telefono">
                            <Nav.Link as="div">New phone</Nav.Link>
                        </Link>
                            <Nav.Link as="div" onClick={this.logout}>Close session</Nav.Link>
                            </>
                            :
                            <>
                                <Link to="/signup">
                                    <Nav.Link as="div">Sign Up</Nav.Link>
                                </Link>
                                <Link to="/login">
                                    <Nav.Link as="div">Log In</Nav.Link>
                                </Link>

                            </>
                        }
                   

                    </Nav>

                </Navbar.Collapse>
            </Navbar>   <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" /></>
        )
    }
}
export default Navigation