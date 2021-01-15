import { Route, Switch } from 'react-router-dom';
import './App.css';

import PhonesList from './pages/Phones-list';
import PhoneDetails from './pages/Phone-details'
import NewPhone from './pages/New-phone'

import Navigation from './shared/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact render={() => <PhonesList />} />
          <Route path="/new-phone" render={() => <NewPhone />} />
          <Route path="/details/:id" exact render={props => <PhoneDetails {...props}/>} />
        </Switch>
      </main>
    </>
  );
}

export default App;
