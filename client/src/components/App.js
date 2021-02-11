import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import PhoneList from './pages/phones-list/phone-list'
import Homepage from './pages/homepage/homepage'
import PhoneDetail from './pages/phone-detail/phone-detail'
import EditForm from './pages/edit-form/edit-form'
import NewForm from './pages/new-form/new-form'
import Navbar from './layout/navbar'

class App extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <>
        <nav>
          <Navbar />
        </nav>
        <Switch>
          <Route path='/' exact render={() => <Homepage />} />
          <Route path='/telefonos' exact render={() => <PhoneList />} />
          <Route path='/telefonos/:id' render={props => <PhoneDetail {...props} />} />
          <Route path='/editar/:id' render={props => <EditForm {...props} />} />
          <Route path='/new' render={props => <NewForm {...props} />} />
        </Switch>
      </>
    )
  }
}

export default App;
