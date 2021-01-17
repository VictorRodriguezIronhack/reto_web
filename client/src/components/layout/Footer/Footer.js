import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

import './Footer.css'

const Footer = () => (
    <Navbar className="footer" expand="lg">
        <Navbar.Brand>
            <Nav.Link as="div" className="footer-text">The phone Cave &copy; 2021. Jorge Martín by Ironhack.</Nav.Link>
        </Navbar.Brand>
    </Navbar>
);

export default Footer;