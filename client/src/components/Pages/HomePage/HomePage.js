import React from 'react'
import logo from '../../../logo.svg';
import './HomePage.css'

export default function HomePage() {
    return (
        <div className='Home'>
            <div className="Home-header">
                <img src={logo} className="Home-logo" alt="logo" />
            </div>
        </div>
    )
}
