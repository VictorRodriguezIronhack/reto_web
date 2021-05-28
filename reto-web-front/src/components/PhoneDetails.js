import axios from "axios"
import React from "react"
import styled from "styled-components"
import Spinner from "./Spinner"




class PhoneDetails extends React.Component {
    state={
        phoneDetails: null,
        loaded:false
    }

    componentDidMount(){
        const phone = this.props.phones.filter((phone)=>{
            return phone.id == this.props.match.params.id
        })
        this.setState({phoneDetails: phone[0], loaded:true})
    }


    render(){
        const {phoneDetails} = this.state
        const PhoneDetails = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align:center;
            p{
            margin:0 1vw;
            margin-top: 2vh;
            }
            div{
            margin-top: 2vh;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align:center;
            }
            width: 80vw;
            margin:0 auto;
            `
            
            const Image = styled.img`
            width:15vw;
            `
        return this.state.loaded ? (
            <div className="PhoneDetails">
                <div className="phone">
                    <PhoneDetails>
                    <Image src={`../images/${this.state.phoneDetails.imageFileName}`} alt={phoneDetails.name} />
                    <h1 className="name">{phoneDetails.name}</h1>
                    <p className="manufacturer"><b>Manufacturer: </b>{phoneDetails.manufacturer}</p>
                    <p className="description"><b>Description: </b>{phoneDetails.description}</p>
                    <div>
                        <p className="color"><b>Color: </b>{phoneDetails.color}</p>
                        <p className="price"><b>Price: </b>{phoneDetails.price}€</p>
                        <p className="screen"><b>Screen: </b>{phoneDetails.screen}</p> 
                        <p className="processor"><b>Processor: </b>{phoneDetails.processor}</p> 
                        <p className="ram"><b>RAM: </b>{phoneDetails.ram}GB</p>
                    </div>
                    </PhoneDetails> 
                </div>
            </div>
        )
        : (
           <Spinner/> 
        )
    }
}

export default PhoneDetails;