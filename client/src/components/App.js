import { Component } from 'react'
import Routes from './routes/Routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = { loggedUser: undefined }
  }

  render() {


    return (
      <>
        <Routes />
      </>
    )
  }
}

export default App