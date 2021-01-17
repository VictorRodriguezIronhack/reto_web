import React, { Component } from 'react'
import AuthService from '../../../../service/auth.service'
import Alert from './../../../shared/Alert/Alert'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            showToast: false,
            toastText: ''
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
                this.props.history.push('/')
            })
            .catch(err => this.setState({ showToast: true, toastText: err.response.data.message }))

    }

    handleToast = (visible, text) => this.setState({ showToast: visible, toastText: text })



    render() {

        return (
            <>
                <Container className="form" style={{ marginTop: "50px", marginBottom: "100px" }}>
                    <Row>

                        <Col md={{ span: 4, offset: 3 }}>

                            <h1 style={{ textAlign: "center", marginTop: "18px" }}>Login</h1>
                            <hr />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Button className="btn-dark" style={{ width: "100%", marginBottom: "100px" }} variant="ligth" type="submit">Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Alert show={this.state.showToast} handleToast={this.handleToast} toastText={this.state.toastText} />
            </>

        )
    }
}

export default Login