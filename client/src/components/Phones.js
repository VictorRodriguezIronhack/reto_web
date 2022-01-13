import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Col, Button, Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Phones() {
  const [phonesList, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    simulateDelay(
      axios.get('http://localhost:5005/api/phones').then((response) => {
        console.log('Info recibida', response.data);
        setPhones(response.data);
        setLoading(false);
      })
    );
  }, []);

  function simulateDelay(callback) {
    setTimeout(callback, 2500);
  }

  return (
    <>
      <h1>The Phone Cave</h1>
      {loading && <Spin />}
      {!loading && (
        <Row>
          {phonesList.map((phone) => (
            <div key={phone.id} className="card">
              <Col>
                <Card style={{ width: 230, height: 300, margin: 10 }}>
                  <img
                    src={`/image/${phone.imageFileName}`}
                    height={60}
                    alt="phone"
                  />
                  <h3>{phone.name}</h3>
                  <h5>{phone.manufacturer}</h5>
                  <p>{phone.price}€</p>
                  <p>{phone.color}</p>
                  <Button type="primary">
                    <Link to={`/phones/${phone.id}`}>More Info</Link>
                  </Button>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      )}
    </>
  );
}

export default Phones;
