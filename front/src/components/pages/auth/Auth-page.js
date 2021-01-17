import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import Login from './Log-in-form'
import Signup from './Sign-up-form'

class AuthPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogIn: true,
            showSignUp: false
        }
    }

    handleNavChange = value => value === 'login' ? this.setState({ showLogIn: true, showSignUp: false }) : this.setState({ showLogIn: false, showSignUp: true })

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} style={{fontSize: '1.2rem'}}>
                        <Nav justify variant="tabs" defaultActiveKey="login">
                            <Nav.Item>
                                <Nav.Link eventKey="login" onSelect={() => this.handleNavChange('login')}>Log in</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="signup" onSelect={() => this.handleNavChange('signup')}>Sign up</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row style={{marginTop: '50px'}}>
                    {this.state.showLogIn && <Login setUser={this.props.setUser} {...this.props} />}
                    {this.state.showSignUp && <Signup setUser={this.props.setUser} {...this.props} />}
                </Row>
            </Container>
        )
    }
}

export default AuthPage