import React from "react";
import { useState, useEffect } from "react";

import "./PhoneDetails.css";

const PhoneDetails = (props) => {
  const [phones, setPhones] = useState({
    id: "",
    imageFileName: "",
    name: "",
    manufacturer: "",
    description: "",
    price: "",
    processor: "",
    ram: "",
    screen: "",
  });

  console.log(phones);
  useEffect(() => {
    const foundPhone = props.phones.filter((phoneObj) => {
      return phoneObj.id == props.match.params.id;
    });

    if (foundPhone.length) setPhones(foundPhone[0]);
  }, [props.phones, props.match.params.id, props]);

  return (
    <section id="details">
      {phones && (
        <div className="wrap">
          <div className="image">
            <img src={phones.imageFileName} alt={phones.name} />
          </div>
          <div className="text">
            <h1>{phones.name}</h1>
            <p className="manufacturer">{phones.manufacturer}</p>
            <p>{phones.description}</p>
            <h4>Specs</h4>
            <ul className="specs">
              <li>{phones.processor}</li>
              <li>{phones.ram}</li>
              <li>{phones.screen}</li>
            </ul>
            <h3 className="price">{phones.price}€</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhoneDetails;
