import React from 'react'
import phoneService from '../../services/phone.service'
import { useState, useEffect } from "react"
import { Container, Row, Col, Modal } from "react-bootstrap"
import LoadingComponent from '../Loading'
import PhoneCard from '../PhoneCard/PhoneCard'
import Details from '../Details/Details'
import "./PhoneList.css"

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
    useEffect(() => {
        loadPhones()
    }, [])
    const loadPhones = () => {
        phoneService
            .getAllPhones()
            .then(({ data }) => {
                setPhones(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {loading && <LoadingComponent />}
            {!loading &&
                <div className='phone' >
                    <Container >
                        <Row>

                            {phones.map(elm => {
                                return (
                                    <Col md={4} key={elm.id}>
                                     
                                        <PhoneCard {...elm} openModal={openModal} setShowP={setShowP} />
                                      
                                    </Col>
                                )
                            })}

                        </Row>
                    </Container>


                    <Modal show={modal} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{showP?.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Details {...showP} />
                        </Modal.Body>
                    </Modal>
                </div>}
        </>

    )
}
export default PhoneList