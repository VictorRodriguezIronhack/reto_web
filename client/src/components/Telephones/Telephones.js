import React, { Component } from 'react'
import PhoneService from '../../services/phone.service'

export default class Telephones extends Component {

    constructor(props) {
        super(props)
        this.state = {
            telephones: undefined
        }
        this.phoneService = new PhoneService()
    }

    componentDidMount() {
        this.phoneService.findAll()
            .then(phone => {
                console.log(phone.data)
                this.setState({
                    telephones: phone.data
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            this.state.telephones ?
                <div>
                    {this.state.telephones.map(elm => {
                        return <div key={elm._id}>
                            <p>{elm.name}</p>
                        </div>
                    })}
                </div>
                :
                <div>...Cargando</div>
        )
    }
}
