import React, { Component } from 'react'

const Phones = (props) => {

    const phones = props.phones

    const renderPhones = () => {
        return phones.map((phone, index) => {
            return(
                <div>
                    <p>{phone.name}</p>
                </div>
            )
        })
    } 

    return(
        <div className='phones'>
            <h1>PHONES</h1>
            {renderPhones()}
        </div>
    )
}
export default Phones