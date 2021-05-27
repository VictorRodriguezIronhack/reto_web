import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"




class PhoneList extends React.Component {
    state={
        phoneList:[],
        loaded:false
    }

    componentDidMount(){
        axios({
            method: "get",
            url: "http://localhost:5000/phones/telefonos",
            withCredentials: true
          })
          .then((result) => {
            console.log(result)
            this.setState({phoneList:result.data, loaded:true})
          })
    }


    render(){
        const details = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align:center;
            `
        const mappedPhones = this.state.phoneList.map((phone)=> { 
            return(
            <div className="phone">
              <img src={`/public/images/${phone.img}`} alt={phone.name} />
              <details>
              <p className="name">{phone.name}</p>
              <p className="manufacturer">{phone.manufacturer}</p>
              <p className="description">{phone.description}</p>
              <p className="color">{phone.color}</p>
              <p className="price">{phone.price}</p>
              <p className="screen">{phone.screen}</p> 
              <p className="processor">{phone.processor}</p> 
              <p className="ram">{phone.ram}</p>
              </details> 
            </div>
        )
    })

        return this.state.loaded ? (
            <div className="PhoneList">
                {mappedPhones}
            </div>
        )
        : (
           <p>Loading...</p> 
        )
    }
}

export default PhoneList;