import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'
import AuthService from './../../../service/auth.service'
import './Login.css'
import Loader from './../../shared/Spinner/Loader'

function Login(props) {
    const authService = new AuthService()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [processing, setProcessing] = useState('')


    const onSubmit = e => {
        e.preventDefault()
        setProcessing(true)
        authService.login({ username, password })
            .then(() => {
                setUsername('')
                setPassword('')
                setError('')
                setProcessing('')
                props.history.push('/listado')
            })
            .catch(err => {
                setError(console.log(err))
                setProcessing(false)
        })
    }

    const TitleForm = styled.h1`
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
    `

    return ( 
        <body className="body" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover"}}>
        <Container className="login">
            <Row>
                <Col>
                    <TitleForm>Iniciar sesión</TitleForm>
                    <hr />
                    <Form onSubmit={onSubmit} >
                        <Form.Group  id="username">
                            <Form.Control className="input" type="text" placeholder="usuaria" name="username" value={username} onChange={e => setUsername(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control className="input" type="password" name="password" placeholder="contraseña" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                        </Form.Group>
                        <Button className= "btn btn-primary btn-block"  type="submit">{processing ? 'Comprobando credenciales...' : 'Iniciar sesión'}</Button>
                    </Form>
                </Col>
                </Row>
            <Loader />
            </Container>
        </body>
    )
}

export default Login