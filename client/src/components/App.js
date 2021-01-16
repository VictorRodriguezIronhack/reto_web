import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import PhoneList from './pages/Phones-list/Phones-list'
import PhoneDetails from './pages/Phone-details/Phone-details'


function App() {
  return (
   <Switch>
     <Route path='/telefonos' exact render={() => <PhoneList />} />
     <Route path='/telefonos/:phone_id' exact render={props => <PhoneDetails {...props}/>} />
    
   </Switch>
  )
}

export default App;
