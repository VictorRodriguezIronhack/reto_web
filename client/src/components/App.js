import './App.css'

import Routes from './routes/Routes'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'



const App = () => {

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

export default App