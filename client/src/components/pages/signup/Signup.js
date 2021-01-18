import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import AuthService from './../../../service/auth.service';

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
        }
        this.authService = new AuthService()

    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(theLoggedInUser => {
                this.props.history.push('/login') 
            })
            .catch(err => console.log('ERROR', err))
    }


    render() {

        return (

            <Container>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Registrarse</h1>
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
                            <Form.Group controlId='email'>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type='text' name='email' value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>
                            <div className='btn-auth'>
                                <Button variant='dark' type='submit'>¡Regístrate!</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup