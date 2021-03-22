import { Component } from 'react'
import Routes from './routes/Routes'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'

class App extends Component {

  render() {

    return (
      <>
        <Navigation />
        <main>
          <Routes />
        </main>
        <Footer />
      </>
    )
  }
}


export default App;