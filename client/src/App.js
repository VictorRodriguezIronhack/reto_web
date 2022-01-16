import "./App.css";
import Navigationbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home/Home";
import Phone from "./pages/Phone/Phone";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phone/:id" element={<Phone />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
