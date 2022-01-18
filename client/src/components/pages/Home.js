import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div className="container-home">
      <h1>
      THE PHONE CAVE
      </h1>
      <h2>Phonelist</h2>
      <button className="button-details">
       <Link to="/telefonos"><p>Catalogo de telefonos</p></Link>
      </button>
    </div>
  );
};

export default Home;