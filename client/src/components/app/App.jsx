import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PhonePage from '../pages/PhonePage'
import * as PATHS from '../../utils/paths'
import PhoneDetails from '../pages/PhoneDetails'
import Navbar from '../layout/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={PATHS.HOMEPAGE} element={<HomePage />} />
        <Route path={PATHS.PHONESPAGE} element={<PhonePage />} />
        <Route path={PATHS.PHONEDETAILS} element={<PhoneDetails />} />
      </Routes>
    </div>
  )
}

export default App
