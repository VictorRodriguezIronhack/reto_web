import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './routes/AppRoutes';

import NavBar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';



function App() {
  return (
    <>

      <NavBar />

      <AppRoutes />

      {/* <Spinner /> */}

      <Footer />
    
    </>
  );
}

export default App;
