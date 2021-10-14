import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './PhonesList.css'

const PhonesList = (props) => {
  const [phones, setPhones] = useState([]);
  console.log('List' , phones);

  useEffect(() => {
    setPhones(props.phones);
  }, [props.phones]);

  return (
    <div id="phones">
      <div id="phones-list">
        {phones.map((phone) => {
          console.log(phone);
          return (
            <div key={phone.id} className="phone-item">
              <Link
                to={`/phones/${phone.id}`}
                className="list-group-item list-group-item-action"
              >
                <img src={phone.imageFileName} alt={phone.name} />
                <p className="manufacturer">{phone.manufacturer}</p>
                <p>{phone.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhonesList;
