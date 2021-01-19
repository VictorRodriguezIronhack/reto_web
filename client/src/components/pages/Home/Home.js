import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'


const Home = (props) => {



    return (
        <>
            <section className="picture-home">
                <Container>
                    <Row>
                        <Col className="first-container-text" md={{ span: 8, offset:3 }}>

                            <h1 className="main-title">The Phone Cave</h1>

                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="container-background">
                <Container className="second-container-home">
                    <Row >
                        <Col md={{ span: 8, offset: 3 }}>
                            <h2 className="second-container-title">Best phones, only at The Phone Cave</h2>
                            <p className="second-container-paragraph">The latest smartphones on the market and the next news only on your telephone reference website.</p>
                            <hr></hr>
                            <div className="button-area">
                            {
                                props.loggedUser
                                &&
                                <Link className="btn btn-dark btn-sm" to={'/teléfonos/crear'}>Add a new smartphone</Link>
                            }
                            <Link className="btn btn-dark btn-sm" to={'/teléfonos'}>Smartphone list</Link>
                            <br />
                            <br />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Home
