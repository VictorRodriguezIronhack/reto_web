import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneService from "../../services/phone.services";
import Loading from "./Loading";
import "./Phones.css";

const Phones = () => {
  const phoneService = new PhoneService();
  const [phones, setPhones] = useState(undefined);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <button className="button-details">
          <a href="/">Back Home</a>
        </button>
        <h2 className="title-list">[ List phones ]</h2>
        <div className="container-listphones">
          {phones?.map((elm) => {
            return (
              <div className="list-item" key={elm.id}>
                <p>{elm.name}</p>
                <button className="button-details-cont">
                  <Link
                    className="link-style"
                    to={`/allphones/details/${elm.id}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Phones;
