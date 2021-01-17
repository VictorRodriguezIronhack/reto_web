import React, { useState } from 'react';
import AuthService from '../services/auth.service'
import { Form, Button } from 'react-bootstrap'

const Login = ({ setUser }) => {

    const authServices = new AuthService()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();

        try {

            const credentials = { username, password }
            const user = await authServices.login(credentials)
            setUser(user.data)

        } catch (error) {
            console.log(error.response.data.message)
        }
    }



    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Button variant="info" type="submit">
                Submit
  </Button>
        </Form>
    );
}

export default Login;