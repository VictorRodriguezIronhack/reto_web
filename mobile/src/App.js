import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import { Component } from 'react';
import Routes from './components/routes/Routes';
import './App.css'

class App extends Component {
 

  render = () => {
    return (
      <>
        <Navbar/>
        <Routes />
        <Footer />
      </>
    );
  }
}

export default App;

