import PhonesList from './components/PhonesList/PhonesList'
import PhoneDetails from './components/PhoneDetails/PhoneDetails'
import { Routes, Route } from 'react-router-dom'
import phones from './phones.json'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/telefonos' element={<PhonesList thePhones={phones} />} />
        <Route path='/telefonos/:id' element={<PhoneDetails />} />
      </Routes>
    </div>

  )
}

export default App
