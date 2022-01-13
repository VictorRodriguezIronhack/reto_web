import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import AuthService from "../../../services/auth.service";
import './Login.css'

const authService = new AuthService()

export default function Login(props) {

    const [formData, setFormData] = useState({ email: '', pwd: '' })

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        authService
            .login(formData.email, formData.pwd)
            .then(res => {
                console.log(res)
                props.history.push("/")
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="pt-5">
            <h1 className="text-center text-init">Iniciar sesión</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card card-body">
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group className="form-group">
                                    <Form.Label for="email">Email</Form.Label>
                                    <Form.Control type="text" className="form-control" id="email" required="" name="email" value={formData.email} onChange={handleInput} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label className="d-flex flex-row align-items-center" for="pwd">Password</Form.Label>
                                    <Form.Control type="password" className="form-control" required="" id="pwd" name="pwd" value={formData.pwd} onChange={handleInput} placeholder="Enter password" />
                                </Form.Group>
                                <div className="form-group pt-1">
                                    <Button className="btn btn-primary btn-block" type="submit">Registro</Button>
                                </div>
                            </Form>
                            <p className="small-xl pt-3 text-center">
                                <span className="text-muted">¿No estas registrad@?</span>
                                <a href="/registro">Registrate</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
