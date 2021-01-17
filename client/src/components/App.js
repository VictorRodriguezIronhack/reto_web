import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import PhoneList from './pages/Phones-list/Phone-list'
import PhoneDetails from './pages/Phone-details/Phone-details'

// Styles
import './App.css'


function App() {
  return (
    <main>
      <Switch>
        <Route path='/' exact render={() => <PhoneList />} />
        <Route path='/telefonos' exact render={() => <PhoneList />} />
        <Route path='/telefonos/:phone_id' exact render={() => <PhoneDetails />} />
      </Switch>
    </main>
  )
}

export default App
