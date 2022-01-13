import { Col, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Phone = () => {
  const location = useLocation();
  const { phone } = location.state;
  return (
    <div className="mt-3 mb-3 p-3 p-xl-5 shadow">
      <Row className="text-xl-start">
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
          <Col>
            <p className="h5">{phone.name}</p>
          </Col>
          <Col>
            <p>{phone.manufacturer}</p>
          </Col>
          <Col>
            <p>{phone.price} €</p>
          </Col>
          <Col className="text-start">
            <p>{phone.description}</p>
          </Col>
          <Col>
            <p className="h5">Characteristics</p>
          </Col>
          <Col className="text-start">
            <p>Color: {phone.color}</p>
          </Col>
          <Col className="text-start">
            <p>Scree: {phone.screen}</p>
          </Col>
          <Col className="text-start">
            <p>Processor: {phone.processor}</p>
          </Col>
          <Col className="text-start">
            <p>RAM: {phone.ram}</p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Phone;
