import React, { useState, useEffect } from "react";
import PhoneService from "../../services/phone.services";
import "./Phones.css";

const Phones = () => {
  const phoneService = new PhoneService();
  const [phones, setPhones] = useState(null);

  const telephones = () => {
    phoneService
      .getAllPhones()
      .then((phones) => {
        setPhones(phones.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    telephones();
  }, []);

  return (
    <div className="title">
      <h1>The Phone Cave</h1>
      {phones.map((elm) => {
        return (
          <div>
            <h2>{elm.name}</h2>
            <p>{elm.manufacturer}</p>
            <p>{elm.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Phones;
