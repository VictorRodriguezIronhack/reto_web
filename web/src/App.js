import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthStore from './contexts/AuthStore';
/* import PrivateRoute from './guards/PrivateRoute'; */
import Home from './screens/Home';
import Phones from './screens/Phones'

function App() {
  return (
    <Router>
      <AuthStore>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/telefonos" component={Phones} />
        </Switch>
      </AuthStore>
    </Router>
  );
}

export default App;
