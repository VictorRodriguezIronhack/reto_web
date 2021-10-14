import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Phones from "./components/Phones/Phones";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home/> }/>
        <Route exact path="/telèfonos" render={() => <Phones/> }/>
        <Route path="/teléfono/:id" render={(props) => <PhoneDetails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
