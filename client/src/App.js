import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import PhoneDetails from './components/Phone-details';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/phone/:id" render={() => <PhoneDetails />} />
      </Switch>
    </div>
  );
}

export default App;
