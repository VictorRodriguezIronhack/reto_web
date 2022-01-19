import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Moviles from "./components/Moviles";
import MovilesDetails from "./components/MovilesDetails"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Moviles />} />
          <Route path = "/details/:id" element = {<MovilesDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
