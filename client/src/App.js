import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import PhonesPage from "./pages/PhonesPage"
import PhoneDetailsPage from "./pages/PhoneDetailsPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telefonos" element={<PhonesPage />} />
        <Route path="/telefonos/:id" element={<PhoneDetailsPage />} />
      </Routes>
    </>
  )
}

export default App