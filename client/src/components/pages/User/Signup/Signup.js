import React, { Component } from 'react'
import AuthService from '../../../../service/auth.service'
import FilesService from './../../../../service/upload.service'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


class Signup extends Component {

    constructor() {
        super()
        this.state = {
            user: {
                username: '',
                password: '',
                name: '',
            },
        }
        this.authService = new AuthService()
        this.filesService = new FilesService()

    }

    handleInputChange = e => this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } })
    handleDateChange = e => this.setState({ user: { ...this.state.user, [e.target.name]: new Date(e.target.value) } })



    handleSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state.user)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/')
            })
            .catch(err => console.log('Error', err))
    }


    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('imageUrl', e.target.files[0])

        this.filesService
            .uploadImage(uploadData)
            .then(response => {

                this.setState({ user: { ...this.state.user, imageUrl: response.data.secure_url } })
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <Container className="form" style={{ marginTop: "50px", marginBottom: "100px" }}>

                    <Row>
                        <Col md={{ span: 5, offset: 4 }}>
                            <h1 style={{ textAlign: "center" }}>Signup as a user</h1>
                            <hr />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" onChange={this.handleInputChange} />
                                </Form.Group>
                                
                                <Button className="btn-dark" style={{ width: "100%" }} variant='ligth' type="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Signup