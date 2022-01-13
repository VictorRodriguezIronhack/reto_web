import React, { Component } from 'react'
import PhoneService from '../services/phones.services'



class ListPhones extends Component {
  constructor() {
    super()

    this.state = {
        phones: [],
    }
    this.service = new PhoneService()
    
  }

componentDidMount() {
  
  this.service.getAlls()
    .then(response => {

      console.log(response.data)
      const phones = response.data

      this.setState({ phones: phones })
    })
    .catch(err => console.log(err))
    
}

  render() {

    return (
      <div>
         <h1>Todos los teléfonos</h1>
          
          {this.state.phones?.map(elm=>
          <div> {elm.name} </div>)}
          
      </div>
    )
  }
}

export default ListPhones