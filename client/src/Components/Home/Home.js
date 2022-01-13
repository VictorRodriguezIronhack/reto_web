import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Phone from "../../services/phones.service";

export default function Home() {
  const [phones, setPhones] = useState(undefined);
  const phonesService = new Phone();
  useEffect(() => {
    updatePhones();
  }, []);

  const updatePhones = () => {
    phonesService
      .getPhones()
      .then((res) => setPhones(res.data))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="container">
      <div class="row hidden-md-up">
        {phones?.map((elm) => (
          <div className="card col-md-4">
            <img className="card-img-top" src={`img/${elm.imageFileName}`} alt="Cardcap" />
            <div className="card-body">
              <h5 className="card-title">{elm.name}</h5>
              <p className="card-text">Price: {elm.price} $</p>
              <Link to={`/${elm.id}`}>
                <button className="btn btn-primary">Detalles</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
