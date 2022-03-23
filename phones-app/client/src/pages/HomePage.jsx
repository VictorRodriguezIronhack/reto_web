import React from "react"
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "../App.css";

function HomePage() {
  const navigate=useNavigate()
  const goToPhones=()=>navigate("/phones")
  return (
    <div className="App">
      <h1>¿listo para encontrar el mejor teléfono?</h1>
    <Button variant="warning" onClick={goToPhones}> Estoy Listo
    </Button>
    </div>
  );
}

export default HomePage;
