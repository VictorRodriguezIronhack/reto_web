import { Switch, Route } from 'react-router-dom'
import PhoneList from '../pages/Phones/PhoneList'
import PhoneDetails from '../pages/Phones/PhoneDetails'
import Home from './../pages/Home/Home'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/telefonos" render={() => <PhoneList />} />
            <Route path="/detallestelefono/:id" render={props => <PhoneDetails {...props} />} />
        </Switch>

    )
}

export default Routes