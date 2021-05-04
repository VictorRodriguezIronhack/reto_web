
import RegisterForm from '../components/users/RegisterForm';
import {  
    Container,
    Row,
    Col
} from "reactstrap";

const Register = () => {
    return (
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
        </div>
        <Container className="py-md">
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                The Phone Cave{" "}
                <span className="text-white">your mobile Shop!</span>
              </h3>
              <p className="lead text-white">
                The Design System comes with four pre-built pages to help you
                get started faster. You can change the text and images and
                you're good to go. More importantly, looking at them will give
                you a picture of what you can built with this powerful
                Bootstrap 4 Design System.
              </p>
            </Col>
            <RegisterForm />
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    )
}

export default Register;
