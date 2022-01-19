import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TelefonoService from "../services/telefonos.services";
import "./moviles.css";

const Phones = () => {
    const telefonoService = new TelefonoService();
    const [phones, setPhones] = useState(undefined);
    const [loading, setloading] = useState(true);

    const telephones = () => {
        telefonoService
            .getAllPhones()
            .then((phones) => {
                setPhones(phones.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        const timmer = setTimeout (()=>
        {
            setloading(false);
            telephones();
            
        },1000);

    }, []);


    return (

        <div className="flex-container">

        <div className="principal-container">

        <div className="card">
                <h1 className="principal-title">The Phone Cave</h1>
        </div>
            
        <div className="links">
            {phones? phones.map(elm => 
                    <div key={elm.id}>
                        <p>{elm.name}</p>
                        <Link to={`/details/${elm.id}`}>Link Details</Link>
                    </div>

          
                
            ) : (

                    < div class="loader">Loading...</div>
            )
            }
        </div>
        </div>
        </div>
    );
};

export default Phones;