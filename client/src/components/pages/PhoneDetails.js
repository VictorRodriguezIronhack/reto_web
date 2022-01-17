import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PhoneService from "../../services/phone.services";
import "./PhoneDetails.css";
const phoneService = new PhoneService();

const PhoneDetails = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState(undefined);

  console.log(props);

  const getDetails = (props) => {
    phoneService
      .getDetails(id)
      .then((res) => setDetails(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDetails(id);
  }, []);

  return (
    <div className="container">
      <h2>Details</h2>
      {details ? (
        <div className="container-details">
          <div>
            <img
              className="image-details"
              src={`/${details.imageFileName}`}
              alt={details.name}
            />
          </div>
          <div>
            <p>Name: {details.name}</p>
            <p>Manufacturer: {details.manufacturer}</p>
            <p>Description: {details.description}</p>
            <p>Color: {details.color}</p>
            <p>Price: {details.price} €</p>
            <p>Screen: {details.screen}</p>
            <p>Processor: {details.processor}</p>
            <p>Ram: {details.ram}</p>
            <button className="button-details">
              <a href="/">Back All Phones</a>
            </button>
          </div>
        </div>
      ) : (
        <p>not phones here.</p>
      )}
    </div>
  );
};

export default PhoneDetails;
