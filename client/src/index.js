import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './components/app/App'

ReactDOM.render(
  <BrowserRouter>
    <div className="bg-gray-100 min-h-screen bg-[url('./images/phoneCave.jpg')] bg-cover">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
