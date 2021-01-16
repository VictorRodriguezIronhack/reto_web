import React, {Component} from 'react'
import PhoneService from './../../../service/telefonos.service'
import {Container, Row, Col} from 'react-bootstrap'
import Loader from '../../shared/spinner/Loader'
import './Phone-details.css'
import {Link} from 'react-router-dom'
class PhoneDetails extends Component {
   
    constructor(){
        super()
        this.state = {
            phone: undefined
        }

        this.phonesService = new PhoneService()
    }

    componentDidMount = () => {

        const phone_id = this.props.match.params.phone_id

        this.phonesService
            .getPhone(phone_id)
            .then(res => this.setState({phone: res.data}))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <>
            <Container className="phone-details">
            {this.state.phone ? 
            <>
            <h1>Detalles {this.state.phone.name}</h1>
            <Row>
                <Col md={5}>
                    <img src={this.state.phone.imageUrl[0]} alt={this.state.phone.name} />
                    <Link to={'/telefonos'} className="btn btn-light btn-block">Volver</Link>
                </Col>
                <Col md={5}>
                    <p>Modelo: {this.state.phone.name}</p>
                    <p>Marca: {this.state.phone.brand}</p>
                    <hr />
                    {this.state.phone.discount == 0 ?
                    <span> Precio: {this.state.phone.price[0]}€ </span>
                    :
                    <span>
                    <span>Precio: </span> <span>  </span>
                    <span style={{ textDecorationLine: 'line-through' }}>{this.state.phone.price[0]}€</span> <span>  </span>
                    <span>{(this.state.phone.price[0]-(this.state.phone.price[0] * (this.state.phone.discount / 100 ))).toFixed(2)}€</span> </span>}
                    <p></p>
                    <p>Color: {this.state.phone.color[0]}</p>
                    <p>Memoria de almacenamiento (en GB): {this.state.phone.storage}</p>
                    <p>Puntuación: {this.state.phone.rating}</p>
                    <hr />
                    <p>{this.state.phone.description}</p>
                    
                </Col>
                
            </Row>
            </>
            :
            <Loader />
            }
            </Container>
            </>
        )
    }
}

export default PhoneDetails