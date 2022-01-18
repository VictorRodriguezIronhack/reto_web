import logo from './logo.svg';
import './App.css';
import PhonePage from './components/pages/PhoneList/PhonePage';
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/Index/Home'


function App() {
  return (
    <>
    <main>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/telefonos" exact render={() => <PhonePage />} />
      </Switch>
    </main>
    </>
  );
}

export default App;
