

import { useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    UncontrolledCarousel
} from "reactstrap";

const items = [
    {
      src:"https://res.cloudinary.com/djbn7xax3/image/upload/v1620245683/RetoWeb/samsungs_cgmkt3.jpg",
      altText: "",
      caption: "",
      header: ""
    },
    {
      src:"https://res.cloudinary.com/djbn7xax3/image/upload/v1620245300/RetoWeb/smartphones_f7hpsf.webp",
      altText: "",
      caption: "",
      header: ""
    },
    {
        src:"https://res.cloudinary.com/djbn7xax3/image/upload/v1620328604/RetoWeb/cartsmartphone_x3yxke.jpg",
        altText: "",
        caption: "",
        header: ""
    }
];

const Home = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [])

    return (
        <main>
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-3 shape-primary">
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
                                        Either to buy or just to inform you about the most current smartphones on the market,
                                        The Phone Cave is your place!
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
                                <Col className="mb-lg-auto" lg="6">
                                    <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                                        <UncontrolledCarousel items={items} />
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
