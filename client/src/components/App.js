import React from "react";
import PhonesList from "./PhonesList";
import {BrowserRouter, Route} from "react-router-dom";
import PhoneDetails from "./PhoneDetails";

function App() {
    return (
<BrowserRouter>
    <div>
        <h1>The phone catalogue App</h1>
        <Route path="/" exact component={PhonesList}/>
        <Route path="/selected" exact component={PhoneDetails}/>

    </div>
</BrowserRouter>

    );
}

export default App;
