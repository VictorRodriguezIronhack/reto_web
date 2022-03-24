import React from 'react'
import './Bar.css'
import { Navbar, Container, Form, Button, FormControl,Image,Row,Col,Nav} from 'react-bootstrap'
import logo from '../img/logo.png'
import { useNavigate } from "react-router-dom";

 function Bar() {
     const navigate = useNavigate()
     const goToPhones = () => navigate("/phones")
     const goToHome = () => navigate("/")
  return (
      <Navbar className='Bar' bg="dark" expand="lg">
          <Container fluid>
              <Nav.Link onClick={goToHome}><Image src={logo} alt="logo" /></Nav.Link>
           
              <Navbar.Toggle aria-controls="navbarScroll" />

             
              <Navbar.Collapse id="navbarScroll">
                  {/* <h1 className='title' href="#">PhoneHunter

                  </h1> */}
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link onClick={goToHome}>Home</Nav.Link>
                      <Nav.Link onClick={goToPhones}>Phones</Nav.Link>
                      <Nav.Link href="#action1">Tablets</Nav.Link>
                      <Nav.Link href="#action2" >Discounts</Nav.Link>
                    
                  </Nav>
                  <Form className="d-flex">
                      <FormControl
                          type="search"
                          placeholder="Find your perfect fit"
                          className="me-2"
                          aria-label="Search"
                      />
                      <Button variant="light">Search</Button>
                  </Form>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}
export default Bar