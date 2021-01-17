import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PhonesList from './Pages/PhonesList/phones.list'
import PhoneDetails from './Pages/PhoneDetails/phone.details'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
      <main>
      <Switch>
          <Route path="/" exact render={() => <PhonesList />} />
          <Route path="/phone/:id" render={props => <PhoneDetails {...props}/> }/>
      </Switch>
      </main>
    );
}
export default App;