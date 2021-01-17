import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <section className="footer">
            {/* <Container style={{padding: '10px', justifyContent: 'center'}}>
                <Row>
                    <Col >
                        <h6>PhonesApp</h6>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container> */}
            <div style={{ textAlign: 'center', padding: '15px'}} >
                <p style={{margin: '0px', color: 'lightgray'}}>© 2021 <a href="https://www.linkedin.com/in/patriciamudime/" style={{color: 'white'}}>Patricia Muñoz de Dios Meixengo</a></p>
            </div>
        </section>
    )
}

export default Footer