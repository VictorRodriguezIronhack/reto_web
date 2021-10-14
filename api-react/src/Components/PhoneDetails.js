import React from 'react'


class PhoneDetails extends React.Component{
    render(){
        const selectedId = this.props.match.params.id
        const matchedId = this.props.allPhones.filter((phone)=>{
            return phone.id == selectedId
        })[0]
        return this.props.allPhones.length ? (
            <div className="PhoneDetails">
              <img src={`../Images/${matchedId.imageFileName}`} alt ={matchedId.name}/>
              <div className="phoneContent">
              <h2>{matchedId.name}</h2>
              <p><b>Manufacturer:</b>{matchedId.manufacturer}</p>
              <p><b>Description:</b>{matchedId.description}</p>
              <p><b>Color:</b>{matchedId.color}</p>
              <p><b>Price:</b>{matchedId.price}$</p>
              <p><b>Screen:</b>{matchedId.screen}</p>
              <p><b>Processor:</b>{matchedId.processor}</p>
              <p><b>Ram:</b> {matchedId.ram}</p>
              </div>

            </div>
        ) : (
            <h1>Loading..</h1>
        )
    }
}

export default PhoneDetails