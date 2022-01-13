import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Phones from "./Phones";
import PhonesDetails from "./PhonesDetails"

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Phones />} />
          <Route path="/details/:id" element={<PhonesDetails />} />
        </Routes>
      </div>
  );
}

export default App;
