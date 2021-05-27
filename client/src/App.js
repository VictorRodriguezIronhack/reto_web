import { Switch, Route } from 'react-router-dom';
import './App.css';
import PhoneList from './pages/PhoneList/PhoneList';
import PhoneDetails from './pages/PhoneDetails/PhoneDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PhoneList} />
        <Route exact path="/phone/:id" component={PhoneDetails} />
      </Switch>
    </div>
  );
}

export default App;
