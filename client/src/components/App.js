import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

//Services
import AuthService from './../service/auth.service'

//Components
import AllMobiles from './pages/mobiles/AllMobiles'
import MobileDetails from './pages/mobiles/Mobiles-details'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Navigation from './layout/Navigation'
import Home from './pages/home/Home'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthService
  }

  componentDidMount = () => {

    this.authServices
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado de App es:', this.state))

  render() {
    
    return (

      <>
        
        <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />

    <main>
          <Switch>
            <Route path='/' exact render={() => <Home />}></Route>
            <Route path='/telefonos' render={() => <AllMobiles />}></Route>
            <Route path='/modelo/:mobile_id' render={props => <MobileDetails {...props} />}></Route>
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/iniciosesion" render={props => <Login storeUser={this.setTheUser} {...props} />} />
        </Switch>
        </main>
        
        </>

    )
  }
}

export default App;
