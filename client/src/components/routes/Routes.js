import { Switch, Route } from 'react-router-dom'
import PhonesList from './../pages/Phone-List'
import PhoneDetails from './../pages/Phone-Details'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <PhonesList />} />
            <Route path="/details/:phoneId" exact render={props => <PhoneDetails {...props} />} />
        </Switch>
    )
}

export default Routes