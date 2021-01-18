import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap'
import PhoneCard from './phoneCard'
import Loader from '../shared/Loader'
import PhoneServices from '../services/phones.service'

const PhonesList = ({ loggedUser }) => {

    const [phones, setPhones] = useState(undefined)


    useEffect(() => {

        const fetchData = async () => {
            try {
                const phoneServices = new PhoneServices()
                const phonesList = await phoneServices.getPhones()
                setPhones(phonesList.data)
                console.log(phonesList.data)
            } catch (error) {
                console.log(error.response.data)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <Row>
                {phones ?
                    phones.map(phone => (
                        <PhoneCard key={phone.id} phone={phone} loggedUser={loggedUser} />
                    ))
                    :
                    <Loader />
                }
            </Row>


        </>

    );
}

export default PhonesList;