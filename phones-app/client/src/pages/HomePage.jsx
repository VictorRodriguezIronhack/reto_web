import React from "react"
import {Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "../App.css";

function HomePage() {
  const navigate=useNavigate()
  const goToPhones=()=>navigate("/phones")
  return (
    <div className="App">
    <Button variant="warning" onClick={goToPhones}> Estoy Listo
    </Button>
    </div>
  );
}

export default HomePage;
