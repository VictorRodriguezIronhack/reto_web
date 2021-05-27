
import { Container, CardGroup } from 'react-bootstrap'
import { Component } from 'react'
import PhoneCard from './PhoneCard'
import PhonesService from './../../../service/phones.service'

class PhoneList extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined,
        }
        this.phoneService = new PhonesService()
    }

    componentDidMount() {
        this.loadPhones()
    }

    loadPhones(){
        this.phoneService
            .getAllPhones()
            .then(response=>{
                console.log(response)
                this.setState({ phones: response.data })
            })
            .catch(err => console.log('Error', err))
    }
    
    render() {
        return (

            !this.state.phones
            ?
            <h1>Cargando...</h1>
            :
            <Container>
                <CardGroup>
                        {this.state.phones.map(elm=><PhoneCard key={elm.id} {...elm}/>)}
                </CardGroup>
            </Container>

        )
    }
}

export default PhoneList