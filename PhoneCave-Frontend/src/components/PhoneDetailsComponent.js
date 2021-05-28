import React, { Component } from 'react';
import PhoneService from '../services/phone-service';

class PhoneDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            details: {},
        }
    }

    getPhoneDetailsData(){
        const { id } = this.props.match.params;
        const phoneService = new PhoneService();
        phoneService.getPhoneDetails(id)
        .then((response) => {
            this.setState({
                phones: response.data,
            })
        })
    }

    componentDidMount(){
        this.getPhoneDetailsData();
    }

    render(){
        console.log(this.state.details);
        return(
            <div>
            </div>
        )
    }
}

export default PhoneDetails;