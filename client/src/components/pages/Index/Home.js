import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
// import './Home.css'

const Home = () => {
    return (
        <>
            <div className="main-background">
                <Container>

                    <div className="main-text">
                        <h1>Hola</h1>
                        <Link to="/telefonos"><p>Click aquí para ver los telefonos</p></Link>
                        
                        
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home