import React, { useState } from 'react'
import AuthService from "../../../services/auth.service";
import { Form, Button } from 'react-bootstrap'
import './Signup.css'

const authService = new AuthService()

export default function Signup(props) {

    const [formData, setFormData] = useState({ userName: '', email: '', password: '' })

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        authService
            .signup(formData.userName, formData.email, formData.password)
            .then(res => {
                props.history.push("/")
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="pt-5">
            <h1 className="text-center text-init">Registro</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card card-body">
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group className="form-group">
                                    <Form.Label for="userName">Username</Form.Label>
                                    <Form.Control type="text" className="form-control" id="userName" name="userName" value={formData.userName} onChange={handleInput} placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label for="email">Email</Form.Label>
                                    <Form.Control type="text" className="form-control" id="email" required="" name="email" value={formData.email} onChange={handleInput} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label className="d-flex flex-row align-items-center" for="password">Password</Form.Label>
                                    <Form.Control type="password" className="form-control" required="" id="password" name="password" value={formData.password} onChange={handleInput} placeholder="Enter password" />
                                </Form.Group>
                                <div className="form-group pt-1">
                                    <Button className="btn btn-primary btn-block" type="submit">Registro</Button>
                                </div>
                            </Form>
                            <p className="small-xl pt-3 text-center">
                                <span className="text-muted">¿Ya estas registrad@?</span>
                                <a href="/iniciar-sesion">Iniciar sesión</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
