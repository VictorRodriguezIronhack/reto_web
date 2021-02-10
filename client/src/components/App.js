import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from './pages/Auth'
import PhonesPage from './pages/Phones'
import PurchasePage from './pages/Purchase'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Redirect from='/' to='/auth' exact />
        <Route path='/auth' component={ AuthPage } />
        <Route path='/phones' component={ PhonesPage } />
        <Route path='/purchase' component={ PurchasePage } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
