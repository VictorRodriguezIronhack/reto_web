import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import Navigation from './layout/Navigation/Navigation'
import PhoneList from './pages/Phones-list/Phone-list'
import PhoneDetails from './pages/Phone-details/Phone-details'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <>
      
      <Navigation />
      
      <main>
        <Switch>
          <Route path='/' exact render={() => <PhoneList />} />
          <Route path='/telefonos' exact render={() => <PhoneList />} />
          <Route path='/telefonos/:phone_id' exact render={props => <PhoneDetails {...props} />} />
        </Switch>
      </main>

    </>
  )
}

export default App
