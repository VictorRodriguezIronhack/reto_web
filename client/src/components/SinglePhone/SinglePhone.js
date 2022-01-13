import React, { useState } from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PhoneView from '../PhoneView/PhoneView';


const SinglePhone = () => {
  const params = useParams();
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        setPhone(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <PhoneView phone={phone}/>
    </div>
  );
};

export default SinglePhone;


