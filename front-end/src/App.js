import React from 'react'
import axios from 'axios'
import {Switch, Route, Link} from 'react-router-dom'
import Phone from './components/Phone'
import PhoneDetails from './components/PhoneDetails'
import './App.scss';

class App extends React.Component {
state={
  phones:undefined
}
  componentDidMount(){
    axios({
      method: 'get',
      url: `http://localhost:5000/telefonos`,
      withCredentials: true,
    })
     .then((result) => {
       this.setState({phones: result.data})
     }).catch((err) => {
       console.log(err)
     });
  }
  render(){
  return this.state.phones?(
    <div className="App">
    <h1>Home</h1>
    <Link to="/telefonos">Display phones</Link>
    <Switch>
    <Route path="/telefonos" exact component={()=> <Phone phones={this.state.phones} /> } />
    <Route path="/telefonos/:id" exact component={(routeProps)=> <PhoneDetails {...routeProps} phones={this.state.phones} /> } />
    </Switch>
    </div>
  ):(<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
  }
}

export default App;
