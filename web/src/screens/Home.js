

import { useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";

const Home = () => {
    
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    },[])

        return (
            <main>
                <div className="position-relative">
                    <section className="section section-lg section-shaped pb-250">
                        <div className="shape shape-style-1 shape-default">
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
                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="6">
                                        <h1 className="display-3 text-white">
                                            The Phone Cave{" "}
                                            <span>your smartphone tech Shop!</span>
                                        </h1>
                                        <p className="lead text-white">
                                            The design system comes with four pre-built pages to
                                            help you get started faster. You can change the text and
                                            images and you're good to go.
                      </p>
                                        <div className="btn-wrapper">
                                            <Button
                                                className="btn-icon mb-3 mb-sm-0"
                                                color="info"
                                                href="/register"
                                            >
                                                <span className="btn-inner--icon mr-1">
                                                    <i className="fa fa-sign-in" />
                                                </span>
                                                <span className="btn-inner--text">Get Stated!</span>
                                            </Button>
                                        </div>
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
                </div>
            </main>
        );
}

export default Home;
