import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css';
import Error from './screens/Error';
import Login from './screens/Login';
import Register from './screens/Register';
import AuthStore from './contexts/AuthStore';
import PrivateRoute from './guards/PrivateRoute';
import Navbar from './components/nav/Navbar';
import Home from './components/phones/PhonesList';
import PhonesList from './components/phones/PhonesList';
import PhoneDetail from './components/phones/PhonesDetail';


function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <AuthStore>
          <Navbar />
          <Switch>

            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/phones" component={PhonesList} />

            <Route exact path="/404" component={() => <Error code={404} />} />
            <Route exact path="/403" component={() => <Error code={403} />} />

            <Redirect to="/home" />

          </Switch>
        </AuthStore>
      </Router>
    </div>
  );
}

export default App;
