import React from 'react'

const PhoneInfo = (props) => {

    return(
        <div>
            <p>manufacturer: {props.selectedPhone.manufacturer}</p>
            <p>price: {props.selectedPhone.price}</p>
            <p>processor: {props.selectedPhone.processor}</p>
            <p>ram: {props.selectedPhone.ram}</p>
            <p>screen: {props.selectedPhone.screen}</p>
            <p>color: {props.selectedPhone.color}</p>
            <p>description: {props.selectedPhone.description}</p>
        </div>
    )
}
export default PhoneInfo