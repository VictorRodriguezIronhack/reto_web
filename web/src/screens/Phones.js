import { useEffect } from "react";
import PhoneList from '../components/phones/PhoneList';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

const Phones = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [])

    return (
        <main>
            <div className="position-relative">
                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-2 shape-primary">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="shape-container d-flex align-items-center">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="6">
                                <h3 className="display-2 mb-0">
                                    Our Products
                    </h3>
                            </Col>
                        </Row>
                    </div>
                </Container>
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                <div className="container">
                    <PhoneList />
                </div>
            </div>
        </main>

    )

}

export default Phones;
