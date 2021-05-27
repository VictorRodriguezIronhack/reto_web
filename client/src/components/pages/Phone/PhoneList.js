import { Component } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import PhoneService from '../../../service/phone.service'
import PhoneCard from './PhoneCard'
class PhoneList extends Component {
    constructor() {
        super()
        this.state = {
            phones: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount() {
        this.getPhones()
    }

    getPhones() {
        this.phoneService
            .getAllPhones()
            .then(response => this.setState({ phones: response.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <h1>Pay monthly phones</h1>
                {!this.state.phones? <Spinner animation="border" role="status"></Spinner> :
                <Row>
                    {this.state.phones.map(elm => <PhoneCard key={elm._id} {...elm} />)}
                </Row>}
            </Container>
        )
    }
}

export default PhoneList