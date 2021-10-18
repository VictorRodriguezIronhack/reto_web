import Telephones from "../Pages/Telephones/Telephones";
import { Switch, Route } from 'react-router-dom';
import TelephoneDetails from "../Pages/TelephoneDetails/TelephoneDetails";
import HomePage from "../Pages/HomePage/HomePage";

const Routes = () => {
    return (

        <Switch>
            <Route exact path='/' render={() => <HomePage />} />
            <Route exact path='/telefonos' render={(props) => <Telephones {...props} />} />
            <Route excat path='/detalles-telefono/:id' render={(props) => <TelephoneDetails {...props} />} />
        </Switch>
    )
}

export default Routes