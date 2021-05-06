
import React from 'react';
import { AuthContext } from '../../contexts/AuthStore';
import { Link } from 'react-router-dom';

function PhoneItem({ phone: { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } }) {

    return (

        <div className="card border-secondary bg-dark">
            <img src={`images/${imageFileName}`} className="card-img-top" alt="phone" />
            <ul className="d-flex justify-content-between align-items-center text-secondary">
                <i className="fas fa-info text-white"></i>
                <a href="#" className="card-link"><i className="fas fa-plus text-secondary me-3 text-white"></i></a>
            </ul>
        </div>
    )
}

export default PhoneItem;
