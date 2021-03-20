import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

import AuthService from './../../../service/auth.service';

class Navigation extends Component {


    constructor() {
        super()
        this.authService = new AuthService()
    }

    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .then(() => this.props.history.push('/login')) 
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Navbar bg='dark' variant='dark' expand='md' style={{ marginBottom: '50px' }}>
                <Link to='/'>
                    <Navbar.Brand >
                        <img
                            alt='Logotipo'
                            src={logo}
                            width='30'
                            height='30'
                            className='d-inline-block align-top'
                        />{' '}The Phone Cave</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Link to='/'>
                            <Nav.Link as='div'>Inicio</Nav.Link>
                        </Link>
                       
                        {
                            this.props.loggedUser
                                ?
                                <Nav.Link as='div' onClick={this.logOut}>Cerrar Sesión</Nav.Link>
                                :
                                <>
                                    <Link to='/signup'>
                                        <Nav.Link as='div'>Registrarse</Nav.Link>
                                    </Link>
                                    <Link to='/login'>
                                        <Nav.Link as='div'>Iniciar sesión</Nav.Link>
                                    </Link>
                                </>

                        }
                        
                        <Link to='/profile'>
                            <Nav.Link as='div'>Perfil</Nav.Link>
                        </Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}


export default Navigation