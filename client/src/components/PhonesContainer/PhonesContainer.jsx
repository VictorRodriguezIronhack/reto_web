import { Col, Row } from "react-bootstrap";
import PhoneCard from "../PhoneCard/PhoneCard";

const PhonesContainer = ({ phones }) => {
  return (
    <Row className="mb-4">
      {phones.map((phone) => {
        return (
          <Col xs={6} xl={2} key={phone.id} className="mt-3">
            <PhoneCard phone={phone} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PhonesContainer;
