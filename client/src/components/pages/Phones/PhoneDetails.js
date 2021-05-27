import { Card, Button } from 'react-bootstrap'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import PhonesService from './../../../service/phones.service'

class PhoneCard extends Component {

    constructor() {
        super()
        this.state = {
            phone: undefined,
        }
        this.phoneService = new PhonesService()
    }

    componentDidMount() {
        this.loadPhone()
    }

    loadPhone() {
        this.phoneService
            .getOnePhone(this.props.match.params.id)
            .then(response => {
                console.log(response)
                this.setState({ phone: response.data })
            })
            .catch(err => console.log('Error', err))
    }

    render() {

    return (
        !this.state.phone
        ?
        <h1>Cargando...</h1>
        :
        <Card>
                <Card.Img variant="top" src={this.state.phone.imageFileName} style={{ width: '300px' }}/>
            <Card.Body>
                <Card.Title>{this.state.phone.name}</Card.Title>
                <Card.Text>
                        {this.state.phone.description}
                </Card.Text>
            </Card.Body>
        </Card>
        )
    }
}

export default PhoneCard