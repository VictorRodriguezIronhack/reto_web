import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import * as PATHS from "./utils/paths";
import PhonesPage from "./pages/PhonesPage"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
        <Route exact path="/phones" component={PhonesPage} />
      </Switch>
    </div>
  );
}

export default App;
