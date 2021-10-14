import logo from "../logo.svg";
import "../App.css";
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="App">
      <h1> Telefonos test </h1>
      <Link to='/telefonos' > Ver telefonos</Link>
    </div>
  );
}

export default HomePage;
