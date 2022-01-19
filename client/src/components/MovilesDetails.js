import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TelefonoService from "../services/telefonos.services";
import "./movilesDetails.css"

const telefonoService = new TelefonoService();



const PhonesDetails = (props) => {
   

    const {id} = useParams ();
    
    const [loading, setloading] = useState(true);
    const [details, setDetails] = useState(undefined);

    const movilesDetails = () => {
        telefonoService
            .getDetails(id)
            .then((phones) => {
                setDetails(phones.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        const timmer = setTimeout(() =>
        {
            setloading(false);
            movilesDetails();
        },1000);
        
    }, []);

    return (
        <div className="principal-container">

            <div className="card">
            <div className="principal-title">
                <h1>Details</h1>
            </div>
            </div>
            
            <div className="details-container">
            {details? (
                <div className="details">
                        <p>Name:<br/> {details.name}</p>
                        <p>Manufacturer: <br /> {details.manufacturer}</p>
                        <div><p>Description: <br /> {details.description}</p></div>
                        <p>Color: <br /> {details.color}</p>
                        <p> Price: <br /> {details.price}</p>
                        <p><img src={`/${details.imageFileName}`} alt={details.name}/></p>
                        <p>Screen: <br />{details.screen}</p>
                        <p>Processor <br />{details.processor}</p>
                        <p>Ram <br />{details.ram}</p>
                </div>)
                        
                      
                
                    : (< div class="loader">Loading...</div>)
                
               
            }
            </div>
        </div>
    );
};

export default PhonesDetails;