import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import PhonesService from "./../../services/phones.service";
import "./Phones.css"

const phonesService = new PhonesService();

const Phones = () => {

  const [phones, setPhones] = useState(null)

  const displayPhones = () => {
    return phones?.map(phone => {
      return (
        <Col xs={12} sm={6} lg={4} key={phone.id}>
          <img className="phones__img" src={phone.imageFileName} alt={`${phone.name} pic`}/>
          <p>{phone.name}</p>
          <p className="phones__description">{phone.description}</p>
          <p>{phone.price}€</p>
          <Link to={`/telefonos/${phone.id}`}>
            <Button className="btn-warning rounded-pill">See details</Button>
          </Link>
          <hr/>
        </Col>
        
      )
    })
  }

  useEffect(() => {

    phonesService
        .getPhones()
        .then(phones => setPhones(phones.data))
        .catch((err) => console.log(err))
  }, []);


  return (
    <Container>
      <Row>
        <Link to="/">
          <Button className="rounded-pill mt-5">Volver</Button>
        </Link>
      </Row>


      {phones ? (

        <Row className="mt-5">
          {displayPhones()}
        </Row>

        ) : (

          <Spinner className="mt-5" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

      )}
            
    </Container>
  );
};

export default Phones;
