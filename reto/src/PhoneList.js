import React, { Component } from "react";
import phoneArray from './phones.json'
import PhoneCard from "./PhoneCard";

const allPhones = phoneArray

class PhoneList extends Component {
    constructor() {
        super()
        this.state = {
            phone: allPhones
        }
    }

    render() {
        return this.state.phone.map((eachPhone) => (
            <PhoneCard
                key={eachPhone.id}
                imageFileName={eachPhone.imageFileName}
                name={eachPhone.name}
                manufacturer={eachPhone.manufacturer}
                description={eachPhone.description}
                color={eachPhone.color}
                price={eachPhone.price}
                screen={eachPhone.screen}
                processor={eachPhone.processor}
                ram={eachPhone.ram}
            />

        ))
    }

}

export default PhoneList