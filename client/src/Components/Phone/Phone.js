import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhoneAPI from "../../services/phones.service";

export default function Phone(props) {
  const [phone, setPhone] = useState();
  const phonesService = new PhoneAPI();
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    getPhoneDetails().then((res) => setPhone(res.data[0]));
  }, []);
  const getPhoneDetails = () => phonesService.getPhoneDetails(id);
  return (
    <div>
      <h1>Detalles</h1>
      <img className="card-img-top" src={`img/${phone.imageFileName}`} alt="Cardcap" />
      <p>Description: {phone.description}</p>
    </div>
  );
}
