import { Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PhoneDetails.css";

const GRID_COLS = 12;
const FIRST_COL = 7;
const SECOND_COL = GRID_COLS - FIRST_COL;

const PhoneDetails = ({
  id,
  name,
  manufacturer,
  imageFileName,
  description,
  color,
  price,
  screen,
  processor,
  ram,
}) => {
  return (
    <>
      <Container>
        <img className="imgPhoneDetails" src={`images/${imageFileName}`} />
        <ul>
          <li className="description">{description}</li>
          <Row>
            <Col md={FIRST_COL}>
              <li className="manufacturer">{manufacturer}</li>
            </Col>
            <Col md={SECOND_COL}>
              <li>
                <span>Price: </span> {price} €{" "}
              </li>
            </Col>
          </Row>
          <Row>
            <Col md={FIRST_COL}>
              <li>
                <span>Screen: </span> {screen}
              </li>
            </Col>
            <Col md={SECOND_COL}>
              <li>
                {" "}
                <span>Color: </span> {color}{" "}
              </li>
            </Col>
          </Row>
          <Row>
            <Col md={FIRST_COL}>
              <li>
                <span>Processor: </span> {processor}
              </li>
            </Col>
            <Col md={SECOND_COL}>
              <li>
                {" "}
                <span>Ram: </span>
                {ram}
              </li>
            </Col>
          </Row>
        </ul>
      </Container>
    </>
  );
};

export default PhoneDetails;
