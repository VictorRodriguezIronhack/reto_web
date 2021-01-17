import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navigation from '../layout/Navigation/Navigation'
import Footer from '../layout/Footer/Footer'
import Home from '../pages/Home/Home'
import PhoneDetails from '../pages/Phones/Details/Phone-details'

function App() {
  return (
    <>
      <Navigation />    
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/phones/:id" exact render={props => <PhoneDetails {...props}/>} />
        </Switch>
      </main>
      <Footer/>
    </>
  )
}

export default App;
