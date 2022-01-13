import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';

function App() {
  console.log("this is the home page")

  return (
    <div className="app">
      <h1>HOLA</h1>
        {/* <Navbar/> */}
        <Routes>
            <Route path="/telephones" element={<Home />} />
        </Routes>

    </div>
  );
}

export default App;
