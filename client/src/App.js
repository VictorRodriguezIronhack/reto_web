
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Phones from "../src/Components/Phones"
import './App.css';
import PhoneDetails from "./Components/PhonesDetails"


function App() {
  return (
  
    <main className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Phones/>}/>
        <Route path="/details/:id" exact element={<PhoneDetails  />}/>
      </Routes>
    </BrowserRouter>
    </main>
  
  );
}

export default App;
