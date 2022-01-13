import Telephones from "../Pages/Telephones/Telephones";
import { Switch, Route } from 'react-router-dom';
import TelephoneDetails from "../Pages/TelephoneDetails/TelephoneDetails";
import HomePage from "../Pages/HomePage/HomePage";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";

const Routes = () => {
    return (

        <Switch>
            <Route exact path='/' render={() => <HomePage />} />
            <Route exact path='/telefonos' render={(props) => <Telephones {...props} />} />
            <Route excat path='/detalles-telefono/:id' render={(props) => <TelephoneDetails {...props} />} />
            <Route exact path='/registro' render={(props) => <Signup {...props} />} />
            <Route exact path='/iniciar-sesion' render={(props) => <Login {...props} />} />
            <Route exact path='/perfil' render={(props) => <Profile {...props} />} />
        </Switch>
    )
}

export default Routes