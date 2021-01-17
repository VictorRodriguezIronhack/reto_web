import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import logo from './NavbarLogo.png'
import { Link } from 'react-router-dom'

class NavbarPage extends Component {

  constructor() {
    super()
    this.state = {
      color: 'transparent'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    if (window.scrollY < 300) {
      this.setState({ color: 'transparent' })
    } else if (window.scrollY > 300) {
      this.setState({ color: 'white' })
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg={this.state.color} fixed="top">
        <Link to="/">
          <Navbar.Brand className="navbarTop">
            <img
              alt="Logotipo"
              src={logo}
              className="d-inline-block align-top mobileImg"
            />
            <p style={{ marginLeft: '20px' }}>Catalog_App 📱</p>
          </Navbar.Brand>
        </Link>
      </Navbar>
    )
  }
}

export default NavbarPage;