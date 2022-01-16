import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Phone = () => {
  const location = useLocation();
  const { phone } = location.state;
  return (
    <div className="mt-3 mb-3 p-3 p-xl-5 shadow">
      <Row className="text-xl-start mb-2">
        <Col xs={12} xl={2}>
          <Col>
            <Image
              fluid={true}
              rounded={true}
              src={require(`../../assets/images/${phone.imageFileName}`)}
            ></Image>
          </Col>
        </Col>
        <Col xs={12} xl={10} className="mt-4 mt-xl-0">
          <Row>
            <Col xs={12}>
              <p className="h2">{phone.name}</p>
            </Col>
            <Col className="text-secondary" xs={6} xl={2}>
              <i className="bi bi-tools"></i> <span> {phone.manufacturer}</span>
            </Col>
            <Col className="text-secondary" xs={6} xl={10}>
              <i className="bi bi-currency-exchange"></i>{" "}
              <span> {phone.price} €</span>
            </Col>
            <Col xs={12} className="text-start mt-2">
              <p>{phone.description}</p>
            </Col>
            <Col xs={12}>
              <p className="h5">Characteristics</p>
            </Col>
            <Col xs={12}>
              <ListGroup>
                <ListGroup.Item>Color: {phone.color}</ListGroup.Item>
                <ListGroup.Item>Color: {phone.color}</ListGroup.Item>
                <ListGroup.Item>Screen: {phone.screen}</ListGroup.Item>
                <ListGroup.Item>Processor: {phone.processor}</ListGroup.Item>
                <ListGroup.Item>RAM: {phone.ram}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Phone;
