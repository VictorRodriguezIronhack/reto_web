import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap'
import PhoneCard from './phoneCard'
import Loader from '../shared/Loader'
import PhoneServices from '../services/phones.service'

const PhonesList = ({ loggedUser, setUserUpdate }) => {

    const [phones, setPhones] = useState(undefined)

    const phoneServices = new PhoneServices()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const phonesList = await phoneServices.getPhones()
            setPhones(phonesList.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const addPhone = async (userId, phoneId) => {

        try {
            await phoneServices.addPhone(userId, phoneId)
            setUserUpdate(true)

        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <>
            <Row>
                {phones ?
                    phones.map(phone => (
                        <PhoneCard key={phone.id} phone={phone} loggedUser={loggedUser} addPhone={addPhone} />
                    ))
                    :
                    <Loader />
                }
            </Row>


        </>

    );
}

export default PhonesList;