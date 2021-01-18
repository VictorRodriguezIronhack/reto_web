import { Modal, Form, FormGroup, Col, Row } from 'react-bootstrap'
import './PaymentForm.css'

const PaymentForm = ({ show, handleModal }) => {

    return (
        <Modal show={show} onHide={() => handleModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Payment Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Row>
                    <FormGroup as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' required></Form.Control>
                    </FormGroup>
                    <FormGroup as={Col}>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type='text' required></Form.Control>
                    </FormGroup>
                </Form.Row>

                <FormGroup>
                    <Form.Label>Card number</Form.Label>
                    <Form.Control type='number' required ></Form.Control>
                </FormGroup>
                <Form.Row>
                    <Col xs={6}>
                        <FormGroup>
                            <Form.Label>Expiration date</Form.Label>
                            <Row>
                                <Col xs={4}>
                                    <Form.Control type='number'></Form.Control>
                                </Col>
                                /
                                <Col xs={4}>
                                    <Form.Control type='number' required ></Form.Control>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                    <Col xs={6}>
                        <FormGroup>
                            <Form.Label>CVC</Form.Label>
                            <Form.Control type='number' required ></Form.Control>
                        </FormGroup>
                    </Col>
                </Form.Row>

                <div className='buy'>
                    <h4 className="confirm-btn" onClick={() => handleModal(false)}>Confirm</h4>
                </div>

            </Modal.Body>
        </Modal>

    )
}

export default PaymentForm