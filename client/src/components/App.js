import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthServices from './../service/auth.service'
import Navigation from './layout/Navigation/Navigation'
import Homepage from './pages/homepage/HomePage'
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Footer from './layout/Footer/Footer'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthServices()
  }

  componentDidMount = () => {

    this.authServices
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log(this.state))

  render() {

    return (
      <>
        <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />

        <main>
          <Switch>
            <Route path='/' exact render={() => <Homepage />} />
            <Route path='/signup' render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path='/login' render={props => <Login storeUser={this.setTheUser} {...props} />} />
            <Route path='/profile' render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} /> : <Redirect to="/login" />} />
          </Switch>
        </main>

        <Footer />

      </>
    )
  }
}

export default App

