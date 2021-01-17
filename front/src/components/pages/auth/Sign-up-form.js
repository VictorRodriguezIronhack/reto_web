import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            image: '',
            email: '',
            phone: undefined,
            uploadingActive: false
        }
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value })
    
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={5}>
                        <h3>Sign Up</h3>
                        <br />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" name="username" value={this.state.username} onChange={this.handleInput} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" name="password" value={this.state.password} onChange={this.handleInput} />
                            </Form.Group>
                            <Form.Group controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control required type="file" onChange={this.handleImageUpload} />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" name="email" value={this.state.email} onChange={this.handleInput} />
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control required type="text" name="phone" value={this.state.phone} onChange={this.handleInput} />
                            </Form.Group>
                            <Button variant="secondary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup