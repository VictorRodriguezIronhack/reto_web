import React, { useState, useEffect } from 'react'
// import { Modal, Spinner } from 'react-bootstrap'

import PhonesService from '../../../service/phones.service'

import './PhonesList.css'

function PhonesListPage() {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(false)

    const phonesService = new PhonesService()

    useEffect(() => {
        setLoading(true)
        phonesService.getListPhones()
        .then(response => {
            console.log(response.data)
            setPhones(response.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Lista de móviles</h1>
            { phones.length > 0 ? phones.map(elm => <> 
            <p>{elm.name} - {elm.manufacturer}</p>
            </>) : null }
        </div>
    )
}

export default PhonesListPage
