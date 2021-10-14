import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Phones from '../components/Phones.js';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/telefonos' render={() => <Phones></Phones>}></Route >
        </Switch >
    )
}

export default Routes
