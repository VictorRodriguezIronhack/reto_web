import React, { useState, useEffect } from 'react'
import PhoneService from '../services/phones.service'
//import Phone from './Phone'

const phoneService = new PhoneService()

export default function Home() {

    const [phones, setPhones] = useState([])

    useEffect(() => {
        phoneService.getAllPhones()
            .then(response => {
                setPhones(response.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        phones ?
            <div>
                {phones.map((elm, idx) => {
                    return (
                        <div key={idx}>
                            <div>{/* <div onClick={() => togglePhoneDetails(idx)}> */}
                                {/* <Phone phoneIndex={elm.id}></Phone> */}
                                <h1>{elm.name}</h1>
                                <h2>{elm.manufacturer}</h2>
                                <p>{elm.description}</p>
                                <h4>{elm.color}</h4>
                                <h4>{elm.price}</h4>
                            </div>
                        </div>
                    )
                })
                }

            </div>
            :
            <div >
                <h1>Loading...</h1>
            </div>
    )
}