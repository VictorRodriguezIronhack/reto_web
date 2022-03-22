import React from 'react'
import phoneService from '../../services/phone.service'
import { useState, useEffect } from "react"
import { Container, Modal, Spinner } from "react-bootstrap"
import LoadingComponent from '../Loading'


function PhoneList() {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState([undefined])
    const [modal, setModal] = useState(false)

    useEffect(() => {
        setLoading(true)
    }, []
    )

    const closeModal = () => {
        setModal(false)
    }

    const openModal = () => {
        setModal(true)
    }

    phoneService
        .getAllPhones()
        .then(({ data }) => {
            setPhones(data)
            setLoading(false)
        })
        .catch(err => console.log(err))

    return (
        <>
            {loading && <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner>}
            {/* {!loading &&

                <>
                    <Container>
                        {phones.map(elm => {
                            return (
                                <div key={elm.id}>

                                </div>)
                        }
            </Container>
                </>
            } */}
        </>

    )
}
export default PhoneList