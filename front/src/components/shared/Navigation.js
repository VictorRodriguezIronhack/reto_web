import React, {Component} from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthService from '../../services/auth.service'


class Navigation extends Component {
    constructor() {
        super()
        this.authService = new AuthService()
    }

    logOut = () => {
        this.authService
            .logout()
            .then(() => this.props.setUser(undefined))
            .catch(err => new Error('ERROR IN LOG OUT', err))
    }

    render() {

        return (
            <Navbar className="navbar" variant="dark" expand="md">
                <Link to='/'>
                    <Navbar.Brand>The Phone Cave</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="md-auto">
                        <Link to='/'>
                            <Nav.Link as="div">All phones</Nav.Link>
                        </Link>
                        {this.props.theUser
                            ?
                            <Nav.Link as="div" onClick={this.logOut}>Log out</Nav.Link>
                            :
                            <Link to='/login'>
                                <Nav.Link as="div">Log in</Nav.Link>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
