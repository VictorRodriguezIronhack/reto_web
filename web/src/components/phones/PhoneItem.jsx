// import { useContext } from 'react';
import React from 'react';
// import { AuthContext } from '../../contexts/AuthStore';
// import { Link } from 'react-router-dom';


function PhoneItem({ phone: { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } }) {

    return (

        <div className="card">
            <img src={imageFileName} className="card-img-top" alt="phone" />
            <ul className="d-flex justify-content-between align-items-center text-secondary">
                <i className="fas fa-info"></i>
                <a href="#" className="card-link"><i class="fas fa-plus text-secondary me-3"></i></a>
            </ul>

            {/* <p className="card-text">{name}</p>
                    <p className="card-text">{manufacturer}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{color}</p>
                    <p className="card-text">{price}</p>
                    <img className="card-text" alt="image">{imageFileName}</img>
                    <p className="card-text">{screen}</p>
                    <p className="card-text">{processor}</p>
                    <p className="card-text">{ram}</p> */}

            {/* <Link className="stretched-link" to={`/phones/${id}`} /> */}

            {/* </div> */}
        </div>
    )
}

export default PhoneItem;
