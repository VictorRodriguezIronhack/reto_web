import {Component} from 'react'
import PhonesService from '../../../service/phones.service'
import {Container, Row} from 'react-bootstrap'
import PhoneCard from './PhoneCard'
import Spinner from '../../Shared/Spinner/Spinner'

class Phones extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined
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
            <>
                <Container>
                    {this.state.phones
                        ?
                        
                            <Row>
                                {this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm}></PhoneCard>)}
                            </Row>
                        
                        :
                    <Spinner></Spinner>}
                </Container>
            </>
        )
    }
}

export default Phones