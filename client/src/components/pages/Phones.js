import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneService from "../../services/phone.services";
import "./Phones.css";

const Phones = () => {
  const phoneService = new PhoneService();
  const [phones, setPhones] = useState(undefined);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);

  return (
    <div className="title">
      <h1>The Phone Cave</h1>
      <div class="loader">Loading...</div>
      {phones?.map((elm) => {
        return (
          <div key={elm.id}>
            <p>{elm.name}</p>
            <Link to={`/allphones/details/${elm.id}`}>Link Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Phones;
