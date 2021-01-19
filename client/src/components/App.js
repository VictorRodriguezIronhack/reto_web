import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage/LandingPage'
import TelephoneDetails from './TelephoneDetails/TelephoneDetails'
import Navigation from './Layout/Navigation'

const App = () => {

  return (
    <>
      <Navigation />
      <main>
        <Switch>
          <Route path='/' exact render={() => <LandingPage />} />
          <Route path='/:phone_id' render={props => <TelephoneDetails {...props} />} />
        </Switch>
      </main>
    </>
  )
}

export default App;
