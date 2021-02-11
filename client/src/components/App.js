import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import AuthPage from './pages/Auth'
import PhonesPage from './pages/Phones'
import PurchasePage from './pages/Purchase'
import MainNavigation from './layout/Navigation/Navigation'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />

      <main className='main-section'>
        <Switch>
          
          <Redirect from='/' to='/auth' exact />
          <Route path='/auth' component={ AuthPage } />
          <Route path='/phones' component={ PhonesPage } />
          <Route path='/purchase' component={ PurchasePage } />

        </Switch>
      </main>

    </BrowserRouter>
  );
}

export default App;
