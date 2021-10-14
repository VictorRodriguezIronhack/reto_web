import React, { Component } from 'react'
import PhoneService from '../../services/phone.services'

export default class PhoneList extends Component {
    constructor() {
        super()
        this.state = {
            phones: undefined
        }
    }
    phoneServices = new PhoneService()
    componentDidMount() {
        this.refreshPhones()
    }
    refreshPhones = () => {
        this.phoneServices.getPhones()
            .then((res) => {
                this.setState({
                    ...this.state,
                    phones: res?.data
                })
            })
            .catch(error => console.log(error))


    }

    render() {
        return (
            <div>
                {
                    this.state?.phones ?
                        this.state.phones.map((phone) => {
                            return (
                                <div key={phone.id}>
                                    <img src={phone.imageFileName} />
                                    <h1>{phone.name}</h1>
                                    <p>{phone.manufacturer}</p>
                                    <p>{phone.description}</p>

                                    <p>{phone.color}</p>

                                </div>
                            )
                        })

                        :
                        <h2>Phones Undefined</h2>
                }
            </div>
        )

    }
}
