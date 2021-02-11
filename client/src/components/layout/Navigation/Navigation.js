import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

const mainNavigation = props => (
  <header className='main-navigation'>
    <div className='main-navigation__logo'>
      <h1>PhoneCave</h1>
    </div>

    <nav className='main-navigation__item'>
      <ul>
        <li><NavLink to='/auth'>Auth</NavLink></li>
        <li><NavLink to='/phones'>Phones</NavLink></li>
        <li><NavLink to='/purchase'>Shoop</NavLink></li>
      </ul>
    </nav>
  </header>
)


export default mainNavigation