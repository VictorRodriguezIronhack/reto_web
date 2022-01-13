import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Error from './components/Error';
import Phones from './components/Phones';
import SinglePhone from './components/SinglePhone/SinglePhone';

function App() {
  return (
    <div className="App">
      <Link to="/phones/">Phones</Link>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/phones/" element={ <Phones />} />
        <Route exact path="/phones/:id" element={ <SinglePhone />} />
        <Route element={ <Error />} />
      </Routes>
    </div>
  );
}

export default App;
