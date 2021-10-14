import PhoneService from '../services/phones.service'
import React, { useState } from 'react'


export default function Phones() {

    const phoneService = new PhoneService()
    const [phones, setPhones] = useState(null)


    const getAllphones = () => {

        phoneService.findPhones()
            .then(phones => {
                setPhones(phones)
            })
            .catch(err => console.log(err))
    }

    getAllphones()



    return (
        <div>
            <div>{phones}</div>
        </div>
    )
}

