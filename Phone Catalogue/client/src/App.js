import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import * as PATHS from "./utils/paths";
import PhonesPage from "./pages/PhonesPage";
import FeaturesPage from "./pages/FeaturesPage";
import NavbarComp from "./components/Navbar/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Route component={NavbarComp} />
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
        <Route exact path="/phones" component={PhonesPage} />
        <Route exact path="/features" component={FeaturesPage} />
      </Switch>
    </div>
  );
}

export default App;
