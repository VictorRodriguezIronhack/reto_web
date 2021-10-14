import React, { Component } from 'react'
import PhoneService from '../../services/phone.service';
import Phone from '../Phone/Phone';


export default class PhonePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phones:null,
        }
        this.phoneService = new PhoneService();
    }

    componentDidMount() {
        this.refreshPhones();
    }

    refreshPhones = () => {
        this.phoneService.getPhones()
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    phones: res.data
                })
            })
            .catch(err => console.error(err))
    }

    displayPhones = () => {


                        return (
                            <Phone/>
                        )
                    }

    render() {
        return (
            <div>
                {
                    this.displayPhones
                }
            </div>
        )
    }
}