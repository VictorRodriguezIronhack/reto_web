import React from 'react';
import { Card, Col } from 'antd';
import './PhoneView.css';

const PhoneView = (props) => {
  const phone = props.phone;
  return (
    <div className="PhoneView">
      <Col>
        <Card style={{ width: 230, height: 300, margin: 10 }}>
          <img src={phone.image_url} height={60} alt="phone" />
          <div className="box">
            <h3>{phone.name}</h3>
            <span>{phone.attenuation_level}</span>
          </div>

          <div className="box">
            <h5>{phone.tagline}</h5>
            <span>{phone.first_brewed}</span>
          </div>

          <p>{phone.description}</p>
          <p>Created by: {phone.contributed_by}</p>
        </Card>
      </Col>
    </div>
  );
};

export default PhoneView;
