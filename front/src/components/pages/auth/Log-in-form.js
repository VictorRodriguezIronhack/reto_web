import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={5}>
                        <h3>Log In</h3>
                        <br />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username" >
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" name="username" value={this.state.username} onChange={this.handleInput} />
                            </Form.Group>
                            <Form.Group controlId="password" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" name="password" value={this.state.password} onChange={this.handleInput} />
                            </Form.Group>
                            <Button variant="secondary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Login