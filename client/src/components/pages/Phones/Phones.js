import {Component} from 'react'
import PhonesService from '../../../service/phones.service'
import {Container, Row} from 'react-bootstrap'
import PhoneCard from './PhoneCard'
import Spinner from '../../Shared/Spinner/Spinner'

class Phones extends Component {

    constructor() {
        super()
        this.state = {
            phones: []
        }

        this.phonesService = new PhonesService()
    }

    componentDidMount() {
        this.loadPhones()
    }

    loadPhones() {
        this.phonesService
            .getPhones()
            .then(response => this.setState({phones: response.data}))
            .catch(err => console.log({err}))
    }
    
    render() {

        return(
            <Container>
                <Row>
                    {this.state.phones
                        ?
                    this.state.phones.map(elm => <PhoneCard key={elm.id} {...elm}></PhoneCard>)
                        :
                    <Spinner></Spinner>}
                </Row>
            </Container>
        )
    }
}

export default Phones