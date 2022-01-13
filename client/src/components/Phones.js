import React from 'react';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import { Card, Col, Button, Row } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Phones() {
  const [phonesList, setPhones] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('Info recibida', response.data);
      setPhones(response.data);
    });
  }, []);

  return (
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      <Header />
      {phonesList.map((phone) => (
        <div key={phone._id} className="card">
          <Col>
            <Card style={{ width: 230, height: 300, margin: 10 }}>
              <img src={phone.image_url} height={60} alt="phone" />
              <h3>{phone.name}</h3>
              <h5>{phone.tagline}</h5>
              <p>Created by: {phone.contributed_by}</p>
              <Button type="primary">
                <Link to={`/phones/${phone._id}`}>More Info</Link>
              </Button>
            </Card>
          </Col>
        </div>
      ))}
    </Row>
  );
}

export default Phones;

