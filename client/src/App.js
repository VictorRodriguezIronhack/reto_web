import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './components/pages/Home';

function App() {

  return (
    <div className="app">
        {/* <Navbar/> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>

    </div>
  );
}

export default App;
