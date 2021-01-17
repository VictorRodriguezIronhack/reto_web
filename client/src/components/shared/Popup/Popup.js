import { Modal } from 'react-bootstrap'

const Popup = ({ show, title, handleModal, children }) => {
    return (
        <Modal size="lg" show={show} onHide={() => handleModal(false)} className="modal-container mt-3">         
            <Modal.Body className="modal-body mt-4 mb-3">
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default Popup