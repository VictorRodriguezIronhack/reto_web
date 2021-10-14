import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PhoneService from '../../services/phone.service';



export default class Phone extends Component {


    constructor() {
        super()
        this.state = {
            phone:null,

        }
        this.phoneService = new PhoneService();
    }



    componentDidMount() {
        
        const { id } = this.props.match.params;

        this.phoneService.getOnePhone(id)
            .then(res => {
                this.setState({
                    ...this.state,
                    phone: res.data
                })
            })
            .catch(err => console.error(err))

        };
    

    render() {
        return (
            <div>

            <td>
                <tr>
                    {this.state.phone.name}
                </tr>
            </td>
               

            </div>

        )
    }
}