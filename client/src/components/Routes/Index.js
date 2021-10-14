import Telephones from "../Telephones/Telephones";
import { Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (

        <Switch>
            <Route exact path='/telefonos' render={(props) => <Telephones {...props} />} />
        </Switch>
    )
}

export default Routes