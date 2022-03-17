import './App.css';
import Telephones from './components/Telephones';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TelephoneDetails from './components/TelephoneDetails'

function App() {

  

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/"
          element={<Telephones />}>
        </Route>
        <Route path="/:id"
          element={<TelephoneDetails />}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
