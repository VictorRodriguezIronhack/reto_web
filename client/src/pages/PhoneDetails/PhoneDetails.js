import React from 'react';
import { useLocation } from 'react-router-dom';

export default function PhoneDetails() {
  const location = useLocation();
  const phone = location.state?.name;
  return (
    <div>
      <p>{location.state?.name}</p>
      <p>{location.state?.color}</p>
    </div>
  )
}
