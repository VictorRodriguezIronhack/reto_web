import React, { Component } from 'react'



const Phones = (props) => {

    const phones = props.phones

    const renderPhones = () => {
        return phones.map((phone, index) => {
            return(
                <div>
                    <button onClick={() => props.selectPhone(index)} key={index}>{phone.name}</button>
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