import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import PhoneService from '../../../../service/phone.service'
import PhoneCard from './Phone-card'
import Loader from '../../../shared/Spinner/Loader'

class PhoneList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phones: [],
            user: "",
            showModal: false
        }

        this.phoneService = new PhoneService()
    }

    componentDidMount = () => {
        this.refreshPhones()
        this.isLoggedUser()
    }

    refreshPhones = () => {

        this.phoneService
            .getPhones()
            .then(res => this.setState({ phones: res.data, filteredPhone: [...res.data] }))
            .catch(err => console.log(err))

    }

    isLoggedUser = () => { this.props.loggedUser && this.setState({ user: this.props.loggedUser._id }) }

    handleModal = visible => this.setState({ showModal: visible })

    render() {

        return (
            <>
                <div className="phone-list">
                    <Container>
                        <>
                            <h1>List of smartphones</h1>

                            <hr></hr>
                            <Row>
                                {this.state.phones ? this.state.phones.map(elm => <PhoneCard key={elm._id} userId={this.state.user} {...elm} />) : <Loader />}
                            </Row>
                            <br></br>
                        </>
                    </Container>
                </div>
            </>
        )
    }
}

export default PhoneList
