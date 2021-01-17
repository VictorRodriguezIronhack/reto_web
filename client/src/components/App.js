import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'
import PhoneList from './pages/Phone/Phone-list/Phone-list'
import PhoneDetails from './pages/Phone/Phone-details/Phone-details'
import PhoneForm from './pages/Phone/Phone-new-form/Phone-new-form'
import PhoneEditForm from './pages/Phone/Phone-edit-form/Phone-edit-form'
import Signup from './pages/User/Signup/Signup'
import Login from './pages/User/Login/Login'
import Navbar from './layout/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './layout/Footer/Footer'

class App extends Component {

  constructor() {
    super()
    this.state = {

      loggedInUser: undefined

    }

    this.authServices = new AuthServices()

  }

  componentDidMount = () => {

    this.authServices
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user })


  render() {

    return (
      <>


        <Navbar storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />

        <main>
          <Switch>
            <Route path="/" exact render={() => <Home loggedUser={this.state.loggedInUser} />} />
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/acceso-usuario" render={props => <Login storeUser={this.setTheUser} {...props} />} />
            <Route path="/teléfonos" exact render={() => <PhoneList loggedUser={this.state.loggedInUser} />} />
            <Route path="/teléfonos/crear" render={props => this.state.loggedInUser ? <PhoneForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/teléfonos/editar/:phone_id" exact render={props => this.state.loggedInUser ? <PhoneEditForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/teléfonos/:phone_id" render={props => <PhoneDetails {...props} loggedUser={this.state.loggedInUser} />} />
          </Switch>
        </main>

        <Footer />

      </>
    )
  }

}

export default App
