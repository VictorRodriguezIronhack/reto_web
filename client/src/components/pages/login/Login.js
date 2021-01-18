import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import AuthService from './../../../service/auth.service';
import './Login.css'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/profile')
            })
            .catch(err => console.log({ err }))
    }


    render() {

        return (

            <Container className='content-login'>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Inicio de Sesión</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId='username'>
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type='text' name='username' value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId='password'>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type='password' name='password' value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <div className='btn-auth'>
                                <Button variant='dark' type='submit'>Iniciar sesión</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login