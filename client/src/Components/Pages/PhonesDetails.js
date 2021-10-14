import React, { useEffect, useState } from 'react'
import PhoneService from '../../service/phone.service'

export default function PhonesDetails() {

    const phoneService = new PhoneService()
    const [phone, setPhone] = useState(null)

    const getOnePhone = () => {
        phoneService.findOnePhone()
            .then(phone => {
                console.log(phone)
                setPhone(phone)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getOnePhone()
    }, [])


    return (
        <div>
            <p>hola</p>
        </div>
    )
}
