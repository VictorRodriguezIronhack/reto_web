import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Phone from "../components/Phone";


function Phones() {
  const [phoneList, setPhoneList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPhoneData = () => {
      axios
        .get("http://localhost:5005/api/phones")
        .then((res) => {
          console.log("res.data", res.data);
          //It won't save the res.data as phoneList on the first loading of the page, I got stucked here.
          console.log("PhoneList", phoneList);

          setIsLoading(false);
          setPhoneList(res.data);
        })
        .catch((err) => console.log(err));
    };
    getPhoneData();
  }, []);

  return (
    <div className="container">
      {phoneList?.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="info">
          <h2>Our Stock</h2>
          <p>Check your favorite model's details</p>
          {phoneList?.map((phone) => (
            <>
              <Phone phone={phone} />
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default Phones;
