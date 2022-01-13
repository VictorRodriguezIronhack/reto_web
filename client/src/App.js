import logo from './logo.svg';
import './App.css';
import PhonePage from './components/pages/PhoneList/PhonePage';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Index/Home'


function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/telefonos" exact render={() => <PhonePage />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
