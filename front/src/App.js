import React, { Component } from 'react'
import './App.css';

// --- SERVICES ---
import PhonesService from './services/phones'

// --- COMPONENTS ---
import Phones from './components/phones/phones'
import PhoneInfo from './components/phones/phoneInfo'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      phones : [],
      selectedPhone: ''
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
    
    selectPhone = (key) => {
      const newPhones = [...this.state.phones]
      const selectedPhone = newPhones.filter((phone, index) => {
        return index === key
      })
      this.setState({
        selectedPhone: selectedPhone[0]
      })
    }

  render = () => {
    return (
      <div className="App">

      {this.state.phones &&
      <Phones
      phones={this.state.phones}
      selectPhone={this.selectPhone}
      selectedPhone={this.state.selectedPhone}
       />
      }
      {this.state.selectedPhone &&
        <PhoneInfo
        selectedPhone={this.state.selectedPhone}
        />
      }

        
      </div>
    );

  }
}

export default App;
