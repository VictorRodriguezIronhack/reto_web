import { useEffect, useState } from "react"
import { Container, Modal } from "react-bootstrap"
import NewPhoneForm from "../../components/NewPhoneForm/NewPhoneForm"
import PhoneList from "../../components/PhoneList/PhoneList"
import LoadingSpinner from "../../components/Spinner/Spinner"
import phonesService from "../../services/phone.services"
import './HomePage.css'


const HomePage = () => {

    const [phones, setPhones] = useState([])

    const [showModal, setshowModal] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            loadPhones()
        }, 1000)

    }, [])

    const loadPhones = () => {
        phonesService
            .getAllPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }

    const handleModalClose = () => setshowModal(false)
    const handleModalOpen = () => setshowModal(true)

    return (
        <>
            <Container>
                <h1>LISTADO DE MÓVILES </h1>
                <h4 onClick={handleModalOpen}>Crear</h4>
                {!phones.length ? <LoadingSpinner /> : <PhoneList phones={phones} />}
            </Container>

            <Modal className="modal" show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Crear nuevo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPhoneForm closeModal={handleModalClose} refreshPhones={loadPhones} />
                </Modal.Body>
            </Modal>

        </>

    )
}

export default HomePage