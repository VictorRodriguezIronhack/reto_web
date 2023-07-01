import {Component} from 'react'
import PhonesService from '../../../service/phones.service'
import {Container, Button, Modal} from 'react-bootstrap'
import PhonesList from './PhonesList'
import PhoneForm from '../PhoneForm/PhoneForm'
import Spinner from '../../Shared/Spinner/Spinner'
import './Phones.css'

class Phones extends Component {

    constructor() {
        super()
        this.state = {
            phones: undefined,
            showForm: false
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

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }
    
    render() {
        const tittle = 'the phone list'
        const message = 'If you opened the web for the first time the phone list will appear after 30 seconds due to hosting conditions'
        
        return(
            <>
                <Container>
                        <h1 style={{textAlign: 'center'}}>The Phone Cave</h1>
                        <Button onClick={() => this.togglemodalForm(true)} variant="dark" className="new-coaster-btn">New Smartphone</Button>
                    {this.state.phones
                        ?
                            
                            <PhonesList phones={this.state.phones}></PhonesList>
                        
                        :
                        <Spinner tittle={tittle} message={message}></Spinner> }
                </Container>

                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Smartphone</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PhoneForm closeModal={() => this.togglemodalForm(false)} refreshList={() => this.loadPhones()} handleAlert={this.props.handleAlert}/>
                    </Modal.Body>
                </Modal>
                
            </>
        )
    }
}

export default Phones