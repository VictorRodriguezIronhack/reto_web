import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import PhonesList from './pages/phones/Phones-list';
import PhoneDetails from './pages/phones/Phone-details'
import NewPhone from './pages/phones/New-phone'

import Navigation from './shared/Navigation'
import AuthPage from './pages/auth/Auth-page';
import Footer from './shared/Footer'

import AuthService from '../services/auth.service';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedUser: undefined
    }
    this.authService = new AuthService()

  }

  setUser = userInfo => this.setState({ loggedUser: userInfo })

  componentDidMount = () => {
    this.authService
      .loggedin()
      .then(res => this.setUser(res.data))
      .catch(err => new Error('ERROR IN COMP MOUNT AUTH', err)) 
  }

  render() {
    return (
      <>
        <Navigation setUser={this.setUser} theUser={this.state.loggedUser} />
        <main>
          <Switch>
            <Route path="/" exact render={() => <PhonesList theUser={this.state.loggedUser} />} />
            <Route path="/login" render={props => this.state.loggedUser ? <Redirect to='/' /> : <AuthPage setUser={this.setUser} {...props} />} />
            <Route path="/new-phone" render={() => this.state.loggedUser ? <Redirect to='/' /> : <NewPhone />} />
            <Route path="/details/:id" exact render={props => this.state.loggedUser ? <Redirect to='/' /> :  <PhoneDetails theUser={this.state.loggedUser} {...props} />} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
