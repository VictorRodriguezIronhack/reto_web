import React, { useState, useEffect, useCallback } from 'react';
import PhoneService from '../services/phone-service';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    const getPhonesData = useCallback(() => {
        const phoneService = new PhoneService();
        phoneService.getAllPhones()
        .then((response) => {
            setPhones(response.data);
        })
    }, []);

    useEffect(() => {
        getPhonesData();
    }, [getPhonesData]);

    return(
        <div>
            {phones.map((phone) => (
                <div>
                    <p>{phone.name}</p>
                    <a href={`/phones/${phone._id}`}>Details</a>
                </div>
            ))}
        </div>
    )
}

export default Phones;
