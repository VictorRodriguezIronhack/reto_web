import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PhonePage from "../components/PhonePage/PhonePage";
import HomePage from "../pages/HomePage";
import * as PATHS from "../utils/paths";

class Routes extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path={PATHS.HOMEPAGE} component={HomePage} />
                    <Route exact path="/telefonos" render={(props) => <PhonePage {...props} />} />
                </Switch>
            </div>
        )
    }

}

export default Routes;