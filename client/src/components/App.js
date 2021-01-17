import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css'
import { Switch, Route } from 'react-router-dom'
import NavbarPage from './layout/Navigation/Navigation'
import PhoneList from './pages/Phones-list/Phones-list'
import PhoneDetails from './pages/Phone-details/Phone-details'
import PhoneForm from './pages/Phone-form/Phone-form'
import FooterPage from './layout/Footer/Footer'


function App() {
  return (
    <>
      <NavbarPage />
      <main>
        <Switch>
          <Route path="/" exact render={() => <PhoneList />} />
          <Route path="/new" exact render={() => <PhoneForm />} />
          <Route path="/phones/:phone_id" exact render={props => <PhoneDetails {...props} />} />
        </Switch>
      </main>
      <FooterPage />
    </>
  )
}

export default App;