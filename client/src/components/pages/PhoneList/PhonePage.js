import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import PhoneService from '../../../services/phone.service'
import PhoneList from "./PhoneList"
import './PhonePage.css'

const phoneService = new PhoneService()

function PhonePage(props) {

    const [phones, setPhones] = useState([]);

    const getAllPhones = () => {
        phoneService
            .getAllPhones()
            .then(response => {
                const phones = response.data
                setPhones(phones)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllPhones()
    }, []);

    return (
        <Container>
            <div className='div-content'>
                <h1>Phone List</h1>
            </div>
            <hr />
            <PhoneList getAllPhones={getAllPhones} phones={phones} {...props} />
        </Container>
    );
}

export default PhonePage