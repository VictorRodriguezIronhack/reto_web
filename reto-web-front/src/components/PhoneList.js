import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import Spinner from "./Spinner"




class PhoneList extends React.Component {
    state={
        phoneList:[],
        loaded:false
    }

    componentDidMount(){
        this.setState({phoneList:this.props.phones, loaded:true})

    }


    render(){
        const mappedPhones = this.state.phoneList.map((phone, index)=> { 
            return(
            <div className="phone" key={index}>
              <Link to={`/telefonos/${phone.id}`}><img src={`./images/${phone.imageFileName}`} alt={phone.name} /></Link>
              <div>
                <h1 className="name">{phone.name}</h1>
                <p className="price"><b>Price: </b>{phone.price}€</p>
              </div>
            </div>
        )
    })

        return this.state.loaded ? (
            <div className="PhoneList">
                {mappedPhones}
            </div>
        )
        : (
           <Spinner/> 
        )
    }
}

export default PhoneList;