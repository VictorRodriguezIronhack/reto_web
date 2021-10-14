import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhonesPage from "./pages/PhonesPage/PhonesPage";
import PhoneDetailsPage from "./pages/PhoneDetailsPage/PhoneDetailsPage";
import * as PATHS from "./utils/paths";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={PATHS.HOMEPAGE} render={() => <HomePage />} />
        <Route exact path={PATHS.PHONES_PAGE} render={() => <PhonesPage />} />
        <Route exact path={PATHS.PHONE_DETAILS} render={() => <PhoneDetailsPage />} />
      </Switch>
    </div>
  );
}

export default App;
