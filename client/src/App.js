import "./App.css";
import { useEffect } from "react";
import PhonesService from "./services/PhonesService";
const phoneService = new PhonesService();

function App() {
  useEffect(() => {
    phoneService.getAllPhones().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <h2>telefonos</h2>
      <a href="/telefonos">telefonos</a>
    </div>
  );
}

export default App;
