import { Container, Row } from 'react-bootstrap'
import PhoneCard from './PhoneCard'
import React, { Component } from 'react'
import PhoneService from '../../../Service/Phone.service'


class PhoneList extends Component {

    constructor() {
        super()
        this.state = {
logguedUser:undefined
                }
        this.PhoneService = new PhoneService()
    }


    refreshLocals = () => {
        this.PhoneService
            .getPhones()
            .then(res => {

                this.setState({ phones: res.data })

            })
            .catch(err => { console.log(err) })
    }
    componentDidMount = () => this.refreshLocals()


    render() {
        return (
            <>
                <Container>
                    <h1>Listado de móviles</h1>
                    {this.state.phones ?
                        <>
                            <Row>
                                {this.state.phones.map(elm => <PhoneCard loggedUser={this.props.loggedUser} key={elm._id} {...elm} />)}
                            </Row></>
                        :
                        <h1>cargando</h1>
                    }
                </Container>
            </>
        )
    }
}

export default PhoneList

