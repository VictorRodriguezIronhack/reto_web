import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthService from './../service/auth.service'

//Components
import PhoneList from './pages/Phones/phones-list'
import PhoneDetails from './pages/Phone-details/phone-details'
import Login from './pages/Login/Login'
import Loader from './shared/Spinner/Loader'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      backResponse: false
    }
    this.authService = new AuthService()
  }

  componentDidMount = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }

  setTheUser = user => this.setState({loggedUser: user, backResponse: true}, () => console.log(this.state))

  render() {

    return (
      <Switch>
        <Route path="/" exact render={props => <Login storeUser={this.setTheUser} {...props} />}></Route>
        {this.state.loggedUser
          ?
          <>
            <Route path="/listado" exact render={props => <PhoneList storeUser={this.setTheUser} logged={this.state.loggedUser} {...props}/>}></Route>
            <Route path="/detalles/:phone_id" render={props => <PhoneDetails storeUser={this.setTheUser} logged={this.state.loggedUser} {...props} />}></Route>
          </>
          :  
          <Loader/>
        }
      </Switch>
    )
  }
}

export default App