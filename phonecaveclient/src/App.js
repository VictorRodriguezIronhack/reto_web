import './App.css';
import Telephones from './components/Telephones';
const axios = require('axios');

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TelephoneDetails from './components/TelephoneDetails'
import { useEffect, useState } from "react"

function App() {

  const [telephones, setTelephones] = useState()
  const [telephoneDetails, setTelephoneDetails] = useState()

  useEffect(() => {
    axios.get("http://localhost:5005/api/telefonos")
      .then((res) => setTelephones(res.data))
  }, []);




  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/"
            element={<Telephones telephones={telephones} setTelephoneDetails={setTelephoneDetails}/>}>
        </Route>
        <Route path="/:id"
            element={<TelephoneDetails telephoneDetails={telephoneDetails}/>}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
