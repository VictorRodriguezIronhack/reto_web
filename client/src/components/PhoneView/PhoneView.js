import React from 'react';
import { Col, Row } from 'antd';
import './PhoneView.css';

const PhoneView = (props) => {
  const phone = props.phone;
  return (
    <div className='PhoneView'>
      <Row >
        <Col  span={12} >
          <img src={`/image/${phone.imageFileName}`} alt="phone" />
        </Col>
        <Col  span={12} >
          <div className="box">
            <h3>{phone.name}</h3>
            <span>{phone.manufacturer}</span>
          </div>

          <div className="box">
            <h5>{phone.price}€</h5>
            <span>Color: {phone.color}</span>
          </div>

          <p>{phone.description}</p>
          <ul>
            <li>
              <b>Screen: </b>
              {phone.screen}
            </li>
            <li>
              <b>Processor: </b>
              {phone.processor}
            </li>
            <li>
              <b>Ram: </b>
              {phone.ram}
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default PhoneView;
