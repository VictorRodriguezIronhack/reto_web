import React from 'react'
import { NavLink } from 'react-router-dom'

import AuthContext from '../../context/auth-context'
import './Navigation.css'

const mainNavigation = props => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <header className='main-navigation'>
          <div className='main-navigation__logo'>
            <h1>PhoneCave</h1>
          </div>

          <nav className='main-navigation__item'>
            <ul>
              {!context.token && <li><NavLink to='/auth'>Auth</NavLink></li>}
              <li><NavLink to='/phones'>Phones</NavLink></li>
              {context.token && <li><NavLink to='/purchase'>Shoop</NavLink></li>}
            </ul>
          </nav>
        </header>
      )
    }}

  </AuthContext.Consumer>
)


export default mainNavigation