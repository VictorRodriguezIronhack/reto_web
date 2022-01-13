import React from "react";
import './PhoneCard.css'
const PhoneCard = ({ id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram, }) => {

    return (
        <>
            <br />
            <div className="card">
                <div>
                    <img className="phoneImg" src={imageFileName} alt={name} />
                </div>
                <div>
                    <h2>{name}</h2>
                    <h4>Manufacturer by</h4>
                    <p>{manufacturer}</p>
                    <h4>Description</h4>
                    <p>{description}</p>
                    <h4>Color</h4>
                    <p>{color}</p>
                    <h5>Price</h5>
                    <p>{price}€</p>
                    <h5>Screen size</h5>
                    <p>{screen}</p>
                    <h5>Processor</h5>
                    <p>{processor}</p>
                    <h5>RAM</h5>
                    <p>{ram}GB</p>
                </div>
            </div>

        </>



    )
}

export default PhoneCard