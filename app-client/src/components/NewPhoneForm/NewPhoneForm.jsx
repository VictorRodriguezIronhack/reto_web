import { useState } from "react"
import { Button, Col, Form, Row, } from "react-bootstrap"
import phonesService from "../../services/phone.services"

const NewPhoneForm = ({ closeModal, refreshPhones }) => {

    const [phoneData, setPhoneData] = useState({
        id: '',
        name: '',
        manufacturer: '',
        description: '',
        color: '',
        price: 0,
        imageFileName: '',
        screen: '',
        processor: '',
        ram: 0
    })

    const { id, name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = phoneData

    const handleInputChange = e => {

        const { value, name } = e.target

        setPhoneData({
            ...phoneData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        phonesService
            .createPhone(phoneData)
            .then(({ data }) => {
                refreshPhones()
                closeModal()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit} >
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="id">
                        <Form.Label>id</Form.Label>
                        <Form.Control type="number" value={id} onChange={handleInputChange} name="id" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="manufacturer">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control type="text" value={manufacturer} onChange={handleInputChange} name="manufacturer" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Precio (€)</Form.Label>
                        <Form.Control type="number" value={price} onChange={handleInputChange} name="price" />
                    </Form.Group>

                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="color">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" value={color} onChange={handleInputChange} name="color" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="screen">
                        <Form.Label>Pantalla (pulgadas)</Form.Label>
                        <Form.Control type="text" value={screen} onChange={handleInputChange} name="screen" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="processor">
                        <Form.Label>Procesador</Form.Label>
                        <Form.Control type="text" value={processor} onChange={handleInputChange} name="processor" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ram">
                        <Form.Label>RAM (gb)</Form.Label>
                        <Form.Control type="number" value={ram} onChange={handleInputChange} name="ram" />
                    </Form.Group>
                </Col>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imageFileName">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="url" value={imageFileName} onChange={handleInputChange} name="imageFileName" />
                </Form.Group>

            </Row>

            <div className="d-grid gap-2">
                <Button variant="dark" type="submit">Crear</Button>
            </div>

        </Form >
    )
}

export default NewPhoneForm