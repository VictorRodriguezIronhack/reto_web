import Switch from 'react-bootstrap/esm/Switch'
import { Route } from 'react-router'
import Home from '../Home/Home'
import PhoneDetails from '../PhoneDetails/PhoneDetails'
import Phones from '../Phones/Phones'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home/> }/>
            <Route exact path="/telefonos" render={() => <Phones/> }/>
            <Route path="/telefonos/:id" render={(props) => <PhoneDetails {...props} />} />
        </Switch>
    )
}

export default Routes
