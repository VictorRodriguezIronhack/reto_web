import PhoneCard from "../components/PhoneCard";
import PhoneList from "../components/PhoneList";
import phonesService from "../services/phoneServices"
import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bootstrap'

function PhoneListPage() {
    const [phones, setphones] = useState([])
    const [showModal, setShowmodal] = useState(false)
    useEffect(() => {
        loadPhones()
    }, [])
    const loadPhones = () => {
        phonesService
            .getAllPhones()
            .then(({ data }) => setphones(data))
            .catch(err => console.log(err))
    }
    const handleModalClose = () => setShowmodal(false)
    const handleModalOpen = () => setShowmodal(true)
    return (
        <Container>
            <h1> Choose your Phone <span onClick={handleModalOpen}>more</span></h1>
            <br></br>
            <PhoneList phones={phones} />
        </Container>
  )
}
export default PhoneListPage