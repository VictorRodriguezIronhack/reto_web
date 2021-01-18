import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//COMPONENTS
import Navigation from './layout/Navigation'
import PhonesList from '../components/pages/PhonesList'
import PhoneDetails from '../components/pages/PhoneDetails'
import Cart from '../components/pages/Cart'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" component={PhonesList} ></Route>
            <Route exact path="/phone/:id" component={PhoneDetails} ></Route>
            <Route exact path="/cart" component={Cart} ></Route>
          </Switch>
        </main>
      </Router>


    </>
  );
}

export default App
