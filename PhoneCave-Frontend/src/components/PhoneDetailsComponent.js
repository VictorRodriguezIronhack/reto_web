import React, { useState, useEffect, useCallback } from 'react';
import PhoneService from '../services/phone-service';

const PhoneDetails = (props) => {
    const { match } = props;
    const [details, setDetails] = useState({});

    const getPhoneDetailsData = useCallback(() => {
        const { id } = match.params;
        const phoneService = new PhoneService();
        phoneService.getPhoneDetails(id)
        .then((response) => {
            setDetails(response.data);
        })
    }, [match]);

    useEffect(() => {
        getPhoneDetailsData();
    }, [getPhoneDetailsData]);

    return(
        <div>
            <div>
                <p>{details.name}</p>
                <p>{details.manufacturer}</p>
                <p>{details.description}</p>
                <p>{details.color}</p>
                <p>{details.price}</p>
                <img src={details.imageFileName} alt="Phone image"/>
                <p>{details.screen}</p>
                <p>{details.processor}</p>
                <p>{details.ram}</p>
            </div>
            <div>
                <a href='/'>Back</a>
            </div>
        </div>
    )
}

export default PhoneDetails;