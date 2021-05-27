import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import PhoneList from './pages/Phones-list/Phones-list'
import PhoneDetails from './pages/Phone-details/Phone-details'
import PhoneForm from './pages/Phone-form/Phone-form'
import Navigation from './layout/Navigation/Navigation'


function App() {
  return (
    <>
    <Navigation />
    <main>
   <Switch>
     <Route path='/telefonos' exact render={() => <PhoneList />} />
     <Route path='/telefonos/:phone_id' exact render={props => <PhoneDetails {...props}/>} />
     <Route path='/crear' render={() => <PhoneForm />} />
   </Switch>
   </main>
   </>
  )
}

export default App;
