import React, {Component} from 'react'
import PhoneService from './../../../service/telefonos.service'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Loader from '../../shared/spinner/Loader'
import {Redirect} from 'react-router-dom'


class PhoneForm extends Component {
   
    constructor(){
        super()
        this.state = {
            name: '',
            brand: '',
            description: '',
            price: '',
            discount: '',
            imageUrl: '',
            color: '',
            rating: '',
            storage: '',
            stock: '',
        }
        this.phonesService = new PhoneService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
        this.phonesService
            .savePhone(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
            
    }


    render(){
   
        return (
            <>
                <h1>Añadir nuevo teléfono</h1>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre.." name="name" value={this.state.name} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="brand">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control type="text" placeholder="Marca.." name="brand" value={this.state.brand} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" placeholder="Si el precio varía segun la memoria, separe los preciso con comas y en orden de listado de memoria" name="price" value={this.state.price} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="discount">
                                <Form.Label>Descuento (%)</Form.Label>
                                <Form.Control type="number" placeholder="Descuento.." name="discount" value={this.state.discount} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="imageUrl">
                                <Form.Label>Imágenes</Form.Label>
                                <Form.Control type="text" placeholder="Imágenes.." name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="color">
                                <Form.Label>Color</Form.Label>
                                <Form.Control type="text" placeholder="Si son varios colores, sepárelos con comas" name="color" value={this.state.color} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="storage">
                                <Form.Label>Memoria</Form.Label>
                                <Form.Control type="number" placeholder="Separe las distintas capacidades con comas, y en el mismo orden del precio corrsepondiente" name="storage" value={this.state.storage} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="stock">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="number" placeholder="Separe las distintas capacidades con comas, y en el mismo orden de la lista de memoria" name="stock" value={this.state.stock} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" >Submit</Button>
                        </Form>
            </>
        )
    }
}

export default PhoneForm