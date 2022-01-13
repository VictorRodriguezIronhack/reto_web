import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PhoneView from '../PhoneView/PhoneView';
import BackButton from '../BackButton/BackButton';
import "./SinglePhone.css";


const SinglePhone = () => {
  const params = useParams();
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/phones/${params.id}`)
      .then((response) => {
        setPhone(response.data);
      });
  }, []);

  return (
    <div className='SinglePhone'>
      <BackButton />
      <PhoneView phone={phone}/>
    </div>
  );
};

export default SinglePhone;


