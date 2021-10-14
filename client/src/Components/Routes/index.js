import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import Phones from '../Pages/Phones'
import PhonesDetails from '../Pages/PhonesDetails';


const Routes = () => {

    return (

        <Switch>
            <Route exact path='/' render={() => <Home></Home>}></Route>
            <Route exact path='/telefonos' render={() => <Phones></Phones>}></Route>
            <Route path='/detalles/:id' render={(props) => <PhonesDetails {...props} ></PhonesDetails>} />
        </Switch >
    )

}

export default Routes