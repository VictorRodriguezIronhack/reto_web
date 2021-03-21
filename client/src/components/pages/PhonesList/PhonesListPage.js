import React, { useState, useEffect } from 'react'
// import { Modal, Spinner } from 'react-bootstrap'

import Modal from '../../shared/Modal'

import PhonesService from '../../../service/phones.service'

import './PhonesList.css'

function PhonesListPage() {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [modalInfo, setModalInfo] = useState([])

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

    const getModal = (elm) => {
        setModalInfo(elm)
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
        setModalInfo(undefined)
    }

    return (
        <div>
            <h1>Lista de móviles</h1>
            { phones.length > 0 ? phones.map(elm => <> 
            <p key={elm.id}>{elm.name} - {elm.manufacturer}</p> <button onClick={() => {
                getModal(elm)
                }}>Ver detalles</button>
            </>) : null }

            {
                show ? <Modal show={show} handleClose={() => hideModal()} info={modalInfo}  /> : null
            }
        </div>
    )
}

export default PhonesListPage
