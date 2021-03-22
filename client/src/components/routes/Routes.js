import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Phones from '../pages/Phones/Phones'
import PhoneDetails from '../pages/Phone-details/PhoneDetails'



const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/phones-list" render={() => <Phones />} />
            <Route path="/details/:phone_id" render={props => <PhoneDetails {...props} />} />
        </Switch>
    )
}


export default Routes