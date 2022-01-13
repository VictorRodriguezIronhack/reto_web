import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="app">
        {/* <Navbar/> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>

    </div>
  );
}

export default App;
