import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PhoneCard from "../../components/phoneCard/PhoneCard";
import phoneService from "../../services/phone.service";

const PhoneDetailPage = () => {
  const [phone, setPhoneDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    phoneService.getOnePhone(id).then(({ data }) => {
      console.log(data);
      setPhoneDetail(data);
    });
  }, []);

  return (
    <Container className="mt-5">
        <h1>Page Detail</h1>
      <Row>
        <Col md={3} className="my-3">
          {phone && (
            <PhoneCard
              id={phone.id}
              name={phone.name}
              description={phone.description}
              manufacturer={phone.manufacturer}
              price={phone.price}
              imageFileName={phone.imageFileName}
              screen={phone.screen}
              processor={phone.processor}
              ram={phone.ram}
            ></PhoneCard>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PhoneDetailPage;
