import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CartStore from './contexts/CartStore';
import AuthStore from './contexts/AuthStore';
/* import PrivateRoute from './guards/PrivateRoute'; */
import Home from './screens/Home';
import Phones from './screens/Phones'
import Login from './screens/Login';
import Navbars from './components/nav/Navbars';
import PrivateRoute from './guards/PrivateRoute';
import Register from './screens/Register';
import ActivationAccount from './components/users/ActivationAccount';
import Details from './screens/Details';
import Profile from './screens/Profile';
import Footer from './components/footer/Footer';
import Cart from './screens/Cart';
import AuthCallback from './screens/AuthCallback';

function App() {
  return (
    <Router>
      <CartStore>
      <AuthStore>
        <Navbars/>
        <Switch>
          <Route exact path="/authenticate/google/cb" component={AuthCallback} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/activate" component={ActivationAccount} />
          <PrivateRoute exact path="/telefonos" component={Phones} />
          <PrivateRoute exact path="/telefonos/:id" component={Details} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/cart" component={Cart} />
        </Switch>
        <Footer/>
      </AuthStore>
      </CartStore>
    </Router>
  );
}

export default App;
