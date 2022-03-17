import './App.css'
import { Routes, Route } from "react-router-dom"
import PhonesList from './pages/PhonesList/PhonesList.js'
import PhoneDetails from './pages/PhoneDetails/PhoneDetails.js'
import phonesData from "./phones.json"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhonesList phonesData={phonesData} />} />
      <Route path="/detalles/:id" element={<PhoneDetails phones={phonesData} />} />
    </Routes>
  )
}

export default App