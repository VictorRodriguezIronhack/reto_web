import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AuthService from './../../../service/auth.service';
import './Profile.css';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            avatarUrl: '',
        }
        this.AuthService = new AuthService()
    }

    componentDidMount = () => {

        const user_id = this.props.user

        this.AuthService
            .profile(user_id)
            .then(res => {
                this.setState(res.data)
            })
            .catch(err => console.log(err))
        
    }
        

    render() {

        return (
            <Container className='profile'>
                
                <>
                    <h1>Tu perfil</h1>
                    <Row>
                        
                            <Col>
                                <img className='profile-image' src={this.state.avatarUrl} alt={this.state.username} />
                            </Col>
                        
                            <Col className='profile-body'>
                                <p>Nombre: {this.state.username}</p>
                            <hr />
                            <br />
                                <p>E-mail: {this.state.email}</p>
                            <hr />
                            
                           
                            <br />
                            <div className='btn-auth'>
                                <Link to='/' className='btn btn-sm btn-dark'>Inicio</Link>
                            </div>
                            </Col>
                            
                            
                        </Row>
                </>
                    

            </Container>
        )
    }
}

export default Profile