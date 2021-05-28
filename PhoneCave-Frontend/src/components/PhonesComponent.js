import React, { Component } from 'react';
import PhoneService from '../services/phone-service';

class Phones extends Component {
    constructor(props){
        super(props);

        this.state = {
            phones: [],
        };
    }

    getPhonesData(){
        const phoneService = new PhoneService();
        phoneService.getAllPhones()
        .then((response) => {
            this.setState({
                phones: response.data,
            })
        })
    }

    componentDidMount() {
        this.getPhonesData();
    }

    render(){
        return(
            <div>
                {this.state.phones.map((phone) => (
                    <div>
                        <p>{phone.name}</p>
                        <a href={`/phones/${phone._id}`}>Details</a>
                    </div>
                ))}
            </div>
        )
    }
}

export default Phones;
