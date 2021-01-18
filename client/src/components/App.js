import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import { Switch, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import PhoneList from './PhoneList/PhoneList'
import PhoneDetails from './PhoneDetails/PhoneDetails'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact render={() => <PhoneList />} />
          <Route path="/detalles/:phone_id" render={props => <PhoneDetails {...props}  />} />
         </Switch>
      </main>
  
      </>
  );
}

export default App;
