import { Switch, Route } from 'react-router-dom'
import MobileDetails from '../Details/SmartPhoneDetails'
import HomePage from '../HomePage/HomePage'



const Routes = (props) => {

    return (
        <Switch>
            <Route path='/' exact render={() => <HomePage />} />
            <Route path='/details/:phone_id' exact render={(props) => <MobileDetails {...props} />} />
        </Switch>
    )
}

export default Routes