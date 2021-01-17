import React, { Component } from 'react'
import phoneService from './../../../Service/Phone.service'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './PhoneDetails.css'
import Loader from '../../Loader/Loader'



class phoneDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.phoneService = new phoneService()
        this.goBack = this.goBack.bind(this)
    }

    componentDidMount = () => {
        const phone_id = this.props.match.params.phone_id
        console.log(this.props.match.params.phone_id)
        if (this.props.loggedUser) {
            this.setState({ loggedUser: this.props.loggedUser })
        } else {
            this.setState({ loggedUser: "null" })
        }

        if (phone_id) {


            this.phoneService
                .getPhone(phone_id)
                .then(res => {
                    this.setState({ phone: res.data })

                })
                .catch(err => console.log(err))

        }
    }
    goBack() {
        this.props.history.goBack();
    }



    render() {

        return (
            <Container className="phone-details">
                {this.state.phone
                    ?
                    <>


                        <div className="flex leftSide">
                            <div className="rightSide">
                                <h1 className="title"> {this.state.phone.name}</h1>

                                <img className="imgDetails" src={this.state.phone.image}></img>
                            </div>

                            <div >
                                <table className="table">
                                    <tbody>

                                        <tr>

                                            <td className="titles"><strong>Manufacturer:</strong> </td>
                                            <td>
                                               {this.state.phone.manufacturer}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="titles"><strong>Color:</strong> </td>
                                            <td>
                                                {this.state.phone.color}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="titles"><strong><strong>Description:</strong></strong> </td>
                                            <td>
                                                {this.state.phone.description}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="titles"><strong>Price:</strong> </td>
                                            <td>
                                                {this.state.phone.price}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="titles"><strong>Screen:</strong> </td>
                                            <td>
                                                {this.state.phone.screenSize}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="titles"><strong>RAM:</strong> </td>
                                            <td>
                                                {this.state.phone.ram}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                           
                            </div>

                      
                        </div>







                    </>
                    :
<Loader></Loader>                }

            </Container>
        )
    }
}

export default phoneDetails