
import React from 'react';
import { Link } from 'react-router-dom';

function PhoneItem({ phone: { id, imageFileName } }) {

    return (
        <div className="card border-secondary bg-dark">
            <img src={`images/${imageFileName}`} className="card-img-top" alt="phone" />
            <ul className="d-flex justify-content-between align-items-center text-secondary">
                <Link to={`/phones/${id}`} className="fas fa-info text-white"></Link>
                <Link to={`/cart`} className="card-link"><i className="fas fa-plus text-secondary me-3 text-white"></i></Link>
            </ul>
        </div>
    )
}

export default PhoneItem;
