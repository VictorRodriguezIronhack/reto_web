import { Route, Switch } from 'react-router-dom';
import './App.css';

import PhonesList from './pages/phones/Phones-list';
import PhoneDetails from './pages/phones/Phone-details'
import NewPhone from './pages/phones/New-phone'


import Navigation from './shared/Navigation'
import AuthPage from './pages/auth/Auth-page';
import Footer from './shared/Footer'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact render={() => <PhonesList />} />
          <Route path="/login"  render={() => <AuthPage />} />
          <Route path="/new-phone" render={() => <NewPhone />} />
          <Route path="/details/:id" exact render={props => <PhoneDetails {...props}/>} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
