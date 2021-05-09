
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

const Footer = () => {

    return (
        <footer className=" footer">
            <Container>
                <Row className=" align-items-center justify-content-md-between">
                    <Col md="3">
                        <div className=" copyright text-center">
                            © {new Date().getFullYear()}{" "}
                            <a
                                href="https://www.linkedin.com/in/alejandro-puerta-17b404201"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Alejandro Puerta
                  </a>
                  .
                </div>
                    </Col>
                    <Col md="4">
                        <h6 className=" mb-0 font-weight-light mt-1 text-center text-muted">
                            Do you want to know more about me?
                </h6>
                    </Col>
                    <Col md="5">
                        <Nav className=" nav-footer justify-content-end align-items-center">

                            <Col className="text-lg-center btn-wrapper" lg="7">
                            <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="facebook"
                                    href="https://www.linkedin.com/in/alejandro-puerta-17b404201"
                                    id="tooltip499507257"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-linkedin" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip499507257">
                                    My LinkedIn
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="github"
                                    href="https://github.com/aguiluxo91"
                                    id="tooltip495507257"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-github" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip495507257">
                                    My Github
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="twitter"
                                    href="https://twitter.com/DelAguila91"
                                    id="tooltip475038074"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-twitter" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip475038074">
                                    Follow me
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="facebook"
                                    href="https://www.facebook.com/alejandro.puertadelaguila"
                                    id="tooltip837440414"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-facebook-square" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip837440414">
                                    Like me
                                </UncontrolledTooltip>
                            </Col>
                                <NavItem>
                                <NavLink
                                    href="#"
                                    target="_blank">
                                    About Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;