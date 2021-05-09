import './App.css';
import PhoneList from './components/Phone/PhoneList';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/phones" component={PhoneList}/>
      </Switch>
    </Router>
  );
}

export default App;
