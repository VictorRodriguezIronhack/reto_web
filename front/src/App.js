import React, { Component } from 'react'
import './App.css';

// --- SERVICES ---
import PhonesService from './services/phones'

// --- COMPONENTS ---
import Phones from './components/phones/phones'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      phones : []
    }
    this.phonesService = new PhonesService()
  }

  componentDidMount = (props) => {
    this.phonesService
      .getPhones()
      .then(response => {
        console.log(response)
        this.setState({
          phones: response
        })
      })
  }
  
  render(){
    return (
      <div className="App">

      {this.state.phones &&
      <Phones
      phones={this.state.phones}
       />
      }

        
      </div>
    );

  }
}

export default App;
