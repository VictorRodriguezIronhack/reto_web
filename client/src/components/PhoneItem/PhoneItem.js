import React from 'react';
import SCPhoneItem from './PhoneItem.styled';
import { Link } from 'react-router-dom';

export default function PhoneItem(props) {
  const { id, color, description, imageFileName, manufacturer, name, price, processor, ram, screen } = props;
  return (
    <SCPhoneItem className='card'>
      <img src={ `http://localhost:3001${ imageFileName }` } className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{ name }</h5>
        <p className='card-text'>
          { description }
        </p>
        <Link to={`phone/${id}`} className='btn btn-primary'>
          More details
        </Link>
      </div>
    </SCPhoneItem>
  );
}
