import { Row, Col, Container } from 'react-bootstrap'
import { MDBFooter } from "mdbreact";
import './Footer.css'

import codepen from './codepen.png'
import linkedin from './linkedin.png'
import github from './github.png'

const Footer = () => {
    return (
        <MDBFooter className="text-center dark grey footer"> 
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={12} sm={6} md={4} >
                        <ul className="social-icons mt-3 mb-3">             
                            <li><a className="github" target="_blank" href="https://github.com/saramartz"><img src={github} style={{width: 20, height: 20, opacity: 0.8}} className="footer-icon mb-1"></img></a></li>   
                            <li><a className="linkedin" target="_blank" href="https://www.linkedin.com/in/sara-mart%C3%ADnez-vega-5a25991b9/"><img src={linkedin} style={{width: 20, height: 20, opacity: 0.8}} className="footer-icon mb-1"></img></a></li>   
                            <li><a className="codepen" target="_blank" href="https://codepen.io/sara-martinez"><img src={codepen} style={{width: 20, height: 20, opacity: 0.8}} className="footer-icon mb-1"></img></a></li>   
                        </ul>
                    </Col>        
                </Row>                   
            </Container>
            <div className="footer-copyright text-center py-2 text-dark">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a className="text-dark" href="https://www.linkedin.com/in/sara-mart%C3%ADnez-vega-5a25991b9/"> Sara Martínez Vega </a>
                </Container>
            </div>
        </MDBFooter>            
    )
}

export default Footer