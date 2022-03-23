import React from 'react'
import phoneService from '../../services/phone.service'
import { useState, useEffect } from "react"
import { Container, Modal } from "react-bootstrap"
import LoadingComponent from '../Loading'
import PhoneCard from '../PhoneCard/PhoneCard'
import Details from '../Details/Details'

function PhoneList() {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState([undefined])
    const [showP, setShowP] = useState(undefined)
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
            {loading && <LoadingComponent />}
            {!loading &&
                <>
                    <Container>
                        <section>
                            {phones.map(elm => {
                                return (<div key={elm.id}>
                                    <PhoneCard {...elm} openModal={openModal} setShowP={setShowP} />
                                </div>)
                            })}
                        </section>
                    </Container>


                    <Modal show={modal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{showP?.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Details {...showP} />
                        </Modal.Body>
                    </Modal>
                </>}
        </>

    )
}
export default PhoneList