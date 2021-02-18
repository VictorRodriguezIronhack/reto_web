import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import AuthContext from './context/auth-context'
import AuthPage from './pages/Auth'
import PhonesPage from './pages/Phones'
import PurchasePage from './pages/Purchase'
import MainNavigation from './layout/Navigation/Navigation'

import './App.css';

class App extends Component {
  state = {
    token: null,
    userId: null
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId, tokenExpiration: tokenExpiration})
   }
  
  logout = () => this.setState({ token: null, userId: null })

  render() {
    return (
      <BrowserRouter>
        
        <AuthContext.Provider
          value={{
            token: this.state.token,
            userId: this.state.userId,
            login: this.login,
            logout: this.logout
          }}>
          
          <MainNavigation />
  
          <main className='main-section'>
            <Switch>
              
              {!this.state.token && <Redirect from='/' to='/auth' exact />}
              {this.state.token && <Redirect from='/' to='/phones' exact />}
              {this.state.token && <Redirect from='/auth' to='/phones' exact />}

              {!this.state.token && <Route path='/auth' component={ AuthPage } />}
              <Route path='/phones' component={ PhonesPage } />
              {this.state.token && <Route path='/purchase' component={ PurchasePage } />}
  
            </Switch>
          </main>
  
        </AuthContext.Provider>
  
      </BrowserRouter>
    );
  }
}

export default App;
