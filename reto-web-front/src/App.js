import './index.scss';
import {Switch, Route, Link} from "react-router-dom";
import PhoneList from './components/PhoneList';


function App() {
  return (
    <div className="App">
    
    <Link to="/telefonos">Lista</Link>
      <Switch>
      <Route
            path="/telefonos"
            exact
            component={() => <PhoneList />}
          />
      </Switch>

      
    </div>
  );
}

export default App;
