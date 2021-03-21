import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import Modal from '../../shared/Modal'
import Spinner from '../../shared/Spinner'

import PhonesService from '../../../service/phones.service'

import './PhonesList.css'

const StyledPhonesListContainer = styled.div`
    width: 100vw;
    justify-content: center;
    display: flex;
    margin-bottom: 50px;
    background: white;
`

const PhonesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
`

const Dark = styled.div`
    background: rgb(31, 31, 31);
`

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
            <h1 className="list-title">THE PHONE CAGE</h1>

            {
                loading ? <Spinner /> :
                <StyledPhonesListContainer>
                    <PhonesList>
                        { phones.length > 0 
                        ?
                        phones.map(elm => <div className="phone-card">
                        <img src={`https://res.cloudinary.com/dqh1l02dr/image/upload/v1616347677/${elm.imageFileName}`} alt={elm.name} />
                        <p key={elm.id}>{elm.name} - {elm.manufacturer}</p> 
                        <Dark>
                            <a className="btn btn-white" onClick={() => {
                                getModal(elm)
                                }}>Ver detalles</a>
                        </Dark>
                        </div>)
                        : null }
                    </PhonesList>
                </StyledPhonesListContainer>
            }
            {
                show ? <Modal show={show} handleClose={() => hideModal()} info={modalInfo}  /> : null
            }

        </div>
    )
}

export default PhonesListPage
