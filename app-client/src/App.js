import './App.css';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navbar/Navigation';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <AppRoutes />
      </div>
      <Footer />

    </>

  )
}

export default App;
