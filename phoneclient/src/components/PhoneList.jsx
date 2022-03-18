import React from "react"
import phoneService from "../services/phone.service"
import { useState, useEffect } from "react"
import { Container, Image, Row, Col, Modal, Spinner } from "react-bootstrap"
import PhoneCard from "./PhoneCard"
import PhoneDetails from "./phoneDetails"

{/* <Image src={elm.imageFileName.slice(0, elm.imageFileName.length - 4)} /> */ }

const PhoneList = () => {

    const [phones, setPhones] = useState([])
    const [phoneToShow, setPhoneToShow] = useState(undefined)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {
        setLoading(true)
    }, []
    )

    const closeModal = () => {
        setModal(false)

    }

    const openModal = () => setModal(true)

    phoneService
        .getAllPhones()
        .then(({ data }) => {
            setPhones(data)
            setLoading(false)
        })
        .catch(err => console.log(err))



    return (<>
        {/* aqui podria ir un ternario */}
        {loading && <Spinner animation="border" variant="success" style={{
            position: "absolute", top: "50%", left: "45%"
        }} />}

        {!loading &&
            <>
                <Container>
                    <section style={{ display: "flex", flexWrap: "wrap" }}>
                        {phones.map(elm => {
                            return (<div key={elm.id}>
                                <PhoneCard {...elm} openModal={openModal} setPhoneToShow={setPhoneToShow} />
                            </div>)
                        })}
                    </section>
                </Container>


                <Modal show={modal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{phoneToShow?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                        <PhoneDetails {...phoneToShow} />
                    </Modal.Body>
                </Modal>
            </>}
    </>
    )
}

export default PhoneList